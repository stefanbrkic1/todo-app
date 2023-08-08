import { SectionHandler } from "./dom";
import { currentProject, addDeleteSectionButtonsEvent } from "./projects";
import { ModalHandler } from "./dom";
import { addTaskFormEvent } from "./tasks";

const modalHandler = new ModalHandler(); 
const sectionHandler = new SectionHandler(); 
const tasksListView = document.getElementById('tasksListView')


class Section {
    constructor(title) {
        this.sectionTitle = title;
        this.tasks = [];
    }
}

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
        else if(existingProject){
            modalSectionAlert.textContent = '(The section with this name already exists)'
            sectionNameInput.value = ''
            return
        }
        else if (currentProject) {        
            let newSection = new Section(sectionNameInput.value)    
            currentProject.sections.push(newSection)
            loadCurrentProjectSections(currentProject)
            addDeleteSectionButtonsEvent()
            closeModalButtonSection.click();
            modalHandler.handleModals();
            modalHandler.changeModalPositionIfKeyboardOpened()
            modalSectionAlert.textContent = ''
        } else {
            
        }
        });
}

export function loadCurrentProjectSections(currentProject){
    tasksListView.innerHTML = ''
    currentProject.sections.forEach(section => {
        sectionHandler.createSectionHtml(section)
    })
    addTaskFormEvent()
}