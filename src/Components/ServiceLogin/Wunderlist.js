import React, { Component } from 'react';
import wunderlistIcon from './../../icons/wunderlist.png'
import db from '../../db';
class WunderlistBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loggedIn: false
        };
      }
    componentDidMount() {
        if (localStorage.getItem("wunderlist_auth")) {
            if (localStorage.getItem("wunderlist_auth") == 1) {
                this.setState({
                    loggedIn: true
                })
            }
        }
    }
    handleClick = () => {
        if (!this.state.loggedIn) {
            let state = Math.random().toString(36).substring(2);
            window.chrome.identity.launchWebAuthFlow({
                url: process.env.REACT_APP_WUNDERLIST_AUTH_URL + state,
                interactive: true,
            }, (redirectURL) => {
                var wunderlistcode = redirectURL.match(/\&code=(.*)/)[1];
                fetch(`${process.env.REACT_APP_API_URL}/api/wunderlist`,
                    {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        method: "POST",
                        body: JSON.stringify({ "code": wunderlistcode })
                    })
                    .then((response) => {
                        return response.json();
                    }).then((data) => {
                        var authToken = JSON.parse(data).access_token;
                        if (authToken != undefined) {
                            localStorage.setItem("tokenWunderlist", authToken);
                            localStorage.setItem("wunderlist_auth", "1");
                            this.setState({
                                loggedIn: true
                            })
                        }
                        else {
                            alert("Wunderlist server responded with blank authentication token.")
                        }
                    })
                    .catch(function (data) { console.log(data) })
            });
        }
        else {
            if (window.confirm("Do you really want to disable integration with Wunderlist?") == true) {
                localStorage.removeItem("tokenWunderlist");
                localStorage.removeItem("wunderlist_auth");
                this.setState({
                    loggedIn:false
                });
                db.tasks.where("source").equals("wunderlist").delete();
            }
        }
    }
    render() {
        return (
            <div className={(this.state && this.state.loggedIn) ? "chooseBox loggedIn" : "chooseBox"} id="wunderlistbox" onClick={this.handleClick}>
                <img src={wunderlistIcon} id="wunderlist"></img>
                <p className="SmallChoose" style={{ marginTop: "-1px" }}>WUNDERLIST</p>
            </div>

        );
    }
}
export default WunderlistBox;