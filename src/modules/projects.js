export class Project {
    constructor(name, description, dueDate) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.tasks = [];
    }

    static addProjectToLibrary(project, projectLibrary) {
        projectLibrary.push(project);
    }
}
