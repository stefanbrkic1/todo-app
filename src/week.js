import weekIcon from './img/thisweek48x48.svg'

const tasksListView = document.getElementById('tasksListView')
const mainHeading = document.getElementById('mainHeading')
const headerSection = document.getElementById('headerSection')
const footerSection = document.getElementById('footerSection')

export default function loadWeekTasks() {
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')

    const svgWeek = new Image()
    svgWeek.src = weekIcon;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgWeek)

    currentTabName.textContent = 'This Week'

    tasksListView.innerHTML = ''
    footerSection.innerHTML = ''
    mainHeading.classList.remove('border-bottom')
    headerSection.className = ''
    headerSection.classList.add('footer-week')
}