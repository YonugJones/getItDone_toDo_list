import { renderProjectLibrary, renderTaskLibrary } from "./domManipulation";
import { Project, projectLibrary } from "./projects";
import { Task, taskLibrary } from "./tasks";

export function handleAddProject() {
    const projectName = prompt('Enter project name:');
    const projectDescription = prompt('Enter project description;');
    const projectDueDate = prompt('Enter project due date:');

    const newProject = new Project(projectName, projectDescription, projectDueDate);
    newProject.addToProjectLibrary();
    renderProjectLibrary();
}

export function handleAddTask() {
    const taskName = prompt('Enter task name:');
    const taskDueDate = prompt('Enter task due date:');
    const taskPriority = prompt('Enter task priority:');

    const newTask = new Task(taskName, taskDueDate, taskPriority);
    newTask.addTaskToLibrary();
    renderTaskLibrary();
}

export function handleAddTaskToProject() {
    // logic to give user choice to move task to project
}

export function assignHandler() {
    const addProjectButton = document.getElementById('add-project-button');
    addProjectButton.addEventListener('click', handleAddProject);

    const addTaskButton = document.getElementById('add-task-button');
    addTaskButton.addEventListener('click', handleAddTask);

    const addTaskToProject = document.getElementById('add-task-to-project-button');
    addTaskToProject.addEventListener('click', handleAddTaskToProject);
}