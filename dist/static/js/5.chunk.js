(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Additional/css/DateTimeInput.css":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/Components/Additional/css/DateTimeInput.css ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dtp-root {\r\n  background-color: white;\r\n  border-radius: 3px;\r\n  border: 1px solid hsl(0, 0%, 95%);\r\n  box-shadow: 0 1px 9px hsla(0, 0%, 0%, .4);\r\n  color: hsl(0, 0%, 25%);\r\n  font-size: 2.25806vh;\r\n  left:0; \r\n  right:0;\r\n  margin: 0 auto;\r\n  top: 13vh;\r\n  overflow: hidden;\r\n  padding: 0 12px;\r\n  position: absolute;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  width: 17vw;\r\n  z-index: 20;\r\n}\r\n\r\n.dtp-root .material-icons {\r\n  line-height: inherit;\r\n}\r\n\r\n.dtp-hover-span {\r\n  border-radius: 4px;\r\n  box-shadow: 0 0 0 hsla(0, 0%, 0%, 0);\r\n  cursor: pointer;\r\n  display: block;\r\n  height: 100%;\r\n  padding: 0 8px;\r\n  -webkit-transition: box-shadow .1s;\r\n  transition: box-shadow .1s;\r\n}\r\n\r\n.dtp-header,\r\n.dtp-footer {\r\n  align-items: center;\r\n  background-color: hsl(0, 0%, 98%);\r\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, .12);\r\n  display: flex;\r\n  height: 5.4838vh;\r\n  justify-content: space-between;\r\n  line-height: 5.4838vh;\r\n  margin: 0 -12px;\r\n}\r\n\r\n.dtp-footer {\r\n  justify-content: space-around;\r\n}\r\n\r\n.dtp-previous-month,\r\n.dtp-next-month {\r\n  box-sizing: border-box;\r\n  cursor: pointer;\r\n  padding: 0;\r\n  text-align: center;\r\n  width: 3.07929vw;\r\n}\r\n\r\n.dtp-header-month,\r\n.dtp-header-year {\r\n  border-radius: 0;\r\n  min-width: 3.07929vw;\r\n  padding: 0 12px;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.dtp-header-month.dtp-selected,\r\n.dtp-header-year.dtp-selected {\r\n  background-image: -webkit-linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7));\r\n  background-image: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7));\r\n  background-position: 0 100%;\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 2px;\r\n}\r\n\r\n.dtp-filler {\r\n  flex: 1 1;\r\n}\r\n\r\n.dtp-main-section {\r\n  align-items: center;\r\n  display: flex;\r\n  height: 31.93548vh;\r\n  width: 17.19953vw;\r\n}\r\n/*\r\n.dtp-main-section.dtp-view-years,\r\n.dtp-main-section.dtp-view-time {\r\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDAgMjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNIDIwIDAgTCA0MCAyMCAwIDIwIFoiIGZpbGw9ImhzbCgwLCAwJSwgOTUlKSIvPgo8L3N2Zz4=),\r\n                    url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDAgMjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNIDAgMCBMIDQwIDAgMjAgMjAgWiIgZmlsbD0iaHNsKDAsIDAlLCA5NSUpIi8+Cjwvc3ZnPg==);\r\n  background-position: 50% 20%, 50% 90%;\r\n  background-repeat: no-repeat;\r\n}\r\n*/\r\n.dtp-main-section.dtp-view-time {\r\n  background-position: 50% 30px, 50% 158px;\r\n}\r\n\r\n.dtp-table {\r\n  border-collapse: collapse;\r\n  margin: 0;\r\n  max-width: 16.9361vw;\r\n  width: 16.9361vw;\r\n}\r\n\r\n.dtp-table th,\r\n.dtp-table td {\r\n  padding: 0;\r\n}\r\n\r\n.dtp-th-day,\r\n.dtp-td-day {\r\n  border: none;\r\n  height: 4.51612vh;\r\n  line-height: 4.51612vh;\r\n  padding: 0;\r\n  width: 2.61739vw;\r\n}\r\n\r\n.dtp-select-day {\r\n  cursor: pointer;\r\n}\r\n\r\n.dtp-table .dtp-th-day  {\r\n  font-weight: normal;\r\n  padding: 0;\r\n  text-align: center;\r\n  width: 2.77136vw;\r\n}\r\n\r\n.dtp-th-day .dtp-hover-span,\r\n.dtp-td-day .dtp-hover-span {\r\n  border-radius: 19px;\r\n  display: block;\r\n  margin: 0 auto;\r\n  padding: 0;\r\n  text-align: center;\r\n  width: 2.1555vw;\r\n}\r\n\r\n.dtp-td-day:hover .dtp-hover-span,\r\n.dtp-td-years .dtp-hover-span:hover,\r\n.dtp-td-months .dtp-hover-span:hover {\r\n  box-shadow: 1px 1px 4px hsla(0, 0%, 0%, .2),\r\n              0 0 2px hsla(0, 0%, 0%, .2);\r\n}\r\n\r\n.dtp-selected-day > .dtp-hover-span  {\r\n  background-color: hsl(210, 100%, 50%);\r\n  color: white;\r\n}\r\n\r\n.dtp-table .dtp-td-years,\r\n.dtp-table .dtp-td-months {\r\n  height: 5.16129vh;\r\n  line-height: 5.16129vh;\r\n  padding: 4px 0;\r\n  text-align: center;\r\n  width: 6.77444vw;\r\n}\r\n\r\n.dtp-time-container {\r\n  align-items: center;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n.dtp-time-controls {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.dtp-time-controls .dtp-hover-span {\r\n  height: 5.16129vh;\r\n  line-height: 5.16129vh;\r\n}\r\n\r\n.dtp-digits {\r\n  display: block;\r\n  margin: auto;\r\n}\r\n\r\n.dtp-digits circle {\r\n   fill: black;\r\n}\r\n\r\n.dtp-digit-display-light {\r\n  fill: white;\r\n}\r\n\r\n.dtp-digit-display-light.on {\r\n  fill: black;\r\n}\r\n\r\n.dtp-icon-chevron-left::before {\r\n  content: 'chevron_left';\r\n}\r\n\r\n.dtp-icon-chevron-right::before {\r\n  content: 'chevron_right';\r\n}\r\n\r\n.dtp-icon-arrow-drop-up::before {\r\n  content: 'arrow_drop_up';\r\n}\r\n\r\n.dtp-icon-event::before {\r\n  content: 'event';\r\n}\r\n\r\n.dtp-icon-schedule::before {\r\n  content: 'schedule';\r\n}\r\n\r\n.dtp-icon-adjust::before {\r\n  content: 'adjust';\r\n}\r\n\r\n.dtp-icon-cancel::before {\r\n  content: 'cancel';\r\n}\r\n\r\n.dtp-icon-expand-less::before {\r\n  content: 'expand_less';\r\n}\r\n\r\n.dtp-icon-expand-more::before {\r\n  content: 'expand_more';\r\n}\r\n\r\n.dtp-transparent {\r\n  color: transparent;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Additional/css/Mail.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/Components/Additional/css/Mail.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".someMail {\n    font-family: 'Lato', sans-serif;\n    font-weight: 300;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    position: relative;\n    display: block;\n    overflow: hidden;\n    margin-top: 3.6%;\n    word-wrap: break-word;\n    height: 11vh;\n    background-color: rgba(100, 100, 100, 0.438);\n    box-shadow: 0 1px 8px #22222283;\n    margin-left: 0.42vw;\n    margin-right: 0.42vw;\n    margin-bottom: 3%;\n    border-radius: 1%;\n}\n.mailMainTitle {\n    color: #fff;\n    font-size: 3vh;\n    margin-top: 1vh;\n    font-weight: 300;\n    text-align: center;\n}\n.mailTitle {\n    display: block;\n    white-space: normal;\n    word-wrap: break-word;\n    overflow: hidden;\n    font-size: 2vh;\n    color: #fff;\n    height: 90%;\n    margin-left: 25%;\n    margin-top: 2%;\n    text-overflow: ellipsis;\n    /*width: 80%;*/\n    max-width: 64%;\n    text-decoration: none;\n    cursor: pointer;\n}\n.mailBold {\n    font-weight: 400;\n}\n.mailTitle:hover {\n    text-decoration: underline;\n}\n.mailFrom {\n    position: absolute;\n    right: 2%;\n    bottom: 5%;\n    color: #fff;\n    font-size: 1.8vh;\n}\n.mailFromLogo {\n    line-height: 11vh;\n    width: 11vh;\n    font-size: 6vh;\n    color: #fff;\n    text-align: center;\n    overflow: hidden;\n    height: 100%;\n    vertical-align: middle;\n    background-size: cover;\n    background-repeat: no-repeat;\n    float: left;\n    border-radius: 50%;\n}\n.archiveMailIcon {\n    color: white;\n    position: absolute;\n    top: 7%;\n    right: 3%;\n    cursor: pointer;\n}\n.markAllasReadButton {\n    position: absolute;\n    right: 4%;\n    font-size: 3.6vh;\n    cursor: pointer;\n}\n.markAllasReadButton:hover {\n    color: rgb(168, 168, 168);\n}\n#nomailsbanner {\n    text-align: center;\n    position: relative;\n    overflow: hidden;\n    margin-right: 15%;\n    margin-left: 15%;\n    overflow-y: auto;\n    color: white;\n    font-family: 'Lato', sans-serif;\n    font-weight: 300;\n    font-size: 1.6vh\n}\n#nomailsbanner a {\n    color: white;\n    font-family: 'Lato', sans-serif;\n    font-weight: 300;\n    display: inline-block\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Additional/css/SavedArticles.css":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/Components/Additional/css/SavedArticles.css ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".savedArticles {\n    width: 17vw;\n    height: 45vh;\n    position: absolute;\n    overflow: hidden;\n    bottom: 6vh;\n    right: 1vw;\n    background: rgba(0, 0, 0, 0.5);\n    border-radius: 10px;\n    overflow-y: auto;\n}\n\n#savedArticlesText {\n    position: absolute;\n    right: 1.3vw;\n    bottom: .8vh;\n    color: white;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    font-size: 2vh\n}\n\n#savedArticlesText:hover {\n    text-shadow: 2px 2px 4px #000;\n    cursor: pointer\n}\n\n#articleIcon {\n    left: -35%;\n}\n\n#noArticlesBanner {\n    text-align: center;\n    position: relative;\n    overflow: hidden;\n    border-radius: 0 0 10px 10px;\n    overflow-y: auto;\n    color: white;\n    font-family: 'Lato', sans-serif;\n    font-weight: 300;\n    font-size: 1.6vh\n}\n\n#noArticlesBanner a {\n    color: white;\n    font-family: 'Lato', sans-serif;\n    font-weight: 300;\n    display: inline-block\n}\n\n#noAvailableArticlesBanner {\n    text-align: center;\n    position: relative;\n    overflow: hidden;\n    border-radius: 0 0 10px 10px;\n    overflow-y: auto;\n    color: white;\n    font-family: 'Lato', sans-serif;\n    font-weight: 300;\n    font-size: 1.6vh\n}\n\n.someArticle {\n    font-family: 'Lato', sans-serif;\n    font-weight: 300;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    position: relative;\n    display: block;\n    overflow: hidden;\n    margin-top: 3.6%;\n    word-wrap: break-word;\n    height: 11vh;\n    background-color: rgba(100, 100, 100, 0.438);\n    box-shadow: 0 1px 8px #22222283;\n    margin-left: 0.42vw;\n    margin-right: 0.42vw;\n    margin-bottom: 3%;\n    border-radius: 1%;\n}\n\n.articleTitle {\n    display: block;\n    white-space: normal;\n    word-wrap: break-word;\n    overflow: hidden;\n    font-size: 2vh;\n    color: #fff;\n    height: 90%;\n    margin-left: 35%;\n    margin-top: 2%;\n    text-overflow: ellipsis;\n    /*width: 80%;*/\n    max-width: 50%;\n    text-decoration: none;\n}\n\n.articleTitle:hover {\n    text-decoration: underline;\n}\n\n.articleImageWrapper {\n    width: 11vh;\n    overflow: hidden;\n    height: 100%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    float: left;\n    border-radius: 50%;\n    background-position: center top;\n}\n\n.archiveArticleIcon {\n    color: white;\n    position: absolute;\n    top: 7%;\n    right: 3%;\n    cursor: pointer;\n}\n\n.archiveArticleIcon:hover {\n    color: rgb(177, 177, 177);\n}\n\n.articleAnim-enter {\n    opacity: 0.01;\n}\n\n.articleAnim-enter.articleAnim-enter-active {\n    opacity: 1;\n    -webkit-transition: opacity 500ms ease-in;\n    transition: opacity 500ms ease-in;\n}\n\n.articleAnim-exit {\n    opacity: 1;\n    -webkit-transform: translate(0, 0, 0);\n            transform: translate(0, 0, 0);\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-transition-property: opacity, -webkit-transform;\n    transition-property: opacity, -webkit-transform;\n    transition-property: transform, opacity;\n    transition-property: transform, opacity, -webkit-transform;\n    -webkit-transition-duration: 300ms;\n            transition-duration: 300ms;\n    -webkit-transition-timing-function: cubic-bezier(0.175, 0.665, 0.320, 1), linear;\n            transition-timing-function: cubic-bezier(0.175, 0.665, 0.320, 1), linear;\n}\n\n.articleAnim-exit.articleAnim-exit-active {\n    opacity: 0;\n    -webkit-transform: translate(15vw, 0);\n            transform: translate(15vw, 0);\n    -webkit-transform: translate3d(15vw, 0, 0);\n            transform: translate3d(15vw, 0, 0);\n}\n\n.articlesGroupAnim-enter {\n    opacity: 0.01;\n}\n\n.articlesGroupAnim-enter.articlesGroupAnim-enter-active {\n    opacity: 1;\n    -webkit-transition: opacity 300ms ease-in;\n    transition: opacity 300ms ease-in;\n}\n.articlesGroupAnim-exit {\n    opacity: 1;\n    -webkit-transition-property:opacity;\n    transition-property:opacity;\n    -webkit-transition-duration: 300ms;\n            transition-duration: 300ms;\n}\n\n.articlesGroupAnim-exit.articlesGroupAnim-exit-active {\n    opacity: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Additional/css/TaskBox.css":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/Components/Additional/css/TaskBox.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".taskSourceIcon {\n    width: 20px; height: 20px;\n}\n.taskTitle {\n    text-shadow: 0 0 10px #00000057;\n    text-overflow: ellipsis;\n    width: 70%;\n    outline: none;\n    background: transparent;\n    border: none;\n    color: white;\n    font-family: 'Lato', sans-serif;\n    font-weight: 300;\n    border-bottom: 0 solid #dadada;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n    font-size: 2.3vh;\n}\n.taskTitle:focus {\n    border-bottom: 0.3vh solid #dadada;\n}\n.overdueTask {\n    color: rgb(255, 56, 56)\n}\n.dateSpan {\n    right: 3.3vw;\n    position: absolute;\n    font-family: 'Lato', sans-serif;\n    font-size: 1.7vh;\n    padding: .68vh\n}\n\n.dateSpan:hover {\n    border-radius: 5px;\n    background: rgba(32, 29, 29, 0.77)\n}\n.wrapperDate {\n    position: absolute;\n    bottom: 50vh;\n    z-index:10000000000;\n    left: 37vw;\n}\n\n#todolist {\n    display: block;\n    margin-top: 1vh;\n    left: 50%;\n    width: 35vw;\n    height: 34vh;\n    margin-left: auto;\n    margin-right: auto\n}\n\n#todolist h4 {\n    margin-top: 1vh;\n    margin-bottom: 1vh;\n    font-family: 'Lato', sans-serif;\n    font-weight: normal;\n    font-size: 1.6vh\n}\n\nul#tasksUL {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    /*overflow-y: scroll;*/\n    height: 37vh\n}\n\nul#tasksUL::-webkit-scrollbar {\n    display: none;\n}\n\nul#tasksUL li {\n    cursor: pointer;\n    position: relative;\n    padding: 1.37vh .83vw 1.37vh 2.1vw;\n    /*background: rgba(0, 0, 0, 0.4);*/\n    font-size: 1.75vh;\n    color: #fff;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -webkit-transition: -webkit-transform 1s ease-in-out;\n    transition: -webkit-transform 1s ease-in-out;\n    transition: transform 1s ease-in-out;\n    transition: transform 1s ease-in-out, -webkit-transform 1s ease-in-out;\n    \n    \n}\n\n\nul#tasksUL li img {\n    float: right;\n    vertical-align: baseline ;\n}\n\n\n\nul#tasksUL li:hover {\n    background: rgba(209, 193, 193, 0.3)\n}\n\nul#tasksUL li.checked {\n    background: rgba(105, 105, 105, 0.3);\n    color: #fff;\n    text-decoration: line-through\n}\n\nul#tasksUL li.checked::before {\n    content: '';\n    position: absolute;\n    border-color: #fff;\n    border-style: solid;\n    border-width: 0 .12vw .23vh 0;\n    top: 1.14vh;\n    left: .95vw;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    height: 1.71vh;\n    width: .42vw\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Additional/css/TodoList.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/Components/Additional/css/TodoList.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".noTasksBanner {\n    text-align: center;\n    position: relative;\n    overflow: hidden;\n    /*background: rgba(0, 0, 0, 0.4);*/\n    border-radius: 0 0 10px 10px;\n    overflow-y: auto;\n    color: white;\n    font-family: 'Lato', sans-serif;\n    font-weight: 300;\n    font-size: 1.65vh\n}\n.noTasksBanner a {\n    color: white;\n    font-family: 'Lato', sans-serif;\n    font-weight: 300;\n    display: inline-block\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Additional/css/Weather.css":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/Components/Additional/css/Weather.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".simpleReactWeather {\n    color: #fff;\n    /*font-family: weather;*/\n    font-size: 4vh;\n    font-weight: normal;\n    font-style: normal;\n    line-height: 1.0;\n}\n.simpleReactWeather-icon {\n    position: relative;\n    float:left;\n    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n\n.simpleReactWeather-temp {\n    font-size: 3.14vh;\n    color: #fff;\n    float: top-right;\n    font-weight: 300;\n    font-family: 'Lato', sans-serif;\n    position: relative;\n    height:90%;\n    margin:auto;\n    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.simpleReactWeather-city {\n    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n    position: absolute;\n    bottom:0;\n    font-size: 1.4vh;\n    font-weight: 300;\n    font-family: 'Lato', sans-serif;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/Main.css":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/Main.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);", ""]);

// module
exports.push([module.i, "body {\n\n    overflow: hidden;\n    \n    \n}\n.BackgroundImage {\n    position: absolute;\n    background: no-repeat center center fixed;\n    background-size: cover;\n    -webkit-animation: fadein 0.7s;\n            animation: fadein 0.7s;\n    width: 100%;\n    height: 100%;\n    margin:0;\n    z-index:-100;\n    top:0;\n    left:0;\n    -webkit-transition: background-image .5s ease-in-out;\n    transition: background-image .5s ease-in-out;\n}\n@-webkit-keyframes fadein {\n  from { opacity: 0.4; }\n  to   { opacity: 1; }\n}\n@keyframes fadein {\n  from { opacity: 0.4; }\n  to   { opacity: 1; }\n}\n::-webkit-scrollbar {\n    width: 12px;\n    height: 12px\n}\n\n::-webkit-scrollbar-track {\n    background: rgba(0, 0, 0, 0.1)\n}\n\n::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.4)\n}\n\nspan {\n    display: inline-block\n}\n\n.header input[type=\"text\"] {\n    padding: 0.1vh 0 0.74vh 0.2vw;\n    border-width: 0 0 2px 0;\n    color: #eee8e8;\n    font-size: 1.6vh;\n    background: transparent;\n    border-bottom: 2px solid #dadada;\n    -webkit-transition: border 700ms ease-in-out;\n    transition: border 700ms ease-in-out;\n    margin-left: 1.2vw;\n    padding-bottom: -20px;\n    text-shadow: 0 0 7px #00000057;\n}\n\n.header input[type=\"text\"]::-webkit-input-placeholder {\n    color: #eee8e8;\n    text-shadow: 0 0 10px #00000057;\n}\n\n.header input[type=\"text\"]::-ms-input-placeholder {\n    color: #eee8e8;\n    text-shadow: 0 0 10px #00000057;\n}\n\n.header input[type=\"text\"]::placeholder {\n    color: #eee8e8;\n    text-shadow: 0 0 10px #00000057;\n}\n\n.header input[type=\"text\"]:focus {\n    outline: 0;\n    border-color: #9ecaed;\n    border-bottom: 2px solid #66be8c\n}\n\n.header:after {\n    content: \"\";\n    display: table;\n    clear: both\n}\n\n.header img {\n    cursor: pointer;\n    padding: 5px;\n    position: relative;\n    border-radius: 7px;\n    margin-bottom: .3vh;\n}\n\n.header input[type=\"image\"] {\n    margin-left: -4.2vw;\n    width: 2.5vh;\n    height: 2.5vh;\n    -webkit-transition: -webkit-transform .5s ease-in-out;\n    transition: -webkit-transform .5s ease-in-out;\n    transition: transform .5s ease-in-out;\n    transition: transform .5s ease-in-out, -webkit-transform .5s ease-in-out;\n}\n\n.header input[type=\"image\"]:hover {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n}\n\n.header input {\n    border: 0;\n    width: 50%;\n    float: left;\n    font-size: 1.48vh\n}\n\n#settings {\n    -webkit-transition: -webkit-transform 1s ease-in-out;\n    transition: -webkit-transform 1s ease-in-out;\n    transition: transform 1s ease-in-out;\n    transition: transform 1s ease-in-out, -webkit-transform 1s ease-in-out;\n    width: 4vw;\n    height: 4vh;\n    margin: 1vh;\n    margin-left: -1vw\n}\n\n#settings:hover {\n    -webkit-transform: rotate(120deg);\n    transform: rotate(120deg)\n}\n\n#greetingtext {\n    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n    color: white;\n    font-size: 4.14vh;\n    font-family: 'Lato', sans-serif;\n    font-weight: 300;\n    display: block;\n    margin-top: 34vh;\n    left: 50%;\n    text-align: center;\n    text-shadow: 0 0 10px #00000057;\n}\n\n#small {\n    font-family: 'Lato', sans-serif;\n    margin-top: 0;\n    text-align: center;\n    font-size: 4.14vh;\n    vertical-align: middle\n}\n\n\n\n.header {\n    white-space: nowrap;\n    /*background-color: rgba(0, 0, 0, 0.4);*/\n    border-radius: 25px 25px 0 0;\n    padding: .57vh .89vw;\n    color: white;\n    text-align: center;\n    margin-top: 1vh;\n    margin-bottom: 1vh\n}\n\n\n\n\n\n\n\n\n\n.addBtn {\n    width: 4vh;\n    height: 4vh;\n    border-radius: 50%;\n    background: rgba(109, 108, 108, 0.397);\n    color: white;\n    float: right;\n    border-color: #dbcece2f;\n    text-align: center;\n    font-size: 2vh;\n    cursor: pointer;\n    -webkit-transition: .3s;\n    transition: .3s\n}\n\n.addBtn:hover {\n    background-color: #201f1f88\n}\n\n/*\n@font-face {\n    font-family: 'weather';\n    src: url('../fonts/artill_clean_icons-webfont.eot');\n    src: url('../fonts/artill_clean_icons-webfont.woff') format('woff'), url('../fonts/artill_clean_icons-webfont.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal\n}\n*/\n#weather {\n    height: 7.7vh;\n    position: absolute;\n    width: 7vw;\n    margin: 0 auto;\n    text-align: center;\n    text-transform: uppercase;\n    right: 0vw;\n    top: 4vh;\n    /*overflow: hidden;*/\n}\n\n\n#clock {\n    right: 9vw;\n    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n    position: absolute;\n    top: 3.2vh;\n    color: white;\n    font-size: 5.4vh;\n    font-family: 'Lato', sans-serif;\n    font-weight: 300;\n    text-shadow: 0 0 5px #00000057;\n}\n\n#clock:hover {\n    background: rgba(50, 50, 50, 0.5);\n    cursor: pointer;\n    border-radius: 10px\n}\n\n\n\n#mailinboxp {\n    position: absolute;\n    left: 1.3vw;\n    bottom: .8vh;\n    color: white;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    font-size: 2vh\n}\n\n#mailinboxp:hover {\n    text-shadow: 2px 2px 4px #000;\n    cursor: pointer\n}\n\n#mailinbox ul {\n    list-style-type: none\n}\n\n#mailinbox li {\n    margin-top: 1vh;\n    font-size: 2.2vh;\n    color: white;\n    font-family: 'Lato', sans-serif;\n    font-weight: 300;\n    list-style-type: none\n}\n\n#mailinbox li:first-child {\n    margin-top: 0vh\n}\n\n#mailinbox li:hover {\n    background: rgba(30, 30, 30, 0.5);\n    cursor: pointer\n}\n\n#mailinbox img {\n    margin-bottom: -0.7vh;\n    margin-right: .7vh;\n    margin-left: .4vh;\n    width: 1.6vw;\n    height: 3vh\n}\n\n#mailinbox {\n    width: 24vw;\n    height: 48vh;\n    position: absolute;\n    overflow: hidden;\n    bottom: 6vh;\n    left: 1vw;\n    background: rgba(0, 0, 0, 0.5);\n    border-radius: 10px;\n    overflow-y: auto\n}\n\n#mailinbox li h6 {\n    font-weight: 300;\n    margin-top: 1vh;\n    margin-bottom: .5vh;\n    margin-left: .3vw;\n    font-size: 1.5vh;\n    color: white;\n    font-family: 'Lato', sans-serif;\n    font-weight: 300;\n    list-style-type: none\n}\n\n#loadmore {\n    color: white;\n    font-family: 'Lato', sans-serif;\n    font-weight: 300;\n    text-align: center;\n    text-decoration: underline\n}\n\n#loadmore span {\n    text-align: center;\n    text-shadow: 1px 1px 3px #666;\n    color: #fff;\n    font-size: 1.4vh;\n    padding: .6vh .8vw .6vh .8vw;\n    background: transparent;\n    cursor: pointer\n}\n\n\n\n.CircleRedIcon {\n    width: 3vh;\n    height: 3vh;\n    line-height: 3vh;\n    right: -46%;\n    position: absolute;\n    border-radius: 50%;\n    background: rgba(250, 0, 0, 0.7);\n    color: white;\n    text-align: center;\n    font-size: 2vh;\n    cursor: pointer;\n    -webkit-transition: .3s;\n    transition: .3s;\n    font-family: \"Ubuntu Light\", Ubuntu;\n    font-weight: 300;\n}\n\n#notificon {\n    right: -46%;\n}\n\n#notificon p {\n    margin-top: 0;\n}\n\n\n#calendicon {\n    width: 2vh;\n    height: 2vh;\n    right: 9.3vw;\n    position: absolute;\n    top: 7vh;\n    border-radius: 100%;\n    background: rgba(20, 20, 20, 0.7);\n    color: white;\n    border: 0;\n    text-align: center;\n    font-size: 1.8vh;\n    cursor: pointer;\n    -webkit-transition: .3s;\n    transition: .3s;\n    font-family: 'Lato', sans-serif;\n    font-weight: lighter;\n    display: none\n}\n\n#calendicon p {\n    margin-top: -0.1vh\n}\n\n#calendarevent {\n    font-family: 'Lato', sans-serif;\n    border-radius: 10px;\n    font-weight: 400\n}\n\n#calendarevent ul, ol, li {\n    list-style: none;\n    padding: 0;\n    margin: 0\n}\n\n#settingsbox {\n    width: 35vw;\n    height: 40vh;\n    position: absolute;\n    overflow: hidden;\n    top: 1.5vh;\n    left: 3.5vw;\n    background: rgba(0, 0, 0, 0.5);\n    border-radius: 10px;\n    display: none;\n    overflow-y: auto\n}\n\n#settingsbar span {\n    color: white;\n    font-family: 'Lato', sans-serif;\n    font-size: 2.3vh;\n    margin-left: 2vw;\n    font-weight: 300\n}\n\n#settingsbar {\n    margin-left: -1vw;\n    margin-top: .5vh\n}\n\n#settingsbar .spanactive {\n    border-bottom: 1px solid #66be8c;\n    transition: border-color 1s linear;\n    -moz-transition: border-color 1s linear;\n    -o-transition: border-color 1s linear;\n    -webkit-transition: border-color 1s linear\n}\n\n#settingsbar span:not(.spanactive):hover {\n    border-bottom: 1px solid rgba(240, 240, 240, 0.7);\n    cursor: pointer\n}\n\n#settingscontent {\n    color: white;\n    font-family: 'Lato', sans-serif;\n    margin-left: 1vw;\n    margin-right: 1vw\n}\n\n#linebreak {\n    background-color: rgba(240, 240, 240, 0.7);\n    margin-top: -1.1vh;\n    margin-bottom: -1.1vh;\n    height: 1px;\n    width: 99%\n}\n\n#contentgeneral input[name=\"user_name\"] {\n    background-color: transparent;\n    border: 0;\n    text-indent: .25vw;\n    padding-left: 0;\n    color: white;\n    box-sizing: border-box;\n    font-family: 'Ubuntu Light', 'Ubuntu';\n    font-weight: 300;\n    margin-top: 1.5vh;\n    font-size: 1.85vh;\n    height: 2vh;\n    position: absolute;\n    right: 5%;\n    width: 25%;\n    top: 10%\n}\n\n#contentgeneral input[name=\"user_name\"]:focus {\n    outline: 0;\n    border-color: #9ecaed;\n    box-shadow: 0 0 10px #66be8c;\n    border-radius: 4px\n}\n\n#contentgeneral input[name='background_tasks_update'] {\n    background-color: transparent;\n    border: 0;\n    text-indent: .25vw;\n    padding-left: 0;\n    color: white;\n    box-sizing: border-box;\n    font-family: 'Ubuntu Light', 'Ubuntu';\n    font-weight: 300;\n    margin-top: 1.5vh;\n    font-size: 1.85vh;\n    height: 2vh;\n    position: absolute;\n    right: 5%;\n    width: 25%;\n    top: 45.5%\n}\n\n#contentgeneral input[name=\"background_tasks_update\"]:focus {\n    outline: 0;\n    border-color: #9ecaed;\n    box-shadow: 0 0 10px #66be8c;\n    border-radius: 4px\n}\n\n#contentgeneral a {\n    color: white;\n    margin-top: 3%;\n    margin-left: 43%;\n    display: inline-block;\n    right: 5%;\n    width: 25%;\n    font-size: 1.85vh;\n    position: absolute\n}\n\n#contentgeneral {\n    font-size: 2.15vh\n}\n\n#contentgeneral select {\n    border-radius: 5px;\n    background-color: transparent;\n    color: white;\n    display: inline-block;\n    position: absolute;\n    right: 5%;\n    height: 2.5vh;\n    width: 25%;\n    margin-top: 3.1%\n}\n\n#contentgeneral select option {\n    background: #000\n}\n\n#settingscontent div:not(.settingsactive) {\n    display: none\n}\n\n#contentbackground img {\n    width: 10vw;\n    height: 12vh;\n    border-radius: 5px;\n    cursor: pointer;\n    margin-left: .5vw\n}\n\n#contentbackground p {\n    font-size: 1.8vh\n}\n\n#contentcontact p {\n    font-size: 1.8vh\n}\n\n#backgroundphotos {\n    display: block!important;\n    margin-left: .8%;\n    margin-bottom: 2vh\n}\n\n#backgroundphotos a {\n    color: white\n}\n\n#backgroundphotos img:nth-child(n+4) {\n    margin-top: 1.8vh\n}\n\n#contentbackground img:hover {\n    -webkit-filter: brightness(80%);\n    filter: brightness(80%);\n    -webkit-transition: all .5s ease;\n    transition: all .5s ease\n}\n\n#contenttodolist {\n    font-size: 2.15vh\n}\n\n#todoserviceselect {\n    border-radius: 5px;\n    background-color: transparent;\n    color: white;\n    display: inline-block;\n    position: absolute;\n    right: 5%;\n    height: 2.5vh;\n    width: 25%;\n    top: 14%\n}\n\n#tasklistselect {\n    display: inline-block;\n    position: absolute;\n    border-radius: 5px;\n    background-color: transparent;\n    color: white;\n    height: 2.5vh;\n    width: 25%;\n    right: 5%;\n    margin-top: 3%\n}\n\n#contenttodolist select option {\n    background: #000\n}\n\n.date_span.notdone {\n    color: #f00\n}\n\n.date_span.notdoneToday {\n    color: #fff\n}\n\n#hiddenpmail {\n    display: none;\n    margin-top: 1%;\n    text-align: right;\n    right: 2%;\n    margin-bottom: 1%;\n    text-decoration: underline;\n    font-weight: 300;\n    padding: .1vh\n}\n\n#hiddenpmail span:hover {\n    cursor: pointer;\n    border-radius: 5px;\n    background: rgba(15, 15, 15, 0.5)\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/Components/Additional/Clock.js":
/*!********************************************!*\
  !*** ./src/Components/Additional/Clock.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/home/ignacy/Dokumenty/chrome-extension-react/src/Components/Additional/Clock.js";


var Clock =
/*#__PURE__*/
function (_Component) {
  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Clock, _Component);

  function Clock(props) {
    var _this;

    Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Clock);

    _this = Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Clock).call(this, props));
    _this.state = {
      date: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    return _this;
  }

  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Clock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.timer = setInterval(function () {
        if (_this2.state.date != new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        })) {
          _this2.setState({
            date: new Date().toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit'
            })
          });
        }
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, this.state.date);
    }
  }]);

  return Clock;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Clock);

