/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/projects */ \"./src/modules/projects.js\");\n/* harmony import */ var _modules_tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tasks */ \"./src/modules/tasks.js\");\n// import { Project } from \"./modules/projects\";\n// import { Task, addTaskToProject } from \"./modules/tasks\";\n\n// console.log('creating projects');\n// const projectOne = new Project('Project One', 'There are no tasks', 'December 1');\n// const projectTwo = new Project('Project Two', 'Second project', 'December 30');\n\n// const projectLibrary = [];\n\n// Project.addProjectToLibrary(projectOne, projectLibrary);\n// Project.addProjectToLibrary(projectTwo, projectLibrary);\n\n// const taskOne = new Task('Task One', 'December 20', 'High');\n\n// console.log('Adding taskOne to projectOne');\n// addTaskToProject(taskOne, projectOne);\n// console.log(projectOne);\n\n// console.log('Showing updated Project Library');\n// console.log(projectLibrary);\n\n// const taskTwo = new Task('Task Two', 'December 21', 'Low', projectTwo);\n\n// console.log(projectLibrary);\n\n\n\n\nconst myProject = (0,_modules_projects__WEBPACK_IMPORTED_MODULE_0__.createProject)(\"My Project\", \"Description\", \"2023-01-01\");\nconst myTask = (0,_modules_tasks__WEBPACK_IMPORTED_MODULE_1__.createTask)(\"Task One\", \"2023-01-15\", \"High\");\n\nmyProject.editProject(\"Updated Project\", \"New Description\", \"2023-02-01\");\nmyTask.addTaskToProject(myProject);\n\nconsole.log(_modules_projects__WEBPACK_IMPORTED_MODULE_0__.projectLibrary);\nconsole.log(_modules_tasks__WEBPACK_IMPORTED_MODULE_1__.taskLibrary);\n\n//# sourceURL=webpack://getitdone_todo_list/./src/index.js?");

/***/ }),

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject),\n/* harmony export */   projectLibrary: () => (/* binding */ projectLibrary)\n/* harmony export */ });\n// export class Project {\n//     constructor(name, description, dueDate) {\n//         this.name = name;\n//         this.description = description;\n//         this.dueDate = dueDate;\n//         this.tasks = [];\n//     }\n\n//     static addProjectToLibrary(project, projectLibrary) {\n//         projectLibrary.push(project);\n//     }\n\n//     editProject(newName, newDescription, newDueDate) {\n//         this.name = newName;\n//         this.description = newDescription;\n//         this.dueDate = newDueDate;\n//     }\n// }\n\nconst projectLibrary = [];\n\nfunction createProject(name, description, dueDate) {\n    const tasks = [];\n\n    function editProject(newName, newDescription, newDueDate) {\n        name = newName;\n        description = newDescription;\n        dueDate = newDueDate;\n    }\n\n    function getTasks() {\n        return tasks.slice(); \n    }\n\n    const project = {\n        name,\n        description,\n        dueDate,\n        tasks,\n        editProject,\n        getTasks,\n    };\n\n    projectLibrary.push(project);\n    return project;\n}\n\n\n\n//# sourceURL=webpack://getitdone_todo_list/./src/modules/projects.js?");

/***/ }),

/***/ "./src/modules/tasks.js":
/*!******************************!*\
  !*** ./src/modules/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTask: () => (/* binding */ createTask),\n/* harmony export */   taskLibrary: () => (/* binding */ taskLibrary)\n/* harmony export */ });\n// export class Task {\n//     constructor(name, dueDate, priority, project = null) {\n//         this.name = name;\n//         this.dueDate = dueDate;\n//         this.priority = priority;\n//         this.project = project;\n\n//         if (project) {\n//             project.tasks.push(this);\n//         }\n//     }\n// }\n \n// export function addTaskToProject(task, project) {\n//     project.tasks.push(task);\n// }\n\nconst taskLibrary = [];\n\nfunction createTask(name, dueDate, priority) {\n    function addTaskToProject(project) {\n        project.tasks.push(task);\n    }\n\n    const task = {\n        name,\n        dueDate,\n        priority,\n        addTaskToProject,\n    };\n\n    taskLibrary.push(task);\n    return task;\n}\n\n\n\n//# sourceURL=webpack://getitdone_todo_list/./src/modules/tasks.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;