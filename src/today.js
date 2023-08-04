import todayIcon from './img/today48x48.svg'

export default function loadTodayTasks() {
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')
    const footerSection = document.getElementById('footerSection')
 

    const svgToday = new Image()
    svgToday.src = todayIcon;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgToday)

    currentTabName.textContent = 'Today'


    footerSection.innerHTML = ''
}