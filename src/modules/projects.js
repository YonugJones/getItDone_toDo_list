export const projectLibrary = [];

export function Project(name, description, dueDate) {
    this.name = name,
    this.description = description,
    this.dueDate = dueDate,
    this.tasks = []
    
    this.addToProjectLibrary = function() {
        projectLibrary.push(this);
    }

    this.removeFromProjectLibrary = function() {
        const index = projectLibrary.indexOf(this)
        
        if (index !== -1) {
            projectLibrary.splice(index, 1);
        } else {
            console.error('Project not found in projectLibrary')
        }
    }
}
