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

/***/ "./src/components/filter-widget/filter-widget.js":
/*!*******************************************************!*\
  !*** ./src/components/filter-widget/filter-widget.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FilterWidget: () => (/* binding */ FilterWidget)\n/* harmony export */ });\nclass FilterWidget {\n  constructor(element, filterHandler, submitHandler) {\n    if (typeof element === 'string') {\n      element = document.querySelector(element);\n    }\n    this._filterText = document.querySelector('.filter-text');\n    this._filterHandler = filterHandler;\n    this._submitHandler = submitHandler;\n    this.onFilter = this.onFilter.bind(this);\n    this.onSubmit = this.onSubmit.bind(this);\n    this._element = element;\n    this._nameErrorNode = this._element.querySelector('span.hidden');\n    this._filterText.addEventListener('input', this.onFilter);\n    this._filterText.value = '';\n    this._element.addEventListener('submit', this.onSubmit);\n  }\n  onFilter(e) {\n    e.preventDefault();\n    if (this._timeout) {\n      clearTimeout(this._timeout);\n    }\n    const text = this._filterText.value;\n    this._timeout = setTimeout(() => this._filterHandler(text), 300);\n  }\n  onSubmit(e) {\n    e.preventDefault();\n    const text = this._filterText.value;\n    if (text == '') {\n      this._nameErrorNode.classList.remove('hidden');\n      return;\n    }\n    this._nameErrorNode.classList.add('hidden');\n    this._submitHandler(this._filterText.value);\n    this._filterText.value = '';\n  }\n}\n\n//# sourceURL=webpack://hit-game-finally/./src/components/filter-widget/filter-widget.js?\n}");

/***/ }),

/***/ "./src/components/task-list/task-list.css":
/*!************************************************!*\
  !*** ./src/components/task-list/task-list.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://hit-game-finally/./src/components/task-list/task-list.css?\n}");

/***/ }),

/***/ "./src/components/task-list/task-list.js":
/*!***********************************************!*\
  !*** ./src/components/task-list/task-list.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TaskList: () => (/* binding */ TaskList)\n/* harmony export */ });\n/* harmony import */ var _task_list_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-list.css */ \"./src/components/task-list/task-list.css\");\n\nclass Task {\n  constructor(name) {\n    this.node = document.createElement('li');\n    this.node.appendChild(document.createTextNode(name));\n    this.pinned = false;\n  }\n}\nclass TaskList {\n  constructor(element) {\n    if (typeof element === 'string') {\n      element = document.querySelector(element);\n    }\n    this.filterHandler = this.filterHandler.bind(this);\n    this.submitHandler = this.submitHandler.bind(this);\n    this.onAllTaskClick = this.onAllTaskClick.bind(this);\n    this.onPinTaskClick = this.onPinTaskClick.bind(this);\n    this._allTasksList = element.querySelector('.all-tasks-list');\n    this._noTasksFound = this._allTasksList.querySelector('span');\n    this._pinnedTasksList = element.querySelector('.pinned-tasks-list');\n    this._noPinnedTasksFound = this._pinnedTasksList.querySelector('span');\n    this._tasks = [];\n    this._inputText = '';\n    this._allTasksList.addEventListener('click', this.onAllTaskClick);\n    this._pinnedTasksList.addEventListener('click', this.onPinTaskClick);\n  }\n  _renderItems(list, items) {\n    list.querySelector('span').classList.add('hidden');\n    list.querySelectorAll('li').forEach(e => {\n      e.classList.add('hidden');\n    });\n    if (!items.length) {\n      list.querySelector('span').classList.remove('hidden');\n      return;\n    }\n    items.forEach(t => t.node.classList.remove('hidden'));\n  }\n  filterHandler(text) {\n    this._renderItems(this._allTasksList, this._tasks.filter(task => {\n      if (task.pinned === true) return;\n      const clean = text.trim().toLowerCase();\n      const taskName = task.node.textContent.toLowerCase();\n      this._inputText = clean;\n      return taskName.startsWith(clean);\n    }));\n  }\n  submitHandler(text) {\n    const task = new Task(text);\n    this._allTasksList.appendChild(task.node);\n    this._tasks.push(task);\n    this._inputText = '';\n    this.filterHandler(this._inputText);\n  }\n  onAllTaskClick(e) {\n    if (e.target.tagName != 'LI') return;\n    const task = this._tasks.find(t => t.node == e.target);\n    task.pinned = true;\n    this._pinnedTasksList.appendChild(task.node);\n    this._renderItems(this._pinnedTasksList, this._tasks.filter(t => t.pinned));\n    this.filterHandler(this._inputText);\n  }\n  onPinTaskClick(e) {\n    if (e.target.tagName != 'LI') return;\n    const task = this._tasks.find(t => t.node == e.target);\n    task.pinned = false;\n    this._allTasksList.appendChild(task.node);\n    this._renderItems(this._pinnedTasksList, this._tasks.filter(t => t.pinned));\n    this.filterHandler(this._inputText);\n  }\n}\n\n//# sourceURL=webpack://hit-game-finally/./src/components/task-list/task-list.js?\n}");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://hit-game-finally/./src/css/style.css?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ \"./src/js/app.js\");\n\n\n\n// TODO: write your code in app.js\n\n//# sourceURL=webpack://hit-game-finally/./src/index.js?\n}");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_task_list_task_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/task-list/task-list */ \"./src/components/task-list/task-list.js\");\n/* harmony import */ var _components_filter_widget_filter_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/filter-widget/filter-widget */ \"./src/components/filter-widget/filter-widget.js\");\n\n\nconst taskList = new _components_task_list_task_list__WEBPACK_IMPORTED_MODULE_0__.TaskList('.app');\nnew _components_filter_widget_filter_widget__WEBPACK_IMPORTED_MODULE_1__.FilterWidget('.filter-widget', taskList.filterHandler, taskList.submitHandler);\n\n//# sourceURL=webpack://hit-game-finally/./src/js/app.js?\n}");

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