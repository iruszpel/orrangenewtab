(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-icons-weather/lib/css/weather-icons.css":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./node_modules/react-icons-weather/lib/css/weather-icons.css ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n *  Weather Icons 2.0.8\n *  Updated September 19, 2015\n *  Weather themed icons for Bootstrap\n *  Author - Erik Flowers - erik@helloerik.com\n *  Email: erik@helloerik.com\n *  Twitter: http://twitter.com/Erik_UX\n *  ------------------------------------------------------------------------------\n *  Maintained at http://erikflowers.github.io/weather-icons\n *\n *  License\n *  ------------------------------------------------------------------------------\n *  - Font licensed under SIL OFL 1.1 -\n *    http://scripts.sil.org/OFL\n *  - CSS, SCSS and LESS are licensed under MIT License -\n *    http://opensource.org/licenses/mit-license.html\n *  - Documentation licensed under CC BY 3.0 -\n *    http://creativecommons.org/licenses/by/3.0/\n *  - Inspired by and works great as a companion with Font Awesome\n *    \"Font Awesome by Dave Gandy - http://fontawesome.io\"\n */\n@font-face {\n  font-family: 'weathericons';\n  src: url(" + escape(__webpack_require__(/*! ../font/weathericons-regular-webfont.eot */ "./node_modules/react-icons-weather/lib/font/weathericons-regular-webfont.eot")) + ");\n  src: url(" + escape(__webpack_require__(/*! ../font/weathericons-regular-webfont.eot */ "./node_modules/react-icons-weather/lib/font/weathericons-regular-webfont.eot")) + "?#iefix) format('embedded-opentype'), url(" + escape(__webpack_require__(/*! ../font/weathericons-regular-webfont.woff2 */ "./node_modules/react-icons-weather/lib/font/weathericons-regular-webfont.woff2")) + ") format('woff2'), url(" + escape(__webpack_require__(/*! ../font/weathericons-regular-webfont.woff */ "./node_modules/react-icons-weather/lib/font/weathericons-regular-webfont.woff")) + ") format('woff'), url(" + escape(__webpack_require__(/*! ../font/weathericons-regular-webfont.ttf */ "./node_modules/react-icons-weather/lib/font/weathericons-regular-webfont.ttf")) + ") format('truetype'), url(" + escape(__webpack_require__(/*! ../font/weathericons-regular-webfont.svg */ "./node_modules/react-icons-weather/lib/font/weathericons-regular-webfont.svg")) + "#weather_iconsregular) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.wi {\n  display: inline-block;\n  font-family: 'weathericons';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.wi-fw {\n  text-align: center;\n  width: 1.4em;\n}\n.wi-rotate-90 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.wi-rotate-180 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.wi-rotate-270 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.wi-flip-horizontal {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);\n  -webkit-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.wi-flip-vertical {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);\n  -webkit-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n.wi-day-sunny:before {\n  content: \"\\F00D\";\n}\n.wi-day-cloudy:before {\n  content: \"\\F002\";\n}\n.wi-day-cloudy-gusts:before {\n  content: \"\\F000\";\n}\n.wi-day-cloudy-windy:before {\n  content: \"\\F001\";\n}\n.wi-day-fog:before {\n  content: \"\\F003\";\n}\n.wi-day-hail:before {\n  content: \"\\F004\";\n}\n.wi-day-haze:before {\n  content: \"\\F0B6\";\n}\n.wi-day-lightning:before {\n  content: \"\\F005\";\n}\n.wi-day-rain:before {\n  content: \"\\F008\";\n}\n.wi-day-rain-mix:before {\n  content: \"\\F006\";\n}\n.wi-day-rain-wind:before {\n  content: \"\\F007\";\n}\n.wi-day-showers:before {\n  content: \"\\F009\";\n}\n.wi-day-sleet:before {\n  content: \"\\F0B2\";\n}\n.wi-day-sleet-storm:before {\n  content: \"\\F068\";\n}\n.wi-day-snow:before {\n  content: \"\\F00A\";\n}\n.wi-day-snow-thunderstorm:before {\n  content: \"\\F06B\";\n}\n.wi-day-snow-wind:before {\n  content: \"\\F065\";\n}\n.wi-day-sprinkle:before {\n  content: \"\\F00B\";\n}\n.wi-day-storm-showers:before {\n  content: \"\\F00E\";\n}\n.wi-day-sunny-overcast:before {\n  content: \"\\F00C\";\n}\n.wi-day-thunderstorm:before {\n  content: \"\\F010\";\n}\n.wi-day-windy:before {\n  content: \"\\F085\";\n}\n.wi-solar-eclipse:before {\n  content: \"\\F06E\";\n}\n.wi-hot:before {\n  content: \"\\F072\";\n}\n.wi-day-cloudy-high:before {\n  content: \"\\F07D\";\n}\n.wi-day-light-wind:before {\n  content: \"\\F0C4\";\n}\n.wi-night-clear:before {\n  content: \"\\F02E\";\n}\n.wi-night-alt-cloudy:before {\n  content: \"\\F086\";\n}\n.wi-night-alt-cloudy-gusts:before {\n  content: \"\\F022\";\n}\n.wi-night-alt-cloudy-windy:before {\n  content: \"\\F023\";\n}\n.wi-night-alt-hail:before {\n  content: \"\\F024\";\n}\n.wi-night-alt-lightning:before {\n  content: \"\\F025\";\n}\n.wi-night-alt-rain:before {\n  content: \"\\F028\";\n}\n.wi-night-alt-rain-mix:before {\n  content: \"\\F026\";\n}\n.wi-night-alt-rain-wind:before {\n  content: \"\\F027\";\n}\n.wi-night-alt-showers:before {\n  content: \"\\F029\";\n}\n.wi-night-alt-sleet:before {\n  content: \"\\F0B4\";\n}\n.wi-night-alt-sleet-storm:before {\n  content: \"\\F06A\";\n}\n.wi-night-alt-snow:before {\n  content: \"\\F02A\";\n}\n.wi-night-alt-snow-thunderstorm:before {\n  content: \"\\F06D\";\n}\n.wi-night-alt-snow-wind:before {\n  content: \"\\F067\";\n}\n.wi-night-alt-sprinkle:before {\n  content: \"\\F02B\";\n}\n.wi-night-alt-storm-showers:before {\n  content: \"\\F02C\";\n}\n.wi-night-alt-thunderstorm:before {\n  content: \"\\F02D\";\n}\n.wi-night-cloudy:before {\n  content: \"\\F031\";\n}\n.wi-night-cloudy-gusts:before {\n  content: \"\\F02F\";\n}\n.wi-night-cloudy-windy:before {\n  content: \"\\F030\";\n}\n.wi-night-fog:before {\n  content: \"\\F04A\";\n}\n.wi-night-hail:before {\n  content: \"\\F032\";\n}\n.wi-night-lightning:before {\n  content: \"\\F033\";\n}\n.wi-night-partly-cloudy:before {\n  content: \"\\F083\";\n}\n.wi-night-rain:before {\n  content: \"\\F036\";\n}\n.wi-night-rain-mix:before {\n  content: \"\\F034\";\n}\n.wi-night-rain-wind:before {\n  content: \"\\F035\";\n}\n.wi-night-showers:before {\n  content: \"\\F037\";\n}\n.wi-night-sleet:before {\n  content: \"\\F0B3\";\n}\n.wi-night-sleet-storm:before {\n  content: \"\\F069\";\n}\n.wi-night-snow:before {\n  content: \"\\F038\";\n}\n.wi-night-snow-thunderstorm:before {\n  content: \"\\F06C\";\n}\n.wi-night-snow-wind:before {\n  content: \"\\F066\";\n}\n.wi-night-sprinkle:before {\n  content: \"\\F039\";\n}\n.wi-night-storm-showers:before {\n  content: \"\\F03A\";\n}\n.wi-night-thunderstorm:before {\n  content: \"\\F03B\";\n}\n.wi-lunar-eclipse:before {\n  content: \"\\F070\";\n}\n.wi-stars:before {\n  content: \"\\F077\";\n}\n.wi-storm-showers:before {\n  content: \"\\F01D\";\n}\n.wi-thunderstorm:before {\n  content: \"\\F01E\";\n}\n.wi-night-alt-cloudy-high:before {\n  content: \"\\F07E\";\n}\n.wi-night-cloudy-high:before {\n  content: \"\\F080\";\n}\n.wi-night-alt-partly-cloudy:before {\n  content: \"\\F081\";\n}\n.wi-cloud:before {\n  content: \"\\F041\";\n}\n.wi-cloudy:before {\n  content: \"\\F013\";\n}\n.wi-cloudy-gusts:before {\n  content: \"\\F011\";\n}\n.wi-cloudy-windy:before {\n  content: \"\\F012\";\n}\n.wi-fog:before {\n  content: \"\\F014\";\n}\n.wi-hail:before {\n  content: \"\\F015\";\n}\n.wi-rain:before {\n  content: \"\\F019\";\n}\n.wi-rain-mix:before {\n  content: \"\\F017\";\n}\n.wi-rain-wind:before {\n  content: \"\\F018\";\n}\n.wi-showers:before {\n  content: \"\\F01A\";\n}\n.wi-sleet:before {\n  content: \"\\F0B5\";\n}\n.wi-snow:before {\n  content: \"\\F01B\";\n}\n.wi-sprinkle:before {\n  content: \"\\F01C\";\n}\n.wi-storm-showers:before {\n  content: \"\\F01D\";\n}\n.wi-thunderstorm:before {\n  content: \"\\F01E\";\n}\n.wi-snow-wind:before {\n  content: \"\\F064\";\n}\n.wi-snow:before {\n  content: \"\\F01B\";\n}\n.wi-smog:before {\n  content: \"\\F074\";\n}\n.wi-smoke:before {\n  content: \"\\F062\";\n}\n.wi-lightning:before {\n  content: \"\\F016\";\n}\n.wi-raindrops:before {\n  content: \"\\F04E\";\n}\n.wi-raindrop:before {\n  content: \"\\F078\";\n}\n.wi-dust:before {\n  content: \"\\F063\";\n}\n.wi-snowflake-cold:before {\n  content: \"\\F076\";\n}\n.wi-windy:before {\n  content: \"\\F021\";\n}\n.wi-strong-wind:before {\n  content: \"\\F050\";\n}\n.wi-sandstorm:before {\n  content: \"\\F082\";\n}\n.wi-earthquake:before {\n  content: \"\\F0C6\";\n}\n.wi-fire:before {\n  content: \"\\F0C7\";\n}\n.wi-flood:before {\n  content: \"\\F07C\";\n}\n.wi-meteor:before {\n  content: \"\\F071\";\n}\n.wi-tsunami:before {\n  content: \"\\F0C5\";\n}\n.wi-volcano:before {\n  content: \"\\F0C8\";\n}\n.wi-hurricane:before {\n  content: \"\\F073\";\n}\n.wi-tornado:before {\n  content: \"\\F056\";\n}\n.wi-small-craft-advisory:before {\n  content: \"\\F0CC\";\n}\n.wi-gale-warning:before {\n  content: \"\\F0CD\";\n}\n.wi-storm-warning:before {\n  content: \"\\F0CE\";\n}\n.wi-hurricane-warning:before {\n  content: \"\\F0CF\";\n}\n.wi-wind-direction:before {\n  content: \"\\F0B1\";\n}\n.wi-alien:before {\n  content: \"\\F075\";\n}\n.wi-celsius:before {\n  content: \"\\F03C\";\n}\n.wi-fahrenheit:before {\n  content: \"\\F045\";\n}\n.wi-degrees:before {\n  content: \"\\F042\";\n}\n.wi-thermometer:before {\n  content: \"\\F055\";\n}\n.wi-thermometer-exterior:before {\n  content: \"\\F053\";\n}\n.wi-thermometer-internal:before {\n  content: \"\\F054\";\n}\n.wi-cloud-down:before {\n  content: \"\\F03D\";\n}\n.wi-cloud-up:before {\n  content: \"\\F040\";\n}\n.wi-cloud-refresh:before {\n  content: \"\\F03E\";\n}\n.wi-horizon:before {\n  content: \"\\F047\";\n}\n.wi-horizon-alt:before {\n  content: \"\\F046\";\n}\n.wi-sunrise:before {\n  content: \"\\F051\";\n}\n.wi-sunset:before {\n  content: \"\\F052\";\n}\n.wi-moonrise:before {\n  content: \"\\F0C9\";\n}\n.wi-moonset:before {\n  content: \"\\F0CA\";\n}\n.wi-refresh:before {\n  content: \"\\F04C\";\n}\n.wi-refresh-alt:before {\n  content: \"\\F04B\";\n}\n.wi-umbrella:before {\n  content: \"\\F084\";\n}\n.wi-barometer:before {\n  content: \"\\F079\";\n}\n.wi-humidity:before {\n  content: \"\\F07A\";\n}\n.wi-na:before {\n  content: \"\\F07B\";\n}\n.wi-train:before {\n  content: \"\\F0CB\";\n}\n.wi-moon-new:before {\n  content: \"\\F095\";\n}\n.wi-moon-waxing-crescent-1:before {\n  content: \"\\F096\";\n}\n.wi-moon-waxing-crescent-2:before {\n  content: \"\\F097\";\n}\n.wi-moon-waxing-crescent-3:before {\n  content: \"\\F098\";\n}\n.wi-moon-waxing-crescent-4:before {\n  content: \"\\F099\";\n}\n.wi-moon-waxing-crescent-5:before {\n  content: \"\\F09A\";\n}\n.wi-moon-waxing-crescent-6:before {\n  content: \"\\F09B\";\n}\n.wi-moon-first-quarter:before {\n  content: \"\\F09C\";\n}\n.wi-moon-waxing-gibbous-1:before {\n  content: \"\\F09D\";\n}\n.wi-moon-waxing-gibbous-2:before {\n  content: \"\\F09E\";\n}\n.wi-moon-waxing-gibbous-3:before {\n  content: \"\\F09F\";\n}\n.wi-moon-waxing-gibbous-4:before {\n  content: \"\\F0A0\";\n}\n.wi-moon-waxing-gibbous-5:before {\n  content: \"\\F0A1\";\n}\n.wi-moon-waxing-gibbous-6:before {\n  content: \"\\F0A2\";\n}\n.wi-moon-full:before {\n  content: \"\\F0A3\";\n}\n.wi-moon-waning-gibbous-1:before {\n  content: \"\\F0A4\";\n}\n.wi-moon-waning-gibbous-2:before {\n  content: \"\\F0A5\";\n}\n.wi-moon-waning-gibbous-3:before {\n  content: \"\\F0A6\";\n}\n.wi-moon-waning-gibbous-4:before {\n  content: \"\\F0A7\";\n}\n.wi-moon-waning-gibbous-5:before {\n  content: \"\\F0A8\";\n}\n.wi-moon-waning-gibbous-6:before {\n  content: \"\\F0A9\";\n}\n.wi-moon-third-quarter:before {\n  content: \"\\F0AA\";\n}\n.wi-moon-waning-crescent-1:before {\n  content: \"\\F0AB\";\n}\n.wi-moon-waning-crescent-2:before {\n  content: \"\\F0AC\";\n}\n.wi-moon-waning-crescent-3:before {\n  content: \"\\F0AD\";\n}\n.wi-moon-waning-crescent-4:before {\n  content: \"\\F0AE\";\n}\n.wi-moon-waning-crescent-5:before {\n  content: \"\\F0AF\";\n}\n.wi-moon-waning-crescent-6:before {\n  content: \"\\F0B0\";\n}\n.wi-moon-alt-new:before {\n  content: \"\\F0EB\";\n}\n.wi-moon-alt-waxing-crescent-1:before {\n  content: \"\\F0D0\";\n}\n.wi-moon-alt-waxing-crescent-2:before {\n  content: \"\\F0D1\";\n}\n.wi-moon-alt-waxing-crescent-3:before {\n  content: \"\\F0D2\";\n}\n.wi-moon-alt-waxing-crescent-4:before {\n  content: \"\\F0D3\";\n}\n.wi-moon-alt-waxing-crescent-5:before {\n  content: \"\\F0D4\";\n}\n.wi-moon-alt-waxing-crescent-6:before {\n  content: \"\\F0D5\";\n}\n.wi-moon-alt-first-quarter:before {\n  content: \"\\F0D6\";\n}\n.wi-moon-alt-waxing-gibbous-1:before {\n  content: \"\\F0D7\";\n}\n.wi-moon-alt-waxing-gibbous-2:before {\n  content: \"\\F0D8\";\n}\n.wi-moon-alt-waxing-gibbous-3:before {\n  content: \"\\F0D9\";\n}\n.wi-moon-alt-waxing-gibbous-4:before {\n  content: \"\\F0DA\";\n}\n.wi-moon-alt-waxing-gibbous-5:before {\n  content: \"\\F0DB\";\n}\n.wi-moon-alt-waxing-gibbous-6:before {\n  content: \"\\F0DC\";\n}\n.wi-moon-alt-full:before {\n  content: \"\\F0DD\";\n}\n.wi-moon-alt-waning-gibbous-1:before {\n  content: \"\\F0DE\";\n}\n.wi-moon-alt-waning-gibbous-2:before {\n  content: \"\\F0DF\";\n}\n.wi-moon-alt-waning-gibbous-3:before {\n  content: \"\\F0E0\";\n}\n.wi-moon-alt-waning-gibbous-4:before {\n  content: \"\\F0E1\";\n}\n.wi-moon-alt-waning-gibbous-5:before {\n  content: \"\\F0E2\";\n}\n.wi-moon-alt-waning-gibbous-6:before {\n  content: \"\\F0E3\";\n}\n.wi-moon-alt-third-quarter:before {\n  content: \"\\F0E4\";\n}\n.wi-moon-alt-waning-crescent-1:before {\n  content: \"\\F0E5\";\n}\n.wi-moon-alt-waning-crescent-2:before {\n  content: \"\\F0E6\";\n}\n.wi-moon-alt-waning-crescent-3:before {\n  content: \"\\F0E7\";\n}\n.wi-moon-alt-waning-crescent-4:before {\n  content: \"\\F0E8\";\n}\n.wi-moon-alt-waning-crescent-5:before {\n  content: \"\\F0E9\";\n}\n.wi-moon-alt-waning-crescent-6:before {\n  content: \"\\F0EA\";\n}\n.wi-moon-0:before {\n  content: \"\\F095\";\n}\n.wi-moon-1:before {\n  content: \"\\F096\";\n}\n.wi-moon-2:before {\n  content: \"\\F097\";\n}\n.wi-moon-3:before {\n  content: \"\\F098\";\n}\n.wi-moon-4:before {\n  content: \"\\F099\";\n}\n.wi-moon-5:before {\n  content: \"\\F09A\";\n}\n.wi-moon-6:before {\n  content: \"\\F09B\";\n}\n.wi-moon-7:before {\n  content: \"\\F09C\";\n}\n.wi-moon-8:before {\n  content: \"\\F09D\";\n}\n.wi-moon-9:before {\n  content: \"\\F09E\";\n}\n.wi-moon-10:before {\n  content: \"\\F09F\";\n}\n.wi-moon-11:before {\n  content: \"\\F0A0\";\n}\n.wi-moon-12:before {\n  content: \"\\F0A1\";\n}\n.wi-moon-13:before {\n  content: \"\\F0A2\";\n}\n.wi-moon-14:before {\n  content: \"\\F0A3\";\n}\n.wi-moon-15:before {\n  content: \"\\F0A4\";\n}\n.wi-moon-16:before {\n  content: \"\\F0A5\";\n}\n.wi-moon-17:before {\n  content: \"\\F0A6\";\n}\n.wi-moon-18:before {\n  content: \"\\F0A7\";\n}\n.wi-moon-19:before {\n  content: \"\\F0A8\";\n}\n.wi-moon-20:before {\n  content: \"\\F0A9\";\n}\n.wi-moon-21:before {\n  content: \"\\F0AA\";\n}\n.wi-moon-22:before {\n  content: \"\\F0AB\";\n}\n.wi-moon-23:before {\n  content: \"\\F0AC\";\n}\n.wi-moon-24:before {\n  content: \"\\F0AD\";\n}\n.wi-moon-25:before {\n  content: \"\\F0AE\";\n}\n.wi-moon-26:before {\n  content: \"\\F0AF\";\n}\n.wi-moon-27:before {\n  content: \"\\F0B0\";\n}\n.wi-time-1:before {\n  content: \"\\F08A\";\n}\n.wi-time-2:before {\n  content: \"\\F08B\";\n}\n.wi-time-3:before {\n  content: \"\\F08C\";\n}\n.wi-time-4:before {\n  content: \"\\F08D\";\n}\n.wi-time-5:before {\n  content: \"\\F08E\";\n}\n.wi-time-6:before {\n  content: \"\\F08F\";\n}\n.wi-time-7:before {\n  content: \"\\F090\";\n}\n.wi-time-8:before {\n  content: \"\\F091\";\n}\n.wi-time-9:before {\n  content: \"\\F092\";\n}\n.wi-time-10:before {\n  content: \"\\F093\";\n}\n.wi-time-11:before {\n  content: \"\\F094\";\n}\n.wi-time-12:before {\n  content: \"\\F089\";\n}\n.wi-direction-up:before {\n  content: \"\\F058\";\n}\n.wi-direction-up-right:before {\n  content: \"\\F057\";\n}\n.wi-direction-right:before {\n  content: \"\\F04D\";\n}\n.wi-direction-down-right:before {\n  content: \"\\F088\";\n}\n.wi-direction-down:before {\n  content: \"\\F044\";\n}\n.wi-direction-down-left:before {\n  content: \"\\F043\";\n}\n.wi-direction-left:before {\n  content: \"\\F048\";\n}\n.wi-direction-up-left:before {\n  content: \"\\F087\";\n}\n.wi-wind-beaufort-0:before {\n  content: \"\\F0B7\";\n}\n.wi-wind-beaufort-1:before {\n  content: \"\\F0B8\";\n}\n.wi-wind-beaufort-2:before {\n  content: \"\\F0B9\";\n}\n.wi-wind-beaufort-3:before {\n  content: \"\\F0BA\";\n}\n.wi-wind-beaufort-4:before {\n  content: \"\\F0BB\";\n}\n.wi-wind-beaufort-5:before {\n  content: \"\\F0BC\";\n}\n.wi-wind-beaufort-6:before {\n  content: \"\\F0BD\";\n}\n.wi-wind-beaufort-7:before {\n  content: \"\\F0BE\";\n}\n.wi-wind-beaufort-8:before {\n  content: \"\\F0BF\";\n}\n.wi-wind-beaufort-9:before {\n  content: \"\\F0C0\";\n}\n.wi-wind-beaufort-10:before {\n  content: \"\\F0C1\";\n}\n.wi-wind-beaufort-11:before {\n  content: \"\\F0C2\";\n}\n.wi-wind-beaufort-12:before {\n  content: \"\\F0C3\";\n}\n.wi-yahoo-0:before {\n  content: \"\\F056\";\n}\n.wi-yahoo-1:before {\n  content: \"\\F00E\";\n}\n.wi-yahoo-2:before {\n  content: \"\\F073\";\n}\n.wi-yahoo-3:before {\n  content: \"\\F01E\";\n}\n.wi-yahoo-4:before {\n  content: \"\\F01E\";\n}\n.wi-yahoo-5:before {\n  content: \"\\F017\";\n}\n.wi-yahoo-6:before {\n  content: \"\\F017\";\n}\n.wi-yahoo-7:before {\n  content: \"\\F017\";\n}\n.wi-yahoo-8:before {\n  content: \"\\F015\";\n}\n.wi-yahoo-9:before {\n  content: \"\\F01A\";\n}\n.wi-yahoo-10:before {\n  content: \"\\F015\";\n}\n.wi-yahoo-11:before {\n  content: \"\\F01A\";\n}\n.wi-yahoo-12:before {\n  content: \"\\F01A\";\n}\n.wi-yahoo-13:before {\n  content: \"\\F01B\";\n}\n.wi-yahoo-14:before {\n  content: \"\\F00A\";\n}\n.wi-yahoo-15:before {\n  content: \"\\F064\";\n}\n.wi-yahoo-16:before {\n  content: \"\\F01B\";\n}\n.wi-yahoo-17:before {\n  content: \"\\F015\";\n}\n.wi-yahoo-18:before {\n  content: \"\\F017\";\n}\n.wi-yahoo-19:before {\n  content: \"\\F063\";\n}\n.wi-yahoo-20:before {\n  content: \"\\F014\";\n}\n.wi-yahoo-21:before {\n  content: \"\\F021\";\n}\n.wi-yahoo-22:before {\n  content: \"\\F062\";\n}\n.wi-yahoo-23:before {\n  content: \"\\F050\";\n}\n.wi-yahoo-24:before {\n  content: \"\\F050\";\n}\n.wi-yahoo-25:before {\n  content: \"\\F076\";\n}\n.wi-yahoo-26:before {\n  content: \"\\F013\";\n}\n.wi-yahoo-27:before {\n  content: \"\\F031\";\n}\n.wi-yahoo-28:before {\n  content: \"\\F002\";\n}\n.wi-yahoo-29:before {\n  content: \"\\F031\";\n}\n.wi-yahoo-30:before {\n  content: \"\\F002\";\n}\n.wi-yahoo-31:before {\n  content: \"\\F02E\";\n}\n.wi-yahoo-32:before {\n  content: \"\\F00D\";\n}\n.wi-yahoo-33:before {\n  content: \"\\F083\";\n}\n.wi-yahoo-34:before {\n  content: \"\\F00C\";\n}\n.wi-yahoo-35:before {\n  content: \"\\F017\";\n}\n.wi-yahoo-36:before {\n  content: \"\\F072\";\n}\n.wi-yahoo-37:before {\n  content: \"\\F00E\";\n}\n.wi-yahoo-38:before {\n  content: \"\\F00E\";\n}\n.wi-yahoo-39:before {\n  content: \"\\F00E\";\n}\n.wi-yahoo-40:before {\n  content: \"\\F01A\";\n}\n.wi-yahoo-41:before {\n  content: \"\\F064\";\n}\n.wi-yahoo-42:before {\n  content: \"\\F01B\";\n}\n.wi-yahoo-43:before {\n  content: \"\\F064\";\n}\n.wi-yahoo-44:before {\n  content: \"\\F00C\";\n}\n.wi-yahoo-45:before {\n  content: \"\\F00E\";\n}\n.wi-yahoo-46:before {\n  content: \"\\F01B\";\n}\n.wi-yahoo-47:before {\n  content: \"\\F00E\";\n}\n.wi-yahoo-3200:before {\n  content: \"\\F077\";\n}\n.wi-forecast-io-clear-day:before {\n  content: \"\\F00D\";\n}\n.wi-forecast-io-clear-night:before {\n  content: \"\\F02E\";\n}\n.wi-forecast-io-rain:before {\n  content: \"\\F019\";\n}\n.wi-forecast-io-snow:before {\n  content: \"\\F01B\";\n}\n.wi-forecast-io-sleet:before {\n  content: \"\\F0B5\";\n}\n.wi-forecast-io-wind:before {\n  content: \"\\F050\";\n}\n.wi-forecast-io-fog:before {\n  content: \"\\F014\";\n}\n.wi-forecast-io-cloudy:before {\n  content: \"\\F013\";\n}\n.wi-forecast-io-partly-cloudy-day:before {\n  content: \"\\F002\";\n}\n.wi-forecast-io-partly-cloudy-night:before {\n  content: \"\\F031\";\n}\n.wi-forecast-io-hail:before {\n  content: \"\\F015\";\n}\n.wi-forecast-io-thunderstorm:before {\n  content: \"\\F01E\";\n}\n.wi-forecast-io-tornado:before {\n  content: \"\\F056\";\n}\n.wi-wmo4680-0:before,\n.wi-wmo4680-00:before {\n  content: \"\\F055\";\n}\n.wi-wmo4680-1:before,\n.wi-wmo4680-01:before {\n  content: \"\\F013\";\n}\n.wi-wmo4680-2:before,\n.wi-wmo4680-02:before {\n  content: \"\\F055\";\n}\n.wi-wmo4680-3:before,\n.wi-wmo4680-03:before {\n  content: \"\\F013\";\n}\n.wi-wmo4680-4:before,\n.wi-wmo4680-04:before {\n  content: \"\\F014\";\n}\n.wi-wmo4680-5:before,\n.wi-wmo4680-05:before {\n  content: \"\\F014\";\n}\n.wi-wmo4680-10:before {\n  content: \"\\F014\";\n}\n.wi-wmo4680-11:before {\n  content: \"\\F014\";\n}\n.wi-wmo4680-12:before {\n  content: \"\\F016\";\n}\n.wi-wmo4680-18:before {\n  content: \"\\F050\";\n}\n.wi-wmo4680-20:before {\n  content: \"\\F014\";\n}\n.wi-wmo4680-21:before {\n  content: \"\\F017\";\n}\n.wi-wmo4680-22:before {\n  content: \"\\F017\";\n}\n.wi-wmo4680-23:before {\n  content: \"\\F019\";\n}\n.wi-wmo4680-24:before {\n  content: \"\\F01B\";\n}\n.wi-wmo4680-25:before {\n  content: \"\\F015\";\n}\n.wi-wmo4680-26:before {\n  content: \"\\F01E\";\n}\n.wi-wmo4680-27:before {\n  content: \"\\F063\";\n}\n.wi-wmo4680-28:before {\n  content: \"\\F063\";\n}\n.wi-wmo4680-29:before {\n  content: \"\\F063\";\n}\n.wi-wmo4680-30:before {\n  content: \"\\F014\";\n}\n.wi-wmo4680-31:before {\n  content: \"\\F014\";\n}\n.wi-wmo4680-32:before {\n  content: \"\\F014\";\n}\n.wi-wmo4680-33:before {\n  content: \"\\F014\";\n}\n.wi-wmo4680-34:before {\n  content: \"\\F014\";\n}\n.wi-wmo4680-35:before {\n  content: \"\\F014\";\n}\n.wi-wmo4680-40:before {\n  content: \"\\F017\";\n}\n.wi-wmo4680-41:before {\n  content: \"\\F01C\";\n}\n.wi-wmo4680-42:before {\n  content: \"\\F019\";\n}\n.wi-wmo4680-43:before {\n  content: \"\\F01C\";\n}\n.wi-wmo4680-44:before {\n  content: \"\\F019\";\n}\n.wi-wmo4680-45:before {\n  content: \"\\F015\";\n}\n.wi-wmo4680-46:before {\n  content: \"\\F015\";\n}\n.wi-wmo4680-47:before {\n  content: \"\\F01B\";\n}\n.wi-wmo4680-48:before {\n  content: \"\\F01B\";\n}\n.wi-wmo4680-50:before {\n  content: \"\\F01C\";\n}\n.wi-wmo4680-51:before {\n  content: \"\\F01C\";\n}\n.wi-wmo4680-52:before {\n  content: \"\\F019\";\n}\n.wi-wmo4680-53:before {\n  content: \"\\F019\";\n}\n.wi-wmo4680-54:before {\n  content: \"\\F076\";\n}\n.wi-wmo4680-55:before {\n  content: \"\\F076\";\n}\n.wi-wmo4680-56:before {\n  content: \"\\F076\";\n}\n.wi-wmo4680-57:before {\n  content: \"\\F01C\";\n}\n.wi-wmo4680-58:before {\n  content: \"\\F019\";\n}\n.wi-wmo4680-60:before {\n  content: \"\\F01C\";\n}\n.wi-wmo4680-61:before {\n  content: \"\\F01C\";\n}\n.wi-wmo4680-62:before {\n  content: \"\\F019\";\n}\n.wi-wmo4680-63:before {\n  content: \"\\F019\";\n}\n.wi-wmo4680-64:before {\n  content: \"\\F015\";\n}\n.wi-wmo4680-65:before {\n  content: \"\\F015\";\n}\n.wi-wmo4680-66:before {\n  content: \"\\F015\";\n}\n.wi-wmo4680-67:before {\n  content: \"\\F017\";\n}\n.wi-wmo4680-68:before {\n  content: \"\\F017\";\n}\n.wi-wmo4680-70:before {\n  content: \"\\F01B\";\n}\n.wi-wmo4680-71:before {\n  content: \"\\F01B\";\n}\n.wi-wmo4680-72:before {\n  content: \"\\F01B\";\n}\n.wi-wmo4680-73:before {\n  content: \"\\F01B\";\n}\n.wi-wmo4680-74:before {\n  content: \"\\F076\";\n}\n.wi-wmo4680-75:before {\n  content: \"\\F076\";\n}\n.wi-wmo4680-76:before {\n  content: \"\\F076\";\n}\n.wi-wmo4680-77:before {\n  content: \"\\F01B\";\n}\n.wi-wmo4680-78:before {\n  content: \"\\F076\";\n}\n.wi-wmo4680-80:before {\n  content: \"\\F019\";\n}\n.wi-wmo4680-81:before {\n  content: \"\\F01C\";\n}\n.wi-wmo4680-82:before {\n  content: \"\\F019\";\n}\n.wi-wmo4680-83:before {\n  content: \"\\F019\";\n}\n.wi-wmo4680-84:before {\n  content: \"\\F01D\";\n}\n.wi-wmo4680-85:before {\n  content: \"\\F017\";\n}\n.wi-wmo4680-86:before {\n  content: \"\\F017\";\n}\n.wi-wmo4680-87:before {\n  content: \"\\F017\";\n}\n.wi-wmo4680-89:before {\n  content: \"\\F015\";\n}\n.wi-wmo4680-90:before {\n  content: \"\\F016\";\n}\n.wi-wmo4680-91:before {\n  content: \"\\F01D\";\n}\n.wi-wmo4680-92:before {\n  content: \"\\F01E\";\n}\n.wi-wmo4680-93:before {\n  content: \"\\F01E\";\n}\n.wi-wmo4680-94:before {\n  content: \"\\F016\";\n}\n.wi-wmo4680-95:before {\n  content: \"\\F01E\";\n}\n.wi-wmo4680-96:before {\n  content: \"\\F01E\";\n}\n.wi-wmo4680-99:before {\n  content: \"\\F056\";\n}\n.wi-owm-200:before {\n  content: \"\\F01E\";\n}\n.wi-owm-201:before {\n  content: \"\\F01E\";\n}\n.wi-owm-202:before {\n  content: \"\\F01E\";\n}\n.wi-owm-210:before {\n  content: \"\\F016\";\n}\n.wi-owm-211:before {\n  content: \"\\F016\";\n}\n.wi-owm-212:before {\n  content: \"\\F016\";\n}\n.wi-owm-221:before {\n  content: \"\\F016\";\n}\n.wi-owm-230:before {\n  content: \"\\F01E\";\n}\n.wi-owm-231:before {\n  content: \"\\F01E\";\n}\n.wi-owm-232:before {\n  content: \"\\F01E\";\n}\n.wi-owm-300:before {\n  content: \"\\F01C\";\n}\n.wi-owm-301:before {\n  content: \"\\F01C\";\n}\n.wi-owm-302:before {\n  content: \"\\F019\";\n}\n.wi-owm-310:before {\n  content: \"\\F017\";\n}\n.wi-owm-311:before {\n  content: \"\\F019\";\n}\n.wi-owm-312:before {\n  content: \"\\F019\";\n}\n.wi-owm-313:before {\n  content: \"\\F01A\";\n}\n.wi-owm-314:before {\n  content: \"\\F019\";\n}\n.wi-owm-321:before {\n  content: \"\\F01C\";\n}\n.wi-owm-500:before {\n  content: \"\\F01C\";\n}\n.wi-owm-501:before {\n  content: \"\\F019\";\n}\n.wi-owm-502:before {\n  content: \"\\F019\";\n}\n.wi-owm-503:before {\n  content: \"\\F019\";\n}\n.wi-owm-504:before {\n  content: \"\\F019\";\n}\n.wi-owm-511:before {\n  content: \"\\F017\";\n}\n.wi-owm-520:before {\n  content: \"\\F01A\";\n}\n.wi-owm-521:before {\n  content: \"\\F01A\";\n}\n.wi-owm-522:before {\n  content: \"\\F01A\";\n}\n.wi-owm-531:before {\n  content: \"\\F01D\";\n}\n.wi-owm-600:before {\n  content: \"\\F01B\";\n}\n.wi-owm-601:before {\n  content: \"\\F01B\";\n}\n.wi-owm-602:before {\n  content: \"\\F0B5\";\n}\n.wi-owm-611:before {\n  content: \"\\F017\";\n}\n.wi-owm-612:before {\n  content: \"\\F017\";\n}\n.wi-owm-615:before {\n  content: \"\\F017\";\n}\n.wi-owm-616:before {\n  content: \"\\F017\";\n}\n.wi-owm-620:before {\n  content: \"\\F017\";\n}\n.wi-owm-621:before {\n  content: \"\\F01B\";\n}\n.wi-owm-622:before {\n  content: \"\\F01B\";\n}\n.wi-owm-701:before {\n  content: \"\\F01A\";\n}\n.wi-owm-711:before {\n  content: \"\\F062\";\n}\n.wi-owm-721:before {\n  content: \"\\F0B6\";\n}\n.wi-owm-731:before {\n  content: \"\\F063\";\n}\n.wi-owm-741:before {\n  content: \"\\F014\";\n}\n.wi-owm-761:before {\n  content: \"\\F063\";\n}\n.wi-owm-762:before {\n  content: \"\\F063\";\n}\n.wi-owm-771:before {\n  content: \"\\F011\";\n}\n.wi-owm-781:before {\n  content: \"\\F056\";\n}\n.wi-owm-800:before {\n  content: \"\\F00D\";\n}\n.wi-owm-801:before {\n  content: \"\\F011\";\n}\n.wi-owm-802:before {\n  content: \"\\F011\";\n}\n.wi-owm-803:before {\n  content: \"\\F012\";\n}\n.wi-owm-804:before {\n  content: \"\\F013\";\n}\n.wi-owm-900:before {\n  content: \"\\F056\";\n}\n.wi-owm-901:before {\n  content: \"\\F01D\";\n}\n.wi-owm-902:before {\n  content: \"\\F073\";\n}\n.wi-owm-903:before {\n  content: \"\\F076\";\n}\n.wi-owm-904:before {\n  content: \"\\F072\";\n}\n.wi-owm-905:before {\n  content: \"\\F021\";\n}\n.wi-owm-906:before {\n  content: \"\\F015\";\n}\n.wi-owm-957:before {\n  content: \"\\F050\";\n}\n.wi-owm-day-200:before {\n  content: \"\\F010\";\n}\n.wi-owm-day-201:before {\n  content: \"\\F010\";\n}\n.wi-owm-day-202:before {\n  content: \"\\F010\";\n}\n.wi-owm-day-210:before {\n  content: \"\\F005\";\n}\n.wi-owm-day-211:before {\n  content: \"\\F005\";\n}\n.wi-owm-day-212:before {\n  content: \"\\F005\";\n}\n.wi-owm-day-221:before {\n  content: \"\\F005\";\n}\n.wi-owm-day-230:before {\n  content: \"\\F010\";\n}\n.wi-owm-day-231:before {\n  content: \"\\F010\";\n}\n.wi-owm-day-232:before {\n  content: \"\\F010\";\n}\n.wi-owm-day-300:before {\n  content: \"\\F00B\";\n}\n.wi-owm-day-301:before {\n  content: \"\\F00B\";\n}\n.wi-owm-day-302:before {\n  content: \"\\F008\";\n}\n.wi-owm-day-310:before {\n  content: \"\\F008\";\n}\n.wi-owm-day-311:before {\n  content: \"\\F008\";\n}\n.wi-owm-day-312:before {\n  content: \"\\F008\";\n}\n.wi-owm-day-313:before {\n  content: \"\\F008\";\n}\n.wi-owm-day-314:before {\n  content: \"\\F008\";\n}\n.wi-owm-day-321:before {\n  content: \"\\F00B\";\n}\n.wi-owm-day-500:before {\n  content: \"\\F00B\";\n}\n.wi-owm-day-501:before {\n  content: \"\\F008\";\n}\n.wi-owm-day-502:before {\n  content: \"\\F008\";\n}\n.wi-owm-day-503:before {\n  content: \"\\F008\";\n}\n.wi-owm-day-504:before {\n  content: \"\\F008\";\n}\n.wi-owm-day-511:before {\n  content: \"\\F006\";\n}\n.wi-owm-day-520:before {\n  content: \"\\F009\";\n}\n.wi-owm-day-521:before {\n  content: \"\\F009\";\n}\n.wi-owm-day-522:before {\n  content: \"\\F009\";\n}\n.wi-owm-day-531:before {\n  content: \"\\F00E\";\n}\n.wi-owm-day-600:before {\n  content: \"\\F00A\";\n}\n.wi-owm-day-601:before {\n  content: \"\\F0B2\";\n}\n.wi-owm-day-602:before {\n  content: \"\\F00A\";\n}\n.wi-owm-day-611:before {\n  content: \"\\F006\";\n}\n.wi-owm-day-612:before {\n  content: \"\\F006\";\n}\n.wi-owm-day-615:before {\n  content: \"\\F006\";\n}\n.wi-owm-day-616:before {\n  content: \"\\F006\";\n}\n.wi-owm-day-620:before {\n  content: \"\\F006\";\n}\n.wi-owm-day-621:before {\n  content: \"\\F00A\";\n}\n.wi-owm-day-622:before {\n  content: \"\\F00A\";\n}\n.wi-owm-day-701:before {\n  content: \"\\F009\";\n}\n.wi-owm-day-711:before {\n  content: \"\\F062\";\n}\n.wi-owm-day-721:before {\n  content: \"\\F0B6\";\n}\n.wi-owm-day-731:before {\n  content: \"\\F063\";\n}\n.wi-owm-day-741:before {\n  content: \"\\F003\";\n}\n.wi-owm-day-761:before {\n  content: \"\\F063\";\n}\n.wi-owm-day-762:before {\n  content: \"\\F063\";\n}\n.wi-owm-day-781:before {\n  content: \"\\F056\";\n}\n.wi-owm-day-800:before {\n  content: \"\\F00D\";\n}\n.wi-owm-day-801:before {\n  content: \"\\F000\";\n}\n.wi-owm-day-802:before {\n  content: \"\\F000\";\n}\n.wi-owm-day-803:before {\n  content: \"\\F000\";\n}\n.wi-owm-day-804:before {\n  content: \"\\F00C\";\n}\n.wi-owm-day-900:before {\n  content: \"\\F056\";\n}\n.wi-owm-day-902:before {\n  content: \"\\F073\";\n}\n.wi-owm-day-903:before {\n  content: \"\\F076\";\n}\n.wi-owm-day-904:before {\n  content: \"\\F072\";\n}\n.wi-owm-day-906:before {\n  content: \"\\F004\";\n}\n.wi-owm-day-957:before {\n  content: \"\\F050\";\n}\n.wi-owm-night-200:before {\n  content: \"\\F02D\";\n}\n.wi-owm-night-201:before {\n  content: \"\\F02D\";\n}\n.wi-owm-night-202:before {\n  content: \"\\F02D\";\n}\n.wi-owm-night-210:before {\n  content: \"\\F025\";\n}\n.wi-owm-night-211:before {\n  content: \"\\F025\";\n}\n.wi-owm-night-212:before {\n  content: \"\\F025\";\n}\n.wi-owm-night-221:before {\n  content: \"\\F025\";\n}\n.wi-owm-night-230:before {\n  content: \"\\F02D\";\n}\n.wi-owm-night-231:before {\n  content: \"\\F02D\";\n}\n.wi-owm-night-232:before {\n  content: \"\\F02D\";\n}\n.wi-owm-night-300:before {\n  content: \"\\F02B\";\n}\n.wi-owm-night-301:before {\n  content: \"\\F02B\";\n}\n.wi-owm-night-302:before {\n  content: \"\\F028\";\n}\n.wi-owm-night-310:before {\n  content: \"\\F028\";\n}\n.wi-owm-night-311:before {\n  content: \"\\F028\";\n}\n.wi-owm-night-312:before {\n  content: \"\\F028\";\n}\n.wi-owm-night-313:before {\n  content: \"\\F028\";\n}\n.wi-owm-night-314:before {\n  content: \"\\F028\";\n}\n.wi-owm-night-321:before {\n  content: \"\\F02B\";\n}\n.wi-owm-night-500:before {\n  content: \"\\F02B\";\n}\n.wi-owm-night-501:before {\n  content: \"\\F028\";\n}\n.wi-owm-night-502:before {\n  content: \"\\F028\";\n}\n.wi-owm-night-503:before {\n  content: \"\\F028\";\n}\n.wi-owm-night-504:before {\n  content: \"\\F028\";\n}\n.wi-owm-night-511:before {\n  content: \"\\F026\";\n}\n.wi-owm-night-520:before {\n  content: \"\\F029\";\n}\n.wi-owm-night-521:before {\n  content: \"\\F029\";\n}\n.wi-owm-night-522:before {\n  content: \"\\F029\";\n}\n.wi-owm-night-531:before {\n  content: \"\\F02C\";\n}\n.wi-owm-night-600:before {\n  content: \"\\F02A\";\n}\n.wi-owm-night-601:before {\n  content: \"\\F0B4\";\n}\n.wi-owm-night-602:before {\n  content: \"\\F02A\";\n}\n.wi-owm-night-611:before {\n  content: \"\\F026\";\n}\n.wi-owm-night-612:before {\n  content: \"\\F026\";\n}\n.wi-owm-night-615:before {\n  content: \"\\F026\";\n}\n.wi-owm-night-616:before {\n  content: \"\\F026\";\n}\n.wi-owm-night-620:before {\n  content: \"\\F026\";\n}\n.wi-owm-night-621:before {\n  content: \"\\F02A\";\n}\n.wi-owm-night-622:before {\n  content: \"\\F02A\";\n}\n.wi-owm-night-701:before {\n  content: \"\\F029\";\n}\n.wi-owm-night-711:before {\n  content: \"\\F062\";\n}\n.wi-owm-night-721:before {\n  content: \"\\F0B6\";\n}\n.wi-owm-night-731:before {\n  content: \"\\F063\";\n}\n.wi-owm-night-741:before {\n  content: \"\\F04A\";\n}\n.wi-owm-night-761:before {\n  content: \"\\F063\";\n}\n.wi-owm-night-762:before {\n  content: \"\\F063\";\n}\n.wi-owm-night-781:before {\n  content: \"\\F056\";\n}\n.wi-owm-night-800:before {\n  content: \"\\F02E\";\n}\n.wi-owm-night-801:before {\n  content: \"\\F022\";\n}\n.wi-owm-night-802:before {\n  content: \"\\F022\";\n}\n.wi-owm-night-803:before {\n  content: \"\\F022\";\n}\n.wi-owm-night-804:before {\n  content: \"\\F086\";\n}\n.wi-owm-night-900:before {\n  content: \"\\F056\";\n}\n.wi-owm-night-902:before {\n  content: \"\\F073\";\n}\n.wi-owm-night-903:before {\n  content: \"\\F076\";\n}\n.wi-owm-night-904:before {\n  content: \"\\F072\";\n}\n.wi-owm-night-906:before {\n  content: \"\\F024\";\n}\n.wi-owm-night-957:before {\n  content: \"\\F050\";\n}\n.wi-wu-chanceflurries:before {\n  content: \"\\F064\";\n}\n.wi-wu-chancerain:before {\n  content: \"\\F019\";\n}\n.wi-wu-chancesleat:before {\n  content: \"\\F0B5\";\n}\n.wi-wu-chancesnow:before {\n  content: \"\\F01B\";\n}\n.wi-wu-chancetstorms:before {\n  content: \"\\F01E\";\n}\n.wi-wu-clear:before {\n  content: \"\\F00D\";\n}\n.wi-wu-cloudy:before {\n  content: \"\\F002\";\n}\n.wi-wu-flurries:before {\n  content: \"\\F064\";\n}\n.wi-wu-hazy:before {\n  content: \"\\F0B6\";\n}\n.wi-wu-mostlycloudy:before {\n  content: \"\\F002\";\n}\n.wi-wu-mostlysunny:before {\n  content: \"\\F00D\";\n}\n.wi-wu-partlycloudy:before {\n  content: \"\\F002\";\n}\n.wi-wu-partlysunny:before {\n  content: \"\\F00D\";\n}\n.wi-wu-rain:before {\n  content: \"\\F01A\";\n}\n.wi-wu-sleat:before {\n  content: \"\\F0B5\";\n}\n.wi-wu-snow:before {\n  content: \"\\F01B\";\n}\n.wi-wu-sunny:before {\n  content: \"\\F00D\";\n}\n.wi-wu-tstorms:before {\n  content: \"\\F01E\";\n}\n.wi-wu-unknown:before {\n  content: \"\\F00D\";\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url)) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/dom-helpers/class/addClass.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/class/addClass.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/dom-helpers/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = addClass;

var _hasClass = _interopRequireDefault(__webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/class/hasClass.js"));

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/hasClass.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/class/hasClass.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/removeClass.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-helpers/class/removeClass.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),

/***/ "./node_modules/dom-helpers/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/dom-helpers/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/moment/moment.js":
/*!***************************************!*\
  !*** ./node_modules/moment/moment.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var require;//! moment.js
;

(function (global, factory) {
   true ? module.exports = factory() : undefined;
})(this, function () {
  'use strict';

  var hookCallback;

  function hooks() {
    return hookCallback.apply(null, arguments);
  } // This is done to register the method called with moment()
  // without creating circular dependencies.


  function setHookCallback(callback) {
    hookCallback = callback;
  }

  function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
  }

  function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
  }

  function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
      return Object.getOwnPropertyNames(obj).length === 0;
    } else {
      var k;

      for (k in obj) {
        if (obj.hasOwnProperty(k)) {
          return false;
        }
      }

      return true;
    }
  }

  function isUndefined(input) {
    return input === void 0;
  }

  function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
  }

  function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
  }

  function map(arr, fn) {
    var res = [],
        i;

    for (i = 0; i < arr.length; ++i) {
      res.push(fn(arr[i], i));
    }

    return res;
  }

  function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }

  function extend(a, b) {
    for (var i in b) {
      if (hasOwnProp(b, i)) {
        a[i] = b[i];
      }
    }

    if (hasOwnProp(b, 'toString')) {
      a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
      a.valueOf = b.valueOf;
    }

    return a;
  }

  function createUTC(input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
  }

  function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
      empty: false,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: false,
      invalidMonth: null,
      invalidFormat: false,
      userInvalidated: false,
      iso: false,
      parsedDateParts: [],
      meridiem: null,
      rfc2822: false,
      weekdayMismatch: false
    };
  }

  function getParsingFlags(m) {
    if (m._pf == null) {
      m._pf = defaultParsingFlags();
    }

    return m._pf;
  }

  var some;

  if (Array.prototype.some) {
    some = Array.prototype.some;
  } else {
    some = function some(fun) {
      var t = Object(this);
      var len = t.length >>> 0;

      for (var i = 0; i < len; i++) {
        if (i in t && fun.call(this, t[i], i, t)) {
          return true;
        }
      }

      return false;
    };
  }

  function isValid(m) {
    if (m._isValid == null) {
      var flags = getParsingFlags(m);
      var parsedParts = some.call(flags.parsedDateParts, function (i) {
        return i != null;
      });
      var isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);

      if (m._strict) {
        isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
      }

      if (Object.isFrozen == null || !Object.isFrozen(m)) {
        m._isValid = isNowValid;
      } else {
        return isNowValid;
      }
    }

    return m._isValid;
  }

  function createInvalid(flags) {
    var m = createUTC(NaN);

    if (flags != null) {
      extend(getParsingFlags(m), flags);
    } else {
      getParsingFlags(m).userInvalidated = true;
    }

    return m;
  } // Plugins that add properties should also add the key here (null value),
  // so we can properly clone ourselves.


  var momentProperties = hooks.momentProperties = [];

  function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
      to._isAMomentObject = from._isAMomentObject;
    }

    if (!isUndefined(from._i)) {
      to._i = from._i;
    }

    if (!isUndefined(from._f)) {
      to._f = from._f;
    }

    if (!isUndefined(from._l)) {
      to._l = from._l;
    }

    if (!isUndefined(from._strict)) {
      to._strict = from._strict;
    }

    if (!isUndefined(from._tzm)) {
      to._tzm = from._tzm;
    }

    if (!isUndefined(from._isUTC)) {
      to._isUTC = from._isUTC;
    }

    if (!isUndefined(from._offset)) {
      to._offset = from._offset;
    }

    if (!isUndefined(from._pf)) {
      to._pf = getParsingFlags(from);
    }

    if (!isUndefined(from._locale)) {
      to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
      for (i = 0; i < momentProperties.length; i++) {
        prop = momentProperties[i];
        val = from[prop];

        if (!isUndefined(val)) {
          to[prop] = val;
        }
      }
    }

    return to;
  }

  var updateInProgress = false; // Moment prototype object

  function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);

    if (!this.isValid()) {
      this._d = new Date(NaN);
    } // Prevent infinite loop in case updateOffset creates new moment
    // objects.


    if (updateInProgress === false) {
      updateInProgress = true;
      hooks.updateOffset(this);
      updateInProgress = false;
    }
  }

  function isMoment(obj) {
    return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
  }

  function absFloor(number) {
    if (number < 0) {
      // -0 -> 0
      return Math.ceil(number) || 0;
    } else {
      return Math.floor(number);
    }
  }

  function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
      value = absFloor(coercedNumber);
    }

    return value;
  } // compare two arrays, return the number of differences


  function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;

    for (i = 0; i < len; i++) {
      if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
        diffs++;
      }
    }

    return diffs + lengthDiff;
  }

  function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
      console.warn('Deprecation warning: ' + msg);
    }
  }

  function deprecate(msg, fn) {
    var firstTime = true;
    return extend(function () {
      if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(null, msg);
      }

      if (firstTime) {
        var args = [];
        var arg;

        for (var i = 0; i < arguments.length; i++) {
          arg = '';

          if (typeof arguments[i] === 'object') {
            arg += '\n[' + i + '] ';

            for (var key in arguments[0]) {
              arg += key + ': ' + arguments[0][key] + ', ';
            }

            arg = arg.slice(0, -2); // Remove trailing comma and space
          } else {
            arg = arguments[i];
          }

          args.push(arg);
        }

        warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
        firstTime = false;
      }

      return fn.apply(this, arguments);
    }, fn);
  }

  var deprecations = {};

  function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
      hooks.deprecationHandler(name, msg);
    }

    if (!deprecations[name]) {
      warn(msg);
      deprecations[name] = true;
    }
  }

  hooks.suppressDeprecationWarnings = false;
  hooks.deprecationHandler = null;

  function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
  }

  function set(config) {
    var prop, i;

    for (i in config) {
      prop = config[i];

      if (isFunction(prop)) {
        this[i] = prop;
      } else {
        this['_' + i] = prop;
      }
    }

    this._config = config; // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.

    this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
  }

  function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig),
        prop;

    for (prop in childConfig) {
      if (hasOwnProp(childConfig, prop)) {
        if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
          res[prop] = {};
          extend(res[prop], parentConfig[prop]);
          extend(res[prop], childConfig[prop]);
        } else if (childConfig[prop] != null) {
          res[prop] = childConfig[prop];
        } else {
          delete res[prop];
        }
      }
    }

    for (prop in parentConfig) {
      if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
        // make sure changes to properties don't modify parent config
        res[prop] = extend({}, res[prop]);
      }
    }

    return res;
  }

  function Locale(config) {
    if (config != null) {
      this.set(config);
    }
  }

  var keys;

  if (Object.keys) {
    keys = Object.keys;
  } else {
    keys = function keys(obj) {
      var i,
          res = [];

      for (i in obj) {
        if (hasOwnProp(obj, i)) {
          res.push(i);
        }
      }

      return res;
    };
  }

  var defaultCalendar = {
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    nextWeek: 'dddd [at] LT',
    lastDay: '[Yesterday at] LT',
    lastWeek: '[Last] dddd [at] LT',
    sameElse: 'L'
  };

  function calendar(key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
  }

  var defaultLongDateFormat = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A'
  };

  function longDateFormat(key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
      return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
      return val.slice(1);
    });
    return this._longDateFormat[key];
  }

  var defaultInvalidDate = 'Invalid date';

  function invalidDate() {
    return this._invalidDate;
  }

  var defaultOrdinal = '%d';
  var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

  function ordinal(number) {
    return this._ordinal.replace('%d', number);
  }

  var defaultRelativeTime = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    ss: '%d seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
  };

  function relativeTime(number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
  }

  function pastFuture(diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
  }

  var aliases = {};

  function addUnitAlias(unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
  }

  function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
  }

  function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
      if (hasOwnProp(inputObject, prop)) {
        normalizedProp = normalizeUnits(prop);

        if (normalizedProp) {
          normalizedInput[normalizedProp] = inputObject[prop];
        }
      }
    }

    return normalizedInput;
  }

  var priorities = {};

  function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
  }

  function getPrioritizedUnits(unitsObj) {
    var units = [];

    for (var u in unitsObj) {
      units.push({
        unit: u,
        priority: priorities[u]
      });
    }

    units.sort(function (a, b) {
      return a.priority - b.priority;
    });
    return units;
  }

  function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
  }

  var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
  var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
  var formatFunctions = {};
  var formatTokenFunctions = {}; // token:    'M'
  // padded:   ['MM', 2]
  // ordinal:  'Mo'
  // callback: function () { this.month() + 1 }

  function addFormatToken(token, padded, ordinal, callback) {
    var func = callback;

    if (typeof callback === 'string') {
      func = function func() {
        return this[callback]();
      };
    }

    if (token) {
      formatTokenFunctions[token] = func;
    }

    if (padded) {
      formatTokenFunctions[padded[0]] = function () {
        return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
      };
    }

    if (ordinal) {
      formatTokenFunctions[ordinal] = function () {
        return this.localeData().ordinal(func.apply(this, arguments), token);
      };
    }
  }

  function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
      return input.replace(/^\[|\]$/g, '');
    }

    return input.replace(/\\/g, '');
  }

  function makeFormatFunction(format) {
    var array = format.match(formattingTokens),
        i,
        length;

    for (i = 0, length = array.length; i < length; i++) {
      if (formatTokenFunctions[array[i]]) {
        array[i] = formatTokenFunctions[array[i]];
      } else {
        array[i] = removeFormattingTokens(array[i]);
      }
    }

    return function (mom) {
      var output = '',
          i;

      for (i = 0; i < length; i++) {
        output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
      }

      return output;
    };
  } // format date using native date object


  function formatMoment(m, format) {
    if (!m.isValid()) {
      return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
    return formatFunctions[format](m);
  }

  function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
      return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;

    while (i >= 0 && localFormattingTokens.test(format)) {
      format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
      localFormattingTokens.lastIndex = 0;
      i -= 1;
    }

    return format;
  }

  var match1 = /\d/; //       0 - 9

  var match2 = /\d\d/; //      00 - 99

  var match3 = /\d{3}/; //     000 - 999

  var match4 = /\d{4}/; //    0000 - 9999

  var match6 = /[+-]?\d{6}/; // -999999 - 999999

  var match1to2 = /\d\d?/; //       0 - 99

  var match3to4 = /\d\d\d\d?/; //     999 - 9999

  var match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999

  var match1to3 = /\d{1,3}/; //       0 - 999

  var match1to4 = /\d{1,4}/; //       0 - 9999

  var match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999

  var matchUnsigned = /\d+/; //       0 - inf

  var matchSigned = /[+-]?\d+/; //    -inf - inf

  var matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z

  var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

  var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
  // any word (or two) characters or numbers including two/three word month in arabic.
  // includes scottish gaelic two word and hyphenated months

  var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
  var regexes = {};

  function addRegexToken(token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
      return isStrict && strictRegex ? strictRegex : regex;
    };
  }

  function getParseRegexForToken(token, config) {
    if (!hasOwnProp(regexes, token)) {
      return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
  } // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript


  function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
      return p1 || p2 || p3 || p4;
    }));
  }

  function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }

  var tokens = {};

  function addParseToken(token, callback) {
    var i,
        func = callback;

    if (typeof token === 'string') {
      token = [token];
    }

    if (isNumber(callback)) {
      func = function func(input, array) {
        array[callback] = toInt(input);
      };
    }

    for (i = 0; i < token.length; i++) {
      tokens[token[i]] = func;
    }
  }

  function addWeekParseToken(token, callback) {
    addParseToken(token, function (input, array, config, token) {
      config._w = config._w || {};
      callback(input, config._w, config, token);
    });
  }

  function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
      tokens[token](input, config._a, config, token);
    }
  }

  var YEAR = 0;
  var MONTH = 1;
  var DATE = 2;
  var HOUR = 3;
  var MINUTE = 4;
  var SECOND = 5;
  var MILLISECOND = 6;
  var WEEK = 7;
  var WEEKDAY = 8; // FORMATTING

  addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
  });
  addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
  });
  addFormatToken(0, ['YYYY', 4], 0, 'year');
  addFormatToken(0, ['YYYYY', 5], 0, 'year');
  addFormatToken(0, ['YYYYYY', 6, true], 0, 'year'); // ALIASES

  addUnitAlias('year', 'y'); // PRIORITIES

  addUnitPriority('year', 1); // PARSING

  addRegexToken('Y', matchSigned);
  addRegexToken('YY', match1to2, match2);
  addRegexToken('YYYY', match1to4, match4);
  addRegexToken('YYYYY', match1to6, match6);
  addRegexToken('YYYYYY', match1to6, match6);
  addParseToken(['YYYYY', 'YYYYYY'], YEAR);
  addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
  });
  addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
  });
  addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
  }); // HELPERS

  function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
  }

  function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
  } // HOOKS


  hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
  }; // MOMENTS


  var getSetYear = makeGetSet('FullYear', true);

  function getIsLeapYear() {
    return isLeapYear(this.year());
  }

  function makeGetSet(unit, keepTime) {
    return function (value) {
      if (value != null) {
        set$1(this, unit, value);
        hooks.updateOffset(this, keepTime);
        return this;
      } else {
        return get(this, unit);
      }
    };
  }

  function get(mom, unit) {
    return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
  }

  function set$1(mom, unit, value) {
    if (mom.isValid() && !isNaN(value)) {
      if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
      } else {
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
      }
    }
  } // MOMENTS


  function stringGet(units) {
    units = normalizeUnits(units);

    if (isFunction(this[units])) {
      return this[units]();
    }

    return this;
  }

  function stringSet(units, value) {
    if (typeof units === 'object') {
      units = normalizeObjectUnits(units);
      var prioritized = getPrioritizedUnits(units);

      for (var i = 0; i < prioritized.length; i++) {
        this[prioritized[i].unit](units[prioritized[i].unit]);
      }
    } else {
      units = normalizeUnits(units);

      if (isFunction(this[units])) {
        return this[units](value);
      }
    }

    return this;
  }

  function mod(n, x) {
    return (n % x + x) % x;
  }

  var indexOf;

  if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
  } else {
    indexOf = function indexOf(o) {
      // I know
      var i;

      for (i = 0; i < this.length; ++i) {
        if (this[i] === o) {
          return i;
        }
      }

      return -1;
    };
  }

  function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
      return NaN;
    }

    var modMonth = mod(month, 12);
    year += (month - modMonth) / 12;
    return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
  } // FORMATTING


  addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
  });
  addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
  });
  addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
  }); // ALIASES

  addUnitAlias('month', 'M'); // PRIORITY

  addUnitPriority('month', 8); // PARSING

  addRegexToken('M', match1to2);
  addRegexToken('MM', match1to2, match2);
  addRegexToken('MMM', function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
  });
  addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
  });
  addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
  });
  addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict); // if we didn't find a month name, mark the date as invalid.


    if (month != null) {
      array[MONTH] = month;
    } else {
      getParsingFlags(config).invalidMonth = input;
    }
  }); // LOCALES

  var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
  var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');

  function localeMonths(m, format) {
    if (!m) {
      return isArray(this._months) ? this._months : this._months['standalone'];
    }

    return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
  }

  var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');

  function localeMonthsShort(m, format) {
    if (!m) {
      return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort['standalone'];
    }

    return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
  }

  function handleStrictParse(monthName, format, strict) {
    var i,
        ii,
        mom,
        llc = monthName.toLocaleLowerCase();

    if (!this._monthsParse) {
      // this is not used
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];

      for (i = 0; i < 12; ++i) {
        mom = createUTC([2000, i]);
        this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
        this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
      }
    }

    if (strict) {
      if (format === 'MMM') {
        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format === 'MMM') {
        ii = indexOf.call(this._shortMonthsParse, llc);

        if (ii !== -1) {
          return ii;
        }

        ii = indexOf.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._longMonthsParse, llc);

        if (ii !== -1) {
          return ii;
        }

        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }

  function localeMonthsParse(monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
      return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
    } // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse


    for (i = 0; i < 12; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, i]);

      if (strict && !this._longMonthsParse[i]) {
        this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
        this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
      }

      if (!strict && !this._monthsParse[i]) {
        regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
        this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
      } // test the regex


      if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
        return i;
      } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
        return i;
      } else if (!strict && this._monthsParse[i].test(monthName)) {
        return i;
      }
    }
  } // MOMENTS


  function setMonth(mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
      // No op
      return mom;
    }

    if (typeof value === 'string') {
      if (/^\d+$/.test(value)) {
        value = toInt(value);
      } else {
        value = mom.localeData().monthsParse(value); // TODO: Another silent failure?

        if (!isNumber(value)) {
          return mom;
        }
      }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));

    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);

    return mom;
  }

  function getSetMonth(value) {
    if (value != null) {
      setMonth(this, value);
      hooks.updateOffset(this, true);
      return this;
    } else {
      return get(this, 'Month');
    }
  }

  function getDaysInMonth() {
    return daysInMonth(this.year(), this.month());
  }

  var defaultMonthsShortRegex = matchWord;

  function monthsShortRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, '_monthsRegex')) {
        computeMonthsParse.call(this);
      }

      if (isStrict) {
        return this._monthsShortStrictRegex;
      } else {
        return this._monthsShortRegex;
      }
    } else {
      if (!hasOwnProp(this, '_monthsShortRegex')) {
        this._monthsShortRegex = defaultMonthsShortRegex;
      }

      return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
    }
  }

  var defaultMonthsRegex = matchWord;

  function monthsRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, '_monthsRegex')) {
        computeMonthsParse.call(this);
      }

      if (isStrict) {
        return this._monthsStrictRegex;
      } else {
        return this._monthsRegex;
      }
    } else {
      if (!hasOwnProp(this, '_monthsRegex')) {
        this._monthsRegex = defaultMonthsRegex;
      }

      return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
    }
  }

  function computeMonthsParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }

    var shortPieces = [],
        longPieces = [],
        mixedPieces = [],
        i,
        mom;

    for (i = 0; i < 12; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, i]);
      shortPieces.push(this.monthsShort(mom, ''));
      longPieces.push(this.months(mom, ''));
      mixedPieces.push(this.months(mom, ''));
      mixedPieces.push(this.monthsShort(mom, ''));
    } // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.


    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);

    for (i = 0; i < 12; i++) {
      shortPieces[i] = regexEscape(shortPieces[i]);
      longPieces[i] = regexEscape(longPieces[i]);
    }

    for (i = 0; i < 24; i++) {
      mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
  }

  function createDate(y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date = new Date(y, m, d, h, M, s, ms); // the date constructor remaps years 0-99 to 1900-1999

    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
      date.setFullYear(y);
    }

    return date;
  }

  function createUTCDate(y) {
    var date = new Date(Date.UTC.apply(null, arguments)); // the Date.UTC function remaps years 0-99 to 1900-1999

    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
      date.setUTCFullYear(y);
    }

    return date;
  } // start-of-first-week - start-of-year


  function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
    fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
    fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
    return -fwdlw + fwd - 1;
  } // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday


  function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear,
        resDayOfYear;

    if (dayOfYear <= 0) {
      resYear = year - 1;
      resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
      resYear = year + 1;
      resDayOfYear = dayOfYear - daysInYear(year);
    } else {
      resYear = year;
      resDayOfYear = dayOfYear;
    }

    return {
      year: resYear,
      dayOfYear: resDayOfYear
    };
  }

  function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek,
        resYear;

    if (week < 1) {
      resYear = mom.year() - 1;
      resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
      resWeek = week - weeksInYear(mom.year(), dow, doy);
      resYear = mom.year() + 1;
    } else {
      resYear = mom.year();
      resWeek = week;
    }

    return {
      week: resWeek,
      year: resYear
    };
  }

  function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
  } // FORMATTING


  addFormatToken('w', ['ww', 2], 'wo', 'week');
  addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek'); // ALIASES

  addUnitAlias('week', 'w');
  addUnitAlias('isoWeek', 'W'); // PRIORITIES

  addUnitPriority('week', 5);
  addUnitPriority('isoWeek', 5); // PARSING

  addRegexToken('w', match1to2);
  addRegexToken('ww', match1to2, match2);
  addRegexToken('W', match1to2);
  addRegexToken('WW', match1to2, match2);
  addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
  }); // HELPERS
  // LOCALES

  function localeWeek(mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
  }

  var defaultLocaleWeek = {
    dow: 0,
    // Sunday is the first day of the week.
    doy: 6 // The week that contains Jan 6th is the first week of the year.

  };

  function localeFirstDayOfWeek() {
    return this._week.dow;
  }

  function localeFirstDayOfYear() {
    return this._week.doy;
  } // MOMENTS


  function getSetWeek(input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
  }

  function getSetISOWeek(input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
  } // FORMATTING


  addFormatToken('d', 0, 'do', 'day');
  addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
  });
  addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
  });
  addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
  });
  addFormatToken('e', 0, 0, 'weekday');
  addFormatToken('E', 0, 0, 'isoWeekday'); // ALIASES

  addUnitAlias('day', 'd');
  addUnitAlias('weekday', 'e');
  addUnitAlias('isoWeekday', 'E'); // PRIORITY

  addUnitPriority('day', 11);
  addUnitPriority('weekday', 11);
  addUnitPriority('isoWeekday', 11); // PARSING

  addRegexToken('d', match1to2);
  addRegexToken('e', match1to2);
  addRegexToken('E', match1to2);
  addRegexToken('dd', function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
  });
  addRegexToken('ddd', function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
  });
  addRegexToken('dddd', function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
  });
  addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict); // if we didn't get a weekday name, mark the date as invalid


    if (weekday != null) {
      week.d = weekday;
    } else {
      getParsingFlags(config).invalidWeekday = input;
    }
  });
  addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
  }); // HELPERS

  function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
      return input;
    }

    if (!isNaN(input)) {
      return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);

    if (typeof input === 'number') {
      return input;
    }

    return null;
  }

  function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
      return locale.weekdaysParse(input) % 7 || 7;
    }

    return isNaN(input) ? null : input;
  } // LOCALES


  var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');

  function localeWeekdays(m, format) {
    if (!m) {
      return isArray(this._weekdays) ? this._weekdays : this._weekdays['standalone'];
    }

    return isArray(this._weekdays) ? this._weekdays[m.day()] : this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
  }

  var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');

  function localeWeekdaysShort(m) {
    return m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
  }

  var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');

  function localeWeekdaysMin(m) {
    return m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
  }

  function handleStrictParse$1(weekdayName, format, strict) {
    var i,
        ii,
        mom,
        llc = weekdayName.toLocaleLowerCase();

    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._minWeekdaysParse = [];

      for (i = 0; i < 7; ++i) {
        mom = createUTC([2000, 1]).day(i);
        this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
        this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
        this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
      }
    }

    if (strict) {
      if (format === 'dddd') {
        ii = indexOf.call(this._weekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format === 'ddd') {
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format === 'dddd') {
        ii = indexOf.call(this._weekdaysParse, llc);

        if (ii !== -1) {
          return ii;
        }

        ii = indexOf.call(this._shortWeekdaysParse, llc);

        if (ii !== -1) {
          return ii;
        }

        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format === 'ddd') {
        ii = indexOf.call(this._shortWeekdaysParse, llc);

        if (ii !== -1) {
          return ii;
        }

        ii = indexOf.call(this._weekdaysParse, llc);

        if (ii !== -1) {
          return ii;
        }

        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._minWeekdaysParse, llc);

        if (ii !== -1) {
          return ii;
        }

        ii = indexOf.call(this._weekdaysParse, llc);

        if (ii !== -1) {
          return ii;
        }

        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }

  function localeWeekdaysParse(weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
      return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._minWeekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, 1]).day(i);

      if (strict && !this._fullWeekdaysParse[i]) {
        this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
        this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
        this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
      }

      if (!this._weekdaysParse[i]) {
        regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
        this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
      } // test the regex


      if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
        return i;
      }
    }
  } // MOMENTS


  function getSetDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }

    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();

    if (input != null) {
      input = parseWeekday(input, this.localeData());
      return this.add(input - day, 'd');
    } else {
      return day;
    }
  }

  function getSetLocaleDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }

    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
  }

  function getSetISODayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    } // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.


    if (input != null) {
      var weekday = parseIsoWeekday(input, this.localeData());
      return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
      return this.day() || 7;
    }
  }

  var defaultWeekdaysRegex = matchWord;

  function weekdaysRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }

      if (isStrict) {
        return this._weekdaysStrictRegex;
      } else {
        return this._weekdaysRegex;
      }
    } else {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        this._weekdaysRegex = defaultWeekdaysRegex;
      }

      return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
    }
  }

  var defaultWeekdaysShortRegex = matchWord;

  function weekdaysShortRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }

      if (isStrict) {
        return this._weekdaysShortStrictRegex;
      } else {
        return this._weekdaysShortRegex;
      }
    } else {
      if (!hasOwnProp(this, '_weekdaysShortRegex')) {
        this._weekdaysShortRegex = defaultWeekdaysShortRegex;
      }

      return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
  }

  var defaultWeekdaysMinRegex = matchWord;

  function weekdaysMinRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }

      if (isStrict) {
        return this._weekdaysMinStrictRegex;
      } else {
        return this._weekdaysMinRegex;
      }
    } else {
      if (!hasOwnProp(this, '_weekdaysMinRegex')) {
        this._weekdaysMinRegex = defaultWeekdaysMinRegex;
      }

      return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
  }

  function computeWeekdaysParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }

    var minPieces = [],
        shortPieces = [],
        longPieces = [],
        mixedPieces = [],
        i,
        mom,
        minp,
        shortp,
        longp;

    for (i = 0; i < 7; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, 1]).day(i);
      minp = this.weekdaysMin(mom, '');
      shortp = this.weekdaysShort(mom, '');
      longp = this.weekdays(mom, '');
      minPieces.push(minp);
      shortPieces.push(shortp);
      longPieces.push(longp);
      mixedPieces.push(minp);
      mixedPieces.push(shortp);
      mixedPieces.push(longp);
    } // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.


    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);

    for (i = 0; i < 7; i++) {
      shortPieces[i] = regexEscape(shortPieces[i]);
      longPieces[i] = regexEscape(longPieces[i]);
      mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;
    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
  } // FORMATTING


  function hFormat() {
    return this.hours() % 12 || 12;
  }

  function kFormat() {
    return this.hours() || 24;
  }

  addFormatToken('H', ['HH', 2], 0, 'hour');
  addFormatToken('h', ['hh', 2], 0, hFormat);
  addFormatToken('k', ['kk', 2], 0, kFormat);
  addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
  });
  addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });
  addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
  });
  addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });

  function meridiem(token, lowercase) {
    addFormatToken(token, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
  }

  meridiem('a', true);
  meridiem('A', false); // ALIASES

  addUnitAlias('hour', 'h'); // PRIORITY

  addUnitPriority('hour', 13); // PARSING

  function matchMeridiem(isStrict, locale) {
    return locale._meridiemParse;
  }

  addRegexToken('a', matchMeridiem);
  addRegexToken('A', matchMeridiem);
  addRegexToken('H', match1to2);
  addRegexToken('h', match1to2);
  addRegexToken('k', match1to2);
  addRegexToken('HH', match1to2, match2);
  addRegexToken('hh', match1to2, match2);
  addRegexToken('kk', match1to2, match2);
  addRegexToken('hmm', match3to4);
  addRegexToken('hmmss', match5to6);
  addRegexToken('Hmm', match3to4);
  addRegexToken('Hmmss', match5to6);
  addParseToken(['H', 'HH'], HOUR);
  addParseToken(['k', 'kk'], function (input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
  });
  addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
  });
  addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
  });
  addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
  }); // LOCALES

  function localeIsPM(input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return (input + '').toLowerCase().charAt(0) === 'p';
  }

  var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;

  function localeMeridiem(hours, minutes, isLower) {
    if (hours > 11) {
      return isLower ? 'pm' : 'PM';
    } else {
      return isLower ? 'am' : 'AM';
    }
  } // MOMENTS
  // Setting the hour should keep the time, because the user explicitly
  // specified which hour they want. So trying to maintain the same hour (in
  // a new timezone) makes sense. Adding/subtracting hours does not follow
  // this rule.


  var getSetHour = makeGetSet('Hours', true);
  var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,
    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,
    week: defaultLocaleWeek,
    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,
    meridiemParse: defaultLocaleMeridiemParse
  }; // internal storage for locale config files

  var locales = {};
  var localeFamilies = {};
  var globalLocale;

  function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
  } // pick the locale from the array
  // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
  // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root


  function chooseLocale(names) {
    var i = 0,
        j,
        next,
        locale,
        split;

    while (i < names.length) {
      split = normalizeLocale(names[i]).split('-');
      j = split.length;
      next = normalizeLocale(names[i + 1]);
      next = next ? next.split('-') : null;

      while (j > 0) {
        locale = loadLocale(split.slice(0, j).join('-'));

        if (locale) {
          return locale;
        }

        if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
          //the next array item is better than a shallower substring of this one
          break;
        }

        j--;
      }

      i++;
    }

    return globalLocale;
  }

  function loadLocale(name) {
    var oldLocale = null; // TODO: Find a better way to register and load all the locales in Node

    if (!locales[name] && typeof module !== 'undefined' && module && module.exports) {
      try {
        oldLocale = globalLocale._abbr;
        var aliasedRequire = require;
        !(function webpackMissingModule() { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
        getSetGlobalLocale(oldLocale);
      } catch (e) {}
    }

    return locales[name];
  } // This function will load locale and then set the global locale.  If
  // no arguments are passed in, it will simply return the current global
  // locale key.


  function getSetGlobalLocale(key, values) {
    var data;

    if (key) {
      if (isUndefined(values)) {
        data = getLocale(key);
      } else {
        data = defineLocale(key, values);
      }

      if (data) {
        // moment.duration._locale = moment._locale = data;
        globalLocale = data;
      } else {
        if (typeof console !== 'undefined' && console.warn) {
          //warn user if arguments are passed but the locale could not be set
          console.warn('Locale ' + key + ' not found. Did you forget to load it?');
        }
      }
    }

    return globalLocale._abbr;
  }

  function defineLocale(name, config) {
    if (config !== null) {
      var locale,
          parentConfig = baseConfig;
      config.abbr = name;

      if (locales[name] != null) {
        deprecateSimple('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change ' + 'an existing locale. moment.defineLocale(localeName, ' + 'config) should only be used for creating a new locale ' + 'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
        parentConfig = locales[name]._config;
      } else if (config.parentLocale != null) {
        if (locales[config.parentLocale] != null) {
          parentConfig = locales[config.parentLocale]._config;
        } else {
          locale = loadLocale(config.parentLocale);

          if (locale != null) {
            parentConfig = locale._config;
          } else {
            if (!localeFamilies[config.parentLocale]) {
              localeFamilies[config.parentLocale] = [];
            }

            localeFamilies[config.parentLocale].push({
              name: name,
              config: config
            });
            return null;
          }
        }
      }

      locales[name] = new Locale(mergeConfigs(parentConfig, config));

      if (localeFamilies[name]) {
        localeFamilies[name].forEach(function (x) {
          defineLocale(x.name, x.config);
        });
      } // backwards compat for now: also set the locale
      // make sure we set the locale AFTER all child locales have been
      // created, so we won't end up with the child locale set.


      getSetGlobalLocale(name);
      return locales[name];
    } else {
      // useful for testing
      delete locales[name];
      return null;
    }
  }

  function updateLocale(name, config) {
    if (config != null) {
      var locale,
          tmpLocale,
          parentConfig = baseConfig; // MERGE

      tmpLocale = loadLocale(name);

      if (tmpLocale != null) {
        parentConfig = tmpLocale._config;
      }

      config = mergeConfigs(parentConfig, config);
      locale = new Locale(config);
      locale.parentLocale = locales[name];
      locales[name] = locale; // backwards compat for now: also set the locale

      getSetGlobalLocale(name);
    } else {
      // pass null for config to unupdate, useful for tests
      if (locales[name] != null) {
        if (locales[name].parentLocale != null) {
          locales[name] = locales[name].parentLocale;
        } else if (locales[name] != null) {
          delete locales[name];
        }
      }
    }

    return locales[name];
  } // returns locale data


  function getLocale(key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
      key = key._locale._abbr;
    }

    if (!key) {
      return globalLocale;
    }

    if (!isArray(key)) {
      //short-circuit everything else
      locale = loadLocale(key);

      if (locale) {
        return locale;
      }

      key = [key];
    }

    return chooseLocale(key);
  }

  function listLocales() {
    return keys(locales);
  }

  function checkOverflow(m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
      overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;

      if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
        overflow = DATE;
      }

      if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
        overflow = WEEK;
      }

      if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
        overflow = WEEKDAY;
      }

      getParsingFlags(m).overflow = overflow;
    }

    return m;
  } // Pick the first defined of two or three arguments.


  function defaults(a, b, c) {
    if (a != null) {
      return a;
    }

    if (b != null) {
      return b;
    }

    return c;
  }

  function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());

    if (config._useUTC) {
      return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }

    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
  } // convert an array to a date.
  // the array should mirror the parameters below
  // note: all values past the year are optional and will default to the lowest possible value.
  // [year, month, day , hour, minute, second, millisecond]


  function configFromArray(config) {
    var i,
        date,
        input = [],
        currentDate,
        expectedWeekday,
        yearToUse;

    if (config._d) {
      return;
    }

    currentDate = currentDateArray(config); //compute day of the year from weeks and weekdays

    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
      dayOfYearFromWeekInfo(config);
    } //if the day of the year is set, figure out what it is


    if (config._dayOfYear != null) {
      yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

      if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
        getParsingFlags(config)._overflowDayOfYear = true;
      }

      date = createUTCDate(yearToUse, 0, config._dayOfYear);
      config._a[MONTH] = date.getUTCMonth();
      config._a[DATE] = date.getUTCDate();
    } // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything


    for (i = 0; i < 3 && config._a[i] == null; ++i) {
      config._a[i] = input[i] = currentDate[i];
    } // Zero out whatever was not defaulted, including time


    for (; i < 7; i++) {
      config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
    } // Check for 24:00:00.000


    if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
      config._nextDay = true;
      config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay(); // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.

    if (config._tzm != null) {
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
      config._a[HOUR] = 24;
    } // check for mismatching day of week


    if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
      getParsingFlags(config).weekdayMismatch = true;
    }
  }

  function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;
    w = config._w;

    if (w.GG != null || w.W != null || w.E != null) {
      dow = 1;
      doy = 4; // TODO: We need to take the current isoWeekYear, but that depends on
      // how we interpret now (local, utc, fixed offset). So create
      // a now version of current config (take local/utc/offset flags, and
      // create now).

      weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
      week = defaults(w.W, 1);
      weekday = defaults(w.E, 1);

      if (weekday < 1 || weekday > 7) {
        weekdayOverflow = true;
      }
    } else {
      dow = config._locale._week.dow;
      doy = config._locale._week.doy;
      var curWeek = weekOfYear(createLocal(), dow, doy);
      weekYear = defaults(w.gg, config._a[YEAR], curWeek.year); // Default to current week.

      week = defaults(w.w, curWeek.week);

      if (w.d != null) {
        // weekday -- low day numbers are considered next week
        weekday = w.d;

        if (weekday < 0 || weekday > 6) {
          weekdayOverflow = true;
        }
      } else if (w.e != null) {
        // local weekday -- counting starts from beginning of week
        weekday = w.e + dow;

        if (w.e < 0 || w.e > 6) {
          weekdayOverflow = true;
        }
      } else {
        // default to beginning of week
        weekday = dow;
      }
    }

    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
      getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
      getParsingFlags(config)._overflowWeekday = true;
    } else {
      temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
      config._a[YEAR] = temp.year;
      config._dayOfYear = temp.dayOfYear;
    }
  } // iso 8601 regex
  // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)


  var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
  var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
  var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
  var isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/], // YYYYMM is NOT allowed by the standard
  ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/]]; // iso time formats and regexes

  var isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]];
  var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i; // date from iso format

  function configFromISO(config) {
    var i,
        l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime,
        dateFormat,
        timeFormat,
        tzFormat;

    if (match) {
      getParsingFlags(config).iso = true;

      for (i = 0, l = isoDates.length; i < l; i++) {
        if (isoDates[i][1].exec(match[1])) {
          dateFormat = isoDates[i][0];
          allowTime = isoDates[i][2] !== false;
          break;
        }
      }

      if (dateFormat == null) {
        config._isValid = false;
        return;
      }

      if (match[3]) {
        for (i = 0, l = isoTimes.length; i < l; i++) {
          if (isoTimes[i][1].exec(match[3])) {
            // match[2] should be 'T' or space
            timeFormat = (match[2] || ' ') + isoTimes[i][0];
            break;
          }
        }

        if (timeFormat == null) {
          config._isValid = false;
          return;
        }
      }

      if (!allowTime && timeFormat != null) {
        config._isValid = false;
        return;
      }

      if (match[4]) {
        if (tzRegex.exec(match[4])) {
          tzFormat = 'Z';
        } else {
          config._isValid = false;
          return;
        }
      }

      config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
      configFromStringAndFormat(config);
    } else {
      config._isValid = false;
    }
  } // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3


  var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

  function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = [untruncateYear(yearStr), defaultLocaleMonthsShort.indexOf(monthStr), parseInt(dayStr, 10), parseInt(hourStr, 10), parseInt(minuteStr, 10)];

    if (secondStr) {
      result.push(parseInt(secondStr, 10));
    }

    return result;
  }

  function untruncateYear(yearStr) {
    var year = parseInt(yearStr, 10);

    if (year <= 49) {
      return 2000 + year;
    } else if (year <= 999) {
      return 1900 + year;
    }

    return year;
  }

  function preprocessRFC2822(s) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  }

  function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
      // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
      var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
          weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();

      if (weekdayProvided !== weekdayActual) {
        getParsingFlags(config).weekdayMismatch = true;
        config._isValid = false;
        return false;
      }
    }

    return true;
  }

  var obsOffsets = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
  };

  function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
      return obsOffsets[obsOffset];
    } else if (militaryOffset) {
      // the only allowed military tz is Z
      return 0;
    } else {
      var hm = parseInt(numOffset, 10);
      var m = hm % 100,
          h = (hm - m) / 100;
      return h * 60 + m;
    }
  } // date and time from ref 2822 format


  function configFromRFC2822(config) {
    var match = rfc2822.exec(preprocessRFC2822(config._i));

    if (match) {
      var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);

      if (!checkWeekday(match[1], parsedArray, config)) {
        return;
      }

      config._a = parsedArray;
      config._tzm = calculateOffset(match[8], match[9], match[10]);
      config._d = createUTCDate.apply(null, config._a);

      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

      getParsingFlags(config).rfc2822 = true;
    } else {
      config._isValid = false;
    }
  } // date from iso format or fallback


  function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
      config._d = new Date(+matched[1]);
      return;
    }

    configFromISO(config);

    if (config._isValid === false) {
      delete config._isValid;
    } else {
      return;
    }

    configFromRFC2822(config);

    if (config._isValid === false) {
      delete config._isValid;
    } else {
      return;
    } // Final attempt, use Input Fallback


    hooks.createFromInputFallback(config);
  }

  hooks.createFromInputFallback = deprecate('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' + 'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' + 'discouraged and will be removed in an upcoming major release. Please refer to ' + 'http://momentjs.com/guides/#/warnings/js-date/ for more info.', function (config) {
    config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
  }); // constant that refers to the ISO standard

  hooks.ISO_8601 = function () {}; // constant that refers to the RFC 2822 form


  hooks.RFC_2822 = function () {}; // date from string and format string


  function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
      configFromISO(config);
      return;
    }

    if (config._f === hooks.RFC_2822) {
      configFromRFC2822(config);
      return;
    }

    config._a = [];
    getParsingFlags(config).empty = true; // This array is used to make a Date, either with `new Date` or `Date.UTC`

    var string = '' + config._i,
        i,
        parsedInput,
        tokens,
        token,
        skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;
    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
      token = tokens[i];
      parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0]; // console.log('token', token, 'parsedInput', parsedInput,
      //         'regex', getParseRegexForToken(token, config));

      if (parsedInput) {
        skipped = string.substr(0, string.indexOf(parsedInput));

        if (skipped.length > 0) {
          getParsingFlags(config).unusedInput.push(skipped);
        }

        string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
        totalParsedInputLength += parsedInput.length;
      } // don't parse if it's not a known token


      if (formatTokenFunctions[token]) {
        if (parsedInput) {
          getParsingFlags(config).empty = false;
        } else {
          getParsingFlags(config).unusedTokens.push(token);
        }

        addTimeToArrayFromToken(token, parsedInput, config);
      } else if (config._strict && !parsedInput) {
        getParsingFlags(config).unusedTokens.push(token);
      }
    } // add remaining unparsed input length to the string


    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;

    if (string.length > 0) {
      getParsingFlags(config).unusedInput.push(string);
    } // clear _12h flag if hour is <= 12


    if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
      getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem; // handle meridiem

    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
    configFromArray(config);
    checkOverflow(config);
  }

  function meridiemFixWrap(locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
      // nothing to do
      return hour;
    }

    if (locale.meridiemHour != null) {
      return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
      // Fallback
      isPm = locale.isPM(meridiem);

      if (isPm && hour < 12) {
        hour += 12;
      }

      if (!isPm && hour === 12) {
        hour = 0;
      }

      return hour;
    } else {
      // this is not supposed to happen
      return hour;
    }
  } // date from string and array of format strings


  function configFromStringAndArray(config) {
    var tempConfig, bestMoment, scoreToBeat, i, currentScore;

    if (config._f.length === 0) {
      getParsingFlags(config).invalidFormat = true;
      config._d = new Date(NaN);
      return;
    }

    for (i = 0; i < config._f.length; i++) {
      currentScore = 0;
      tempConfig = copyConfig({}, config);

      if (config._useUTC != null) {
        tempConfig._useUTC = config._useUTC;
      }

      tempConfig._f = config._f[i];
      configFromStringAndFormat(tempConfig);

      if (!isValid(tempConfig)) {
        continue;
      } // if there is any input that was not parsed add a penalty for that format


      currentScore += getParsingFlags(tempConfig).charsLeftOver; //or tokens

      currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
      getParsingFlags(tempConfig).score = currentScore;

      if (scoreToBeat == null || currentScore < scoreToBeat) {
        scoreToBeat = currentScore;
        bestMoment = tempConfig;
      }
    }

    extend(config, bestMoment || tempConfig);
  }

  function configFromObject(config) {
    if (config._d) {
      return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
      return obj && parseInt(obj, 10);
    });
    configFromArray(config);
  }

  function createFromConfig(config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));

    if (res._nextDay) {
      // Adding is smart enough around DST
      res.add(1, 'd');
      res._nextDay = undefined;
    }

    return res;
  }

  function prepareConfig(config) {
    var input = config._i,
        format = config._f;
    config._locale = config._locale || getLocale(config._l);

    if (input === null || format === undefined && input === '') {
      return createInvalid({
        nullInput: true
      });
    }

    if (typeof input === 'string') {
      config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
      return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
      config._d = input;
    } else if (isArray(format)) {
      configFromStringAndArray(config);
    } else if (format) {
      configFromStringAndFormat(config);
    } else {
      configFromInput(config);
    }

    if (!isValid(config)) {
      config._d = null;
    }

    return config;
  }

  function configFromInput(config) {
    var input = config._i;

    if (isUndefined(input)) {
      config._d = new Date(hooks.now());
    } else if (isDate(input)) {
      config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
      configFromString(config);
    } else if (isArray(input)) {
      config._a = map(input.slice(0), function (obj) {
        return parseInt(obj, 10);
      });
      configFromArray(config);
    } else if (isObject(input)) {
      configFromObject(config);
    } else if (isNumber(input)) {
      // from milliseconds
      config._d = new Date(input);
    } else {
      hooks.createFromInputFallback(config);
    }
  }

  function createLocalOrUTC(input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
      strict = locale;
      locale = undefined;
    }

    if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
      input = undefined;
    } // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423


    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;
    return createFromConfig(c);
  }

  function createLocal(input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
  }

  var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
    var other = createLocal.apply(null, arguments);

    if (this.isValid() && other.isValid()) {
      return other < this ? this : other;
    } else {
      return createInvalid();
    }
  });
  var prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
    var other = createLocal.apply(null, arguments);

    if (this.isValid() && other.isValid()) {
      return other > this ? this : other;
    } else {
      return createInvalid();
    }
  }); // Pick a moment m from moments so that m[fn](other) is true for all
  // other. This relies on the function fn to be transitive.
  //
  // moments should either be an array of moment objects or an array, whose
  // first element is an array of moment objects.

  function pickBy(fn, moments) {
    var res, i;

    if (moments.length === 1 && isArray(moments[0])) {
      moments = moments[0];
    }

    if (!moments.length) {
      return createLocal();
    }

    res = moments[0];

    for (i = 1; i < moments.length; ++i) {
      if (!moments[i].isValid() || moments[i][fn](res)) {
        res = moments[i];
      }
    }

    return res;
  } // TODO: Use [].sort instead?


  function min() {
    var args = [].slice.call(arguments, 0);
    return pickBy('isBefore', args);
  }

  function max() {
    var args = [].slice.call(arguments, 0);
    return pickBy('isAfter', args);
  }

  var now = function now() {
    return Date.now ? Date.now() : +new Date();
  };

  var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

  function isDurationValid(m) {
    for (var key in m) {
      if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
        return false;
      }
    }

    var unitHasDecimal = false;

    for (var i = 0; i < ordering.length; ++i) {
      if (m[ordering[i]]) {
        if (unitHasDecimal) {
          return false; // only allow non-integers for smallest unit
        }

        if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
          unitHasDecimal = true;
        }
      }
    }

    return true;
  }

  function isValid$1() {
    return this._isValid;
  }

  function createInvalid$1() {
    return createDuration(NaN);
  }

  function Duration(duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;
    this._isValid = isDurationValid(normalizedInput); // representation for dateAddRemove

    this._milliseconds = +milliseconds + seconds * 1e3 + // 1000
    minutes * 6e4 + // 1000 * 60
    hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately

    this._days = +days + weeks * 7; // It is impossible to translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.

    this._months = +months + quarters * 3 + years * 12;
    this._data = {};
    this._locale = getLocale();

    this._bubble();
  }

  function isDuration(obj) {
    return obj instanceof Duration;
  }

  function absRound(number) {
    if (number < 0) {
      return Math.round(-1 * number) * -1;
    } else {
      return Math.round(number);
    }
  } // FORMATTING


  function offset(token, separator) {
    addFormatToken(token, 0, 0, function () {
      var offset = this.utcOffset();
      var sign = '+';

      if (offset < 0) {
        offset = -offset;
        sign = '-';
      }

      return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
    });
  }

  offset('Z', ':');
  offset('ZZ', ''); // PARSING

  addRegexToken('Z', matchShortOffset);
  addRegexToken('ZZ', matchShortOffset);
  addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
  }); // HELPERS
  // timezone chunker
  // '+10:00' > ['10',  '00']
  // '-1530'  > ['-15', '30']

  var chunkOffset = /([\+\-]|\d\d)/gi;

  function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
      return null;
    }

    var chunk = matches[matches.length - 1] || [];
    var parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);
    return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
  } // Return a moment from input, that is local/utc/zone equivalent to model.


  function cloneWithOffset(input, model) {
    var res, diff;

    if (model._isUTC) {
      res = model.clone();
      diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf(); // Use low-level api, because this fn is low-level api.

      res._d.setTime(res._d.valueOf() + diff);

      hooks.updateOffset(res, false);
      return res;
    } else {
      return createLocal(input).local();
    }
  }

  function getDateOffset(m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
  } // HOOKS
  // This function will be called whenever a moment is mutated.
  // It is intended to keep the offset in sync with the timezone.


  hooks.updateOffset = function () {}; // MOMENTS
  // keepLocalTime = true means only change the timezone, without
  // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
  // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
  // +0200, so we adjust the time as needed, to be valid.
  //
  // Keeping the time actually adds/subtracts (one hour)
  // from the actual represented time. That is why we call updateOffset
  // a second time. In case it wants us to change the offset again
  // _changeInProgress == true case, then we have to adjust, because
  // there is no such time in the given timezone.


  function getSetOffset(input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
        localAdjust;

    if (!this.isValid()) {
      return input != null ? this : NaN;
    }

    if (input != null) {
      if (typeof input === 'string') {
        input = offsetFromString(matchShortOffset, input);

        if (input === null) {
          return this;
        }
      } else if (Math.abs(input) < 16 && !keepMinutes) {
        input = input * 60;
      }

      if (!this._isUTC && keepLocalTime) {
        localAdjust = getDateOffset(this);
      }

      this._offset = input;
      this._isUTC = true;

      if (localAdjust != null) {
        this.add(localAdjust, 'm');
      }

      if (offset !== input) {
        if (!keepLocalTime || this._changeInProgress) {
          addSubtract(this, createDuration(input - offset, 'm'), 1, false);
        } else if (!this._changeInProgress) {
          this._changeInProgress = true;
          hooks.updateOffset(this, true);
          this._changeInProgress = null;
        }
      }

      return this;
    } else {
      return this._isUTC ? offset : getDateOffset(this);
    }
  }

  function getSetZone(input, keepLocalTime) {
    if (input != null) {
      if (typeof input !== 'string') {
        input = -input;
      }

      this.utcOffset(input, keepLocalTime);
      return this;
    } else {
      return -this.utcOffset();
    }
  }

  function setOffsetToUTC(keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
  }

  function setOffsetToLocal(keepLocalTime) {
    if (this._isUTC) {
      this.utcOffset(0, keepLocalTime);
      this._isUTC = false;

      if (keepLocalTime) {
        this.subtract(getDateOffset(this), 'm');
      }
    }

    return this;
  }

  function setOffsetToParsedOffset() {
    if (this._tzm != null) {
      this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
      var tZone = offsetFromString(matchOffset, this._i);

      if (tZone != null) {
        this.utcOffset(tZone);
      } else {
        this.utcOffset(0, true);
      }
    }

    return this;
  }

  function hasAlignedHourOffset(input) {
    if (!this.isValid()) {
      return false;
    }

    input = input ? createLocal(input).utcOffset() : 0;
    return (this.utcOffset() - input) % 60 === 0;
  }

  function isDaylightSavingTime() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }

  function isDaylightSavingTimeShifted() {
    if (!isUndefined(this._isDSTShifted)) {
      return this._isDSTShifted;
    }

    var c = {};
    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
      var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
      this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
    } else {
      this._isDSTShifted = false;
    }

    return this._isDSTShifted;
  }

  function isLocal() {
    return this.isValid() ? !this._isUTC : false;
  }

  function isUtcOffset() {
    return this.isValid() ? this._isUTC : false;
  }

  function isUtc() {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
  } // ASP.NET json date format regex


  var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/; // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
  // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
  // and further modified to allow for strings containing both week and day

  var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

  function createDuration(input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
    match = null,
        sign,
        ret,
        diffRes;

    if (isDuration(input)) {
      duration = {
        ms: input._milliseconds,
        d: input._days,
        M: input._months
      };
    } else if (isNumber(input)) {
      duration = {};

      if (key) {
        duration[key] = input;
      } else {
        duration.milliseconds = input;
      }
    } else if (!!(match = aspNetRegex.exec(input))) {
      sign = match[1] === '-' ? -1 : 1;
      duration = {
        y: 0,
        d: toInt(match[DATE]) * sign,
        h: toInt(match[HOUR]) * sign,
        m: toInt(match[MINUTE]) * sign,
        s: toInt(match[SECOND]) * sign,
        ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match

      };
    } else if (!!(match = isoRegex.exec(input))) {
      sign = match[1] === '-' ? -1 : 1;
      duration = {
        y: parseIso(match[2], sign),
        M: parseIso(match[3], sign),
        w: parseIso(match[4], sign),
        d: parseIso(match[5], sign),
        h: parseIso(match[6], sign),
        m: parseIso(match[7], sign),
        s: parseIso(match[8], sign)
      };
    } else if (duration == null) {
      // checks for null or undefined
      duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
      diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
      duration = {};
      duration.ms = diffRes.milliseconds;
      duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
      ret._locale = input._locale;
    }

    return ret;
  }

  createDuration.fn = Duration.prototype;
  createDuration.invalid = createInvalid$1;

  function parseIso(inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.')); // apply sign while we're at it

    return (isNaN(res) ? 0 : res) * sign;
  }

  function positiveMomentsDifference(base, other) {
    var res = {
      milliseconds: 0,
      months: 0
    };
    res.months = other.month() - base.month() + (other.year() - base.year()) * 12;

    if (base.clone().add(res.months, 'M').isAfter(other)) {
      --res.months;
    }

    res.milliseconds = +other - +base.clone().add(res.months, 'M');
    return res;
  }

  function momentsDifference(base, other) {
    var res;

    if (!(base.isValid() && other.isValid())) {
      return {
        milliseconds: 0,
        months: 0
      };
    }

    other = cloneWithOffset(other, base);

    if (base.isBefore(other)) {
      res = positiveMomentsDifference(base, other);
    } else {
      res = positiveMomentsDifference(other, base);
      res.milliseconds = -res.milliseconds;
      res.months = -res.months;
    }

    return res;
  } // TODO: remove 'name' arg after deprecation is removed


  function createAdder(direction, name) {
    return function (val, period) {
      var dur, tmp; //invert the arguments, but complain about it

      if (period !== null && !isNaN(+period)) {
        deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
        tmp = val;
        val = period;
        period = tmp;
      }

      val = typeof val === 'string' ? +val : val;
      dur = createDuration(val, period);
      addSubtract(this, dur, direction);
      return this;
    };
  }

  function addSubtract(mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

    if (!mom.isValid()) {
      // No op
      return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (months) {
      setMonth(mom, get(mom, 'Month') + months * isAdding);
    }

    if (days) {
      set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }

    if (milliseconds) {
      mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }

    if (updateOffset) {
      hooks.updateOffset(mom, days || months);
    }
  }

  var add = createAdder(1, 'add');
  var subtract = createAdder(-1, 'subtract');

  function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
  }

  function calendar$1(time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';
    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
  }

  function clone() {
    return new Moment(this);
  }

  function isAfter(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);

    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }

    units = normalizeUnits(units) || 'millisecond';

    if (units === 'millisecond') {
      return this.valueOf() > localInput.valueOf();
    } else {
      return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
  }

  function isBefore(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);

    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }

    units = normalizeUnits(units) || 'millisecond';

    if (units === 'millisecond') {
      return this.valueOf() < localInput.valueOf();
    } else {
      return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
  }

  function isBetween(from, to, units, inclusivity) {
    var localFrom = isMoment(from) ? from : createLocal(from),
        localTo = isMoment(to) ? to : createLocal(to);

    if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
      return false;
    }

    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
  }

  function isSame(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;

    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }

    units = normalizeUnits(units) || 'millisecond';

    if (units === 'millisecond') {
      return this.valueOf() === localInput.valueOf();
    } else {
      inputMs = localInput.valueOf();
      return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
  }

  function isSameOrAfter(input, units) {
    return this.isSame(input, units) || this.isAfter(input, units);
  }

  function isSameOrBefore(input, units) {
    return this.isSame(input, units) || this.isBefore(input, units);
  }

  function diff(input, units, asFloat) {
    var that, zoneDelta, output;

    if (!this.isValid()) {
      return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
      return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
    units = normalizeUnits(units);

    switch (units) {
      case 'year':
        output = monthDiff(this, that) / 12;
        break;

      case 'month':
        output = monthDiff(this, that);
        break;

      case 'quarter':
        output = monthDiff(this, that) / 3;
        break;

      case 'second':
        output = (this - that) / 1e3;
        break;
      // 1000

      case 'minute':
        output = (this - that) / 6e4;
        break;
      // 1000 * 60

      case 'hour':
        output = (this - that) / 36e5;
        break;
      // 1000 * 60 * 60

      case 'day':
        output = (this - that - zoneDelta) / 864e5;
        break;
      // 1000 * 60 * 60 * 24, negate dst

      case 'week':
        output = (this - that - zoneDelta) / 6048e5;
        break;
      // 1000 * 60 * 60 * 24 * 7, negate dst

      default:
        output = this - that;
    }

    return asFloat ? output : absFloor(output);
  }

  function monthDiff(a, b) {
    // difference in months
    var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
    anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2,
        adjust;

    if (b - anchor < 0) {
      anchor2 = a.clone().add(wholeMonthDiff - 1, 'months'); // linear across the month

      adjust = (b - anchor) / (anchor - anchor2);
    } else {
      anchor2 = a.clone().add(wholeMonthDiff + 1, 'months'); // linear across the month

      adjust = (b - anchor) / (anchor2 - anchor);
    } //check for negative zero, return zero if negative zero


    return -(wholeMonthDiff + adjust) || 0;
  }

  hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
  hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

  function toString() {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
  }

  function toISOString(keepOffset) {
    if (!this.isValid()) {
      return null;
    }

    var utc = keepOffset !== true;
    var m = utc ? this.clone().utc() : this;

    if (m.year() < 0 || m.year() > 9999) {
      return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }

    if (isFunction(Date.prototype.toISOString)) {
      // native implementation is ~50x faster, use it when we can
      if (utc) {
        return this.toDate().toISOString();
      } else {
        return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
      }
    }

    return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
  }
  /**
   * Return a human readable representation of a moment that can
   * also be evaluated to get a new moment which is the same
   *
   * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
   */


  function inspect() {
    if (!this.isValid()) {
      return 'moment.invalid(/* ' + this._i + ' */)';
    }

    var func = 'moment';
    var zone = '';

    if (!this.isLocal()) {
      func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
      zone = 'Z';
    }

    var prefix = '[' + func + '("]';
    var year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';
    return this.format(prefix + year + datetime + suffix);
  }

  function format(inputString) {
    if (!inputString) {
      inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }

    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
  }

  function from(time, withoutSuffix) {
    if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
      return createDuration({
        to: this,
        from: time
      }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }

  function fromNow(withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
  }

  function to(time, withoutSuffix) {
    if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
      return createDuration({
        from: this,
        to: time
      }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }

  function toNow(withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
  } // If passed a locale key, it will set the locale for this
  // instance.  Otherwise, it will return the locale configuration
  // variables for this instance.


  function locale(key) {
    var newLocaleData;

    if (key === undefined) {
      return this._locale._abbr;
    } else {
      newLocaleData = getLocale(key);

      if (newLocaleData != null) {
        this._locale = newLocaleData;
      }

      return this;
    }
  }

  var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (key) {
    if (key === undefined) {
      return this.localeData();
    } else {
      return this.locale(key);
    }
  });

  function localeData() {
    return this._locale;
  }

  function startOf(units) {
    units = normalizeUnits(units); // the following switch intentionally omits break keywords
    // to utilize falling through the cases.

    switch (units) {
      case 'year':
        this.month(0);

      /* falls through */

      case 'quarter':
      case 'month':
        this.date(1);

      /* falls through */

      case 'week':
      case 'isoWeek':
      case 'day':
      case 'date':
        this.hours(0);

      /* falls through */

      case 'hour':
        this.minutes(0);

      /* falls through */

      case 'minute':
        this.seconds(0);

      /* falls through */

      case 'second':
        this.milliseconds(0);
    } // weeks are a special case


    if (units === 'week') {
      this.weekday(0);
    }

    if (units === 'isoWeek') {
      this.isoWeekday(1);
    } // quarters are also special


    if (units === 'quarter') {
      this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
  }

  function endOf(units) {
    units = normalizeUnits(units);

    if (units === undefined || units === 'millisecond') {
      return this;
    } // 'date' is an alias for 'day', so it should be considered as such.


    if (units === 'date') {
      units = 'day';
    }

    return this.startOf(units).add(1, units === 'isoWeek' ? 'week' : units).subtract(1, 'ms');
  }

  function valueOf() {
    return this._d.valueOf() - (this._offset || 0) * 60000;
  }

  function unix() {
    return Math.floor(this.valueOf() / 1000);
  }

  function toDate() {
    return new Date(this.valueOf());
  }

  function toArray() {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
  }

  function toObject() {
    var m = this;
    return {
      years: m.year(),
      months: m.month(),
      date: m.date(),
      hours: m.hours(),
      minutes: m.minutes(),
      seconds: m.seconds(),
      milliseconds: m.milliseconds()
    };
  }

  function toJSON() {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
  }

  function isValid$2() {
    return isValid(this);
  }

  function parsingFlags() {
    return extend({}, getParsingFlags(this));
  }

  function invalidAt() {
    return getParsingFlags(this).overflow;
  }

  function creationData() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    };
  } // FORMATTING


  addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
  });
  addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
  });

  function addWeekYearFormatToken(token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
  }

  addWeekYearFormatToken('gggg', 'weekYear');
  addWeekYearFormatToken('ggggg', 'weekYear');
  addWeekYearFormatToken('GGGG', 'isoWeekYear');
  addWeekYearFormatToken('GGGGG', 'isoWeekYear'); // ALIASES

  addUnitAlias('weekYear', 'gg');
  addUnitAlias('isoWeekYear', 'GG'); // PRIORITY

  addUnitPriority('weekYear', 1);
  addUnitPriority('isoWeekYear', 1); // PARSING

  addRegexToken('G', matchSigned);
  addRegexToken('g', matchSigned);
  addRegexToken('GG', match1to2, match2);
  addRegexToken('gg', match1to2, match2);
  addRegexToken('GGGG', match1to4, match4);
  addRegexToken('gggg', match1to4, match4);
  addRegexToken('GGGGG', match1to6, match6);
  addRegexToken('ggggg', match1to6, match6);
  addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
  });
  addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
  }); // MOMENTS

  function getSetWeekYear(input) {
    return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
  }

  function getSetISOWeekYear(input) {
    return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
  }

  function getISOWeeksInYear() {
    return weeksInYear(this.year(), 1, 4);
  }

  function getWeeksInYear() {
    var weekInfo = this.localeData()._week;

    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
  }

  function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;

    if (input == null) {
      return weekOfYear(this, dow, doy).year;
    } else {
      weeksTarget = weeksInYear(input, dow, doy);

      if (week > weeksTarget) {
        week = weeksTarget;
      }

      return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
  }

  function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
  } // FORMATTING


  addFormatToken('Q', 0, 'Qo', 'quarter'); // ALIASES

  addUnitAlias('quarter', 'Q'); // PRIORITY

  addUnitPriority('quarter', 7); // PARSING

  addRegexToken('Q', match1);
  addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
  }); // MOMENTS

  function getSetQuarter(input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
  } // FORMATTING


  addFormatToken('D', ['DD', 2], 'Do', 'date'); // ALIASES

  addUnitAlias('date', 'D'); // PRIORITY

  addUnitPriority('date', 9); // PARSING

  addRegexToken('D', match1to2);
  addRegexToken('DD', match1to2, match2);
  addRegexToken('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
  });
  addParseToken(['D', 'DD'], DATE);
  addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0]);
  }); // MOMENTS

  var getSetDayOfMonth = makeGetSet('Date', true); // FORMATTING

  addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'); // ALIASES

  addUnitAlias('dayOfYear', 'DDD'); // PRIORITY

  addUnitPriority('dayOfYear', 4); // PARSING

  addRegexToken('DDD', match1to3);
  addRegexToken('DDDD', match3);
  addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
  }); // HELPERS
  // MOMENTS

  function getSetDayOfYear(input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
  } // FORMATTING


  addFormatToken('m', ['mm', 2], 0, 'minute'); // ALIASES

  addUnitAlias('minute', 'm'); // PRIORITY

  addUnitPriority('minute', 14); // PARSING

  addRegexToken('m', match1to2);
  addRegexToken('mm', match1to2, match2);
  addParseToken(['m', 'mm'], MINUTE); // MOMENTS

  var getSetMinute = makeGetSet('Minutes', false); // FORMATTING

  addFormatToken('s', ['ss', 2], 0, 'second'); // ALIASES

  addUnitAlias('second', 's'); // PRIORITY

  addUnitPriority('second', 15); // PARSING

  addRegexToken('s', match1to2);
  addRegexToken('ss', match1to2, match2);
  addParseToken(['s', 'ss'], SECOND); // MOMENTS

  var getSetSecond = makeGetSet('Seconds', false); // FORMATTING

  addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
  });
  addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
  });
  addFormatToken(0, ['SSS', 3], 0, 'millisecond');
  addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
  });
  addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
  });
  addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
  });
  addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
  });
  addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
  });
  addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
  }); // ALIASES

  addUnitAlias('millisecond', 'ms'); // PRIORITY

  addUnitPriority('millisecond', 16); // PARSING

  addRegexToken('S', match1to3, match1);
  addRegexToken('SS', match1to3, match2);
  addRegexToken('SSS', match1to3, match3);
  var token;

  for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
  }

  function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
  }

  for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
  } // MOMENTS


  var getSetMillisecond = makeGetSet('Milliseconds', false); // FORMATTING

  addFormatToken('z', 0, 0, 'zoneAbbr');
  addFormatToken('zz', 0, 0, 'zoneName'); // MOMENTS

  function getZoneAbbr() {
    return this._isUTC ? 'UTC' : '';
  }

  function getZoneName() {
    return this._isUTC ? 'Coordinated Universal Time' : '';
  }

  var proto = Moment.prototype;
  proto.add = add;
  proto.calendar = calendar$1;
  proto.clone = clone;
  proto.diff = diff;
  proto.endOf = endOf;
  proto.format = format;
  proto.from = from;
  proto.fromNow = fromNow;
  proto.to = to;
  proto.toNow = toNow;
  proto.get = stringGet;
  proto.invalidAt = invalidAt;
  proto.isAfter = isAfter;
  proto.isBefore = isBefore;
  proto.isBetween = isBetween;
  proto.isSame = isSame;
  proto.isSameOrAfter = isSameOrAfter;
  proto.isSameOrBefore = isSameOrBefore;
  proto.isValid = isValid$2;
  proto.lang = lang;
  proto.locale = locale;
  proto.localeData = localeData;
  proto.max = prototypeMax;
  proto.min = prototypeMin;
  proto.parsingFlags = parsingFlags;
  proto.set = stringSet;
  proto.startOf = startOf;
  proto.subtract = subtract;
  proto.toArray = toArray;
  proto.toObject = toObject;
  proto.toDate = toDate;
  proto.toISOString = toISOString;
  proto.inspect = inspect;
  proto.toJSON = toJSON;
  proto.toString = toString;
  proto.unix = unix;
  proto.valueOf = valueOf;
  proto.creationData = creationData;
  proto.year = getSetYear;
  proto.isLeapYear = getIsLeapYear;
  proto.weekYear = getSetWeekYear;
  proto.isoWeekYear = getSetISOWeekYear;
  proto.quarter = proto.quarters = getSetQuarter;
  proto.month = getSetMonth;
  proto.daysInMonth = getDaysInMonth;
  proto.week = proto.weeks = getSetWeek;
  proto.isoWeek = proto.isoWeeks = getSetISOWeek;
  proto.weeksInYear = getWeeksInYear;
  proto.isoWeeksInYear = getISOWeeksInYear;
  proto.date = getSetDayOfMonth;
  proto.day = proto.days = getSetDayOfWeek;
  proto.weekday = getSetLocaleDayOfWeek;
  proto.isoWeekday = getSetISODayOfWeek;
  proto.dayOfYear = getSetDayOfYear;
  proto.hour = proto.hours = getSetHour;
  proto.minute = proto.minutes = getSetMinute;
  proto.second = proto.seconds = getSetSecond;
  proto.millisecond = proto.milliseconds = getSetMillisecond;
  proto.utcOffset = getSetOffset;
  proto.utc = setOffsetToUTC;
  proto.local = setOffsetToLocal;
  proto.parseZone = setOffsetToParsedOffset;
  proto.hasAlignedHourOffset = hasAlignedHourOffset;
  proto.isDST = isDaylightSavingTime;
  proto.isLocal = isLocal;
  proto.isUtcOffset = isUtcOffset;
  proto.isUtc = isUtc;
  proto.isUTC = isUtc;
  proto.zoneAbbr = getZoneAbbr;
  proto.zoneName = getZoneName;
  proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
  proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
  proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
  proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
  proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

  function createUnix(input) {
    return createLocal(input * 1000);
  }

  function createInZone() {
    return createLocal.apply(null, arguments).parseZone();
  }

  function preParsePostFormat(string) {
    return string;
  }

  var proto$1 = Locale.prototype;
  proto$1.calendar = calendar;
  proto$1.longDateFormat = longDateFormat;
  proto$1.invalidDate = invalidDate;
  proto$1.ordinal = ordinal;
  proto$1.preparse = preParsePostFormat;
  proto$1.postformat = preParsePostFormat;
  proto$1.relativeTime = relativeTime;
  proto$1.pastFuture = pastFuture;
  proto$1.set = set;
  proto$1.months = localeMonths;
  proto$1.monthsShort = localeMonthsShort;
  proto$1.monthsParse = localeMonthsParse;
  proto$1.monthsRegex = monthsRegex;
  proto$1.monthsShortRegex = monthsShortRegex;
  proto$1.week = localeWeek;
  proto$1.firstDayOfYear = localeFirstDayOfYear;
  proto$1.firstDayOfWeek = localeFirstDayOfWeek;
  proto$1.weekdays = localeWeekdays;
  proto$1.weekdaysMin = localeWeekdaysMin;
  proto$1.weekdaysShort = localeWeekdaysShort;
  proto$1.weekdaysParse = localeWeekdaysParse;
  proto$1.weekdaysRegex = weekdaysRegex;
  proto$1.weekdaysShortRegex = weekdaysShortRegex;
  proto$1.weekdaysMinRegex = weekdaysMinRegex;
  proto$1.isPM = localeIsPM;
  proto$1.meridiem = localeMeridiem;

  function get$1(format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
  }

  function listMonthsImpl(format, index, field) {
    if (isNumber(format)) {
      index = format;
      format = undefined;
    }

    format = format || '';

    if (index != null) {
      return get$1(format, index, field, 'month');
    }

    var i;
    var out = [];

    for (i = 0; i < 12; i++) {
      out[i] = get$1(format, i, field, 'month');
    }

    return out;
  } // ()
  // (5)
  // (fmt, 5)
  // (fmt)
  // (true)
  // (true, 5)
  // (true, fmt, 5)
  // (true, fmt)


  function listWeekdaysImpl(localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
      if (isNumber(format)) {
        index = format;
        format = undefined;
      }

      format = format || '';
    } else {
      format = localeSorted;
      index = format;
      localeSorted = false;

      if (isNumber(format)) {
        index = format;
        format = undefined;
      }

      format = format || '';
    }

    var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
      return get$1(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];

    for (i = 0; i < 7; i++) {
      out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }

    return out;
  }

  function listMonths(format, index) {
    return listMonthsImpl(format, index, 'months');
  }

  function listMonthsShort(format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
  }

  function listWeekdays(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
  }

  function listWeekdaysShort(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
  }

  function listWeekdaysMin(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
  }

  getSetGlobalLocale('en', {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function ordinal(number) {
      var b = number % 10,
          output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
      return number + output;
    }
  }); // Side effect imports

  hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
  hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);
  var mathAbs = Math.abs;

  function abs() {
    var data = this._data;
    this._milliseconds = mathAbs(this._milliseconds);
    this._days = mathAbs(this._days);
    this._months = mathAbs(this._months);
    data.milliseconds = mathAbs(data.milliseconds);
    data.seconds = mathAbs(data.seconds);
    data.minutes = mathAbs(data.minutes);
    data.hours = mathAbs(data.hours);
    data.months = mathAbs(data.months);
    data.years = mathAbs(data.years);
    return this;
  }

  function addSubtract$1(duration, input, value, direction) {
    var other = createDuration(input, value);
    duration._milliseconds += direction * other._milliseconds;
    duration._days += direction * other._days;
    duration._months += direction * other._months;
    return duration._bubble();
  } // supports only 2.0-style add(1, 's') or add(duration)


  function add$1(input, value) {
    return addSubtract$1(this, input, value, 1);
  } // supports only 2.0-style subtract(1, 's') or subtract(duration)


  function subtract$1(input, value) {
    return addSubtract$1(this, input, value, -1);
  }

  function absCeil(number) {
    if (number < 0) {
      return Math.floor(number);
    } else {
      return Math.ceil(number);
    }
  }

  function bubble() {
    var milliseconds = this._milliseconds;
    var days = this._days;
    var months = this._months;
    var data = this._data;
    var seconds, minutes, hours, years, monthsFromDays; // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166

    if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
      milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
      days = 0;
      months = 0;
    } // The following code bubbles up values, see the tests for
    // examples of what that means.


    data.milliseconds = milliseconds % 1000;
    seconds = absFloor(milliseconds / 1000);
    data.seconds = seconds % 60;
    minutes = absFloor(seconds / 60);
    data.minutes = minutes % 60;
    hours = absFloor(minutes / 60);
    data.hours = hours % 24;
    days += absFloor(hours / 24); // convert days to months

    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays)); // 12 months -> 1 year

    years = absFloor(months / 12);
    months %= 12;
    data.days = days;
    data.months = months;
    data.years = years;
    return this;
  }

  function daysToMonths(days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
  }

  function monthsToDays(months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
  }

  function as(units) {
    if (!this.isValid()) {
      return NaN;
    }

    var days;
    var months;
    var milliseconds = this._milliseconds;
    units = normalizeUnits(units);

    if (units === 'month' || units === 'year') {
      days = this._days + milliseconds / 864e5;
      months = this._months + daysToMonths(days);
      return units === 'month' ? months : months / 12;
    } else {
      // handle milliseconds separately because of floating point math errors (issue #1867)
      days = this._days + Math.round(monthsToDays(this._months));

      switch (units) {
        case 'week':
          return days / 7 + milliseconds / 6048e5;

        case 'day':
          return days + milliseconds / 864e5;

        case 'hour':
          return days * 24 + milliseconds / 36e5;

        case 'minute':
          return days * 1440 + milliseconds / 6e4;

        case 'second':
          return days * 86400 + milliseconds / 1000;
        // Math.floor prevents floating point math errors here

        case 'millisecond':
          return Math.floor(days * 864e5) + milliseconds;

        default:
          throw new Error('Unknown unit ' + units);
      }
    }
  } // TODO: Use this.as('ms')?


  function valueOf$1() {
    if (!this.isValid()) {
      return NaN;
    }

    return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
  }

  function makeAs(alias) {
    return function () {
      return this.as(alias);
    };
  }

  var asMilliseconds = makeAs('ms');
  var asSeconds = makeAs('s');
  var asMinutes = makeAs('m');
  var asHours = makeAs('h');
  var asDays = makeAs('d');
  var asWeeks = makeAs('w');
  var asMonths = makeAs('M');
  var asYears = makeAs('y');

  function clone$1() {
    return createDuration(this);
  }

  function get$2(units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + 's']() : NaN;
  }

  function makeGetter(name) {
    return function () {
      return this.isValid() ? this._data[name] : NaN;
    };
  }

  var milliseconds = makeGetter('milliseconds');
  var seconds = makeGetter('seconds');
  var minutes = makeGetter('minutes');
  var hours = makeGetter('hours');
  var days = makeGetter('days');
  var months = makeGetter('months');
  var years = makeGetter('years');

  function weeks() {
    return absFloor(this.days() / 7);
  }

  var round = Math.round;
  var thresholds = {
    ss: 44,
    // a few seconds to seconds
    s: 45,
    // seconds to minute
    m: 45,
    // minutes to hour
    h: 22,
    // hours to day
    d: 26,
    // days to month
    M: 11 // months to year

  }; // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize

  function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
  }

  function relativeTime$1(posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds = round(duration.as('s'));
    var minutes = round(duration.as('m'));
    var hours = round(duration.as('h'));
    var days = round(duration.as('d'));
    var months = round(duration.as('M'));
    var years = round(duration.as('y'));
    var a = seconds <= thresholds.ss && ['s', seconds] || seconds < thresholds.s && ['ss', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days] || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];
    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
  } // This function allows you to set the rounding function for relative time strings


  function getSetRelativeTimeRounding(roundingFunction) {
    if (roundingFunction === undefined) {
      return round;
    }

    if (typeof roundingFunction === 'function') {
      round = roundingFunction;
      return true;
    }

    return false;
  } // This function allows you to set a threshold for relative time strings


  function getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === undefined) {
      return false;
    }

    if (limit === undefined) {
      return thresholds[threshold];
    }

    thresholds[threshold] = limit;

    if (threshold === 's') {
      thresholds.ss = limit - 1;
    }

    return true;
  }

  function humanize(withSuffix) {
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }

    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
      output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
  }

  var abs$1 = Math.abs;

  function sign(x) {
    return (x > 0) - (x < 0) || +x;
  }

  function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }

    var seconds = abs$1(this._milliseconds) / 1000;
    var days = abs$1(this._days);
    var months = abs$1(this._months);
    var minutes, hours, years; // 3600 seconds -> 60 minutes -> 1 hour

    minutes = absFloor(seconds / 60);
    hours = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60; // 12 months -> 1 year

    years = absFloor(months / 12);
    months %= 12; // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js

    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
    var total = this.asSeconds();

    if (!total) {
      // this is the same as C#'s (Noda) and python (isodate)...
      // but not other JS (goog.date)
      return 'P0D';
    }

    var totalSign = total < 0 ? '-' : '';
    var ymSign = sign(this._months) !== sign(total) ? '-' : '';
    var daysSign = sign(this._days) !== sign(total) ? '-' : '';
    var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';
    return totalSign + 'P' + (Y ? ymSign + Y + 'Y' : '') + (M ? ymSign + M + 'M' : '') + (D ? daysSign + D + 'D' : '') + (h || m || s ? 'T' : '') + (h ? hmsSign + h + 'H' : '') + (m ? hmsSign + m + 'M' : '') + (s ? hmsSign + s + 'S' : '');
  }

  var proto$2 = Duration.prototype;
  proto$2.isValid = isValid$1;
  proto$2.abs = abs;
  proto$2.add = add$1;
  proto$2.subtract = subtract$1;
  proto$2.as = as;
  proto$2.asMilliseconds = asMilliseconds;
  proto$2.asSeconds = asSeconds;
  proto$2.asMinutes = asMinutes;
  proto$2.asHours = asHours;
  proto$2.asDays = asDays;
  proto$2.asWeeks = asWeeks;
  proto$2.asMonths = asMonths;
  proto$2.asYears = asYears;
  proto$2.valueOf = valueOf$1;
  proto$2._bubble = bubble;
  proto$2.clone = clone$1;
  proto$2.get = get$2;
  proto$2.milliseconds = milliseconds;
  proto$2.seconds = seconds;
  proto$2.minutes = minutes;
  proto$2.hours = hours;
  proto$2.days = days;
  proto$2.weeks = weeks;
  proto$2.months = months;
  proto$2.years = years;
  proto$2.humanize = humanize;
  proto$2.toISOString = toISOString$1;
  proto$2.toString = toISOString$1;
  proto$2.toJSON = toISOString$1;
  proto$2.locale = locale;
  proto$2.localeData = localeData;
  proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
  proto$2.lang = lang; // Side effect imports
  // FORMATTING

  addFormatToken('X', 0, 0, 'unix');
  addFormatToken('x', 0, 0, 'valueOf'); // PARSING

  addRegexToken('x', matchSigned);
  addRegexToken('X', matchTimestamp);
  addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
  });
  addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
  }); // Side effect imports

  hooks.version = '2.23.0';
  setHookCallback(createLocal);
  hooks.fn = proto;
  hooks.min = min;
  hooks.max = max;
  hooks.now = now;
  hooks.utc = createUTC;
  hooks.unix = createUnix;
  hooks.months = listMonths;
  hooks.isDate = isDate;
  hooks.locale = getSetGlobalLocale;
  hooks.invalid = createInvalid;
  hooks.duration = createDuration;
  hooks.isMoment = isMoment;
  hooks.weekdays = listWeekdays;
  hooks.parseZone = createInZone;
  hooks.localeData = getLocale;
  hooks.isDuration = isDuration;
  hooks.monthsShort = listMonthsShort;
  hooks.weekdaysMin = listWeekdaysMin;
  hooks.defineLocale = defineLocale;
  hooks.updateLocale = updateLocale;
  hooks.locales = listLocales;
  hooks.weekdaysShort = listWeekdaysShort;
  hooks.normalizeUnits = normalizeUnits;
  hooks.relativeTimeRounding = getSetRelativeTimeRounding;
  hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
  hooks.calendarFormat = getCalendarFormat;
  hooks.prototype = proto; // currently HTML5 input type only supports 24-hour formats

  hooks.HTML5_FMT = {
    DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
    // <input type="datetime-local" />
    DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
    // <input type="datetime-local" step="1" />
    DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
    // <input type="datetime-local" step="0.001" />
    DATE: 'YYYY-MM-DD',
    // <input type="date" />
    TIME: 'HH:mm',
    // <input type="time" />
    TIME_SECONDS: 'HH:mm:ss',
    // <input type="time" step="1" />
    TIME_MS: 'HH:mm:ss.SSS',
    // <input type="time" step="0.001" />
    WEEK: 'GGGG-[W]WW',
    // <input type="week" />
    MONTH: 'YYYY-MM' // <input type="month" />

  };
  return hooks;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/react-bottom-scroll-listener/dist/index.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-bottom-scroll-listener/dist/index.es.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */

