import { Project } from "./modules/projects";
import { Task, addTaskToProject } from "./modules/tasks";

const projectOne = new Project('Project One', 'There are no tasks', 'December 1');

const projectLibrary = [];

console.log('Project One does not yet have tasks');
Project.addProjectToLibrary(projectOne, projectLibrary);
console.log(projectOne);

const taskOne = new Task('Task One', 'December 20', 'High');

console.log('Adding taskOne to projectOne');
addTaskToProject(taskOne, projectOne);
console.log(projectOne);

console.log('Showing updated Project Library');
console.log(projectLibrary);


