import React, { Component } from 'react';
import trelloIcon from './../../icons/trello.png'
import db from '../../db';
class TrelloBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
    }
    componentDidMount() {
        if (localStorage.getItem("trello_auth") == 1) {
            this.setState({
                loggedIn: true
            })
        }
    }
    handleClick = () => {
        if (this.state.loggedIn) {
            if (window.confirm("Do you really want to disable integration with Trello?") == true) {
                localStorage.removeItem("tokenTrello");
                localStorage.removeItem("trello_auth");
                this.setState({
                    loggedIn: false
                })
                db.tasks.where("source").equals("trello").delete();
            }
        }
        else {
            window.chrome.identity.launchWebAuthFlow({
                url: process.env.REACT_APP_TRELLO_AUTH_URL,
                interactive: true,
              }, redirectURL => {
                var trello_token = redirectURL.match(/\#token=(.*)/)[1];
                localStorage.setItem("tokenTrello", trello_token);
                localStorage.setItem("trello_auth", "1");
                //window.Trello.setToken(trello_token);
                this.setState({
                    loggedIn: true
                })
                db.tasks.where("source").equals("trello").delete();
              });
        }
    }
    render() {
        return (
            <div className={(this.state && this.state.loggedIn) ? "chooseBox loggedIn" : "chooseBox"} onClick={this.handleClick} id="trellobox">
                <img src={trelloIcon} id="trello"></img>
                <p className="SmallChoose" style={{ marginTop: "0.6vh" }}>TRELLO</p>
            </div>


        );
    }
}
export default TrelloBox;