var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return _extendStatics(d, b);
};

function __extends(d, b) {
  _extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */

var FUNC_ERROR_TEXT = 'Expected a function';
/** Used as references for various `Number` constants. */

var NAN = 0 / 0;
/** `Object#toString` result references. */

var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */

var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */

var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */

var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */

var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */

var freeParseInt = parseInt;
/** Detect free variable `global` from Node.js. */

var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
/** Detect free variable `self`. */

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/** Used for built-in method references. */

var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax = Math.max,
    nativeMin = Math.min;
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */

var now = function now() {
  return root.Date.now();
};
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */


function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  wait = toNumber(wait) || 0;

  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time; // Start the timer for the trailing edge.

    timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;
    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.

    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = now();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    } // Restart the timer.


    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }

    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }

    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }

      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }

    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }

    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */


function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */


function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */


function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }

  if (isSymbol(value)) {
    return NAN;
  }

  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }

  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

var lodash_debounce = debounce;
/**
 * @class BottomScrollListener
 *
 * A simple React component that lets you listen for when you have scrolled to the bottom.
 *
 */

var BottomScrollListener =
/** @class */
function (_super) {
  __extends(BottomScrollListener, _super);

  function BottomScrollListener(props) {
    var _this = _super.call(this, props) || this;

    if (props.debounce) {
      _this.handleOnScroll = lodash_debounce(_this.handleOnScroll.bind(_this), props.debounce, {
        trailing: true
      });
    } else {
      _this.handleOnScroll = _this.handleOnScroll.bind(_this);
    }

    return _this;
  }

  BottomScrollListener.prototype.componentDidMount = function () {
    document.addEventListener('scroll', this.handleOnScroll);
  };

  BottomScrollListener.prototype.componentWillUnmount = function () {
    document.removeEventListener('scroll', this.handleOnScroll);
  };

  BottomScrollListener.prototype.handleOnScroll = function () {
    var scrollNode = document.scrollingElement || document.documentElement;

    if (scrollNode != null && scrollNode.scrollHeight - this.props.offset <= scrollNode.scrollTop + window.innerHeight) {
      this.props.onBottom();
    }
  };

  BottomScrollListener.prototype.render = function () {
    if (!this.props.children) return null;
    return this.props.children;
  };

  BottomScrollListener.defaultProps = {
    debounce: 200,
    offset: 0
  };
  return BottomScrollListener;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BottomScrollListener);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-date-and-time-picker/dist/main.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-date-and-time-picker/dist/main.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports =
