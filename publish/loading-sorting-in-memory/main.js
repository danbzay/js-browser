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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _movies_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movies.json */ \"./src/movies.json\");\n\nconst moviesTable = document.querySelector('table.movies');\nrebuildTable(_movies_json__WEBPACK_IMPORTED_MODULE_0__);\nlet sortOrder = 0;\nlet sortColumn = 0;\nconst dataKeys = ['id', 'title', 'year', 'imdb'];\nconst ths = moviesTable.querySelectorAll('th');\nsetInterval(() => {\n  ths[sortColumn].textContent = ths[sortColumn].textContent.replace(/(\\u2193|\\u2191)/, '');\n  sortColumn = (sortColumn + sortOrder) % 4;\n  sortOrder = (sortOrder + 1) % 2;\n  moviesTable.querySelectorAll('table > tr').forEach(row => row.remove());\n  ths[sortColumn].textContent += sortOrder == 0 ? '\\u2191' : '\\u2193';\n  rebuildTable(_movies_json__WEBPACK_IMPORTED_MODULE_0__.sort(compareRows));\n}, 2000);\nfunction rebuildTable(movies) {\n  for (const movie of movies) {\n    const tr = document.createElement('tr');\n    tr.dataset.id = movie.id;\n    tr.appendChild(document.createElement('td')).appendChild(document.createTextNode('#' + movie.id));\n    tr.dataset.title = movie.title;\n    tr.appendChild(document.createElement('td')).appendChild(document.createTextNode(movie.title));\n    tr.dataset.year = movie.year;\n    tr.appendChild(document.createElement('td')).appendChild(document.createTextNode('(' + movie.year + ')'));\n    tr.dataset.imdb = movie.imdb;\n    tr.appendChild(document.createElement('td')).appendChild(document.createTextNode('imdb' + movie.imdb.toFixed(2)));\n    moviesTable.appendChild(tr);\n  }\n}\nfunction compareRows(a, b) {\n  const aString = a[dataKeys[sortColumn]];\n  const bString = b[dataKeys[sortColumn]];\n  let result = 0;\n  if (typeof aString === 'string') {\n    result = aString.localeCompare(bString);\n  } else {\n    result = aString - bString;\n  }\n  return (1 - 2 * sortOrder) * result;\n}\n\n//# sourceURL=webpack://loading-sorting/./src/index.js?\n}");

/***/ }),

/***/ "./src/movies.json":
/*!*************************!*\
  !*** ./src/movies.json ***!
  \*************************/
/***/ ((module) => {

eval("{module.exports = /*#__PURE__*/JSON.parse('[{\"id\":26,\"title\":\"Побег из Шоушенка\",\"imdb\":9.3,\"year\":1994},{\"id\":25,\"title\":\"Крёстный отец\",\"imdb\":9.2,\"year\":1972},{\"id\":27,\"title\":\"Крёстный отец 2\",\"imdb\":9,\"year\":1974},{\"id\":1047,\"title\":\"Тёмный рыцарь\",\"imdb\":9,\"year\":2008},{\"id\":223,\"title\":\"Криминальное чтиво\",\"imdb\":8.9,\"year\":1994}]');\n\n//# sourceURL=webpack://loading-sorting/./src/movies.json?\n}");

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