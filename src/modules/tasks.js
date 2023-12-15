// export class Task {
//     constructor(name, dueDate, priority, project = null) {
//         this.name = name;
//         this.dueDate = dueDate;
//         this.priority = priority;
//         this.project = project;

//         if (project) {
//             project.tasks.push(this);
//         }
//     }
// }
 
// export function addTaskToProject(task, project) {
//     project.tasks.push(task);
// }

const taskLibrary = [];

function createTask(name, dueDate, priority) {
    function addTaskToProject(project) {
        project.tasks.push(task);
    }

    const task = {
        name,
        dueDate,
        priority,
        addTaskToProject,
    };

    taskLibrary.push(task);
    return task;
}

export { createTask, taskLibrary };