/******/
function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        /******/
        configurable: false,

        /******/
        enumerable: true,

        /******/
        get: getter
        /******/

      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = 13);
  /******/
}(
/************************************************************************/

/******/
[
/* 0 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    ROOT: 'dtp-root',
    HEADER_ROW: 'dtp-header',
    HEADER_MONTH: 'dtp-header-month',
    HEADER_YEAR: 'dtp-header-year',
    MAIN_SECTION: 'dtp-main-section',
    TABLE: 'dtp-table',
    TH_DAY: 'dtp-th-day',
    TD_DAY: 'dtp-td-day',
    FOOTER_ROW: 'dtp-footer',
    TIME_CONTAINER: 'dtp-time-container',
    TIME_CONTROLS: 'dtp-time-controls',
    DISPLAY_LIGHT: 'dtp-digit-display-light',
    DIGITS: 'dtp-digits',
    HOVER_SPAN: 'dtp-hover-span',
    SELECTED_DAY: 'dtp-selected-day',
    SELECTED: 'dtp-selected',
    PREVIOUS_MONTH: 'dtp-previous-month',
    PREVIOUS_HOUR: 'dtp-hour-previous',
    PREVIOUS_MINUTE: 'dtp-minute-previous',
    NEXT_MONTH: 'dtp-next-month',
    NEXT_HOUR: 'dtp-hour-next',
    NEXT_MINUTE: 'dtp-minute-next',
    SELECT_MONTH: 'dtp-td-months',
    SELECT_YEAR: 'dtp-td-years',
    SELECT_DAY: 'dtp-select-day',
    SELECT_TIME: 'dtp-select-time',
    SELECT_CALENDAR: 'dtp-select-year',
    SELECT_TODAY: 'dtp-select-today',
    CANCEL_CHANGES: 'dtp-cancel-changes',
    VIEW_DAYS: 'dtp-view-days',
    VIEW_MONTHS: 'dtp-view-months',
    VIEW_YEARS: 'dtp-view-years',
    VIEW_TIME: 'dtp-view-time',
    FILLER: 'dtp-filler',
    ICON_CHEVRON_LEFT: 'dtp-icon-chevron-left',
    ICON_CHEVRON_RIGHT: 'dtp-icon-chevron-right',
    ICON_ARROW_DROP_UP: 'dtp-icon-arrow-drop-up',
    ICON_EVENT: 'dtp-icon-event',
    ICON_SCHEDULE: 'dtp-icon-schedule',
    ICON_ADJUST: 'dtp-icon-adjust',
    ICON_CANCEL: 'dtp-icon-cancel',
    ICON_EXPAND_LESS: 'dtp-icon-expand-less',
    ICON_EXPAND_MORE: 'dtp-icon-expand-more',
    MATERIAL_ICONS: 'material-icons',
    TRANSPARENT: 'dtp-transparent'
  };
  /***/
},
/* 1 */

/***/
function (module, exports) {
  module.exports = __webpack_require__(/*! react */ "./node_modules/react/index.js");
  /***/
},
/* 2 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getDefaultLineHeight = exports.TargetManager = undefined;

  var _regenerator = __webpack_require__(12);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  exports.range = range;
  exports.rotate = rotate;
  exports.classes = classes;
  exports.Enum = Enum;

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _marked =
  /*#__PURE__*/
  _regenerator2.default.mark(range);

  function range(end) {
    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var iter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var i;
    return _regenerator2.default.wrap(function range$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            i = start;

          case 1:
            if (!(i < end)) {
              _context.next = 7;
              break;
            }

            _context.next = 4;
            return i;

          case 4:
            i += iter;
            _context.next = 1;
            break;

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _marked, this);
  }

  function rotate(iterable, delta) {
    var l = iterable.length;
    return Array.from(range(l)).map(function (i) {
      return iterable[(i + delta) % l];
    });
  }

  function classes() {
    for (var _len = arguments.length, classNames = Array(_len), _key = 0; _key < _len; _key++) {
      classNames[_key] = arguments[_key];
    }

    return classNames.filter(Boolean).join(' ');
  }

  var defineProperty = function defineProperty(object, n, start) {
    Object.defineProperty(object, String(n), {
      get: function get() {
        defineProperty(object, n + 1, start);
        return n + start;
      }
    });
    return object;
  };

  function Enum() {
    var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return defineProperty([], 0, start);
  }

  var TargetManager = exports.TargetManager = function () {
    function TargetManager(config) {
      var _this = this;

      _classCallCheck(this, TargetManager);

      this._targetClassNames = new Map();
      this._targetQueries = new Map();
      Object.keys(config).forEach(function (eventType) {
        var classNames = config[eventType];

        _this._targetClassNames.set(eventType, classNames);

        _this._targetQueries.set(eventType, classNames.map(function (className) {
          return '.' + className;
        }).join(', '));
      });
    }

    _createClass(TargetManager, [{
      key: 'getTarget',
      value: function getTarget(event) {
        var eventType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : event.type;
        var target = event.target.closest(this._targetQueries.get(eventType));

        if (target) {
          var className = this._targetClassNames.get(eventType).find(function (targetClassName) {
            return target.classList.contains(targetClassName);
          });

          return {
            target: target,
            className: className
          };
        }

        return {};
      }
    }]);

    return TargetManager;
  }();

  var getDefaultLineHeight = exports.getDefaultLineHeight = function getDefaultLineHeight() {
    var iframe = document.createElement('iframe');
    iframe.src = 'about:blank';
    document.body.appendChild(iframe);
    var iframeDocument = iframe.contentWindow.document;
    var span = iframeDocument.createElement('span');
    iframeDocument.body.appendChild(span);
    span.textContent = 'a';
    var lineHeight = span.offsetHeight;
    iframe.remove();
    return lineHeight;
  };
  /***/

},
/* 3 */

