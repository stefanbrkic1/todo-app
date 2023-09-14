import { allProjects } from './projects';
import importantIcon from './img/important.svg'
import { TasksHandler, ProjectsHandler, removeEmptyProjectsFromHTML, playNotificationSound } from './dom'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const tasksHandler = new TasksHandler()
const projectsHandler = new ProjectsHandler()

const tasksListView = document.getElementById('tasksListView')
const headerSection = document.getElementById('headerSection')
const floatingActionButton = document.getElementById('floatingActionButton')
const dateDisplayer = document.querySelector('.date-displayer')

let allImportantTasks = []

class ImportantTask {
    constructor(projectIndexImportant, sectionIndexImportant, taskIndexImportant){
        this.projectIndexImportant = projectIndexImportant
        this.sectionIndexImportant = sectionIndexImportant
        this.taskIndexImportant = taskIndexImportant
    }
}

export default function loadImportantTasks() {
    setImportantTab()
    loadTasks()
}

function setImportantTab() {
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')

    const svgImportant = new Image()
    svgImportant.src = importantIcon;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgImportant)

    currentTabName.textContent = 'Important'

    tasksListView.innerHTML = ''
    tasksListView.classList.add('height-auto')
    tasksListView.classList.remove('no-lists-list-view')
    dateDisplayer.innerHTML = ''
    floatingActionButton.innerHTML = ''
    headerSection.className = ''
    headerSection.classList.add('header-important')

}

function loadTasks(){
    tasksListView.innerHTML = ''
    allImportantTasks = []
    allProjects.forEach((project, projectIndexImportant) => {
        projectsHandler.createProjectHtmlForTabs(tasksListView, project);
        const tasksContainerAllTasks = document.querySelectorAll('.tasks-container-all-tasks');

        project.sections.forEach((section, sectionIndexImportant) => {
            section.tasks.forEach((task, taskIndexImportant) => {
                if (task.important === true) {
                    tasksHandler.createTaskHtml(tasksContainerAllTasks[projectIndexImportant], task);
                    
                    let newImportantTask = new ImportantTask(projectIndexImportant, sectionIndexImportant, taskIndexImportant)
                    allImportantTasks.push(newImportantTask)
                } else {
                    return;
                }
            });
        });
    });
    removeEmptyProjectsFromHTML()
    displayImportantTasksLength()
    displayNoTasksImage()
    addImportantTaskCheckboxEvent()
}

function displayNoTasksImage() {
    if (tasksListView.innerHTML === '') {
        tasksListView.classList.remove('height-auto')
        tasksListView.classList.remove('home-height')
        const container = document.createElement('div')
        container.classList.add('no-tasks-img-container')

        const noTasksImageImportant = document.createElement('div')
        noTasksImageImportant.classList.add('no-tasks-img')

        const text = document.createElement('div')
        text.textContent = `You don't have any important tasks!`
        text.classList.add('no-tasks-img-text')

        container.appendChild(noTasksImageImportant)
        container.appendChild(text)
        tasksListView.appendChild(container)
    }
}

function displayImportantTasksLength() {
    let tasksString = 'tasks'
    if (allImportantTasks[allImportantTasks.length - 1] === '1') {
        tasksString = 'task'
    }
    const lengthString = `TasksCount: ${allImportantTasks.length} ${tasksString}.`
    tasksHandler.createRightDateDisplay(mainHeadingRight, lengthString)

    dateDisplayer.innerHTML = ''
    tasksHandler.createDateDisplay(dateDisplayer, lengthString)
}

function addImportantTaskCheckboxEvent(){
    let importantCheckboxes = document.querySelectorAll('.checkbox')
    importantCheckboxes.forEach((checkbox, checkboxIndex) => {
        checkbox.addEventListener('click', () => {
            setTimeout(() => {
                checkTaskAsCompleted(checkboxIndex, allImportantTasks[checkboxIndex].projectIndexImportant, allImportantTasks[checkboxIndex].sectionIndexImportant, allImportantTasks[checkboxIndex].taskIndexImportant)
                playNotificationSound()
            }, 10);
        })
    })    
}

function checkTaskAsCompleted(checkboxIndex, projectIndexImportant, sectionIndexImportant, taskIndexImportant){
    allProjects[projectIndexImportant].sections[sectionIndexImportant].tasks.splice(taskIndexImportant, 1)
    allImportantTasks.splice(checkboxIndex, 1)
    setTimeout(() => {
        loadTasks()
        Toastify({
            text: "1 task completed",
            className: "custom-toast-yellow", // Apply the custom CSS class
            duration: 3000,
            gravity: "bottom", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
          }).showToast();
    }, 300);
}


