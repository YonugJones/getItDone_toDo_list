import { renderProjectListDisplay, renderProjectDetails, renderAllTasks, renderCreateProjectForm, renderLayout } from "./domManipulation";
import { Project, projectLibrary } from "./projects";
import { Task, findTaskById, taskLibrary } from "./tasks";

import { saveToLocalStorage } from "./localStorage";

export function handleCreateProject() {
    console.log('handleCreateProject called');
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
    renderProjectDetails(newProject);
    renderLayout();
    renderProjectListDisplay();
    assignHandler();
}

export function handleDeleteProject() {
    //
    console.log('handleDeleteProject called');
    //
    const projectName = prompt('Enter project name to delete:')
    const project = projectLibrary.find(proj => proj.name === projectName);

    if (project) {
        console.log(`Removing Project: ${project.name} from projectLibrary`);
        project.removeFromProjectLibrary();
        renderProjectListDisplay();
    } else {
        alert('Project not found in projectLibrary');
        return;
    }
}

export function handleProjectListItemClick(event) {
    //
    console.log('handleProjectListItemClick called');
    //
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

export function handleAddTaskToProject() {
    console.log('handleAddTaskToProject called');
    //
    const taskName = document.getElementById('tname').value;
    const taskDueDate = document.getElementById('tduedate').value;
    const taskPriority = document.getElementById('tpriority').value;

    const newTask = new Task(taskName, taskDueDate, taskPriority); 
    const taskId = newTask.id;

    newTask.addToTaskLibrary(); // taskLibrary is saved
    
    const projectName = document.querySelector('.project-details-name').textContent;
    const project = projectLibrary.find(proj => proj.name === projectName);

    if (project) {
        const task = findTaskById(taskId)

        if (task) {
            project.tasks.push(task);
            renderProjectDetails(project);
            saveToLocalStorage('projectLibrary', projectLibrary);
        } else {
            console.error(`Task with ID ${taskId} not found`);
        }

    } else {
        console.error(`Project with name ${projectName} not found in projectLibrary`);
    }
}

export function assignHandler() {
    //
    console.log('assingHandler called');
    //

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


    // TASK LIST
    const taskList = document.querySelector('.project-details-task-list');
    if (taskList) {
        taskList.addEventListener('click', (event) => {
            const deleteButton = event.target.closest('.task-item-delete');
            if (deleteButton) {
                const taskItem = deleteButton.closest('.project-details-task-item');   
                const taskId = taskItem.dataset.taskId;
                const task = taskLibrary.find(t => t.id === taskId);
                const projectContainingTask = projectLibrary.find(proj => proj.tasks.some(t => t.id === taskId));
                if (task && projectContainingTask) {
                    const projectTaskIndex = projectContainingTask.tasks.findIndex(t => t.id === taskId);
                    if (projectTaskIndex !== -1) {
                        projectContainingTask.tasks.splice(projectTaskIndex, 1);
                        saveToLocalStorage('projectLibrary', projectLibrary);
                        const taskIndex = taskLibrary.indexOf(task);

                        if (taskIndex !== -1) {
                            task.removeFromTaskLibrary();
                        }

                        if (document.querySelector('.project-details-name')) {
                            renderProjectDetails(projectContainingTask);
                        } else {
                            renderAllTasks();
                        }
                    }
                } else {
                    console.error('Task and/or Project not found');
                }   
            }
        });
    }

    // Project Header delete
    const projectHeader = document.querySelector('.project-details-header');
    if (projectHeader) {
        const projectDeleteButton = document.querySelector('.project-delete-button');
        projectDeleteButton.addEventListener('click', () => {
            const projectName = document.querySelector('.project-details-name').textContent;
            const projectIndex = projectLibrary.findIndex(proj => proj.name === projectName);
            if (projectIndex !== -1) {
                const tasksToDelete = projectLibrary[projectIndex].tasks;
                tasksToDelete.forEach(task => {
                    const taskIndex = taskLibrary.findIndex(t => t.id === task.id);
                    console.log(taskIndex);
                    if (taskIndex !== -1) {
                        taskLibrary.splice(taskIndex, 1);
                    }
                });

                projectLibrary.splice(projectIndex, 1);
                saveToLocalStorage('projectLibrary', projectLibrary);
                
                renderProjectListDisplay();
                const layout = document.getElementById('layout-section');
                layout.textContent = '';

                const noProjectDisplayDiv = document.createElement('div');
                noProjectDisplayDiv.classList.add('no-project-display');
                layout.appendChild(noProjectDisplayDiv);

                const noProjectDisplay = document.createElement('h2');
                noProjectDisplay.textContent = 'No Project Selected';
                noProjectDisplayDiv.appendChild(noProjectDisplay);
            } else {
                console.error('Project Not Found');
            }
        })
    }
}