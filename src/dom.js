import loadAllTasks from "./alltasks";
import loadTodayTasks from "./today";
import loadWeekTasks from "./week";
import loadImportantTasks from "./important";
import projectIcon from './img/project.svg'

export class ActiveHomeTabHandler {
    constructor() {

    }

    handleTabsClick() {
        this.homeTabs = document.querySelectorAll('.sidebar-item');
        this.projectTabs = document.querySelectorAll('.sidebar-project');
        this.homeTabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                const mainHeadingRight = document.getElementById('mainHeadingRight')
                mainHeadingRight.innerHTML = ''
                let target = e.target;
                while (target && !target.classList.contains('sidebar-item')) {
                    target = target.parentNode;
                }
                this.setActiveTab(target);
                this.openActiveTab(target)
            });
        });
    }

    setActiveTab(target) {
        this.homeTabs.forEach(tab => {
            tab.classList.remove('sidebar-item-active');
        });
        this.projectTabs.forEach(tab => {
            tab.classList.remove('sidebar-item-active');
        });
        target.classList.add('sidebar-item-active');
    }

    openActiveTab(target) {
        switch (target.id) {
            case 'tabAllTasks':
                loadAllTasks();
                closeSidebarIfSmallScreen()
                break;

            case 'tabToday':
                loadTodayTasks();
                closeSidebarIfSmallScreen()
                break;

            case 'tabThisWeek':
                loadWeekTasks();
                closeSidebarIfSmallScreen()
                break;

            case 'tabImportant':
                loadImportantTasks();
                closeSidebarIfSmallScreen()
                break;

            default:
                break
        }
    }
}

export class ModalHandler {
    constructor() {
        this.projectNameInput = document.getElementById('projectNameInput');
        this.projectRenameInput = document.getElementById('projectRenameInput')
        this.modalAlert = document.getElementById('modalAlert')
        this.modalAlertRename = document.getElementById('modalAlertRename')
        this.allInputs = document.getElementsByTagName('input')
        this.modalAddProject = document.getElementById('modal')
        this.modalRenameProject = document.getElementById('modalRename')
        this.modalDeleteProject = document.getElementById('modalDelete')
        this.sectionNameInput = document.getElementById('sectionNameInput')
        this.modalSectionAlert = document.getElementById('modalSectionAlert')
        this.modalAddSection = document.getElementById('modalAddSection')
    }


    handleModals() {
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

    openModal(modal) {
        if (modal == null) return
        modal.classList.add('active')
        overlay.classList.add('active')
        this.projectNameInput.value = ''
        this.modalAlert.innerHTML = ''
        this.modalAlertRename.innerHTML = ''
        this.projectRenameInput.value = ''
        this.sectionNameInput.value = ''
        this.modalSectionAlert.innerHTML = ''
    }

    closeModal(modal) {
        this.projectNameInput.blur();
        this.projectRenameInput.blur()
        this.sectionNameInput.blur()

        if (modal == null) return
        modal.classList.remove('active')
        overlay.classList.remove('active')
    }


    changeModalPositionIfKeyboardOpened() {
        const inputsArray = Array.from(this.allInputs)
        const mediaQueryHandler = document.getElementById('mediaQueryHandler')
        inputsArray.forEach(input => {
            input.addEventListener('focus', () => {
                const computedStyle = window.getComputedStyle(mediaQueryHandler);
                if (computedStyle.display === 'none') {
                    this.modalAddProject.style.top = '30%'
                    this.modalRenameProject.style.top = '30%'
                    this.modalAddSection.style.top = '30%'
                }
            })
            input.addEventListener('blur', () => {
                this.modalAddProject.style.top = '50%'
                this.modalRenameProject.style.top = '50%'
                this.modalAddSection.style.top = '50%'
            })
        })
    }

    handleSubmit() {
        document.getElementById("addForm").addEventListener("submit", function (event) {
            event.preventDefault();
            this.projectNameInput.blur()
        });

        document.getElementById("renameForm").addEventListener("submit", function (event) {
            event.preventDefault();
            this.sectionNameInput.blur()
        });

        document.getElementById("addSectionForm").addEventListener("submit", function (event) {
            event.preventDefault();
            this.sectionNameInput.blur()
        });

        document.getElementById("deleteForm").addEventListener("submit", function (event) {
            event.preventDefault();
        });

        document.getElementById("deleteFormSection").addEventListener("submit", function (event) {
            event.preventDefault();
        });
    }
}

export class ProjectsHandler {
    constructor() {

    }

    projectsContainer = document.getElementById('projectsContainer')

    createProjectHtml(project) {
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
        const projectNameContainer = document.createElement("div");
        projectNameContainer.textContent = project.name
        projectNameContainer.classList.add("project-name-input");
        divFlex1.appendChild(projectNameContainer);

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

    createMainProjectToolsHtml() {
        const mainHeadingRight = document.getElementById('mainHeadingRight')
        // Create the first button element

        mainHeadingRight.innerHTML = ''

        const btnRenameMain = document.createElement('button');
        btnRenameMain.classList.add('btn-rename-main');
        btnRenameMain.id = 'btnRenameMain';
        btnRenameMain.setAttribute('data-modal-target', '#modalRename');

        // Create the second button element
        const btnDeleteMain = document.createElement('button');
        btnDeleteMain.classList.add('btn-delete-main');
        btnDeleteMain.id = 'btnDeleteMain';
        btnDeleteMain.setAttribute('data-modal-target', '#modalDelete');

        mainHeadingRight.appendChild(btnRenameMain);
        mainHeadingRight.appendChild(btnDeleteMain);
    }
}

export class SectionHandler {
    constructor() {
        this.floatingActionButton = document.getElementById('floatingActionButton')
        this.tasksListView = document.getElementById('tasksListView')
    }

