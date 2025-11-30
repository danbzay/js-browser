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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_trip_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/trip-calendar */ \"./src/js/trip-calendar.js\");\n\nnew _js_trip_calendar__WEBPACK_IMPORTED_MODULE_0__.TripCalendar('.trip-calendar');\n\n//# sourceURL=webpack://testing/./src/index.js?\n}");

/***/ }),

/***/ "./src/js/trip-calendar.css":
/*!**********************************!*\
  !*** ./src/js/trip-calendar.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://testing/./src/js/trip-calendar.css?\n}");

/***/ }),

/***/ "./src/js/trip-calendar.js":
/*!*********************************!*\
  !*** ./src/js/trip-calendar.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TripCalendar: () => (/* binding */ TripCalendar),\n/* harmony export */   validation: () => (/* binding */ validation)\n/* harmony export */ });\n/* harmony import */ var _trip_calendar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trip-calendar.css */ \"./src/js/trip-calendar.css\");\n\nconst validation = {\n  outbound: out => Date.parse(out + 'T24:00:00') >= new Date(),\n  outMessage: 'Вы не сможете уехать в прошлом',\n  inbound: (out, inb) => Date.parse(inb + 'T24:00:00') >= Date.parse(out + 'T24:00:00'),\n  inMessage: 'Вы не сможете вернуться пока еще не там'\n};\nclass TripCalendar {\n  constructor(element) {\n    if (typeof element === \"string\") {\n      element = document.querySelector(element);\n    }\n    this.outbound = element.elements.outbound;\n    this.inbound = element.elements.inbound;\n    element.elements.return.checked = false;\n    // we need YYYY-MM-DD\n    this.today = new Date(Date.parse(new Date()) - new Date().getTimezoneOffset() * 60 * 1000).toISOString().slice(0, 10);\n    this.outbound.setAttribute('min', this.today);\n    this.outbound.addEventListener('invalid', ev => ev.target.validity.rangeUnderflow ? ev.target.setCustomValidity(validation.outMessage) : 0);\n    this.inbound.setAttribute('min', this.today);\n    this.inbound.addEventListener('invalid', ev => ev.target.validity.rangeUnderflow ? ev.target.setCustomValidity(validation.inMessage) : 0);\n    element.elements.return.addEventListener('change', ev => {\n      if (ev.target.checked) {\n        element.querySelector('.hide').classList.remove('hidden');\n        this.outbound.value ? this.inbound.setAttribute('min', this.outbound.value) : 0;\n        this.inbound.required = true;\n      } else {\n        element.querySelector('.hide').classList.add('hidden');\n        this.inbound.required = false;\n      }\n    });\n    element.addEventListener('change', ev => ev.target.setCustomValidity(''));\n    element.elements.return.addEventListener('change', ev => {\n      if (ev.target.checked) {\n        element.querySelector('.hide').classList.remove('hidden');\n        this.outbound.value ? this.inbound.setAttribute('min', this.outbound.value) : 0;\n      } else {\n        element.querySelector('.hide').classList.add('hidden');\n      }\n    });\n    element.addEventListener('submit', ev => {\n      ev.preventDefault();\n      if (!validation.outbound(this.outbound.value)) {\n        this.outbound.setCustomValidity(validation.outMessage);\n        this.outbound.reportValidity();\n        return;\n      }\n      if (element.elements.return.checked && validation.inbound(this.outbound.value, this.inbound.value)) {\n        this.inbound.setCustomValidity(validation.inMessage);\n        this.inbound.reportValidity();\n        return;\n      }\n    });\n    element.addEventListener('change', ev => ev.target.setCustomValidity(''));\n  }\n}\n\n//# sourceURL=webpack://testing/./src/js/trip-calendar.js?\n}");

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