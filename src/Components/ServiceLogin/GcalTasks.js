import React, { Component } from 'react';
import gcalIcon from './../../icons/google_calendar.png'
import db from '../../db';
class GcalTasksBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
    }
    componentDidMount() {
        if (localStorage.getItem("calendar_auth") == 1) {
            this.setState({
                loggedIn: true
            })
        }
    }
    handleClick = () => {
        if (this.state.loggedIn) {
            if (window.confirm("Do you really want to disable integration with Google Calendar and Google Tasks? This will also turn off integration with Gmail if it is enabled.") == true) {
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
                db.tasks.where("source").anyOf("googlecalendar", "googletasks").delete();
            }
        }
        else {
            if (localStorage.getItem("gmail_auth") == 1) {
                var scopes_calendar = [
                    "https://www.googleapis.com/auth/gmail.modify", "https://www.googleapis.com/auth/calendar", "https://www.googleapis.com/auth/tasks"
                ]
            }
            else {
                var scopes_calendar = [
                    "https://www.googleapis.com/auth/calendar", "https://www.googleapis.com/auth/tasks"
                ]
            }
            window.chrome.identity.getAuthToken({ 'interactive': true, "scopes": scopes_calendar }, (token) => {
                if (window.chrome.runtime.lastError) {
                    console.log(window.chrome.runtime.lastError);
                    return;
                }
                localStorage.setItem("tokenGoogle", token);
                localStorage.setItem("calendar_auth", 1);
                this.setState({
                    loggedIn: true
                })
            });
        }
    }
    render() {
        return (
            <div className={(this.state && this.state.loggedIn) ? "chooseBox loggedIn" : "chooseBox"} onClick={this.handleClick} id="calendarbox" >
                <img src={gcalIcon} id="googlecalendar"></img>
                <p className="SmallChoose">GOOGLE CALENDAR + TASKS</p>
            </div>

        );
    }
}
export default GcalTasksBox;