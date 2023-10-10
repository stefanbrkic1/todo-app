import Toastify from "toastify-js";
import { TasksHandler, playNotificationSound } from "./dom";
import { currentProjectIndex } from "./projects";
import "toastify-js/src/toastify.css";

const tasksHandler = new TasksHandler();
const toastNotification = document.getElementById("toastNotification");

class Task {
  constructor(description, date) {
    this.description = description;
    this.date = date;
    this.important = false;
  }
}

let currentSectionIndex = null;

export function addTaskFormCreationEvent() {
  const addTaskButtons = document.querySelectorAll(".add-task-container");
  addTaskButtons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
      const { target } = e;
      currentSectionIndex = index;
      const currentSectionHtmlElement = target.closest(".section");
      const currentSectionTasksContainer =
        currentSectionHtmlElement.querySelector(".form-task-container");
      tasksHandler.createAddTaskFormHtml(currentSectionTasksContainer);
      addCancelButtonEvent(currentSectionTasksContainer);
      const currentAddTaskButtonContainer =
        currentSectionHtmlElement.querySelector(".add-task-container");
      currentAddTaskButtonContainer.classList.add("display-none");
      removeAddTaskButtonsClick(addTaskButtons);
      addTaskSubmitEvent();
    });
  });
}

function addCancelButtonEvent(currentSectionTasksContainer) {
  const cancelTaskFormButton = document.getElementById("cancelTaskFormButton");
  cancelTaskFormButton.addEventListener("click", () => {
    const addTaskForm = currentSectionTasksContainer.querySelector(
      ".add-task-form-container"
    );
    if (addTaskForm) {
      addTaskForm.remove();
      addAddTaskButtons();
    }
  });
}

function removeAddTaskButtonsClick(addTaskButtons) {
  addTaskButtons.forEach((button) => {
    button.classList.add("disabled-click");
  });
  const addTaskIcons = document.querySelectorAll(".add-task-btn");
  addTaskIcons.forEach((icon) => {
    icon.classList.add("add-task-btn-disabled");
  });
}

function addAddTaskButtons() {
  const addTaskButtons = document.querySelectorAll(".add-task-container");
  addTaskButtons.forEach((button) => {
    button.classList.remove("disabled-click");
    button.classList.remove("display-none");
  });

  const addTaskIcons = document.querySelectorAll(".add-task-btn");
  addTaskIcons.forEach((icon) => {
    icon.classList.remove("add-task-btn-disabled");
  });
}

function addTaskSubmitEvent() {
  const addTaskFormButton = document.getElementById("addTaskFormButton");
  const taskDescriptionInput = document.getElementById("taskDescriptionInput");
  const dateInput = document.getElementById("dateInput");
  const cancelTaskFormButton = document.getElementById("cancelTaskFormButton");
  addTaskFormButton.addEventListener("click", () => {
    if (taskDescriptionInput.value === "") {
      taskDescriptionInput.classList.add("invalid-input");
    } else if (dateInput.value === "") {
      dateInput.classList.add("invalid-input");
    } else {
      const newTask = new Task(taskDescriptionInput.value, dateInput.value);
      const allProjectsLocal = JSON.parse(localStorage.getItem("allProjects"));
      allProjectsLocal[currentProjectIndex].sections[
        currentSectionIndex
      ].tasks.push(newTask);
      localStorage.setItem("allProjects", JSON.stringify(allProjectsLocal));
      loadAllSectionsTasks();
      cancelTaskFormButton.click();
    }
  });

  taskDescriptionInput.addEventListener("focus", () => {
    taskDescriptionInput.classList.remove("invalid-input");
    dateInput.classList.remove("invalid-input");
  });

  dateInput.addEventListener("focus", () => {
    dateInput.classList.remove("invalid-input");
  });
}

export function loadAllSectionsTasks() {
  const allProjectsLocal = JSON.parse(localStorage.getItem("allProjects"));
  const allSectionTasksContainers = document.querySelectorAll(".section-tasks");
  allSectionTasksContainers.forEach((container) => {
    container.innerHTML = "";
  });
  allProjectsLocal[currentProjectIndex].sections.forEach((section, index) => {
    section.tasks.forEach((task) => {
      tasksHandler.createTaskHtml(allSectionTasksContainers[index], task);
    });
  });
  addImportantButtonEvent();
  addTaskCheckboxEvent();
}

let clickedSectionIndex = null;

export function getCurrentSectionIndex() {
  const allSectionsHtml = document.querySelectorAll(".section");
  allSectionsHtml.forEach((section, index) => {
    section.addEventListener("click", () => {
      clickedSectionIndex = index;
    });
  });
}

export function addImportantButtonEvent() {
  const allSectionsHtml = document.querySelectorAll(".section");
  allSectionsHtml.forEach((section) => {
    const sectionImportantButtons = section.querySelectorAll(".important-btn");
    sectionImportantButtons.forEach((button, index) => {
      button.addEventListener(
        "click",
        () => {
          setTimeout(() => {
            if (!button.classList.contains("important-btn-active")) {
              setTaskAsImportant(button, index);
            } else if (button.classList.contains("important-btn-active")) {
              setTaskAsUnimportant(button, index);
            }
          });
        },
        500
      );
    });
  });
}

function setTaskAsImportant(clickedButton, index) {
  const allProjectsLocal = JSON.parse(localStorage.getItem("allProjects"));
  clickedButton.classList.add("important-btn-active");
  allProjectsLocal[currentProjectIndex].sections[clickedSectionIndex].tasks[
    index
  ].important = true;
  localStorage.setItem("allProjects", JSON.stringify(allProjectsLocal));
}

function setTaskAsUnimportant(clickedButton, index) {
  const allProjectsLocal = JSON.parse(localStorage.getItem("allProjects"));
  clickedButton.classList.remove("important-btn-active");
  allProjectsLocal[currentProjectIndex].sections[clickedSectionIndex].tasks[
    index
  ].important = false;
  localStorage.setItem("allProjects", JSON.stringify(allProjectsLocal));
}

function addTaskCheckboxEvent() {
  const allSectionsHtml = document.querySelectorAll(".section");
  allSectionsHtml.forEach((section) => {
    const sectionCheckboxes = section.querySelectorAll(".checkbox");
    sectionCheckboxes.forEach((checkbox, checkboxIndex) => {
      checkbox.addEventListener("click", () => {
        setTimeout(() => {
          checkTaskAsCompleted(checkboxIndex);
          playNotificationSound();
        }, 10);
      });
    });
  });
}

function checkTaskAsCompleted(checkboxIndex) {
  const allProjectsLocal = JSON.parse(localStorage.getItem("allProjects"));
  allProjectsLocal[currentProjectIndex].sections[
    clickedSectionIndex
  ].tasks.splice(checkboxIndex, 1);
  localStorage.setItem("allProjects", JSON.stringify(allProjectsLocal));
  setTimeout(() => {
    loadAllSectionsTasks();
    Toastify({
      text: "1 task completed",
      className: "custom-toast", // Apply the custom CSS class
      duration: 2300,
      gravity: "bottom", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
    }).showToast();
  }, 300);
}
