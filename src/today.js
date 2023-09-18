import { format, isToday } from 'date-fns'
import todayIcon from './img/today48x48.svg'
import { TasksHandler, ProjectsHandler, removeEmptyProjectsFromHTML, playNotificationSound } from './dom'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const tasksHandler = new TasksHandler()
const projectsHandler = new ProjectsHandler()

const tasksListView = document.getElementById('tasksListView')
const headerSection = document.getElementById('headerSection')
const floatingActionButton = document.getElementById('floatingActionButton')

let allTodayTasks = []

class TodayTask {
    constructor(projectIndexToday, sectionIndexToday, taskIndexToday) {
        this.projectIndexToday = projectIndexToday
        this.sectionIndexToday = sectionIndexToday
        this.taskIndexToday = taskIndexToday
    }
}

export default function loadTodayTasks() {
    setTodayTab();
    loadTasks()
}

function setTodayTab() {
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')
    const dateDisplayer = document.querySelector('.date-displayer')
    const listify = document.querySelector('.listify-container')

    const svgToday = new Image()
    svgToday.src = todayIcon;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgToday)

    const todayDate = new Date()
    const todayDateString = `Date: ${format(todayDate, 'MMMM/dd/yyyy')}`;

    currentTabName.textContent = 'Today'
    tasksHandler.createRightDateDisplay(mainHeadingRight, todayDateString)

    dateDisplayer.innerHTML = ''
    tasksHandler.createDateDisplay(dateDisplayer, todayDateString)

    listify.classList.add('display-none')

    tasksListView.innerHTML = ''
    tasksListView.classList.add('height-auto')
    tasksListView.classList.remove('no-lists-list-view')
    floatingActionButton.innerHTML = ''
    headerSection.className = ''
    headerSection.classList.add('header-today')
}

function loadTasks() {
    tasksListView.innerHTML = ''
    allTodayTasks = []
    let allProjectsLocal = JSON.parse(localStorage.getItem("allProjects"))
    allProjectsLocal.forEach((project, projectIndexToday) => {
        projectsHandler.createProjectHtmlForTabs(tasksListView, project);
        const tasksContainerAllTasks = document.querySelectorAll('.tasks-container-all-tasks');

        project.sections.forEach((section, sectionIndexToday) => {
            section.tasks.forEach((task, taskIndexToday) => {
                if (taskIsToday(task.date)) {
                    tasksHandler.createTaskHtml(tasksContainerAllTasks[projectIndexToday], task);

                    let newTodayTask = new TodayTask(projectIndexToday, sectionIndexToday, taskIndexToday)
                    allTodayTasks.push(newTodayTask)
                } else {
                    return;
                }
            });
        });
    });
    removeEmptyProjectsFromHTML()
    displayNoTasksImage()
    addTodayTaskCheckboxEvent()
}

function taskIsToday(taskDate) {
    const [day, month, year] = taskDate.split('/').map(Number);
    const currentTaskDate = new Date(year, month - 1, day);
    if (isToday(currentTaskDate) === true) {
        return true
    }
    else {
        return false
    }
}

function displayNoTasksImage() {
    if (tasksListView.innerHTML === '') {
        tasksListView.classList.remove('height-auto')
        tasksListView.classList.remove('home-height')
        const container = document.createElement('div')
        container.classList.add('no-tasks-img-container')

        const noTasksImageToday = document.createElement('div')
        noTasksImageToday.classList.add('no-tasks-img-today')

        const text = document.createElement('div')
        text.textContent = `You don't have any tasks for today!`
        text.classList.add('no-tasks-img-text-today')

        container.appendChild(noTasksImageToday)
        container.appendChild(text)
        tasksListView.appendChild(container)
    }
}

function addTodayTaskCheckboxEvent() {
    let todayCheckboxes = document.querySelectorAll('.checkbox')
    todayCheckboxes.forEach((checkbox, checkboxIndex) => {
        checkbox.addEventListener('click', () => {
            setTimeout(() => {
                checkTaskAsCompleted(checkboxIndex, allTodayTasks[checkboxIndex].projectIndexToday, allTodayTasks[checkboxIndex].sectionIndexToday, allTodayTasks[checkboxIndex].taskIndexToday)
                playNotificationSound()
            }, 10);
        })
    })
}

function checkTaskAsCompleted(checkboxIndex, projectIndexToday, sectionIndexToday, taskIndexToday) {
    let allProjectsLocal = JSON.parse(localStorage.getItem("allProjects"))
    allProjectsLocal[projectIndexToday].sections[sectionIndexToday].tasks.splice(taskIndexToday, 1)
    localStorage.setItem("allProjects", JSON.stringify(allProjectsLocal))
    allTodayTasks.splice(checkboxIndex, 1)
    setTimeout(() => {
        loadTasks()
        Toastify({
            text: "1 task completed",
            className: "custom-toast-red", // Apply the custom CSS class
            duration: 2300,
            gravity: "bottom", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
        }).showToast();
    }, 300);
}

