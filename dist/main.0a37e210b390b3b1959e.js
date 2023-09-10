/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/toastify-js/src/toastify.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/toastify-js/src/toastify.css ***!
  \*****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */

.toastify {
    padding: 12px 20px;
    color: #ffffff;
    display: inline-block;
    box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 36px -4px rgba(77, 96, 232, 0.3);
    background: -webkit-linear-gradient(315deg, #73a5ff, #5477f5);
    background: linear-gradient(135deg, #73a5ff, #5477f5);
    position: fixed;
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
    border-radius: 2px;
    cursor: pointer;
    text-decoration: none;
    max-width: calc(50% - 20px);
    z-index: 2147483647;
}

.toastify.on {
    opacity: 1;
}

.toast-close {
    background: transparent;
    border: 0;
    color: white;
    cursor: pointer;
    font-family: inherit;
    font-size: 1em;
    opacity: 0.4;
    padding: 0 5px;
}

.toastify-right {
    right: 15px;
}

.toastify-left {
    left: 15px;
}

.toastify-top {
    top: -150px;
}

.toastify-bottom {
    bottom: -150px;
}

.toastify-rounded {
    border-radius: 25px;
}

.toastify-avatar {
    width: 1.5em;
    height: 1.5em;
    margin: -7px 5px;
    border-radius: 2px;
}

.toastify-center {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    max-width: fit-content;
    max-width: -moz-fit-content;
}

@media only screen and (max-width: 360px) {
    .toastify-right, .toastify-left {
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        max-width: fit-content;
    }
}
`, "",{"version":3,"sources":["webpack://./node_modules/toastify-js/src/toastify.css"],"names":[],"mappings":"AAAA;;;;;;EAME;;AAEF;IACI,kBAAkB;IAClB,cAAc;IACd,qBAAqB;IACrB,uFAAuF;IACvF,6DAA6D;IAC7D,qDAAqD;IACrD,eAAe;IACf,UAAU;IACV,wDAAwD;IACxD,kBAAkB;IAClB,eAAe;IACf,qBAAqB;IACrB,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,uBAAuB;IACvB,SAAS;IACT,YAAY;IACZ,eAAe;IACf,oBAAoB;IACpB,cAAc;IACd,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI;QACI,iBAAiB;QACjB,kBAAkB;QAClB,OAAO;QACP,QAAQ;QACR,sBAAsB;IAC1B;AACJ","sourcesContent":["/*!\n * Toastify js 1.12.0\n * https://github.com/apvarun/toastify-js\n * @license MIT licensed\n *\n * Copyright (C) 2018 Varun A P\n */\n\n.toastify {\n    padding: 12px 20px;\n    color: #ffffff;\n    display: inline-block;\n    box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 36px -4px rgba(77, 96, 232, 0.3);\n    background: -webkit-linear-gradient(315deg, #73a5ff, #5477f5);\n    background: linear-gradient(135deg, #73a5ff, #5477f5);\n    position: fixed;\n    opacity: 0;\n    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);\n    border-radius: 2px;\n    cursor: pointer;\n    text-decoration: none;\n    max-width: calc(50% - 20px);\n    z-index: 2147483647;\n}\n\n.toastify.on {\n    opacity: 1;\n}\n\n.toast-close {\n    background: transparent;\n    border: 0;\n    color: white;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: 1em;\n    opacity: 0.4;\n    padding: 0 5px;\n}\n\n.toastify-right {\n    right: 15px;\n}\n\n.toastify-left {\n    left: 15px;\n}\n\n.toastify-top {\n    top: -150px;\n}\n\n.toastify-bottom {\n    bottom: -150px;\n}\n\n.toastify-rounded {\n    border-radius: 25px;\n}\n\n.toastify-avatar {\n    width: 1.5em;\n    height: 1.5em;\n    margin: -7px 5px;\n    border-radius: 2px;\n}\n\n.toastify-center {\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    max-width: fit-content;\n    max-width: -moz-fit-content;\n}\n\n@media only screen and (max-width: 360px) {\n    .toastify-right, .toastify-left {\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        max-width: fit-content;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/TT Interphases Pro Trial Bold.ttf */ "./src/fonts/TT Interphases Pro Trial Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/TT Interphases Pro Trial DemiBold.ttf */ "./src/fonts/TT Interphases Pro Trial DemiBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/rename.svg */ "./src/img/rename.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/rename-hover.svg */ "./src/img/rename-hover.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/delete.svg */ "./src/img/delete.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/delete-hover.svg */ "./src/img/delete-hover.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/important-disabled.svg */ "./src/img/important-disabled.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/important.svg */ "./src/img/important.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/delete-section-hover.svg */ "./src/img/delete-section-hover.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/add-task.svg */ "./src/img/add-task.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/add-task-disabled.svg */ "./src/img/add-task-disabled.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/add-task-hover.svg */ "./src/img/add-task-hover.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/project.svg */ "./src/img/project.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'TTBold';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
  font-family: 'TTSemiBold';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

* {
  margin: 0;
  padding: 0;
}

html {
  font-size: 6.25%;
}

body {
  font-size: 16rem;
  font-family: 'TTSemiBold';
  height: 100%;
  overflow: hidden;
}

:root {
  --primary-color-light: #126fb5;
  --secondary-color-light: #10a885;
  --tertiary-color-light: #ff5436;

  --primary-color-dark: #4ecbfb;
  --secondary-color-dark: #74ffe0;
  --tertiary-color-dark: #fe8975;

  --background-light: #ffffff;
  --secondary-background-light: #fafafa;
  --background-dark: #212844;
  --secondary-background-dark: #f4f5f7;

  --hover-light: #dde0e4;

  --text-light: #303336;
  --text-dark: #ffffff;

  --warning-light: #ff5436;
  --warning-dark: #FFF200;

  --orange-color: #ff9900;
  --yellow-color: #ffc300;
}

.body-container {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 310px repeat(4, 1fr);
  grid-template-rows: 40px repeat(11, 1fr);
}

.sidebar {
  background-color: var(--secondary-background-light);
  grid-area: 1 / 1 / -1 / 2;
  box-sizing: border-box;
  padding: 20px;
}

.main {
  background-color: var(--background-light);
  grid-area: 2 / 2 / 13 / -1;
  box-sizing: border-box;
  padding: 0px 70px 0px 70px;
}

#headerSection {
  grid-area: 1 / 2 / 2 / -1;
  height: 10px;
}

.sidebar-list {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-bottom: 23px;
}

.sidebar-list-settings{
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.projects-sidebar-list {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-bottom: 5px;
}

.sidebar-item {
  display: flex;
  gap: 7px;
  align-items: center;
  box-sizing: border-box;
  padding: 5px 5px 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}

.sidebar-item:hover {
  background-color: var(--hover-light);
}

.sidebar-items {
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 100%;
  color: var(--text-light);
  font-size: 15rem;
}

.sidebar-add-project {
  display: flex;
  gap: 7px;
  align-items: center;
  box-sizing: border-box;
  padding: 5px 5px 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}

.sidebar-add-project:hover {
  background-color: var(--hover-light);
}

.sidebar-header {
  font-size: 21rem;
  padding-bottom: 10px;
  color: var(--text-light);
  font-family: 'TTBold';
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebar-bottom {
  align-self: flex-end;
}

.settings-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 5px 5px 5px 10px;
}

.switch {
  /* switch */
  --switch-width: 46px;
  --switch-height: 24px;
  --switch-bg: rgb(48, 51, 54);
  --switch-checked-bg: rgb(19, 197, 156);
  --switch-offset: calc((var(--switch-height) - var(--circle-diameter)) / 2);
  --switch-transition: all .2s cubic-bezier(0.27, 0.2, 0.25, 1.51);
  /* circle */
  --circle-diameter: 18px;
  --circle-bg: #fff;
  --circle-shadow: 1px 1px 2px rgba(146, 146, 146, 0.45);
  --circle-checked-shadow: -1px 1px 2px rgba(163, 163, 163, 0.45);
  --circle-transition: var(--switch-transition);
  /* icon */
  --icon-transition: all .2s cubic-bezier(0.27, 0.2, 0.25, 1.51);
  --icon-cross-color: var(--switch-bg);
  --icon-cross-size: 6px;
  --icon-checkmark-color: var(--switch-checked-bg);
  --icon-checkmark-size: 10px;
  /* effect line */
  --effect-width: calc(var(--circle-diameter) / 2);
  --effect-height: calc(var(--effect-width) / 2 - 1px);
  --effect-bg: var(--circle-bg);
  --effect-border-radius: 1px;
  --effect-transition: all .2s ease-in-out;
}

.switch input {
  display: none;
}

.switch {
  display: inline-block;
}

.switch svg {
  -webkit-transition: var(--icon-transition);
  -o-transition: var(--icon-transition);
  transition: var(--icon-transition);
  position: absolute;
  height: auto;
}

.switch .checkmark {
  width: var(--icon-checkmark-size);
  color: var(--icon-checkmark-color);
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
}

.switch .cross {
  width: var(--icon-cross-size);
  color: var(--icon-cross-color);
}

.slider {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: var(--switch-width);
  height: var(--switch-height);
  background: var(--switch-bg);
  border-radius: 999px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  -webkit-transition: var(--switch-transition);
  -o-transition: var(--switch-transition);
  transition: var(--switch-transition);
  cursor: pointer;
}

.circle {
  width: var(--circle-diameter);
  height: var(--circle-diameter);
  background: var(--circle-bg);
  border-radius: inherit;
  -webkit-box-shadow: var(--circle-shadow);
  box-shadow: var(--circle-shadow);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-transition: var(--circle-transition);
  -o-transition: var(--circle-transition);
  transition: var(--circle-transition);
  z-index: 1;
  position: absolute;
  left: var(--switch-offset);
}

.slider::before {
  content: "";
  position: absolute;
  width: var(--effect-width);
  height: var(--effect-height);
  left: calc(var(--switch-offset) + (var(--effect-width) / 2));
  background: var(--effect-bg);
  border-radius: var(--effect-border-radius);
  -webkit-transition: var(--effect-transition);
  -o-transition: var(--effect-transition);
  transition: var(--effect-transition);
}

/* actions */

.switch input:checked+.slider {
  background: var(--switch-checked-bg);
}

.switch input:checked+.slider .checkmark {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

.switch input:checked+.slider .cross {
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
}

.switch input:checked+.slider::before {
  left: calc(100% - var(--effect-width) - (var(--effect-width) / 2) - var(--switch-offset));
}

.switch input:checked+.slider .circle {
  left: calc(100% - var(--circle-diameter) - var(--switch-offset));
  -webkit-box-shadow: var(--circle-checked-shadow);
  box-shadow: var(--circle-checked-shadow);
}

#Open {
  position: absolute;
  top: 20px;
  left: 20px;
  display: none;
}

#Open:checked~#sidebarMenu {
  transform: translateX(0px);
}

.wrapper {
  height: 3px;
  background-color: var(--text-dark);
  transition: all 0.5s;
}

.wrapper.second,
.wrapper.third {
  margin-top: 3px;
}

#Open:checked~.sidebar-icon>.wrapper.second {
  opacity: 0;
}

#Open:checked~.sidebar-icon>.wrapper.first {
  transform: rotate(315deg);
  background-color: var(--text-light);
  margin-top: 9px;
}

#Open:checked~.sidebar-icon>.wrapper.third {
  transform: rotate(-315deg);
  background-color: var(--text-light);
  margin-top: -9px;
}

.blur {
  filter: blur(5px);
}

.sidebar-icon {
  display: none;
}

.sidebar-item-active {
  background-color: var(--hover-light);
}

.flex {
  display: flex;
  align-items: center;
  gap: 7px;
}

.sidebar-project {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 5px 5px 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  justify-content: space-between;
}

.sidebar-project:hover {
  background-color: var(--hover-light);
}

.sidebar-project:hover .project-name-input {
  background-color: var(--hover-light);
}

.sidebar-project-active {
  background-color: var(--hover-light);
}

.sidebar-project:hover .project-tools {
  margin-left: 10px;
  display: block;
  display: flex;
  align-items: center;
  gap: 8px;
}

.smooth-transition {
  transition: transform 300ms ease-in-out;
}

.menu-container {
  position: relative;
}

.menu-options {
  display: none;
  position: absolute;
  top: 25px;
  right: 0;
  background-color: var(--background-light);
  border: 1px solid #ccc;
  border-radius: 4px;
  list-style: none;
}

.menu-options li {
  padding: 10px 20px;
  cursor: pointer;
}

.menu-options li:hover {
  background-color: var(--hover-light);
}

.project-tools {
  display: none;
}

.project-name-input {
  font-family: 'TTSemiBold';
  font-size: 15rem;
  max-width: 150px;
  background-color: transparent;
  color: var(--text-light);
  cursor: pointer;
}

.tasks-container {
  height: 100%;
}

.home-heading {
  font-size: 30rem;
  font-family: 'TTBold';
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
}

.border-bottom {
  border-bottom: 1px solid var(--hover-light);
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: 200ms ease-in-out;
  border-radius: 10px;
  z-index: 999;
  background-color: var(--background-light);
  width: 600px;
  max-width: 80%;
}

.modal.active {
  transform: translate(-50%, -50%) scale(1);
}

.modal-header {
  box-sizing: border-box;
  padding: 10px 15px;
  border-bottom: 1px solid black;
  font-size: 22rem;
  color: var(--text-light);
  display: flex;
  gap: 10px;
  align-items: baseline;
}

.modal-alert {
  font-size: 16rem;
  color: var(--warning-light);
  box-sizing: border-box;
  padding: 7px 0px 5px 0px;
}

.modal-header-rename {
  box-sizing: border-box;
  padding: 10px 15px;
  border-bottom: 1px solid black;
  font-size: 22rem;
  color: var(--text-light);
  display: flex;
  gap: 10px;
  align-items: center;
}

.modal-title {
  font-family: 'TTBold';
}

.modal-body {
  box-sizing: border-box;
  padding: 25px;
}

#overlay {
  position: fixed;
  opacity: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .5);
  pointer-events: none;
  transition: 200ms ease-in-out;
  z-index: 15;
}

#overlay.active {
  opacity: 1;
  pointer-events: all;
}

.add-project-input {
  width: 100%;
  box-sizing: border-box;
  padding: 12px 10px 12px 10px;
  outline: none;
  border: 1px solid var(--text-light);
  border-radius: 5px;
  font-family: 'TTSemiBold';
  font-size: 16rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.project-modal-buttons {
  display: flex;
  height: 40px;
  padding-top: 7px;
  gap: 12px;
}

.add-project-buttons {
  flex: 1;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: var(--text-dark);
  font-family: 'TTBold';
  font-size: 18rem;
}

.add-btn {
  background-color: var(--secondary-color-light);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.close-btn {
  background-color: var(--tertiary-color-light);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.add-btn:hover {
  background-color: #01a17c;
}

.close-btn:hover {
  background-color: #ff3916;
}

.btn-rename {
  border: none;
  outline: none;
  background-color: transparent;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-size: contain;
  background-repeat: no-repeat;
  padding: 12px;
  cursor: pointer;
}

.btn-rename:hover {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

.btn-delete {
  border: none;
  outline: none;
  background-color: transparent;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  background-size: contain;
  background-repeat: no-repeat;
  padding: 12px;
  cursor: pointer;
}

.btn-delete:hover {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
}

.delete-question {
  font-size: 18rem;
  padding-bottom: 10px;
  text-align: center;
  color: var(--text-light);
}

#mediaQueryHandler {
  position: absolute;
  top: 0;
  right: -100px;
}

.section-title {
  font-size: 17rem;
  color: var(--secondary-color-light);
  font-family: 'TTBold';
}

.tasks-list-view {
  box-sizing: border-box;
  padding: 30px 70px 90px 70px;
  height: 90%;
}

.tasks-list-container {
  height: 100%;
  overflow-y: auto;
}

.task {
  display: flex;
  align-items: center;
  padding-bottom: 6px;
  margin-bottom: 12px;
}

.bottom-task-side{
  display: none;
  font-size: 12rem;
  color: var(--hover-light);
  margin-bottom: 12px;
}

.height-auto{
  height: auto !important;
}

.left-task-side{
  flex: 6;
  display: flex;
  align-items: center;
  gap: 7px;
}

.right-task-side{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;
}

.date-task-container{
  font-size: 15rem;
  color: var(--hover-light);
}

.important-btn{
  appearance: none;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
  background-repeat: no-repeat;
  background-size: contain;
  box-sizing: border-box;
  padding: 10px;
}

.important-btn:hover{
  transform: scale(1.2);
}

.important-btn-active{
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___});
}

.task-title {
  font-size: 15rem;
  color: var(--text-light);
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 7px 0px;
  margin-bottom: 14px;
}

.remove-section-btn {
  appearance: none;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_8___});
  background-repeat: no-repeat;
  background-size: contain;
  box-sizing: border-box;
  padding: 11px;
  transition: 200ms ease-in-out;
}

.remove-section-btn:hover {
  transform: rotate(180deg);
}

.add-task-btn {
  appearance: none;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_9___});
  background-repeat: no-repeat;
  background-size: contain;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-task-btn-disabled{
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_10___}) !important;
}

.add-task-container {
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  width: 100px;
  color: var(--text-light);
}

.add-task-container:hover {
  color: var(--primary-color-light);
}

.add-task-container:hover .add-task-btn {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_11___});
  background-color: transparent;
  transform: rotate(90deg);
}

.btn-rename-main {
  border: none;
  outline: none;
  background-color: transparent;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-size: contain;
  background-repeat: no-repeat;
  padding: 13px;
  cursor: pointer;
}

.btn-rename-main:hover {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

.btn-delete-main {
  border: none;
  outline: none;
  background-color: transparent;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  background-size: contain;
  background-repeat: no-repeat;
  padding: 13px;
  cursor: pointer;
}

.btn-delete-main:hover {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
}

.main-heading-right {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16rem;
  color: var(--text-light);
}

.add-section-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 73px;
  height: 73px;
  border-radius: 50%;
  appearance: none;
  border: none;
  outline: none;
  background-color: var(--secondary-color-light);
  color: var(--background-light);
  font-size: 55rem;
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0px 130px 40px 0px;
  cursor: pointer;
  transition: ease-in-out, 300ms;
  z-index: 10;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.add-section-button:hover {
  transform: rotate(90deg);
}

.section {
  padding-bottom: 50px;
}

.header-all-tasks {
  background-color: var(--secondary-color-light);
}

.header-today {
  background-color: var(--tertiary-color-light);
}

.header-week {
  background-color: var(--primary-color-light);
}

.header-important {
  background-color: var(--yellow-color);
}

.header-project {
  background-color: var(--secondary-color-light);
}

#floatingActionButton {
  position: absolute;
  bottom: 0;
  right: 0;
}

.add-task-form-container{
  margin-top: 20px;
  border: solid 1px var(--hover-light);
  border-radius: 4px;
  box-sizing: border-box;
  padding: 10px;
}

.task-description-input{
  width: 100%;
  box-sizing: border-box;
  padding: 9px 7px 9px 7px;
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 14rem;
  border: solid 1px var(--hover-light);
}

.task-data{
  display: flex;
  align-items: center;
  gap: 7px;
  padding-bottom: 15px;
}

.add-task-form-buttons{
  display: flex;
  gap: 6px;
  justify-content: end;
  align-items: center;
  border-top: 1px solid var(--hover-light);
  box-sizing: border-box;
  padding: 15px 0px 5px 0px ;
}

.add-task-form-btn{
  border: none;
  outline: none;
  padding: 7px 20px;
  border-radius: 3px;
  background-color: var(--secondary-color-light);
  color: var(--text-dark);
  font-family: 'TTSemiBold';
}

.add-task-form-btn:hover{
  background-color: #01a17c;
}

.cancel-task-btn{
  border: none;
  outline: none;
  padding: 7px 20px;
  border-radius: 3px;
  background-color: var(--tertiary-color-light);
  color: var(--text-dark);
  font-family: 'TTSemiBold';
}

.cancel-task-btn:hover{
  background-color: #ff3916;
}

#dateInput{
  height: 35px;
  box-sizing: border-box;
  padding: 0px 10px;
  border: 1px solid var(--hover-light);
  border-radius: 5px;
  background-color: transparent;
}


button{
  cursor: pointer;
}

.display-none{
  display: none;
}

.disabled-click{
  pointer-events: none;
  color: var(--hover-light)!important;
}

.invalid-input{
  border: 2px solid var(--tertiary-color-light) !important;
}

.checkbox{
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.task-button-title{
  font-size: 15rem;
}

#currentTabName{
  color: var(--text-light);
}

.project-tasks-container-all-tasks{
  display: flex;
  flex-direction: column;
}

.project-name-all-tasks{
  color: var(--text-light);
  font-size: 18rem;
  font-family: 'TTBold';
}

.project-all-tasks-header{
  box-sizing: border-box;
  padding: 7px 0px;
  margin-bottom: 14px;
}

.project-icon-all-tasks{
  width: 24px;
  height: 24px;
  appearance: none;
  border: none;
  outline: none;
  background-color: transparent;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_12___});
  background-repeat: no-repeat;
  background-size: contain;
  pointer-events: nonecio;
}

.tasks-container-all-tasks{
  margin-bottom: 15px;
}

.no-tasks-message{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15rem;
  color: var(--hover-light);
  border: 1px solid var(--hover-light);
  width: 110px;
  border-radius: 5px;
  pointer-events: none;
  box-sizing: border-box;
  padding: 3px 0px;
}

.no-tasks-img-container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.no-tasks-img{
  width: 29%;
  max-width: 350px;
  min-width: 200px;
}

.no-tasks-img-today{
  width: 38%;
  max-width: 400px;
  min-width: 270px;
}

.no-tasks-img-week{
  width: 50%;
  max-width: 450px;
  min-width: 300px;
}

.no-sections-img{
  width: 35%;
  max-width: 450px;
  min-width: 300px;
}

.no-tasks-img-text{
  margin-top: 30px;
  font-size: 20rem;
  color: var(--text-light);
  text-align: center;
  max-width: 370px;
}

.this-week-date{
  display: none;
  color: var(--hover-light);
  font-size: 16rem;
}

.date-heading-right{
  display: block;
  color: var(--hover-light);
}

.date-displayer{
  padding: 10px 0px 0px 0px;
}

.custom-toast{
  width: 240px;
  background: var(--secondary-color-light) !important;
  border-radius: 8px !important;
}

.custom-toast-red{
  width: 240px;
  background: var(--tertiary-color-light) !important;
  border-radius: 8px !important;
}

.custom-toast-blue{
  width: 240px;
  background: var(--primary-color-light) !important;
  border-radius: 8px !important;
}


/*Media Queries*/

/* Smartphones (portrait and landscape) */
@media only screen and (max-width: 767px) {

  /* Hide the scrollbar track and thumb */
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  /* Optional: Hide the scrollbar corner */
  ::-webkit-scrollbar-corner {
    display: none;
  }

  .body-container {
    grid-template-columns: 1fr;
    grid-template-rows: 55px repeat(11, 1fr);
  }

  .main {
    grid-area: 2 / 1 / -1 / -1;
    padding: 25px 20px 0px 20px;
  }

  #headerSection {
    grid-area: 1 / 1 / 1 / -1;
    height: auto;
  }

  .sidebar {
    position: absolute;
    z-index: 10;
    height: 100%;
    width: 70vw;
    padding-top: 60px;
    transform: translateX(-500px);
  }

  .sidebar-icon {
    display: block;
    width: 22px;
    height: 22px;
    position: absolute;
    z-index: 20;
    top: 20px;
    left: 20px;
    cursor: pointer;
  }

  #Open:checked~#sidebarMenu {
    transform: translateX(0px);
    transition: transform 350ms ease-in-out;
  }

  .btn-delete,
  .btn-rename {
    display: none;
  }

  .modal-body {
    padding: 17px;
  }

  .modal-header {
    font-size: 18rem;
  }

  .add-project-input {
    font-size: 15rem;
  }

  .add-project-buttons {
    font-size: 15rem;
  }

  .modal-title {
    font-size: 20rem;
  }

  #oldName {
    font-size: 20rem;
  }

  #deleteProjectName {
    font-size: 20rem;
  }

  .modal-alert {
    font-size: 14rem;
  }

  #mediaQueryHandler {
    display: none;
  }

  .tasks-list-view {
    padding: 20px 20px 140px 20px;
    height: 87%;
  }

  .delete-question {
    font-size: 15rem;
  }

  .home-heading {
    padding-bottom: 4px;
  }

  .add-section-button {
    margin: 0px 16px 16px 0px;
  }

  .task-data{
    flex-direction: column;
  }

  #dateInput{
    width: 100%;
    border: 2px solid var(--hover-light);
  }

  .add-task-form-buttons{
    justify-content: center;
  }

  .add-task-form-btn{
    padding: 10px 0px;
    flex: 1;
  }

  .cancel-task-btn{
    padding: 10px 0px;
    flex: 1;
  }

  .add-task-form-container{
    border: 2px solid var(--hover-light);
  }

  .border-bottom{
    border-bottom: 2px solid var(--hover-light);
  }

  .add-task-form-buttons{
    border-top: 2px solid var(--hover-light);
  }

  .task-description-input{
    border: 2px solid var(--hover-light);
  }

  .date-task-container{
    display: none;
  }

  .no-tasks-img-text{
    font-size: 17rem;
    padding: 0px 10px;
    max-width: none;
  }

  .no-tasks-img{
    width: 70%;
  }

  .no-tasks-img-today{
    width: 70%;
  }

  .no-tasks-img-week{
    width: 70%;
  }

  .no-sections-img{
    width: 70%;
  }

  .this-week-date{
    display: block;
  }

  .date-heading-right{
    display: none;
  }

  .bottom-task-side{
    display: block;
  }

  .task{
    margin-bottom: 0px;
  }
}

/* Smartphones (portrait) */
@media only screen and (max-width: 480px) {
  /* Your CSS styles for portrait-oriented phones go here */
}

/* Smartphones (landscape) */
@media only screen and (min-width: 481px) and (max-width: 767px) {
  /* Your CSS styles for landscape-oriented phones go here */
}


/* Tablets (portrait and landscape) */
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  /* Your CSS styles for tablets go here */
}

/* Tablets (portrait) */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  /* Your CSS styles for portrait-oriented tablets go here */
}

/* Tablets (landscape) */
@media only screen and (min-width: 992px) and (max-width: 1023px) {
  /* Your CSS styles for landscape-oriented tablets go here */
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'TTBold';\n  src: url(./fonts/TT\\ Interphases\\ Pro\\ Trial\\ Bold.ttf);\n}\n\n@font-face {\n  font-family: 'TTSemiBold';\n  src: url(./fonts/TT\\ Interphases\\ Pro\\ Trial\\ DemiBold.ttf);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 6.25%;\n}\n\nbody {\n  font-size: 16rem;\n  font-family: 'TTSemiBold';\n  height: 100%;\n  overflow: hidden;\n}\n\n:root {\n  --primary-color-light: #126fb5;\n  --secondary-color-light: #10a885;\n  --tertiary-color-light: #ff5436;\n\n  --primary-color-dark: #4ecbfb;\n  --secondary-color-dark: #74ffe0;\n  --tertiary-color-dark: #fe8975;\n\n  --background-light: #ffffff;\n  --secondary-background-light: #fafafa;\n  --background-dark: #212844;\n  --secondary-background-dark: #f4f5f7;\n\n  --hover-light: #dde0e4;\n\n  --text-light: #303336;\n  --text-dark: #ffffff;\n\n  --warning-light: #ff5436;\n  --warning-dark: #FFF200;\n\n  --orange-color: #ff9900;\n  --yellow-color: #ffc300;\n}\n\n.body-container {\n  width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 310px repeat(4, 1fr);\n  grid-template-rows: 40px repeat(11, 1fr);\n}\n\n.sidebar {\n  background-color: var(--secondary-background-light);\n  grid-area: 1 / 1 / -1 / 2;\n  box-sizing: border-box;\n  padding: 20px;\n}\n\n.main {\n  background-color: var(--background-light);\n  grid-area: 2 / 2 / 13 / -1;\n  box-sizing: border-box;\n  padding: 0px 70px 0px 70px;\n}\n\n#headerSection {\n  grid-area: 1 / 2 / 2 / -1;\n  height: 10px;\n}\n\n.sidebar-list {\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding-bottom: 23px;\n}\n\n.sidebar-list-settings{\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.projects-sidebar-list {\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding-bottom: 5px;\n}\n\n.sidebar-item {\n  display: flex;\n  gap: 7px;\n  align-items: center;\n  box-sizing: border-box;\n  padding: 5px 5px 5px 10px;\n  cursor: pointer;\n  border-radius: 5px;\n}\n\n.sidebar-item:hover {\n  background-color: var(--hover-light);\n}\n\n.sidebar-items {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  height: 100%;\n  color: var(--text-light);\n  font-size: 15rem;\n}\n\n.sidebar-add-project {\n  display: flex;\n  gap: 7px;\n  align-items: center;\n  box-sizing: border-box;\n  padding: 5px 5px 5px 10px;\n  cursor: pointer;\n  border-radius: 5px;\n}\n\n.sidebar-add-project:hover {\n  background-color: var(--hover-light);\n}\n\n.sidebar-header {\n  font-size: 21rem;\n  padding-bottom: 10px;\n  color: var(--text-light);\n  font-family: 'TTBold';\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.sidebar-bottom {\n  align-self: flex-end;\n}\n\n.settings-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  padding: 5px 5px 5px 10px;\n}\n\n.switch {\n  /* switch */\n  --switch-width: 46px;\n  --switch-height: 24px;\n  --switch-bg: rgb(48, 51, 54);\n  --switch-checked-bg: rgb(19, 197, 156);\n  --switch-offset: calc((var(--switch-height) - var(--circle-diameter)) / 2);\n  --switch-transition: all .2s cubic-bezier(0.27, 0.2, 0.25, 1.51);\n  /* circle */\n  --circle-diameter: 18px;\n  --circle-bg: #fff;\n  --circle-shadow: 1px 1px 2px rgba(146, 146, 146, 0.45);\n  --circle-checked-shadow: -1px 1px 2px rgba(163, 163, 163, 0.45);\n  --circle-transition: var(--switch-transition);\n  /* icon */\n  --icon-transition: all .2s cubic-bezier(0.27, 0.2, 0.25, 1.51);\n  --icon-cross-color: var(--switch-bg);\n  --icon-cross-size: 6px;\n  --icon-checkmark-color: var(--switch-checked-bg);\n  --icon-checkmark-size: 10px;\n  /* effect line */\n  --effect-width: calc(var(--circle-diameter) / 2);\n  --effect-height: calc(var(--effect-width) / 2 - 1px);\n  --effect-bg: var(--circle-bg);\n  --effect-border-radius: 1px;\n  --effect-transition: all .2s ease-in-out;\n}\n\n.switch input {\n  display: none;\n}\n\n.switch {\n  display: inline-block;\n}\n\n.switch svg {\n  -webkit-transition: var(--icon-transition);\n  -o-transition: var(--icon-transition);\n  transition: var(--icon-transition);\n  position: absolute;\n  height: auto;\n}\n\n.switch .checkmark {\n  width: var(--icon-checkmark-size);\n  color: var(--icon-checkmark-color);\n  -webkit-transform: scale(0);\n  -ms-transform: scale(0);\n  transform: scale(0);\n}\n\n.switch .cross {\n  width: var(--icon-cross-size);\n  color: var(--icon-cross-color);\n}\n\n.slider {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  width: var(--switch-width);\n  height: var(--switch-height);\n  background: var(--switch-bg);\n  border-radius: 999px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  position: relative;\n  -webkit-transition: var(--switch-transition);\n  -o-transition: var(--switch-transition);\n  transition: var(--switch-transition);\n  cursor: pointer;\n}\n\n.circle {\n  width: var(--circle-diameter);\n  height: var(--circle-diameter);\n  background: var(--circle-bg);\n  border-radius: inherit;\n  -webkit-box-shadow: var(--circle-shadow);\n  box-shadow: var(--circle-shadow);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-transition: var(--circle-transition);\n  -o-transition: var(--circle-transition);\n  transition: var(--circle-transition);\n  z-index: 1;\n  position: absolute;\n  left: var(--switch-offset);\n}\n\n.slider::before {\n  content: \"\";\n  position: absolute;\n  width: var(--effect-width);\n  height: var(--effect-height);\n  left: calc(var(--switch-offset) + (var(--effect-width) / 2));\n  background: var(--effect-bg);\n  border-radius: var(--effect-border-radius);\n  -webkit-transition: var(--effect-transition);\n  -o-transition: var(--effect-transition);\n  transition: var(--effect-transition);\n}\n\n/* actions */\n\n.switch input:checked+.slider {\n  background: var(--switch-checked-bg);\n}\n\n.switch input:checked+.slider .checkmark {\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  transform: scale(1);\n}\n\n.switch input:checked+.slider .cross {\n  -webkit-transform: scale(0);\n  -ms-transform: scale(0);\n  transform: scale(0);\n}\n\n.switch input:checked+.slider::before {\n  left: calc(100% - var(--effect-width) - (var(--effect-width) / 2) - var(--switch-offset));\n}\n\n.switch input:checked+.slider .circle {\n  left: calc(100% - var(--circle-diameter) - var(--switch-offset));\n  -webkit-box-shadow: var(--circle-checked-shadow);\n  box-shadow: var(--circle-checked-shadow);\n}\n\n#Open {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  display: none;\n}\n\n#Open:checked~#sidebarMenu {\n  transform: translateX(0px);\n}\n\n.wrapper {\n  height: 3px;\n  background-color: var(--text-dark);\n  transition: all 0.5s;\n}\n\n.wrapper.second,\n.wrapper.third {\n  margin-top: 3px;\n}\n\n#Open:checked~.sidebar-icon>.wrapper.second {\n  opacity: 0;\n}\n\n#Open:checked~.sidebar-icon>.wrapper.first {\n  transform: rotate(315deg);\n  background-color: var(--text-light);\n  margin-top: 9px;\n}\n\n#Open:checked~.sidebar-icon>.wrapper.third {\n  transform: rotate(-315deg);\n  background-color: var(--text-light);\n  margin-top: -9px;\n}\n\n.blur {\n  filter: blur(5px);\n}\n\n.sidebar-icon {\n  display: none;\n}\n\n.sidebar-item-active {\n  background-color: var(--hover-light);\n}\n\n.flex {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n\n.sidebar-project {\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  padding: 5px 5px 5px 10px;\n  cursor: pointer;\n  border-radius: 5px;\n  justify-content: space-between;\n}\n\n.sidebar-project:hover {\n  background-color: var(--hover-light);\n}\n\n.sidebar-project:hover .project-name-input {\n  background-color: var(--hover-light);\n}\n\n.sidebar-project-active {\n  background-color: var(--hover-light);\n}\n\n.sidebar-project:hover .project-tools {\n  margin-left: 10px;\n  display: block;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.smooth-transition {\n  transition: transform 300ms ease-in-out;\n}\n\n.menu-container {\n  position: relative;\n}\n\n.menu-options {\n  display: none;\n  position: absolute;\n  top: 25px;\n  right: 0;\n  background-color: var(--background-light);\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  list-style: none;\n}\n\n.menu-options li {\n  padding: 10px 20px;\n  cursor: pointer;\n}\n\n.menu-options li:hover {\n  background-color: var(--hover-light);\n}\n\n.project-tools {\n  display: none;\n}\n\n.project-name-input {\n  font-family: 'TTSemiBold';\n  font-size: 15rem;\n  max-width: 150px;\n  background-color: transparent;\n  color: var(--text-light);\n  cursor: pointer;\n}\n\n.tasks-container {\n  height: 100%;\n}\n\n.home-heading {\n  font-size: 30rem;\n  font-family: 'TTBold';\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 56px;\n}\n\n.border-bottom {\n  border-bottom: 1px solid var(--hover-light);\n}\n\n.modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 200ms ease-in-out;\n  border-radius: 10px;\n  z-index: 999;\n  background-color: var(--background-light);\n  width: 600px;\n  max-width: 80%;\n}\n\n.modal.active {\n  transform: translate(-50%, -50%) scale(1);\n}\n\n.modal-header {\n  box-sizing: border-box;\n  padding: 10px 15px;\n  border-bottom: 1px solid black;\n  font-size: 22rem;\n  color: var(--text-light);\n  display: flex;\n  gap: 10px;\n  align-items: baseline;\n}\n\n.modal-alert {\n  font-size: 16rem;\n  color: var(--warning-light);\n  box-sizing: border-box;\n  padding: 7px 0px 5px 0px;\n}\n\n.modal-header-rename {\n  box-sizing: border-box;\n  padding: 10px 15px;\n  border-bottom: 1px solid black;\n  font-size: 22rem;\n  color: var(--text-light);\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.modal-title {\n  font-family: 'TTBold';\n}\n\n.modal-body {\n  box-sizing: border-box;\n  padding: 25px;\n}\n\n#overlay {\n  position: fixed;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, .5);\n  pointer-events: none;\n  transition: 200ms ease-in-out;\n  z-index: 15;\n}\n\n#overlay.active {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.add-project-input {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 12px 10px 12px 10px;\n  outline: none;\n  border: 1px solid var(--text-light);\n  border-radius: 5px;\n  font-family: 'TTSemiBold';\n  font-size: 16rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.project-modal-buttons {\n  display: flex;\n  height: 40px;\n  padding-top: 7px;\n  gap: 12px;\n}\n\n.add-project-buttons {\n  flex: 1;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  color: var(--text-dark);\n  font-family: 'TTBold';\n  font-size: 18rem;\n}\n\n.add-btn {\n  background-color: var(--secondary-color-light);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.close-btn {\n  background-color: var(--tertiary-color-light);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.add-btn:hover {\n  background-color: #01a17c;\n}\n\n.close-btn:hover {\n  background-color: #ff3916;\n}\n\n.btn-rename {\n  border: none;\n  outline: none;\n  background-color: transparent;\n  background-image: url(./img/rename.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n  padding: 12px;\n  cursor: pointer;\n}\n\n.btn-rename:hover {\n  background-image: url(./img/rename-hover.svg);\n}\n\n.btn-delete {\n  border: none;\n  outline: none;\n  background-color: transparent;\n  background-image: url(./img/delete.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n  padding: 12px;\n  cursor: pointer;\n}\n\n.btn-delete:hover {\n  background-image: url(./img/delete-hover.svg);\n}\n\n.delete-question {\n  font-size: 18rem;\n  padding-bottom: 10px;\n  text-align: center;\n  color: var(--text-light);\n}\n\n#mediaQueryHandler {\n  position: absolute;\n  top: 0;\n  right: -100px;\n}\n\n.section-title {\n  font-size: 17rem;\n  color: var(--secondary-color-light);\n  font-family: 'TTBold';\n}\n\n.tasks-list-view {\n  box-sizing: border-box;\n  padding: 30px 70px 90px 70px;\n  height: 90%;\n}\n\n.tasks-list-container {\n  height: 100%;\n  overflow-y: auto;\n}\n\n.task {\n  display: flex;\n  align-items: center;\n  padding-bottom: 6px;\n  margin-bottom: 12px;\n}\n\n.bottom-task-side{\n  display: none;\n  font-size: 12rem;\n  color: var(--hover-light);\n  margin-bottom: 12px;\n}\n\n.height-auto{\n  height: auto !important;\n}\n\n.left-task-side{\n  flex: 6;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n\n.right-task-side{\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  gap: 20px;\n}\n\n.date-task-container{\n  font-size: 15rem;\n  color: var(--hover-light);\n}\n\n.important-btn{\n  appearance: none;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  background-image: url(./img/important-disabled.svg);\n  background-repeat: no-repeat;\n  background-size: contain;\n  box-sizing: border-box;\n  padding: 10px;\n}\n\n.important-btn:hover{\n  transform: scale(1.2);\n}\n\n.important-btn-active{\n  background-image: url(./img/important.svg);\n}\n\n.task-title {\n  font-size: 15rem;\n  color: var(--text-light);\n}\n\n.section-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  padding: 7px 0px;\n  margin-bottom: 14px;\n}\n\n.remove-section-btn {\n  appearance: none;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  background-image: url(./img/delete-section-hover.svg);\n  background-repeat: no-repeat;\n  background-size: contain;\n  box-sizing: border-box;\n  padding: 11px;\n  transition: 200ms ease-in-out;\n}\n\n.remove-section-btn:hover {\n  transform: rotate(180deg);\n}\n\n.add-task-btn {\n  appearance: none;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  background-image: url(./img/add-task.svg);\n  background-repeat: no-repeat;\n  background-size: contain;\n  box-sizing: border-box;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.add-task-btn-disabled{\n  background-image: url(./img/add-task-disabled.svg) !important;\n}\n\n.add-task-container {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n  width: 100px;\n  color: var(--text-light);\n}\n\n.add-task-container:hover {\n  color: var(--primary-color-light);\n}\n\n.add-task-container:hover .add-task-btn {\n  background-image: url(./img/add-task-hover.svg);\n  background-color: transparent;\n  transform: rotate(90deg);\n}\n\n.btn-rename-main {\n  border: none;\n  outline: none;\n  background-color: transparent;\n  background-image: url(./img/rename.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n  padding: 13px;\n  cursor: pointer;\n}\n\n.btn-rename-main:hover {\n  background-image: url(./img/rename-hover.svg);\n}\n\n.btn-delete-main {\n  border: none;\n  outline: none;\n  background-color: transparent;\n  background-image: url(./img/delete.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n  padding: 13px;\n  cursor: pointer;\n}\n\n.btn-delete-main:hover {\n  background-image: url(./img/delete-hover.svg);\n}\n\n.main-heading-right {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 16rem;\n  color: var(--text-light);\n}\n\n.add-section-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 73px;\n  height: 73px;\n  border-radius: 50%;\n  appearance: none;\n  border: none;\n  outline: none;\n  background-color: var(--secondary-color-light);\n  color: var(--background-light);\n  font-size: 55rem;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  margin: 0px 130px 40px 0px;\n  cursor: pointer;\n  transition: ease-in-out, 300ms;\n  z-index: 10;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.add-section-button:hover {\n  transform: rotate(90deg);\n}\n\n.section {\n  padding-bottom: 50px;\n}\n\n.header-all-tasks {\n  background-color: var(--secondary-color-light);\n}\n\n.header-today {\n  background-color: var(--tertiary-color-light);\n}\n\n.header-week {\n  background-color: var(--primary-color-light);\n}\n\n.header-important {\n  background-color: var(--yellow-color);\n}\n\n.header-project {\n  background-color: var(--secondary-color-light);\n}\n\n#floatingActionButton {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n\n.add-task-form-container{\n  margin-top: 20px;\n  border: solid 1px var(--hover-light);\n  border-radius: 4px;\n  box-sizing: border-box;\n  padding: 10px;\n}\n\n.task-description-input{\n  width: 100%;\n  box-sizing: border-box;\n  padding: 9px 7px 9px 7px;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  font-size: 14rem;\n  border: solid 1px var(--hover-light);\n}\n\n.task-data{\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding-bottom: 15px;\n}\n\n.add-task-form-buttons{\n  display: flex;\n  gap: 6px;\n  justify-content: end;\n  align-items: center;\n  border-top: 1px solid var(--hover-light);\n  box-sizing: border-box;\n  padding: 15px 0px 5px 0px ;\n}\n\n.add-task-form-btn{\n  border: none;\n  outline: none;\n  padding: 7px 20px;\n  border-radius: 3px;\n  background-color: var(--secondary-color-light);\n  color: var(--text-dark);\n  font-family: 'TTSemiBold';\n}\n\n.add-task-form-btn:hover{\n  background-color: #01a17c;\n}\n\n.cancel-task-btn{\n  border: none;\n  outline: none;\n  padding: 7px 20px;\n  border-radius: 3px;\n  background-color: var(--tertiary-color-light);\n  color: var(--text-dark);\n  font-family: 'TTSemiBold';\n}\n\n.cancel-task-btn:hover{\n  background-color: #ff3916;\n}\n\n#dateInput{\n  height: 35px;\n  box-sizing: border-box;\n  padding: 0px 10px;\n  border: 1px solid var(--hover-light);\n  border-radius: 5px;\n  background-color: transparent;\n}\n\n\nbutton{\n  cursor: pointer;\n}\n\n.display-none{\n  display: none;\n}\n\n.disabled-click{\n  pointer-events: none;\n  color: var(--hover-light)!important;\n}\n\n.invalid-input{\n  border: 2px solid var(--tertiary-color-light) !important;\n}\n\n.checkbox{\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n\n.task-button-title{\n  font-size: 15rem;\n}\n\n#currentTabName{\n  color: var(--text-light);\n}\n\n.project-tasks-container-all-tasks{\n  display: flex;\n  flex-direction: column;\n}\n\n.project-name-all-tasks{\n  color: var(--text-light);\n  font-size: 18rem;\n  font-family: 'TTBold';\n}\n\n.project-all-tasks-header{\n  box-sizing: border-box;\n  padding: 7px 0px;\n  margin-bottom: 14px;\n}\n\n.project-icon-all-tasks{\n  width: 24px;\n  height: 24px;\n  appearance: none;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  background-image: url(./img/project.svg);\n  background-repeat: no-repeat;\n  background-size: contain;\n  pointer-events: nonecio;\n}\n\n.tasks-container-all-tasks{\n  margin-bottom: 15px;\n}\n\n.no-tasks-message{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 15rem;\n  color: var(--hover-light);\n  border: 1px solid var(--hover-light);\n  width: 110px;\n  border-radius: 5px;\n  pointer-events: none;\n  box-sizing: border-box;\n  padding: 3px 0px;\n}\n\n.no-tasks-img-container{\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.no-tasks-img{\n  width: 29%;\n  max-width: 350px;\n  min-width: 200px;\n}\n\n.no-tasks-img-today{\n  width: 38%;\n  max-width: 400px;\n  min-width: 270px;\n}\n\n.no-tasks-img-week{\n  width: 50%;\n  max-width: 450px;\n  min-width: 300px;\n}\n\n.no-sections-img{\n  width: 35%;\n  max-width: 450px;\n  min-width: 300px;\n}\n\n.no-tasks-img-text{\n  margin-top: 30px;\n  font-size: 20rem;\n  color: var(--text-light);\n  text-align: center;\n  max-width: 370px;\n}\n\n.this-week-date{\n  display: none;\n  color: var(--hover-light);\n  font-size: 16rem;\n}\n\n.date-heading-right{\n  display: block;\n  color: var(--hover-light);\n}\n\n.date-displayer{\n  padding: 10px 0px 0px 0px;\n}\n\n.custom-toast{\n  width: 240px;\n  background: var(--secondary-color-light) !important;\n  border-radius: 8px !important;\n}\n\n.custom-toast-red{\n  width: 240px;\n  background: var(--tertiary-color-light) !important;\n  border-radius: 8px !important;\n}\n\n.custom-toast-blue{\n  width: 240px;\n  background: var(--primary-color-light) !important;\n  border-radius: 8px !important;\n}\n\n\n/*Media Queries*/\n\n/* Smartphones (portrait and landscape) */\n@media only screen and (max-width: 767px) {\n\n  /* Hide the scrollbar track and thumb */\n  ::-webkit-scrollbar {\n    width: 0;\n    height: 0;\n  }\n\n  /* Optional: Hide the scrollbar corner */\n  ::-webkit-scrollbar-corner {\n    display: none;\n  }\n\n  .body-container {\n    grid-template-columns: 1fr;\n    grid-template-rows: 55px repeat(11, 1fr);\n  }\n\n  .main {\n    grid-area: 2 / 1 / -1 / -1;\n    padding: 25px 20px 0px 20px;\n  }\n\n  #headerSection {\n    grid-area: 1 / 1 / 1 / -1;\n    height: auto;\n  }\n\n  .sidebar {\n    position: absolute;\n    z-index: 10;\n    height: 100%;\n    width: 70vw;\n    padding-top: 60px;\n    transform: translateX(-500px);\n  }\n\n  .sidebar-icon {\n    display: block;\n    width: 22px;\n    height: 22px;\n    position: absolute;\n    z-index: 20;\n    top: 20px;\n    left: 20px;\n    cursor: pointer;\n  }\n\n  #Open:checked~#sidebarMenu {\n    transform: translateX(0px);\n    transition: transform 350ms ease-in-out;\n  }\n\n  .btn-delete,\n  .btn-rename {\n    display: none;\n  }\n\n  .modal-body {\n    padding: 17px;\n  }\n\n  .modal-header {\n    font-size: 18rem;\n  }\n\n  .add-project-input {\n    font-size: 15rem;\n  }\n\n  .add-project-buttons {\n    font-size: 15rem;\n  }\n\n  .modal-title {\n    font-size: 20rem;\n  }\n\n  #oldName {\n    font-size: 20rem;\n  }\n\n  #deleteProjectName {\n    font-size: 20rem;\n  }\n\n  .modal-alert {\n    font-size: 14rem;\n  }\n\n  #mediaQueryHandler {\n    display: none;\n  }\n\n  .tasks-list-view {\n    padding: 20px 20px 140px 20px;\n    height: 87%;\n  }\n\n  .delete-question {\n    font-size: 15rem;\n  }\n\n  .home-heading {\n    padding-bottom: 4px;\n  }\n\n  .add-section-button {\n    margin: 0px 16px 16px 0px;\n  }\n\n  .task-data{\n    flex-direction: column;\n  }\n\n  #dateInput{\n    width: 100%;\n    border: 2px solid var(--hover-light);\n  }\n\n  .add-task-form-buttons{\n    justify-content: center;\n  }\n\n  .add-task-form-btn{\n    padding: 10px 0px;\n    flex: 1;\n  }\n\n  .cancel-task-btn{\n    padding: 10px 0px;\n    flex: 1;\n  }\n\n  .add-task-form-container{\n    border: 2px solid var(--hover-light);\n  }\n\n  .border-bottom{\n    border-bottom: 2px solid var(--hover-light);\n  }\n\n  .add-task-form-buttons{\n    border-top: 2px solid var(--hover-light);\n  }\n\n  .task-description-input{\n    border: 2px solid var(--hover-light);\n  }\n\n  .date-task-container{\n    display: none;\n  }\n\n  .no-tasks-img-text{\n    font-size: 17rem;\n    padding: 0px 10px;\n    max-width: none;\n  }\n\n  .no-tasks-img{\n    width: 70%;\n  }\n\n  .no-tasks-img-today{\n    width: 70%;\n  }\n\n  .no-tasks-img-week{\n    width: 70%;\n  }\n\n  .no-sections-img{\n    width: 70%;\n  }\n\n  .this-week-date{\n    display: block;\n  }\n\n  .date-heading-right{\n    display: none;\n  }\n\n  .bottom-task-side{\n    display: block;\n  }\n\n  .task{\n    margin-bottom: 0px;\n  }\n}\n\n/* Smartphones (portrait) */\n@media only screen and (max-width: 480px) {\n  /* Your CSS styles for portrait-oriented phones go here */\n}\n\n/* Smartphones (landscape) */\n@media only screen and (min-width: 481px) and (max-width: 767px) {\n  /* Your CSS styles for landscape-oriented phones go here */\n}\n\n\n/* Tablets (portrait and landscape) */\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\n  /* Your CSS styles for tablets go here */\n}\n\n/* Tablets (portrait) */\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  /* Your CSS styles for portrait-oriented tablets go here */\n}\n\n/* Tablets (landscape) */\n@media only screen and (min-width: 992px) and (max-width: 1023px) {\n  /* Your CSS styles for landscape-oriented tablets go here */\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B
      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ
      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    }

    // Padding
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date);

    // Padding
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...
      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...
      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th
      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D
      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December
      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12
      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D
      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December
      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);
    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);
    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);
    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T
      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu
      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday
      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02
      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd
      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue
      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }
    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;
    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;
    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return 'Z';
    }
    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */
var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    var signedYear = date.getUTCFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();
      case 'aaa':
        return dayPeriodEnumValue;
      case 'aaaaa':
        return dayPeriodEnumValue[0];
      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });
    case 'PP':
      return formatLong.date({
        width: 'medium'
      });
    case 'PPP':
      return formatLong.date({
        width: 'long'
      });
    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};
var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });
    case 'pp':
      return formatLong.time({
        width: 'medium'
      });
    case 'ppp':
      return formatLong.time({
        width: 'long'
      });
    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};
var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;
    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;
    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;
    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }
  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   throwProtectedError: () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }
  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }
  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];
    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }
      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }
    return substring;
  }).join('');
  return result;
}
function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return value instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */

function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;
    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return undefined;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }
  return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./node_modules/toastify-js/src/toastify.css":
/*!***************************************************!*\
  !*** ./node_modules/toastify-js/src/toastify.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_toastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!./toastify.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/toastify-js/src/toastify.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_toastify_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_toastify_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_toastify_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_toastify_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/toastify-js/src/toastify.js":
/*!**************************************************!*\
  !*** ./node_modules/toastify-js/src/toastify.js ***!
  \**************************************************/
/***/ (function(module) {

/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */
(function(root, factory) {
  if ( true && module.exports) {
    module.exports = factory();
  } else {
    root.Toastify = factory();
  }
})(this, function(global) {
  // Object initialization
  var Toastify = function(options) {
      // Returning a new init object
      return new Toastify.lib.init(options);
    },
    // Library version
    version = "1.12.0";

  // Set the default global options
  Toastify.defaults = {
    oldestFirst: true,
    text: "Toastify is awesome!",
    node: undefined,
    duration: 3000,
    selector: undefined,
    callback: function () {
    },
    destination: undefined,
    newWindow: false,
    close: false,
    gravity: "toastify-top",
    positionLeft: false,
    position: '',
    backgroundColor: '',
    avatar: "",
    className: "",
    stopOnFocus: true,
    onClick: function () {
    },
    offset: {x: 0, y: 0},
    escapeMarkup: true,
    ariaLive: 'polite',
    style: {background: ''}
  };

  // Defining the prototype of the object
  Toastify.lib = Toastify.prototype = {
    toastify: version,

    constructor: Toastify,

    // Initializing the object with required parameters
    init: function(options) {
      // Verifying and validating the input object
      if (!options) {
        options = {};
      }

      // Creating the options object
      this.options = {};

      this.toastElement = null;

      // Validating the options
      this.options.text = options.text || Toastify.defaults.text; // Display message
      this.options.node = options.node || Toastify.defaults.node;  // Display content as node
      this.options.duration = options.duration === 0 ? 0 : options.duration || Toastify.defaults.duration; // Display duration
      this.options.selector = options.selector || Toastify.defaults.selector; // Parent selector
      this.options.callback = options.callback || Toastify.defaults.callback; // Callback after display
      this.options.destination = options.destination || Toastify.defaults.destination; // On-click destination
      this.options.newWindow = options.newWindow || Toastify.defaults.newWindow; // Open destination in new window
      this.options.close = options.close || Toastify.defaults.close; // Show toast close icon
      this.options.gravity = options.gravity === "bottom" ? "toastify-bottom" : Toastify.defaults.gravity; // toast position - top or bottom
      this.options.positionLeft = options.positionLeft || Toastify.defaults.positionLeft; // toast position - left or right
      this.options.position = options.position || Toastify.defaults.position; // toast position - left or right
      this.options.backgroundColor = options.backgroundColor || Toastify.defaults.backgroundColor; // toast background color
      this.options.avatar = options.avatar || Toastify.defaults.avatar; // img element src - url or a path
      this.options.className = options.className || Toastify.defaults.className; // additional class names for the toast
      this.options.stopOnFocus = options.stopOnFocus === undefined ? Toastify.defaults.stopOnFocus : options.stopOnFocus; // stop timeout on focus
      this.options.onClick = options.onClick || Toastify.defaults.onClick; // Callback after click
      this.options.offset = options.offset || Toastify.defaults.offset; // toast offset
      this.options.escapeMarkup = options.escapeMarkup !== undefined ? options.escapeMarkup : Toastify.defaults.escapeMarkup;
      this.options.ariaLive = options.ariaLive || Toastify.defaults.ariaLive;
      this.options.style = options.style || Toastify.defaults.style;
      if(options.backgroundColor) {
        this.options.style.background = options.backgroundColor;
      }

      // Returning the current object for chaining functions
      return this;
    },

    // Building the DOM element
    buildToast: function() {
      // Validating if the options are defined
      if (!this.options) {
        throw "Toastify is not initialized";
      }

      // Creating the DOM object
      var divElement = document.createElement("div");
      divElement.className = "toastify on " + this.options.className;

      // Positioning toast to left or right or center
      if (!!this.options.position) {
        divElement.className += " toastify-" + this.options.position;
      } else {
        // To be depreciated in further versions
        if (this.options.positionLeft === true) {
          divElement.className += " toastify-left";
          console.warn('Property `positionLeft` will be depreciated in further versions. Please use `position` instead.')
        } else {
          // Default position
          divElement.className += " toastify-right";
        }
      }

      // Assigning gravity of element
      divElement.className += " " + this.options.gravity;

      if (this.options.backgroundColor) {
        // This is being deprecated in favor of using the style HTML DOM property
        console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');
      }

      // Loop through our style object and apply styles to divElement
      for (var property in this.options.style) {
        divElement.style[property] = this.options.style[property];
      }

      // Announce the toast to screen readers
      if (this.options.ariaLive) {
        divElement.setAttribute('aria-live', this.options.ariaLive)
      }

      // Adding the toast message/node
      if (this.options.node && this.options.node.nodeType === Node.ELEMENT_NODE) {
        // If we have a valid node, we insert it
        divElement.appendChild(this.options.node)
      } else {
        if (this.options.escapeMarkup) {
          divElement.innerText = this.options.text;
        } else {
          divElement.innerHTML = this.options.text;
        }

        if (this.options.avatar !== "") {
          var avatarElement = document.createElement("img");
          avatarElement.src = this.options.avatar;

          avatarElement.className = "toastify-avatar";

          if (this.options.position == "left" || this.options.positionLeft === true) {
            // Adding close icon on the left of content
            divElement.appendChild(avatarElement);
          } else {
            // Adding close icon on the right of content
            divElement.insertAdjacentElement("afterbegin", avatarElement);
          }
        }
      }

      // Adding a close icon to the toast
      if (this.options.close === true) {
        // Create a span for close element
        var closeElement = document.createElement("button");
        closeElement.type = "button";
        closeElement.setAttribute("aria-label", "Close");
        closeElement.className = "toast-close";
        closeElement.innerHTML = "&#10006;";

        // Triggering the removal of toast from DOM on close click
        closeElement.addEventListener(
          "click",
          function(event) {
            event.stopPropagation();
            this.removeElement(this.toastElement);
            window.clearTimeout(this.toastElement.timeOutValue);
          }.bind(this)
        );

        //Calculating screen width
        var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

        // Adding the close icon to the toast element
        // Display on the right if screen width is less than or equal to 360px
        if ((this.options.position == "left" || this.options.positionLeft === true) && width > 360) {
          // Adding close icon on the left of content
          divElement.insertAdjacentElement("afterbegin", closeElement);
        } else {
          // Adding close icon on the right of content
          divElement.appendChild(closeElement);
        }
      }

      // Clear timeout while toast is focused
      if (this.options.stopOnFocus && this.options.duration > 0) {
        var self = this;
        // stop countdown
        divElement.addEventListener(
          "mouseover",
          function(event) {
            window.clearTimeout(divElement.timeOutValue);
          }
        )
        // add back the timeout
        divElement.addEventListener(
          "mouseleave",
          function() {
            divElement.timeOutValue = window.setTimeout(
              function() {
                // Remove the toast from DOM
                self.removeElement(divElement);
              },
              self.options.duration
            )
          }
        )
      }

      // Adding an on-click destination path
      if (typeof this.options.destination !== "undefined") {
        divElement.addEventListener(
          "click",
          function(event) {
            event.stopPropagation();
            if (this.options.newWindow === true) {
              window.open(this.options.destination, "_blank");
            } else {
              window.location = this.options.destination;
            }
          }.bind(this)
        );
      }

      if (typeof this.options.onClick === "function" && typeof this.options.destination === "undefined") {
        divElement.addEventListener(
          "click",
          function(event) {
            event.stopPropagation();
            this.options.onClick();
          }.bind(this)
        );
      }

      // Adding offset
      if(typeof this.options.offset === "object") {

        var x = getAxisOffsetAValue("x", this.options);
        var y = getAxisOffsetAValue("y", this.options);

        var xOffset = this.options.position == "left" ? x : "-" + x;
        var yOffset = this.options.gravity == "toastify-top" ? y : "-" + y;

        divElement.style.transform = "translate(" + xOffset + "," + yOffset + ")";

      }

      // Returning the generated element
      return divElement;
    },

    // Displaying the toast
    showToast: function() {
      // Creating the DOM object for the toast
      this.toastElement = this.buildToast();

      // Getting the root element to with the toast needs to be added
      var rootElement;
      if (typeof this.options.selector === "string") {
        rootElement = document.getElementById(this.options.selector);
      } else if (this.options.selector instanceof HTMLElement || (typeof ShadowRoot !== 'undefined' && this.options.selector instanceof ShadowRoot)) {
        rootElement = this.options.selector;
      } else {
        rootElement = document.body;
      }

      // Validating if root element is present in DOM
      if (!rootElement) {
        throw "Root element is not defined";
      }

      // Adding the DOM element
      var elementToInsert = Toastify.defaults.oldestFirst ? rootElement.firstChild : rootElement.lastChild;
      rootElement.insertBefore(this.toastElement, elementToInsert);

      // Repositioning the toasts in case multiple toasts are present
      Toastify.reposition();

      if (this.options.duration > 0) {
        this.toastElement.timeOutValue = window.setTimeout(
          function() {
            // Remove the toast from DOM
            this.removeElement(this.toastElement);
          }.bind(this),
          this.options.duration
        ); // Binding `this` for function invocation
      }

      // Supporting function chaining
      return this;
    },

    hideToast: function() {
      if (this.toastElement.timeOutValue) {
        clearTimeout(this.toastElement.timeOutValue);
      }
      this.removeElement(this.toastElement);
    },

    // Removing the element from the DOM
    removeElement: function(toastElement) {
      // Hiding the element
      // toastElement.classList.remove("on");
      toastElement.className = toastElement.className.replace(" on", "");

      // Removing the element from DOM after transition end
      window.setTimeout(
        function() {
          // remove options node if any
          if (this.options.node && this.options.node.parentNode) {
            this.options.node.parentNode.removeChild(this.options.node);
          }

          // Remove the element from the DOM, only when the parent node was not removed before.
          if (toastElement.parentNode) {
            toastElement.parentNode.removeChild(toastElement);
          }

          // Calling the callback function
          this.options.callback.call(toastElement);

          // Repositioning the toasts again
          Toastify.reposition();
        }.bind(this),
        400
      ); // Binding `this` for function invocation
    },
  };

  // Positioning the toasts on the DOM
  Toastify.reposition = function() {

    // Top margins with gravity
    var topLeftOffsetSize = {
      top: 15,
      bottom: 15,
    };
    var topRightOffsetSize = {
      top: 15,
      bottom: 15,
    };
    var offsetSize = {
      top: 15,
      bottom: 15,
    };

    // Get all toast messages on the DOM
    var allToasts = document.getElementsByClassName("toastify");

    var classUsed;

    // Modifying the position of each toast element
    for (var i = 0; i < allToasts.length; i++) {
      // Getting the applied gravity
      if (containsClass(allToasts[i], "toastify-top") === true) {
        classUsed = "toastify-top";
      } else {
        classUsed = "toastify-bottom";
      }

      var height = allToasts[i].offsetHeight;
      classUsed = classUsed.substr(9, classUsed.length-1)
      // Spacing between toasts
      var offset = 15;

      var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

      // Show toast in center if screen with less than or equal to 360px
      if (width <= 360) {
        // Setting the position
        allToasts[i].style[classUsed] = offsetSize[classUsed] + "px";

        offsetSize[classUsed] += height + offset;
      } else {
        if (containsClass(allToasts[i], "toastify-left") === true) {
          // Setting the position
          allToasts[i].style[classUsed] = topLeftOffsetSize[classUsed] + "px";

          topLeftOffsetSize[classUsed] += height + offset;
        } else {
          // Setting the position
          allToasts[i].style[classUsed] = topRightOffsetSize[classUsed] + "px";

          topRightOffsetSize[classUsed] += height + offset;
        }
      }
    }

    // Supporting function chaining
    return this;
  };

  // Helper function to get offset.
  function getAxisOffsetAValue(axis, options) {

    if(options.offset[axis]) {
      if(isNaN(options.offset[axis])) {
        return options.offset[axis];
      }
      else {
        return options.offset[axis] + 'px';
      }
    }

    return '0px';

  }

  function containsClass(elem, yourClass) {
    if (!elem || typeof yourClass !== "string") {
      return false;
    } else if (
      elem.className &&
      elem.className
        .trim()
        .split(/\s+/gi)
        .indexOf(yourClass) > -1
    ) {
      return true;
    } else {
      return false;
    }
  }

  // Setting up the prototype for the init object
  Toastify.lib.init.prototype = Toastify.lib;

  // Returning the Toastify function to be assigned to the window object/module
  return Toastify;
});


/***/ }),

/***/ "./src/alltasks.js":
/*!*************************!*\
  !*** ./src/alltasks.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadAllTasks)
/* harmony export */ });
/* harmony import */ var _img_alltasks48x48_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/alltasks48x48.svg */ "./src/img/alltasks48x48.svg");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");




const tasksHandler = new _dom__WEBPACK_IMPORTED_MODULE_2__.TasksHandler()
const projectsHandler = new _dom__WEBPACK_IMPORTED_MODULE_2__.ProjectsHandler()

const tasksListView = document.getElementById('tasksListView')
const headerSection = document.getElementById('headerSection')
const floatingActionButton = document.getElementById('floatingActionButton')
const dateDisplayer = document.querySelector('.date-displayer')

function loadAllTasks() {
    setAllTasksTab();
    let tasksLength = 0
    _projects__WEBPACK_IMPORTED_MODULE_1__.allProjects.forEach((project, projectIndex) => {
        projectsHandler.createProjectHtmlForTabs(tasksListView, project);
        const tasksContainerAllTasks = document.querySelectorAll('.tasks-container-all-tasks');

        let hasTasks = false; // Track if there are tasks in the project

        project.sections.forEach(section => {
            if (section.tasks.length === 0) {

            } else {
                hasTasks = true; // Mark that there are tasks in this project
                section.tasks.forEach(task => {
                    tasksHandler.createTaskHtml(tasksContainerAllTasks[projectIndex], task);
                    tasksLength++
                });
            }
        });

        if (!hasTasks) {
            tasksHandler.displayNoTasksMessage(tasksContainerAllTasks[projectIndex]);
        }
    });
    displayImportantTasksLength(tasksLength)
}

function setAllTasksTab() {
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')

    const svgAllTasks = new Image()
    svgAllTasks.src = _img_alltasks48x48_svg__WEBPACK_IMPORTED_MODULE_0__;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgAllTasks)

    currentTabName.textContent = 'All Tasks'

    tasksListView.innerHTML = ''
    tasksListView.classList.add('height-auto')
    dateDisplayer.innerHTML = ''
    floatingActionButton.innerHTML = ''
    headerSection.className = ''
    headerSection.classList.add('header-all-tasks')
}


function displayImportantTasksLength(tasksLength) {
    let tasksString = 'tasks'
    const lengthArr = tasksLength.toString().split('')
    if (lengthArr[lengthArr.length - 1] === '1') {
        tasksString = 'task'
    }
    const lengthString = `TasksCount: ${tasksLength} ${tasksString}.`
    tasksHandler.createRightDateDisplay(mainHeadingRight, lengthString)

    dateDisplayer.innerHTML = ''
    tasksHandler.createDateDisplay(dateDisplayer, lengthString)
}

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalHandler: () => (/* binding */ ModalHandler),
/* harmony export */   ProjectsHandler: () => (/* binding */ ProjectsHandler),
/* harmony export */   SectionHandler: () => (/* binding */ SectionHandler),
/* harmony export */   TasksHandler: () => (/* binding */ TasksHandler),
/* harmony export */   closeSidebarIfSmallScreen: () => (/* binding */ closeSidebarIfSmallScreen),
/* harmony export */   removeEmptyProjectsFromHTML: () => (/* binding */ removeEmptyProjectsFromHTML)
/* harmony export */ });
/* harmony import */ var _img_project_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/project.svg */ "./src/img/project.svg");


class ModalHandler {
    constructor() {
        this.projectNameInput = document.getElementById('projectNameInput');
        this.projectRenameInput = document.getElementById('projectRenameInput')
        this.modalAlert = document.getElementById('modalAlert')
        this.modalAlertRename = document.getElementById('modalAlertRename')
        this.allInputs = document.getElementsByTagName('input')
        this.modalAddProject = document.getElementById('modal')
        this.modalRenameProject = document.getElementById('modalRename')
        this.modalDeleteProject = document.getElementById('modalDelete')
        this.sectionNameInput = document.getElementById('sectionNameInput')
        this.modalSectionAlert = document.getElementById('modalSectionAlert')
        this.modalAddSection = document.getElementById('modalAddSection')
    }


    handleModals() {
        const openModalButtons = document.querySelectorAll('[data-modal-target]')
        const closeModalButtons = document.querySelectorAll('[data-close-button]')
        const overlay = document.getElementById('overlay')

        openModalButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modal = document.querySelector(button.dataset.modalTarget)
                this.openModal(modal)
            })
        })

        closeModalButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modal = button.closest('.modal')
                this.closeModal(modal)
            })
        })

        overlay.addEventListener('click', () => {
            const modals = document.querySelectorAll('.modal.active')
            modals.forEach(modal => {
                this.closeModal(modal)
            })

        })
    }

    openModal(modal) {
        if (modal == null) return
        modal.classList.add('active')
        overlay.classList.add('active')
        this.projectNameInput.value = ''
        this.modalAlert.innerHTML = ''
        this.modalAlertRename.innerHTML = ''
        this.projectRenameInput.value = ''
        this.sectionNameInput.value = ''
        this.modalSectionAlert.innerHTML = ''
    }

    closeModal(modal) {
        this.projectNameInput.blur();
        this.projectRenameInput.blur()
        this.sectionNameInput.blur()

        if (modal == null) return
        modal.classList.remove('active')
        overlay.classList.remove('active')
    }


    changeModalPositionIfKeyboardOpened() {
        const inputsArray = Array.from(this.allInputs)
        const mediaQueryHandler = document.getElementById('mediaQueryHandler')
        inputsArray.forEach(input => {
            input.addEventListener('focus', () => {
                const computedStyle = window.getComputedStyle(mediaQueryHandler);
                if (computedStyle.display === 'none') {
                    this.modalAddProject.style.top = '30%'
                    this.modalRenameProject.style.top = '30%'
                    this.modalAddSection.style.top = '30%'
                }
            })
            input.addEventListener('blur', () => {
                this.modalAddProject.style.top = '50%'
                this.modalRenameProject.style.top = '50%'
                this.modalAddSection.style.top = '50%'
            })
        })
    }

    handleSubmit() {
        document.getElementById("addForm").addEventListener("submit", function (event) {
            event.preventDefault();
            this.projectNameInput.blur()
        });

        document.getElementById("renameForm").addEventListener("submit", function (event) {
            event.preventDefault();
            this.projectRenameInput.blur()
        });

        document.getElementById("addSectionForm").addEventListener("submit", function (event) {
            event.preventDefault();
            this.sectionNameInput.blur()
        });

        document.getElementById("deleteForm").addEventListener("submit", function (event) {
            event.preventDefault();
        });

        document.getElementById("deleteFormSection").addEventListener("submit", function (event) {
            event.preventDefault();
        });
    }
}

class ProjectsHandler {
    constructor() {

    }

    projectsContainer = document.getElementById('projectsContainer')

    createProjectHtml(project) {
        // Create the <li> element with class "sidebar-project" and "tab"
        const liElement = document.createElement("li");
        liElement.classList.add("sidebar-project", "tab");

        // Create the first <div> element with class "flex"
        const divFlex1 = document.createElement("div");
        divFlex1.classList.add("flex");

        // Create the "project" SVG icon
        const svgProject = new Image();
        svgProject.src = _img_project_svg__WEBPACK_IMPORTED_MODULE_0__;

        // Append the "project" icon to the first <div> element
        divFlex1.appendChild(svgProject);

        // Create the <input> element
        const projectNameContainer = document.createElement("div");
        projectNameContainer.textContent = project.name
        projectNameContainer.classList.add("project-name-input");
        divFlex1.appendChild(projectNameContainer);

        // Append the first <div> element to the <li> element
        liElement.appendChild(divFlex1);

        // Create the second <div> element with class "project-tools"
        const divTools = document.createElement("div");
        divTools.classList.add("project-tools");

        // Create the <div> elements with class "flex" for the tool icons
        const divFlex2 = document.createElement("div");
        divFlex2.classList.add("flex");
        const divFlex3 = document.createElement("div");
        divFlex3.classList.add("flex");

        // Append the tool icons to the second <div> element
        divTools.appendChild(divFlex2);
        divTools.appendChild(divFlex3);

        //Create button delete
        const buttonRename = document.createElement('button');
        buttonRename.classList.add('btn-rename')
        buttonRename.setAttribute('data-modal-target', '#modalRename');

        // Append the "rename" button to the second <div> element
        divFlex2.appendChild(buttonRename);

        //Create button delete
        const buttonDelete = document.createElement('button');
        buttonDelete.classList.add('btn-delete')
        buttonDelete.setAttribute('data-modal-target', '#modalDelete');

        // Append the "delete" button to the second <div> element
        divFlex3.appendChild(buttonDelete);

        // Append the second <div> element to the <li> element
        liElement.appendChild(divTools);

        this.projectsContainer.appendChild(liElement)
    }

    createMainProjectToolsHtml() {
        const mainHeadingRight = document.getElementById('mainHeadingRight')
        // Create the first button element

        mainHeadingRight.innerHTML = ''

        const btnRenameMain = document.createElement('button');
        btnRenameMain.classList.add('btn-rename-main');
        btnRenameMain.id = 'btnRenameMain';
        btnRenameMain.setAttribute('data-modal-target', '#modalRename');

        // Create the second button element
        const btnDeleteMain = document.createElement('button');
        btnDeleteMain.classList.add('btn-delete-main');
        btnDeleteMain.id = 'btnDeleteMain';
        btnDeleteMain.setAttribute('data-modal-target', '#modalDelete');

        mainHeadingRight.appendChild(btnRenameMain);
        mainHeadingRight.appendChild(btnDeleteMain);
    }

    createProjectHtmlForTabs(tasksListView, project) {
        // Create the main container div
        const projectTasksContainer = document.createElement('div');
        projectTasksContainer.classList.add('project-tasks-container-all-tasks');

        // Create the project header div
        const projectHeaderDiv = document.createElement('div');
        projectHeaderDiv.classList.add('project-all-tasks-header', 'flex', 'border-bottom');

        // Create the project name div
        const projectNameDiv = document.createElement('div');
        projectNameDiv.classList.add('project-name-all-tasks');
        projectNameDiv.textContent = `Project (${project.name})`;

        projectHeaderDiv.appendChild(projectNameDiv);

        // Create the tasks container div
        const tasksContainerDiv = document.createElement('div');
        tasksContainerDiv.classList.add('tasks-container-all-tasks');

        // Append project header and tasks container to the main container div
        projectTasksContainer.appendChild(projectHeaderDiv);
        projectTasksContainer.appendChild(tasksContainerDiv);

        tasksListView.appendChild(projectTasksContainer)
    }
}

class SectionHandler {
    constructor() {
        this.floatingActionButton = document.getElementById('floatingActionButton')
        this.tasksListView = document.getElementById('tasksListView')
    }

    createAddSectionButtonHtml() {
        this.floatingActionButton.innerHTML = ''
        const addSectionButton = document.createElement('button');
        addSectionButton.id = 'addSectionButton';
        addSectionButton.className = 'add-section-button';
        addSectionButton.setAttribute('data-modal-target', '#modalAddSection');
        addSectionButton.innerHTML = '&plus;';

        this.floatingActionButton.appendChild(addSectionButton)
    }

    createSectionHtml(section) {
        // Create the main section container
        const sectionContainer = document.createElement('div');
        sectionContainer.className = 'section';

        // Create the section header
        const sectionHeader = document.createElement('div');
        sectionHeader.className = 'section-header';
        sectionHeader.classList.add('border-bottom');

        // Create the section title
        const sectionTitle = document.createElement('div');
        sectionTitle.className = 'section-title';
        sectionTitle.textContent = section.sectionTitle;

        // Create the section buttons container
        const sectionButtons = document.createElement('div');
        sectionButtons.className = 'section-buttons';

        // Create the remove section button
        const removeSectionButton = document.createElement('button');
        removeSectionButton.type = 'button';
        removeSectionButton.className = 'remove-section-btn';
        removeSectionButton.setAttribute('data-modal-target', '#modalDeleteSection');

        // Append the remove section button to the section buttons container
        sectionButtons.appendChild(removeSectionButton);

        // Append the section title and buttons to the section header
        sectionHeader.appendChild(sectionTitle);
        sectionHeader.appendChild(sectionButtons);

        // Create the section tasks container
        const sectionTasks = document.createElement('div');
        sectionTasks.className = 'section-tasks';

        const formTaskContainer = document.createElement('div');
        formTaskContainer.className = 'form-task-container';

        // Create the add task container
        const addTaskContainer = document.createElement('div');
        addTaskContainer.className = 'add-task-container';

        // Create the task button container
        const taskButtonContainer = document.createElement('div');
        taskButtonContainer.className = 'task-btn';

        // Create the add task button
        const addTaskButton = document.createElement('button');
        addTaskButton.type = 'button';
        addTaskButton.className = 'add-task-btn';

        // Append the add task button to the task button container
        taskButtonContainer.appendChild(addTaskButton);

        // Create the task button title
        const taskButtonTitle = document.createElement('div');
        taskButtonTitle.className = 'task-button-title';
        taskButtonTitle.textContent = 'Add Task';

        // Append the task button and title to the add task container
        addTaskContainer.appendChild(taskButtonContainer);
        addTaskContainer.appendChild(taskButtonTitle);

        sectionContainer.appendChild(sectionHeader);
        sectionContainer.appendChild(sectionTasks);
        sectionContainer.appendChild(formTaskContainer);
        sectionContainer.appendChild(addTaskContainer);

        this.tasksListView.appendChild(sectionContainer)
    }
}

class TasksHandler {
    constructor() {

    }

    createAddTaskFormHtml(currentSectionTasksContainer) {
        // Create main container div
        const addTaskFormContainer = document.createElement('div');
        addTaskFormContainer.classList.add('add-task-form-container');

        // Create task data div
        const taskDataDiv = document.createElement('div');
        taskDataDiv.classList.add('task-data');

        // Create task description input
        const taskDescriptionInput = document.createElement('input');
        taskDescriptionInput.type = 'text';
        taskDescriptionInput.id = 'taskDescriptionInput';
        taskDescriptionInput.classList.add('task-description-input');
        taskDescriptionInput.placeholder = 'Task description...';

        // Create date input
        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.id = 'dateInput';

        // Append task description input and date input to task data div
        taskDataDiv.appendChild(taskDescriptionInput);
        taskDataDiv.appendChild(dateInput);

        // Create add task button
        const addTaskFormButton = document.createElement('button');
        addTaskFormButton.id = 'addTaskFormButton';
        addTaskFormButton.classList.add('add-task-form-btn');
        addTaskFormButton.textContent = 'Add Task';

        // Create cancel button
        const cancelTaskFormButton = document.createElement('button');
        cancelTaskFormButton.id = 'cancelTaskFormButton';
        cancelTaskFormButton.classList.add('cancel-task-btn');
        cancelTaskFormButton.textContent = 'Cancel';

        // Create add task form buttons div
        const addTaskFormButtonsDiv = document.createElement('div');
        addTaskFormButtonsDiv.classList.add('add-task-form-buttons');

        // Append buttons to add task form buttons div
        addTaskFormButtonsDiv.appendChild(addTaskFormButton);
        addTaskFormButtonsDiv.appendChild(cancelTaskFormButton);

        // Append task data div and add task form buttons div to main container div
        addTaskFormContainer.appendChild(taskDataDiv);
        addTaskFormContainer.appendChild(addTaskFormButtonsDiv);

        currentSectionTasksContainer.appendChild(addTaskFormContainer)
    }

    createTaskHtml(currentSectionTasksHtml, task) {
        // Create the main container div
        const taskContainerDiv = document.createElement('div');
        taskContainerDiv.classList.add('main-task-container');

        // Create the task container div
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        // Create the bottom-task div
        const bottomTaskSideDiv = document.createElement('div');
        bottomTaskSideDiv.classList.add('bottom-task-side');
        bottomTaskSideDiv.textContent = task.date

        // Create the left-task-side div
        const leftTaskSideDiv = document.createElement('div');
        leftTaskSideDiv.classList.add('left-task-side');

        // Create the checkbox input
        const checkboxInput = document.createElement('input');
        checkboxInput.type = 'checkbox';
        checkboxInput.classList.add('checkbox');

        // Create the task title div
        const taskTitleDiv = document.createElement('div');
        taskTitleDiv.classList.add('task-title');
        taskTitleDiv.textContent = task.description

        // Append checkbox and task title to the left-task-side div
        leftTaskSideDiv.appendChild(checkboxInput);
        leftTaskSideDiv.appendChild(taskTitleDiv);

        // Create the right-task-side div
        const rightTaskSideDiv = document.createElement('div');
        rightTaskSideDiv.classList.add('right-task-side');

        // Create the date-task-container div
        const dateTaskContainerDiv = document.createElement('div');
        dateTaskContainerDiv.classList.add('date-task-container');
        dateTaskContainerDiv.textContent = task.date

        // Create the important button
        const importantButton = document.createElement('button');
        importantButton.type = 'button';
        importantButton.classList.add('important-btn');

        //Create active task if has true for important state
        if (task.important === true) {
            importantButton.classList.add('important-btn-active')
        }
        else {

        }
        // Append date-task-container and important button to the right-task-side div
        rightTaskSideDiv.appendChild(dateTaskContainerDiv);
        rightTaskSideDiv.appendChild(importantButton);

        // Append left-task-side and right-task-side to the main container div
        taskDiv.appendChild(leftTaskSideDiv);
        taskDiv.appendChild(rightTaskSideDiv);

        taskContainerDiv.appendChild(taskDiv)
        taskContainerDiv.appendChild(bottomTaskSideDiv)

        currentSectionTasksHtml.appendChild(taskContainerDiv)
    }

    displayNoTasksMessage(currentProjectWithNoTasksHtml) {
        const div = document.createElement('div')
        div.classList.add('no-tasks-message')
        div.textContent = `No tasks here`

        currentProjectWithNoTasksHtml.appendChild(div)
    }

    createDateDisplay(dateDisplayer, fullDateString) {
        const div = document.createElement('div')
        div.classList.add('this-week-date')
        div.textContent = fullDateString
        dateDisplayer.appendChild(div)
    }

    createRightDateDisplay(mainHeadingRight, fullDateString) {
        const div = document.createElement('div')
        div.classList.add('date-heading-right')
        div.textContent = fullDateString
        mainHeadingRight.appendChild(div)
    }
}

function closeSidebarIfSmallScreen() {
    const sidebar = document.getElementById('sidebarMenu')
    const closeSidebarButon = document.querySelector('.sidebar-icon')
    sidebar.classList.contains('active-sidebar') ? closeSidebarButon.click() : {};
}

function removeEmptyProjectsFromHTML(){
    const tasksContainerAllTasks = document.querySelectorAll('.tasks-container-all-tasks');
    tasksContainerAllTasks.forEach(container => {
        if(container.innerHTML === ''){
            let parentContainer = container;
            while (parentContainer && !parentContainer.classList.contains('project-tasks-container-all-tasks')) {
                parentContainer = parentContainer.parentNode;
            }
            parentContainer.remove()
        }
    })
}

/***/ }),

/***/ "./src/important.js":
/*!**************************!*\
  !*** ./src/important.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadImportantTasks)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _img_important_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/important.svg */ "./src/img/important.svg");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _img_important_no_tasks_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/important-no-tasks.png */ "./src/img/important-no-tasks.png");





const tasksHandler = new _dom__WEBPACK_IMPORTED_MODULE_2__.TasksHandler()
const projectsHandler = new _dom__WEBPACK_IMPORTED_MODULE_2__.ProjectsHandler()

const tasksListView = document.getElementById('tasksListView')
const headerSection = document.getElementById('headerSection')
const floatingActionButton = document.getElementById('floatingActionButton')
const dateDisplayer = document.querySelector('.date-displayer')

function loadImportantTasks() {
    setImportantTab()
    let tasksLength = 0
    _projects__WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach((project, projectIndex) => {
        let projectHtmlCreated = false; // Track if project HTML has been created

        project.sections.forEach(section => {
            section.tasks.forEach(task => {
                if (task.important === true) {
                    if (!projectHtmlCreated) {
                        // Create project HTML only once for each project if it has tasks
                        projectsHandler.createProjectHtmlForTabs(tasksListView, project);
                        projectHtmlCreated = true; // Set the flag to true to prevent further creation
                    }
                    const tasksContainerAllTasks = document.querySelectorAll('.tasks-container-all-tasks');
                    tasksHandler.createTaskHtml(tasksContainerAllTasks[projectIndex], task);
                    tasksLength++
                } else {
                    return;
                }
            });
        });
    });
    displayImportantTasksLength(tasksLength)
    displayNoTasksImage()
}

function setImportantTab() {
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')

    const svgImportant = new Image()
    svgImportant.src = _img_important_svg__WEBPACK_IMPORTED_MODULE_1__;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgImportant)

    currentTabName.textContent = 'Important'

    tasksListView.innerHTML = ''
    tasksListView.classList.add('height-auto')
    dateDisplayer.innerHTML = ''
    floatingActionButton.innerHTML = ''
    headerSection.className = ''
    headerSection.classList.add('header-important')

}

function displayNoTasksImage() {
    if (tasksListView.innerHTML === '') {
        tasksListView.classList.remove('height-auto')
        const container = document.createElement('div')
        container.classList.add('no-tasks-img-container')

        const noTasksImageImportant = new Image()
        noTasksImageImportant.src = _img_important_no_tasks_png__WEBPACK_IMPORTED_MODULE_3__
        noTasksImageImportant.classList.add('no-tasks-img')

        const text = document.createElement('div')
        text.textContent = `You don't have any important tasks!`
        text.classList.add('no-tasks-img-text')

        container.appendChild(noTasksImageImportant)
        container.appendChild(text)
        tasksListView.appendChild(container)
    }
}

function displayImportantTasksLength(tasksLength) {
    let tasksString = 'tasks'
    const lengthArr = tasksLength.toString().split('')
    if (lengthArr[lengthArr.length - 1] === '1') {
        tasksString = 'task'
    }
    const lengthString = `TasksCount: ${tasksLength} ${tasksString}.`
    tasksHandler.createRightDateDisplay(mainHeadingRight, lengthString)

    dateDisplayer.innerHTML = ''
    tasksHandler.createDateDisplay(dateDisplayer, lengthString)
}

/***/ }),

/***/ "./src/project-loader.js":
/*!*******************************!*\
  !*** ./src/project-loader.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayNoSectionsImage: () => (/* binding */ displayNoSectionsImage),
/* harmony export */   loadActiveProject: () => (/* binding */ loadActiveProject)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _img_project48x48_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/project48x48.svg */ "./src/img/project48x48.svg");
/* harmony import */ var _img_no_sections_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/no-sections.png */ "./src/img/no-sections.png");




const sectionHandler = new _dom__WEBPACK_IMPORTED_MODULE_0__.SectionHandler()
const headerSection = document.getElementById('headerSection')
const tasksListView = document.getElementById('tasksListView')

function loadActiveProject(currentProject){
    setActiveProject(currentProject)
    displayNoSectionsImage()
}

function setActiveProject(currentProject) {
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')
    const dateDisplayer = document.querySelector('.date-displayer')

    const svgProject = new Image()
    svgProject.src = _img_project48x48_svg__WEBPACK_IMPORTED_MODULE_1__;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgProject)

    currentTabName.textContent = `${currentProject.name}`

    dateDisplayer.innerHTML = ''
    tasksListView.classList.add('height-auto')
    sectionHandler.createAddSectionButtonHtml()
    headerSection.className = ''
    headerSection.classList.add('header-project')
}

function displayNoSectionsImage() {
   setTimeout(() => {
    if (tasksListView.innerHTML === '') {
        tasksListView.classList.remove('height-auto')
        const container = document.createElement('div')
        container.classList.add('no-tasks-img-container')

        const noSectionsImage = new Image()
        noSectionsImage.src = _img_no_sections_png__WEBPACK_IMPORTED_MODULE_2__
        noSectionsImage.classList.add('no-sections-img')

        const text = document.createElement('div')
        text.textContent = `Start organizing your tasks! Create sections within your projects.`
        text.classList.add('no-tasks-img-text')

        container.appendChild(noSectionsImage)
        container.appendChild(text)
        tasksListView.appendChild(container)
    }
   }, 5);
}


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDeleteSectionButtonsEvent: () => (/* binding */ addDeleteSectionButtonsEvent),
/* harmony export */   addProjectEvent: () => (/* binding */ addProjectEvent),
/* harmony export */   addProjectToolsSubmitEvent: () => (/* binding */ addProjectToolsSubmitEvent),
/* harmony export */   addSectionDeleteEvent: () => (/* binding */ addSectionDeleteEvent),
/* harmony export */   allProjects: () => (/* binding */ allProjects),
/* harmony export */   currentProject: () => (/* binding */ currentProject),
/* harmony export */   currentProjectIndex: () => (/* binding */ currentProjectIndex),
/* harmony export */   currentSectionIndex: () => (/* binding */ currentSectionIndex),
/* harmony export */   loadProjects: () => (/* binding */ loadProjects)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ "./src/tabs.js");
/* harmony import */ var _project_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-loader */ "./src/project-loader.js");
/* harmony import */ var _sections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections */ "./src/sections.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");







const modalHandler = new _dom__WEBPACK_IMPORTED_MODULE_0__.ModalHandler();
const projectsHandler = new _dom__WEBPACK_IMPORTED_MODULE_0__.ProjectsHandler();
const activeHomeTabHandler = new _tabs__WEBPACK_IMPORTED_MODULE_1__.ActiveHomeTabHandler();
const projectsContainer = document.getElementById('projectsContainer')

class Project {
    constructor(name) {
        this.name = name
        this.sections = []
    }
}

let allProjects = [
    {
        name: 'ToDo',
        sections: [
            {
                sectionTitle: 'Routines',
                tasks: [

                ],
            },
            {
                sectionTitle: 'Shopping',
                tasks: [

                ],
            },
        ],
    },
    {
        name: 'My Work',
        sections: [
            {
                sectionTitle: 'Presentations',
                tasks: [

                ],
            },
            {
                sectionTitle: 'Interviews',
                tasks: [

                ],
            },
        ],
    },
]

let currentProject = null;
let currentProjectIndex = null

function loadProjects() {
    projectsContainer.innerHTML = ''
    allProjects.forEach(project => {
        projectsHandler.createProjectHtml(project);
    })
    activeHomeTabHandler.handleTabsClick()
    handleProjectTabs(allProjects)
    addProjectToolsEvent()
    modalHandler.handleModals()
    modalHandler.changeModalPositionIfKeyboardOpened()
    if (currentProjectIndex === null) {

    }
    else {
        const projectTabs = document.querySelectorAll('.sidebar-project')
        projectTabs[currentProjectIndex].classList.add('sidebar-item-active')
    }
}

function addProjectEvent() {
    const addProjectButton = document.getElementById('addProjectButton');
    const projectNameInput = document.getElementById('projectNameInput');
    const closeModalButton = document.getElementById('closeModalButton');
    const modalAlert = document.getElementById('modalAlert')

    addProjectButton.addEventListener('click', () => {
        const newProjectName = projectNameInput.value.trim();

        // Check if a project with the same name already exists
        const existingProject = allProjects.find(project => project.name === newProjectName);

        if (newProjectName === '') {
            modalAlert.textContent = '(You must enter new project name)'
            projectNameInput.value = ''
            return
        }

        if (existingProject) {
            modalAlert.textContent = '(The project with this name already exists.)'
            projectNameInput.value = ''
            return;
        }

        if (allProjects.length === 5) {
            modalAlert.textContent = '(Cant have more than five projects. Upgrade to PRO.)'
            return
        }

        let newProject = new Project(newProjectName);
        allProjects.push(newProject);
        loadProjects();
        closeModalButton.click();
    });
}

function addProjectToolsSubmitEvent() {
    const renameProjectButton = document.getElementById('projectRenameButton');
    const closeModalButtonRename = document.getElementById('closeModalButtonRename');
    const deleteProjectButton = document.getElementById('projectDeleteButton');
    const closeModalButtonDelete = document.getElementById('closeModalButtonDelete');

    renameProjectButton.addEventListener('click', () => {
        const projectTabs = document.querySelectorAll('.sidebar-project')
        const projectRenameInput = document.getElementById('projectRenameInput');
        const modalAlertRename = document.getElementById('modalAlertRename')
        let existingProject = allProjects.find(project => project.name === projectRenameInput.value)

        if (projectRenameInput.value === '') {
            modalAlertRename.textContent = '(You must enter new project name)'
            projectRenameInput.value = ''
            return
        }

        if (existingProject) {
            modalAlertRename.textContent = '(The project with this name already exists)'
            projectRenameInput.value = ''
            return
        }

        if (currentProject) {
            currentProject.name = projectRenameInput.value;
            loadProjects();
            projectTabs[currentProjectIndex].click()
            closeModalButtonRename.click();
            modalHandler.handleModals();
            modalHandler.changeModalPositionIfKeyboardOpened()
        } else {

        }
        currentProject = null;
    });

    deleteProjectButton.addEventListener('click', () => {
        const tabAllTasks = document.getElementById('tabAllTasks')
        if (currentProject) {
            allProjects.splice(currentProjectIndex, 1)
            currentProjectIndex = null
            loadProjects();
            closeModalButtonDelete.click();
            tabAllTasks.click()
            modalHandler.handleModals();
            modalHandler.changeModalPositionIfKeyboardOpened()
        } else {

        }

        currentProject = null;
    });
}

function addProjectToolsEvent() {
    const renameButtons = document.querySelectorAll('.btn-rename');
    const deleteButtons = document.querySelectorAll('.btn-delete');

    renameButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentProject = allProjects[index];
            currentProjectIndex = index;
            const oldName = document.getElementById('oldName');
            oldName.textContent = `(${currentProject.name})`
        });
    });

    deleteButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentProject = allProjects[index];
            currentProjectIndex = index;
            const deleteProjectName = document.getElementById('deleteProjectName')
            deleteProjectName.textContent = `(${currentProject.name})`
        });
    });
}

function handleProjectTabs(allProjects) {
    const projectTabs = document.querySelectorAll('.sidebar-project')
    const tabs = document.querySelectorAll('.tab')
    projectTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            currentProjectIndex = index
            tabs.forEach(tab => {
                tab.classList.remove('sidebar-item-active')
            })
            tab.classList.add('sidebar-item-active')
            currentProject = allProjects[index]
            ;(0,_project_loader__WEBPACK_IMPORTED_MODULE_2__.loadActiveProject)(currentProject)
            projectsHandler.createMainProjectToolsHtml()
            addProjectToolsMainEvent()
            ;(0,_sections__WEBPACK_IMPORTED_MODULE_3__.addSectionSubmitEvent)()
            addSectionDeleteEvent()
            ;(0,_sections__WEBPACK_IMPORTED_MODULE_3__.loadCurrentProjectSections)(currentProject)
            addDeleteSectionButtonsEvent()
            ;(0,_tasks__WEBPACK_IMPORTED_MODULE_4__.loadAllSectionsTasks)(currentProject)
            modalHandler.handleModals()
            ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.closeSidebarIfSmallScreen)()
        })
    })
}

function addProjectToolsMainEvent() {
    const btnRenameMain = document.getElementById('btnRenameMain');
    const btnDeleteMain = document.getElementById('btnDeleteMain');
    const addSectionButton = document.getElementById('addSectionButton');

    btnRenameMain.addEventListener('click', () => {
        currentProject = allProjects[currentProjectIndex];
        const oldName = document.getElementById('oldName');
        oldName.textContent = `(${currentProject.name})`
    })

    btnDeleteMain.addEventListener('click', () => {
        currentProject = allProjects[currentProjectIndex];
        const deleteProjectName = document.getElementById('deleteProjectName')
        deleteProjectName.textContent = `(${currentProject.name})`
    })

    addSectionButton.addEventListener('click', () => {
        currentProject = allProjects[currentProjectIndex];
    })
}

let currentSectionIndex = null

function addDeleteSectionButtonsEvent() {
    const deleteSectionButtons = document.querySelectorAll('.remove-section-btn')

    deleteSectionButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentProject = allProjects[currentProjectIndex];
            currentSectionIndex = index;
            const deleteSectionName = document.getElementById('deleteSectionName')
            deleteSectionName.textContent = `(${currentProject.sections[index].sectionTitle})`
        })
    })
}

function addSectionDeleteEvent() {
    const deleteSectionButton = document.getElementById('deleteSectionButton')
    const closeModalButtonDeleteSection = document.getElementById('closeModalButtonDeleteSection')

    deleteSectionButton.addEventListener('click', () => {
        if (currentSectionIndex || currentSectionIndex === 0) {
            currentProject.sections.splice(currentSectionIndex, 1)
            ;(0,_sections__WEBPACK_IMPORTED_MODULE_3__.loadCurrentProjectSections)(currentProject)
            ;(0,_tasks__WEBPACK_IMPORTED_MODULE_4__.loadAllSectionsTasks)(currentProject)
            closeModalButtonDeleteSection.click();
            modalHandler.handleModals();
            modalHandler.changeModalPositionIfKeyboardOpened()
            addDeleteSectionButtonsEvent()
            ;(0,_project_loader__WEBPACK_IMPORTED_MODULE_2__.displayNoSectionsImage)()
        } else {

        }
        currentSectionIndex = null
    });
}


/***/ }),

/***/ "./src/sections.js":
/*!*************************!*\
  !*** ./src/sections.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addSectionSubmitEvent: () => (/* binding */ addSectionSubmitEvent),
/* harmony export */   loadCurrentProjectSections: () => (/* binding */ loadCurrentProjectSections)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");





const modalHandler = new _dom__WEBPACK_IMPORTED_MODULE_0__.ModalHandler();
const sectionHandler = new _dom__WEBPACK_IMPORTED_MODULE_0__.SectionHandler();
const tasksListView = document.getElementById('tasksListView')


class Section {
    constructor(title) {
        this.sectionTitle = title;
        this.tasks = [];
    }
}

function addSectionSubmitEvent() {
    const addSectionButtonSubmit = document.getElementById('addSectionButtonSubmit');
    const closeModalButtonSection = document.getElementById('closeModalButtonSection')

    addSectionButtonSubmit.addEventListener('click', () => {
        const sectionNameInput = document.getElementById('sectionNameInput');
        const modalSectionAlert = document.getElementById('modalSectionAlert')

        let existingProject = _projects__WEBPACK_IMPORTED_MODULE_1__.currentProject.sections.find(section => section.sectionTitle === sectionNameInput.value)

        if (sectionNameInput.value === '') {
            modalSectionAlert.textContent = '(You must enter new section title)'
            sectionNameInput.value = ''
            return
        }
        else if (existingProject) {
            modalSectionAlert.textContent = '(The section with this name already exists)'
            sectionNameInput.value = ''
            return
        }
        else if (_projects__WEBPACK_IMPORTED_MODULE_1__.currentProject) {
            let newSection = new Section(sectionNameInput.value)
            _projects__WEBPACK_IMPORTED_MODULE_1__.currentProject.sections.push(newSection)
            loadCurrentProjectSections(_projects__WEBPACK_IMPORTED_MODULE_1__.currentProject)
            ;(0,_tasks__WEBPACK_IMPORTED_MODULE_2__.loadAllSectionsTasks)(_projects__WEBPACK_IMPORTED_MODULE_1__.currentProject)
            ;(0,_projects__WEBPACK_IMPORTED_MODULE_1__.addDeleteSectionButtonsEvent)()
            closeModalButtonSection.click();
            modalHandler.handleModals();
            modalHandler.changeModalPositionIfKeyboardOpened()
            modalSectionAlert.textContent = ''
        } else {

        }
    });
}

function loadCurrentProjectSections(currentProject) {
    tasksListView.innerHTML = ''
    currentProject.sections.forEach(section => {
        sectionHandler.createSectionHtml(section)
    })
    ;(0,_tasks__WEBPACK_IMPORTED_MODULE_2__.addTaskFormCreationEvent)()
    ;(0,_tasks__WEBPACK_IMPORTED_MODULE_2__.getCurrentSectionIndex)()
}



/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleSidebar)
/* harmony export */ });
const sidebarToggle = document.getElementById('Open');
const sidebar = document.getElementById('sidebarMenu')
const main = document.getElementById('mainSection');
const header = document.getElementById('headerSection');
const floatingActionButton = document.getElementById('floatingActionButton');

function handleSidebar() {
    sidebarToggle.addEventListener('change', function () {
        if (sidebarToggle.checked) {
            setTimeout(() => {
                main.classList.add('blur');
                header.classList.add('blur');
                floatingActionButton.classList.add('blur');
                sidebar.classList.add('active-sidebar')
            }, 220);
            handleTransition()
        }
        else {
            main.classList.remove('blur');
            header.classList.remove('blur');
            floatingActionButton.classList.remove('blur');
            sidebar.classList.remove('active-sidebar')
            handleTransition()
        }
    });
}

function handleTransition() {
    if (sidebarToggle.checked) {
        sidebar.classList.remove('smooth-transition')
    }
    else {
        sidebar.classList.add('smooth-transition')
        setTimeout(() => {
            sidebar.classList.remove('smooth-transition')
        }, 155);
    }
}



/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActiveHomeTabHandler: () => (/* binding */ ActiveHomeTabHandler)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _alltasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alltasks */ "./src/alltasks.js");
/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./today */ "./src/today.js");
/* harmony import */ var _week__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./week */ "./src/week.js");
/* harmony import */ var _important__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./important */ "./src/important.js");







class ActiveHomeTabHandler {
    constructor() {

    }

    handleTabsClick() {
        this.homeTabs = document.querySelectorAll('.sidebar-item');
        this.projectTabs = document.querySelectorAll('.sidebar-project');
        this.homeTabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                const mainHeadingRight = document.getElementById('mainHeadingRight')
                mainHeadingRight.innerHTML = ''
                let target = e.target;
                while (target && !target.classList.contains('sidebar-item')) {
                    target = target.parentNode;
                }
                this.setActiveTab(target);
                this.openActiveTab(target)
            });
        });
    }

    setActiveTab(target) {
        this.homeTabs.forEach(tab => {
            tab.classList.remove('sidebar-item-active');
        });
        this.projectTabs.forEach(tab => {
            tab.classList.remove('sidebar-item-active');
        });
        target.classList.add('sidebar-item-active');
    }

    openActiveTab(target) {
        switch (target.id) {
            case 'tabAllTasks':
                (0,_alltasks__WEBPACK_IMPORTED_MODULE_1__["default"])();
                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.closeSidebarIfSmallScreen)()
                break;

            case 'tabToday':
                (0,_today__WEBPACK_IMPORTED_MODULE_2__["default"])();
                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.closeSidebarIfSmallScreen)()
                break;

            case 'tabThisWeek':
                (0,_week__WEBPACK_IMPORTED_MODULE_3__["default"])();
                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.closeSidebarIfSmallScreen)()
                break;

            case 'tabImportant':
                (0,_important__WEBPACK_IMPORTED_MODULE_4__["default"])();
                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.closeSidebarIfSmallScreen)()
                break;

            default:
                break
        }
    }
}

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addImportantButtonEvent: () => (/* binding */ addImportantButtonEvent),
/* harmony export */   addTaskFormCreationEvent: () => (/* binding */ addTaskFormCreationEvent),
/* harmony export */   getCurrentSectionIndex: () => (/* binding */ getCurrentSectionIndex),
/* harmony export */   loadAllSectionsTasks: () => (/* binding */ loadAllSectionsTasks)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! toastify-js */ "./node_modules/toastify-js/src/toastify.js");
/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(toastify_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var toastify_js_src_toastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! toastify-js/src/toastify.css */ "./node_modules/toastify-js/src/toastify.css");






const tasksHandler = new _dom__WEBPACK_IMPORTED_MODULE_0__.TasksHandler();
const toastNotification = document.getElementById('toastNotification')

class Task {
    constructor(description, date) {
        this.description = description;
        this.date = date;
        this.important = false;
    }
}

let currentSectionIndex = null

function addTaskFormCreationEvent() {
    const addTaskButtons = document.querySelectorAll('.add-task-container')
    addTaskButtons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            let target = e.target
            currentSectionIndex = index
            let currentSectionHtmlElement = target.closest('.section')
            let currentSectionTasksContainer = currentSectionHtmlElement.querySelector('.form-task-container')
            tasksHandler.createAddTaskFormHtml(currentSectionTasksContainer)
            addCancelButtonEvent(currentSectionTasksContainer)
            let currentAddTaskButtonContainer = currentSectionHtmlElement.querySelector('.add-task-container')
            currentAddTaskButtonContainer.classList.add('display-none')
            removeAddTaskButtonsClick(addTaskButtons)
            addTaskSubmitEvent()
        })
    })
}

function addCancelButtonEvent(currentSectionTasksContainer) {
    const cancelTaskFormButton = document.getElementById('cancelTaskFormButton')
    cancelTaskFormButton.addEventListener('click', () => {
        let addTaskForm = currentSectionTasksContainer.querySelector('.add-task-form-container');
        if (addTaskForm) {
            addTaskForm.remove();
            addAddTaskButtons()
        }
    })
}

function removeAddTaskButtonsClick(addTaskButtons) {
    addTaskButtons.forEach(button => {
        button.classList.add('disabled-click')
    })
    let addTaskIcons = document.querySelectorAll('.add-task-btn')
    addTaskIcons.forEach(icon => {
        icon.classList.add('add-task-btn-disabled')
    })
}


function addAddTaskButtons() {
    const addTaskButtons = document.querySelectorAll('.add-task-container')
    addTaskButtons.forEach(button => {
        button.classList.remove('disabled-click')
        button.classList.remove('display-none')
    })

    let addTaskIcons = document.querySelectorAll('.add-task-btn')
    addTaskIcons.forEach(icon => {
        icon.classList.remove('add-task-btn-disabled')
    })
}

function addTaskSubmitEvent() {
    const addTaskFormButton = document.getElementById('addTaskFormButton')
    const taskDescriptionInput = document.getElementById('taskDescriptionInput')
    const dateInput = document.getElementById('dateInput')
    const cancelTaskFormButton = document.getElementById('cancelTaskFormButton')
    addTaskFormButton.addEventListener('click', () => {
        if (taskDescriptionInput.value === '') {
            taskDescriptionInput.classList.add('invalid-input')
            return
        }
        else if (dateInput.value === '') {
            dateInput.classList.add('invalid-input')
            return
        }
        else {
            const dateArr = dateInput.value.split('-')
            const year = dateArr[0]
            const month = dateArr[1]
            const day = dateArr[2]
            const formattedDate = `${month}/${day}/${year}`
            const newTask = new Task(taskDescriptionInput.value, formattedDate)
            let currentSection = _projects__WEBPACK_IMPORTED_MODULE_1__.currentProject.sections[currentSectionIndex]
            currentSection.tasks.push(newTask)
            loadAllSectionsTasks(_projects__WEBPACK_IMPORTED_MODULE_1__.currentProject)
            cancelTaskFormButton.click()
        }
    })

    taskDescriptionInput.addEventListener('focus', () => {
        taskDescriptionInput.classList.remove('invalid-input')
        dateInput.classList.remove('invalid-input')
    })

    dateInput.addEventListener('focus', () => {
        dateInput.classList.remove('invalid-input')
    })
}

function loadAllSectionsTasks(currentProject) {
    const allSectionTasksContainers = document.querySelectorAll('.section-tasks')
    allSectionTasksContainers.forEach(container => {
        container.innerHTML = ''
    })
    currentProject.sections.forEach((section, index) => {
        section.tasks.forEach(task => {
            tasksHandler.createTaskHtml(allSectionTasksContainers[index], task)
        })
    })
    addImportantButtonEvent()
    addTaskCheckboxEvent()
}

let clickedSectionIndex = null

function getCurrentSectionIndex() {
    const allSectionsHtml = document.querySelectorAll('.section')
    allSectionsHtml.forEach((section, index) => {
        section.addEventListener('click', () => {
            clickedSectionIndex = index
        })
    })
}

function addImportantButtonEvent() {
    const allSectionsHtml = document.querySelectorAll('.section')
    allSectionsHtml.forEach(section => {
        let sectionImportantButtons = section.querySelectorAll('.important-btn')
        sectionImportantButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                setTimeout(() => {
                    if (!button.classList.contains('important-btn-active')) {
                        setTaskAsImportant(button, index)
                    }
                    else if (button.classList.contains('important-btn-active')) {
                        setTaskAsUnimportant(button, index)
                    }
                })
            }, 500);
        })
    })
}

function setTaskAsImportant(clickedButton, index) {
    clickedButton.classList.add('important-btn-active')
    _projects__WEBPACK_IMPORTED_MODULE_1__.currentProject.sections[clickedSectionIndex].tasks[index].important = true
}

function setTaskAsUnimportant(clickedButton, index) {
    clickedButton.classList.remove('important-btn-active')
    _projects__WEBPACK_IMPORTED_MODULE_1__.currentProject.sections[clickedSectionIndex].tasks[index].important = false
}

function addTaskCheckboxEvent(){
    const allSectionsHtml = document.querySelectorAll('.section')
    allSectionsHtml.forEach(section => {
        let sectionCheckboxes = section.querySelectorAll('.checkbox')
        sectionCheckboxes.forEach((checkbox, checkboxIndex) => {
            checkbox.addEventListener('click', () => {
                setTimeout(() => {
                   checkTaskAsCompleted(checkboxIndex)
                }, 10)
            });
        })
    })
}

function checkTaskAsCompleted(checkboxIndex){
    _projects__WEBPACK_IMPORTED_MODULE_1__.allProjects[_projects__WEBPACK_IMPORTED_MODULE_1__.currentProjectIndex].sections[clickedSectionIndex].tasks.splice(checkboxIndex, 1)
    setTimeout(() => {
        loadAllSectionsTasks(_projects__WEBPACK_IMPORTED_MODULE_1__.currentProject)
        toastify_js__WEBPACK_IMPORTED_MODULE_2___default()({
            text: "1 task completed",
            className: "custom-toast", // Apply the custom CSS class
            duration: 3000,
            gravity: "bottom", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
          }).showToast();
    }, 300);
}


/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadTodayTasks)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var _img_today48x48_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/today48x48.svg */ "./src/img/today48x48.svg");
/* harmony import */ var _img_today_no_tasks_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/today-no-tasks.png */ "./src/img/today-no-tasks.png");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! toastify-js */ "./node_modules/toastify-js/src/toastify.js");
/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(toastify_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var toastify_js_src_toastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! toastify-js/src/toastify.css */ "./node_modules/toastify-js/src/toastify.css");








const tasksHandler = new _dom__WEBPACK_IMPORTED_MODULE_2__.TasksHandler()
const projectsHandler = new _dom__WEBPACK_IMPORTED_MODULE_2__.ProjectsHandler()

const tasksListView = document.getElementById('tasksListView')
const headerSection = document.getElementById('headerSection')
const floatingActionButton = document.getElementById('floatingActionButton')

let allTodayTasks = []

class TodayTask {
    constructor(projectIndexToday, sectionIndexToday, taskIndexToday){
        this.projectIndexToday = projectIndexToday
        this.sectionIndexToday = sectionIndexToday
        this.taskIndexToday = taskIndexToday
    }
}

function loadTodayTasks() {
    setTodayTab();
    loadTasks()
}

function setTodayTab() {
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')
    const dateDisplayer = document.querySelector('.date-displayer')

    const svgToday = new Image()
    svgToday.src = _img_today48x48_svg__WEBPACK_IMPORTED_MODULE_0__;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgToday)

    const todayDate = new Date()
    const todayDateString = `Date: ${(0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(todayDate, 'MMMM/dd/yyyy')}`;

    currentTabName.textContent = 'Today'
    tasksHandler.createRightDateDisplay(mainHeadingRight, todayDateString)

    dateDisplayer.innerHTML = ''
    tasksHandler.createDateDisplay(dateDisplayer, todayDateString)

    tasksListView.innerHTML = ''
    tasksListView.classList.add('height-auto')
    floatingActionButton.innerHTML = ''
    headerSection.className = ''
    headerSection.classList.add('header-today')
}

function loadTasks(){
    tasksListView.innerHTML = ''
    allTodayTasks = []
    _projects__WEBPACK_IMPORTED_MODULE_3__.allProjects.forEach((project, projectIndexToday) => {
        projectsHandler.createProjectHtmlForTabs(tasksListView, project);
        const tasksContainerAllTasks = document.querySelectorAll('.tasks-container-all-tasks');

        project.sections.forEach((section, sectionIndexToday) => {
            section.tasks.forEach((task, taskIndexToday) => {
                if (taskIsToday(task.date)) {
                    tasksHandler.createTaskHtml(tasksContainerAllTasks[projectIndexToday], task);
                    
                    let newTodayTask = new TodayTask(projectIndexToday, sectionIndexToday, taskIndexToday)
                    allTodayTasks.push(newTodayTask)
                } else {
                    return;
                }
            });
        });
    });
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.removeEmptyProjectsFromHTML)()
    displayNoTasksImage()
    addTodayTaskCheckboxEvent()
}

function taskIsToday(taskDate) {
    let currentTaskDate = new Date(taskDate)
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(currentTaskDate) === true) {
        return true
    }
    else {
        return false
    }
}

function displayNoTasksImage() {
    if (tasksListView.innerHTML === '') {
        tasksListView.classList.remove('height-auto')
        const container = document.createElement('div')
        container.classList.add('no-tasks-img-container')

        const noTasksImageToday = new Image()
        noTasksImageToday.src = _img_today_no_tasks_png__WEBPACK_IMPORTED_MODULE_1__
        noTasksImageToday.classList.add('no-tasks-img-today')

        const text = document.createElement('div')
        text.textContent = `You don't have any tasks for today!`
        text.classList.add('no-tasks-img-text')

        container.appendChild(noTasksImageToday)
        container.appendChild(text)
        tasksListView.appendChild(container)
    }
}

function addTodayTaskCheckboxEvent(){
    let todayCheckboxes = document.querySelectorAll('.checkbox')
    todayCheckboxes.forEach((checkbox, checkboxIndex) => {
        checkbox.addEventListener('click', () => {
            setTimeout(() => {
                checkTaskAsCompleted(checkboxIndex, allTodayTasks[checkboxIndex].projectIndexToday, allTodayTasks[checkboxIndex].sectionIndexToday, allTodayTasks[checkboxIndex].taskIndexToday)
            }, 10);
        })
    })    
}

function checkTaskAsCompleted(checkboxIndex, projectIndexToday, sectionIndexToday, taskIndexToday){
    _projects__WEBPACK_IMPORTED_MODULE_3__.allProjects[projectIndexToday].sections[sectionIndexToday].tasks.splice(taskIndexToday, 1)
    allTodayTasks.splice(checkboxIndex, 1)
    setTimeout(() => {
        loadTasks()
        toastify_js__WEBPACK_IMPORTED_MODULE_4___default()({
            text: "1 task completed",
            className: "custom-toast-red", // Apply the custom CSS class
            duration: 3000,
            gravity: "bottom", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
          }).showToast();
    }, 300);
}



/***/ }),

/***/ "./src/week.js":
/*!*********************!*\
  !*** ./src/week.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadWeekTasks)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var _img_thisweek48x48_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/thisweek48x48.svg */ "./src/img/thisweek48x48.svg");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _img_this_week_no_tasks_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/this-week-no-tasks.png */ "./src/img/this-week-no-tasks.png");
/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! toastify-js */ "./node_modules/toastify-js/src/toastify.js");
/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(toastify_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var toastify_js_src_toastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! toastify-js/src/toastify.css */ "./node_modules/toastify-js/src/toastify.css");








const tasksHandler = new _dom__WEBPACK_IMPORTED_MODULE_2__.TasksHandler()
const projectsHandler = new _dom__WEBPACK_IMPORTED_MODULE_2__.ProjectsHandler()

const tasksListView = document.getElementById('tasksListView')
const headerSection = document.getElementById('headerSection')
const floatingActionButton = document.getElementById('floatingActionButton')

let fullDateString = null

let allWeekTasks = []

class WeekTask {
    constructor(projectIndexWeek, sectionIndexWeek, taskIndexWeek){
        this.projectIndexWeek = projectIndexWeek
        this.sectionIndexWeek = sectionIndexWeek
        this.taskIndexWeek = taskIndexWeek
    }
}

function loadWeekTasks() {
    setWeekTab()
    loadTasks()
}

function setWeekTab() {
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')
    const mainHeadingRight = document.getElementById('mainHeadingRight')
    const dateDisplayer = document.querySelector('.date-displayer')

    const svgWeek = new Image()
    svgWeek.src = _img_thisweek48x48_svg__WEBPACK_IMPORTED_MODULE_0__;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgWeek)

    const currentDate = new Date()
    const thisWeekStart = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(currentDate)
    const thisWeekEnd = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(thisWeekStart, 6);

    const formattedStartDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(thisWeekStart, 'MM/dd/yyyy');
    const formattedEndDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(thisWeekEnd, 'MM/dd/yyyy');

    fullDateString = `Week: ${formattedStartDate} - ${formattedEndDate}`

    currentTabName.textContent = 'This Week'
    tasksHandler.createRightDateDisplay(mainHeadingRight, fullDateString)

    dateDisplayer.innerHTML = ''
    tasksHandler.createDateDisplay(dateDisplayer, fullDateString)

    tasksListView.innerHTML = ''
    tasksListView.classList.add('height-auto')
    floatingActionButton.innerHTML = ''
    headerSection.className = ''
    headerSection.classList.add('header-week')
}

function loadTasks(){
    tasksListView.innerHTML = ''
    allWeekTasks = []
    _projects__WEBPACK_IMPORTED_MODULE_1__.allProjects.forEach((project, projectIndexWeek) => {
        projectsHandler.createProjectHtmlForTabs(tasksListView, project);
        const tasksContainerAllTasks = document.querySelectorAll('.tasks-container-all-tasks');

        project.sections.forEach((section, sectionIndexWeek) => {
            section.tasks.forEach((task, taskIndexWeek) => {
                if (taskHasDateForThisWeek(task.date)) {
                    tasksHandler.createTaskHtml(tasksContainerAllTasks[projectIndexWeek], task);
                    
                    let newWeekTask = new WeekTask(projectIndexWeek, sectionIndexWeek, taskIndexWeek)
                    allWeekTasks.push(newWeekTask)
                } else {
                    return;
                }
            });
        });
    });
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.removeEmptyProjectsFromHTML)()
    displayNoTasksImage()
    addWeekTaskCheckboxEvent()
}

function taskHasDateForThisWeek(taskDate) {
    let currentTaskDate = new Date(taskDate)
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_9__["default"])(currentTaskDate) === true) {
        return true
    }
    else {
        return false
    }
}

function displayNoTasksImage() {
    if (tasksListView.innerHTML === '') {
        tasksListView.classList.remove('height-auto')
        const container = document.createElement('div')
        container.classList.add('no-tasks-img-container')

        const noTasksImageThisWeek = new Image()
        noTasksImageThisWeek.src = _img_this_week_no_tasks_png__WEBPACK_IMPORTED_MODULE_3__
        noTasksImageThisWeek.classList.add('no-tasks-img-week')

        const text = document.createElement('div')
        text.textContent = `You don't have any tasks for this week!`
        text.classList.add('no-tasks-img-text')

        container.appendChild(noTasksImageThisWeek)
        container.appendChild(text)
        tasksListView.appendChild(container)
    }
}

function addWeekTaskCheckboxEvent(){
    let weekCheckboxes = document.querySelectorAll('.checkbox')
    weekCheckboxes.forEach((checkbox, checkboxIndex) => {
        checkbox.addEventListener('click', () => {
            setTimeout(() => {
                checkTaskAsCompleted(checkboxIndex, allWeekTasks[checkboxIndex].projectIndexWeek, allWeekTasks[checkboxIndex].sectionIndexWeek, allWeekTasks[checkboxIndex].taskIndexWeek)
            }, 10);
        })
    })    
}

function checkTaskAsCompleted(checkboxIndex, projectIndexWeek, sectionIndexWeek, taskIndexWeek){
    _projects__WEBPACK_IMPORTED_MODULE_1__.allProjects[projectIndexWeek].sections[sectionIndexWeek].tasks.splice(taskIndexWeek, 1)
    allWeekTasks.splice(checkboxIndex, 1)
    setTimeout(() => {
        loadTasks()
        console.log('invoked')
        toastify_js__WEBPACK_IMPORTED_MODULE_4___default()({
            text: "1 task completed",
            className: "custom-toast-blue", // Apply the custom CSS class
            duration: 3000,
            gravity: "bottom", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
          }).showToast();
    }, 300);
}


/***/ }),

/***/ "./src/fonts/TT Interphases Pro Trial Bold.ttf":
/*!*****************************************************!*\
  !*** ./src/fonts/TT Interphases Pro Trial Bold.ttf ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b64bd9dc77f4ed8c4148.ttf";

/***/ }),

/***/ "./src/fonts/TT Interphases Pro Trial DemiBold.ttf":
/*!*********************************************************!*\
  !*** ./src/fonts/TT Interphases Pro Trial DemiBold.ttf ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "334428a4b9bfb949cf25.ttf";

/***/ }),

/***/ "./src/img/add-task-disabled.svg":
/*!***************************************!*\
  !*** ./src/img/add-task-disabled.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "62f2be84f885ce5e2b94.svg";

/***/ }),

/***/ "./src/img/add-task-hover.svg":
/*!************************************!*\
  !*** ./src/img/add-task-hover.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c460d30e5befb6f7724b.svg";

/***/ }),

/***/ "./src/img/add-task.svg":
/*!******************************!*\
  !*** ./src/img/add-task.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "88e8b7ac107fdc7a10ae.svg";

/***/ }),

/***/ "./src/img/alltasks48x48.svg":
/*!***********************************!*\
  !*** ./src/img/alltasks48x48.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0e4690f54129b9d0b57a.svg";

/***/ }),

/***/ "./src/img/delete-hover.svg":
/*!**********************************!*\
  !*** ./src/img/delete-hover.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5aa88a81ccdb660ffae3.svg";

/***/ }),

/***/ "./src/img/delete-section-hover.svg":
/*!******************************************!*\
  !*** ./src/img/delete-section-hover.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "80eaec6ebe9b486427e7.svg";

/***/ }),

/***/ "./src/img/delete.svg":
/*!****************************!*\
  !*** ./src/img/delete.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f95354aed431e56ccc38.svg";

/***/ }),

/***/ "./src/img/important-disabled.svg":
/*!****************************************!*\
  !*** ./src/img/important-disabled.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "22abb0b9bf3ed2d717d6.svg";

/***/ }),

/***/ "./src/img/important-no-tasks.png":
/*!****************************************!*\
  !*** ./src/img/important-no-tasks.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "55bf65038bde95cc8e37.png";

/***/ }),

/***/ "./src/img/important.svg":
/*!*******************************!*\
  !*** ./src/img/important.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "47c3b96dc36f1033ceb6.svg";

/***/ }),

/***/ "./src/img/no-sections.png":
/*!*********************************!*\
  !*** ./src/img/no-sections.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "53782a9d233861804ca1.png";

/***/ }),

/***/ "./src/img/project.svg":
/*!*****************************!*\
  !*** ./src/img/project.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3cc32b781f5de4ce023f.svg";

/***/ }),

/***/ "./src/img/project48x48.svg":
/*!**********************************!*\
  !*** ./src/img/project48x48.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9dead31440f53eb62dc9.svg";

/***/ }),

/***/ "./src/img/rename-hover.svg":
/*!**********************************!*\
  !*** ./src/img/rename-hover.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8f04fc12281a9e452d39.svg";

/***/ }),

/***/ "./src/img/rename.svg":
/*!****************************!*\
  !*** ./src/img/rename.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "160edcbb4ac3ccf9267f.svg";

/***/ }),

/***/ "./src/img/this-week-no-tasks.png":
/*!****************************************!*\
  !*** ./src/img/this-week-no-tasks.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4560ef8f89a8591b13d9.png";

/***/ }),

/***/ "./src/img/thisweek48x48.svg":
/*!***********************************!*\
  !*** ./src/img/thisweek48x48.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c486808579e22120014d.svg";

/***/ }),

/***/ "./src/img/today-no-tasks.png":
/*!************************************!*\
  !*** ./src/img/today-no-tasks.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "50a948f682c348466314.png";

/***/ }),

/***/ "./src/img/today48x48.svg":
/*!********************************!*\
  !*** ./src/img/today48x48.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3994fdf0f5069dc4c759.svg";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _alltasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alltasks */ "./src/alltasks.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects */ "./src/projects.js");






(function websiteHandler(){
    const modalHandler = new _dom__WEBPACK_IMPORTED_MODULE_3__.ModalHandler(); 

    (0,_sidebar__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_alltasks__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_projects__WEBPACK_IMPORTED_MODULE_4__.loadProjects)();
    (0,_projects__WEBPACK_IMPORTED_MODULE_4__.addProjectEvent)();
    (0,_projects__WEBPACK_IMPORTED_MODULE_4__.addProjectToolsSubmitEvent)()
    modalHandler.handleModals();
    modalHandler.changeModalPositionIfKeyboardOpened()
    modalHandler.handleSubmit()
})();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsb0NBQW9DO0FBQzlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG9DQUFvQztBQUM5RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG9DQUFvQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsY0FBYyxjQUFjLGFBQWEsY0FBYyxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sV0FBVyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFB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QTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsV0FBVyxpRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcsaUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1YmlEO0FBQ1Y7QUFDYTs7QUFFckQseUJBQXlCLDhDQUFZO0FBQ3JDLDRCQUE0QixpREFBZTs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0EsSUFBSSxrREFBVztBQUNmO0FBQ0E7O0FBRUEsOEJBQThCOztBQUU5QjtBQUNBOztBQUVBLGNBQWM7QUFDZCxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsbURBQVk7QUFDbEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGFBQWEsRUFBRSxZQUFZO0FBQ25FOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkUyQzs7QUFFcEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5Qiw2Q0FBVzs7QUFFcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsYUFBYTs7QUFFOUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7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Q0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUNpQjtBQUNDO0FBQ0Q7QUFDa0Q7O0FBRXZGO0FBQ0EsNkJBQTZCLDhDQUFZOztBQUV6QyxJQUFJLG9EQUFhO0FBQ2pCLElBQUkscURBQVk7QUFDaEIsSUFBSSx1REFBWTtBQUNoQixJQUFJLDBEQUFlO0FBQ25CLElBQUkscUVBQTBCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy90b2FzdGlmeS1qcy9zcmMvdG9hc3RpZnkuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZERheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUaGlzV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvdG9hc3RpZnktanMvc3JjL3RvYXN0aWZ5LmNzcz8yYWU5Iiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvdG9hc3RpZnktanMvc3JjL3RvYXN0aWZ5LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2FsbHRhc2tzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbXBvcnRhbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcHJvamVjdC1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc2VjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy90YWJzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3RvZGF5LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3dlZWsuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiFcbiAqIFRvYXN0aWZ5IGpzIDEuMTIuMFxuICogaHR0cHM6Ly9naXRodWIuY29tL2FwdmFydW4vdG9hc3RpZnktanNcbiAqIEBsaWNlbnNlIE1JVCBsaWNlbnNlZFxuICpcbiAqIENvcHlyaWdodCAoQykgMjAxOCBWYXJ1biBBIFBcbiAqL1xuXG4udG9hc3RpZnkge1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxMHB4IDM2cHggLTRweCByZ2JhKDc3LCA5NiwgMjMyLCAwLjMpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzczYTVmZiwgIzU0NzdmNSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzczYTVmZiwgIzU0NzdmNSk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbWF4LXdpZHRoOiBjYWxjKDUwJSAtIDIwcHgpO1xuICAgIHotaW5kZXg6IDIxNDc0ODM2NDc7XG59XG5cbi50b2FzdGlmeS5vbiB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnRvYXN0LWNsb3NlIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gICAgcGFkZGluZzogMCA1cHg7XG59XG5cbi50b2FzdGlmeS1yaWdodCB7XG4gICAgcmlnaHQ6IDE1cHg7XG59XG5cbi50b2FzdGlmeS1sZWZ0IHtcbiAgICBsZWZ0OiAxNXB4O1xufVxuXG4udG9hc3RpZnktdG9wIHtcbiAgICB0b3A6IC0xNTBweDtcbn1cblxuLnRvYXN0aWZ5LWJvdHRvbSB7XG4gICAgYm90dG9tOiAtMTUwcHg7XG59XG5cbi50b2FzdGlmeS1yb3VuZGVkIHtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4udG9hc3RpZnktYXZhdGFyIHtcbiAgICB3aWR0aDogMS41ZW07XG4gICAgaGVpZ2h0OiAxLjVlbTtcbiAgICBtYXJnaW46IC03cHggNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLnRvYXN0aWZ5LWNlbnRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgICBtYXgtd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgICAudG9hc3RpZnktcmlnaHQsIC50b2FzdGlmeS1sZWZ0IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvdG9hc3RpZnktanMvc3JjL3RvYXN0aWZ5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7O0VBTUU7O0FBRUY7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQix1RkFBdUY7SUFDdkYsNkRBQTZEO0lBQzdELHFEQUFxRDtJQUNyRCxlQUFlO0lBQ2YsVUFBVTtJQUNWLHdEQUF3RDtJQUN4RCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxZQUFZO0lBQ1osZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLHNCQUFzQjtJQUN0QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsT0FBTztRQUNQLFFBQVE7UUFDUixzQkFBc0I7SUFDMUI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiFcXG4gKiBUb2FzdGlmeSBqcyAxLjEyLjBcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYXB2YXJ1bi90b2FzdGlmeS1qc1xcbiAqIEBsaWNlbnNlIE1JVCBsaWNlbnNlZFxcbiAqXFxuICogQ29weXJpZ2h0IChDKSAyMDE4IFZhcnVuIEEgUFxcbiAqL1xcblxcbi50b2FzdGlmeSB7XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxMHB4IDM2cHggLTRweCByZ2JhKDc3LCA5NiwgMjMyLCAwLjMpO1xcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM3M2E1ZmYsICM1NDc3ZjUpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNzNhNWZmLCAjNTQ3N2Y1KTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbWF4LXdpZHRoOiBjYWxjKDUwJSAtIDIwcHgpO1xcbiAgICB6LWluZGV4OiAyMTQ3NDgzNjQ3O1xcbn1cXG5cXG4udG9hc3RpZnkub24ge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udG9hc3QtY2xvc2Uge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBvcGFjaXR5OiAwLjQ7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG5cXG4udG9hc3RpZnktcmlnaHQge1xcbiAgICByaWdodDogMTVweDtcXG59XFxuXFxuLnRvYXN0aWZ5LWxlZnQge1xcbiAgICBsZWZ0OiAxNXB4O1xcbn1cXG5cXG4udG9hc3RpZnktdG9wIHtcXG4gICAgdG9wOiAtMTUwcHg7XFxufVxcblxcbi50b2FzdGlmeS1ib3R0b20ge1xcbiAgICBib3R0b206IC0xNTBweDtcXG59XFxuXFxuLnRvYXN0aWZ5LXJvdW5kZWQge1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4udG9hc3RpZnktYXZhdGFyIHtcXG4gICAgd2lkdGg6IDEuNWVtO1xcbiAgICBoZWlnaHQ6IDEuNWVtO1xcbiAgICBtYXJnaW46IC03cHggNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbi50b2FzdGlmeS1jZW50ZXIge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWF4LXdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XFxuICAgIC50b2FzdGlmeS1yaWdodCwgLnRvYXN0aWZ5LWxlZnQge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9UVCBJbnRlcnBoYXNlcyBQcm8gVHJpYWwgQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1RUIEludGVycGhhc2VzIFBybyBUcmlhbCBEZW1pQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9yZW5hbWUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWcvcmVuYW1lLWhvdmVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vaW1nL2RlbGV0ZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9kZWxldGUtaG92ZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi9pbWcvaW1wb3J0YW50LWRpc2FibGVkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fID0gbmV3IFVSTChcIi4vaW1nL2ltcG9ydGFudC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9kZWxldGUtc2VjdGlvbi1ob3Zlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9hZGQtdGFzay5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18gPSBuZXcgVVJMKFwiLi9pbWcvYWRkLXRhc2stZGlzYWJsZWQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzExX19fID0gbmV3IFVSTChcIi4vaW1nL2FkZC10YXNrLWhvdmVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9wcm9qZWN0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzExX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnVFRCb2xkJztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1RUU2VtaUJvbGQnO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogNi4yNSU7XG59XG5cbmJvZHkge1xuICBmb250LXNpemU6IDE2cmVtO1xuICBmb250LWZhbWlseTogJ1RUU2VtaUJvbGQnO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbjpyb290IHtcbiAgLS1wcmltYXJ5LWNvbG9yLWxpZ2h0OiAjMTI2ZmI1O1xuICAtLXNlY29uZGFyeS1jb2xvci1saWdodDogIzEwYTg4NTtcbiAgLS10ZXJ0aWFyeS1jb2xvci1saWdodDogI2ZmNTQzNjtcblxuICAtLXByaW1hcnktY29sb3ItZGFyazogIzRlY2JmYjtcbiAgLS1zZWNvbmRhcnktY29sb3ItZGFyazogIzc0ZmZlMDtcbiAgLS10ZXJ0aWFyeS1jb2xvci1kYXJrOiAjZmU4OTc1O1xuXG4gIC0tYmFja2dyb3VuZC1saWdodDogI2ZmZmZmZjtcbiAgLS1zZWNvbmRhcnktYmFja2dyb3VuZC1saWdodDogI2ZhZmFmYTtcbiAgLS1iYWNrZ3JvdW5kLWRhcms6ICMyMTI4NDQ7XG4gIC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtZGFyazogI2Y0ZjVmNztcblxuICAtLWhvdmVyLWxpZ2h0OiAjZGRlMGU0O1xuXG4gIC0tdGV4dC1saWdodDogIzMwMzMzNjtcbiAgLS10ZXh0LWRhcms6ICNmZmZmZmY7XG5cbiAgLS13YXJuaW5nLWxpZ2h0OiAjZmY1NDM2O1xuICAtLXdhcm5pbmctZGFyazogI0ZGRjIwMDtcblxuICAtLW9yYW5nZS1jb2xvcjogI2ZmOTkwMDtcbiAgLS15ZWxsb3ctY29sb3I6ICNmZmMzMDA7XG59XG5cbi5ib2R5LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMTBweCByZXBlYXQoNCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IHJlcGVhdCgxMSwgMWZyKTtcbn1cblxuLnNpZGViYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZC1saWdodCk7XG4gIGdyaWQtYXJlYTogMSAvIDEgLyAtMSAvIDI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XG4gIGdyaWQtYXJlYTogMiAvIDIgLyAxMyAvIC0xO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwcHggNzBweCAwcHggNzBweDtcbn1cblxuI2hlYWRlclNlY3Rpb24ge1xuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIC0xO1xuICBoZWlnaHQ6IDEwcHg7XG59XG5cbi5zaWRlYmFyLWxpc3Qge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjNweDtcbn1cblxuLnNpZGViYXItbGlzdC1zZXR0aW5nc3tcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDVweDtcbn1cblxuLnByb2plY3RzLXNpZGViYXItbGlzdCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5zaWRlYmFyLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDdweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zaWRlYmFyLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1saWdodCk7XG59XG5cbi5zaWRlYmFyLWl0ZW1zIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAxNXJlbTtcbn1cblxuLnNpZGViYXItYWRkLXByb2plY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDdweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zaWRlYmFyLWFkZC1wcm9qZWN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xufVxuXG4uc2lkZWJhci1oZWFkZXIge1xuICBmb250LXNpemU6IDIxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LWZhbWlseTogJ1RUQm9sZCc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNpZGViYXItYm90dG9tIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbi5zZXR0aW5ncy1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xufVxuXG4uc3dpdGNoIHtcbiAgLyogc3dpdGNoICovXG4gIC0tc3dpdGNoLXdpZHRoOiA0NnB4O1xuICAtLXN3aXRjaC1oZWlnaHQ6IDI0cHg7XG4gIC0tc3dpdGNoLWJnOiByZ2IoNDgsIDUxLCA1NCk7XG4gIC0tc3dpdGNoLWNoZWNrZWQtYmc6IHJnYigxOSwgMTk3LCAxNTYpO1xuICAtLXN3aXRjaC1vZmZzZXQ6IGNhbGMoKHZhcigtLXN3aXRjaC1oZWlnaHQpIC0gdmFyKC0tY2lyY2xlLWRpYW1ldGVyKSkgLyAyKTtcbiAgLS1zd2l0Y2gtdHJhbnNpdGlvbjogYWxsIC4ycyBjdWJpYy1iZXppZXIoMC4yNywgMC4yLCAwLjI1LCAxLjUxKTtcbiAgLyogY2lyY2xlICovXG4gIC0tY2lyY2xlLWRpYW1ldGVyOiAxOHB4O1xuICAtLWNpcmNsZS1iZzogI2ZmZjtcbiAgLS1jaXJjbGUtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDE0NiwgMTQ2LCAxNDYsIDAuNDUpO1xuICAtLWNpcmNsZS1jaGVja2VkLXNoYWRvdzogLTFweCAxcHggMnB4IHJnYmEoMTYzLCAxNjMsIDE2MywgMC40NSk7XG4gIC0tY2lyY2xlLXRyYW5zaXRpb246IHZhcigtLXN3aXRjaC10cmFuc2l0aW9uKTtcbiAgLyogaWNvbiAqL1xuICAtLWljb24tdHJhbnNpdGlvbjogYWxsIC4ycyBjdWJpYy1iZXppZXIoMC4yNywgMC4yLCAwLjI1LCAxLjUxKTtcbiAgLS1pY29uLWNyb3NzLWNvbG9yOiB2YXIoLS1zd2l0Y2gtYmcpO1xuICAtLWljb24tY3Jvc3Mtc2l6ZTogNnB4O1xuICAtLWljb24tY2hlY2ttYXJrLWNvbG9yOiB2YXIoLS1zd2l0Y2gtY2hlY2tlZC1iZyk7XG4gIC0taWNvbi1jaGVja21hcmstc2l6ZTogMTBweDtcbiAgLyogZWZmZWN0IGxpbmUgKi9cbiAgLS1lZmZlY3Qtd2lkdGg6IGNhbGModmFyKC0tY2lyY2xlLWRpYW1ldGVyKSAvIDIpO1xuICAtLWVmZmVjdC1oZWlnaHQ6IGNhbGModmFyKC0tZWZmZWN0LXdpZHRoKSAvIDIgLSAxcHgpO1xuICAtLWVmZmVjdC1iZzogdmFyKC0tY2lyY2xlLWJnKTtcbiAgLS1lZmZlY3QtYm9yZGVyLXJhZGl1czogMXB4O1xuICAtLWVmZmVjdC10cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uc3dpdGNoIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnN3aXRjaCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnN3aXRjaCBzdmcge1xuICAtd2Via2l0LXRyYW5zaXRpb246IHZhcigtLWljb24tdHJhbnNpdGlvbik7XG4gIC1vLXRyYW5zaXRpb246IHZhcigtLWljb24tdHJhbnNpdGlvbik7XG4gIHRyYW5zaXRpb246IHZhcigtLWljb24tdHJhbnNpdGlvbik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uc3dpdGNoIC5jaGVja21hcmsge1xuICB3aWR0aDogdmFyKC0taWNvbi1jaGVja21hcmstc2l6ZSk7XG4gIGNvbG9yOiB2YXIoLS1pY29uLWNoZWNrbWFyay1jb2xvcik7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbi5zd2l0Y2ggLmNyb3NzIHtcbiAgd2lkdGg6IHZhcigtLWljb24tY3Jvc3Mtc2l6ZSk7XG4gIGNvbG9yOiB2YXIoLS1pY29uLWNyb3NzLWNvbG9yKTtcbn1cblxuLnNsaWRlciB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IHZhcigtLXN3aXRjaC13aWR0aCk7XG4gIGhlaWdodDogdmFyKC0tc3dpdGNoLWhlaWdodCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN3aXRjaC1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB2YXIoLS1zd2l0Y2gtdHJhbnNpdGlvbik7XG4gIC1vLXRyYW5zaXRpb246IHZhcigtLXN3aXRjaC10cmFuc2l0aW9uKTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tc3dpdGNoLXRyYW5zaXRpb24pO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaXJjbGUge1xuICB3aWR0aDogdmFyKC0tY2lyY2xlLWRpYW1ldGVyKTtcbiAgaGVpZ2h0OiB2YXIoLS1jaXJjbGUtZGlhbWV0ZXIpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jaXJjbGUtYmcpO1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IHZhcigtLWNpcmNsZS1zaGFkb3cpO1xuICBib3gtc2hhZG93OiB2YXIoLS1jaXJjbGUtc2hhZG93KTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdmFyKC0tY2lyY2xlLXRyYW5zaXRpb24pO1xuICAtby10cmFuc2l0aW9uOiB2YXIoLS1jaXJjbGUtdHJhbnNpdGlvbik7XG4gIHRyYW5zaXRpb246IHZhcigtLWNpcmNsZS10cmFuc2l0aW9uKTtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiB2YXIoLS1zd2l0Y2gtb2Zmc2V0KTtcbn1cblxuLnNsaWRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogdmFyKC0tZWZmZWN0LXdpZHRoKTtcbiAgaGVpZ2h0OiB2YXIoLS1lZmZlY3QtaGVpZ2h0KTtcbiAgbGVmdDogY2FsYyh2YXIoLS1zd2l0Y2gtb2Zmc2V0KSArICh2YXIoLS1lZmZlY3Qtd2lkdGgpIC8gMikpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1lZmZlY3QtYmcpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1lZmZlY3QtYm9yZGVyLXJhZGl1cyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdmFyKC0tZWZmZWN0LXRyYW5zaXRpb24pO1xuICAtby10cmFuc2l0aW9uOiB2YXIoLS1lZmZlY3QtdHJhbnNpdGlvbik7XG4gIHRyYW5zaXRpb246IHZhcigtLWVmZmVjdC10cmFuc2l0aW9uKTtcbn1cblxuLyogYWN0aW9ucyAqL1xuXG4uc3dpdGNoIGlucHV0OmNoZWNrZWQrLnNsaWRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN3aXRjaC1jaGVja2VkLWJnKTtcbn1cblxuLnN3aXRjaCBpbnB1dDpjaGVja2VkKy5zbGlkZXIgLmNoZWNrbWFyayB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCsuc2xpZGVyIC5jcm9zcyB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbi5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCsuc2xpZGVyOjpiZWZvcmUge1xuICBsZWZ0OiBjYWxjKDEwMCUgLSB2YXIoLS1lZmZlY3Qtd2lkdGgpIC0gKHZhcigtLWVmZmVjdC13aWR0aCkgLyAyKSAtIHZhcigtLXN3aXRjaC1vZmZzZXQpKTtcbn1cblxuLnN3aXRjaCBpbnB1dDpjaGVja2VkKy5zbGlkZXIgLmNpcmNsZSB7XG4gIGxlZnQ6IGNhbGMoMTAwJSAtIHZhcigtLWNpcmNsZS1kaWFtZXRlcikgLSB2YXIoLS1zd2l0Y2gtb2Zmc2V0KSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogdmFyKC0tY2lyY2xlLWNoZWNrZWQtc2hhZG93KTtcbiAgYm94LXNoYWRvdzogdmFyKC0tY2lyY2xlLWNoZWNrZWQtc2hhZG93KTtcbn1cblxuI09wZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogMjBweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI09wZW46Y2hlY2tlZH4jc2lkZWJhck1lbnUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbn1cblxuLndyYXBwZXIge1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi53cmFwcGVyLnNlY29uZCxcbi53cmFwcGVyLnRoaXJkIHtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4jT3BlbjpjaGVja2Vkfi5zaWRlYmFyLWljb24+LndyYXBwZXIuc2Vjb25kIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuI09wZW46Y2hlY2tlZH4uc2lkZWJhci1pY29uPi53cmFwcGVyLmZpcnN0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIG1hcmdpbi10b3A6IDlweDtcbn1cblxuI09wZW46Y2hlY2tlZH4uc2lkZWJhci1pY29uPi53cmFwcGVyLnRoaXJkIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTMxNWRlZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBtYXJnaW4tdG9wOiAtOXB4O1xufVxuXG4uYmx1ciB7XG4gIGZpbHRlcjogYmx1cig1cHgpO1xufVxuXG4uc2lkZWJhci1pY29uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNpZGViYXItaXRlbS1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1saWdodCk7XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA3cHg7XG59XG5cbi5zaWRlYmFyLXByb2plY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc2lkZWJhci1wcm9qZWN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xufVxuXG4uc2lkZWJhci1wcm9qZWN0OmhvdmVyIC5wcm9qZWN0LW5hbWUtaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1saWdodCk7XG59XG5cbi5zaWRlYmFyLXByb2plY3QtYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xufVxuXG4uc2lkZWJhci1wcm9qZWN0OmhvdmVyIC5wcm9qZWN0LXRvb2xzIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLnNtb290aC10cmFuc2l0aW9uIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4ubWVudS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tZW51LW9wdGlvbnMge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjVweDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5tZW51LW9wdGlvbnMgbGkge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnUtb3B0aW9ucyBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcbn1cblxuLnByb2plY3QtdG9vbHMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucHJvamVjdC1uYW1lLWlucHV0IHtcbiAgZm9udC1mYW1pbHk6ICdUVFNlbWlCb2xkJztcbiAgZm9udC1zaXplOiAxNXJlbTtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFza3MtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaG9tZS1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAzMHJlbTtcbiAgZm9udC1mYW1pbHk6ICdUVEJvbGQnO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogNTZweDtcbn1cblxuLmJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taG92ZXItbGlnaHQpO1xufVxuXG4ubW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgei1pbmRleDogOTk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcbiAgd2lkdGg6IDYwMHB4O1xuICBtYXgtd2lkdGg6IDgwJTtcbn1cblxuLm1vZGFsLmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjJyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG5cbi5tb2RhbC1hbGVydCB7XG4gIGZvbnQtc2l6ZTogMTZyZW07XG4gIGNvbG9yOiB2YXIoLS13YXJuaW5nLWxpZ2h0KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogN3B4IDBweCA1cHggMHB4O1xufVxuXG4ubW9kYWwtaGVhZGVyLXJlbmFtZSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICBmb250LXNpemU6IDIycmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vZGFsLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdUVEJvbGQnO1xufVxuXG4ubW9kYWwtYm9keSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG5cbiNvdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBvcGFjaXR5OiAwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XG4gIHotaW5kZXg6IDE1O1xufVxuXG4jb3ZlcmxheS5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuXG4uYWRkLXByb2plY3QtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTJweCAxMHB4IDEycHggMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dC1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1mYW1pbHk6ICdUVFNlbWlCb2xkJztcbiAgZm9udC1zaXplOiAxNnJlbTtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnByb2plY3QtbW9kYWwtYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZy10b3A6IDdweDtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uYWRkLXByb2plY3QtYnV0dG9ucyB7XG4gIGZsZXg6IDE7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBmb250LWZhbWlseTogJ1RUQm9sZCc7XG4gIGZvbnQtc2l6ZTogMThyZW07XG59XG5cbi5hZGQtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0KTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmNsb3NlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yLWxpZ2h0KTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmFkZC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFhMTdjO1xufVxuXG4uY2xvc2UtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzkxNjtcbn1cblxuLmJ0bi1yZW5hbWUge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcGFkZGluZzogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLXJlbmFtZTpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbn1cblxuLmJ0bi1kZWxldGUge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcGFkZGluZzogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLWRlbGV0ZTpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KTtcbn1cblxuLmRlbGV0ZS1xdWVzdGlvbiB7XG4gIGZvbnQtc2l6ZTogMThyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbn1cblxuI21lZGlhUXVlcnlIYW5kbGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAtMTAwcHg7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxN3JlbTtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci1saWdodCk7XG4gIGZvbnQtZmFtaWx5OiAnVFRCb2xkJztcbn1cblxuLnRhc2tzLWxpc3QtdmlldyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDMwcHggNzBweCA5MHB4IDcwcHg7XG4gIGhlaWdodDogOTAlO1xufVxuXG4udGFza3MtbGlzdC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi50YXNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmJvdHRvbS10YXNrLXNpZGV7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJyZW07XG4gIGNvbG9yOiB2YXIoLS1ob3Zlci1saWdodCk7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5oZWlnaHQtYXV0b3tcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5sZWZ0LXRhc2stc2lkZXtcbiAgZmxleDogNjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA3cHg7XG59XG5cbi5yaWdodC10YXNrLXNpZGV7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBnYXA6IDIwcHg7XG59XG5cbi5kYXRlLXRhc2stY29udGFpbmVye1xuICBmb250LXNpemU6IDE1cmVtO1xuICBjb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xufVxuXG4uaW1wb3J0YW50LWJ0bntcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmltcG9ydGFudC1idG46aG92ZXJ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLmltcG9ydGFudC1idG4tYWN0aXZle1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19ffSk7XG59XG5cbi50YXNrLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xufVxuXG4uc2VjdGlvbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDdweCAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG59XG5cbi5yZW1vdmUtc2VjdGlvbi1idG4ge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxMXB4O1xuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcbn1cblxuLnJlbW92ZS1zZWN0aW9uLWJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5hZGQtdGFzay1idG4ge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFkZC10YXNrLWJ0bi1kaXNhYmxlZHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX199KSAhaW1wb3J0YW50O1xufVxuXG4uYWRkLXRhc2stY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG59XG5cbi5hZGQtdGFzay1jb250YWluZXI6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XG59XG5cbi5hZGQtdGFzay1jb250YWluZXI6aG92ZXIgLmFkZC10YXNrLWJ0biB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19ffSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi5idG4tcmVuYW1lLW1haW4ge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcGFkZGluZzogMTNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLXJlbmFtZS1tYWluOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xufVxuXG4uYnRuLWRlbGV0ZS1tYWluIHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBhZGRpbmc6IDEzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bi1kZWxldGUtbWFpbjpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KTtcbn1cblxuLm1haW4taGVhZGluZy1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgZm9udC1zaXplOiAxNnJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xufVxuXG4uYWRkLXNlY3Rpb24tYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA3M3B4O1xuICBoZWlnaHQ6IDczcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItbGlnaHQpO1xuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XG4gIGZvbnQtc2l6ZTogNTVyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiAwcHggMTMwcHggNDBweCAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQsIDMwMG1zO1xuICB6LWluZGV4OiAxMDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uYWRkLXNlY3Rpb24tYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4uc2VjdGlvbiB7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4uaGVhZGVyLWFsbC10YXNrcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci1saWdodCk7XG59XG5cbi5oZWFkZXItdG9kYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvci1saWdodCk7XG59XG5cbi5oZWFkZXItd2VlayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xufVxuXG4uaGVhZGVyLWltcG9ydGFudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdy1jb2xvcik7XG59XG5cbi5oZWFkZXItcHJvamVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci1saWdodCk7XG59XG5cbiNmbG9hdGluZ0FjdGlvbkJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cblxuLmFkZC10YXNrLWZvcm0tY29udGFpbmVye1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ob3Zlci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnRhc2stZGVzY3JpcHRpb24taW5wdXR7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiA5cHggN3B4IDlweCA3cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDE0cmVtO1xuICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ob3Zlci1saWdodCk7XG59XG5cbi50YXNrLWRhdGF7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogN3B4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLmFkZC10YXNrLWZvcm0tYnV0dG9uc3tcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA2cHg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taG92ZXItbGlnaHQpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxNXB4IDBweCA1cHggMHB4IDtcbn1cblxuLmFkZC10YXNrLWZvcm0tYnRue1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDdweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBmb250LWZhbWlseTogJ1RUU2VtaUJvbGQnO1xufVxuXG4uYWRkLXRhc2stZm9ybS1idG46aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMWExN2M7XG59XG5cbi5jYW5jZWwtdGFzay1idG57XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogN3B4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3ItbGlnaHQpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgZm9udC1mYW1pbHk6ICdUVFNlbWlCb2xkJztcbn1cblxuLmNhbmNlbC10YXNrLWJ0bjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzkxNjtcbn1cblxuI2RhdGVJbnB1dHtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taG92ZXItbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5cbmJ1dHRvbntcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGlzcGxheS1ub25le1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZGlzYWJsZWQtY2xpY2t7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjb2xvcjogdmFyKC0taG92ZXItbGlnaHQpIWltcG9ydGFudDtcbn1cblxuLmludmFsaWQtaW5wdXR7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRlcnRpYXJ5LWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xufVxuXG4uY2hlY2tib3h7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2stYnV0dG9uLXRpdGxle1xuICBmb250LXNpemU6IDE1cmVtO1xufVxuXG4jY3VycmVudFRhYk5hbWV7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbn1cblxuLnByb2plY3QtdGFza3MtY29udGFpbmVyLWFsbC10YXNrc3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnByb2plY3QtbmFtZS1hbGwtdGFza3N7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC1zaXplOiAxOHJlbTtcbiAgZm9udC1mYW1pbHk6ICdUVEJvbGQnO1xufVxuXG4ucHJvamVjdC1hbGwtdGFza3MtaGVhZGVye1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiA3cHggMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuXG4ucHJvamVjdC1pY29uLWFsbC10YXNrc3tcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBwb2ludGVyLWV2ZW50czogbm9uZWNpbztcbn1cblxuLnRhc2tzLWNvbnRhaW5lci1hbGwtdGFza3N7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5uby10YXNrcy1tZXNzYWdle1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXJlbTtcbiAgY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taG92ZXItbGlnaHQpO1xuICB3aWR0aDogMTEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDNweCAwcHg7XG59XG5cbi5uby10YXNrcy1pbWctY29udGFpbmVye1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5vLXRhc2tzLWltZ3tcbiAgd2lkdGg6IDI5JTtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn1cblxuLm5vLXRhc2tzLWltZy10b2RheXtcbiAgd2lkdGg6IDM4JTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWluLXdpZHRoOiAyNzBweDtcbn1cblxuLm5vLXRhc2tzLWltZy13ZWVre1xuICB3aWR0aDogNTAlO1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xufVxuXG4ubm8tc2VjdGlvbnMtaW1ne1xuICB3aWR0aDogMzUlO1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xufVxuXG4ubm8tdGFza3MtaW1nLXRleHR7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMjByZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDM3MHB4O1xufVxuXG4udGhpcy13ZWVrLWRhdGV7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1ob3Zlci1saWdodCk7XG4gIGZvbnQtc2l6ZTogMTZyZW07XG59XG5cbi5kYXRlLWhlYWRpbmctcmlnaHR7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xufVxuXG4uZGF0ZS1kaXNwbGF5ZXJ7XG4gIHBhZGRpbmc6IDEwcHggMHB4IDBweCAwcHg7XG59XG5cbi5jdXN0b20tdG9hc3R7XG4gIHdpZHRoOiAyNDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS10b2FzdC1yZWR7XG4gIHdpZHRoOiAyNDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGVydGlhcnktY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLXRvYXN0LWJsdWV7XG4gIHdpZHRoOiAyNDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG59XG5cblxuLypNZWRpYSBRdWVyaWVzKi9cblxuLyogU21hcnRwaG9uZXMgKHBvcnRyYWl0IGFuZCBsYW5kc2NhcGUpICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cbiAgLyogSGlkZSB0aGUgc2Nyb2xsYmFyIHRyYWNrIGFuZCB0aHVtYiAqL1xuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cblxuICAvKiBPcHRpb25hbDogSGlkZSB0aGUgc2Nyb2xsYmFyIGNvcm5lciAqL1xuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5ib2R5LWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1NXB4IHJlcGVhdCgxMSwgMWZyKTtcbiAgfVxuXG4gIC5tYWluIHtcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gLTEgLyAtMTtcbiAgICBwYWRkaW5nOiAyNXB4IDIwcHggMHB4IDIwcHg7XG4gIH1cblxuICAjaGVhZGVyU2VjdGlvbiB7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDEgLyAtMTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAuc2lkZWJhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNzB2dztcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwMHB4KTtcbiAgfVxuXG4gIC5zaWRlYmFyLWljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIGhlaWdodDogMjJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMjA7XG4gICAgdG9wOiAyMHB4O1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgI09wZW46Y2hlY2tlZH4jc2lkZWJhck1lbnUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzNTBtcyBlYXNlLWluLW91dDtcbiAgfVxuXG4gIC5idG4tZGVsZXRlLFxuICAuYnRuLXJlbmFtZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5tb2RhbC1ib2R5IHtcbiAgICBwYWRkaW5nOiAxN3B4O1xuICB9XG5cbiAgLm1vZGFsLWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxOHJlbTtcbiAgfVxuXG4gIC5hZGQtcHJvamVjdC1pbnB1dCB7XG4gICAgZm9udC1zaXplOiAxNXJlbTtcbiAgfVxuXG4gIC5hZGQtcHJvamVjdC1idXR0b25zIHtcbiAgICBmb250LXNpemU6IDE1cmVtO1xuICB9XG5cbiAgLm1vZGFsLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcmVtO1xuICB9XG5cbiAgI29sZE5hbWUge1xuICAgIGZvbnQtc2l6ZTogMjByZW07XG4gIH1cblxuICAjZGVsZXRlUHJvamVjdE5hbWUge1xuICAgIGZvbnQtc2l6ZTogMjByZW07XG4gIH1cblxuICAubW9kYWwtYWxlcnQge1xuICAgIGZvbnQtc2l6ZTogMTRyZW07XG4gIH1cblxuICAjbWVkaWFRdWVyeUhhbmRsZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAudGFza3MtbGlzdC12aWV3IHtcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMTQwcHggMjBweDtcbiAgICBoZWlnaHQ6IDg3JTtcbiAgfVxuXG4gIC5kZWxldGUtcXVlc3Rpb24ge1xuICAgIGZvbnQtc2l6ZTogMTVyZW07XG4gIH1cblxuICAuaG9tZS1oZWFkaW5nIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICB9XG5cbiAgLmFkZC1zZWN0aW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwcHggMTZweCAxNnB4IDBweDtcbiAgfVxuXG4gIC50YXNrLWRhdGF7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gICNkYXRlSW5wdXR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taG92ZXItbGlnaHQpO1xuICB9XG5cbiAgLmFkZC10YXNrLWZvcm0tYnV0dG9uc3tcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5hZGQtdGFzay1mb3JtLWJ0bntcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICBmbGV4OiAxO1xuICB9XG5cbiAgLmNhbmNlbC10YXNrLWJ0bntcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICBmbGV4OiAxO1xuICB9XG5cbiAgLmFkZC10YXNrLWZvcm0tY29udGFpbmVye1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWhvdmVyLWxpZ2h0KTtcbiAgfVxuXG4gIC5ib3JkZXItYm90dG9te1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ob3Zlci1saWdodCk7XG4gIH1cblxuICAuYWRkLXRhc2stZm9ybS1idXR0b25ze1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1ob3Zlci1saWdodCk7XG4gIH1cblxuICAudGFzay1kZXNjcmlwdGlvbi1pbnB1dHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ob3Zlci1saWdodCk7XG4gIH1cblxuICAuZGF0ZS10YXNrLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm5vLXRhc2tzLWltZy10ZXh0e1xuICAgIGZvbnQtc2l6ZTogMTdyZW07XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICB9XG5cbiAgLm5vLXRhc2tzLWltZ3tcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLm5vLXRhc2tzLWltZy10b2RheXtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5cbiAgLm5vLXRhc2tzLWltZy13ZWVre1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cblxuICAubm8tc2VjdGlvbnMtaW1ne1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cblxuICAudGhpcy13ZWVrLWRhdGV7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuZGF0ZS1oZWFkaW5nLXJpZ2h0e1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuYm90dG9tLXRhc2stc2lkZXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC50YXNre1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxufVxuXG4vKiBTbWFydHBob25lcyAocG9ydHJhaXQpICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC8qIFlvdXIgQ1NTIHN0eWxlcyBmb3IgcG9ydHJhaXQtb3JpZW50ZWQgcGhvbmVzIGdvIGhlcmUgKi9cbn1cblxuLyogU21hcnRwaG9uZXMgKGxhbmRzY2FwZSkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAvKiBZb3VyIENTUyBzdHlsZXMgZm9yIGxhbmRzY2FwZS1vcmllbnRlZCBwaG9uZXMgZ28gaGVyZSAqL1xufVxuXG5cbi8qIFRhYmxldHMgKHBvcnRyYWl0IGFuZCBsYW5kc2NhcGUpICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC8qIFlvdXIgQ1NTIHN0eWxlcyBmb3IgdGFibGV0cyBnbyBoZXJlICovXG59XG5cbi8qIFRhYmxldHMgKHBvcnRyYWl0KSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC8qIFlvdXIgQ1NTIHN0eWxlcyBmb3IgcG9ydHJhaXQtb3JpZW50ZWQgdGFibGV0cyBnbyBoZXJlICovXG59XG5cbi8qIFRhYmxldHMgKGxhbmRzY2FwZSkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLyogWW91ciBDU1Mgc3R5bGVzIGZvciBsYW5kc2NhcGUtb3JpZW50ZWQgdGFibGV0cyBnbyBoZXJlICovXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUF1RDtBQUN6RDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw0Q0FBMkQ7QUFDN0Q7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGdDQUFnQztFQUNoQywrQkFBK0I7O0VBRS9CLDZCQUE2QjtFQUM3Qiwr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QUFhO0VBQ2Y7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLHlEQUF5RDtBQUMzRDs7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSwwREFBMEQ7QUFDNUQ7OztBQUdBLHFDQUFxQztBQUNyQztFQUNFLHdDQUF3QztBQUMxQzs7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSwwREFBMEQ7QUFDNUQ7O0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UsMkRBQTJEO0FBQzdEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdUVEJvbGQnO1xcbiAgc3JjOiB1cmwoLi9mb250cy9UVFxcXFwgSW50ZXJwaGFzZXNcXFxcIFByb1xcXFwgVHJpYWxcXFxcIEJvbGQudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1RUU2VtaUJvbGQnO1xcbiAgc3JjOiB1cmwoLi9mb250cy9UVFxcXFwgSW50ZXJwaGFzZXNcXFxcIFByb1xcXFwgVHJpYWxcXFxcIERlbWlCb2xkLnR0Zik7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYuMjUlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTZyZW07XFxuICBmb250LWZhbWlseTogJ1RUU2VtaUJvbGQnO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWNvbG9yLWxpZ2h0OiAjMTI2ZmI1O1xcbiAgLS1zZWNvbmRhcnktY29sb3ItbGlnaHQ6ICMxMGE4ODU7XFxuICAtLXRlcnRpYXJ5LWNvbG9yLWxpZ2h0OiAjZmY1NDM2O1xcblxcbiAgLS1wcmltYXJ5LWNvbG9yLWRhcms6ICM0ZWNiZmI7XFxuICAtLXNlY29uZGFyeS1jb2xvci1kYXJrOiAjNzRmZmUwO1xcbiAgLS10ZXJ0aWFyeS1jb2xvci1kYXJrOiAjZmU4OTc1O1xcblxcbiAgLS1iYWNrZ3JvdW5kLWxpZ2h0OiAjZmZmZmZmO1xcbiAgLS1zZWNvbmRhcnktYmFja2dyb3VuZC1saWdodDogI2ZhZmFmYTtcXG4gIC0tYmFja2dyb3VuZC1kYXJrOiAjMjEyODQ0O1xcbiAgLS1zZWNvbmRhcnktYmFja2dyb3VuZC1kYXJrOiAjZjRmNWY3O1xcblxcbiAgLS1ob3Zlci1saWdodDogI2RkZTBlNDtcXG5cXG4gIC0tdGV4dC1saWdodDogIzMwMzMzNjtcXG4gIC0tdGV4dC1kYXJrOiAjZmZmZmZmO1xcblxcbiAgLS13YXJuaW5nLWxpZ2h0OiAjZmY1NDM2O1xcbiAgLS13YXJuaW5nLWRhcms6ICNGRkYyMDA7XFxuXFxuICAtLW9yYW5nZS1jb2xvcjogI2ZmOTkwMDtcXG4gIC0teWVsbG93LWNvbG9yOiAjZmZjMzAwO1xcbn1cXG5cXG4uYm9keS1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMxMHB4IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4IHJlcGVhdCgxMSwgMWZyKTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtbGlnaHQpO1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIC0xIC8gMjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG4gIGdyaWQtYXJlYTogMiAvIDIgLyAxMyAvIC0xO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDBweCA3MHB4IDBweCA3MHB4O1xcbn1cXG5cXG4jaGVhZGVyU2VjdGlvbiB7XFxuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIC0xO1xcbiAgaGVpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uc2lkZWJhci1saXN0IHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMjNweDtcXG59XFxuXFxuLnNpZGViYXItbGlzdC1zZXR0aW5nc3tcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0cy1zaWRlYmFyLWxpc3Qge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbi5zaWRlYmFyLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogN3B4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2lkZWJhci1pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcXG59XFxuXFxuLnNpZGViYXItaXRlbXMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG4gIGZvbnQtc2l6ZTogMTVyZW07XFxufVxcblxcbi5zaWRlYmFyLWFkZC1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDdweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNpZGViYXItYWRkLXByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xcbn1cXG5cXG4uc2lkZWJhci1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAyMXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xcbiAgZm9udC1mYW1pbHk6ICdUVEJvbGQnO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaWRlYmFyLWJvdHRvbSB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLnNldHRpbmdzLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcXG59XFxuXFxuLnN3aXRjaCB7XFxuICAvKiBzd2l0Y2ggKi9cXG4gIC0tc3dpdGNoLXdpZHRoOiA0NnB4O1xcbiAgLS1zd2l0Y2gtaGVpZ2h0OiAyNHB4O1xcbiAgLS1zd2l0Y2gtYmc6IHJnYig0OCwgNTEsIDU0KTtcXG4gIC0tc3dpdGNoLWNoZWNrZWQtYmc6IHJnYigxOSwgMTk3LCAxNTYpO1xcbiAgLS1zd2l0Y2gtb2Zmc2V0OiBjYWxjKCh2YXIoLS1zd2l0Y2gtaGVpZ2h0KSAtIHZhcigtLWNpcmNsZS1kaWFtZXRlcikpIC8gMik7XFxuICAtLXN3aXRjaC10cmFuc2l0aW9uOiBhbGwgLjJzIGN1YmljLWJlemllcigwLjI3LCAwLjIsIDAuMjUsIDEuNTEpO1xcbiAgLyogY2lyY2xlICovXFxuICAtLWNpcmNsZS1kaWFtZXRlcjogMThweDtcXG4gIC0tY2lyY2xlLWJnOiAjZmZmO1xcbiAgLS1jaXJjbGUtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDE0NiwgMTQ2LCAxNDYsIDAuNDUpO1xcbiAgLS1jaXJjbGUtY2hlY2tlZC1zaGFkb3c6IC0xcHggMXB4IDJweCByZ2JhKDE2MywgMTYzLCAxNjMsIDAuNDUpO1xcbiAgLS1jaXJjbGUtdHJhbnNpdGlvbjogdmFyKC0tc3dpdGNoLXRyYW5zaXRpb24pO1xcbiAgLyogaWNvbiAqL1xcbiAgLS1pY29uLXRyYW5zaXRpb246IGFsbCAuMnMgY3ViaWMtYmV6aWVyKDAuMjcsIDAuMiwgMC4yNSwgMS41MSk7XFxuICAtLWljb24tY3Jvc3MtY29sb3I6IHZhcigtLXN3aXRjaC1iZyk7XFxuICAtLWljb24tY3Jvc3Mtc2l6ZTogNnB4O1xcbiAgLS1pY29uLWNoZWNrbWFyay1jb2xvcjogdmFyKC0tc3dpdGNoLWNoZWNrZWQtYmcpO1xcbiAgLS1pY29uLWNoZWNrbWFyay1zaXplOiAxMHB4O1xcbiAgLyogZWZmZWN0IGxpbmUgKi9cXG4gIC0tZWZmZWN0LXdpZHRoOiBjYWxjKHZhcigtLWNpcmNsZS1kaWFtZXRlcikgLyAyKTtcXG4gIC0tZWZmZWN0LWhlaWdodDogY2FsYyh2YXIoLS1lZmZlY3Qtd2lkdGgpIC8gMiAtIDFweCk7XFxuICAtLWVmZmVjdC1iZzogdmFyKC0tY2lyY2xlLWJnKTtcXG4gIC0tZWZmZWN0LWJvcmRlci1yYWRpdXM6IDFweDtcXG4gIC0tZWZmZWN0LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5zd2l0Y2ggaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnN3aXRjaCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5zd2l0Y2ggc3ZnIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdmFyKC0taWNvbi10cmFuc2l0aW9uKTtcXG4gIC1vLXRyYW5zaXRpb246IHZhcigtLWljb24tdHJhbnNpdGlvbik7XFxuICB0cmFuc2l0aW9uOiB2YXIoLS1pY29uLXRyYW5zaXRpb24pO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uc3dpdGNoIC5jaGVja21hcmsge1xcbiAgd2lkdGg6IHZhcigtLWljb24tY2hlY2ttYXJrLXNpemUpO1xcbiAgY29sb3I6IHZhcigtLWljb24tY2hlY2ttYXJrLWNvbG9yKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuXFxuLnN3aXRjaCAuY3Jvc3Mge1xcbiAgd2lkdGg6IHZhcigtLWljb24tY3Jvc3Mtc2l6ZSk7XFxuICBjb2xvcjogdmFyKC0taWNvbi1jcm9zcy1jb2xvcik7XFxufVxcblxcbi5zbGlkZXIge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiB2YXIoLS1zd2l0Y2gtd2lkdGgpO1xcbiAgaGVpZ2h0OiB2YXIoLS1zd2l0Y2gtaGVpZ2h0KTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXN3aXRjaC1iZyk7XFxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB2YXIoLS1zd2l0Y2gtdHJhbnNpdGlvbik7XFxuICAtby10cmFuc2l0aW9uOiB2YXIoLS1zd2l0Y2gtdHJhbnNpdGlvbik7XFxuICB0cmFuc2l0aW9uOiB2YXIoLS1zd2l0Y2gtdHJhbnNpdGlvbik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jaXJjbGUge1xcbiAgd2lkdGg6IHZhcigtLWNpcmNsZS1kaWFtZXRlcik7XFxuICBoZWlnaHQ6IHZhcigtLWNpcmNsZS1kaWFtZXRlcik7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jaXJjbGUtYmcpO1xcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogdmFyKC0tY2lyY2xlLXNoYWRvdyk7XFxuICBib3gtc2hhZG93OiB2YXIoLS1jaXJjbGUtc2hhZG93KTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHZhcigtLWNpcmNsZS10cmFuc2l0aW9uKTtcXG4gIC1vLXRyYW5zaXRpb246IHZhcigtLWNpcmNsZS10cmFuc2l0aW9uKTtcXG4gIHRyYW5zaXRpb246IHZhcigtLWNpcmNsZS10cmFuc2l0aW9uKTtcXG4gIHotaW5kZXg6IDE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiB2YXIoLS1zd2l0Y2gtb2Zmc2V0KTtcXG59XFxuXFxuLnNsaWRlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IHZhcigtLWVmZmVjdC13aWR0aCk7XFxuICBoZWlnaHQ6IHZhcigtLWVmZmVjdC1oZWlnaHQpO1xcbiAgbGVmdDogY2FsYyh2YXIoLS1zd2l0Y2gtb2Zmc2V0KSArICh2YXIoLS1lZmZlY3Qtd2lkdGgpIC8gMikpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZWZmZWN0LWJnKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWVmZmVjdC1ib3JkZXItcmFkaXVzKTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdmFyKC0tZWZmZWN0LXRyYW5zaXRpb24pO1xcbiAgLW8tdHJhbnNpdGlvbjogdmFyKC0tZWZmZWN0LXRyYW5zaXRpb24pO1xcbiAgdHJhbnNpdGlvbjogdmFyKC0tZWZmZWN0LXRyYW5zaXRpb24pO1xcbn1cXG5cXG4vKiBhY3Rpb25zICovXFxuXFxuLnN3aXRjaCBpbnB1dDpjaGVja2VkKy5zbGlkZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc3dpdGNoLWNoZWNrZWQtYmcpO1xcbn1cXG5cXG4uc3dpdGNoIGlucHV0OmNoZWNrZWQrLnNsaWRlciAuY2hlY2ttYXJrIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnN3aXRjaCBpbnB1dDpjaGVja2VkKy5zbGlkZXIgLmNyb3NzIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuXFxuLnN3aXRjaCBpbnB1dDpjaGVja2VkKy5zbGlkZXI6OmJlZm9yZSB7XFxuICBsZWZ0OiBjYWxjKDEwMCUgLSB2YXIoLS1lZmZlY3Qtd2lkdGgpIC0gKHZhcigtLWVmZmVjdC13aWR0aCkgLyAyKSAtIHZhcigtLXN3aXRjaC1vZmZzZXQpKTtcXG59XFxuXFxuLnN3aXRjaCBpbnB1dDpjaGVja2VkKy5zbGlkZXIgLmNpcmNsZSB7XFxuICBsZWZ0OiBjYWxjKDEwMCUgLSB2YXIoLS1jaXJjbGUtZGlhbWV0ZXIpIC0gdmFyKC0tc3dpdGNoLW9mZnNldCkpO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiB2YXIoLS1jaXJjbGUtY2hlY2tlZC1zaGFkb3cpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tY2lyY2xlLWNoZWNrZWQtc2hhZG93KTtcXG59XFxuXFxuI09wZW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMHB4O1xcbiAgbGVmdDogMjBweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNPcGVuOmNoZWNrZWR+I3NpZGViYXJNZW51IHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtZGFyayk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG59XFxuXFxuLndyYXBwZXIuc2Vjb25kLFxcbi53cmFwcGVyLnRoaXJkIHtcXG4gIG1hcmdpbi10b3A6IDNweDtcXG59XFxuXFxuI09wZW46Y2hlY2tlZH4uc2lkZWJhci1pY29uPi53cmFwcGVyLnNlY29uZCB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4jT3BlbjpjaGVja2Vkfi5zaWRlYmFyLWljb24+LndyYXBwZXIuZmlyc3Qge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xcbiAgbWFyZ2luLXRvcDogOXB4O1xcbn1cXG5cXG4jT3BlbjpjaGVja2Vkfi5zaWRlYmFyLWljb24+LndyYXBwZXIudGhpcmQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTMxNWRlZyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG4gIG1hcmdpbi10b3A6IC05cHg7XFxufVxcblxcbi5ibHVyIHtcXG4gIGZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG5cXG4uc2lkZWJhci1pY29uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zaWRlYmFyLWl0ZW0tYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcXG59XFxuXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDdweDtcXG59XFxuXFxuLnNpZGViYXItcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc2lkZWJhci1wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcXG59XFxuXFxuLnNpZGViYXItcHJvamVjdDpob3ZlciAucHJvamVjdC1uYW1lLWlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcXG59XFxuXFxuLnNpZGViYXItcHJvamVjdC1hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xcbn1cXG5cXG4uc2lkZWJhci1wcm9qZWN0OmhvdmVyIC5wcm9qZWN0LXRvb2xzIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uc21vb3RoLXRyYW5zaXRpb24ge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubWVudS1vcHRpb25zIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDI1cHg7XFxuICByaWdodDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5tZW51LW9wdGlvbnMgbGkge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudS1vcHRpb25zIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcXG59XFxuXFxuLnByb2plY3QtdG9vbHMge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtbmFtZS1pbnB1dCB7XFxuICBmb250LWZhbWlseTogJ1RUU2VtaUJvbGQnO1xcbiAgZm9udC1zaXplOiAxNXJlbTtcXG4gIG1heC13aWR0aDogMTUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2tzLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5ob21lLWhlYWRpbmcge1xcbiAgZm9udC1zaXplOiAzMHJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnVFRCb2xkJztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiA1NnB4O1xcbn1cXG5cXG4uYm9yZGVyLWJvdHRvbSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taG92ZXItbGlnaHQpO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHotaW5kZXg6IDk5OTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgbWF4LXdpZHRoOiA4MCU7XFxufVxcblxcbi5tb2RhbC5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxufVxcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gIGZvbnQtc2l6ZTogMjJyZW07XFxuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cXG5cXG4ubW9kYWwtYWxlcnQge1xcbiAgZm9udC1zaXplOiAxNnJlbTtcXG4gIGNvbG9yOiB2YXIoLS13YXJuaW5nLWxpZ2h0KTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiA3cHggMHB4IDVweCAwcHg7XFxufVxcblxcbi5tb2RhbC1oZWFkZXItcmVuYW1lIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICBmb250LXNpemU6IDIycmVtO1xcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC10aXRsZSB7XFxuICBmb250LWZhbWlseTogJ1RUQm9sZCc7XFxufVxcblxcbi5tb2RhbC1ib2R5IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAyNXB4O1xcbn1cXG5cXG4jb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvcGFjaXR5OiAwO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgei1pbmRleDogMTU7XFxufVxcblxcbiNvdmVybGF5LmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDEycHggMTBweCAxMnB4IDEwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dC1saWdodCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LWZhbWlseTogJ1RUU2VtaUJvbGQnO1xcbiAgZm9udC1zaXplOiAxNnJlbTtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5wcm9qZWN0LW1vZGFsLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHBhZGRpbmctdG9wOiA3cHg7XFxuICBnYXA6IDEycHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idXR0b25zIHtcXG4gIGZsZXg6IDE7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XFxuICBmb250LWZhbWlseTogJ1RUQm9sZCc7XFxuICBmb250LXNpemU6IDE4cmVtO1xcbn1cXG5cXG4uYWRkLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItbGlnaHQpO1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLmNsb3NlLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvci1saWdodCk7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4uYWRkLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFhMTdjO1xcbn1cXG5cXG4uY2xvc2UtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjM5MTY7XFxufVxcblxcbi5idG4tcmVuYW1lIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9yZW5hbWUuc3ZnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuLXJlbmFtZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvcmVuYW1lLWhvdmVyLnN2Zyk7XFxufVxcblxcbi5idG4tZGVsZXRlIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9kZWxldGUuc3ZnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuLWRlbGV0ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvZGVsZXRlLWhvdmVyLnN2Zyk7XFxufVxcblxcbi5kZWxldGUtcXVlc3Rpb24ge1xcbiAgZm9udC1zaXplOiAxOHJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xcbn1cXG5cXG4jbWVkaWFRdWVyeUhhbmRsZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IC0xMDBweDtcXG59XFxuXFxuLnNlY3Rpb24tdGl0bGUge1xcbiAgZm9udC1zaXplOiAxN3JlbTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItbGlnaHQpO1xcbiAgZm9udC1mYW1pbHk6ICdUVEJvbGQnO1xcbn1cXG5cXG4udGFza3MtbGlzdC12aWV3IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAzMHB4IDcwcHggOTBweCA3MHB4O1xcbiAgaGVpZ2h0OiA5MCU7XFxufVxcblxcbi50YXNrcy1saXN0LWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4udGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbn1cXG5cXG4uYm90dG9tLXRhc2stc2lkZXtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmb250LXNpemU6IDEycmVtO1xcbiAgY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxufVxcblxcbi5oZWlnaHQtYXV0b3tcXG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubGVmdC10YXNrLXNpZGV7XFxuICBmbGV4OiA2O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDdweDtcXG59XFxuXFxuLnJpZ2h0LXRhc2stc2lkZXtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uZGF0ZS10YXNrLWNvbnRhaW5lcntcXG4gIGZvbnQtc2l6ZTogMTVyZW07XFxuICBjb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xcbn1cXG5cXG4uaW1wb3J0YW50LWJ0bntcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvaW1wb3J0YW50LWRpc2FibGVkLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5pbXBvcnRhbnQtYnRuOmhvdmVye1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4uaW1wb3J0YW50LWJ0bi1hY3RpdmV7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvaW1wb3J0YW50LnN2Zyk7XFxufVxcblxcbi50YXNrLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTVyZW07XFxuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxufVxcblxcbi5zZWN0aW9uLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiA3cHggMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcXG59XFxuXFxuLnJlbW92ZS1zZWN0aW9uLWJ0biB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2RlbGV0ZS1zZWN0aW9uLWhvdmVyLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDExcHg7XFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnJlbW92ZS1zZWN0aW9uLWJ0bjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvYWRkLXRhc2suc3ZnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hZGQtdGFzay1idG4tZGlzYWJsZWR7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvYWRkLXRhc2stZGlzYWJsZWQuc3ZnKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYWRkLXRhc2stY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMTAwcHg7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxufVxcblxcbi5hZGQtdGFzay1jb250YWluZXI6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xcbn1cXG5cXG4uYWRkLXRhc2stY29udGFpbmVyOmhvdmVyIC5hZGQtdGFzay1idG4ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2FkZC10YXNrLWhvdmVyLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLmJ0bi1yZW5hbWUtbWFpbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvcmVuYW1lLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgcGFkZGluZzogMTNweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0bi1yZW5hbWUtbWFpbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvcmVuYW1lLWhvdmVyLnN2Zyk7XFxufVxcblxcbi5idG4tZGVsZXRlLW1haW4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2RlbGV0ZS5zdmcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIHBhZGRpbmc6IDEzcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idG4tZGVsZXRlLW1haW46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2RlbGV0ZS1ob3Zlci5zdmcpO1xcbn1cXG5cXG4ubWFpbi1oZWFkaW5nLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxNnJlbTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG59XFxuXFxuLmFkZC1zZWN0aW9uLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDczcHg7XFxuICBoZWlnaHQ6IDczcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci1saWdodCk7XFxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxuICBmb250LXNpemU6IDU1cmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBtYXJnaW46IDBweCAxMzBweCA0MHB4IDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0LCAzMDBtcztcXG4gIHotaW5kZXg6IDEwO1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4uYWRkLXNlY3Rpb24tYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLnNlY3Rpb24ge1xcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxufVxcblxcbi5oZWFkZXItYWxsLXRhc2tzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci1saWdodCk7XFxufVxcblxcbi5oZWFkZXItdG9kYXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3ItbGlnaHQpO1xcbn1cXG5cXG4uaGVhZGVyLXdlZWsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1saWdodCk7XFxufVxcblxcbi5oZWFkZXItaW1wb3J0YW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdy1jb2xvcik7XFxufVxcblxcbi5oZWFkZXItcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItbGlnaHQpO1xcbn1cXG5cXG4jZmxvYXRpbmdBY3Rpb25CdXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi5hZGQtdGFzay1mb3JtLWNvbnRhaW5lcntcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ob3Zlci1saWdodCk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnRhc2stZGVzY3JpcHRpb24taW5wdXR7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiA5cHggN3B4IDlweCA3cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAxNHJlbTtcXG4gIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWhvdmVyLWxpZ2h0KTtcXG59XFxuXFxuLnRhc2stZGF0YXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA3cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLmFkZC10YXNrLWZvcm0tYnV0dG9uc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDZweDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ob3Zlci1saWdodCk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMTVweCAwcHggNXB4IDBweCA7XFxufVxcblxcbi5hZGQtdGFzay1mb3JtLWJ0bntcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiA3cHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci1saWdodCk7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcXG4gIGZvbnQtZmFtaWx5OiAnVFRTZW1pQm9sZCc7XFxufVxcblxcbi5hZGQtdGFzay1mb3JtLWJ0bjpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMWExN2M7XFxufVxcblxcbi5jYW5jZWwtdGFzay1idG57XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogN3B4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvci1saWdodCk7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcXG4gIGZvbnQtZmFtaWx5OiAnVFRTZW1pQm9sZCc7XFxufVxcblxcbi5jYW5jZWwtdGFzay1idG46aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzOTE2O1xcbn1cXG5cXG4jZGF0ZUlucHV0e1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taG92ZXItbGlnaHQpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcblxcbmJ1dHRvbntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRpc3BsYXktbm9uZXtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5kaXNhYmxlZC1jbGlja3tcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KSFpbXBvcnRhbnQ7XFxufVxcblxcbi5pbnZhbGlkLWlucHV0e1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGVydGlhcnktY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5jaGVja2JveHtcXG4gIHdpZHRoOiAxOHB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1idXR0b24tdGl0bGV7XFxuICBmb250LXNpemU6IDE1cmVtO1xcbn1cXG5cXG4jY3VycmVudFRhYk5hbWV7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxufVxcblxcbi5wcm9qZWN0LXRhc2tzLWNvbnRhaW5lci1hbGwtdGFza3N7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3QtbmFtZS1hbGwtdGFza3N7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxuICBmb250LXNpemU6IDE4cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdUVEJvbGQnO1xcbn1cXG5cXG4ucHJvamVjdC1hbGwtdGFza3MtaGVhZGVye1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDdweCAwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xcbn1cXG5cXG4ucHJvamVjdC1pY29uLWFsbC10YXNrc3tcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9wcm9qZWN0LnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmVjaW87XFxufVxcblxcbi50YXNrcy1jb250YWluZXItYWxsLXRhc2tze1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLm5vLXRhc2tzLW1lc3NhZ2V7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1ob3Zlci1saWdodCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ob3Zlci1saWdodCk7XFxuICB3aWR0aDogMTEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAzcHggMHB4O1xcbn1cXG5cXG4ubm8tdGFza3MtaW1nLWNvbnRhaW5lcntcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uby10YXNrcy1pbWd7XFxuICB3aWR0aDogMjklO1xcbiAgbWF4LXdpZHRoOiAzNTBweDtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxufVxcblxcbi5uby10YXNrcy1pbWctdG9kYXl7XFxuICB3aWR0aDogMzglO1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIG1pbi13aWR0aDogMjcwcHg7XFxufVxcblxcbi5uby10YXNrcy1pbWctd2Vla3tcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXgtd2lkdGg6IDQ1MHB4O1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG59XFxuXFxuLm5vLXNlY3Rpb25zLWltZ3tcXG4gIHdpZHRoOiAzNSU7XFxuICBtYXgtd2lkdGg6IDQ1MHB4O1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG59XFxuXFxuLm5vLXRhc2tzLWltZy10ZXh0e1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMjByZW07XFxuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDM3MHB4O1xcbn1cXG5cXG4udGhpcy13ZWVrLWRhdGV7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcXG4gIGZvbnQtc2l6ZTogMTZyZW07XFxufVxcblxcbi5kYXRlLWhlYWRpbmctcmlnaHR7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiB2YXIoLS1ob3Zlci1saWdodCk7XFxufVxcblxcbi5kYXRlLWRpc3BsYXllcntcXG4gIHBhZGRpbmc6IDEwcHggMHB4IDBweCAwcHg7XFxufVxcblxcbi5jdXN0b20tdG9hc3R7XFxuICB3aWR0aDogMjQwcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XFxuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcXG59XFxuXFxuLmN1c3RvbS10b2FzdC1yZWR7XFxuICB3aWR0aDogMjQwcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXJ0aWFyeS1jb2xvci1saWdodCkgIWltcG9ydGFudDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY3VzdG9tLXRvYXN0LWJsdWV7XFxuICB3aWR0aDogMjQwcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcblxcbi8qTWVkaWEgUXVlcmllcyovXFxuXFxuLyogU21hcnRwaG9uZXMgKHBvcnRyYWl0IGFuZCBsYW5kc2NhcGUpICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcblxcbiAgLyogSGlkZSB0aGUgc2Nyb2xsYmFyIHRyYWNrIGFuZCB0aHVtYiAqL1xcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICB9XFxuXFxuICAvKiBPcHRpb25hbDogSGlkZSB0aGUgc2Nyb2xsYmFyIGNvcm5lciAqL1xcbiAgOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmJvZHktY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTVweCByZXBlYXQoMTEsIDFmcik7XFxuICB9XFxuXFxuICAubWFpbiB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAtMSAvIC0xO1xcbiAgICBwYWRkaW5nOiAyNXB4IDIwcHggMHB4IDIwcHg7XFxuICB9XFxuXFxuICAjaGVhZGVyU2VjdGlvbiB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAxIC8gLTE7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG5cXG4gIC5zaWRlYmFyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNzB2dztcXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAwcHgpO1xcbiAgfVxcblxcbiAgLnNpZGViYXItaWNvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMjJweDtcXG4gICAgaGVpZ2h0OiAyMnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDIwO1xcbiAgICB0b3A6IDIwcHg7XFxuICAgIGxlZnQ6IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gICNPcGVuOmNoZWNrZWR+I3NpZGViYXJNZW51IHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzNTBtcyBlYXNlLWluLW91dDtcXG4gIH1cXG5cXG4gIC5idG4tZGVsZXRlLFxcbiAgLmJ0bi1yZW5hbWUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLm1vZGFsLWJvZHkge1xcbiAgICBwYWRkaW5nOiAxN3B4O1xcbiAgfVxcblxcbiAgLm1vZGFsLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMThyZW07XFxuICB9XFxuXFxuICAuYWRkLXByb2plY3QtaW5wdXQge1xcbiAgICBmb250LXNpemU6IDE1cmVtO1xcbiAgfVxcblxcbiAgLmFkZC1wcm9qZWN0LWJ1dHRvbnMge1xcbiAgICBmb250LXNpemU6IDE1cmVtO1xcbiAgfVxcblxcbiAgLm1vZGFsLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyMHJlbTtcXG4gIH1cXG5cXG4gICNvbGROYW1lIHtcXG4gICAgZm9udC1zaXplOiAyMHJlbTtcXG4gIH1cXG5cXG4gICNkZWxldGVQcm9qZWN0TmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMjByZW07XFxuICB9XFxuXFxuICAubW9kYWwtYWxlcnQge1xcbiAgICBmb250LXNpemU6IDE0cmVtO1xcbiAgfVxcblxcbiAgI21lZGlhUXVlcnlIYW5kbGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC50YXNrcy1saXN0LXZpZXcge1xcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMTQwcHggMjBweDtcXG4gICAgaGVpZ2h0OiA4NyU7XFxuICB9XFxuXFxuICAuZGVsZXRlLXF1ZXN0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxNXJlbTtcXG4gIH1cXG5cXG4gIC5ob21lLWhlYWRpbmcge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbiAgfVxcblxcbiAgLmFkZC1zZWN0aW9uLWJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMHB4IDE2cHggMTZweCAwcHg7XFxuICB9XFxuXFxuICAudGFzay1kYXRhe1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgI2RhdGVJbnB1dHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWhvdmVyLWxpZ2h0KTtcXG4gIH1cXG5cXG4gIC5hZGQtdGFzay1mb3JtLWJ1dHRvbnN7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLmFkZC10YXNrLWZvcm0tYnRue1xcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcXG4gICAgZmxleDogMTtcXG4gIH1cXG5cXG4gIC5jYW5jZWwtdGFzay1idG57XFxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xcbiAgICBmbGV4OiAxO1xcbiAgfVxcblxcbiAgLmFkZC10YXNrLWZvcm0tY29udGFpbmVye1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ob3Zlci1saWdodCk7XFxuICB9XFxuXFxuICAuYm9yZGVyLWJvdHRvbXtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWhvdmVyLWxpZ2h0KTtcXG4gIH1cXG5cXG4gIC5hZGQtdGFzay1mb3JtLWJ1dHRvbnN7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1ob3Zlci1saWdodCk7XFxuICB9XFxuXFxuICAudGFzay1kZXNjcmlwdGlvbi1pbnB1dHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taG92ZXItbGlnaHQpO1xcbiAgfVxcblxcbiAgLmRhdGUtdGFzay1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubm8tdGFza3MtaW1nLXRleHR7XFxuICAgIGZvbnQtc2l6ZTogMTdyZW07XFxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgICBtYXgtd2lkdGg6IG5vbmU7XFxuICB9XFxuXFxuICAubm8tdGFza3MtaW1ne1xcbiAgICB3aWR0aDogNzAlO1xcbiAgfVxcblxcbiAgLm5vLXRhc2tzLWltZy10b2RheXtcXG4gICAgd2lkdGg6IDcwJTtcXG4gIH1cXG5cXG4gIC5uby10YXNrcy1pbWctd2Vla3tcXG4gICAgd2lkdGg6IDcwJTtcXG4gIH1cXG5cXG4gIC5uby1zZWN0aW9ucy1pbWd7XFxuICAgIHdpZHRoOiA3MCU7XFxuICB9XFxuXFxuICAudGhpcy13ZWVrLWRhdGV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLmRhdGUtaGVhZGluZy1yaWdodHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5ib3R0b20tdGFzay1zaWRle1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC50YXNre1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICB9XFxufVxcblxcbi8qIFNtYXJ0cGhvbmVzIChwb3J0cmFpdCkgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAvKiBZb3VyIENTUyBzdHlsZXMgZm9yIHBvcnRyYWl0LW9yaWVudGVkIHBob25lcyBnbyBoZXJlICovXFxufVxcblxcbi8qIFNtYXJ0cGhvbmVzIChsYW5kc2NhcGUpICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAvKiBZb3VyIENTUyBzdHlsZXMgZm9yIGxhbmRzY2FwZS1vcmllbnRlZCBwaG9uZXMgZ28gaGVyZSAqL1xcbn1cXG5cXG5cXG4vKiBUYWJsZXRzIChwb3J0cmFpdCBhbmQgbGFuZHNjYXBlKSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcXG4gIC8qIFlvdXIgQ1NTIHN0eWxlcyBmb3IgdGFibGV0cyBnbyBoZXJlICovXFxufVxcblxcbi8qIFRhYmxldHMgKHBvcnRyYWl0KSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcbiAgLyogWW91ciBDU1Mgc3R5bGVzIGZvciBwb3J0cmFpdC1vcmllbnRlZCB0YWJsZXRzIGdvIGhlcmUgKi9cXG59XFxuXFxuLyogVGFibGV0cyAobGFuZHNjYXBlKSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcXG4gIC8qIFlvdXIgQ1NTIHN0eWxlcyBmb3IgbGFuZHNjYXBlLW9yaWVudGVkIHRhYmxldHMgZ28gaGVyZSAqL1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XG4gIHZhciBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCk7XG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufSIsImltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi8uLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRMb2NhbGU7IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJpbXBvcnQgZ2V0VVRDRGF5T2ZZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuaW1wb3J0IGxpZ2h0Rm9ybWF0dGVycyBmcm9tIFwiLi4vbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG52YXIgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06ICdhbScsXG4gIHBtOiAncG0nLFxuICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgbm9vbjogJ25vb24nLFxuICBtb3JuaW5nOiAnbW9ybmluZycsXG4gIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgbmlnaHQ6ICduaWdodCdcbn07XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiBHKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlICdHJzpcbiAgICAgIGNhc2UgJ0dHJzpcbiAgICAgIGNhc2UgJ0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBBLCBCXG4gICAgICBjYXNlICdHR0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiB5KGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAneW8nKSB7XG4gICAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIFkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHNpZ25lZFdlZWtZZWFyID0gZ2V0VVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICB2YXIgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjtcblxuICAgIC8vIFR3byBkaWdpdCB5ZWFyXG4gICAgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgICB2YXIgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfVxuXG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICdZbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIFIoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgaXNvV2Vla1llYXIgPSBnZXRVVENJU09XZWVrWWVhcihkYXRlKTtcblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiB1KGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIFEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAnUSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSAnUVEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSAnUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSAnUVFRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gcShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdxJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgJ3FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlICdxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgJ3FxcXEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gTShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlICdNbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiBMKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMTCc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgJ0xvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSAnTExMTCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiB3KGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcbiAgICBpZiAodG9rZW4gPT09ICd3bycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIEkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuICAgIGlmICh0b2tlbiA9PT0gJ0lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gZChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIEQoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mWWVhciA9IGdldFVUQ0RheU9mWWVhcihkYXRlKTtcbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiBFKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgJ0VFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gZShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgJ2UnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcbiAgICAgIGNhc2UgJ2VvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2VlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSAnZWVlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlICdlZWVlJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiBjKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlICdjJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlICdjYyc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSAnY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlICdjY2NjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gaShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcbiAgICAgIGNhc2UgJ2lpJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcbiAgICAgIGNhc2UgJ2lvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSAnaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSAnaWlpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiBiKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICB9XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYic6XG4gICAgICBjYXNlICdiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNhc2UgJ2JiYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnYmJiYic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiBCKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdCJzpcbiAgICAgIGNhc2UgJ0JCJzpcbiAgICAgIGNhc2UgJ0JCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdCQkJCJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiBoKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2hvJykge1xuICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ0hvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENIb3VycygpLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIEsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgaWYgKHRva2VuID09PSAnS28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiBrKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG4gICAgaWYgKHRva2VuID09PSAna28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gbShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnc28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ1NlY29uZHMoKSwge1xuICAgICAgICB1bml0OiAnc2Vjb25kJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiBTKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gWChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG4gICAgICBjYXNlICdYWFhYJzpcbiAgICAgIGNhc2UgJ1hYJzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcbiAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgIGNhc2UgJ1hYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24geChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuICAgICAgY2FzZSAneHh4eCc6XG4gICAgICBjYXNlICd4eCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG4gICAgICBjYXNlICd4eHh4eCc6XG4gICAgICBjYXNlICd4eHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIE8oZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAnTyc6XG4gICAgICBjYXNlICdPTyc6XG4gICAgICBjYXNlICdPT08nOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSAnT09PTyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIHooZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAneic6XG4gICAgICBjYXNlICd6eic6XG4gICAgICBjYXNlICd6enonOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSAnenp6eic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIHQoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gVChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBvcmlnaW5hbERhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApO1xuICB2YXIgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xuICB2YXIgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJpbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiB5KGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG5cbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gJ00nID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0RhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gYShkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09ICdhbScgPyAnYS5tLicgOiAncC5tLic7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiBoKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gSChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gbShkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiBzKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ1NlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwidmFyIGRhdGVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgY2FzZSAnUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xudmFyIHRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gdGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgY2FzZSAncHBwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICBjYXNlICdwcHBwJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xudmFyIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHZhciBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICB2YXIgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgdmFyIHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cbiAgdmFyIGRhdGVUaW1lRm9ybWF0O1xuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59O1xudmFyIGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9uZ0Zvcm1hdHRlcnM7IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENEYXlPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mWWVhclRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgZGlmZmVyZW5jZSA9IHRpbWVzdGFtcCAtIHN0YXJ0T2ZZZWFyVGltZXN0YW1wO1xuICByZXR1cm4gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gTUlMTElTRUNPTkRTX0lOX0RBWSkgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlKS5nZXRUaW1lKCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIGZpcnN0V2Vla09mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBvcHRpb25zKTtcbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdEJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpO1xuICB2YXIgeWVhciA9IGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lc3RhbXAgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgYW1vdW50KTtcbn0iLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcbnZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xuXG4vLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG5cbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyfSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfb3B0aW9ucyRsb2NhbGUsIF9yZWYyLCBfcmVmMywgX3JlZjQsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlMiwgX29wdGlvbnMkbG9jYWxlMiRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIsIF9yZWY1LCBfcmVmNiwgX3JlZjcsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlMywgX29wdGlvbnMkbG9jYWxlMyRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0O1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBsb2NhbGUgPSAoX3JlZiA9IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRsb2NhbGUgIT09IHZvaWQgMCA/IF9vcHRpb25zJGxvY2FsZSA6IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYyID0gKF9yZWYzID0gKF9yZWY0ID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiRvcHRpID0gX29wdGlvbnMkbG9jYWxlMi5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTIkb3B0aS5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWY0ICE9PSB2b2lkIDAgPyBfcmVmNCA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogMSk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWY1ID0gKF9yZWY2ID0gKF9yZWY3ID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyRvcHRpID0gX29wdGlvbnMkbG9jYWxlMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTMkb3B0aS53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY3ICE9PSB2b2lkIDAgPyBfcmVmNyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjYgIT09IHZvaWQgMCA/IF9yZWY2IDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0LndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjUgIT09IHZvaWQgMCA/IF9yZWY1IDogMCk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG4gIGlmICghbG9jYWxlLmxvY2FsaXplKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUgcHJvcGVydHknKTtcbiAgfVxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH1cblxuICAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xuICAgIH1cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgIHJldHVybiBcIidcIjtcbiAgICB9XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICB9XG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZvcm1hdHRlcih1dGNEYXRlLCBzdWJzdHJpbmcsIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHZhciBtYXRjaGVkID0gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cCk7XG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuICByZXR1cm4gbWF0Y2hlZFsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBKYW51YXJ5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVMZWZ0LCBvcHRpb25zKTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lV2VlayBmcm9tIFwiLi4vaXNTYW1lV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUaGlzV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGlzIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQgYW5kIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5XG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RoaXNXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZVdlZWsoZGlydHlEYXRlLCBEYXRlLm5vdygpLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IGlzRGF0ZSBmcm9tIFwiLi4vaXNEYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICBpZiAoIWlzRGF0ZShkaXJ0eURhdGUpICYmIHR5cGVvZiBkaXJ0eURhdGUgIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKGRhdGUpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDtcbiAgICAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddXG59O1xuXG4vLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayhpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwIC8qIFN1bmRheSAqLyxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9hc3RpZnkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvYXN0aWZ5LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyohXG4gKiBUb2FzdGlmeSBqcyAxLjEyLjBcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hcHZhcnVuL3RvYXN0aWZ5LWpzXG4gKiBAbGljZW5zZSBNSVQgbGljZW5zZWRcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggVmFydW4gQSBQXG4gKi9cbihmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5Ub2FzdGlmeSA9IGZhY3RvcnkoKTtcbiAgfVxufSkodGhpcywgZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIC8vIE9iamVjdCBpbml0aWFsaXphdGlvblxuICB2YXIgVG9hc3RpZnkgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAvLyBSZXR1cm5pbmcgYSBuZXcgaW5pdCBvYmplY3RcbiAgICAgIHJldHVybiBuZXcgVG9hc3RpZnkubGliLmluaXQob3B0aW9ucyk7XG4gICAgfSxcbiAgICAvLyBMaWJyYXJ5IHZlcnNpb25cbiAgICB2ZXJzaW9uID0gXCIxLjEyLjBcIjtcblxuICAvLyBTZXQgdGhlIGRlZmF1bHQgZ2xvYmFsIG9wdGlvbnNcbiAgVG9hc3RpZnkuZGVmYXVsdHMgPSB7XG4gICAgb2xkZXN0Rmlyc3Q6IHRydWUsXG4gICAgdGV4dDogXCJUb2FzdGlmeSBpcyBhd2Vzb21lIVwiLFxuICAgIG5vZGU6IHVuZGVmaW5lZCxcbiAgICBkdXJhdGlvbjogMzAwMCxcbiAgICBzZWxlY3RvcjogdW5kZWZpbmVkLFxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgfSxcbiAgICBkZXN0aW5hdGlvbjogdW5kZWZpbmVkLFxuICAgIG5ld1dpbmRvdzogZmFsc2UsXG4gICAgY2xvc2U6IGZhbHNlLFxuICAgIGdyYXZpdHk6IFwidG9hc3RpZnktdG9wXCIsXG4gICAgcG9zaXRpb25MZWZ0OiBmYWxzZSxcbiAgICBwb3NpdGlvbjogJycsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnJyxcbiAgICBhdmF0YXI6IFwiXCIsXG4gICAgY2xhc3NOYW1lOiBcIlwiLFxuICAgIHN0b3BPbkZvY3VzOiB0cnVlLFxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICB9LFxuICAgIG9mZnNldDoge3g6IDAsIHk6IDB9LFxuICAgIGVzY2FwZU1hcmt1cDogdHJ1ZSxcbiAgICBhcmlhTGl2ZTogJ3BvbGl0ZScsXG4gICAgc3R5bGU6IHtiYWNrZ3JvdW5kOiAnJ31cbiAgfTtcblxuICAvLyBEZWZpbmluZyB0aGUgcHJvdG90eXBlIG9mIHRoZSBvYmplY3RcbiAgVG9hc3RpZnkubGliID0gVG9hc3RpZnkucHJvdG90eXBlID0ge1xuICAgIHRvYXN0aWZ5OiB2ZXJzaW9uLFxuXG4gICAgY29uc3RydWN0b3I6IFRvYXN0aWZ5LFxuXG4gICAgLy8gSW5pdGlhbGl6aW5nIHRoZSBvYmplY3Qgd2l0aCByZXF1aXJlZCBwYXJhbWV0ZXJzXG4gICAgaW5pdDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgLy8gVmVyaWZ5aW5nIGFuZCB2YWxpZGF0aW5nIHRoZSBpbnB1dCBvYmplY3RcbiAgICAgIGlmICghb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0ge307XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0aW5nIHRoZSBvcHRpb25zIG9iamVjdFxuICAgICAgdGhpcy5vcHRpb25zID0ge307XG5cbiAgICAgIHRoaXMudG9hc3RFbGVtZW50ID0gbnVsbDtcblxuICAgICAgLy8gVmFsaWRhdGluZyB0aGUgb3B0aW9uc1xuICAgICAgdGhpcy5vcHRpb25zLnRleHQgPSBvcHRpb25zLnRleHQgfHwgVG9hc3RpZnkuZGVmYXVsdHMudGV4dDsgLy8gRGlzcGxheSBtZXNzYWdlXG4gICAgICB0aGlzLm9wdGlvbnMubm9kZSA9IG9wdGlvbnMubm9kZSB8fCBUb2FzdGlmeS5kZWZhdWx0cy5ub2RlOyAgLy8gRGlzcGxheSBjb250ZW50IGFzIG5vZGVcbiAgICAgIHRoaXMub3B0aW9ucy5kdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24gPT09IDAgPyAwIDogb3B0aW9ucy5kdXJhdGlvbiB8fCBUb2FzdGlmeS5kZWZhdWx0cy5kdXJhdGlvbjsgLy8gRGlzcGxheSBkdXJhdGlvblxuICAgICAgdGhpcy5vcHRpb25zLnNlbGVjdG9yID0gb3B0aW9ucy5zZWxlY3RvciB8fCBUb2FzdGlmeS5kZWZhdWx0cy5zZWxlY3RvcjsgLy8gUGFyZW50IHNlbGVjdG9yXG4gICAgICB0aGlzLm9wdGlvbnMuY2FsbGJhY2sgPSBvcHRpb25zLmNhbGxiYWNrIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLmNhbGxiYWNrOyAvLyBDYWxsYmFjayBhZnRlciBkaXNwbGF5XG4gICAgICB0aGlzLm9wdGlvbnMuZGVzdGluYXRpb24gPSBvcHRpb25zLmRlc3RpbmF0aW9uIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLmRlc3RpbmF0aW9uOyAvLyBPbi1jbGljayBkZXN0aW5hdGlvblxuICAgICAgdGhpcy5vcHRpb25zLm5ld1dpbmRvdyA9IG9wdGlvbnMubmV3V2luZG93IHx8IFRvYXN0aWZ5LmRlZmF1bHRzLm5ld1dpbmRvdzsgLy8gT3BlbiBkZXN0aW5hdGlvbiBpbiBuZXcgd2luZG93XG4gICAgICB0aGlzLm9wdGlvbnMuY2xvc2UgPSBvcHRpb25zLmNsb3NlIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLmNsb3NlOyAvLyBTaG93IHRvYXN0IGNsb3NlIGljb25cbiAgICAgIHRoaXMub3B0aW9ucy5ncmF2aXR5ID0gb3B0aW9ucy5ncmF2aXR5ID09PSBcImJvdHRvbVwiID8gXCJ0b2FzdGlmeS1ib3R0b21cIiA6IFRvYXN0aWZ5LmRlZmF1bHRzLmdyYXZpdHk7IC8vIHRvYXN0IHBvc2l0aW9uIC0gdG9wIG9yIGJvdHRvbVxuICAgICAgdGhpcy5vcHRpb25zLnBvc2l0aW9uTGVmdCA9IG9wdGlvbnMucG9zaXRpb25MZWZ0IHx8IFRvYXN0aWZ5LmRlZmF1bHRzLnBvc2l0aW9uTGVmdDsgLy8gdG9hc3QgcG9zaXRpb24gLSBsZWZ0IG9yIHJpZ2h0XG4gICAgICB0aGlzLm9wdGlvbnMucG9zaXRpb24gPSBvcHRpb25zLnBvc2l0aW9uIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLnBvc2l0aW9uOyAvLyB0b2FzdCBwb3NpdGlvbiAtIGxlZnQgb3IgcmlnaHRcbiAgICAgIHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvciB8fCBUb2FzdGlmeS5kZWZhdWx0cy5iYWNrZ3JvdW5kQ29sb3I7IC8vIHRvYXN0IGJhY2tncm91bmQgY29sb3JcbiAgICAgIHRoaXMub3B0aW9ucy5hdmF0YXIgPSBvcHRpb25zLmF2YXRhciB8fCBUb2FzdGlmeS5kZWZhdWx0cy5hdmF0YXI7IC8vIGltZyBlbGVtZW50IHNyYyAtIHVybCBvciBhIHBhdGhcbiAgICAgIHRoaXMub3B0aW9ucy5jbGFzc05hbWUgPSBvcHRpb25zLmNsYXNzTmFtZSB8fCBUb2FzdGlmeS5kZWZhdWx0cy5jbGFzc05hbWU7IC8vIGFkZGl0aW9uYWwgY2xhc3MgbmFtZXMgZm9yIHRoZSB0b2FzdFxuICAgICAgdGhpcy5vcHRpb25zLnN0b3BPbkZvY3VzID0gb3B0aW9ucy5zdG9wT25Gb2N1cyA9PT0gdW5kZWZpbmVkID8gVG9hc3RpZnkuZGVmYXVsdHMuc3RvcE9uRm9jdXMgOiBvcHRpb25zLnN0b3BPbkZvY3VzOyAvLyBzdG9wIHRpbWVvdXQgb24gZm9jdXNcbiAgICAgIHRoaXMub3B0aW9ucy5vbkNsaWNrID0gb3B0aW9ucy5vbkNsaWNrIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLm9uQ2xpY2s7IC8vIENhbGxiYWNrIGFmdGVyIGNsaWNrXG4gICAgICB0aGlzLm9wdGlvbnMub2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQgfHwgVG9hc3RpZnkuZGVmYXVsdHMub2Zmc2V0OyAvLyB0b2FzdCBvZmZzZXRcbiAgICAgIHRoaXMub3B0aW9ucy5lc2NhcGVNYXJrdXAgPSBvcHRpb25zLmVzY2FwZU1hcmt1cCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5lc2NhcGVNYXJrdXAgOiBUb2FzdGlmeS5kZWZhdWx0cy5lc2NhcGVNYXJrdXA7XG4gICAgICB0aGlzLm9wdGlvbnMuYXJpYUxpdmUgPSBvcHRpb25zLmFyaWFMaXZlIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLmFyaWFMaXZlO1xuICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0gb3B0aW9ucy5zdHlsZSB8fCBUb2FzdGlmeS5kZWZhdWx0cy5zdHlsZTtcbiAgICAgIGlmKG9wdGlvbnMuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZS5iYWNrZ3JvdW5kID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICB9XG5cbiAgICAgIC8vIFJldHVybmluZyB0aGUgY3VycmVudCBvYmplY3QgZm9yIGNoYWluaW5nIGZ1bmN0aW9uc1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIEJ1aWxkaW5nIHRoZSBET00gZWxlbWVudFxuICAgIGJ1aWxkVG9hc3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gVmFsaWRhdGluZyBpZiB0aGUgb3B0aW9ucyBhcmUgZGVmaW5lZFxuICAgICAgaWYgKCF0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgdGhyb3cgXCJUb2FzdGlmeSBpcyBub3QgaW5pdGlhbGl6ZWRcIjtcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRpbmcgdGhlIERPTSBvYmplY3RcbiAgICAgIHZhciBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdkVsZW1lbnQuY2xhc3NOYW1lID0gXCJ0b2FzdGlmeSBvbiBcIiArIHRoaXMub3B0aW9ucy5jbGFzc05hbWU7XG5cbiAgICAgIC8vIFBvc2l0aW9uaW5nIHRvYXN0IHRvIGxlZnQgb3IgcmlnaHQgb3IgY2VudGVyXG4gICAgICBpZiAoISF0aGlzLm9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgICAgZGl2RWxlbWVudC5jbGFzc05hbWUgKz0gXCIgdG9hc3RpZnktXCIgKyB0aGlzLm9wdGlvbnMucG9zaXRpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUbyBiZSBkZXByZWNpYXRlZCBpbiBmdXJ0aGVyIHZlcnNpb25zXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb25MZWZ0ID09PSB0cnVlKSB7XG4gICAgICAgICAgZGl2RWxlbWVudC5jbGFzc05hbWUgKz0gXCIgdG9hc3RpZnktbGVmdFwiO1xuICAgICAgICAgIGNvbnNvbGUud2FybignUHJvcGVydHkgYHBvc2l0aW9uTGVmdGAgd2lsbCBiZSBkZXByZWNpYXRlZCBpbiBmdXJ0aGVyIHZlcnNpb25zLiBQbGVhc2UgdXNlIGBwb3NpdGlvbmAgaW5zdGVhZC4nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIERlZmF1bHQgcG9zaXRpb25cbiAgICAgICAgICBkaXZFbGVtZW50LmNsYXNzTmFtZSArPSBcIiB0b2FzdGlmeS1yaWdodFwiO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEFzc2lnbmluZyBncmF2aXR5IG9mIGVsZW1lbnRcbiAgICAgIGRpdkVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIFwiICsgdGhpcy5vcHRpb25zLmdyYXZpdHk7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgYmVpbmcgZGVwcmVjYXRlZCBpbiBmYXZvciBvZiB1c2luZyB0aGUgc3R5bGUgSFRNTCBET00gcHJvcGVydHlcbiAgICAgICAgY29uc29sZS53YXJuKCdERVBSRUNBVElPTiBOT1RJQ0U6IFwiYmFja2dyb3VuZENvbG9yXCIgaXMgYmVpbmcgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSB0aGUgXCJzdHlsZS5iYWNrZ3JvdW5kXCIgcHJvcGVydHkuJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIExvb3AgdGhyb3VnaCBvdXIgc3R5bGUgb2JqZWN0IGFuZCBhcHBseSBzdHlsZXMgdG8gZGl2RWxlbWVudFxuICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gdGhpcy5vcHRpb25zLnN0eWxlKSB7XG4gICAgICAgIGRpdkVsZW1lbnQuc3R5bGVbcHJvcGVydHldID0gdGhpcy5vcHRpb25zLnN0eWxlW3Byb3BlcnR5XTtcbiAgICAgIH1cblxuICAgICAgLy8gQW5ub3VuY2UgdGhlIHRvYXN0IHRvIHNjcmVlbiByZWFkZXJzXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmFyaWFMaXZlKSB7XG4gICAgICAgIGRpdkVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCB0aGlzLm9wdGlvbnMuYXJpYUxpdmUpXG4gICAgICB9XG5cbiAgICAgIC8vIEFkZGluZyB0aGUgdG9hc3QgbWVzc2FnZS9ub2RlXG4gICAgICBpZiAodGhpcy5vcHRpb25zLm5vZGUgJiYgdGhpcy5vcHRpb25zLm5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIC8vIElmIHdlIGhhdmUgYSB2YWxpZCBub2RlLCB3ZSBpbnNlcnQgaXRcbiAgICAgICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLm9wdGlvbnMubm9kZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZXNjYXBlTWFya3VwKSB7XG4gICAgICAgICAgZGl2RWxlbWVudC5pbm5lclRleHQgPSB0aGlzLm9wdGlvbnMudGV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXZFbGVtZW50LmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy50ZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hdmF0YXIgIT09IFwiXCIpIHtcbiAgICAgICAgICB2YXIgYXZhdGFyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgYXZhdGFyRWxlbWVudC5zcmMgPSB0aGlzLm9wdGlvbnMuYXZhdGFyO1xuXG4gICAgICAgICAgYXZhdGFyRWxlbWVudC5jbGFzc05hbWUgPSBcInRvYXN0aWZ5LWF2YXRhclwiO1xuXG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wb3NpdGlvbiA9PSBcImxlZnRcIiB8fCB0aGlzLm9wdGlvbnMucG9zaXRpb25MZWZ0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyBBZGRpbmcgY2xvc2UgaWNvbiBvbiB0aGUgbGVmdCBvZiBjb250ZW50XG4gICAgICAgICAgICBkaXZFbGVtZW50LmFwcGVuZENoaWxkKGF2YXRhckVsZW1lbnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBBZGRpbmcgY2xvc2UgaWNvbiBvbiB0aGUgcmlnaHQgb2YgY29udGVudFxuICAgICAgICAgICAgZGl2RWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIGF2YXRhckVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBBZGRpbmcgYSBjbG9zZSBpY29uIHRvIHRoZSB0b2FzdFxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5jbG9zZSA9PT0gdHJ1ZSkge1xuICAgICAgICAvLyBDcmVhdGUgYSBzcGFuIGZvciBjbG9zZSBlbGVtZW50XG4gICAgICAgIHZhciBjbG9zZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjbG9zZUVsZW1lbnQudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgIGNsb3NlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiQ2xvc2VcIik7XG4gICAgICAgIGNsb3NlRWxlbWVudC5jbGFzc05hbWUgPSBcInRvYXN0LWNsb3NlXCI7XG4gICAgICAgIGNsb3NlRWxlbWVudC5pbm5lckhUTUwgPSBcIiYjMTAwMDY7XCI7XG5cbiAgICAgICAgLy8gVHJpZ2dlcmluZyB0aGUgcmVtb3ZhbCBvZiB0b2FzdCBmcm9tIERPTSBvbiBjbG9zZSBjbGlja1xuICAgICAgICBjbG9zZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFbGVtZW50KHRoaXMudG9hc3RFbGVtZW50KTtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50b2FzdEVsZW1lbnQudGltZU91dFZhbHVlKTtcbiAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgKTtcblxuICAgICAgICAvL0NhbGN1bGF0aW5nIHNjcmVlbiB3aWR0aFxuICAgICAgICB2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCA+IDAgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IHNjcmVlbi53aWR0aDtcblxuICAgICAgICAvLyBBZGRpbmcgdGhlIGNsb3NlIGljb24gdG8gdGhlIHRvYXN0IGVsZW1lbnRcbiAgICAgICAgLy8gRGlzcGxheSBvbiB0aGUgcmlnaHQgaWYgc2NyZWVuIHdpZHRoIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byAzNjBweFxuICAgICAgICBpZiAoKHRoaXMub3B0aW9ucy5wb3NpdGlvbiA9PSBcImxlZnRcIiB8fCB0aGlzLm9wdGlvbnMucG9zaXRpb25MZWZ0ID09PSB0cnVlKSAmJiB3aWR0aCA+IDM2MCkge1xuICAgICAgICAgIC8vIEFkZGluZyBjbG9zZSBpY29uIG9uIHRoZSBsZWZ0IG9mIGNvbnRlbnRcbiAgICAgICAgICBkaXZFbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgY2xvc2VFbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBBZGRpbmcgY2xvc2UgaWNvbiBvbiB0aGUgcmlnaHQgb2YgY29udGVudFxuICAgICAgICAgIGRpdkVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvc2VFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBDbGVhciB0aW1lb3V0IHdoaWxlIHRvYXN0IGlzIGZvY3VzZWRcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RvcE9uRm9jdXMgJiYgdGhpcy5vcHRpb25zLmR1cmF0aW9uID4gMCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIC8vIHN0b3AgY291bnRkb3duXG4gICAgICAgIGRpdkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcIm1vdXNlb3ZlclwiLFxuICAgICAgICAgIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGRpdkVsZW1lbnQudGltZU91dFZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgLy8gYWRkIGJhY2sgdGhlIHRpbWVvdXRcbiAgICAgICAgZGl2RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwibW91c2VsZWF2ZVwiLFxuICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZGl2RWxlbWVudC50aW1lT3V0VmFsdWUgPSB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSB0b2FzdCBmcm9tIERPTVxuICAgICAgICAgICAgICAgIHNlbGYucmVtb3ZlRWxlbWVudChkaXZFbGVtZW50KTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2VsZi5vcHRpb25zLmR1cmF0aW9uXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIC8vIEFkZGluZyBhbiBvbi1jbGljayBkZXN0aW5hdGlvbiBwYXRoXG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5kZXN0aW5hdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBkaXZFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubmV3V2luZG93ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5vcGVuKHRoaXMub3B0aW9ucy5kZXN0aW5hdGlvbiwgXCJfYmxhbmtcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB0aGlzLm9wdGlvbnMuZGVzdGluYXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm9uQ2xpY2sgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgdGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGRpdkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9uQ2xpY2soKTtcbiAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkaW5nIG9mZnNldFxuICAgICAgaWYodHlwZW9mIHRoaXMub3B0aW9ucy5vZmZzZXQgPT09IFwib2JqZWN0XCIpIHtcblxuICAgICAgICB2YXIgeCA9IGdldEF4aXNPZmZzZXRBVmFsdWUoXCJ4XCIsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHZhciB5ID0gZ2V0QXhpc09mZnNldEFWYWx1ZShcInlcIiwgdGhpcy5vcHRpb25zKTtcblxuICAgICAgICB2YXIgeE9mZnNldCA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbiA9PSBcImxlZnRcIiA/IHggOiBcIi1cIiArIHg7XG4gICAgICAgIHZhciB5T2Zmc2V0ID0gdGhpcy5vcHRpb25zLmdyYXZpdHkgPT0gXCJ0b2FzdGlmeS10b3BcIiA/IHkgOiBcIi1cIiArIHk7XG5cbiAgICAgICAgZGl2RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZShcIiArIHhPZmZzZXQgKyBcIixcIiArIHlPZmZzZXQgKyBcIilcIjtcblxuICAgICAgfVxuXG4gICAgICAvLyBSZXR1cm5pbmcgdGhlIGdlbmVyYXRlZCBlbGVtZW50XG4gICAgICByZXR1cm4gZGl2RWxlbWVudDtcbiAgICB9LFxuXG4gICAgLy8gRGlzcGxheWluZyB0aGUgdG9hc3RcbiAgICBzaG93VG9hc3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gQ3JlYXRpbmcgdGhlIERPTSBvYmplY3QgZm9yIHRoZSB0b2FzdFxuICAgICAgdGhpcy50b2FzdEVsZW1lbnQgPSB0aGlzLmJ1aWxkVG9hc3QoKTtcblxuICAgICAgLy8gR2V0dGluZyB0aGUgcm9vdCBlbGVtZW50IHRvIHdpdGggdGhlIHRvYXN0IG5lZWRzIHRvIGJlIGFkZGVkXG4gICAgICB2YXIgcm9vdEVsZW1lbnQ7XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5zZWxlY3RvciA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByb290RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMub3B0aW9ucy5zZWxlY3Rvcik7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5zZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8ICh0eXBlb2YgU2hhZG93Um9vdCAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5vcHRpb25zLnNlbGVjdG9yIGluc3RhbmNlb2YgU2hhZG93Um9vdCkpIHtcbiAgICAgICAgcm9vdEVsZW1lbnQgPSB0aGlzLm9wdGlvbnMuc2VsZWN0b3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb290RWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XG4gICAgICB9XG5cbiAgICAgIC8vIFZhbGlkYXRpbmcgaWYgcm9vdCBlbGVtZW50IGlzIHByZXNlbnQgaW4gRE9NXG4gICAgICBpZiAoIXJvb3RFbGVtZW50KSB7XG4gICAgICAgIHRocm93IFwiUm9vdCBlbGVtZW50IGlzIG5vdCBkZWZpbmVkXCI7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZGluZyB0aGUgRE9NIGVsZW1lbnRcbiAgICAgIHZhciBlbGVtZW50VG9JbnNlcnQgPSBUb2FzdGlmeS5kZWZhdWx0cy5vbGRlc3RGaXJzdCA/IHJvb3RFbGVtZW50LmZpcnN0Q2hpbGQgOiByb290RWxlbWVudC5sYXN0Q2hpbGQ7XG4gICAgICByb290RWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy50b2FzdEVsZW1lbnQsIGVsZW1lbnRUb0luc2VydCk7XG5cbiAgICAgIC8vIFJlcG9zaXRpb25pbmcgdGhlIHRvYXN0cyBpbiBjYXNlIG11bHRpcGxlIHRvYXN0cyBhcmUgcHJlc2VudFxuICAgICAgVG9hc3RpZnkucmVwb3NpdGlvbigpO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmR1cmF0aW9uID4gMCkge1xuICAgICAgICB0aGlzLnRvYXN0RWxlbWVudC50aW1lT3V0VmFsdWUgPSB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgdG9hc3QgZnJvbSBET01cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRWxlbWVudCh0aGlzLnRvYXN0RWxlbWVudCk7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgIHRoaXMub3B0aW9ucy5kdXJhdGlvblxuICAgICAgICApOyAvLyBCaW5kaW5nIGB0aGlzYCBmb3IgZnVuY3Rpb24gaW52b2NhdGlvblxuICAgICAgfVxuXG4gICAgICAvLyBTdXBwb3J0aW5nIGZ1bmN0aW9uIGNoYWluaW5nXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgaGlkZVRvYXN0OiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnRvYXN0RWxlbWVudC50aW1lT3V0VmFsdWUpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG9hc3RFbGVtZW50LnRpbWVPdXRWYWx1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlbW92ZUVsZW1lbnQodGhpcy50b2FzdEVsZW1lbnQpO1xuICAgIH0sXG5cbiAgICAvLyBSZW1vdmluZyB0aGUgZWxlbWVudCBmcm9tIHRoZSBET01cbiAgICByZW1vdmVFbGVtZW50OiBmdW5jdGlvbih0b2FzdEVsZW1lbnQpIHtcbiAgICAgIC8vIEhpZGluZyB0aGUgZWxlbWVudFxuICAgICAgLy8gdG9hc3RFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJvblwiKTtcbiAgICAgIHRvYXN0RWxlbWVudC5jbGFzc05hbWUgPSB0b2FzdEVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UoXCIgb25cIiwgXCJcIik7XG5cbiAgICAgIC8vIFJlbW92aW5nIHRoZSBlbGVtZW50IGZyb20gRE9NIGFmdGVyIHRyYW5zaXRpb24gZW5kXG4gICAgICB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gcmVtb3ZlIG9wdGlvbnMgbm9kZSBpZiBhbnlcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm5vZGUgJiYgdGhpcy5vcHRpb25zLm5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm9wdGlvbnMubm9kZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUmVtb3ZlIHRoZSBlbGVtZW50IGZyb20gdGhlIERPTSwgb25seSB3aGVuIHRoZSBwYXJlbnQgbm9kZSB3YXMgbm90IHJlbW92ZWQgYmVmb3JlLlxuICAgICAgICAgIGlmICh0b2FzdEVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgdG9hc3RFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodG9hc3RFbGVtZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDYWxsaW5nIHRoZSBjYWxsYmFjayBmdW5jdGlvblxuICAgICAgICAgIHRoaXMub3B0aW9ucy5jYWxsYmFjay5jYWxsKHRvYXN0RWxlbWVudCk7XG5cbiAgICAgICAgICAvLyBSZXBvc2l0aW9uaW5nIHRoZSB0b2FzdHMgYWdhaW5cbiAgICAgICAgICBUb2FzdGlmeS5yZXBvc2l0aW9uKCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgNDAwXG4gICAgICApOyAvLyBCaW5kaW5nIGB0aGlzYCBmb3IgZnVuY3Rpb24gaW52b2NhdGlvblxuICAgIH0sXG4gIH07XG5cbiAgLy8gUG9zaXRpb25pbmcgdGhlIHRvYXN0cyBvbiB0aGUgRE9NXG4gIFRvYXN0aWZ5LnJlcG9zaXRpb24gPSBmdW5jdGlvbigpIHtcblxuICAgIC8vIFRvcCBtYXJnaW5zIHdpdGggZ3Jhdml0eVxuICAgIHZhciB0b3BMZWZ0T2Zmc2V0U2l6ZSA9IHtcbiAgICAgIHRvcDogMTUsXG4gICAgICBib3R0b206IDE1LFxuICAgIH07XG4gICAgdmFyIHRvcFJpZ2h0T2Zmc2V0U2l6ZSA9IHtcbiAgICAgIHRvcDogMTUsXG4gICAgICBib3R0b206IDE1LFxuICAgIH07XG4gICAgdmFyIG9mZnNldFNpemUgPSB7XG4gICAgICB0b3A6IDE1LFxuICAgICAgYm90dG9tOiAxNSxcbiAgICB9O1xuXG4gICAgLy8gR2V0IGFsbCB0b2FzdCBtZXNzYWdlcyBvbiB0aGUgRE9NXG4gICAgdmFyIGFsbFRvYXN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b2FzdGlmeVwiKTtcblxuICAgIHZhciBjbGFzc1VzZWQ7XG5cbiAgICAvLyBNb2RpZnlpbmcgdGhlIHBvc2l0aW9uIG9mIGVhY2ggdG9hc3QgZWxlbWVudFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsVG9hc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBHZXR0aW5nIHRoZSBhcHBsaWVkIGdyYXZpdHlcbiAgICAgIGlmIChjb250YWluc0NsYXNzKGFsbFRvYXN0c1tpXSwgXCJ0b2FzdGlmeS10b3BcIikgPT09IHRydWUpIHtcbiAgICAgICAgY2xhc3NVc2VkID0gXCJ0b2FzdGlmeS10b3BcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsYXNzVXNlZCA9IFwidG9hc3RpZnktYm90dG9tXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBoZWlnaHQgPSBhbGxUb2FzdHNbaV0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgY2xhc3NVc2VkID0gY2xhc3NVc2VkLnN1YnN0cig5LCBjbGFzc1VzZWQubGVuZ3RoLTEpXG4gICAgICAvLyBTcGFjaW5nIGJldHdlZW4gdG9hc3RzXG4gICAgICB2YXIgb2Zmc2V0ID0gMTU7XG5cbiAgICAgIHZhciB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoID4gMCA/IHdpbmRvdy5pbm5lcldpZHRoIDogc2NyZWVuLndpZHRoO1xuXG4gICAgICAvLyBTaG93IHRvYXN0IGluIGNlbnRlciBpZiBzY3JlZW4gd2l0aCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gMzYwcHhcbiAgICAgIGlmICh3aWR0aCA8PSAzNjApIHtcbiAgICAgICAgLy8gU2V0dGluZyB0aGUgcG9zaXRpb25cbiAgICAgICAgYWxsVG9hc3RzW2ldLnN0eWxlW2NsYXNzVXNlZF0gPSBvZmZzZXRTaXplW2NsYXNzVXNlZF0gKyBcInB4XCI7XG5cbiAgICAgICAgb2Zmc2V0U2l6ZVtjbGFzc1VzZWRdICs9IGhlaWdodCArIG9mZnNldDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjb250YWluc0NsYXNzKGFsbFRvYXN0c1tpXSwgXCJ0b2FzdGlmeS1sZWZ0XCIpID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyB0aGUgcG9zaXRpb25cbiAgICAgICAgICBhbGxUb2FzdHNbaV0uc3R5bGVbY2xhc3NVc2VkXSA9IHRvcExlZnRPZmZzZXRTaXplW2NsYXNzVXNlZF0gKyBcInB4XCI7XG5cbiAgICAgICAgICB0b3BMZWZ0T2Zmc2V0U2l6ZVtjbGFzc1VzZWRdICs9IGhlaWdodCArIG9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIHRoZSBwb3NpdGlvblxuICAgICAgICAgIGFsbFRvYXN0c1tpXS5zdHlsZVtjbGFzc1VzZWRdID0gdG9wUmlnaHRPZmZzZXRTaXplW2NsYXNzVXNlZF0gKyBcInB4XCI7XG5cbiAgICAgICAgICB0b3BSaWdodE9mZnNldFNpemVbY2xhc3NVc2VkXSArPSBoZWlnaHQgKyBvZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdXBwb3J0aW5nIGZ1bmN0aW9uIGNoYWluaW5nXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGdldCBvZmZzZXQuXG4gIGZ1bmN0aW9uIGdldEF4aXNPZmZzZXRBVmFsdWUoYXhpcywgb3B0aW9ucykge1xuXG4gICAgaWYob3B0aW9ucy5vZmZzZXRbYXhpc10pIHtcbiAgICAgIGlmKGlzTmFOKG9wdGlvbnMub2Zmc2V0W2F4aXNdKSkge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5vZmZzZXRbYXhpc107XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMub2Zmc2V0W2F4aXNdICsgJ3B4JztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJzBweCc7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnRhaW5zQ2xhc3MoZWxlbSwgeW91ckNsYXNzKSB7XG4gICAgaWYgKCFlbGVtIHx8IHR5cGVvZiB5b3VyQ2xhc3MgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgZWxlbS5jbGFzc05hbWUgJiZcbiAgICAgIGVsZW0uY2xhc3NOYW1lXG4gICAgICAgIC50cmltKClcbiAgICAgICAgLnNwbGl0KC9cXHMrL2dpKVxuICAgICAgICAuaW5kZXhPZih5b3VyQ2xhc3MpID4gLTFcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gU2V0dGluZyB1cCB0aGUgcHJvdG90eXBlIGZvciB0aGUgaW5pdCBvYmplY3RcbiAgVG9hc3RpZnkubGliLmluaXQucHJvdG90eXBlID0gVG9hc3RpZnkubGliO1xuXG4gIC8vIFJldHVybmluZyB0aGUgVG9hc3RpZnkgZnVuY3Rpb24gdG8gYmUgYXNzaWduZWQgdG8gdGhlIHdpbmRvdyBvYmplY3QvbW9kdWxlXG4gIHJldHVybiBUb2FzdGlmeTtcbn0pO1xuIiwiaW1wb3J0IGFsbFRhc2tzSWNvbiBmcm9tICcuL2ltZy9hbGx0YXNrczQ4eDQ4LnN2ZydcbmltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0cydcbmltcG9ydCB7IFRhc2tzSGFuZGxlciwgUHJvamVjdHNIYW5kbGVyIH0gZnJvbSAnLi9kb20nXG5cbmNvbnN0IHRhc2tzSGFuZGxlciA9IG5ldyBUYXNrc0hhbmRsZXIoKVxuY29uc3QgcHJvamVjdHNIYW5kbGVyID0gbmV3IFByb2plY3RzSGFuZGxlcigpXG5cbmNvbnN0IHRhc2tzTGlzdFZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3NMaXN0VmlldycpXG5jb25zdCBoZWFkZXJTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlclNlY3Rpb24nKVxuY29uc3QgZmxvYXRpbmdBY3Rpb25CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxvYXRpbmdBY3Rpb25CdXR0b24nKVxuY29uc3QgZGF0ZURpc3BsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLWRpc3BsYXllcicpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRBbGxUYXNrcygpIHtcbiAgICBzZXRBbGxUYXNrc1RhYigpO1xuICAgIGxldCB0YXNrc0xlbmd0aCA9IDBcbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBwcm9qZWN0SW5kZXgpID0+IHtcbiAgICAgICAgcHJvamVjdHNIYW5kbGVyLmNyZWF0ZVByb2plY3RIdG1sRm9yVGFicyh0YXNrc0xpc3RWaWV3LCBwcm9qZWN0KTtcbiAgICAgICAgY29uc3QgdGFza3NDb250YWluZXJBbGxUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrcy1jb250YWluZXItYWxsLXRhc2tzJyk7XG5cbiAgICAgICAgbGV0IGhhc1Rhc2tzID0gZmFsc2U7IC8vIFRyYWNrIGlmIHRoZXJlIGFyZSB0YXNrcyBpbiB0aGUgcHJvamVjdFxuXG4gICAgICAgIHByb2plY3Quc2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+IHtcbiAgICAgICAgICAgIGlmIChzZWN0aW9uLnRhc2tzLmxlbmd0aCA9PT0gMCkge1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhhc1Rhc2tzID0gdHJ1ZTsgLy8gTWFyayB0aGF0IHRoZXJlIGFyZSB0YXNrcyBpbiB0aGlzIHByb2plY3RcbiAgICAgICAgICAgICAgICBzZWN0aW9uLnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tzSGFuZGxlci5jcmVhdGVUYXNrSHRtbCh0YXNrc0NvbnRhaW5lckFsbFRhc2tzW3Byb2plY3RJbmRleF0sIHRhc2spO1xuICAgICAgICAgICAgICAgICAgICB0YXNrc0xlbmd0aCsrXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghaGFzVGFza3MpIHtcbiAgICAgICAgICAgIHRhc2tzSGFuZGxlci5kaXNwbGF5Tm9UYXNrc01lc3NhZ2UodGFza3NDb250YWluZXJBbGxUYXNrc1twcm9qZWN0SW5kZXhdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGRpc3BsYXlJbXBvcnRhbnRUYXNrc0xlbmd0aCh0YXNrc0xlbmd0aClcbn1cblxuZnVuY3Rpb24gc2V0QWxsVGFza3NUYWIoKSB7XG4gICAgY29uc3QgY3VycmVudFRhYk5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudFRhYk5hbWUnKVxuICAgIGNvbnN0IGN1cnJlbnRUYWJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRUYWJJY29uJylcblxuICAgIGNvbnN0IHN2Z0FsbFRhc2tzID0gbmV3IEltYWdlKClcbiAgICBzdmdBbGxUYXNrcy5zcmMgPSBhbGxUYXNrc0ljb247XG4gICAgY3VycmVudFRhYkljb24uaW5uZXJIVE1MID0gJydcbiAgICBjdXJyZW50VGFiSWNvbi5hcHBlbmRDaGlsZChzdmdBbGxUYXNrcylcblxuICAgIGN1cnJlbnRUYWJOYW1lLnRleHRDb250ZW50ID0gJ0FsbCBUYXNrcydcblxuICAgIHRhc2tzTGlzdFZpZXcuaW5uZXJIVE1MID0gJydcbiAgICB0YXNrc0xpc3RWaWV3LmNsYXNzTGlzdC5hZGQoJ2hlaWdodC1hdXRvJylcbiAgICBkYXRlRGlzcGxheWVyLmlubmVySFRNTCA9ICcnXG4gICAgZmxvYXRpbmdBY3Rpb25CdXR0b24uaW5uZXJIVE1MID0gJydcbiAgICBoZWFkZXJTZWN0aW9uLmNsYXNzTmFtZSA9ICcnXG4gICAgaGVhZGVyU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdoZWFkZXItYWxsLXRhc2tzJylcbn1cblxuXG5mdW5jdGlvbiBkaXNwbGF5SW1wb3J0YW50VGFza3NMZW5ndGgodGFza3NMZW5ndGgpIHtcbiAgICBsZXQgdGFza3NTdHJpbmcgPSAndGFza3MnXG4gICAgY29uc3QgbGVuZ3RoQXJyID0gdGFza3NMZW5ndGgudG9TdHJpbmcoKS5zcGxpdCgnJylcbiAgICBpZiAobGVuZ3RoQXJyW2xlbmd0aEFyci5sZW5ndGggLSAxXSA9PT0gJzEnKSB7XG4gICAgICAgIHRhc2tzU3RyaW5nID0gJ3Rhc2snXG4gICAgfVxuICAgIGNvbnN0IGxlbmd0aFN0cmluZyA9IGBUYXNrc0NvdW50OiAke3Rhc2tzTGVuZ3RofSAke3Rhc2tzU3RyaW5nfS5gXG4gICAgdGFza3NIYW5kbGVyLmNyZWF0ZVJpZ2h0RGF0ZURpc3BsYXkobWFpbkhlYWRpbmdSaWdodCwgbGVuZ3RoU3RyaW5nKVxuXG4gICAgZGF0ZURpc3BsYXllci5pbm5lckhUTUwgPSAnJ1xuICAgIHRhc2tzSGFuZGxlci5jcmVhdGVEYXRlRGlzcGxheShkYXRlRGlzcGxheWVyLCBsZW5ndGhTdHJpbmcpXG59IiwiaW1wb3J0IHByb2plY3RJY29uIGZyb20gJy4vaW1nL3Byb2plY3Quc3ZnJ1xuXG5leHBvcnQgY2xhc3MgTW9kYWxIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lSW5wdXQnKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0UmVuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFJlbmFtZUlucHV0JylcbiAgICAgICAgdGhpcy5tb2RhbEFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsQWxlcnQnKVxuICAgICAgICB0aGlzLm1vZGFsQWxlcnRSZW5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxBbGVydFJlbmFtZScpXG4gICAgICAgIHRoaXMuYWxsSW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylcbiAgICAgICAgdGhpcy5tb2RhbEFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKVxuICAgICAgICB0aGlzLm1vZGFsUmVuYW1lUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbFJlbmFtZScpXG4gICAgICAgIHRoaXMubW9kYWxEZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsRGVsZXRlJylcbiAgICAgICAgdGhpcy5zZWN0aW9uTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb25OYW1lSW5wdXQnKVxuICAgICAgICB0aGlzLm1vZGFsU2VjdGlvbkFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsU2VjdGlvbkFsZXJ0JylcbiAgICAgICAgdGhpcy5tb2RhbEFkZFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxBZGRTZWN0aW9uJylcbiAgICB9XG5cblxuICAgIGhhbmRsZU1vZGFscygpIHtcbiAgICAgICAgY29uc3Qgb3Blbk1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsLXRhcmdldF0nKVxuICAgICAgICBjb25zdCBjbG9zZU1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNsb3NlLWJ1dHRvbl0nKVxuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKVxuXG4gICAgICAgIG9wZW5Nb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24uZGF0YXNldC5tb2RhbFRhcmdldClcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5Nb2RhbChtb2RhbClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgY2xvc2VNb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gYnV0dG9uLmNsb3Nlc3QoJy5tb2RhbCcpXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKG1vZGFsKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLmFjdGl2ZScpXG4gICAgICAgICAgICBtb2RhbHMuZm9yRWFjaChtb2RhbCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKG1vZGFsKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG9wZW5Nb2RhbChtb2RhbCkge1xuICAgICAgICBpZiAobW9kYWwgPT0gbnVsbCkgcmV0dXJuXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gJydcbiAgICAgICAgdGhpcy5tb2RhbEFsZXJ0LmlubmVySFRNTCA9ICcnXG4gICAgICAgIHRoaXMubW9kYWxBbGVydFJlbmFtZS5pbm5lckhUTUwgPSAnJ1xuICAgICAgICB0aGlzLnByb2plY3RSZW5hbWVJbnB1dC52YWx1ZSA9ICcnXG4gICAgICAgIHRoaXMuc2VjdGlvbk5hbWVJbnB1dC52YWx1ZSA9ICcnXG4gICAgICAgIHRoaXMubW9kYWxTZWN0aW9uQWxlcnQuaW5uZXJIVE1MID0gJydcbiAgICB9XG5cbiAgICBjbG9zZU1vZGFsKG1vZGFsKSB7XG4gICAgICAgIHRoaXMucHJvamVjdE5hbWVJbnB1dC5ibHVyKCk7XG4gICAgICAgIHRoaXMucHJvamVjdFJlbmFtZUlucHV0LmJsdXIoKVxuICAgICAgICB0aGlzLnNlY3Rpb25OYW1lSW5wdXQuYmx1cigpXG5cbiAgICAgICAgaWYgKG1vZGFsID09IG51bGwpIHJldHVyblxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgfVxuXG5cbiAgICBjaGFuZ2VNb2RhbFBvc2l0aW9uSWZLZXlib2FyZE9wZW5lZCgpIHtcbiAgICAgICAgY29uc3QgaW5wdXRzQXJyYXkgPSBBcnJheS5mcm9tKHRoaXMuYWxsSW5wdXRzKVxuICAgICAgICBjb25zdCBtZWRpYVF1ZXJ5SGFuZGxlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZWRpYVF1ZXJ5SGFuZGxlcicpXG4gICAgICAgIGlucHV0c0FycmF5LmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG1lZGlhUXVlcnlIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcHV0ZWRTdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RhbEFkZFByb2plY3Quc3R5bGUudG9wID0gJzMwJSdcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RhbFJlbmFtZVByb2plY3Quc3R5bGUudG9wID0gJzMwJSdcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RhbEFkZFNlY3Rpb24uc3R5bGUudG9wID0gJzMwJSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsQWRkUHJvamVjdC5zdHlsZS50b3AgPSAnNTAlJ1xuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxSZW5hbWVQcm9qZWN0LnN0eWxlLnRvcCA9ICc1MCUnXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbEFkZFNlY3Rpb24uc3R5bGUudG9wID0gJzUwJSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnByb2plY3ROYW1lSW5wdXQuYmx1cigpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVuYW1lRm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdFJlbmFtZUlucHV0LmJsdXIoKVxuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFNlY3Rpb25Gb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5zZWN0aW9uTmFtZUlucHV0LmJsdXIoKVxuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbGV0ZUZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVsZXRlRm9ybVNlY3Rpb25cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByb2plY3RzSGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0c0NvbnRhaW5lcicpXG5cbiAgICBjcmVhdGVQcm9qZWN0SHRtbChwcm9qZWN0KSB7XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgPGxpPiBlbGVtZW50IHdpdGggY2xhc3MgXCJzaWRlYmFyLXByb2plY3RcIiBhbmQgXCJ0YWJcIlxuICAgICAgICBjb25zdCBsaUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGxpRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1wcm9qZWN0XCIsIFwidGFiXCIpO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgZmlyc3QgPGRpdj4gZWxlbWVudCB3aXRoIGNsYXNzIFwiZmxleFwiXG4gICAgICAgIGNvbnN0IGRpdkZsZXgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2RmxleDEuY2xhc3NMaXN0LmFkZChcImZsZXhcIik7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBcInByb2plY3RcIiBTVkcgaWNvblxuICAgICAgICBjb25zdCBzdmdQcm9qZWN0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHN2Z1Byb2plY3Quc3JjID0gcHJvamVjdEljb247XG5cbiAgICAgICAgLy8gQXBwZW5kIHRoZSBcInByb2plY3RcIiBpY29uIHRvIHRoZSBmaXJzdCA8ZGl2PiBlbGVtZW50XG4gICAgICAgIGRpdkZsZXgxLmFwcGVuZENoaWxkKHN2Z1Byb2plY3QpO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgPGlucHV0PiBlbGVtZW50XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdE5hbWVDb250YWluZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWVcbiAgICAgICAgcHJvamVjdE5hbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZS1pbnB1dFwiKTtcbiAgICAgICAgZGl2RmxleDEuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVDb250YWluZXIpO1xuXG4gICAgICAgIC8vIEFwcGVuZCB0aGUgZmlyc3QgPGRpdj4gZWxlbWVudCB0byB0aGUgPGxpPiBlbGVtZW50XG4gICAgICAgIGxpRWxlbWVudC5hcHBlbmRDaGlsZChkaXZGbGV4MSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBzZWNvbmQgPGRpdj4gZWxlbWVudCB3aXRoIGNsYXNzIFwicHJvamVjdC10b29sc1wiXG4gICAgICAgIGNvbnN0IGRpdlRvb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2VG9vbHMuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdG9vbHNcIik7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSA8ZGl2PiBlbGVtZW50cyB3aXRoIGNsYXNzIFwiZmxleFwiIGZvciB0aGUgdG9vbCBpY29uc1xuICAgICAgICBjb25zdCBkaXZGbGV4MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdkZsZXgyLmNsYXNzTGlzdC5hZGQoXCJmbGV4XCIpO1xuICAgICAgICBjb25zdCBkaXZGbGV4MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdkZsZXgzLmNsYXNzTGlzdC5hZGQoXCJmbGV4XCIpO1xuXG4gICAgICAgIC8vIEFwcGVuZCB0aGUgdG9vbCBpY29ucyB0byB0aGUgc2Vjb25kIDxkaXY+IGVsZW1lbnRcbiAgICAgICAgZGl2VG9vbHMuYXBwZW5kQ2hpbGQoZGl2RmxleDIpO1xuICAgICAgICBkaXZUb29scy5hcHBlbmRDaGlsZChkaXZGbGV4Myk7XG5cbiAgICAgICAgLy9DcmVhdGUgYnV0dG9uIGRlbGV0ZVxuICAgICAgICBjb25zdCBidXR0b25SZW5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uUmVuYW1lLmNsYXNzTGlzdC5hZGQoJ2J0bi1yZW5hbWUnKVxuICAgICAgICBidXR0b25SZW5hbWUuc2V0QXR0cmlidXRlKCdkYXRhLW1vZGFsLXRhcmdldCcsICcjbW9kYWxSZW5hbWUnKTtcblxuICAgICAgICAvLyBBcHBlbmQgdGhlIFwicmVuYW1lXCIgYnV0dG9uIHRvIHRoZSBzZWNvbmQgPGRpdj4gZWxlbWVudFxuICAgICAgICBkaXZGbGV4Mi5hcHBlbmRDaGlsZChidXR0b25SZW5hbWUpO1xuXG4gICAgICAgIC8vQ3JlYXRlIGJ1dHRvbiBkZWxldGVcbiAgICAgICAgY29uc3QgYnV0dG9uRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbkRlbGV0ZS5jbGFzc0xpc3QuYWRkKCdidG4tZGVsZXRlJylcbiAgICAgICAgYnV0dG9uRGVsZXRlLnNldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbC10YXJnZXQnLCAnI21vZGFsRGVsZXRlJyk7XG5cbiAgICAgICAgLy8gQXBwZW5kIHRoZSBcImRlbGV0ZVwiIGJ1dHRvbiB0byB0aGUgc2Vjb25kIDxkaXY+IGVsZW1lbnRcbiAgICAgICAgZGl2RmxleDMuYXBwZW5kQ2hpbGQoYnV0dG9uRGVsZXRlKTtcblxuICAgICAgICAvLyBBcHBlbmQgdGhlIHNlY29uZCA8ZGl2PiBlbGVtZW50IHRvIHRoZSA8bGk+IGVsZW1lbnRcbiAgICAgICAgbGlFbGVtZW50LmFwcGVuZENoaWxkKGRpdlRvb2xzKTtcblxuICAgICAgICB0aGlzLnByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpRWxlbWVudClcbiAgICB9XG5cbiAgICBjcmVhdGVNYWluUHJvamVjdFRvb2xzSHRtbCgpIHtcbiAgICAgICAgY29uc3QgbWFpbkhlYWRpbmdSaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluSGVhZGluZ1JpZ2h0JylcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBmaXJzdCBidXR0b24gZWxlbWVudFxuXG4gICAgICAgIG1haW5IZWFkaW5nUmlnaHQuaW5uZXJIVE1MID0gJydcblxuICAgICAgICBjb25zdCBidG5SZW5hbWVNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ0blJlbmFtZU1haW4uY2xhc3NMaXN0LmFkZCgnYnRuLXJlbmFtZS1tYWluJyk7XG4gICAgICAgIGJ0blJlbmFtZU1haW4uaWQgPSAnYnRuUmVuYW1lTWFpbic7XG4gICAgICAgIGJ0blJlbmFtZU1haW4uc2V0QXR0cmlidXRlKCdkYXRhLW1vZGFsLXRhcmdldCcsICcjbW9kYWxSZW5hbWUnKTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIHNlY29uZCBidXR0b24gZWxlbWVudFxuICAgICAgICBjb25zdCBidG5EZWxldGVNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ0bkRlbGV0ZU1haW4uY2xhc3NMaXN0LmFkZCgnYnRuLWRlbGV0ZS1tYWluJyk7XG4gICAgICAgIGJ0bkRlbGV0ZU1haW4uaWQgPSAnYnRuRGVsZXRlTWFpbic7XG4gICAgICAgIGJ0bkRlbGV0ZU1haW4uc2V0QXR0cmlidXRlKCdkYXRhLW1vZGFsLXRhcmdldCcsICcjbW9kYWxEZWxldGUnKTtcblxuICAgICAgICBtYWluSGVhZGluZ1JpZ2h0LmFwcGVuZENoaWxkKGJ0blJlbmFtZU1haW4pO1xuICAgICAgICBtYWluSGVhZGluZ1JpZ2h0LmFwcGVuZENoaWxkKGJ0bkRlbGV0ZU1haW4pO1xuICAgIH1cblxuICAgIGNyZWF0ZVByb2plY3RIdG1sRm9yVGFicyh0YXNrc0xpc3RWaWV3LCBwcm9qZWN0KSB7XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgbWFpbiBjb250YWluZXIgZGl2XG4gICAgICAgIGNvbnN0IHByb2plY3RUYXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0VGFza3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10YXNrcy1jb250YWluZXItYWxsLXRhc2tzJyk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBwcm9qZWN0IGhlYWRlciBkaXZcbiAgICAgICAgY29uc3QgcHJvamVjdEhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0SGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYWxsLXRhc2tzLWhlYWRlcicsICdmbGV4JywgJ2JvcmRlci1ib3R0b20nKTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIHByb2plY3QgbmFtZSBkaXZcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdE5hbWVEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lLWFsbC10YXNrcycpO1xuICAgICAgICBwcm9qZWN0TmFtZURpdi50ZXh0Q29udGVudCA9IGBQcm9qZWN0ICgke3Byb2plY3QubmFtZX0pYDtcblxuICAgICAgICBwcm9qZWN0SGVhZGVyRGl2LmFwcGVuZENoaWxkKHByb2plY3ROYW1lRGl2KTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIHRhc2tzIGNvbnRhaW5lciBkaXZcbiAgICAgICAgY29uc3QgdGFza3NDb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza3NDb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZCgndGFza3MtY29udGFpbmVyLWFsbC10YXNrcycpO1xuXG4gICAgICAgIC8vIEFwcGVuZCBwcm9qZWN0IGhlYWRlciBhbmQgdGFza3MgY29udGFpbmVyIHRvIHRoZSBtYWluIGNvbnRhaW5lciBkaXZcbiAgICAgICAgcHJvamVjdFRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXJEaXYpO1xuICAgICAgICBwcm9qZWN0VGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza3NDb250YWluZXJEaXYpO1xuXG4gICAgICAgIHRhc2tzTGlzdFZpZXcuYXBwZW5kQ2hpbGQocHJvamVjdFRhc2tzQ29udGFpbmVyKVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlY3Rpb25IYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5mbG9hdGluZ0FjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbG9hdGluZ0FjdGlvbkJ1dHRvbicpXG4gICAgICAgIHRoaXMudGFza3NMaXN0VmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrc0xpc3RWaWV3JylcbiAgICB9XG5cbiAgICBjcmVhdGVBZGRTZWN0aW9uQnV0dG9uSHRtbCgpIHtcbiAgICAgICAgdGhpcy5mbG9hdGluZ0FjdGlvbkJ1dHRvbi5pbm5lckhUTUwgPSAnJ1xuICAgICAgICBjb25zdCBhZGRTZWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZFNlY3Rpb25CdXR0b24uaWQgPSAnYWRkU2VjdGlvbkJ1dHRvbic7XG4gICAgICAgIGFkZFNlY3Rpb25CdXR0b24uY2xhc3NOYW1lID0gJ2FkZC1zZWN0aW9uLWJ1dHRvbic7XG4gICAgICAgIGFkZFNlY3Rpb25CdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLW1vZGFsLXRhcmdldCcsICcjbW9kYWxBZGRTZWN0aW9uJyk7XG4gICAgICAgIGFkZFNlY3Rpb25CdXR0b24uaW5uZXJIVE1MID0gJyZwbHVzOyc7XG5cbiAgICAgICAgdGhpcy5mbG9hdGluZ0FjdGlvbkJ1dHRvbi5hcHBlbmRDaGlsZChhZGRTZWN0aW9uQnV0dG9uKVxuICAgIH1cblxuICAgIGNyZWF0ZVNlY3Rpb25IdG1sKHNlY3Rpb24pIHtcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBtYWluIHNlY3Rpb24gY29udGFpbmVyXG4gICAgICAgIGNvbnN0IHNlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2VjdGlvbkNvbnRhaW5lci5jbGFzc05hbWUgPSAnc2VjdGlvbic7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBzZWN0aW9uIGhlYWRlclxuICAgICAgICBjb25zdCBzZWN0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNlY3Rpb25IZWFkZXIuY2xhc3NOYW1lID0gJ3NlY3Rpb24taGVhZGVyJztcbiAgICAgICAgc2VjdGlvbkhlYWRlci5jbGFzc0xpc3QuYWRkKCdib3JkZXItYm90dG9tJyk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBzZWN0aW9uIHRpdGxlXG4gICAgICAgIGNvbnN0IHNlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzZWN0aW9uVGl0bGUuY2xhc3NOYW1lID0gJ3NlY3Rpb24tdGl0bGUnO1xuICAgICAgICBzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBzZWN0aW9uLnNlY3Rpb25UaXRsZTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIHNlY3Rpb24gYnV0dG9ucyBjb250YWluZXJcbiAgICAgICAgY29uc3Qgc2VjdGlvbkJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2VjdGlvbkJ1dHRvbnMuY2xhc3NOYW1lID0gJ3NlY3Rpb24tYnV0dG9ucyc7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSByZW1vdmUgc2VjdGlvbiBidXR0b25cbiAgICAgICAgY29uc3QgcmVtb3ZlU2VjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICByZW1vdmVTZWN0aW9uQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgcmVtb3ZlU2VjdGlvbkJ1dHRvbi5jbGFzc05hbWUgPSAncmVtb3ZlLXNlY3Rpb24tYnRuJztcbiAgICAgICAgcmVtb3ZlU2VjdGlvbkJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwtdGFyZ2V0JywgJyNtb2RhbERlbGV0ZVNlY3Rpb24nKTtcblxuICAgICAgICAvLyBBcHBlbmQgdGhlIHJlbW92ZSBzZWN0aW9uIGJ1dHRvbiB0byB0aGUgc2VjdGlvbiBidXR0b25zIGNvbnRhaW5lclxuICAgICAgICBzZWN0aW9uQnV0dG9ucy5hcHBlbmRDaGlsZChyZW1vdmVTZWN0aW9uQnV0dG9uKTtcblxuICAgICAgICAvLyBBcHBlbmQgdGhlIHNlY3Rpb24gdGl0bGUgYW5kIGJ1dHRvbnMgdG8gdGhlIHNlY3Rpb24gaGVhZGVyXG4gICAgICAgIHNlY3Rpb25IZWFkZXIuYXBwZW5kQ2hpbGQoc2VjdGlvblRpdGxlKTtcbiAgICAgICAgc2VjdGlvbkhlYWRlci5hcHBlbmRDaGlsZChzZWN0aW9uQnV0dG9ucyk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBzZWN0aW9uIHRhc2tzIGNvbnRhaW5lclxuICAgICAgICBjb25zdCBzZWN0aW9uVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2VjdGlvblRhc2tzLmNsYXNzTmFtZSA9ICdzZWN0aW9uLXRhc2tzJztcblxuICAgICAgICBjb25zdCBmb3JtVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtVGFza0NvbnRhaW5lci5jbGFzc05hbWUgPSAnZm9ybS10YXNrLWNvbnRhaW5lcic7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBhZGQgdGFzayBjb250YWluZXJcbiAgICAgICAgY29uc3QgYWRkVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhZGRUYXNrQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdhZGQtdGFzay1jb250YWluZXInO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgdGFzayBidXR0b24gY29udGFpbmVyXG4gICAgICAgIGNvbnN0IHRhc2tCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0J1dHRvbkNvbnRhaW5lci5jbGFzc05hbWUgPSAndGFzay1idG4nO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgYWRkIHRhc2sgYnV0dG9uXG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkVGFza0J1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIGFkZFRhc2tCdXR0b24uY2xhc3NOYW1lID0gJ2FkZC10YXNrLWJ0bic7XG5cbiAgICAgICAgLy8gQXBwZW5kIHRoZSBhZGQgdGFzayBidXR0b24gdG8gdGhlIHRhc2sgYnV0dG9uIGNvbnRhaW5lclxuICAgICAgICB0YXNrQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgdGFzayBidXR0b24gdGl0bGVcbiAgICAgICAgY29uc3QgdGFza0J1dHRvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tCdXR0b25UaXRsZS5jbGFzc05hbWUgPSAndGFzay1idXR0b24tdGl0bGUnO1xuICAgICAgICB0YXNrQnV0dG9uVGl0bGUudGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuXG4gICAgICAgIC8vIEFwcGVuZCB0aGUgdGFzayBidXR0b24gYW5kIHRpdGxlIHRvIHRoZSBhZGQgdGFzayBjb250YWluZXJcbiAgICAgICAgYWRkVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQnV0dG9uQ29udGFpbmVyKTtcbiAgICAgICAgYWRkVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQnV0dG9uVGl0bGUpO1xuXG4gICAgICAgIHNlY3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbkhlYWRlcik7XG4gICAgICAgIHNlY3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvblRhc2tzKTtcbiAgICAgICAgc2VjdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtVGFza0NvbnRhaW5lcik7XG4gICAgICAgIHNlY3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0NvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy50YXNrc0xpc3RWaWV3LmFwcGVuZENoaWxkKHNlY3Rpb25Db250YWluZXIpXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGFza3NIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIGNyZWF0ZUFkZFRhc2tGb3JtSHRtbChjdXJyZW50U2VjdGlvblRhc2tzQ29udGFpbmVyKSB7XG4gICAgICAgIC8vIENyZWF0ZSBtYWluIGNvbnRhaW5lciBkaXZcbiAgICAgICAgY29uc3QgYWRkVGFza0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWRkVGFza0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stZm9ybS1jb250YWluZXInKTtcblxuICAgICAgICAvLyBDcmVhdGUgdGFzayBkYXRhIGRpdlxuICAgICAgICBjb25zdCB0YXNrRGF0YURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRGF0YURpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRhdGEnKTtcblxuICAgICAgICAvLyBDcmVhdGUgdGFzayBkZXNjcmlwdGlvbiBpbnB1dFxuICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LmlkID0gJ3Rhc2tEZXNjcmlwdGlvbklucHV0JztcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjcmlwdGlvbi1pbnB1dCcpO1xuICAgICAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9ICdUYXNrIGRlc2NyaXB0aW9uLi4uJztcblxuICAgICAgICAvLyBDcmVhdGUgZGF0ZSBpbnB1dFxuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICAgICAgZGF0ZUlucHV0LmlkID0gJ2RhdGVJbnB1dCc7XG5cbiAgICAgICAgLy8gQXBwZW5kIHRhc2sgZGVzY3JpcHRpb24gaW5wdXQgYW5kIGRhdGUgaW5wdXQgdG8gdGFzayBkYXRhIGRpdlxuICAgICAgICB0YXNrRGF0YURpdi5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25JbnB1dCk7XG4gICAgICAgIHRhc2tEYXRhRGl2LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGFkZCB0YXNrIGJ1dHRvblxuICAgICAgICBjb25zdCBhZGRUYXNrRm9ybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRUYXNrRm9ybUJ1dHRvbi5pZCA9ICdhZGRUYXNrRm9ybUJ1dHRvbic7XG4gICAgICAgIGFkZFRhc2tGb3JtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWZvcm0tYnRuJyk7XG4gICAgICAgIGFkZFRhc2tGb3JtQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcblxuICAgICAgICAvLyBDcmVhdGUgY2FuY2VsIGJ1dHRvblxuICAgICAgICBjb25zdCBjYW5jZWxUYXNrRm9ybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxUYXNrRm9ybUJ1dHRvbi5pZCA9ICdjYW5jZWxUYXNrRm9ybUJ1dHRvbic7XG4gICAgICAgIGNhbmNlbFRhc2tGb3JtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbC10YXNrLWJ0bicpO1xuICAgICAgICBjYW5jZWxUYXNrRm9ybUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhZGQgdGFzayBmb3JtIGJ1dHRvbnMgZGl2XG4gICAgICAgIGNvbnN0IGFkZFRhc2tGb3JtQnV0dG9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhZGRUYXNrRm9ybUJ1dHRvbnNEaXYuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stZm9ybS1idXR0b25zJyk7XG5cbiAgICAgICAgLy8gQXBwZW5kIGJ1dHRvbnMgdG8gYWRkIHRhc2sgZm9ybSBidXR0b25zIGRpdlxuICAgICAgICBhZGRUYXNrRm9ybUJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0Zvcm1CdXR0b24pO1xuICAgICAgICBhZGRUYXNrRm9ybUJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoY2FuY2VsVGFza0Zvcm1CdXR0b24pO1xuXG4gICAgICAgIC8vIEFwcGVuZCB0YXNrIGRhdGEgZGl2IGFuZCBhZGQgdGFzayBmb3JtIGJ1dHRvbnMgZGl2IHRvIG1haW4gY29udGFpbmVyIGRpdlxuICAgICAgICBhZGRUYXNrRm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGF0YURpdik7XG4gICAgICAgIGFkZFRhc2tGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tGb3JtQnV0dG9uc0Rpdik7XG5cbiAgICAgICAgY3VycmVudFNlY3Rpb25UYXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrRm9ybUNvbnRhaW5lcilcbiAgICB9XG5cbiAgICBjcmVhdGVUYXNrSHRtbChjdXJyZW50U2VjdGlvblRhc2tzSHRtbCwgdGFzaykge1xuICAgICAgICAvLyBDcmVhdGUgdGhlIG1haW4gY29udGFpbmVyIGRpdlxuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tDb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZCgnbWFpbi10YXNrLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgdGFzayBjb250YWluZXIgZGl2XG4gICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBib3R0b20tdGFzayBkaXZcbiAgICAgICAgY29uc3QgYm90dG9tVGFza1NpZGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm90dG9tVGFza1NpZGVEaXYuY2xhc3NMaXN0LmFkZCgnYm90dG9tLXRhc2stc2lkZScpO1xuICAgICAgICBib3R0b21UYXNrU2lkZURpdi50ZXh0Q29udGVudCA9IHRhc2suZGF0ZVxuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgbGVmdC10YXNrLXNpZGUgZGl2XG4gICAgICAgIGNvbnN0IGxlZnRUYXNrU2lkZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZWZ0VGFza1NpZGVEaXYuY2xhc3NMaXN0LmFkZCgnbGVmdC10YXNrLXNpZGUnKTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGNoZWNrYm94IGlucHV0XG4gICAgICAgIGNvbnN0IGNoZWNrYm94SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVja2JveElucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICBjaGVja2JveElucHV0LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSB0YXNrIHRpdGxlIGRpdlxuICAgICAgICBjb25zdCB0YXNrVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcbiAgICAgICAgdGFza1RpdGxlRGl2LnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvblxuXG4gICAgICAgIC8vIEFwcGVuZCBjaGVja2JveCBhbmQgdGFzayB0aXRsZSB0byB0aGUgbGVmdC10YXNrLXNpZGUgZGl2XG4gICAgICAgIGxlZnRUYXNrU2lkZURpdi5hcHBlbmRDaGlsZChjaGVja2JveElucHV0KTtcbiAgICAgICAgbGVmdFRhc2tTaWRlRGl2LmFwcGVuZENoaWxkKHRhc2tUaXRsZURpdik7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSByaWdodC10YXNrLXNpZGUgZGl2XG4gICAgICAgIGNvbnN0IHJpZ2h0VGFza1NpZGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmlnaHRUYXNrU2lkZURpdi5jbGFzc0xpc3QuYWRkKCdyaWdodC10YXNrLXNpZGUnKTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGRhdGUtdGFzay1jb250YWluZXIgZGl2XG4gICAgICAgIGNvbnN0IGRhdGVUYXNrQ29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRhdGVUYXNrQ29udGFpbmVyRGl2LmNsYXNzTGlzdC5hZGQoJ2RhdGUtdGFzay1jb250YWluZXInKTtcbiAgICAgICAgZGF0ZVRhc2tDb250YWluZXJEaXYudGV4dENvbnRlbnQgPSB0YXNrLmRhdGVcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGltcG9ydGFudCBidXR0b25cbiAgICAgICAgY29uc3QgaW1wb3J0YW50QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGltcG9ydGFudEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIGltcG9ydGFudEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdpbXBvcnRhbnQtYnRuJyk7XG5cbiAgICAgICAgLy9DcmVhdGUgYWN0aXZlIHRhc2sgaWYgaGFzIHRydWUgZm9yIGltcG9ydGFudCBzdGF0ZVxuICAgICAgICBpZiAodGFzay5pbXBvcnRhbnQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGltcG9ydGFudEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdpbXBvcnRhbnQtYnRuLWFjdGl2ZScpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgfVxuICAgICAgICAvLyBBcHBlbmQgZGF0ZS10YXNrLWNvbnRhaW5lciBhbmQgaW1wb3J0YW50IGJ1dHRvbiB0byB0aGUgcmlnaHQtdGFzay1zaWRlIGRpdlxuICAgICAgICByaWdodFRhc2tTaWRlRGl2LmFwcGVuZENoaWxkKGRhdGVUYXNrQ29udGFpbmVyRGl2KTtcbiAgICAgICAgcmlnaHRUYXNrU2lkZURpdi5hcHBlbmRDaGlsZChpbXBvcnRhbnRCdXR0b24pO1xuXG4gICAgICAgIC8vIEFwcGVuZCBsZWZ0LXRhc2stc2lkZSBhbmQgcmlnaHQtdGFzay1zaWRlIHRvIHRoZSBtYWluIGNvbnRhaW5lciBkaXZcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChsZWZ0VGFza1NpZGVEaXYpO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHJpZ2h0VGFza1NpZGVEaXYpO1xuXG4gICAgICAgIHRhc2tDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodGFza0RpdilcbiAgICAgICAgdGFza0NvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChib3R0b21UYXNrU2lkZURpdilcblxuICAgICAgICBjdXJyZW50U2VjdGlvblRhc2tzSHRtbC5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyRGl2KVxuICAgIH1cblxuICAgIGRpc3BsYXlOb1Rhc2tzTWVzc2FnZShjdXJyZW50UHJvamVjdFdpdGhOb1Rhc2tzSHRtbCkge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbm8tdGFza3MtbWVzc2FnZScpXG4gICAgICAgIGRpdi50ZXh0Q29udGVudCA9IGBObyB0YXNrcyBoZXJlYFxuXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0V2l0aE5vVGFza3NIdG1sLmFwcGVuZENoaWxkKGRpdilcbiAgICB9XG5cbiAgICBjcmVhdGVEYXRlRGlzcGxheShkYXRlRGlzcGxheWVyLCBmdWxsRGF0ZVN0cmluZykge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGhpcy13ZWVrLWRhdGUnKVxuICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBmdWxsRGF0ZVN0cmluZ1xuICAgICAgICBkYXRlRGlzcGxheWVyLmFwcGVuZENoaWxkKGRpdilcbiAgICB9XG5cbiAgICBjcmVhdGVSaWdodERhdGVEaXNwbGF5KG1haW5IZWFkaW5nUmlnaHQsIGZ1bGxEYXRlU3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdkYXRlLWhlYWRpbmctcmlnaHQnKVxuICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBmdWxsRGF0ZVN0cmluZ1xuICAgICAgICBtYWluSGVhZGluZ1JpZ2h0LmFwcGVuZENoaWxkKGRpdilcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZVNpZGViYXJJZlNtYWxsU2NyZWVuKCkge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhck1lbnUnKVxuICAgIGNvbnN0IGNsb3NlU2lkZWJhckJ1dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItaWNvbicpXG4gICAgc2lkZWJhci5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS1zaWRlYmFyJykgPyBjbG9zZVNpZGViYXJCdXRvbi5jbGljaygpIDoge307XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFbXB0eVByb2plY3RzRnJvbUhUTUwoKXtcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lckFsbFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2tzLWNvbnRhaW5lci1hbGwtdGFza3MnKTtcbiAgICB0YXNrc0NvbnRhaW5lckFsbFRhc2tzLmZvckVhY2goY29udGFpbmVyID0+IHtcbiAgICAgICAgaWYoY29udGFpbmVyLmlubmVySFRNTCA9PT0gJycpe1xuICAgICAgICAgICAgbGV0IHBhcmVudENvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgICAgIHdoaWxlIChwYXJlbnRDb250YWluZXIgJiYgIXBhcmVudENvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QtdGFza3MtY29udGFpbmVyLWFsbC10YXNrcycpKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Q29udGFpbmVyID0gcGFyZW50Q29udGFpbmVyLnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJlbnRDb250YWluZXIucmVtb3ZlKClcbiAgICAgICAgfVxuICAgIH0pXG59IiwiaW1wb3J0IHsgYWxsUHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3RzJztcbmltcG9ydCBpbXBvcnRhbnRJY29uIGZyb20gJy4vaW1nL2ltcG9ydGFudC5zdmcnXG5pbXBvcnQgeyBUYXNrc0hhbmRsZXIsIFByb2plY3RzSGFuZGxlciB9IGZyb20gJy4vZG9tJ1xuaW1wb3J0IG5vVGFza3NJY29uSW1wb3J0YW50IGZyb20gJy4vaW1nL2ltcG9ydGFudC1uby10YXNrcy5wbmcnXG5cbmNvbnN0IHRhc2tzSGFuZGxlciA9IG5ldyBUYXNrc0hhbmRsZXIoKVxuY29uc3QgcHJvamVjdHNIYW5kbGVyID0gbmV3IFByb2plY3RzSGFuZGxlcigpXG5cbmNvbnN0IHRhc2tzTGlzdFZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3NMaXN0VmlldycpXG5jb25zdCBoZWFkZXJTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlclNlY3Rpb24nKVxuY29uc3QgZmxvYXRpbmdBY3Rpb25CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxvYXRpbmdBY3Rpb25CdXR0b24nKVxuY29uc3QgZGF0ZURpc3BsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLWRpc3BsYXllcicpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRJbXBvcnRhbnRUYXNrcygpIHtcbiAgICBzZXRJbXBvcnRhbnRUYWIoKVxuICAgIGxldCB0YXNrc0xlbmd0aCA9IDBcbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBwcm9qZWN0SW5kZXgpID0+IHtcbiAgICAgICAgbGV0IHByb2plY3RIdG1sQ3JlYXRlZCA9IGZhbHNlOyAvLyBUcmFjayBpZiBwcm9qZWN0IEhUTUwgaGFzIGJlZW4gY3JlYXRlZFxuXG4gICAgICAgIHByb2plY3Quc2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+IHtcbiAgICAgICAgICAgIHNlY3Rpb24udGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5pbXBvcnRhbnQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwcm9qZWN0SHRtbENyZWF0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBwcm9qZWN0IEhUTUwgb25seSBvbmNlIGZvciBlYWNoIHByb2plY3QgaWYgaXQgaGFzIHRhc2tzXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0hhbmRsZXIuY3JlYXRlUHJvamVjdEh0bWxGb3JUYWJzKHRhc2tzTGlzdFZpZXcsIHByb2plY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdEh0bWxDcmVhdGVkID0gdHJ1ZTsgLy8gU2V0IHRoZSBmbGFnIHRvIHRydWUgdG8gcHJldmVudCBmdXJ0aGVyIGNyZWF0aW9uXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza3NDb250YWluZXJBbGxUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrcy1jb250YWluZXItYWxsLXRhc2tzJyk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tzSGFuZGxlci5jcmVhdGVUYXNrSHRtbCh0YXNrc0NvbnRhaW5lckFsbFRhc2tzW3Byb2plY3RJbmRleF0sIHRhc2spO1xuICAgICAgICAgICAgICAgICAgICB0YXNrc0xlbmd0aCsrXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBkaXNwbGF5SW1wb3J0YW50VGFza3NMZW5ndGgodGFza3NMZW5ndGgpXG4gICAgZGlzcGxheU5vVGFza3NJbWFnZSgpXG59XG5cbmZ1bmN0aW9uIHNldEltcG9ydGFudFRhYigpIHtcbiAgICBjb25zdCBjdXJyZW50VGFiTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50VGFiTmFtZScpXG4gICAgY29uc3QgY3VycmVudFRhYkljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudFRhYkljb24nKVxuXG4gICAgY29uc3Qgc3ZnSW1wb3J0YW50ID0gbmV3IEltYWdlKClcbiAgICBzdmdJbXBvcnRhbnQuc3JjID0gaW1wb3J0YW50SWNvbjtcbiAgICBjdXJyZW50VGFiSWNvbi5pbm5lckhUTUwgPSAnJ1xuICAgIGN1cnJlbnRUYWJJY29uLmFwcGVuZENoaWxkKHN2Z0ltcG9ydGFudClcblxuICAgIGN1cnJlbnRUYWJOYW1lLnRleHRDb250ZW50ID0gJ0ltcG9ydGFudCdcblxuICAgIHRhc2tzTGlzdFZpZXcuaW5uZXJIVE1MID0gJydcbiAgICB0YXNrc0xpc3RWaWV3LmNsYXNzTGlzdC5hZGQoJ2hlaWdodC1hdXRvJylcbiAgICBkYXRlRGlzcGxheWVyLmlubmVySFRNTCA9ICcnXG4gICAgZmxvYXRpbmdBY3Rpb25CdXR0b24uaW5uZXJIVE1MID0gJydcbiAgICBoZWFkZXJTZWN0aW9uLmNsYXNzTmFtZSA9ICcnXG4gICAgaGVhZGVyU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdoZWFkZXItaW1wb3J0YW50JylcblxufVxuXG5mdW5jdGlvbiBkaXNwbGF5Tm9UYXNrc0ltYWdlKCkge1xuICAgIGlmICh0YXNrc0xpc3RWaWV3LmlubmVySFRNTCA9PT0gJycpIHtcbiAgICAgICAgdGFza3NMaXN0Vmlldy5jbGFzc0xpc3QucmVtb3ZlKCdoZWlnaHQtYXV0bycpXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduby10YXNrcy1pbWctY29udGFpbmVyJylcblxuICAgICAgICBjb25zdCBub1Rhc2tzSW1hZ2VJbXBvcnRhbnQgPSBuZXcgSW1hZ2UoKVxuICAgICAgICBub1Rhc2tzSW1hZ2VJbXBvcnRhbnQuc3JjID0gbm9UYXNrc0ljb25JbXBvcnRhbnRcbiAgICAgICAgbm9UYXNrc0ltYWdlSW1wb3J0YW50LmNsYXNzTGlzdC5hZGQoJ25vLXRhc2tzLWltZycpXG5cbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBgWW91IGRvbid0IGhhdmUgYW55IGltcG9ydGFudCB0YXNrcyFgXG4gICAgICAgIHRleHQuY2xhc3NMaXN0LmFkZCgnbm8tdGFza3MtaW1nLXRleHQnKVxuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChub1Rhc2tzSW1hZ2VJbXBvcnRhbnQpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KVxuICAgICAgICB0YXNrc0xpc3RWaWV3LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlJbXBvcnRhbnRUYXNrc0xlbmd0aCh0YXNrc0xlbmd0aCkge1xuICAgIGxldCB0YXNrc1N0cmluZyA9ICd0YXNrcydcbiAgICBjb25zdCBsZW5ndGhBcnIgPSB0YXNrc0xlbmd0aC50b1N0cmluZygpLnNwbGl0KCcnKVxuICAgIGlmIChsZW5ndGhBcnJbbGVuZ3RoQXJyLmxlbmd0aCAtIDFdID09PSAnMScpIHtcbiAgICAgICAgdGFza3NTdHJpbmcgPSAndGFzaydcbiAgICB9XG4gICAgY29uc3QgbGVuZ3RoU3RyaW5nID0gYFRhc2tzQ291bnQ6ICR7dGFza3NMZW5ndGh9ICR7dGFza3NTdHJpbmd9LmBcbiAgICB0YXNrc0hhbmRsZXIuY3JlYXRlUmlnaHREYXRlRGlzcGxheShtYWluSGVhZGluZ1JpZ2h0LCBsZW5ndGhTdHJpbmcpXG5cbiAgICBkYXRlRGlzcGxheWVyLmlubmVySFRNTCA9ICcnXG4gICAgdGFza3NIYW5kbGVyLmNyZWF0ZURhdGVEaXNwbGF5KGRhdGVEaXNwbGF5ZXIsIGxlbmd0aFN0cmluZylcbn0iLCJpbXBvcnQgeyBTZWN0aW9uSGFuZGxlciB9IGZyb20gJy4vZG9tJ1xuaW1wb3J0IHByb2plY3RJY29uIGZyb20gJy4vaW1nL3Byb2plY3Q0OHg0OC5zdmcnXG5pbXBvcnQgbm9TZWN0aW9uc0ljb24gZnJvbSAnLi9pbWcvbm8tc2VjdGlvbnMucG5nJ1xuXG5jb25zdCBzZWN0aW9uSGFuZGxlciA9IG5ldyBTZWN0aW9uSGFuZGxlcigpXG5jb25zdCBoZWFkZXJTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlclNlY3Rpb24nKVxuY29uc3QgdGFza3NMaXN0VmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrc0xpc3RWaWV3JylcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRBY3RpdmVQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KXtcbiAgICBzZXRBY3RpdmVQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KVxuICAgIGRpc3BsYXlOb1NlY3Rpb25zSW1hZ2UoKVxufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgY29uc3QgY3VycmVudFRhYk5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudFRhYk5hbWUnKVxuICAgIGNvbnN0IGN1cnJlbnRUYWJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRUYWJJY29uJylcbiAgICBjb25zdCBkYXRlRGlzcGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtZGlzcGxheWVyJylcblxuICAgIGNvbnN0IHN2Z1Byb2plY3QgPSBuZXcgSW1hZ2UoKVxuICAgIHN2Z1Byb2plY3Quc3JjID0gcHJvamVjdEljb247XG4gICAgY3VycmVudFRhYkljb24uaW5uZXJIVE1MID0gJydcbiAgICBjdXJyZW50VGFiSWNvbi5hcHBlbmRDaGlsZChzdmdQcm9qZWN0KVxuXG4gICAgY3VycmVudFRhYk5hbWUudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50UHJvamVjdC5uYW1lfWBcblxuICAgIGRhdGVEaXNwbGF5ZXIuaW5uZXJIVE1MID0gJydcbiAgICB0YXNrc0xpc3RWaWV3LmNsYXNzTGlzdC5hZGQoJ2hlaWdodC1hdXRvJylcbiAgICBzZWN0aW9uSGFuZGxlci5jcmVhdGVBZGRTZWN0aW9uQnV0dG9uSHRtbCgpXG4gICAgaGVhZGVyU2VjdGlvbi5jbGFzc05hbWUgPSAnJ1xuICAgIGhlYWRlclNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaGVhZGVyLXByb2plY3QnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU5vU2VjdGlvbnNJbWFnZSgpIHtcbiAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmICh0YXNrc0xpc3RWaWV3LmlubmVySFRNTCA9PT0gJycpIHtcbiAgICAgICAgdGFza3NMaXN0Vmlldy5jbGFzc0xpc3QucmVtb3ZlKCdoZWlnaHQtYXV0bycpXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduby10YXNrcy1pbWctY29udGFpbmVyJylcblxuICAgICAgICBjb25zdCBub1NlY3Rpb25zSW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgICAgICBub1NlY3Rpb25zSW1hZ2Uuc3JjID0gbm9TZWN0aW9uc0ljb25cbiAgICAgICAgbm9TZWN0aW9uc0ltYWdlLmNsYXNzTGlzdC5hZGQoJ25vLXNlY3Rpb25zLWltZycpXG5cbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBgU3RhcnQgb3JnYW5pemluZyB5b3VyIHRhc2tzISBDcmVhdGUgc2VjdGlvbnMgd2l0aGluIHlvdXIgcHJvamVjdHMuYFxuICAgICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ25vLXRhc2tzLWltZy10ZXh0JylcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobm9TZWN0aW9uc0ltYWdlKVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dClcbiAgICAgICAgdGFza3NMaXN0Vmlldy5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgfVxuICAgfSwgNSk7XG59XG4iLCJpbXBvcnQgeyBNb2RhbEhhbmRsZXIsIFByb2plY3RzSGFuZGxlciB9IGZyb20gJy4vZG9tJztcbmltcG9ydCB7IEFjdGl2ZUhvbWVUYWJIYW5kbGVyIH0gZnJvbSAnLi90YWJzJztcbmltcG9ydCB7IGxvYWRBY3RpdmVQcm9qZWN0LCBkaXNwbGF5Tm9TZWN0aW9uc0ltYWdlIH0gZnJvbSAnLi9wcm9qZWN0LWxvYWRlcic7XG5pbXBvcnQgeyBjbG9zZVNpZGViYXJJZlNtYWxsU2NyZWVuIH0gZnJvbSAnLi9kb20nXG5pbXBvcnQgeyBhZGRTZWN0aW9uU3VibWl0RXZlbnQsIGxvYWRDdXJyZW50UHJvamVjdFNlY3Rpb25zIH0gZnJvbSAnLi9zZWN0aW9ucyc7XG5pbXBvcnQgeyBsb2FkQWxsU2VjdGlvbnNUYXNrcyB9IGZyb20gJy4vdGFza3MnO1xuXG5jb25zdCBtb2RhbEhhbmRsZXIgPSBuZXcgTW9kYWxIYW5kbGVyKCk7XG5jb25zdCBwcm9qZWN0c0hhbmRsZXIgPSBuZXcgUHJvamVjdHNIYW5kbGVyKCk7XG5jb25zdCBhY3RpdmVIb21lVGFiSGFuZGxlciA9IG5ldyBBY3RpdmVIb21lVGFiSGFuZGxlcigpO1xuY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHNDb250YWluZXInKVxuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5zZWN0aW9ucyA9IFtdXG4gICAgfVxufVxuXG5leHBvcnQgbGV0IGFsbFByb2plY3RzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ1RvRG8nLFxuICAgICAgICBzZWN0aW9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlY3Rpb25UaXRsZTogJ1JvdXRpbmVzJyxcbiAgICAgICAgICAgICAgICB0YXNrczogW1xuXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VjdGlvblRpdGxlOiAnU2hvcHBpbmcnLFxuICAgICAgICAgICAgICAgIHRhc2tzOiBbXG5cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ015IFdvcmsnLFxuICAgICAgICBzZWN0aW9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlY3Rpb25UaXRsZTogJ1ByZXNlbnRhdGlvbnMnLFxuICAgICAgICAgICAgICAgIHRhc2tzOiBbXG5cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWN0aW9uVGl0bGU6ICdJbnRlcnZpZXdzJyxcbiAgICAgICAgICAgICAgICB0YXNrczogW1xuXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbl1cblxuZXhwb3J0IGxldCBjdXJyZW50UHJvamVjdCA9IG51bGw7XG5leHBvcnQgbGV0IGN1cnJlbnRQcm9qZWN0SW5kZXggPSBudWxsXG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkUHJvamVjdHMoKSB7XG4gICAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBwcm9qZWN0c0hhbmRsZXIuY3JlYXRlUHJvamVjdEh0bWwocHJvamVjdCk7XG4gICAgfSlcbiAgICBhY3RpdmVIb21lVGFiSGFuZGxlci5oYW5kbGVUYWJzQ2xpY2soKVxuICAgIGhhbmRsZVByb2plY3RUYWJzKGFsbFByb2plY3RzKVxuICAgIGFkZFByb2plY3RUb29sc0V2ZW50KClcbiAgICBtb2RhbEhhbmRsZXIuaGFuZGxlTW9kYWxzKClcbiAgICBtb2RhbEhhbmRsZXIuY2hhbmdlTW9kYWxQb3NpdGlvbklmS2V5Ym9hcmRPcGVuZWQoKVxuICAgIGlmIChjdXJyZW50UHJvamVjdEluZGV4ID09PSBudWxsKSB7XG5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXItcHJvamVjdCcpXG4gICAgICAgIHByb2plY3RUYWJzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItaXRlbS1hY3RpdmUnKVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RFdmVudCgpIHtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RCdXR0b24nKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lSW5wdXQnKTtcbiAgICBjb25zdCBjbG9zZU1vZGFsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlTW9kYWxCdXR0b24nKTtcbiAgICBjb25zdCBtb2RhbEFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsQWxlcnQnKVxuXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZUlucHV0LnZhbHVlLnRyaW0oKTtcblxuICAgICAgICAvLyBDaGVjayBpZiBhIHByb2plY3Qgd2l0aCB0aGUgc2FtZSBuYW1lIGFscmVhZHkgZXhpc3RzXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdCA9IGFsbFByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IG5ld1Byb2plY3ROYW1lKTtcblxuICAgICAgICBpZiAobmV3UHJvamVjdE5hbWUgPT09ICcnKSB7XG4gICAgICAgICAgICBtb2RhbEFsZXJ0LnRleHRDb250ZW50ID0gJyhZb3UgbXVzdCBlbnRlciBuZXcgcHJvamVjdCBuYW1lKSdcbiAgICAgICAgICAgIHByb2plY3ROYW1lSW5wdXQudmFsdWUgPSAnJ1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXhpc3RpbmdQcm9qZWN0KSB7XG4gICAgICAgICAgICBtb2RhbEFsZXJ0LnRleHRDb250ZW50ID0gJyhUaGUgcHJvamVjdCB3aXRoIHRoaXMgbmFtZSBhbHJlYWR5IGV4aXN0cy4pJ1xuICAgICAgICAgICAgcHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9ICcnXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWxsUHJvamVjdHMubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICBtb2RhbEFsZXJ0LnRleHRDb250ZW50ID0gJyhDYW50IGhhdmUgbW9yZSB0aGFuIGZpdmUgcHJvamVjdHMuIFVwZ3JhZGUgdG8gUFJPLiknXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QobmV3UHJvamVjdE5hbWUpO1xuICAgICAgICBhbGxQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICBsb2FkUHJvamVjdHMoKTtcbiAgICAgICAgY2xvc2VNb2RhbEJ1dHRvbi5jbGljaygpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdFRvb2xzU3VibWl0RXZlbnQoKSB7XG4gICAgY29uc3QgcmVuYW1lUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0UmVuYW1lQnV0dG9uJyk7XG4gICAgY29uc3QgY2xvc2VNb2RhbEJ1dHRvblJlbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZU1vZGFsQnV0dG9uUmVuYW1lJyk7XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0RGVsZXRlQnV0dG9uJyk7XG4gICAgY29uc3QgY2xvc2VNb2RhbEJ1dHRvbkRlbGV0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZU1vZGFsQnV0dG9uRGVsZXRlJyk7XG5cbiAgICByZW5hbWVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0VGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlYmFyLXByb2plY3QnKVxuICAgICAgICBjb25zdCBwcm9qZWN0UmVuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFJlbmFtZUlucHV0Jyk7XG4gICAgICAgIGNvbnN0IG1vZGFsQWxlcnRSZW5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxBbGVydFJlbmFtZScpXG4gICAgICAgIGxldCBleGlzdGluZ1Byb2plY3QgPSBhbGxQcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBwcm9qZWN0UmVuYW1lSW5wdXQudmFsdWUpXG5cbiAgICAgICAgaWYgKHByb2plY3RSZW5hbWVJbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIG1vZGFsQWxlcnRSZW5hbWUudGV4dENvbnRlbnQgPSAnKFlvdSBtdXN0IGVudGVyIG5ldyBwcm9qZWN0IG5hbWUpJ1xuICAgICAgICAgICAgcHJvamVjdFJlbmFtZUlucHV0LnZhbHVlID0gJydcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nUHJvamVjdCkge1xuICAgICAgICAgICAgbW9kYWxBbGVydFJlbmFtZS50ZXh0Q29udGVudCA9ICcoVGhlIHByb2plY3Qgd2l0aCB0aGlzIG5hbWUgYWxyZWFkeSBleGlzdHMpJ1xuICAgICAgICAgICAgcHJvamVjdFJlbmFtZUlucHV0LnZhbHVlID0gJydcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdC5uYW1lID0gcHJvamVjdFJlbmFtZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgbG9hZFByb2plY3RzKCk7XG4gICAgICAgICAgICBwcm9qZWN0VGFic1tjdXJyZW50UHJvamVjdEluZGV4XS5jbGljaygpXG4gICAgICAgICAgICBjbG9zZU1vZGFsQnV0dG9uUmVuYW1lLmNsaWNrKCk7XG4gICAgICAgICAgICBtb2RhbEhhbmRsZXIuaGFuZGxlTW9kYWxzKCk7XG4gICAgICAgICAgICBtb2RhbEhhbmRsZXIuY2hhbmdlTW9kYWxQb3NpdGlvbklmS2V5Ym9hcmRPcGVuZWQoKVxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFByb2plY3QgPSBudWxsO1xuICAgIH0pO1xuXG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFiQWxsVGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiQWxsVGFza3MnKVxuICAgICAgICBpZiAoY3VycmVudFByb2plY3QpIHtcbiAgICAgICAgICAgIGFsbFByb2plY3RzLnNwbGljZShjdXJyZW50UHJvamVjdEluZGV4LCAxKVxuICAgICAgICAgICAgY3VycmVudFByb2plY3RJbmRleCA9IG51bGxcbiAgICAgICAgICAgIGxvYWRQcm9qZWN0cygpO1xuICAgICAgICAgICAgY2xvc2VNb2RhbEJ1dHRvbkRlbGV0ZS5jbGljaygpO1xuICAgICAgICAgICAgdGFiQWxsVGFza3MuY2xpY2soKVxuICAgICAgICAgICAgbW9kYWxIYW5kbGVyLmhhbmRsZU1vZGFscygpO1xuICAgICAgICAgICAgbW9kYWxIYW5kbGVyLmNoYW5nZU1vZGFsUG9zaXRpb25JZktleWJvYXJkT3BlbmVkKClcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFByb2plY3QgPSBudWxsO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9vbHNFdmVudCgpIHtcbiAgICBjb25zdCByZW5hbWVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1yZW5hbWUnKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1kZWxldGUnKTtcblxuICAgIHJlbmFtZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uLCBpbmRleCkgPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IGFsbFByb2plY3RzW2luZGV4XTtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIGNvbnN0IG9sZE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2xkTmFtZScpO1xuICAgICAgICAgICAgb2xkTmFtZS50ZXh0Q29udGVudCA9IGAoJHtjdXJyZW50UHJvamVjdC5uYW1lfSlgXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZGVsZXRlQnV0dG9ucy5mb3JFYWNoKChidXR0b24sIGluZGV4KSA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gYWxsUHJvamVjdHNbaW5kZXhdO1xuICAgICAgICAgICAgY3VycmVudFByb2plY3RJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlUHJvamVjdE5hbWUnKVxuICAgICAgICAgICAgZGVsZXRlUHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBgKCR7Y3VycmVudFByb2plY3QubmFtZX0pYFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJvamVjdFRhYnMoYWxsUHJvamVjdHMpIHtcbiAgICBjb25zdCBwcm9qZWN0VGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlYmFyLXByb2plY3QnKVxuICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJylcbiAgICBwcm9qZWN0VGFicy5mb3JFYWNoKCh0YWIsIGluZGV4KSA9PiB7XG4gICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0SW5kZXggPSBpbmRleFxuICAgICAgICAgICAgdGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXItaXRlbS1hY3RpdmUnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWl0ZW0tYWN0aXZlJylcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gYWxsUHJvamVjdHNbaW5kZXhdXG4gICAgICAgICAgICBsb2FkQWN0aXZlUHJvamVjdChjdXJyZW50UHJvamVjdClcbiAgICAgICAgICAgIHByb2plY3RzSGFuZGxlci5jcmVhdGVNYWluUHJvamVjdFRvb2xzSHRtbCgpXG4gICAgICAgICAgICBhZGRQcm9qZWN0VG9vbHNNYWluRXZlbnQoKVxuICAgICAgICAgICAgYWRkU2VjdGlvblN1Ym1pdEV2ZW50KClcbiAgICAgICAgICAgIGFkZFNlY3Rpb25EZWxldGVFdmVudCgpXG4gICAgICAgICAgICBsb2FkQ3VycmVudFByb2plY3RTZWN0aW9ucyhjdXJyZW50UHJvamVjdClcbiAgICAgICAgICAgIGFkZERlbGV0ZVNlY3Rpb25CdXR0b25zRXZlbnQoKVxuICAgICAgICAgICAgbG9hZEFsbFNlY3Rpb25zVGFza3MoY3VycmVudFByb2plY3QpXG4gICAgICAgICAgICBtb2RhbEhhbmRsZXIuaGFuZGxlTW9kYWxzKClcbiAgICAgICAgICAgIGNsb3NlU2lkZWJhcklmU21hbGxTY3JlZW4oKVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RUb29sc01haW5FdmVudCgpIHtcbiAgICBjb25zdCBidG5SZW5hbWVNYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0blJlbmFtZU1haW4nKTtcbiAgICBjb25zdCBidG5EZWxldGVNYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bkRlbGV0ZU1haW4nKTtcbiAgICBjb25zdCBhZGRTZWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFNlY3Rpb25CdXR0b24nKTtcblxuICAgIGJ0blJlbmFtZU1haW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF07XG4gICAgICAgIGNvbnN0IG9sZE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2xkTmFtZScpO1xuICAgICAgICBvbGROYW1lLnRleHRDb250ZW50ID0gYCgke2N1cnJlbnRQcm9qZWN0Lm5hbWV9KWBcbiAgICB9KVxuXG4gICAgYnRuRGVsZXRlTWFpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY3VycmVudFByb2plY3QgPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XTtcbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlUHJvamVjdE5hbWUnKVxuICAgICAgICBkZWxldGVQcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGAoJHtjdXJyZW50UHJvamVjdC5uYW1lfSlgXG4gICAgfSlcblxuICAgIGFkZFNlY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF07XG4gICAgfSlcbn1cblxuZXhwb3J0IGxldCBjdXJyZW50U2VjdGlvbkluZGV4ID0gbnVsbFxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRGVsZXRlU2VjdGlvbkJ1dHRvbnNFdmVudCgpIHtcbiAgICBjb25zdCBkZWxldGVTZWN0aW9uQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUtc2VjdGlvbi1idG4nKVxuXG4gICAgZGVsZXRlU2VjdGlvbkJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uLCBpbmRleCkgPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdO1xuICAgICAgICAgICAgY3VycmVudFNlY3Rpb25JbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlU2VjdGlvbk5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlU2VjdGlvbk5hbWUnKVxuICAgICAgICAgICAgZGVsZXRlU2VjdGlvbk5hbWUudGV4dENvbnRlbnQgPSBgKCR7Y3VycmVudFByb2plY3Quc2VjdGlvbnNbaW5kZXhdLnNlY3Rpb25UaXRsZX0pYFxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTZWN0aW9uRGVsZXRlRXZlbnQoKSB7XG4gICAgY29uc3QgZGVsZXRlU2VjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGVTZWN0aW9uQnV0dG9uJylcbiAgICBjb25zdCBjbG9zZU1vZGFsQnV0dG9uRGVsZXRlU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZU1vZGFsQnV0dG9uRGVsZXRlU2VjdGlvbicpXG5cbiAgICBkZWxldGVTZWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudFNlY3Rpb25JbmRleCB8fCBjdXJyZW50U2VjdGlvbkluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdC5zZWN0aW9ucy5zcGxpY2UoY3VycmVudFNlY3Rpb25JbmRleCwgMSlcbiAgICAgICAgICAgIGxvYWRDdXJyZW50UHJvamVjdFNlY3Rpb25zKGN1cnJlbnRQcm9qZWN0KVxuICAgICAgICAgICAgbG9hZEFsbFNlY3Rpb25zVGFza3MoY3VycmVudFByb2plY3QpXG4gICAgICAgICAgICBjbG9zZU1vZGFsQnV0dG9uRGVsZXRlU2VjdGlvbi5jbGljaygpO1xuICAgICAgICAgICAgbW9kYWxIYW5kbGVyLmhhbmRsZU1vZGFscygpO1xuICAgICAgICAgICAgbW9kYWxIYW5kbGVyLmNoYW5nZU1vZGFsUG9zaXRpb25JZktleWJvYXJkT3BlbmVkKClcbiAgICAgICAgICAgIGFkZERlbGV0ZVNlY3Rpb25CdXR0b25zRXZlbnQoKVxuICAgICAgICAgICAgZGlzcGxheU5vU2VjdGlvbnNJbWFnZSgpXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50U2VjdGlvbkluZGV4ID0gbnVsbFxuICAgIH0pO1xufVxuIiwiaW1wb3J0IHsgU2VjdGlvbkhhbmRsZXIgfSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCB7IGN1cnJlbnRQcm9qZWN0LCBhZGREZWxldGVTZWN0aW9uQnV0dG9uc0V2ZW50IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IE1vZGFsSGFuZGxlciB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgYWRkVGFza0Zvcm1DcmVhdGlvbkV2ZW50LCBsb2FkQWxsU2VjdGlvbnNUYXNrcywgZ2V0Q3VycmVudFNlY3Rpb25JbmRleCwgYWRkSW1wb3J0YW50QnV0dG9uRXZlbnQgfSBmcm9tIFwiLi90YXNrc1wiO1xuXG5jb25zdCBtb2RhbEhhbmRsZXIgPSBuZXcgTW9kYWxIYW5kbGVyKCk7XG5jb25zdCBzZWN0aW9uSGFuZGxlciA9IG5ldyBTZWN0aW9uSGFuZGxlcigpO1xuY29uc3QgdGFza3NMaXN0VmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrc0xpc3RWaWV3JylcblxuXG5jbGFzcyBTZWN0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgICB0aGlzLnNlY3Rpb25UaXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkU2VjdGlvblN1Ym1pdEV2ZW50KCkge1xuICAgIGNvbnN0IGFkZFNlY3Rpb25CdXR0b25TdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkU2VjdGlvbkJ1dHRvblN1Ym1pdCcpO1xuICAgIGNvbnN0IGNsb3NlTW9kYWxCdXR0b25TZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlTW9kYWxCdXR0b25TZWN0aW9uJylcblxuICAgIGFkZFNlY3Rpb25CdXR0b25TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlY3Rpb25OYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbk5hbWVJbnB1dCcpO1xuICAgICAgICBjb25zdCBtb2RhbFNlY3Rpb25BbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbFNlY3Rpb25BbGVydCcpXG5cbiAgICAgICAgbGV0IGV4aXN0aW5nUHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0LnNlY3Rpb25zLmZpbmQoc2VjdGlvbiA9PiBzZWN0aW9uLnNlY3Rpb25UaXRsZSA9PT0gc2VjdGlvbk5hbWVJbnB1dC52YWx1ZSlcblxuICAgICAgICBpZiAoc2VjdGlvbk5hbWVJbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIG1vZGFsU2VjdGlvbkFsZXJ0LnRleHRDb250ZW50ID0gJyhZb3UgbXVzdCBlbnRlciBuZXcgc2VjdGlvbiB0aXRsZSknXG4gICAgICAgICAgICBzZWN0aW9uTmFtZUlucHV0LnZhbHVlID0gJydcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV4aXN0aW5nUHJvamVjdCkge1xuICAgICAgICAgICAgbW9kYWxTZWN0aW9uQWxlcnQudGV4dENvbnRlbnQgPSAnKFRoZSBzZWN0aW9uIHdpdGggdGhpcyBuYW1lIGFscmVhZHkgZXhpc3RzKSdcbiAgICAgICAgICAgIHNlY3Rpb25OYW1lSW5wdXQudmFsdWUgPSAnJ1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY3VycmVudFByb2plY3QpIHtcbiAgICAgICAgICAgIGxldCBuZXdTZWN0aW9uID0gbmV3IFNlY3Rpb24oc2VjdGlvbk5hbWVJbnB1dC52YWx1ZSlcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LnNlY3Rpb25zLnB1c2gobmV3U2VjdGlvbilcbiAgICAgICAgICAgIGxvYWRDdXJyZW50UHJvamVjdFNlY3Rpb25zKGN1cnJlbnRQcm9qZWN0KVxuICAgICAgICAgICAgbG9hZEFsbFNlY3Rpb25zVGFza3MoY3VycmVudFByb2plY3QpXG4gICAgICAgICAgICBhZGREZWxldGVTZWN0aW9uQnV0dG9uc0V2ZW50KClcbiAgICAgICAgICAgIGNsb3NlTW9kYWxCdXR0b25TZWN0aW9uLmNsaWNrKCk7XG4gICAgICAgICAgICBtb2RhbEhhbmRsZXIuaGFuZGxlTW9kYWxzKCk7XG4gICAgICAgICAgICBtb2RhbEhhbmRsZXIuY2hhbmdlTW9kYWxQb3NpdGlvbklmS2V5Ym9hcmRPcGVuZWQoKVxuICAgICAgICAgICAgbW9kYWxTZWN0aW9uQWxlcnQudGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDdXJyZW50UHJvamVjdFNlY3Rpb25zKGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgdGFza3NMaXN0Vmlldy5pbm5lckhUTUwgPSAnJ1xuICAgIGN1cnJlbnRQcm9qZWN0LnNlY3Rpb25zLmZvckVhY2goc2VjdGlvbiA9PiB7XG4gICAgICAgIHNlY3Rpb25IYW5kbGVyLmNyZWF0ZVNlY3Rpb25IdG1sKHNlY3Rpb24pXG4gICAgfSlcbiAgICBhZGRUYXNrRm9ybUNyZWF0aW9uRXZlbnQoKVxuICAgIGdldEN1cnJlbnRTZWN0aW9uSW5kZXgoKVxufVxuXG4iLCJjb25zdCBzaWRlYmFyVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ09wZW4nKTtcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhck1lbnUnKVxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluU2VjdGlvbicpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlclNlY3Rpb24nKTtcbmNvbnN0IGZsb2F0aW5nQWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zsb2F0aW5nQWN0aW9uQnV0dG9uJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVNpZGViYXIoKSB7XG4gICAgc2lkZWJhclRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzaWRlYmFyVG9nZ2xlLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnYmx1cicpO1xuICAgICAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdibHVyJyk7XG4gICAgICAgICAgICAgICAgZmxvYXRpbmdBY3Rpb25CdXR0b24uY2xhc3NMaXN0LmFkZCgnYmx1cicpO1xuICAgICAgICAgICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXNpZGViYXInKVxuICAgICAgICAgICAgfSwgMjIwKTtcbiAgICAgICAgICAgIGhhbmRsZVRyYW5zaXRpb24oKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdibHVyJyk7XG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnYmx1cicpO1xuICAgICAgICAgICAgZmxvYXRpbmdBY3Rpb25CdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYmx1cicpO1xuICAgICAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtc2lkZWJhcicpXG4gICAgICAgICAgICBoYW5kbGVUcmFuc2l0aW9uKClcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVUcmFuc2l0aW9uKCkge1xuICAgIGlmIChzaWRlYmFyVG9nZ2xlLmNoZWNrZWQpIHtcbiAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdzbW9vdGgtdHJhbnNpdGlvbicpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3Ntb290aC10cmFuc2l0aW9uJylcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3Ntb290aC10cmFuc2l0aW9uJylcbiAgICAgICAgfSwgMTU1KTtcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IGNsb3NlU2lkZWJhcklmU21hbGxTY3JlZW4gfSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCBsb2FkQWxsVGFza3MgZnJvbSBcIi4vYWxsdGFza3NcIjtcbmltcG9ydCBsb2FkVG9kYXlUYXNrcyBmcm9tIFwiLi90b2RheVwiO1xuaW1wb3J0IGxvYWRXZWVrVGFza3MgZnJvbSBcIi4vd2Vla1wiO1xuaW1wb3J0IGxvYWRJbXBvcnRhbnRUYXNrcyBmcm9tIFwiLi9pbXBvcnRhbnRcIjtcblxuXG5leHBvcnQgY2xhc3MgQWN0aXZlSG9tZVRhYkhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgaGFuZGxlVGFic0NsaWNrKCkge1xuICAgICAgICB0aGlzLmhvbWVUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXItaXRlbScpO1xuICAgICAgICB0aGlzLnByb2plY3RUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXItcHJvamVjdCcpO1xuICAgICAgICB0aGlzLmhvbWVUYWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWFpbkhlYWRpbmdSaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluSGVhZGluZ1JpZ2h0JylcbiAgICAgICAgICAgICAgICBtYWluSGVhZGluZ1JpZ2h0LmlubmVySFRNTCA9ICcnXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHdoaWxlICh0YXJnZXQgJiYgIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXItaXRlbScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZVRhYih0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHRoaXMub3BlbkFjdGl2ZVRhYih0YXJnZXQpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlVGFiKHRhcmdldCkge1xuICAgICAgICB0aGlzLmhvbWVUYWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLWl0ZW0tYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb2plY3RUYWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLWl0ZW0tYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1pdGVtLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIG9wZW5BY3RpdmVUYWIodGFyZ2V0KSB7XG4gICAgICAgIHN3aXRjaCAodGFyZ2V0LmlkKSB7XG4gICAgICAgICAgICBjYXNlICd0YWJBbGxUYXNrcyc6XG4gICAgICAgICAgICAgICAgbG9hZEFsbFRhc2tzKCk7XG4gICAgICAgICAgICAgICAgY2xvc2VTaWRlYmFySWZTbWFsbFNjcmVlbigpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3RhYlRvZGF5JzpcbiAgICAgICAgICAgICAgICBsb2FkVG9kYXlUYXNrcygpO1xuICAgICAgICAgICAgICAgIGNsb3NlU2lkZWJhcklmU21hbGxTY3JlZW4oKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICd0YWJUaGlzV2Vlayc6XG4gICAgICAgICAgICAgICAgbG9hZFdlZWtUYXNrcygpO1xuICAgICAgICAgICAgICAgIGNsb3NlU2lkZWJhcklmU21hbGxTY3JlZW4oKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICd0YWJJbXBvcnRhbnQnOlxuICAgICAgICAgICAgICAgIGxvYWRJbXBvcnRhbnRUYXNrcygpO1xuICAgICAgICAgICAgICAgIGNsb3NlU2lkZWJhcklmU21hbGxTY3JlZW4oKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgVGFza3NIYW5kbGVyIH0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyBjdXJyZW50UHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBhbGxQcm9qZWN0cywgY3VycmVudFByb2plY3RJbmRleCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgVG9hc3RpZnkgZnJvbSAndG9hc3RpZnktanMnXG5pbXBvcnQgXCJ0b2FzdGlmeS1qcy9zcmMvdG9hc3RpZnkuY3NzXCJcblxuY29uc3QgdGFza3NIYW5kbGVyID0gbmV3IFRhc2tzSGFuZGxlcigpO1xuY29uc3QgdG9hc3ROb3RpZmljYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9hc3ROb3RpZmljYXRpb24nKVxuXG5jbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbiwgZGF0ZSkge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMuaW1wb3J0YW50ID0gZmFsc2U7XG4gICAgfVxufVxuXG5sZXQgY3VycmVudFNlY3Rpb25JbmRleCA9IG51bGxcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2tGb3JtQ3JlYXRpb25FdmVudCgpIHtcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGQtdGFzay1jb250YWluZXInKVxuICAgIGFkZFRhc2tCdXR0b25zLmZvckVhY2goKGJ1dHRvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldFxuICAgICAgICAgICAgY3VycmVudFNlY3Rpb25JbmRleCA9IGluZGV4XG4gICAgICAgICAgICBsZXQgY3VycmVudFNlY3Rpb25IdG1sRWxlbWVudCA9IHRhcmdldC5jbG9zZXN0KCcuc2VjdGlvbicpXG4gICAgICAgICAgICBsZXQgY3VycmVudFNlY3Rpb25UYXNrc0NvbnRhaW5lciA9IGN1cnJlbnRTZWN0aW9uSHRtbEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tdGFzay1jb250YWluZXInKVxuICAgICAgICAgICAgdGFza3NIYW5kbGVyLmNyZWF0ZUFkZFRhc2tGb3JtSHRtbChjdXJyZW50U2VjdGlvblRhc2tzQ29udGFpbmVyKVxuICAgICAgICAgICAgYWRkQ2FuY2VsQnV0dG9uRXZlbnQoY3VycmVudFNlY3Rpb25UYXNrc0NvbnRhaW5lcilcbiAgICAgICAgICAgIGxldCBjdXJyZW50QWRkVGFza0J1dHRvbkNvbnRhaW5lciA9IGN1cnJlbnRTZWN0aW9uSHRtbEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWNvbnRhaW5lcicpXG4gICAgICAgICAgICBjdXJyZW50QWRkVGFza0J1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW5vbmUnKVxuICAgICAgICAgICAgcmVtb3ZlQWRkVGFza0J1dHRvbnNDbGljayhhZGRUYXNrQnV0dG9ucylcbiAgICAgICAgICAgIGFkZFRhc2tTdWJtaXRFdmVudCgpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYWRkQ2FuY2VsQnV0dG9uRXZlbnQoY3VycmVudFNlY3Rpb25UYXNrc0NvbnRhaW5lcikge1xuICAgIGNvbnN0IGNhbmNlbFRhc2tGb3JtQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbFRhc2tGb3JtQnV0dG9uJylcbiAgICBjYW5jZWxUYXNrRm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbGV0IGFkZFRhc2tGb3JtID0gY3VycmVudFNlY3Rpb25UYXNrc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stZm9ybS1jb250YWluZXInKTtcbiAgICAgICAgaWYgKGFkZFRhc2tGb3JtKSB7XG4gICAgICAgICAgICBhZGRUYXNrRm9ybS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGFkZEFkZFRhc2tCdXR0b25zKClcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFkZFRhc2tCdXR0b25zQ2xpY2soYWRkVGFza0J1dHRvbnMpIHtcbiAgICBhZGRUYXNrQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZC1jbGljaycpXG4gICAgfSlcbiAgICBsZXQgYWRkVGFza0ljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZC10YXNrLWJ0bicpXG4gICAgYWRkVGFza0ljb25zLmZvckVhY2goaWNvbiA9PiB7XG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stYnRuLWRpc2FibGVkJylcbiAgICB9KVxufVxuXG5cbmZ1bmN0aW9uIGFkZEFkZFRhc2tCdXR0b25zKCkge1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZC10YXNrLWNvbnRhaW5lcicpXG4gICAgYWRkVGFza0J1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQtY2xpY2snKVxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1ub25lJylcbiAgICB9KVxuXG4gICAgbGV0IGFkZFRhc2tJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGQtdGFzay1idG4nKVxuICAgIGFkZFRhc2tJY29ucy5mb3JFYWNoKGljb24gPT4ge1xuICAgICAgICBpY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2FkZC10YXNrLWJ0bi1kaXNhYmxlZCcpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYWRkVGFza1N1Ym1pdEV2ZW50KCkge1xuICAgIGNvbnN0IGFkZFRhc2tGb3JtQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tGb3JtQnV0dG9uJylcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRGVzY3JpcHRpb25JbnB1dCcpXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGVJbnB1dCcpXG4gICAgY29uc3QgY2FuY2VsVGFza0Zvcm1CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsVGFza0Zvcm1CdXR0b24nKVxuICAgIGFkZFRhc2tGb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAodGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLWlucHV0JylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGVJbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLWlucHV0JylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGF0ZUFyciA9IGRhdGVJbnB1dC52YWx1ZS5zcGxpdCgnLScpXG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZUFyclswXVxuICAgICAgICAgICAgY29uc3QgbW9udGggPSBkYXRlQXJyWzFdXG4gICAgICAgICAgICBjb25zdCBkYXkgPSBkYXRlQXJyWzJdXG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gYCR7bW9udGh9LyR7ZGF5fS8ke3llYXJ9YFxuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlLCBmb3JtYXR0ZWREYXRlKVxuICAgICAgICAgICAgbGV0IGN1cnJlbnRTZWN0aW9uID0gY3VycmVudFByb2plY3Quc2VjdGlvbnNbY3VycmVudFNlY3Rpb25JbmRleF1cbiAgICAgICAgICAgIGN1cnJlbnRTZWN0aW9uLnRhc2tzLnB1c2gobmV3VGFzaylcbiAgICAgICAgICAgIGxvYWRBbGxTZWN0aW9uc1Rhc2tzKGN1cnJlbnRQcm9qZWN0KVxuICAgICAgICAgICAgY2FuY2VsVGFza0Zvcm1CdXR0b24uY2xpY2soKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkLWlucHV0JylcbiAgICAgICAgZGF0ZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQtaW5wdXQnKVxuICAgIH0pXG5cbiAgICBkYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gICAgICAgIGRhdGVJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkLWlucHV0JylcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEFsbFNlY3Rpb25zVGFza3MoY3VycmVudFByb2plY3QpIHtcbiAgICBjb25zdCBhbGxTZWN0aW9uVGFza3NDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY3Rpb24tdGFza3MnKVxuICAgIGFsbFNlY3Rpb25UYXNrc0NvbnRhaW5lcnMuZm9yRWFjaChjb250YWluZXIgPT4ge1xuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICB9KVxuICAgIGN1cnJlbnRQcm9qZWN0LnNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICAgIHNlY3Rpb24udGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIHRhc2tzSGFuZGxlci5jcmVhdGVUYXNrSHRtbChhbGxTZWN0aW9uVGFza3NDb250YWluZXJzW2luZGV4XSwgdGFzaylcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIGFkZEltcG9ydGFudEJ1dHRvbkV2ZW50KClcbiAgICBhZGRUYXNrQ2hlY2tib3hFdmVudCgpXG59XG5cbmxldCBjbGlja2VkU2VjdGlvbkluZGV4ID0gbnVsbFxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFNlY3Rpb25JbmRleCgpIHtcbiAgICBjb25zdCBhbGxTZWN0aW9uc0h0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VjdGlvbicpXG4gICAgYWxsU2VjdGlvbnNIdG1sLmZvckVhY2goKHNlY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICAgIHNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjbGlja2VkU2VjdGlvbkluZGV4ID0gaW5kZXhcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSW1wb3J0YW50QnV0dG9uRXZlbnQoKSB7XG4gICAgY29uc3QgYWxsU2VjdGlvbnNIdG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY3Rpb24nKVxuICAgIGFsbFNlY3Rpb25zSHRtbC5mb3JFYWNoKHNlY3Rpb24gPT4ge1xuICAgICAgICBsZXQgc2VjdGlvbkltcG9ydGFudEJ1dHRvbnMgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbXBvcnRhbnQtYnRuJylcbiAgICAgICAgc2VjdGlvbkltcG9ydGFudEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2ltcG9ydGFudC1idG4tYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRhc2tBc0ltcG9ydGFudChidXR0b24sIGluZGV4KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2ltcG9ydGFudC1idG4tYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRhc2tBc1VuaW1wb3J0YW50KGJ1dHRvbiwgaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBzZXRUYXNrQXNJbXBvcnRhbnQoY2xpY2tlZEJ1dHRvbiwgaW5kZXgpIHtcbiAgICBjbGlja2VkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ltcG9ydGFudC1idG4tYWN0aXZlJylcbiAgICBjdXJyZW50UHJvamVjdC5zZWN0aW9uc1tjbGlja2VkU2VjdGlvbkluZGV4XS50YXNrc1tpbmRleF0uaW1wb3J0YW50ID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBzZXRUYXNrQXNVbmltcG9ydGFudChjbGlja2VkQnV0dG9uLCBpbmRleCkge1xuICAgIGNsaWNrZWRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaW1wb3J0YW50LWJ0bi1hY3RpdmUnKVxuICAgIGN1cnJlbnRQcm9qZWN0LnNlY3Rpb25zW2NsaWNrZWRTZWN0aW9uSW5kZXhdLnRhc2tzW2luZGV4XS5pbXBvcnRhbnQgPSBmYWxzZVxufVxuXG5mdW5jdGlvbiBhZGRUYXNrQ2hlY2tib3hFdmVudCgpe1xuICAgIGNvbnN0IGFsbFNlY3Rpb25zSHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWN0aW9uJylcbiAgICBhbGxTZWN0aW9uc0h0bWwuZm9yRWFjaChzZWN0aW9uID0+IHtcbiAgICAgICAgbGV0IHNlY3Rpb25DaGVja2JveGVzID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gnKVxuICAgICAgICBzZWN0aW9uQ2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCwgY2hlY2tib3hJbmRleCkgPT4ge1xuICAgICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgY2hlY2tUYXNrQXNDb21wbGV0ZWQoY2hlY2tib3hJbmRleClcbiAgICAgICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGNoZWNrVGFza0FzQ29tcGxldGVkKGNoZWNrYm94SW5kZXgpe1xuICAgIGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnNlY3Rpb25zW2NsaWNrZWRTZWN0aW9uSW5kZXhdLnRhc2tzLnNwbGljZShjaGVja2JveEluZGV4LCAxKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsb2FkQWxsU2VjdGlvbnNUYXNrcyhjdXJyZW50UHJvamVjdClcbiAgICAgICAgVG9hc3RpZnkoe1xuICAgICAgICAgICAgdGV4dDogXCIxIHRhc2sgY29tcGxldGVkXCIsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiY3VzdG9tLXRvYXN0XCIsIC8vIEFwcGx5IHRoZSBjdXN0b20gQ1NTIGNsYXNzXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgICAgICAgIGdyYXZpdHk6IFwiYm90dG9tXCIsIC8vIGB0b3BgIG9yIGBib3R0b21gXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJsZWZ0XCIsIC8vIGBsZWZ0YCwgYGNlbnRlcmAgb3IgYHJpZ2h0YFxuICAgICAgICAgIH0pLnNob3dUb2FzdCgpO1xuICAgIH0sIDMwMCk7XG59XG4iLCJpbXBvcnQgeyBmb3JtYXQsIGlzVG9kYXkgfSBmcm9tICdkYXRlLWZucydcbmltcG9ydCB0b2RheUljb24gZnJvbSAnLi9pbWcvdG9kYXk0OHg0OC5zdmcnXG5pbXBvcnQgbm9UYXNrc0ljb25Ub2RheSBmcm9tICcuL2ltZy90b2RheS1uby10YXNrcy5wbmcnXG5pbXBvcnQgeyBUYXNrc0hhbmRsZXIsIFByb2plY3RzSGFuZGxlciwgcmVtb3ZlRW1wdHlQcm9qZWN0c0Zyb21IVE1MIH0gZnJvbSAnLi9kb20nXG5pbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdHMnXG5pbXBvcnQgVG9hc3RpZnkgZnJvbSAndG9hc3RpZnktanMnXG5pbXBvcnQgXCJ0b2FzdGlmeS1qcy9zcmMvdG9hc3RpZnkuY3NzXCJcblxuY29uc3QgdGFza3NIYW5kbGVyID0gbmV3IFRhc2tzSGFuZGxlcigpXG5jb25zdCBwcm9qZWN0c0hhbmRsZXIgPSBuZXcgUHJvamVjdHNIYW5kbGVyKClcblxuY29uc3QgdGFza3NMaXN0VmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrc0xpc3RWaWV3JylcbmNvbnN0IGhlYWRlclNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyU2VjdGlvbicpXG5jb25zdCBmbG9hdGluZ0FjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbG9hdGluZ0FjdGlvbkJ1dHRvbicpXG5cbmxldCBhbGxUb2RheVRhc2tzID0gW11cblxuY2xhc3MgVG9kYXlUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0SW5kZXhUb2RheSwgc2VjdGlvbkluZGV4VG9kYXksIHRhc2tJbmRleFRvZGF5KXtcbiAgICAgICAgdGhpcy5wcm9qZWN0SW5kZXhUb2RheSA9IHByb2plY3RJbmRleFRvZGF5XG4gICAgICAgIHRoaXMuc2VjdGlvbkluZGV4VG9kYXkgPSBzZWN0aW9uSW5kZXhUb2RheVxuICAgICAgICB0aGlzLnRhc2tJbmRleFRvZGF5ID0gdGFza0luZGV4VG9kYXlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRUb2RheVRhc2tzKCkge1xuICAgIHNldFRvZGF5VGFiKCk7XG4gICAgbG9hZFRhc2tzKClcbn1cblxuZnVuY3Rpb24gc2V0VG9kYXlUYWIoKSB7XG4gICAgY29uc3QgY3VycmVudFRhYk5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudFRhYk5hbWUnKVxuICAgIGNvbnN0IGN1cnJlbnRUYWJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRUYWJJY29uJylcbiAgICBjb25zdCBkYXRlRGlzcGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtZGlzcGxheWVyJylcblxuICAgIGNvbnN0IHN2Z1RvZGF5ID0gbmV3IEltYWdlKClcbiAgICBzdmdUb2RheS5zcmMgPSB0b2RheUljb247XG4gICAgY3VycmVudFRhYkljb24uaW5uZXJIVE1MID0gJydcbiAgICBjdXJyZW50VGFiSWNvbi5hcHBlbmRDaGlsZChzdmdUb2RheSlcblxuICAgIGNvbnN0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKClcbiAgICBjb25zdCB0b2RheURhdGVTdHJpbmcgPSBgRGF0ZTogJHtmb3JtYXQodG9kYXlEYXRlLCAnTU1NTS9kZC95eXl5Jyl9YDtcblxuICAgIGN1cnJlbnRUYWJOYW1lLnRleHRDb250ZW50ID0gJ1RvZGF5J1xuICAgIHRhc2tzSGFuZGxlci5jcmVhdGVSaWdodERhdGVEaXNwbGF5KG1haW5IZWFkaW5nUmlnaHQsIHRvZGF5RGF0ZVN0cmluZylcblxuICAgIGRhdGVEaXNwbGF5ZXIuaW5uZXJIVE1MID0gJydcbiAgICB0YXNrc0hhbmRsZXIuY3JlYXRlRGF0ZURpc3BsYXkoZGF0ZURpc3BsYXllciwgdG9kYXlEYXRlU3RyaW5nKVxuXG4gICAgdGFza3NMaXN0Vmlldy5pbm5lckhUTUwgPSAnJ1xuICAgIHRhc2tzTGlzdFZpZXcuY2xhc3NMaXN0LmFkZCgnaGVpZ2h0LWF1dG8nKVxuICAgIGZsb2F0aW5nQWN0aW9uQnV0dG9uLmlubmVySFRNTCA9ICcnXG4gICAgaGVhZGVyU2VjdGlvbi5jbGFzc05hbWUgPSAnJ1xuICAgIGhlYWRlclNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaGVhZGVyLXRvZGF5Jylcbn1cblxuZnVuY3Rpb24gbG9hZFRhc2tzKCl7XG4gICAgdGFza3NMaXN0Vmlldy5pbm5lckhUTUwgPSAnJ1xuICAgIGFsbFRvZGF5VGFza3MgPSBbXVxuICAgIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QsIHByb2plY3RJbmRleFRvZGF5KSA9PiB7XG4gICAgICAgIHByb2plY3RzSGFuZGxlci5jcmVhdGVQcm9qZWN0SHRtbEZvclRhYnModGFza3NMaXN0VmlldywgcHJvamVjdCk7XG4gICAgICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyQWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFza3MtY29udGFpbmVyLWFsbC10YXNrcycpO1xuXG4gICAgICAgIHByb2plY3Quc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbiwgc2VjdGlvbkluZGV4VG9kYXkpID0+IHtcbiAgICAgICAgICAgIHNlY3Rpb24udGFza3MuZm9yRWFjaCgodGFzaywgdGFza0luZGV4VG9kYXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGFza0lzVG9kYXkodGFzay5kYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrc0hhbmRsZXIuY3JlYXRlVGFza0h0bWwodGFza3NDb250YWluZXJBbGxUYXNrc1twcm9qZWN0SW5kZXhUb2RheV0sIHRhc2spO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1RvZGF5VGFzayA9IG5ldyBUb2RheVRhc2socHJvamVjdEluZGV4VG9kYXksIHNlY3Rpb25JbmRleFRvZGF5LCB0YXNrSW5kZXhUb2RheSlcbiAgICAgICAgICAgICAgICAgICAgYWxsVG9kYXlUYXNrcy5wdXNoKG5ld1RvZGF5VGFzaylcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJlbW92ZUVtcHR5UHJvamVjdHNGcm9tSFRNTCgpXG4gICAgZGlzcGxheU5vVGFza3NJbWFnZSgpXG4gICAgYWRkVG9kYXlUYXNrQ2hlY2tib3hFdmVudCgpXG59XG5cbmZ1bmN0aW9uIHRhc2tJc1RvZGF5KHRhc2tEYXRlKSB7XG4gICAgbGV0IGN1cnJlbnRUYXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2tEYXRlKVxuICAgIGlmIChpc1RvZGF5KGN1cnJlbnRUYXNrRGF0ZSkgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheU5vVGFza3NJbWFnZSgpIHtcbiAgICBpZiAodGFza3NMaXN0Vmlldy5pbm5lckhUTUwgPT09ICcnKSB7XG4gICAgICAgIHRhc2tzTGlzdFZpZXcuY2xhc3NMaXN0LnJlbW92ZSgnaGVpZ2h0LWF1dG8nKVxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbm8tdGFza3MtaW1nLWNvbnRhaW5lcicpXG5cbiAgICAgICAgY29uc3Qgbm9UYXNrc0ltYWdlVG9kYXkgPSBuZXcgSW1hZ2UoKVxuICAgICAgICBub1Rhc2tzSW1hZ2VUb2RheS5zcmMgPSBub1Rhc2tzSWNvblRvZGF5XG4gICAgICAgIG5vVGFza3NJbWFnZVRvZGF5LmNsYXNzTGlzdC5hZGQoJ25vLXRhc2tzLWltZy10b2RheScpXG5cbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBgWW91IGRvbid0IGhhdmUgYW55IHRhc2tzIGZvciB0b2RheSFgXG4gICAgICAgIHRleHQuY2xhc3NMaXN0LmFkZCgnbm8tdGFza3MtaW1nLXRleHQnKVxuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChub1Rhc2tzSW1hZ2VUb2RheSlcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpXG4gICAgICAgIHRhc2tzTGlzdFZpZXcuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkVG9kYXlUYXNrQ2hlY2tib3hFdmVudCgpe1xuICAgIGxldCB0b2RheUNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gnKVxuICAgIHRvZGF5Q2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCwgY2hlY2tib3hJbmRleCkgPT4ge1xuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNoZWNrVGFza0FzQ29tcGxldGVkKGNoZWNrYm94SW5kZXgsIGFsbFRvZGF5VGFza3NbY2hlY2tib3hJbmRleF0ucHJvamVjdEluZGV4VG9kYXksIGFsbFRvZGF5VGFza3NbY2hlY2tib3hJbmRleF0uc2VjdGlvbkluZGV4VG9kYXksIGFsbFRvZGF5VGFza3NbY2hlY2tib3hJbmRleF0udGFza0luZGV4VG9kYXkpXG4gICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgIH0pXG4gICAgfSkgICAgXG59XG5cbmZ1bmN0aW9uIGNoZWNrVGFza0FzQ29tcGxldGVkKGNoZWNrYm94SW5kZXgsIHByb2plY3RJbmRleFRvZGF5LCBzZWN0aW9uSW5kZXhUb2RheSwgdGFza0luZGV4VG9kYXkpe1xuICAgIGFsbFByb2plY3RzW3Byb2plY3RJbmRleFRvZGF5XS5zZWN0aW9uc1tzZWN0aW9uSW5kZXhUb2RheV0udGFza3Muc3BsaWNlKHRhc2tJbmRleFRvZGF5LCAxKVxuICAgIGFsbFRvZGF5VGFza3Muc3BsaWNlKGNoZWNrYm94SW5kZXgsIDEpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxvYWRUYXNrcygpXG4gICAgICAgIFRvYXN0aWZ5KHtcbiAgICAgICAgICAgIHRleHQ6IFwiMSB0YXNrIGNvbXBsZXRlZFwiLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImN1c3RvbS10b2FzdC1yZWRcIiwgLy8gQXBwbHkgdGhlIGN1c3RvbSBDU1MgY2xhc3NcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgICAgICAgZ3Jhdml0eTogXCJib3R0b21cIiwgLy8gYHRvcGAgb3IgYGJvdHRvbWBcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImxlZnRcIiwgLy8gYGxlZnRgLCBgY2VudGVyYCBvciBgcmlnaHRgXG4gICAgICAgICAgfSkuc2hvd1RvYXN0KCk7XG4gICAgfSwgMzAwKTtcbn1cblxuIiwiaW1wb3J0IHsgaXNUaGlzV2Vlaywgc3RhcnRPZldlZWssIGFkZERheXMsIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IHdlZWtJY29uIGZyb20gJy4vaW1nL3RoaXN3ZWVrNDh4NDguc3ZnJ1xuaW1wb3J0IHsgYWxsUHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3RzJ1xuaW1wb3J0IHsgVGFza3NIYW5kbGVyLCBQcm9qZWN0c0hhbmRsZXIsIHJlbW92ZUVtcHR5UHJvamVjdHNGcm9tSFRNTCB9IGZyb20gJy4vZG9tJ1xuaW1wb3J0IG5vVGFza3NJY29uVGhpc1dlZWsgZnJvbSAnLi9pbWcvdGhpcy13ZWVrLW5vLXRhc2tzLnBuZydcbmltcG9ydCBUb2FzdGlmeSBmcm9tICd0b2FzdGlmeS1qcydcbmltcG9ydCBcInRvYXN0aWZ5LWpzL3NyYy90b2FzdGlmeS5jc3NcIlxuXG5jb25zdCB0YXNrc0hhbmRsZXIgPSBuZXcgVGFza3NIYW5kbGVyKClcbmNvbnN0IHByb2plY3RzSGFuZGxlciA9IG5ldyBQcm9qZWN0c0hhbmRsZXIoKVxuXG5jb25zdCB0YXNrc0xpc3RWaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzTGlzdFZpZXcnKVxuY29uc3QgaGVhZGVyU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXJTZWN0aW9uJylcbmNvbnN0IGZsb2F0aW5nQWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zsb2F0aW5nQWN0aW9uQnV0dG9uJylcblxubGV0IGZ1bGxEYXRlU3RyaW5nID0gbnVsbFxuXG5sZXQgYWxsV2Vla1Rhc2tzID0gW11cblxuY2xhc3MgV2Vla1Rhc2sge1xuICAgIGNvbnN0cnVjdG9yKHByb2plY3RJbmRleFdlZWssIHNlY3Rpb25JbmRleFdlZWssIHRhc2tJbmRleFdlZWspe1xuICAgICAgICB0aGlzLnByb2plY3RJbmRleFdlZWsgPSBwcm9qZWN0SW5kZXhXZWVrXG4gICAgICAgIHRoaXMuc2VjdGlvbkluZGV4V2VlayA9IHNlY3Rpb25JbmRleFdlZWtcbiAgICAgICAgdGhpcy50YXNrSW5kZXhXZWVrID0gdGFza0luZGV4V2Vla1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFdlZWtUYXNrcygpIHtcbiAgICBzZXRXZWVrVGFiKClcbiAgICBsb2FkVGFza3MoKVxufVxuXG5mdW5jdGlvbiBzZXRXZWVrVGFiKCkge1xuICAgIGNvbnN0IGN1cnJlbnRUYWJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRUYWJOYW1lJylcbiAgICBjb25zdCBjdXJyZW50VGFiSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50VGFiSWNvbicpXG4gICAgY29uc3QgbWFpbkhlYWRpbmdSaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluSGVhZGluZ1JpZ2h0JylcbiAgICBjb25zdCBkYXRlRGlzcGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtZGlzcGxheWVyJylcblxuICAgIGNvbnN0IHN2Z1dlZWsgPSBuZXcgSW1hZ2UoKVxuICAgIHN2Z1dlZWsuc3JjID0gd2Vla0ljb247XG4gICAgY3VycmVudFRhYkljb24uaW5uZXJIVE1MID0gJydcbiAgICBjdXJyZW50VGFiSWNvbi5hcHBlbmRDaGlsZChzdmdXZWVrKVxuXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpXG4gICAgY29uc3QgdGhpc1dlZWtTdGFydCA9IHN0YXJ0T2ZXZWVrKGN1cnJlbnREYXRlKVxuICAgIGNvbnN0IHRoaXNXZWVrRW5kID0gYWRkRGF5cyh0aGlzV2Vla1N0YXJ0LCA2KTtcblxuICAgIGNvbnN0IGZvcm1hdHRlZFN0YXJ0RGF0ZSA9IGZvcm1hdCh0aGlzV2Vla1N0YXJ0LCAnTU0vZGQveXl5eScpO1xuICAgIGNvbnN0IGZvcm1hdHRlZEVuZERhdGUgPSBmb3JtYXQodGhpc1dlZWtFbmQsICdNTS9kZC95eXl5Jyk7XG5cbiAgICBmdWxsRGF0ZVN0cmluZyA9IGBXZWVrOiAke2Zvcm1hdHRlZFN0YXJ0RGF0ZX0gLSAke2Zvcm1hdHRlZEVuZERhdGV9YFxuXG4gICAgY3VycmVudFRhYk5hbWUudGV4dENvbnRlbnQgPSAnVGhpcyBXZWVrJ1xuICAgIHRhc2tzSGFuZGxlci5jcmVhdGVSaWdodERhdGVEaXNwbGF5KG1haW5IZWFkaW5nUmlnaHQsIGZ1bGxEYXRlU3RyaW5nKVxuXG4gICAgZGF0ZURpc3BsYXllci5pbm5lckhUTUwgPSAnJ1xuICAgIHRhc2tzSGFuZGxlci5jcmVhdGVEYXRlRGlzcGxheShkYXRlRGlzcGxheWVyLCBmdWxsRGF0ZVN0cmluZylcblxuICAgIHRhc2tzTGlzdFZpZXcuaW5uZXJIVE1MID0gJydcbiAgICB0YXNrc0xpc3RWaWV3LmNsYXNzTGlzdC5hZGQoJ2hlaWdodC1hdXRvJylcbiAgICBmbG9hdGluZ0FjdGlvbkJ1dHRvbi5pbm5lckhUTUwgPSAnJ1xuICAgIGhlYWRlclNlY3Rpb24uY2xhc3NOYW1lID0gJydcbiAgICBoZWFkZXJTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci13ZWVrJylcbn1cblxuZnVuY3Rpb24gbG9hZFRhc2tzKCl7XG4gICAgdGFza3NMaXN0Vmlldy5pbm5lckhUTUwgPSAnJ1xuICAgIGFsbFdlZWtUYXNrcyA9IFtdXG4gICAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgcHJvamVjdEluZGV4V2VlaykgPT4ge1xuICAgICAgICBwcm9qZWN0c0hhbmRsZXIuY3JlYXRlUHJvamVjdEh0bWxGb3JUYWJzKHRhc2tzTGlzdFZpZXcsIHByb2plY3QpO1xuICAgICAgICBjb25zdCB0YXNrc0NvbnRhaW5lckFsbFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2tzLWNvbnRhaW5lci1hbGwtdGFza3MnKTtcblxuICAgICAgICBwcm9qZWN0LnNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24sIHNlY3Rpb25JbmRleFdlZWspID0+IHtcbiAgICAgICAgICAgIHNlY3Rpb24udGFza3MuZm9yRWFjaCgodGFzaywgdGFza0luZGV4V2VlaykgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrSGFzRGF0ZUZvclRoaXNXZWVrKHRhc2suZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza3NIYW5kbGVyLmNyZWF0ZVRhc2tIdG1sKHRhc2tzQ29udGFpbmVyQWxsVGFza3NbcHJvamVjdEluZGV4V2Vla10sIHRhc2spO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1dlZWtUYXNrID0gbmV3IFdlZWtUYXNrKHByb2plY3RJbmRleFdlZWssIHNlY3Rpb25JbmRleFdlZWssIHRhc2tJbmRleFdlZWspXG4gICAgICAgICAgICAgICAgICAgIGFsbFdlZWtUYXNrcy5wdXNoKG5ld1dlZWtUYXNrKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmVtb3ZlRW1wdHlQcm9qZWN0c0Zyb21IVE1MKClcbiAgICBkaXNwbGF5Tm9UYXNrc0ltYWdlKClcbiAgICBhZGRXZWVrVGFza0NoZWNrYm94RXZlbnQoKVxufVxuXG5mdW5jdGlvbiB0YXNrSGFzRGF0ZUZvclRoaXNXZWVrKHRhc2tEYXRlKSB7XG4gICAgbGV0IGN1cnJlbnRUYXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2tEYXRlKVxuICAgIGlmIChpc1RoaXNXZWVrKGN1cnJlbnRUYXNrRGF0ZSkgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheU5vVGFza3NJbWFnZSgpIHtcbiAgICBpZiAodGFza3NMaXN0Vmlldy5pbm5lckhUTUwgPT09ICcnKSB7XG4gICAgICAgIHRhc2tzTGlzdFZpZXcuY2xhc3NMaXN0LnJlbW92ZSgnaGVpZ2h0LWF1dG8nKVxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbm8tdGFza3MtaW1nLWNvbnRhaW5lcicpXG5cbiAgICAgICAgY29uc3Qgbm9UYXNrc0ltYWdlVGhpc1dlZWsgPSBuZXcgSW1hZ2UoKVxuICAgICAgICBub1Rhc2tzSW1hZ2VUaGlzV2Vlay5zcmMgPSBub1Rhc2tzSWNvblRoaXNXZWVrXG4gICAgICAgIG5vVGFza3NJbWFnZVRoaXNXZWVrLmNsYXNzTGlzdC5hZGQoJ25vLXRhc2tzLWltZy13ZWVrJylcblxuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IGBZb3UgZG9uJ3QgaGF2ZSBhbnkgdGFza3MgZm9yIHRoaXMgd2VlayFgXG4gICAgICAgIHRleHQuY2xhc3NMaXN0LmFkZCgnbm8tdGFza3MtaW1nLXRleHQnKVxuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChub1Rhc2tzSW1hZ2VUaGlzV2VlaylcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpXG4gICAgICAgIHRhc2tzTGlzdFZpZXcuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkV2Vla1Rhc2tDaGVja2JveEV2ZW50KCl7XG4gICAgbGV0IHdlZWtDaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94JylcbiAgICB3ZWVrQ2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCwgY2hlY2tib3hJbmRleCkgPT4ge1xuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNoZWNrVGFza0FzQ29tcGxldGVkKGNoZWNrYm94SW5kZXgsIGFsbFdlZWtUYXNrc1tjaGVja2JveEluZGV4XS5wcm9qZWN0SW5kZXhXZWVrLCBhbGxXZWVrVGFza3NbY2hlY2tib3hJbmRleF0uc2VjdGlvbkluZGV4V2VlaywgYWxsV2Vla1Rhc2tzW2NoZWNrYm94SW5kZXhdLnRhc2tJbmRleFdlZWspXG4gICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgIH0pXG4gICAgfSkgICAgXG59XG5cbmZ1bmN0aW9uIGNoZWNrVGFza0FzQ29tcGxldGVkKGNoZWNrYm94SW5kZXgsIHByb2plY3RJbmRleFdlZWssIHNlY3Rpb25JbmRleFdlZWssIHRhc2tJbmRleFdlZWspe1xuICAgIGFsbFByb2plY3RzW3Byb2plY3RJbmRleFdlZWtdLnNlY3Rpb25zW3NlY3Rpb25JbmRleFdlZWtdLnRhc2tzLnNwbGljZSh0YXNrSW5kZXhXZWVrLCAxKVxuICAgIGFsbFdlZWtUYXNrcy5zcGxpY2UoY2hlY2tib3hJbmRleCwgMSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbG9hZFRhc2tzKClcbiAgICAgICAgY29uc29sZS5sb2coJ2ludm9rZWQnKVxuICAgICAgICBUb2FzdGlmeSh7XG4gICAgICAgICAgICB0ZXh0OiBcIjEgdGFzayBjb21wbGV0ZWRcIixcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJjdXN0b20tdG9hc3QtYmx1ZVwiLCAvLyBBcHBseSB0aGUgY3VzdG9tIENTUyBjbGFzc1xuICAgICAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgICAgICBncmF2aXR5OiBcImJvdHRvbVwiLCAvLyBgdG9wYCBvciBgYm90dG9tYFxuICAgICAgICAgICAgcG9zaXRpb246IFwibGVmdFwiLCAvLyBgbGVmdGAsIGBjZW50ZXJgIG9yIGByaWdodGBcbiAgICAgICAgICB9KS5zaG93VG9hc3QoKTtcbiAgICB9LCAzMDApO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgaGFuZGxlU2lkZWJhciBmcm9tICcuL3NpZGViYXInXG5pbXBvcnQgbG9hZEFsbFRhc2tzIGZyb20gJy4vYWxsdGFza3MnO1xuaW1wb3J0IHsgTW9kYWxIYW5kbGVyIH0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHsgbG9hZFByb2plY3RzLCBhZGRQcm9qZWN0RXZlbnQsIGFkZFByb2plY3RUb29sc1N1Ym1pdEV2ZW50IH0gZnJvbSAnLi9wcm9qZWN0cyc7XG5cbihmdW5jdGlvbiB3ZWJzaXRlSGFuZGxlcigpe1xuICAgIGNvbnN0IG1vZGFsSGFuZGxlciA9IG5ldyBNb2RhbEhhbmRsZXIoKTsgXG5cbiAgICBoYW5kbGVTaWRlYmFyKCk7XG4gICAgbG9hZEFsbFRhc2tzKCk7XG4gICAgbG9hZFByb2plY3RzKCk7XG4gICAgYWRkUHJvamVjdEV2ZW50KCk7XG4gICAgYWRkUHJvamVjdFRvb2xzU3VibWl0RXZlbnQoKVxuICAgIG1vZGFsSGFuZGxlci5oYW5kbGVNb2RhbHMoKTtcbiAgICBtb2RhbEhhbmRsZXIuY2hhbmdlTW9kYWxQb3NpdGlvbklmS2V5Ym9hcmRPcGVuZWQoKVxuICAgIG1vZGFsSGFuZGxlci5oYW5kbGVTdWJtaXQoKVxufSkoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9