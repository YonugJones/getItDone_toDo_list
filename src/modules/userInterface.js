import { renderProjectLibrary, renderTaskLibrary, renderProjectListDisplay, renderProjectDetails, renderAllTasks, renderCreateProjectForm } from "./domManipulation";
import { Project, projectLibrary } from "./projects";
import { Task, taskLibrary } from "./tasks";

export function handleCreateProject() {
    const projectName = document.getElementById('pname').value;
    const projectDescription = document.getElementById('pdescription').value;
    const projectDueDate = document.getElementById('pduedate').value;

    const newProject = new Project(projectName, projectDescription, projectDueDate);
    const projectExists = projectLibrary.some(proj => proj.name === projectName)

    if (projectName === '') {
        alert('Project Name cannot be blank');
        return;
    } else if (projectExists) {
        alert('Project name already taken. Please choose a new one.');
        return;
    }
    newProject.addToProjectLibrary();
    renderProjectLibrary();
    renderProjectListDisplay();
    renderProjectDetails(newProject);
}

export function handleDeleteProject() {
    const projectName = prompt('Enter project name to delete:')
    const project = projectLibrary.find(proj => proj.name === projectName);

    if (project) {
        console.log(`Removing Project: ${project.name} from projectLibrary`);
        project.removeFromProjectLibrary();
        renderProjectLibrary();
        renderProjectListDisplay();
    } else {
        alert('Project not found in projectLibrary');
        return;
    }
}

export function handleProjectListItemClick(event) {
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

export function handleCreateTask() {
    const taskName = document.getElementById('tname').value;
    const taskDueDate = document.getElementById('tduedate').value;
    const taskPriority = document.getElementById('tpriority').value;

    const newTask = new Task(taskName, taskDueDate, taskPriority);
    newTask.addToTaskLibrary();
    renderTaskLibrary();
}

export function handleDeleteTask() {
    const taskName = prompt('Enter task name to delte');
    const task = taskLibrary.find(t => t.name === taskName);

    if (task) {
        console.log(`Removing task ${task.name} from taskLibrary`);
        task.removeFromTaskLibrary();
        renderTaskLibrary();
    } else {
        console.error('Task not found in taskLibrary');
        renderTaskLibrary();
    }
}

export function handleAddTaskToProject() {
    const taskName = document.getElementById('tname').value;
    const task = taskLibrary.find(t => t.name === taskName);
    const projectName = document.querySelector('.project-details-name').textContent;
    const project = projectLibrary.find(proj => proj.name === projectName);
    project.tasks.push(task);
    renderProjectLibrary();
    renderProjectDetails(project);
}

export function handleRemoveTaskFromProject() {
    const taskName = prompt('Enter task name to move');
    const task = taskLibrary.find(t => t.name === taskName); 

    const projectName = prompt('Enter project to remove task from');
    const project = projectLibrary.find(proj => proj.name === projectName);

    if (task && project) {
        const index = project.tasks.indexOf(task);
        if (index !== -1) {
            console.log(`Removing Task: ${task.name} from Project: ${project.name}`)
            project.tasks.splice(index, 1);
            renderProjectLibrary();
            renderProjectDetails(project);
        }
    } else {
        console.error('Task and or Project not found');
    }
}

export function assignHandler() {
    const allTasksButton = document.getElementById('all-tasks-button');
    allTasksButton.addEventListener('click', renderAllTasks);

    const createProjectButton = document.getElementById('create-project-button');
    createProjectButton.addEventListener('click', renderCreateProjectForm);

    const deleteProjectButton = document.getElementById('delete-project-button');
    deleteProjectButton.addEventListener('click', handleDeleteProject);

    const projectList = document.getElementById('project-list');
    projectList.addEventListener('click', handleProjectListItemClick);


    // DYNAMICALLY CREATED BUTTONS PROJECT FORM
    const projectForm = document.getElementById('create-project-form');
    if (projectForm) {
        const submitButton = document.getElementById('create-project-submit-button');
        submitButton.addEventListener('click', handleCreateProject);
        const cancelButton = document.getElementById('create-project-cancel-button');
        cancelButton.addEventListener('click', () => {
            const layoutSection = document.getElementById('layout-section');
            layoutSection.removeChild(projectForm);
        })
    };

    // DYNAMICALLY CREATED BUTTONS TASK FORM
    const taskForm = document.getElementById('create-task-form');
    const taskSection = document.querySelector('.add-task-section');
    const addTaskButton = document.getElementById('add-task-button');
    if (taskForm) {
        const submitButton = document.getElementById('create-task-submit-button');
        submitButton.addEventListener('click', () => {
            const taskName = document.getElementById('tname').value;
            if (taskName !== '') {
                handleCreateTask();
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

    // DYNAMICALLY CREATED BUTTONS FOR TASK LIST
    const taskList = document.querySelector('.project-details-task-list');

    if (taskList) {
        taskList.addEventListener('click', (event) => {
            const deleteButton = event.target.closest('.task-item-delete');
            if (deleteButton) {
                const taskItem = deleteButton.closest('.project-details-task-item');
                const taskName = taskItem.querySelector('.task-item-name').textContent;

                const task = taskLibrary.find(t => t.name === taskName);

                const projectName = document.querySelector('.project-details-name').textContent;
                const project = projectLibrary.find(proj => proj.name === projectName);

                if (task && project) {
                    const index = project.tasks.indexOf(task);
                    if (index !== -1) {
                        project.tasks.splice(index, 1);
                        console.log(`Removed Task: ${task.name} from Project: ${project.name}`);
                        renderProjectLibrary();
                        renderProjectDetails(project);
                    }

                    const taskIndex = taskLibrary.indexOf(task);
                    if (taskIndex !== -1) {
                        task.removeFromTaskLibrary();
                        renderTaskLibrary();
                    }
                } else {
                    console.error('Task and/or Project not found');
                }
            }
        });
    }
}