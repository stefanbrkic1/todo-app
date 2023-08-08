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
            removeAddTaskButtons(addTaskButtons)
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

function removeAddTaskButtons(addTaskButtons){
    addTaskButtons.forEach(button => {
        button.classList.add('display-none')
    })
}


function addAddTaskButtons(){
    const addTaskButtons = document.querySelectorAll('.add-task-container')
    addTaskButtons.forEach(button => {
        button.classList.remove('display-none')
    })
}

