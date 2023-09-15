import { startOfWeek, endOfWeek, addDays, format } from 'date-fns'
import weekIcon from './img/thisweek48x48.svg'
import { allProjects } from './projects'
import { TasksHandler, ProjectsHandler, removeEmptyProjectsFromHTML, playNotificationSound } from './dom'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const tasksHandler = new TasksHandler()
const projectsHandler = new ProjectsHandler()

const tasksListView = document.getElementById('tasksListView')
const headerSection = document.getElementById('headerSection')
const floatingActionButton = document.getElementById('floatingActionButton')

let fullDateString = null

let allWeekTasks = []

class WeekTask {
    constructor(projectIndexWeek, sectionIndexWeek, taskIndexWeek){
        this.projectIndexWeek = projectIndexWeek
        this.sectionIndexWeek = sectionIndexWeek
        this.taskIndexWeek = taskIndexWeek
    }
}

export default function loadWeekTasks() {
    setWeekTab()
    loadTasks()
}

function setWeekTab() {
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')
    const mainHeadingRight = document.getElementById('mainHeadingRight')
    const dateDisplayer = document.querySelector('.date-displayer')

    const svgWeek = new Image()
    svgWeek.src = weekIcon;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgWeek)

    const currentDate = new Date()
    const thisWeekStart = startOfWeek(currentDate, { weekStartsOn: 1 })
    const thisWeekEnd = addDays(thisWeekStart, 6);

    const formattedStartDate = format(thisWeekStart, 'dd/MM/yyyy');
    const formattedEndDate = format(thisWeekEnd, 'dd/MM/yyyy');

    fullDateString = `Week: ${formattedStartDate} - ${formattedEndDate}`

    currentTabName.textContent = 'This Week'
    tasksHandler.createRightDateDisplay(mainHeadingRight, fullDateString)

    dateDisplayer.innerHTML = ''
    tasksHandler.createDateDisplay(dateDisplayer, fullDateString)

    tasksListView.innerHTML = ''
    tasksListView.classList.add('height-auto')
    tasksListView.classList.remove('no-lists-list-view')
    floatingActionButton.innerHTML = ''
    headerSection.className = ''
    headerSection.classList.add('header-week')
}

function loadTasks(){
    tasksListView.innerHTML = ''
    allWeekTasks = []
    allProjects.forEach((project, projectIndexWeek) => {
        projectsHandler.createProjectHtmlForTabs(tasksListView, project);
        const tasksContainerAllTasks = document.querySelectorAll('.tasks-container-all-tasks');

        project.sections.forEach((section, sectionIndexWeek) => {
            section.tasks.forEach((task, taskIndexWeek) => {
                if (taskHasDateForThisWeek(task.date)) {
                    tasksHandler.createTaskHtml(tasksContainerAllTasks[projectIndexWeek], task);
                    
                    let newWeekTask = new WeekTask(projectIndexWeek, sectionIndexWeek, taskIndexWeek)
                    allWeekTasks.push(newWeekTask)
                } else {
                    return;
                }
            });
        });
    });
    removeEmptyProjectsFromHTML()
    displayNoTasksImage()
    addWeekTaskCheckboxEvent()
}

function taskHasDateForThisWeek(taskDate) {
    const [day, month, year] = taskDate.split('/').map(Number);
    const currentTaskDate = new Date(year, month - 1, day);

    // Get the start and end of the current week
    const startOfCurrentWeek = startOfWeek(new Date(), {weekStartsOn: 1});
    const endOfCurrentWeek = endOfWeek(new Date(), {weekStartsOn: 1});
    
    if (currentTaskDate >= startOfCurrentWeek && currentTaskDate <= endOfCurrentWeek) {
        return true;
    } else {
        return false;
    }
}

function displayNoTasksImage() {
    if (tasksListView.innerHTML === '') {
        tasksListView.classList.remove('height-auto')
        tasksListView.classList.remove('home-height')
        const container = document.createElement('div')
        container.classList.add('no-tasks-img-container')

        const noTasksImageThisWeek = document.createElement('div')
        noTasksImageThisWeek.classList.add('no-tasks-img-week')

        const text = document.createElement('div')
        text.textContent = `You don't have any tasks for this week!`
        text.classList.add('no-tasks-img-text-week')

        container.appendChild(noTasksImageThisWeek)
        container.appendChild(text)
        tasksListView.appendChild(container)
    }
}

function addWeekTaskCheckboxEvent(){
    let weekCheckboxes = document.querySelectorAll('.checkbox')
    weekCheckboxes.forEach((checkbox, checkboxIndex) => {
        checkbox.addEventListener('click', () => {
            setTimeout(() => {
                checkTaskAsCompleted(checkboxIndex, allWeekTasks[checkboxIndex].projectIndexWeek, allWeekTasks[checkboxIndex].sectionIndexWeek, allWeekTasks[checkboxIndex].taskIndexWeek)
                playNotificationSound()
            }, 10);
        })
    })    
}

function checkTaskAsCompleted(checkboxIndex, projectIndexWeek, sectionIndexWeek, taskIndexWeek){
    allProjects[projectIndexWeek].sections[sectionIndexWeek].tasks.splice(taskIndexWeek, 1)
    allWeekTasks.splice(checkboxIndex, 1)
    setTimeout(() => {
        loadTasks()
        Toastify({
            text: "1 task completed",
            className: "custom-toast-blue", // Apply the custom CSS class
            duration: 2300,
            gravity: "bottom", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
          }).showToast();
    }, 300);
}
