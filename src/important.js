import { allProjects } from './projects';
import importantIcon from './img/important.svg'
import { TasksHandler, ProjectsHandler } from './dom'
import noTasksIconImportant from './img/important-no-tasks.png'

const tasksHandler = new TasksHandler()
const projectsHandler = new ProjectsHandler()

const tasksListView = document.getElementById('tasksListView')
const headerSection = document.getElementById('headerSection')
const floatingActionButton = document.getElementById('floatingActionButton')
const dateDisplayer = document.querySelector('.date-displayer')

export default function loadImportantTasks() {
    setImportantTab()
    let tasksLength = 0
    allProjects.forEach((project, projectIndex) => {
        let projectHtmlCreated = false; // Track if project HTML has been created

        project.sections.forEach(section => {
            section.tasks.forEach(task => {
                if (task.important === true) {
                    if (!projectHtmlCreated) {
                        // Create project HTML only once for each project if it has tasks
                        projectsHandler.createProjectHtmlForTabs(tasksListView, project);
                        projectHtmlCreated = true; // Set the flag to true to prevent further creation
                    }
                    const tasksContainerAllTasks = document.querySelectorAll('.tasks-container-all-tasks');
                    tasksHandler.createTaskHtml(tasksContainerAllTasks[projectIndex], task);
                    tasksLength++
                } else {
                    return;
                }
            });
        });
    });
    displayImportantTasksLength(tasksLength)
    displayNoTasksImage()
}

function setImportantTab() {
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')

    const svgImportant = new Image()
    svgImportant.src = importantIcon;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgImportant)

    currentTabName.textContent = 'Important'

    tasksListView.innerHTML = ''
    dateDisplayer.innerHTML = ''
    floatingActionButton.innerHTML = ''
    headerSection.className = ''
    headerSection.classList.add('header-important')

}

function displayNoTasksImage() {
    if (tasksListView.innerHTML === '') {
        const container = document.createElement('div')
        container.classList.add('no-tasks-img-container')

        const noTasksImageImportant = new Image()
        noTasksImageImportant.src = noTasksIconImportant
        noTasksImageImportant.classList.add('no-tasks-img')

        const text = document.createElement('div')
        text.textContent = `You don't have any important tasks!`
        text.classList.add('no-tasks-img-text')

        container.appendChild(noTasksImageImportant)
        container.appendChild(text)
        tasksListView.appendChild(container)
    }
}

function displayImportantTasksLength(tasksLength) {
    let tasksString = 'tasks'
    const lengthArr = tasksLength.toString().split('')
    if (lengthArr[lengthArr.length - 1] === '1') {
        tasksString = 'task'
    }
    const lengthString = `TasksCount: ${tasksLength} ${tasksString}.`
    tasksHandler.createRightDateDisplay(mainHeadingRight, lengthString)

    dateDisplayer.innerHTML = ''
    tasksHandler.createDateDisplay(dateDisplayer, lengthString)
}