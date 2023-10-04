import { closeSidebarIfSmallScreen } from './dom';
import loadAllTasks from './alltasks';
import loadTodayTasks from './today';
import loadWeekTasks from './week';
import loadImportantTasks from './important';

export class ActiveHomeTabHandler {
  constructor() {

  }

  handleTabsClick() {
    this.homeTabs = document.querySelectorAll('.sidebar-item');
    this.projectTabs = document.querySelectorAll('.sidebar-project');
    this.homeTabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        const mainHeadingRight = document.getElementById('mainHeadingRight');
        mainHeadingRight.innerHTML = '';
        let { target } = e;
        while (target && !target.classList.contains('sidebar-item')) {
          target = target.parentNode;
        }
        this.setActiveTab(target);
        this.openActiveTab(target);
      });
    });
  }

  setActiveTab(target) {
    this.homeTabs.forEach((tab) => {
      tab.classList.remove('sidebar-item-active');
    });
    this.projectTabs.forEach((tab) => {
      tab.classList.remove('sidebar-item-active');
    });
    target.classList.add('sidebar-item-active');
  }

  openActiveTab(target) {
    switch (target.id) {
      case 'tabAllTasks':
        loadAllTasks();
        closeSidebarIfSmallScreen();
        break;

      case 'tabToday':
        loadTodayTasks();
        closeSidebarIfSmallScreen();
        break;

      case 'tabThisWeek':
        loadWeekTasks();
        closeSidebarIfSmallScreen();
        break;

      case 'tabImportant':
        loadImportantTasks();
        closeSidebarIfSmallScreen();
        break;

      default:
        break;
    }
  }
}
