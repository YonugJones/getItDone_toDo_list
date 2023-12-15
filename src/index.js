import { Project } from "./modules/projects";

console.log('Creating Project One');
const projectOne = new Project('Project One', 'This is the first project', 'December 25');
console.log(projectOne);

console.log('Creating Project Two');
const projectTwo = new Project('Project Two', 'This is the second project', 'December 26');
console.log(projectTwo);

const projectLibrary = [];

console.log('Adding Project One to library.')
Project.addProjectToLibrary(projectOne, projectLibrary);
console.log(projectLibrary)

console.log('Adding Project Two to library.')
Project.addProjectToLibrary(projectTwo, projectLibrary);
console.log(projectLibrary)

console.log('Showing full projectLibrary:');
console.log(projectLibrary);