import { renderProjectLibrary, renderTaskLibrary, renderProjectListDisplay, renderProjectDetails } from "./domManipulation";
import { Project, projectLibrary } from "./projects";
import { Task, taskLibrary } from "./tasks";

export function handleCreateProject() {
    const projectName = prompt('Enter project name:');
    const projectDescription = prompt('Enter project description;');
    const projectDueDate = prompt('Enter project due date:');

    const newProject = new Project(projectName, projectDescription, projectDueDate);
    newProject.addToProjectLibrary();
    renderProjectLibrary();
    renderProjectListDisplay();
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
        console.error('Project not found in projectLibrary');
        renderProjectLibrary();
        renderProjectListDisplay();
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
    const taskName = prompt('Enter task name:');
    const taskDueDate = prompt('Enter task due date:');
    const taskPriority = prompt('Enter task priority:');

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
    const taskName = prompt('Enter task name to move');
    const task = taskLibrary.find(t => t.name === taskName);

    const projectName = prompt('Enter project to move task into');
    const project = projectLibrary.find(proj => proj.name === projectName);

    if (task && project) {
        console.log(`Adding Task: ${task.name} into Project: ${project.name}`);
        project.tasks.push(task);
        renderProjectLibrary();
    } else {
        console.error('Task or Project not found');
        renderProjectLibrary();
    }
}

export function handleRemoveTaskFromProject() {
    const taskName = prompt('Enter task name to move');
    const task = taskLibrary.find(t => t.name === taskName); 

    const projectName = prompt('Enter project to remove task from');
    const project = projectLibrary.find(proj => proj.name === projectName);

    if (task && project) {
        console.log('Task and Project found');

        const index = project.tasks.indexOf(task);
        if (index !== -1) {
            console.log(`Removing Task: ${task.name} from Project: ${project.name}`)
            project.tasks.splice(index, 1);
            renderProjectLibrary();
        }
    } else {
        console.error('Task and or Project not found');
        renderProjectLibrary();
    }
}

export function assignHandler() {
    const createProjectButton = document.getElementById('create-project-button');
    createProjectButton.addEventListener('click', handleCreateProject);

    const deleteProjectButton = document.getElementById('delete-project-button');
    deleteProjectButton.addEventListener('click', handleDeleteProject);

    const createTaskButton = document.getElementById('create-task-button');
    createTaskButton.addEventListener('click', handleCreateTask);

    const deleteTaskButton = document.getElementById('delete-task-button');
    deleteTaskButton.addEventListener('click', handleDeleteTask);

    const addTaskToProjectButton = document.getElementById('add-task-to-project-button');
    addTaskToProjectButton.addEventListener('click', handleAddTaskToProject);

    const removeTaskFromProjectButton = document.getElementById('remove-task-from-project-button');
    removeTaskFromProjectButton.addEventListener('click', handleRemoveTaskFromProject);

    const projectList = document.getElementById('project-list');
    projectList.addEventListener('click', handleProjectListItemClick);
}