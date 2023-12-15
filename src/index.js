// import { Project } from "./modules/projects";
// import { Task, addTaskToProject } from "./modules/tasks";

// console.log('creating projects');
// const projectOne = new Project('Project One', 'There are no tasks', 'December 1');
// const projectTwo = new Project('Project Two', 'Second project', 'December 30');

// const projectLibrary = [];

// Project.addProjectToLibrary(projectOne, projectLibrary);
// Project.addProjectToLibrary(projectTwo, projectLibrary);

// const taskOne = new Task('Task One', 'December 20', 'High');

// console.log('Adding taskOne to projectOne');
// addTaskToProject(taskOne, projectOne);
// console.log(projectOne);

// console.log('Showing updated Project Library');
// console.log(projectLibrary);

// const taskTwo = new Task('Task Two', 'December 21', 'Low', projectTwo);

// console.log(projectLibrary);

import { createProject, projectLibrary } from './modules/projects';
import { createTask, taskLibrary } from "./modules/tasks";

const myProject = createProject("My Project", "Description", "2023-01-01");
const myTask = createTask("Task One", "2023-01-15", "High");

myProject.editProject("Updated Project", "New Description", "2023-02-01");
myTask.addTaskToProject(myProject);

console.log(projectLibrary);
console.log(taskLibrary);