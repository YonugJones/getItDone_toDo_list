import { saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage  } from "./localStorage";

export const projectLibrary = getFromLocalStorage('projectLibrary') || [];

export function Project(name, description, dueDate) {
    this.name = name,
    this.description = description,
    this.dueDate = dueDate,
    this.tasks = []
    
    this.addToProjectLibrary = function() {
        console.log('addToProjectLibrary called');
        //
        projectLibrary.push(this);
        saveToLocalStorage('projectLibrary', projectLibrary);
    }

    this.removeFromProjectLibrary = function() {
        console.log('removeFromProjectLibrary called');
        //
        const index = projectLibrary.indexOf(this)
        
        if (index !== -1) {
            projectLibrary.splice(index, 1);
            saveToLocalStorage('projectLibrary', projectLibrary);
        } else {
            console.error('Project not found in projectLibrary')
        }
    }

    this.complete = false;

    this.markAsComplete = function() {
        console.log('markAsComplete project called');
        //
        this.complete = true;
    };

    this.markAsIncomplete = function() {
        console.log('markAsComplete project called');
        //
        this.complete = false;
    }
}
