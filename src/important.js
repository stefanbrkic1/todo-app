import importantIcon from './img/important.svg'

const tasksListView = document.getElementById('tasksListView')
const mainHeading = document.getElementById('mainHeading')
const headerSection = document.getElementById('headerSection')
const floatingActionButton = document.getElementById('floatingActionButton')

export default function loadImportantTasks() {
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')

    const svgImportant = new Image()
    svgImportant.src = importantIcon;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgImportant)

    currentTabName.textContent = 'Important'

    tasksListView.innerHTML = ''
    floatingActionButton.innerHTML = ''
    mainHeading.classList.remove('border-bottom')
    headerSection.className = ''
    headerSection.classList.add('header-important')
}