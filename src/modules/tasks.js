import { saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage  } from "./localStorage";

export const taskLibrary = getFromLocalStorage('taskLibrary') || [];

export function generateUniqueId() {
    console.log('generateUniqueId called');
    //
    return '_' + Math.random().toString(36).substring(2, 9);
}

export function findTaskById(taskId) {
    console.log('findByTask called');
    //
    return taskLibrary.find(t => t.id === taskId)
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

    this.removeFromTaskLibrary = function() {
        console.log('removeFromTaskLibrary called');
        //
        const index = taskLibrary.indexOf(this);
        if (index !== -1) {
            taskLibrary.splice(index, 1);
            saveToLocalStorage('taskLibrary', taskLibrary);
        } else {
            console.error('Task not found in taskLibrary');
        }
    }

    this.complete = false;

    this.markAsComplete = function() {
        console.log('markAsComplete task called');
        //
        this.complete = true;
    }

    this.markAsIncomplete = function() {
        console.log('markAsIncomplete task called');
        //
        this.complete = false;
    }
}