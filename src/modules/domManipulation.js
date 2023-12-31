import { projectLibrary } from "./projects";
import { taskLibrary } from "./tasks";
import { handleAllTasksClick, handleTodayClick, handleThisWeekClick, handleHighPriorityClick, handleProjectListItemClick, handleCreateProjectClick, handleProjectFormClick, handleProjectDetailsClick, handleTaskFormClick, handleAllTasksDetailsClick } from "./eventHandler";

export function renderProjectListDisplay() {
    console.log('renderProjectListDisplay called');
    //
    const projectList = document.getElementById('project-list');
    projectList.textContent = '';

    projectLibrary.forEach(proj => {
        const projectListItem = document.createElement('li');
        projectListItem.classList.add('project-list-item')
        projectListItem.textContent = proj.name;
        projectListItem.setAttribute('data-project-id', proj.id);
        projectList.appendChild(projectListItem);
        projectListItem.addEventListener('click', handleProjectListItemClick);
    })
}

export function renderCreateProjectForm() {
    console.log('renderCreateProjectForm called');
    //
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

    handleProjectFormClick();
}

export function renderRemoveProjectForm() {
    console.log('renderRemoveProjectForm called');
    renderNoProjectSelected();
}

export function renderAddTaskForm() {
    console.log('renderAddTaskForm called');
    //

    const projectDetailsHeader = document.querySelector('.project-details-header');
    projectDetailsHeader.style.display = 'none';

    const projectDetailsDescription = document.querySelector('.project-details-description');
    projectDetailsDescription.style.display = 'none';

    const projectDetailsTaskList = document.querySelector('.project-details-task-list');
    projectDetailsTaskList.style.display = 'none';

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
    taskFormFieldset.appendChild(taskPriorityLabel);
    taskFormFieldset.appendChild(taskPrioritySelect);
    taskFormFieldset.appendChild(taskDueDateLabel);
    taskFormFieldset.appendChild(taskDueDateInput);

    taskPrioritySelect.appendChild(taskPriorityHigh);
    taskPrioritySelect.appendChild(taskPriorityMedium);
    taskPrioritySelect.appendChild(taskPriorityLow);

    buttonFieldset.appendChild(cancelButton);
    buttonFieldset.appendChild(submitButton);

    taskForm.appendChild(taskFormFieldset);
    taskForm.appendChild(buttonFieldset);

    addTaskSection.appendChild(taskForm);

    handleTaskFormClick();
}

export function renderProjectDetails(project) {
    console.log('renderProjectDetails called');

    const layoutSection = document.getElementById('layout-section');
    layoutSection.textContent = '';

    const projectDetails = document.createElement('div');
    projectDetails.classList.add('project-details');

    const projectHeader = document.createElement('div');
    projectHeader.classList.add('project-details-header');

    const projectName = document.createElement('h2');
    projectName.textContent = project.name;
    projectName.classList.add('project-details-name');
    projectName.setAttribute('data-project-id', project.id);

    const projectButtons = document.createElement('div');
    projectButtons.classList.add('project-details-buttons');

    const projectDelete = document.createElement('button');
    projectDelete.setAttribute('type', 'button');
    projectDelete.classList.add('project-delete-button');
    projectDelete.textContent = 'DELETE';

    const projectDescription = document.createElement('p');
    projectDescription.textContent = project.description;
    projectDescription.classList.add('project-details-description');

    const projectDueDate = document.createElement('p');
    projectDueDate.textContent = `Due date: ${project.dueDate}`;
    projectDueDate.classList.add('project-details-due-date');

    const taskList = document.createElement('ul');
    taskList.classList.add('project-details-task-list');

    project.tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('project-details-task-item');
        taskItem.setAttribute('data-task-id', task.id);

        const taskItemInfo = document.createElement('div');
        taskItemInfo.classList.add('task-item-info');

        const taskItemButtons = document.createElement('div');
        taskItemButtons.classList.add('task-item-buttons');

        const taskItemName = document.createElement('div');
        taskItemName.textContent = task.name;
        taskItemName.classList.add('task-item-name');

        const taskItemPriority = document.createElement('div');
        taskItemPriority.textContent = task.priority;
        taskItemPriority.classList.add('task-item-priority');

        const taskItemDueDate = document.createElement('div');
        taskItemDueDate.textContent = task.dueDate;
        taskItemDueDate.classList.add('task-item-duedate');

        const taskItemDelete = document.createElement('button');
        taskItemDelete.setAttribute('type', 'button');
        taskItemDelete.setAttribute('class', 'task-item-delete');
        taskItemDelete.textContent = 'DELETE';

        taskItemInfo.appendChild(taskItemName);
        taskItemInfo.appendChild(taskItemDueDate);
        taskItemInfo.appendChild(taskItemPriority);

        taskItemButtons.appendChild(taskItemDelete);

        taskItem.appendChild(taskItemInfo);
        taskItem.appendChild(taskItemButtons);

        taskList.appendChild(taskItem);
    });

    const addTaskSection = document.createElement('div');
    addTaskSection.classList.add('add-task-section');

    const addTaskButton = document.createElement('button');
    addTaskButton.setAttribute('id', 'add-task-button');
    addTaskButton.textContent = 'Add Task';
    addTaskButton.addEventListener('click', renderAddTaskForm);

    projectButtons.appendChild(projectDelete);

    projectHeader.appendChild(projectName);
    projectHeader.appendChild(projectButtons);

    projectDetails.appendChild(projectHeader);
    projectDetails.appendChild(projectDescription);

    projectDetails.appendChild(projectDueDate);
    if (projectDueDate.textContent = 'Due Date: ') {
        projectDetails.removeChild(projectDueDate)
    }

    addTaskSection.appendChild(addTaskButton);
    
    projectDetails.appendChild(taskList);
    projectDetails.appendChild(addTaskSection)
    
    layoutSection.appendChild(projectDetails);

    handleProjectDetailsClick();
}

