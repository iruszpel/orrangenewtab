import React, { Component } from 'react';
import asanaIcon from './../../icons/asana-logo.png'
import db from '../../db';
class AsanaBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
    }
    componentDidMount() {
        if (localStorage.getItem("asana_auth") == 1 && localStorage.getItem("tokenAsana") != "undefined") {
            this.setState({
                loggedIn: true
            })
        }
    }
    handleClick = () => {
        if (this.state.loggedIn) {
            if (window.confirm("Do you really want to disable integration with Asana?") == true) {
                localStorage.removeItem("tokenAsana");
                localStorage.removeItem("asana_auth");
                localStorage.removeItem("asana_should_auth");  
                this.setState({
                    loggedIn: false
                })
                db.tasks.where("source").equals("asana").delete();
            }
        }
        else {
            let asana_state = Math.random().toString(36).substring(2);
            window.chrome.identity.launchWebAuthFlow({
                url: `${process.env.REACT_APP_ASANA_AUTH_URL}&redirect_uri=${process.env.REACT_APP_EXTENSION_REDIRECT_URL}&state=${asana_state}`,
                interactive: true,
            }, (redirectURL) => {
                var code = redirectURL.match(/(\?|\&)([^=]+)\=([^&]+)/)[3];

                fetch(`${process.env.REACT_APP_API_URL}/api/asana`,
                    {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        method: "POST",
                        body: JSON.stringify({ "type": "getaccessToken", "code": code })
                    })
                    .then((response) => {
                        return response.json();
                    }).then((data) => {
                        var authToken = data.access_token;
                        var refreshToken = data.refresh_token;
                        localStorage.setItem("tokenAsana", authToken);
                        localStorage.setItem("asana_auth", "1");
                        localStorage.setItem("asana_should_auth", "1");
                        localStorage.setItem("refreshTokenAsana", refreshToken);
                        window.writeCookie("asananotexpired", "1", 1)
                        window.writeCookie("asanaClicked", 0, -1000);
                        this.setState({
                            loggedIn: true
                        })


                    })
                    .catch((data) => { console.log(data) })

            });
        }
    }
    render() {
        return (
            <div className={(this.state && this.state.loggedIn) ? "chooseBox loggedIn" : "chooseBox"} onClick={this.handleClick} id="asanabox">
                <img src={asanaIcon} id="asana"></img>
                <p className="SmallChoose" style={{ marginTop: "-1px" }}>ASANA</p>
            </div>
        );
    }
}
export default AsanaBox;