(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Additional/css/InputBoxReactive.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/Components/Additional/css/InputBoxReactive.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".inputReactive {\n    width: 20%;\n    height: 13vh;\n    overflow: hidden;\n    position: relative;\n    margin: auto;\n}\n\n.inputReactive label {\n    position: absolute;\n    color: rgba(255, 255, 255, 0.5);\n    font: 400 5vh 'Lato', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    cursor: text;\n    -webkit-transition: .25s ease;\n    transition: .25s ease;\n}\n\n.inputReactive input {\n    display: block;\n    width: 100%;\n    padding-top: 6vh;\n    border: none;\n    border-radius: 0;\n    color: white;\n    background: transparent;\n    font: 300 3.2vh 'Lato', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    -webkit-transition: .3s ease;\n    transition: .3s ease;\n}\n\n.inputReactive input~label {\n    bottom: 27%;\n    position: absolute;\n    left: 0;\n    font-size: 2.7vh;\n}\n\n.inputReactive input:valid~label {\n    top: 27%;\n    font: 400 2vh 'Lato', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: rgba(255, 255, 255, 0.884);\n}\n\n.inputReactive input:focus {\n    outline: none;\n}\n\n.inputReactive input:focus~label {\n    top: 27%;\n    font: 400 2vh 'Lato', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: #5e5c5b;\n}\n\n.inputReactive input:focus~.bar:before {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n\n.inputReactive input:-webkit-autofill,\n.inputReactive input:-webkit-autofill:hover,\n.inputReactive input:-webkit-autofill:focus,\n.inputReactive input:-webkit-autofill:active {\n    -webkit-transition: \"color 9999s ease-out, background-color 9999s ease-out\";\n    -webkit-transition-delay: 9999s;\n}\n\n/*\n.inputReactive input:-webkit-autofill {\n  box-shadow: 0 0 0px 1000px rgba(191, 138, 111, 0.37) inset;\n  -webkit-text-fill-color: white !important;\n}\n*/\n\n.inputReactive .bar {\n    background: rgba(255, 255, 255, 0.61);\n    content: '';\n    width: 200%;\n    height: 0.3vh;\n    -webkit-transition: .3s ease;\n    transition: .3s ease;\n    position: relative;\n}\n\n.inputReactive .bar:before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: #ecbea7;\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n}\n\n.inputReactive ::-moz-selection {\n    background: rgba(33, 150, 243, 0.3);\n}\n\n.inputReactive ::selection {\n    background: rgba(33, 150, 243, 0.3);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/Setup.css":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/Setup.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);", ""]);

// module
exports.push([module.i, "body {\n  overflow: hidden;\n}\nspan {\n  display: inline-block\n}\n.Setup {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  background: no-repeat center center fixed;\n  background-size: cover;\n  -webkit-animation: fadein 0.7s;\n          animation: fadein 0.7s;\n}\n@-webkit-keyframes fadein {\n  from { opacity: 0; }\n  to   { opacity: 1; }\n}\n@keyframes fadein {\n  from { opacity: 0; }\n  to   { opacity: 1; }\n}\n@-webkit-keyframes fadeout {\n  from { opacity: 1; }\n  to   { opacity: 0; }\n}\n@keyframes fadeout {\n  from { opacity: 1; }\n  to   { opacity: 0; }\n}\n.SetupText {\n  color: white;\n  display: block;\n  margin-top: 20vh;\n  left: 50%;\n  width: 100%\n}\n.fade {\n  -webkit-animation: fadeout 0.5s;\n          animation: fadeout 0.5s;\n}\n.Select {\n  color: white;\n  display: block;\n  margin-top: 8vh;\n  left: 50%;\n  width: 100%;\n  -webkit-animation: fadein 1.3s;\n          animation: fadein 1.3s;\n}\n\n.Big {\n  color: white;\n  font-size: 6vh;\n  font-family: 'Lato', sans-serif;\n  display: block;\n  margin-top: inherit;\n  left: 50%;\n  width: 100%;\n  text-align: center;\n  font-weight: 300;\n}\n\n.Small {\n  font-family: 'Lato', sans-serif;\n  margin-top: 0;\n  text-align: center;\n  font-size: 4vh;\n  vertical-align: middle;\n  font-weight: 300;\n}\n\n#small_span {\n  font-family: 'Lato', sans-serif;\n  margin-top: 0;\n  text-align: center;\n  font-size: 12px;\n  vertical-align: middle\n}\n\n/*\n.data_input {\n  margin-left: 1vw\n}\n\ninput[type=\"text\"] {\n  border-width: 0 0 2px 0;\n  color: white;\n  font-size: 20px;\n  background: transparent;\n  border-bottom: 2px solid #dadada;\n  transition: border 700ms ease-in-out\n}\n\ninput:focus {\n  outline: 0;\n  border-color: #9ecaed;\n  border-bottom: 2px solid #66be8c\n}\n*/\n.btn {\n  border-radius: 28px;\n  text-shadow: 1px 1px 3px #666;\n  font-family: Arial;\n  color: #fff;\n  font-size: 20px;\n  padding: 10px 20px 10px 20px;\n  border: solid #ecbea7 2px;\n  text-decoration: none;\n  background: transparent;\n  display: block;\n  cursor: pointer\n}\n\n.btn:hover {\n  text-decoration: none\n}\n\n#nextbutton {\n  text-align: center;\n  margin: auto;\n  margin-top: 4vh\n}\n\n#finishbutton {\n  position: relative;\n  text-align: center;\n  margin: auto;\n  margin-top: 58vh\n}\n\ndiv.all {\n  display: flex;\n  flex-direction: column\n}\n\ndiv.Boxes1 {\n  margin: auto;\n  position: absolute;\n  left: 10vw;\n  right: 10vw;\n  display: flex;\n  flex-direction: row;\n  flex-shrink: 0\n}\n\ndiv.Boxes2 {\n  margin: auto;\n  margin-top: 28vh;\n  position: absolute;\n  left: 10vw;\n  right: 10vw;\n  display: flex;\n  flex-direction: row;\n  flex-shrink: 0\n}\n\n.chooseBox {\n  margin: 20px;\n  background-color: #fff;\n  border: 1px solid black;\n  filter: alpha(opacity=40);\n  border-radius: 10px;\n  width: 18vw;\n  height: 22vh;\n  background: rgba(191, 191, 191, 0.5);\n  cursor: pointer;\n  flex-shrink: 1;\n  -webkit-transition: background 1s;\n  transition: background 1s;\n}\n.chooseBox.loggedIn {\n  background: rgba(119, 255, 51, 0.5);\n}\n.chooseBox.loggedIn:hover {\n  background: rgba(170, 105, 89, 0.5);\n}\n\n#gmail {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 20vh;\n  height: 20vh\n}\n\n#github {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 19vh;\n  height: 19vh\n}\n\n#wunderlist {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 19vh;\n  height: 19vh\n}\n\n#googletasks {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: .5vh;\n  width: 18vh;\n  height: 18vh\n}\n\n#googlecalendar {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 18vh;\n  height: 18vh\n}\n\n#trello {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: .5vh;\n  width: 18vh;\n  height: 18vh\n}\n\n#todoist {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: .5vh;\n  width: 18vh;\n  height: 18vh\n}\n#pocket {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 19vh;\n  height: 19vh\n}\n#asana{\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 19vh;\n  height: 19vh\n}\n\n.SmallChoose {\n  margin-top: -1.2vh;\n  text-align: center;\n  font-size: 18px;\n  font-family: 'Lato', sans-serif;\n  color: #161819\n}", ""]);

