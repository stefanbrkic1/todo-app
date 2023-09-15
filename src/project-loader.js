import { SectionHandler } from './dom'
import projectIcon from './img/project48x48.svg'

const sectionHandler = new SectionHandler()
const headerSection = document.getElementById('headerSection')
const tasksListView = document.getElementById('tasksListView')

export function loadActiveProject(currentProject){
    setActiveProject(currentProject)
    displayNoSectionsImage()
}

function setActiveProject(currentProject) {
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')
    const dateDisplayer = document.querySelector('.date-displayer')
    const listify = document.querySelector('.listify-container')

    const svgProject = new Image()
    svgProject.src = projectIcon;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgProject)

    currentTabName.textContent = `${currentProject.name}`

    listify.classList.add('display-none')

    dateDisplayer.innerHTML = ''
    tasksListView.classList.add('height-auto')
    tasksListView.classList.remove('no-lists-list-view')
    sectionHandler.createAddSectionButtonHtml()
    headerSection.className = ''
    headerSection.classList.add('header-project')
}

export function displayNoSectionsImage() {
   setTimeout(() => {
    if (tasksListView.innerHTML === '') {
        tasksListView.classList.remove('height-auto')
        const container = document.createElement('div')
        container.classList.add('no-tasks-img-container')

        const noSectionsImage = document.createElement('div')
        noSectionsImage.classList.add('no-sections-img')

        const text = document.createElement('div')
        text.textContent = `Start organizing your tasks! Create sections within your lists.`
        text.classList.add('no-tasks-img-text-sections')

        container.appendChild(noSectionsImage)
        container.appendChild(text)
        tasksListView.appendChild(container)
    }
   }, 5);
}
