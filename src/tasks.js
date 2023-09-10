import { TasksHandler } from "./dom";
import { currentProject } from "./projects";
import { allProjects, currentProjectIndex } from "./projects";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const tasksHandler = new TasksHandler();
const toastNotification = document.getElementById('toastNotification')

class Task {
    constructor(description, date) {
        this.description = description;
        this.date = date;
        this.important = false;
    }
}

let currentSectionIndex = null

export function addTaskFormCreationEvent() {
    const addTaskButtons = document.querySelectorAll('.add-task-container')
    addTaskButtons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            let target = e.target
            currentSectionIndex = index
            let currentSectionHtmlElement = target.closest('.section')
            let currentSectionTasksContainer = currentSectionHtmlElement.querySelector('.form-task-container')
            tasksHandler.createAddTaskFormHtml(currentSectionTasksContainer)
            addCancelButtonEvent(currentSectionTasksContainer)
            let currentAddTaskButtonContainer = currentSectionHtmlElement.querySelector('.add-task-container')
            currentAddTaskButtonContainer.classList.add('display-none')
            removeAddTaskButtonsClick(addTaskButtons)
            addTaskSubmitEvent()
        })
    })
}

function addCancelButtonEvent(currentSectionTasksContainer) {
    const cancelTaskFormButton = document.getElementById('cancelTaskFormButton')
    cancelTaskFormButton.addEventListener('click', () => {
        let addTaskForm = currentSectionTasksContainer.querySelector('.add-task-form-container');
        if (addTaskForm) {
            addTaskForm.remove();
            addAddTaskButtons()
        }
    })
}

function removeAddTaskButtonsClick(addTaskButtons) {
    addTaskButtons.forEach(button => {
        button.classList.add('disabled-click')
    })
    let addTaskIcons = document.querySelectorAll('.add-task-btn')
    addTaskIcons.forEach(icon => {
        icon.classList.add('add-task-btn-disabled')
    })
}


function addAddTaskButtons() {
    const addTaskButtons = document.querySelectorAll('.add-task-container')
    addTaskButtons.forEach(button => {
        button.classList.remove('disabled-click')
        button.classList.remove('display-none')
    })

    let addTaskIcons = document.querySelectorAll('.add-task-btn')
    addTaskIcons.forEach(icon => {
        icon.classList.remove('add-task-btn-disabled')
    })
}

function addTaskSubmitEvent() {
    const addTaskFormButton = document.getElementById('addTaskFormButton')
    const taskDescriptionInput = document.getElementById('taskDescriptionInput')
    const dateInput = document.getElementById('dateInput')
    const cancelTaskFormButton = document.getElementById('cancelTaskFormButton')
    addTaskFormButton.addEventListener('click', () => {
        if (taskDescriptionInput.value === '') {
            taskDescriptionInput.classList.add('invalid-input')
            return
        }
        else if (dateInput.value === '') {
            dateInput.classList.add('invalid-input')
            return
        }
        else {
            const dateArr = dateInput.value.split('-')
            const year = dateArr[0]
            const month = dateArr[1]
            const day = dateArr[2]
            const formattedDate = `${month}/${day}/${year}`
            const newTask = new Task(taskDescriptionInput.value, formattedDate)
            let currentSection = currentProject.sections[currentSectionIndex]
            currentSection.tasks.push(newTask)
            loadAllSectionsTasks(currentProject)
            cancelTaskFormButton.click()
        }
    })

    taskDescriptionInput.addEventListener('focus', () => {
        taskDescriptionInput.classList.remove('invalid-input')
        dateInput.classList.remove('invalid-input')
    })

    dateInput.addEventListener('focus', () => {
        dateInput.classList.remove('invalid-input')
    })
}

export function loadAllSectionsTasks(currentProject) {
    const allSectionTasksContainers = document.querySelectorAll('.section-tasks')
    allSectionTasksContainers.forEach(container => {
        container.innerHTML = ''
    })
    currentProject.sections.forEach((section, index) => {
        section.tasks.forEach(task => {
            tasksHandler.createTaskHtml(allSectionTasksContainers[index], task)
        })
    })
    addImportantButtonEvent()
    addTaskCheckboxEvent()
}

let clickedSectionIndex = null

export function getCurrentSectionIndex() {
    const allSectionsHtml = document.querySelectorAll('.section')
    allSectionsHtml.forEach((section, index) => {
        section.addEventListener('click', () => {
            clickedSectionIndex = index
        })
    })
}

export function addImportantButtonEvent() {
    const allSectionsHtml = document.querySelectorAll('.section')
    allSectionsHtml.forEach(section => {
        let sectionImportantButtons = section.querySelectorAll('.important-btn')
        sectionImportantButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                setTimeout(() => {
                    if (!button.classList.contains('important-btn-active')) {
                        setTaskAsImportant(button, index)
                    }
                    else if (button.classList.contains('important-btn-active')) {
                        setTaskAsUnimportant(button, index)
                    }
                })
            }, 500);
        })
    })
}

function setTaskAsImportant(clickedButton, index) {
    clickedButton.classList.add('important-btn-active')
    currentProject.sections[clickedSectionIndex].tasks[index].important = true
}

function setTaskAsUnimportant(clickedButton, index) {
    clickedButton.classList.remove('important-btn-active')
    currentProject.sections[clickedSectionIndex].tasks[index].important = false
}

function addTaskCheckboxEvent(){
    const allSectionsHtml = document.querySelectorAll('.section')
    allSectionsHtml.forEach(section => {
        let sectionCheckboxes = section.querySelectorAll('.checkbox')
        sectionCheckboxes.forEach((checkbox, checkboxIndex) => {
            checkbox.addEventListener('click', () => {
                setTimeout(() => {
                   checkTaskAsCompleted(checkboxIndex)
                }, 10)
            });
        })
    })
}

function checkTaskAsCompleted(checkboxIndex){
    allProjects[currentProjectIndex].sections[clickedSectionIndex].tasks.splice(checkboxIndex, 1)
    setTimeout(() => {
        loadAllSectionsTasks(currentProject)
        Toastify({
            text: `1 task completed | ${currentProject.name}`,
            className: "custom-toast", // Apply the custom CSS class
            duration: 3000,
            gravity: "bottom", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
          }).showToast();
    }, 300);
}
