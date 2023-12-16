import { projectLibrary } from "./projects";

export const taskLibrary = [];

export function Task(name, dueDate, priority) {
    this.name = name,
    this.dueDate = dueDate,
    this.priority = priority

    this.addTaskToLibrary = function() {
        taskLibrary.push(this);
    }

    this.addTaskToProject = function(project) {
        // code logic to push selected task to tasks array inside of selected project
    }
}

