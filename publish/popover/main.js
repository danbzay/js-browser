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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_popover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/popover */ \"./src/js/popover.js\");\n\nnew _js_popover__WEBPACK_IMPORTED_MODULE_0__.Popover('.popover-toggle');\n\n//# sourceURL=webpack://testing/./src/index.js?\n}");

/***/ }),

/***/ "./src/js/popover.css":
/*!****************************!*\
  !*** ./src/js/popover.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://testing/./src/js/popover.css?\n}");

/***/ }),

/***/ "./src/js/popover.js":
/*!***************************!*\
  !*** ./src/js/popover.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Popover: () => (/* binding */ Popover)\n/* harmony export */ });\n/* harmony import */ var _popover_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover.css */ \"./src/js/popover.css\");\n\nclass Popover {\n  constructor(element) {\n    if (typeof element === 'string') {\n      element = document.querySelector(element);\n    }\n    this.form = element;\n    this.onSubmitHandler = this.onSubmitHandler.bind(this);\n    this.form.addEventListener('submit', this.onSubmitHandler);\n  }\n  onSubmitHandler(e) {\n    e.preventDefault();\n    let bubble = document.querySelector('.bubble');\n    if (bubble) {\n      bubble.remove();\n      return;\n    }\n    bubble = document.createElement('div');\n    bubble.innerHTML = `\n      <div>\n        <h1>Popover title</h1>\n        <p>And here's some amasing content. It's very engaging. Right?</p>\n      </div>\n      <div></div>`;\n    document.body.appendChild(bubble);\n    bubble.classList.add('bubble');\n    const {\n      left,\n      top,\n      width\n    } = e.currentTarget.elements.toggle.getBoundingClientRect();\n    bubble.style.left = left + width / 2 - bubble.offsetWidth / 2 + 'px';\n    bubble.style.top = top - bubble.offsetHeight + 'px';\n  }\n}\n\n//# sourceURL=webpack://testing/./src/js/popover.js?\n}");

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