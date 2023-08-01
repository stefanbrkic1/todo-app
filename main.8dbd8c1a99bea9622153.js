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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/TT Interphases Pro Trial Bold.ttf */ "./src/fonts/TT Interphases Pro Trial Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/TT Interphases Pro Trial DemiBold.ttf */ "./src/fonts/TT Interphases Pro Trial DemiBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/rename.svg */ "./src/img/rename.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/rename-hover.svg */ "./src/img/rename-hover.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/delete.svg */ "./src/img/delete.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/delete-hover.svg */ "./src/img/delete-hover.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
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

.body-container{
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
    padding: 30px 70px 0px 70px;
}

.footer{
    grid-area: 12 / 2 / -1 / -1;
    background-color: var(--background-light);
}

.sidebar-list{
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-bottom: 23px;
}

.projects-sidebar-list{
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-bottom: 5px;
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
}

.sidebar-add-project{
  display: flex;
  gap: 7px;
  align-items: center;
  box-sizing: border-box;
  padding: 5px 5px 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}

.sidebar-add-project:hover{
  background-color: var(--hover-light);
}

.sidebar-header{
    font-size: 21rem;
    padding-bottom: 10px;
    color: var(--text-light);
    font-family: 'TTBold';
    display: flex;
    justify-content: space-between;
    align-items: center;
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

.flex{
    display: flex;
    align-items: center;
    gap: 7px;
}

.sidebar-project{
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 5px 5px 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    justify-content: space-between;
}

.sidebar-project:hover{
    background-color: var(--hover-light);
}

.sidebar-project:hover .project-name-input{
  background-color: var(--hover-light);
}

.sidebar-project-active{
    background-color: var(--hover-light);
}

.sidebar-project:hover .project-tools{
    margin-left: 10px;
    display: block;
    display: flex;
    align-items: center;
    gap: 8px;
}

.smooth-transition{
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
  
  .project-tools{
   display: none;
  }

  .project-tools-active{
    display: block;
    display: flex;
    align-items: center;
    gap: 8px;
  }

.project-name-input{
  appearance: none;
  border: none;
  outline: none;
  font-family: 'TTSemiBold';
  font-size: 15rem;
  max-width: 150px;
  background-color: transparent;
  color: var(--text-light);
  cursor: pointer;
}

.tasks-container{
  display: grid;
  grid-template-rows: 1fr 10fr;
  height: 100%;
}

.home-heading{
  font-size: 35rem;
  font-family: 'TTBold';
  display: flex;
  align-items: center;
  gap: 8px;
}

.add-task-btn{
  display: flex;
  align-items: center;
  gap: 7px;
  width: 100%;
  box-sizing: border-box;
  padding: 8px 0px 8px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.add-task-btn:hover{
background-color: var(--hover-light);
}

.modal{
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

.modal.active{
  transform: translate(-50%, -50%) scale(1);
}

.modal-header{
  box-sizing: border-box;
  padding: 10px 15px;
  border-bottom: 1px solid black;
  font-size: 22rem;
  color: var(--text-light);
  display: flex;
  gap: 10px;
  align-items: baseline;
}

.modal-alert{
  font-size: 16rem;
  color: var(--warning-light);
  box-sizing: border-box;
  padding: 7px 0px 5px 0px;
}

.modal-header-rename{
  box-sizing: border-box;
  padding: 10px 15px;
  border-bottom: 1px solid black;
  font-size: 22rem;
  color: var(--text-light);
  display: flex;
  gap: 10px;
  align-items: center;
}

.modal-title{
  font-family: 'TTBold';
}

.modal-body{
  box-sizing: border-box;
  padding: 25px;
}

#overlay{
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

#overlay.active{
  opacity: 1;
  pointer-events: all;
}

.add-project-input{
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

.project-modal-buttons{
  display: flex;
  height: 40px;
  padding-top: 7px;
  gap: 12px;
}

.add-project-buttons{
  flex: 1;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: var(--text-dark);
  font-family: 'TTBold';
  font-size: 18rem;
}

.add-btn{
  background-color: var(--secondary-color-light);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.close-btn{
  background-color: var(--tertiary-color-light);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.add-btn:hover{
    background-color: #01a17c;
}

.close-btn:hover{
    background-color: #ff3916;
}

.btn-rename{
  border: none;
  outline: none;
  background-color: transparent;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-size: contain;
  background-repeat: no-repeat;
  padding: 12px;
  cursor: pointer;
}

.btn-rename:hover{
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

.btn-delete{
  border: none;
  outline: none;
  background-color: transparent;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  background-size: contain;
  background-repeat: no-repeat;
  padding: 12px;
  cursor: pointer;
}

.btn-delete:hover{
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
}

#deleteQuestion{
  font-size: 18rem;
  padding-bottom: 10px;
  text-align: center;
  color: var(--text-light);
}

/*Media Queries*/

/* Smartphones (portrait and landscape) */
@media only screen and (max-width: 767px) {
    .body-container{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    .sidebar{
        position: absolute;
        z-index: 10;
        height: 100%;
        width: 70vw;
        padding-top: 60px;
        transform: translateX(-500px);
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
        padding: 65px 20px 0px 20px;
    }
    #Open:checked~#sidebarMenu {
        transform: translateX(0px);
        transition: transform 300ms ease-in-out;
    }
    .btn-delete, .btn-rename{
      display: none;
    }
    .modal-body{
      padding: 17px;
    }
    .modal-header{
      font-size: 18rem;
    }
    .add-project-input{
      font-size: 15rem;
    }
    .add-project-buttons{
      font-size: 15rem;
    }
    .modal-title{
      font-size: 20rem;
    }
    #oldName{
      font-size: 20rem;
    }
    #deleteProjectName{
      font-size: 20rem;
    }
    .modal-alert{
      font-size: 14rem;
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
  `, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'TTBold';\n  src: url(./fonts/TT\\ Interphases\\ Pro\\ Trial\\ Bold.ttf);\n}\n@font-face {\n  font-family: 'TTSemiBold';\n  src: url(./fonts/TT\\ Interphases\\ Pro\\ Trial\\ DemiBold.ttf);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    font-size: 6.25%;\n}\n\nbody {\n    font-size: 16rem;\n    font-family: 'TTSemiBold';\n    height: 100%;\n    overflow: hidden;\n}\n\n:root {\n    --primary-color-light: #126fb5;\n    --secondary-color-light: #10a885;\n    --tertiary-color-light: #ff5436;\n\n    --primary-color-dark: #4ecbfb;\n    --secondary-color-dark: #74ffe0;\n    --tertiary-color-dark: #fe8975;\n\n    --background-light: #ffffff;\n    --secondary-background-light: #fafafa;\n    --background-dark: #212844;\n    --secondary-background-dark: #f4f5f7;\n\n    --hover-light: #dde0e4;\n\n    --text-light: #303336;\n    --text-dark: #ffffff;\n\n    --warning-light: #ff5436;\n    --warning-dark: #FFF200;\n\n    --orange-color: #ff9900;\n    --yellow-color: #ffc300;\n}\n\n.body-container{\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: minmax(305px, 1fr) repeat(4, 1fr) ;\n    grid-template-rows: repeat(12, 1fr);\n}\n\n.sidebar{\n    background-color: var(--secondary-background-light);\n    grid-area: 1 / 1 / -1 / 2;\n    box-sizing: border-box;\n    padding: 20px;\n}\n\n.main{\n    background-color: var(--background-light);\n    grid-area: 1 / 2 / 12 / -1;\n    box-sizing: border-box;\n    padding: 30px 70px 0px 70px;\n}\n\n.footer{\n    grid-area: 12 / 2 / -1 / -1;\n    background-color: var(--background-light);\n}\n\n.sidebar-list{\n    list-style-type: none;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    padding-bottom: 23px;\n}\n\n.projects-sidebar-list{\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding-bottom: 5px;\n}\n\n.sidebar-item{\n    display: flex;\n    gap: 7px;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 5px 5px 5px 10px;\n    cursor: pointer;\n    border-radius: 5px;\n}\n\n.sidebar-item:hover{\n    background-color: var(--hover-light);\n}\n\n.sidebar-items{\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    height: 100%;\n    color: var(--text-light);\n    font-size: 15rem;\n}\n\n.sidebar-add-project{\n  display: flex;\n  gap: 7px;\n  align-items: center;\n  box-sizing: border-box;\n  padding: 5px 5px 5px 10px;\n  cursor: pointer;\n  border-radius: 5px;\n}\n\n.sidebar-add-project:hover{\n  background-color: var(--hover-light);\n}\n\n.sidebar-header{\n    font-size: 21rem;\n    padding-bottom: 10px;\n    color: var(--text-light);\n    font-family: 'TTBold';\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.sidebar-bottom{\n    align-self: flex-end;\n}\n\n.settings-item{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    box-sizing: border-box;\n    padding: 5px 5px 5px 10px;\n}\n\n.switch {\n  /* switch */\n  --switch-width: 46px;\n  --switch-height: 24px;\n  --switch-bg: rgb(48, 51, 54);\n  --switch-checked-bg: rgb(19, 197, 156);\n  --switch-offset: calc((var(--switch-height) - var(--circle-diameter)) / 2);\n  --switch-transition: all .2s cubic-bezier(0.27, 0.2, 0.25, 1.51);\n  /* circle */\n  --circle-diameter: 18px;\n  --circle-bg: #fff;\n  --circle-shadow: 1px 1px 2px rgba(146, 146, 146, 0.45);\n  --circle-checked-shadow: -1px 1px 2px rgba(163, 163, 163, 0.45);\n  --circle-transition: var(--switch-transition);\n  /* icon */\n  --icon-transition: all .2s cubic-bezier(0.27, 0.2, 0.25, 1.51);\n  --icon-cross-color: var(--switch-bg);\n  --icon-cross-size: 6px;\n  --icon-checkmark-color: var(--switch-checked-bg);\n  --icon-checkmark-size: 10px;\n  /* effect line */\n  --effect-width: calc(var(--circle-diameter) / 2);\n  --effect-height: calc(var(--effect-width) / 2 - 1px);\n  --effect-bg: var(--circle-bg);\n  --effect-border-radius: 1px;\n  --effect-transition: all .2s ease-in-out;\n}\n\n.switch input {\n  display: none;\n}\n\n.switch {\n  display: inline-block;\n}\n\n.switch svg {\n  -webkit-transition: var(--icon-transition);\n  -o-transition: var(--icon-transition);\n  transition: var(--icon-transition);\n  position: absolute;\n  height: auto;\n}\n\n.switch .checkmark {\n  width: var(--icon-checkmark-size);\n  color: var(--icon-checkmark-color);\n  -webkit-transform: scale(0);\n  -ms-transform: scale(0);\n  transform: scale(0);\n}\n\n.switch .cross {\n  width: var(--icon-cross-size);\n  color: var(--icon-cross-color);\n}\n\n.slider {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  width: var(--switch-width);\n  height: var(--switch-height);\n  background: var(--switch-bg);\n  border-radius: 999px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  position: relative;\n  -webkit-transition: var(--switch-transition);\n  -o-transition: var(--switch-transition);\n  transition: var(--switch-transition);\n  cursor: pointer;\n}\n\n.circle {\n  width: var(--circle-diameter);\n  height: var(--circle-diameter);\n  background: var(--circle-bg);\n  border-radius: inherit;\n  -webkit-box-shadow: var(--circle-shadow);\n  box-shadow: var(--circle-shadow);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-transition: var(--circle-transition);\n  -o-transition: var(--circle-transition);\n  transition: var(--circle-transition);\n  z-index: 1;\n  position: absolute;\n  left: var(--switch-offset);\n}\n\n.slider::before {\n  content: \"\";\n  position: absolute;\n  width: var(--effect-width);\n  height: var(--effect-height);\n  left: calc(var(--switch-offset) + (var(--effect-width) / 2));\n  background: var(--effect-bg);\n  border-radius: var(--effect-border-radius);\n  -webkit-transition: var(--effect-transition);\n  -o-transition: var(--effect-transition);\n  transition: var(--effect-transition);\n}\n\n/* actions */\n\n.switch input:checked+.slider {\n  background: var(--switch-checked-bg);\n}\n\n.switch input:checked+.slider .checkmark {\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  transform: scale(1);\n}\n\n.switch input:checked+.slider .cross {\n  -webkit-transform: scale(0);\n  -ms-transform: scale(0);\n  transform: scale(0);\n}\n\n.switch input:checked+.slider::before {\n  left: calc(100% - var(--effect-width) - (var(--effect-width) / 2) - var(--switch-offset));\n}\n\n.switch input:checked+.slider .circle {\n  left: calc(100% - var(--circle-diameter) - var(--switch-offset));\n  -webkit-box-shadow: var(--circle-checked-shadow);\n  box-shadow: var(--circle-checked-shadow);\n}\n\n#Open {\n    position: absolute;\n    top: 20px;\n    left: 20px;\n    display: none;\n}\n\n#Open:checked ~ #sidebarMenu{\n    transform: translateX(0px);\n}\n\n.wrapper {\n    height: 3px;\n    background-color: var(--text-light);\n    transition: all 0.5s;\n}\n\n.wrapper.second,\n.wrapper.third {\n    margin-top: 3px;\n}\n\n#Open:checked~.sidebar-icon>.wrapper.second {\n    opacity: 0;\n}\n\n#Open:checked~.sidebar-icon>.wrapper.first {\n    transform: rotate(315deg);\n    margin-top: 9px;\n}\n\n#Open:checked~.sidebar-icon>.wrapper.third {\n    transform: rotate(-315deg);\n    margin-top: -9px;\n}\n\n.blur {\n    filter: blur(5px);\n}\n\n.sidebar-icon{\n    display: none;\n}\n\n.sidebar-item-active{\n    background-color: var(--hover-light);\n}\n\n.flex{\n    display: flex;\n    align-items: center;\n    gap: 7px;\n}\n\n.sidebar-project{\n    display: flex;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 5px 5px 5px 10px;\n    cursor: pointer;\n    border-radius: 5px;\n    justify-content: space-between;\n}\n\n.sidebar-project:hover{\n    background-color: var(--hover-light);\n}\n\n.sidebar-project:hover .project-name-input{\n  background-color: var(--hover-light);\n}\n\n.sidebar-project-active{\n    background-color: var(--hover-light);\n}\n\n.sidebar-project:hover .project-tools{\n    margin-left: 10px;\n    display: block;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.smooth-transition{\n    transition: transform 300ms ease-in-out;\n}\n\n.menu-container {\n    position: relative;\n  }\n    \n.menu-options {\n    display: none;\n    position: absolute;\n    top: 25px;\n    right: 0;\n    background-color: var(--background-light);\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    list-style: none;\n  }\n  \n  .menu-options li {\n    padding: 10px 20px;\n    cursor: pointer;\n  }\n  \n  .menu-options li:hover {\n    background-color: var(--hover-light);\n  }\n  \n  .project-tools{\n   display: none;\n  }\n\n  .project-tools-active{\n    display: block;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n  }\n\n.project-name-input{\n  appearance: none;\n  border: none;\n  outline: none;\n  font-family: 'TTSemiBold';\n  font-size: 15rem;\n  max-width: 150px;\n  background-color: transparent;\n  color: var(--text-light);\n  cursor: pointer;\n}\n\n.tasks-container{\n  display: grid;\n  grid-template-rows: 1fr 10fr;\n  height: 100%;\n}\n\n.home-heading{\n  font-size: 35rem;\n  font-family: 'TTBold';\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.add-task-btn{\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 8px 0px 8px 15px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.add-task-btn:hover{\nbackground-color: var(--hover-light);\n}\n\n.modal{\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 200ms ease-in-out;\n  border-radius: 10px;\n  z-index: 999;\n  background-color: var(--background-light);\n  width: 600px;\n  max-width: 80%;\n}\n\n.modal.active{\n  transform: translate(-50%, -50%) scale(1);\n}\n\n.modal-header{\n  box-sizing: border-box;\n  padding: 10px 15px;\n  border-bottom: 1px solid black;\n  font-size: 22rem;\n  color: var(--text-light);\n  display: flex;\n  gap: 10px;\n  align-items: baseline;\n}\n\n.modal-alert{\n  font-size: 16rem;\n  color: var(--warning-light);\n  box-sizing: border-box;\n  padding: 7px 0px 5px 0px;\n}\n\n.modal-header-rename{\n  box-sizing: border-box;\n  padding: 10px 15px;\n  border-bottom: 1px solid black;\n  font-size: 22rem;\n  color: var(--text-light);\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.modal-title{\n  font-family: 'TTBold';\n}\n\n.modal-body{\n  box-sizing: border-box;\n  padding: 25px;\n}\n\n#overlay{\n  position: fixed;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, .5);\n  pointer-events: none;\n  transition: 200ms ease-in-out;\n  z-index: 15;\n}\n\n#overlay.active{\n  opacity: 1;\n  pointer-events: all;\n}\n\n.add-project-input{\n  width: 100%;\n  box-sizing: border-box;\n  padding: 12px 10px 12px 10px;\n  outline: none;\n  border: 1px solid var(--text-light);\n  border-radius: 5px;\n  font-family: 'TTSemiBold';\n  font-size: 16rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.project-modal-buttons{\n  display: flex;\n  height: 40px;\n  padding-top: 7px;\n  gap: 12px;\n}\n\n.add-project-buttons{\n  flex: 1;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  color: var(--text-dark);\n  font-family: 'TTBold';\n  font-size: 18rem;\n}\n\n.add-btn{\n  background-color: var(--secondary-color-light);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.close-btn{\n  background-color: var(--tertiary-color-light);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.add-btn:hover{\n    background-color: #01a17c;\n}\n\n.close-btn:hover{\n    background-color: #ff3916;\n}\n\n.btn-rename{\n  border: none;\n  outline: none;\n  background-color: transparent;\n  background-image: url(./img/rename.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n  padding: 12px;\n  cursor: pointer;\n}\n\n.btn-rename:hover{\n  background-image: url(./img/rename-hover.svg);\n}\n\n.btn-delete{\n  border: none;\n  outline: none;\n  background-color: transparent;\n  background-image: url(./img/delete.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n  padding: 12px;\n  cursor: pointer;\n}\n\n.btn-delete:hover{\n  background-image: url(./img/delete-hover.svg);\n}\n\n#deleteQuestion{\n  font-size: 18rem;\n  padding-bottom: 10px;\n  text-align: center;\n  color: var(--text-light);\n}\n\n/*Media Queries*/\n\n/* Smartphones (portrait and landscape) */\n@media only screen and (max-width: 767px) {\n    .body-container{\n        width: 100vw;\n        height: 100vh;\n        display: flex;\n        flex-direction: column;\n    }\n    .sidebar{\n        position: absolute;\n        z-index: 10;\n        height: 100%;\n        width: 70vw;\n        padding-top: 60px;\n        transform: translateX(-500px);\n    }\n    .sidebar-icon{\n        display: block;\n        width: 22px;\n        height: 22px;\n        position: absolute;\n        z-index: 20;\n        top: 20px;\n        left: 20px;\n        cursor: pointer;\n    }\n    .main{\n        padding: 65px 20px 0px 20px;\n    }\n    #Open:checked~#sidebarMenu {\n        transform: translateX(0px);\n        transition: transform 300ms ease-in-out;\n    }\n    .btn-delete, .btn-rename{\n      display: none;\n    }\n    .modal-body{\n      padding: 17px;\n    }\n    .modal-header{\n      font-size: 18rem;\n    }\n    .add-project-input{\n      font-size: 15rem;\n    }\n    .add-project-buttons{\n      font-size: 15rem;\n    }\n    .modal-title{\n      font-size: 20rem;\n    }\n    #oldName{\n      font-size: 20rem;\n    }\n    #deleteProjectName{\n      font-size: 20rem;\n    }\n    .modal-alert{\n      font-size: 14rem;\n    }\n  }\n  \n  /* Smartphones (portrait) */\n  @media only screen and (max-width: 480px) {\n    /* Your CSS styles for portrait-oriented phones go here */\n  }\n  \n  /* Smartphones (landscape) */\n  @media only screen and (min-width: 481px) and (max-width: 767px) {\n    /* Your CSS styles for landscape-oriented phones go here */\n  }\n\n\n  /* Tablets (portrait and landscape) */\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\n    /* Your CSS styles for tablets go here */\n  }\n  \n  /* Tablets (portrait) */\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    /* Your CSS styles for portrait-oriented tablets go here */\n  }\n  \n  /* Tablets (landscape) */\n  @media only screen and (min-width: 992px) and (max-width: 1023px) {\n    /* Your CSS styles for landscape-oriented tablets go here */\n  }\n  "],"sourceRoot":""}]);
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

/***/ "./src/alltasks.js":
/*!*************************!*\
  !*** ./src/alltasks.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadAllTasks)
/* harmony export */ });
/* harmony import */ var _img_alltasks48x48_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/alltasks48x48.svg */ "./src/img/alltasks48x48.svg");


function loadAllTasks() {
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')

    const svgAllTasks = new Image()
    svgAllTasks.src = _img_alltasks48x48_svg__WEBPACK_IMPORTED_MODULE_0__;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgAllTasks)

    currentTabName.textContent = 'All Tasks'
}

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActiveTabHandler: () => (/* binding */ ActiveTabHandler),
/* harmony export */   ModalHandler: () => (/* binding */ ModalHandler),
/* harmony export */   ProjectsHandler: () => (/* binding */ ProjectsHandler),
/* harmony export */   closeSidebarIfSmallScreen: () => (/* binding */ closeSidebarIfSmallScreen)
/* harmony export */ });
/* harmony import */ var _alltasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alltasks */ "./src/alltasks.js");
/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today */ "./src/today.js");
/* harmony import */ var _week__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./week */ "./src/week.js");
/* harmony import */ var _important__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./important */ "./src/important.js");
/* harmony import */ var _img_project_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/project.svg */ "./src/img/project.svg");






class ActiveTabHandler {
    constructor() {

    }

    handleTabsClick() {
        this.homeTabs = document.querySelectorAll('.sidebar-item');
        this.projectTabs = document.querySelectorAll('.sidebar-project');
        this.homeTabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
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

    openActiveTab(target){
        switch (target.id) {
            case 'tabAllTasks':
                (0,_alltasks__WEBPACK_IMPORTED_MODULE_0__["default"])();
                closeSidebarIfSmallScreen()
                break;
    
            case 'tabToday':
                (0,_today__WEBPACK_IMPORTED_MODULE_1__["default"])();
                closeSidebarIfSmallScreen()
                break;

            case 'tabThisWeek':
                (0,_week__WEBPACK_IMPORTED_MODULE_2__["default"])();
                closeSidebarIfSmallScreen()
                break;

            case 'tabImportant':
                (0,_important__WEBPACK_IMPORTED_MODULE_3__["default"])();
                closeSidebarIfSmallScreen()
                break;                
                
            default:
                break
        }
    }
}

class ModalHandler {
    constructor(){
        this.projectNameInput = document.getElementById('projectNameInput');
        this.projectRenameInput = document.getElementById('projectRenameInput')
        this.modalAlert = document.getElementById('modalAlert')
        this.modalAlertRename = document.getElementById('modalAlertRename')
        this.allInputs = document.getElementsByTagName('input')
        this.modalAddProject = document.getElementById('modal')
    }
    

    handleModals(){
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

    openModal(modal){
        if(modal == null)return
        modal.classList.add('active')
        overlay.classList.add('active')
    }

    closeModal(modal){
        this.projectNameInput.value = ''
        this.modalAlert.innerHTML = ''
        this.modalAlertRename.innerHTML = ''
        this.projectRenameInput.value = ''

        this.projectNameInput.blur();
        this.projectRenameInput.blur()

        if(modal == null)return
        modal.classList.remove('active')
        overlay.classList.remove('active')
    }


    changeModalPositionIfKeyboardOpened(){
        const inputsArray = Array.from(this.allInputs)
        const renameButtons = document.querySelector('.btn-rename')
        inputsArray.forEach(input => {
            input.addEventListener('focus', () => {
                const computedStyle = window.getComputedStyle(renameButtons);
                if(computedStyle.display === 'none'){
                    this.modalAddProject.style.top = '150px'
                }
            })
            input.addEventListener('blur', () => {
                    this.modalAddProject.style.top = '50%'
            })
        })
    }

    handleSubmit(){
        document.getElementById("addForm").addEventListener("submit", function(event) {
            event.preventDefault();
            this.projectNameInput.blur()
        });
        
        document.getElementById("renameForm").addEventListener("submit", function(event) {
            event.preventDefault();
            this.projectRenameInput.blur()
        });
        
        document.getElementById("deleteForm").addEventListener("submit", function(event) {
            event.preventDefault();
        });
    }
}

class ProjectsHandler{
    constructor(){
        
    }

    projectsContainer = document.getElementById('projectsContainer')

    createProjectHtml(project){
        // Create the <li> element with class "sidebar-project" and "tab"
        const liElement = document.createElement("li");
        liElement.classList.add("sidebar-project", "tab");
    
        // Create the first <div> element with class "flex"
        const divFlex1 = document.createElement("div");
        divFlex1.classList.add("flex");
    
        // Create the "project" SVG icon
        const svgProject = new Image();
        svgProject.src = _img_project_svg__WEBPACK_IMPORTED_MODULE_4__; 
    
        // Append the "project" icon to the first <div> element
        divFlex1.appendChild(svgProject);
    
        // Create the <input> element
        const inputElement = document.createElement("input");
        inputElement.value = project.name
        inputElement.setAttribute("type", "text");
        inputElement.classList.add("project-name-input");
        inputElement.setAttribute("disabled", "");
        divFlex1.appendChild(inputElement);
    
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
}

function closeSidebarIfSmallScreen(){
    const sidebar = document.getElementById('sidebarMenu')
    const closeSidebarButon = document.querySelector('.sidebar-icon')
    sidebar.classList.contains('active-sidebar') ? closeSidebarButon.click() : {} ;
}


/***/ }),

/***/ "./src/important.js":
/*!**************************!*\
  !*** ./src/important.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadImportantTasks)
/* harmony export */ });
/* harmony import */ var _img_important48x48_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/important48x48.svg */ "./src/img/important48x48.svg");


function loadImportantTasks() {
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')

    const svgImportant = new Image()
    svgImportant.src = _img_important48x48_svg__WEBPACK_IMPORTED_MODULE_0__;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgImportant)

    currentTabName.textContent = 'Important'
}

/***/ }),

/***/ "./src/project-loader.js":
/*!*******************************!*\
  !*** ./src/project-loader.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadActiveProject: () => (/* binding */ loadActiveProject)
/* harmony export */ });
/* harmony import */ var _img_project48x48_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/project48x48.svg */ "./src/img/project48x48.svg");


function loadActiveProject(currentProjectTab){
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')

    const svgProject = new Image()
    svgProject.src = _img_project48x48_svg__WEBPACK_IMPORTED_MODULE_0__;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgProject)

    currentTabName.textContent = `${currentProjectTab.name}`
}


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectEvent: () => (/* binding */ addProjectEvent),
/* harmony export */   addProjectToolsSubmitEvent: () => (/* binding */ addProjectToolsSubmitEvent),
/* harmony export */   allProjects: () => (/* binding */ allProjects),
/* harmony export */   loadProjects: () => (/* binding */ loadProjects)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _project_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-loader */ "./src/project-loader.js");




const modalHandler = new _dom__WEBPACK_IMPORTED_MODULE_0__.ModalHandler(); 
const projectsHandler = new _dom__WEBPACK_IMPORTED_MODULE_0__.ProjectsHandler();
const tabHandler = new _dom__WEBPACK_IMPORTED_MODULE_0__.ActiveTabHandler();
const projectsContainer = document.getElementById('projectsContainer')

class Project {
    constructor(name) {
        this.name = name
    }
}

let allProjects = [
    {
        name: 'ToDo',
    },
    {
        name: 'My Work',
    },
]

let currentProject = null;
let currentIndex = null

function loadProjects() {
    projectsContainer.innerHTML = ''
    allProjects.forEach(project => {
      projectsHandler.createProjectHtml(project);
    })
    tabHandler.handleTabsClick()
    handleProjectTabs(allProjects)
    addProjectToolsEvent()
    modalHandler.handleModals()
    modalHandler.changeModalPositionIfKeyboardOpened()
    if(currentIndex === null){

    }
    else{
        const projectTabs = document.querySelectorAll('.sidebar-project')
        projectTabs[currentIndex].classList.add('sidebar-item-active')
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

        if(newProjectName === ''){
            modalAlert.textContent = '(You must enter new project name)'
            projectNameInput.value = ''
            return
        }

        if (existingProject) {
            modalAlert.textContent = '(The project with this name already exists.)'
            projectNameInput.value = ''
            return;
        }

        if(allProjects.length === 5){  
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

        if(projectRenameInput.value === ''){
            modalAlertRename.textContent = '(You must enter new project name)'
            projectRenameInput.value = ''
            return
        }

        if(existingProject){
            modalAlertRename.textContent = '(The project with this name already exists)'
            projectRenameInput.value = ''
            return
        }

        if (currentProject) {            
            currentProject.name = projectRenameInput.value;
            loadProjects();
            projectTabs[currentIndex].click()
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
            currentIndex = null
            allProjects.splice(currentIndex, 1)
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

function addProjectToolsEvent(){
    const renameButtons = document.querySelectorAll('.btn-rename');
    const deleteButtons = document.querySelectorAll('.btn-delete');

    renameButtons.forEach((button, index) => {
        button.addEventListener('click', () => { 
           currentProject = allProjects[index];
           currentIndex = index;
           const oldName = document.getElementById('oldName');
           oldName.textContent = `(${currentProject.name})`
        });
    });


    deleteButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentProject = allProjects[index];
            currentIndex = index;
            const deleteProjectName = document.getElementById('deleteProjectName')
            deleteProjectName.textContent = `(${currentProject.name})`
        });
    });
}

let currentProjectTab = null

function handleProjectTabs(allProjects){
    const projectTabs = document.querySelectorAll('.sidebar-project')
    const tabs = document.querySelectorAll('.tab')
    projectTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            currentIndex = index;
                tabs.forEach(tab => {
                    tab.classList.remove('sidebar-item-active')
                })
                tab.classList.add('sidebar-item-active')
                currentProjectTab = allProjects[index]
                ;(0,_project_loader__WEBPACK_IMPORTED_MODULE_1__.loadActiveProject)(currentProjectTab)
                ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.closeSidebarIfSmallScreen)()
        })
    })
}




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
const sidebarToggle = document.getElementById('Open');
const sidebar = document.getElementById('sidebarMenu')
const main = document.getElementById('mainSection');
const footer = document.getElementById('footerSection');

function handleSidebar() {
    sidebarToggle.addEventListener('change', function () {
        if (sidebarToggle.checked) {
            setTimeout(() => {
                main.classList.add('blur');
                footer.classList.add('blur');
                sidebar.classList.add('active-sidebar')
            }, 220);
            handleTransition()
        }
        else {
            main.classList.remove('blur');
            footer.classList.remove('blur');
            sidebar.classList.remove('active-sidebar')
            handleTransition()
        }
    });
}

function handleTransition(){
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

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadTodayTasks)
/* harmony export */ });
/* harmony import */ var _img_today48x48_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/today48x48.svg */ "./src/img/today48x48.svg");


function loadTodayTasks() {
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')

    const svgToday = new Image()
    svgToday.src = _img_today48x48_svg__WEBPACK_IMPORTED_MODULE_0__;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgToday)

    currentTabName.textContent = 'Today'
}

/***/ }),

/***/ "./src/week.js":
/*!*********************!*\
  !*** ./src/week.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadWeekTasks)
/* harmony export */ });
/* harmony import */ var _img_thisweek48x48_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/thisweek48x48.svg */ "./src/img/thisweek48x48.svg");


function loadWeekTasks() {
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')

    const svgWeek = new Image()
    svgWeek.src = _img_thisweek48x48_svg__WEBPACK_IMPORTED_MODULE_0__;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgWeek)

    currentTabName.textContent = 'This Week'
}

/***/ }),

/***/ "./src/fonts/TT Interphases Pro Trial Bold.ttf":
/*!*****************************************************!*\
  !*** ./src/fonts/TT Interphases Pro Trial Bold.ttf ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b64bd9dc77f4ed8c4148.ttf";

/***/ }),

/***/ "./src/fonts/TT Interphases Pro Trial DemiBold.ttf":
/*!*********************************************************!*\
  !*** ./src/fonts/TT Interphases Pro Trial DemiBold.ttf ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "334428a4b9bfb949cf25.ttf";

/***/ }),

/***/ "./src/img/alltasks48x48.svg":
/*!***********************************!*\
  !*** ./src/img/alltasks48x48.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24ab2299ffc3694ee7c2.svg";

/***/ }),

/***/ "./src/img/delete-hover.svg":
/*!**********************************!*\
  !*** ./src/img/delete-hover.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5aa88a81ccdb660ffae3.svg";

/***/ }),

/***/ "./src/img/delete.svg":
/*!****************************!*\
  !*** ./src/img/delete.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f95354aed431e56ccc38.svg";

/***/ }),

/***/ "./src/img/important48x48.svg":
/*!************************************!*\
  !*** ./src/img/important48x48.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "445a6efd756f6e8c8af3.svg";

/***/ }),

/***/ "./src/img/project.svg":
/*!*****************************!*\
  !*** ./src/img/project.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cc32b781f5de4ce023f.svg";

/***/ }),

/***/ "./src/img/project48x48.svg":
/*!**********************************!*\
  !*** ./src/img/project48x48.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4735eabadb866f2de38b.svg";

/***/ }),

/***/ "./src/img/rename-hover.svg":
/*!**********************************!*\
  !*** ./src/img/rename-hover.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f04fc12281a9e452d39.svg";

/***/ }),

/***/ "./src/img/rename.svg":
/*!****************************!*\
  !*** ./src/img/rename.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "160edcbb4ac3ccf9267f.svg";

/***/ }),

/***/ "./src/img/thisweek48x48.svg":
/*!***********************************!*\
  !*** ./src/img/thisweek48x48.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "44d2987bf7ce3442f9d1.svg";

/***/ }),

/***/ "./src/img/today48x48.svg":
/*!********************************!*\
  !*** ./src/img/today48x48.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57dc0e5e5567ed79e44e.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44ZGJkOGMxYTk5YmVhOTYyMjE1My5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtKQUE0RDtBQUN4Ryw0Q0FBNEMsdUtBQWdFO0FBQzVHLDRDQUE0Qyw2R0FBbUM7QUFDL0UsNENBQTRDLHlIQUF5QztBQUNyRiw0Q0FBNEMsNkdBQW1DO0FBQy9FLDRDQUE0Qyx5SEFBeUM7QUFDckYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGdGQUFnRixZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxjQUFjLGNBQWMsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxXQUFXLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxhQUFhLGFBQWEsTUFBTSxL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QTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUNpQjtBQUNDO0FBQ0Y7QUFDbUQ7O0FBRXZGO0FBQ0EsNkJBQTZCLDhDQUFZOztBQUV6QyxJQUFJLG9EQUFhO0FBQ2pCLElBQUkscURBQVk7QUFDaEIsSUFBSSx1REFBWTtBQUNoQixJQUFJLDBEQUFlO0FBQ25CLElBQUkscUVBQTBCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvYWxsdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2ltcG9ydGFudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9wcm9qZWN0LWxvYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3RvZGF5LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3dlZWsuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9UVCBJbnRlcnBoYXNlcyBQcm8gVHJpYWwgQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1RUIEludGVycGhhc2VzIFBybyBUcmlhbCBEZW1pQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9yZW5hbWUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWcvcmVuYW1lLWhvdmVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vaW1nL2RlbGV0ZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9kZWxldGUtaG92ZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1RUQm9sZCc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnVFRTZW1pQm9sZCc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuaHRtbCB7XG4gICAgZm9udC1zaXplOiA2LjI1JTtcbn1cblxuYm9keSB7XG4gICAgZm9udC1zaXplOiAxNnJlbTtcbiAgICBmb250LWZhbWlseTogJ1RUU2VtaUJvbGQnO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG46cm9vdCB7XG4gICAgLS1wcmltYXJ5LWNvbG9yLWxpZ2h0OiAjMTI2ZmI1O1xuICAgIC0tc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0OiAjMTBhODg1O1xuICAgIC0tdGVydGlhcnktY29sb3ItbGlnaHQ6ICNmZjU0MzY7XG5cbiAgICAtLXByaW1hcnktY29sb3ItZGFyazogIzRlY2JmYjtcbiAgICAtLXNlY29uZGFyeS1jb2xvci1kYXJrOiAjNzRmZmUwO1xuICAgIC0tdGVydGlhcnktY29sb3ItZGFyazogI2ZlODk3NTtcblxuICAgIC0tYmFja2dyb3VuZC1saWdodDogI2ZmZmZmZjtcbiAgICAtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWxpZ2h0OiAjZmFmYWZhO1xuICAgIC0tYmFja2dyb3VuZC1kYXJrOiAjMjEyODQ0O1xuICAgIC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtZGFyazogI2Y0ZjVmNztcblxuICAgIC0taG92ZXItbGlnaHQ6ICNkZGUwZTQ7XG5cbiAgICAtLXRleHQtbGlnaHQ6ICMzMDMzMzY7XG4gICAgLS10ZXh0LWRhcms6ICNmZmZmZmY7XG5cbiAgICAtLXdhcm5pbmctbGlnaHQ6ICNmZjU0MzY7XG4gICAgLS13YXJuaW5nLWRhcms6ICNGRkYyMDA7XG5cbiAgICAtLW9yYW5nZS1jb2xvcjogI2ZmOTkwMDtcbiAgICAtLXllbGxvdy1jb2xvcjogI2ZmYzMwMDtcbn1cblxuLmJvZHktY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMzA1cHgsIDFmcikgcmVwZWF0KDQsIDFmcikgO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEyLCAxZnIpO1xufVxuXG4uc2lkZWJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZC1saWdodCk7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIC0xIC8gMjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5tYWlue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAxMiAvIC0xO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMzBweCA3MHB4IDBweCA3MHB4O1xufVxuXG4uZm9vdGVye1xuICAgIGdyaWQtYXJlYTogMTIgLyAyIC8gLTEgLyAtMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcbn1cblxuLnNpZGViYXItbGlzdHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyM3B4O1xufVxuXG4ucHJvamVjdHMtc2lkZWJhci1saXN0e1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uc2lkZWJhci1pdGVte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA3cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNpZGViYXItaXRlbTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1saWdodCk7XG59XG5cbi5zaWRlYmFyLWl0ZW1ze1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgZm9udC1zaXplOiAxNXJlbTtcbn1cblxuLnNpZGViYXItYWRkLXByb2plY3R7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogN3B4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNpZGViYXItYWRkLXByb2plY3Q6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcbn1cblxuLnNpZGViYXItaGVhZGVye1xuICAgIGZvbnQtc2l6ZTogMjFyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICAgIGZvbnQtZmFtaWx5OiAnVFRCb2xkJztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2lkZWJhci1ib3R0b217XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbi5zZXR0aW5ncy1pdGVte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xufVxuXG4uc3dpdGNoIHtcbiAgLyogc3dpdGNoICovXG4gIC0tc3dpdGNoLXdpZHRoOiA0NnB4O1xuICAtLXN3aXRjaC1oZWlnaHQ6IDI0cHg7XG4gIC0tc3dpdGNoLWJnOiByZ2IoNDgsIDUxLCA1NCk7XG4gIC0tc3dpdGNoLWNoZWNrZWQtYmc6IHJnYigxOSwgMTk3LCAxNTYpO1xuICAtLXN3aXRjaC1vZmZzZXQ6IGNhbGMoKHZhcigtLXN3aXRjaC1oZWlnaHQpIC0gdmFyKC0tY2lyY2xlLWRpYW1ldGVyKSkgLyAyKTtcbiAgLS1zd2l0Y2gtdHJhbnNpdGlvbjogYWxsIC4ycyBjdWJpYy1iZXppZXIoMC4yNywgMC4yLCAwLjI1LCAxLjUxKTtcbiAgLyogY2lyY2xlICovXG4gIC0tY2lyY2xlLWRpYW1ldGVyOiAxOHB4O1xuICAtLWNpcmNsZS1iZzogI2ZmZjtcbiAgLS1jaXJjbGUtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDE0NiwgMTQ2LCAxNDYsIDAuNDUpO1xuICAtLWNpcmNsZS1jaGVja2VkLXNoYWRvdzogLTFweCAxcHggMnB4IHJnYmEoMTYzLCAxNjMsIDE2MywgMC40NSk7XG4gIC0tY2lyY2xlLXRyYW5zaXRpb246IHZhcigtLXN3aXRjaC10cmFuc2l0aW9uKTtcbiAgLyogaWNvbiAqL1xuICAtLWljb24tdHJhbnNpdGlvbjogYWxsIC4ycyBjdWJpYy1iZXppZXIoMC4yNywgMC4yLCAwLjI1LCAxLjUxKTtcbiAgLS1pY29uLWNyb3NzLWNvbG9yOiB2YXIoLS1zd2l0Y2gtYmcpO1xuICAtLWljb24tY3Jvc3Mtc2l6ZTogNnB4O1xuICAtLWljb24tY2hlY2ttYXJrLWNvbG9yOiB2YXIoLS1zd2l0Y2gtY2hlY2tlZC1iZyk7XG4gIC0taWNvbi1jaGVja21hcmstc2l6ZTogMTBweDtcbiAgLyogZWZmZWN0IGxpbmUgKi9cbiAgLS1lZmZlY3Qtd2lkdGg6IGNhbGModmFyKC0tY2lyY2xlLWRpYW1ldGVyKSAvIDIpO1xuICAtLWVmZmVjdC1oZWlnaHQ6IGNhbGModmFyKC0tZWZmZWN0LXdpZHRoKSAvIDIgLSAxcHgpO1xuICAtLWVmZmVjdC1iZzogdmFyKC0tY2lyY2xlLWJnKTtcbiAgLS1lZmZlY3QtYm9yZGVyLXJhZGl1czogMXB4O1xuICAtLWVmZmVjdC10cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uc3dpdGNoIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnN3aXRjaCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnN3aXRjaCBzdmcge1xuICAtd2Via2l0LXRyYW5zaXRpb246IHZhcigtLWljb24tdHJhbnNpdGlvbik7XG4gIC1vLXRyYW5zaXRpb246IHZhcigtLWljb24tdHJhbnNpdGlvbik7XG4gIHRyYW5zaXRpb246IHZhcigtLWljb24tdHJhbnNpdGlvbik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uc3dpdGNoIC5jaGVja21hcmsge1xuICB3aWR0aDogdmFyKC0taWNvbi1jaGVja21hcmstc2l6ZSk7XG4gIGNvbG9yOiB2YXIoLS1pY29uLWNoZWNrbWFyay1jb2xvcik7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbi5zd2l0Y2ggLmNyb3NzIHtcbiAgd2lkdGg6IHZhcigtLWljb24tY3Jvc3Mtc2l6ZSk7XG4gIGNvbG9yOiB2YXIoLS1pY29uLWNyb3NzLWNvbG9yKTtcbn1cblxuLnNsaWRlciB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IHZhcigtLXN3aXRjaC13aWR0aCk7XG4gIGhlaWdodDogdmFyKC0tc3dpdGNoLWhlaWdodCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN3aXRjaC1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB2YXIoLS1zd2l0Y2gtdHJhbnNpdGlvbik7XG4gIC1vLXRyYW5zaXRpb246IHZhcigtLXN3aXRjaC10cmFuc2l0aW9uKTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tc3dpdGNoLXRyYW5zaXRpb24pO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaXJjbGUge1xuICB3aWR0aDogdmFyKC0tY2lyY2xlLWRpYW1ldGVyKTtcbiAgaGVpZ2h0OiB2YXIoLS1jaXJjbGUtZGlhbWV0ZXIpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jaXJjbGUtYmcpO1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IHZhcigtLWNpcmNsZS1zaGFkb3cpO1xuICBib3gtc2hhZG93OiB2YXIoLS1jaXJjbGUtc2hhZG93KTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdmFyKC0tY2lyY2xlLXRyYW5zaXRpb24pO1xuICAtby10cmFuc2l0aW9uOiB2YXIoLS1jaXJjbGUtdHJhbnNpdGlvbik7XG4gIHRyYW5zaXRpb246IHZhcigtLWNpcmNsZS10cmFuc2l0aW9uKTtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiB2YXIoLS1zd2l0Y2gtb2Zmc2V0KTtcbn1cblxuLnNsaWRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogdmFyKC0tZWZmZWN0LXdpZHRoKTtcbiAgaGVpZ2h0OiB2YXIoLS1lZmZlY3QtaGVpZ2h0KTtcbiAgbGVmdDogY2FsYyh2YXIoLS1zd2l0Y2gtb2Zmc2V0KSArICh2YXIoLS1lZmZlY3Qtd2lkdGgpIC8gMikpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1lZmZlY3QtYmcpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1lZmZlY3QtYm9yZGVyLXJhZGl1cyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdmFyKC0tZWZmZWN0LXRyYW5zaXRpb24pO1xuICAtby10cmFuc2l0aW9uOiB2YXIoLS1lZmZlY3QtdHJhbnNpdGlvbik7XG4gIHRyYW5zaXRpb246IHZhcigtLWVmZmVjdC10cmFuc2l0aW9uKTtcbn1cblxuLyogYWN0aW9ucyAqL1xuXG4uc3dpdGNoIGlucHV0OmNoZWNrZWQrLnNsaWRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN3aXRjaC1jaGVja2VkLWJnKTtcbn1cblxuLnN3aXRjaCBpbnB1dDpjaGVja2VkKy5zbGlkZXIgLmNoZWNrbWFyayB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCsuc2xpZGVyIC5jcm9zcyB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbi5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCsuc2xpZGVyOjpiZWZvcmUge1xuICBsZWZ0OiBjYWxjKDEwMCUgLSB2YXIoLS1lZmZlY3Qtd2lkdGgpIC0gKHZhcigtLWVmZmVjdC13aWR0aCkgLyAyKSAtIHZhcigtLXN3aXRjaC1vZmZzZXQpKTtcbn1cblxuLnN3aXRjaCBpbnB1dDpjaGVja2VkKy5zbGlkZXIgLmNpcmNsZSB7XG4gIGxlZnQ6IGNhbGMoMTAwJSAtIHZhcigtLWNpcmNsZS1kaWFtZXRlcikgLSB2YXIoLS1zd2l0Y2gtb2Zmc2V0KSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogdmFyKC0tY2lyY2xlLWNoZWNrZWQtc2hhZG93KTtcbiAgYm94LXNoYWRvdzogdmFyKC0tY2lyY2xlLWNoZWNrZWQtc2hhZG93KTtcbn1cblxuI09wZW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgbGVmdDogMjBweDtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4jT3BlbjpjaGVja2VkIH4gI3NpZGViYXJNZW51e1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xufVxuXG4ud3JhcHBlciB7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi53cmFwcGVyLnNlY29uZCxcbi53cmFwcGVyLnRoaXJkIHtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbiNPcGVuOmNoZWNrZWR+LnNpZGViYXItaWNvbj4ud3JhcHBlci5zZWNvbmQge1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbiNPcGVuOmNoZWNrZWR+LnNpZGViYXItaWNvbj4ud3JhcHBlci5maXJzdCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcbiAgICBtYXJnaW4tdG9wOiA5cHg7XG59XG5cbiNPcGVuOmNoZWNrZWR+LnNpZGViYXItaWNvbj4ud3JhcHBlci50aGlyZCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTMxNWRlZyk7XG4gICAgbWFyZ2luLXRvcDogLTlweDtcbn1cblxuLmJsdXIge1xuICAgIGZpbHRlcjogYmx1cig1cHgpO1xufVxuXG4uc2lkZWJhci1pY29ue1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaWRlYmFyLWl0ZW0tYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcbn1cblxuLmZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogN3B4O1xufVxuXG4uc2lkZWJhci1wcm9qZWN0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zaWRlYmFyLXByb2plY3Q6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xufVxuXG4uc2lkZWJhci1wcm9qZWN0OmhvdmVyIC5wcm9qZWN0LW5hbWUtaW5wdXR7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcbn1cblxuLnNpZGViYXItcHJvamVjdC1hY3RpdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xufVxuXG4uc2lkZWJhci1wcm9qZWN0OmhvdmVyIC5wcm9qZWN0LXRvb2xze1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbn1cblxuLnNtb290aC10cmFuc2l0aW9ue1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcbn1cblxuLm1lbnUtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgICBcbi5tZW51LW9wdGlvbnMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjVweDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICB9XG4gIFxuICAubWVudS1vcHRpb25zIGxpIHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAubWVudS1vcHRpb25zIGxpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1saWdodCk7XG4gIH1cbiAgXG4gIC5wcm9qZWN0LXRvb2xze1xuICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5wcm9qZWN0LXRvb2xzLWFjdGl2ZXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gIH1cblxuLnByb2plY3QtbmFtZS1pbnB1dHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LWZhbWlseTogJ1RUU2VtaUJvbGQnO1xuICBmb250LXNpemU6IDE1cmVtO1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrcy1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnI7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmhvbWUtaGVhZGluZ3tcbiAgZm9udC1zaXplOiAzNXJlbTtcbiAgZm9udC1mYW1pbHk6ICdUVEJvbGQnO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLmFkZC10YXNrLWJ0bntcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA3cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiA4cHggMHB4IDhweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC10YXNrLWJ0bjpob3ZlcntcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcbn1cblxuLm1vZGFse1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgei1pbmRleDogOTk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcbiAgd2lkdGg6IDYwMHB4O1xuICBtYXgtd2lkdGg6IDgwJTtcbn1cblxuLm1vZGFsLmFjdGl2ZXtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG59XG5cbi5tb2RhbC1oZWFkZXJ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICBmb250LXNpemU6IDIycmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuXG4ubW9kYWwtYWxlcnR7XG4gIGZvbnQtc2l6ZTogMTZyZW07XG4gIGNvbG9yOiB2YXIoLS13YXJuaW5nLWxpZ2h0KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogN3B4IDBweCA1cHggMHB4O1xufVxuXG4ubW9kYWwtaGVhZGVyLXJlbmFtZXtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjJyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9kYWwtdGl0bGV7XG4gIGZvbnQtZmFtaWx5OiAnVFRCb2xkJztcbn1cblxuLm1vZGFsLWJvZHl7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG5cbiNvdmVybGF5e1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG9wYWNpdHk6IDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcbiAgei1pbmRleDogMTU7XG59XG5cbiNvdmVybGF5LmFjdGl2ZXtcbiAgb3BhY2l0eTogMTtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuLmFkZC1wcm9qZWN0LWlucHV0e1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTJweCAxMHB4IDEycHggMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dC1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1mYW1pbHk6ICdUVFNlbWlCb2xkJztcbiAgZm9udC1zaXplOiAxNnJlbTtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnByb2plY3QtbW9kYWwtYnV0dG9uc3tcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nLXRvcDogN3B4O1xuICBnYXA6IDEycHg7XG59XG5cbi5hZGQtcHJvamVjdC1idXR0b25ze1xuICBmbGV4OiAxO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgZm9udC1mYW1pbHk6ICdUVEJvbGQnO1xuICBmb250LXNpemU6IDE4cmVtO1xufVxuXG4uYWRkLWJ0bntcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0KTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmNsb3NlLWJ0bntcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3ItbGlnaHQpO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uYWRkLWJ0bjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFhMTdjO1xufVxuXG4uY2xvc2UtYnRuOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjM5MTY7XG59XG5cbi5idG4tcmVuYW1le1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcGFkZGluZzogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLXJlbmFtZTpob3ZlcntcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xufVxuXG4uYnRuLWRlbGV0ZXtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bi1kZWxldGU6aG92ZXJ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KTtcbn1cblxuI2RlbGV0ZVF1ZXN0aW9ue1xuICBmb250LXNpemU6IDE4cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG59XG5cbi8qTWVkaWEgUXVlcmllcyovXG5cbi8qIFNtYXJ0cGhvbmVzIChwb3J0cmFpdCBhbmQgbGFuZHNjYXBlKSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5ib2R5LWNvbnRhaW5lcntcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAuc2lkZWJhcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogNzB2dztcbiAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAwcHgpO1xuICAgIH1cbiAgICAuc2lkZWJhci1pY29ue1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDIycHg7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAyMDtcbiAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5tYWlue1xuICAgICAgICBwYWRkaW5nOiA2NXB4IDIwcHggMHB4IDIwcHg7XG4gICAgfVxuICAgICNPcGVuOmNoZWNrZWR+I3NpZGViYXJNZW51IHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcbiAgICB9XG4gICAgLmJ0bi1kZWxldGUsIC5idG4tcmVuYW1le1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLm1vZGFsLWJvZHl7XG4gICAgICBwYWRkaW5nOiAxN3B4O1xuICAgIH1cbiAgICAubW9kYWwtaGVhZGVye1xuICAgICAgZm9udC1zaXplOiAxOHJlbTtcbiAgICB9XG4gICAgLmFkZC1wcm9qZWN0LWlucHV0e1xuICAgICAgZm9udC1zaXplOiAxNXJlbTtcbiAgICB9XG4gICAgLmFkZC1wcm9qZWN0LWJ1dHRvbnN7XG4gICAgICBmb250LXNpemU6IDE1cmVtO1xuICAgIH1cbiAgICAubW9kYWwtdGl0bGV7XG4gICAgICBmb250LXNpemU6IDIwcmVtO1xuICAgIH1cbiAgICAjb2xkTmFtZXtcbiAgICAgIGZvbnQtc2l6ZTogMjByZW07XG4gICAgfVxuICAgICNkZWxldGVQcm9qZWN0TmFtZXtcbiAgICAgIGZvbnQtc2l6ZTogMjByZW07XG4gICAgfVxuICAgIC5tb2RhbC1hbGVydHtcbiAgICAgIGZvbnQtc2l6ZTogMTRyZW07XG4gICAgfVxuICB9XG4gIFxuICAvKiBTbWFydHBob25lcyAocG9ydHJhaXQpICovXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAvKiBZb3VyIENTUyBzdHlsZXMgZm9yIHBvcnRyYWl0LW9yaWVudGVkIHBob25lcyBnbyBoZXJlICovXG4gIH1cbiAgXG4gIC8qIFNtYXJ0cGhvbmVzIChsYW5kc2NhcGUpICovXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC8qIFlvdXIgQ1NTIHN0eWxlcyBmb3IgbGFuZHNjYXBlLW9yaWVudGVkIHBob25lcyBnbyBoZXJlICovXG4gIH1cblxuXG4gIC8qIFRhYmxldHMgKHBvcnRyYWl0IGFuZCBsYW5kc2NhcGUpICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gICAgLyogWW91ciBDU1Mgc3R5bGVzIGZvciB0YWJsZXRzIGdvIGhlcmUgKi9cbiAgfVxuICBcbiAgLyogVGFibGV0cyAocG9ydHJhaXQpICovXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIC8qIFlvdXIgQ1NTIHN0eWxlcyBmb3IgcG9ydHJhaXQtb3JpZW50ZWQgdGFibGV0cyBnbyBoZXJlICovXG4gIH1cbiAgXG4gIC8qIFRhYmxldHMgKGxhbmRzY2FwZSkgKi9cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAgIC8qIFlvdXIgQ1NTIHN0eWxlcyBmb3IgbGFuZHNjYXBlLW9yaWVudGVkIHRhYmxldHMgZ28gaGVyZSAqL1xuICB9XG4gIGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBdUQ7QUFDekQ7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qiw0Q0FBMkQ7QUFDN0Q7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6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QjtJQUNBO1FBQ0ksMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSwwQkFBMEI7UUFDMUIsdUNBQXVDO0lBQzNDO0lBQ0E7TUFDRSxhQUFhO0lBQ2Y7SUFDQTtNQUNFLGFBQWE7SUFDZjtJQUNBO01BQ0UsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSxnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLGdCQUFnQjtJQUNsQjtJQUNBO01BQ0UsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSxnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLGdCQUFnQjtJQUNsQjtJQUNBO01BQ0UsZ0JBQWdCO0lBQ2xCO0VBQ0Y7O0VBRUEsMkJBQTJCO0VBQzNCO0lBQ0UseURBQXlEO0VBQzNEOztFQUVBLDRCQUE0QjtFQUM1QjtJQUNFLDBEQUEwRDtFQUM1RDs7O0VBR0EscUNBQXFDO0FBQ3ZDO0lBQ0ksd0NBQXdDO0VBQzFDOztFQUVBLHVCQUF1QjtFQUN2QjtJQUNFLDBEQUEwRDtFQUM1RDs7RUFFQSx3QkFBd0I7RUFDeEI7SUFDRSwyREFBMkQ7RUFDN0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1RUQm9sZCc7XFxuICBzcmM6IHVybCguL2ZvbnRzL1RUXFxcXCBJbnRlcnBoYXNlc1xcXFwgUHJvXFxcXCBUcmlhbFxcXFwgQm9sZC50dGYpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVFRTZW1pQm9sZCc7XFxuICBzcmM6IHVybCguL2ZvbnRzL1RUXFxcXCBJbnRlcnBoYXNlc1xcXFwgUHJvXFxcXCBUcmlhbFxcXFwgRGVtaUJvbGQudHRmKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNi4yNSU7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LXNpemU6IDE2cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1RUU2VtaUJvbGQnO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1wcmltYXJ5LWNvbG9yLWxpZ2h0OiAjMTI2ZmI1O1xcbiAgICAtLXNlY29uZGFyeS1jb2xvci1saWdodDogIzEwYTg4NTtcXG4gICAgLS10ZXJ0aWFyeS1jb2xvci1saWdodDogI2ZmNTQzNjtcXG5cXG4gICAgLS1wcmltYXJ5LWNvbG9yLWRhcms6ICM0ZWNiZmI7XFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yLWRhcms6ICM3NGZmZTA7XFxuICAgIC0tdGVydGlhcnktY29sb3ItZGFyazogI2ZlODk3NTtcXG5cXG4gICAgLS1iYWNrZ3JvdW5kLWxpZ2h0OiAjZmZmZmZmO1xcbiAgICAtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWxpZ2h0OiAjZmFmYWZhO1xcbiAgICAtLWJhY2tncm91bmQtZGFyazogIzIxMjg0NDtcXG4gICAgLS1zZWNvbmRhcnktYmFja2dyb3VuZC1kYXJrOiAjZjRmNWY3O1xcblxcbiAgICAtLWhvdmVyLWxpZ2h0OiAjZGRlMGU0O1xcblxcbiAgICAtLXRleHQtbGlnaHQ6ICMzMDMzMzY7XFxuICAgIC0tdGV4dC1kYXJrOiAjZmZmZmZmO1xcblxcbiAgICAtLXdhcm5pbmctbGlnaHQ6ICNmZjU0MzY7XFxuICAgIC0td2FybmluZy1kYXJrOiAjRkZGMjAwO1xcblxcbiAgICAtLW9yYW5nZS1jb2xvcjogI2ZmOTkwMDtcXG4gICAgLS15ZWxsb3ctY29sb3I6ICNmZmMzMDA7XFxufVxcblxcbi5ib2R5LWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgzMDVweCwgMWZyKSByZXBlYXQoNCwgMWZyKSA7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEyLCAxZnIpO1xcbn1cXG5cXG4uc2lkZWJhcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtbGlnaHQpO1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gLTEgLyAyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ubWFpbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAxMiAvIC0xO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAzMHB4IDcwcHggMHB4IDcwcHg7XFxufVxcblxcbi5mb290ZXJ7XFxuICAgIGdyaWQtYXJlYTogMTIgLyAyIC8gLTEgLyAtMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxufVxcblxcbi5zaWRlYmFyLWxpc3R7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyM3B4O1xcbn1cXG5cXG4ucHJvamVjdHMtc2lkZWJhci1saXN0e1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbi5zaWRlYmFyLWl0ZW17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogN3B4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNpZGViYXItaXRlbTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xcbn1cXG5cXG4uc2lkZWJhci1pdGVtc3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG4gICAgZm9udC1zaXplOiAxNXJlbTtcXG59XFxuXFxuLnNpZGViYXItYWRkLXByb2plY3R7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA3cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zaWRlYmFyLWFkZC1wcm9qZWN0OmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xcbn1cXG5cXG4uc2lkZWJhci1oZWFkZXJ7XFxuICAgIGZvbnQtc2l6ZTogMjFyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxuICAgIGZvbnQtZmFtaWx5OiAnVFRCb2xkJztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2lkZWJhci1ib3R0b217XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4uc2V0dGluZ3MtaXRlbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xcbn1cXG5cXG4uc3dpdGNoIHtcXG4gIC8qIHN3aXRjaCAqL1xcbiAgLS1zd2l0Y2gtd2lkdGg6IDQ2cHg7XFxuICAtLXN3aXRjaC1oZWlnaHQ6IDI0cHg7XFxuICAtLXN3aXRjaC1iZzogcmdiKDQ4LCA1MSwgNTQpO1xcbiAgLS1zd2l0Y2gtY2hlY2tlZC1iZzogcmdiKDE5LCAxOTcsIDE1Nik7XFxuICAtLXN3aXRjaC1vZmZzZXQ6IGNhbGMoKHZhcigtLXN3aXRjaC1oZWlnaHQpIC0gdmFyKC0tY2lyY2xlLWRpYW1ldGVyKSkgLyAyKTtcXG4gIC0tc3dpdGNoLXRyYW5zaXRpb246IGFsbCAuMnMgY3ViaWMtYmV6aWVyKDAuMjcsIDAuMiwgMC4yNSwgMS41MSk7XFxuICAvKiBjaXJjbGUgKi9cXG4gIC0tY2lyY2xlLWRpYW1ldGVyOiAxOHB4O1xcbiAgLS1jaXJjbGUtYmc6ICNmZmY7XFxuICAtLWNpcmNsZS1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMTQ2LCAxNDYsIDE0NiwgMC40NSk7XFxuICAtLWNpcmNsZS1jaGVja2VkLXNoYWRvdzogLTFweCAxcHggMnB4IHJnYmEoMTYzLCAxNjMsIDE2MywgMC40NSk7XFxuICAtLWNpcmNsZS10cmFuc2l0aW9uOiB2YXIoLS1zd2l0Y2gtdHJhbnNpdGlvbik7XFxuICAvKiBpY29uICovXFxuICAtLWljb24tdHJhbnNpdGlvbjogYWxsIC4ycyBjdWJpYy1iZXppZXIoMC4yNywgMC4yLCAwLjI1LCAxLjUxKTtcXG4gIC0taWNvbi1jcm9zcy1jb2xvcjogdmFyKC0tc3dpdGNoLWJnKTtcXG4gIC0taWNvbi1jcm9zcy1zaXplOiA2cHg7XFxuICAtLWljb24tY2hlY2ttYXJrLWNvbG9yOiB2YXIoLS1zd2l0Y2gtY2hlY2tlZC1iZyk7XFxuICAtLWljb24tY2hlY2ttYXJrLXNpemU6IDEwcHg7XFxuICAvKiBlZmZlY3QgbGluZSAqL1xcbiAgLS1lZmZlY3Qtd2lkdGg6IGNhbGModmFyKC0tY2lyY2xlLWRpYW1ldGVyKSAvIDIpO1xcbiAgLS1lZmZlY3QtaGVpZ2h0OiBjYWxjKHZhcigtLWVmZmVjdC13aWR0aCkgLyAyIC0gMXB4KTtcXG4gIC0tZWZmZWN0LWJnOiB2YXIoLS1jaXJjbGUtYmcpO1xcbiAgLS1lZmZlY3QtYm9yZGVyLXJhZGl1czogMXB4O1xcbiAgLS1lZmZlY3QtdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnN3aXRjaCBpbnB1dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc3dpdGNoIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnN3aXRjaCBzdmcge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB2YXIoLS1pY29uLXRyYW5zaXRpb24pO1xcbiAgLW8tdHJhbnNpdGlvbjogdmFyKC0taWNvbi10cmFuc2l0aW9uKTtcXG4gIHRyYW5zaXRpb246IHZhcigtLWljb24tdHJhbnNpdGlvbik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5zd2l0Y2ggLmNoZWNrbWFyayB7XFxuICB3aWR0aDogdmFyKC0taWNvbi1jaGVja21hcmstc2l6ZSk7XFxuICBjb2xvcjogdmFyKC0taWNvbi1jaGVja21hcmstY29sb3IpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG5cXG4uc3dpdGNoIC5jcm9zcyB7XFxuICB3aWR0aDogdmFyKC0taWNvbi1jcm9zcy1zaXplKTtcXG4gIGNvbG9yOiB2YXIoLS1pY29uLWNyb3NzLWNvbG9yKTtcXG59XFxuXFxuLnNsaWRlciB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IHZhcigtLXN3aXRjaC13aWR0aCk7XFxuICBoZWlnaHQ6IHZhcigtLXN3aXRjaC1oZWlnaHQpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc3dpdGNoLWJnKTtcXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHZhcigtLXN3aXRjaC10cmFuc2l0aW9uKTtcXG4gIC1vLXRyYW5zaXRpb246IHZhcigtLXN3aXRjaC10cmFuc2l0aW9uKTtcXG4gIHRyYW5zaXRpb246IHZhcigtLXN3aXRjaC10cmFuc2l0aW9uKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNpcmNsZSB7XFxuICB3aWR0aDogdmFyKC0tY2lyY2xlLWRpYW1ldGVyKTtcXG4gIGhlaWdodDogdmFyKC0tY2lyY2xlLWRpYW1ldGVyKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNpcmNsZS1iZyk7XFxuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiB2YXIoLS1jaXJjbGUtc2hhZG93KTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWNpcmNsZS1zaGFkb3cpO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdmFyKC0tY2lyY2xlLXRyYW5zaXRpb24pO1xcbiAgLW8tdHJhbnNpdGlvbjogdmFyKC0tY2lyY2xlLXRyYW5zaXRpb24pO1xcbiAgdHJhbnNpdGlvbjogdmFyKC0tY2lyY2xlLXRyYW5zaXRpb24pO1xcbiAgei1pbmRleDogMTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IHZhcigtLXN3aXRjaC1vZmZzZXQpO1xcbn1cXG5cXG4uc2xpZGVyOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogdmFyKC0tZWZmZWN0LXdpZHRoKTtcXG4gIGhlaWdodDogdmFyKC0tZWZmZWN0LWhlaWdodCk7XFxuICBsZWZ0OiBjYWxjKHZhcigtLXN3aXRjaC1vZmZzZXQpICsgKHZhcigtLWVmZmVjdC13aWR0aCkgLyAyKSk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1lZmZlY3QtYmcpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZWZmZWN0LWJvcmRlci1yYWRpdXMpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB2YXIoLS1lZmZlY3QtdHJhbnNpdGlvbik7XFxuICAtby10cmFuc2l0aW9uOiB2YXIoLS1lZmZlY3QtdHJhbnNpdGlvbik7XFxuICB0cmFuc2l0aW9uOiB2YXIoLS1lZmZlY3QtdHJhbnNpdGlvbik7XFxufVxcblxcbi8qIGFjdGlvbnMgKi9cXG5cXG4uc3dpdGNoIGlucHV0OmNoZWNrZWQrLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zd2l0Y2gtY2hlY2tlZC1iZyk7XFxufVxcblxcbi5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCsuc2xpZGVyIC5jaGVja21hcmsge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4uc3dpdGNoIGlucHV0OmNoZWNrZWQrLnNsaWRlciAuY3Jvc3Mge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG5cXG4uc3dpdGNoIGlucHV0OmNoZWNrZWQrLnNsaWRlcjo6YmVmb3JlIHtcXG4gIGxlZnQ6IGNhbGMoMTAwJSAtIHZhcigtLWVmZmVjdC13aWR0aCkgLSAodmFyKC0tZWZmZWN0LXdpZHRoKSAvIDIpIC0gdmFyKC0tc3dpdGNoLW9mZnNldCkpO1xcbn1cXG5cXG4uc3dpdGNoIGlucHV0OmNoZWNrZWQrLnNsaWRlciAuY2lyY2xlIHtcXG4gIGxlZnQ6IGNhbGMoMTAwJSAtIHZhcigtLWNpcmNsZS1kaWFtZXRlcikgLSB2YXIoLS1zd2l0Y2gtb2Zmc2V0KSk7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IHZhcigtLWNpcmNsZS1jaGVja2VkLXNoYWRvdyk7XFxuICBib3gtc2hhZG93OiB2YXIoLS1jaXJjbGUtY2hlY2tlZC1zaGFkb3cpO1xcbn1cXG5cXG4jT3BlbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMHB4O1xcbiAgICBsZWZ0OiAyMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jT3BlbjpjaGVja2VkIH4gI3NpZGViYXJNZW51e1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBoZWlnaHQ6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbn1cXG5cXG4ud3JhcHBlci5zZWNvbmQsXFxuLndyYXBwZXIudGhpcmQge1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxufVxcblxcbiNPcGVuOmNoZWNrZWR+LnNpZGViYXItaWNvbj4ud3JhcHBlci5zZWNvbmQge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4jT3BlbjpjaGVja2Vkfi5zaWRlYmFyLWljb24+LndyYXBwZXIuZmlyc3Qge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbiAgICBtYXJnaW4tdG9wOiA5cHg7XFxufVxcblxcbiNPcGVuOmNoZWNrZWR+LnNpZGViYXItaWNvbj4ud3JhcHBlci50aGlyZCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zMTVkZWcpO1xcbiAgICBtYXJnaW4tdG9wOiAtOXB4O1xcbn1cXG5cXG4uYmx1ciB7XFxuICAgIGZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG5cXG4uc2lkZWJhci1pY29ue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2lkZWJhci1pdGVtLWFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xcbn1cXG5cXG4uZmxleHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA3cHg7XFxufVxcblxcbi5zaWRlYmFyLXByb2plY3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zaWRlYmFyLXByb2plY3Q6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcXG59XFxuXFxuLnNpZGViYXItcHJvamVjdDpob3ZlciAucHJvamVjdC1uYW1lLWlucHV0e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xcbn1cXG5cXG4uc2lkZWJhci1wcm9qZWN0LWFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xcbn1cXG5cXG4uc2lkZWJhci1wcm9qZWN0OmhvdmVyIC5wcm9qZWN0LXRvb2xze1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uc21vb3RoLXRyYW5zaXRpb257XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcbiAgICBcXG4ubWVudS1vcHRpb25zIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDI1cHg7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgfVxcbiAgXFxuICAubWVudS1vcHRpb25zIGxpIHtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICBcXG4gIC5tZW51LW9wdGlvbnMgbGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1saWdodCk7XFxuICB9XFxuICBcXG4gIC5wcm9qZWN0LXRvb2xze1xcbiAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAucHJvamVjdC10b29scy1hY3RpdmV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG4gIH1cXG5cXG4ucHJvamVjdC1uYW1lLWlucHV0e1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LWZhbWlseTogJ1RUU2VtaUJvbGQnO1xcbiAgZm9udC1zaXplOiAxNXJlbTtcXG4gIG1heC13aWR0aDogMTUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2tzLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uaG9tZS1oZWFkaW5ne1xcbiAgZm9udC1zaXplOiAzNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnVFRCb2xkJztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5hZGQtdGFzay1idG57XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogN3B4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogOHB4IDBweCA4cHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bjpob3ZlcntcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1saWdodCk7XFxufVxcblxcbi5tb2RhbHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB6LWluZGV4OiA5OTk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIG1heC13aWR0aDogODAlO1xcbn1cXG5cXG4ubW9kYWwuYWN0aXZle1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxufVxcblxcbi5tb2RhbC1oZWFkZXJ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC1zaXplOiAyMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxufVxcblxcbi5tb2RhbC1hbGVydHtcXG4gIGZvbnQtc2l6ZTogMTZyZW07XFxuICBjb2xvcjogdmFyKC0td2FybmluZy1saWdodCk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogN3B4IDBweCA1cHggMHB4O1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyLXJlbmFtZXtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICBmb250LXNpemU6IDIycmVtO1xcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC10aXRsZXtcXG4gIGZvbnQtZmFtaWx5OiAnVFRCb2xkJztcXG59XFxuXFxuLm1vZGFsLWJvZHl7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMjVweDtcXG59XFxuXFxuI292ZXJsYXl7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvcGFjaXR5OiAwO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgei1pbmRleDogMTU7XFxufVxcblxcbiNvdmVybGF5LmFjdGl2ZXtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtaW5wdXR7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAxMnB4IDEwcHggMTJweCAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQtbGlnaHQpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1mYW1pbHk6ICdUVFNlbWlCb2xkJztcXG4gIGZvbnQtc2l6ZTogMTZyZW07XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4ucHJvamVjdC1tb2RhbC1idXR0b25ze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHBhZGRpbmctdG9wOiA3cHg7XFxuICBnYXA6IDEycHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idXR0b25ze1xcbiAgZmxleDogMTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcXG4gIGZvbnQtZmFtaWx5OiAnVFRCb2xkJztcXG4gIGZvbnQtc2l6ZTogMThyZW07XFxufVxcblxcbi5hZGQtYnRue1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0KTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5jbG9zZS1idG57XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvci1saWdodCk7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4uYWRkLWJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxYTE3YztcXG59XFxuXFxuLmNsb3NlLWJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzkxNjtcXG59XFxuXFxuLmJ0bi1yZW5hbWV7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvcmVuYW1lLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0bi1yZW5hbWU6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvcmVuYW1lLWhvdmVyLnN2Zyk7XFxufVxcblxcbi5idG4tZGVsZXRle1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2RlbGV0ZS5zdmcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idG4tZGVsZXRlOmhvdmVye1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2RlbGV0ZS1ob3Zlci5zdmcpO1xcbn1cXG5cXG4jZGVsZXRlUXVlc3Rpb257XFxuICBmb250LXNpemU6IDE4cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxufVxcblxcbi8qTWVkaWEgUXVlcmllcyovXFxuXFxuLyogU21hcnRwaG9uZXMgKHBvcnRyYWl0IGFuZCBsYW5kc2NhcGUpICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAuYm9keS1jb250YWluZXJ7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG4gICAgLnNpZGViYXJ7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB6LWluZGV4OiAxMDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiA3MHZ3O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwMHB4KTtcXG4gICAgfVxcbiAgICAuc2lkZWJhci1pY29ue1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogMjJweDtcXG4gICAgICAgIGhlaWdodDogMjJweDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IDIwO1xcbiAgICAgICAgdG9wOiAyMHB4O1xcbiAgICAgICAgbGVmdDogMjBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgICAubWFpbntcXG4gICAgICAgIHBhZGRpbmc6IDY1cHggMjBweCAwcHggMjBweDtcXG4gICAgfVxcbiAgICAjT3BlbjpjaGVja2VkfiNzaWRlYmFyTWVudSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gICAgfVxcbiAgICAuYnRuLWRlbGV0ZSwgLmJ0bi1yZW5hbWV7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAubW9kYWwtYm9keXtcXG4gICAgICBwYWRkaW5nOiAxN3B4O1xcbiAgICB9XFxuICAgIC5tb2RhbC1oZWFkZXJ7XFxuICAgICAgZm9udC1zaXplOiAxOHJlbTtcXG4gICAgfVxcbiAgICAuYWRkLXByb2plY3QtaW5wdXR7XFxuICAgICAgZm9udC1zaXplOiAxNXJlbTtcXG4gICAgfVxcbiAgICAuYWRkLXByb2plY3QtYnV0dG9uc3tcXG4gICAgICBmb250LXNpemU6IDE1cmVtO1xcbiAgICB9XFxuICAgIC5tb2RhbC10aXRsZXtcXG4gICAgICBmb250LXNpemU6IDIwcmVtO1xcbiAgICB9XFxuICAgICNvbGROYW1le1xcbiAgICAgIGZvbnQtc2l6ZTogMjByZW07XFxuICAgIH1cXG4gICAgI2RlbGV0ZVByb2plY3ROYW1le1xcbiAgICAgIGZvbnQtc2l6ZTogMjByZW07XFxuICAgIH1cXG4gICAgLm1vZGFsLWFsZXJ0e1xcbiAgICAgIGZvbnQtc2l6ZTogMTRyZW07XFxuICAgIH1cXG4gIH1cXG4gIFxcbiAgLyogU21hcnRwaG9uZXMgKHBvcnRyYWl0KSAqL1xcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgICAvKiBZb3VyIENTUyBzdHlsZXMgZm9yIHBvcnRyYWl0LW9yaWVudGVkIHBob25lcyBnbyBoZXJlICovXFxuICB9XFxuICBcXG4gIC8qIFNtYXJ0cGhvbmVzIChsYW5kc2NhcGUpICovXFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gICAgLyogWW91ciBDU1Mgc3R5bGVzIGZvciBsYW5kc2NhcGUtb3JpZW50ZWQgcGhvbmVzIGdvIGhlcmUgKi9cXG4gIH1cXG5cXG5cXG4gIC8qIFRhYmxldHMgKHBvcnRyYWl0IGFuZCBsYW5kc2NhcGUpICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xcbiAgICAvKiBZb3VyIENTUyBzdHlsZXMgZm9yIHRhYmxldHMgZ28gaGVyZSAqL1xcbiAgfVxcbiAgXFxuICAvKiBUYWJsZXRzIChwb3J0cmFpdCkgKi9cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcbiAgICAvKiBZb3VyIENTUyBzdHlsZXMgZm9yIHBvcnRyYWl0LW9yaWVudGVkIHRhYmxldHMgZ28gaGVyZSAqL1xcbiAgfVxcbiAgXFxuICAvKiBUYWJsZXRzIChsYW5kc2NhcGUpICovXFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XFxuICAgIC8qIFlvdXIgQ1NTIHN0eWxlcyBmb3IgbGFuZHNjYXBlLW9yaWVudGVkIHRhYmxldHMgZ28gaGVyZSAqL1xcbiAgfVxcbiAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYWxsVGFza3NJY29uIGZyb20gJy4vaW1nL2FsbHRhc2tzNDh4NDguc3ZnJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQWxsVGFza3MoKSB7XG4gICAgY29uc3QgY3VycmVudFRhYk5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudFRhYk5hbWUnKVxuICAgIGNvbnN0IGN1cnJlbnRUYWJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRUYWJJY29uJylcblxuICAgIGNvbnN0IHN2Z0FsbFRhc2tzID0gbmV3IEltYWdlKClcbiAgICBzdmdBbGxUYXNrcy5zcmMgPSBhbGxUYXNrc0ljb247XG4gICAgY3VycmVudFRhYkljb24uaW5uZXJIVE1MID0gJydcbiAgICBjdXJyZW50VGFiSWNvbi5hcHBlbmRDaGlsZChzdmdBbGxUYXNrcylcblxuICAgIGN1cnJlbnRUYWJOYW1lLnRleHRDb250ZW50ID0gJ0FsbCBUYXNrcydcbn0iLCJpbXBvcnQgbG9hZEFsbFRhc2tzIGZyb20gXCIuL2FsbHRhc2tzXCI7XG5pbXBvcnQgbG9hZFRvZGF5VGFza3MgZnJvbSBcIi4vdG9kYXlcIjtcbmltcG9ydCBsb2FkV2Vla1Rhc2tzIGZyb20gXCIuL3dlZWtcIjtcbmltcG9ydCBsb2FkSW1wb3J0YW50VGFza3MgZnJvbSBcIi4vaW1wb3J0YW50XCI7XG5pbXBvcnQgcHJvamVjdEljb24gZnJvbSAnLi9pbWcvcHJvamVjdC5zdmcnXG5cbmV4cG9ydCBjbGFzcyBBY3RpdmVUYWJIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIGhhbmRsZVRhYnNDbGljaygpIHtcbiAgICAgICAgdGhpcy5ob21lVGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlYmFyLWl0ZW0nKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0VGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlYmFyLXByb2plY3QnKTtcbiAgICAgICAgdGhpcy5ob21lVGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgICAgICB3aGlsZSAodGFyZ2V0ICYmICF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLWl0ZW0nKSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVUYWIodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5BY3RpdmVUYWIodGFyZ2V0KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZVRhYih0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5ob21lVGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhci1pdGVtLWFjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wcm9qZWN0VGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhci1pdGVtLWFjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItaXRlbS1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICBvcGVuQWN0aXZlVGFiKHRhcmdldCl7XG4gICAgICAgIHN3aXRjaCAodGFyZ2V0LmlkKSB7XG4gICAgICAgICAgICBjYXNlICd0YWJBbGxUYXNrcyc6XG4gICAgICAgICAgICAgICAgbG9hZEFsbFRhc2tzKCk7XG4gICAgICAgICAgICAgICAgY2xvc2VTaWRlYmFySWZTbWFsbFNjcmVlbigpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgXG4gICAgICAgICAgICBjYXNlICd0YWJUb2RheSc6XG4gICAgICAgICAgICAgICAgbG9hZFRvZGF5VGFza3MoKTtcbiAgICAgICAgICAgICAgICBjbG9zZVNpZGViYXJJZlNtYWxsU2NyZWVuKClcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAndGFiVGhpc1dlZWsnOlxuICAgICAgICAgICAgICAgIGxvYWRXZWVrVGFza3MoKTtcbiAgICAgICAgICAgICAgICBjbG9zZVNpZGViYXJJZlNtYWxsU2NyZWVuKClcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAndGFiSW1wb3J0YW50JzpcbiAgICAgICAgICAgICAgICBsb2FkSW1wb3J0YW50VGFza3MoKTtcbiAgICAgICAgICAgICAgICBjbG9zZVNpZGViYXJJZlNtYWxsU2NyZWVuKClcbiAgICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNb2RhbEhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TmFtZUlucHV0Jyk7XG4gICAgICAgIHRoaXMucHJvamVjdFJlbmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RSZW5hbWVJbnB1dCcpXG4gICAgICAgIHRoaXMubW9kYWxBbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbEFsZXJ0JylcbiAgICAgICAgdGhpcy5tb2RhbEFsZXJ0UmVuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsQWxlcnRSZW5hbWUnKVxuICAgICAgICB0aGlzLmFsbElucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpXG4gICAgICAgIHRoaXMubW9kYWxBZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJylcbiAgICB9XG4gICAgXG5cbiAgICBoYW5kbGVNb2RhbHMoKXtcbiAgICAgICAgY29uc3Qgb3Blbk1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsLXRhcmdldF0nKVxuICAgICAgICBjb25zdCBjbG9zZU1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNsb3NlLWJ1dHRvbl0nKVxuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKVxuXG4gICAgICAgIG9wZW5Nb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24uZGF0YXNldC5tb2RhbFRhcmdldClcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5Nb2RhbChtb2RhbClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgY2xvc2VNb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gYnV0dG9uLmNsb3Nlc3QoJy5tb2RhbCcpXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKG1vZGFsKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLmFjdGl2ZScpXG4gICAgICAgICAgICBtb2RhbHMuZm9yRWFjaChtb2RhbCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKG1vZGFsKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG9wZW5Nb2RhbChtb2RhbCl7XG4gICAgICAgIGlmKG1vZGFsID09IG51bGwpcmV0dXJuXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG5cbiAgICBjbG9zZU1vZGFsKG1vZGFsKXtcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gJydcbiAgICAgICAgdGhpcy5tb2RhbEFsZXJ0LmlubmVySFRNTCA9ICcnXG4gICAgICAgIHRoaXMubW9kYWxBbGVydFJlbmFtZS5pbm5lckhUTUwgPSAnJ1xuICAgICAgICB0aGlzLnByb2plY3RSZW5hbWVJbnB1dC52YWx1ZSA9ICcnXG5cbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZUlucHV0LmJsdXIoKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0UmVuYW1lSW5wdXQuYmx1cigpXG5cbiAgICAgICAgaWYobW9kYWwgPT0gbnVsbClyZXR1cm5cbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIH1cblxuXG4gICAgY2hhbmdlTW9kYWxQb3NpdGlvbklmS2V5Ym9hcmRPcGVuZWQoKXtcbiAgICAgICAgY29uc3QgaW5wdXRzQXJyYXkgPSBBcnJheS5mcm9tKHRoaXMuYWxsSW5wdXRzKVxuICAgICAgICBjb25zdCByZW5hbWVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1yZW5hbWUnKVxuICAgICAgICBpbnB1dHNBcnJheS5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShyZW5hbWVCdXR0b25zKTtcbiAgICAgICAgICAgICAgICBpZihjb21wdXRlZFN0eWxlLmRpc3BsYXkgPT09ICdub25lJyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kYWxBZGRQcm9qZWN0LnN0eWxlLnRvcCA9ICcxNTBweCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RhbEFkZFByb2plY3Quc3R5bGUudG9wID0gJzUwJSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlU3VibWl0KCl7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkRm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0TmFtZUlucHV0LmJsdXIoKVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVuYW1lRm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0UmVuYW1lSW5wdXQuYmx1cigpXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWxldGVGb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByb2plY3RzSGFuZGxlcntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBcbiAgICB9XG5cbiAgICBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0c0NvbnRhaW5lcicpXG5cbiAgICBjcmVhdGVQcm9qZWN0SHRtbChwcm9qZWN0KXtcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSA8bGk+IGVsZW1lbnQgd2l0aCBjbGFzcyBcInNpZGViYXItcHJvamVjdFwiIGFuZCBcInRhYlwiXG4gICAgICAgIGNvbnN0IGxpRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbGlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLXByb2plY3RcIiwgXCJ0YWJcIik7XG4gICAgXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgZmlyc3QgPGRpdj4gZWxlbWVudCB3aXRoIGNsYXNzIFwiZmxleFwiXG4gICAgICAgIGNvbnN0IGRpdkZsZXgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2RmxleDEuY2xhc3NMaXN0LmFkZChcImZsZXhcIik7XG4gICAgXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgXCJwcm9qZWN0XCIgU1ZHIGljb25cbiAgICAgICAgY29uc3Qgc3ZnUHJvamVjdCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBzdmdQcm9qZWN0LnNyYyA9IHByb2plY3RJY29uOyBcbiAgICBcbiAgICAgICAgLy8gQXBwZW5kIHRoZSBcInByb2plY3RcIiBpY29uIHRvIHRoZSBmaXJzdCA8ZGl2PiBlbGVtZW50XG4gICAgICAgIGRpdkZsZXgxLmFwcGVuZENoaWxkKHN2Z1Byb2plY3QpO1xuICAgIFxuICAgICAgICAvLyBDcmVhdGUgdGhlIDxpbnB1dD4gZWxlbWVudFxuICAgICAgICBjb25zdCBpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGlucHV0RWxlbWVudC52YWx1ZSA9IHByb2plY3QubmFtZVxuICAgICAgICBpbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lLWlucHV0XCIpO1xuICAgICAgICBpbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgICAgIGRpdkZsZXgxLmFwcGVuZENoaWxkKGlucHV0RWxlbWVudCk7XG4gICAgXG4gICAgICAgIC8vIEFwcGVuZCB0aGUgZmlyc3QgPGRpdj4gZWxlbWVudCB0byB0aGUgPGxpPiBlbGVtZW50XG4gICAgICAgIGxpRWxlbWVudC5hcHBlbmRDaGlsZChkaXZGbGV4MSk7XG4gICAgXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgc2Vjb25kIDxkaXY+IGVsZW1lbnQgd2l0aCBjbGFzcyBcInByb2plY3QtdG9vbHNcIlxuICAgICAgICBjb25zdCBkaXZUb29scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdlRvb2xzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRvb2xzXCIpO1xuICAgIFxuICAgICAgICAvLyBDcmVhdGUgdGhlIDxkaXY+IGVsZW1lbnRzIHdpdGggY2xhc3MgXCJmbGV4XCIgZm9yIHRoZSB0b29sIGljb25zXG4gICAgICAgIGNvbnN0IGRpdkZsZXgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2RmxleDIuY2xhc3NMaXN0LmFkZChcImZsZXhcIik7XG4gICAgICAgIGNvbnN0IGRpdkZsZXgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2RmxleDMuY2xhc3NMaXN0LmFkZChcImZsZXhcIik7XG4gICAgXG4gICAgICAgIC8vIEFwcGVuZCB0aGUgdG9vbCBpY29ucyB0byB0aGUgc2Vjb25kIDxkaXY+IGVsZW1lbnRcbiAgICAgICAgZGl2VG9vbHMuYXBwZW5kQ2hpbGQoZGl2RmxleDIpO1xuICAgICAgICBkaXZUb29scy5hcHBlbmRDaGlsZChkaXZGbGV4Myk7XG4gICAgXG4gICAgICAgICAvL0NyZWF0ZSBidXR0b24gZGVsZXRlXG4gICAgICAgICBjb25zdCBidXR0b25SZW5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgIGJ1dHRvblJlbmFtZS5jbGFzc0xpc3QuYWRkKCdidG4tcmVuYW1lJylcbiAgICAgICAgIGJ1dHRvblJlbmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwtdGFyZ2V0JywgJyNtb2RhbFJlbmFtZScpO1xuICAgIFxuICAgICAgICAvLyBBcHBlbmQgdGhlIFwicmVuYW1lXCIgYnV0dG9uIHRvIHRoZSBzZWNvbmQgPGRpdj4gZWxlbWVudFxuICAgICAgICBkaXZGbGV4Mi5hcHBlbmRDaGlsZChidXR0b25SZW5hbWUpO1xuICAgIFxuICAgICAgICAvL0NyZWF0ZSBidXR0b24gZGVsZXRlXG4gICAgICAgIGNvbnN0IGJ1dHRvbkRlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b25EZWxldGUuY2xhc3NMaXN0LmFkZCgnYnRuLWRlbGV0ZScpXG4gICAgICAgIGJ1dHRvbkRlbGV0ZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwtdGFyZ2V0JywgJyNtb2RhbERlbGV0ZScpO1xuICAgIFxuICAgICAgICAvLyBBcHBlbmQgdGhlIFwiZGVsZXRlXCIgYnV0dG9uIHRvIHRoZSBzZWNvbmQgPGRpdj4gZWxlbWVudFxuICAgICAgICBkaXZGbGV4My5hcHBlbmRDaGlsZChidXR0b25EZWxldGUpO1xuICAgIFxuICAgICAgICAvLyBBcHBlbmQgdGhlIHNlY29uZCA8ZGl2PiBlbGVtZW50IHRvIHRoZSA8bGk+IGVsZW1lbnRcbiAgICAgICAgbGlFbGVtZW50LmFwcGVuZENoaWxkKGRpdlRvb2xzKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQobGlFbGVtZW50KVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlU2lkZWJhcklmU21hbGxTY3JlZW4oKXtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXJNZW51JylcbiAgICBjb25zdCBjbG9zZVNpZGViYXJCdXRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLWljb24nKVxuICAgIHNpZGViYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtc2lkZWJhcicpID8gY2xvc2VTaWRlYmFyQnV0b24uY2xpY2soKSA6IHt9IDtcbn1cbiIsImltcG9ydCBpbXBvcnRhbnRJY29uIGZyb20gJy4vaW1nL2ltcG9ydGFudDQ4eDQ4LnN2ZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEltcG9ydGFudFRhc2tzKCkge1xuICAgIGNvbnN0IGN1cnJlbnRUYWJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRUYWJOYW1lJylcbiAgICBjb25zdCBjdXJyZW50VGFiSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50VGFiSWNvbicpXG5cbiAgICBjb25zdCBzdmdJbXBvcnRhbnQgPSBuZXcgSW1hZ2UoKVxuICAgIHN2Z0ltcG9ydGFudC5zcmMgPSBpbXBvcnRhbnRJY29uO1xuICAgIGN1cnJlbnRUYWJJY29uLmlubmVySFRNTCA9ICcnXG4gICAgY3VycmVudFRhYkljb24uYXBwZW5kQ2hpbGQoc3ZnSW1wb3J0YW50KVxuXG4gICAgY3VycmVudFRhYk5hbWUudGV4dENvbnRlbnQgPSAnSW1wb3J0YW50J1xufSIsImltcG9ydCBwcm9qZWN0SWNvbiBmcm9tICcuL2ltZy9wcm9qZWN0NDh4NDguc3ZnJ1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEFjdGl2ZVByb2plY3QoY3VycmVudFByb2plY3RUYWIpe1xuICAgIGNvbnN0IGN1cnJlbnRUYWJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRUYWJOYW1lJylcbiAgICBjb25zdCBjdXJyZW50VGFiSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50VGFiSWNvbicpXG5cbiAgICBjb25zdCBzdmdQcm9qZWN0ID0gbmV3IEltYWdlKClcbiAgICBzdmdQcm9qZWN0LnNyYyA9IHByb2plY3RJY29uO1xuICAgIGN1cnJlbnRUYWJJY29uLmlubmVySFRNTCA9ICcnXG4gICAgY3VycmVudFRhYkljb24uYXBwZW5kQ2hpbGQoc3ZnUHJvamVjdClcblxuICAgIGN1cnJlbnRUYWJOYW1lLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFByb2plY3RUYWIubmFtZX1gXG59XG4iLCJpbXBvcnQgeyBNb2RhbEhhbmRsZXIsIFByb2plY3RzSGFuZGxlciwgQWN0aXZlVGFiSGFuZGxlciB9IGZyb20gJy4vZG9tJztcbmltcG9ydCB7IGxvYWRBY3RpdmVQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0LWxvYWRlcic7XG5pbXBvcnQgeyBjbG9zZVNpZGViYXJJZlNtYWxsU2NyZWVuIH0gZnJvbSAnLi9kb20nXG5cbmNvbnN0IG1vZGFsSGFuZGxlciA9IG5ldyBNb2RhbEhhbmRsZXIoKTsgXG5jb25zdCBwcm9qZWN0c0hhbmRsZXIgPSBuZXcgUHJvamVjdHNIYW5kbGVyKCk7XG5jb25zdCB0YWJIYW5kbGVyID0gbmV3IEFjdGl2ZVRhYkhhbmRsZXIoKTtcbmNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzQ29udGFpbmVyJylcblxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgfVxufVxuXG5leHBvcnQgbGV0IGFsbFByb2plY3RzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ1RvRG8nLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTXkgV29yaycsXG4gICAgfSxcbl1cblxubGV0IGN1cnJlbnRQcm9qZWN0ID0gbnVsbDtcbmxldCBjdXJyZW50SW5kZXggPSBudWxsXG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkUHJvamVjdHMoKSB7XG4gICAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgcHJvamVjdHNIYW5kbGVyLmNyZWF0ZVByb2plY3RIdG1sKHByb2plY3QpO1xuICAgIH0pXG4gICAgdGFiSGFuZGxlci5oYW5kbGVUYWJzQ2xpY2soKVxuICAgIGhhbmRsZVByb2plY3RUYWJzKGFsbFByb2plY3RzKVxuICAgIGFkZFByb2plY3RUb29sc0V2ZW50KClcbiAgICBtb2RhbEhhbmRsZXIuaGFuZGxlTW9kYWxzKClcbiAgICBtb2RhbEhhbmRsZXIuY2hhbmdlTW9kYWxQb3NpdGlvbklmS2V5Ym9hcmRPcGVuZWQoKVxuICAgIGlmKGN1cnJlbnRJbmRleCA9PT0gbnVsbCl7XG5cbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgY29uc3QgcHJvamVjdFRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhci1wcm9qZWN0JylcbiAgICAgICAgcHJvamVjdFRhYnNbY3VycmVudEluZGV4XS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWl0ZW0tYWN0aXZlJylcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0RXZlbnQoKSB7XG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0QnV0dG9uJyk7XG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TmFtZUlucHV0Jyk7XG4gICAgY29uc3QgY2xvc2VNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZU1vZGFsQnV0dG9uJyk7XG4gICAgY29uc3QgbW9kYWxBbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbEFsZXJ0JylcblxuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gcHJvamVjdE5hbWVJbnB1dC52YWx1ZS50cmltKCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgYSBwcm9qZWN0IHdpdGggdGhlIHNhbWUgbmFtZSBhbHJlYWR5IGV4aXN0c1xuICAgICAgICBjb25zdCBleGlzdGluZ1Byb2plY3QgPSBhbGxQcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBuZXdQcm9qZWN0TmFtZSk7XG5cbiAgICAgICAgaWYobmV3UHJvamVjdE5hbWUgPT09ICcnKXtcbiAgICAgICAgICAgIG1vZGFsQWxlcnQudGV4dENvbnRlbnQgPSAnKFlvdSBtdXN0IGVudGVyIG5ldyBwcm9qZWN0IG5hbWUpJ1xuICAgICAgICAgICAgcHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9ICcnXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChleGlzdGluZ1Byb2plY3QpIHtcbiAgICAgICAgICAgIG1vZGFsQWxlcnQudGV4dENvbnRlbnQgPSAnKFRoZSBwcm9qZWN0IHdpdGggdGhpcyBuYW1lIGFscmVhZHkgZXhpc3RzLiknXG4gICAgICAgICAgICBwcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gJydcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGFsbFByb2plY3RzLmxlbmd0aCA9PT0gNSl7ICBcbiAgICAgICAgICAgIG1vZGFsQWxlcnQudGV4dENvbnRlbnQgPSAnKENhbnQgaGF2ZSBtb3JlIHRoYW4gZml2ZSBwcm9qZWN0cy4gVXBncmFkZSB0byBQUk8uKSdcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuZXdQcm9qZWN0TmFtZSk7XG4gICAgICAgIGFsbFByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIGxvYWRQcm9qZWN0cygpO1xuICAgICAgICBjbG9zZU1vZGFsQnV0dG9uLmNsaWNrKCk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0VG9vbHNTdWJtaXRFdmVudCgpIHtcbiAgICBjb25zdCByZW5hbWVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RSZW5hbWVCdXR0b24nKTtcbiAgICBjb25zdCBjbG9zZU1vZGFsQnV0dG9uUmVuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlTW9kYWxCdXR0b25SZW5hbWUnKTtcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3REZWxldGVCdXR0b24nKTtcbiAgICBjb25zdCBjbG9zZU1vZGFsQnV0dG9uRGVsZXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlTW9kYWxCdXR0b25EZWxldGUnKTtcblxuICAgIHJlbmFtZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXItcHJvamVjdCcpXG4gICAgICAgIGNvbnN0IHByb2plY3RSZW5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0UmVuYW1lSW5wdXQnKTtcbiAgICAgICAgY29uc3QgbW9kYWxBbGVydFJlbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbEFsZXJ0UmVuYW1lJylcbiAgICAgICAgbGV0IGV4aXN0aW5nUHJvamVjdCA9IGFsbFByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3RSZW5hbWVJbnB1dC52YWx1ZSlcblxuICAgICAgICBpZihwcm9qZWN0UmVuYW1lSW5wdXQudmFsdWUgPT09ICcnKXtcbiAgICAgICAgICAgIG1vZGFsQWxlcnRSZW5hbWUudGV4dENvbnRlbnQgPSAnKFlvdSBtdXN0IGVudGVyIG5ldyBwcm9qZWN0IG5hbWUpJ1xuICAgICAgICAgICAgcHJvamVjdFJlbmFtZUlucHV0LnZhbHVlID0gJydcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYoZXhpc3RpbmdQcm9qZWN0KXtcbiAgICAgICAgICAgIG1vZGFsQWxlcnRSZW5hbWUudGV4dENvbnRlbnQgPSAnKFRoZSBwcm9qZWN0IHdpdGggdGhpcyBuYW1lIGFscmVhZHkgZXhpc3RzKSdcbiAgICAgICAgICAgIHByb2plY3RSZW5hbWVJbnB1dC52YWx1ZSA9ICcnXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50UHJvamVjdCkgeyAgICAgICAgICAgIFxuICAgICAgICAgICAgY3VycmVudFByb2plY3QubmFtZSA9IHByb2plY3RSZW5hbWVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGxvYWRQcm9qZWN0cygpO1xuICAgICAgICAgICAgcHJvamVjdFRhYnNbY3VycmVudEluZGV4XS5jbGljaygpXG4gICAgICAgICAgICBjbG9zZU1vZGFsQnV0dG9uUmVuYW1lLmNsaWNrKCk7XG4gICAgICAgICAgICBtb2RhbEhhbmRsZXIuaGFuZGxlTW9kYWxzKCk7XG4gICAgICAgICAgICBtb2RhbEhhbmRsZXIuY2hhbmdlTW9kYWxQb3NpdGlvbklmS2V5Ym9hcmRPcGVuZWQoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFByb2plY3QgPSBudWxsO1xuICAgIH0pO1xuXG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFiQWxsVGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiQWxsVGFza3MnKVxuICAgICAgICBpZiAoY3VycmVudFByb2plY3QpIHtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IG51bGxcbiAgICAgICAgICAgIGFsbFByb2plY3RzLnNwbGljZShjdXJyZW50SW5kZXgsIDEpXG4gICAgICAgICAgICBsb2FkUHJvamVjdHMoKTtcbiAgICAgICAgICAgIGNsb3NlTW9kYWxCdXR0b25EZWxldGUuY2xpY2soKTtcbiAgICAgICAgICAgIHRhYkFsbFRhc2tzLmNsaWNrKClcbiAgICAgICAgICAgIG1vZGFsSGFuZGxlci5oYW5kbGVNb2RhbHMoKTtcbiAgICAgICAgICAgIG1vZGFsSGFuZGxlci5jaGFuZ2VNb2RhbFBvc2l0aW9uSWZLZXlib2FyZE9wZW5lZCgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50UHJvamVjdCA9IG51bGw7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RUb29sc0V2ZW50KCl7XG4gICAgY29uc3QgcmVuYW1lQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tcmVuYW1lJyk7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tZGVsZXRlJyk7XG5cbiAgICByZW5hbWVCdXR0b25zLmZvckVhY2goKGJ1dHRvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBcbiAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBhbGxQcm9qZWN0c1tpbmRleF07XG4gICAgICAgICAgIGN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICAgICBjb25zdCBvbGROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29sZE5hbWUnKTtcbiAgICAgICAgICAgb2xkTmFtZS50ZXh0Q29udGVudCA9IGAoJHtjdXJyZW50UHJvamVjdC5uYW1lfSlgXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG5cbiAgICBkZWxldGVCdXR0b25zLmZvckVhY2goKGJ1dHRvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBhbGxQcm9qZWN0c1tpbmRleF07XG4gICAgICAgICAgICBjdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZVByb2plY3ROYW1lJylcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3ROYW1lLnRleHRDb250ZW50ID0gYCgke2N1cnJlbnRQcm9qZWN0Lm5hbWV9KWBcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmxldCBjdXJyZW50UHJvamVjdFRhYiA9IG51bGxcblxuZnVuY3Rpb24gaGFuZGxlUHJvamVjdFRhYnMoYWxsUHJvamVjdHMpe1xuICAgIGNvbnN0IHByb2plY3RUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXItcHJvamVjdCcpXG4gICAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKVxuICAgIHByb2plY3RUYWJzLmZvckVhY2goKHRhYiwgaW5kZXgpID0+IHtcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgdGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLWl0ZW0tYWN0aXZlJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWl0ZW0tYWN0aXZlJylcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdFRhYiA9IGFsbFByb2plY3RzW2luZGV4XVxuICAgICAgICAgICAgICAgIGxvYWRBY3RpdmVQcm9qZWN0KGN1cnJlbnRQcm9qZWN0VGFiKVxuICAgICAgICAgICAgICAgIGNsb3NlU2lkZWJhcklmU21hbGxTY3JlZW4oKVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cblxuIiwiY29uc3Qgc2lkZWJhclRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdPcGVuJyk7XG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXJNZW51JylcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpblNlY3Rpb24nKTtcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXJTZWN0aW9uJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVNpZGViYXIoKSB7XG4gICAgc2lkZWJhclRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzaWRlYmFyVG9nZ2xlLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnYmx1cicpO1xuICAgICAgICAgICAgICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdibHVyJyk7XG4gICAgICAgICAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtc2lkZWJhcicpXG4gICAgICAgICAgICB9LCAyMjApO1xuICAgICAgICAgICAgaGFuZGxlVHJhbnNpdGlvbigpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2JsdXInKTtcbiAgICAgICAgICAgIGZvb3Rlci5jbGFzc0xpc3QucmVtb3ZlKCdibHVyJyk7XG4gICAgICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1zaWRlYmFyJylcbiAgICAgICAgICAgIGhhbmRsZVRyYW5zaXRpb24oKVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRyYW5zaXRpb24oKXtcbiAgICBpZiAoc2lkZWJhclRvZ2dsZS5jaGVja2VkKSB7XG4gICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnc21vb3RoLXRyYW5zaXRpb24nKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzbW9vdGgtdHJhbnNpdGlvbicpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdzbW9vdGgtdHJhbnNpdGlvbicpXG4gICAgICAgIH0sIDE1NSk7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgdG9kYXlJY29uIGZyb20gJy4vaW1nL3RvZGF5NDh4NDguc3ZnJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkVG9kYXlUYXNrcygpIHtcbiAgICBjb25zdCBjdXJyZW50VGFiTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50VGFiTmFtZScpXG4gICAgY29uc3QgY3VycmVudFRhYkljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudFRhYkljb24nKVxuXG4gICAgY29uc3Qgc3ZnVG9kYXkgPSBuZXcgSW1hZ2UoKVxuICAgIHN2Z1RvZGF5LnNyYyA9IHRvZGF5SWNvbjtcbiAgICBjdXJyZW50VGFiSWNvbi5pbm5lckhUTUwgPSAnJ1xuICAgIGN1cnJlbnRUYWJJY29uLmFwcGVuZENoaWxkKHN2Z1RvZGF5KVxuXG4gICAgY3VycmVudFRhYk5hbWUudGV4dENvbnRlbnQgPSAnVG9kYXknXG59IiwiaW1wb3J0IHdlZWtJY29uIGZyb20gJy4vaW1nL3RoaXN3ZWVrNDh4NDguc3ZnJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkV2Vla1Rhc2tzKCkge1xuICAgIGNvbnN0IGN1cnJlbnRUYWJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRUYWJOYW1lJylcbiAgICBjb25zdCBjdXJyZW50VGFiSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50VGFiSWNvbicpXG5cbiAgICBjb25zdCBzdmdXZWVrID0gbmV3IEltYWdlKClcbiAgICBzdmdXZWVrLnNyYyA9IHdlZWtJY29uO1xuICAgIGN1cnJlbnRUYWJJY29uLmlubmVySFRNTCA9ICcnXG4gICAgY3VycmVudFRhYkljb24uYXBwZW5kQ2hpbGQoc3ZnV2VlaylcblxuICAgIGN1cnJlbnRUYWJOYW1lLnRleHRDb250ZW50ID0gJ1RoaXMgV2Vlaydcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgaGFuZGxlU2lkZWJhciBmcm9tICcuL3NpZGViYXInXG5pbXBvcnQgbG9hZEFsbFRhc2tzIGZyb20gJy4vYWxsdGFza3MnO1xuaW1wb3J0IHsgTW9kYWxIYW5kbGVyfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgeyBsb2FkUHJvamVjdHMsIGFkZFByb2plY3RFdmVudCwgYWRkUHJvamVjdFRvb2xzU3VibWl0RXZlbnQgfSBmcm9tICcuL3Byb2plY3RzJztcblxuKGZ1bmN0aW9uIHdlYnNpdGVIYW5kbGVyKCl7XG4gICAgY29uc3QgbW9kYWxIYW5kbGVyID0gbmV3IE1vZGFsSGFuZGxlcigpOyBcblxuICAgIGhhbmRsZVNpZGViYXIoKTtcbiAgICBsb2FkQWxsVGFza3MoKTtcbiAgICBsb2FkUHJvamVjdHMoKTtcbiAgICBhZGRQcm9qZWN0RXZlbnQoKTtcbiAgICBhZGRQcm9qZWN0VG9vbHNTdWJtaXRFdmVudCgpXG4gICAgbW9kYWxIYW5kbGVyLmhhbmRsZU1vZGFscygpO1xuICAgIG1vZGFsSGFuZGxlci5jaGFuZ2VNb2RhbFBvc2l0aW9uSWZLZXlib2FyZE9wZW5lZCgpXG4gICAgbW9kYWxIYW5kbGVyLmhhbmRsZVN1Ym1pdCgpXG59KSgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=