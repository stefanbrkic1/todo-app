import allTasksIcon from './img/alltasks48x48.svg'

export default function loadAllTasks() {
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')
    const footerSection = document.getElementById('footerSection')
  

    const svgAllTasks = new Image()
    svgAllTasks.src = allTasksIcon;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgAllTasks)

    currentTabName.textContent = 'All Tasks'

    footerSection.innerHTML = ''
}