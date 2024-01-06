import { renderProjectDetails, renderAllTasks, renderCreateProjectForm, renderNoProjectSelected, renderLayout } from "./domManipulation";
import { Project, projectLibrary, findProjectById, removeFromProjectLibrary } from "./projects";
import { Task, taskLibrary, findTaskById, removeFromTaskLibrary } from "./tasks";
import { saveToLocalStorage } from "./localStorage";

export function handleCreateProject() {
    console.log('handleCreateProject called');
    const projectName = document.getElementById('pname').value;
    const projectDescription = document.getElementById('pdescription').value;
    const projectDueDate = document.getElementById('pduedate').value;

    const newProject = new Project(projectName, projectDescription, projectDueDate);
    if (projectName === '') {
        alert('Project Name cannot be blank');
        return;
    } 

    newProject.addToProjectLibrary();
    renderProjectDetails(newProject);
    renderLayout();
}

export function handleDeleteProject() {
    console.log('handleDeleteProject called');

    const projectDetailsElement = document.querySelector('.project-details-name');
    if (projectDetailsElement) {
        const projectId = document.querySelector('.project-details-name').dataset.projectId;
        const projectIndex = projectLibrary.findIndex(proj => proj.id === projectId);
        const tasksToDelete = projectLibrary[projectIndex].tasks;

        if (tasksToDelete.length > 0) {
            tasksToDelete.forEach(task => {
                const taskId = task.id;
                removeFromTaskLibrary(taskId);
            });
        }
        removeFromProjectLibrary(projectId);
        renderNoProjectSelected();
        renderLayout();     
    }   
}

export function handleAddTaskToProject() {
    console.log('handleAddTaskToProject called');
    const taskName = document.getElementById('tname').value;
    const taskDueDate = document.getElementById('tduedate').value;
    const taskPriority = document.getElementById('tpriority').value;

    const newTask = new Task(taskName, taskDueDate, taskPriority); 
    newTask.addToTaskLibrary();
    
    const projectId = document.querySelector('.project-details-name').dataset.projectId;
    const project = findProjectById(projectId);
    project.tasks.push(newTask);

    saveToLocalStorage('projectLibrary', projectLibrary);
    renderProjectDetails(project);
}

export function handleRemoveTaskFromProject(taskId) {
    console.log('handleRemoveTaskFromProject called');

    const task = findTaskById(taskId); 
    console.log(task);
    const projectContainingTask = projectLibrary.find(proj => proj.tasks.some(t => t.id === taskId));
    const projectTaskIndex = projectContainingTask.tasks.findIndex(t => t.id === taskId);
    projectContainingTask.tasks.splice(projectTaskIndex, 1);

    saveToLocalStorage('projectLibrary', projectLibrary);
    removeFromTaskLibrary(taskId);

    const projectHeader = document.querySelector('.project-details-header');
    const allTasksHeader = document.querySelector('.all-tasks-header');
    if (projectHeader) {
        renderProjectDetails(projectContainingTask);
    } else if (allTasksHeader) {
        renderAllTasks();
    } 
}

export function handleDeleteAllTasks() {
    console.log('handleDeleteAllTasks called');
    // logic for deleting all tasks here
}

export function handleProjectListItemClick(event) {
    console.log('handleProjectListItemClick called');
    //
    const clickedElement = event.target.closest('.project-list-item');
    const projectId = clickedElement.dataset.projectId;
    const project = findProjectById(projectId);
    renderProjectDetails(project);
}

export function assignHandler() {
    // STATIC BUTTONS
    const allTasksButton = document.getElementById('all-tasks-button');
        allTasksButton.addEventListener('click', renderAllTasks);
  
    const createProjectButton = document.getElementById('create-project-button');
        createProjectButton.addEventListener('click', renderCreateProjectForm);

    const projectList = document.getElementById('project-list');
        projectList.addEventListener('click', handleProjectListItemClick);

    // DYNAMICALLY BUTTONS 
    // PROJECT FORM
    const projectForm = document.getElementById('create-project-form');
    if (projectForm) {
        console.log('project form buttons assgined');
        const submitButton = document.getElementById('create-project-submit-button');
        submitButton.addEventListener('click', handleCreateProject);
        const cancelButton = document.getElementById('create-project-cancel-button');
        cancelButton.addEventListener('click', () => {
            const layoutSection = document.getElementById('layout-section');
            layoutSection.removeChild(projectForm);
        })
    };

    // TASK FORM
    const taskForm = document.getElementById('create-task-form');
    const taskSection = document.querySelector('.add-task-section');
    const addTaskButton = document.getElementById('add-task-button');
    if (taskForm) {
        console.log('task form buttons assigned');
        const submitButton = document.getElementById('create-task-submit-button');
        submitButton.addEventListener('click', () => {
            const taskName = document.getElementById('tname').value;
            if (taskName !== '') {
                handleAddTaskToProject();
                taskSection.removeChild(taskForm);
                addTaskButton.style.display = '';
            } else {
                alert('Task Name cannot be empty');
                return;
            }    
        })
        const cancelButton = document.getElementById('create-task-cancel-button');
        cancelButton.addEventListener('click', () => {
            taskSection.removeChild(taskForm);
            addTaskButton.style.display = '';
        })
    };

    // ALL TASKS DISPLAY
    const allTasksSection = document.querySelector('.all-tasks-section');
    if (allTasksSection) {
        console.log('all tasks header buttons assigned');
        const allTasksDelete = document.querySelector('.all-tasks-delete');
        allTasksDelete.addEventListener('click', () => {
            handleDeleteAllTasks();
        })
    }

    // PROJECT DELETE
    const projectDetails = document.querySelector('.project-details-name');
    if (projectDetails) {
        console.log('project header buttons assigned');
        const projectDelete = document.querySelector('.project-delete-button');
        projectDelete.addEventListener('click', () => {
            handleDeleteProject();
        })
    }

    // TASK DELETE
    const taskList = document.querySelector('.project-details-task-list');
    if (taskList && taskList.children.length > 0) {
        console.log('task buttons assigned');
        const deleteButtons = document.querySelectorAll('.project-details-task-item .task-item-delete');
        deleteButtons.forEach(button => {
            button.addEventListener('click', () => {
                const taskItem = button.closest('.project-details-task-item');
                const taskId = taskItem.dataset.taskId;
                handleRemoveTaskFromProject(taskId);
                removeFromTaskLibrary(taskId);
            })
        })
    }
}