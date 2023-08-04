import weekIcon from './img/thisweek48x48.svg'

const tasksListView = document.getElementById('tasksListView')

export default function loadWeekTasks() {
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')
    const footerSection = document.getElementById('footerSection')
  

    const svgWeek = new Image()
    svgWeek.src = weekIcon;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgWeek)

    currentTabName.textContent = 'This Week'

    tasksListView.innerHTML = ''
    footerSection.innerHTML = ''
}