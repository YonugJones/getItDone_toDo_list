import { projectLibrary } from "./projects";
import { taskLibrary } from "./tasks";
import { assignHandler, handleAddTaskToProject, handleCreateProject } from "./userInterface";

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

    assignHandler();
}

export function renderCreateTaskForm() {
    const addTaskSection = document.querySelector('.add-task-section');
    const addTaskButton = document.getElementById('add-task-button');
    addTaskButton.style.display = 'none';

    const taskForm = document.createElement('form');
    taskForm.setAttribute('id', 'create-task-form');

    const taskFormFieldset = document.createElement('fieldset');
    taskFormFieldset.setAttribute('id', 'create-task-fieldset');

    const legend = document.createElement('legend');
    legend.textContent = 'Create Task:';

    const tasktNamelabel = document.createElement('label');
    tasktNamelabel.setAttribute('for', 'tname');
    tasktNamelabel.textContent = 'Task Name:';

    const taskNameInput = document.createElement('input');
    taskNameInput.setAttribute('type', 'text');
    taskNameInput.setAttribute('id', 'tname');
    taskNameInput.setAttribute('name', 'tname');

    const taskDueDateLabel = document.createElement('label');
    taskDueDateLabel.setAttribute('for', 'tduedate');
    taskDueDateLabel.textContent = 'Task Due Date:';

    const taskDueDateInput = document.createElement('input');
    taskDueDateInput.setAttribute('type', 'date');
    taskDueDateInput.setAttribute('id', 'tduedate');
    taskDueDateInput.setAttribute('name', 'tduedate');

    const taskPriorityLabel = document.createElement('label');
    taskPriorityLabel.setAttribute('for', 'tpriority');
    taskPriorityLabel.textContent = 'Task Priority:';

    const taskPrioritySelect = document.createElement('select');
    taskPrioritySelect.setAttribute('id', 'tpriority');
    taskPrioritySelect.setAttribute('name', 'tpriority');

    const taskPriorityHigh = document.createElement('option');
    taskPriorityHigh.setAttribute('value', 'High');
    taskPriorityHigh.textContent = 'High';

    const taskPriorityMedium = document.createElement('option');
    taskPriorityMedium.setAttribute('value', 'Medium');
    taskPriorityMedium.textContent = 'Medium';

    const taskPriorityLow = document.createElement('option');
    taskPriorityLow.setAttribute('value', 'Low');
    taskPriorityLow.textContent = 'Low';

    const buttonFieldset = document.createElement('fieldset');
    buttonFieldset.setAttribute('id', 'create-task-buttons');

    const cancelButton = document.createElement('button');
    cancelButton.setAttribute('type', 'button');
    cancelButton.setAttribute('id', 'create-task-cancel-button');
    cancelButton.textContent = 'Cancel';
    
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'button');
    submitButton.setAttribute('id', 'create-task-submit-button');
    submitButton.textContent = 'Submit';

    taskFormFieldset.appendChild(legend);
    taskFormFieldset.appendChild(tasktNamelabel);
    taskFormFieldset.appendChild(taskNameInput);
    taskFormFieldset.appendChild(taskDueDateLabel);
    taskFormFieldset.appendChild(taskDueDateInput);
    taskFormFieldset.appendChild(taskPriorityLabel);
    taskFormFieldset.appendChild(taskPrioritySelect);

    taskPrioritySelect.appendChild(taskPriorityHigh);
    taskPrioritySelect.appendChild(taskPriorityMedium);
    taskPrioritySelect.appendChild(taskPriorityLow);

    buttonFieldset.appendChild(cancelButton);
    buttonFieldset.appendChild(submitButton);

    taskForm.appendChild(taskFormFieldset);
    taskForm.appendChild(buttonFieldset);

    addTaskSection.appendChild(taskForm);

    assignHandler();
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
        });

        const addTaskSection = document.createElement('div');
        addTaskSection.classList.add('add-task-section');

        const addTaskButton = document.createElement('button');
        addTaskButton.setAttribute('id', 'add-task-button');
        addTaskButton.textContent = 'Add Task';
        addTaskButton.addEventListener('click', renderCreateTaskForm);
        
        projectDetails.appendChild(projectName);
        projectDetails.appendChild(projectDescription);
        projectDetails.appendChild(projectDueDate);
        projectDetails.appendChild(taskList);

        layoutSection.appendChild(projectDetails);

        addTaskSection.appendChild(addTaskButton)
        layoutSection.appendChild(addTaskSection);
    }
}

export function renderAllTasks() {
    const layoutSection = document.getElementById('layout-section');
    layoutSection.textContent = '';

    if (taskLibrary.length === 0) {
        const noTasksDiv = document.createElement('div');
        noTasksDiv.classList.add('no-tasks-display')
        const noTasks = document.createElement('h2');
        noTasks.textContent = 'There are no tasks'
        noTasksDiv.appendChild(noTasks);
        layoutSection.appendChild(noTasksDiv);
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