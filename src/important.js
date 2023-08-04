import importantIcon from './img/important48x48.svg'

const tasksListView = document.getElementById('tasksListView')
const mainHeading = document.getElementById('mainHeading')

export default function loadImportantTasks() {
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')
    const footerSection = document.getElementById('footerSection')


    const svgImportant = new Image()
    svgImportant.src = importantIcon;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgImportant)

    currentTabName.textContent = 'Important'

    tasksListView.innerHTML = ''
    footerSection.innerHTML = ''
    mainHeading.classList.remove('border-bottom')
}