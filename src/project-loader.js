export function loadActiveProject(currentProjectTab){
    const mainHeading = document.getElementById('mainHeading')
    mainHeading.textContent = `Project | ${currentProjectTab.name}`
}