/***/
function (module, exports) {
  module.exports = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
  /***/
},
/* 4 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var WEEK_DAYS_SHORT = exports.WEEK_DAYS_SHORT = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  var WEEK_DAYS_LONG = exports.WEEK_DAYS_LONG = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var MONTH_NAMES = exports.MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var MONTH_NAMES_SHORT = exports.MONTH_NAMES_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  /***/
},
/* 5 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _propTypes = __webpack_require__(3);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _classNames = __webpack_require__(0);

  var _classNames2 = _interopRequireDefault(_classNames);

  var _utils = __webpack_require__(2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var DISPLAY_LIGHT = _classNames2.default.DISPLAY_LIGHT;
  var digits = [63, 6, 91, 79, 102, 109, 125, 7, 127, 111];

  var Digit = function Digit(props) {
    var mask = digits[props.digit];
    var lights = [[0.5, 0, 0], [21, 0.5, 90], [21, 21.5, 90], [0.5, 42, 0], [0, 21.5, 90], [0, 0.5, 90], [0.5, 21, 0]].map(function (_ref, index) {
      var _ref2 = _slicedToArray(_ref, 3),
          x = _ref2[0],
          y = _ref2[1],
          alpha = _ref2[2];

      return _react2.default.createElement('use', {
        key: index,
        className: (0, _utils.classes)(DISPLAY_LIGHT, mask >> index & 1 && 'on'),
        href: '#dtp-digit-light',
        transform: 'translate(' + x + ', ' + y + ') rotate(' + alpha + ')'
      });
    });
    return _react2.default.createElement('g', {
      transform: 'translate(' + (props.pos === 1 ? 4.5 : 32.5) + ', 4.5)'
    }, lights);
  };

  Digit.propTypes = {
    digit: _propTypes2.default.number,
    pos: _propTypes2.default.number
  };
  exports.default = Digit;
  /***/
},
/* 6 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _propTypes = __webpack_require__(3);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _classNames = __webpack_require__(0);

  var _classNames2 = _interopRequireDefault(_classNames);

  var _utils = __webpack_require__(2);

  var _digit = __webpack_require__(5);

  var _digit2 = _interopRequireDefault(_digit);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var TIME_CONTAINER = _classNames2.default.TIME_CONTAINER,
      TIME_CONTROLS = _classNames2.default.TIME_CONTROLS,
      HOVER_SPAN = _classNames2.default.HOVER_SPAN,
      NEXT_HOUR = _classNames2.default.NEXT_HOUR,
      PREVIOUS_HOUR = _classNames2.default.PREVIOUS_HOUR,
      NEXT_MINUTE = _classNames2.default.NEXT_MINUTE,
      PREVIOUS_MINUTE = _classNames2.default.PREVIOUS_MINUTE,
      ICON_EXPAND_LESS = _classNames2.default.ICON_EXPAND_LESS,
      ICON_EXPAND_MORE = _classNames2.default.ICON_EXPAND_MORE,
      MATERIAL_ICONS = _classNames2.default.MATERIAL_ICONS,
      DIGITS = _classNames2.default.DIGITS;

  var Controls = function Controls(_ref) {
    var next = _ref.next,
        previous = _ref.previous;
    return _react2.default.createElement('div', {
      className: TIME_CONTROLS
    }, _react2.default.createElement('span', {
      className: (0, _utils.classes)(HOVER_SPAN, previous)
    }, _react2.default.createElement('i', {
      className: (0, _utils.classes)(MATERIAL_ICONS, ICON_EXPAND_LESS)
    })), _react2.default.createElement('span', {
      className: (0, _utils.classes)(HOVER_SPAN, next)
    }, _react2.default.createElement('i', {
      className: (0, _utils.classes)(MATERIAL_ICONS, ICON_EXPAND_MORE)
    })));
  };

  Controls.propTypes = {
    next: _propTypes2.default.string,
    previous: _propTypes2.default.string
  };

  var Time = function Time(props) {
    var hours = props.hours,
        minutes = props.minutes;
    return _react2.default.createElement('div', {
      className: TIME_CONTAINER
    }, _react2.default.createElement(Controls, {
      previous: PREVIOUS_HOUR,
      next: NEXT_HOUR
    }), _react2.default.createElement('svg', {
      viewBox: '0 0 140 51',
      width: '140px',
      height: '51px',
      className: DIGITS
    }, _react2.default.createElement('defs', null, _react2.default.createElement('path', {
      id: 'dtp-digit-light',
      d: 'M 0 0 L 2.5 2.5 17.5 2.5 20 0 17.5 -2.5 2.5 -2.5 Z'
    })), _react2.default.createElement('g', null, _react2.default.createElement(_digit2.default, {
      digit: hours / 10 | 0,
      pos: 1
    }), _react2.default.createElement(_digit2.default, {
      digit: hours % 10,
      pos: 0
    })), _react2.default.createElement('g', {
      transform: 'translate(70, 2)'
    }, _react2.default.createElement('circle', {
      cx: '0',
      r: '2',
      cy: '13'
    }), _react2.default.createElement('circle', {
      cx: '0',
      r: '2',
      cy: '34'
    })), _react2.default.createElement('g', {
      transform: 'translate(82, 0)'
    }, _react2.default.createElement(_digit2.default, {
      digit: minutes / 10 | 0,
      pos: 1
    }), _react2.default.createElement(_digit2.default, {
      digit: minutes % 10,
      pos: 0
    }))), _react2.default.createElement(Controls, {
      previous: PREVIOUS_MINUTE,
      next: NEXT_MINUTE
    }));
  };

  Time.propTypes = {
    hours: _propTypes2.default.number,
    minutes: _propTypes2.default.number
  };
  exports.default = Time;
  /***/
},
/* 7 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _propTypes = __webpack_require__(3);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _utils = __webpack_require__(2);

  var _classNames = __webpack_require__(0);

  var _classNames2 = _interopRequireDefault(_classNames);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var TABLE = _classNames2.default.TABLE,
      HOVER_SPAN = _classNames2.default.HOVER_SPAN,
      SELECT_YEAR = _classNames2.default.SELECT_YEAR;

  var SelectYear = function SelectYear(_ref) {
    var startYear = _ref.year;
    var rows = [];
    var row = void 0;
    Array.from((0, _utils.range)(startYear + 5, startYear - 4)).forEach(function (year, index) {
      if (index % 3 === 0) {
        rows.push(row = []);
      }

      row.push(_react2.default.createElement('td', {
        key: index,
        className: SELECT_YEAR
      }, _react2.default.createElement('span', {
        className: HOVER_SPAN
      }, year)));
    });
    return _react2.default.createElement('table', {
      className: TABLE
    }, _react2.default.createElement('tbody', null, rows.map(function (tableRow, index) {
      return _react2.default.createElement('tr', {
        key: index
      }, tableRow);
    })));
  };

  SelectYear.propTypes = {
    year: _propTypes2.default.number
  };
  exports.default = SelectYear;
  /***/
},
/* 8 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _ui_strings = __webpack_require__(4);

  var _classNames = __webpack_require__(0);

  var _classNames2 = _interopRequireDefault(_classNames);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var TABLE = _classNames2.default.TABLE,
      HOVER_SPAN = _classNames2.default.HOVER_SPAN,
      SELECT_MONTH = _classNames2.default.SELECT_MONTH;

  var SelectMonth = function SelectMonth() {
    var rows = [];
    var row = void 0;

    _ui_strings.MONTH_NAMES_SHORT.forEach(function (name, index) {
      if (index % 3 === 0) {
        row = [];
        rows.push(row);
      }

      row.push(_react2.default.createElement('td', {
        key: index,
        'data-month': String(index),
        className: SELECT_MONTH
      }, _react2.default.createElement('span', {
        className: HOVER_SPAN
      }, name)));
    });

    return _react2.default.createElement('table', {
      className: TABLE
    }, _react2.default.createElement('tbody', null, rows.map(function (tableRow, index) {
      return _react2.default.createElement('tr', {
        key: index
      }, tableRow);
    })));
  };

  exports.default = SelectMonth;
  /***/
},
/* 9 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getWeekNumber = getWeekNumber;
  exports.getWeeksOfMonth = getWeeksOfMonth;
  /**
   * According to ISO 8601.
   * Week 1 is the week with the first Thursday.
   * Weeks starting on Monday.
   *
   * Code mainly from https://weeknumber.net/how-to/javascript
   *
   * @param {Date} date - A Date instance.
   * @return {number} The week number of the year.
   */

  function getWeekNumber(date) {
    var d = new Date(date.getFullYear(), date.getMonth(), date.getDate()); // Thursday in current week decides the year.
    // Week starts with Monday, getDay must be rotated accordingly.
    // This may change the year.

    d.setDate(d.getDate() + 3 - (d.getDay() + 6) % 7); // January 4 is always in week 1.

    var week1 = new Date(d.getFullYear(), 0, 4); // Adjustment to Thursday in week 1 is not needed, the maximum adjustment
    // would be +|- 3/7, which is less than +|- 0.5 from the exacte week delta.

    return 1 + Math.round((d.getTime() - week1.getTime()) / (7 * 24 * 60 * 60 * 1000));
  }
  /**
   * Gets the weeks of a month as tuples with week number and dates in that
   * week. The days belonging to the previous or next month are filled
   * with 0.
   *
   * E.g. getWeeksOfMonth(2017, 10) returns
   *
   * ```javascript
   *   [
   *     [44, [0, 0, 1, 2, 3, 4, 5]],
   *     [45, [6, 7, 8, 9, 10, 11, 12]],
   *     [46, [13, 14, 15, 16, 17, 18, 19]],
   *     [47, [20, 21, 22, 23, 24, 25, 26]],
   *     [48, [27, 28, 29, 30, 0, 0, 0]]
   *   ]
   * ```
   *
   * @param {number} year - The year.
   * @param {number} month - The month.
   * @param {boolean} [startWithMonday=true] - A boolean flag.
   * @return {Array} List of the week tuples with week number and
   *                 list of week days.
   *
   */


  function getWeeksOfMonth(year, month) {
    var startWithMonday = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var day = 1;
    var date = new Date(year, month, day);
    var startDay = (date.getDay() + (startWithMonday ? 6 : 0)) % 7;
    var dayCount = 28; // eslint-disable-next-line

    while (true) {
      date.setDate(dayCount + 1);

      if (date.getMonth() !== month) {
        break;
      }

      dayCount++;
    }

    var weeks = [];
    var week = [];

    while (startDay-- > 0) {
      week.push(0);
    }

    date.setYear(year);
    date.setMonth(month);

    while (day <= dayCount) {
      date.setDate(day);
      week.push(day++);

      if (week.length === 7) {
        weeks.push([getWeekNumber(date), week]);
        week = [];
      }
    }

    if (week.length) {
      while (week.length < 7) {
        week.push(0);
      }

      weeks.push([getWeekNumber(date), week]);
    }

    return weeks;
  }
  /***/

},
/* 10 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _propTypes = __webpack_require__(3);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _dateExtensions = __webpack_require__(9);

  var _ui_strings = __webpack_require__(4);

  var _utils = __webpack_require__(2);

  var _classNames = __webpack_require__(0);

  var _classNames2 = _interopRequireDefault(_classNames);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var TD_DAY = _classNames2.default.TD_DAY,
      SELECTED_DAY = _classNames2.default.SELECTED_DAY,
      SELECT_DAY = _classNames2.default.SELECT_DAY,
      TH_DAY = _classNames2.default.TH_DAY,
      TABLE = _classNames2.default.TABLE,
      HOVER_SPAN = _classNames2.default.HOVER_SPAN,
      TRANSPARENT = _classNames2.default.TRANSPARENT;

  var Day = function Day(_ref) {
    var day = _ref.day;
    return day < 10 ? [_react2.default.createElement('span', {
      key: '1',
      className: TRANSPARENT
    }, '0'), day] : day;
  };

  Day.propTypes = {
    day: _propTypes2.default.number
  };

  var Week = function Week(_ref2) {
    var year = _ref2.year,
        month = _ref2.month,
        week = _ref2.week,
        selected = _ref2.selected;
    var weekRow = week.map(function (day, index) {
      var current = {
        year: year,
        month: month,
        day: day
      };
      var isSelected = ['year', 'month', 'day'].every(function (prop) {
        return current[prop] === selected[prop];
      });
      return _react2.default.createElement('td', {
        key: index,
        className: (0, _utils.classes)(TD_DAY, day > 0 && SELECT_DAY, isSelected && SELECTED_DAY)
      }, day > 0 && _react2.default.createElement('span', {
        className: (0, _utils.classes)(HOVER_SPAN)
      }, _react2.default.createElement(Day, {
        day: day
      })));
    });
    return _react2.default.createElement('tr', null, weekRow);
  };

  Week.propTypes = {
    year: _propTypes2.default.number,
    month: _propTypes2.default.number,
    week: _propTypes2.default.array,
    selected: _propTypes2.default.object
  };

  var Month = function Month(_ref3) {
    var year = _ref3.year,
        month = _ref3.month,
        selected = _ref3.selected;
    var weeksOfMonth = (0, _dateExtensions.getWeeksOfMonth)(year, month);
    var weekDays = (0, _utils.rotate)(_ui_strings.WEEK_DAYS_SHORT, 1);
    var weekLabels = weekDays.map(function (wday) {
      return _react2.default.createElement('th', {
        key: wday,
        className: TH_DAY
      }, wday);
    });
    var weekRows = weeksOfMonth.map(function (_ref4, index) {
      var _ref5 = _slicedToArray(_ref4, 2),
          week = _ref5[1];

      return _react2.default.createElement(Week, _extends({
        key: index
      }, {
        year: year,
        month: month,
        week: week,
        selected: selected
      }));
    });
    return _react2.default.createElement('table', {
      className: TABLE
    }, _react2.default.createElement('thead', null, _react2.default.createElement('tr', null, weekLabels)), _react2.default.createElement('tbody', null, weekRows));
  };

  Month.propTypes = {
    year: _propTypes2.default.number,
    month: _propTypes2.default.number,
    selected: _propTypes2.default.object
  };
  exports.default = Month;
  /***/
},
/* 11 */