// exports


/***/ }),

/***/ "./src/Components/Additional/InputBoxReactive.js":
/*!*******************************************************!*\
  !*** ./src/Components/Additional/InputBoxReactive.js ***!
  \*******************************************************/
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
/* harmony import */ var _css_InputBoxReactive_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/InputBoxReactive.css */ "./src/Components/Additional/css/InputBoxReactive.css");
/* harmony import */ var _css_InputBoxReactive_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_InputBoxReactive_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/ignacy/Dokumenty/chrome-extension-react/src/Components/Additional/InputBoxReactive.js";



var InputBoxReactive =
/*#__PURE__*/
function (_Component) {
  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(InputBoxReactive, _Component);

  function InputBoxReactive() {
    Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InputBoxReactive);

    return Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(InputBoxReactive).apply(this, arguments));
  }

  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InputBoxReactive, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "inputReactive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", Object.assign({}, this.props, {
        spellCheck: "false",
        type: this.props.type,
        id: this.props.id,
        required: "required",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        htmlFor: this.props.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, this.props.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }));
    }
  }]);

  return InputBoxReactive;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (InputBoxReactive);

/***/ }),

/***/ "./src/Components/Additional/css/InputBoxReactive.css":
/*!************************************************************!*\
  !*** ./src/Components/Additional/css/InputBoxReactive.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./InputBoxReactive.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Additional/css/InputBoxReactive.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./InputBoxReactive.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Additional/css/InputBoxReactive.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./InputBoxReactive.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Additional/css/InputBoxReactive.css");

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

/***/ "./src/Components/ServiceLogin/Asana.js":
/*!**********************************************!*\
  !*** ./src/Components/ServiceLogin/Asana.js ***!
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
/* harmony import */ var _icons_asana_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../icons/asana-logo.png */ "./src/icons/asana-logo.png");
/* harmony import */ var _icons_asana_logo_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_icons_asana_logo_png__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/ignacy/Dokumenty/chrome-extension-react/src/Components/ServiceLogin/Asana.js";



var AsanaBox =
/*#__PURE__*/
function (_Component) {
  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AsanaBox, _Component);

  function AsanaBox(props) {
    var _this;

    Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AsanaBox);

    _this = Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AsanaBox).call(this, props));

    _this.handleClick = function () {
      if (_this.state.loggedIn) {
        if (window.confirm("Do you really want to disable integration with Asana?") == true) {
          localStorage.removeItem("tokenAsana");
          localStorage.removeItem("asana_auth");
          localStorage.removeItem("asana_should_auth");

          _this.setState({
            loggedIn: false
          });
        }
      } else {
        var asana_state = Math.random().toString(36).substring(2);
        window.chrome.identity.launchWebAuthFlow({
          url: "".concat("https://app.asana.com/-/oauth_authorize?response_type=code&client_id=510150367981276", "&redirect_uri=").concat("https://pkkgcfnnalhdnhgcpooihfgckddbnekn.chromiumapp.org/", "&state=").concat(asana_state),
          interactive: true
        }, function (redirectURL) {
          var code = redirectURL.match(/(\?|\&)([^=]+)\=([^&]+)/)[3];
          fetch("".concat("https://api-startpage-dev.herokuapp.com", "/api/asana"), {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
              "type": "getaccessToken",
              "code": code
            })
          }).then(function (response) {
            return response.json();
          }).then(function (data) {
            var authToken = data.access_token;
            var refreshToken = data.refresh_token;
            localStorage.setItem("tokenAsana", authToken);
            localStorage.setItem("asana_auth", "1");
            localStorage.setItem("asana_should_auth", "1");
            localStorage.setItem("refreshTokenAsana", refreshToken);
            window.writeCookie("asananotexpired", "1", 1);
            window.writeCookie("asanaClicked", 0, -1000);

            _this.setState({
              loggedIn: true
            });
          }).catch(function (data) {
            console.log(data);
          });
        });
      }
    };

    _this.state = {
      loggedIn: false
    };
    return _this;
  }

  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AsanaBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (localStorage.getItem("asana_auth") == 1 && localStorage.getItem("tokenAsana") != "undefined") {
        this.setState({
          loggedIn: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: this.state && this.state.loggedIn ? "chooseBox loggedIn" : "chooseBox",
        onClick: this.handleClick,
        id: "asanabox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _icons_asana_logo_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        id: "asana",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "SmallChoose",
        style: {
          marginTop: "-1px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "ASANA"));
    }
  }]);

  return AsanaBox;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AsanaBox);

/***/ }),

/***/ "./src/Components/ServiceLogin/GcalTasks.js":
/*!**************************************************!*\
  !*** ./src/Components/ServiceLogin/GcalTasks.js ***!
  \**************************************************/
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
/* harmony import */ var _icons_google_calendar_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../icons/google_calendar.png */ "./src/icons/google_calendar.png");
/* harmony import */ var _icons_google_calendar_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_icons_google_calendar_png__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/ignacy/Dokumenty/chrome-extension-react/src/Components/ServiceLogin/GcalTasks.js";



