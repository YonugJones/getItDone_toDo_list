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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_domManipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/domManipulation */ \"./src/modules/domManipulation.js\");\n\n\n(0,_modules_domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderProjectLibrary)();\n(0,_modules_domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderTaskLibrary)();\n(0,_modules_domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderLayout)();\n\n\n//# sourceURL=webpack://getitdone_todo_list/./src/index.js?");

/***/ }),

/***/ "./src/modules/domManipulation.js":
/*!****************************************!*\
  !*** ./src/modules/domManipulation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLayout: () => (/* binding */ renderLayout),\n/* harmony export */   renderProjectLibrary: () => (/* binding */ renderProjectLibrary),\n/* harmony export */   renderTaskLibrary: () => (/* binding */ renderTaskLibrary)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/modules/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/modules/tasks.js\");\n/* harmony import */ var _userInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userInterface */ \"./src/modules/userInterface.js\");\n\n\n\n\nfunction renderProjectLibrary() {\n    console.log('Project Library:', _projects__WEBPACK_IMPORTED_MODULE_0__.projectLibrary);\n}\n\nfunction renderTaskLibrary() {\n    console.log('Task Library:', _tasks__WEBPACK_IMPORTED_MODULE_1__.taskLibrary);\n}\n\nfunction renderLayout() {\n    (0,_userInterface__WEBPACK_IMPORTED_MODULE_2__.assignHandler)();\n}\n\n//# sourceURL=webpack://getitdone_todo_list/./src/modules/domManipulation.js?");

/***/ }),

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   projectLibrary: () => (/* binding */ projectLibrary)\n/* harmony export */ });\nconst projectLibrary = [];\n\nfunction Project(name, description, dueDate) {\n    this.name = name,\n    this.description = description,\n    this.dueDate = dueDate,\n    this.tasks = []\n    \n    this.addToProjectLibrary = function() {\n        projectLibrary.push(this);\n    }\n\n    this.removeFromProjectLibrary = function() {\n        const index = projectLibrary.indexOf(this)\n        \n        if (index !== -1) {\n            projectLibrary.splice(index, 1);\n        } else {\n            console.error('Project not found in projectLibrary')\n        }\n    }\n\n    this.complete = false;\n\n    this.markAsComplete = function() {\n        this.complete = true;\n    };\n\n    this.markAsIncomplete = function() {\n        this.complete = false;\n    }\n}\n\n\n//# sourceURL=webpack://getitdone_todo_list/./src/modules/projects.js?");

/***/ }),

/***/ "./src/modules/tasks.js":
/*!******************************!*\
  !*** ./src/modules/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   taskLibrary: () => (/* binding */ taskLibrary)\n/* harmony export */ });\nconst taskLibrary = [];\n\nfunction Task(name, dueDate, priority) {\n    this.name = name,\n    this.dueDate = dueDate,\n    this.priority = priority\n\n    this.addToTaskLibrary = function() {\n        taskLibrary.push(this);\n    }\n\n    this.removeFromTaskLibrary = function() {\n        const index = taskLibrary.indexOf(this);\n\n        if (index !== -1) {\n            taskLibrary.splice(index, 1);\n        } else {\n            console.error('Task not found in taskLibrary');\n        }\n    }\n\n    this.complete = false;\n\n    this.markAsComplete = function() {\n        this.complete = true;\n    }\n\n    this.markAsIncomplete = function() {\n        this.complete = false;\n    }\n}\n\n\n\n//# sourceURL=webpack://getitdone_todo_list/./src/modules/tasks.js?");

/***/ }),