/***/ }),

/***/ "./src/Components/Additional/Mail.js":
/*!*******************************************!*\
  !*** ./src/Components/Additional/Mail.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Mail_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/Mail.css */ "./src/Components/Additional/css/Mail.css");
/* harmony import */ var _css_Mail_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Mail_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_onclickoutside__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-onclickoutside */ "./node_modules/react-onclickoutside/dist/react-onclickoutside.es.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bottom_scroll_listener__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bottom-scroll-listener */ "./node_modules/react-bottom-scroll-listener/dist/index.es.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../db */ "./src/db.js");





var _jsxFileName = "/home/ignacy/Dokumenty/chrome-extension-react/src/Components/Additional/Mail.js";






 //Functions for different colors for every sender

function djb2(str) {
  var hash = 5381;

  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    /* hash * 33 + c */
  }

  return hash;
}

function hashStringToColor(str) {
  var hash = djb2(str);
  var r = (hash & 0xFF0000) >> 16;
  var g = (hash & 0x00FF00) >> 8;
  var b = hash & 0x0000FF;
  return "#" + ("0" + r.toString(16)).substr(-2) + ("0" + g.toString(16)).substr(-2) + ("0" + b.toString(16)).substr(-2);
}

var Mail =
/*#__PURE__*/
function (_Component) {
  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Mail, _Component);

  function Mail(props) {
    var _this;

    Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Mail);

    _this = Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Mail).call(this, props));

    _this.updateMail = function () {
      _db__WEBPACK_IMPORTED_MODULE_11__["default"].mails.orderBy('date').reverse().toArray().then(function (mails) {
        _this.setState({
          mails: mails,
          loggedIn: true,
          numberOfUnread: mails.filter(function (mail) {
            return mail.labelIds.indexOf("UNREAD") != -1;
          }).length
        });
      });
    };

    _this.handleClickOpen = function () {
      _this.setState({
        isHidden: false
      });
    };

    _this.handleClickOutside = function (evt) {
      _this.setState({
        isHidden: true
      });
    };

    _this.handleMailRead = function (evt) {
      evt.persist(); //let datatoSend = evt.target.getAttribute("unread") == "true" ? JSON.stringify({ "removeLabelIds": ["UNREAD"] }) : JSON.stringify({ "addLabelIds": ["UNREAD"] })

      /*
      window.chrome.runtime.sendMessage({ update_mail: "true", method: 'POST', url: `https://www.googleapis.com/gmail/v1/users/me/messages/${evt.target.id}/modify?alt=json`, data: datatoSend }, response => {
          console.log(response);
      });
      */

      _db__WEBPACK_IMPORTED_MODULE_11__["default"].mails.get(evt.target.id, function (mail) {
        if (evt.target.getAttribute("unread") == "true") {
          mail.labelIds.splice(mail.labelIds.indexOf("UNREAD"), 1);
        } else {
          mail.labelIds.push("UNREAD");
        }

        _db__WEBPACK_IMPORTED_MODULE_11__["default"].mails.update(evt.target.id, {
          labelIds: mail.labelIds
        }).then(function () {
          _this.updateMail();
        });
      });
    };

    _this.handleMarkAllRead = function () {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _this.state.mails[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var mail = _step.value;

          if (mail.labelIds.indexOf("UNREAD") != -1) {
            /*
            window.chrome.runtime.sendMessage({ update_mail: "true", method: 'POST', url: `https://www.googleapis.com/gmail/v1/users/me/messages/${mail.id}/modify?alt=json`, data: JSON.stringify({ "removeLabelIds": ["UNREAD"] }) }, response => {
                console.log(response);
            });
            */
            mail.labelIds.splice(mail.labelIds.indexOf("UNREAD"), 1);
            _db__WEBPACK_IMPORTED_MODULE_11__["default"].mails.update(mail.id, {
              labelIds: mail.labelIds
            });
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      _this.updateMail();
    };

    _this.onBottomScroll = function () {};

    _this.state = {
      isHidden: true,
      mails: {},
      loggedIn: false
    };
    return _this;
  }

  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Mail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (localStorage.getItem("gmail_auth") == 1 && localStorage.getItem("tokenGoogle")) {
        this.updateMail();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "mailWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        id: "mailinboxp",
        onClick: this.handleClickOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "Mail inbox", this.state.loggedIn && this.state.mails && this.state.numberOfUnread !== 0 && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "CircleRedIcon",
        id: "notificon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, this.state.numberOfUnread > 9 ? "9+" : this.state.numberOfUnread)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_8__["TransitionGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, !this.state.isHidden && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_8__["CSSTransition"], {
        classNames: "articlesGroupAnim",
        timeout: {
          exit: 300
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "mailinbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bottom_scroll_listener__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onBottom: this.onBottomScroll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }), !this.state.loggedIn && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        id: "nomailsbanner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Currently integration with Gmail is disabled, to enable it go to ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#/setup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "setup page.")), this.state.loggedIn && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        onClick: this.handleMarkAllRead,
        className: "mailMainTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "Recent Mail", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        title: "Mark all as read",
        class: "material-icons markAllasReadButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "clear_all")), this.state.mails.map(function (mail) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          id: mail.id,
          key: mail.id,
          className: "someMail",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "mailFromLogo",
          style: {
            backgroundColor: hashStringToColor(mail.from)
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        }, mail.from.replace("\"", "").substring(0, 1).toUpperCase()), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: "https://mail.google.com/mail/u/0/#inbox/".concat(mail.id),
          id: mail.id,
          target: "_blank",
          className: mail.labelIds.indexOf("UNREAD") != -1 ? "mailTitle mailBold" : "mailTitle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        }, mail.title
        /* `${mail.title.length > 80 ? mail.title.substring(0, 100) : mail.title}...`*/
        ), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "mailFrom",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          },
          __self: this
        }, mail.from.replace(/\"/g, "").replace(/<[^>]*>/, "")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
          id: mail.id,
          unread: mail.labelIds.indexOf("UNREAD") != -1 ? "true" : "false",
          onClick: _this2.handleMailRead,
          className: "material-icons archiveMailIcon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }, mail.labelIds.indexOf("UNREAD") != -1 ? "drafts" : "markunread"));
      }))))));
    }
  }]);

  return Mail;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_onclickoutside__WEBPACK_IMPORTED_MODULE_7__["default"])(Mail));

