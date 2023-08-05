import { SectionHandler } from './dom'
import projectIcon from './img/project48x48.svg'

const sectionHandler = new SectionHandler()
const mainHeading = document.getElementById('mainHeading')
const headerSection = document.getElementById('headerSection')

export function loadActiveProject(currentProjectTab){
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')

    const svgProject = new Image()
    svgProject.src = projectIcon;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgProject)

    currentTabName.textContent = `${currentProjectTab.name}`

    sectionHandler.createAddSectionButtonHtml()
    mainHeading.classList.add('border-bottom')
    headerSection.className = ''
    headerSection.classList.add('footer-project')
}
