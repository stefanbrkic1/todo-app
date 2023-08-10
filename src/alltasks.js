import allTasksIcon from './img/alltasks48x48.svg'
import { allProjects } from './projects'
import { TasksHandler, ProjectsHandler } from './dom'

const tasksHandler = new TasksHandler()
const projectsHandler = new ProjectsHandler()

const tasksListView = document.getElementById('tasksListView')
const headerSection = document.getElementById('headerSection')
const floatingActionButton = document.getElementById('floatingActionButton')

export default function loadAllTasks() {
    setAllTasksTab()
    allProjects.forEach((project, projectIndex) => {
        projectsHandler.createProjectHtmlAllTasks(tasksListView, project)
        project.sections.forEach(section => {
            section.tasks.forEach(task => {
                const tasksContainerAllTasks = document.querySelectorAll('.tasks-container-all-tasks')
                tasksHandler.createTaskHtml(tasksContainerAllTasks[projectIndex], task)
            })
        })
    })
}

function setAllTasksTab(){
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')
  
    const svgAllTasks = new Image()
    svgAllTasks.src = allTasksIcon;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgAllTasks)

    currentTabName.textContent = 'All Tasks'

    tasksListView.innerHTML = ''
    floatingActionButton.innerHTML = ''
    headerSection.className = ''
    headerSection.classList.add('header-all-tasks')
}