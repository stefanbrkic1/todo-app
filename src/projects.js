import { ModalHandler, ProjectsHandler, ActiveTabHandler } from './dom';

const modalHandler = new ModalHandler(); 
const projectsHandler = new ProjectsHandler();
const tabHandler = new ActiveTabHandler();
const projectsContainer = document.getElementById('projectsContainer')

class Project {
    constructor(name) {
        this.name = name
    }
}

export let allProjects = [
    {
        name: 'ToDo',
    },
    {
        name: 'My Work',
    },
]

export function loadProjects() {
    projectsContainer.innerHTML = ''
    allProjects.forEach(project => {
      projectsHandler.createProjectHtml(project);
    })
    addProjectToolsEvent()
    tabHandler.handleTabsClick()
    handleProjectTabs(allProjects)
    modalHandler.handleModals()
}

export function addProjectEvent() {
    const addProjectButton = document.getElementById('addProjectButton');
    const projectNameInput = document.getElementById('projectNameInput');
    const closeModalButton = document.getElementById('closeModalButton');
    const modalAlert = document.getElementById('modalAlert')

    addProjectButton.addEventListener('click', () => {
        const newProjectName = projectNameInput.value.trim();

        // Check if a project with the same name already exists
        const existingProject = allProjects.find(project => project.name === newProjectName);

        if(newProjectName === ''){
            return
        }

        if (existingProject) {
            modalAlert.textContent = '(The project with this name already exists.)'
            return;
        }

        if(allProjects.length === 5){  
            modalAlert.textContent = '(Cant have more than five projects. Upgrade to PRO.)'
            return
        }

        let newProject = new Project(newProjectName);
        allProjects.push(newProject);
        loadProjects();
        closeModalButton.click();
    });
}

let currentProject = null;
let currentIndex

function addProjectToolsEvent() {
    const renameButtons = document.querySelectorAll('.btn-rename');
    const deleteButtons = document.querySelectorAll('.btn-delete');
    const renameProjectButton = document.getElementById('projectRenameButton');
    const closeModalButtonRename = document.getElementById('closeModalButtonRename');
    const deleteProjectButton = document.getElementById('projectDeleteButton');
    const closeModalButtonDelete = document.getElementById('closeModalButtonDelete');

    renameButtons.forEach((button, index) => {
        button.addEventListener('click', () => { 
           currentProject = allProjects[index];
           const oldName = document.getElementById('oldName');
           oldName.textContent = `(${currentProject.name})`
        });
    });

    renameProjectButton.addEventListener('click', () => {
        if (currentProject) {
            const projectRenameInput = document.getElementById('projectRenameInput');
            currentProject.name = projectRenameInput.value;
            loadProjects();
            closeModalButtonRename.click();
            modalHandler.handleModals();
        } else {
            
        }
        currentProject = null;
    });

    deleteButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentProject = allProjects[index];
            currentIndex = index;
            const deleteProjectName = document.getElementById('deleteProjectName')
            deleteProjectName.textContent = `(${currentProject.name})`
        });
    });

    deleteProjectButton.addEventListener('click', () => {
        if (currentProject) {
            allProjects.splice(currentIndex, 1)
            loadProjects();
            closeModalButtonDelete.click();
            modalHandler.handleModals();
        } else {
            
        }
        currentProject = null;
    });
}


let currentProjectTab = null

function handleProjectTabs(allProjects){
    const projectTabs = document.querySelectorAll('.sidebar-project')
    const tabs = document.querySelectorAll('.tab')
    projectTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(tab => {
                tab.classList.remove('sidebar-item-active')
            })
            tab.classList.add('sidebar-item-active')
            currentProjectTab = allProjects[index]
            loadActiveProject(currentProjectTab)
        })
    })
}

function loadActiveProject(currentProjectTab){
    const mainHeading = document.getElementById('mainHeading')
    const projectNameMain = document.getElementById('projectNameMain')
    mainHeading.textContent = `Project | ${currentProjectTab.name}`
}


