import Toastify from 'toastify-js';
import importantIcon from './img/important.svg';
import {
  TasksHandler, ProjectsHandler, removeEmptyProjectsFromHTML, playNotificationSound,
} from './dom';
import 'toastify-js/src/toastify.css';

const tasksHandler = new TasksHandler();
const projectsHandler = new ProjectsHandler();

const tasksListView = document.getElementById('tasksListView');
const headerSection = document.getElementById('headerSection');
const floatingActionButton = document.getElementById('floatingActionButton');
const dateDisplayer = document.querySelector('.date-displayer');

let allImportantTasks = [];

class ImportantTask {
  constructor(projectIndexImportant, sectionIndexImportant, taskIndexImportant) {
    this.projectIndexImportant = projectIndexImportant;
    this.sectionIndexImportant = sectionIndexImportant;
    this.taskIndexImportant = taskIndexImportant;
  }
}

export default function loadImportantTasks() {
  setImportantTab();
  loadTasks();
}

function setImportantTab() {
  const currentTabName = document.getElementById('currentTabName');
  const currentTabIcon = document.getElementById('currentTabIcon');
  const listify = document.querySelector('.listify-container');

  const svgImportant = new Image();
  svgImportant.src = importantIcon;
  currentTabIcon.innerHTML = '';
  currentTabIcon.appendChild(svgImportant);

  currentTabName.textContent = 'Important';

  listify.classList.add('display-none');

  tasksListView.innerHTML = '';
  tasksListView.classList.add('height-auto');
  tasksListView.classList.remove('no-lists-list-view');
  dateDisplayer.innerHTML = '';
  floatingActionButton.innerHTML = '';
  headerSection.className = '';
  headerSection.classList.add('header-important');
}

function loadTasks() {
  tasksListView.innerHTML = '';
  allImportantTasks = [];
  const allProjectsLocal = JSON.parse(localStorage.getItem('allProjects'));
  allProjectsLocal.forEach((project, projectIndexImportant) => {
    projectsHandler.createProjectHtmlForTabs(tasksListView, project);
    const tasksContainerAllTasks = document.querySelectorAll('.tasks-container-all-tasks');

    project.sections.forEach((section, sectionIndexImportant) => {
      section.tasks.forEach((task, taskIndexImportant) => {
        if (task.important === true) {
          tasksHandler.createTaskHtml(tasksContainerAllTasks[projectIndexImportant], task);

          const newImportantTask = new ImportantTask(projectIndexImportant, sectionIndexImportant, taskIndexImportant);
          allImportantTasks.push(newImportantTask);
        } else {

        }
      });
    });
  });
  removeEmptyProjectsFromHTML();
  displayImportantTasksLength();
  displayNoTasksImage();
  addImportantTaskCheckboxEvent();
}

function displayNoTasksImage() {
  if (tasksListView.innerHTML === '') {
    tasksListView.classList.remove('height-auto');
    tasksListView.classList.remove('home-height');
    const container = document.createElement('div');
    container.classList.add('no-tasks-img-container');

    const noTasksImageImportant = document.createElement('div');
    noTasksImageImportant.classList.add('no-tasks-img');

    const text = document.createElement('div');
    text.textContent = 'You don\'t have any important tasks!';
    text.classList.add('no-tasks-img-text-important');

    container.appendChild(noTasksImageImportant);
    container.appendChild(text);
    tasksListView.appendChild(container);
  }
}

function displayImportantTasksLength() {
  let tasksString = 'tasks';
  if (allImportantTasks[allImportantTasks.length - 1] === '1') {
    tasksString = 'task';
  }
  const lengthString = `TasksCount: ${allImportantTasks.length} ${tasksString}.`;
  tasksHandler.createRightDateDisplay(mainHeadingRight, lengthString);

  dateDisplayer.innerHTML = '';
  tasksHandler.createDateDisplay(dateDisplayer, lengthString);
}

function addImportantTaskCheckboxEvent() {
  const importantCheckboxes = document.querySelectorAll('.checkbox');
  importantCheckboxes.forEach((checkbox, checkboxIndex) => {
    checkbox.addEventListener('click', () => {
      setTimeout(() => {
        checkTaskAsCompleted(checkboxIndex, allImportantTasks[checkboxIndex].projectIndexImportant, allImportantTasks[checkboxIndex].sectionIndexImportant, allImportantTasks[checkboxIndex].taskIndexImportant);
        playNotificationSound();
      }, 10);
    });
  });
}

function checkTaskAsCompleted(checkboxIndex, projectIndexImportant, sectionIndexImportant, taskIndexImportant) {
  const allProjectsLocal = JSON.parse(localStorage.getItem('allProjects'));
  allProjectsLocal[projectIndexImportant].sections[sectionIndexImportant].tasks.splice(taskIndexImportant, 1);
  localStorage.setItem('allProjects', JSON.stringify(allProjectsLocal));
  allImportantTasks.splice(checkboxIndex, 1);
  setTimeout(() => {
    loadTasks();
    Toastify({
      text: '1 task completed',
      className: 'custom-toast-yellow', // Apply the custom CSS class
      duration: 2300,
      gravity: 'bottom', // `top` or `bottom`
      position: 'left', // `left`, `center` or `right`
    }).showToast();
  }, 300);
}
