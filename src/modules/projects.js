import { saveToLocalStorage, getFromLocalStorage  } from "./localStorage";

export const projectLibrary = getFromLocalStorage('projectLibrary') || [];

export function generateUniqueId() {
    console.log('generateUniqueId called');
    return '_' + Math.random().toString(36).substring(2, 9);
}

export function findProjectById(projectId) {
    console.log('findProjectById called');
    return projectLibrary.find(proj => proj.id === projectId);
}

export function removeFromProjectLibrary(projectId) {
    console.log('removeFromProjectLibrary called');
    const projectIndex = projectLibrary.findIndex(proj => proj.id === projectId);
    projectLibrary.splice(projectIndex, 1);
    saveToLocalStorage('projectLibrary', projectLibrary);
}

export function Project(name, description, dueDate) {
    this.id = generateUniqueId();
    this.name = name,
    this.description = description,
    this.dueDate = dueDate,
    this.tasks = []
    
    this.addToProjectLibrary = function() {
        console.log('addToProjectLibrary called');
        projectLibrary.push(this);
        saveToLocalStorage('projectLibrary', projectLibrary);
    }

    this.complete = false;

    this.markAsComplete = function() {
        console.log('markAsComplete project called');
        this.complete = true;
    };

    this.markAsIncomplete = function() {
        console.log('markAsComplete project called');
        this.complete = false;
    }
}