/***/ }),

/***/ "./src/Components/Additional/SavedArticles.js":
/*!****************************************************!*\
  !*** ./src/Components/Additional/SavedArticles.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_SavedArticles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/SavedArticles.css */ "./src/Components/Additional/css/SavedArticles.css");
/* harmony import */ var _css_SavedArticles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_SavedArticles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_onclickoutside__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-onclickoutside */ "./node_modules/react-onclickoutside/dist/react-onclickoutside.es.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/home/ignacy/Dokumenty/chrome-extension-react/src/Components/Additional/SavedArticles.js";






var SavedArticles =
/*#__PURE__*/
function (_Component) {
  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SavedArticles, _Component);

  function SavedArticles(props) {
    var _this;

    Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SavedArticles);

    _this = Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SavedArticles).call(this, props));

    _this.handleClickOpen = function () {
      _this.setState({
        isHidden: false
      });
    };

    _this.handleClickOutside = function (evt) {
      _this.setState({
        isHidden: true
      });
    };

    _this.handleArticleArchive = function (evt) {
      evt.persist();
      fetch("https://api-startpage-dev.herokuapp.com/api/pocket", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          "type": "archiveItem",
          "access_token": localStorage.getItem("tokenPocket"),
          "item_id": evt.target.id
        })
      }).then(function (response) {
        return response.json();
      }).then(function (res) {}).catch(function (res) {
        console.log(res);
      });
      var tempState = _this.state.response;
      delete tempState.list[evt.target.id];

      _this.setState({
        response: tempState
      });
    };

    _this.state = {
      isHidden: true,
      response: {},
      loggedIn: false
    };
    return _this;
  }

  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SavedArticles, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (localStorage.getItem("tokenPocket") != undefined) {
        this.setState({
          loggedIn: true
        });
        fetch("https://api-startpage-dev.herokuapp.com/api/pocket", {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({
            "access_token": localStorage.getItem("tokenPocket"),
            "type": "getitems"
          })
        }).then(function (response) {
          return response.json();
        }).then(function (res) {
          _this2.setState({
            response: res
          });

          console.log(res);
        }).catch(function (res) {
          console.log(res);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "savedArticlesWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        id: "savedArticlesText",
        onClick: this.handleClickOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Saved articles", this.state.response.list && Object.keys(this.state.response.list).length !== 0 && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "CircleRedIcon",
        id: "articleIcon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, Object.keys(this.state.response.list).length > 9 ? "9+" : Object.keys(this.state.response.list).length)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_8__["TransitionGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, !this.state.isHidden && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_8__["CSSTransition"], {
        classNames: "articlesGroupAnim",
        timeout: {
          exit: 300
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "savedArticles",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, !this.state.loggedIn && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        id: "noArticlesBanner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Currently integration with Pocket is disabled, to enable it go to ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "setup.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "setup page.")), this.state.response.list && Object.keys(this.state.response.list).length == 0 && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        id: "noAvailableArticlesBanner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "There are currently no saved articles on your Pocket account."), this.state.loggedIn && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_8__["TransitionGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, Object.keys(this.state.response.list).map(function (key) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_8__["CSSTransition"], {
          key: _this3.state.response.list[key].item_id,
          classNames: "articleAnim",
          timeout: {
            exit: 300
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          id: _this3.state.response.list[key].item_id,
          key: _this3.state.response.list[key].item_id,
          className: "someArticle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "articleImageWrapper",
          style: {
            backgroundImage: "url(\"".concat(_this3.state.response.list[key].top_image_url, "\")")
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: _this3.state.response.list[key].resolved_url,
          id: _this3.state.response.list[key].item_id,
          target: "_blank",
          className: "articleTitle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, "".concat(_this3.state.response.list[key].resolved_title.length > 50 ? _this3.state.response.list[key].resolved_title.substring(0, 50) : _this3.state.response.list[key].resolved_title, "...")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
          title: "Move to archive",
          id: _this3.state.response.list[key].item_id,
          onClick: _this3.handleArticleArchive,
          className: "material-icons archiveArticleIcon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, "archive")));
      }))))));
    }
  }]);

  return SavedArticles;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_onclickoutside__WEBPACK_IMPORTED_MODULE_7__["default"])(SavedArticles));

