/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://trello/./src/css/style.css?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ \"./src/js/app.js\");\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_app__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack://trello/./src/index.js?\n}");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {

eval("{const storage = JSON.parse(localStorage.getItem('trello')) || [[], [], []];\nconst columns = [...document.querySelectorAll('.column')];\nlet dropSource;\nconst dropTarget = document.createElement('li');\ndropTarget.classList.add('drop-target');\ndropTarget.addEventListener('dragover', ev => ev.preventDefault());\n\n//show place for drop\nconst dragOverHandler = ev => ev.target.parentElement.insertBefore(dropTarget, ev.target);\n\n//drop card\nconst dropHandler = ev => {\n  [cs, is] = ev.dataTransfer.getData('text').split(',').map(s => Number(s));\n  let ct = columns.indexOf(dropTarget.parentElement);\n  let it = [...dropTarget.parentElement.children].indexOf(dropTarget);\n  dropTarget.parentElement.insertBefore(dropSource, dropTarget);\n  storage[cs].splice(is - 1, 1);\n  storage[ct].splice(it - 1, 0, dropSource.innerText);\n};\n\n//recreating stored cards\nfor (let i = 0; i < storage.length; i++) {\n  storage[i].forEach(content => createCard(content, i, false));\n}\n\n//adding another card\nconst addCardHandler = ev => {\n  ev.target.removeEventListener('click', addCardHandler);\n  ev.target.innerHTML = `\n    <textarea name=\"card-input\" rows=\"3\" required \n      placeholder=\"Enter a title for this card...\"></textarea>\n    <button type=\"button\">Add Card</buton>`;\n  ev.target.lastElementChild.addEventListener('click', () => {\n    //do some replacement for safety\n    let content = ev.target.firstElementChild.value.replace(/</g, '&lt;').replace(/>/g, '&gt;');\n    createCard(content, ev.target.parentElement);\n    ev.target.innerHTML = '+ Add another card';\n    ev.target.addEventListener('click', addCardHandler);\n  });\n};\n\n//doing some initialization\ndocument.querySelectorAll('.add').forEach(li => {\n  li.addEventListener('click', addCardHandler);\n  li.addEventListener('dragover', dragOverHandler);\n});\n\n//creating card from content in column\nfunction createCard(content, columnIndex, store = true) {\n  columnIndex = typeof columnIndex === 'number' ? columnIndex : columns.indexOf(columnIndex);\n  const li = document.createElement('li');\n  columns[columnIndex].insertBefore(li, columns[columnIndex].lastElementChild);\n  //deleting card \n  li.innerHTML = content.replace(/\\n/g, '<br>') + '<div class=\"delete\">&#x2A2F;</div>';\n  li.querySelector('.delete').addEventListener('click', ev => {\n    storage[columnIndex].splice([...li.parentElement.children].indexOf(li) - 1, 1);\n    localStorage.setItem('trello', JSON.stringify(storage));\n    li.remove();\n  });\n  li.addEventListener('dragover', dragOverHandler);\n  li.setAttribute('draggable', true);\n  //dragging start\n  li.addEventListener('dragstart', ev => {\n    dropSource = li;\n    dropSource.classList.add('dragged');\n    ev.dataTransfer.setData('text', columnIndex + ',' + [...dropSource.parentElement.children].indexOf(dropSource));\n    console.log(ev.dataTransfer.getData('text'));\n    dropTarget.style.height = dropSource.offsetHeight + 'px';\n    dropTarget.addEventListener('drop', dropHandler);\n    dropSource.addEventListener('dragend', () => {\n      dropSource.classList.remove('dragged');\n      dropTarget.removeEventListener('drop', dropHandler);\n      dropTarget.remove();\n    });\n  });\n  //storing card\n  if (store) {\n    storage[columnIndex].push(li.firstChild.innerText);\n    localStorage.setItem('trello', JSON.stringify(storage));\n  }\n}\n;\n\n//# sourceURL=webpack://trello/./src/js/app.js?\n}");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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