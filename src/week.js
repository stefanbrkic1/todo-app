import {isThisWeek, startOfWeek, addDays, format}  from 'date-fns'
import weekIcon from './img/thisweek48x48.svg'
import { allProjects } from './projects'
import { TasksHandler, ProjectsHandler} from './dom'
import noTasksIconThisWeek from './img/this-week-no-tasks.png'

const tasksHandler = new TasksHandler()
const projectsHandler = new ProjectsHandler()

const tasksListView = document.getElementById('tasksListView')
const headerSection = document.getElementById('headerSection')
const floatingActionButton = document.getElementById('floatingActionButton')

let fullDateString = null

export default function loadWeekTasks() {
    setWeekTab()
    allProjects.forEach((project, projectIndex) => {
        let projectHtmlCreated = false; // Track if project HTML has been created
    
        project.sections.forEach(section => {
          if (section.tasks.length === 0) {
            // Handle empty section
          } else {
            if (!projectHtmlCreated) {
              // Create project HTML only once for each project if it has tasks
              projectsHandler.createProjectHtmlForTabs(tasksListView, project);
              projectHtmlCreated = true; // Set the flag to true to prevent further creation
            }
    
            section.tasks.forEach(task => {
              if (taskHasDateForThisWeek(task.date)) {
                const tasksContainerAllTasks = document.querySelectorAll('.tasks-container-all-tasks');
                tasksHandler.createTaskHtml(tasksContainerAllTasks[projectIndex], task);
              } else {
                return;
              }
            });
          }
        });
      });
    displayNoTasksImage()
}

function setWeekTab(){
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')
    const mainHeadingRight = document.getElementById('mainHeadingRight')
    const dateDisplayer = document.querySelector('.date-displayer')

    const svgWeek = new Image()
    svgWeek.src = weekIcon;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgWeek)

    const currentDate = new Date()
    const thisWeekStart = startOfWeek(currentDate)
    const thisWeekEnd = addDays(thisWeekStart, 6);

    const formattedStartDate = format(thisWeekStart, 'MM/dd/yyyy');
    const formattedEndDate = format(thisWeekEnd, 'MM/dd/yyyy');

    fullDateString = `Week: ${formattedStartDate} - ${formattedEndDate}`

    currentTabName.textContent = 'This Week'
    tasksHandler.createRightDateDisplay(mainHeadingRight, fullDateString)
    
    dateDisplayer.innerHTML = ''
    tasksHandler.createDateDisplay(dateDisplayer, fullDateString)

    tasksListView.innerHTML = ''
    floatingActionButton.innerHTML = ''
    headerSection.className = ''
    headerSection.classList.add('header-week')
}

function taskHasDateForThisWeek(taskDate){
    let currentTaskDate = new Date(taskDate)
    if(isThisWeek(currentTaskDate) === true){
        return true
    }
    else{
        return false
    }
}

function displayNoTasksImage(){
    if(tasksListView.innerHTML === ''){
        const container = document.createElement('div')
        container.classList.add('no-tasks-img-container')

        const noTasksImageThisWeek = new Image()
        noTasksImageThisWeek.src = noTasksIconThisWeek
        noTasksImageThisWeek.classList.add('no-tasks-img-week')

        const text = document.createElement('div')
        text.textContent = `You don't have any tasks for this week!`
        text.classList.add('no-tasks-img-text')

        container.appendChild(noTasksImageThisWeek)
        container.appendChild(text)
        tasksListView.appendChild(container)
    }
}
