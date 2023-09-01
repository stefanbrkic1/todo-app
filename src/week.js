import {isThisWeek, startOfWeek, addDays, format}  from 'date-fns'
import weekIcon from './img/thisweek48x48.svg'
import { allProjects } from './projects'
import { TasksHandler } from './dom'
import noTasksIconImportant from './img/important-no-tasks.png'

const tasksHandler = new TasksHandler()
const tasksListView = document.getElementById('tasksListView')
const headerSection = document.getElementById('headerSection')
const floatingActionButton = document.getElementById('floatingActionButton')

export default function loadWeekTasks() {
    setWeekTab()
    allProjects.forEach(project => {
        project.sections.forEach(section => {
            section.tasks.forEach(task => {
                if(taskHasDateForThisWeek(task.date)){
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

function setWeekTab(){
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')
    const mainHeadingRight = document.getElementById('mainHeadingRight')

    const svgWeek = new Image()
    svgWeek.src = weekIcon;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgWeek)

    const currentDate = new Date()
    const thisWeekStart = startOfWeek(currentDate)
    const thisWeekEnd = addDays(thisWeekStart, 6);

    const formattedStartDate = format(thisWeekStart, 'MM/dd/yyyy');
    const formattedEndDate = format(thisWeekEnd, 'MM/dd/yyyy');

    currentTabName.textContent = 'This Week'
    mainHeadingRight.textContent = `${formattedStartDate} - ${formattedEndDate}`

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

        const noTasksImageImportant = new Image()
        noTasksImageImportant.src = noTasksIconImportant
        noTasksImageImportant.classList.add('no-tasks-img')

        const text = document.createElement('div')
        text.textContent = `You don't have any tasks for this week`
        text.classList.add('no-tasks-img-text')

        container.appendChild(noTasksImageImportant)
        container.appendChild(text)
        tasksListView.appendChild(container)
    }
}