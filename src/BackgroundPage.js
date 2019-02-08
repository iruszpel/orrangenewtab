
'use strict';
import React, { Component } from 'react';
import db from './db';
import WunderlistAPI from 'wunderlist-api'
import TodoistAPI from 'todoist-js'
import AsanaAPI from 'asana'
import TrelloAPI from 'trello'
import moment from 'moment'
class Wunderlist {
    getAllLists = async () => {
        //Get IDs of all lists in Wunderlist account
        let response = await this.wunderlist.getLists()

        let answerList = [];
        for (let list of response) {
            answerList.push({
                source: "wunderlist",
                id: list.id,
                title: list.title
            })
        }
        window.chrome.runtime.sendMessage({ body: answerList, type: "response_lists" })

    }
    getAllListsAndUpdate = async () => {
        //Get IDs of all lists in Wunderlist account
        let response = await this.wunderlist.getLists()

        this.getTasksFromLists(response)

    }
    createTask = async (task) => {
        this.wunderlist.createTask({
            title: task.title,
            due_date: task.date,
            list_id: Number(task.list_id)
        }).then(response => {

            let answerBody = {
                source: "wunderlist",
                id: response.id,
                title: response.title,
                revision: response.revision,
                date: response.due_date ? new Date(response.due_date).getTime() : Infinity,
                list_id: response.list_id
            }
            window.chrome.runtime.sendMessage({ body: answerBody, type: "new_task" })
        })

    }
    getTasksFromLists = async (lists) => {
        //For every list get and parse tasks
        for (let list of lists) {
            let tasks = await this.wunderlist.getTasks(list.id)
            for (let task of tasks) {
                //Add them to database
                db.tasks.put({
                    title: task.title,
                    date: task.due_date ? new Date(task.due_date).getTime() : Infinity,
                    source: "wunderlist",
                    revision: task.revision,
                    list_id: task.list_id,
                    id: task.id
                })
            }

        }
    }

    changeTaskDate = async (taskID, revision, date, callback) => {
        let task = await this.wunderlist.updateTask(taskID, revision, { due_date: date.toISOString() })
        callback && callback(task);

    }

    changeTaskTitle = async (taskID, revision, title, callback) => {
        let task = await this.wunderlist.updateTask(taskID, revision, { title: title })
        callback && callback(task);

    }
    completeTask = async (taskID, revision, callback) => {
        let task = await this.wunderlist.updateTask(taskID, revision, { completed: true })
        callback && callback(task);
    }

