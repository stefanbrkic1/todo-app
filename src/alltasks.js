export default function loadAllTasks(){
    const main = document.getElementById('mainSection')
    main.innerHTML = ''
    // JavaScript:
document.addEventListener('DOMContentLoaded', function () {
    // Get the parent container where the HTML will be inserted
    const parentContainer = document.getElementById('mainSection');

    // Create the main container div
    const allTasksContainerDiv = document.createElement('div');
    allTasksContainerDiv.classList.add('all-tasks-container');

    // Create the "div" elements
    const homeHeadingDiv = document.createElement('div');
    homeHeadingDiv.classList.add('home-heading');
    homeHeadingDiv.textContent = 'All Tasks';

    const tasksDiv = document.createElement('div');
    tasksDiv.classList.add('tasks');

    const addTaskBtnDiv = document.createElement('div');
    addTaskBtnDiv.classList.add('add-task-btn');
    addTaskBtnDiv.textContent = 'Add Task';

    // Create the SVG element
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('width', '24');
    svg.setAttribute('height', '24');
    svg.setAttribute('viewBox', '0 0 24 24');

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute('fill', '#303336');
    path.setAttribute('d', 'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z');

    svg.appendChild(path);
    addTaskBtnDiv.appendChild(svg);

    // Append the elements to the parent container
    tasksDiv.appendChild(addTaskBtnDiv);
    allTasksContainerDiv.appendChild(homeHeadingDiv);
    allTasksContainerDiv.appendChild(tasksDiv);
    parentContainer.appendChild(allTasksContainerDiv);
});

}