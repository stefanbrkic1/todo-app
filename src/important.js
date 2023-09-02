import { allProjects } from './projects';
import importantIcon from './img/important.svg'
import { TasksHandler } from './dom'
import noTasksIconImportant from './img/important-no-tasks.png'

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
    displayNoTasksImage()
}

function setImportantTab(){
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')
    const dateDisplayer = document.querySelector('.date-displayer')

    const svgImportant = new Image()
    svgImportant.src = importantIcon;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgImportant)

    currentTabName.textContent = 'Important'

    tasksListView.innerHTML = ''
    dateDisplayer.innerHTML = ''
    floatingActionButton.innerHTML = ''
    headerSection.className = ''
    headerSection.classList.add('header-important')

}

function displayNoTasksImage(){
    if(tasksListView.innerHTML === ''){
        const container = document.createElement('div')
        container.classList.add('no-tasks-img-container')

        const noTasksImageImportant = new Image()
        noTasksImageImportant.src = noTasksIconImportant
        noTasksImageImportant.classList.add('no-tasks-img')

        const text = document.createElement('div')
        text.textContent = `You don't have any important tasks`
        text.classList.add('no-tasks-img-text')

        container.appendChild(noTasksImageImportant)
        container.appendChild(text)
        tasksListView.appendChild(container)
    }
}