import { renderProjectDetails, renderAllTasks, renderNoProjectSelected, renderProjectListDisplay, renderHighPriorityTasks, renderTodayTasks, renderThisWeekTasks } from "./domManipulation";
import { Project, projectLibrary, findProjectById, removeFromProjectLibrary } from "./projects";
import { Task, findTaskById, removeFromTaskLibrary, taskLibrary } from "./tasks";
import { saveToLocalStorage } from "./localStorage";
import { format, addDays, isToday, isThisWeek } from 'date-fns';

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
    const projectDueDateInput = document.getElementById('pduedate');
    const projectDueDateValue = projectDueDateInput.value;

    let projectDueDateFormatted = '';
    if (projectDueDateValue.trim() !== '') {
        const projectDueDate = new Date(projectDueDateValue);
        projectDueDateFormatted = format(addDays(projectDueDate, 1), 'MM-dd-yyyy');
    }

    const newProject = new Project(projectName, projectDescription, projectDueDateFormatted);

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
    const taskDueDateInput = document.getElementById('tduedate');
    const taskDueDateValue = taskDueDateInput.value;

    let taskDueDateFormatted = '';
    if (taskDueDateValue.trim() !== '') {
        const taskDueDate = new Date(taskDueDateValue);
        taskDueDateFormatted = format(addDays(taskDueDate, 1), 'MM-dd-yyyy');
    }

    const taskPriority = document.getElementById('tpriority').value;

    const newTask = new Task(taskName, taskDueDateFormatted, taskPriority); 
    newTask.addToTaskLibrary();
    
    const projectId = document.querySelector('.project-details-name').dataset.projectId;
    const project = findProjectById(projectId);
    project.tasks.push(newTask);

    saveToLocalStorage('projectLibrary', projectLibrary);
    renderProjectDetails(project);
}


export function removeTaskFromProject(taskId) {
    console.log('removeTaskFromProject called');

    const projectContainingTask = projectLibrary.find(proj => proj.tasks.some(t => t.id === taskId));
    const projectTaskIndex = projectContainingTask.tasks.findIndex(t => t.id === taskId);
    projectContainingTask.tasks.splice(projectTaskIndex, 1);

    saveToLocalStorage('projectLibrary', projectLibrary);
    removeFromTaskLibrary(taskId);

    const projectHeader = document.querySelector('.project-details-header');
    const allTasksHeader = document.querySelector('.all-tasks-header');
    const highPriorityHeader = document.querySelector('.high-priority-header');
    const todayHeader = document.querySelector('.today-tasks-header');
    const thisWeekHeader = document.querySelector('.this-week-tasks-header');

    if (projectHeader) {
        renderProjectDetails(projectContainingTask);
    } else if (allTasksHeader) {
        renderAllTasks();
    } else if (highPriorityHeader) {
        renderHighPriorityTasks();
    } else if (todayHeader) {
        renderTodayTasks();
    } else if (thisWeekHeader) {
        renderThisWeekTasks();
    } else {
        console.error('couldnt find the appropriate header');
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

export function deleteTodayTasks() {
    console.log('deleteTodayTasks called');

    const todayTasks = taskLibrary.filter(task => {
        return isToday(new Date(task.dueDate));
    });

    const todayIdArray = todayTasks.map(task => task.id)
    todayIdArray.forEach(task => removeFromTaskLibrary(task));

    projectLibrary.forEach(project => {
        project.tasks = project.tasks.filter(task => !todayIdArray.includes(task.id))
    });

    saveToLocalStorage('projectLibrary', projectLibrary);
    renderTodayTasks();
}

export function deleteThisWeekTasks() {
    console.log('deleteThisWeekTasks called');

    const thisWeekTasks = taskLibrary.filter(task => {
        return isThisWeek(new Date(task.dueDate));
    });

    const thisWeekIdArray = thisWeekTasks.map(task => task.id);
    thisWeekIdArray.forEach(task => removeFromTaskLibrary(task));

    projectLibrary.forEach(project => {
        project.tasks = project.tasks.filter(task => !thisWeekIdArray.includes(task.id))
    });

    saveToLocalStorage('projectLibrary', projectLibrary);
    renderThisWeekTasks();
}

export function deleteHighPriorityTasks() {
    console.log('deleteHighPriorityTasks called');

    const highPriorityTasks = taskLibrary.filter(task => task.priority === 'High');

    const highPriorityIdArray = highPriorityTasks.map(task => task.id);
    highPriorityIdArray.forEach(task => removeFromTaskLibrary(task));

    projectLibrary.forEach(project => {
        project.tasks = project.tasks.filter(task => !highPriorityIdArray.includes(task.id))
    });

    saveToLocalStorage('projectLibrary', projectLibrary);
    renderHighPriorityTasks();
}
