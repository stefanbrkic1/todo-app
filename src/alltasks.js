import allTasksIcon from './img/home.svg'
import { allProjects } from './projects'
import { TasksHandler, ProjectsHandler, playNotificationSound, createHomeWidgets } from './dom'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const tasksHandler = new TasksHandler()
const projectsHandler = new ProjectsHandler()

const tasksListView = document.getElementById('tasksListView')
const headerSection = document.getElementById('headerSection')
const floatingActionButton = document.getElementById('floatingActionButton')
const dateDisplayer = document.querySelector('.date-displayer')

let allTasks = []

class AllTask {
    constructor(projectIndexAll, sectionIndexAll, taskIndexAll){
        this.projectIndexAll = projectIndexAll
        this.sectionIndexAll = sectionIndexAll
        this.taskIndexAll = taskIndexAll
    }
}

export default function loadAllTasks() {
    setAllTasksTab();
    loadTasks()
}

function setAllTasksTab() {
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')
    const listify = document.querySelector('.listify-container')

    const svgAllTasks = new Image()
    svgAllTasks.src = allTasksIcon;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgAllTasks)

    currentTabName.textContent = 'Home'

    listify.classList.remove('display-none')

    tasksListView.innerHTML = ''
    tasksListView.classList.add('height-auto')
    dateDisplayer.innerHTML = ''
    createHomeWidgets(dateDisplayer)
    floatingActionButton.innerHTML = ''
    headerSection.className = ''
    headerSection.classList.add('header-all-tasks')
}

function loadTasks(){
    tasksListView.innerHTML = ''
    allTasks = []
    let allProjectsLocal = JSON.parse(localStorage.getItem("allProjects"))
    allProjectsLocal.forEach((project, projectIndexAll) => {
        projectsHandler.createProjectHtmlForTabs(tasksListView, project);
        const tasksContainerAllTasks = document.querySelectorAll('.tasks-container-all-tasks');

        let hasTasks = false; // Track if there are tasks in the project

        project.sections.forEach((section, sectionIndexAll) => {
            if (section.tasks.length === 0) {

            } else {
                hasTasks = true; // Mark that there are tasks in this project
                section.tasks.forEach((task, taskIndexAll) => {
                    tasksHandler.createTaskHtml(tasksContainerAllTasks[projectIndexAll], task);

                    let newAllTask = new AllTask(projectIndexAll, sectionIndexAll, taskIndexAll)
                    allTasks.push(newAllTask)
                });
            }
        });

        if (!hasTasks) {
            tasksHandler.displayNoTasksMessage(tasksContainerAllTasks[projectIndexAll]);
        }
    });
    displayTasksLength()
    addAllTasksCheckboxEvent()
    displayNoLists()
}

function displayTasksLength() {
    let tasksString = 'tasks'
    if (allTasks[allTasks.length - 1] === '1') {
        tasksString = 'task'
    }
    const lengthString = `TasksCount: ${allTasks.length} ${tasksString}.`
    tasksHandler.createRightCountDisplay(lengthString)
}

function addAllTasksCheckboxEvent(){
    let allCheckboxes = document.querySelectorAll('.checkbox')
    allCheckboxes.forEach((checkbox, checkboxIndex) => {
        checkbox.addEventListener('click', () => {
            setTimeout(() => {
                checkTaskAsCompleted(checkboxIndex, allTasks[checkboxIndex].projectIndexAll, allTasks[checkboxIndex].sectionIndexAll, allTasks[checkboxIndex].taskIndexAll)
                playNotificationSound()
            }, 10);
        })
    })    
}

function checkTaskAsCompleted(checkboxIndex, projectIndexAll, sectionIndexAll, taskIndexAll){
    let allProjectsLocal = JSON.parse(localStorage.getItem("allProjects"))
    allProjectsLocal[projectIndexAll].sections[sectionIndexAll].tasks.splice(taskIndexAll, 1)
    localStorage.setItem("allProjects", JSON.stringify(allProjectsLocal))
    allTasks.splice(checkboxIndex, 1)
    setTimeout(() => {
        loadTasks()
        Toastify({
            text: "1 task completed",
            className: "custom-toast", // Apply the custom CSS class
            duration: 2300,
            gravity: "bottom", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
          }).showToast();
    }, 300);
}

function displayNoLists() {
    if (tasksListView.innerHTML === '') {
        tasksListView.classList.add('no-lists-list-view')
        const container = document.createElement('div')
        container.classList.add('no-lists-container')

        const text = document.createElement('div')
        text.textContent = `Ready to get organized? Start by creating your first list and begin managing your tasks.`
        text.classList.add('no-lists-text')

        const button = document.createElement('button')
        button.textContent = `+ Add list`
        button.classList.add('no-lists-btn')
        button.id = 'noListsBtn'

        container.appendChild(text)
        container.appendChild(button)
        tasksListView.appendChild(container)

        const noListsBtn = document.getElementById('noListsBtn')
        const addListBtn = document.querySelector('.sidebar-add-project')
        noListsBtn.addEventListener('click', () => {
            addListBtn.click()
        })
    }
}