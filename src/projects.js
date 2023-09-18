import { ModalHandler, ProjectsHandler } from './dom';
import { ActiveHomeTabHandler } from './tabs';
import { loadActiveProject, displayNoSectionsImage } from './project-loader';
import { closeSidebarIfSmallScreen } from './dom'
import { loadCurrentProjectSections } from './sections';
import { loadAllSectionsTasks } from './tasks';

const modalHandler = new ModalHandler();
const projectsHandler = new ProjectsHandler();
const activeHomeTabHandler = new ActiveHomeTabHandler();
const projectsContainer = document.getElementById('projectsContainer')

class Project {
    constructor(name) {
        this.name = name
        this.sections = []
    }
}

export let allProjects = []

export let currentProject = null;
export let currentProjectIndex = null

export function loadProjects() {
    let allProjectsLocal = JSON.parse(localStorage.getItem("allProjects"))
    projectsContainer.innerHTML = ''
    allProjectsLocal.forEach(project => {
        projectsHandler.createProjectHtml(project);
    })
    activeHomeTabHandler.handleTabsClick()
    handleProjectTabs()
    addProjectToolsEvent()
    modalHandler.handleModals()
    modalHandler.changeModalPositionIfKeyboardOpened()
    if (currentProjectIndex === null) {

    }
    else {
        const projectTabs = document.querySelectorAll('.sidebar-project')
        projectTabs[currentProjectIndex].classList.add('sidebar-item-active')
    }
}

export function addProjectEvent() {
    const addProjectButton = document.getElementById('addProjectButton');
    const projectNameInput = document.getElementById('projectNameInput');
    const closeModalButton = document.getElementById('closeModalButton');
    const modalAlert = document.getElementById('modalAlert')

    addProjectButton.addEventListener('click', () => {
        let allProjectsLocal = JSON.parse(localStorage.getItem("allProjects"))
        const newProjectName = projectNameInput.value.trim();

        // Check if a project with the same name already exists
        const existingProject = allProjectsLocal.find(project => project.name === newProjectName);

        if (newProjectName === '') {
            modalAlert.textContent = '(You must enter new project name)'
            projectNameInput.value = ''
            return
        }

        if (existingProject) {
            modalAlert.textContent = '(The project with this name already exists.)'
            projectNameInput.value = ''
            return;
        }

        if (allProjects.length === 5) {
            modalAlert.textContent = '(Cant have more than five projects. Upgrade to PRO.)'
            return
        }

        let newProject = new Project(newProjectName);
        allProjectsLocal.push(newProject);
        localStorage.setItem("allProjects", JSON.stringify(allProjectsLocal))
        loadProjects();
        closeModalButton.click();
        reloadTabAllTasksIfListAdded()
    });
}

function reloadTabAllTasksIfListAdded() {
    const currentTabName = document.getElementById('currentTabName')
    if (currentTabName.textContent === 'Home') {
        const tabAllTasks = document.getElementById('tabAllTasks')
        tabAllTasks.click()
        const tasksListView = document.getElementById('tasksListView')
        tasksListView.classList.remove('no-lists-list-view')
    }
}

export function addProjectToolsSubmitEvent() {
    const renameProjectButton = document.getElementById('projectRenameButton');
    const closeModalButtonRename = document.getElementById('closeModalButtonRename');
    const deleteProjectButton = document.getElementById('projectDeleteButton');
    const closeModalButtonDelete = document.getElementById('closeModalButtonDelete');

    renameProjectButton.addEventListener('click', () => {
        let allProjectsLocal = JSON.parse(localStorage.getItem("allProjects"))
        const projectRenameInput = document.getElementById('projectRenameInput');
        const modalAlertRename = document.getElementById('modalAlertRename')
        let existingProject = allProjectsLocal.find(project => project.name === projectRenameInput.value)

        if (projectRenameInput.value === '') {
            modalAlertRename.textContent = '(You must enter new project name)'
            projectRenameInput.value = ''
            return
        }

        if (existingProject) {
            modalAlertRename.textContent = '(The project with this name already exists)'
            projectRenameInput.value = ''
            return
        }

        if (currentProject) {
            const projectToUpdate = allProjectsLocal[currentProjectIndex];
            projectToUpdate.name = projectRenameInput.value;
            localStorage.setItem("allProjects", JSON.stringify(allProjectsLocal))
            loadProjects();
            closeModalButtonRename.click();
            modalHandler.handleModals();
            modalHandler.changeModalPositionIfKeyboardOpened()
            clickCurrentProject()
        } else {

        }
        currentProject = null;
    });

    deleteProjectButton.addEventListener('click', () => {
        let allProjectsLocal = JSON.parse(localStorage.getItem("allProjects"))
        const tabAllTasks = document.getElementById('tabAllTasks')
        if (currentProject) {
            allProjectsLocal.splice(currentProjectIndex, 1)
            localStorage.setItem("allProjects", JSON.stringify(allProjectsLocal))
            currentProjectIndex = null
            loadProjects();
            closeModalButtonDelete.click();
            tabAllTasks.click()
            modalHandler.handleModals();
            modalHandler.changeModalPositionIfKeyboardOpened()
        } else {

        }

        currentProject = null;
    });
}

