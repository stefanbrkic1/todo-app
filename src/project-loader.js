import { SectionHandler } from './dom'
import projectIcon from './img/project48x48.svg'

const sectionHandler = new SectionHandler()
const headerSection = document.getElementById('headerSection')

export function loadActiveProject(currentProjectTab) {
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')
    const dateDisplayer = document.querySelector('.date-displayer')

    const svgProject = new Image()
    svgProject.src = projectIcon;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgProject)

    currentTabName.textContent = `${currentProjectTab.name}`

    dateDisplayer.innerHTML = ''
    sectionHandler.createAddSectionButtonHtml()
    headerSection.className = ''
    headerSection.classList.add('header-project')
}
