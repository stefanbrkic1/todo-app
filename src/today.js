import todayIcon from './img/today48x48.svg'

const tasksListView = document.getElementById('tasksListView')
const headerSection = document.getElementById('headerSection')
const floatingActionButton = document.getElementById('floatingActionButton')

export default function loadTodayTasks() {
  setTodayTab()
}

function setTodayTab(){
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')
    const dateDisplayer = document.querySelector('.date-displayer')

    const svgToday = new Image()
    svgToday.src = todayIcon;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgToday)

    currentTabName.textContent = 'Today'

    tasksListView.innerHTML = ''
    dateDisplayer.innerHTML = ''
    floatingActionButton.innerHTML = ''
    headerSection.className = ''
    headerSection.classList.add('header-today')
}