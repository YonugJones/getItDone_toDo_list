import { renderProjectDetails, renderAllTasks, renderNoProjectSelected, renderProjectListDisplay } from "./domManipulation";
import { Project, projectLibrary, findProjectById, removeFromProjectLibrary } from "./projects";
import { Task, findTaskById, removeFromTaskLibrary, taskLibrary } from "./tasks";
import { saveToLocalStorage } from "./localStorage";

export function projectListItemClick(event) {
    console.log('projectListItemClick called');
    //
    const clickedElement = event.target.closest('.project-list-item');
    const projectId = clickedElement.dataset.projectId;
    const project = findProjectById(projectId);
    renderProjectDetails(project);
}

export function createProject() {
    console.log('createProject called');
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
    renderProjectListDisplay();
}

export function deleteProject() {
    console.log('deleteProject called');

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
        renderProjectListDisplay();
        renderNoProjectSelected();   
    }   
}

export function addTaskToProject() {
    console.log('addTaskToProject called');
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

export function removeTaskFromProject(taskId) {
    console.log('removeTaskFromProject called');

    const task = findTaskById(taskId); 
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

export function deleteAllTasks() {
    console.log('deleteAllTasks called');
    
    const taskIdArray = taskLibrary.map(task => task.id)
    taskIdArray.forEach(task => removeFromTaskLibrary(task));

    projectLibrary.forEach(project => {
        project.tasks = project.tasks.filter(task => !taskIdArray.includes(task.id));
    });

    saveToLocalStorage('projectLibrary', projectLibrary);
    renderAllTasks();
}