/***/ }),

/***/ "./src/Components/Additional/TaskBox.js":
/*!**********************************************!*\
  !*** ./src/Components/Additional/TaskBox.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_TaskBox_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/TaskBox.css */ "./src/Components/Additional/css/TaskBox.css");
/* harmony import */ var _css_TaskBox_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_TaskBox_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _css_DateTimeInput_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css/DateTimeInput.css */ "./src/Components/Additional/css/DateTimeInput.css");
/* harmony import */ var _css_DateTimeInput_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_DateTimeInput_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _icons_asana_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../icons/asana.png */ "./src/icons/asana.png");
/* harmony import */ var _icons_asana_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_icons_asana_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _icons_todoist_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../icons/todoist.png */ "./src/icons/todoist.png");
/* harmony import */ var _icons_todoist_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_icons_todoist_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _icons_wunderlist_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../icons/wunderlist.png */ "./src/icons/wunderlist.png");
/* harmony import */ var _icons_wunderlist_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_icons_wunderlist_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _icons_github_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../icons/github.png */ "./src/icons/github.png");
/* harmony import */ var _icons_github_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_icons_github_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _icons_google_tasks_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../icons/google-tasks.png */ "./src/icons/google-tasks.png");
/* harmony import */ var _icons_google_tasks_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_icons_google_tasks_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _icons_trello_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../icons/trello.png */ "./src/icons/trello.png");
/* harmony import */ var _icons_trello_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_icons_trello_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_date_and_time_picker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-date-and-time-picker */ "./node_modules/react-date-and-time-picker/index.js");
/* harmony import */ var react_date_and_time_picker__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_date_and_time_picker__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_onclickoutside__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-onclickoutside */ "./node_modules/react-onclickoutside/dist/react-onclickoutside.es.js");
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../db */ "./src/db.js");





