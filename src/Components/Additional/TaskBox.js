import React, { Component } from 'react';
import './css/TaskBox.css';
import './css/DateTimeInput.css'
import asanaIcon from './../../icons/asana.webp'
import todoistIcon from './../../icons/todoist.webp'
import wunderlistIcon from './../../icons/wunderlist.webp'
import githubIcon from './../../icons/github.webp'
import gtasksIcon from './../../icons/google-tasks.webp'
import gcalIcon from './../../icons/google_calendar.webp'
import trelloIcon from './../../icons/trello.webp'
import localstorageIcon from './../../icons/localstorage.svg'
import moment from 'moment'
import db from '../../db';

class TaskBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            date: this.props.date == Infinity ? false : this.props.date,
            isHiddenDatePicker: true,
            list_id: this.props.list_id,
            revision: this.props.revision,
            uppercaseSource: this.props.source != "googlecalendar" ? this.props.source[0].toUpperCase() + this.props.source.slice(1) : "Google Calendar"
        };
    }
    componentDidMount() {
        var sourceIcon;
        switch (this.props.source) {
            case "wunderlist":
                sourceIcon = wunderlistIcon;
                break;
            case "todoist":
                sourceIcon = todoistIcon;
                break;
            case "googletasks":
                sourceIcon = gtasksIcon;
                break;
            case "googlecalendar":
                sourceIcon = gcalIcon;
                break;
            case "asana":
                sourceIcon = asanaIcon;
                break;
            case "trello":
                sourceIcon = trelloIcon
                break;
            case "github":
                sourceIcon = githubIcon
            default:
                sourceIcon = localstorageIcon
                break;
        }
        this.setState({
            sourceIcon: sourceIcon
        })

    }
    handleDateClick = () => {
        //We have to render calendar outside of TaskBox
        //because we don't want it to overlap on the rest of the tasks
        //and it is not possible to set overflow-x:visible and oveflow-y:scroll without doing a little messy CSS tricks
        this.props.openCalendar(this.state.date, this.handleDateChange);
    }
    handleDateChange = date => {
        //Update the state
        this.setState({
            date: date
        })
        //Update the database
        db.tasks.update(this.props.id, { date: date.getTime() })
        if (this.props.source === "localstorage") return;
        date = date.toISOString(); // When sending chrome runtime message we can't pass objects so date has to be converted to string

        window.chrome.runtime.sendMessage({ component: this.props.source, type: "update_date", id: this.props.id, list_id: this.state.list_id, revision: this.state.revision, date: date })
        if (this.state.revision) {
            this.setState({
                revision: this.state.revision + 1
            })
        }

    }
    handleMarkComplete = () => {
        //Update the database
        db.tasks.delete(this.props.id)
        //Call for an update in the parent
        this.props.updateTasks();
        if (this.props.source === "localstorage") return;
        //We have to send date even when changing title otherwise Google Calendar API will return
        //error "Missing end time."
        window.chrome.runtime.sendMessage({ component: this.props.source, type: "mark_complete", id: this.props.id, list_id: this.state.list_id, revision: this.state.revision, date: new Date(this.state.date).toISOString() })
        if (this.state.revision) {
            this.setState({
                revision: this.state.revision + 1
            })
        }

    }
    handleTitleChange = (title) => {
        db.tasks.update(this.props.id, { title: title })
        if (this.props.source === "localstorage") return;
        //We have to send date even when changing title otherwise Google Calendar API will return
        //error "Missing end time."
        window.chrome.runtime.sendMessage({ component: this.props.source, type: "update_title", id: this.props.id, list_id: this.state.list_id, revision: this.state.revision, title: title, date: new Date(this.state.date).toISOString() })
        if (this.state.revision) {
            this.setState({
                revision: this.state.revision + 1
            })
        }

    }
    handleInputChange = (input) => {
        this.setState({
            title: input.target.value
        })
        //Clear timeout so it doesn't run every time user types a letter
        clearTimeout(this.timeoutTimer);
        //Send request to server 1 second after user stopped typing
        this.timeoutTimer = setTimeout(() => {
            this.handleTitleChange(this.state.title)
        }, 1000);
    }

    render() {
        return (
            <li className={this.props.source} id={this.props.id}>
                <input className="taskTitle" onChange={this.handleInputChange} spellCheck={false} value={this.state.title} title={this.state.title}></input>
                <span
                    className={(!this.state.date || moment(new Date()).isBefore(this.state.date)) ? "dateSpan" : "dateSpan overdueTask"}
                    onClick={this.handleDateClick}>{this.state.date ? moment(this.state.date).fromNow() : 'Set date'}
                </span>
                <img className="taskSourceIcon"
                    src={this.state.sourceIcon}
                    alt={`This task was added from ${this.state.uppercaseSource}`}
                    title={`This task was added from ${this.state.uppercaseSource}`} >
                </img>
                < i title="Mark as complete" onClick={this.handleMarkComplete} className="material-icons markCompleteButton">done</i>

            </li>
        );
    }
}

export default TaskBox;