var GcalTasksBox =
/*#__PURE__*/
function (_Component) {
  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(GcalTasksBox, _Component);

  function GcalTasksBox(props) {
    var _this;

    Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GcalTasksBox);

    _this = Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(GcalTasksBox).call(this, props));

    _this.handleClick = function () {
      if (_this.state.loggedIn) {
        if (window.confirm("Do you really want to disable integration with Google Calendar and Google Tasks? This will also turn off integration with Gmail if it is enabled.") == true) {
          if (localStorage.getItem("tokenGoogle")) {
            window.chrome.identity.removeCachedAuthToken({
              token: localStorage.getItem("tokenGoogle")
            }, function () {//token was removed from cache
            });
          }

          localStorage.removeItem("tokenGoogle");
          localStorage.removeItem("gmail_auth");
          localStorage.removeItem("calendar_auth");

          _this.setState({
            loggedIn: false
          });
        }
      } else {
        if (localStorage.getItem("gmail_auth") == 1) {
          var scopes_calendar = ["https://www.googleapis.com/auth/gmail.modify", "https://www.googleapis.com/auth/calendar.readonly", "https://www.googleapis.com/auth/tasks"];
        } else {
          var scopes_calendar = ["https://www.googleapis.com/auth/calendar.readonly", "https://www.googleapis.com/auth/tasks"];
        }

        window.chrome.identity.getAuthToken({
          'interactive': true,
          "scopes": scopes_calendar
        }, function (token) {
          if (window.chrome.runtime.lastError) {
            console.log(window.chrome.runtime.lastError);
            return;
          }

          localStorage.setItem("tokenGoogle", token);
          localStorage.setItem("calendar_auth", 1);

          _this.setState({
            loggedIn: true
          });
        });
      }
    };

    _this.state = {
      loggedIn: false
    };
    return _this;
  }

  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GcalTasksBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (localStorage.getItem("calendar_auth") == 1) {
        this.setState({
          loggedIn: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: this.state && this.state.loggedIn ? "chooseBox loggedIn" : "chooseBox",
        onClick: this.handleClick,
        id: "calendarbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _icons_google_calendar_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        id: "googlecalendar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "SmallChoose",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "GOOGLE CALENDAR + TASKS"));
    }
  }]);

  return GcalTasksBox;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (GcalTasksBox);

/***/ }),

/***/ "./src/Components/ServiceLogin/Github.js":
/*!***********************************************!*\
  !*** ./src/Components/ServiceLogin/Github.js ***!
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
/* harmony import */ var _icons_github_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../icons/github.png */ "./src/icons/github.png");
/* harmony import */ var _icons_github_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_icons_github_png__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/ignacy/Dokumenty/chrome-extension-react/src/Components/ServiceLogin/Github.js";



var GithubBox =
/*#__PURE__*/
function (_Component) {
  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(GithubBox, _Component);

  function GithubBox(props) {
    var _this;

    Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GithubBox);

    _this = Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(GithubBox).call(this, props));

    _this.handleClick = function () {
      if (_this.state.loggedIn) {
        if (window.confirm("Do you really want to disable integration with GitHub?") == true) {
          localStorage.removeItem("tokenGithub");
          localStorage.removeItem("github_auth");

          _this.setState({
            loggedIn: false
          });
        }
      } else {
        window.chrome.identity.launchWebAuthFlow({
          url: "https://github.com/login/oauth/authorize?scope=repo&client_id=ed3f3248c654ec97fd4b",
          interactive: true
        }, function (redirectURL) {
          var code = redirectURL.match(/\?code=(.*)/)[1];
          fetch("".concat("https://api-startpage-dev.herokuapp.com", "/api/github"), {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
              "code": code
            })
          }).then(function (response) {
            return response.json();
          }).then(function (data) {
            var authToken = JSON.parse(data).access_token;
            localStorage.setItem("tokenGithub", authToken);
            localStorage.setItem("github_auth", "1");

            _this.setState({
              loggedIn: true
            });
          }).catch(function (data) {
            console.log(data);
          });
        });
      }
    };

    _this.state = {
      loggedIn: false
    };
    return _this;
  }

  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GithubBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (localStorage.getItem("github_auth") == 1 && localStorage.getItem("tokenGithub")) {
        this.setState({
          loggedIn: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: this.state && this.state.loggedIn ? "chooseBox loggedIn" : "chooseBox",
        onClick: this.handleClick,
        id: "githubbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _icons_github_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        id: "github",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "SmallChoose",
        style: {
          marginTop: "-1px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "GITHUB"));
    }
  }]);

  return GithubBox;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (GithubBox);

/***/ }),

/***/ "./src/Components/ServiceLogin/Gmail.js":
/*!**********************************************!*\
  !*** ./src/Components/ServiceLogin/Gmail.js ***!
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
/* harmony import */ var _icons_Cornmanthe3rd_Plex_Communication_gmail_ico__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../icons/Cornmanthe3rd-Plex-Communication-gmail.ico */ "./src/icons/Cornmanthe3rd-Plex-Communication-gmail.ico");
/* harmony import */ var _icons_Cornmanthe3rd_Plex_Communication_gmail_ico__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_icons_Cornmanthe3rd_Plex_Communication_gmail_ico__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/ignacy/Dokumenty/chrome-extension-react/src/Components/ServiceLogin/Gmail.js";



