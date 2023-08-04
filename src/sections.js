import { SectionHandler } from "./dom";
import { currentProject, addDeleteSectionButtonsEvent, currentSectionIndex } from "./projects";
import { ModalHandler } from "./dom";

const modalHandler = new ModalHandler(); 
const sectionHandler = new SectionHandler(); 
const tasksListView = document.getElementById('tasksListView')

export function addSectionSubmitEvent() {
    const addSectionButtonSubmit = document.getElementById('addSectionButtonSubmit');
    const closeModalButtonSection = document.getElementById('closeModalButtonSection')
    
    addSectionButtonSubmit.addEventListener('click', () => {
        const sectionNameInput = document.getElementById('sectionNameInput');
        const modalSectionAlert = document.getElementById('modalSectionAlert')

        let existingProject = currentProject.sections.find(section => section.sectionTitle === sectionNameInput.value)

        if(sectionNameInput.value === ''){
            modalSectionAlert.textContent = '(You must enter new section title)'
            sectionNameInput.value = ''
            return
        }

        if(existingProject){
            modalSectionAlert.textContent = '(The section with this name already exists)'
            sectionNameInput.value = ''
            return
        }

        if (currentProject) {            
            currentProject.sections.push({sectionTitle: `${sectionNameInput.value}`})
            loadCurrentProjectSections(currentProject)
            addDeleteSectionButtonsEvent()
            closeModalButtonSection.click();
            modalHandler.handleModals();
            modalHandler.changeModalPositionIfKeyboardOpened()
        } else {
            
        }
        });
}

export function addSectionDeleteEvent() {
    const deleteSectionButton = document.getElementById('deleteSectionButton')
    const closeModalButtonDeleteSection = document.getElementById('closeModalButtonDeleteSection')

    deleteSectionButton.addEventListener('click', () => {
        if (currentProject) {
            currentProject.sections.splice(currentSectionIndex, 1)
            loadCurrentProjectSections(currentProject)
            closeModalButtonDeleteSection.click();
            modalHandler.handleModals();
            modalHandler.changeModalPositionIfKeyboardOpened()
            addDeleteSectionButtonsEvent()
        } else {
            
        }
    });
}

export function loadCurrentProjectSections(currentProject){
    tasksListView.innerHTML = ''
    currentProject.sections.forEach(section => {
        sectionHandler.createSectionHtml(section)
    })
}