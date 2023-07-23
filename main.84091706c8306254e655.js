/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/TT Interphases Pro Trial ExtraBold.ttf */ "./src/fonts/TT Interphases Pro Trial ExtraBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'NeuePlak';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
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
    font-family: 'NeuePlak';
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
}

.container{
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: minmax(305px, 1fr) repeat(4, 1fr) ;
    grid-template-rows: repeat(12, 1fr);
}

.sidebar{
    background-color: var(--secondary-background-light);
    grid-area: 1 / 1 / -1 / 2;
    box-sizing: border-box;
    padding: 20px;
}

.main{
    background-color: var(--background-light);
    grid-area: 1 / 2 / 12 / -1;
    box-sizing: border-box;
    padding: 40px 40px 40px 40px;
}

.footer{
    grid-area: 12 / 2 / -1 / -1;
    background-color: var(--background-light);
}

.sidebar-list{
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-bottom: 20px;
}

.sidebar-item{
    display: flex;
    gap: 7px;
    align-items: center;
    box-sizing: border-box;
    padding: 5px 5px 5px 10px;
    cursor: pointer;
    border-radius: 5px;
}

.sidebar-item:hover{
    background-color: var(--hover-light);
}

.sidebar-items{
    display: grid;
    grid-template-rows: 1fr 1fr;
    height: 100%;
    color: var(--text-light);
    font-size: 15rem;
    font-weight: 400;
}

.sidebar-header{
    font-size: 21rem;
    padding-bottom: 10px;
    color: var(--text-light);
}

.sidebar-bottom{
    align-self: flex-end;
}

.settings-item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 5px 5px 5px 10px;
}

.switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 64px;
    height: 34px;
  }
  
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #73C0FC;
    transition: .4s;
    border-radius: 30px;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 30px;
    width: 30px;
    border-radius: 20px;
    left: 2px;
    bottom: 2px;
    z-index: 2;
    background-color: #e8e8e8;
    transition: .4s;
  }
  
  .sun svg {
    position: absolute;
    top: 6px;
    left: 36px;
    z-index: 1;
    width: 24px;
    height: 24px;
  }
  
  .moon svg {
    fill: #73C0FC;
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 1;
    width: 24px;
    height: 24px;
  }
  
  /* .switch:hover */.sun svg {
    animation: rotate 15s linear infinite;
  }
  
  @keyframes rotate {
   
    0% {
      transform: rotate(0);
    }
  
    100% {
      transform: rotate(360deg);
    }
  }
  
  /* .switch:hover */.moon svg {
    animation: tilt 5s linear infinite;
  }
  
  @keyframes tilt {
   
    0% {
      transform: rotate(0deg);
    }
  
    25% {
      transform: rotate(-10deg);
    }
  
    75% {
      transform: rotate(10deg);
    }
  
    100% {
      transform: rotate(0deg);
    }
  }
  
  .input:checked + .slider {
    background-color: #183153;
  }
  
  .input:focus + .slider {
    box-shadow: 0 0 1px #183153;
  }
  
  .input:checked + .slider:before {
    transform: translateX(30px);
  }

#Open {
    position: absolute;
    top: 20px;
    left: 20px;
    display: none;
}

#Open:checked ~ #sidebarMenu{
    transform: translateX(0px);
}

.wrapper {
    height: 3px;
    background-color: var(--text-light);
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
    margin-top: 9px;
}

#Open:checked~.sidebar-icon>.wrapper.third {
    transform: rotate(-315deg);
    margin-top: -9px;
}

.blur {
    filter: blur(5px);
}

.sidebar-icon{
    display: none;
}

.sidebar-item-active{
    background-color: var(--hover-light);
}

/*Media Queries*/

