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
    gap: 2px;
    padding-bottom: 23px;
}

.projects-sidebar-list{
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 2px;
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

/* Remove this container when use*/
.component-title {
  width: 100%;
  position: absolute;
  z-index: 999;
  top: 30px;
  left: 0;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: #888;
  text-align: center;
}

/* The switch - the box around the slider */
.container {
  width: 51px;
  height: 31px;
  position: relative;
}

/* Hide default HTML checkbox */
.checkbox {
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
}

.switch {
  width: 100%;
  height: 100%;
  display: block;
  background-color: #e9e9eb;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s ease-out;
}

/* The slider */
.slider {
  width: 27px;
  height: 27px;
  position: absolute;
  left: calc(50% - 27px/2 - 10px);
  top: calc(50% - 27px/2);
  border-radius: 50%;
  background: #FFFFFF;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease-out;
  cursor: pointer;
}

.checkbox:checked + .switch {
  background-color: #34C759;
}

.checkbox:checked + .switch .slider {
  left: calc(50% - 27px/2 + 10px);
  top: calc(50% - 27px/2);
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
  align-self: center;
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
  padding-top: 12px;
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
    .delete, .rename{
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
  `, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'TTBold';\n  src: url(./fonts/TT\\ Interphases\\ Pro\\ Trial\\ Bold.ttf);\n}\n@font-face {\n  font-family: 'TTSemiBold';\n  src: url(./fonts/TT\\ Interphases\\ Pro\\ Trial\\ DemiBold.ttf);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    font-size: 6.25%;\n}\n\nbody {\n    font-size: 16rem;\n    font-family: 'TTSemiBold';\n    height: 100%;\n    overflow: hidden;\n}\n\n:root {\n    --primary-color-light: #126fb5;\n    --secondary-color-light: #10a885;\n    --tertiary-color-light: #ff5436;\n\n    --primary-color-dark: #4ecbfb;\n    --secondary-color-dark: #74ffe0;\n    --tertiary-color-dark: #fe8975;\n\n    --background-light: #ffffff;\n    --secondary-background-light: #fafafa;\n    --background-dark: #212844;\n    --secondary-background-dark: #f4f5f7;\n\n    --hover-light: #dde0e4;\n\n    --text-light: #303336;\n    --text-dark: #ffffff;\n\n    --warning-light: #ff5436;\n    --warning-dark: #FFF200;\n}\n\n.body-container{\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: minmax(305px, 1fr) repeat(4, 1fr) ;\n    grid-template-rows: repeat(12, 1fr);\n}\n\n.sidebar{\n    background-color: var(--secondary-background-light);\n    grid-area: 1 / 1 / -1 / 2;\n    box-sizing: border-box;\n    padding: 20px;\n}\n\n.main{\n    background-color: var(--background-light);\n    grid-area: 1 / 2 / 12 / -1;\n    box-sizing: border-box;\n    padding: 30px 70px 0px 70px;\n}\n\n.footer{\n    grid-area: 12 / 2 / -1 / -1;\n    background-color: var(--background-light);\n}\n\n.sidebar-list{\n    list-style-type: none;\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n    padding-bottom: 23px;\n}\n\n.projects-sidebar-list{\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.sidebar-item{\n    display: flex;\n    gap: 7px;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 5px 5px 5px 10px;\n    cursor: pointer;\n    border-radius: 5px;\n}\n\n.sidebar-item:hover{\n    background-color: var(--hover-light);\n}\n\n.sidebar-items{\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    height: 100%;\n    color: var(--text-light);\n    font-size: 15rem;\n}\n\n.sidebar-header{\n    font-size: 21rem;\n    padding-bottom: 10px;\n    color: var(--text-light);\n    font-family: 'TTBold';\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.sidebar-bottom{\n    align-self: flex-end;\n}\n\n.settings-item{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    box-sizing: border-box;\n    padding: 5px 5px 5px 10px;\n}\n\n/* Remove this container when use*/\n.component-title {\n  width: 100%;\n  position: absolute;\n  z-index: 999;\n  top: 30px;\n  left: 0;\n  padding: 0;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #888;\n  text-align: center;\n}\n\n/* The switch - the box around the slider */\n.container {\n  width: 51px;\n  height: 31px;\n  position: relative;\n}\n\n/* Hide default HTML checkbox */\n.checkbox {\n  opacity: 0;\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n\n.switch {\n  width: 100%;\n  height: 100%;\n  display: block;\n  background-color: #e9e9eb;\n  border-radius: 16px;\n  cursor: pointer;\n  transition: all 0.2s ease-out;\n}\n\n/* The slider */\n.slider {\n  width: 27px;\n  height: 27px;\n  position: absolute;\n  left: calc(50% - 27px/2 - 10px);\n  top: calc(50% - 27px/2);\n  border-radius: 50%;\n  background: #FFFFFF;\n  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06);\n  transition: all 0.2s ease-out;\n  cursor: pointer;\n}\n\n.checkbox:checked + .switch {\n  background-color: #34C759;\n}\n\n.checkbox:checked + .switch .slider {\n  left: calc(50% - 27px/2 + 10px);\n  top: calc(50% - 27px/2);\n}\n\n\n#Open {\n    position: absolute;\n    top: 20px;\n    left: 20px;\n    display: none;\n}\n\n#Open:checked ~ #sidebarMenu{\n    transform: translateX(0px);\n}\n\n.wrapper {\n    height: 3px;\n    background-color: var(--text-light);\n    transition: all 0.5s;\n}\n\n.wrapper.second,\n.wrapper.third {\n    margin-top: 3px;\n}\n\n#Open:checked~.sidebar-icon>.wrapper.second {\n    opacity: 0;\n}\n\n#Open:checked~.sidebar-icon>.wrapper.first {\n    transform: rotate(315deg);\n    margin-top: 9px;\n}\n\n#Open:checked~.sidebar-icon>.wrapper.third {\n    transform: rotate(-315deg);\n    margin-top: -9px;\n}\n\n.blur {\n    filter: blur(5px);\n}\n\n.sidebar-icon{\n    display: none;\n}\n\n.sidebar-item-active{\n    background-color: var(--hover-light);\n}\n\n.flex{\n    display: flex;\n    align-items: center;\n    gap: 7px;\n}\n\n.sidebar-project{\n    display: flex;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 5px 5px 5px 10px;\n    cursor: pointer;\n    border-radius: 5px;\n    justify-content: space-between;\n}\n\n.sidebar-project:hover{\n    background-color: var(--hover-light);\n}\n\n.sidebar-project:hover .project-name-input{\n  background-color: var(--hover-light);\n}\n\n.sidebar-project-active{\n    background-color: var(--hover-light);\n}\n\n.sidebar-project:hover .project-tools{\n    margin-left: 10px;\n    display: block;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.smooth-transition{\n    transition: transform 300ms ease-in-out;\n}\n\n.menu-container {\n    position: relative;\n  }\n    \n.menu-options {\n    display: none;\n    position: absolute;\n    top: 25px;\n    right: 0;\n    background-color: var(--background-light);\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    list-style: none;\n  }\n  \n  .menu-options li {\n    padding: 10px 20px;\n    cursor: pointer;\n  }\n  \n  .menu-options li:hover {\n    background-color: var(--hover-light);\n  }\n  \n  .project-tools{\n   display: none;\n  }\n\n  .project-tools-active{\n    display: block;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n  }\n\n.project-name-input{\n  appearance: none;\n  border: none;\n  outline: none;\n  font-family: 'TTSemiBold';\n  font-size: 15rem;\n  max-width: 150px;\n  background-color: transparent;\n  color: var(--text-light);\n  cursor: pointer;\n}\n\n.tasks-container{\n  display: grid;\n  grid-template-rows: 1fr 10fr;\n  height: 100%;\n}\n\n.home-heading{\n  font-size: 35rem;\n  font-family: 'TTBold';\n  align-self: center;\n}\n\n.add-task-btn{\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 8px 0px 8px 15px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.add-task-btn:hover{\nbackground-color: var(--hover-light);\n}\n\n.modal{\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 200ms ease-in-out;\n  border-radius: 10px;\n  z-index: 999;\n  background-color: var(--background-light);\n  width: 600px;\n  max-width: 80%;\n}\n\n.modal.active{\n  transform: translate(-50%, -50%) scale(1);\n}\n\n.modal-header{\n  box-sizing: border-box;\n  padding: 10px 15px;\n  border-bottom: 1px solid black;\n  font-size: 22rem;\n  color: var(--text-light);\n  display: flex;\n  gap: 10px;\n  align-items: baseline;\n}\n\n.modal-alert{\n  font-size: 16rem;\n  color: var(--warning-light);\n}\n\n.modal-header-rename{\n  box-sizing: border-box;\n  padding: 10px 15px;\n  border-bottom: 1px solid black;\n  font-size: 22rem;\n  color: var(--text-light);\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.modal-title{\n  font-family: 'TTBold';\n}\n\n.modal-body{\n  box-sizing: border-box;\n  padding: 25px;\n}\n\n#overlay{\n  position: fixed;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, .5);\n  pointer-events: none;\n  transition: 200ms ease-in-out;\n  z-index: 15;\n}\n\n#overlay.active{\n  opacity: 1;\n  pointer-events: all;\n}\n\n.add-project-input{\n  width: 100%;\n  box-sizing: border-box;\n  padding: 12px 10px 12px 10px;\n  outline: none;\n  border: 1px solid var(--text-light);\n  border-radius: 5px;\n  font-family: 'TTSemiBold';\n  font-size: 16rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.project-modal-buttons{\n  display: flex;\n  height: 40px;\n  padding-top: 12px;\n  gap: 12px;\n}\n\n.add-project-buttons{\n  flex: 1;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  color: var(--text-dark);\n  font-family: 'TTBold';\n  font-size: 18rem;\n}\n\n.add-btn{\n  background-color: var(--secondary-color-light);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.close-btn{\n  background-color: var(--tertiary-color-light);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.add-btn:hover{\n    background-color: #01a17c;\n}\n\n.close-btn:hover{\n    background-color: #ff3916;\n}\n\n.btn-rename{\n  border: none;\n  outline: none;\n  background-color: transparent;\n  background-image: url(./img/rename.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n  padding: 12px;\n  cursor: pointer;\n}\n\n.btn-rename:hover{\n  background-image: url(./img/rename-hover.svg);\n}\n\n.btn-delete{\n  border: none;\n  outline: none;\n  background-color: transparent;\n  background-image: url(./img/delete.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n  padding: 12px;\n  cursor: pointer;\n}\n\n.btn-delete:hover{\n  background-image: url(./img/delete-hover.svg);\n}\n\n/*Media Queries*/\n\n/* Smartphones (portrait and landscape) */\n@media only screen and (max-width: 767px) {\n    .body-container{\n        width: 100vw;\n        height: 100vh;\n        display: flex;\n        flex-direction: column;\n    }\n    .sidebar{\n        position: absolute;\n        z-index: 10;\n        height: 100%;\n        width: 70vw;\n        padding-top: 60px;\n        transform: translateX(-500px);\n    }\n    .sidebar-icon{\n        display: block;\n        width: 22px;\n        height: 22px;\n        position: absolute;\n        z-index: 20;\n        top: 20px;\n        left: 20px;\n        cursor: pointer;\n    }\n    .main{\n        padding: 65px 20px 0px 20px;\n    }\n    #Open:checked~#sidebarMenu {\n        transform: translateX(0px);\n        transition: transform 300ms ease-in-out;\n    }\n    .delete, .rename{\n      display: none;\n    }\n    .modal-body{\n      padding: 17px;\n    }\n    .modal-header{\n      font-size: 18rem;\n    }\n    .add-project-input{\n      font-size: 15rem;\n    }\n    .add-project-buttons{\n      font-size: 15rem;\n    }\n    .modal-title{\n      font-size: 20rem;\n    }\n    #oldName{\n      font-size: 20rem;\n    }\n  }\n  \n  /* Smartphones (portrait) */\n  @media only screen and (max-width: 480px) {\n    /* Your CSS styles for portrait-oriented phones go here */\n  }\n  \n  /* Smartphones (landscape) */\n  @media only screen and (min-width: 481px) and (max-width: 767px) {\n    /* Your CSS styles for landscape-oriented phones go here */\n  }\n\n\n  /* Tablets (portrait and landscape) */\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\n    /* Your CSS styles for tablets go here */\n  }\n  \n  /* Tablets (portrait) */\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    /* Your CSS styles for portrait-oriented tablets go here */\n  }\n  \n  /* Tablets (landscape) */\n  @media only screen and (min-width: 992px) and (max-width: 1023px) {\n    /* Your CSS styles for landscape-oriented tablets go here */\n  }\n  "],"sourceRoot":""}]);
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
function loadAllTasks() {
    const mainHeading = document.getElementById('mainHeading')
    mainHeading.textContent = 'All Tasks';    
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
/* harmony export */   ModalHandler: () => (/* binding */ ModalHandler)
/* harmony export */ });
/* harmony import */ var _alltasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alltasks */ "./src/alltasks.js");
/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today */ "./src/today.js");
/* harmony import */ var _week__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./week */ "./src/week.js");
/* harmony import */ var _important__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./important */ "./src/important.js");





class ActiveTabHandler {
    constructor() {
        this.tabs = document.querySelectorAll('.tab');
        this.currentTab = 'tabAllTasks'
    }

    handleTabsClick() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                let target = e.target;
                while (target && !target.classList.contains('tab')) {
                    target = target.parentNode;
                }
                this.setActiveTab(target);
                this.openActiveTab(target)
            });
        });
    }

    setActiveTab(target) {
        this.tabs.forEach(tab => {
            tab.classList.remove('sidebar-item-active');
        });
        target.classList.add('sidebar-item-active');
    }

    openActiveTab(target){
        switch (target.id) {
            case 'tabAllTasks':
                if (this.currentTab === 'tabAllTasks') return;
                (0,_alltasks__WEBPACK_IMPORTED_MODULE_0__["default"])();
                this.currentTab = 'tabAllTasks'
                break;
    
            case 'tabToday':
                if (this.currentTab === 'tabToday') return;
                (0,_today__WEBPACK_IMPORTED_MODULE_1__["default"])();
                this.currentTab = 'tabToday'
                break;

            case 'tabThisWeek':
                if (this.currentTab === 'tabThisWeek') return;
                (0,_week__WEBPACK_IMPORTED_MODULE_2__["default"])();
                this.currentTab = 'tabThisWeek'
                break;

            case 'tabImportant':
                if (this.currentTab === 'tabImportant') return;
                (0,_important__WEBPACK_IMPORTED_MODULE_3__["default"])();
                this.currentTab = 'tabImportant'
                break;                
                
            default:
                break;
        }
    }
}

class ModalHandler {
    constructor(){

    }
    handleModals(){
        document.getElementById("addForm").addEventListener("submit", function(event) {
            event.preventDefault();
        });

        document.getElementById("renameForm").addEventListener("submit", function(event) {
            event.preventDefault();
        });

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
        const projectNameInput = document.getElementById('projectNameInput');
        const projectRenameInput = document.getElementById('projectRenameInput')
        const modalAlert = document.getElementById('modalAlert')
        projectNameInput.value = ''
        modalAlert.innerHTML = ''
        projectRenameInput.value = ''

        if(modal == null)return
        modal.classList.remove('active')
        overlay.classList.remove('active')
    }
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
function loadImportantTasks() {
    const mainHeading = document.getElementById('mainHeading')
    mainHeading.textContent = 'Important';    
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
/* harmony export */   "default": () => (/* binding */ loadProjects)
/* harmony export */ });
/* harmony import */ var _img_project_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/project.svg */ "./src/img/project.svg");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



const modalHandler = new _dom__WEBPACK_IMPORTED_MODULE_1__.ModalHandler(); 

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

function loadProjects() {
    projectsContainer.innerHTML = ''
    allProjects.forEach(project => {
      createProjectHtml(project);
    })
    addProjectToolsEvent()
    modalHandler.handleModals()
}

function createProjectHtml(project){
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

    // Append the "delete" button to the second <div> element
    divFlex3.appendChild(buttonDelete);

    // Append the second <div> element to the <li> element
    liElement.appendChild(divTools);
    
    projectsContainer.appendChild(liElement)
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
            return
        }

        if (existingProject) {
            modalAlert.textContent = '(The project with this name already exists.)'
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

let currentProject = null;

function addProjectToolsEvent() {
    const renameButtons = document.querySelectorAll('.btn-rename');
    const deleteButtons = document.querySelectorAll('.btn-delete');
    const renameProjectButton = document.getElementById('projectRenameButton');
    const closeModalButtonRename = document.getElementById('closeModalButtonRename');

    renameButtons.forEach((button, index) => {
        button.addEventListener('click', () => { 
           currentProject = allProjects[index];
        });
    });

    renameProjectButton.addEventListener('click', () => {
        if (currentProject) {
            const projectRenameInput = document.getElementById('projectRenameInput');
            currentProject.name = projectRenameInput.value;
            loadProjects();
            closeModalButtonRename.click();
            modalHandler.handleModals();
        } else {
            
        }
        currentProject = null;
    });

    deleteButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            allProjects.splice(index, 1);
            loadProjects();
        });
    });
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
            }, 155);
            handleTransition()
        }
        else {
            main.classList.remove('blur');
            footer.classList.remove('blur');
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
function loadTodayTasks() {
    const mainHeading = document.getElementById('mainHeading')
    mainHeading.textContent = 'Today';   
    
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
function loadWeekTasks() {
    const mainHeading = document.getElementById('mainHeading')
    mainHeading.textContent = 'This Week';    
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

/***/ "./src/img/project.svg":
/*!*****************************!*\
  !*** ./src/img/project.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cc32b781f5de4ce023f.svg";

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
    const activeTabHandler = new _dom__WEBPACK_IMPORTED_MODULE_3__.ActiveTabHandler();
    const modalHandler = new _dom__WEBPACK_IMPORTED_MODULE_3__.ModalHandler(); 

    (0,_sidebar__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_alltasks__WEBPACK_IMPORTED_MODULE_2__["default"])();
    activeTabHandler.handleTabsClick();
    (0,_projects__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_projects__WEBPACK_IMPORTED_MODULE_4__.addProjectEvent)();
    modalHandler.handleModals();
})();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jNTNmOTM3YzM4YmFmMWY5YmExNC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtKQUE0RDtBQUN4Ryw0Q0FBNEMsdUtBQWdFO0FBQzVHLDRDQUE0Qyw2R0FBbUM7QUFDL0UsNENBQTRDLHlIQUF5QztBQUNyRiw0Q0FBNEMsNkdBQW1DO0FBQy9FLDRDQUE0Qyx5SEFBeUM7QUFDckYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxnRkFBZ0YsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsY0FBYyxjQUFjLGFBQWEsY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVB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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUNpQjtBQUNDO0FBQ2lCO0FBQ2pCO0FBQ087O0FBRTdDO0FBQ0EsaUNBQWlDLGtEQUFnQjtBQUNqRCw2QkFBNkIsOENBQVk7O0FBRXpDLElBQUksb0RBQWE7QUFDakIsSUFBSSxxREFBWTtBQUNoQjtBQUNBLElBQUkscURBQVk7QUFDaEIsSUFBSSwwREFBZTtBQUNuQjtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvYWxsdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2ltcG9ydGFudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3RvZGF5LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3dlZWsuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9UVCBJbnRlcnBoYXNlcyBQcm8gVHJpYWwgQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1RUIEludGVycGhhc2VzIFBybyBUcmlhbCBEZW1pQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9yZW5hbWUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWcvcmVuYW1lLWhvdmVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vaW1nL2RlbGV0ZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9kZWxldGUtaG92ZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1RUQm9sZCc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnVFRTZW1pQm9sZCc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuaHRtbCB7XG4gICAgZm9udC1zaXplOiA2LjI1JTtcbn1cblxuYm9keSB7XG4gICAgZm9udC1zaXplOiAxNnJlbTtcbiAgICBmb250LWZhbWlseTogJ1RUU2VtaUJvbGQnO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG46cm9vdCB7XG4gICAgLS1wcmltYXJ5LWNvbG9yLWxpZ2h0OiAjMTI2ZmI1O1xuICAgIC0tc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0OiAjMTBhODg1O1xuICAgIC0tdGVydGlhcnktY29sb3ItbGlnaHQ6ICNmZjU0MzY7XG5cbiAgICAtLXByaW1hcnktY29sb3ItZGFyazogIzRlY2JmYjtcbiAgICAtLXNlY29uZGFyeS1jb2xvci1kYXJrOiAjNzRmZmUwO1xuICAgIC0tdGVydGlhcnktY29sb3ItZGFyazogI2ZlODk3NTtcblxuICAgIC0tYmFja2dyb3VuZC1saWdodDogI2ZmZmZmZjtcbiAgICAtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWxpZ2h0OiAjZmFmYWZhO1xuICAgIC0tYmFja2dyb3VuZC1kYXJrOiAjMjEyODQ0O1xuICAgIC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtZGFyazogI2Y0ZjVmNztcblxuICAgIC0taG92ZXItbGlnaHQ6ICNkZGUwZTQ7XG5cbiAgICAtLXRleHQtbGlnaHQ6ICMzMDMzMzY7XG4gICAgLS10ZXh0LWRhcms6ICNmZmZmZmY7XG5cbiAgICAtLXdhcm5pbmctbGlnaHQ6ICNmZjU0MzY7XG4gICAgLS13YXJuaW5nLWRhcms6ICNGRkYyMDA7XG59XG5cbi5ib2R5LWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDMwNXB4LCAxZnIpIHJlcGVhdCg0LCAxZnIpIDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMiwgMWZyKTtcbn1cblxuLnNpZGViYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtbGlnaHQpO1xuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAtMSAvIDI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ubWFpbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMTIgLyAtMTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDMwcHggNzBweCAwcHggNzBweDtcbn1cblxuLmZvb3RlcntcbiAgICBncmlkLWFyZWE6IDEyIC8gMiAvIC0xIC8gLTE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XG59XG5cbi5zaWRlYmFyLWxpc3R7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjNweDtcbn1cblxuLnByb2plY3RzLXNpZGViYXItbGlzdHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJweDtcbn1cblxuLnNpZGViYXItaXRlbXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogN3B4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zaWRlYmFyLWl0ZW06aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xufVxuXG4uc2lkZWJhci1pdGVtc3tcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICAgIGZvbnQtc2l6ZTogMTVyZW07XG59XG5cbi5zaWRlYmFyLWhlYWRlcntcbiAgICBmb250LXNpemU6IDIxcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgICBmb250LWZhbWlseTogJ1RUQm9sZCc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNpZGViYXItYm90dG9te1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG4uc2V0dGluZ3MtaXRlbXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcbn1cblxuLyogUmVtb3ZlIHRoaXMgY29udGFpbmVyIHdoZW4gdXNlKi9cbi5jb21wb25lbnQtdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIHRvcDogMzBweDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjODg4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIFRoZSBzd2l0Y2ggLSB0aGUgYm94IGFyb3VuZCB0aGUgc2xpZGVyICovXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDUxcHg7XG4gIGhlaWdodDogMzFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xuLmNoZWNrYm94IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uc3dpdGNoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZWI7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG59XG5cbi8qIFRoZSBzbGlkZXIgKi9cbi5zbGlkZXIge1xuICB3aWR0aDogMjdweDtcbiAgaGVpZ2h0OiAyN3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjdweC8yIC0gMTBweCk7XG4gIHRvcDogY2FsYyg1MCUgLSAyN3B4LzIpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSksIDBweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaGVja2JveDpjaGVja2VkICsgLnN3aXRjaCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNEM3NTk7XG59XG5cbi5jaGVja2JveDpjaGVja2VkICsgLnN3aXRjaCAuc2xpZGVyIHtcbiAgbGVmdDogY2FsYyg1MCUgLSAyN3B4LzIgKyAxMHB4KTtcbiAgdG9wOiBjYWxjKDUwJSAtIDI3cHgvMik7XG59XG5cblxuI09wZW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgbGVmdDogMjBweDtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4jT3BlbjpjaGVja2VkIH4gI3NpZGViYXJNZW51e1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xufVxuXG4ud3JhcHBlciB7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi53cmFwcGVyLnNlY29uZCxcbi53cmFwcGVyLnRoaXJkIHtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbiNPcGVuOmNoZWNrZWR+LnNpZGViYXItaWNvbj4ud3JhcHBlci5zZWNvbmQge1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbiNPcGVuOmNoZWNrZWR+LnNpZGViYXItaWNvbj4ud3JhcHBlci5maXJzdCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcbiAgICBtYXJnaW4tdG9wOiA5cHg7XG59XG5cbiNPcGVuOmNoZWNrZWR+LnNpZGViYXItaWNvbj4ud3JhcHBlci50aGlyZCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTMxNWRlZyk7XG4gICAgbWFyZ2luLXRvcDogLTlweDtcbn1cblxuLmJsdXIge1xuICAgIGZpbHRlcjogYmx1cig1cHgpO1xufVxuXG4uc2lkZWJhci1pY29ue1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaWRlYmFyLWl0ZW0tYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcbn1cblxuLmZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogN3B4O1xufVxuXG4uc2lkZWJhci1wcm9qZWN0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zaWRlYmFyLXByb2plY3Q6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xufVxuXG4uc2lkZWJhci1wcm9qZWN0OmhvdmVyIC5wcm9qZWN0LW5hbWUtaW5wdXR7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcbn1cblxuLnNpZGViYXItcHJvamVjdC1hY3RpdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xufVxuXG4uc2lkZWJhci1wcm9qZWN0OmhvdmVyIC5wcm9qZWN0LXRvb2xze1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbn1cblxuLnNtb290aC10cmFuc2l0aW9ue1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcbn1cblxuLm1lbnUtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgICBcbi5tZW51LW9wdGlvbnMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjVweDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICB9XG4gIFxuICAubWVudS1vcHRpb25zIGxpIHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAubWVudS1vcHRpb25zIGxpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1saWdodCk7XG4gIH1cbiAgXG4gIC5wcm9qZWN0LXRvb2xze1xuICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5wcm9qZWN0LXRvb2xzLWFjdGl2ZXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gIH1cblxuLnByb2plY3QtbmFtZS1pbnB1dHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LWZhbWlseTogJ1RUU2VtaUJvbGQnO1xuICBmb250LXNpemU6IDE1cmVtO1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrcy1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnI7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmhvbWUtaGVhZGluZ3tcbiAgZm9udC1zaXplOiAzNXJlbTtcbiAgZm9udC1mYW1pbHk6ICdUVEJvbGQnO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5hZGQtdGFzay1idG57XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogN3B4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogOHB4IDBweCA4cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZGQtdGFzay1idG46aG92ZXJ7XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1saWdodCk7XG59XG5cbi5tb2RhbHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHotaW5kZXg6IDk5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XG4gIHdpZHRoOiA2MDBweDtcbiAgbWF4LXdpZHRoOiA4MCU7XG59XG5cbi5tb2RhbC5hY3RpdmV7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xufVxuXG4ubW9kYWwtaGVhZGVye1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgZm9udC1zaXplOiAyMnJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cblxuLm1vZGFsLWFsZXJ0e1xuICBmb250LXNpemU6IDE2cmVtO1xuICBjb2xvcjogdmFyKC0td2FybmluZy1saWdodCk7XG59XG5cbi5tb2RhbC1oZWFkZXItcmVuYW1le1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgZm9udC1zaXplOiAyMnJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tb2RhbC10aXRsZXtcbiAgZm9udC1mYW1pbHk6ICdUVEJvbGQnO1xufVxuXG4ubW9kYWwtYm9keXtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMjVweDtcbn1cblxuI292ZXJsYXl7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xuICB6LWluZGV4OiAxNTtcbn1cblxuI292ZXJsYXkuYWN0aXZle1xuICBvcGFjaXR5OiAxO1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuXG4uYWRkLXByb2plY3QtaW5wdXR7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxMnB4IDEwcHggMTJweCAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LWZhbWlseTogJ1RUU2VtaUJvbGQnO1xuICBmb250LXNpemU6IDE2cmVtO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ucHJvamVjdC1tb2RhbC1idXR0b25ze1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBnYXA6IDEycHg7XG59XG5cbi5hZGQtcHJvamVjdC1idXR0b25ze1xuICBmbGV4OiAxO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgZm9udC1mYW1pbHk6ICdUVEJvbGQnO1xuICBmb250LXNpemU6IDE4cmVtO1xufVxuXG4uYWRkLWJ0bntcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0KTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmNsb3NlLWJ0bntcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3ItbGlnaHQpO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uYWRkLWJ0bjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFhMTdjO1xufVxuXG4uY2xvc2UtYnRuOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjM5MTY7XG59XG5cbi5idG4tcmVuYW1le1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcGFkZGluZzogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLXJlbmFtZTpob3ZlcntcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xufVxuXG4uYnRuLWRlbGV0ZXtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bi1kZWxldGU6aG92ZXJ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KTtcbn1cblxuLypNZWRpYSBRdWVyaWVzKi9cblxuLyogU21hcnRwaG9uZXMgKHBvcnRyYWl0IGFuZCBsYW5kc2NhcGUpICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmJvZHktY29udGFpbmVye1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIC5zaWRlYmFye1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiA3MHZ3O1xuICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MDBweCk7XG4gICAgfVxuICAgIC5zaWRlYmFyLWljb257XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMjJweDtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDIwO1xuICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLm1haW57XG4gICAgICAgIHBhZGRpbmc6IDY1cHggMjBweCAwcHggMjBweDtcbiAgICB9XG4gICAgI09wZW46Y2hlY2tlZH4jc2lkZWJhck1lbnUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xuICAgIH1cbiAgICAuZGVsZXRlLCAucmVuYW1le1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLm1vZGFsLWJvZHl7XG4gICAgICBwYWRkaW5nOiAxN3B4O1xuICAgIH1cbiAgICAubW9kYWwtaGVhZGVye1xuICAgICAgZm9udC1zaXplOiAxOHJlbTtcbiAgICB9XG4gICAgLmFkZC1wcm9qZWN0LWlucHV0e1xuICAgICAgZm9udC1zaXplOiAxNXJlbTtcbiAgICB9XG4gICAgLmFkZC1wcm9qZWN0LWJ1dHRvbnN7XG4gICAgICBmb250LXNpemU6IDE1cmVtO1xuICAgIH1cbiAgICAubW9kYWwtdGl0bGV7XG4gICAgICBmb250LXNpemU6IDIwcmVtO1xuICAgIH1cbiAgICAjb2xkTmFtZXtcbiAgICAgIGZvbnQtc2l6ZTogMjByZW07XG4gICAgfVxuICB9XG4gIFxuICAvKiBTbWFydHBob25lcyAocG9ydHJhaXQpICovXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAvKiBZb3VyIENTUyBzdHlsZXMgZm9yIHBvcnRyYWl0LW9yaWVudGVkIHBob25lcyBnbyBoZXJlICovXG4gIH1cbiAgXG4gIC8qIFNtYXJ0cGhvbmVzIChsYW5kc2NhcGUpICovXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC8qIFlvdXIgQ1NTIHN0eWxlcyBmb3IgbGFuZHNjYXBlLW9yaWVudGVkIHBob25lcyBnbyBoZXJlICovXG4gIH1cblxuXG4gIC8qIFRhYmxldHMgKHBvcnRyYWl0IGFuZCBsYW5kc2NhcGUpICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gICAgLyogWW91ciBDU1Mgc3R5bGVzIGZvciB0YWJsZXRzIGdvIGhlcmUgKi9cbiAgfVxuICBcbiAgLyogVGFibGV0cyAocG9ydHJhaXQpICovXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIC8qIFlvdXIgQ1NTIHN0eWxlcyBmb3IgcG9ydHJhaXQtb3JpZW50ZWQgdGFibGV0cyBnbyBoZXJlICovXG4gIH1cbiAgXG4gIC8qIFRhYmxldHMgKGxhbmRzY2FwZSkgKi9cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAgIC8qIFlvdXIgQ1NTIHN0eWxlcyBmb3IgbGFuZHNjYXBlLW9yaWVudGVkIHRhYmxldHMgZ28gaGVyZSAqL1xuICB9XG4gIGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBdUQ7QUFDekQ7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qiw0Q0FBMkQ7QUFDN0Q7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ks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bEI7SUFDQTtNQUNFLGdCQUFnQjtJQUNsQjtFQUNGOztFQUVBLDJCQUEyQjtFQUMzQjtJQUNFLHlEQUF5RDtFQUMzRDs7RUFFQSw0QkFBNEI7RUFDNUI7SUFDRSwwREFBMEQ7RUFDNUQ7OztFQUdBLHFDQUFxQztBQUN2QztJQUNJLHdDQUF3QztFQUMxQzs7RUFFQSx1QkFBdUI7RUFDdkI7SUFDRSwwREFBMEQ7RUFDNUQ7O0VBRUEsd0JBQXdCO0VBQ3hCO0lBQ0UsMkRBQTJEO0VBQzdEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdUVEJvbGQnO1xcbiAgc3JjOiB1cmwoLi9mb250cy9UVFxcXFwgSW50ZXJwaGFzZXNcXFxcIFByb1xcXFwgVHJpYWxcXFxcIEJvbGQudHRmKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1RUU2VtaUJvbGQnO1xcbiAgc3JjOiB1cmwoLi9mb250cy9UVFxcXFwgSW50ZXJwaGFzZXNcXFxcIFByb1xcXFwgVHJpYWxcXFxcIERlbWlCb2xkLnR0Zik7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LXNpemU6IDYuMjUlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1zaXplOiAxNnJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdUVFNlbWlCb2xkJztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tcHJpbWFyeS1jb2xvci1saWdodDogIzEyNmZiNTtcXG4gICAgLS1zZWNvbmRhcnktY29sb3ItbGlnaHQ6ICMxMGE4ODU7XFxuICAgIC0tdGVydGlhcnktY29sb3ItbGlnaHQ6ICNmZjU0MzY7XFxuXFxuICAgIC0tcHJpbWFyeS1jb2xvci1kYXJrOiAjNGVjYmZiO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvci1kYXJrOiAjNzRmZmUwO1xcbiAgICAtLXRlcnRpYXJ5LWNvbG9yLWRhcms6ICNmZTg5NzU7XFxuXFxuICAgIC0tYmFja2dyb3VuZC1saWdodDogI2ZmZmZmZjtcXG4gICAgLS1zZWNvbmRhcnktYmFja2dyb3VuZC1saWdodDogI2ZhZmFmYTtcXG4gICAgLS1iYWNrZ3JvdW5kLWRhcms6ICMyMTI4NDQ7XFxuICAgIC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtZGFyazogI2Y0ZjVmNztcXG5cXG4gICAgLS1ob3Zlci1saWdodDogI2RkZTBlNDtcXG5cXG4gICAgLS10ZXh0LWxpZ2h0OiAjMzAzMzM2O1xcbiAgICAtLXRleHQtZGFyazogI2ZmZmZmZjtcXG5cXG4gICAgLS13YXJuaW5nLWxpZ2h0OiAjZmY1NDM2O1xcbiAgICAtLXdhcm5pbmctZGFyazogI0ZGRjIwMDtcXG59XFxuXFxuLmJvZHktY29udGFpbmVye1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDMwNXB4LCAxZnIpIHJlcGVhdCg0LCAxZnIpIDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTIsIDFmcik7XFxufVxcblxcbi5zaWRlYmFye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZC1saWdodCk7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAtMSAvIDI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5tYWlue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDEyIC8gLTE7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDMwcHggNzBweCAwcHggNzBweDtcXG59XFxuXFxuLmZvb3RlcntcXG4gICAgZ3JpZC1hcmVhOiAxMiAvIDIgLyAtMSAvIC0xO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG59XFxuXFxuLnNpZGViYXItbGlzdHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDIzcHg7XFxufVxcblxcbi5wcm9qZWN0cy1zaWRlYmFyLWxpc3R7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnB4O1xcbn1cXG5cXG4uc2lkZWJhci1pdGVte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDdweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zaWRlYmFyLWl0ZW06aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcXG59XFxuXFxuLnNpZGViYXItaXRlbXN7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxuICAgIGZvbnQtc2l6ZTogMTVyZW07XFxufVxcblxcbi5zaWRlYmFyLWhlYWRlcntcXG4gICAgZm9udC1zaXplOiAyMXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG4gICAgZm9udC1mYW1pbHk6ICdUVEJvbGQnO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaWRlYmFyLWJvdHRvbXtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5zZXR0aW5ncy1pdGVte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDEwcHg7XFxufVxcblxcbi8qIFJlbW92ZSB0aGlzIGNvbnRhaW5lciB3aGVuIHVzZSovXFxuLmNvbXBvbmVudC10aXRsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDk5OTtcXG4gIHRvcDogMzBweDtcXG4gIGxlZnQ6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiAjODg4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDUxcHg7XFxuICBoZWlnaHQ6IDMxcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXFxuLmNoZWNrYm94IHtcXG4gIG9wYWNpdHk6IDA7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnN3aXRjaCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllYjtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG59XFxuXFxuLyogVGhlIHNsaWRlciAqL1xcbi5zbGlkZXIge1xcbiAgd2lkdGg6IDI3cHg7XFxuICBoZWlnaHQ6IDI3cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDI3cHgvMiAtIDEwcHgpO1xcbiAgdG9wOiBjYWxjKDUwJSAtIDI3cHgvMik7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcbiAgYm94LXNoYWRvdzogMHB4IDNweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KSwgMHB4IDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hlY2tib3g6Y2hlY2tlZCArIC5zd2l0Y2gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0Qzc1OTtcXG59XFxuXFxuLmNoZWNrYm94OmNoZWNrZWQgKyAuc3dpdGNoIC5zbGlkZXIge1xcbiAgbGVmdDogY2FsYyg1MCUgLSAyN3B4LzIgKyAxMHB4KTtcXG4gIHRvcDogY2FsYyg1MCUgLSAyN3B4LzIpO1xcbn1cXG5cXG5cXG4jT3BlbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMHB4O1xcbiAgICBsZWZ0OiAyMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jT3BlbjpjaGVja2VkIH4gI3NpZGViYXJNZW51e1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBoZWlnaHQ6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbn1cXG5cXG4ud3JhcHBlci5zZWNvbmQsXFxuLndyYXBwZXIudGhpcmQge1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxufVxcblxcbiNPcGVuOmNoZWNrZWR+LnNpZGViYXItaWNvbj4ud3JhcHBlci5zZWNvbmQge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4jT3BlbjpjaGVja2Vkfi5zaWRlYmFyLWljb24+LndyYXBwZXIuZmlyc3Qge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbiAgICBtYXJnaW4tdG9wOiA5cHg7XFxufVxcblxcbiNPcGVuOmNoZWNrZWR+LnNpZGViYXItaWNvbj4ud3JhcHBlci50aGlyZCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zMTVkZWcpO1xcbiAgICBtYXJnaW4tdG9wOiAtOXB4O1xcbn1cXG5cXG4uYmx1ciB7XFxuICAgIGZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG5cXG4uc2lkZWJhci1pY29ue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2lkZWJhci1pdGVtLWFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xcbn1cXG5cXG4uZmxleHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA3cHg7XFxufVxcblxcbi5zaWRlYmFyLXByb2plY3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zaWRlYmFyLXByb2plY3Q6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcXG59XFxuXFxuLnNpZGViYXItcHJvamVjdDpob3ZlciAucHJvamVjdC1uYW1lLWlucHV0e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xcbn1cXG5cXG4uc2lkZWJhci1wcm9qZWN0LWFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xcbn1cXG5cXG4uc2lkZWJhci1wcm9qZWN0OmhvdmVyIC5wcm9qZWN0LXRvb2xze1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uc21vb3RoLXRyYW5zaXRpb257XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcbiAgICBcXG4ubWVudS1vcHRpb25zIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDI1cHg7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgfVxcbiAgXFxuICAubWVudS1vcHRpb25zIGxpIHtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICBcXG4gIC5tZW51LW9wdGlvbnMgbGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1saWdodCk7XFxuICB9XFxuICBcXG4gIC5wcm9qZWN0LXRvb2xze1xcbiAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAucHJvamVjdC10b29scy1hY3RpdmV7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG4gIH1cXG5cXG4ucHJvamVjdC1uYW1lLWlucHV0e1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LWZhbWlseTogJ1RUU2VtaUJvbGQnO1xcbiAgZm9udC1zaXplOiAxNXJlbTtcXG4gIG1heC13aWR0aDogMTUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2tzLWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uaG9tZS1oZWFkaW5ne1xcbiAgZm9udC1zaXplOiAzNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnVFRCb2xkJztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA3cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiA4cHggMHB4IDhweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuOmhvdmVye1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcXG59XFxuXFxuLm1vZGFse1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHotaW5kZXg6IDk5OTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgbWF4LXdpZHRoOiA4MCU7XFxufVxcblxcbi5tb2RhbC5hY3RpdmV7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG59XFxuXFxuLm1vZGFsLWhlYWRlcntcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICBmb250LXNpemU6IDIycmVtO1xcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuXFxuLm1vZGFsLWFsZXJ0e1xcbiAgZm9udC1zaXplOiAxNnJlbTtcXG4gIGNvbG9yOiB2YXIoLS13YXJuaW5nLWxpZ2h0KTtcXG59XFxuXFxuLm1vZGFsLWhlYWRlci1yZW5hbWV7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC1zaXplOiAyMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwtdGl0bGV7XFxuICBmb250LWZhbWlseTogJ1RUQm9sZCc7XFxufVxcblxcbi5tb2RhbC1ib2R5e1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDI1cHg7XFxufVxcblxcbiNvdmVybGF5e1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gIHotaW5kZXg6IDE1O1xcbn1cXG5cXG4jb3ZlcmxheS5hY3RpdmV7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWlucHV0e1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMTJweCAxMHB4IDEycHggMTBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0LWxpZ2h0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtZmFtaWx5OiAnVFRTZW1pQm9sZCc7XFxuICBmb250LXNpemU6IDE2cmVtO1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLnByb2plY3QtbW9kYWwtYnV0dG9uc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBwYWRkaW5nLXRvcDogMTJweDtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ1dHRvbnN7XFxuICBmbGV4OiAxO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xcbiAgZm9udC1mYW1pbHk6ICdUVEJvbGQnO1xcbiAgZm9udC1zaXplOiAxOHJlbTtcXG59XFxuXFxuLmFkZC1idG57XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItbGlnaHQpO1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLmNsb3NlLWJ0bntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yLWxpZ2h0KTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5hZGQtYnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFhMTdjO1xcbn1cXG5cXG4uY2xvc2UtYnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzOTE2O1xcbn1cXG5cXG4uYnRuLXJlbmFtZXtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9yZW5hbWUuc3ZnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuLXJlbmFtZTpob3ZlcntcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9yZW5hbWUtaG92ZXIuc3ZnKTtcXG59XFxuXFxuLmJ0bi1kZWxldGV7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvZGVsZXRlLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0bi1kZWxldGU6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvZGVsZXRlLWhvdmVyLnN2Zyk7XFxufVxcblxcbi8qTWVkaWEgUXVlcmllcyovXFxuXFxuLyogU21hcnRwaG9uZXMgKHBvcnRyYWl0IGFuZCBsYW5kc2NhcGUpICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAuYm9keS1jb250YWluZXJ7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG4gICAgLnNpZGViYXJ7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB6LWluZGV4OiAxMDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiA3MHZ3O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwMHB4KTtcXG4gICAgfVxcbiAgICAuc2lkZWJhci1pY29ue1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogMjJweDtcXG4gICAgICAgIGhlaWdodDogMjJweDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IDIwO1xcbiAgICAgICAgdG9wOiAyMHB4O1xcbiAgICAgICAgbGVmdDogMjBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgICAubWFpbntcXG4gICAgICAgIHBhZGRpbmc6IDY1cHggMjBweCAwcHggMjBweDtcXG4gICAgfVxcbiAgICAjT3BlbjpjaGVja2VkfiNzaWRlYmFyTWVudSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gICAgfVxcbiAgICAuZGVsZXRlLCAucmVuYW1le1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgLm1vZGFsLWJvZHl7XFxuICAgICAgcGFkZGluZzogMTdweDtcXG4gICAgfVxcbiAgICAubW9kYWwtaGVhZGVye1xcbiAgICAgIGZvbnQtc2l6ZTogMThyZW07XFxuICAgIH1cXG4gICAgLmFkZC1wcm9qZWN0LWlucHV0e1xcbiAgICAgIGZvbnQtc2l6ZTogMTVyZW07XFxuICAgIH1cXG4gICAgLmFkZC1wcm9qZWN0LWJ1dHRvbnN7XFxuICAgICAgZm9udC1zaXplOiAxNXJlbTtcXG4gICAgfVxcbiAgICAubW9kYWwtdGl0bGV7XFxuICAgICAgZm9udC1zaXplOiAyMHJlbTtcXG4gICAgfVxcbiAgICAjb2xkTmFtZXtcXG4gICAgICBmb250LXNpemU6IDIwcmVtO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIC8qIFNtYXJ0cGhvbmVzIChwb3J0cmFpdCkgKi9cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gICAgLyogWW91ciBDU1Mgc3R5bGVzIGZvciBwb3J0cmFpdC1vcmllbnRlZCBwaG9uZXMgZ28gaGVyZSAqL1xcbiAgfVxcbiAgXFxuICAvKiBTbWFydHBob25lcyAobGFuZHNjYXBlKSAqL1xcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIC8qIFlvdXIgQ1NTIHN0eWxlcyBmb3IgbGFuZHNjYXBlLW9yaWVudGVkIHBob25lcyBnbyBoZXJlICovXFxuICB9XFxuXFxuXFxuICAvKiBUYWJsZXRzIChwb3J0cmFpdCBhbmQgbGFuZHNjYXBlKSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcXG4gICAgLyogWW91ciBDU1Mgc3R5bGVzIGZvciB0YWJsZXRzIGdvIGhlcmUgKi9cXG4gIH1cXG4gIFxcbiAgLyogVGFibGV0cyAocG9ydHJhaXQpICovXFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXG4gICAgLyogWW91ciBDU1Mgc3R5bGVzIGZvciBwb3J0cmFpdC1vcmllbnRlZCB0YWJsZXRzIGdvIGhlcmUgKi9cXG4gIH1cXG4gIFxcbiAgLyogVGFibGV0cyAobGFuZHNjYXBlKSAqL1xcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xcbiAgICAvKiBZb3VyIENTUyBzdHlsZXMgZm9yIGxhbmRzY2FwZS1vcmllbnRlZCB0YWJsZXRzIGdvIGhlcmUgKi9cXG4gIH1cXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEFsbFRhc2tzKCkge1xuICAgIGNvbnN0IG1haW5IZWFkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5IZWFkaW5nJylcbiAgICBtYWluSGVhZGluZy50ZXh0Q29udGVudCA9ICdBbGwgVGFza3MnOyAgICBcbn0iLCJpbXBvcnQgbG9hZEFsbFRhc2tzIGZyb20gXCIuL2FsbHRhc2tzXCI7XG5pbXBvcnQgbG9hZFRvZGF5VGFza3MgZnJvbSBcIi4vdG9kYXlcIjtcbmltcG9ydCBsb2FkV2Vla1Rhc2tzIGZyb20gXCIuL3dlZWtcIjtcbmltcG9ydCBsb2FkSW1wb3J0YW50VGFza3MgZnJvbSBcIi4vaW1wb3J0YW50XCI7XG5cbmV4cG9ydCBjbGFzcyBBY3RpdmVUYWJIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpO1xuICAgICAgICB0aGlzLmN1cnJlbnRUYWIgPSAndGFiQWxsVGFza3MnXG4gICAgfVxuXG4gICAgaGFuZGxlVGFic0NsaWNrKCkge1xuICAgICAgICB0aGlzLnRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHRhcmdldCAmJiAhdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFiJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlVGFiKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuQWN0aXZlVGFiKHRhcmdldClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVUYWIodGFyZ2V0KSB7XG4gICAgICAgIHRoaXMudGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhci1pdGVtLWFjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItaXRlbS1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICBvcGVuQWN0aXZlVGFiKHRhcmdldCl7XG4gICAgICAgIHN3aXRjaCAodGFyZ2V0LmlkKSB7XG4gICAgICAgICAgICBjYXNlICd0YWJBbGxUYXNrcyc6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRhYiA9PT0gJ3RhYkFsbFRhc2tzJykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGxvYWRBbGxUYXNrcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRhYiA9ICd0YWJBbGxUYXNrcydcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICBcbiAgICAgICAgICAgIGNhc2UgJ3RhYlRvZGF5JzpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGFiID09PSAndGFiVG9kYXknKSByZXR1cm47XG4gICAgICAgICAgICAgICAgbG9hZFRvZGF5VGFza3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUYWIgPSAndGFiVG9kYXknXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3RhYlRoaXNXZWVrJzpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGFiID09PSAndGFiVGhpc1dlZWsnKSByZXR1cm47XG4gICAgICAgICAgICAgICAgbG9hZFdlZWtUYXNrcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRhYiA9ICd0YWJUaGlzV2VlaydcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAndGFiSW1wb3J0YW50JzpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGFiID09PSAndGFiSW1wb3J0YW50JykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGxvYWRJbXBvcnRhbnRUYXNrcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRhYiA9ICd0YWJJbXBvcnRhbnQnXG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vZGFsSGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgIH1cbiAgICBoYW5kbGVNb2RhbHMoKXtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRGb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVuYW1lRm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBvcGVuTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWwtdGFyZ2V0XScpXG4gICAgICAgIGNvbnN0IGNsb3NlTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY2xvc2UtYnV0dG9uXScpXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpXG5cbiAgICAgICAgb3Blbk1vZGFsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbi5kYXRhc2V0Lm1vZGFsVGFyZ2V0KVxuICAgICAgICAgICAgICAgIHRoaXMub3Blbk1vZGFsKG1vZGFsKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBjbG9zZU1vZGFsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBidXR0b24uY2xvc2VzdCgnLm1vZGFsJylcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwobW9kYWwpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwuYWN0aXZlJylcbiAgICAgICAgICAgIG1vZGFscy5mb3JFYWNoKG1vZGFsID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwobW9kYWwpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgb3Blbk1vZGFsKG1vZGFsKXtcbiAgICAgICAgaWYobW9kYWwgPT0gbnVsbClyZXR1cm5cbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIGNsb3NlTW9kYWwobW9kYWwpe1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lSW5wdXQnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdFJlbmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RSZW5hbWVJbnB1dCcpXG4gICAgICAgIGNvbnN0IG1vZGFsQWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxBbGVydCcpXG4gICAgICAgIHByb2plY3ROYW1lSW5wdXQudmFsdWUgPSAnJ1xuICAgICAgICBtb2RhbEFsZXJ0LmlubmVySFRNTCA9ICcnXG4gICAgICAgIHByb2plY3RSZW5hbWVJbnB1dC52YWx1ZSA9ICcnXG5cbiAgICAgICAgaWYobW9kYWwgPT0gbnVsbClyZXR1cm5cbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRJbXBvcnRhbnRUYXNrcygpIHtcbiAgICBjb25zdCBtYWluSGVhZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluSGVhZGluZycpXG4gICAgbWFpbkhlYWRpbmcudGV4dENvbnRlbnQgPSAnSW1wb3J0YW50JzsgICAgXG59IiwiaW1wb3J0IHByb2plY3RJY29uIGZyb20gJy4vaW1nL3Byb2plY3Quc3ZnJ1xuaW1wb3J0IHsgTW9kYWxIYW5kbGVyIH0gZnJvbSAnLi9kb20nO1xuXG5jb25zdCBtb2RhbEhhbmRsZXIgPSBuZXcgTW9kYWxIYW5kbGVyKCk7IFxuXG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0c0NvbnRhaW5lcicpXG5cbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIH1cbn1cblxubGV0IGFsbFByb2plY3RzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ1RvRG8nLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTXkgV29yaycsXG4gICAgfSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFByb2plY3RzKCkge1xuICAgIHByb2plY3RzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgYWxsUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgIGNyZWF0ZVByb2plY3RIdG1sKHByb2plY3QpO1xuICAgIH0pXG4gICAgYWRkUHJvamVjdFRvb2xzRXZlbnQoKVxuICAgIG1vZGFsSGFuZGxlci5oYW5kbGVNb2RhbHMoKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0SHRtbChwcm9qZWN0KXtcbiAgICAvLyBDcmVhdGUgdGhlIDxsaT4gZWxlbWVudCB3aXRoIGNsYXNzIFwic2lkZWJhci1wcm9qZWN0XCIgYW5kIFwidGFiXCJcbiAgICBjb25zdCBsaUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLXByb2plY3RcIiwgXCJ0YWJcIik7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGZpcnN0IDxkaXY+IGVsZW1lbnQgd2l0aCBjbGFzcyBcImZsZXhcIlxuICAgIGNvbnN0IGRpdkZsZXgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZGbGV4MS5jbGFzc0xpc3QuYWRkKFwiZmxleFwiKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgXCJwcm9qZWN0XCIgU1ZHIGljb25cbiAgICBjb25zdCBzdmdQcm9qZWN0ID0gbmV3IEltYWdlKCk7XG4gICAgc3ZnUHJvamVjdC5zcmMgPSBwcm9qZWN0SWNvbjsgXG5cbiAgICAvLyBBcHBlbmQgdGhlIFwicHJvamVjdFwiIGljb24gdG8gdGhlIGZpcnN0IDxkaXY+IGVsZW1lbnRcbiAgICBkaXZGbGV4MS5hcHBlbmRDaGlsZChzdmdQcm9qZWN0KTtcblxuICAgIC8vIENyZWF0ZSB0aGUgPGlucHV0PiBlbGVtZW50XG4gICAgY29uc3QgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0RWxlbWVudC52YWx1ZSA9IHByb2plY3QubmFtZVxuICAgIGlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZS1pbnB1dFwiKTtcbiAgICBpbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgZGl2RmxleDEuYXBwZW5kQ2hpbGQoaW5wdXRFbGVtZW50KTtcblxuICAgIC8vIEFwcGVuZCB0aGUgZmlyc3QgPGRpdj4gZWxlbWVudCB0byB0aGUgPGxpPiBlbGVtZW50XG4gICAgbGlFbGVtZW50LmFwcGVuZENoaWxkKGRpdkZsZXgxKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgc2Vjb25kIDxkaXY+IGVsZW1lbnQgd2l0aCBjbGFzcyBcInByb2plY3QtdG9vbHNcIlxuICAgIGNvbnN0IGRpdlRvb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZUb29scy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10b29sc1wiKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgPGRpdj4gZWxlbWVudHMgd2l0aCBjbGFzcyBcImZsZXhcIiBmb3IgdGhlIHRvb2wgaWNvbnNcbiAgICBjb25zdCBkaXZGbGV4MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2RmxleDIuY2xhc3NMaXN0LmFkZChcImZsZXhcIik7XG4gICAgY29uc3QgZGl2RmxleDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkZsZXgzLmNsYXNzTGlzdC5hZGQoXCJmbGV4XCIpO1xuXG4gICAgLy8gQXBwZW5kIHRoZSB0b29sIGljb25zIHRvIHRoZSBzZWNvbmQgPGRpdj4gZWxlbWVudFxuICAgIGRpdlRvb2xzLmFwcGVuZENoaWxkKGRpdkZsZXgyKTtcbiAgICBkaXZUb29scy5hcHBlbmRDaGlsZChkaXZGbGV4Myk7XG5cbiAgICAgLy9DcmVhdGUgYnV0dG9uIGRlbGV0ZVxuICAgICBjb25zdCBidXR0b25SZW5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgYnV0dG9uUmVuYW1lLmNsYXNzTGlzdC5hZGQoJ2J0bi1yZW5hbWUnKVxuICAgICBidXR0b25SZW5hbWUuc2V0QXR0cmlidXRlKCdkYXRhLW1vZGFsLXRhcmdldCcsICcjbW9kYWxSZW5hbWUnKTtcblxuICAgIC8vIEFwcGVuZCB0aGUgXCJyZW5hbWVcIiBidXR0b24gdG8gdGhlIHNlY29uZCA8ZGl2PiBlbGVtZW50XG4gICAgZGl2RmxleDIuYXBwZW5kQ2hpbGQoYnV0dG9uUmVuYW1lKTtcblxuICAgIC8vQ3JlYXRlIGJ1dHRvbiBkZWxldGVcbiAgICBjb25zdCBidXR0b25EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b25EZWxldGUuY2xhc3NMaXN0LmFkZCgnYnRuLWRlbGV0ZScpXG5cbiAgICAvLyBBcHBlbmQgdGhlIFwiZGVsZXRlXCIgYnV0dG9uIHRvIHRoZSBzZWNvbmQgPGRpdj4gZWxlbWVudFxuICAgIGRpdkZsZXgzLmFwcGVuZENoaWxkKGJ1dHRvbkRlbGV0ZSk7XG5cbiAgICAvLyBBcHBlbmQgdGhlIHNlY29uZCA8ZGl2PiBlbGVtZW50IHRvIHRoZSA8bGk+IGVsZW1lbnRcbiAgICBsaUVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2VG9vbHMpO1xuICAgIFxuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpRWxlbWVudClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RFdmVudCgpIHtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RCdXR0b24nKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lSW5wdXQnKTtcbiAgICBjb25zdCBjbG9zZU1vZGFsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlTW9kYWxCdXR0b24nKTtcbiAgICBjb25zdCBtb2RhbEFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsQWxlcnQnKVxuXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZUlucHV0LnZhbHVlLnRyaW0oKTtcblxuICAgICAgICAvLyBDaGVjayBpZiBhIHByb2plY3Qgd2l0aCB0aGUgc2FtZSBuYW1lIGFscmVhZHkgZXhpc3RzXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdCA9IGFsbFByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IG5ld1Byb2plY3ROYW1lKTtcblxuICAgICAgICBpZihuZXdQcm9qZWN0TmFtZSA9PT0gJycpe1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXhpc3RpbmdQcm9qZWN0KSB7XG4gICAgICAgICAgICBtb2RhbEFsZXJ0LnRleHRDb250ZW50ID0gJyhUaGUgcHJvamVjdCB3aXRoIHRoaXMgbmFtZSBhbHJlYWR5IGV4aXN0cy4pJ1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoYWxsUHJvamVjdHMubGVuZ3RoID09PSA1KXsgIFxuICAgICAgICAgICAgbW9kYWxBbGVydC50ZXh0Q29udGVudCA9ICcoQ2FudCBoYXZlIG1vcmUgdGhhbiBmaXZlIHByb2plY3RzLiBVcGdyYWRlIHRvIFBSTy4pJ1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5ld1Byb2plY3ROYW1lKTtcbiAgICAgICAgYWxsUHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgbG9hZFByb2plY3RzKCk7XG4gICAgICAgIGNsb3NlTW9kYWxCdXR0b24uY2xpY2soKTtcbiAgICB9KTtcbn1cblxubGV0IGN1cnJlbnRQcm9qZWN0ID0gbnVsbDtcblxuZnVuY3Rpb24gYWRkUHJvamVjdFRvb2xzRXZlbnQoKSB7XG4gICAgY29uc3QgcmVuYW1lQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tcmVuYW1lJyk7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tZGVsZXRlJyk7XG4gICAgY29uc3QgcmVuYW1lUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0UmVuYW1lQnV0dG9uJyk7XG4gICAgY29uc3QgY2xvc2VNb2RhbEJ1dHRvblJlbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZU1vZGFsQnV0dG9uUmVuYW1lJyk7XG5cbiAgICByZW5hbWVCdXR0b25zLmZvckVhY2goKGJ1dHRvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBcbiAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBhbGxQcm9qZWN0c1tpbmRleF07XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmVuYW1lUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0UmVuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFJlbmFtZUlucHV0Jyk7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdC5uYW1lID0gcHJvamVjdFJlbmFtZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgbG9hZFByb2plY3RzKCk7XG4gICAgICAgICAgICBjbG9zZU1vZGFsQnV0dG9uUmVuYW1lLmNsaWNrKCk7XG4gICAgICAgICAgICBtb2RhbEhhbmRsZXIuaGFuZGxlTW9kYWxzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50UHJvamVjdCA9IG51bGw7XG4gICAgfSk7XG5cbiAgICBkZWxldGVCdXR0b25zLmZvckVhY2goKGJ1dHRvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgYWxsUHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIGxvYWRQcm9qZWN0cygpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuIiwiY29uc3Qgc2lkZWJhclRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdPcGVuJyk7XG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXJNZW51JylcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpblNlY3Rpb24nKTtcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXJTZWN0aW9uJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVNpZGViYXIoKSB7XG4gICAgc2lkZWJhclRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzaWRlYmFyVG9nZ2xlLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnYmx1cicpO1xuICAgICAgICAgICAgICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdibHVyJyk7XG4gICAgICAgICAgICB9LCAxNTUpO1xuICAgICAgICAgICAgaGFuZGxlVHJhbnNpdGlvbigpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2JsdXInKTtcbiAgICAgICAgICAgIGZvb3Rlci5jbGFzc0xpc3QucmVtb3ZlKCdibHVyJyk7XG4gICAgICAgICAgICBoYW5kbGVUcmFuc2l0aW9uKClcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVUcmFuc2l0aW9uKCl7XG4gICAgaWYgKHNpZGViYXJUb2dnbGUuY2hlY2tlZCkge1xuICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3Ntb290aC10cmFuc2l0aW9uJylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc21vb3RoLXRyYW5zaXRpb24nKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnc21vb3RoLXRyYW5zaXRpb24nKVxuICAgICAgICB9LCAxNTUpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkVG9kYXlUYXNrcygpIHtcbiAgICBjb25zdCBtYWluSGVhZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluSGVhZGluZycpXG4gICAgbWFpbkhlYWRpbmcudGV4dENvbnRlbnQgPSAnVG9kYXknOyAgIFxuICAgIFxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRXZWVrVGFza3MoKSB7XG4gICAgY29uc3QgbWFpbkhlYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkhlYWRpbmcnKVxuICAgIG1haW5IZWFkaW5nLnRleHRDb250ZW50ID0gJ1RoaXMgV2Vlayc7ICAgIFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBoYW5kbGVTaWRlYmFyIGZyb20gJy4vc2lkZWJhcidcbmltcG9ydCBsb2FkQWxsVGFza3MgZnJvbSAnLi9hbGx0YXNrcyc7XG5pbXBvcnQgeyBBY3RpdmVUYWJIYW5kbGVyLCBNb2RhbEhhbmRsZXIgfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgbG9hZFByb2plY3RzIGZyb20gJy4vcHJvamVjdHMnO1xuaW1wb3J0IHsgYWRkUHJvamVjdEV2ZW50IH0gZnJvbSAnLi9wcm9qZWN0cyc7XG5cbihmdW5jdGlvbiB3ZWJzaXRlSGFuZGxlcigpe1xuICAgIGNvbnN0IGFjdGl2ZVRhYkhhbmRsZXIgPSBuZXcgQWN0aXZlVGFiSGFuZGxlcigpO1xuICAgIGNvbnN0IG1vZGFsSGFuZGxlciA9IG5ldyBNb2RhbEhhbmRsZXIoKTsgXG5cbiAgICBoYW5kbGVTaWRlYmFyKCk7XG4gICAgbG9hZEFsbFRhc2tzKCk7XG4gICAgYWN0aXZlVGFiSGFuZGxlci5oYW5kbGVUYWJzQ2xpY2soKTtcbiAgICBsb2FkUHJvamVjdHMoKTtcbiAgICBhZGRQcm9qZWN0RXZlbnQoKTtcbiAgICBtb2RhbEhhbmRsZXIuaGFuZGxlTW9kYWxzKCk7XG59KSgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=