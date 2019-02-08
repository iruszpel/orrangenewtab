import React, { Component } from 'react';
import githubIcon from './../../icons/github.png'
import db from '../../db';
class GithubBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
    }
    componentDidMount() {
        if (localStorage.getItem("github_auth") == 1 && localStorage.getItem("tokenGithub")) {
            this.setState({
                loggedIn: true
            })
        }
    }
    handleClick = () => {
        if (this.state.loggedIn) {
            if (window.confirm("Do you really want to disable integration with GitHub?") == true) {
                localStorage.removeItem("tokenGithub");
                localStorage.removeItem("github_auth");
                this.setState({
                    loggedIn: false
                })
                db.tasks.where("source").equals("github").delete();
            }
        }
        else {
            window.chrome.identity.launchWebAuthFlow({
                url: process.env.REACT_APP_GITHUB_AUTH_URL,
                interactive: true,
            }, (redirectURL) => {
                var code = redirectURL.match(/\?code=(.*)/)[1];
                fetch(`${process.env.REACT_APP_API_URL}/api/github`,
                    {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        method: "POST",
                        body: JSON.stringify({ "code": code })
                    })
                    .then((response) => {
                        return response.json();
                    }).then((data) => {
                        let authToken = JSON.parse(data).access_token;
                        localStorage.setItem("tokenGithub", authToken);
                        localStorage.setItem("github_auth", "1");
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
            <div className={(this.state && this.state.loggedIn) ? "chooseBox loggedIn" : "chooseBox"} onClick={this.handleClick} id="githubbox">
                <img src={githubIcon} id="github"></img>
                <p className="SmallChoose" style={{ marginTop: "-1px" }}>GITHUB</p>
            </div>

        );
    }
}
export default GithubBox;