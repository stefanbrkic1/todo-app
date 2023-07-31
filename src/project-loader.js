import projectIcon from './img/project48x48.svg'

export function loadActiveProject(currentProjectTab){
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')

    const svgProject = new Image()
    svgProject.src = projectIcon;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgProject)

    currentTabName.textContent = `Project | ${currentProjectTab.name}`
}