/***/
function (module, exports) {
  module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");
  /***/
},
/* 12 */

/***/
function (module, exports, __webpack_require__) {
  module.exports = __webpack_require__(11);
  /***/
},
/* 13 */

/***/
function (module, exports, __webpack_require__) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _propTypes = __webpack_require__(3);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _ui_strings = __webpack_require__(4);

  var _utils = __webpack_require__(2);

  var _classNames = __webpack_require__(0);

  var _classNames2 = _interopRequireDefault(_classNames);

  var _month = __webpack_require__(10);

  var _month2 = _interopRequireDefault(_month);

  var _selectMonth = __webpack_require__(8);

  var _selectMonth2 = _interopRequireDefault(_selectMonth);

  var _selectYear = __webpack_require__(7);

  var _selectYear2 = _interopRequireDefault(_selectYear);

  var _time = __webpack_require__(6);

  var _time2 = _interopRequireDefault(_time);

  __webpack_require__(21);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var ROOT = _classNames2.default.ROOT,
      HOVER_SPAN = _classNames2.default.HOVER_SPAN,
      SELECTED = _classNames2.default.SELECTED,
      HEADER_ROW = _classNames2.default.HEADER_ROW,
      HEADER_MONTH = _classNames2.default.HEADER_MONTH,
      HEADER_YEAR = _classNames2.default.HEADER_YEAR,
      MAIN_SECTION = _classNames2.default.MAIN_SECTION,
      FOOTER_ROW = _classNames2.default.FOOTER_ROW,
      SELECT_DAY = _classNames2.default.SELECT_DAY,
      SELECT_MONTH = _classNames2.default.SELECT_MONTH,
      SELECT_YEAR = _classNames2.default.SELECT_YEAR,
      SELECT_TIME = _classNames2.default.SELECT_TIME,
      SELECT_CALENDAR = _classNames2.default.SELECT_CALENDAR,
      SELECT_TODAY = _classNames2.default.SELECT_TODAY,
      PREVIOUS_MONTH = _classNames2.default.PREVIOUS_MONTH,
      PREVIOUS_HOUR = _classNames2.default.PREVIOUS_HOUR,
      PREVIOUS_MINUTE = _classNames2.default.PREVIOUS_MINUTE,
      NEXT_MONTH = _classNames2.default.NEXT_MONTH,
      NEXT_HOUR = _classNames2.default.NEXT_HOUR,
      NEXT_MINUTE = _classNames2.default.NEXT_MINUTE,
      CANCEL_CHANGES = _classNames2.default.CANCEL_CHANGES,
      VIEW_DAYS = _classNames2.default.VIEW_DAYS,
      VIEW_MONTHS = _classNames2.default.VIEW_MONTHS,
      VIEW_YEARS = _classNames2.default.VIEW_YEARS,
      VIEW_TIME = _classNames2.default.VIEW_TIME,
      FILLER = _classNames2.default.FILLER,
      ICON_CHEVRON_LEFT = _classNames2.default.ICON_CHEVRON_LEFT,
      ICON_CHEVRON_RIGHT = _classNames2.default.ICON_CHEVRON_RIGHT,
      ICON_EVENT = _classNames2.default.ICON_EVENT,
      ICON_SCHEDULE = _classNames2.default.ICON_SCHEDULE,
      ICON_ADJUST = _classNames2.default.ICON_ADJUST,
      ICON_CANCEL = _classNames2.default.ICON_CANCEL,
      MATERIAL_ICONS = _classNames2.default.MATERIAL_ICONS;
  var targetManager = new _utils.TargetManager({
    click: [SELECT_DAY, SELECT_MONTH, SELECT_YEAR, SELECT_TIME, HEADER_MONTH, HEADER_YEAR, NEXT_MONTH, NEXT_HOUR, NEXT_MINUTE, PREVIOUS_MONTH, PREVIOUS_HOUR, PREVIOUS_MINUTE, SELECT_CALENDAR, SELECT_TODAY, CANCEL_CHANGES]
  });

  var _Enum = (0, _utils.Enum)(),
      _Enum2 = _slicedToArray(_Enum, 4),
      DAYS = _Enum2[0],
      MONTHS = _Enum2[1],
      YEARS = _Enum2[2],
      TIME = _Enum2[3];

  var modeViewsMap = new Map([[DAYS, VIEW_DAYS], [MONTHS, VIEW_MONTHS], [YEARS, VIEW_YEARS], [TIME, VIEW_TIME]]);
  var TRACK_PAD_SCROLL_THRESHOLD = 25;

  var getLineHeight = function () {
    var lineHeight = 0;
    return function () {
      if (lineHeight === 0) {
        lineHeight = (0, _utils.getDefaultLineHeight)() || 18;
      }

      return lineHeight;
    };
  }();

  var DateTimePipcker = function (_React$Component) {
    _inherits(DateTimePipcker, _React$Component);

    function DateTimePipcker(props) {
      _classCallCheck(this, DateTimePipcker);

      var _this = _possibleConstructorReturn(this, (DateTimePipcker.__proto__ || Object.getPrototypeOf(DateTimePipcker)).call(this, props));

      _this.state = {
        mode: DAYS,
        deltaYear: 0,
        startDate: new Date(_this.props.date),
        selectedDate: _this.props.date.getDate()
      };
      _this.onClick = _this.onClick.bind(_this);
      _this.onWheel = _this.onWheel.bind(_this);
      _this._pickerBody = null;
      _this._deltaY = 0;
      return _this;
    }

    _createClass(DateTimePipcker, [{
      key: 'onClick',
      value: function onClick(event) {
        var _targetManager$getTar = targetManager.getTarget(event),
            target = _targetManager$getTar.target,
            className = _targetManager$getTar.className;

        switch (className) {
          case SELECT_DAY:
            {
              var date = new Date(this.props.date);
              date.setDate(Number.parseInt(target.textContent, 10));
              this.setState({
                selectedDate: date.getDate()
              });
              this.props.onChange(date);
              break;
            }

          case NEXT_MONTH:
          case PREVIOUS_MONTH:
            {
              switch (this.state.mode) {
                case DAYS:
                  {
                    var delta = className === PREVIOUS_MONTH ? -1 : 1;

                    var _date = new Date(this.props.date);

                    this.setMonth(_date, _date.getMonth() + delta);
                    this.props.onChange(_date);
                    break;
                  }

                case YEARS:
                  {
                    var _delta = className === PREVIOUS_MONTH ? -9 : 9;

                    this.setState(function (prevState) {
                      return {
                        deltaYear: prevState.deltaYear + _delta
                      };
                    });
                    break;
                  }

                case TIME:
                  {
                    var _delta2 = className === PREVIOUS_MONTH ? -15 : 15;

                    var _date2 = new Date(this.props.date);

                    var minutes = _date2.getMinutes();

                    if (minutes % 15 !== 0) {
                      minutes = Math.round(minutes / 15) * 15;
                    }

                    _date2.setMinutes(minutes + _delta2);

                    this.props.onChange(_date2);
                    break;
                  }

                default:
              }

              break;
            }

          case HEADER_MONTH:
            this.setState(function (prevState) {
              return {
                mode: prevState.mode === MONTHS ? DAYS : MONTHS
              };
            });
            break;

          case HEADER_YEAR:
            this.setState(function (prevState) {
              return {
                mode: prevState.mode === YEARS ? DAYS : YEARS
              };
            });
            break;

          case SELECT_MONTH:
            {
              var _date3 = new Date(this.props.date);

              this.setMonth(_date3, Number.parseInt(target.dataset.month, 10));
              this.setState({
                mode: DAYS
              });
              this.props.onChange(_date3);
              break;
            }

          case SELECT_TIME:
            this.setState(function (prevState) {
              return {
                mode: prevState.mode === TIME ? DAYS : TIME
              };
            });
            break;

          case SELECT_YEAR:
            {
              var _date4 = new Date(this.props.date);

              this.setYear(_date4, Number.parseInt(target.textContent, 10));
              this.setState({
                mode: DAYS,
                deltaYear: 0
              });
              this.props.onChange(_date4);
              break;
            }

          case NEXT_HOUR:
          case PREVIOUS_HOUR:
            {
              var _delta3 = className === PREVIOUS_HOUR ? -1 : 1;

              var _date5 = new Date(this.props.date);

              _date5.setHours(_date5.getHours() + _delta3);

              this.props.onChange(_date5);
              break;
            }

          case NEXT_MINUTE:
          case PREVIOUS_MINUTE:
            {
              var _delta4 = className === PREVIOUS_MINUTE ? -1 : 1;

              var _date6 = new Date(this.props.date);

              _date6.setMinutes(_date6.getMinutes() + _delta4);

              this.props.onChange(_date6);
              break;
            }

          case SELECT_CALENDAR:
            this.setState({
              mode: DAYS
            });
            break;

          case SELECT_TODAY:
            this.props.onChange(new Date());
            break;

          case CANCEL_CHANGES:
            this.props.onChange(this.state.startDate);
            break;

          default:
        }
      }
    }, {
      key: 'onWheel',
      value: function onWheel(event) {
        this._deltaY += event.deltaY * (event.deltaMode === WheelEvent.DOM_DELTA_LINE ? getLineHeight() : 1);

        if (Math.abs(this._deltaY) < TRACK_PAD_SCROLL_THRESHOLD) {
          return;
        }

        this._deltaY = 0;

        switch (this.state.mode) {
          case YEARS:
            {
              var delta = event.deltaY > 0 ? 3 : -3;
              this.setState(function (prevState) {
                return {
                  deltaYear: prevState.deltaYear + delta
                };
              });
              break;
            }

          case TIME:
            {
              var box = this._pickerBody.getBoundingClientRect();

              var _delta5 = event.deltaY > 0 ? 1 : -1;

              var date = new Date(this.props.date);

              if (event.clientX < box.left + box.width / 2) {
                date.setHours(date.getHours() + _delta5);
              } else {
                date.setMinutes(date.getMinutes() + _delta5);
              }

              this.props.onChange(date);
              break;
            }

          default:
        }
      }
    }, {
      key: 'setYear',
      value: function setYear(date, year) {
        var month = date.getMonth();
        date.setFullYear(year);
        this.retainMonthAndSelectedDate(date, month);
      }
    }, {
      key: 'setMonth',
      value: function setMonth(date, month) {
        date.setMonth(month);
        this.retainMonthAndSelectedDate(date, month);
      }
    }, {
      key: 'retainMonthAndSelectedDate',
      value: function retainMonthAndSelectedDate(date, month) {
        while (month < 0) {
          month = (month + 12) % 12;
        }

        if (date.getMonth() > month) {
          while (date.getMonth() > month) {
            date.setDate(date.getDate() - 1);
          }
        } else if (date.getDate() < this.state.selectedDate) {
          var testDate = new Date(date);

          while (date.getDate() < this.state.selectedDate) {
            testDate.setDate(date.getDate() + 1);

            if (date.getMonth() === testDate.getMonth()) {
              date.setDate(date.getDate() + 1);
            } else {
              break;
            }
          }
        }
      }
    }, {
      key: 'getBody',
      value: function getBody(year, month, selected) {
        switch (this.state.mode) {
          case DAYS:
            return _react2.default.createElement(_month2.default, {
              year: year,
              month: month,
              selected: selected
            });

          case MONTHS:
            return _react2.default.createElement(_selectMonth2.default, null);

          case YEARS:
            return _react2.default.createElement(_selectYear2.default, {
              year: year + this.state.deltaYear
            });

          case TIME:
            return _react2.default.createElement(_time2.default, {
              hours: this.props.date.getHours(),
              minutes: this.props.date.getMinutes()
            });

          default:
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var date = this.props.date;
        var year = date.getFullYear();
        var month = date.getMonth();
        var selected = {
          year: this.props.date.getFullYear(),
          month: this.props.date.getMonth(),
          day: this.props.date.getDate()
        };
        return _react2.default.createElement('div', {
          className: ROOT,
          onClick: this.onClick,
          onWheel: this.onWheel
        }, _react2.default.createElement('div', {
          className: HEADER_ROW
        }, _react2.default.createElement('span', {
          className: (0, _utils.classes)(HOVER_SPAN, PREVIOUS_MONTH)
        }, _react2.default.createElement('i', {
          className: (0, _utils.classes)(MATERIAL_ICONS, ICON_CHEVRON_LEFT)
        })), _react2.default.createElement('span', {
          className: FILLER
        }), _react2.default.createElement('span', {
          className: (0, _utils.classes)(HOVER_SPAN, HEADER_MONTH, this.state.mode === MONTHS && SELECTED)
        }, _ui_strings.MONTH_NAMES[month]), _react2.default.createElement('span', {
          className: (0, _utils.classes)(HOVER_SPAN, HEADER_YEAR, this.state.mode === YEARS && SELECTED)
        }, year), _react2.default.createElement('span', {
          className: FILLER
        }), _react2.default.createElement('span', {
          className: (0, _utils.classes)(HOVER_SPAN, NEXT_MONTH)
        }, _react2.default.createElement('i', {
          className: (0, _utils.classes)(MATERIAL_ICONS, ICON_CHEVRON_RIGHT)
        }))), _react2.default.createElement('div', {
          ref: function ref(div) {
            _this2._pickerBody = div;
          },
          className: (0, _utils.classes)(MAIN_SECTION, modeViewsMap.get(this.state.mode))
        }, this.getBody(year, month, selected)), _react2.default.createElement('div', {
          className: FOOTER_ROW
        }, _react2.default.createElement('span', {
          className: (0, _utils.classes)(HOVER_SPAN, SELECT_TIME)
        }, _react2.default.createElement('i', {
          className: (0, _utils.classes)(MATERIAL_ICONS, this.state.mode === TIME ? ICON_EVENT : ICON_SCHEDULE)
        })), _react2.default.createElement('span', {
          className: (0, _utils.classes)(HOVER_SPAN, SELECT_TODAY)
        }, _react2.default.createElement('i', {
          className: (0, _utils.classes)(MATERIAL_ICONS, ICON_ADJUST)
        })), _react2.default.createElement('span', {
          className: (0, _utils.classes)(HOVER_SPAN, CANCEL_CHANGES)
        }, _react2.default.createElement('i', {
          className: (0, _utils.classes)(MATERIAL_ICONS, ICON_CANCEL)
        }))));
      }
    }]);

    return DateTimePipcker;
  }(_react2.default.Component);

  DateTimePipcker.propTypes = {
    date: _propTypes2.default.instanceOf(Date),
    onChange: _propTypes2.default.func
  };
  exports.default = DateTimePipcker;
  /***/
},,,,,,,,
/* 14 */

