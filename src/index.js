import './style.css'
import handleSidebar from './sidebar'
import loadAllTasks from './alltasks';
import { ModalHandler } from './dom';
import { loadProjects, addProjectEvent, addProjectToolsSubmitEvent } from './projects';

(function websiteHandler(){
    const modalHandler = new ModalHandler(); 

    const preloaderForLoader = document.getElementById('preloaderForLoader')
    const loader = document.getElementById('preloader')
    window.addEventListener('load', function(){
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
})();