var _jsxFileName = "/home/ignacy/Dokumenty/chrome-extension-react/src/Components/Additional/TaskBox.js";














var TaskBox =
/*#__PURE__*/
function (_Component) {
  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TaskBox, _Component);

  function TaskBox(props) {
    var _this;

    Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TaskBox);

    _this = Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TaskBox).call(this, props));

    _this.handleDateClick = function () {
      _this.setState({
        isHiddenDatePicker: false
      });
    };

    _this.handleDateChange = function (date) {
      _this.setState({
        date: date
      }); //Update the database


      _db__WEBPACK_IMPORTED_MODULE_17__["default"].tasks.update(_this.props.id, {
        date: date.toISOString()
      });
      /*
      let windowbackground = window.chrome.extension.getBackgroundPage();
      
      switch (this.props.source) {
          case "wunderlist":
              windowbackground.WunderlistAPI.http.tasks.update(this.props.id, this.state.list_id, {
                  "due_date": date.toISOString()
              }).done(res => {
                  this.setState({
                      list_id: res.revision
                  })
              });
              break;
          case "todoist":
              windowbackground.todoistupdate = null;
              windowbackground.todoistupdate = new windowbackground.Todoist();
              windowbackground.todoistupdate.token = localStorage.getItem("tokenTodoist");
              windowbackground.todoistupdate.sync.oncomplete = data => {
                  windowbackground.todoistupdate.updateItem({ "id": this.props.id, "due_date_utc": date.toISOString(), "date_string": date.toISOString() });
                  windowbackground.todoistupdate.write();
              }
              windowbackground.todoistupdate.sync();
              /*
              windowbackground.todoist.updateItem({ "id": this.props.id, "due_date_utc": TodoistDateString(this._d) });
              windowbackground.todoist.write();
              
              break;
          case "googletasks":
              windowbackground.authenticatedXhrCalendar("PUT", `https://www.googleapis.com/tasks/v1/lists/${this.state.list_id}/tasks/${this.props.id}?alt=json`, () => {
               }, JSON.stringify({
                  "due": date.toISOString(),
                  "id": this.props.id
              }));
              break;
          case "asana":
              windowbackground.client.tasks.update(this.props.id, {
                  "due_on": date.toISOString()
              });
              break;
          case "trello":
              windowbackground.Trello.put(`/cards/${this.props.id}`, { due: date.toISOString() });
              break;
          default:
              break;
       }
      */
    };

    _this.handleClickOutside = function (evt) {
      _this.setState({
        isHiddenDatePicker: true
      });
    };

    _this.state = {
      title: _this.props.title,
      date: _this.props.date,
      isHiddenDatePicker: true,
      list_id: _this.props.list_id
    };
    return _this;
  }

  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TaskBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var sourceIcon;

      switch (this.props.source) {
        case "wunderlist":
          sourceIcon = _icons_wunderlist_png__WEBPACK_IMPORTED_MODULE_10___default.a;
          break;

        case "todoist":
          sourceIcon = _icons_todoist_png__WEBPACK_IMPORTED_MODULE_9___default.a;
          break;

        case "googletasks":
          sourceIcon = _icons_google_tasks_png__WEBPACK_IMPORTED_MODULE_12___default.a;
          break;

        case "asana":
          sourceIcon = _icons_asana_png__WEBPACK_IMPORTED_MODULE_8___default.a;
          break;

        case "trello":
          sourceIcon = _icons_trello_png__WEBPACK_IMPORTED_MODULE_13___default.a;
          break;

        case "github":
          sourceIcon = _icons_github_png__WEBPACK_IMPORTED_MODULE_11___default.a;

        default:
          break;
      }

      this.setState({
        sourceIcon: sourceIcon
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: this.state.source,
        id: this.props.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        className: "taskTitle",
        spellCheck: false,
        value: this.state.title,
        title: this.state.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: moment__WEBPACK_IMPORTED_MODULE_14___default()(new Date()).isBefore(this.state.date) ? "dateSpan" : "dateSpan overdueTask",
        onClick: this.handleDateClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, moment__WEBPACK_IMPORTED_MODULE_14___default()(this.state.date).fromNow()), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "taskSourceIcon",
        src: this.state.sourceIcon,
        alt: "This task was added from ".concat(this.props.source[0].toUpperCase() + this.props.source.slice(1)),
        title: "This task was added from ".concat(this.props.source[0].toUpperCase() + this.props.source.slice(1)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }), !this.state.isHiddenDatePicker && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "wrapperDate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_date_and_time_picker__WEBPACK_IMPORTED_MODULE_15___default.a, {
        date: new Date(this.state.date) || new Date(),
        onChange: this.handleDateChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      })));
    }
  }]);

  return TaskBox;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_onclickoutside__WEBPACK_IMPORTED_MODULE_16__["default"])(TaskBox));