/* Smartphones (portrait and landscape) */
@media only screen and (max-width: 767px) {
    .container{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    .sidebar{
        position: absolute;
        z-index: 19;
        top: 0;
        left: 0;
        height: 100%;
        width: 60vw;
        transform: translate(-500px);
        transition: transform 300ms ease-in-out;
        padding-top: 60px;
    }
    .sidebar-icon{
        display: block;
        width: 22px;
        height: 22px;
        position: absolute;
        z-index: 20;
        top: 20px;
        left: 20px;
        cursor: pointer;
    }
    .main{
        padding: 50px 20px 20px 20px;
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
  }
  `, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'NeuePlak';\n    src: url(./fonts/TT\\ Interphases\\ Pro\\ Trial\\ ExtraBold.ttf);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    font-size: 6.25%;\n}\n\nbody {\n    font-size: 16rem;\n    font-family: 'NeuePlak';\n    height: 100%;\n    overflow: hidden;\n}\n\n:root {\n    --primary-color-light: #126fb5;\n    --secondary-color-light: #10a885;\n    --tertiary-color-light: #ff5436;\n\n    --primary-color-dark: #4ecbfb;\n    --secondary-color-dark: #74ffe0;\n    --tertiary-color-dark: #fe8975;\n\n    --background-light: #ffffff;\n    --secondary-background-light: #fafafa;\n    --background-dark: #212844;\n    --secondary-background-dark: #f4f5f7;\n\n    --hover-light: #dde0e4;\n\n    --text-light: #303336;\n}\n\n.container{\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: minmax(305px, 1fr) repeat(4, 1fr) ;\n    grid-template-rows: repeat(12, 1fr);\n}\n\n.sidebar{\n    background-color: var(--secondary-background-light);\n    grid-area: 1 / 1 / -1 / 2;\n    box-sizing: border-box;\n    padding: 20px;\n}\n\n.main{\n    background-color: var(--background-light);\n    grid-area: 1 / 2 / 12 / -1;\n    box-sizing: border-box;\n    padding: 40px 40px 40px 40px;\n}\n\n.footer{\n    grid-area: 12 / 2 / -1 / -1;\n    background-color: var(--background-light);\n}\n\n.sidebar-list{\n    list-style-type: none;\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n    padding-bottom: 20px;\n}\n\n.sidebar-item{\n    display: flex;\n    gap: 7px;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 5px 5px 5px 10px;\n    cursor: pointer;\n    border-radius: 5px;\n}\n\n.sidebar-item:hover{\n    background-color: var(--hover-light);\n}\n\n.sidebar-items{\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    height: 100%;\n    color: var(--text-light);\n    font-size: 15rem;\n    font-weight: 400;\n}\n\n.sidebar-header{\n    font-size: 21rem;\n    padding-bottom: 10px;\n    color: var(--text-light);\n}\n\n.sidebar-bottom{\n    align-self: flex-end;\n}\n\n.settings-item{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    box-sizing: border-box;\n    padding: 5px 5px 5px 10px;\n}\n\n.switch {\n    font-size: 17px;\n    position: relative;\n    display: inline-block;\n    width: 64px;\n    height: 34px;\n  }\n  \n  .switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n  \n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #73C0FC;\n    transition: .4s;\n    border-radius: 30px;\n  }\n  \n  .slider:before {\n    position: absolute;\n    content: \"\";\n    height: 30px;\n    width: 30px;\n    border-radius: 20px;\n    left: 2px;\n    bottom: 2px;\n    z-index: 2;\n    background-color: #e8e8e8;\n    transition: .4s;\n  }\n  \n  .sun svg {\n    position: absolute;\n    top: 6px;\n    left: 36px;\n    z-index: 1;\n    width: 24px;\n    height: 24px;\n  }\n  \n  .moon svg {\n    fill: #73C0FC;\n    position: absolute;\n    top: 5px;\n    left: 5px;\n    z-index: 1;\n    width: 24px;\n    height: 24px;\n  }\n  \n  /* .switch:hover */.sun svg {\n    animation: rotate 15s linear infinite;\n  }\n  \n  @keyframes rotate {\n   \n    0% {\n      transform: rotate(0);\n    }\n  \n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  \n  /* .switch:hover */.moon svg {\n    animation: tilt 5s linear infinite;\n  }\n  \n  @keyframes tilt {\n   \n    0% {\n      transform: rotate(0deg);\n    }\n  \n    25% {\n      transform: rotate(-10deg);\n    }\n  \n    75% {\n      transform: rotate(10deg);\n    }\n  \n    100% {\n      transform: rotate(0deg);\n    }\n  }\n  \n  .input:checked + .slider {\n    background-color: #183153;\n  }\n  \n  .input:focus + .slider {\n    box-shadow: 0 0 1px #183153;\n  }\n  \n  .input:checked + .slider:before {\n    transform: translateX(30px);\n  }\n\n#Open {\n    position: absolute;\n    top: 20px;\n    left: 20px;\n    display: none;\n}\n\n#Open:checked ~ #sidebarMenu{\n    transform: translateX(0px);\n}\n\n.wrapper {\n    height: 3px;\n    background-color: var(--text-light);\n    transition: all 0.5s;\n}\n\n.wrapper.second,\n.wrapper.third {\n    margin-top: 3px;\n}\n\n#Open:checked~.sidebar-icon>.wrapper.second {\n    opacity: 0;\n}\n\n#Open:checked~.sidebar-icon>.wrapper.first {\n    transform: rotate(315deg);\n    margin-top: 9px;\n}\n\n#Open:checked~.sidebar-icon>.wrapper.third {\n    transform: rotate(-315deg);\n    margin-top: -9px;\n}\n\n.blur {\n    filter: blur(5px);\n}\n\n.sidebar-icon{\n    display: none;\n}\n\n.sidebar-item-active{\n    background-color: var(--hover-light);\n}\n\n/*Media Queries*/\n\n/* Smartphones (portrait and landscape) */\n@media only screen and (max-width: 767px) {\n    .container{\n        width: 100vw;\n        height: 100vh;\n        display: flex;\n        flex-direction: column;\n    }\n    .sidebar{\n        position: absolute;\n        z-index: 19;\n        top: 0;\n        left: 0;\n        height: 100%;\n        width: 60vw;\n        transform: translate(-500px);\n        transition: transform 300ms ease-in-out;\n        padding-top: 60px;\n    }\n    .sidebar-icon{\n        display: block;\n        width: 22px;\n        height: 22px;\n        position: absolute;\n        z-index: 20;\n        top: 20px;\n        left: 20px;\n        cursor: pointer;\n    }\n    .main{\n        padding: 50px 20px 20px 20px;\n    }\n  }\n  \n  /* Smartphones (portrait) */\n  @media only screen and (max-width: 480px) {\n    /* Your CSS styles for portrait-oriented phones go here */\n  }\n  \n  /* Smartphones (landscape) */\n  @media only screen and (min-width: 481px) and (max-width: 767px) {\n    /* Your CSS styles for landscape-oriented phones go here */\n  }\n\n\n  /* Tablets (portrait and landscape) */\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\n    /* Your CSS styles for tablets go here */\n  }\n  \n  /* Tablets (portrait) */\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    /* Your CSS styles for portrait-oriented tablets go here */\n  }\n  \n  /* Tablets (landscape) */\n  @media only screen and (min-width: 992px) and (max-width: 1023px) {\n    /* Your CSS styles for landscape-oriented tablets go here */\n  }\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleSidebar)
/* harmony export */ });
function handleSidebar() {
    const sidebarToggle = document.getElementById('Open');
    const main = document.getElementById('mainSection');
    const footer = document.getElementById('footerSection');

    sidebarToggle.addEventListener('change', function () {
        if (sidebarToggle.checked) {
            setTimeout(() => {
                main.classList.add('blur');
                footer.classList.add('blur');
            }, 155);
        }
        else {
            main.classList.remove('blur');
            footer.classList.remove('blur');
        }
    });
}

/***/ }),

/***/ "./src/fonts/TT Interphases Pro Trial ExtraBold.ttf":
/*!**********************************************************!*\
  !*** ./src/fonts/TT Interphases Pro Trial ExtraBold.ttf ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d9caca7787f1a682b380.ttf";

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");



(0,_sidebar__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44NDA5MTcwNmM4MzA2MjU0ZTY1NS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlLQUFpRTtBQUM3Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsY0FBYyxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxpQkFBaUIsYUFBYSxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxpQkFBaUIsYUFBYSxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxRQUFRLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxzQ0FBc0MsOEJBQThCLHVFQUF1RSxHQUFHLE9BQU8sZ0JBQWdCLGlCQUFpQixHQUFHLFVBQVUsdUJBQXVCLEdBQUcsVUFBVSx1QkFBdUIsOEJBQThCLG1CQUFtQix1QkFBdUIsR0FBRyxXQUFXLHFDQUFxQyx1Q0FBdUMsc0NBQXNDLHNDQUFzQyxzQ0FBc0MscUNBQXFDLG9DQUFvQyw0Q0FBNEMsaUNBQWlDLDJDQUEyQywrQkFBK0IsOEJBQThCLEdBQUcsZUFBZSxtQkFBbUIsb0JBQW9CLG9CQUFvQixnRUFBZ0UsMENBQTBDLEdBQUcsYUFBYSwwREFBMEQsZ0NBQWdDLDZCQUE2QixvQkFBb0IsR0FBRyxVQUFVLGdEQUFnRCxpQ0FBaUMsNkJBQTZCLG1DQUFtQyxHQUFHLFlBQVksa0NBQWtDLGdEQUFnRCxHQUFHLGtCQUFrQiw0QkFBNEIsb0JBQW9CLDZCQUE2QixlQUFlLDJCQUEyQixHQUFHLGtCQUFrQixvQkFBb0IsZUFBZSwwQkFBMEIsNkJBQTZCLGdDQUFnQyxzQkFBc0IseUJBQXlCLEdBQUcsd0JBQXdCLDJDQUEyQyxHQUFHLG1CQUFtQixvQkFBb0Isa0NBQWtDLG1CQUFtQiwrQkFBK0IsdUJBQXVCLHVCQUF1QixHQUFHLG9CQUFvQix1QkFBdUIsMkJBQTJCLCtCQUErQixHQUFHLG9CQUFvQiwyQkFBMkIsR0FBRyxtQkFBbUIsb0JBQW9CLDBCQUEwQixxQ0FBcUMsNkJBQTZCLGdDQUFnQyxHQUFHLGFBQWEsc0JBQXNCLHlCQUF5Qiw0QkFBNEIsa0JBQWtCLG1CQUFtQixLQUFLLHVCQUF1QixpQkFBaUIsZUFBZSxnQkFBZ0IsS0FBSyxpQkFBaUIseUJBQXlCLHNCQUFzQixhQUFhLGNBQWMsZUFBZSxnQkFBZ0IsZ0NBQWdDLHNCQUFzQiwwQkFBMEIsS0FBSyx3QkFBd0IseUJBQXlCLG9CQUFvQixtQkFBbUIsa0JBQWtCLDBCQUEwQixnQkFBZ0Isa0JBQWtCLGlCQUFpQixnQ0FBZ0Msc0JBQXNCLEtBQUssa0JBQWtCLHlCQUF5QixlQUFlLGlCQUFpQixpQkFBaUIsa0JBQWtCLG1CQUFtQixLQUFLLG1CQUFtQixvQkFBb0IseUJBQXlCLGVBQWUsZ0JBQWdCLGlCQUFpQixrQkFBa0IsbUJBQW1CLEtBQUsscUNBQXFDLDRDQUE0QyxLQUFLLDJCQUEyQixlQUFlLDZCQUE2QixPQUFPLGdCQUFnQixrQ0FBa0MsT0FBTyxLQUFLLHNDQUFzQyx5Q0FBeUMsS0FBSyx5QkFBeUIsZUFBZSxnQ0FBZ0MsT0FBTyxlQUFlLGtDQUFrQyxPQUFPLGVBQWUsaUNBQWlDLE9BQU8sZ0JBQWdCLGdDQUFnQyxPQUFPLEtBQUssa0NBQWtDLGdDQUFnQyxLQUFLLGdDQUFnQyxrQ0FBa0MsS0FBSyx5Q0FBeUMsa0NBQWtDLEtBQUssV0FBVyx5QkFBeUIsZ0JBQWdCLGlCQUFpQixvQkFBb0IsR0FBRyxpQ0FBaUMsaUNBQWlDLEdBQUcsY0FBYyxrQkFBa0IsMENBQTBDLDJCQUEyQixHQUFHLHNDQUFzQyxzQkFBc0IsR0FBRyxpREFBaUQsaUJBQWlCLEdBQUcsZ0RBQWdELGdDQUFnQyxzQkFBc0IsR0FBRyxnREFBZ0QsaUNBQWlDLHVCQUF1QixHQUFHLFdBQVcsd0JBQXdCLEdBQUcsa0JBQWtCLG9CQUFvQixHQUFHLHlCQUF5QiwyQ0FBMkMsR0FBRyxnSEFBZ0gsaUJBQWlCLHVCQUF1Qix3QkFBd0Isd0JBQXdCLGlDQUFpQyxPQUFPLGVBQWUsNkJBQTZCLHNCQUFzQixpQkFBaUIsa0JBQWtCLHVCQUF1QixzQkFBc0IsdUNBQXVDLGtEQUFrRCw0QkFBNEIsT0FBTyxvQkFBb0IseUJBQXlCLHNCQUFzQix1QkFBdUIsNkJBQTZCLHNCQUFzQixvQkFBb0IscUJBQXFCLDBCQUEwQixPQUFPLFlBQVksdUNBQXVDLE9BQU8sS0FBSyxtRkFBbUYscUVBQXFFLDJHQUEyRyxzRUFBc0UsbUhBQW1ILG9EQUFvRCxzR0FBc0csc0VBQXNFLHdHQUF3Ryx1RUFBdUUsdUJBQXVCO0FBQzEzUjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ3ZWMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUNpQjs7QUFFckMsb0RBQWEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvVFQgSW50ZXJwaGFzZXMgUHJvIFRyaWFsIEV4dHJhQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTmV1ZVBsYWsnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuaHRtbCB7XG4gICAgZm9udC1zaXplOiA2LjI1JTtcbn1cblxuYm9keSB7XG4gICAgZm9udC1zaXplOiAxNnJlbTtcbiAgICBmb250LWZhbWlseTogJ05ldWVQbGFrJztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1jb2xvci1saWdodDogIzEyNmZiNTtcbiAgICAtLXNlY29uZGFyeS1jb2xvci1saWdodDogIzEwYTg4NTtcbiAgICAtLXRlcnRpYXJ5LWNvbG9yLWxpZ2h0OiAjZmY1NDM2O1xuXG4gICAgLS1wcmltYXJ5LWNvbG9yLWRhcms6ICM0ZWNiZmI7XG4gICAgLS1zZWNvbmRhcnktY29sb3ItZGFyazogIzc0ZmZlMDtcbiAgICAtLXRlcnRpYXJ5LWNvbG9yLWRhcms6ICNmZTg5NzU7XG5cbiAgICAtLWJhY2tncm91bmQtbGlnaHQ6ICNmZmZmZmY7XG4gICAgLS1zZWNvbmRhcnktYmFja2dyb3VuZC1saWdodDogI2ZhZmFmYTtcbiAgICAtLWJhY2tncm91bmQtZGFyazogIzIxMjg0NDtcbiAgICAtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWRhcms6ICNmNGY1Zjc7XG5cbiAgICAtLWhvdmVyLWxpZ2h0OiAjZGRlMGU0O1xuXG4gICAgLS10ZXh0LWxpZ2h0OiAjMzAzMzM2O1xufVxuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMzA1cHgsIDFmcikgcmVwZWF0KDQsIDFmcikgO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEyLCAxZnIpO1xufVxuXG4uc2lkZWJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZC1saWdodCk7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIC0xIC8gMjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5tYWlue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAxMiAvIC0xO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogNDBweCA0MHB4IDQwcHggNDBweDtcbn1cblxuLmZvb3RlcntcbiAgICBncmlkLWFyZWE6IDEyIC8gMiAvIC0xIC8gLTE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XG59XG5cbi5zaWRlYmFyLWxpc3R7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLnNpZGViYXItaXRlbXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogN3B4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zaWRlYmFyLWl0ZW06aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xufVxuXG4uc2lkZWJhci1pdGVtc3tcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICAgIGZvbnQtc2l6ZTogMTVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnNpZGViYXItaGVhZGVye1xuICAgIGZvbnQtc2l6ZTogMjFyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xufVxuXG4uc2lkZWJhci1ib3R0b217XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbi5zZXR0aW5ncy1pdGVte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xufVxuXG4uc3dpdGNoIHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNjRweDtcbiAgICBoZWlnaHQ6IDM0cHg7XG4gIH1cbiAgXG4gIC5zd2l0Y2ggaW5wdXQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG4gIFxuICAuc2xpZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzNDMEZDO1xuICAgIHRyYW5zaXRpb246IC40cztcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB9XG4gIFxuICAuc2xpZGVyOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbGVmdDogMnB4O1xuICAgIGJvdHRvbTogMnB4O1xuICAgIHotaW5kZXg6IDI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG4gIH1cbiAgXG4gIC5zdW4gc3ZnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2cHg7XG4gICAgbGVmdDogMzZweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgfVxuICBcbiAgLm1vb24gc3ZnIHtcbiAgICBmaWxsOiAjNzNDMEZDO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDVweDtcbiAgICBsZWZ0OiA1cHg7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gIH1cbiAgXG4gIC8qIC5zd2l0Y2g6aG92ZXIgKi8uc3VuIHN2ZyB7XG4gICAgYW5pbWF0aW9uOiByb3RhdGUgMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyByb3RhdGUge1xuICAgXG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgfVxuICBcbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9XG4gIFxuICAvKiAuc3dpdGNoOmhvdmVyICovLm1vb24gc3ZnIHtcbiAgICBhbmltYXRpb246IHRpbHQgNXMgbGluZWFyIGluZmluaXRlO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHRpbHQge1xuICAgXG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICBcbiAgICAyNSUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcbiAgICB9XG4gIFxuICAgIDc1JSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XG4gICAgfVxuICBcbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgfVxuICBcbiAgLmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgzMTUzO1xuICB9XG4gIFxuICAuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMxODMxNTM7XG4gIH1cbiAgXG4gIC5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTtcbiAgfVxuXG4jT3BlbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNPcGVuOmNoZWNrZWQgfiAjc2lkZWJhck1lbnV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG59XG5cbi53cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuLndyYXBwZXIuc2Vjb25kLFxuLndyYXBwZXIudGhpcmQge1xuICAgIG1hcmdpbi10b3A6IDNweDtcbn1cblxuI09wZW46Y2hlY2tlZH4uc2lkZWJhci1pY29uPi53cmFwcGVyLnNlY29uZCB7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuI09wZW46Y2hlY2tlZH4uc2lkZWJhci1pY29uPi53cmFwcGVyLmZpcnN0IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xuICAgIG1hcmdpbi10b3A6IDlweDtcbn1cblxuI09wZW46Y2hlY2tlZH4uc2lkZWJhci1pY29uPi53cmFwcGVyLnRoaXJkIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzE1ZGVnKTtcbiAgICBtYXJnaW4tdG9wOiAtOXB4O1xufVxuXG4uYmx1ciB7XG4gICAgZmlsdGVyOiBibHVyKDVweCk7XG59XG5cbi5zaWRlYmFyLWljb257XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNpZGViYXItaXRlbS1hY3RpdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xufVxuXG4vKk1lZGlhIFF1ZXJpZXMqL1xuXG4vKiBTbWFydHBob25lcyAocG9ydHJhaXQgYW5kIGxhbmRzY2FwZSkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuY29udGFpbmVye1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIC5zaWRlYmFye1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDE5O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDYwdnc7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MDBweCk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgfVxuICAgIC5zaWRlYmFyLWljb257XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMjJweDtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDIwO1xuICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLm1haW57XG4gICAgICAgIHBhZGRpbmc6IDUwcHggMjBweCAyMHB4IDIwcHg7XG4gICAgfVxuICB9XG4gIFxuICAvKiBTbWFydHBob25lcyAocG9ydHJhaXQpICovXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAvKiBZb3VyIENTUyBzdHlsZXMgZm9yIHBvcnRyYWl0LW9yaWVudGVkIHBob25lcyBnbyBoZXJlICovXG4gIH1cbiAgXG4gIC8qIFNtYXJ0cGhvbmVzIChsYW5kc2NhcGUpICovXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC8qIFlvdXIgQ1NTIHN0eWxlcyBmb3IgbGFuZHNjYXBlLW9yaWVudGVkIHBob25lcyBnbyBoZXJlICovXG4gIH1cblxuXG4gIC8qIFRhYmxldHMgKHBvcnRyYWl0IGFuZCBsYW5kc2NhcGUpICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gICAgLyogWW91ciBDU1Mgc3R5bGVzIGZvciB0YWJsZXRzIGdvIGhlcmUgKi9cbiAgfVxuICBcbiAgLyogVGFibGV0cyAocG9ydHJhaXQpICovXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIC8qIFlvdXIgQ1NTIHN0eWxlcyBmb3IgcG9ydHJhaXQtb3JpZW50ZWQgdGFibGV0cyBnbyBoZXJlICovXG4gIH1cbiAgXG4gIC8qIFRhYmxldHMgKGxhbmRzY2FwZSkgKi9cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAgIC8qIFlvdXIgQ1NTIHN0eWxlcyBmb3IgbGFuZHNjYXBlLW9yaWVudGVkIHRhYmxldHMgZ28gaGVyZSAqL1xuICB9XG4gIGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtJQUN2Qiw0Q0FBNEQ7QUFDaEU7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGdDQUFnQztJQUNoQywrQkFBK0I7O0lBRS9CLDZCQUE2QjtJQUM3QiwrQkFBK0I7SUFDL0IsOEJBQThCOztJQUU5QiwyQkFBMkI7SUFDM0IscUNBQXFDO0lBQ3JDLDBCQUEwQjtJQUMxQixvQ0FBb0M7O0lBRXBDLHNCQUFzQjs7SUFFdEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IseURBQXlEO0lBQ3pELG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLG1EQUFtRDtJQUNuRCx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFD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RUFDM0Q7O0VBRUEsNEJBQTRCO0VBQzVCO0lBQ0UsMERBQTBEO0VBQzVEOzs7RUFHQSxxQ0FBcUM7QUFDdkM7SUFDSSx3Q0FBd0M7RUFDMUM7O0VBRUEsdUJBQXVCO0VBQ3ZCO0lBQ0UsMERBQTBEO0VBQzVEOztFQUVBLHdCQUF3QjtFQUN4QjtJQUNFLDJEQUEyRDtFQUM3RFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdOZXVlUGxhayc7XFxuICAgIHNyYzogdXJsKC4vZm9udHMvVFRcXFxcIEludGVycGhhc2VzXFxcXCBQcm9cXFxcIFRyaWFsXFxcXCBFeHRyYUJvbGQudHRmKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNi4yNSU7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LXNpemU6IDE2cmVtO1xcbiAgICBmb250LWZhbWlseTogJ05ldWVQbGFrJztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tcHJpbWFyeS1jb2xvci1saWdodDogIzEyNmZiNTtcXG4gICAgLS1zZWNvbmRhcnktY29sb3ItbGlnaHQ6ICMxMGE4ODU7XFxuICAgIC0tdGVydGlhcnktY29sb3ItbGlnaHQ6ICNmZjU0MzY7XFxuXFxuICAgIC0tcHJpbWFyeS1jb2xvci1kYXJrOiAjNGVjYmZiO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvci1kYXJrOiAjNzRmZmUwO1xcbiAgICAtLXRlcnRpYXJ5LWNvbG9yLWRhcms6ICNmZTg5NzU7XFxuXFxuICAgIC0tYmFja2dyb3VuZC1saWdodDogI2ZmZmZmZjtcXG4gICAgLS1zZWNvbmRhcnktYmFja2dyb3VuZC1saWdodDogI2ZhZmFmYTtcXG4gICAgLS1iYWNrZ3JvdW5kLWRhcms6ICMyMTI4NDQ7XFxuICAgIC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtZGFyazogI2Y0ZjVmNztcXG5cXG4gICAgLS1ob3Zlci1saWdodDogI2RkZTBlNDtcXG5cXG4gICAgLS10ZXh0LWxpZ2h0OiAjMzAzMzM2O1xcbn1cXG5cXG4uY29udGFpbmVye1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDMwNXB4LCAxZnIpIHJlcGVhdCg0LCAxZnIpIDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTIsIDFmcik7XFxufVxcblxcbi5zaWRlYmFye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZC1saWdodCk7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAtMSAvIDI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5tYWlue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDEyIC8gLTE7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDQwcHggNDBweCA0MHB4IDQwcHg7XFxufVxcblxcbi5mb290ZXJ7XFxuICAgIGdyaWQtYXJlYTogMTIgLyAyIC8gLTEgLyAtMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxufVxcblxcbi5zaWRlYmFyLWxpc3R7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uc2lkZWJhci1pdGVte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDdweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zaWRlYmFyLWl0ZW06aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcXG59XFxuXFxuLnNpZGViYXItaXRlbXN7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxuICAgIGZvbnQtc2l6ZTogMTVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5zaWRlYmFyLWhlYWRlcntcXG4gICAgZm9udC1zaXplOiAyMXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG59XFxuXFxuLnNpZGViYXItYm90dG9te1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLnNldHRpbmdzLWl0ZW17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcXG59XFxuXFxuLnN3aXRjaCB7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA2NHB4O1xcbiAgICBoZWlnaHQ6IDM0cHg7XFxuICB9XFxuICBcXG4gIC5zd2l0Y2ggaW5wdXQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgfVxcbiAgXFxuICAuc2xpZGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzczQzBGQztcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgfVxcbiAgXFxuICAuc2xpZGVyOmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGxlZnQ6IDJweDtcXG4gICAgYm90dG9tOiAycHg7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG4gIH1cXG4gIFxcbiAgLnN1biBzdmcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNnB4O1xcbiAgICBsZWZ0OiAzNnB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgfVxcbiAgXFxuICAubW9vbiBzdmcge1xcbiAgICBmaWxsOiAjNzNDMEZDO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNXB4O1xcbiAgICBsZWZ0OiA1cHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICB9XFxuICBcXG4gIC8qIC5zd2l0Y2g6aG92ZXIgKi8uc3VuIHN2ZyB7XFxuICAgIGFuaW1hdGlvbjogcm90YXRlIDE1cyBsaW5lYXIgaW5maW5pdGU7XFxuICB9XFxuICBcXG4gIEBrZXlmcmFtZXMgcm90YXRlIHtcXG4gICBcXG4gICAgMCUge1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgICB9XFxuICBcXG4gICAgMTAwJSB7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgfVxcbiAgfVxcbiAgXFxuICAvKiAuc3dpdGNoOmhvdmVyICovLm1vb24gc3ZnIHtcXG4gICAgYW5pbWF0aW9uOiB0aWx0IDVzIGxpbmVhciBpbmZpbml0ZTtcXG4gIH1cXG4gIFxcbiAgQGtleWZyYW1lcyB0aWx0IHtcXG4gICBcXG4gICAgMCUge1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB9XFxuICBcXG4gICAgMjUlIHtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xcbiAgICB9XFxuICBcXG4gICAgNzUlIHtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XFxuICAgIH1cXG4gIFxcbiAgICAxMDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgfVxcbiAgfVxcbiAgXFxuICAuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgzMTUzO1xcbiAgfVxcbiAgXFxuICAuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjMTgzMTUzO1xcbiAgfVxcbiAgXFxuICAuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpO1xcbiAgfVxcblxcbiNPcGVuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDIwcHg7XFxuICAgIGxlZnQ6IDIwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNPcGVuOmNoZWNrZWQgfiAjc2lkZWJhck1lbnV7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIGhlaWdodDogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxufVxcblxcbi53cmFwcGVyLnNlY29uZCxcXG4ud3JhcHBlci50aGlyZCB7XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG59XFxuXFxuI09wZW46Y2hlY2tlZH4uc2lkZWJhci1pY29uPi53cmFwcGVyLnNlY29uZCB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbiNPcGVuOmNoZWNrZWR+LnNpZGViYXItaWNvbj4ud3JhcHBlci5maXJzdCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxuICAgIG1hcmdpbi10b3A6IDlweDtcXG59XFxuXFxuI09wZW46Y2hlY2tlZH4uc2lkZWJhci1pY29uPi53cmFwcGVyLnRoaXJkIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTMxNWRlZyk7XFxuICAgIG1hcmdpbi10b3A6IC05cHg7XFxufVxcblxcbi5ibHVyIHtcXG4gICAgZmlsdGVyOiBibHVyKDVweCk7XFxufVxcblxcbi5zaWRlYmFyLWljb257XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zaWRlYmFyLWl0ZW0tYWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1saWdodCk7XFxufVxcblxcbi8qTWVkaWEgUXVlcmllcyovXFxuXFxuLyogU21hcnRwaG9uZXMgKHBvcnRyYWl0IGFuZCBsYW5kc2NhcGUpICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAuY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuICAgIC5zaWRlYmFye1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogMTk7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDYwdnc7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAwcHgpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XFxuICAgIH1cXG4gICAgLnNpZGViYXItaWNvbntcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDIycHg7XFxuICAgICAgICBoZWlnaHQ6IDIycHg7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB6LWluZGV4OiAyMDtcXG4gICAgICAgIHRvcDogMjBweDtcXG4gICAgICAgIGxlZnQ6IDIwcHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAgLm1haW57XFxuICAgICAgICBwYWRkaW5nOiA1MHB4IDIwcHggMjBweCAyMHB4O1xcbiAgICB9XFxuICB9XFxuICBcXG4gIC8qIFNtYXJ0cGhvbmVzIChwb3J0cmFpdCkgKi9cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gICAgLyogWW91ciBDU1Mgc3R5bGVzIGZvciBwb3J0cmFpdC1vcmllbnRlZCBwaG9uZXMgZ28gaGVyZSAqL1xcbiAgfVxcbiAgXFxuICAvKiBTbWFydHBob25lcyAobGFuZHNjYXBlKSAqL1xcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIC8qIFlvdXIgQ1NTIHN0eWxlcyBmb3IgbGFuZHNjYXBlLW9yaWVudGVkIHBob25lcyBnbyBoZXJlICovXFxuICB9XFxuXFxuXFxuICAvKiBUYWJsZXRzIChwb3J0cmFpdCBhbmQgbGFuZHNjYXBlKSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcXG4gICAgLyogWW91ciBDU1Mgc3R5bGVzIGZvciB0YWJsZXRzIGdvIGhlcmUgKi9cXG4gIH1cXG4gIFxcbiAgLyogVGFibGV0cyAocG9ydHJhaXQpICovXFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXG4gICAgLyogWW91ciBDU1Mgc3R5bGVzIGZvciBwb3J0cmFpdC1vcmllbnRlZCB0YWJsZXRzIGdvIGhlcmUgKi9cXG4gIH1cXG4gIFxcbiAgLyogVGFibGV0cyAobGFuZHNjYXBlKSAqL1xcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xcbiAgICAvKiBZb3VyIENTUyBzdHlsZXMgZm9yIGxhbmRzY2FwZS1vcmllbnRlZCB0YWJsZXRzIGdvIGhlcmUgKi9cXG4gIH1cXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlU2lkZWJhcigpIHtcbiAgICBjb25zdCBzaWRlYmFyVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ09wZW4nKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5TZWN0aW9uJyk7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlclNlY3Rpb24nKTtcblxuICAgIHNpZGViYXJUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc2lkZWJhclRvZ2dsZS5jaGVja2VkKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ2JsdXInKTtcbiAgICAgICAgICAgICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnYmx1cicpO1xuICAgICAgICAgICAgfSwgMTU1KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnYmx1cicpO1xuICAgICAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2JsdXInKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBoYW5kbGVTaWRlYmFyIGZyb20gJy4vc2lkZWJhcidcblxuaGFuZGxlU2lkZWJhcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==