/***/ "./src/modules/userInterface.js":
/*!**************************************!*\
  !*** ./src/modules/userInterface.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   assignHandler: () => (/* binding */ assignHandler),\n/* harmony export */   handleAddTaskToProject: () => (/* binding */ handleAddTaskToProject),\n/* harmony export */   handleCreateProject: () => (/* binding */ handleCreateProject),\n/* harmony export */   handleCreateTask: () => (/* binding */ handleCreateTask),\n/* harmony export */   handleDeleteProject: () => (/* binding */ handleDeleteProject),\n/* harmony export */   handleDeleteTask: () => (/* binding */ handleDeleteTask),\n/* harmony export */   handleRemoveTaskFromProject: () => (/* binding */ handleRemoveTaskFromProject)\n/* harmony export */ });\n/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulation */ \"./src/modules/domManipulation.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/modules/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ \"./src/modules/tasks.js\");\n\n\n\n\nfunction handleCreateProject() {\n    const projectName = prompt('Enter project name:');\n    const projectDescription = prompt('Enter project description;');\n    const projectDueDate = prompt('Enter project due date:');\n\n    const newProject = new _projects__WEBPACK_IMPORTED_MODULE_1__.Project(projectName, projectDescription, projectDueDate);\n    newProject.addToProjectLibrary();\n    (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderProjectLibrary)();\n}\n\nfunction handleDeleteProject() {\n    const projectName = prompt('Enter project name to delete:')\n    const project = _projects__WEBPACK_IMPORTED_MODULE_1__.projectLibrary.find(proj => proj.name === projectName);\n\n    if (project) {\n        console.log(`Removing Project: ${project.name} from projectLibrary`);\n        project.removeFromProjectLibrary();\n        (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderProjectLibrary)();\n    } else {\n        console.error('Project not found in projectLibrary');\n        (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderProjectLibrary)();\n    }\n}\n\nfunction handleCreateTask() {\n    const taskName = prompt('Enter task name:');\n    const taskDueDate = prompt('Enter task due date:');\n    const taskPriority = prompt('Enter task priority:');\n\n    const newTask = new _tasks__WEBPACK_IMPORTED_MODULE_2__.Task(taskName, taskDueDate, taskPriority);\n    newTask.addToTaskLibrary();\n    (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderTaskLibrary)();\n}\n\nfunction handleDeleteTask() {\n    const taskName = prompt('Enter task name to delte');\n    const task = _tasks__WEBPACK_IMPORTED_MODULE_2__.taskLibrary.find(t => t.name === taskName);\n\n    if (task) {\n        console.log(`Removing task ${task.name} from taskLibrary`);\n        task.removeFromTaskLibrary();\n        (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderTaskLibrary)();\n    } else {\n        console.error('Task not found in taskLibrary');\n        (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderTaskLibrary)();\n    }\n}\n\nfunction handleAddTaskToProject() {\n    const taskName = prompt('Enter task name to move');\n    const task = _tasks__WEBPACK_IMPORTED_MODULE_2__.taskLibrary.find(t => t.name === taskName);\n\n    const projectName = prompt('Enter project to move task into');\n    const project = _projects__WEBPACK_IMPORTED_MODULE_1__.projectLibrary.find(proj => proj.name === projectName);\n\n    if (task && project) {\n        console.log(`Adding Task: ${task.name} into Project: ${project.name}`);\n        project.tasks.push(task);\n        (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderProjectLibrary)();\n    } else {\n        console.error('Task or Project not found');\n        (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderProjectLibrary)();\n    }\n}\n\nfunction handleRemoveTaskFromProject() {\n    const taskName = prompt('Enter task name to move');\n    const task = _tasks__WEBPACK_IMPORTED_MODULE_2__.taskLibrary.find(t => t.name === taskName); \n\n    const projectName = prompt('Enter project to remove task from');\n    const project = _projects__WEBPACK_IMPORTED_MODULE_1__.projectLibrary.find(proj => proj.name === projectName);\n\n    if (task && project) {\n        console.log('Task and Project found');\n\n        const index = project.tasks.indexOf(task);\n        if (index !== -1) {\n            console.log(`Removing Task: ${task.name} from Project: ${project.name}`)\n            project.tasks.splice(index, 1);\n            (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderProjectLibrary)();\n        }\n    } else {\n        console.error('Task and or Project not found');\n        (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderProjectLibrary)();\n    }\n}\n\nfunction assignHandler() {\n    const createProjectButton = document.getElementById('create-project-button');\n    createProjectButton.addEventListener('click', handleCreateProject);\n\n    const deleteProjectButton = document.getElementById('delete-project-button');\n    deleteProjectButton.addEventListener('click', handleDeleteProject);\n\n    const createTaskButton = document.getElementById('create-task-button');\n    createTaskButton.addEventListener('click', handleCreateTask);\n\n    const deleteTaskButton = document.getElementById('delete-task-button');\n    deleteTaskButton.addEventListener('click', handleDeleteTask);\n\n    const addTaskToProjectButton = document.getElementById('add-task-to-project-button');\n    addTaskToProjectButton.addEventListener('click', handleAddTaskToProject);\n\n    const removeTaskFromProjectButton = document.getElementById('remove-task-from-project-button');\n    removeTaskFromProjectButton.addEventListener('click', handleRemoveTaskFromProject);\n}\n\n//# sourceURL=webpack://getitdone_todo_list/./src/modules/userInterface.js?");

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