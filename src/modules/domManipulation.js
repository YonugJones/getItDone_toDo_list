import { projectLibrary } from "./projects";
import { taskLibrary } from "./tasks";
import { assignHandler, handleCreateProject } from "./userInterface";

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

export function renderCreateProjectForm() {
    const layoutSection = document.getElementById('layout-section');
    layoutSection.textContent = '';

    const projectForm = document.createElement('form');
    projectForm.setAttribute('id', 'create-project-form');

    const projectFormFieldset = document.createElement('fieldset');
    projectFormFieldset.setAttribute('id', 'create-project-fieldset');

    const legend = document.createElement('legend');
    legend.textContent = 'Create Project:';

    const projectNamelabel = document.createElement('label');
    projectNamelabel.setAttribute('for', 'pname');
    projectNamelabel.textContent = 'Project Name:';

    const projectNameInput = document.createElement('input');
    projectNameInput.setAttribute('type', 'text');
    projectNameInput.setAttribute('id', 'pname');
    projectNameInput.setAttribute('name', 'pname');

    const projectDescriptionLabel = document.createElement('label');
    projectDescriptionLabel.setAttribute('for', 'pdescription');
    projectDescriptionLabel.textContent = 'Project Description:';

    const projectDescriptionTextArea = document.createElement('textarea');
    projectDescriptionTextArea.setAttribute('name', 'pdescription');
    projectDescriptionTextArea.setAttribute('id', 'pdescription');
    projectDescriptionTextArea.setAttribute('rows', '3');

    const projectDueDateLabel = document.createElement('label');
    projectDueDateLabel.setAttribute('for', 'pduedate');
    projectDueDateLabel.textContent = 'Project Due Date:';

    const projectDueDateInput = document.createElement('input');
    projectDueDateInput.setAttribute('type', 'date');
    projectDueDateInput.setAttribute('id', 'pduedate');
    projectDueDateInput.setAttribute('name', 'pduedate');

    const buttonFieldset = document.createElement('fieldset');
    buttonFieldset.setAttribute('id', 'create-project-buttons');

    const cancelButton = document.createElement('button');
    cancelButton.setAttribute('type', 'button');
    cancelButton.setAttribute('id', 'create-project-cancel-button');
    cancelButton.textContent = 'Cancel';

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'button');
    submitButton.setAttribute('id', 'create-project-submit-button');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', handleCreateProject);

    projectFormFieldset.appendChild(legend);
    projectFormFieldset.appendChild(projectNamelabel);
    projectFormFieldset.appendChild(projectNameInput);
    projectFormFieldset.appendChild(projectDescriptionLabel);
    projectFormFieldset.appendChild(projectDescriptionTextArea);
    projectFormFieldset.appendChild(projectDueDateLabel);
    projectFormFieldset.appendChild(projectDueDateInput);
    buttonFieldset.appendChild(cancelButton);
    buttonFieldset.appendChild(submitButton);

    projectForm.appendChild(projectFormFieldset);
    projectForm.appendChild(buttonFieldset);

    layoutSection.appendChild(projectForm);
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
        taskList.classList.add('project-details-task-list');
        project.tasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.textContent = task.name;
            taskItem.classList.add('project-details-task-item');
            taskList.appendChild(taskItem);
        })
        
        projectDetails.appendChild(projectName);
        projectDetails.appendChild(projectDescription);
        projectDetails.appendChild(projectDueDate);
        projectDetails.appendChild(taskList);

        layoutSection.appendChild(projectDetails);
    }
}

export function renderAllTasks() {
    const layoutSection = document.getElementById('layout-section');
    layoutSection.textContent = '';

    if (taskLibrary.length === 0) {
        const noTasks = document.createElement('h2');
        noTasks.textContent = 'There are no tasks'
        layoutSection.appendChild(noTasks);
    } else {
        const taskList = document.createElement('ul');
        taskList.classList.add('project-details-task-list');
        taskLibrary.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.textContent = task.name;
            taskItem.classList.add('project-details-task-item');
            taskList.appendChild(taskItem);
        });

        layoutSection.appendChild(taskList);
    }
}

export function renderTaskLibrary() {
    console.log('Task Library:', taskLibrary);
}

export function renderLayout() {
    assignHandler();
}