    createAddSectionButtonHtml() {
        this.floatingActionButton.innerHTML = ''
        const addSectionButton = document.createElement('button');
        addSectionButton.id = 'addSectionButton';
        addSectionButton.className = 'add-section-button';
        addSectionButton.setAttribute('data-modal-target', '#modalAddSection');
        addSectionButton.innerHTML = '&plus;';

        this.floatingActionButton.appendChild(addSectionButton)
    }

    createSectionHtml(section) {
        // Create the main section container
        const sectionContainer = document.createElement('div');
        sectionContainer.className = 'section';

        // Create the section header
        const sectionHeader = document.createElement('div');
        sectionHeader.className = 'section-header';
        sectionHeader.classList.add('border-bottom');

        // Create the section title
        const sectionTitle = document.createElement('div');
        sectionTitle.className = 'section-title';
        sectionTitle.textContent = section.sectionTitle;

        // Create the section buttons container
        const sectionButtons = document.createElement('div');
        sectionButtons.className = 'section-buttons';

        // Create the remove section button
        const removeSectionButton = document.createElement('button');
        removeSectionButton.type = 'button';
        removeSectionButton.className = 'remove-section-btn';
        removeSectionButton.setAttribute('data-modal-target', '#modalDeleteSection');

        // Append the remove section button to the section buttons container
        sectionButtons.appendChild(removeSectionButton);

        // Append the section title and buttons to the section header
        sectionHeader.appendChild(sectionTitle);
        sectionHeader.appendChild(sectionButtons);

        // Create the section tasks container
        const sectionTasks = document.createElement('div');
        sectionTasks.className = 'section-tasks';

        const formTaskContainer = document.createElement('div');
        sectionTasks.className = 'form-task-container';

        // Create the add task container
        const addTaskContainer = document.createElement('div');
        addTaskContainer.className = 'add-task-container';

        // Create the task button container
        const taskButtonContainer = document.createElement('div');
        taskButtonContainer.className = 'task-btn';

        // Create the add task button
        const addTaskButton = document.createElement('button');
        addTaskButton.type = 'button';
        addTaskButton.className = 'add-task-btn';

        // Append the add task button to the task button container
        taskButtonContainer.appendChild(addTaskButton);

        // Create the task button title
        const taskButtonTitle = document.createElement('div');
        taskButtonTitle.className = 'task-button-title';
        taskButtonTitle.textContent = 'Add Task';

        // Append the task button and title to the add task container
        addTaskContainer.appendChild(taskButtonContainer);
        addTaskContainer.appendChild(taskButtonTitle);

        sectionContainer.appendChild(sectionHeader);
        sectionContainer.appendChild(sectionTasks);
        sectionContainer.appendChild(formTaskContainer);
        sectionContainer.appendChild(addTaskContainer);

        this.tasksListView.appendChild(sectionContainer)
    }
}

export class TasksHandler {
    constructor() {

    }

    createAddTaskFormHtml(currentSectionTasksContainer) {
        // Create main container div
        const addTaskFormContainer = document.createElement('div');
        addTaskFormContainer.classList.add('add-task-form-container');

        // Create task data div
        const taskDataDiv = document.createElement('div');
        taskDataDiv.classList.add('task-data');

        // Create task description input
        const taskDescriptionInput = document.createElement('input');
        taskDescriptionInput.type = 'text';
        taskDescriptionInput.id = 'taskDescriptionInput';
        taskDescriptionInput.classList.add('task-description-input');
        taskDescriptionInput.placeholder = 'Task description...';

        // Create date input
        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.id = 'dateInput';

        // Append task description input and date input to task data div
        taskDataDiv.appendChild(taskDescriptionInput);
        taskDataDiv.appendChild(dateInput);

        // Create add task button
        const addTaskFormButton = document.createElement('button');
        addTaskFormButton.id = 'addTaskFormButton';
        addTaskFormButton.classList.add('add-task-form-btn');
        addTaskFormButton.textContent = 'Add Task';

        // Create cancel button
        const cancelTaskFormButton = document.createElement('button');
        cancelTaskFormButton.id = 'cancelTaskFormButton';
        cancelTaskFormButton.classList.add('cancel-task-btn');
        cancelTaskFormButton.textContent = 'Cancel';

        // Create add task form buttons div
        const addTaskFormButtonsDiv = document.createElement('div');
        addTaskFormButtonsDiv.classList.add('add-task-form-buttons');

        // Append buttons to add task form buttons div
        addTaskFormButtonsDiv.appendChild(addTaskFormButton);
        addTaskFormButtonsDiv.appendChild(cancelTaskFormButton);

        // Append task data div and add task form buttons div to main container div
        addTaskFormContainer.appendChild(taskDataDiv);
        addTaskFormContainer.appendChild(addTaskFormButtonsDiv);

        currentSectionTasksContainer.appendChild(addTaskFormContainer)
    }
}

export function closeSidebarIfSmallScreen() {
    const sidebar = document.getElementById('sidebarMenu')
    const closeSidebarButon = document.querySelector('.sidebar-icon')
    sidebar.classList.contains('active-sidebar') ? closeSidebarButon.click() : {};
}
