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
  `, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'TTBold';\n  src: url(./fonts/TT\\ Interphases\\ Pro\\ Trial\\ Bold.ttf);\n}\n@font-face {\n  font-family: 'TTSemiBold';\n  src: url(./fonts/TT\\ Interphases\\ Pro\\ Trial\\ DemiBold.ttf);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    font-size: 6.25%;\n}\n\nbody {\n    font-size: 16rem;\n    font-family: 'TTSemiBold';\n    height: 100%;\n    overflow: hidden;\n}\n\n:root {\n    --primary-color-light: #126fb5;\n    --secondary-color-light: #10a885;\n    --tertiary-color-light: #ff5436;\n\n    --primary-color-dark: #4ecbfb;\n    --secondary-color-dark: #74ffe0;\n    --tertiary-color-dark: #fe8975;\n\n    --background-light: #ffffff;\n    --secondary-background-light: #fafafa;\n    --background-dark: #212844;\n    --secondary-background-dark: #f4f5f7;\n\n    --hover-light: #dde0e4;\n\n    --text-light: #303336;\n    --text-dark: #ffffff;\n\n    --warning-light: #ff5436;\n    --warning-dark: #FFF200;\n}\n\n.body-container{\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: minmax(305px, 1fr) repeat(4, 1fr) ;\n    grid-template-rows: repeat(12, 1fr);\n}\n\n.sidebar{\n    background-color: var(--secondary-background-light);\n    grid-area: 1 / 1 / -1 / 2;\n    box-sizing: border-box;\n    padding: 20px;\n}\n\n.main{\n    background-color: var(--background-light);\n    grid-area: 1 / 2 / 12 / -1;\n    box-sizing: border-box;\n    padding: 30px 70px 0px 70px;\n}\n\n.footer{\n    grid-area: 12 / 2 / -1 / -1;\n    background-color: var(--background-light);\n}\n\n.sidebar-list{\n    list-style-type: none;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    padding-bottom: 23px;\n}\n\n.projects-sidebar-list{\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding-bottom: 5px;\n}\n\n.sidebar-item{\n    display: flex;\n    gap: 7px;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 5px 5px 5px 10px;\n    cursor: pointer;\n    border-radius: 5px;\n}\n\n.sidebar-item:hover{\n    background-color: var(--hover-light);\n}\n\n.sidebar-items{\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    height: 100%;\n    color: var(--text-light);\n    font-size: 15rem;\n}\n\n.sidebar-add-project{\n  display: flex;\n  gap: 7px;\n  align-items: center;\n  box-sizing: border-box;\n  padding: 5px 5px 5px 10px;\n  cursor: pointer;\n  border-radius: 5px;\n}\n\n.sidebar-add-project:hover{\n  background-color: var(--hover-light);\n}\n\n.sidebar-header{\n    font-size: 21rem;\n    padding-bottom: 10px;\n    color: var(--text-light);\n    font-family: 'TTBold';\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.sidebar-bottom{\n    align-self: flex-end;\n}\n\n.settings-item{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    box-sizing: border-box;\n    padding: 5px 5px 5px 10px;\n}\n\n/* Remove this container when use*/\n.component-title {\n  width: 100%;\n  position: absolute;\n  z-index: 999;\n  top: 30px;\n  left: 0;\n  padding: 0;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #888;\n  text-align: center;\n}\n\n/* The switch - the box around the slider */\n.container {\n  width: 51px;\n  height: 31px;\n  position: relative;\n}\n\n/* Hide default HTML checkbox */\n.checkbox {\n  opacity: 0;\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n\n.switch {\n  width: 100%;\n  height: 100%;\n  display: block;\n  background-color: #e9e9eb;\n  border-radius: 16px;\n  cursor: pointer;\n  transition: all 0.2s ease-out;\n}\n\n/* The slider */\n.slider {\n  width: 27px;\n  height: 27px;\n  position: absolute;\n  left: calc(50% - 27px/2 - 10px);\n  top: calc(50% - 27px/2);\n  border-radius: 50%;\n  background: #FFFFFF;\n  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06);\n  transition: all 0.2s ease-out;\n  cursor: pointer;\n}\n\n.checkbox:checked + .switch {\n  background-color: #34C759;\n}\n\n.checkbox:checked + .switch .slider {\n  left: calc(50% - 27px/2 + 10px);\n  top: calc(50% - 27px/2);\n}\n\n\n#Open {\n    position: absolute;\n    top: 20px;\n    left: 20px;\n    display: none;\n}\n\n#Open:checked ~ #sidebarMenu{\n    transform: translateX(0px);\n}\n\n.wrapper {\n    height: 3px;\n    background-color: var(--text-light);\n    transition: all 0.5s;\n}\n\n.wrapper.second,\n.wrapper.third {\n    margin-top: 3px;\n}\n\n#Open:checked~.sidebar-icon>.wrapper.second {\n    opacity: 0;\n}\n\n#Open:checked~.sidebar-icon>.wrapper.first {\n    transform: rotate(315deg);\n    margin-top: 9px;\n}\n\n#Open:checked~.sidebar-icon>.wrapper.third {\n    transform: rotate(-315deg);\n    margin-top: -9px;\n}\n\n.blur {\n    filter: blur(5px);\n}\n\n.sidebar-icon{\n    display: none;\n}\n\n.sidebar-item-active{\n    background-color: var(--hover-light);\n}\n\n.flex{\n    display: flex;\n    align-items: center;\n    gap: 7px;\n}\n\n.sidebar-project{\n    display: flex;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 5px 5px 5px 10px;\n    cursor: pointer;\n    border-radius: 5px;\n    justify-content: space-between;\n}\n\n.sidebar-project:hover{\n    background-color: var(--hover-light);\n}\n\n.sidebar-project:hover .project-name-input{\n  background-color: var(--hover-light);\n}\n\n.sidebar-project-active{\n    background-color: var(--hover-light);\n}\n\n.sidebar-project:hover .project-tools{\n    margin-left: 10px;\n    display: block;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.smooth-transition{\n    transition: transform 300ms ease-in-out;\n}\n\n.menu-container {\n    position: relative;\n  }\n    \n.menu-options {\n    display: none;\n    position: absolute;\n    top: 25px;\n    right: 0;\n    background-color: var(--background-light);\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    list-style: none;\n  }\n  \n  .menu-options li {\n    padding: 10px 20px;\n    cursor: pointer;\n  }\n  \n  .menu-options li:hover {\n    background-color: var(--hover-light);\n  }\n  \n  .project-tools{\n   display: none;\n  }\n\n  .project-tools-active{\n    display: block;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n  }\n\n.project-name-input{\n  appearance: none;\n  border: none;\n  outline: none;\n  font-family: 'TTSemiBold';\n  font-size: 15rem;\n  max-width: 150px;\n  background-color: transparent;\n  color: var(--text-light);\n  cursor: pointer;\n}\n\n.tasks-container{\n  display: grid;\n  grid-template-rows: 1fr 10fr;\n  height: 100%;\n}\n\n.home-heading{\n  font-size: 35rem;\n  font-family: 'TTBold';\n  align-self: center;\n}\n\n.add-task-btn{\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 8px 0px 8px 15px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.add-task-btn:hover{\nbackground-color: var(--hover-light);\n}\n\n.modal{\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 200ms ease-in-out;\n  border-radius: 10px;\n  z-index: 999;\n  background-color: var(--background-light);\n  width: 600px;\n  max-width: 80%;\n}\n\n.modal.active{\n  transform: translate(-50%, -50%) scale(1);\n}\n\n.modal-header{\n  box-sizing: border-box;\n  padding: 10px 15px;\n  border-bottom: 1px solid black;\n  font-size: 22rem;\n  color: var(--text-light);\n  display: flex;\n  gap: 10px;\n  align-items: baseline;\n}\n\n.modal-alert{\n  font-size: 16rem;\n  color: var(--warning-light);\n}\n\n.modal-header-rename{\n  box-sizing: border-box;\n  padding: 10px 15px;\n  border-bottom: 1px solid black;\n  font-size: 22rem;\n  color: var(--text-light);\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.modal-title{\n  font-family: 'TTBold';\n}\n\n.modal-body{\n  box-sizing: border-box;\n  padding: 25px;\n}\n\n#overlay{\n  position: fixed;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, .5);\n  pointer-events: none;\n  transition: 200ms ease-in-out;\n  z-index: 15;\n}\n\n#overlay.active{\n  opacity: 1;\n  pointer-events: all;\n}\n\n.add-project-input{\n  width: 100%;\n  box-sizing: border-box;\n  padding: 12px 10px 12px 10px;\n  outline: none;\n  border: 1px solid var(--text-light);\n  border-radius: 5px;\n  font-family: 'TTSemiBold';\n  font-size: 16rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.project-modal-buttons{\n  display: flex;\n  height: 40px;\n  padding-top: 12px;\n  gap: 12px;\n}\n\n.add-project-buttons{\n  flex: 1;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  color: var(--text-dark);\n  font-family: 'TTBold';\n  font-size: 18rem;\n}\n\n.add-btn{\n  background-color: var(--secondary-color-light);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.close-btn{\n  background-color: var(--tertiary-color-light);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.add-btn:hover{\n    background-color: #01a17c;\n}\n\n.close-btn:hover{\n    background-color: #ff3916;\n}\n\n.btn-rename{\n  border: none;\n  outline: none;\n  background-color: transparent;\n  background-image: url(./img/rename.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n  padding: 12px;\n  cursor: pointer;\n}\n\n.btn-rename:hover{\n  background-image: url(./img/rename-hover.svg);\n}\n\n.btn-delete{\n  border: none;\n  outline: none;\n  background-color: transparent;\n  background-image: url(./img/delete.svg);\n  background-size: contain;\n  background-repeat: no-repeat;\n  padding: 12px;\n  cursor: pointer;\n}\n\n.btn-delete:hover{\n  background-image: url(./img/delete-hover.svg);\n}\n\n#deleteQuestion{\n  font-size: 18rem;\n  padding-bottom: 10px;\n  text-align: center;\n  color: var(--text-light);\n}\n\n/*Media Queries*/\n\n/* Smartphones (portrait and landscape) */\n@media only screen and (max-width: 767px) {\n    .body-container{\n        width: 100vw;\n        height: 100vh;\n        display: flex;\n        flex-direction: column;\n    }\n    .sidebar{\n        position: absolute;\n        z-index: 10;\n        height: 100%;\n        width: 70vw;\n        padding-top: 60px;\n        transform: translateX(-500px);\n    }\n    .sidebar-icon{\n        display: block;\n        width: 22px;\n        height: 22px;\n        position: absolute;\n        z-index: 20;\n        top: 20px;\n        left: 20px;\n        cursor: pointer;\n    }\n    .main{\n        padding: 65px 20px 0px 20px;\n    }\n    #Open:checked~#sidebarMenu {\n        transform: translateX(0px);\n        transition: transform 300ms ease-in-out;\n    }\n    .delete, .rename{\n      display: none;\n    }\n    .modal-body{\n      padding: 17px;\n    }\n    .modal-header{\n      font-size: 18rem;\n    }\n    .add-project-input{\n      font-size: 15rem;\n    }\n    .add-project-buttons{\n      font-size: 15rem;\n    }\n    .modal-title{\n      font-size: 20rem;\n    }\n    #oldName{\n      font-size: 20rem;\n    }\n    #deleteProjectName{\n      font-size: 20rem;\n    }\n  }\n  \n  /* Smartphones (portrait) */\n  @media only screen and (max-width: 480px) {\n    /* Your CSS styles for portrait-oriented phones go here */\n  }\n  \n  /* Smartphones (landscape) */\n  @media only screen and (min-width: 481px) and (max-width: 767px) {\n    /* Your CSS styles for landscape-oriented phones go here */\n  }\n\n\n  /* Tablets (portrait and landscape) */\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\n    /* Your CSS styles for tablets go here */\n  }\n  \n  /* Tablets (portrait) */\n  @media only screen and (min-width: 768px) and (max-width: 991px) {\n    /* Your CSS styles for portrait-oriented tablets go here */\n  }\n  \n  /* Tablets (landscape) */\n  @media only screen and (min-width: 992px) and (max-width: 1023px) {\n    /* Your CSS styles for landscape-oriented tablets go here */\n  }\n  "],"sourceRoot":""}]);
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
        const modalAlertRename = document.getElementById('modalAlertRename')
        projectNameInput.value = ''
        modalAlert.innerHTML = ''
        modalAlertRename.innerHTML = ''
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

/***/ "./src/project-loader.js":
/*!*******************************!*\
  !*** ./src/project-loader.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadActiveProject: () => (/* binding */ loadActiveProject)
/* harmony export */ });
function loadActiveProject(currentProjectTab){
    const mainHeading = document.getElementById('mainHeading')
    mainHeading.textContent = `Project | ${currentProjectTab.name}`
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
        const modalAlertRename = document.getElementById('modalAlertRename')
        let existingProject = allProjects.find(project => project.name === projectRenameInput.value)

        if(projectRenameInput.value === ''){
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
            currentIndex = null
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
        tab.addEventListener('click', () => {
            currentIndex = index;
                tabs.forEach(tab => {
                    tab.classList.remove('sidebar-item-active')
                })
                tab.classList.add('sidebar-item-active')
                currentProjectTab = allProjects[index]
                ;(0,_project_loader__WEBPACK_IMPORTED_MODULE_1__.loadActiveProject)(currentProjectTab)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iYzU0M2VjZjFmNmNhZTJkMTNlMS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtKQUE0RDtBQUN4Ryw0Q0FBNEMsdUtBQWdFO0FBQzVHLDRDQUE0Qyw2R0FBbUM7QUFDL0UsNENBQTRDLHlIQUF5QztBQUNyRiw0Q0FBNEMsNkdBQW1DO0FBQy9FLDRDQUE0Qyx5SEFBeUM7QUFDckYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGdGQUFnRixZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxjQUFjLGNBQWMsYUFBYSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFL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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQ2lCO0FBQ0M7QUFDRjtBQUN1Qjs7QUFFM0Q7QUFDQSw2QkFBNkIsOENBQVk7O0FBRXpDLElBQUksb0RBQWE7QUFDakIsSUFBSSxxREFBWTtBQUNoQixJQUFJLHVEQUFZO0FBQ2hCLElBQUksMERBQWU7QUFDbkI7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2FsbHRhc2tzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbXBvcnRhbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcHJvamVjdC1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy90b2RheS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy93ZWVrLmpzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvVFQgSW50ZXJwaGFzZXMgUHJvIFRyaWFsIEJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9UVCBJbnRlcnBoYXNlcyBQcm8gVHJpYWwgRGVtaUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWcvcmVuYW1lLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1nL3JlbmFtZS1ob3Zlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9kZWxldGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi9pbWcvZGVsZXRlLWhvdmVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdUVEJvbGQnO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1RUU2VtaUJvbGQnO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtc2l6ZTogNi4yNSU7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtc2l6ZTogMTZyZW07XG4gICAgZm9udC1mYW1pbHk6ICdUVFNlbWlCb2xkJztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuOnJvb3Qge1xuICAgIC0tcHJpbWFyeS1jb2xvci1saWdodDogIzEyNmZiNTtcbiAgICAtLXNlY29uZGFyeS1jb2xvci1saWdodDogIzEwYTg4NTtcbiAgICAtLXRlcnRpYXJ5LWNvbG9yLWxpZ2h0OiAjZmY1NDM2O1xuXG4gICAgLS1wcmltYXJ5LWNvbG9yLWRhcms6ICM0ZWNiZmI7XG4gICAgLS1zZWNvbmRhcnktY29sb3ItZGFyazogIzc0ZmZlMDtcbiAgICAtLXRlcnRpYXJ5LWNvbG9yLWRhcms6ICNmZTg5NzU7XG5cbiAgICAtLWJhY2tncm91bmQtbGlnaHQ6ICNmZmZmZmY7XG4gICAgLS1zZWNvbmRhcnktYmFja2dyb3VuZC1saWdodDogI2ZhZmFmYTtcbiAgICAtLWJhY2tncm91bmQtZGFyazogIzIxMjg0NDtcbiAgICAtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWRhcms6ICNmNGY1Zjc7XG5cbiAgICAtLWhvdmVyLWxpZ2h0OiAjZGRlMGU0O1xuXG4gICAgLS10ZXh0LWxpZ2h0OiAjMzAzMzM2O1xuICAgIC0tdGV4dC1kYXJrOiAjZmZmZmZmO1xuXG4gICAgLS13YXJuaW5nLWxpZ2h0OiAjZmY1NDM2O1xuICAgIC0td2FybmluZy1kYXJrOiAjRkZGMjAwO1xufVxuXG4uYm9keS1jb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgzMDVweCwgMWZyKSByZXBlYXQoNCwgMWZyKSA7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTIsIDFmcik7XG59XG5cbi5zaWRlYmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWxpZ2h0KTtcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gLTEgLyAyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLm1haW57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDEyIC8gLTE7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAzMHB4IDcwcHggMHB4IDcwcHg7XG59XG5cbi5mb290ZXJ7XG4gICAgZ3JpZC1hcmVhOiAxMiAvIDIgLyAtMSAvIC0xO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xufVxuXG4uc2lkZWJhci1saXN0e1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIzcHg7XG59XG5cbi5wcm9qZWN0cy1zaWRlYmFyLWxpc3R7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5zaWRlYmFyLWl0ZW17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDdweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc2lkZWJhci1pdGVtOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcbn1cblxuLnNpZGViYXItaXRlbXN7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgICBmb250LXNpemU6IDE1cmVtO1xufVxuXG4uc2lkZWJhci1hZGQtcHJvamVjdHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA3cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc2lkZWJhci1hZGQtcHJvamVjdDpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xufVxuXG4uc2lkZWJhci1oZWFkZXJ7XG4gICAgZm9udC1zaXplOiAyMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgZm9udC1mYW1pbHk6ICdUVEJvbGQnO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zaWRlYmFyLWJvdHRvbXtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLnNldHRpbmdzLWl0ZW17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDEwcHg7XG59XG5cbi8qIFJlbW92ZSB0aGlzIGNvbnRhaW5lciB3aGVuIHVzZSovXG4uY29tcG9uZW50LXRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5O1xuICB0b3A6IDMwcHg7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzg4ODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA1MXB4O1xuICBoZWlnaHQ6IDMxcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cbi5jaGVja2JveCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnN3aXRjaCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWViO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuXG4vKiBUaGUgc2xpZGVyICovXG4uc2xpZGVyIHtcbiAgd2lkdGg6IDI3cHg7XG4gIGhlaWdodDogMjdweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDI3cHgvMiAtIDEwcHgpO1xuICB0b3A6IGNhbGMoNTAlIC0gMjdweC8yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2hlY2tib3g6Y2hlY2tlZCArIC5zd2l0Y2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzRDNzU5O1xufVxuXG4uY2hlY2tib3g6Y2hlY2tlZCArIC5zd2l0Y2ggLnNsaWRlciB7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjdweC8yICsgMTBweCk7XG4gIHRvcDogY2FsYyg1MCUgLSAyN3B4LzIpO1xufVxuXG5cbiNPcGVuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuI09wZW46Y2hlY2tlZCB+ICNzaWRlYmFyTWVudXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbn1cblxuLndyYXBwZXIge1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuXG4ud3JhcHBlci5zZWNvbmQsXG4ud3JhcHBlci50aGlyZCB7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4jT3BlbjpjaGVja2Vkfi5zaWRlYmFyLWljb24+LndyYXBwZXIuc2Vjb25kIHtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4jT3BlbjpjaGVja2Vkfi5zaWRlYmFyLWljb24+LndyYXBwZXIuZmlyc3Qge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XG4gICAgbWFyZ2luLXRvcDogOXB4O1xufVxuXG4jT3BlbjpjaGVja2Vkfi5zaWRlYmFyLWljb24+LndyYXBwZXIudGhpcmQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zMTVkZWcpO1xuICAgIG1hcmdpbi10b3A6IC05cHg7XG59XG5cbi5ibHVyIHtcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcbn1cblxuLnNpZGViYXItaWNvbntcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2lkZWJhci1pdGVtLWFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1saWdodCk7XG59XG5cbi5mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDdweDtcbn1cblxuLnNpZGViYXItcHJvamVjdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc2lkZWJhci1wcm9qZWN0OmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcbn1cblxuLnNpZGViYXItcHJvamVjdDpob3ZlciAucHJvamVjdC1uYW1lLWlucHV0e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1saWdodCk7XG59XG5cbi5zaWRlYmFyLXByb2plY3QtYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcbn1cblxuLnNpZGViYXItcHJvamVjdDpob3ZlciAucHJvamVjdC10b29sc3tcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG59XG5cbi5zbW9vdGgtdHJhbnNpdGlvbntcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tZW51LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gICAgXG4ubWVudS1vcHRpb25zIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI1cHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuICBcbiAgLm1lbnUtb3B0aW9ucyBsaSB7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLm1lbnUtb3B0aW9ucyBsaTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xuICB9XG4gIFxuICAucHJvamVjdC10b29sc3tcbiAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAucHJvamVjdC10b29scy1hY3RpdmV7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICB9XG5cbi5wcm9qZWN0LW5hbWUtaW5wdXR7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1mYW1pbHk6ICdUVFNlbWlCb2xkJztcbiAgZm9udC1zaXplOiAxNXJlbTtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFza3MtY29udGFpbmVye1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ob21lLWhlYWRpbmd7XG4gIGZvbnQtc2l6ZTogMzVyZW07XG4gIGZvbnQtZmFtaWx5OiAnVFRCb2xkJztcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uYWRkLXRhc2stYnRue1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDdweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDhweCAwcHggOHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkLXRhc2stYnRuOmhvdmVye1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xufVxuXG4ubW9kYWx7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB6LWluZGV4OiA5OTk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xuICB3aWR0aDogNjAwcHg7XG4gIG1heC13aWR0aDogODAlO1xufVxuXG4ubW9kYWwuYWN0aXZle1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbn1cblxuLm1vZGFsLWhlYWRlcntcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjJyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG5cbi5tb2RhbC1hbGVydHtcbiAgZm9udC1zaXplOiAxNnJlbTtcbiAgY29sb3I6IHZhcigtLXdhcm5pbmctbGlnaHQpO1xufVxuXG4ubW9kYWwtaGVhZGVyLXJlbmFtZXtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjJyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9kYWwtdGl0bGV7XG4gIGZvbnQtZmFtaWx5OiAnVFRCb2xkJztcbn1cblxuLm1vZGFsLWJvZHl7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG5cbiNvdmVybGF5e1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG9wYWNpdHk6IDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcbiAgei1pbmRleDogMTU7XG59XG5cbiNvdmVybGF5LmFjdGl2ZXtcbiAgb3BhY2l0eTogMTtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuLmFkZC1wcm9qZWN0LWlucHV0e1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTJweCAxMHB4IDEycHggMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dC1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1mYW1pbHk6ICdUVFNlbWlCb2xkJztcbiAgZm9udC1zaXplOiAxNnJlbTtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnByb2plY3QtbW9kYWwtYnV0dG9uc3tcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uYWRkLXByb2plY3QtYnV0dG9uc3tcbiAgZmxleDogMTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gIGZvbnQtZmFtaWx5OiAnVFRCb2xkJztcbiAgZm9udC1zaXplOiAxOHJlbTtcbn1cblxuLmFkZC1idG57XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci1saWdodCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5jbG9zZS1idG57XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yLWxpZ2h0KTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmFkZC1idG46aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxYTE3Yztcbn1cblxuLmNsb3NlLWJ0bjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzOTE2O1xufVxuXG4uYnRuLXJlbmFtZXtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bi1yZW5hbWU6aG92ZXJ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbn1cblxuLmJ0bi1kZWxldGV7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwYWRkaW5nOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG4tZGVsZXRlOmhvdmVye1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG59XG5cbiNkZWxldGVRdWVzdGlvbntcbiAgZm9udC1zaXplOiAxOHJlbTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xufVxuXG4vKk1lZGlhIFF1ZXJpZXMqL1xuXG4vKiBTbWFydHBob25lcyAocG9ydHJhaXQgYW5kIGxhbmRzY2FwZSkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuYm9keS1jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgLnNpZGViYXJ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDcwdnc7XG4gICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwMHB4KTtcbiAgICB9XG4gICAgLnNpZGViYXItaWNvbntcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMjA7XG4gICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAubWFpbntcbiAgICAgICAgcGFkZGluZzogNjVweCAyMHB4IDBweCAyMHB4O1xuICAgIH1cbiAgICAjT3BlbjpjaGVja2VkfiNzaWRlYmFyTWVudSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICAgIC5kZWxldGUsIC5yZW5hbWV7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubW9kYWwtYm9keXtcbiAgICAgIHBhZGRpbmc6IDE3cHg7XG4gICAgfVxuICAgIC5tb2RhbC1oZWFkZXJ7XG4gICAgICBmb250LXNpemU6IDE4cmVtO1xuICAgIH1cbiAgICAuYWRkLXByb2plY3QtaW5wdXR7XG4gICAgICBmb250LXNpemU6IDE1cmVtO1xuICAgIH1cbiAgICAuYWRkLXByb2plY3QtYnV0dG9uc3tcbiAgICAgIGZvbnQtc2l6ZTogMTVyZW07XG4gICAgfVxuICAgIC5tb2RhbC10aXRsZXtcbiAgICAgIGZvbnQtc2l6ZTogMjByZW07XG4gICAgfVxuICAgICNvbGROYW1le1xuICAgICAgZm9udC1zaXplOiAyMHJlbTtcbiAgICB9XG4gICAgI2RlbGV0ZVByb2plY3ROYW1le1xuICAgICAgZm9udC1zaXplOiAyMHJlbTtcbiAgICB9XG4gIH1cbiAgXG4gIC8qIFNtYXJ0cGhvbmVzIChwb3J0cmFpdCkgKi9cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC8qIFlvdXIgQ1NTIHN0eWxlcyBmb3IgcG9ydHJhaXQtb3JpZW50ZWQgcGhvbmVzIGdvIGhlcmUgKi9cbiAgfVxuICBcbiAgLyogU21hcnRwaG9uZXMgKGxhbmRzY2FwZSkgKi9cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLyogWW91ciBDU1Mgc3R5bGVzIGZvciBsYW5kc2NhcGUtb3JpZW50ZWQgcGhvbmVzIGdvIGhlcmUgKi9cbiAgfVxuXG5cbiAgLyogVGFibGV0cyAocG9ydHJhaXQgYW5kIGxhbmRzY2FwZSkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgICAvKiBZb3VyIENTUyBzdHlsZXMgZm9yIHRhYmxldHMgZ28gaGVyZSAqL1xuICB9XG4gIFxuICAvKiBUYWJsZXRzIChwb3J0cmFpdCkgKi9cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgLyogWW91ciBDU1Mgc3R5bGVzIGZvciBwb3J0cmFpdC1vcmllbnRlZCB0YWJsZXRzIGdvIGhlcmUgKi9cbiAgfVxuICBcbiAgLyogVGFibGV0cyAobGFuZHNjYXBlKSAqL1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gICAgLyogWW91ciBDU1Mgc3R5bGVzIGZvciBsYW5kc2NhcGUtb3JpZW50ZWQgdGFibGV0cyBnbyBoZXJlICovXG4gIH1cbiAgYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUF1RDtBQUN6RDtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLDRDQUEyRDtBQUM3RDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsZ0NBQWdDO0lBQ2hDLCtCQUErQjs7SUFFL0IsNkJBQTZCO0lBQzdCLCtCQUErQjtJQUMvQiw4QkFBOEI7O0lBRTlCLDJCQUEyQjtJQUMzQixxQ0FBcUM7SUFDckMsMEJBQTBCO0lBQzFCLG9DQUFvQzs7SUFFcEMsc0JBQXNCOztJQUV0QixxQkFBcUI7SUFDckIsb0JBQW9COztJQUVwQix3QkFBd0I7SUFDeEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IseURBQXlEO0lBQ3pELG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLG1EQUFtRDtJQUNuRCx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGFBQWE7QUFD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QUEwRDtFQUM1RDs7RUFFQSx3QkFBd0I7RUFDeEI7SUFDRSwyREFBMkQ7RUFDN0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1RUQm9sZCc7XFxuICBzcmM6IHVybCguL2ZvbnRzL1RUXFxcXCBJbnRlcnBoYXNlc1xcXFwgUHJvXFxcXCBUcmlhbFxcXFwgQm9sZC50dGYpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVFRTZW1pQm9sZCc7XFxuICBzcmM6IHVybCguL2ZvbnRzL1RUXFxcXCBJbnRlcnBoYXNlc1xcXFwgUHJvXFxcXCBUcmlhbFxcXFwgRGVtaUJvbGQudHRmKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNi4yNSU7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LXNpemU6IDE2cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1RUU2VtaUJvbGQnO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1wcmltYXJ5LWNvbG9yLWxpZ2h0OiAjMTI2ZmI1O1xcbiAgICAtLXNlY29uZGFyeS1jb2xvci1saWdodDogIzEwYTg4NTtcXG4gICAgLS10ZXJ0aWFyeS1jb2xvci1saWdodDogI2ZmNTQzNjtcXG5cXG4gICAgLS1wcmltYXJ5LWNvbG9yLWRhcms6ICM0ZWNiZmI7XFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yLWRhcms6ICM3NGZmZTA7XFxuICAgIC0tdGVydGlhcnktY29sb3ItZGFyazogI2ZlODk3NTtcXG5cXG4gICAgLS1iYWNrZ3JvdW5kLWxpZ2h0OiAjZmZmZmZmO1xcbiAgICAtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWxpZ2h0OiAjZmFmYWZhO1xcbiAgICAtLWJhY2tncm91bmQtZGFyazogIzIxMjg0NDtcXG4gICAgLS1zZWNvbmRhcnktYmFja2dyb3VuZC1kYXJrOiAjZjRmNWY3O1xcblxcbiAgICAtLWhvdmVyLWxpZ2h0OiAjZGRlMGU0O1xcblxcbiAgICAtLXRleHQtbGlnaHQ6ICMzMDMzMzY7XFxuICAgIC0tdGV4dC1kYXJrOiAjZmZmZmZmO1xcblxcbiAgICAtLXdhcm5pbmctbGlnaHQ6ICNmZjU0MzY7XFxuICAgIC0td2FybmluZy1kYXJrOiAjRkZGMjAwO1xcbn1cXG5cXG4uYm9keS1jb250YWluZXJ7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMzA1cHgsIDFmcikgcmVwZWF0KDQsIDFmcikgO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMiwgMWZyKTtcXG59XFxuXFxuLnNpZGViYXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIC0xIC8gMjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLm1haW57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMTIgLyAtMTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMzBweCA3MHB4IDBweCA3MHB4O1xcbn1cXG5cXG4uZm9vdGVye1xcbiAgICBncmlkLWFyZWE6IDEyIC8gMiAvIC0xIC8gLTE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcbn1cXG5cXG4uc2lkZWJhci1saXN0e1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjNweDtcXG59XFxuXFxuLnByb2plY3RzLXNpZGViYXItbGlzdHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uc2lkZWJhci1pdGVte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDdweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zaWRlYmFyLWl0ZW06aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcXG59XFxuXFxuLnNpZGViYXItaXRlbXN7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxuICAgIGZvbnQtc2l6ZTogMTVyZW07XFxufVxcblxcbi5zaWRlYmFyLWFkZC1wcm9qZWN0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogN3B4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2lkZWJhci1hZGQtcHJvamVjdDpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcXG59XFxuXFxuLnNpZGViYXItaGVhZGVye1xcbiAgICBmb250LXNpemU6IDIxcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xcbiAgICBmb250LWZhbWlseTogJ1RUQm9sZCc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNpZGViYXItYm90dG9te1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLnNldHRpbmdzLWl0ZW17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcXG59XFxuXFxuLyogUmVtb3ZlIHRoaXMgY29udGFpbmVyIHdoZW4gdXNlKi9cXG4uY29tcG9uZW50LXRpdGxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogOTk5O1xcbiAgdG9wOiAzMHB4O1xcbiAgbGVmdDogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6ICM4ODg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIFRoZSBzd2l0Y2ggLSB0aGUgYm94IGFyb3VuZCB0aGUgc2xpZGVyICovXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogNTFweDtcXG4gIGhlaWdodDogMzFweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cXG4uY2hlY2tib3gge1xcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uc3dpdGNoIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWViO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbn1cXG5cXG4vKiBUaGUgc2xpZGVyICovXFxuLnNsaWRlciB7XFxuICB3aWR0aDogMjdweDtcXG4gIGhlaWdodDogMjdweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjdweC8yIC0gMTBweCk7XFxuICB0b3A6IGNhbGMoNTAlIC0gMjdweC8yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jaGVja2JveDpjaGVja2VkICsgLnN3aXRjaCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzRDNzU5O1xcbn1cXG5cXG4uY2hlY2tib3g6Y2hlY2tlZCArIC5zd2l0Y2ggLnNsaWRlciB7XFxuICBsZWZ0OiBjYWxjKDUwJSAtIDI3cHgvMiArIDEwcHgpO1xcbiAgdG9wOiBjYWxjKDUwJSAtIDI3cHgvMik7XFxufVxcblxcblxcbiNPcGVuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDIwcHg7XFxuICAgIGxlZnQ6IDIwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNPcGVuOmNoZWNrZWQgfiAjc2lkZWJhck1lbnV7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIGhlaWdodDogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxufVxcblxcbi53cmFwcGVyLnNlY29uZCxcXG4ud3JhcHBlci50aGlyZCB7XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG59XFxuXFxuI09wZW46Y2hlY2tlZH4uc2lkZWJhci1pY29uPi53cmFwcGVyLnNlY29uZCB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbiNPcGVuOmNoZWNrZWR+LnNpZGViYXItaWNvbj4ud3JhcHBlci5maXJzdCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxuICAgIG1hcmdpbi10b3A6IDlweDtcXG59XFxuXFxuI09wZW46Y2hlY2tlZH4uc2lkZWJhci1pY29uPi53cmFwcGVyLnRoaXJkIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTMxNWRlZyk7XFxuICAgIG1hcmdpbi10b3A6IC05cHg7XFxufVxcblxcbi5ibHVyIHtcXG4gICAgZmlsdGVyOiBibHVyKDVweCk7XFxufVxcblxcbi5zaWRlYmFyLWljb257XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zaWRlYmFyLWl0ZW0tYWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1saWdodCk7XFxufVxcblxcbi5mbGV4e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDdweDtcXG59XFxuXFxuLnNpZGViYXItcHJvamVjdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNpZGViYXItcHJvamVjdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xcbn1cXG5cXG4uc2lkZWJhci1wcm9qZWN0OmhvdmVyIC5wcm9qZWN0LW5hbWUtaW5wdXR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1saWdodCk7XFxufVxcblxcbi5zaWRlYmFyLXByb2plY3QtYWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1saWdodCk7XFxufVxcblxcbi5zaWRlYmFyLXByb2plY3Q6aG92ZXIgLnByb2plY3QtdG9vbHN7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5zbW9vdGgtdHJhbnNpdGlvbntcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuICAgIFxcbi5tZW51LW9wdGlvbnMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjVweDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICB9XFxuICBcXG4gIC5tZW51LW9wdGlvbnMgbGkge1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIFxcbiAgLm1lbnUtb3B0aW9ucyBsaTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWxpZ2h0KTtcXG4gIH1cXG4gIFxcbiAgLnByb2plY3QtdG9vbHN7XFxuICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LXRvb2xzLWFjdGl2ZXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbiAgfVxcblxcbi5wcm9qZWN0LW5hbWUtaW5wdXR7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiAnVFRTZW1pQm9sZCc7XFxuICBmb250LXNpemU6IDE1cmVtO1xcbiAgbWF4LXdpZHRoOiAxNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFza3MtY29udGFpbmVye1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5ob21lLWhlYWRpbmd7XFxuICBmb250LXNpemU6IDM1cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdUVEJvbGQnO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDdweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDhweCAwcHggOHB4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtdGFzay1idG46aG92ZXJ7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItbGlnaHQpO1xcbn1cXG5cXG4ubW9kYWx7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgei1pbmRleDogOTk5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxuICB3aWR0aDogNjAwcHg7XFxuICBtYXgtd2lkdGg6IDgwJTtcXG59XFxuXFxuLm1vZGFsLmFjdGl2ZXtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVye1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gIGZvbnQtc2l6ZTogMjJyZW07XFxuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cXG5cXG4ubW9kYWwtYWxlcnR7XFxuICBmb250LXNpemU6IDE2cmVtO1xcbiAgY29sb3I6IHZhcigtLXdhcm5pbmctbGlnaHQpO1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyLXJlbmFtZXtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICBmb250LXNpemU6IDIycmVtO1xcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC10aXRsZXtcXG4gIGZvbnQtZmFtaWx5OiAnVFRCb2xkJztcXG59XFxuXFxuLm1vZGFsLWJvZHl7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMjVweDtcXG59XFxuXFxuI292ZXJsYXl7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvcGFjaXR5OiAwO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgei1pbmRleDogMTU7XFxufVxcblxcbiNvdmVybGF5LmFjdGl2ZXtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtaW5wdXR7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAxMnB4IDEwcHggMTJweCAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQtbGlnaHQpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1mYW1pbHk6ICdUVFNlbWlCb2xkJztcXG4gIGZvbnQtc2l6ZTogMTZyZW07XFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4ucHJvamVjdC1tb2RhbC1idXR0b25ze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnV0dG9uc3tcXG4gIGZsZXg6IDE7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XFxuICBmb250LWZhbWlseTogJ1RUQm9sZCc7XFxuICBmb250LXNpemU6IDE4cmVtO1xcbn1cXG5cXG4uYWRkLWJ0bntcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvci1saWdodCk7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4uY2xvc2UtYnRue1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3ItbGlnaHQpO1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLmFkZC1idG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMWExN2M7XFxufVxcblxcbi5jbG9zZS1idG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjM5MTY7XFxufVxcblxcbi5idG4tcmVuYW1le1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL3JlbmFtZS5zdmcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idG4tcmVuYW1lOmhvdmVye1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL3JlbmFtZS1ob3Zlci5zdmcpO1xcbn1cXG5cXG4uYnRuLWRlbGV0ZXtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9kZWxldGUuc3ZnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuLWRlbGV0ZTpob3ZlcntcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9kZWxldGUtaG92ZXIuc3ZnKTtcXG59XFxuXFxuI2RlbGV0ZVF1ZXN0aW9ue1xcbiAgZm9udC1zaXplOiAxOHJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xcbn1cXG5cXG4vKk1lZGlhIFF1ZXJpZXMqL1xcblxcbi8qIFNtYXJ0cGhvbmVzIChwb3J0cmFpdCBhbmQgbGFuZHNjYXBlKSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gICAgLmJvZHktY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuICAgIC5zaWRlYmFye1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogMTA7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogNzB2dztcXG4gICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MDBweCk7XFxuICAgIH1cXG4gICAgLnNpZGViYXItaWNvbntcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDIycHg7XFxuICAgICAgICBoZWlnaHQ6IDIycHg7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB6LWluZGV4OiAyMDtcXG4gICAgICAgIHRvcDogMjBweDtcXG4gICAgICAgIGxlZnQ6IDIwcHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAgLm1haW57XFxuICAgICAgICBwYWRkaW5nOiA2NXB4IDIwcHggMHB4IDIwcHg7XFxuICAgIH1cXG4gICAgI09wZW46Y2hlY2tlZH4jc2lkZWJhck1lbnUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIH1cXG4gICAgLmRlbGV0ZSwgLnJlbmFtZXtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIC5tb2RhbC1ib2R5e1xcbiAgICAgIHBhZGRpbmc6IDE3cHg7XFxuICAgIH1cXG4gICAgLm1vZGFsLWhlYWRlcntcXG4gICAgICBmb250LXNpemU6IDE4cmVtO1xcbiAgICB9XFxuICAgIC5hZGQtcHJvamVjdC1pbnB1dHtcXG4gICAgICBmb250LXNpemU6IDE1cmVtO1xcbiAgICB9XFxuICAgIC5hZGQtcHJvamVjdC1idXR0b25ze1xcbiAgICAgIGZvbnQtc2l6ZTogMTVyZW07XFxuICAgIH1cXG4gICAgLm1vZGFsLXRpdGxle1xcbiAgICAgIGZvbnQtc2l6ZTogMjByZW07XFxuICAgIH1cXG4gICAgI29sZE5hbWV7XFxuICAgICAgZm9udC1zaXplOiAyMHJlbTtcXG4gICAgfVxcbiAgICAjZGVsZXRlUHJvamVjdE5hbWV7XFxuICAgICAgZm9udC1zaXplOiAyMHJlbTtcXG4gICAgfVxcbiAgfVxcbiAgXFxuICAvKiBTbWFydHBob25lcyAocG9ydHJhaXQpICovXFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAgIC8qIFlvdXIgQ1NTIHN0eWxlcyBmb3IgcG9ydHJhaXQtb3JpZW50ZWQgcGhvbmVzIGdvIGhlcmUgKi9cXG4gIH1cXG4gIFxcbiAgLyogU21hcnRwaG9uZXMgKGxhbmRzY2FwZSkgKi9cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAvKiBZb3VyIENTUyBzdHlsZXMgZm9yIGxhbmRzY2FwZS1vcmllbnRlZCBwaG9uZXMgZ28gaGVyZSAqL1xcbiAgfVxcblxcblxcbiAgLyogVGFibGV0cyAocG9ydHJhaXQgYW5kIGxhbmRzY2FwZSkgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XFxuICAgIC8qIFlvdXIgQ1NTIHN0eWxlcyBmb3IgdGFibGV0cyBnbyBoZXJlICovXFxuICB9XFxuICBcXG4gIC8qIFRhYmxldHMgKHBvcnRyYWl0KSAqL1xcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuICAgIC8qIFlvdXIgQ1NTIHN0eWxlcyBmb3IgcG9ydHJhaXQtb3JpZW50ZWQgdGFibGV0cyBnbyBoZXJlICovXFxuICB9XFxuICBcXG4gIC8qIFRhYmxldHMgKGxhbmRzY2FwZSkgKi9cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcXG4gICAgLyogWW91ciBDU1Mgc3R5bGVzIGZvciBsYW5kc2NhcGUtb3JpZW50ZWQgdGFibGV0cyBnbyBoZXJlICovXFxuICB9XFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRBbGxUYXNrcygpIHtcbiAgICBjb25zdCBtYWluSGVhZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluSGVhZGluZycpXG4gICAgbWFpbkhlYWRpbmcudGV4dENvbnRlbnQgPSAnQWxsIFRhc2tzJzsgICAgXG59IiwiaW1wb3J0IGxvYWRBbGxUYXNrcyBmcm9tIFwiLi9hbGx0YXNrc1wiO1xuaW1wb3J0IGxvYWRUb2RheVRhc2tzIGZyb20gXCIuL3RvZGF5XCI7XG5pbXBvcnQgbG9hZFdlZWtUYXNrcyBmcm9tIFwiLi93ZWVrXCI7XG5pbXBvcnQgbG9hZEltcG9ydGFudFRhc2tzIGZyb20gXCIuL2ltcG9ydGFudFwiO1xuaW1wb3J0IHByb2plY3RJY29uIGZyb20gJy4vaW1nL3Byb2plY3Quc3ZnJ1xuXG5leHBvcnQgY2xhc3MgQWN0aXZlVGFiSGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBoYW5kbGVUYWJzQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuaG9tZVRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhci1pdGVtJyk7XG4gICAgICAgIHRoaXMucHJvamVjdFRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhci1wcm9qZWN0Jyk7XG4gICAgICAgIHRoaXMuaG9tZVRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHRhcmdldCAmJiAhdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1pdGVtJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlVGFiKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuQWN0aXZlVGFiKHRhcmdldClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVUYWIodGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuaG9tZVRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXItaXRlbS1hY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJvamVjdFRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXItaXRlbS1hY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWl0ZW0tYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgb3BlbkFjdGl2ZVRhYih0YXJnZXQpe1xuICAgICAgICBzd2l0Y2ggKHRhcmdldC5pZCkge1xuICAgICAgICAgICAgY2FzZSAndGFiQWxsVGFza3MnOlxuICAgICAgICAgICAgICAgIGxvYWRBbGxUYXNrcygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgIFxuICAgICAgICAgICAgY2FzZSAndGFiVG9kYXknOlxuICAgICAgICAgICAgICAgIGxvYWRUb2RheVRhc2tzKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3RhYlRoaXNXZWVrJzpcbiAgICAgICAgICAgICAgICBsb2FkV2Vla1Rhc2tzKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3RhYkltcG9ydGFudCc6XG4gICAgICAgICAgICAgICAgbG9hZEltcG9ydGFudFRhc2tzKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTW9kYWxIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgfVxuICAgIGhhbmRsZU1vZGFscygpe1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZW5hbWVGb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVsZXRlRm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBvcGVuTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWwtdGFyZ2V0XScpXG4gICAgICAgIGNvbnN0IGNsb3NlTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY2xvc2UtYnV0dG9uXScpXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpXG5cbiAgICAgICAgb3Blbk1vZGFsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbi5kYXRhc2V0Lm1vZGFsVGFyZ2V0KVxuICAgICAgICAgICAgICAgIHRoaXMub3Blbk1vZGFsKG1vZGFsKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBjbG9zZU1vZGFsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBidXR0b24uY2xvc2VzdCgnLm1vZGFsJylcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwobW9kYWwpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwuYWN0aXZlJylcbiAgICAgICAgICAgIG1vZGFscy5mb3JFYWNoKG1vZGFsID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwobW9kYWwpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgb3Blbk1vZGFsKG1vZGFsKXtcbiAgICAgICAgaWYobW9kYWwgPT0gbnVsbClyZXR1cm5cbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIGNsb3NlTW9kYWwobW9kYWwpe1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lSW5wdXQnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdFJlbmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RSZW5hbWVJbnB1dCcpXG4gICAgICAgIGNvbnN0IG1vZGFsQWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxBbGVydCcpXG4gICAgICAgIGNvbnN0IG1vZGFsQWxlcnRSZW5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxBbGVydFJlbmFtZScpXG4gICAgICAgIHByb2plY3ROYW1lSW5wdXQudmFsdWUgPSAnJ1xuICAgICAgICBtb2RhbEFsZXJ0LmlubmVySFRNTCA9ICcnXG4gICAgICAgIG1vZGFsQWxlcnRSZW5hbWUuaW5uZXJIVE1MID0gJydcbiAgICAgICAgcHJvamVjdFJlbmFtZUlucHV0LnZhbHVlID0gJydcblxuICAgICAgICBpZihtb2RhbCA9PSBudWxsKXJldHVyblxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJvamVjdHNIYW5kbGVye1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzQ29udGFpbmVyJylcblxuICAgIGNyZWF0ZVByb2plY3RIdG1sKHByb2plY3Qpe1xuICAgICAgICAvLyBDcmVhdGUgdGhlIDxsaT4gZWxlbWVudCB3aXRoIGNsYXNzIFwic2lkZWJhci1wcm9qZWN0XCIgYW5kIFwidGFiXCJcbiAgICAgICAgY29uc3QgbGlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBsaUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNpZGViYXItcHJvamVjdFwiLCBcInRhYlwiKTtcbiAgICBcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBmaXJzdCA8ZGl2PiBlbGVtZW50IHdpdGggY2xhc3MgXCJmbGV4XCJcbiAgICAgICAgY29uc3QgZGl2RmxleDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXZGbGV4MS5jbGFzc0xpc3QuYWRkKFwiZmxleFwiKTtcbiAgICBcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBcInByb2plY3RcIiBTVkcgaWNvblxuICAgICAgICBjb25zdCBzdmdQcm9qZWN0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHN2Z1Byb2plY3Quc3JjID0gcHJvamVjdEljb247IFxuICAgIFxuICAgICAgICAvLyBBcHBlbmQgdGhlIFwicHJvamVjdFwiIGljb24gdG8gdGhlIGZpcnN0IDxkaXY+IGVsZW1lbnRcbiAgICAgICAgZGl2RmxleDEuYXBwZW5kQ2hpbGQoc3ZnUHJvamVjdCk7XG4gICAgXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgPGlucHV0PiBlbGVtZW50XG4gICAgICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5wdXRFbGVtZW50LnZhbHVlID0gcHJvamVjdC5uYW1lXG4gICAgICAgIGlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWUtaW5wdXRcIik7XG4gICAgICAgIGlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgICAgICAgZGl2RmxleDEuYXBwZW5kQ2hpbGQoaW5wdXRFbGVtZW50KTtcbiAgICBcbiAgICAgICAgLy8gQXBwZW5kIHRoZSBmaXJzdCA8ZGl2PiBlbGVtZW50IHRvIHRoZSA8bGk+IGVsZW1lbnRcbiAgICAgICAgbGlFbGVtZW50LmFwcGVuZENoaWxkKGRpdkZsZXgxKTtcbiAgICBcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBzZWNvbmQgPGRpdj4gZWxlbWVudCB3aXRoIGNsYXNzIFwicHJvamVjdC10b29sc1wiXG4gICAgICAgIGNvbnN0IGRpdlRvb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2VG9vbHMuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdG9vbHNcIik7XG4gICAgXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgPGRpdj4gZWxlbWVudHMgd2l0aCBjbGFzcyBcImZsZXhcIiBmb3IgdGhlIHRvb2wgaWNvbnNcbiAgICAgICAgY29uc3QgZGl2RmxleDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXZGbGV4Mi5jbGFzc0xpc3QuYWRkKFwiZmxleFwiKTtcbiAgICAgICAgY29uc3QgZGl2RmxleDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXZGbGV4My5jbGFzc0xpc3QuYWRkKFwiZmxleFwiKTtcbiAgICBcbiAgICAgICAgLy8gQXBwZW5kIHRoZSB0b29sIGljb25zIHRvIHRoZSBzZWNvbmQgPGRpdj4gZWxlbWVudFxuICAgICAgICBkaXZUb29scy5hcHBlbmRDaGlsZChkaXZGbGV4Mik7XG4gICAgICAgIGRpdlRvb2xzLmFwcGVuZENoaWxkKGRpdkZsZXgzKTtcbiAgICBcbiAgICAgICAgIC8vQ3JlYXRlIGJ1dHRvbiBkZWxldGVcbiAgICAgICAgIGNvbnN0IGJ1dHRvblJlbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgYnV0dG9uUmVuYW1lLmNsYXNzTGlzdC5hZGQoJ2J0bi1yZW5hbWUnKVxuICAgICAgICAgYnV0dG9uUmVuYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbC10YXJnZXQnLCAnI21vZGFsUmVuYW1lJyk7XG4gICAgXG4gICAgICAgIC8vIEFwcGVuZCB0aGUgXCJyZW5hbWVcIiBidXR0b24gdG8gdGhlIHNlY29uZCA8ZGl2PiBlbGVtZW50XG4gICAgICAgIGRpdkZsZXgyLmFwcGVuZENoaWxkKGJ1dHRvblJlbmFtZSk7XG4gICAgXG4gICAgICAgIC8vQ3JlYXRlIGJ1dHRvbiBkZWxldGVcbiAgICAgICAgY29uc3QgYnV0dG9uRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbkRlbGV0ZS5jbGFzc0xpc3QuYWRkKCdidG4tZGVsZXRlJylcbiAgICAgICAgYnV0dG9uRGVsZXRlLnNldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbC10YXJnZXQnLCAnI21vZGFsRGVsZXRlJyk7XG4gICAgXG4gICAgICAgIC8vIEFwcGVuZCB0aGUgXCJkZWxldGVcIiBidXR0b24gdG8gdGhlIHNlY29uZCA8ZGl2PiBlbGVtZW50XG4gICAgICAgIGRpdkZsZXgzLmFwcGVuZENoaWxkKGJ1dHRvbkRlbGV0ZSk7XG4gICAgXG4gICAgICAgIC8vIEFwcGVuZCB0aGUgc2Vjb25kIDxkaXY+IGVsZW1lbnQgdG8gdGhlIDxsaT4gZWxlbWVudFxuICAgICAgICBsaUVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2VG9vbHMpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaUVsZW1lbnQpXG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEltcG9ydGFudFRhc2tzKCkge1xuICAgIGNvbnN0IG1haW5IZWFkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5IZWFkaW5nJylcbiAgICBtYWluSGVhZGluZy50ZXh0Q29udGVudCA9ICdJbXBvcnRhbnQnOyAgICBcbn0iLCJleHBvcnQgZnVuY3Rpb24gbG9hZEFjdGl2ZVByb2plY3QoY3VycmVudFByb2plY3RUYWIpe1xuICAgIGNvbnN0IG1haW5IZWFkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5IZWFkaW5nJylcbiAgICBtYWluSGVhZGluZy50ZXh0Q29udGVudCA9IGBQcm9qZWN0IHwgJHtjdXJyZW50UHJvamVjdFRhYi5uYW1lfWBcbn1cbiIsImltcG9ydCB7IE1vZGFsSGFuZGxlciwgUHJvamVjdHNIYW5kbGVyLCBBY3RpdmVUYWJIYW5kbGVyIH0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHsgbG9hZEFjdGl2ZVByb2plY3QgfSBmcm9tICcuL3Byb2plY3QtbG9hZGVyJztcblxuY29uc3QgbW9kYWxIYW5kbGVyID0gbmV3IE1vZGFsSGFuZGxlcigpOyBcbmNvbnN0IHByb2plY3RzSGFuZGxlciA9IG5ldyBQcm9qZWN0c0hhbmRsZXIoKTtcbmNvbnN0IHRhYkhhbmRsZXIgPSBuZXcgQWN0aXZlVGFiSGFuZGxlcigpO1xuY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHNDb250YWluZXInKVxuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB9XG59XG5cbmV4cG9ydCBsZXQgYWxsUHJvamVjdHMgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiAnVG9EbycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdNeSBXb3JrJyxcbiAgICB9LFxuXVxuXG5sZXQgY3VycmVudFByb2plY3QgPSBudWxsO1xubGV0IGN1cnJlbnRJbmRleCA9IG51bGxcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRQcm9qZWN0cygpIHtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIGFsbFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICBwcm9qZWN0c0hhbmRsZXIuY3JlYXRlUHJvamVjdEh0bWwocHJvamVjdCk7XG4gICAgfSlcbiAgICB0YWJIYW5kbGVyLmhhbmRsZVRhYnNDbGljaygpXG4gICAgaGFuZGxlUHJvamVjdFRhYnMoYWxsUHJvamVjdHMpXG4gICAgYWRkUHJvamVjdFRvb2xzRXZlbnQoKVxuICAgIG1vZGFsSGFuZGxlci5oYW5kbGVNb2RhbHMoKVxuICAgIGlmKGN1cnJlbnRJbmRleCA9PT0gbnVsbCl7XG5cbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgY29uc3QgcHJvamVjdFRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhci1wcm9qZWN0JylcbiAgICAgICAgcHJvamVjdFRhYnNbY3VycmVudEluZGV4XS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWl0ZW0tYWN0aXZlJylcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0RXZlbnQoKSB7XG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0QnV0dG9uJyk7XG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TmFtZUlucHV0Jyk7XG4gICAgY29uc3QgY2xvc2VNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZU1vZGFsQnV0dG9uJyk7XG4gICAgY29uc3QgbW9kYWxBbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbEFsZXJ0JylcblxuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gcHJvamVjdE5hbWVJbnB1dC52YWx1ZS50cmltKCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgYSBwcm9qZWN0IHdpdGggdGhlIHNhbWUgbmFtZSBhbHJlYWR5IGV4aXN0c1xuICAgICAgICBjb25zdCBleGlzdGluZ1Byb2plY3QgPSBhbGxQcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBuZXdQcm9qZWN0TmFtZSk7XG5cbiAgICAgICAgaWYobmV3UHJvamVjdE5hbWUgPT09ICcnKXtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nUHJvamVjdCkge1xuICAgICAgICAgICAgbW9kYWxBbGVydC50ZXh0Q29udGVudCA9ICcoVGhlIHByb2plY3Qgd2l0aCB0aGlzIG5hbWUgYWxyZWFkeSBleGlzdHMuKSdcbiAgICAgICAgICAgIHByb2plY3ROYW1lSW5wdXQudmFsdWUgPSAnJ1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoYWxsUHJvamVjdHMubGVuZ3RoID09PSA1KXsgIFxuICAgICAgICAgICAgbW9kYWxBbGVydC50ZXh0Q29udGVudCA9ICcoQ2FudCBoYXZlIG1vcmUgdGhhbiBmaXZlIHByb2plY3RzLiBVcGdyYWRlIHRvIFBSTy4pJ1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5ld1Byb2plY3ROYW1lKTtcbiAgICAgICAgYWxsUHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgbG9hZFByb2plY3RzKCk7XG4gICAgICAgIGNsb3NlTW9kYWxCdXR0b24uY2xpY2soKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdFRvb2xzRXZlbnQoKSB7XG4gICAgY29uc3QgcmVuYW1lQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tcmVuYW1lJyk7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tZGVsZXRlJyk7XG4gICAgY29uc3QgcmVuYW1lUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0UmVuYW1lQnV0dG9uJyk7XG4gICAgY29uc3QgY2xvc2VNb2RhbEJ1dHRvblJlbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZU1vZGFsQnV0dG9uUmVuYW1lJyk7XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0RGVsZXRlQnV0dG9uJyk7XG4gICAgY29uc3QgY2xvc2VNb2RhbEJ1dHRvbkRlbGV0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZU1vZGFsQnV0dG9uRGVsZXRlJyk7XG5cbiAgICByZW5hbWVCdXR0b25zLmZvckVhY2goKGJ1dHRvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBcbiAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBhbGxQcm9qZWN0c1tpbmRleF07XG4gICAgICAgICAgIGN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICAgICBjb25zdCBvbGROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29sZE5hbWUnKTtcbiAgICAgICAgICAgb2xkTmFtZS50ZXh0Q29udGVudCA9IGAoJHtjdXJyZW50UHJvamVjdC5uYW1lfSlgXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmVuYW1lUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhci1wcm9qZWN0JylcbiAgICAgICAgY29uc3QgcHJvamVjdFJlbmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RSZW5hbWVJbnB1dCcpO1xuICAgICAgICBjb25zdCBtb2RhbEFsZXJ0UmVuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsQWxlcnRSZW5hbWUnKVxuICAgICAgICBsZXQgZXhpc3RpbmdQcm9qZWN0ID0gYWxsUHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gcHJvamVjdFJlbmFtZUlucHV0LnZhbHVlKVxuXG4gICAgICAgIGlmKHByb2plY3RSZW5hbWVJbnB1dC52YWx1ZSA9PT0gJycpe1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZihleGlzdGluZ1Byb2plY3Qpe1xuICAgICAgICAgICAgbW9kYWxBbGVydFJlbmFtZS50ZXh0Q29udGVudCA9ICcoVGhlIHByb2plY3Qgd2l0aCB0aGlzIG5hbWUgYWxyZWFkeSBleGlzdHMpJ1xuICAgICAgICAgICAgcHJvamVjdFJlbmFtZUlucHV0LnZhbHVlID0gJydcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0KSB7ICAgICAgICAgICAgXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdC5uYW1lID0gcHJvamVjdFJlbmFtZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgbG9hZFByb2plY3RzKCk7XG4gICAgICAgICAgICBwcm9qZWN0VGFic1tjdXJyZW50SW5kZXhdLmNsaWNrKClcbiAgICAgICAgICAgIGNsb3NlTW9kYWxCdXR0b25SZW5hbWUuY2xpY2soKTtcbiAgICAgICAgICAgIG1vZGFsSGFuZGxlci5oYW5kbGVNb2RhbHMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gbnVsbDtcbiAgICB9KTtcblxuICAgIGRlbGV0ZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uLCBpbmRleCkgPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IGFsbFByb2plY3RzW2luZGV4XTtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlUHJvamVjdE5hbWUnKVxuICAgICAgICAgICAgZGVsZXRlUHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBgKCR7Y3VycmVudFByb2plY3QubmFtZX0pYFxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhYkFsbFRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYkFsbFRhc2tzJylcbiAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXggPSBudWxsXG4gICAgICAgICAgICBhbGxQcm9qZWN0cy5zcGxpY2UoY3VycmVudEluZGV4LCAxKVxuICAgICAgICAgICAgbG9hZFByb2plY3RzKCk7XG4gICAgICAgICAgICBjbG9zZU1vZGFsQnV0dG9uRGVsZXRlLmNsaWNrKCk7XG4gICAgICAgICAgICB0YWJBbGxUYXNrcy5jbGljaygpXG4gICAgICAgICAgICBtb2RhbEhhbmRsZXIuaGFuZGxlTW9kYWxzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50UHJvamVjdCA9IG51bGw7XG4gICAgfSk7XG59XG5cblxubGV0IGN1cnJlbnRQcm9qZWN0VGFiID0gbnVsbFxuXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0VGFicyhhbGxQcm9qZWN0cyl7XG4gICAgY29uc3QgcHJvamVjdFRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhci1wcm9qZWN0JylcbiAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpXG4gICAgcHJvamVjdFRhYnMuZm9yRWFjaCgodGFiLCBpbmRleCkgPT4ge1xuICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICB0YWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXItaXRlbS1hY3RpdmUnKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItaXRlbS1hY3RpdmUnKVxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0VGFiID0gYWxsUHJvamVjdHNbaW5kZXhdXG4gICAgICAgICAgICAgICAgbG9hZEFjdGl2ZVByb2plY3QoY3VycmVudFByb2plY3RUYWIpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuXG4iLCJjb25zdCBzaWRlYmFyVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ09wZW4nKTtcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhck1lbnUnKVxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluU2VjdGlvbicpO1xuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlclNlY3Rpb24nKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlU2lkZWJhcigpIHtcbiAgICBzaWRlYmFyVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHNpZGViYXJUb2dnbGUuY2hlY2tlZCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdibHVyJyk7XG4gICAgICAgICAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2JsdXInKTtcbiAgICAgICAgICAgIH0sIDE1NSk7XG4gICAgICAgICAgICBoYW5kbGVUcmFuc2l0aW9uKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnYmx1cicpO1xuICAgICAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2JsdXInKTtcbiAgICAgICAgICAgIGhhbmRsZVRyYW5zaXRpb24oKVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRyYW5zaXRpb24oKXtcbiAgICBpZiAoc2lkZWJhclRvZ2dsZS5jaGVja2VkKSB7XG4gICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnc21vb3RoLXRyYW5zaXRpb24nKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzbW9vdGgtdHJhbnNpdGlvbicpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdzbW9vdGgtdHJhbnNpdGlvbicpXG4gICAgICAgIH0sIDE1NSk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRUb2RheVRhc2tzKCkge1xuICAgIGNvbnN0IG1haW5IZWFkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5IZWFkaW5nJylcbiAgICBtYWluSGVhZGluZy50ZXh0Q29udGVudCA9ICdUb2RheSc7ICAgXG4gICAgXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFdlZWtUYXNrcygpIHtcbiAgICBjb25zdCBtYWluSGVhZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluSGVhZGluZycpXG4gICAgbWFpbkhlYWRpbmcudGV4dENvbnRlbnQgPSAnVGhpcyBXZWVrJzsgICAgXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IGhhbmRsZVNpZGViYXIgZnJvbSAnLi9zaWRlYmFyJ1xuaW1wb3J0IGxvYWRBbGxUYXNrcyBmcm9tICcuL2FsbHRhc2tzJztcbmltcG9ydCB7IE1vZGFsSGFuZGxlcn0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHsgbG9hZFByb2plY3RzLCBhZGRQcm9qZWN0RXZlbnQgfSBmcm9tICcuL3Byb2plY3RzJztcblxuKGZ1bmN0aW9uIHdlYnNpdGVIYW5kbGVyKCl7XG4gICAgY29uc3QgbW9kYWxIYW5kbGVyID0gbmV3IE1vZGFsSGFuZGxlcigpOyBcblxuICAgIGhhbmRsZVNpZGViYXIoKTtcbiAgICBsb2FkQWxsVGFza3MoKTtcbiAgICBsb2FkUHJvamVjdHMoKTtcbiAgICBhZGRQcm9qZWN0RXZlbnQoKTtcbiAgICBtb2RhbEhhbmRsZXIuaGFuZGxlTW9kYWxzKCk7XG59KSgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=