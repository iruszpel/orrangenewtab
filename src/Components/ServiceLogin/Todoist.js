import React, { Component } from 'react';
import todoistIcon from './../../icons/todoist.png'
import db from '../../db';
class TodoistBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
    }
    componentDidMount() {
        if (localStorage.getItem("todoist_auth") == 1) {
            this.setState({
                loggedIn: true
            })
        }
    }
    handleClick = () => {
        if (this.state.loggedIn) {
            if (window.confirm("Do you really want to disable integration with Todoist?") == true) {
                localStorage.removeItem("tokenTodoist");
                localStorage.removeItem("todoist_auth");    
                this.setState({
                    loggedIn: false
                })
                db.tasks.where("source").equals("todoist").delete();
            }
        } 
        else {
            let todoist_state = Math.random().toString(36).substring(2);
            window.chrome.identity.launchWebAuthFlow({
                url:  process.env.REACT_APP_TODOIST_AUTH_URL + todoist_state,
                interactive: true,
              }, (redirectURL) => {
                var todoistcode = redirectURL.match(/\&code=(.*)/)[1];
                fetch(`${process.env.REACT_APP_API_URL}/api/todoist`,
                  {
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({ "code": todoistcode })
                  })
                  .then((response) => {
                    return response.json();
                  }).then((data) => {
                    var authToken = JSON.parse(data).access_token;
                    localStorage.setItem("tokenTodoist", authToken);
                    localStorage.setItem("todoist_auth", "1");
                    this.setState({
                        loggedIn: true
                    })
      
                  })
                  .catch(function (data) { console.log(data) })
              });
        }
    }
    render() {
        return (
            <div className={(this.state && this.state.loggedIn) ? "chooseBox loggedIn" : "chooseBox"} onClick={this.handleClick} id="todoistbox">
                <img src={todoistIcon} id="todoist"></img>
                <p className="SmallChoose" style={{ marginTop: "0.6vh" }}>TODOIST</p>
            </div>

        );
    }
}
export default TodoistBox;