import loadAllTasks from "./alltasks";
import loadTodayTasks from "./today";
import loadWeekTasks from "./week";
import loadImportantTasks from "./important";

export class ActiveTabHandler {
    constructor() {
        this.tabs = document.querySelectorAll('.tab');
        this.currentTab = 'tabAllTasks'
    }

    handleTabsClick() {
        this.tabs.forEach(tab => {
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
        this.tabs.forEach(tab => {
            tab.classList.remove('sidebar-item-active');
        });
        target.classList.add('sidebar-item-active');
    }

    openActiveTab(target){
        switch (target.id) {
            case 'tabAllTasks':
                if (this.currentTab === 'tabAllTasks') return;
                loadAllTasks();
                this.currentTab = 'tabAllTasks'
                break;
    
            case 'tabToday':
                if (this.currentTab === 'tabToday') return;
                loadTodayTasks();
                this.currentTab = 'tabToday'
                break;

            case 'tabThisWeek':
                if (this.currentTab === 'tabThisWeek') return;
                loadWeekTasks();
                this.currentTab = 'tabThisWeek'
                break;

            case 'tabImportant':
                if (this.currentTab === 'tabImportant') return;
                loadImportantTasks();
                this.currentTab = 'tabImportant'
                break;                
                
            default:
                break;
        }
    }
}