/***/ }),

/***/ "./src/Components/Additional/TodoList.js":
/*!***********************************************!*\
  !*** ./src/Components/Additional/TodoList.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_TodoList_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/TodoList.css */ "./src/Components/Additional/css/TodoList.css");
/* harmony import */ var _css_TodoList_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_TodoList_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _icons_calendar_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../icons/calendar.svg */ "./src/icons/calendar.svg");
/* harmony import */ var _icons_calendar_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_icons_calendar_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _TaskBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TaskBox */ "./src/Components/Additional/TaskBox.js");
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../db */ "./src/db.js");





var _jsxFileName = "/home/ignacy/Dokumenty/chrome-extension-react/src/Components/Additional/TodoList.js";






var TodoList =
/*#__PURE__*/
function (_Component) {
  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TodoList, _Component);

  function TodoList(props) {
    var _this;

    Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TodoList);

    _this = Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TodoList).call(this, props));
    _this.state = {
      tasks: []
    };
    return _this;
  }

  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TodoList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _db__WEBPACK_IMPORTED_MODULE_9__["default"].tasks.orderBy('date').toArray().then(function (tasks) {
        _this2.setState({
          tasks: tasks
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "todolist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "headerdiv",
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        id: "TitleInput",
        placeholder: "Title...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "image",
        placeholder: "Date...",
        id: "datepicker",
        src: _icons_calendar_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
        readOnly: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "addBtn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "+")), this.state.tasks && this.state.tasks.length === 0 && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "noTasksBanner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Currently you don't have any tasks on your list"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Add some tasks or ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#/setup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "integrate your To-Do list with other services"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        id: "tasksUL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, this.state.tasks.map(function (task) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TaskBox__WEBPACK_IMPORTED_MODULE_8__["default"], {
          title: task.title,
          date: task.date,
          source: task.source,
          list_id: task.tasklistid,
          id: task.id,
          key: task.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        });
      })));
    }
  }]);

  return TodoList;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TodoList);

