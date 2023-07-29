import loadAllTasks from "./alltasks";
import loadTodayTasks from "./today";
import loadWeekTasks from "./week";
import loadImportantTasks from "./important";
import projectIcon from './img/project.svg'

export class ActiveTabHandler {
    constructor() {
        this.currentTab = ''
    }

    handleTabsClick() {
        this.tabs = document.querySelectorAll('.tab');
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
                break
        }
    }
}

export class ModalHandler {
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
        projectNameInput.value = ''
        modalAlert.innerHTML = ''
        projectRenameInput.value = ''

        if(modal == null)return
        modal.classList.remove('active')
        overlay.classList.remove('active')
    }
}

export class ProjectsHandler{
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
        svgProject.src = projectIcon; 
    
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

