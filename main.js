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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_domManipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/domManipulation */ \"./src/modules/domManipulation.js\");\n\n\n\n(0,_modules_domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderProjectLibrary)();\n(0,_modules_domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderTaskLibrary)();\n(0,_modules_domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderLayout)(); \n\n\n//# sourceURL=webpack://getitdone_todo_list/./src/index.js?");

/***/ }),

/***/ "./src/modules/domManipulation.js":
/*!****************************************!*\
  !*** ./src/modules/domManipulation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAllTasks: () => (/* binding */ renderAllTasks),\n/* harmony export */   renderCreateProjectForm: () => (/* binding */ renderCreateProjectForm),\n/* harmony export */   renderCreateTaskForm: () => (/* binding */ renderCreateTaskForm),\n/* harmony export */   renderLayout: () => (/* binding */ renderLayout),\n/* harmony export */   renderProjectDetails: () => (/* binding */ renderProjectDetails),\n/* harmony export */   renderProjectLibrary: () => (/* binding */ renderProjectLibrary),\n/* harmony export */   renderProjectListDisplay: () => (/* binding */ renderProjectListDisplay),\n/* harmony export */   renderTaskLibrary: () => (/* binding */ renderTaskLibrary)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/modules/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/modules/tasks.js\");\n/* harmony import */ var _userInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userInterface */ \"./src/modules/userInterface.js\");\n\n\n\n\nfunction renderProjectLibrary() {\n    console.log('Project Library:', _projects__WEBPACK_IMPORTED_MODULE_0__.projectLibrary);\n}\n\nfunction renderProjectListDisplay() {\n    const projectList = document.getElementById('project-list');\n    projectList.textContent = '';\n    _projects__WEBPACK_IMPORTED_MODULE_0__.projectLibrary.forEach(proj => {\n        const projectListItem = document.createElement('li');\n        projectListItem.classList.add('project-list-item')\n        projectListItem.textContent = proj.name;\n        projectList.appendChild(projectListItem);\n    })\n}\n\nfunction renderCreateProjectForm() {\n    const layoutSection = document.getElementById('layout-section');\n    layoutSection.textContent = '';\n\n    const projectForm = document.createElement('form');\n    projectForm.setAttribute('id', 'create-project-form');\n\n    const projectFormFieldset = document.createElement('fieldset');\n    projectFormFieldset.setAttribute('id', 'create-project-fieldset');\n\n    const legend = document.createElement('legend');\n    legend.textContent = 'Create Project:';\n\n    const projectNamelabel = document.createElement('label');\n    projectNamelabel.setAttribute('for', 'pname');\n    projectNamelabel.textContent = 'Project Name:';\n\n    const projectNameInput = document.createElement('input');\n    projectNameInput.setAttribute('type', 'text');\n    projectNameInput.setAttribute('id', 'pname');\n    projectNameInput.setAttribute('name', 'pname');\n\n    const projectDescriptionLabel = document.createElement('label');\n    projectDescriptionLabel.setAttribute('for', 'pdescription');\n    projectDescriptionLabel.textContent = 'Project Description:';\n\n    const projectDescriptionTextArea = document.createElement('textarea');\n    projectDescriptionTextArea.setAttribute('name', 'pdescription');\n    projectDescriptionTextArea.setAttribute('id', 'pdescription');\n    projectDescriptionTextArea.setAttribute('rows', '3');\n\n    const projectDueDateLabel = document.createElement('label');\n    projectDueDateLabel.setAttribute('for', 'pduedate');\n    projectDueDateLabel.textContent = 'Project Due Date:';\n\n    const projectDueDateInput = document.createElement('input');\n    projectDueDateInput.setAttribute('type', 'date');\n    projectDueDateInput.setAttribute('id', 'pduedate');\n    projectDueDateInput.setAttribute('name', 'pduedate');\n\n    const buttonFieldset = document.createElement('fieldset');\n    buttonFieldset.setAttribute('id', 'create-project-buttons');\n\n    const cancelButton = document.createElement('button');\n    cancelButton.setAttribute('type', 'button');\n    cancelButton.setAttribute('id', 'create-project-cancel-button');\n    cancelButton.textContent = 'Cancel';\n    \n\n    const submitButton = document.createElement('button');\n    submitButton.setAttribute('type', 'button');\n    submitButton.setAttribute('id', 'create-project-submit-button');\n    submitButton.textContent = 'Submit';\n    \n\n    projectFormFieldset.appendChild(legend);\n    projectFormFieldset.appendChild(projectNamelabel);\n    projectFormFieldset.appendChild(projectNameInput);\n    projectFormFieldset.appendChild(projectDescriptionLabel);\n    projectFormFieldset.appendChild(projectDescriptionTextArea);\n    projectFormFieldset.appendChild(projectDueDateLabel);\n    projectFormFieldset.appendChild(projectDueDateInput);\n\n    buttonFieldset.appendChild(cancelButton);\n    buttonFieldset.appendChild(submitButton);\n\n    projectForm.appendChild(projectFormFieldset);\n    projectForm.appendChild(buttonFieldset);\n\n    layoutSection.appendChild(projectForm);\n\n    (0,_userInterface__WEBPACK_IMPORTED_MODULE_2__.assignHandler)();\n}\n\nfunction renderCreateTaskForm() {\n    const addTaskSection = document.querySelector('.add-task-section');\n    const addTaskButton = document.getElementById('add-task-button');\n    addTaskButton.style.display = 'none';\n\n    const taskForm = document.createElement('form');\n    taskForm.setAttribute('id', 'create-task-form');\n\n    const taskFormFieldset = document.createElement('fieldset');\n    taskFormFieldset.setAttribute('id', 'create-task-fieldset');\n\n    const legend = document.createElement('legend');\n    legend.textContent = 'Create Task:';\n\n    const tasktNamelabel = document.createElement('label');\n    tasktNamelabel.setAttribute('for', 'tname');\n    tasktNamelabel.textContent = 'Task Name:';\n\n    const taskNameInput = document.createElement('input');\n    taskNameInput.setAttribute('type', 'text');\n    taskNameInput.setAttribute('id', 'tname');\n    taskNameInput.setAttribute('name', 'tname');\n\n    const taskDueDateLabel = document.createElement('label');\n    taskDueDateLabel.setAttribute('for', 'tduedate');\n    taskDueDateLabel.textContent = 'Task Due Date:';\n\n    const taskDueDateInput = document.createElement('input');\n    taskDueDateInput.setAttribute('type', 'date');\n    taskDueDateInput.setAttribute('id', 'tduedate');\n    taskDueDateInput.setAttribute('name', 'tduedate');\n\n    const taskPriorityLabel = document.createElement('label');\n    taskPriorityLabel.setAttribute('for', 'tpriority');\n    taskPriorityLabel.textContent = 'Task Priority:';\n\n    const taskPrioritySelect = document.createElement('select');\n    taskPrioritySelect.setAttribute('id', 'tpriority');\n    taskPrioritySelect.setAttribute('name', 'tpriority');\n\n    const taskPriorityHigh = document.createElement('option');\n    taskPriorityHigh.setAttribute('value', 'High');\n    taskPriorityHigh.textContent = 'High';\n\n    const taskPriorityMedium = document.createElement('option');\n    taskPriorityMedium.setAttribute('value', 'Medium');\n    taskPriorityMedium.textContent = 'Medium';\n\n    const taskPriorityLow = document.createElement('option');\n    taskPriorityLow.setAttribute('value', 'Low');\n    taskPriorityLow.textContent = 'Low';\n\n    const buttonFieldset = document.createElement('fieldset');\n    buttonFieldset.setAttribute('id', 'create-task-buttons');\n\n    const cancelButton = document.createElement('button');\n    cancelButton.setAttribute('type', 'button');\n    cancelButton.setAttribute('id', 'create-task-cancel-button');\n    cancelButton.textContent = 'Cancel';\n    \n    const submitButton = document.createElement('button');\n    submitButton.setAttribute('type', 'button');\n    submitButton.setAttribute('id', 'create-task-submit-button');\n    submitButton.textContent = 'Submit';\n\n    taskFormFieldset.appendChild(legend);\n    taskFormFieldset.appendChild(tasktNamelabel);\n    taskFormFieldset.appendChild(taskNameInput);\n    taskFormFieldset.appendChild(taskDueDateLabel);\n    taskFormFieldset.appendChild(taskDueDateInput);\n    taskFormFieldset.appendChild(taskPriorityLabel);\n    taskFormFieldset.appendChild(taskPrioritySelect);\n\n    taskPrioritySelect.appendChild(taskPriorityHigh);\n    taskPrioritySelect.appendChild(taskPriorityMedium);\n    taskPrioritySelect.appendChild(taskPriorityLow);\n\n    buttonFieldset.appendChild(cancelButton);\n    buttonFieldset.appendChild(submitButton);\n\n    taskForm.appendChild(taskFormFieldset);\n    taskForm.appendChild(buttonFieldset);\n\n    addTaskSection.appendChild(taskForm);\n\n    (0,_userInterface__WEBPACK_IMPORTED_MODULE_2__.assignHandler)();\n}\n\nfunction renderProjectDetails(project) {\n    const layoutSection = document.getElementById('layout-section');\n    layoutSection.textContent = '';\n\n    if (project) {\n        const projectDetails = document.createElement('div');\n        projectDetails.classList.add('project-details');\n\n        const projectName = document.createElement('h2');\n        projectName.textContent = project.name;\n        projectName.classList.add('project-details-name');\n\n        const projectDescription = document.createElement('p');\n        projectDescription.textContent = project.description;\n        projectDescription.classList.add('project-details-description')\n\n        const projectDueDate = document.createElement('p');\n        projectDueDate.textContent = project.dueDate;\n        projectDueDate.classList.add('project-details-due-date');\n\n        const taskList = document.createElement('ul');\n        taskList.classList.add('project-details-task-list');\n        project.tasks.forEach(task => {\n            const taskItem = document.createElement('li');\n            taskItem.textContent = task.name;\n            taskItem.classList.add('project-details-task-item');\n            taskList.appendChild(taskItem);\n        });\n\n        const addTaskSection = document.createElement('div');\n        addTaskSection.classList.add('add-task-section');\n\n        const addTaskButton = document.createElement('button');\n        addTaskButton.setAttribute('id', 'add-task-button');\n        addTaskButton.textContent = 'Add Task';\n        addTaskButton.addEventListener('click', renderCreateTaskForm);\n        \n        projectDetails.appendChild(projectName);\n        projectDetails.appendChild(projectDescription);\n        projectDetails.appendChild(projectDueDate);\n        projectDetails.appendChild(taskList);\n\n        layoutSection.appendChild(projectDetails);\n\n        addTaskSection.appendChild(addTaskButton)\n        layoutSection.appendChild(addTaskSection);\n    }\n}\n\nfunction renderAllTasks() {\n    const layoutSection = document.getElementById('layout-section');\n    layoutSection.textContent = '';\n\n    if (_tasks__WEBPACK_IMPORTED_MODULE_1__.taskLibrary.length === 0) {\n        const noTasksDiv = document.createElement('div');\n        noTasksDiv.classList.add('no-tasks-display')\n        const noTasks = document.createElement('h2');\n        noTasks.textContent = 'There are no tasks'\n        noTasksDiv.appendChild(noTasks);\n        layoutSection.appendChild(noTasksDiv);\n    } else {\n        const taskList = document.createElement('ul');\n        taskList.classList.add('project-details-task-list');\n        _tasks__WEBPACK_IMPORTED_MODULE_1__.taskLibrary.forEach(task => {\n            const taskItem = document.createElement('li');\n            taskItem.textContent = task.name;\n            taskItem.classList.add('project-details-task-item');\n            taskList.appendChild(taskItem);\n        });\n\n        layoutSection.appendChild(taskList);\n    }\n}\n\nfunction renderTaskLibrary() {\n    console.log('Task Library:', _tasks__WEBPACK_IMPORTED_MODULE_1__.taskLibrary);\n}\n\nfunction renderLayout() {\n    (0,_userInterface__WEBPACK_IMPORTED_MODULE_2__.assignHandler)();\n}\n\n//# sourceURL=webpack://getitdone_todo_list/./src/modules/domManipulation.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   assignHandler: () => (/* binding */ assignHandler),\n/* harmony export */   handleAddTaskToProject: () => (/* binding */ handleAddTaskToProject),\n/* harmony export */   handleCreateProject: () => (/* binding */ handleCreateProject),\n/* harmony export */   handleCreateTask: () => (/* binding */ handleCreateTask),\n/* harmony export */   handleDeleteProject: () => (/* binding */ handleDeleteProject),\n/* harmony export */   handleDeleteTask: () => (/* binding */ handleDeleteTask),\n/* harmony export */   handleProjectListItemClick: () => (/* binding */ handleProjectListItemClick),\n/* harmony export */   handleRemoveTaskFromProject: () => (/* binding */ handleRemoveTaskFromProject)\n/* harmony export */ });\n/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulation */ \"./src/modules/domManipulation.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/modules/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ \"./src/modules/tasks.js\");\n\n\n\n\nfunction handleCreateProject() {\n    const projectName = document.getElementById('pname').value;\n    const projectDescription = document.getElementById('pdescription').value;\n    const projectDueDate = document.getElementById('pduedate').value;\n\n    const newProject = new _projects__WEBPACK_IMPORTED_MODULE_1__.Project(projectName, projectDescription, projectDueDate);\n    const projectExists = _projects__WEBPACK_IMPORTED_MODULE_1__.projectLibrary.some(proj => proj.name === projectName)\n\n    if (projectName === '') {\n        alert('Project Name cannot be blank');\n        return;\n    } else if (projectExists) {\n        alert('Project name already taken. Please choose a new one.');\n        return;\n    }\n    newProject.addToProjectLibrary();\n    (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderProjectLibrary)();\n    (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderProjectListDisplay)();\n    (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderProjectDetails)(newProject);\n}\n\nfunction handleDeleteProject() {\n    const projectName = prompt('Enter project name to delete:')\n    const project = _projects__WEBPACK_IMPORTED_MODULE_1__.projectLibrary.find(proj => proj.name === projectName);\n\n    if (project) {\n        console.log(`Removing Project: ${project.name} from projectLibrary`);\n        project.removeFromProjectLibrary();\n        (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderProjectLibrary)();\n        (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderProjectListDisplay)();\n    } else {\n        alert('Project not found in projectLibrary');\n        return;\n    }\n}\n\nfunction handleProjectListItemClick(event) {\n    const clickedElement = event.target.closest('.project-list-item');\n    if (clickedElement) {\n        const projectName = clickedElement.textContent;\n        const project = _projects__WEBPACK_IMPORTED_MODULE_1__.projectLibrary.find(proj => proj.name === projectName);\n\n        if (project) {\n            (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderProjectDetails)(project)\n        } else {\n            console.error('Project not found in projectLibrary');\n        }\n    }\n}\n\nfunction handleCreateTask() {\n    const taskName = document.getElementById('tname').value;\n    const taskDueDate = document.getElementById('tduedate').value;\n    const taskPriority = document.getElementById('tpriority').value;\n\n    const newTask = new _tasks__WEBPACK_IMPORTED_MODULE_2__.Task(taskName, taskDueDate, taskPriority);\n    newTask.addToTaskLibrary();\n    (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderTaskLibrary)();\n}\n\nfunction handleDeleteTask() {\n    const taskName = prompt('Enter task name to delte');\n    const task = _tasks__WEBPACK_IMPORTED_MODULE_2__.taskLibrary.find(t => t.name === taskName);\n\n    if (task) {\n        console.log(`Removing task ${task.name} from taskLibrary`);\n        task.removeFromTaskLibrary();\n        (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderTaskLibrary)();\n    } else {\n        console.error('Task not found in taskLibrary');\n        (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderTaskLibrary)();\n    }\n}\n\nfunction handleAddTaskToProject() {\n    const taskName = document.getElementById('tname').value;\n    const task = _tasks__WEBPACK_IMPORTED_MODULE_2__.taskLibrary.find(t => t.name === taskName);\n\n    // update HERE\n    const projectName = document.querySelector('.project-details-name').textContent;\n    const project = _projects__WEBPACK_IMPORTED_MODULE_1__.projectLibrary.find(proj => proj.name === projectName);\n    // console.log(`Adding Task: ${task.name} into Project: ${project.name}`);\n    project.tasks.push(task);\n    (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderProjectLibrary)();\n    (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderProjectDetails)(project);\n}\n\nfunction handleRemoveTaskFromProject() {\n    const taskName = prompt('Enter task name to move');\n    const task = _tasks__WEBPACK_IMPORTED_MODULE_2__.taskLibrary.find(t => t.name === taskName); \n\n    const projectName = prompt('Enter project to remove task from');\n    const project = _projects__WEBPACK_IMPORTED_MODULE_1__.projectLibrary.find(proj => proj.name === projectName);\n\n    if (task && project) {\n        const index = project.tasks.indexOf(task);\n        if (index !== -1) {\n            console.log(`Removing Task: ${task.name} from Project: ${project.name}`)\n            project.tasks.splice(index, 1);\n            (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderProjectLibrary)();\n            (0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderProjectDetails)(project);\n        }\n    } else {\n        console.error('Task and or Project not found');\n    }\n}\n\nfunction assignHandler() {\n    const allTasksButton = document.getElementById('all-tasks-button');\n    allTasksButton.addEventListener('click', _domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderAllTasks);\n\n    const createProjectButton = document.getElementById('create-project-button');\n    createProjectButton.addEventListener('click', _domManipulation__WEBPACK_IMPORTED_MODULE_0__.renderCreateProjectForm);\n\n    const deleteProjectButton = document.getElementById('delete-project-button');\n    deleteProjectButton.addEventListener('click', handleDeleteProject);\n\n    const createTaskButton = document.getElementById('create-task-button');\n    createTaskButton.addEventListener('click', handleCreateTask);\n\n    const deleteTaskButton = document.getElementById('delete-task-button');\n    deleteTaskButton.addEventListener('click', handleDeleteTask);\n\n    const addTaskToProjectButton = document.getElementById('add-task-to-project-button');\n    addTaskToProjectButton.addEventListener('click', handleAddTaskToProject);\n\n    const removeTaskFromProjectButton = document.getElementById('remove-task-from-project-button');\n    removeTaskFromProjectButton.addEventListener('click', handleRemoveTaskFromProject);\n\n    const projectList = document.getElementById('project-list');\n    projectList.addEventListener('click', handleProjectListItemClick);\n\n    // DYNAMICALLY CREATED BUTTONS PROJECT FORM\n    const projectForm = document.getElementById('create-project-form');\n    if (projectForm) {\n        const submitButton = document.getElementById('create-project-submit-button');\n        submitButton.addEventListener('click', handleCreateProject);\n        const cancelButton = document.getElementById('create-project-cancel-button');\n        cancelButton.addEventListener('click', () => {\n            const layoutSection = document.getElementById('layout-section');\n            layoutSection.removeChild(projectForm);\n        })\n    };\n\n    // DYNAMICALLY CREATED BUTTONS TASK FORM\n    const taskForm = document.getElementById('create-task-form');\n    const taskSection = document.querySelector('.add-task-section');\n    const addTaskButton = document.getElementById('add-task-button');\n    if (taskForm) {\n        const submitButton = document.getElementById('create-task-submit-button');\n        submitButton.addEventListener('click', () => {\n            handleCreateTask();\n            handleAddTaskToProject();\n            taskSection.removeChild(taskForm);\n            addTaskButton.style.display = '';\n        })\n        const cancelButton = document.getElementById('create-task-cancel-button');\n        cancelButton.addEventListener('click', () => {\n            taskSection.removeChild(taskForm);\n            addTaskButton.style.display = '';\n        })\n    };\n    \n}\n\n//# sourceURL=webpack://getitdone_todo_list/./src/modules/userInterface.js?");

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