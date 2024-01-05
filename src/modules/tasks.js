import { saveToLocalStorage, getFromLocalStorage  } from "./localStorage";

export const taskLibrary = getFromLocalStorage('taskLibrary') || [];

export function generateUniqueId() {
    console.log('generateUniqueId called');
    return '_' + Math.random().toString(36).substring(2, 9);
}

export function findTaskById(taskId) {
    console.log('findTaskById called');
    return taskLibrary.find(t => t.id === taskId)
}

export function removeFromTaskLibrary(taskId) {
    console.log('removeFromTaskLibrary called');
    const taskIndex = taskLibrary.findIndex(t => t.id === taskId);
    taskLibrary.splice(taskIndex, 1);
    saveToLocalStorage('taskLibrary', taskLibrary);
}

export function Task(name, dueDate, priority) {
    this.id = generateUniqueId();
    this.name = name,
    this.dueDate = dueDate,
    this.priority = priority

    this.addToTaskLibrary = function() {
        console.log('addToTaskLibrary called');

        taskLibrary.push(this);
        saveToLocalStorage('taskLibrary', taskLibrary);
    }

    this.complete = false;

    this.markAsComplete = function() {
        console.log('markAsComplete task called');
        this.complete = true;
    }

    this.markAsIncomplete = function() {
        console.log('markAsIncomplete task called');
        this.complete = false;
    }
}