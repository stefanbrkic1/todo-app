import { SectionHandler, ModalHandler } from './dom';
import { currentProject, currentProjectIndex, clickCurrentProject } from './projects';
import { addTaskFormCreationEvent, getCurrentSectionIndex } from './tasks';

const modalHandler = new ModalHandler();
const sectionHandler = new SectionHandler();
const tasksListView = document.getElementById('tasksListView');

class Section {
  constructor(title) {
    this.sectionTitle = title;
    this.tasks = [];
  }
}

addSectionSubmitEvent();

function addSectionSubmitEvent() {
  const addSectionButtonSubmit = document.getElementById('addSectionButtonSubmit');
  const closeModalButtonSection = document.getElementById('closeModalButtonSection');

  addSectionButtonSubmit.addEventListener('click', () => {
    const sectionNameInput = document.getElementById('sectionNameInput');
    const modalSectionAlert = document.getElementById('modalSectionAlert');
    const allProjectsLocal = JSON.parse(localStorage.getItem('allProjects'));

    const existingProject = currentProject.sections.find((section) => section.sectionTitle === sectionNameInput.value);

    if (sectionNameInput.value === '') {
      modalSectionAlert.textContent = '(You must enter new section title)';
      sectionNameInput.value = '';
      return;
    }
    if (existingProject) {
      modalSectionAlert.textContent = '(The section with this name already exists)';
      sectionNameInput.value = '';
      return;
    }
    if (currentProject) {
      const newSection = new Section(sectionNameInput.value);
      allProjectsLocal[currentProjectIndex].sections.push(newSection);
      setTimeout(() => {
        clickCurrentProject();
      }, 1);
      closeModalButtonSection.click();
      modalHandler.handleModals();
      modalHandler.changeModalPositionIfKeyboardOpened();
      modalSectionAlert.textContent = '';
    } else {

    }
    localStorage.setItem('allProjects', JSON.stringify(allProjectsLocal));
  });
}

export function loadCurrentProjectSections() {
  tasksListView.innerHTML = '';
  const allProjectsLocal = JSON.parse(localStorage.getItem('allProjects'));
  allProjectsLocal[currentProjectIndex].sections.forEach((section) => {
    sectionHandler.createSectionHtml(section);
  });
  addTaskFormCreationEvent();
  getCurrentSectionIndex();
}
