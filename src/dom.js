import projectIcon from './img/project.svg'
import flatpickr from "flatpickr"
import 'flatpickr/dist/flatpickr.min.css'; // Import the CSS file
require("flatpickr/dist/themes/material_green.css");

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
            this.projectRenameInput.blur()
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

    createProjectHtmlForTabs(tasksListView, project) {
        // Create the main container div
        const projectTasksContainer = document.createElement('div');
        projectTasksContainer.classList.add('project-tasks-container-all-tasks');

        // Create the project header div
        const projectHeaderDiv = document.createElement('div');
        projectHeaderDiv.classList.add('project-all-tasks-header', 'flex', 'border-bottom');

        // Create the project name div
        const projectNameDiv = document.createElement('div');
        projectNameDiv.classList.add('project-name-all-tasks');
        projectNameDiv.textContent = `Project (${project.name})`;

        projectHeaderDiv.appendChild(projectNameDiv);

        // Create the tasks container div
        const tasksContainerDiv = document.createElement('div');
        tasksContainerDiv.classList.add('tasks-container-all-tasks');

        // Append project header and tasks container to the main container div
        projectTasksContainer.appendChild(projectHeaderDiv);
        projectTasksContainer.appendChild(tasksContainerDiv);

        tasksListView.appendChild(projectTasksContainer)
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
        formTaskContainer.className = 'form-task-container';

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
        dateInput.type = 'text';
        dateInput.placeholder = 'Select Date...'
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

        flatpickr(dateInput, {
            dateFormat: "d/m/Y",
              minDate: "today",
              locale: {
                firstDayOfWeek: 1
            },
        })
    }

    createTaskHtml(currentSectionTasksHtml, task) {
        // Create the main container div
        const taskContainerDiv = document.createElement('div');
        taskContainerDiv.classList.add('main-task-container');

        // Create the task container div
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        // Create the bottom-task div
        const bottomTaskSideDiv = document.createElement('div');
        bottomTaskSideDiv.classList.add('bottom-task-side');
        bottomTaskSideDiv.textContent = task.date

        // Create the left-task-side div
        const leftTaskSideDiv = document.createElement('div');
        leftTaskSideDiv.classList.add('left-task-side');

        // Create the checkbox input
        const checkboxInput = document.createElement('input');
        checkboxInput.type = 'checkbox';
        checkboxInput.classList.add('checkbox');

        // Create the task title div
        const taskTitleDiv = document.createElement('div');
        taskTitleDiv.classList.add('task-title');
        taskTitleDiv.textContent = task.description

        // Append checkbox and task title to the left-task-side div
        leftTaskSideDiv.appendChild(checkboxInput);
        leftTaskSideDiv.appendChild(taskTitleDiv);

        // Create the right-task-side div
        const rightTaskSideDiv = document.createElement('div');
        rightTaskSideDiv.classList.add('right-task-side');

        // Create the date-task-container div
        const dateTaskContainerDiv = document.createElement('div');
        dateTaskContainerDiv.classList.add('date-task-container');
        dateTaskContainerDiv.textContent = task.date

        // Create the important button
        const importantButton = document.createElement('button');
        importantButton.type = 'button';
        importantButton.classList.add('important-btn');

        //Create active task if has true for important state
        if (task.important === true) {
            importantButton.classList.add('important-btn-active')
        }
        else {

        }
        // Append date-task-container and important button to the right-task-side div
        rightTaskSideDiv.appendChild(dateTaskContainerDiv);
        rightTaskSideDiv.appendChild(importantButton);

        // Append left-task-side and right-task-side to the main container div
        taskDiv.appendChild(leftTaskSideDiv);
        taskDiv.appendChild(rightTaskSideDiv);

        taskContainerDiv.appendChild(taskDiv)
        taskContainerDiv.appendChild(bottomTaskSideDiv)

        currentSectionTasksHtml.appendChild(taskContainerDiv)
    }

    displayNoTasksMessage(currentProjectWithNoTasksHtml) {
        const div = document.createElement('div')
        div.classList.add('no-tasks-message')
        div.textContent = `No tasks here`

        currentProjectWithNoTasksHtml.appendChild(div)
    }

    createDateDisplay(dateDisplayer, fullDateString) {
        const div = document.createElement('div')
        div.classList.add('this-week-date')
        div.textContent = fullDateString
        dateDisplayer.appendChild(div)
    }

    createRightDateDisplay(mainHeadingRight, fullDateString) {
        mainHeadingRight.innerHTML = ''
        const div = document.createElement('div')
        div.classList.add('date-heading-right')
        div.textContent = fullDateString
        mainHeadingRight.appendChild(div)
    }
}

export function closeSidebarIfSmallScreen() {
    const sidebar = document.getElementById('sidebarMenu')
    const closeSidebarButon = document.querySelector('.sidebar-icon')
    sidebar.classList.contains('active-sidebar') ? closeSidebarButon.click() : {};
}

export function removeEmptyProjectsFromHTML(){
    const tasksContainerAllTasks = document.querySelectorAll('.tasks-container-all-tasks');
    tasksContainerAllTasks.forEach(container => {
        if(container.innerHTML === ''){
            let parentContainer = container;
            while (parentContainer && !parentContainer.classList.contains('project-tasks-container-all-tasks')) {
                parentContainer = parentContainer.parentNode;
            }
            parentContainer.remove()
        }
    })
}