/***/ }),

/***/ "./src/Components/Additional/Weather.js":
/*!**********************************************!*\
  !*** ./src/Components/Additional/Weather.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_Weather_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./css/Weather.css */ "./src/Components/Additional/css/Weather.css");
/* harmony import */ var _css_Weather_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_Weather_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_weather__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons-weather */ "./node_modules/react-icons-weather/lib/index.js");
/* harmony import */ var react_icons_weather__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_weather__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/home/ignacy/Dokumenty/chrome-extension-react/src/Components/Additional/Weather.js";




var callApi =
/*#__PURE__*/
function () {
  var _ref = Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
  /*#__PURE__*/
  _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee(url) {
    var head, response, respbody;
    return _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            head = {};
            _context.next = 3;
            return fetch(url, {
              method: "GET",
              headers: head
            });

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            respbody = _context.sent;

            if (!(response.status !== 200)) {
              _context.next = 9;
              break;
            }

            throw Error(respbody.message);

          case 9:
            return _context.abrupt("return", respbody);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function callApi(_x) {
    return _ref.apply(this, arguments);
  };
}();

var Weather =
/*#__PURE__*/
function (_Component) {
  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Weather, _Component);

  function Weather(props) {
    var _this;

    Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Weather);

    _this = Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Weather).call(this, props));
    _this.state = {
      temp: '',
      city: '',
      icon: "800"
    };
    return _this;
  }

  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Weather, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.lat && this.props.lon) {
        callApi("http://api.openweathermap.org/data/2.5/weather?lat=".concat(this.props.lat, "&lon=").concat(this.props.lon, "&appid=").concat(this.props.appid), {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "GET"
        }).then(function (res) {
          _this2.setState({
            temp: res.main.temp,
            city: res.name,
            icon: res.weather[0].icon
          });
        }).catch(function (res) {
          console.log(res);
        });
      } else if (this.props.city) {
        callApi("http://api.openweathermap.org/data/2.5/weather?q=".concat(this.props.city, "&appid=").concat(this.props.appid), {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "GET"
        }).then(function (res) {
          console.log(res);

          _this2.setState({
            temp: res.main.temp,
            city: res.name,
            icon: res.weather[0].id
          });

          console.log(res);
        }).catch(function (res) {
          console.log(res);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object.assign({}, this.props, {
        className: "simpleReactWeather",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "simpleReactWeather-city-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_icons_weather__WEBPACK_IMPORTED_MODULE_9___default.a, {
        className: "simpleReactWeather-icon",
        name: "owm",
        iconId: String(this.state.icon),
        flip: "horizontal",
        rotate: "90",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "simpleReactWeather-city",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, this.state.city)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "simpleReactWeather-temp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, this.props.unit == "F" ? Math.round(this.state.temp * (9 / 5) - 459.67) + "°F" : Math.round(this.state.temp - 273.15) + "°C"));
    }
  }]);

  return Weather;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Weather);

/***/ }),

/***/ "./src/Components/Additional/css/DateTimeInput.css":
/*!*********************************************************!*\
  !*** ./src/Components/Additional/css/DateTimeInput.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./DateTimeInput.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Additional/css/DateTimeInput.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./DateTimeInput.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Additional/css/DateTimeInput.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./DateTimeInput.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Additional/css/DateTimeInput.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/Components/Additional/css/Mail.css":
/*!************************************************!*\
  !*** ./src/Components/Additional/css/Mail.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./Mail.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Additional/css/Mail.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./Mail.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Additional/css/Mail.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./Mail.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Additional/css/Mail.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/Components/Additional/css/SavedArticles.css":
/*!*********************************************************!*\
  !*** ./src/Components/Additional/css/SavedArticles.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./SavedArticles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Additional/css/SavedArticles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./SavedArticles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Additional/css/SavedArticles.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./SavedArticles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Additional/css/SavedArticles.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/Components/Additional/css/TaskBox.css":
/*!***************************************************!*\
  !*** ./src/Components/Additional/css/TaskBox.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./TaskBox.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Additional/css/TaskBox.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./TaskBox.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Additional/css/TaskBox.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./TaskBox.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Additional/css/TaskBox.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/Components/Additional/css/TodoList.css":
/*!****************************************************!*\
  !*** ./src/Components/Additional/css/TodoList.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./TodoList.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Additional/css/TodoList.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./TodoList.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Additional/css/TodoList.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./TodoList.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Additional/css/TodoList.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/Components/Additional/css/Weather.css":
/*!***************************************************!*\
  !*** ./src/Components/Additional/css/Weather.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./Weather.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Additional/css/Weather.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./Weather.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Additional/css/Weather.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./Weather.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Additional/css/Weather.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/Main.js":
/*!*********************!*\
  !*** ./src/Main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_Main_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./css/Main.css */ "./src/css/Main.css");