var GmailBox =
/*#__PURE__*/
function (_Component) {
  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(GmailBox, _Component);

  function GmailBox(props) {
    var _this;

    Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GmailBox);

    _this = Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(GmailBox).call(this, props));

    _this.handleClick = function () {
      if (_this.state.loggedIn) {
        if (window.confirm("Do you really want to disable integration with Gmail? This will also turn off integration with Google Calendar and Google Tasks if they are also enabled.") == true) {
          if (localStorage.getItem("tokenGoogle")) {
            window.chrome.identity.removeCachedAuthToken({
              token: localStorage.getItem("tokenGoogle")
            }, function () {//token was removed from cache
            });
          }

          localStorage.removeItem("tokenGoogle");
          localStorage.removeItem("gmail_auth");
          localStorage.removeItem("calendar_auth");

          _this.setState({
            loggedIn: false
          });
        }
      } else {
        if (localStorage.getItem("calendar_auth") == 1) {
          var scopes_gmail = ["https://www.googleapis.com/auth/gmail.modify", "https://www.googleapis.com/auth/calendar.readonly", "https://www.googleapis.com/auth/tasks"];
        } else {
          var scopes_gmail = ["https://www.googleapis.com/auth/gmail.modify"];
        }

        window.chrome.identity.getAuthToken({
          'interactive': true,
          'scopes': scopes_gmail
        }, function (token) {
          if (window.chrome.runtime.lastError) {
            console.log(window.chrome.runtime.lastError);
            return;
          }

          localStorage.setItem("tokenGoogle", token);
          localStorage.setItem("gmail_auth", 1);

          _this.setState({
            loggedIn: true
          });
        });
      }
    };

    _this.state = {
      loggedIn: false
    };
    return _this;
  }

  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GmailBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (localStorage.getItem("gmail_auth") == 1) {
        this.setState({
          loggedIn: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: this.state && this.state.loggedIn ? "chooseBox loggedIn" : "chooseBox",
        onClick: this.handleClick,
        id: "gmailbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _icons_Cornmanthe3rd_Plex_Communication_gmail_ico__WEBPACK_IMPORTED_MODULE_6___default.a,
        id: "gmail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "SmallChoose",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "GMAIL"));
    }
  }]);

  return GmailBox;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (GmailBox);

/***/ }),

/***/ "./src/Components/ServiceLogin/Pocket.js":
/*!***********************************************!*\
  !*** ./src/Components/ServiceLogin/Pocket.js ***!
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
/* harmony import */ var _icons_pocket_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../icons/pocket.svg */ "./src/icons/pocket.svg");
/* harmony import */ var _icons_pocket_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_icons_pocket_svg__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/ignacy/Dokumenty/chrome-extension-react/src/Components/ServiceLogin/Pocket.js";



var PocketBox =
/*#__PURE__*/
function (_Component) {
  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PocketBox, _Component);

  function PocketBox(props) {
    var _this;

    Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PocketBox);

    _this = Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PocketBox).call(this, props));

    _this.handleClick = function () {
      if (_this.state.loggedIn) {
        if (window.confirm("Do you really want to disable integration with Pocket?") == true) {
          localStorage.removeItem("tokenPocket");

          _this.setState({
            loggedIn: false
          });
        }
      } else {
        window.chrome.identity.launchWebAuthFlow({
          url: "".concat("https://getpocket.com/auth/authorize?request_token=").concat(window.readCookie("requestTokenPocket"), "&redirect_uri=").concat("https://pkkgcfnnalhdnhgcpooihfgckddbnekn.chromiumapp.org/"),
          interactive: true
        }, function (redirectURL) {
          fetch("".concat("https://api-startpage-dev.herokuapp.com", "/api/pocket"), {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
              "type": "getAccessToken",
              "request_token": window.readCookie("requestTokenPocket")
            })
          }).then(function (response) {
            return response.json();
          }).then(function (res) {
            localStorage.setItem("tokenPocket", res.access_token); //request token is no longer valid, if the user will try to authenticate again with the same token it will produce an error

            window.writeCookie("requestTokenPocket", 0, -1000);

            _this.setState({
              loggedIn: true
            });
          }).catch(function (res) {
            console.log(res);
          });
        });
      }
    };

    _this.state = {
      loggedIn: false
    };
    return _this;
  }

  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PocketBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (localStorage.getItem("tokenPocket") != undefined) {
        this.setState({
          loggedIn: true
        });
      } //Before user can authenticate with Pocket we need to get a request token


      if (window.readCookie("requestTokenPocket") == undefined && localStorage.getItem("tokenPocket") == undefined) {
        fetch("".concat("https://api-startpage-dev.herokuapp.com", "/api/pocket"), {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({
            "type": "getRequestToken"
          })
        }).then(function (response) {
          return response.json();
        }).then(function (res) {
          window.writeCookie("requestTokenPocket", res.code, 1);
        }).catch(function (res) {
          console.log(res);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: this.state && this.state.loggedIn ? "chooseBox loggedIn" : "chooseBox",
        onClick: this.handleClick,
        id: "pocketbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _icons_pocket_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
        id: "pocket",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "SmallChoose",
        style: {
          marginTop: "-1px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "POCKET"));
    }
  }]);

  return PocketBox;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PocketBox);

/***/ }),

/***/ "./src/Components/ServiceLogin/Todoist.js":
/*!************************************************!*\
  !*** ./src/Components/ServiceLogin/Todoist.js ***!
  \************************************************/
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
/* harmony import */ var _icons_todoist_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../icons/todoist.png */ "./src/icons/todoist.png");
/* harmony import */ var _icons_todoist_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_icons_todoist_png__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/ignacy/Dokumenty/chrome-extension-react/src/Components/ServiceLogin/Todoist.js";



var TodoistBox =
/*#__PURE__*/
function (_Component) {
  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TodoistBox, _Component);

  function TodoistBox(props) {
    var _this;

    Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TodoistBox);

    _this = Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TodoistBox).call(this, props));

    _this.handleClick = function () {
      if (_this.state.loggedIn) {
        if (window.confirm("Do you really want to disable integration with Todoist?") == true) {
          localStorage.removeItem("tokenTodoist");
          localStorage.removeItem("todoist_auth");

          _this.setState({
            loggedIn: false
          });
        }
      } else {
        var todoist_state = Math.random().toString(36).substring(2);
        window.chrome.identity.launchWebAuthFlow({
          url: "https://todoist.com/oauth/authorize?client_id=d74d5b8a514b49108ed3d158b24f2d56&scope=data:read_write&state=" + todoist_state,
          interactive: true
        }, function (redirectURL) {
          var todoistcode = redirectURL.match(/\&code=(.*)/)[1];
          fetch("".concat("https://api-startpage-dev.herokuapp.com", "/api/todoist"), {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
              "code": todoistcode
            })
          }).then(function (response) {
            return response.json();
          }).then(function (data) {
            var authToken = JSON.parse(data).access_token;
            localStorage.setItem("tokenTodoist", authToken);
            localStorage.setItem("todoist_auth", "1");

            _this.setState({
              loggedIn: true
            });
          }).catch(function (data) {
            console.log(data);
          });
        });
      }
    };

    _this.state = {
      loggedIn: false
    };
    return _this;
  }

  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TodoistBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (localStorage.getItem("todoist_auth") == 1) {
        this.setState({
          loggedIn: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: this.state && this.state.loggedIn ? "chooseBox loggedIn" : "chooseBox",
        onClick: this.handleClick,
        id: "todoistbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _icons_todoist_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        id: "todoist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "SmallChoose",
        style: {
          marginTop: "0.6vh"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "TODOIST"));
    }
  }]);

  return TodoistBox;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TodoistBox);

