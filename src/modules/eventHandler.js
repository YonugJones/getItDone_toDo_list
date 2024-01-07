import { renderAllTasks, renderCreateProjectForm, renderRemoveProjectForm } from "./domManipulation";
import { deleteProject, addTaskToProject, removeTaskFromProject, deleteAllTasks, createProject, projectListItemClick  } from './userInterface'
import { removeFromTaskLibrary } from "./tasks";


export function handleAllTasksClick() {
    console.log('handleAllTasksClick called');
    const allTasksButton = document.getElementById('all-tasks-button');
    allTasksButton.addEventListener('click', renderAllTasks);
}

export function handleTodayClick() {
    console.log('handleTodayClick called');
    const todayButton = document.getElementById('today-button');
    todayButton.addEventListener('click', () => {
        console.log('todayButton clicked');
    })
}

export function handleThisWeekClick() {
    console.log('handleThisWeekClick called');
    const thisWeekButton = document.getElementById('this-week-button');
    thisWeekButton.addEventListener('click', () => {
        console.log('thisWeekButon clicked');
    })
}

export function handleHighPriorityClick() {
    console.log('handleHighPriorityClick called');
    const highPriorityButton = document.getElementById('high-priority-button');
    highPriorityButton.addEventListener('click', () => {
        console.log('highPriorityButton clicked');
    })
}

export function handleProjectListItemClick() {
    console.log('handleProjectListItemClick called');
    const projectList = document.getElementById('project-list');
    projectList.addEventListener('click', projectListItemClick);
}

export function handleCreateProjectClick() {
    console.log('handleCreateProjectClick called');
    const createProjectButton = document.getElementById('create-project-button');
    createProjectButton.addEventListener('click', renderCreateProjectForm);
}

export function handleProjectFormClick() {
    console.log('handleProjectFormClick called');

    const submitButton = document.getElementById('create-project-submit-button');
    submitButton.addEventListener('click', createProject);

    const cancelButton = document.getElementById('create-project-cancel-button')
    cancelButton.addEventListener('click', renderRemoveProjectForm);
}

export function handleTaskFormClick() {
    console.log('handleTaskFormClick called');
    const taskForm = document.getElementById('create-task-form');
    const taskSection = document.querySelector('.add-task-section');
    const addTaskButton = document.getElementById('add-task-button');

    const projectDetailsHeader = document.querySelector('.project-details-header');
    const projectDetailsDescription = document.querySelector('.project-details-description');
    const projectDetailsTaskList = document.querySelector('.project-details-task-list');

    if (taskForm) {
        const submitButton = document.getElementById('create-task-submit-button');
        submitButton.addEventListener('click', () => {
            const taskName = document.getElementById('tname').value;
            if (taskName !== '') {
                addTaskToProject();
                taskSection.removeChild(taskForm);
                projectDetailsHeader.style.display = '';
                projectDetailsDescription.style.display = '';
                projectDetailsTaskList.style.display = '';
                addTaskButton.style.display = '';
            } else {
                alert('Task Name cannot be empty');
                return;
            }    
        })
        const cancelButton = document.getElementById('create-task-cancel-button');
        cancelButton.addEventListener('click', () => {
            taskSection.removeChild(taskForm);
            projectDetailsHeader.style.display = '';
                projectDetailsDescription.style.display = '';
                projectDetailsTaskList.style.display = '';
                addTaskButton.style.display = '';
        })
    };
}

export function handleAllTasksHeaderClick() {
    const allTasksSection = document.querySelector('.all-tasks-section');
    if (allTasksSection) {
        console.log('handleAllTasksHeaderClick called');
        const allTasksDelete = document.querySelector('.all-tasks-delete');
        allTasksDelete.addEventListener('click', () => {
            deleteAllTasks();
        })
    }
}

export function handleAllTasksDetailsClick() {
    handleAllTasksHeaderClick()
    handleTaskItemClick();
}

export function handleProjectDetailsClick() {
    handleProjectHeaderClick();
    handleTaskItemClick();
}

export function handleProjectHeaderClick() {
    console.log('handleProjectHeaderClick called');
    const projectDetails = document.querySelector('.project-details-name');
    if (projectDetails) {
        const projectDelete = document.querySelector('.project-delete-button');
        projectDelete.addEventListener('click', deleteProject);
    }
}

export function handleTaskItemClick() {
    const taskList = document.querySelector('.project-details-task-list');
    if (taskList && taskList.children.length > 0) {
        console.log('handleTaskItemClick called');
        const deleteButtons = document.querySelectorAll('.project-details-task-item .task-item-delete');
        deleteButtons.forEach(button => {
            button.addEventListener('click', () => {
                const taskItem = button.closest('.project-details-task-item');
                const taskId = taskItem.dataset.taskId;
                removeTaskFromProject(taskId);
                removeFromTaskLibrary(taskId);
            })
        })
    }
}