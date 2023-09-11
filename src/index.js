import './style.css'
import handleSidebar from './sidebar'
import loadAllTasks from './alltasks';
import { ModalHandler } from './dom';
import { loadProjects, addProjectEvent, addProjectToolsSubmitEvent } from './projects';

(function websiteHandler(){
    const modalHandler = new ModalHandler(); 

    const loader = document.getElementById('preloader')
    window.addEventListener('load', function(){
        setTimeout(() => {
            loader.style.display = "none";
        }, 3000);
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