/***/ }),

/***/ "./src/Components/ServiceLogin/Trello.js":
/*!***********************************************!*\
  !*** ./src/Components/ServiceLogin/Trello.js ***!
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
/* harmony import */ var _icons_trello_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../icons/trello.png */ "./src/icons/trello.png");
/* harmony import */ var _icons_trello_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_icons_trello_png__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/ignacy/Dokumenty/chrome-extension-react/src/Components/ServiceLogin/Trello.js";



var TrelloBox =
/*#__PURE__*/
function (_Component) {
  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TrelloBox, _Component);

  function TrelloBox(props) {
    var _this;

    Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TrelloBox);

    _this = Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TrelloBox).call(this, props));

    _this.handleClick = function () {
      if (_this.state.loggedIn) {
        if (window.confirm("Do you really want to disable integration with Trello?") == true) {
          localStorage.removeItem("tokenTrello");
          localStorage.removeItem("trello_auth");

          _this.setState({
            loggedIn: false
          });
        }
      } else {
        window.chrome.identity.launchWebAuthFlow({
          url: "https://trello.com/1/authorize?response_type=token&key=7a47d3bcbc1de21a76eeaaaf39d9c953&redirect_uri=https://pkkgcfnnalhdnhgcpooihfgckddbnekn.chromiumapp.org/&callback_method=fragment&scope=read%2Cwrite&expiration=never&name=Orrange%20New%20Tab",
          interactive: true
        }, function (redirectURL) {
          var trello_token = redirectURL.match(/\#token=(.*)/)[1];
          localStorage.setItem("tokenTrello", trello_token);
          localStorage.setItem("trello_auth", "1"); //window.Trello.setToken(trello_token);

          _this.setState({
            loggedIn: true
          });
        });
      }
    };

    _this.state = {
      loggedIn: false
    };
    return _this;
  }

  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TrelloBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (localStorage.getItem("trello_auth") == 1) {
        this.setState({
          loggedIn: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: this.state && this.state.loggedIn ? "chooseBox loggedIn" : "chooseBox",
        onClick: this.handleClick,
        id: "trellobox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _icons_trello_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        id: "trello",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "SmallChoose",
        style: {
          marginTop: "0.6vh"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "TRELLO"));
    }
  }]);

  return TrelloBox;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TrelloBox);

/***/ }),

/***/ "./src/Components/ServiceLogin/Wunderlist.js":
/*!***************************************************!*\
  !*** ./src/Components/ServiceLogin/Wunderlist.js ***!
  \***************************************************/
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
/* harmony import */ var _icons_wunderlist_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../icons/wunderlist.png */ "./src/icons/wunderlist.png");
/* harmony import */ var _icons_wunderlist_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_icons_wunderlist_png__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/ignacy/Dokumenty/chrome-extension-react/src/Components/ServiceLogin/Wunderlist.js";

/*global chrome*/



var WunderlistBox =
/*#__PURE__*/
function (_Component) {
  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(WunderlistBox, _Component);

  function WunderlistBox(props) {
    var _this;

    Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WunderlistBox);

    _this = Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(WunderlistBox).call(this, props));

    _this.handleClick = function () {
      if (!_this.state.loggedIn) {
        var state = Math.random().toString(36).substring(2);
        window.chrome.identity.launchWebAuthFlow({
          url: "https://www.wunderlist.com/oauth/authorize?client_id=47c196cd5efd5887c8ef&redirect_uri=https://pkkgcfnnalhdnhgcpooihfgckddbnekn.chromiumapp.org//&state=" + state,
          interactive: true
        }, function (redirectURL) {
          var wunderlistcode = redirectURL.match(/\&code=(.*)/)[1];
          fetch("".concat("https://api-startpage-dev.herokuapp.com", "/api/wunderlist"), {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
              "code": wunderlistcode
            })
          }).then(function (response) {
            return response.json();
          }).then(function (data) {
            var authToken = JSON.parse(data).access_token;

            if (authToken != undefined) {
              localStorage.setItem("tokenWunderlist", authToken);
              localStorage.setItem("wunderlist_auth", "1");

              _this.setState({
                loggedIn: true
              });
            } else {
              alert("Wunderlist server responded with blank authentication token.");
            }
          }).catch(function (data) {
            console.log(data);
          });
        });
      } else {
        if (window.confirm("Do you really want to disable integration with Wunderlist?") == true) {
          localStorage.removeItem("tokenWunderlist");
          localStorage.removeItem("wunderlist_auth");

          _this.setState({
            loggedIn: false
          });
        }
      }
    };

    _this.state = {
      loggedIn: false
    };
    return _this;
  }

  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(WunderlistBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (localStorage.getItem("wunderlist_auth")) {
        if (localStorage.getItem("wunderlist_auth") == 1) {
          this.setState({
            loggedIn: true
          });
          var WunderlistSDK = window.wunderlist.sdk;
          var WunderlistAPI = new WunderlistSDK({
            'accessToken': localStorage.getItem("tokenWunderlist"),
            'clientID': '47c196cd5efd5887c8ef'
          });

          var handleListData = function handleListData() {
            localStorage.setItem("wunderlist_auth", "1");
          };

          var handleError = function handleError() {
            console.log("Wunderlist error");
          }; //Check if Wunderlist API is accesible


          WunderlistAPI.initialized.done(function () {
            WunderlistAPI.http.lists.all().done(handleListData).fail(handleError);
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: this.state && this.state.loggedIn ? "chooseBox loggedIn" : "chooseBox",
        id: "wunderlistbox",
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _icons_wunderlist_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        id: "wunderlist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "SmallChoose",
        style: {
          marginTop: "-1px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "WUNDERLIST"));
    }
  }]);

  return WunderlistBox;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (WunderlistBox);

/***/ }),

