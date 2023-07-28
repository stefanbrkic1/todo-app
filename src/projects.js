import projectIcon from './img/project.svg'
import renameIcon from './img/rename.svg'
import deleteIcon from './img/delete.svg'
import renameIconHover from './img/rename-hover.svg'
import deleteIconHover from './img/delete-hover.svg'

const projectsContainer = document.getElementById('projectsContainer')

class Project {
    constructor(name) {
        this.name = name
    }
}

let allProjects = [
    {
        name: 'ToDo',
    },
    {
        name: 'My Work',
    },
]

export default function loadProjects() {
    projectsContainer.innerHTML = ''
    allProjects.forEach(project => {
      createProjectHtml(project);
    })
    addProjectToolsEvent()
}

function createProjectHtml(project){
    // Create the <li> element with class "sidebar-project" and "tab"
    const liElement = document.createElement("li");
    liElement.classList.add("sidebar-project", "tab");

    // Create the first <div> element with class "flex"
    const divFlex1 = document.createElement("div");
    divFlex1.classList.add("flex");

    // Create the "project" SVG icon
    const svgProject = new Image();
    svgProject.src = projectIcon; 

    // Append the "project" icon to the first <div> element
    divFlex1.appendChild(svgProject);

    // Create the <input> element
    const inputElement = document.createElement("input");
    inputElement.value = project.name
    inputElement.setAttribute("type", "text");
    inputElement.classList.add("project-name-input");
    inputElement.setAttribute("disabled", "");
    divFlex1.appendChild(inputElement);

    // Append the first <div> element to the <li> element
    liElement.appendChild(divFlex1);

    // Create the second <div> element with class "project-tools"
    const divTools = document.createElement("div");
    divTools.classList.add("project-tools");

    // Create the <div> elements with class "flex" for the tool icons
    const divFlex2 = document.createElement("div");
    divFlex2.classList.add("flex");
    const divFlex3 = document.createElement("div");
    divFlex3.classList.add("flex");

    // Append the tool icons to the second <div> element
    divTools.appendChild(divFlex2);
    divTools.appendChild(divFlex3);

    // Create the "rename" SVG icon
    const svgRename = new Image();
    svgRename.src = renameIcon; 
    svgRename.classList.add("rename"); // Add any necessary class for stylin

    // Add the data-modal-target attribute
    svgRename.setAttribute("data-modal-target", "#modalRename");

    //Change icons color on hover
    svgRename.addEventListener('mouseover', () => {
        svgRename.src = renameIconHover
    })
    svgRename.addEventListener('mouseout', () => {
        svgRename.src = renameIcon
    })

    // Append the "rename" icon to the second <div> element
    divFlex2.appendChild(svgRename);

    // Create the "delete" SVG icon
    const svgDelete = new Image();
    svgDelete.src = deleteIcon; 
    svgDelete.classList.add("delete"); // Add any necessary class for styling
    //Change icons color on hover
    svgDelete.addEventListener('mouseover', () => {
        svgDelete.src = deleteIconHover
    })
    svgDelete.addEventListener('mouseout', () => {
        svgDelete.src = deleteIcon
    })

    // Append the "delete" icon to the second <div> element
    divFlex3.appendChild(svgDelete);

    // Append the second <div> element to the <li> element
    liElement.appendChild(divTools);
    
    projectsContainer.appendChild(liElement)
}

export function addProjectEvent() {
    const addProjectButton = document.getElementById('addProjectButton');
    const projectNameInput = document.getElementById('projectNameInput');
    const closeModalButton = document.getElementById('closeModalButton');
    const modalAlert = document.getElementById('modalAlert')

    addProjectButton.addEventListener('click', () => {
        const newProjectName = projectNameInput.value.trim();

        // Check if a project with the same name already exists
        const existingProject = allProjects.find(project => project.name === newProjectName);

        if(newProjectName === ''){
            return
        }

        if (existingProject) {
            modalAlert.textContent = '(The project with this name already exists.)'
            return;
        }

        if(allProjects.length === 5){  
            modalAlert.textContent = '(Cant have more than five projects. Upgrade to PRO.)'
            return
        }

        let newProject = new Project(newProjectName);
        allProjects.push(newProject);
        loadProjects();
        closeModalButton.click();
    });
}

function addProjectToolsEvent(){
    const renameButtons = document.querySelectorAll('.rename')
    const deleteButtons = document.querySelectorAll('.delete')
    const projectNameInputs = document.querySelectorAll('.project-name-input')
    const renameProjectButton = document.getElementById('renameProjectButton')
    const renameInput = document.getElementById('projectRenameInput')
    const closeModalButton2 = document.getElementById('closeModalButton2');

    renameButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let nameContainer = projectNameInputs[index]
            renameProjectButton.addEventListener('click', () => {
                nameContainer.value = renameInput.value
                allProjects[index].name = renameInput.value
                loadProjects()
                closeModalButton2.click()
            })

            
        })
    })

    deleteButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            allProjects.splice(index, 1)
            loadProjects()
        })
    })
}