export const taskLibrary = [];

export function Task(name, dueDate, priority) {
    this.name = name,
    this.dueDate = dueDate,
    this.priority = priority

    this.addToTaskLibrary = function() {
        taskLibrary.push(this);
    }

    this.removeFromTaskLibrary = function() {
        const index = taskLibrary.indexOf(this);

        if (index !== -1) {
            taskLibrary.splice(index, 1);
        } else {
            console.error('Task not found in taskLibrary');
        }
    }

    this.complete = false;

    this.markAsComplete = function() {
        this.complete = true;
    }

    this.markAsIncomplete = function() {
        this.complete = false;
    }
}