    getTasks = () => {
        this.wunderlist = new WunderlistAPI({
            clientId: process.env.REACT_APP_WUNDERLIST_CLIENTID,
            accessToken: localStorage.getItem("tokenWunderlist")
        })
        this.getAllListsAndUpdate();
        return true;
    }
}
class Todoist {
    changeTaskDate = async (taskID, date, callback) => {
        let item = await this.todoist.items.get_by_id(taskID)
        item.update({ date_string: new Date(date).toISOString() });
        this.todoist.commit();
        return true;
    }
    changeTaskTitle = async (taskID, title, callback) => {
        let item = await this.todoist.items.get_by_id(taskID)
        item.update({ content: title });
        this.todoist.commit();
        return true;
    }
    completeTask = async (taskID, callback) => {
        let item = await this.todoist.items.get_by_id(taskID)
        item.complete()
        this.todoist.commit();
        return true;
    }
    createTask = async (task) => {
        let body = {
            project_id: task.list_id
        }
        if (task.date) body = Object.assign(body, {date_string: task.date});
        this.todoist.add_item(task.title, body).then(task => {
            let answerBody = {
                title: task.content,
                date: task.due_date_utc ? new Date(task.due_date_utc).getTime() : Infinity,
                source: "todoist",
                list_id: task.project_id,
                id: task.id
            }
            window.chrome.runtime.sendMessage({ body: answerBody, type: "new_task" })
        })

    }
    getAllLists = async () => {
        let res = await this.todoist.sync()
        let answerList = [];
        for (let list of res.projects) {
            answerList.push({
                source: "todoist",
                id: list.id,
                title: list.name
            })
        }
        window.chrome.runtime.sendMessage({ body: answerList, type: "response_lists" })


    }
    getTasks = async () => {
        this.todoist = new TodoistAPI(localStorage.getItem("tokenTodoist"));
        //Get all tasks
        let res = await this.todoist.sync()
        for (let task of res.items) {
            //Add them to database
            db.tasks.put({
                title: task.content,
                date: task.due_date_utc ? new Date(task.due_date_utc).getTime() : Infinity,
                source: "todoist",
                list_id: task.project_id,
                id: task.id
            })
        }
    }
}
class Asana {
    fetchData = (type, data, callback) => {
        if (!data) data = {};
        fetch(`${process.env.REACT_APP_API_URL}/api/asana`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(Object.assign({ "type": type }, data))
            })
            .then((response) => {
                return response.json();
            })
            .then(response => {
                return callback(response);
            })
    }
    refreshToken = (refreshToken) => {
        this.fetchData("refreshToken", { "refreshtoken": refreshToken }, (res) => {
            localStorage.setItem("tokenAsana", res.access_token);
            localStorage.setItem("asana_auth", "1");
            window.writeCookie("asananotexpired", "1", 1)
            this.getTasks();
        })
    }
    changeTaskTitle = (taskID, title, callback) => {
        this.client.tasks.update(taskID, {
            'name': title,
            'assignee': this.userID
        });
    }
    changeTaskDate = (taskID, date, callback) => {
        this.client.tasks.update(taskID, {
            "due_on": date.toISOString()
        });
    }
    completeTask = (taskID, callback) => {
        this.client.tasks.update(taskID, {
            "completed": true
        });
    }
    createTask = async (task) => {
        this.client.tasks.createInWorkspace(task.list_id, {
            'name': task.title,
            'due_on': task.date,
            'assignee': this.userID
        }).then(newTask => {

            let answerBody = {
                "title": newTask.name,
                "date": newTask.due_on ? new Date(newTask.due_on).getTime() : Infinity,
                "source": "asana",
                "id": newTask.id,
                "list_id": task.list_id
            }
            window.chrome.runtime.sendMessage({ body: answerBody, type: "new_task" })
        })
    }
    getAllLists = async () => {
        let user = await this.client.users.me()
        let answerList = [];
        for (let list of user.workspaces) {
            answerList.push({
                source: "asana",
                id: list.id,
                title: list.name
            })
        }
        window.chrome.runtime.sendMessage({ body: answerList, type: "response_lists" })
    }
    getTasksFromWorkspace = (workspaceId, userId) => {
        this.client.tasks.findAll({
            assignee: userId,
            workspace: workspaceId,
            completed_since: 'now',
            opt_fields: 'id,name,assignee_status,completed,created_at, due_on'
        })
            .then((response) => {

                return response.data;
            })
            .filter((task) => {
                db.tasks.put({
                    "title": task.name,
                    "date": task.due_on ? new Date(task.due_on).getTime() : Infinity,
                    "source": "asana",
                    "id": task.id,
                    "list_id": workspaceId
                });
            })
    }

    getTasks = () => {
        if (window.readCookie("asananotexpired") != "1" && localStorage.getItem("asana_auth") == 1) {

            //Token expired, use refresh token to acquire a new one
            this.refreshToken(localStorage.getItem("refreshTokenAsana"));
        }
        if (localStorage.getItem("tokenAsana") && window.readCookie("asananotexpired") == "1") {
            this.client = AsanaAPI.Client.create().useAccessToken(localStorage.getItem("tokenAsana"));
            this.client.users.me()
                .then(user => {

                    this.userID = user.id;
                    for (let workspace of user.workspaces) {
                        this.getTasksFromWorkspace(workspace.id, user.id)
                    }
                    return;
                });
        }


    }
}

