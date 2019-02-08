import React, { Component } from 'react';
import gmailIcon from './../../icons/Cornmanthe3rd-Plex-Communication-gmail.ico'
import db from '../../db';
class GmailBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loggedIn: false
        };
      }
    componentDidMount() {
        if (localStorage.getItem("gmail_auth") == 1) { 
            this.setState({
                loggedIn: true
            })
        }
    }
    handleClick = () => {
        if (this.state.loggedIn) {
            if (window.confirm("Do you really want to disable integration with Gmail? This will also turn off integration with Google Calendar and Google Tasks if they are also enabled.") == true) {
                if (localStorage.getItem("tokenGoogle")) {
                  window.chrome.identity.removeCachedAuthToken({ token: localStorage.getItem("tokenGoogle") }, function () {
                    //token was removed from cache
                  });
                }
                localStorage.removeItem("tokenGoogle");
                localStorage.removeItem("gmail_auth");
                localStorage.removeItem("calendar_auth");   
                this.setState({
                    loggedIn: false
                })
                db.mails.clear();
            }
        }
        else {
            if (localStorage.getItem("calendar_auth") == 1) {
                var scopes_gmail = [
                  "https://www.googleapis.com/auth/gmail.modify", "https://www.googleapis.com/auth/calendar", "https://www.googleapis.com/auth/tasks"
                ]
              }
              else {
                var scopes_gmail = [
                  "https://www.googleapis.com/auth/gmail.modify"
                ]
              }
              window.chrome.identity.getAuthToken({ 'interactive': true, 'scopes': scopes_gmail }, (token) => {
                if (window.chrome.runtime.lastError) {
                  console.log(window.chrome.runtime.lastError);
                  return;
                }
                localStorage.setItem("tokenGoogle", token);
                localStorage.setItem("gmail_auth", 1);
                this.setState({
                    loggedIn: true
                })
              });
        }
    }
    render() {
        return (
            <div className={(this.state && this.state.loggedIn) ? "chooseBox loggedIn" : "chooseBox"} onClick={this.handleClick} id="gmailbox">
                <img src={gmailIcon} id="gmail"></img>
                <p className="SmallChoose">GMAIL</p>
            </div>

        );
    }
}
export default GmailBox;