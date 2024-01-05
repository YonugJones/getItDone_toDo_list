import { renderProjectDetails, renderAllTasks, renderCreateProjectForm, renderLayout } from "./domManipulation";
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
            saveToLocalStorage('taskLibrary', taskLibrary);
        });
    }

    removeFromProjectLibrary(projectId);
    saveToLocalStorage('projectLibrary', projectLibrary);

    // TO DO: decouple below section and add to renderProjectDetails function
    const layout = document.getElementById('layout-section');
    layout.textContent = '';

    const noProjectDisplayDiv = document.createElement('div');
    noProjectDisplayDiv.classList.add('no-project-display');
    layout.appendChild(noProjectDisplayDiv);

    const noProjectDisplay = document.createElement('h2');
    noProjectDisplay.textContent = 'No Project Selected';
    noProjectDisplayDiv.appendChild(noProjectDisplay);
    
    renderLayout();     
    } else {
        console.error('project Details element not found');
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
    const project = projectLibrary.find(proj => proj.id === projectId);
    project.tasks.push(newTask);

    saveToLocalStorage('projectLibrary', projectLibrary);
    renderProjectDetails(project);
}

export function handleDeleteTask() {
    console.log('handleDeleteTask called');


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
    console.log('assingHandler called');

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

    // ALL TASKS DISPLAY
    const allTasksSection = document.querySelector('.all-tasks-section');
    if (allTasksSection) {
        const allTasksDelete = document.querySelector('.all-tasks-delete');
        allTasksDelete.addEventListener('click', () => {
            handleDeleteAllTasks();
        })
    }

    // PROJECT DELETE
    const projectDetails = document.querySelector('.project-details-name');
    if (projectDetails) {
        const projectDelete = document.querySelector('.project-delete-button');
        projectDelete.addEventListener('click', () => {
            handleDeleteProject();
        })
    }

    // TASK DELETE
    const taskList = document.querySelector('.project-details-task-list');
    if (taskList && taskList.children.length > 0) {
        const deleteButtons = document.querySelectorAll('.project-details-task-item .task-item-delete');
        deleteButtons.forEach(button => {
            button.addEventListener('click', () => {
                const taskItem = button.closest('.project-details-task-item');
                const taskId = taskItem.dataset.taskId;
                console.log('Task ID:', taskId);
            })
        })
    }




    // TODO: DECOUPLE PROJECT DELTE FUNCTION WITH PROJECT DELETE BUTTON assignHandler
    // const projectHeader = document.querySelector('.project-details-header');
    // if (projectHeader) {
    //     const projectDeleteButton = document.querySelector('.project-delete-button');
    //     projectDeleteButton.addEventListener('click', () => {
    //         const projectName = document.querySelector('.project-details-name').textContent;

    //         const projectIndex = projectLibrary.findIndex(proj => proj.name === projectName);
            
    //         if (projectIndex !== -1) {
    //             const tasksToDelete = projectLibrary[projectIndex].tasks;
    //             tasksToDelete.forEach(task => {
    //                 const taskIndex = taskLibrary.findIndex(t => t.id === task.id);

    //                 if (taskIndex !== -1) {
    //                     taskLibrary.splice(taskIndex, 1);
    //                 }
    //             });

    //             projectLibrary.splice(projectIndex, 1);
                
    //             renderProjectListDisplay();
    //             const layout = document.getElementById('layout-section');
    //             layout.textContent = '';

    //             const noProjectDisplayDiv = document.createElement('div');
    //             noProjectDisplayDiv.classList.add('no-project-display');
    //             layout.appendChild(noProjectDisplayDiv);

    //             const noProjectDisplay = document.createElement('h2');
    //             noProjectDisplay.textContent = 'No Project Selected';
    //             noProjectDisplayDiv.appendChild(noProjectDisplay);
    //         } else {
    //             console.error('Project Not Found');
    //         }

    //         saveToLocalStorage('taskLibrary', taskLibrary);
    //         saveToLocalStorage('projectLibrary', projectLibrary);
    //     })
    // }


    const projectTaskListbelow = 0;


    // PROJECT TASKS LIST
    // const taskList = document.querySelector('.project-details-task-list');
    // if (taskList) {
    //     taskList.addEventListener('click', (event) => {
    //         const deleteButton = event.target.closest('.task-item-delete');
    //         if (deleteButton) {
    //             const taskItem = deleteButton.closest('.project-details-task-item');   
    //             const taskId = taskItem.dataset.taskId;
    //             const task = taskLibrary.find(t => t.id === taskId);
    //             const projectContainingTask = projectLibrary.find(proj => proj.tasks.some(t => t.id === taskId));
    //             if (task && projectContainingTask) {
    //                 const projectTaskIndex = projectContainingTask.tasks.findIndex(t => t.id === taskId);
    //                 if (projectTaskIndex !== -1) {
    //                     projectContainingTask.tasks.splice(projectTaskIndex, 1);
    //                     const taskIndex = taskLibrary.indexOf(task);

    //                     if (taskIndex !== -1) {
    //                         console.log(task);
    //                         // issue below probably because the task itself does not have access 
    //                         // to the methods from the task constructor it was created by
    //                         //
    //                         task.removeFromTaskLibrary();
    //                         //
    //                     }

    //                     if (document.querySelector('.project-details-name')) {
    //                         renderProjectDetails(projectContainingTask);
    //                     } else {
    //                         renderAllTasks();
    //                     }
    //                 }
    //             } else {
    //                 console.error('Task and/or Project not found');
    //             }   
    //         }
    //         saveToLocalStorage('projectLibrary', projectLibrary);
    //     });
    // }



}