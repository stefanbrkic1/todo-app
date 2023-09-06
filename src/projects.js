import { ModalHandler, ProjectsHandler } from './dom';
import { ActiveHomeTabHandler } from './tabs';
import { loadActiveProject } from './project-loader';
import { closeSidebarIfSmallScreen } from './dom'
import { addSectionSubmitEvent, loadCurrentProjectSections } from './sections';
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

export let allProjects = [
    {
        name: 'ToDo',
        sections: [
            {
                sectionTitle: 'Routines',
                tasks: [

                ],
            },
            {
                sectionTitle: 'Shopping',
                tasks: [

                ],
            },
        ],
    },
    {
        name: 'My Work',
        sections: [
            {
                sectionTitle: 'Presentations',
                tasks: [

                ],
            },
            {
                sectionTitle: 'Interviews',
                tasks: [

                ],
            },
        ],
    },
]

export let currentProject = null;
export let currentProjectIndex = null

export function loadProjects() {
    projectsContainer.innerHTML = ''
    allProjects.forEach(project => {
        projectsHandler.createProjectHtml(project);
    })
    activeHomeTabHandler.handleTabsClick()
    handleProjectTabs(allProjects)
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
        const newProjectName = projectNameInput.value.trim();

        // Check if a project with the same name already exists
        const existingProject = allProjects.find(project => project.name === newProjectName);

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
        allProjects.push(newProject);
        loadProjects();
        closeModalButton.click();
    });
}

export function addProjectToolsSubmitEvent() {
    const renameProjectButton = document.getElementById('projectRenameButton');
    const closeModalButtonRename = document.getElementById('closeModalButtonRename');
    const deleteProjectButton = document.getElementById('projectDeleteButton');
    const closeModalButtonDelete = document.getElementById('closeModalButtonDelete');

    renameProjectButton.addEventListener('click', () => {
        const projectTabs = document.querySelectorAll('.sidebar-project')
        const projectRenameInput = document.getElementById('projectRenameInput');
        const modalAlertRename = document.getElementById('modalAlertRename')
        let existingProject = allProjects.find(project => project.name === projectRenameInput.value)

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
            currentProject.name = projectRenameInput.value;
            loadProjects();
            projectTabs[currentProjectIndex].click()
            closeModalButtonRename.click();
            modalHandler.handleModals();
            modalHandler.changeModalPositionIfKeyboardOpened()
        } else {

        }
        currentProject = null;
    });

    deleteProjectButton.addEventListener('click', () => {
        const tabAllTasks = document.getElementById('tabAllTasks')
        if (currentProject) {
            allProjects.splice(currentProjectIndex, 1)
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

function addProjectToolsEvent() {
    const renameButtons = document.querySelectorAll('.btn-rename');
    const deleteButtons = document.querySelectorAll('.btn-delete');

    renameButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentProject = allProjects[index];
            currentProjectIndex = index;
            const oldName = document.getElementById('oldName');
            oldName.textContent = `(${currentProject.name})`
        });
    });

    deleteButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentProject = allProjects[index];
            currentProjectIndex = index;
            const deleteProjectName = document.getElementById('deleteProjectName')
            deleteProjectName.textContent = `(${currentProject.name})`
        });
    });
}

function handleProjectTabs(allProjects) {
    const projectTabs = document.querySelectorAll('.sidebar-project')
    const tabs = document.querySelectorAll('.tab')
    projectTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            currentProjectIndex = index
            tabs.forEach(tab => {
                tab.classList.remove('sidebar-item-active')
            })
            tab.classList.add('sidebar-item-active')
            currentProject = allProjects[index]
            loadActiveProject(currentProject)
            projectsHandler.createMainProjectToolsHtml()
            addProjectToolsMainEvent()
            addSectionSubmitEvent()
            addSectionDeleteEvent()
            loadCurrentProjectSections(currentProject)
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

    btnRenameMain.addEventListener('click', () => {
        currentProject = allProjects[currentProjectIndex];
        const oldName = document.getElementById('oldName');
        oldName.textContent = `(${currentProject.name})`
    })

    btnDeleteMain.addEventListener('click', () => {
        currentProject = allProjects[currentProjectIndex];
        const deleteProjectName = document.getElementById('deleteProjectName')
        deleteProjectName.textContent = `(${currentProject.name})`
    })

    addSectionButton.addEventListener('click', () => {
        currentProject = allProjects[currentProjectIndex];
    })
}

export let currentSectionIndex = null

export function addDeleteSectionButtonsEvent() {
    const deleteSectionButtons = document.querySelectorAll('.remove-section-btn')

    deleteSectionButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentProject = allProjects[currentProjectIndex];
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
        if (currentSectionIndex || currentSectionIndex === 0) {
            currentProject.sections.splice(currentSectionIndex, 1)
            loadCurrentProjectSections(currentProject)
            loadAllSectionsTasks(currentProject)
            closeModalButtonDeleteSection.click();
            modalHandler.handleModals();
            modalHandler.changeModalPositionIfKeyboardOpened()
            addDeleteSectionButtonsEvent()
        } else {

        }
        currentSectionIndex = null
    });
}
