import './style.css'
import handleSidebar from './sidebar'
import loadAllTasks from './alltasks';
import { ModalHandler } from './dom';
import { loadProjects, addProjectEvent, addProjectToolsSubmitEvent, allProjects } from './projects';

(function websiteHandler() {
    checkStorage()
    document.addEventListener("DOMContentLoaded", function () {
        const modalHandler = new ModalHandler();

        const preloaderForLoader = document.getElementById('preloaderForLoader')
        const loader = document.getElementById('preloader')
        window.addEventListener('load', function () {
            preloaderForLoader.style.opacity = "0";
            preloaderForLoader.style.visibility = "hidden";
            setTimeout(() => {
                loader.style.opacity = "0";
                loader.style.visibility = "hidden";
            }, 3500);
        })

        handleSidebar();
        loadAllTasks();
        loadProjects();
        addProjectEvent();
        addProjectToolsSubmitEvent()
        modalHandler.handleModals();
        modalHandler.changeModalPositionIfKeyboardOpened()
        modalHandler.handleSubmit()
        setThemeTogglerEvent();
    });
})();

function setThemeTogglerEvent() {
    const themeToggler = document.getElementById('themeToggler')
    themeToggler.addEventListener('click', () => {
        console.log('clicked')
        document.body.classList.toggle("light-theme")
    })
}

function checkStorage() {
    if (!JSON.parse(localStorage.getItem("allProjects"))) {
        populateStorage();
    } else {

    }
}

function populateStorage() {
    localStorage.setItem("allProjects", JSON.stringify(allProjects))
}
