import { add } from "date-fns";
import { ModalHandler, TasksHandler } from "./dom";


const tasksHandler = new TasksHandler(); 
const modalHandler = new ModalHandler(); 

class Task {
    constructor(description) {
        this.description = description;
    }
}

let currentSectionIndex = null

export function addTaskFormEvent(){
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
        })
    })
}

export function loadTasksHtml(){
   
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

