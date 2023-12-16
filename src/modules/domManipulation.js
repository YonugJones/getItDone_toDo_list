import { projectLibrary } from "./projects";
import { taskLibrary } from "./tasks";
import { assignHandler } from "./userInterface";

export function renderProjectLibrary() {
    console.log('Project Library:', projectLibrary);
}

export function renderTaskLibrary() {
    console.log('Task Library:', taskLibrary);
}

export function renderLayout() {
    assignHandler();
}