class Trello {
    changeTaskDate = (taskID, date, callback) => {
        this.client.updateCard(taskID, "due", date.toISOString())
    }
    changeTaskTitle = (taskID, title, callback) => {
        this.client.updateCard(taskID, "name", title)
    }
    completeTask = (taskID, callback) => {
        this.client.updateCard(taskID, "dueComplete", true)
        this.client.updateCard(taskID, "closed", true)

    }
    createTask = async (task) => {
        this.client.addCardWithExtraParams(task.title, { due: task.date }, task.list_id).then((card) => {
            let answerBody = {
                title: card.name,
                date: card.due ? new Date(card.due).getTime() : Infinity,
                source: "trello",
                list_id: card.idBoard,
                id: card.id
            }
            window.chrome.runtime.sendMessage({ body: answerBody, type: "new_task" })
        })
    }
    getAllLists = async () => {
        let boards = await this.client.getBoards("me")
        let answerList = [];
        for (let board of boards) {
            let lists = await this.client.getListsOnBoard(board.id)
            for (let list of lists) {
                answerList.push({
                    source: "trello",
                    id: list.id,
                    title: `${list.name} (${board.name})`
                })
            }
        }
        window.chrome.runtime.sendMessage({ body: answerList, type: "response_lists" })

    }
    getTasks = async () => {
        this.client = new TrelloAPI(process.env.REACT_APP_TRELLO_KEY, localStorage.getItem("tokenTrello"));
        let boards = await this.client.getBoards("me")
        for (let board of boards) {
            let cards = await this.client.getCardsOnBoard(board.id)
            for (let card of cards) {
                db.tasks.put({
                    title: card.name,
                    date: card.due ? new Date(card.due).getTime() : Infinity,
                    source: "trello",
                    list_id: card.idBoard,
                    id: card.id
                })

            }
        }

        /*

      */
    }
}
class GCalAndTasks {
    fetchData = (url, method, body, callback) => {


        var scopes = [];
        localStorage.getItem("calendar_auth") == 1 && scopes.push("https://www.googleapis.com/auth/calendar", "https://www.googleapis.com/auth/tasks");
        localStorage.getItem("gmail_auth") == 1 && scopes.push("https://www.googleapis.com/auth/gmail.modify");
        return new Promise(resolve => {
            window.chrome.identity.getAuthToken({ 'interactive': true, "scopes": scopes }, (token) => {
                let init = {
                    method: method,
                    async: true,
                    headers: {
                        Authorization: 'Bearer ' + token,
                        'Content-Type': 'application/json'
                    },
                    body: body,
                    'contentType': 'json'
                };
                fetch(
                    url,
                    init)
                    .then((response) => response.json())
                    .then(data => {
                        callback && callback(data)
                        resolve(data);
                    });
            })
        })
    }
    getAllLists = () => {
        this.fetchData('https://www.googleapis.com/tasks/v1/users/@me/lists', 'GET', null, res => {

            let answerList = [];
            for (let list of res.items) {
                answerList.push({
                    source: "googletasks",
                    id: list.id,
                    title: list.title
                })
            }
            window.chrome.runtime.sendMessage({ body: answerList, type: "response_lists" })

        })
    }
    changeTaskDate = (taskID, taskListID, date) => {
        this.fetchData(`https://www.googleapis.com/tasks/v1/lists/${taskListID}/tasks/${taskID}`, 'PUT', JSON.stringify({
            due: date.toISOString(),
            id: taskID
        }))
    }
    changeEventDate = (eventID, calendarID, date) => {
        this.fetchData(`https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events/${eventID}`, 'PUT', JSON.stringify({
            start: {
                date: moment(date).format("YYYY-MM-DD")
            },
            end: {
                date: moment(date).format("YYYY-MM-DD")
            },
            id: eventID
        }))
    }
    changeTaskTitle = (taskID, taskListID, title) => {
        this.fetchData(`https://www.googleapis.com/tasks/v1/lists/${taskListID}/tasks/${taskID}`, 'PUT', JSON.stringify({
            title: title,
            id: taskID

        }))
    }
    changeEventTitle = (eventID, calendarID, title, date) => {
        this.fetchData(`https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events/${eventID}`, 'PUT', JSON.stringify({
            summary: title,
            id: eventID,
            start: {
                date: moment(date).format("YYYY-MM-DD")
            },
            end: {
                date: moment(date).format("YYYY-MM-DD")
            }
        }))
    }
    completeTask = (taskID, taskListID) => {
        this.fetchData(`https://www.googleapis.com/tasks/v1/lists/${taskListID}/tasks/${taskID}`, 'PUT', JSON.stringify({
            status: "completed",
            id: taskID
        }))
    }
    completeEvent = (eventID, calendarID, date) => {
        this.fetchData(`https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events/${eventID}`, 'PUT', JSON.stringify({
            status: "cancelled",
            start: {
                date: moment(date).format("YYYY-MM-DD")
            },
            end: {
                date: moment(date).format("YYYY-MM-DD")
            },
            id: eventID
        }))
    }
    createTask = async (task) => {
        this.fetchData(`https://www.googleapis.com/tasks/v1/lists/${task.list_id}/tasks/`, 'POST', JSON.stringify({
            title: task.title,
            due: task.date
        })).then(newTask => {
            let answerBody = {
                "title": newTask.title,
                "date": newTask.due ? new Date(newTask.due).getTime() : Infinity,
                "source": "googletasks",
                "id": newTask.id,
                "list_id": task.list_id
            }
            window.chrome.runtime.sendMessage({ body: answerBody, type: "new_task" })
        })
    }
    getCalendarEvents = () => {
        this.fetchData('https://www.googleapis.com/calendar/v3/users/me/calendarList', 'GET', null, res => {

            for (let list of res.items) {

                if (list.accessRole === "owner") {
                    this.fetchData(`https://www.googleapis.com/calendar/v3/calendars/${list.id}/events?timeMin=${moment().subtract(7, 'days').toISOString()}`, 'GET', null, events => {

                        if (events.items) {
                            for (let event of events.items) {
                                db.tasks.put({
                                    "title": event.summary,
                                    "date": event.start.date ? new Date(event.start.date).getTime() : Infinity,
                                    "source": "googlecalendar",
                                    "id": event.id,
                                    "list_id": list.id
                                })
                            }
                        }
                    })
                }

            }
        })

    }
    getTasks() {
        this.fetchData('https://www.googleapis.com/tasks/v1/users/@me/lists', 'GET', null, res => {

            for (let list of res.items) {

                this.fetchData(`https://www.googleapis.com/tasks/v1/lists/${list.id}/tasks?maxResults=100&showCompleted=false`, 'GET', null, tasks => {

                    if (tasks.items) {
                        for (let task of tasks.items) {
                            db.tasks.put({
                                "title": task.title,
                                "date": task.due ? new Date(task.due).getTime() : Infinity,
                                "source": "googletasks",
                                "id": task.id,
                                "list_id": list.id
                            })
                        }
                    }
                })

            }
        })
        this.getCalendarEvents();

    }
}
class Gmail {
    fetchData = (url, method, body, callback) => {
        var scopes = [];
        localStorage.getItem("calendar_auth") == 1 && scopes.push("https://www.googleapis.com/auth/calendar", "https://www.googleapis.com/auth/tasks");
        localStorage.getItem("gmail_auth") == 1 && scopes.push("https://www.googleapis.com/auth/gmail.modify");
        window.chrome.identity.getAuthToken({ "scopes": scopes }, (token) => {
            let init = {
                method: method,
                async: true,
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json'
                },
                body: body,
                'contentType': 'json'
            };
            fetch(
                url,
                init)
                .then((response) => response.json())
                .then(data => {
                    callback && callback(data)
                });
        })
    }
    getHeader = (headers, index) => {
        for (let header of headers) {
            if (header.name === index) {
                return header.value;
            }
        };
    }
    markAsRead = (id) => {
        this.fetchData(`https://www.googleapis.com/gmail/v1/users/me/messages/${id}/modify?alt=json`, 'POST', JSON.stringify({ "removeLabelIds": ["UNREAD"] }))
    }
    markAsUnread = (id) => {
        this.fetchData(`https://www.googleapis.com/gmail/v1/users/me/messages/${id}/modify?alt=json`, 'POST', JSON.stringify({ "addLabelIds": ["UNREAD"] }))
    }
    getMails(nextPageToken) {

        this.fetchData('https://www.googleapis.com/gmail/v1/users/me/messages?maxResults=10&labelIds=INBOX', 'GET', null, data => {
            for (let mail of data.messages) {
                this.fetchData(`https://www.googleapis.com/gmail/v1/users/me/messages/${mail.id}`, 'GET', null, message => {
                    db.mails.put({
                        "title": this.getHeader(message.payload.headers, 'Subject'),
                        "date": this.getHeader(message.payload.headers, 'Date'),
                        "labelIds": message.labelIds,
                        "id": message.id,
                        "from": this.getHeader(message.payload.headers, 'From')
                    })
                })
            }
        })
    }
}
class Background extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };

    }
    addListeners = () => {
        window.chrome.runtime.onMessage.addListener(
            (request, sender, sendResponse) => {
                if (request.message === 'update_all_tasks') {
                    this.enableServices();
                    this.updateAllTasks();
                }
                switch (request.component) {
                    case "wunderlist":
                        if (request.type === "update_date") {
                            this.wunderlistObj.changeTaskDate(request.id, request.revision, new Date(request.date))
                        }
                        if (request.type === "update_title") {
                            this.wunderlistObj.changeTaskTitle(request.id, request.revision, request.title)
                        }
                        if (request.type === "mark_complete") {
                            this.wunderlistObj.completeTask(request.id, request.revision)
                        }
                        if (request.type === "get_lists") {
                            this.wunderlistObj.getAllLists()
                        }
                        if (request.type === "add_task") {
                            this.wunderlistObj.createTask(request.body)
                        }
                        break;
                    case "todoist":
                        if (request.type === "update_date") {
                            this.todoistObj.changeTaskDate(request.id, new Date(request.date))
                        }
                        if (request.type === "update_title") {
                            this.todoistObj.changeTaskTitle(request.id, request.title)
                        }
                        if (request.type === "mark_complete") {
                            this.todoistObj.completeTask(request.id)
                        }
                        if (request.type === "get_lists") {
                            this.todoistObj.getAllLists()
                        }
                        if (request.type === "add_task") {
                            this.todoistObj.createTask(request.body)
                        }
                        break;
                    case "gmail":
                        if (request.type === "mark_read") {
                            this.GmailObj.markAsRead(request.id)
                        }
                        if (request.type === "mark_unread") {
                            this.GmailObj.markAsUnread(request.id)
                        }
                        break;
                    case "googletasks":
                        if (request.type === "update_date") {
                            this.GCalAndTasksObj.changeTaskDate(request.id, request.list_id, new Date(request.date))
                        }
                        if (request.type === "update_title") {
                            this.GCalAndTasksObj.changeTaskTitle(request.id, request.list_id, request.title)
                        }
                        if (request.type === "mark_complete") {
                            this.GCalAndTasksObj.completeTask(request.id, request.list_id)
                        }
                        if (request.type === "get_lists") {
                            this.GCalAndTasksObj.getAllLists()
                        }
                        if (request.type === "add_task") {
                            this.GCalAndTasksObj.createTask(request.body)
                        }
                        break;
                    case "googlecalendar":
                        if (request.type === "update_date") {
                            this.GCalAndTasksObj.changeEventDate(request.id, request.list_id, new Date(request.date))
                        }
                        if (request.type === "update_title") {
                            this.GCalAndTasksObj.changeEventTitle(request.id, request.list_id, request.title, new Date(request.date))
                        }
                        if (request.type === "mark_complete") {
                            this.GCalAndTasksObj.completeEvent(request.id, request.list_id, new Date(request.date))
                        }
                        if (request.type === "get_lists") {
                            this.GCalAndTasksObj.getAllCalendarLists()
                        }
                        if (request.type === "add_task") {
                            this.GCalAndTasksObj.createEvent(request.body)
                        }
                        break;
                    case "asana":
                        if (request.type === "update_date") {
                            this.AsanaObj.changeTaskDate(request.id, new Date(request.date))
                        }
                        if (request.type === "update_title") {
                            this.AsanaObj.changeTaskTitle(request.id, request.title)
                        }
                        if (request.type === "mark_complete") {
                            this.AsanaObj.completeTask(request.id)
                        }
                        if (request.type === "get_lists") {
                            this.AsanaObj.getAllLists()
                        }
                        if (request.type === "add_task") {
                            this.AsanaObj.createTask(request.body)
                        }
                        break;
                    case "trello":
                        if (request.type === "update_date") {
                            this.TrelloObj.changeTaskDate(request.id, new Date(request.date))
                        }
                        if (request.type === "update_title") {
                            this.TrelloObj.changeTaskTitle(request.id, request.title)
                        }
                        if (request.type === "mark_complete") {
                            this.TrelloObj.completeTask(request.id)
                        }
                        if (request.type === "get_lists") {
                            this.TrelloObj.getAllLists()
                        }
                        if (request.type === "add_task") {
                            this.TrelloObj.createTask(request.body)
                        }
                        break;
                    default:
                        break;
                }
            });
    }
    enableServices = () => {
        if (localStorage.getItem("tokenWunderlist")) {
            this.wunderlistObj = new Wunderlist();

        }
        if (localStorage.getItem("tokenTodoist")) {
            this.todoistObj = new Todoist();

        }
        if (localStorage.getItem("gmail_auth") == 1) {
            this.GmailObj = new Gmail();

        }
        if (localStorage.getItem("calendar_auth") == 1) {
            this.GCalAndTasksObj = new GCalAndTasks();

        }
        if (localStorage.getItem("tokenAsana")) {
            this.AsanaObj = new Asana();

        }
        if (localStorage.getItem("tokenTrello")) {
            this.TrelloObj = new Trello();

        }
    }
    updateAllTasks = () => {
        if (localStorage.getItem("tokenWunderlist")) {
            db.tasks.where("source").equals("wunderlist").delete();
            this.wunderlistObj.getTasks();
        }
        if (localStorage.getItem("tokenTodoist")) {
            db.tasks.where("source").equals("todoist").delete();
            this.todoistObj.getTasks();
        }
        if (localStorage.getItem("gmail_auth") == 1) {
            db.mails.clear();
            this.GmailObj.getMails();
        }
        if (localStorage.getItem("calendar_auth") == 1) {
            db.tasks.where("source").anyOf("googlecalendar", "googletasks").delete();
            this.GCalAndTasksObj.getTasks();
        }
        if (localStorage.getItem("tokenAsana")) {
            db.tasks.where("source").equals("asana").delete();
            this.AsanaObj.getTasks();
        }
        if (localStorage.getItem("tokenTrello")) {
            db.tasks.where("source").equals("trello").delete();
            this.TrelloObj.getTasks();
        }
    }
    componentWillMount() {
        window.readCookie = (name) => {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        window.writeCookie = (name, value, hours) => {
            if (hours) {
                var date = new Date();
                date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
            }
            else {
                var expires = "";
            }

            document.cookie = name + "=" + value + expires + "; path=/";
        };
    }
    componentDidMount() {
        //Enable sync with services
        this.enableServices();
        //Listen for upcoming requests
        this.addListeners();
        let interval = localStorage.getItem('sync_interval') ? Number(localStorage.getItem('sync_interval')) * 1000 : 60000
        this.updateAllTasks();
        setInterval(() => {
            this.updateAllTasks();
        }, interval);



    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Background;

