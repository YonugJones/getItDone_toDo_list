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
        projectName.classList.add('project-details-name');

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        projectDescription.classList.add('project-details-description')

        const projectDueDate = document.createElement('p');
        projectDueDate.textContent = project.dueDate;
        projectDueDate.classList.add('project-details-due-date');

        const taskList = document.createElement('ul');
        console.log('adding taskList');
        taskList.classList.add('project-details-task-list');
        project.tasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.textContent = task.name;
            taskItem.classList.add('project-details-task-item');
            taskList.appendChild(taskItem);
            console.log('adding task items')
        })
        
        projectDetails.appendChild(projectName);
        projectDetails.appendChild(projectDescription);
        projectDetails.appendChild(projectDueDate);
        projectDetails.appendChild(taskList);

        layoutSection.appendChild(projectDetails);
    }
}

export function renderTaskLibrary() {
    console.log('Task Library:', taskLibrary);
}

export function renderLayout() {
    assignHandler();
}