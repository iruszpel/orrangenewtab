import React, { Component } from 'react';
import './css/Settings.css';
import onClickOutside from "react-onclickoutside";
class Settings extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: localStorage.getItem("name"),
         backgroundChangeTime: localStorage.getItem("backgroundChangeTime") || 4,
         syncTime: localStorage.getItem("sync_interval") || 60,
         temperatureUnit: localStorage.getItem("temperatureUnit") || "c",
         currentService: localStorage.getItem('taskService'),
         currentTasklist: localStorage.getItem('tasklistID'),
         availableImages: JSON.parse(localStorage.getItem('availableImages')),
         taskLists_available: [],
         generalVisible: true,
         backgroundVisible: false,
         todoVisible: false,
         contactVisible: false
      };
   }

   componentDidMount() {
      this.servicesAvailable = ["Local Storage"]; // Default storage
      if (localStorage.getItem("tokenWunderlist") && localStorage.getItem("wunderlist_auth") == 1) this.servicesAvailable.push("Wunderlist");
      if (localStorage.getItem("todoist_auth") == 1 && localStorage.getItem("tokenTodoist")) this.servicesAvailable.push("Todoist");
      if (localStorage.getItem("calendar_auth") == 1) this.servicesAvailable.push("Google Tasks");
      if (localStorage.getItem("tokenAsana") && localStorage.getItem("asana_auth") == 1) this.servicesAvailable.push("Asana");
      if (localStorage.getItem("trello_auth") == 1 && localStorage.getItem("tokenTrello")) this.servicesAvailable.push("Trello");
      //Will move it to one array in IndexedDB in table Settings but currently 
      //for compatibility with older version it will remain like this
      window.chrome.runtime.sendMessage({ component: this.state.currentService, type: "get_lists" })
      window.chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
         if (request.type == "response_lists") {
            this.setState({
               taskLists_available: request.body
            })
            //Check if the currently selected tasklist is in the list of newly aquired
            //otherwise set the first tasklist from new ones as active
            let found;
            for (let list of request.body) {
               if (list.id == this.state.currentTasklist) {
                  found = 1
               }
            }
            if (!found) {
               localStorage.setItem('tasklistID', request.body[0].id)
               this.setState({
                  currentTasklist: request.body[0].id
               })
            }
         }
      })
   }
   handleNameChange = (evt) => {
      let name = evt.target.value;
      this.setState({
         name: name
      })
      localStorage.setItem("name", name)
   }
   handleSyncTimeChange = (evt) => {
      let syncTime = evt.target.value;
      this.setState({
         syncTime: syncTime
      })
      localStorage.setItem("sync_interval", syncTime)
   }
   handleBackgroundTimeChange = (evt) => {
      let backgroundTime = evt.target.value;
      this.setState({
         backgroundChangeTime: backgroundTime
      })
      localStorage.setItem("backgroundChangeTime", backgroundTime)
   }
   handleTempUnitChange = (evt) => {
      this.setState({
         temperatureUnit: evt.target.value
      })
      localStorage.setItem("temperatureUnit", evt.target.value)
   }
   makeAllInactive = () => {
      this.setState({
         generalVisible: false,
         backgroundVisible: false,
         todoVisible: false,
         contactVisible: false
      })
   }
   handleServiceChange = (evt) => {
      this.setState({
         currentService: evt.target.value
      })
      localStorage.setItem('taskService', evt.target.value);
      if (evt.target.value === "localstorage") {
         this.setState({
            currentTasklist: '',
            taskLists_available: []
         })
         return;
      }
      window.chrome.runtime.sendMessage({ component: evt.target.value, type: "get_lists" })
      
   }
   handleTaskListChange = (evt) => {
      this.setState({
         currentTasklist: evt.target.value
      })
      localStorage.setItem('tasklistID', evt.target.value);
   }
   handleClickOutside = evt => {
      this.props.handleClickOutside(evt)
   };
   handleBackgroundChange = evt => {
      window.writeCookie("disp_image", evt.target.getAttribute('file'), localStorage.getItem("backgroundChangeTime"));
      this.props.setBackground(evt.target.getAttribute('file'))
   }
   render() {
      return (
         <div id="settingsbox">
            <div id="settingsbar">
               <span className={this.state.generalVisible ? 'spanActive' : ''} onClick={() => { this.makeAllInactive(); this.setState({ generalVisible: true }) }} id="spanGeneral">General</span>
               <span className={this.state.backgroundVisible ? 'spanActive' : ''} onClick={() => { this.makeAllInactive(); this.setState({ backgroundVisible: true }) }} id="spanBackground">Background</span>
               <span className={this.state.todoVisible ? 'spanActive' : ''} onClick={() => { this.makeAllInactive(); this.setState({ todoVisible: true }) }} id="spanTodolist">To-Do List</span>
               <span className={this.state.contactVisible ? 'spanActive' : ''} onClick={() => { this.makeAllInactive(); this.setState({ contactVisible: true }) }} id="spanContact">Contact</span>
            </div>
            <div id="settingscontent">
               {this.state.generalVisible &&
                  <div id="contentgeneral" className="settingsactive">
                     <p><span>Name</span>
                        <input value={this.state.name} onChange={this.handleNameChange} type="text" name="user_name" />
                     </p>
                     <p id="linebreak" />
                     <p>
                        <span>Temperature unit</span>
                        <select value={this.state.temperatureUnit} onChange={this.handleTempUnitChange}>
                           <option value="C">
                              Celsius
               </option>
                           <option value="F">
                              Fahrenheit
               </option>
                        </select>
                     </p>
                     <p id="linebreak" />
                     <p>
                        <span>Time between background changes</span>
                        <select value={this.state.backgroundChangeTime} onChange={this.handleBackgroundTimeChange} id='backgroundchange'>
                           {Array.from(Array(9).keys(), n => n + 1).map(num =>
                              <option key={num} value={num}>
                                 {num} {num === 1 ? 'hour' : 'hours'}
                              </option>
                           )
                           }


                           <option value="131400">
                              Never
               </option>
                        </select>
                     </p>
                     <p id="linebreak" />
                     <p><span>Interval between task syncs (in seconds)</span>
                        <input type="number" value={this.state.syncTime} onChange={this.handleSyncTimeChange} min="10" name="background_tasks_update" />
                     </p>
                     <p id="linebreak" />
                     <p><span>Service integration:</span><a href="index.html#/setup">Go to setup page</a>
                     </p>
                  </div>
               } {this.state.backgroundVisible &&
                  <div id="contentbackground">
                     <p>Pick a photo which will be used as a background:</p>
                     <div id="backgroundphotos">
                        {this.state.availableImages.map(image =>
                           <img key={image} onClick={this.handleBackgroundChange} file={image} src={`${process.env.REACT_APP_BACKGROUND_IMAGE_URL}/images_icons/${image}`} />
                        )

                        }
                     </div>
                  </div>
               } {this.state.todoVisible &&
                  <div id="contenttodolist">
                     <p><span>Automatically add a new task to:</span>
                        <select value={this.state.currentService} onChange={this.handleServiceChange}>
                           {this.servicesAvailable.map(service =>
                              <option key={service} value={service.toLowerCase().replace(/\s/g, '')}>
                                 {service}
                              </option>
                           )

                           }
                        </select>
                     </p>

                     <p id="linebreak" />
                     <p><span>Choose a list where to add a task:</span>
                        <select value={this.state.currentTasklist} onChange={this.handleTaskListChange}>
                           {this.state.taskLists_available.map(taskList =>
                              <option key={taskList.id} value={taskList.id}>
                                 {taskList.title}
                              </option>
                           )

                           }
                        </select>
                     </p>

                  </div>
               } {this.state.contactVisible &&
                  <div id="contentcontact">
                     <p><a href="https://github.com/lopogo59">Ignacy Ruszpel</a></p>
                     <p>E-Mail: orrangenewtab@gmail.com</p>
                     <p>Github Repo: <a href="https://github.com/lopogo59/orrangenewtab">orrangenewtab</a></p>
                  </div>
               }
            </div>
         </div>
      );
   }
}
export default onClickOutside(Settings);



