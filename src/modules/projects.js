export const projectLibrary = [];

export function Project(name, description, dueDate) {
    this.name = name,
    this.description = description,
    this.dueDate = dueDate,
    this.tasks = []
    
    this.addToProjectLibrary = function() {
        projectLibrary.push(this);
    }
}
