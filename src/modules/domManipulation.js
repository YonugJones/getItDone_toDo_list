import { projectLibrary } from "./projects";
import { taskLibrary } from "./tasks";
import { assignHandler } from "./userInterface";

export function renderProjectLibrary() {
    console.log('Project Library:', projectLibrary);
}

export function renderProjectListDisplay() {
    
    const projectList = document.getElementById('project-list');

    projectList.textContent = '';
    projectLibrary.forEach(proj => {
        const projectListItem = document.createElement('li');
        projectListItem.classList.add('project-list-item')
        projectListItem.textContent = proj.name;
        projectList.appendChild(projectListItem);
    })
}

export function renderProjectDetails(project) {
    const layoutSection = document.getElementById('layout-section');
    layoutSection.textContent = '';

    if (project) {
        const projectDetails = document.createElement('div');
        projectDetails.classList.add('project-details');

        const projectName = document.createElement('h2');
        projectName.textContent = project.name;

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        const projectDueDate = document.createElement('p');
        projectDueDate.textContent = project.dueDate;

        projectDetails.appendChild(projectName);
        projectDetails.appendChild(projectDescription);
        projectDetails.appendChild(projectDueDate);

        layoutSection.appendChild(projectDetails);
    }
}

export function handleProjectItemClick(event) {
    const clickedElement = event.target.closest('.project-list-item');
    if (clickedElement) {
        const projectName = clickedElement.textContent;
        const project = projectLibrary.find(proj => proj.name === projectName);

        if (project) {
            renderProjectDetails(project)
        } else {
            console.error('Project not found in projectLibrary');
        }
    }
}

export function renderTaskLibrary() {
    console.log('Task Library:', taskLibrary);
}

export function renderLayout() {
    assignHandler();
}