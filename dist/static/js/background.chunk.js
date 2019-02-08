(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["background"],{

/***/ "./src/BackgroundPage.js":
/*!*******************************!*\
  !*** ./src/BackgroundPage.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./db */ "./src/db.js");
/* harmony import */ var wunderlist_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wunderlist-api */ "./node_modules/wunderlist-api/build/index.js");
/* harmony import */ var wunderlist_api__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(wunderlist_api__WEBPACK_IMPORTED_MODULE_7__);







var _jsxFileName = "/home/ignacy/Dokumenty/chrome-extension-react/src/BackgroundPage.js";




var Wunderlist =
/*#__PURE__*/
function () {
  function Wunderlist() {
    var _this = this;

    Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Wunderlist);

    this.getAllLists = function () {
      wunderlist_api__WEBPACK_IMPORTED_MODULE_7___default.a.getLists().then(function (response) {
        _this.getTasksFromList(response);
      });
    };

    this.getTasksFromList = function (lists) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = lists[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var list = _step.value;
          wunderlist_api__WEBPACK_IMPORTED_MODULE_7___default.a.getTasks(list.id).then(function (tasks) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = tasks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var task = _step2.value;
                _db__WEBPACK_IMPORTED_MODULE_6__["default"].tasks.put(task);
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          });
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
    };
  }

  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Wunderlist, [{
    key: "Tasks",
    get: function get() {
      var wunderlist = new Wunderlist({
        clientId: Object({"NODE_ENV":"development","PUBLIC_URL":"","REACT_APP_BACKGROUND_IMAGE_URL":"https://orrangenewtab-images-dev-372864bc.netlify.com","REACT_APP_API_URL":"https://api-startpage-dev.herokuapp.com","REACT_APP_EXTENSION_REDIRECT_URL":"https://pkkgcfnnalhdnhgcpooihfgckddbnekn.chromiumapp.org/","REACT_APP_ASANA_AUTH_URL":"https://app.asana.com/-/oauth_authorize?response_type=code&client_id=510150367981276","REACT_APP_GITHUB_AUTH_URL":"https://github.com/login/oauth/authorize?scope=repo&client_id=ed3f3248c654ec97fd4b","REACT_APP_POCKET_AUTH_URL":"https://getpocket.com/auth/authorize?request_token=","REACT_APP_TODOIST_AUTH_URL":"https://todoist.com/oauth/authorize?client_id=d74d5b8a514b49108ed3d158b24f2d56&scope=data:read_write&state=","REACT_APP_TRELLO_AUTH_URL":"https://trello.com/1/authorize?response_type=token&key=7a47d3bcbc1de21a76eeaaaf39d9c953&redirect_uri=https://pkkgcfnnalhdnhgcpooihfgckddbnekn.chromiumapp.org/&callback_method=fragment&scope=read%2Cwrite&expiration=never&name=Orrange%20New%20Tab","REACT_APP_WUNDERLIST_AUTH_URL":"https://www.wunderlist.com/oauth/authorize?client_id=47c196cd5efd5887c8ef&redirect_uri=https://pkkgcfnnalhdnhgcpooihfgckddbnekn.chromiumapp.org//&state=","REACT_APP_OWM_APPID":"e1b9c3c4f419e12a1707f7954069e310"}).REACT_APP_WUNDERLIST_CLIENTID,
        accessToken: localStorage.getItem("tokenWunderlist")
      });
    }
  }]);

  return Wunderlist;
}();

var Todoist =
/*#__PURE__*/
function () {
  function Todoist() {
    Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Todoist);
  }

  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Todoist, [{
    key: "Tasks",
    get: function get() {}
  }]);

  return Todoist;
}();

var Asana =
/*#__PURE__*/
function () {
  function Asana() {
    Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Asana);
  }

  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Asana, [{
    key: "Tasks",
    get: function get() {}
  }]);

  return Asana;
}();

var Trello =
/*#__PURE__*/
function () {
  function Trello() {
    Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Trello);
  }

  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Trello, [{
    key: "Tasks",
    get: function get() {}
  }]);

  return Trello;
}();

var GCal =
/*#__PURE__*/
function () {
  function GCal() {
    Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, GCal);
  }

  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(GCal, [{
    key: "Events",
    get: function get() {}
  }]);

  return GCal;
}();

var Gmail =
/*#__PURE__*/
function () {
  function Gmail() {
    Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Gmail);
  }

  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Gmail, [{
    key: "Mails",
    get: function get() {}
  }]);

  return Gmail;
}();

var GitHub =
/*#__PURE__*/
function () {
  function GitHub() {
    Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, GitHub);
  }

  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(GitHub, [{
    key: "Tasks",
    get: function get() {}
  }]);

  return GitHub;
}();

var Background =
/*#__PURE__*/
function (_Component) {
  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Background, _Component);

  function Background(props) {
    var _this2;

    Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Background);

    _this2 = Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(Background).call(this, props));
    _this2.state = {
      tasks: []
    };
    return _this2;
  }

  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Background, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var wunder = new Wunderlist();
      wunder.Tasks();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      });
    }
  }]);

  return Background;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Background);

/***/ }),

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var _BackgroundPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BackgroundPage */ "./src/BackgroundPage.js");
var _jsxFileName = "/home/ignacy/Dokumenty/chrome-extension-react/src/background.js";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BackgroundPage__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('rootBackground')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_2__["unregister"]();

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

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See http://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 1:
/*!*********************************!*\
  !*** multi ./src/background.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ignacy/Dokumenty/chrome-extension-react/src/background.js */"./src/background.js");


/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[1,"runtime~background",0,1,6]]]);
//# sourceMappingURL=background.chunk.js.map