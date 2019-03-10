import React, { Component } from 'react';
import './css/Main.css';
import settingsIcon from './icons/settings_icon.svg'
import Weather from './Components/Additional/Weather';
import Clock from './Components/Additional/Clock';
import SavedArticles from './Components/Additional/SavedArticles';
import TodoList from './Components/Additional/TodoList';
import Mail from './Components/Additional/Mail';
import Settings from './Components/Additional/Settings';
import db from './db';
const callApi = async (url, method, body, jsonCall) => {
    var head = {};
    if (jsonCall) {
        head = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    const response = await fetch(url, {
        method: method,
        credentials: "same-origin",
        headers: head,
        body: body
    });
    const respbody = await response.json();


    if (response.status !== 200) throw Error(respbody.message);

    return respbody;
};

window.readCookie = (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

window.writeCookie = (name, value, hours) => {
    if (hours) {
        var date = new Date();
        date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else {
        var expires = "";
    }

    document.cookie = name + "=" + value + expires + "; path=/";
};

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskInputValue: '',
            userName: '',
            currentDay: '',
            tempUnits: localStorage.getItem("temperatureUnit") || 'C',
            settingsOpen: false,
            tempBackground: true,
            currentImage: localStorage.getItem("lastImage") || 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=',
            helpHidden: localStorage.getItem('helpClosed')
        };
    }


    componentWillUnmount() {
    }
    componentDidMount() {
        //Migration to newer version
        if (localStorage.getItem('todoTasks') || localStorage.getItem('calendarEvents')) {
            let tasks = JSON.parse(localStorage.getItem('todoTasks'));
            
            for (let task of tasks) {
                //Moving only tasks from local storage because any other will be updated from connected services
                if (task.source == 'tab') {
                    db.tasks.put({
                        id: task.id,
                        source: 'localstorage',
                        title: task.title,
                        date: new Date(task.date).getTime(),
                        list_id: "tab"
                    })
                }
            }
            localStorage.removeItem('todoTasks');
            localStorage.removeItem('tabtodoTasks');
            localStorage.removeItem('mails');
            localStorage.removeItem('calendarEvents');
        }
        if (!localStorage.getItem('name')) {
            //If user has not entered his name
            window.location.replace('#/setup')
            return;
        }
        if (window.readCookie("disp_image") == null || !localStorage.getItem('lastImage')) {
            //Bavkground image has expired or was never set
            this.getListOfImagesAndUpdate();
        }
        this.currentPosition(); //Used for weather
        this.currentDay(); //Used in "Have a nice ..." text
    }
    getListOfImagesAndUpdate = () => {
        var disp_image;
        callApi(`${process.env.REACT_APP_BACKGROUND_IMAGE_URL}/list.json`, "GET")
            .then(data => {
                localStorage.setItem("availableImages", JSON.stringify(data));
                disp_image = data[Math.floor((Math.random() * data.length) + 0)];
                this.setBackground(disp_image);
                if (localStorage.getItem("backgroundChangeTime")) {
                    window.writeCookie("disp_image", disp_image, Number(localStorage.getItem("backgroundChangeTime")));

                }
                else {
                    localStorage.setItem("backgroundChangeTime", 4)
                    window.writeCookie("disp_image", disp_image, 4);
                }
            }
            )
            .catch(err => console.log(err));
    }

    setBackground = filename => {
        //Download image, convert to base64 and write to localStorage
        //This looks weird but actually is faster than chrome cache for caching images
        //And lastImage will remain saved forever even if it is deleted on a server
        this.downloadImage(`${process.env.REACT_APP_BACKGROUND_IMAGE_URL}/images/${filename}`, base64image => {
            this.setState({ currentImage: base64image })
            localStorage.setItem("lastImage", base64image);
        })

    }

    downloadImage = (url, callback) => {
        //Based on https://stackoverflow.com/a/20285053
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
            if (xhr.status == 404) {
                if (window.navigator.onLine) {
                    this.getListOfImagesAndUpdate();
                    return;
                }
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                callback(reader.result);
            }
            reader.readAsDataURL(xhr.response);
        };
        xhr.onerror = () => {
            if (window.navigator.onLine) {
                this.getListOfImagesAndUpdate();
                return;
            }
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    }


    currentDay = () => {
        let day;
        switch (new Date().getDay()) {
            case 0:
                day = "Sunday";
                break;
            case 1:
                day = "Monday";
                break;
            case 2:
                day = "Tuesday";
                break;
            case 3:
                day = "Wednesday";
                break;
            case 4:
                day = "Thursday";
                break;
            case 5:
                day = "Friday";
                break;
            case 6:
                day = "Saturday";
        }
        this.setState({
            currentDay: day,
            userName: localStorage.getItem("name")
        })
    }
    currentPosition = () => {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
        });
    }
    handleMailOpen = () => {
        this.setState({
            mailBoxOpen: true
        })
    }

    updateTaskInputValue = (evt) => {
        this.setState({
            taskInputValue: evt.target.value
        });
    }
    handleOpenSettings = () => {
        this.setState({
            settingsOpen: true
        })
    }
    handleClickOutsideSettings = () => {
        this.setState({
            settingsOpen: false
        })
    }
    closeHelp = (e) => {
        this.setState({
            helpHidden: true
        })
        localStorage.setItem("helpClosed", true)
    }
    render() {
        return (
            <div className="Main">
                <div className="BackgroundImage" style={{ backgroundImage: `url("${this.state.currentImage}")` }}></div>
                <img id="settings" src={settingsIcon} name="settings" onClick={this.handleOpenSettings} />
                <p id="greetingText">Have a nice {this.state.currentDay}, {this.state.userName}</p>
                <TodoList />
                <div id="clock"><Clock /></div>
                {(this.state.longitude && this.state.latitude) &&
                    <div id="weather"><Weather unit={this.state.tempUnits} lat={this.state.latitude} lon={this.state.longitude} appid={process.env.REACT_APP_OWM_APPID} /></div>
                }
                <div id="calendarevent"></div>
                <Mail />
                <span id="calendicon"></span>
                <SavedArticles />
                {this.state.settingsOpen &&
                    <Settings
                        handleClickOutside={this.handleClickOutsideSettings}
                        setBackground={this.setBackground}
                    />
                }
                {!this.state.helpHidden &&
                     <div className="HelpNeeded">
                        <p className="HelpHead">Help Needed!</p>
                        <p className="HelpContent">Hey there! I just wanted to let you know that recently I've open-sourced this extension. 
                        I don't have a lot of time to work on it, therefore, any help is more than welcome. 
                        If you know anything about React/JavaScript please consider checking out the <a href="https://github.com/lopogo59/orrangenewtab">source code on Github</a></p>
                        <span onClick={this.closeHelp} className="CloseHelp">✕</span>
                     </div>
                }
            </div>
        );
    }
}

export default Main;