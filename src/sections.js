import { SectionHandler } from "./dom";
import { currentProject, currentProjectIndex, clickCurrentProject } from "./projects";
import { ModalHandler } from "./dom";
import { addTaskFormCreationEvent, getCurrentSectionIndex } from "./tasks";

const modalHandler = new ModalHandler();
const sectionHandler = new SectionHandler();
const tasksListView = document.getElementById('tasksListView')


class Section {
    constructor(title) {
        this.sectionTitle = title;
        this.tasks = [];
    }
}

addSectionSubmitEvent()

function addSectionSubmitEvent() {
    const addSectionButtonSubmit = document.getElementById('addSectionButtonSubmit');
    const closeModalButtonSection = document.getElementById('closeModalButtonSection')

    addSectionButtonSubmit.addEventListener('click', () => {
        const sectionNameInput = document.getElementById('sectionNameInput');
        const modalSectionAlert = document.getElementById('modalSectionAlert')
        let allProjectsLocal = JSON.parse(localStorage.getItem("allProjects"))

        let existingProject = currentProject.sections.find(section => section.sectionTitle === sectionNameInput.value)

        if (sectionNameInput.value === '') {
            modalSectionAlert.textContent = '(You must enter new section title)'
            sectionNameInput.value = ''
            return
        }
        else if (existingProject) {
            modalSectionAlert.textContent = '(The section with this name already exists)'
            sectionNameInput.value = ''
            return
        }
        else if (currentProject) {
            let newSection = new Section(sectionNameInput.value)
            allProjectsLocal[currentProjectIndex].sections.push(newSection)
            setTimeout(() => {
                clickCurrentProject()
            }, 1);
            closeModalButtonSection.click();
            modalHandler.handleModals();
            modalHandler.changeModalPositionIfKeyboardOpened()
            modalSectionAlert.textContent = ''
        } else {

        }
        localStorage.setItem("allProjects", JSON.stringify(allProjectsLocal))
    });
}

export function loadCurrentProjectSections() {
    tasksListView.innerHTML = ''
    let allProjectsLocal = JSON.parse(localStorage.getItem("allProjects"))
    allProjectsLocal[currentProjectIndex].sections.forEach(section => {
        sectionHandler.createSectionHtml(section)
    })
    addTaskFormCreationEvent()
    getCurrentSectionIndex()
}

