import { SectionHandler } from "./dom";
import { currentProjectTab } from "./projects";
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

        let existingProject = currentProjectTab.sections.find(section => section.sectionTitle === sectionNameInput.value)

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

        if (currentProjectTab) {            
            currentProjectTab.sections.push({sectionTitle: `${sectionNameInput.value}`})
            loadCurrentProjectSections(currentProjectTab)
            closeModalButtonSection.click();
            modalHandler.handleModals();
            modalHandler.changeModalPositionIfKeyboardOpened()
        } else {
            
        }
        });
}

export function loadCurrentProjectSections(currentProjectTab){
    tasksListView.innerHTML = ''
    currentProjectTab.sections.forEach(section => {
        sectionHandler.createSectionHtml(section)
    })
}