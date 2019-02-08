import React, { Component } from 'react';
import pocketIcon from './../../icons/pocket.svg'
class PocketBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
    }
    componentDidMount() {
        if (localStorage.getItem("tokenPocket") != undefined) {
            this.setState({
                loggedIn: true
            })
        }
        //Before user can authenticate with Pocket we need to get a request token
        if (window.readCookie("requestTokenPocket") == undefined && localStorage.getItem("tokenPocket") == undefined) {
            fetch(`${process.env.REACT_APP_API_URL}/api/pocket`,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({ "type": "getRequestToken" })
                })
                .then((response) => {
                    return response.json();
                }).then((res) => { window.writeCookie("requestTokenPocket", res.code, 1); })
                .catch((res) => { console.log(res) })
        }

    }
    handleClick = () => {
        if (this.state.loggedIn) {
            if (window.confirm("Do you really want to disable integration with Pocket?") == true) {
                localStorage.removeItem("tokenPocket");
                this.setState({
                    loggedIn: false
                })
            }
        }
        else {
            window.chrome.identity.launchWebAuthFlow({
                url: `${process.env.REACT_APP_POCKET_AUTH_URL}${window.readCookie("requestTokenPocket")}&redirect_uri=${process.env.REACT_APP_EXTENSION_REDIRECT_URL}`,
                interactive: true,
            }, (redirectURL) => {
                fetch(`${process.env.REACT_APP_API_URL}/api/pocket`,
                    {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        method: "POST",
                        body: JSON.stringify({ "type": "getAccessToken", "request_token": window.readCookie("requestTokenPocket") })
                    })
                    .then(function (response) {
                        return response.json();
                    }).then((res) => {
                        localStorage.setItem("tokenPocket", res.access_token);
                        //request token is no longer valid, if the user will try to authenticate again with the same token it will produce an error
                        window.writeCookie("requestTokenPocket", 0, -1000);
                        this.setState({
                            loggedIn: true
                        })
                    })
                    .catch((res) => { console.log(res) })
            });
        }
    }
    render() {
        return (
            <div className={(this.state && this.state.loggedIn) ? "chooseBox loggedIn" : "chooseBox"} onClick={this.handleClick} id="pocketbox">
                <img src={pocketIcon} id="pocket"></img>
                <p className="SmallChoose" style={{ marginTop: "-1px" }}>POCKET</p>
            </div>


        );
    }
}
export default PocketBox;