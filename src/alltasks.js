import allTasksIcon from './img/alltasks48x48.svg'

const tasksListView = document.getElementById('tasksListView')
const mainHeading = document.getElementById('mainHeading')

export default function loadAllTasks() {
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')
    const footerSection = document.getElementById('footerSection')
  

    const svgAllTasks = new Image()
    svgAllTasks.src = allTasksIcon;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgAllTasks)

    currentTabName.textContent = 'All Tasks'

    tasksListView.innerHTML = ''
    footerSection.innerHTML = ''
    mainHeading.classList.remove('border-bottom')
}