/* 15 */

/* 16 */

/* 17 */

/* 18 */

/* 19 */

/* 20 */

/* 21 */

/***/
function (module, exports) {// removed by extract-text-webpack-plugin

  /***/
}]);

/***/ }),

/***/ "./node_modules/react-date-and-time-picker/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-date-and-time-picker/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./dist/main.js */ "./node_modules/react-date-and-time-picker/dist/main.js");
}

/***/ }),

/***/ "./node_modules/react-icons-weather/lib/css/weather-icons.css":
/*!********************************************************************!*\
  !*** ./node_modules/react-icons-weather/lib/css/weather-icons.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader??ref--6-oneOf-3-1!../../../postcss-loader/src??postcss!./weather-icons.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-icons-weather/lib/css/weather-icons.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../css-loader??ref--6-oneOf-3-1!../../../postcss-loader/src??postcss!./weather-icons.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-icons-weather/lib/css/weather-icons.css", function() {
		var newContent = __webpack_require__(/*! !../../../css-loader??ref--6-oneOf-3-1!../../../postcss-loader/src??postcss!./weather-icons.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/react-icons-weather/lib/css/weather-icons.css");

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

/***/ "./node_modules/react-icons-weather/lib/font/weathericons-regular-webfont.eot":
/*!************************************************************************************!*\
  !*** ./node_modules/react-icons-weather/lib/font/weathericons-regular-webfont.eot ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/weathericons-regular-webfont.4b658767.eot";

/***/ }),

