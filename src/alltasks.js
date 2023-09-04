import allTasksIcon from './img/alltasks48x48.svg'
import { allProjects } from './projects'
import { TasksHandler, ProjectsHandler } from './dom'

const tasksHandler = new TasksHandler()
const projectsHandler = new ProjectsHandler()

const tasksListView = document.getElementById('tasksListView')
const headerSection = document.getElementById('headerSection')
const floatingActionButton = document.getElementById('floatingActionButton')
const dateDisplayer = document.querySelector('.date-displayer')

export default function loadAllTasks() {
    setAllTasksTab();
    let tasksLength = 0
    allProjects.forEach((project, projectIndex) => {
        projectsHandler.createProjectHtmlAllTasks(tasksListView, project);
        const tasksContainerAllTasks = document.querySelectorAll('.tasks-container-all-tasks');
        
        let hasTasks = false; // Track if there are tasks in the project
        
        project.sections.forEach(section => {
            if (section.tasks.length === 0) {
               
            } else {
                hasTasks = true; // Mark that there are tasks in this project
                section.tasks.forEach(task => {
                    tasksHandler.createTaskHtml(tasksContainerAllTasks[projectIndex], task);
                    tasksLength++
                });
            }
        });
        
        if (!hasTasks) {
            tasksHandler.displayNoTasksMessage(tasksContainerAllTasks[projectIndex]);
        }
    });
    displayImportantTasksLength(tasksLength)
}

function setAllTasksTab(){
    const currentTabName = document.getElementById('currentTabName')
    const currentTabIcon = document.getElementById('currentTabIcon')
  
    const svgAllTasks = new Image()
    svgAllTasks.src = allTasksIcon;
    currentTabIcon.innerHTML = ''
    currentTabIcon.appendChild(svgAllTasks)

    currentTabName.textContent = 'All Tasks'

    tasksListView.innerHTML = ''
    dateDisplayer.innerHTML = ''
    floatingActionButton.innerHTML = ''
    headerSection.className = ''
    headerSection.classList.add('header-all-tasks')
}


function displayImportantTasksLength(tasksLength){
    let tasksString = 'tasks'
    const lengthArr = tasksLength.toString().split('')
    if( lengthArr[lengthArr.length - 1] === '1' ){
        tasksString = 'task'
    }
    const lengthString =  `TasksCount: ${tasksLength} ${tasksString}.`
    tasksHandler.createRightDateDisplay(mainHeadingRight, lengthString)
    
    dateDisplayer.innerHTML = ''
    tasksHandler.createDateDisplay(dateDisplayer, lengthString)
}