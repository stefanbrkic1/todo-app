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
    #deleteProjectName{
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
  `, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'TTBold';\n  src: url(./fonts/TT\\ Interphases\\ Pro\\ Trial\\ Bold.ttf);\n}\n@font-face {\n  font-family: 'TTSemiBold';\n  src: url(./fonts/TT\\ Interphases\\ Pro\\ Trial\\ DemiBold.ttf);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    font-size: 6.25%;\n}\n\nbody {\n    font-size: 16rem;\n    font-family: 'TTSemiBold';\n    height: 100%;\n    overflow: hidden;\n}\n\n:root {\n    --primary-color-light: #126fb5;\n    --secondary-color-light: #10a885;\n    --tertiary-color-light: #ff5436;\n\n    --primary-color-dark: #4ecbfb;\n    --secondary-color-dark: #74ffe0;\n    --tertiary-color-dark: #fe8975;\n\n    --background-light: #ffffff;\n    --secondary-background-light: #fafafa;\n    --background-dark: #212844;\n    --secondary-background-dark: #f4f5f7;\n\n    --hover-light: #dde0e4;\n\n    --text-light: #303336;\n    --text-dark: #ffffff;\n\n    --warning-light: #ff5436;\n    --warning-dark: #FFF200;\n}\n\n.body-container{\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: minmax(305px, 1fr) repeat(4, 1fr) ;\n    grid-template-rows: repeat(12, 1fr);\n}\n\n.sidebar{\n    background-color: var(--secondary-background-light);\n    grid-area: 1 / 1 / -1 / 2;\n    box-sizing: border-box;\n    padding: 20px;\n}\n\n.main{\n    background-color: var(--background-light);\n    grid-area: 1 / 2 / 12 / -1;\n    box-sizing: border-box;\n    padding: 30px 70px 0px 70px;\n}\n\n.footer{\n    grid-area: 12 / 2 / -1 / -1;\n    background-color: var(--background-light);\n}\n\n.sidebar-list{\n    list-style-type: none;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    padding-bottom: 23px;\n}\n\n.projects-sidebar-list{\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding-bottom: 5px;\n}\n\n.sidebar-item{\n    display: flex;\n    gap: 7px;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 5px 5px 5px 10px;\n    cursor: pointer;\n    border-radius: 5px;\n}\n\n.sidebar-item:hover{\n    background-color: var(--hover-light);\n}\n\n.sidebar-items{\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    height: 100%;\n    color: var(--text-light);\n    font-size: 15rem;\n}\n\n.sidebar-header{\n    font-size: 21rem;\n    padding-bottom: 10px;\n    color: var(--text-light);\n    font-family: 'TTBold';\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.sidebar-bottom{\n    align-self: flex-end;\n}\n\n.settings-item{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    box-sizing: border-box;\n    padding: 5px 5px 5px 10px;\n}\n\n/* Remove this container when use*/\n.component-title {\n  width: 100%;\n  position: absolute;\n  z-index: 999;\n  top: 30px;\n  left: 0;\n  padding: 0;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #888;\n  text-align: center;\n}\n\n/* The switch - the box around the slider */\n.container {\n  width: 51px;\n  height: 31px;\n  position: relative;\n}\n\n/* Hide default HTML checkbox */\n.checkbox {\n  opacity: 0;\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n\n.switch {\n  width: 100%;\n  height: 100%;\n  display: block;\n  background-color: #e9e9eb;\n  border-radius: 16px;\n  cursor: pointer;\n  transition: all 0.2s ease-out;\n}\n\n/* The slider */\n.slider {\n  width: 27px;\n  height: 27px;\n  position: absolute;\n  left: calc(50% - 27px/2 - 10px);\n  top: calc(50% - 27px/2);\n  border-radius: 50%;\n  background: #FFFFFF;\n  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06);\n  transition: all 0.2s ease-out;\n  cursor: pointer;\n}\n\n.checkbox:checked + .switch {\n  background-color: #34C759;\n}\n\n.checkbox:checked + .switch .slider {\n  left: calc(50% - 27px/2 + 10px);\n  top: calc(50% - 27px/2);\n}\n\n\n#Open {\n    position: absolute;\n    top: 20px;\n    left: 20px;\n    display: none;\n}\n\n#Open:checked ~ #sidebarMenu{\n    transform: translateX(0px);\n}\n\n.wrapper {\n    height: 3px;\n    background-color: var(--text-light);\n    transition: all 0.5s;\n}\n\n.wrapper.second,\n.wrapper.third {\n    margin-top: 3px;\n}\n\n#Open:checked~.sidebar-icon>.wrapper.second {\n    opacity: 0;\n}\n\n#Open:checked~.sidebar-icon>.wrapper.first {\n    transform: rotate(315deg);\n    margin-top: 9px;\n}\n\n#Open:checked~.sidebar-icon>.wrapper.third {\n    transform: rotate(-315deg);\n    margin-top: -9px;\n}\n\n.blur {\n    filter: blur(5px);\n}\n\n.sidebar-icon{\n    display: none;\n}\n\n.sidebar-item-active{\n    background-color: var(--hover-light);\n}\n\n.flex{\n    display: flex;\n    align-items: center;\n    gap: 7px;\n}\n\n.sidebar-project{\n    display: flex;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 5px 5px 5px 10px;\n    cursor: pointer;\n    border-radius: 5px;\n    justify-content: space-between;\n}\n\n.sidebar-project:hover{\n    background-color: var(--hover-light);\n}\n\n.sidebar-project:hover .project-name-input{\n  background-color: var(--hover-light);\n}\n\n.sidebar-project-active{\n    background-color: var(--hover-light);\n}\n\n.sidebar-project:hover .project-tools{\n    margin-left: 10px;\n    display: block;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.smooth-transition{\n    transition: transform 300ms ease-in-out;\n}\n\n.menu-container {\n    position: relative;\n  }\n    \n.menu-options {\n    display: none;\n    position: absolute;\n    top: 25px;\n    right: 0;\n    background-color: var(--background-light);\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    list-style: none;\n  }\n  \n  .menu-options li {\n    padding: 10px 20px;\n    cursor: pointer;\n  }\n  \n  .menu-options li:hover {\n    background-color: var(--hover-light);\n  }\n  \n  .project-tools{\n   display: none;\n  }\n\n  .project-tools-active{\n    display: block;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n  }\n\n.project-name-input{\n  appearance: none;\n  border: none;\n  outline: none;\n  font-family: 'TTSemiBold';\n  font-size: 15rem;\n  max-width: 150px;\n  background-color: transparent;\n  color: var(--text-light);\n  cursor: pointer;\n}\n\n.tasks-container{\n  display: grid;\n  grid-template-rows: 1fr 10fr;\n  height: 100%;\n}\n\n.home-heading{\n  font-size: 35rem;\n  font-family: 'TTBold';\n  align-self: center;\n}\n\n.add-task-btn{\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 8px 0px 8px 15px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.add-task-btn:hover{\nbackground-color: var(--hover-light);\n}\n\n.modal{\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 200ms ease-in-out;\n  border-radius: 10px;\n  z-index: 999;\n  background-color: var(--background-light);\n  width: 600px;\n  max-width: 80%;\n}\n\n.modal.active{\n  transform: translate(-50%, -50%) scale(1);\n}\n\n.modal-header{\n  box-sizing: border-box;\n  padding: 10px 15px;\n  border-bottom: 1px solid black;\n  font-size: 22rem;\n  color: var(--text-light);\n  display: flex;\n  gap: 10px;\n  align-items: baseline;\n}\n\n.modal-alert{\n  font-size: 16rem;\n  color: var(--warning-light);\n}\n\n.modal-header-rename{\n  box-sizing: border-box;\n  padding: 10px 15px;\n  border-bottom: 1px solid black;\n  font-size: 22rem;\n  color: var(--text-light);\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.modal-title{\n  font-family: 'TTBold';\n}\n\n.modal-body{\n  box-sizing: border-box;\n  padding: 25px;\n}\n\n#overlay{\n  position: fixed;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, .5);\n  pointer-events: none;\n  transition: 200ms ease-in-out;\n  z-index: 15;\n}\n\n#overlay.active{\n  opacity: 1;\n  pointer-events: all;\n}\n\n.add-project-input{\n  width: 100%;\n  box-sizing: border-box;\n  padding: 12px 10px 12px 10px;\n  outline: none;\n  border: 1px solid var(--text-light);\n  border-radius: 5px;\n  font-family: 'TTSemiBold';\n  font-size: 16rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.project-modal-buttons{\n  display: flex;\n  height: 40px;\n  padding-top: 12px;\n  gap: 12px;\n}\n\n.add-project-buttons{\n  flex: 1;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  color: var(--text-dark);\n  font-family: 'TTBold';\n  font-size: 18rem;\n}\n\n.add-btn{\n  background-color: var(--secondary-color-light);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.close-btn{\n  background-color: var(--tertiary-color-light);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.add-btn:hover{\n    background-color: #01a17c;\n}\n\n.close-btn:hover{\n    background-color: #ff3916;\n}\n\n.btn-rename{\n  border: none;\n  outline: none;\n  background-color: transparent;\n  background-image: url(./img/rename.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n  padding: 12px;\n  cursor: pointer;\n}\n\n.btn-rename:hover{\n  background-image: url(./img/rename-hover.svg);\n}\n\n.btn-delete{\n  border: none;\n  outline: none;\n  background-color: transparent;\n  background-image: url(./img/delete.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n  padding: 12px;\n  cursor: pointer;\n}\n\n.btn-delete:hover{\n  background-image: url(./img/delete-hover.svg);\n}\n\n#deleteQuestion{\n  font-size: 18rem;\n  padding-bottom: 10px;\n  text-align: center;\n  color: var(--text-light);\n}\n\n/*Media Queries*/\n\n/* Smartphones (portrait and landscape) */\n@media only screen and (max-width: 767px) {\n    .body-container{\n        width: 100vw;\n        height: 100vh;\n        display: flex;\n        flex-direction: column;\n    }\n    .sidebar{\n        position: absolute;\n        z-index: 10;\n        height: 100%;\n        width: 70vw;\n        padding-top: 60px;\n        transform: translateX(-500px);\n    }\n    .sidebar-icon{\n        display: block;\n        width: 22px;\n        height: 22px;\n        position: absolute;\n        z-index: 20;\n        top: 20px;\n        left: 20px;\n        cursor: pointer;\n    }\n    .main{\n        padding: 65px 20px 0px 20px;\n    }\n    #Open:checked~#sidebarMenu {\n        transform: translateX(0px);\n        transition: transform 300ms ease-in-out;\n    }\n    .delete, .rename{\n      display: none;\n    }\n    .modal-body{\n      padding: 17px;\n    }\n    .modal-header{\n      font-size: 18rem;\n    }\n    .add-project-input{\n      font-size: 15rem;\n    }\n    .add-project-buttons{\n      font-size: 15rem;\n    }\n    .modal-title{\n      font-size: 20rem;\n    }\n    #oldName{\n      font-size: 20rem;\n    }\n    #deleteProjectName{\n      font-size: 20rem;\n    }\n  }\n  \n  /* Smartphones (portrait) */\n  @media only screen and (max-width: 480px) {\n    /* Your CSS styles for portrait-oriented phones go here */\n  }\n  \n  /* Smartphones (landscape) */\n  @media only screen and (min-width: 481px) and (max-width: 767px) {\n    /* Your CSS styles for landscape-oriented phones go here */\n  }\n\n\n  /* Tablets (portrait and landscape) */\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\n    /* Your CSS styles for tablets go here */\n  }\n  \n  /* Tablets (portrait) */\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    /* Your CSS styles for portrait-oriented tablets go here */\n  }\n  \n  /* Tablets (landscape) */\n  @media only screen and (min-width: 992px) and (max-width: 1023px) {\n    /* Your CSS styles for landscape-oriented tablets go here */\n  }\n  "],"sourceRoot":""}]);
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
/* harmony export */   ModalHandler: () => (/* binding */ ModalHandler),
/* harmony export */   ProjectsHandler: () => (/* binding */ ProjectsHandler)
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
                while (target && !target.classList.contains('tab')) {
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
                break;
    
            case 'tabToday':
                (0,_today__WEBPACK_IMPORTED_MODULE_1__["default"])();
                break;

            case 'tabThisWeek':
                (0,_week__WEBPACK_IMPORTED_MODULE_2__["default"])();
                break;

            case 'tabImportant':
                (0,_important__WEBPACK_IMPORTED_MODULE_3__["default"])();
                break;                
                
            default:
                break
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

        document.getElementById("deleteForm").addEventListener("submit", function(event) {
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
/* harmony export */   allProjects: () => (/* binding */ allProjects),
/* harmony export */   loadProjects: () => (/* binding */ loadProjects)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");


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

function loadProjects() {
    projectsContainer.innerHTML = ''
    allProjects.forEach(project => {
      projectsHandler.createProjectHtml(project);
    })
    tabHandler.handleTabsClick()
    handleProjectTabs(allProjects)
    addProjectToolsEvent()
    modalHandler.handleModals()
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
let currentIndex

function addProjectToolsEvent() {
    const renameButtons = document.querySelectorAll('.btn-rename');
    const deleteButtons = document.querySelectorAll('.btn-delete');
    const renameProjectButton = document.getElementById('projectRenameButton');
    const closeModalButtonRename = document.getElementById('closeModalButtonRename');
    const deleteProjectButton = document.getElementById('projectDeleteButton');
    const closeModalButtonDelete = document.getElementById('closeModalButtonDelete');

    renameButtons.forEach((button, index) => {
        button.addEventListener('click', () => { 
           currentProject = allProjects[index];
           currentIndex = index;
           const oldName = document.getElementById('oldName');
           oldName.textContent = `(${currentProject.name})`
        });
    });

    renameProjectButton.addEventListener('click', () => {
        const projectTabs = document.querySelectorAll('.sidebar-project')
        const projectRenameInput = document.getElementById('projectRenameInput');

        if(projectRenameInput.value === ''){
            return
        }

        if (currentProject) {            
            currentProject.name = projectRenameInput.value;
            loadProjects();
            //projectTabs[currentIndex].click()
            closeModalButtonRename.click();
            modalHandler.handleModals();
        } else {
            
        }
        currentProject = null;
    });

    deleteButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentProject = allProjects[index];
            currentIndex = index;
            const deleteProjectName = document.getElementById('deleteProjectName')
            deleteProjectName.textContent = `(${currentProject.name})`
        });
    });

    deleteProjectButton.addEventListener('click', () => {
        const tabAllTasks = document.getElementById('tabAllTasks')
        if (currentProject) {
            allProjects.splice(currentIndex, 1)
            loadProjects();
            closeModalButtonDelete.click();
            tabAllTasks.click()
            modalHandler.handleModals();
        } else {
            
        }
        currentProject = null;
    });
}


let currentProjectTab = null

function handleProjectTabs(allProjects){
    const projectTabs = document.querySelectorAll('.sidebar-project')
    const tabs = document.querySelectorAll('.tab')
    projectTabs.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
            let target = e.target
            if(target.classList.contains('btn-rename')){
                console.log('rename clicked')
            }
            else{
                console.log('kita')
                tabs.forEach(tab => {
                    tab.classList.remove('sidebar-item-active')
                })
                tab.classList.add('sidebar-item-active')
                currentProjectTab = allProjects[index]
                loadActiveProject(currentProjectTab)
            }
        })
    })
}

function loadActiveProject(currentProjectTab){
    const mainHeading = document.getElementById('mainHeading')
    mainHeading.textContent = `Project | ${currentProjectTab.name}`
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
    const modalHandler = new _dom__WEBPACK_IMPORTED_MODULE_3__.ModalHandler(); 

    (0,_sidebar__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_alltasks__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_projects__WEBPACK_IMPORTED_MODULE_4__.loadProjects)();
    (0,_projects__WEBPACK_IMPORTED_MODULE_4__.addProjectEvent)();
    modalHandler.handleModals();
})();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hNmZmMzAyM2U3ZTA2MWUzMjg3ZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtKQUE0RDtBQUN4Ryw0Q0FBNEMsdUtBQWdFO0FBQzVHLDRDQUE0Qyw2R0FBbUM7QUFDL0UsNENBQTRDLHlIQUF5QztBQUNyRiw0Q0FBNEMsNkdBQW1DO0FBQy9FLDRDQUE0Qyx5SEFBeUM7QUFDckYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxnRkFBZ0YsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsY0FBYyxjQUFjLGFBQWEsY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxV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QUFDaEIsSUFBSSx1REFBWTtBQUNoQixJQUFJLDBEQUFlO0FBQ25CO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9hbGx0YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW1wb3J0YW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdG9kYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvd2Vlay5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1RUIEludGVycGhhc2VzIFBybyBUcmlhbCBCb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvVFQgSW50ZXJwaGFzZXMgUHJvIFRyaWFsIERlbWlCb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1nL3JlbmFtZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltZy9yZW5hbWUtaG92ZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9pbWcvZGVsZXRlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4vaW1nL2RlbGV0ZS1ob3Zlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnVFRCb2xkJztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdUVFNlbWlCb2xkJztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5odG1sIHtcbiAgICBmb250LXNpemU6IDYuMjUlO1xufVxuXG5ib2R5IHtcbiAgICBmb250LXNpemU6IDE2cmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnVFRTZW1pQm9sZCc7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbjpyb290IHtcbiAgICAtLXByaW1hcnktY29sb3ItbGlnaHQ6ICMxMjZmYjU7XG4gICAgLS1zZWNvbmRhcnktY29sb3ItbGlnaHQ6ICMxMGE4ODU7XG4gICAgLS10ZXJ0aWFyeS1jb2xvci1saWdodDogI2ZmNTQzNjtcblxuICAgIC0tcHJpbWFyeS1jb2xvci1kYXJrOiAjNGVjYmZiO1xuICAgIC0tc2Vjb25kYXJ5LWNvbG9yLWRhcms6ICM3NGZmZTA7XG4gICAgLS10ZXJ0aWFyeS1jb2xvci1kYXJrOiAjZmU4OTc1O1xuXG4gICAgLS1iYWNrZ3JvdW5kLWxpZ2h0OiAjZmZmZmZmO1xuICAgIC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtbGlnaHQ6ICNmYWZhZmE7XG4gICAgLS1iYWNrZ3JvdW5kLWRhcms6ICMyMTI4NDQ7XG4gICAgLS1zZWNvbmRhcnktYmFja2dyb3VuZC1kYXJrOiAjZjRmNWY3O1xuXG4gICAgLS1ob3Zlci1saWdodDogI2RkZTBlNDtcblxuICAgIC0tdGV4dC1saWdodDogIzMwMzMzNjtcbiAgICAtLXRleHQtZGFyazogI2ZmZmZmZjtcblxuICAgIC0td2FybmluZy1saWdodDogI2ZmNTQzNjtcbiAgICAtLXdhcm5pbmctZGFyazogI0ZGRjIwMDtcbn1cblxuLmJvZHktY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMzA1cHgsIDFmcikgcmVwZWF0KDQsIDFmcikgO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEyLCAxZnIpO1xufVxuXG4uc2lkZWJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZC1saWdodCk7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIC0xIC8gMjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5tYWlue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAxMiAvIC0xO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMzBweCA3MHB4IDBweCA3MHB4O1xufVxuXG4uZm9vdGVye1xuICAgIGdyaWQtYXJlYTogMTIgLyAyIC8gLTEgLyAtMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcbn1cblxuLnNpZGViYXItbGlzdHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyM3B4O1xufVxuXG4ucHJvamVjdHMtc2lkZWJhci1saXN0e1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uc2lkZWJhci1pdGVte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA3cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNpZGViYXItaXRlbTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1saWdodCk7XG59XG5cbi5zaWRlYmFyLWl0ZW1ze1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgZm9udC1zaXplOiAxNXJlbTtcbn1cblxuLnNpZGViYXItaGVhZGVye1xuICAgIGZvbnQtc2l6ZTogMjFyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICAgIGZvbnQtZmFtaWx5OiAnVFRCb2xkJztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2lkZWJhci1ib3R0b217XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbi5zZXR0aW5ncy1pdGVte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xufVxuXG4vKiBSZW1vdmUgdGhpcyBjb250YWluZXIgd2hlbiB1c2UqL1xuLmNvbXBvbmVudC10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgdG9wOiAzMHB4O1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICM4ODg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogVGhlIHN3aXRjaCAtIHRoZSBib3ggYXJvdW5kIHRoZSBzbGlkZXIgKi9cbi5jb250YWluZXIge1xuICB3aWR0aDogNTFweDtcbiAgaGVpZ2h0OiAzMXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXG4uY2hlY2tib3gge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5zd2l0Y2gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllYjtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn1cblxuLyogVGhlIHNsaWRlciAqL1xuLnNsaWRlciB7XG4gIHdpZHRoOiAyN3B4O1xuICBoZWlnaHQ6IDI3cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogY2FsYyg1MCUgLSAyN3B4LzIgLSAxMHB4KTtcbiAgdG9wOiBjYWxjKDUwJSAtIDI3cHgvMik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KSwgMHB4IDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNoZWNrYm94OmNoZWNrZWQgKyAuc3dpdGNoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0Qzc1OTtcbn1cblxuLmNoZWNrYm94OmNoZWNrZWQgKyAuc3dpdGNoIC5zbGlkZXIge1xuICBsZWZ0OiBjYWxjKDUwJSAtIDI3cHgvMiArIDEwcHgpO1xuICB0b3A6IGNhbGMoNTAlIC0gMjdweC8yKTtcbn1cblxuXG4jT3BlbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNPcGVuOmNoZWNrZWQgfiAjc2lkZWJhck1lbnV7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG59XG5cbi53cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuLndyYXBwZXIuc2Vjb25kLFxuLndyYXBwZXIudGhpcmQge1xuICAgIG1hcmdpbi10b3A6IDNweDtcbn1cblxuI09wZW46Y2hlY2tlZH4uc2lkZWJhci1pY29uPi53cmFwcGVyLnNlY29uZCB7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuI09wZW46Y2hlY2tlZH4uc2lkZWJhci1pY29uPi53cmFwcGVyLmZpcnN0IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xuICAgIG1hcmdpbi10b3A6IDlweDtcbn1cblxuI09wZW46Y2hlY2tlZH4uc2lkZWJhci1pY29uPi53cmFwcGVyLnRoaXJkIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzE1ZGVnKTtcbiAgICBtYXJnaW4tdG9wOiAtOXB4O1xufVxuXG4uYmx1ciB7XG4gICAgZmlsdGVyOiBibHVyKDVweCk7XG59XG5cbi5zaWRlYmFyLWljb257XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNpZGViYXItaXRlbS1hY3RpdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xufVxuXG4uZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA3cHg7XG59XG5cbi5zaWRlYmFyLXByb2plY3R7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnNpZGViYXItcHJvamVjdDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1saWdodCk7XG59XG5cbi5zaWRlYmFyLXByb2plY3Q6aG92ZXIgLnByb2plY3QtbmFtZS1pbnB1dHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xufVxuXG4uc2lkZWJhci1wcm9qZWN0LWFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1saWdodCk7XG59XG5cbi5zaWRlYmFyLXByb2plY3Q6aG92ZXIgLnByb2plY3QtdG9vbHN7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xufVxuXG4uc21vb3RoLXRyYW5zaXRpb257XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4ubWVudS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAgIFxuLm1lbnUtb3B0aW9ucyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyNXB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cbiAgXG4gIC5tZW51LW9wdGlvbnMgbGkge1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5tZW51LW9wdGlvbnMgbGk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcbiAgfVxuICBcbiAgLnByb2plY3QtdG9vbHN7XG4gICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnByb2plY3QtdG9vbHMtYWN0aXZle1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgfVxuXG4ucHJvamVjdC1uYW1lLWlucHV0e1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiAnVFRTZW1pQm9sZCc7XG4gIGZvbnQtc2l6ZTogMTVyZW07XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2tzLWNvbnRhaW5lcntcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaG9tZS1oZWFkaW5ne1xuICBmb250LXNpemU6IDM1cmVtO1xuICBmb250LWZhbWlseTogJ1RUQm9sZCc7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmFkZC10YXNrLWJ0bntcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA3cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiA4cHggMHB4IDhweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC10YXNrLWJ0bjpob3ZlcntcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcbn1cblxuLm1vZGFse1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgei1pbmRleDogOTk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcbiAgd2lkdGg6IDYwMHB4O1xuICBtYXgtd2lkdGg6IDgwJTtcbn1cblxuLm1vZGFsLmFjdGl2ZXtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG59XG5cbi5tb2RhbC1oZWFkZXJ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICBmb250LXNpemU6IDIycmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuXG4ubW9kYWwtYWxlcnR7XG4gIGZvbnQtc2l6ZTogMTZyZW07XG4gIGNvbG9yOiB2YXIoLS13YXJuaW5nLWxpZ2h0KTtcbn1cblxuLm1vZGFsLWhlYWRlci1yZW5hbWV7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICBmb250LXNpemU6IDIycmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vZGFsLXRpdGxle1xuICBmb250LWZhbWlseTogJ1RUQm9sZCc7XG59XG5cbi5tb2RhbC1ib2R5e1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAyNXB4O1xufVxuXG4jb3ZlcmxheXtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBvcGFjaXR5OiAwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XG4gIHotaW5kZXg6IDE1O1xufVxuXG4jb3ZlcmxheS5hY3RpdmV7XG4gIG9wYWNpdHk6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG5cbi5hZGQtcHJvamVjdC1pbnB1dHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDEycHggMTBweCAxMnB4IDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQtbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtZmFtaWx5OiAnVFRTZW1pQm9sZCc7XG4gIGZvbnQtc2l6ZTogMTZyZW07XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5wcm9qZWN0LW1vZGFsLWJ1dHRvbnN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIGdhcDogMTJweDtcbn1cblxuLmFkZC1wcm9qZWN0LWJ1dHRvbnN7XG4gIGZsZXg6IDE7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBmb250LWZhbWlseTogJ1RUQm9sZCc7XG4gIGZvbnQtc2l6ZTogMThyZW07XG59XG5cbi5hZGQtYnRue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3ItbGlnaHQpO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uY2xvc2UtYnRue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvci1saWdodCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5hZGQtYnRuOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMWExN2M7XG59XG5cbi5jbG9zZS1idG46aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzkxNjtcbn1cblxuLmJ0bi1yZW5hbWV7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwYWRkaW5nOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG4tcmVuYW1lOmhvdmVye1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG59XG5cbi5idG4tZGVsZXRle1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcGFkZGluZzogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLWRlbGV0ZTpob3ZlcntcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fX30pO1xufVxuXG4jZGVsZXRlUXVlc3Rpb257XG4gIGZvbnQtc2l6ZTogMThyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbn1cblxuLypNZWRpYSBRdWVyaWVzKi9cblxuLyogU21hcnRwaG9uZXMgKHBvcnRyYWl0IGFuZCBsYW5kc2NhcGUpICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmJvZHktY29udGFpbmVye1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIC5zaWRlYmFye1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiA3MHZ3O1xuICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MDBweCk7XG4gICAgfVxuICAgIC5zaWRlYmFyLWljb257XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMjJweDtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDIwO1xuICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLm1haW57XG4gICAgICAgIHBhZGRpbmc6IDY1cHggMjBweCAwcHggMjBweDtcbiAgICB9XG4gICAgI09wZW46Y2hlY2tlZH4jc2lkZWJhck1lbnUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xuICAgIH1cbiAgICAuZGVsZXRlLCAucmVuYW1le1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLm1vZGFsLWJvZHl7XG4gICAgICBwYWRkaW5nOiAxN3B4O1xuICAgIH1cbiAgICAubW9kYWwtaGVhZGVye1xuICAgICAgZm9udC1zaXplOiAxOHJlbTtcbiAgICB9XG4gICAgLmFkZC1wcm9qZWN0LWlucHV0e1xuICAgICAgZm9udC1zaXplOiAxNXJlbTtcbiAgICB9XG4gICAgLmFkZC1wcm9qZWN0LWJ1dHRvbnN7XG4gICAgICBmb250LXNpemU6IDE1cmVtO1xuICAgIH1cbiAgICAubW9kYWwtdGl0bGV7XG4gICAgICBmb250LXNpemU6IDIwcmVtO1xuICAgIH1cbiAgICAjb2xkTmFtZXtcbiAgICAgIGZvbnQtc2l6ZTogMjByZW07XG4gICAgfVxuICAgICNkZWxldGVQcm9qZWN0TmFtZXtcbiAgICAgIGZvbnQtc2l6ZTogMjByZW07XG4gICAgfVxuICB9XG4gIFxuICAvKiBTbWFydHBob25lcyAocG9ydHJhaXQpICovXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAvKiBZb3VyIENTUyBzdHlsZXMgZm9yIHBvcnRyYWl0LW9yaWVudGVkIHBob25lcyBnbyBoZXJlICovXG4gIH1cbiAgXG4gIC8qIFNtYXJ0cGhvbmVzIChsYW5kc2NhcGUpICovXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC8qIFlvdXIgQ1NTIHN0eWxlcyBmb3IgbGFuZHNjYXBlLW9yaWVudGVkIHBob25lcyBnbyBoZXJlICovXG4gIH1cblxuXG4gIC8qIFRhYmxldHMgKHBvcnRyYWl0IGFuZCBsYW5kc2NhcGUpICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gICAgLyogWW91ciBDU1Mgc3R5bGVzIGZvciB0YWJsZXRzIGdvIGhlcmUgKi9cbiAgfVxuICBcbiAgLyogVGFibGV0cyAocG9ydHJhaXQpICovXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIC8qIFlvdXIgQ1NTIHN0eWxlcyBmb3IgcG9ydHJhaXQtb3JpZW50ZWQgdGFibGV0cyBnbyBoZXJlICovXG4gIH1cbiAgXG4gIC8qIFRhYmxldHMgKGxhbmRzY2FwZSkgKi9cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAgIC8qIFlvdXIgQ1NTIHN0eWxlcyBmb3IgbGFuZHNjYXBlLW9yaWVudGVkIHRhYmxldHMgZ28gaGVyZSAqL1xuICB9XG4gIGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBdUQ7QUFDekQ7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qiw0Q0FBMkQ7QUFDN0Q7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGdD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Q2xCO0lBQ0E7TUFDRSxnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLGdCQUFnQjtJQUNsQjtFQUNGOztFQUVBLDJCQUEyQjtFQUMzQjtJQUNFLHlEQUF5RDtFQUMzRDs7RUFFQSw0QkFBNEI7RUFDNUI7SUFDRSwwREFBMEQ7RUFDNUQ7OztFQUdBLHFDQUFxQztBQUN2QztJQUNJLHdDQUF3QztFQUMxQzs7RUFFQSx1QkFBdUI7RUFDdkI7SUFDRSwwREFBMEQ7RUFDNUQ7O0VBRUEsd0JBQXdCO0VBQ3hCO0lBQ0UsMkRBQTJEO0VBQzdEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdUVEJvbGQnO1xcbiAgc3JjOiB1cmwoLi9mb250cy9UVFxcXFwgSW50ZXJwaGFzZXNcXFxcIFByb1xcXFwgVHJpYWxcXFxcIEJvbGQudHRmKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1RUU2VtaUJvbGQnO1xcbiAgc3JjOiB1cmwoLi9mb250cy9UVFxcXFwgSW50ZXJwaGFzZXNcXFxcIFByb1xcXFwgVHJpYWxcXFxcIERlbWlCb2xkLnR0Zik7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LXNpemU6IDYuMjUlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1zaXplOiAxNnJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdUVFNlbWlCb2xkJztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tcHJpbWFyeS1jb2xvci1saWdodDogIzEyNmZiNTtcXG4gICAgLS1zZWNvbmRhcnktY29sb3ItbGlnaHQ6ICMxMGE4ODU7XFxuICAgIC0tdGVydGlhcnktY29sb3ItbGlnaHQ6ICNmZjU0MzY7XFxuXFxuICAgIC0tcHJpbWFyeS1jb2xvci1kYXJrOiAjNGVjYmZiO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvci1kYXJrOiAjNzRmZmUwO1xcbiAgICAtLXRlcnRpYXJ5LWNvbG9yLWRhcms6ICNmZTg5NzU7XFxuXFxuICAgIC0tYmFja2dyb3VuZC1saWdodDogI2ZmZmZmZjtcXG4gICAgLS1zZWNvbmRhcnktYmFja2dyb3VuZC1saWdodDogI2ZhZmFmYTtcXG4gICAgLS1iYWNrZ3JvdW5kLWRhcms6ICMyMTI4NDQ7XFxuICAgIC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtZGFyazogI2Y0ZjVmNztcXG5cXG4gICAgLS1ob3Zlci1saWdodDogI2RkZTBlNDtcXG5cXG4gICAgLS10ZXh0LWxpZ2h0OiAjMzAzMzM2O1xcbiAgICAtLXRleHQtZGFyazogI2ZmZmZmZjtcXG5cXG4gICAgLS13YXJuaW5nLWxpZ2h0OiAjZmY1NDM2O1xcbiAgICAtLXdhcm5pbmctZGFyazogI0ZGRjIwMDtcXG59XFxuXFxuLmJvZHktY29udGFpbmVye1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDMwNXB4LCAxZnIpIHJlcGVhdCg0LCAxZnIpIDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTIsIDFmcik7XFxufVxcblxcbi5zaWRlYmFye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZC1saWdodCk7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAtMSAvIDI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5tYWlue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDEyIC8gLTE7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDMwcHggNzBweCAwcHggNzBweDtcXG59XFxuXFxuLmZvb3RlcntcXG4gICAgZ3JpZC1hcmVhOiAxMiAvIDIgLyAtMSAvIC0xO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG59XFxuXFxuLnNpZGViYXItbGlzdHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDIzcHg7XFxufVxcblxcbi5wcm9qZWN0cy1zaWRlYmFyLWxpc3R7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLnNpZGViYXItaXRlbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA3cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2lkZWJhci1pdGVtOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1saWdodCk7XFxufVxcblxcbi5zaWRlYmFyLWl0ZW1ze1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xcbiAgICBmb250LXNpemU6IDE1cmVtO1xcbn1cXG5cXG4uc2lkZWJhci1oZWFkZXJ7XFxuICAgIGZvbnQtc2l6ZTogMjFyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxuICAgIGZvbnQtZmFtaWx5OiAnVFRCb2xkJztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2lkZWJhci1ib3R0b217XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4uc2V0dGluZ3MtaXRlbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xcbn1cXG5cXG4vKiBSZW1vdmUgdGhpcyBjb250YWluZXIgd2hlbiB1c2UqL1xcbi5jb21wb25lbnQtdGl0bGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5OTk7XFxuICB0b3A6IDMwcHg7XFxuICBsZWZ0OiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogIzg4ODtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogVGhlIHN3aXRjaCAtIHRoZSBib3ggYXJvdW5kIHRoZSBzbGlkZXIgKi9cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiA1MXB4O1xcbiAgaGVpZ2h0OiAzMXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xcbi5jaGVja2JveCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5zd2l0Y2gge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZWI7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbi8qIFRoZSBzbGlkZXIgKi9cXG4uc2xpZGVyIHtcXG4gIHdpZHRoOiAyN3B4O1xcbiAgaGVpZ2h0OiAyN3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogY2FsYyg1MCUgLSAyN3B4LzIgLSAxMHB4KTtcXG4gIHRvcDogY2FsYyg1MCUgLSAyN3B4LzIpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG4gIGJveC1zaGFkb3c6IDBweCAzcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSksIDBweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94OmNoZWNrZWQgKyAuc3dpdGNoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNEM3NTk7XFxufVxcblxcbi5jaGVja2JveDpjaGVja2VkICsgLnN3aXRjaCAuc2xpZGVyIHtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjdweC8yICsgMTBweCk7XFxuICB0b3A6IGNhbGMoNTAlIC0gMjdweC8yKTtcXG59XFxuXFxuXFxuI09wZW4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjBweDtcXG4gICAgbGVmdDogMjBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI09wZW46Y2hlY2tlZCB+ICNzaWRlYmFyTWVudXtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG59XFxuXFxuLndyYXBwZXIuc2Vjb25kLFxcbi53cmFwcGVyLnRoaXJkIHtcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcbn1cXG5cXG4jT3BlbjpjaGVja2Vkfi5zaWRlYmFyLWljb24+LndyYXBwZXIuc2Vjb25kIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuI09wZW46Y2hlY2tlZH4uc2lkZWJhci1pY29uPi53cmFwcGVyLmZpcnN0IHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG4gICAgbWFyZ2luLXRvcDogOXB4O1xcbn1cXG5cXG4jT3BlbjpjaGVja2Vkfi5zaWRlYmFyLWljb24+LndyYXBwZXIudGhpcmQge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzE1ZGVnKTtcXG4gICAgbWFyZ2luLXRvcDogLTlweDtcXG59XFxuXFxuLmJsdXIge1xcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcXG59XFxuXFxuLnNpZGViYXItaWNvbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNpZGViYXItaXRlbS1hY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcXG59XFxuXFxuLmZsZXh7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogN3B4O1xcbn1cXG5cXG4uc2lkZWJhci1wcm9qZWN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc2lkZWJhci1wcm9qZWN0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1saWdodCk7XFxufVxcblxcbi5zaWRlYmFyLXByb2plY3Q6aG92ZXIgLnByb2plY3QtbmFtZS1pbnB1dHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcXG59XFxuXFxuLnNpZGViYXItcHJvamVjdC1hY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcXG59XFxuXFxuLnNpZGViYXItcHJvamVjdDpob3ZlciAucHJvamVjdC10b29sc3tcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLnNtb290aC10cmFuc2l0aW9ue1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG4gICAgXFxuLm1lbnUtb3B0aW9ucyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyNXB4O1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLm1lbnUtb3B0aW9ucyBsaSB7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgXFxuICAubWVudS1vcHRpb25zIGxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xcbiAgfVxcbiAgXFxuICAucHJvamVjdC10b29sc3tcXG4gICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLnByb2plY3QtdG9vbHMtYWN0aXZle1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxuICB9XFxuXFxuLnByb2plY3QtbmFtZS1pbnB1dHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1mYW1pbHk6ICdUVFNlbWlCb2xkJztcXG4gIGZvbnQtc2l6ZTogMTVyZW07XFxuICBtYXgtd2lkdGg6IDE1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrcy1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmhvbWUtaGVhZGluZ3tcXG4gIGZvbnQtc2l6ZTogMzVyZW07XFxuICBmb250LWZhbWlseTogJ1RUQm9sZCc7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5hZGQtdGFzay1idG57XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogN3B4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogOHB4IDBweCA4cHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bjpob3ZlcntcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1saWdodCk7XFxufVxcblxcbi5tb2RhbHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB6LWluZGV4OiA5OTk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIG1heC13aWR0aDogODAlO1xcbn1cXG5cXG4ubW9kYWwuYWN0aXZle1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxufVxcblxcbi5tb2RhbC1oZWFkZXJ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC1zaXplOiAyMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxufVxcblxcbi5tb2RhbC1hbGVydHtcXG4gIGZvbnQtc2l6ZTogMTZyZW07XFxuICBjb2xvcjogdmFyKC0td2FybmluZy1saWdodCk7XFxufVxcblxcbi5tb2RhbC1oZWFkZXItcmVuYW1le1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gIGZvbnQtc2l6ZTogMjJyZW07XFxuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsLXRpdGxle1xcbiAgZm9udC1mYW1pbHk6ICdUVEJvbGQnO1xcbn1cXG5cXG4ubW9kYWwtYm9keXtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAyNXB4O1xcbn1cXG5cXG4jb3ZlcmxheXtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG9wYWNpdHk6IDA7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICB6LWluZGV4OiAxNTtcXG59XFxuXFxuI292ZXJsYXkuYWN0aXZle1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi5hZGQtcHJvamVjdC1pbnB1dHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDEycHggMTBweCAxMnB4IDEwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dC1saWdodCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LWZhbWlseTogJ1RUU2VtaUJvbGQnO1xcbiAgZm9udC1zaXplOiAxNnJlbTtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5wcm9qZWN0LW1vZGFsLWJ1dHRvbnN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgcGFkZGluZy10b3A6IDEycHg7XFxuICBnYXA6IDEycHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idXR0b25ze1xcbiAgZmxleDogMTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcXG4gIGZvbnQtZmFtaWx5OiAnVFRCb2xkJztcXG4gIGZvbnQtc2l6ZTogMThyZW07XFxufVxcblxcbi5hZGQtYnRue1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0KTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5jbG9zZS1idG57XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvci1saWdodCk7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4uYWRkLWJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxYTE3YztcXG59XFxuXFxuLmNsb3NlLWJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzkxNjtcXG59XFxuXFxuLmJ0bi1yZW5hbWV7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvcmVuYW1lLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0bi1yZW5hbWU6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvcmVuYW1lLWhvdmVyLnN2Zyk7XFxufVxcblxcbi5idG4tZGVsZXRle1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2RlbGV0ZS5zdmcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idG4tZGVsZXRlOmhvdmVye1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2RlbGV0ZS1ob3Zlci5zdmcpO1xcbn1cXG5cXG4jZGVsZXRlUXVlc3Rpb257XFxuICBmb250LXNpemU6IDE4cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxufVxcblxcbi8qTWVkaWEgUXVlcmllcyovXFxuXFxuLyogU21hcnRwaG9uZXMgKHBvcnRyYWl0IGFuZCBsYW5kc2NhcGUpICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAuYm9keS1jb250YWluZXJ7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG4gICAgLnNpZGViYXJ7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB6LWluZGV4OiAxMDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiA3MHZ3O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwMHB4KTtcXG4gICAgfVxcbiAgICAuc2lkZWJhci1pY29ue1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogMjJweDtcXG4gICAgICAgIGhlaWdodDogMjJweDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IDIwO1xcbiAgICAgICAgdG9wOiAyMHB4O1xcbiAgICAgICAgbGVmdDogMjBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgICAubWFpbntcXG4gICAgICAgIHBhZGRpbmc6IDY1cHggMjBweCAwcHggMjBweDtcXG4gICAgfVxcbiAgICAjT3BlbjpjaGVja2VkfiNzaWRlYmFyTWVudSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG4gICAgfVxcbiAgICAuZGVsZXRlLCAucmVuYW1le1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgLm1vZGFsLWJvZHl7XFxuICAgICAgcGFkZGluZzogMTdweDtcXG4gICAgfVxcbiAgICAubW9kYWwtaGVhZGVye1xcbiAgICAgIGZvbnQtc2l6ZTogMThyZW07XFxuICAgIH1cXG4gICAgLmFkZC1wcm9qZWN0LWlucHV0e1xcbiAgICAgIGZvbnQtc2l6ZTogMTVyZW07XFxuICAgIH1cXG4gICAgLmFkZC1wcm9qZWN0LWJ1dHRvbnN7XFxuICAgICAgZm9udC1zaXplOiAxNXJlbTtcXG4gICAgfVxcbiAgICAubW9kYWwtdGl0bGV7XFxuICAgICAgZm9udC1zaXplOiAyMHJlbTtcXG4gICAgfVxcbiAgICAjb2xkTmFtZXtcXG4gICAgICBmb250LXNpemU6IDIwcmVtO1xcbiAgICB9XFxuICAgICNkZWxldGVQcm9qZWN0TmFtZXtcXG4gICAgICBmb250LXNpemU6IDIwcmVtO1xcbiAgICB9XFxuICB9XFxuICBcXG4gIC8qIFNtYXJ0cGhvbmVzIChwb3J0cmFpdCkgKi9cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gICAgLyogWW91ciBDU1Mgc3R5bGVzIGZvciBwb3J0cmFpdC1vcmllbnRlZCBwaG9uZXMgZ28gaGVyZSAqL1xcbiAgfVxcbiAgXFxuICAvKiBTbWFydHBob25lcyAobGFuZHNjYXBlKSAqL1xcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIC8qIFlvdXIgQ1NTIHN0eWxlcyBmb3IgbGFuZHNjYXBlLW9yaWVudGVkIHBob25lcyBnbyBoZXJlICovXFxuICB9XFxuXFxuXFxuICAvKiBUYWJsZXRzIChwb3J0cmFpdCBhbmQgbGFuZHNjYXBlKSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcXG4gICAgLyogWW91ciBDU1Mgc3R5bGVzIGZvciB0YWJsZXRzIGdvIGhlcmUgKi9cXG4gIH1cXG4gIFxcbiAgLyogVGFibGV0cyAocG9ydHJhaXQpICovXFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXG4gICAgLyogWW91ciBDU1Mgc3R5bGVzIGZvciBwb3J0cmFpdC1vcmllbnRlZCB0YWJsZXRzIGdvIGhlcmUgKi9cXG4gIH1cXG4gIFxcbiAgLyogVGFibGV0cyAobGFuZHNjYXBlKSAqL1xcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xcbiAgICAvKiBZb3VyIENTUyBzdHlsZXMgZm9yIGxhbmRzY2FwZS1vcmllbnRlZCB0YWJsZXRzIGdvIGhlcmUgKi9cXG4gIH1cXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEFsbFRhc2tzKCkge1xuICAgIGNvbnN0IG1haW5IZWFkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5IZWFkaW5nJylcbiAgICBtYWluSGVhZGluZy50ZXh0Q29udGVudCA9ICdBbGwgVGFza3MnOyAgICBcbn0iLCJpbXBvcnQgbG9hZEFsbFRhc2tzIGZyb20gXCIuL2FsbHRhc2tzXCI7XG5pbXBvcnQgbG9hZFRvZGF5VGFza3MgZnJvbSBcIi4vdG9kYXlcIjtcbmltcG9ydCBsb2FkV2Vla1Rhc2tzIGZyb20gXCIuL3dlZWtcIjtcbmltcG9ydCBsb2FkSW1wb3J0YW50VGFza3MgZnJvbSBcIi4vaW1wb3J0YW50XCI7XG5pbXBvcnQgcHJvamVjdEljb24gZnJvbSAnLi9pbWcvcHJvamVjdC5zdmcnXG5cbmV4cG9ydCBjbGFzcyBBY3RpdmVUYWJIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgaGFuZGxlVGFic0NsaWNrKCkge1xuICAgICAgICB0aGlzLmhvbWVUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXItaXRlbScpO1xuICAgICAgICB0aGlzLnByb2plY3RUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXItcHJvamVjdCcpO1xuICAgICAgICB0aGlzLmhvbWVUYWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHdoaWxlICh0YXJnZXQgJiYgIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RhYicpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZVRhYih0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHRoaXMub3BlbkFjdGl2ZVRhYih0YXJnZXQpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlVGFiKHRhcmdldCkge1xuICAgICAgICB0aGlzLmhvbWVUYWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLWl0ZW0tYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb2plY3RUYWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLWl0ZW0tYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1pdGVtLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIG9wZW5BY3RpdmVUYWIodGFyZ2V0KXtcbiAgICAgICAgc3dpdGNoICh0YXJnZXQuaWQpIHtcbiAgICAgICAgICAgIGNhc2UgJ3RhYkFsbFRhc2tzJzpcbiAgICAgICAgICAgICAgICBsb2FkQWxsVGFza3MoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICBcbiAgICAgICAgICAgIGNhc2UgJ3RhYlRvZGF5JzpcbiAgICAgICAgICAgICAgICBsb2FkVG9kYXlUYXNrcygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICd0YWJUaGlzV2Vlayc6XG4gICAgICAgICAgICAgICAgbG9hZFdlZWtUYXNrcygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICd0YWJJbXBvcnRhbnQnOlxuICAgICAgICAgICAgICAgIGxvYWRJbXBvcnRhbnRUYXNrcygpO1xuICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vZGFsSGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgIH1cbiAgICBoYW5kbGVNb2RhbHMoKXtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRGb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVuYW1lRm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbGV0ZUZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgb3Blbk1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsLXRhcmdldF0nKVxuICAgICAgICBjb25zdCBjbG9zZU1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNsb3NlLWJ1dHRvbl0nKVxuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKVxuXG4gICAgICAgIG9wZW5Nb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXR0b24uZGF0YXNldC5tb2RhbFRhcmdldClcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5Nb2RhbChtb2RhbClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgY2xvc2VNb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gYnV0dG9uLmNsb3Nlc3QoJy5tb2RhbCcpXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKG1vZGFsKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLmFjdGl2ZScpXG4gICAgICAgICAgICBtb2RhbHMuZm9yRWFjaChtb2RhbCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKG1vZGFsKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG9wZW5Nb2RhbChtb2RhbCl7XG4gICAgICAgIGlmKG1vZGFsID09IG51bGwpcmV0dXJuXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9XG5cbiAgICBjbG9zZU1vZGFsKG1vZGFsKXtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TmFtZUlucHV0Jyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RSZW5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0UmVuYW1lSW5wdXQnKVxuICAgICAgICBjb25zdCBtb2RhbEFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsQWxlcnQnKVxuICAgICAgICBwcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gJydcbiAgICAgICAgbW9kYWxBbGVydC5pbm5lckhUTUwgPSAnJ1xuICAgICAgICBwcm9qZWN0UmVuYW1lSW5wdXQudmFsdWUgPSAnJ1xuXG4gICAgICAgIGlmKG1vZGFsID09IG51bGwpcmV0dXJuXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0c0hhbmRsZXJ7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHNDb250YWluZXInKVxuXG4gICAgY3JlYXRlUHJvamVjdEh0bWwocHJvamVjdCl7XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgPGxpPiBlbGVtZW50IHdpdGggY2xhc3MgXCJzaWRlYmFyLXByb2plY3RcIiBhbmQgXCJ0YWJcIlxuICAgICAgICBjb25zdCBsaUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGxpRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1wcm9qZWN0XCIsIFwidGFiXCIpO1xuICAgIFxuICAgICAgICAvLyBDcmVhdGUgdGhlIGZpcnN0IDxkaXY+IGVsZW1lbnQgd2l0aCBjbGFzcyBcImZsZXhcIlxuICAgICAgICBjb25zdCBkaXZGbGV4MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdkZsZXgxLmNsYXNzTGlzdC5hZGQoXCJmbGV4XCIpO1xuICAgIFxuICAgICAgICAvLyBDcmVhdGUgdGhlIFwicHJvamVjdFwiIFNWRyBpY29uXG4gICAgICAgIGNvbnN0IHN2Z1Byb2plY3QgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgc3ZnUHJvamVjdC5zcmMgPSBwcm9qZWN0SWNvbjsgXG4gICAgXG4gICAgICAgIC8vIEFwcGVuZCB0aGUgXCJwcm9qZWN0XCIgaWNvbiB0byB0aGUgZmlyc3QgPGRpdj4gZWxlbWVudFxuICAgICAgICBkaXZGbGV4MS5hcHBlbmRDaGlsZChzdmdQcm9qZWN0KTtcbiAgICBcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSA8aW5wdXQ+IGVsZW1lbnRcbiAgICAgICAgY29uc3QgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSBwcm9qZWN0Lm5hbWVcbiAgICAgICAgaW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZS1pbnB1dFwiKTtcbiAgICAgICAgaW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICAgICAgICBkaXZGbGV4MS5hcHBlbmRDaGlsZChpbnB1dEVsZW1lbnQpO1xuICAgIFxuICAgICAgICAvLyBBcHBlbmQgdGhlIGZpcnN0IDxkaXY+IGVsZW1lbnQgdG8gdGhlIDxsaT4gZWxlbWVudFxuICAgICAgICBsaUVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2RmxleDEpO1xuICAgIFxuICAgICAgICAvLyBDcmVhdGUgdGhlIHNlY29uZCA8ZGl2PiBlbGVtZW50IHdpdGggY2xhc3MgXCJwcm9qZWN0LXRvb2xzXCJcbiAgICAgICAgY29uc3QgZGl2VG9vbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXZUb29scy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10b29sc1wiKTtcbiAgICBcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSA8ZGl2PiBlbGVtZW50cyB3aXRoIGNsYXNzIFwiZmxleFwiIGZvciB0aGUgdG9vbCBpY29uc1xuICAgICAgICBjb25zdCBkaXZGbGV4MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdkZsZXgyLmNsYXNzTGlzdC5hZGQoXCJmbGV4XCIpO1xuICAgICAgICBjb25zdCBkaXZGbGV4MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdkZsZXgzLmNsYXNzTGlzdC5hZGQoXCJmbGV4XCIpO1xuICAgIFxuICAgICAgICAvLyBBcHBlbmQgdGhlIHRvb2wgaWNvbnMgdG8gdGhlIHNlY29uZCA8ZGl2PiBlbGVtZW50XG4gICAgICAgIGRpdlRvb2xzLmFwcGVuZENoaWxkKGRpdkZsZXgyKTtcbiAgICAgICAgZGl2VG9vbHMuYXBwZW5kQ2hpbGQoZGl2RmxleDMpO1xuICAgIFxuICAgICAgICAgLy9DcmVhdGUgYnV0dG9uIGRlbGV0ZVxuICAgICAgICAgY29uc3QgYnV0dG9uUmVuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICBidXR0b25SZW5hbWUuY2xhc3NMaXN0LmFkZCgnYnRuLXJlbmFtZScpXG4gICAgICAgICBidXR0b25SZW5hbWUuc2V0QXR0cmlidXRlKCdkYXRhLW1vZGFsLXRhcmdldCcsICcjbW9kYWxSZW5hbWUnKTtcbiAgICBcbiAgICAgICAgLy8gQXBwZW5kIHRoZSBcInJlbmFtZVwiIGJ1dHRvbiB0byB0aGUgc2Vjb25kIDxkaXY+IGVsZW1lbnRcbiAgICAgICAgZGl2RmxleDIuYXBwZW5kQ2hpbGQoYnV0dG9uUmVuYW1lKTtcbiAgICBcbiAgICAgICAgLy9DcmVhdGUgYnV0dG9uIGRlbGV0ZVxuICAgICAgICBjb25zdCBidXR0b25EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uRGVsZXRlLmNsYXNzTGlzdC5hZGQoJ2J0bi1kZWxldGUnKVxuICAgICAgICBidXR0b25EZWxldGUuc2V0QXR0cmlidXRlKCdkYXRhLW1vZGFsLXRhcmdldCcsICcjbW9kYWxEZWxldGUnKTtcbiAgICBcbiAgICAgICAgLy8gQXBwZW5kIHRoZSBcImRlbGV0ZVwiIGJ1dHRvbiB0byB0aGUgc2Vjb25kIDxkaXY+IGVsZW1lbnRcbiAgICAgICAgZGl2RmxleDMuYXBwZW5kQ2hpbGQoYnV0dG9uRGVsZXRlKTtcbiAgICBcbiAgICAgICAgLy8gQXBwZW5kIHRoZSBzZWNvbmQgPGRpdj4gZWxlbWVudCB0byB0aGUgPGxpPiBlbGVtZW50XG4gICAgICAgIGxpRWxlbWVudC5hcHBlbmRDaGlsZChkaXZUb29scyk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpRWxlbWVudClcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSW1wb3J0YW50VGFza3MoKSB7XG4gICAgY29uc3QgbWFpbkhlYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkhlYWRpbmcnKVxuICAgIG1haW5IZWFkaW5nLnRleHRDb250ZW50ID0gJ0ltcG9ydGFudCc7ICAgIFxufSIsImltcG9ydCB7IE1vZGFsSGFuZGxlciwgUHJvamVjdHNIYW5kbGVyLCBBY3RpdmVUYWJIYW5kbGVyIH0gZnJvbSAnLi9kb20nO1xuXG5jb25zdCBtb2RhbEhhbmRsZXIgPSBuZXcgTW9kYWxIYW5kbGVyKCk7IFxuY29uc3QgcHJvamVjdHNIYW5kbGVyID0gbmV3IFByb2plY3RzSGFuZGxlcigpO1xuY29uc3QgdGFiSGFuZGxlciA9IG5ldyBBY3RpdmVUYWJIYW5kbGVyKCk7XG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0c0NvbnRhaW5lcicpXG5cbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIH1cbn1cblxuZXhwb3J0IGxldCBhbGxQcm9qZWN0cyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdUb0RvJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ015IFdvcmsnLFxuICAgIH0sXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkUHJvamVjdHMoKSB7XG4gICAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgcHJvamVjdHNIYW5kbGVyLmNyZWF0ZVByb2plY3RIdG1sKHByb2plY3QpO1xuICAgIH0pXG4gICAgdGFiSGFuZGxlci5oYW5kbGVUYWJzQ2xpY2soKVxuICAgIGhhbmRsZVByb2plY3RUYWJzKGFsbFByb2plY3RzKVxuICAgIGFkZFByb2plY3RUb29sc0V2ZW50KClcbiAgICBtb2RhbEhhbmRsZXIuaGFuZGxlTW9kYWxzKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RFdmVudCgpIHtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RCdXR0b24nKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lSW5wdXQnKTtcbiAgICBjb25zdCBjbG9zZU1vZGFsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlTW9kYWxCdXR0b24nKTtcbiAgICBjb25zdCBtb2RhbEFsZXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsQWxlcnQnKVxuXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZUlucHV0LnZhbHVlLnRyaW0oKTtcblxuICAgICAgICAvLyBDaGVjayBpZiBhIHByb2plY3Qgd2l0aCB0aGUgc2FtZSBuYW1lIGFscmVhZHkgZXhpc3RzXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdCA9IGFsbFByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IG5ld1Byb2plY3ROYW1lKTtcblxuICAgICAgICBpZihuZXdQcm9qZWN0TmFtZSA9PT0gJycpe1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXhpc3RpbmdQcm9qZWN0KSB7XG4gICAgICAgICAgICBtb2RhbEFsZXJ0LnRleHRDb250ZW50ID0gJyhUaGUgcHJvamVjdCB3aXRoIHRoaXMgbmFtZSBhbHJlYWR5IGV4aXN0cy4pJ1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoYWxsUHJvamVjdHMubGVuZ3RoID09PSA1KXsgIFxuICAgICAgICAgICAgbW9kYWxBbGVydC50ZXh0Q29udGVudCA9ICcoQ2FudCBoYXZlIG1vcmUgdGhhbiBmaXZlIHByb2plY3RzLiBVcGdyYWRlIHRvIFBSTy4pJ1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5ld1Byb2plY3ROYW1lKTtcbiAgICAgICAgYWxsUHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgbG9hZFByb2plY3RzKCk7XG4gICAgICAgIGNsb3NlTW9kYWxCdXR0b24uY2xpY2soKTtcbiAgICB9KTtcbn1cblxubGV0IGN1cnJlbnRQcm9qZWN0ID0gbnVsbDtcbmxldCBjdXJyZW50SW5kZXhcblxuZnVuY3Rpb24gYWRkUHJvamVjdFRvb2xzRXZlbnQoKSB7XG4gICAgY29uc3QgcmVuYW1lQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tcmVuYW1lJyk7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tZGVsZXRlJyk7XG4gICAgY29uc3QgcmVuYW1lUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0UmVuYW1lQnV0dG9uJyk7XG4gICAgY29uc3QgY2xvc2VNb2RhbEJ1dHRvblJlbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZU1vZGFsQnV0dG9uUmVuYW1lJyk7XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0RGVsZXRlQnV0dG9uJyk7XG4gICAgY29uc3QgY2xvc2VNb2RhbEJ1dHRvbkRlbGV0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZU1vZGFsQnV0dG9uRGVsZXRlJyk7XG5cbiAgICByZW5hbWVCdXR0b25zLmZvckVhY2goKGJ1dHRvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBcbiAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBhbGxQcm9qZWN0c1tpbmRleF07XG4gICAgICAgICAgIGN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICAgICBjb25zdCBvbGROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29sZE5hbWUnKTtcbiAgICAgICAgICAgb2xkTmFtZS50ZXh0Q29udGVudCA9IGAoJHtjdXJyZW50UHJvamVjdC5uYW1lfSlgXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmVuYW1lUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhci1wcm9qZWN0JylcbiAgICAgICAgY29uc3QgcHJvamVjdFJlbmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RSZW5hbWVJbnB1dCcpO1xuXG4gICAgICAgIGlmKHByb2plY3RSZW5hbWVJbnB1dC52YWx1ZSA9PT0gJycpe1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudFByb2plY3QpIHsgICAgICAgICAgICBcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0Lm5hbWUgPSBwcm9qZWN0UmVuYW1lSW5wdXQudmFsdWU7XG4gICAgICAgICAgICBsb2FkUHJvamVjdHMoKTtcbiAgICAgICAgICAgIC8vcHJvamVjdFRhYnNbY3VycmVudEluZGV4XS5jbGljaygpXG4gICAgICAgICAgICBjbG9zZU1vZGFsQnV0dG9uUmVuYW1lLmNsaWNrKCk7XG4gICAgICAgICAgICBtb2RhbEhhbmRsZXIuaGFuZGxlTW9kYWxzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50UHJvamVjdCA9IG51bGw7XG4gICAgfSk7XG5cbiAgICBkZWxldGVCdXR0b25zLmZvckVhY2goKGJ1dHRvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBhbGxQcm9qZWN0c1tpbmRleF07XG4gICAgICAgICAgICBjdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZVByb2plY3ROYW1lJylcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3ROYW1lLnRleHRDb250ZW50ID0gYCgke2N1cnJlbnRQcm9qZWN0Lm5hbWV9KWBcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0YWJBbGxUYXNrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJBbGxUYXNrcycpXG4gICAgICAgIGlmIChjdXJyZW50UHJvamVjdCkge1xuICAgICAgICAgICAgYWxsUHJvamVjdHMuc3BsaWNlKGN1cnJlbnRJbmRleCwgMSlcbiAgICAgICAgICAgIGxvYWRQcm9qZWN0cygpO1xuICAgICAgICAgICAgY2xvc2VNb2RhbEJ1dHRvbkRlbGV0ZS5jbGljaygpO1xuICAgICAgICAgICAgdGFiQWxsVGFza3MuY2xpY2soKVxuICAgICAgICAgICAgbW9kYWxIYW5kbGVyLmhhbmRsZU1vZGFscygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudFByb2plY3QgPSBudWxsO1xuICAgIH0pO1xufVxuXG5cbmxldCBjdXJyZW50UHJvamVjdFRhYiA9IG51bGxcblxuZnVuY3Rpb24gaGFuZGxlUHJvamVjdFRhYnMoYWxsUHJvamVjdHMpe1xuICAgIGNvbnN0IHByb2plY3RUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXItcHJvamVjdCcpXG4gICAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKVxuICAgIHByb2plY3RUYWJzLmZvckVhY2goKHRhYiwgaW5kZXgpID0+IHtcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldFxuICAgICAgICAgICAgaWYodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYnRuLXJlbmFtZScpKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVuYW1lIGNsaWNrZWQnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygna2l0YScpXG4gICAgICAgICAgICAgICAgdGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLWl0ZW0tYWN0aXZlJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWl0ZW0tYWN0aXZlJylcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdFRhYiA9IGFsbFByb2plY3RzW2luZGV4XVxuICAgICAgICAgICAgICAgIGxvYWRBY3RpdmVQcm9qZWN0KGN1cnJlbnRQcm9qZWN0VGFiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGxvYWRBY3RpdmVQcm9qZWN0KGN1cnJlbnRQcm9qZWN0VGFiKXtcbiAgICBjb25zdCBtYWluSGVhZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluSGVhZGluZycpXG4gICAgbWFpbkhlYWRpbmcudGV4dENvbnRlbnQgPSBgUHJvamVjdCB8ICR7Y3VycmVudFByb2plY3RUYWIubmFtZX1gXG59XG5cblxuXG4iLCJjb25zdCBzaWRlYmFyVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ09wZW4nKTtcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhck1lbnUnKVxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluU2VjdGlvbicpO1xuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlclNlY3Rpb24nKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlU2lkZWJhcigpIHtcbiAgICBzaWRlYmFyVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHNpZGViYXJUb2dnbGUuY2hlY2tlZCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdibHVyJyk7XG4gICAgICAgICAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2JsdXInKTtcbiAgICAgICAgICAgIH0sIDE1NSk7XG4gICAgICAgICAgICBoYW5kbGVUcmFuc2l0aW9uKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnYmx1cicpO1xuICAgICAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2JsdXInKTtcbiAgICAgICAgICAgIGhhbmRsZVRyYW5zaXRpb24oKVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRyYW5zaXRpb24oKXtcbiAgICBpZiAoc2lkZWJhclRvZ2dsZS5jaGVja2VkKSB7XG4gICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnc21vb3RoLXRyYW5zaXRpb24nKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzbW9vdGgtdHJhbnNpdGlvbicpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdzbW9vdGgtdHJhbnNpdGlvbicpXG4gICAgICAgIH0sIDE1NSk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRUb2RheVRhc2tzKCkge1xuICAgIGNvbnN0IG1haW5IZWFkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5IZWFkaW5nJylcbiAgICBtYWluSGVhZGluZy50ZXh0Q29udGVudCA9ICdUb2RheSc7ICAgXG4gICAgXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFdlZWtUYXNrcygpIHtcbiAgICBjb25zdCBtYWluSGVhZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluSGVhZGluZycpXG4gICAgbWFpbkhlYWRpbmcudGV4dENvbnRlbnQgPSAnVGhpcyBXZWVrJzsgICAgXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IGhhbmRsZVNpZGViYXIgZnJvbSAnLi9zaWRlYmFyJ1xuaW1wb3J0IGxvYWRBbGxUYXNrcyBmcm9tICcuL2FsbHRhc2tzJztcbmltcG9ydCB7IEFjdGl2ZVRhYkhhbmRsZXIsIE1vZGFsSGFuZGxlcn0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHsgbG9hZFByb2plY3RzLCBhZGRQcm9qZWN0RXZlbnQgfSBmcm9tICcuL3Byb2plY3RzJztcblxuKGZ1bmN0aW9uIHdlYnNpdGVIYW5kbGVyKCl7XG4gICAgY29uc3QgbW9kYWxIYW5kbGVyID0gbmV3IE1vZGFsSGFuZGxlcigpOyBcblxuICAgIGhhbmRsZVNpZGViYXIoKTtcbiAgICBsb2FkQWxsVGFza3MoKTtcbiAgICBsb2FkUHJvamVjdHMoKTtcbiAgICBhZGRQcm9qZWN0RXZlbnQoKTtcbiAgICBtb2RhbEhhbmRsZXIuaGFuZGxlTW9kYWxzKCk7XG59KSgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=