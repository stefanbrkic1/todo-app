import {format, isToday}  from 'date-fns'
import todayIcon from './img/today48x48.svg'
import noTasksIconToday from './img/today-no-tasks.png'
import { TasksHandler } from './dom'
import { allProjects } from './projects'


const tasksHandler = new TasksHandler()
const tasksListView = document.getElementById('tasksListView')
const headerSection = document.getElementById('headerSection')
const floatingActionButton = document.getElementById('floatingActionButton')

export default function loadTodayTasks() {
  setTodayTab()
  allProjects.forEach(project => {
    project.sections.forEach(section => {
        section.tasks.forEach(task => {
            if(taskIsToday(task.date)){
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

function setTodayTab(){
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')
    const dateDisplayer = document.querySelector('.date-displayer')

    const svgToday = new Image()
    svgToday.src = todayIcon;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgToday)

    const todayDate = new Date()
    const todayDateString =  `Date: ${format(todayDate, 'MMMM/dd/yyyy')}`;

    currentTabName.textContent = 'Today'
    tasksHandler.createRightDateDisplay(mainHeadingRight, todayDateString)

    dateDisplayer.innerHTML = ''
    tasksHandler.createDateDisplay(dateDisplayer, todayDateString)

    tasksListView.innerHTML = ''
    floatingActionButton.innerHTML = ''
    headerSection.className = ''
    headerSection.classList.add('header-today')
}

function taskIsToday(taskDate){
  let currentTaskDate = new Date(taskDate)
  if(isToday(currentTaskDate) === true){
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

      const noTasksImageToday = new Image()
      noTasksImageToday.src = noTasksIconToday
      noTasksImageToday.classList.add('no-tasks-img-today')

      const text = document.createElement('div')
      text.textContent = `You don't have any tasks for today!`
      text.classList.add('no-tasks-img-text')

      container.appendChild(noTasksImageToday)
      container.appendChild(text)
      tasksListView.appendChild(container)
  }
}