export function renderNoProjectSelected() {
    console.log('renderNoProjectSelected called');
    const layout = document.getElementById('layout-section');
    layout.textContent = '';

    const noProjectDisplayDiv = document.createElement('div');
    noProjectDisplayDiv.classList.add('no-project-display');
    layout.appendChild(noProjectDisplayDiv);

    const noProjectDisplay = document.createElement('h2');
    noProjectDisplay.textContent = 'No Project Selected';
    noProjectDisplayDiv.appendChild(noProjectDisplay);
}

export function renderAllTasks() {
    console.log('renderAllTasks called');
    //
    const layoutSection = document.getElementById('layout-section');
    layoutSection.textContent = '';

    if (taskLibrary.length === 0) {
        const noTasksDiv = document.createElement('div');
        noTasksDiv.classList.add('no-tasks-display');

        const noTasks = document.createElement('h2');
        noTasks.textContent = 'There are no tasks';

        noTasksDiv.appendChild(noTasks);
        layoutSection.appendChild(noTasksDiv);

    } else {
        const allTasksSection = document.createElement('div');
        allTasksSection.classList.add('all-tasks-section');

        const allTasksHeader = document.createElement('div');
        allTasksHeader.classList.add('all-tasks-header');

        const allTasksName = document.createElement('h2');
        allTasksName.classList.add('all-tasks-name');
        allTasksName.textContent = 'All Tasks';
        
        const taskList = document.createElement('ul');
        taskList.classList.add('project-details-task-list');

        const allTasksButtons = document.createElement('div');
        allTasksButtons.classList.add('all-tasks-buttons');

        const allTasksDelete = document.createElement('button');
        allTasksDelete.setAttribute('type', 'button');
        allTasksDelete.classList.add('all-tasks-delete');
        allTasksDelete.textContent = 'DELETE';

        taskLibrary.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.classList.add('project-details-task-item');
            taskItem.setAttribute('data-task-id', task.id);

            const taskItemInfo = document.createElement('div');
            taskItemInfo.classList.add('task-item-info');

            const taskItemButtons = document.createElement('div');
            taskItemButtons.classList.add('task-item-buttons');

            const taskItemName = document.createElement('div');
            taskItemName.textContent = task.name;
            taskItemName.classList.add('task-item-name');

            const taskItemPriority = document.createElement('div');
            taskItemPriority.textContent = task.priority;
            taskItemPriority.classList.add('task-item-priority');

            const taskItemDueDate = document.createElement('div');
            taskItemDueDate.textContent = task.dueDate;
            taskItemDueDate.classList.add('task-item-duedate');

            const taskItemDelete = document.createElement('button');
            taskItemDelete.setAttribute('type', 'button');
            taskItemDelete.setAttribute('class', 'task-item-delete');
            taskItemDelete.textContent = 'DELETE';

            taskItemInfo.appendChild(taskItemName);
            taskItemInfo.appendChild(taskItemDueDate);
            taskItemInfo.appendChild(taskItemPriority);

            taskItemButtons.appendChild(taskItemDelete);

            taskItem.appendChild(taskItemInfo);
            taskItem.appendChild(taskItemButtons);

            taskList.appendChild(taskItem);
        });
        allTasksButtons.appendChild(allTasksDelete);

        allTasksHeader.appendChild(allTasksName);
        allTasksHeader.appendChild(allTasksButtons);

        allTasksSection.appendChild(allTasksHeader);
        allTasksSection.appendChild(taskList);

        layoutSection.appendChild(allTasksSection);

        handleAllTasksDetailsClick();
    }
}

export function initialRender() {
    console.log('initialRender called:');
    handleAllTasksClick();
    handleTodayClick();
    handleThisWeekClick();
    handleHighPriorityClick();
    renderProjectListDisplay();
    handleCreateProjectClick();
    renderNoProjectSelected();
}