/***/ "./node_modules/react-icons-weather/lib/font/weathericons-regular-webfont.svg":
/*!************************************************************************************!*\
  !*** ./node_modules/react-icons-weather/lib/font/weathericons-regular-webfont.svg ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/weathericons-regular-webfont.ecaf8b48.svg";

/***/ }),

/***/ "./node_modules/react-icons-weather/lib/font/weathericons-regular-webfont.ttf":
/*!************************************************************************************!*\
  !*** ./node_modules/react-icons-weather/lib/font/weathericons-regular-webfont.ttf ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/weathericons-regular-webfont.4618f0de.ttf";

/***/ }),

/***/ "./node_modules/react-icons-weather/lib/font/weathericons-regular-webfont.woff":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-icons-weather/lib/font/weathericons-regular-webfont.woff ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/weathericons-regular-webfont.8cac70eb.woff";

/***/ }),

/***/ "./node_modules/react-icons-weather/lib/font/weathericons-regular-webfont.woff2":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-icons-weather/lib/font/weathericons-regular-webfont.woff2 ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/weathericons-regular-webfont.1cd48d78.woff2";

/***/ }),

/***/ "./node_modules/react-icons-weather/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-icons-weather/lib/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ./css/weather-icons.css */ "./node_modules/react-icons-weather/lib/css/weather-icons.css");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-icons-weather/lib/utils/index.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}
/**
* @param {string} name the name of weather api (open weather map, yahoo and dark sky)
* @param {string} iconId Id based on weather condition
* @param {string} flip
* @param {string} fixedWidth
* @param {string} rotate
* @module WeatherIcon
* @type {ReactClass}
**/


var WeatherIcon = function WeatherIcon(props) {
  var icon;

  var name = props.name,
      className = props.className,
      rotate = props.rotate,
      fixedWidth = props.fixedWidth,
      iconId = props.iconId,
      flip = props.flip,
      other = _objectWithoutProperties(props, ['name', 'className', 'rotate', 'fixedWidth', 'iconId', 'flip']);

  icon = _utils2.default.convertCode(name, iconId);
  icon += flip ? ' wi-flip-' + flip : '';
  icon += rotate ? ' wi-rotate-' + rotate : '';
  icon += fixedWidth ? ' wi-fw' : '';
  icon += className ? ' ' + className : '';
  return _react2.default.createElement('i', _extends({}, other, {
    name: name,
    className: icon
  }));
};

WeatherIcon.propTypes = {
  name: _propTypes2.default.oneOf(['owm', 'darksky', 'yahoo']).isRequired,
  className: _propTypes2.default.string,
  iconId: _propTypes2.default.string.isRequired,
  flip: _propTypes2.default.oneOf(['horizontal', 'vertical']),
  fixedWidth: _propTypes2.default.bool,
  rotate: _propTypes2.default.oneOf(['90', '180', '270'])
};
exports.default = WeatherIcon;

/***/ }),

/***/ "./node_modules/react-icons-weather/lib/utils/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-icons-weather/lib/utils/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _maps = __webpack_require__(/*! ./maps */ "./node_modules/react-icons-weather/lib/utils/maps/index.js");

var helper = function () {
  var convertDarkSkyCode = function convertDarkSkyCode(id) {
    if (_maps.darkSkyIcons[id]) {
      return _maps.darkSkyIcons[id].icon;
    }

    throw new Error('ID passed to component invalid');
  };

  var convertYahooCode = function convertYahooCode(id) {
    if (_maps.yahooIcons[id]) {
      return _maps.yahooIcons[id].icon;
    }

    throw new Error('ID passed to component invalid');
  }; // openweather


  var convertOWMCode = function convertOWMCode(id) {
    if (_maps.owmIcons[id]) {
      var prefix = 'wi wi-';
      var icon = _maps.owmIcons[id].icon; // If we are not in the ranges mentioned above, add a day/night prefix.

      if (!(id > 699 && id < 800) && !(id > 899 && id < 1000)) {
        icon = 'day-' + icon;
      }

      icon = prefix + icon;
      return icon;
    }

    throw new Error('ID passed to component invalid');
  };

  var convertCode = function convertCode(name, id) {
    switch (name) {
      case 'owm':
        return convertOWMCode(id);

      case 'darksky':
        return convertDarkSkyCode(id);

      case 'yahoo':
        return convertYahooCode(id);

      default:
        throw new Error('Name passed to component invalid');
    }
  };

  return {
    convertCode: convertCode
  };
}();

exports.default = helper;

/***/ }),

/***/ "./node_modules/react-icons-weather/lib/utils/maps/darksky-weather-icons.json":
/*!************************************************************************************!*\
  !*** ./node_modules/react-icons-weather/lib/utils/maps/darksky-weather-icons.json ***!
  \************************************************************************************/
/*! exports provided: clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, partly-cloudy-night, hail, thunderstorm, tornado, default */
/***/ (function(module) {

module.exports = {"clear-day":{"label":"clear-day","icon":"wi wi-forecast-io-clear-day"},"clear-night":{"label":"clear-night","icon":"wi wi-forecast-io-clear-night"},"rain":{"label":"rain","icon":"wi wi-forecast-io-rain"},"snow":{"label":"snow","icon":"wi wi-forecast-io-snow"},"sleet":{"label":"sleet","icon":"wi wi-forecast-io-sleet"},"wind":{"label":" strong-wind","icon":"wi wi-forecast-io-wind"},"fog":{"label":"fog","icon":"wi wi-forecast-io-fog"},"cloudy":{"label":"cloudy","icon":"wi wi-forecast-io-cloudy"},"partly-cloudy-day":{"label":"partly-cloudy-day","icon":"wi wi-forecast-io-partly-cloudy-day"},"partly-cloudy-night":{"label":"partly-cloudy-night","icon":"wi wi-forecast-io-partly-cloudy-night"},"hail":{"label":"hail","icon":"wi wi-forecast-io-hail"},"thunderstorm":{"label":"thunderstorm","icon":"wi wi-forecast-io-thunderstorm"},"tornado":{"label":"tornado","icon":"wi wi-forecast-io-tornado"}};

/***/ }),

/***/ "./node_modules/react-icons-weather/lib/utils/maps/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-icons-weather/lib/utils/maps/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.darkSkyIcons = exports.yahooIcons = exports.owmIcons = undefined;

var _owmWeatherIcons = __webpack_require__(/*! ./owm-weather-icons.json */ "./node_modules/react-icons-weather/lib/utils/maps/owm-weather-icons.json");

var owmIcons = _interopRequireWildcard(_owmWeatherIcons);

var _yahooWeatherIcons = __webpack_require__(/*! ./yahoo-weather-icons.json */ "./node_modules/react-icons-weather/lib/utils/maps/yahoo-weather-icons.json");

var yahooIcons = _interopRequireWildcard(_yahooWeatherIcons);

var _darkskyWeatherIcons = __webpack_require__(/*! ./darksky-weather-icons.json */ "./node_modules/react-icons-weather/lib/utils/maps/darksky-weather-icons.json");

var darkSkyIcons = _interopRequireWildcard(_darkskyWeatherIcons);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

exports.owmIcons = owmIcons;
exports.yahooIcons = yahooIcons;
exports.darkSkyIcons = darkSkyIcons;

/***/ }),

/***/ "./node_modules/react-icons-weather/lib/utils/maps/owm-weather-icons.json":
/*!********************************************************************************!*\
  !*** ./node_modules/react-icons-weather/lib/utils/maps/owm-weather-icons.json ***!
  \********************************************************************************/