/***/ "./src/Setup.js":
/*!**********************!*\
  !*** ./src/Setup.js ***!
  \**********************/
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
/* harmony import */ var _css_Setup_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./css/Setup.css */ "./src/css/Setup.css");
/* harmony import */ var _css_Setup_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_Setup_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_oleg_chursin_216430_jpg_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/oleg-chursin-216430.jpg.webp */ "./src/img/oleg-chursin-216430.jpg.webp");
/* harmony import */ var _img_oleg_chursin_216430_jpg_webp__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_oleg_chursin_216430_jpg_webp__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Components_ServiceLogin_Wunderlist__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/ServiceLogin/Wunderlist */ "./src/Components/ServiceLogin/Wunderlist.js");
/* harmony import */ var _Components_ServiceLogin_Trello__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/ServiceLogin/Trello */ "./src/Components/ServiceLogin/Trello.js");
/* harmony import */ var _Components_ServiceLogin_Todoist__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/ServiceLogin/Todoist */ "./src/Components/ServiceLogin/Todoist.js");
/* harmony import */ var _Components_ServiceLogin_Pocket__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/ServiceLogin/Pocket */ "./src/Components/ServiceLogin/Pocket.js");
/* harmony import */ var _Components_ServiceLogin_Asana__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/ServiceLogin/Asana */ "./src/Components/ServiceLogin/Asana.js");
/* harmony import */ var _Components_ServiceLogin_Gmail__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Components/ServiceLogin/Gmail */ "./src/Components/ServiceLogin/Gmail.js");
/* harmony import */ var _Components_ServiceLogin_GcalTasks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Components/ServiceLogin/GcalTasks */ "./src/Components/ServiceLogin/GcalTasks.js");
/* harmony import */ var _Components_ServiceLogin_Github__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Components/ServiceLogin/Github */ "./src/Components/ServiceLogin/Github.js");
/* harmony import */ var _Components_Additional_InputBoxReactive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Components/Additional/InputBoxReactive */ "./src/Components/Additional/InputBoxReactive.js");







var _jsxFileName = "/home/ignacy/Dokumenty/chrome-extension-react/src/Setup.js";

/*global chrome*/











 //import { Transition } from 'react-transition-group';

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

