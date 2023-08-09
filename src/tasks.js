import { TasksHandler } from "./dom";
import { currentProject } from "./projects";


const tasksHandler = new TasksHandler(); 

class Task {
    constructor(description, date) {
        this.description = description;
        this.date = date;
    }
}

let currentSectionIndex = null
let currentSectionTasksHtml = null

export function addTaskFormCreationEvent(){
    const addTaskButtons = document.querySelectorAll('.add-task-container')
    addTaskButtons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            let target = e.target
            currentSectionIndex = index
            let currentSectionHtmlElement = target.closest('.section')
            let currentSectionTasksContainer = currentSectionHtmlElement.querySelector('.form-task-container')
            currentSectionTasksHtml = currentSectionHtmlElement.querySelector('.section-tasks')
            tasksHandler.createAddTaskFormHtml(currentSectionTasksContainer)
            addCancelButtonEvent(currentSectionTasksContainer)
            let currentAddTaskButtonContainer = currentSectionHtmlElement.querySelector('.add-task-container')
            currentAddTaskButtonContainer.classList.add('display-none')
            removeAddTaskButtonsClick(addTaskButtons)
            addTaskSubmitEvent()
        })
    })
}

function addCancelButtonEvent(currentSectionTasksContainer){
    const cancelTaskFormButton = document.getElementById('cancelTaskFormButton')
    cancelTaskFormButton.addEventListener('click', () => {
        let addTaskForm = currentSectionTasksContainer.querySelector('.add-task-form-container');
        if (addTaskForm) {
            addTaskForm.remove();
            addAddTaskButtons()
        }
    })
}

function removeAddTaskButtonsClick(addTaskButtons){
    addTaskButtons.forEach(button => {
        button.classList.add('disabled-click')
    })
    let addTaskIcons = document.querySelectorAll('.add-task-btn')
    addTaskIcons.forEach(icon => {
        icon.classList.add('add-task-btn-disabled')
    })
}


function addAddTaskButtons(){
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

function addTaskSubmitEvent(){
    const addTaskFormButton = document.getElementById('addTaskFormButton')
    const taskDescriptionInput = document.getElementById('taskDescriptionInput')
    const dateInput = document.getElementById('dateInput')
    const cancelTaskFormButton = document.getElementById('cancelTaskFormButton')
    addTaskFormButton.addEventListener('click', () => {
        if(taskDescriptionInput.value === ''){
            taskDescriptionInput.classList.add('invalid-input')
            return
        }
        else if(dateInput.value === ''){
            dateInput.classList.add('invalid-input')
            return
        }
        else{
            let newTask = new Task(taskDescriptionInput.value, dateInput.value)
            let currentSection = currentProject.sections[currentSectionIndex]
            currentSection.tasks.push(newTask)
            loadCurrentSectionTasks(currentSection, currentSectionTasksHtml)
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

function loadCurrentSectionTasks(currentSection, currentSectionTasksHtml){
    currentSectionTasksHtml.innerHTML = ''
    let currentSectionTasks = currentSection.tasks
    currentSectionTasks.forEach(task => {
        tasksHandler.createTaskHtml(currentSectionTasksHtml, task)
    })
}

export function loadAllSectionsTasks(currentProject){
    const allSectionTasksContainers = document.querySelectorAll('.section-tasks')
    currentProject.sections.forEach((section, index) => {
        section.tasks.forEach(task => {
            tasksHandler.createTaskHtml(allSectionTasksContainers[index], task)
        })
    })
}