export function clickCurrentProject() {
    const projectTabs = document.querySelectorAll('.sidebar-project')
    projectTabs[currentProjectIndex].click()
}

function addProjectToolsEvent() {
    const renameButtons = document.querySelectorAll('.btn-rename');
    const deleteButtons = document.querySelectorAll('.btn-delete');
    let allProjectsLocal = JSON.parse(localStorage.getItem("allProjects"))

    renameButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentProject = allProjectsLocal[index];
            currentProjectIndex = index;
            const oldName = document.getElementById('oldName');
            oldName.textContent = `(${currentProject.name})`
        });
    });

    deleteButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentProject = allProjectsLocal[index];
            currentProjectIndex = index;
            const deleteProjectName = document.getElementById('deleteProjectName')
            deleteProjectName.textContent = `(${currentProject.name})`
        });
    });
}

function handleProjectTabs() {
    let allProjectsLocal = JSON.parse(localStorage.getItem("allProjects"))
    const projectTabs = document.querySelectorAll('.sidebar-project')
    const tabs = document.querySelectorAll('.tab')
    projectTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            currentProjectIndex = index
            tabs.forEach(tab => {
                tab.classList.remove('sidebar-item-active')
            })
            tab.classList.add('sidebar-item-active')
            currentProject = allProjectsLocal[index]
            loadActiveProject(currentProject)
            projectsHandler.createMainProjectToolsHtml()
            addProjectToolsMainEvent()
            addSectionDeleteEvent()
            loadCurrentProjectSections()
            addDeleteSectionButtonsEvent()
            loadAllSectionsTasks(currentProject)
            modalHandler.handleModals()
            closeSidebarIfSmallScreen()
        })
    })
}

function addProjectToolsMainEvent() {
    const btnRenameMain = document.getElementById('btnRenameMain');
    const btnDeleteMain = document.getElementById('btnDeleteMain');
    const addSectionButton = document.getElementById('addSectionButton');
    let allProjectsLocal = JSON.parse(localStorage.getItem("allProjects"))

    btnRenameMain.addEventListener('click', () => {
        currentProject = allProjectsLocal[currentProjectIndex];
        const oldName = document.getElementById('oldName');
        oldName.textContent = `(${currentProject.name})`
    })

    btnDeleteMain.addEventListener('click', () => {
        currentProject = allProjectsLocal[currentProjectIndex];
        const deleteProjectName = document.getElementById('deleteProjectName')
        deleteProjectName.textContent = `(${currentProject.name})`
    })

    addSectionButton.addEventListener('click', () => {
        currentProject = allProjectsLocal[currentProjectIndex];
    })
}

export let currentSectionIndex = null

export function addDeleteSectionButtonsEvent() {
    const deleteSectionButtons = document.querySelectorAll('.remove-section-btn')
    let allProjectsLocal = JSON.parse(localStorage.getItem("allProjects"))

    deleteSectionButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentProject = allProjectsLocal[currentProjectIndex];
            currentSectionIndex = index;
            const deleteSectionName = document.getElementById('deleteSectionName')
            deleteSectionName.textContent = `(${currentProject.sections[index].sectionTitle})`
        })
    })
}

export function addSectionDeleteEvent() {
    const deleteSectionButton = document.getElementById('deleteSectionButton')
    const closeModalButtonDeleteSection = document.getElementById('closeModalButtonDeleteSection')

    deleteSectionButton.addEventListener('click', () => {
        let allProjectsLocal = JSON.parse(localStorage.getItem("allProjects"))
        if (currentSectionIndex || currentSectionIndex === 0) {
            allProjectsLocal[currentProjectIndex].sections.splice(currentSectionIndex, 1)
            localStorage.setItem("allProjects", JSON.stringify(allProjectsLocal))
            closeModalButtonDeleteSection.click();
            modalHandler.handleModals();
            modalHandler.changeModalPositionIfKeyboardOpened()
            displayNoSectionsImage()
            clickCurrentProject()
        } else {

        }
        currentSectionIndex = null
    });
}
