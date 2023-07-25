import './style.css'
import handleSidebar from './sidebar'
import loadAllTasks from './alltasks';
import { ActiveTabHandler } from './dom';

(function websiteHandler(){
    const activeTabHandler = new ActiveTabHandler();

    handleSidebar()
    loadAllTasks()
    activeTabHandler.handleTabsClick()
})()

