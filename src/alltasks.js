import allTasksIcon from './img/alltasks48x48.svg'
import { allProjects } from './projects'
import { TasksHandler, ProjectsHandler } from './dom'
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

    const svgAllTasks = new Image()
    svgAllTasks.src = allTasksIcon;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgAllTasks)

    currentTabName.textContent = 'All Tasks'

    tasksListView.innerHTML = ''
    tasksListView.classList.add('height-auto')
    dateDisplayer.innerHTML = ''
    floatingActionButton.innerHTML = ''
    headerSection.className = ''
    headerSection.classList.add('header-all-tasks')
}

function loadTasks(){
    tasksListView.innerHTML = ''
    allTasks = []
    allProjects.forEach((project, projectIndexAll) => {
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
}

function displayTasksLength() {
    let tasksString = 'tasks'
    if (allTasks[allTasks.length - 1] === '1') {
        tasksString = 'task'
    }
    const lengthString = `TasksCount: ${allTasks.length} ${tasksString}.`
    tasksHandler.createRightDateDisplay(mainHeadingRight, lengthString)

    dateDisplayer.innerHTML = ''
    tasksHandler.createDateDisplay(dateDisplayer, lengthString)
}

function addAllTasksCheckboxEvent(){
    let allCheckboxes = document.querySelectorAll('.checkbox')
    allCheckboxes.forEach((checkbox, checkboxIndex) => {
        checkbox.addEventListener('click', () => {
            setTimeout(() => {
                checkTaskAsCompleted(checkboxIndex, allTasks[checkboxIndex].projectIndexAll, allTasks[checkboxIndex].sectionIndexAll, allTasks[checkboxIndex].taskIndexAll)
            }, 10);
        })
    })    
}

function checkTaskAsCompleted(checkboxIndex, projectIndexAll, sectionIndexAll, taskIndexAll){
    allProjects[projectIndexAll].sections[sectionIndexAll].tasks.splice(taskIndexAll, 1)
    allTasks.splice(checkboxIndex, 1)
    setTimeout(() => {
        loadTasks()
        Toastify({
            text: "1 task completed",
            className: "custom-toast", // Apply the custom CSS class
            duration: 3000,
            gravity: "bottom", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
          }).showToast();
    }, 300);
}