/* harmony import */ var _css_Main_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_Main_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _icons_settings_icon_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons/settings_icon.svg */ "./src/icons/settings_icon.svg");
/* harmony import */ var _icons_settings_icon_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_icons_settings_icon_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Components_Additional_Weather__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/Additional/Weather */ "./src/Components/Additional/Weather.js");
/* harmony import */ var _Components_Additional_Clock__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/Additional/Clock */ "./src/Components/Additional/Clock.js");
/* harmony import */ var _Components_Additional_SavedArticles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/Additional/SavedArticles */ "./src/Components/Additional/SavedArticles.js");
/* harmony import */ var _Components_Additional_TodoList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/Additional/TodoList */ "./src/Components/Additional/TodoList.js");
/* harmony import */ var _Components_Additional_Mail__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/Additional/Mail */ "./src/Components/Additional/Mail.js");







var _jsxFileName = "/home/ignacy/Dokumenty/chrome-extension-react/src/Main.js";









var callApi =
/*#__PURE__*/
function () {
  var _ref = Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
  /*#__PURE__*/
  _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee(url, method, body, jsonCall) {
    var head, response, respbody;
    return _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            head = {};

            if (jsonCall) {
              head = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              };
            }

            _context.next = 4;
            return fetch(url, {
              method: method,
              credentials: "same-origin",
              headers: head,
              //make sure to serialize your JSON body
              body: body
            });

          case 4:
            response = _context.sent;
            _context.next = 7;
            return response.json();

          case 7:
            respbody = _context.sent;

            if (!(response.status !== 200)) {
              _context.next = 10;
              break;
            }

            throw Error(respbody.message);

          case 10:
            return _context.abrupt("return", respbody);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function callApi(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

window.readCookie = function (name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }

  return null;
};

window.writeCookie = function (name, value, hours) {
  if (hours) {
    var date = new Date();
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
  } else {
    var expires = "";
  }

  document.cookie = name + "=" + value + expires + "; path=/";
};

var Main =
/*#__PURE__*/
function (_Component) {
  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Main, _Component);

  function Main(props) {
    var _this;

    Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Main);

    _this = Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Main).call(this, props));

    _this.currentDay = function () {
      var day;

      switch (new Date().getDay()) {
        case 0:
          day = "Sunday";
          break;

        case 1:
          day = "Monday";
          break;

        case 2:
          day = "Tuesday";
          break;

        case 3:
          day = "Wednesday";
          break;

        case 4:
          day = "Thursday";
          break;

        case 5:
          day = "Friday";
          break;

        case 6:
          day = "Saturday";
      }

      _this.setState({
        currentDay: day,
        userName: localStorage.getItem("name")
      });
    };

    _this.handleKeyDown = function (event) {
      console.log(event);

      if (event.keyCode === 13) {
        if (_this.state.navVisible) {
          _this.openNormal();
        } else {
          _this.openNav();
        }
      }
    };

    _this.handleMailOpen = function () {
      _this.setState({
        mailBoxOpen: true
      });
    };

    _this.updateTaskInputValue = function (evt) {
      _this.setState({
        taskInputValue: evt.target.value
      });
    };

    _this.state = {
      taskInputValue: '',
      userName: '',
      currentDay: '',
      tempUnits: 'C'
    };
    return _this;
  }

  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Main, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (window.readCookie("disp_image") == null) {
        var disp_image;
        callApi("".concat("https://orrangenewtab-images-dev-372864bc.netlify.com", "/list.json"), "GET").then(function (data) {
          localStorage.setItem("availableImages", JSON.stringify(data));
          window.writeCookie("imagesarrayneedupdate", "no", 2);
          disp_image = data[Math.floor(Math.random() * data.length + 0)];

          _this2.setState({
            currentImage: "".concat("https://orrangenewtab-images-dev-372864bc.netlify.com", "/images/").concat(disp_image)
          });

          if (localStorage.getItem("backgroundChangeTime")) {
            window.writeCookie("disp_image", disp_image, localStorage.getItem("backgroundChangeTime"));
          } else {
            localStorage.setItem("backgroundChangeTime", 4);
            window.writeCookie("disp_image", disp_image, 4);
          }
        }).catch(function (err) {
          return console.log(err);
        });
      } else {
        disp_image = window.readCookie("disp_image");
        this.setState({
          currentImage: "".concat("https://orrangenewtab-images-dev-372864bc.netlify.com", "/images/").concat(disp_image)
        });
      }

      this.currentDay();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "Main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "BackgroundImage",
        style: {
          backgroundImage: "url('" + this.state.currentImage + "')"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        style: {
          fontSize: "30px",
          cursor: "pointer"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        id: "settings",
        src: _icons_settings_icon_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
        name: "settings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        id: "greetingtext",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "Have a nice ", this.state.currentDay, ", ", this.state.userName), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_Additional_TodoList__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "clock",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_Additional_Clock__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "weather",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_Additional_Weather__WEBPACK_IMPORTED_MODULE_10__["default"], {
        unit: this.state.tempUnits,
        city: "Warsaw",
        appid: "e1b9c3c4f419e12a1707f7954069e310",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      })), this.state.articlesOpen && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_Additional_SavedArticles__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "calendarevent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_Additional_Mail__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        id: "calendicon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_Additional_SavedArticles__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "settingsbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "settingsbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "spanactive",
        id: "spangeneral",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "General"), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        id: "spanbackground",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "Background"), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        id: "spantodolist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, "To-Do List"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        id: "spancontact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, "Contact")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "settingscontent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "contentgeneral",
        className: "settingsactive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, "Name")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        name: "user_name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        id: "linebreak",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, "Temperature unit")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
        id: "temperature",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "c",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "Celsius"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "f",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, "Fahrenheit")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        id: "linebreak",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, "Time between background changes")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
        id: "backgroundchange",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, "1 hour"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, "2 hours"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, "3 hours"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, "4 hours"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, "5 hours"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, "6 hours"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, "7 hours"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, "8 hours"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, "9 hours"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "9999999999999999999999999",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, "Never")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        id: "linebreak",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, "Interval between task syncs (in seconds)")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "number",
        min: "10",
        name: "background_tasks_update",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        id: "linebreak",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, "Service integration:")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "setup.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, "Go to setup page")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "contentbackground",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, "Pick a photo which will be used as a background:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "backgroundphotos",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "contenttodolist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, "Automatically add a new task to:")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
        id: "todoserviceselect",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        id: "linebreak",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, "Choose a list where to add a task:")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
        id: "tasklistselect",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "contentcontact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, "Ignacy Ruszpel"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, "E-Mail: orrangenewtab@gmail.com")))));
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/css/Main.css":
/*!**************************!*\
  !*** ./src/css/Main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Main.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/Main.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Main.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/Main.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Main.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/Main.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/db.js":
/*!*******************!*\
  !*** ./src/db.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dexie */ "./node_modules/dexie/dist/dexie.es.js");

var db = new dexie__WEBPACK_IMPORTED_MODULE_0__["default"]('OrrangeDB');
db.version(1).stores({
  tasks: 'id, title, date, source, list_id, revision',
  mails: 'id, title, from, labelIds, date, unread',
  calendarEvents: 'id, date, value'
});
/* harmony default export */ __webpack_exports__["default"] = (db);

/***/ }),

/***/ "./src/icons/asana.png":
/*!*****************************!*\
  !*** ./src/icons/asana.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/asana.1d71bc3a.png";

/***/ }),

/***/ "./src/icons/calendar.svg":
/*!********************************!*\
  !*** ./src/icons/calendar.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/calendar.991c619d.svg";

/***/ }),

/***/ "./src/icons/google-tasks.png":
/*!************************************!*\
  !*** ./src/icons/google-tasks.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/google-tasks.99393dc8.png";

/***/ }),

/***/ "./src/icons/settings_icon.svg":
/*!*************************************!*\
  !*** ./src/icons/settings_icon.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/settings_icon.4247e01a.svg";

/***/ })

}]);
//# sourceMappingURL=5.chunk.js.map