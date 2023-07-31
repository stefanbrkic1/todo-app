import './style.css'
import handleSidebar from './sidebar'
import loadAllTasks from './alltasks';
import { ModalHandler} from './dom';
import { loadProjects, addProjectEvent } from './projects';

(function websiteHandler(){
    const modalHandler = new ModalHandler(); 

    handleSidebar();
    loadAllTasks();
    loadProjects();
    addProjectEvent();
    modalHandler.handleModals();
})();

