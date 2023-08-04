import todayIcon from './img/today48x48.svg'

const tasksListView = document.getElementById('tasksListView')
const mainHeading = document.getElementById('mainHeading')

export default function loadTodayTasks() {
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')
    const footerSection = document.getElementById('footerSection')
 

    const svgToday = new Image()
    svgToday.src = todayIcon;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgToday)

    currentTabName.textContent = 'Today'

    tasksListView.innerHTML = ''
    footerSection.innerHTML = ''
    mainHeading.classList.remove('border-bottom')
}