var Setup =
/*#__PURE__*/
function (_Component) {
  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Setup, _Component);

  function Setup(props) {
    var _this;

    Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Setup);

    _this = Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Setup).call(this, props));

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

    _this.updateNameInputValue = function (evt) {
      _this.setState({
        nameInputValue: evt.target.value
      });
    };

    _this.openNav = function () {
      if (
      /*validate() == */
      true) {
        //Let the name input fade out before deleting it from DOM
        _this.setState({
          //This will change the name of the class in name input div to one with the fading animation
          fadeOutName: true
        });

        setTimeout(function () {
          _this.setState({
            navVisible: true
          });
        }, 500);
        localStorage.setItem("name", _this.state.nameInputValue);
        localStorage.setItem("name_setup_successful", 1);
        callApi("".concat("https://orrangenewtab-images-dev-372864bc.netlify.com", "/list.json"), "GET").then(function (data) {
          localStorage.setItem("availableImages", JSON.stringify(data));
          window.writeCookie("imagesarrayneedupdate", "no", 2);
        }).catch(function (err) {
          return console.log(err);
        });
      }

      if (window.readCookie("disp_image") == null) {
        var disp_image = _this.state.images[Math.floor(Math.random() * _this.state.images.length + 0)];

        window.writeCookie("disp_image", disp_image, 4);
        var preloadedbackground = new Image();
        preloadedbackground.src = "".concat("https://orrangenewtab-images-dev-372864bc.netlify.com", "/images/").concat(disp_image);
      } else {
        var preloadedbackground = new Image();
        preloadedbackground.src = "".concat("https://orrangenewtab-images-dev-372864bc.netlify.com", "/images/").concat(disp_image);
      }
    };

    _this.openNormal = function () {
      window.location.href = "index.html";
      window.chrome.extension.getBackgroundPage().updateTasks();

      if (window.readCookie("first_run") == 1) {
        localStorage.setItem("tabtodoTasks", "[]");
        localStorage.setItem("todoTasks", "[]");
        localStorage.setItem("backgroundChangeTime", 4);
        localStorage.setItem("temperatureUnit", 'c');
      }

      window.writeCookie("fullSetup", "1", 999999);
    };

    _this.state = {
      nameInputValue: '',
      images: ["adam-kool-11868.jpg", "ales-krivec-1881.jpg", "ales-krivec-26510.jpg", "ales-krivec-2892.jpg", "alexander-savonin-43399.jpg", "alex-gorham-323399.jpg", "annie-spratt-42459.jpg", "ashim-d-silva-87788.jpg", "austin-neill-95857.jpg", "caleb-george-480.jpg", "casey-fyfe-3341.jpg", "christian-joudrey-96208.jpg", "cristina-gottardi-209440.jpg", "cristina-gottardi-259243.jpg", "daniel-frank-357258.jpg", "daniel-olah-161117.jpg", "daniil-silantev-100528.jpg", "darryl-222961.jpg", "derek-truninger-509498.jpg", "diana-mannik-125201.jpg", "dino-reichmuth-82881.jpg", "doug-robichaud-3529.jpg", "eberhard-grossgasteiger-299348.jpg", "elke-karin-lugert-125493.jpg", "ferdinand-stohr-185484.jpg", "fineas-anton-143935.jpg", "frances-gunn-39238.jpg", "fre-sonneveld-393440.jpg", "hugues-de-buyer-mimeure-335733.jpg", "ines-alvarez-fdez-490544.jpg", "ivana-cajina-316246.jpg", "jad-limcaco-183877.jpg", "jake-hinds-373446.jpg", "jakub-gorajek-133566.jpg", "jamie-hagan-36980.jpg", "jay-wennington-2257.jpg", "jeff-cooper-786.jpg", "jeremy-bishop-156223.jpg", "jeremy-bishop-298883.jpg", "jeremy-bishop-330225.jpg", "jeremy-bishop-438773.jpg", "johannes-plenio-400906.jpg", "jonatan-pie-234237.jpg", "jonatan-pie-383173.jpg", "jordan-mcqueen-168881.jpg", "joseph-barrientos-93567.jpg", "jp-valery-388780.jpg", "justin-bisson-beck-192842.jpg", "linda-sondergaard-441594.jpg", "luca-bravo-177552.jpg", "luigi-manga-272856.jpg", "lyndsey-marie-328533.jpg", "madhu-shesharam-390606.jpg", "mareks-steins-206836.jpg", "matthew-smith-5935.jpg", "micah-hallahan-5979.jpg", "michael-baird-14942.jpg", "milada-vigerova-35578.jpg", "milkovi-417072.jpg", "mohammad-alizade-384782.jpg", "naomi-suzuki-398873.jpg", "nathan-anderson-128243.jpg", "nathan-anderson-154095.jpg", "nathan-dumlao-454449.jpg", "neil-rosenstech-487655.jpg", "olivier-guillard-364157.jpg", "oscar-sutton-195988.jpg", "paul-gilmore-101372.jpg", "paul-morris-116514.jpg", "paul-morris-152258.jpg", "paul-morris-176576.jpg", "paul-vincent-roll-116965.jpg", "philippe-toupet-320689.jpg", "quinsey-sablan-13806.jpg", "ricardo-gomez-angel-164540.jpg", "riccardo-chiarini-247364.jpg", "riley-co-378389.jpg", "rob-bates-306647.jpg", "rob-bye-98951.jpg", "roland-epple-395376.jpg", "rucksack-magazine-389321.jpg", "samuel-ferrara-421714.jpg", "scott-goodwill-390233.jpg", "sebastian-unrau-31677.jpg", "sebastian-unrau-42537.jpg", "sebastian-unrau-47679.jpg", "stefan-stefancik-105376.jpg", "taylor-leopold-105920.jpg", "thomas-rohlfs-42517.jpg", "thomas-shellberg-33466.jpg", "tim-swaan-45717.jpg", "val-vesa-396665.jpg", "wayne-dahlberg-14104.jpg", "westboundary-photography-chris-gill-60180.jpg", "wojciech-swiech-103806.jpg", "yuriy-garnaev-378691.jpg", "zachary-domes-20380.jpg", "zany-jadraque-374785.jpg", "zoltan-tasi-282393.jpg", "alberto-restifo-44224.jpg", "ales-krivec-22058.jpg", "baehaki-hariri-336154.jpg", "casey-horner-339855.jpg", "ezra-jeffrey-100707.jpg", "james-donovan-180295.jpg", "jeremy-bishop-342305.jpg", "jonathan-bean-1431.jpg", "karsten-wurth-inf1783-127612.jpg", "leon-ephraim-8021.jpg", "levi-xu-166730.jpg", "matthew-kane-77216.jpg", "naomi-hutchinson-266953.jpg", "paul-morris-167780.jpg", "robert-murray-166837.jpg", "sven-scheuermeier-37377.jpg", "vladimir-kudinov-12761.jpg", "ales-krivec-188743.jpg", "ali-gooya-527606.jpg", "andrea-reiman-417352.jpg", "annie-spratt-520459.jpg", "benjamin-davies-272024.jpg", "chris-holgersson-249309.jpg", "christoph-bengtsson-lissalde-80291.jpg", "colby-thomas-79701.jpg", "danny-postma-302063.jpg", "david-preston-155661.jpg", "federico-beccari-477296.jpg", "fineas-anton-136459.jpg", "gabriel-santiago-1596.jpg", "george-hiles-114418.jpg", "jaanus-jagomagi-365720.jpg", "jeremy-allouche-512806.jpg", "jeremy-bishop-262147.jpg", "jeremy-bishop-289214.jpg", "kelsey-johnsen-727.jpg", "koushik-c-105425.jpg", "lambert-yuri-108539.jpg", "larm-rmah-273854.jpg", "linas-bam-223729.jpg", "matt-palmer-171734.jpg", "nathan-dumlao-318999.jpg", "oleg-chursin-216430.jpg", "olivier-guillard-176814.jpg", "paul-morris-212014.jpg", "pawel-nolbert-284283.jpg", "samuel-ferrara-136526.jpg", "sean-afnan-244576.jpg", "sweet-ice-cream-photography-375595.jpg", "trevor-cole-389734.jpg", "vincent-guth-314899.jpg", "web-agency-29200.jpg", "will-oey-330208.jpg", "yannick-pulver-410551.jpg", "felix-russell-saw-372070.jpg", "francesco-gallarotti-2498.jpg", "matthew-murphy-20009.jpg", "olivier-guillard-169827.jpg", "priscilla-du-preez-181896.jpg", "toni-lluch-4234.jpg", "topich-991.jpg", "ales-krivec-1880.jpg", "antoine-barres-198888.jpg", "anton-repponen-103080.jpg", "arto-marttinen-78539.jpg", "bailey-zindel-396398.jpg", "boris-baldinger-367773.jpg", "cristina-gottardi-304245.jpg", "den-heslop-178549.jpg", "derrick-cooper-411726.jpg", "hoach-le-dinh-90288.jpg", "jeff-nissen-562122.jpg", "joel-demott-91082.jpg", "johannes-plenio-271336.jpg", "johannes-plenio-287091.jpg", "jonatan-pie-415847.jpg", "kristopher-roller-110203.jpg", "kyle-glenn-440545.jpg", "leon-seierlein-45928.jpg", "luca-bravo-500474.jpg", "luke-tanis-427502.jpg", "matt-jones-67740.jpg", "preben-nilsen-451295.jpg", "quino-al-111244.jpg", "rhand-mccoy-345125.jpg", "robert-lukeman-150146.jpg", "samuel-ferrara-318713.jpg", "tevin-trinh-324186.jpg", "wilson-ye-128679.jpg", "yuriy-garnaev-395879.jpg", "zoran-zonde-stojanovski-44791.jpg", "alberto-restifo-4508-unsplash.jpg", "alberto-restifo-95349-unsplash.jpg", "ales-krivec-22632-unsplash.jpg", "ales-krivec-36006-unsplash.jpg", "ales-krivec-43430-unsplash.jpg", "ales-krivec-731-unsplash.jpg", "alexander-slattery-311435-unsplash.jpg", "andrew-preble-181949-unsplash.jpg", "anton-repponen-99520-unsplash.jpg", "ashim-d-silva-100979-unsplash.jpg", "benjamin-voros-250200-unsplash.jpg", "brandon-lam-29892-unsplash.jpg", "casey-horner-505913-unsplash.jpg", "casey-horner-549359-unsplash.jpg", "colin-maynard-150080-unsplash.jpg", "connor-robertson-340960-unsplash.jpg", "david-marcu-1263-unsplash.jpg", "david-marcu-27166-unsplash.jpg", "david-marcu-30865-unsplash.jpg", "david-sjunnesson-558616-unsplash.jpg", "emmanuel-maceda-125989-unsplash.jpg", "forrest-cavale-350-unsplash.jpg", "fre-sonneveld-19374-unsplash.jpg", "jasper-boer-20736-unsplash.jpg", "jc-gellidon-343012-unsplash.jpg", "jimmy-chang-38194-unsplash.jpg", "jingwei-ke-275681-unsplash.jpg", "joseph-barrientos-20264-unsplash.jpg", "joshua-sortino-274493-unsplash.jpg", "kace-rodriguez-85845-unsplash.jpg", "karsten-wurth-inf1783-152721-unsplash.jpg", "karsten-wurth-inf1783-160715-unsplash.jpg", "kenneth-thewissen-117-unsplash.jpg", "kevin-chen-330775-unsplash.jpg", "kyle-szegedi-31439-unsplash.jpg", "larry-chen-30069-unsplash.jpg", "lina-loos-189519-unsplash.jpg", "lukasz-szmigiel-41435-unsplash.jpg", "marc-zimmer-427333-unsplash.jpg", "matteo-minelli-464-unsplash.jpg", "matt-thornhill-106773-unsplash.jpg", "mike-anderson-66252-unsplash.jpg", "niklas-tidbury-319408-unsplash.jpg", "nitish-meena-37746-unsplash.jpg", "paul-gilmore-96153-unsplash.jpg", "paul-summers-42913-unsplash.jpg", "qingbao-meng-330658-unsplash.jpg", "quentin-dr-169227-unsplash.jpg", "redd-angelo-387953-unsplash.jpg", "ricardo-gomez-angel-348428-unsplash.jpg", "rob-morton-40594-unsplash.jpg", "sam-goodgame-438622-unsplash.jpg", "samuel-ferrara-398753-unsplash.jpg", "samuel-scrimshaw-114346-unsplash.jpg", "samuel-zeller-4137-unsplash.jpg", "sebastien-gabriel-13683-unsplash.jpg", "sergei-akulich-457851-unsplash.jpg", "shontz-photography-2120-unsplash.jpg", "spencer-backman-488527-unsplash.jpg", "stefan-kunze-26924-unsplash.jpg", "stefan-kunze-26932-unsplash.jpg", "svetlana-sinitsyna-471020-unsplash.jpg", "tim-johnson-328094-unsplash.jpg", "tim-marshall-321261-unsplash.jpg", "tommy-lisbin-317706-unsplash.jpg", "ville-palmu-190030-unsplash.jpg", "yuriy-garnaev-392475-unsplash.jpg"]
    };
    return _this;
  }

  Object(_home_ignacy_Dokumenty_chrome_extension_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Setup, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyDown, false);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      document.addEventListener("keydown", this.handleKeyDown, false); //Update background image list or use the already existing one.

      if (localStorage.getItem("name_setup_successful") == 1) {
        var disp_image;
        this.setState({
          navVisible: true
        });

        if (window.readCookie("disp_image") == null) {
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
      } else {
        this.setState({
          currentImage: _img_oleg_chursin_216430_jpg_webp__WEBPACK_IMPORTED_MODULE_9___default.a
        });
        window.writeCookie("first_run", 1, 2);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "Setup",
        style: {
          transition: "background-image .5s ease-in-out",
          backgroundImage: "url('" + this.state.currentImage + "')"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, !this.state.navVisible && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: this.state.fadeOutName ? "SetupText fade" : "SetupText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "Big",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "Complete the setup"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "Small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, "Your name: ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_Additional_InputBoxReactive__WEBPACK_IMPORTED_MODULE_18__["default"], {
        type: "text",
        value: this.state.nameInputValue,
        onChange: function onChange(evt) {
          return _this3.updateNameInputValue(evt);
        },
        title: "Name",
        id: "name",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: this.openNav,
        type: "button",
        id: "nextbutton",
        className: "btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "Next"))), this.state.navVisible && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "Select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "Big",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, "Choose which services you want to use with Orrange New Tab"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "all",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "Boxes1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_ServiceLogin_Gmail__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_ServiceLogin_Github__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_ServiceLogin_Wunderlist__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_ServiceLogin_GcalTasks__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "Boxes2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_ServiceLogin_Trello__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_ServiceLogin_Todoist__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_ServiceLogin_Pocket__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_ServiceLogin_Asana__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        id: "finishbutton",
        type: "button",
        onClick: this.openNormal,
        className: "btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, "Finish")))));
    }
  }]);

  return Setup;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Setup);

