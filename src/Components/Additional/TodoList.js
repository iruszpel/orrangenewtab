import React, { Component } from 'react';
import './css/TodoList.css';
import calendarIcon from './../../icons/calendar.svg'
import TaskBox from './TaskBox'
import db from './../../db';
import DateTimePicker from 'react-date-and-time-picker';
import onClickOutside from "react-onclickoutside";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            inputValue: '',
            isHiddenDatePicker: true,
            isHiddenDatePickerAddTask: true
        };
    }

    componentDidMount() {
        db.tasks
            .orderBy('date')
            .toArray()
            .then((tasks) => {
                this.setState({ tasks: tasks });
            });
        window.chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
            if (request.type == "new_task") {
                if (!request.body.date) request.body.date = Infinity;
                //Chrome sendMessage somehow can't send Infinity and instead sends null
                //so we have to convert null to Infinity here
                this.addTask(request.body)
            }
        })

    }
    onInput = (evt) => {
        this.setState({
            inputValue: evt.target.value
        })
    }
    handleKeyPress = (evt) => {
        if (evt.key == 'Enter') {
            this.sendRequestAddTask();
        }
    }
    sendRequestAddTask = () => {
        this.setState({
            inputValue: ''
        })
        //Save only in local database if no service is specified or local storage is specified 
        if (localStorage.getItem('taskService') === "localstorage") {
            this.addTask({
                title: this.state.inputValue,
                date: this.state.calendarDateAddTask ? this.state.calendarDateAddTask.toISOString() : Infinity,
                list_id: "local",
                id: Math.random().toString(36).substring(2),
                source: "localstorage"
            });
            return;
        }
        window.chrome.runtime.sendMessage({
            body: {
                title: this.state.inputValue,
                date: this.state.calendarDateAddTask ? this.state.calendarDateAddTask.toISOString() : undefined,
                list_id: localStorage.getItem('tasklistID')
            },
            component: localStorage.getItem('taskService'),
            type: "add_task",
        })

    }
    updateTasks = () => {
        db.tasks
            .orderBy('date')
            .toArray()
            .then((tasks) => {
                this.setState({ tasks: tasks });
            });
    }
    addTask = (task) => {
        db.tasks.put(task).then(() => {
            this.updateTasks();
        })

    }
    handleOpenCalendar = (date, callback) => {
        //Set the callback function from TaskBox module for date change
        this.setState({
            isHiddenDatePicker: false,
            calendarCallback: callback,
            calendarDate: date
        })
    }
    handleOpenCalendarAddTask = () => {
        this.setState({
            isHiddenDatePickerAddTask: false,
        })
    }
    handleDateChange = (date) => {
        //Update date state and make a callback
        this.setState({
            calendarDate: date
        })
        this.state.calendarCallback(date);
    }
    handleDateChangeAddTask = (date) => {
        this.setState({
            calendarDateAddTask: date
        })
    }
    handleClickOutside = evt => {
        this.setState({
            isHiddenDatePicker: true,
            isHiddenDatePickerAddTask: true
        })
    };
    render() {
        return (
            <div id="todolist">
                <div className="header">
                    <input type="text" id="TitleInput" onKeyPress={this.handleKeyPress} value={this.state.inputValue} onChange={this.onInput} placeholder="Title..." /> <span>
                        <input type="image" onClick={this.handleOpenCalendarAddTask} placeholder="Date..." id="datepicker" src={calendarIcon} readOnly />
                        {!this.state.isHiddenDatePickerAddTask &&
                            <div className="wrapperDateAddTask">
                                <DateTimePicker
                                    date={this.state.calendarDateAddTask ? this.state.calendarDateAddTask : new Date()}
                                    onChange={this.handleDateChangeAddTask}
                                />
                            </div>
                        }
                    </span>
                    <button onClick={this.sendRequestAddTask} className="addBtn">+</button>
                </div>
                {(this.state.tasks && this.state.tasks.length === 0) &&
                    <div className="noTasksBanner">
                        <p>Currently you don't have any tasks on your list</p>
                        <p>Add some tasks or <a href="#/setup">integrate your To-Do list with other
 services</a>
                        </p>
                    </div>
                }
                {!this.state.isHiddenDatePicker &&
                    <div className="wrapperDate">
                        <DateTimePicker
                            date={this.state.calendarDate ? new Date(this.state.calendarDate) : new Date()}
                            onChange={this.handleDateChange}
                        />
                    </div>
                }
                <ul id="tasksUL">
                    <TransitionGroup>
                        {this.state.tasks.map((task) =>
                            <CSSTransition
                                key={task.id + task.list_id}
                                classNames="taskAnim"
                                timeout={{ exit: 300 }}
                            >
                                <TaskBox
                                    title={task.title}
                                    date={task.date}
                                    source={task.source}
                                    list_id={task.list_id}
                                    revision={task.revision}
                                    id={task.id}
                                    key={task.id + task.list_id}
                                    openCalendar={this.handleOpenCalendar}
                                    updateTasks={this.updateTasks}
                                />
                            </CSSTransition>

                        )}
                    </TransitionGroup>
                </ul>
            </div>
        );
    }
}

export default onClickOutside(TodoList);

