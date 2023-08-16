import { allProjects } from './projects';
import importantIcon from './img/important.svg'
import { TasksHandler } from './dom'

const tasksHandler = new TasksHandler()
const tasksListView = document.getElementById('tasksListView')
const headerSection = document.getElementById('headerSection')
const floatingActionButton = document.getElementById('floatingActionButton')

export default function loadImportantTasks() {
    setImportantTab()
    allProjects.forEach(project => {
        project.sections.forEach(section => {
            section.tasks.forEach(task => {
                if(task.important === true){
                    tasksHandler.createTaskHtml(tasksListView, task)
                }
                else{
                    return
                }
            })
        })
    })
    
}

function setImportantTab(){
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')

    const svgImportant = new Image()
    svgImportant.src = importantIcon;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgImportant)

    currentTabName.textContent = 'Important'

    tasksListView.innerHTML = ''
    floatingActionButton.innerHTML = ''
    headerSection.className = ''
    headerSection.classList.add('header-important')
}