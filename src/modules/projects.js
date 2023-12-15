// export class Project {
//     constructor(name, description, dueDate) {
//         this.name = name;
//         this.description = description;
//         this.dueDate = dueDate;
//         this.tasks = [];
//     }

//     static addProjectToLibrary(project, projectLibrary) {
//         projectLibrary.push(project);
//     }

//     editProject(newName, newDescription, newDueDate) {
//         this.name = newName;
//         this.description = newDescription;
//         this.dueDate = newDueDate;
//     }
// }

const projectLibrary = [];

function createProject(name, description, dueDate) {
    const tasks = [];

    function editProject(newName, newDescription, newDueDate) {
        name = newName;
        description = newDescription;
        dueDate = newDueDate;
    }

    function getTasks() {
        return tasks.slice(); 
    }

    const project = {
        name,
        description,
        dueDate,
        tasks,
        editProject,
        getTasks,
    };

    projectLibrary.push(project);
    return project;
}

export { createProject, projectLibrary };