export const taskLibrary = [];

export function generateUniqueId() {
    return '_' + Math.random().toString(36).substring(2, 9);
}

export function findTaskById(taskId) {
    return taskLibrary.find(t => t.id === taskId)
}

export function Task(name, dueDate, priority) {
    this.id = generateUniqueId();
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