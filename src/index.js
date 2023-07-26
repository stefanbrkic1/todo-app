import './style.css'
import handleSidebar from './sidebar'
import loadAllTasks from './alltasks';
import { ActiveTabHandler, ModalHandler } from './dom';
import loadProjects from './projects';

(function websiteHandler(){
    const activeTabHandler = new ActiveTabHandler();
    const modalHandler = new ModalHandler(); 

    handleSidebar()
    loadAllTasks()
    activeTabHandler.handleTabsClick()
    loadProjects();
    modalHandler.handleModals();
})();
