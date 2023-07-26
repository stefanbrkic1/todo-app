import './style.css'
import handleSidebar from './sidebar'
import loadAllTasks from './alltasks';
import { ActiveTabHandler } from './dom';
import loadProjects from './projects';

(function websiteHandler(){
    const activeTabHandler = new ActiveTabHandler();

    handleSidebar()
    loadAllTasks()
    activeTabHandler.handleTabsClick()
    loadProjects();
})()