/***/ }),

/***/ "./src/css/Setup.css":
/*!***************************!*\
  !*** ./src/css/Setup.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Setup.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/Setup.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Setup.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/Setup.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Setup.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/Setup.css");

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

/***/ "./src/icons/Cornmanthe3rd-Plex-Communication-gmail.ico":
/*!**************************************************************!*\
  !*** ./src/icons/Cornmanthe3rd-Plex-Communication-gmail.ico ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Cornmanthe3rd-Plex-Communication-gmail.3a4159a5.ico";

/***/ }),

/***/ "./src/icons/asana-logo.png":
/*!**********************************!*\
  !*** ./src/icons/asana-logo.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/asana-logo.44727def.png";

/***/ }),

/***/ "./src/icons/google_calendar.png":
/*!***************************************!*\
  !*** ./src/icons/google_calendar.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/google_calendar.fd5eff10.png";

/***/ }),

/***/ "./src/icons/pocket.svg":
/*!******************************!*\
  !*** ./src/icons/pocket.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pocket.2e828e38.svg";

/***/ }),

/***/ "./src/img/oleg-chursin-216430.jpg.webp":
/*!**********************************************!*\
  !*** ./src/img/oleg-chursin-216430.jpg.webp ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/oleg-chursin-216430.jpg.c9556d60.webp";

/***/ })

}]);
//# sourceMappingURL=4.chunk.js.map