/*! exports provided: 200, 201, 202, 210, 211, 212, 221, 230, 231, 232, 300, 301, 302, 310, 311, 312, 313, 314, 321, 500, 501, 502, 503, 504, 511, 520, 521, 522, 531, 600, 601, 602, 611, 612, 615, 616, 620, 621, 622, 701, 711, 721, 731, 741, 751, 761, 762, 771, 781, 800, 801, 802, 803, 804, 900, 901, 902, 903, 904, 905, 906, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, default */
/***/ (function(module) {

module.exports = {"200":{"label":"thunderstorm with light rain","icon":"storm-showers"},"201":{"label":"thunderstorm with rain","icon":"storm-showers"},"202":{"label":"thunderstorm with heavy rain","icon":"storm-showers"},"210":{"label":"light thunderstorm","icon":"storm-showers"},"211":{"label":"thunderstorm","icon":"thunderstorm"},"212":{"label":"heavy thunderstorm","icon":"thunderstorm"},"221":{"label":"ragged thunderstorm","icon":"thunderstorm"},"230":{"label":"thunderstorm with light drizzle","icon":"storm-showers"},"231":{"label":"thunderstorm with drizzle","icon":"storm-showers"},"232":{"label":"thunderstorm with heavy drizzle","icon":"storm-showers"},"300":{"label":"light intensity drizzle","icon":"sprinkle"},"301":{"label":"drizzle","icon":"sprinkle"},"302":{"label":"heavy intensity drizzle","icon":"sprinkle"},"310":{"label":"light intensity drizzle rain","icon":"sprinkle"},"311":{"label":"drizzle rain","icon":"sprinkle"},"312":{"label":"heavy intensity drizzle rain","icon":"sprinkle"},"313":{"label":"shower rain and drizzle","icon":"sprinkle"},"314":{"label":"heavy shower rain and drizzle","icon":"sprinkle"},"321":{"label":"shower drizzle","icon":"sprinkle"},"500":{"label":"light rain","icon":"rain"},"501":{"label":"moderate rain","icon":"rain"},"502":{"label":"heavy intensity rain","icon":"rain"},"503":{"label":"very heavy rain","icon":"rain"},"504":{"label":"extreme rain","icon":"rain"},"511":{"label":"freezing rain","icon":"rain-mix"},"520":{"label":"light intensity shower rain","icon":"showers"},"521":{"label":"shower rain","icon":"showers"},"522":{"label":"heavy intensity shower rain","icon":"showers"},"531":{"label":"ragged shower rain","icon":"showers"},"600":{"label":"light snow","icon":"snow"},"601":{"label":"snow","icon":"snow"},"602":{"label":"heavy snow","icon":"snow"},"611":{"label":"sleet","icon":"sleet"},"612":{"label":"shower sleet","icon":"sleet"},"615":{"label":"light rain and snow","icon":"rain-mix"},"616":{"label":"rain and snow","icon":"rain-mix"},"620":{"label":"light shower snow","icon":"rain-mix"},"621":{"label":"shower snow","icon":"rain-mix"},"622":{"label":"heavy shower snow","icon":"rain-mix"},"701":{"label":"mist","icon":"sprinkle"},"711":{"label":"smoke","icon":"smoke"},"721":{"label":"haze","icon":"day-haze"},"731":{"label":"sand, dust whirls","icon":"cloudy-gusts"},"741":{"label":"fog","icon":"fog"},"751":{"label":"sand","icon":"cloudy-gusts"},"761":{"label":"dust","icon":"dust"},"762":{"label":"volcanic ash","icon":"smog"},"771":{"label":"squalls","icon":"day-windy"},"781":{"label":"tornado","icon":"tornado"},"800":{"label":"clear sky","icon":"sunny"},"801":{"label":"few clouds","icon":"cloudy"},"802":{"label":"scattered clouds","icon":"cloudy"},"803":{"label":"broken clouds","icon":"cloudy"},"804":{"label":"overcast clouds","icon":"cloudy"},"900":{"label":"tornado","icon":"tornado"},"901":{"label":"tropical storm","icon":"hurricane"},"902":{"label":"hurricane","icon":"hurricane"},"903":{"label":"cold","icon":"snowflake-cold"},"904":{"label":"hot","icon":"hot"},"905":{"label":"windy","icon":"windy"},"906":{"label":"hail","icon":"hail"},"951":{"label":"calm","icon":"sunny"},"952":{"label":"light breeze","icon":"cloudy-gusts"},"953":{"label":"gentle breeze","icon":"cloudy-gusts"},"954":{"label":"moderate breeze","icon":"cloudy-gusts"},"955":{"label":"fresh breeze","icon":"cloudy-gusts"},"956":{"label":"strong breeze","icon":"cloudy-gusts"},"957":{"label":"high wind, near gale","icon":"cloudy-gusts"},"958":{"label":"gale","icon":"cloudy-gusts"},"959":{"label":"severe gale","icon":"cloudy-gusts"},"960":{"label":"storm","icon":"thunderstorm"},"961":{"label":"violent storm","icon":"thunderstorm"},"962":{"label":"hurricane","icon":"cloudy-gusts"}};

/***/ }),

/***/ "./node_modules/react-icons-weather/lib/utils/maps/yahoo-weather-icons.json":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-icons-weather/lib/utils/maps/yahoo-weather-icons.json ***!
  \**********************************************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 3200, default */
/***/ (function(module) {

module.exports = {"0":{"label":"tornado","icon":"wi wi-yahoo-0"},"1":{"label":"tropical storm","icon":"wi wi-yahoo-1"},"2":{"label":"hurricane","icon":"wi wi-yahoo-2"},"3":{"label":"severe thunderstorms","icon":"wi wi-yahoo-3"},"4":{"label":"thunderstorms","icon":"wi wi-yahoo-4"},"5":{"label":"mixed rain and snow","icon":"wi wi-yahoo-5"},"6":{"label":"mixed rain and sleet","icon":"wi wi-yahoo-6"},"7":{"label":"mixed snow and sleet","icon":"wi wi-yahoo-7"},"8":{"label":"freezing drizzle","icon":"wi wi-yahoo-8"},"9":{"label":"drizzle","icon":"wi wi-yahoo-9"},"10":{"label":"freezing rain","icon":"wi wi-yahoo-10"},"11":{"label":"showers","icon":"wi wi-yahoo-11"},"12":{"label":"showers","icon":"wi wi-yahoo-12"},"13":{"label":"snow flurries","icon":"wi wi-yahoo-13"},"14":{"label":"light snow showers","icon":"wi wi-yahoo-14"},"15":{"label":"blowing snow","icon":"wi wi-yahoo-15"},"16":{"label":"snow","icon":"wi wi-yahoo-16"},"17":{"label":"hail","icon":"wi wi-yahoo-17"},"18":{"label":"sleet","icon":"wi wi-yahoo-18"},"19":{"label":"dust","icon":"wi wi-yahoo-19"},"20":{"label":"foggy","icon":"wi wi-yahoo-20"},"21":{"label":"haze","icon":"wi wi-yahoo-21"},"22":{"label":"smoky","icon":"wi wi-yahoo-22"},"23":{"label":"blustery","icon":"wi wi-yahoo-23"},"24":{"label":"windy","icon":"wi wi-yahoo-24"},"25":{"label":"coldy","icon":"wi wi-yahoo-25"},"26":{"label":"cloudy","icon":"wi wi-yahoo-26"},"27":{"label":"mostly cloudy (night)","icon":"wi wi-yahoo-27"},"28":{"label":"mostly cloudy (day)","icon":"wi wi-yahoo-28"},"29":{"label":"partly cloudy (night)","icon":"wi wi-yahoo-29"},"30":{"label":"partly cloudy (day)","icon":"wi wi-yahoo-30"},"31":{"label":"clear (night)","icon":"wi wi-yahoo-31"},"32":{"label":"sunny","icon":"wi wi-yahoo-32"},"33":{"label":"fair (night)","icon":"wi wi-yahoo-33"},"34":{"label":"fair (day)","icon":"wi wi-yahoo-34"},"35":{"label":"mixed rain and hail","icon":"wi wi-yahoo-35"},"36":{"label":"hot","icon":"wi wi-yahoo-36"},"37":{"label":"isolated thunderstorms","icon":"wi wi-yahoo-37"},"38":{"label":"scattered thunderstorms","icon":"wi wi-yahoo-38"},"39":{"label":"scattered thunderstorms","icon":"wi wi-yahoo-39"},"40":{"label":"scattered showers","icon":"wi wi-yahoo-40"},"41":{"label":"heavy snow","icon":"wi wi-yahoo-41"},"42":{"label":"scattered snow showers","icon":"wi wi-yahoo-42"},"43":{"label":"heavy snow","icon":"wi wi-yahoo-43"},"44":{"label":"partly cloudy","icon":"wi wi-yahoo-44"},"45":{"label":"thundershowers","icon":"wi wi-yahoo-45"},"46":{"label":"snow showers","icon":"wi wi-yahoo-46"},"47":{"label":"isolated thundershowers","icon":"wi wi-yahoo-47"},"3200":{"label":"not available","icon":"wi wi-yahoo-3200"}};

/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);

  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  } // Binding "this" is important for shallow renderer support.


  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
} // React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.


componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (typeof Component.getDerivedStateFromProps !== 'function' && typeof prototype.getSnapshotBeforeUpdate !== 'function') {
    return Component;
  } // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.


  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;

  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }

  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }

  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }

  if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
    var componentName = Component.displayName || Component.name;
    var newApiName = typeof Component.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';
    throw Error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + componentName + ' uses ' + newApiName + ' but also contains the following legacy lifecycles:' + (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') + (foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '') + (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') + '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' + 'https://fb.me/react-async-component-lifecycle-hooks');
  } // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.


  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  } // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.


  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error('Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype');
    }

    prototype.componentWillUpdate = componentWillUpdate;
    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}



/***/ }),

/***/ "./node_modules/react-onclickoutside/dist/react-onclickoutside.es.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-onclickoutside/dist/react-onclickoutside.es.js ***!
  \***************************************************************************/
/*! exports provided: IGNORE_CLASS_NAME, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IGNORE_CLASS_NAME", function() { return IGNORE_CLASS_NAME; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);



function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
/**
 * Check whether some DOM node is our Component's node.
 */


function isNodeFound(current, componentNode, ignoreClass) {
  if (current === componentNode) {
    return true;
  } // SVG <use/> elements do not technically reside in the rendered DOM, so
  // they do not have classList directly, but they offer a link to their
  // corresponding element, which can have classList. This extra check is for
  // that case.
  // See: http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGUseElement
  // Discussion: https://github.com/Pomax/react-onclickoutside/pull/17


  if (current.correspondingElement) {
    return current.correspondingElement.classList.contains(ignoreClass);
  }

  return current.classList.contains(ignoreClass);
}
/**
 * Try to find our node in a hierarchy of nodes, returning the document
 * node as highest node if our node is not found in the path up.
 */


function findHighest(current, componentNode, ignoreClass) {
  if (current === componentNode) {
    return true;
  } // If source=local then this event came from 'somewhere'
  // inside and should be ignored. We could handle this with
  // a layered approach, too, but that requires going back to
  // thinking in terms of Dom node nesting, running counter
  // to React's 'you shouldn't care about the DOM' philosophy.


  while (current.parentNode) {
    if (isNodeFound(current, componentNode, ignoreClass)) {
      return true;
    }

    current = current.parentNode;
  }

  return current;
}
/**
 * Check if the browser scrollbar was clicked
 */


function clickedScrollbar(evt) {
  return document.documentElement.clientWidth <= evt.clientX || document.documentElement.clientHeight <= evt.clientY;
} // ideally will get replaced with external dep
// when rafrex/detect-passive-events#4 and rafrex/detect-passive-events#5 get merged in


var testPassiveEventSupport = function testPassiveEventSupport() {
  if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') {
    return;
  }

  var passive = false;
  var options = Object.defineProperty({}, 'passive', {
    get: function get() {
      passive = true;
    }
  });

  var noop = function noop() {};

  window.addEventListener('testPassiveEventSupport', noop, options);
  window.removeEventListener('testPassiveEventSupport', noop, options);
  return passive;
};

function autoInc(seed) {
  if (seed === void 0) {
    seed = 0;
  }

  return function () {
    return ++seed;
  };
}

var uid = autoInc();
var passiveEventSupport;
var handlersMap = {};
var enabledInstances = {};
var touchEvents = ['touchstart', 'touchmove'];
var IGNORE_CLASS_NAME = 'ignore-react-onclickoutside';
/**
 * Options for addEventHandler and removeEventHandler
 */

function getEventHandlerOptions(instance, eventName) {
  var handlerOptions = null;
  var isTouchEvent = touchEvents.indexOf(eventName) !== -1;

  if (isTouchEvent && passiveEventSupport) {
    handlerOptions = {
      passive: !instance.props.preventDefault
    };
  }

  return handlerOptions;
}
/**
 * This function generates the HOC function that you'll use
 * in order to impart onOutsideClick listening to an
 * arbitrary component. It gets called at the end of the
 * bootstrapping code to yield an instance of the
 * onClickOutsideHOC function defined inside setupHOC().
 */


function onClickOutsideHOC(WrappedComponent, config) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(onClickOutside, _Component);

    function onClickOutside(props) {
      var _this;

      _this = _Component.call(this, props) || this;

      _this.__outsideClickHandler = function (event) {
        if (typeof _this.__clickOutsideHandlerProp === 'function') {
          _this.__clickOutsideHandlerProp(event);

          return;
        }

        var instance = _this.getInstance();

        if (typeof instance.props.handleClickOutside === 'function') {
          instance.props.handleClickOutside(event);
          return;
        }

        if (typeof instance.handleClickOutside === 'function') {
          instance.handleClickOutside(event);
          return;
        }

        throw new Error('WrappedComponent lacks a handleClickOutside(event) function for processing outside click events.');
      };

      _this.enableOnClickOutside = function () {
        if (typeof document === 'undefined' || enabledInstances[_this._uid]) {
          return;
        }

        if (typeof passiveEventSupport === 'undefined') {
          passiveEventSupport = testPassiveEventSupport();
        }

        enabledInstances[_this._uid] = true;
        var events = _this.props.eventTypes;

        if (!events.forEach) {
          events = [events];
        }

        handlersMap[_this._uid] = function (event) {
          if (_this.props.disableOnClickOutside) return;
          if (_this.componentNode === null) return;

          if (_this.props.preventDefault) {
            event.preventDefault();
          }

          if (_this.props.stopPropagation) {
            event.stopPropagation();
          }

          if (_this.props.excludeScrollbar && clickedScrollbar(event)) return;
          var current = event.target;

          if (findHighest(current, _this.componentNode, _this.props.outsideClickIgnoreClass) !== document) {
            return;
          }

          _this.__outsideClickHandler(event);
        };

        events.forEach(function (eventName) {
          document.addEventListener(eventName, handlersMap[_this._uid], getEventHandlerOptions(_this, eventName));
        });
      };

      _this.disableOnClickOutside = function () {
        delete enabledInstances[_this._uid];
        var fn = handlersMap[_this._uid];

        if (fn && typeof document !== 'undefined') {
          var events = _this.props.eventTypes;

          if (!events.forEach) {
            events = [events];
          }

          events.forEach(function (eventName) {
            return document.removeEventListener(eventName, fn, getEventHandlerOptions(_this, eventName));
          });
          delete handlersMap[_this._uid];
        }
      };

      _this.getRef = function (ref) {
        return _this.instanceRef = ref;
      };

      _this._uid = uid();
      return _this;
    }
    /**
     * Access the WrappedComponent's instance.
     */


    var _proto = onClickOutside.prototype;

    _proto.getInstance = function getInstance() {
      if (!WrappedComponent.prototype.isReactComponent) {
        return this;
      }

      var ref = this.instanceRef;
      return ref.getInstance ? ref.getInstance() : ref;
    };
    /**
     * Add click listeners to the current document,
     * linked to this component's state.
     */


    _proto.componentDidMount = function componentDidMount() {
      // If we are in an environment without a DOM such
      // as shallow rendering or snapshots then we exit
      // early to prevent any unhandled errors being thrown.
      if (typeof document === 'undefined' || !document.createElement) {
        return;
      }

      var instance = this.getInstance();

      if (config && typeof config.handleClickOutside === 'function') {
        this.__clickOutsideHandlerProp = config.handleClickOutside(instance);

        if (typeof this.__clickOutsideHandlerProp !== 'function') {
          throw new Error('WrappedComponent lacks a function for processing outside click events specified by the handleClickOutside config option.');
        }
      }

      this.componentNode = Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"])(this.getInstance());
      this.enableOnClickOutside();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      this.componentNode = Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"])(this.getInstance());
    };
    /**
     * Remove all document's event listeners for this component
     */


    _proto.componentWillUnmount = function componentWillUnmount() {
      this.disableOnClickOutside();
    };
    /**
     * Can be called to explicitly enable event listening
     * for clicks and touches outside of this element.
     */

    /**
     * Pass-through render
     */


    _proto.render = function render() {
      // eslint-disable-next-line no-unused-vars
      var _props = this.props,
          excludeScrollbar = _props.excludeScrollbar,
          props = _objectWithoutProperties(_props, ["excludeScrollbar"]);

      if (WrappedComponent.prototype.isReactComponent) {
        props.ref = this.getRef;
      } else {
        props.wrappedRef = this.getRef;
      }

      props.disableOnClickOutside = this.disableOnClickOutside;
      props.enableOnClickOutside = this.enableOnClickOutside;
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WrappedComponent, props);
    };

    return onClickOutside;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _class.displayName = "OnClickOutside(" + (WrappedComponent.displayName || WrappedComponent.name || 'Component') + ")", _class.defaultProps = {
    eventTypes: ['mousedown', 'touchstart'],
    excludeScrollbar: config && config.excludeScrollbar || false,
    outsideClickIgnoreClass: IGNORE_CLASS_NAME,
    preventDefault: false,
    stopPropagation: false
  }, _class.getClass = function () {
    return WrappedComponent.getClass ? WrappedComponent.getClass() : WrappedComponent;
  }, _temp;
}


/* harmony default export */ __webpack_exports__["default"] = (onClickOutsideHOC);

/***/ }),

/***/ "./node_modules/react-transition-group/CSSTransition.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-transition-group/CSSTransition.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _addClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class/addClass */ "./node_modules/dom-helpers/class/addClass.js"));

var _removeClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class/removeClass */ "./node_modules/dom-helpers/class/removeClass.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/Transition.js"));

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _addClass.default)(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _removeClass.default)(node, c);
  });
};

var propTypes =  true ? _extends({}, _Transition.default.propTypes, {
  /**
   * The animation classNames applied to the component as it enters, exits or has finished the transition.
   * A single name can be provided and it will be suffixed for each stage: e.g.
   *
   * `classNames="fade"` applies `fade-enter`, `fade-enter-active`, `fade-enter-done`,
   * `fade-exit`, `fade-exit-active`, `fade-exit-done`, `fade-appear`, and `fade-appear-active`.
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply spread
   * them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _PropTypes.classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExit: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement)
   */
  onExited: PropTypes.func
}) : undefined;
;
/**
 * A `Transition` component using CSS transitions and animations.
 * It's inspired by the excellent [ng-animate](http://www.nganimate.org/) library.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` stages of the transition. The first class is applied and then a
 * second "active" class in order to activate the css animation. After the animation,
 * matching `done` class names are applied to persist the animation state.
 *
 * When the `in` prop is toggled to `true` the Component will get
 * the `example-enter` CSS class and the `example-enter-active` CSS class
 * added in the next tick. This is a convention based on the `classNames` prop.
 */

var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.onEnter = function (node, appearing) {
      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
          className = _this$getClassNames.className;

      _this.removeClasses(node, 'exit');

      addClass(node, className);

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
          activeClassName = _this$getClassNames2.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var _this$getClassNames3 = _this.getClassNames('enter'),
          doneClassName = _this$getClassNames3.doneClassName;

      _this.removeClasses(node, appearing ? 'appear' : 'enter');

      addClass(node, doneClassName);

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      var _this$getClassNames4 = _this.getClassNames('exit'),
          className = _this$getClassNames4.className;

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      addClass(node, className);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      var _this$getClassNames5 = _this.getClassNames('exit'),
          activeClassName = _this$getClassNames5.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      var _this$getClassNames6 = _this.getClassNames('exit'),
          doneClassName = _this$getClassNames6.doneClassName;

      _this.removeClasses(node, 'exit');

      addClass(node, doneClassName);

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var className = typeof classNames !== 'string' ? classNames[type] : classNames + '-' + type;
      var activeClassName = typeof classNames !== 'string' ? classNames[type + 'Active'] : className + '-active';
      var doneClassName = typeof classNames !== 'string' ? classNames[type + 'Done'] : className + '-done';
      return {
        className: className,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$getClassNames7 = this.getClassNames(type),
        className = _this$getClassNames7.className,
        activeClassName = _this$getClassNames7.activeClassName,
        doneClassName = _this$getClassNames7.doneClassName;

    className && removeClass(node, className);
    activeClassName && removeClass(node, activeClassName);
    doneClassName && removeClass(node, doneClassName);
  };

  _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
    // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    if (className) {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
      /* eslint-enable no-unused-expressions */

      addClass(node, className);
    }
  };

  _proto.render = function render() {
    var props = _extends({}, this.props);

    delete props.classNames;
    return _react.default.createElement(_Transition.default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(_react.default.Component);

CSSTransition.propTypes =  true ? propTypes : undefined;
var _default = CSSTransition;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-transition-group/ReplaceTransition.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-transition-group/ReplaceTransition.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/TransitionGroup.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var propTypes =  true ? {
  in: _propTypes.default.bool.isRequired,
  children: function children(props, propName) {
    if (_react.default.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : undefined;
;
/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */

var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;

    var child = _react.default.Children.toArray(children)[idx];

    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler]((0, _reactDom.findDOMNode)(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

    var _React$Children$toArr = _react.default.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : _react.default.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(_react.default.Component);

ReplaceTransition.propTypes =  true ? propTypes : undefined;
var _default = ReplaceTransition;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-transition-group/Transition.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/Transition.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the components.
 * It's up to you to give meaning and effect to those states. For example we can
 * add styles to a component when it enters or exits:
 *
 * ```jsx
 * import Transition from 'react-transition-group/Transition';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {(state) => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
 * What it does do is track transition states over time so you can update the
 * component (such as by adding styles or classes) when it changes states.
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component begins the
 * "Enter" stage. During this stage, the component will shift from its current transition state,
 * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
 * it's complete. Let's take the following example:
 *
 * ```jsx
 * state = { in: false };
 *
 * toggleEnterState = () => {
 *   this.setState({ in: true });
 * }
 *
 * render() {
 *   return (
 *     <div>
 *       <Transition in={this.state.in} timeout={500} />
 *       <button onClick={this.toggleEnterState}>Click to Enter</button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state and
 * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
 *
 * ## Timing
 *
 * Timing is often the trickiest part of animation, mistakes can result in slight delays
 * that are hard to pin down. A common example is when you want to add an exit transition,
 * you should set the desired final styles when the state is `'exiting'`. That's when the
 * transition to those styles will start and, if you matched the `timeout` prop with the
 * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
 *
 * > **Note**: For simpler transitions the `Transition` component might be enough, but
 * > take into account that it's platform-agnostic, while the `CSSTransition` component
 * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * > in order to make more complex transitions more predictable. For example, even though
 * > classes `example-enter` and `example-enter-active` are applied immediately one after
 * > another, you can still transition from one to the other because of the forced reflow
 * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
 * > for more info). Take this into account when choosing between `Transition` and
 * > `CSSTransition`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter;
      appear = timeout.appear;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts(); // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing); // FIXME: appear timeout?


      _this2.onTransitionEnd(node, timeouts.enter, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);

    if (node) {
      if (this.props.addEndListener) {
        this.props.addEndListener(node, this.nextCallback);
      }

      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    } else {
      setTimeout(this.nextCallback, 0);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react.default.Children.only(children);

    return _react.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes =  true ? {
  /**
   * A `function` child can be used instead of a React element.
   * This function is called with the current transition status
   * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used
   * to apply context specific props to a component.
   *
   * ```jsx
   * <Transition timeout={150}>
   *   {(status) => (
   *     <MyComponent className={`fade fade-${status}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided
   *
   * You may specify a single timeout for all transitions like: `timeout={500}`,
   * or individually like:
   *
   * ```jsx
   * timeout={{
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * @type {number | { enter?: number, exit?: number }}
   */
  timeout: function timeout(props) {
    var pt =  true ? _PropTypes.timeoutsShape : undefined;
    ;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func // Name the function so it is clearer in the documentation

} : undefined;

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, _reactLifecyclesCompat.polyfill)(Transition);

exports.default = _default;

/***/ }),

/***/ "./node_modules/react-transition-group/TransitionGroup.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-transition-group/TransitionGroup.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _ChildMapping = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/utils/ChildMapping.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: _propTypes.default.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   */
  children: _propTypes.default.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: _propTypes.default.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: _propTypes.default.func
} : undefined;
;
var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: {
        isMounting: !this.appeared
      }
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0, _ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, _ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return children;
    }

    return _react.default.createElement(Component, props, children);
  };

  return TransitionGroup;
}(_react.default.Component);

TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes.default.object.isRequired
};
TransitionGroup.propTypes =  true ? propTypes : undefined;
TransitionGroup.defaultProps = defaultProps;

var _default = (0, _reactLifecyclesCompat.polyfill)(TransitionGroup);

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-transition-group/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-transition-group/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CSSTransition = _interopRequireDefault(__webpack_require__(/*! ./CSSTransition */ "./node_modules/react-transition-group/CSSTransition.js"));

var _ReplaceTransition = _interopRequireDefault(__webpack_require__(/*! ./ReplaceTransition */ "./node_modules/react-transition-group/ReplaceTransition.js"));

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/TransitionGroup.js"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/Transition.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = {
  Transition: _Transition.default,
  TransitionGroup: _TransitionGroup.default,
  ReplaceTransition: _ReplaceTransition.default,
  CSSTransition: _CSSTransition.default
};

/***/ }),

/***/ "./node_modules/react-transition-group/utils/ChildMapping.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-transition-group/utils/ChildMapping.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
exports.getInitialChildMapping = getInitialChildMapping;
exports.getNextChildMapping = getNextChildMapping;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */


function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) _react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */


function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0, _react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}

function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0, _react.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, _react.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ "./node_modules/react-transition-group/utils/PropTypes.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-transition-group/utils/PropTypes.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.transitionTimeout = transitionTimeout;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;
  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.'); // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var timeoutsShape = _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
  enter: _propTypes.default.number,
  exit: _propTypes.default.number
}).isRequired]);

exports.timeoutsShape = timeoutsShape;

var classNamesShape = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
  enter: _propTypes.default.string,
  exit: _propTypes.default.string,
  active: _propTypes.default.string
}), _propTypes.default.shape({
  enter: _propTypes.default.string,
  enterDone: _propTypes.default.string,
  enterActive: _propTypes.default.string,
  exit: _propTypes.default.string,
  exitDone: _propTypes.default.string,
  exitActive: _propTypes.default.string
})]);

exports.classNamesShape = classNamesShape;

/***/ })

}]);
//# sourceMappingURL=8.chunk.js.map