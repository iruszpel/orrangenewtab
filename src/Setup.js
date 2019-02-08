/*global chrome*/
import React, { Component } from 'react';
import './css/Setup.css';
import defaultBackgroundImage from './img/oleg-chursin-216430.jpg.webp'
import WunderlistBox from './Components/ServiceLogin/Wunderlist'
import TrelloBox from './Components/ServiceLogin/Trello';
import TodoistBox from './Components/ServiceLogin/Todoist';
import PocketBox from './Components/ServiceLogin/Pocket'
import AsanaBox from './Components/ServiceLogin/Asana'
import GmailBox from './Components/ServiceLogin/Gmail';
import GcalTasksBox from './Components/ServiceLogin/GcalTasks';
import GithubBox from './Components/ServiceLogin/Github';
import InputBoxReactive from './Components/Additional/InputBoxReactive';

//import { Transition } from 'react-transition-group';
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

    //make sure to serialize your JSON body
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
class Setup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInputValue: '',
      currentImage: localStorage.getItem('lastImage')
    };
  }


  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown, false);
    //Update background image list or use the already existing one.
    if (localStorage.getItem("name")) {
      var disp_image;
      this.setState({
        navVisible: true
      })
      if (window.readCookie("disp_image") == null || !localStorage.getItem('lastImage')) {
        this.getListOfImagesAndUpdate();
      }


    }
    else {
      this.setState({
        currentImage: defaultBackgroundImage
      })
      window.writeCookie("first_run", 1, 2)
    }

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
    //This looks weird but actually is faster than chrome cache for caching images
    this.downloadImage(`${process.env.REACT_APP_BACKGROUND_IMAGE_URL}/images/${filename}`, base64image => {
      this.setState({ currentImage: base64image })
      localStorage.setItem("lastImage", base64image);
    })

  }
  downloadImage = (url, callback) => {
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
  handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      if (this.state.navVisible) {
        this.openNormal();
      }
      else {
        this.openNav();

      }
    }
  }
  updateNameInputValue = (evt) => {
    this.setState({
      nameInputValue: evt.target.value
    });
  }
  openNav = () => {


    //Let the name input fade out before deleting it from DOM
    this.setState({
      //This will change the name of the class in name input div to one with the fading animation
      fadeOutName: true
    })

    setTimeout(() => {
      this.setState({
        navVisible: true
      })
    }, 500)
    localStorage.setItem("name", this.state.nameInputValue);
    //Download list of images and download image which will be used ones the setup is done
    callApi(`${process.env.REACT_APP_BACKGROUND_IMAGE_URL}/list.json`, "GET")
      .then(data => {
        localStorage.setItem("availableImages", JSON.stringify(data));
        let filename = data[Math.floor((Math.random() * data.length) + 0)];
        window.writeCookie("disp_image", filename, 4);
        this.downloadImage(`${process.env.REACT_APP_BACKGROUND_IMAGE_URL}/images/${filename}`, base64image => {
          localStorage.setItem("lastImage", base64image);
        })
      })


  }
  openNormal = () => {
    window.location.href = "index.html";
    window.chrome.runtime.sendMessage({ message: 'update_all_tasks' })
    if (window.readCookie("first_run") == 1) {
      localStorage.setItem('taskService', 'localstorage');
      localStorage.setItem("backgroundChangeTime", 4);
      localStorage.setItem("temperatureUnit", 'C');
    }
  }
  render() {
    return (
      <div className="Setup" style={{ transition: "background-image .5s ease-in-out", backgroundImage: "url('" + this.state.currentImage + "')" }}>
        {!this.state.navVisible &&
          <div className={this.state.fadeOutName ? "SetupText fade" : "SetupText"}>
            <p className="Big">Complete the setup</p>

            <div className="Small">Your name: <InputBoxReactive type="text" value={this.state.nameInputValue} onChange={evt => this.updateNameInputValue(evt)} title="Name" id="name" required /></div>
            {/*<p id="small">Your e-mail address <span id="small_span">(optional)</span> : <input type="text" className="data_input" id="mail"></p>*/}
            <p><button onClick={this.openNav} type="button" id="nextbutton" className="btn">Next</button></p>
          </div>
        }
        {this.state.navVisible &&
          <div className="Select">
            <p className="Big">Choose which services you want to use with Orrange New Tab</p>
            <div className="all">
              <div className="Boxes1">
                <GmailBox />
                <GithubBox />
                <WunderlistBox />
                <GcalTasksBox />

              </div>
              <div className="Boxes2">
                <TrelloBox />
                <TodoistBox />
                <PocketBox />
                <AsanaBox />
              </div>
              <p><button id="finishbutton" type="button" onClick={this.openNormal} className="btn">Finish</button></p>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Setup;
