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

/***/ "./src/components/hit-game/goblin.png":
/*!********************************************!*\
  !*** ./src/components/hit-game/goblin.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"2dbd01ce16c0fa83cb67.png\";\n\n//# sourceURL=webpack://hit-game-finally/./src/components/hit-game/goblin.png?\n}");

/***/ }),

/***/ "./src/components/hit-game/hit-game.css":
/*!**********************************************!*\
  !*** ./src/components/hit-game/hit-game.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://hit-game-finally/./src/components/hit-game/hit-game.css?\n}");

/***/ }),

/***/ "./src/components/hit-game/hit-game.js":
/*!*********************************************!*\
  !*** ./src/components/hit-game/hit-game.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HitGame: () => (/* binding */ HitGame)\n/* harmony export */ });\n/* harmony import */ var _hit_game_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hit-game.css */ \"./src/components/hit-game/hit-game.css\");\n/* harmony import */ var _goblin_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goblin.png */ \"./src/components/hit-game/goblin.png\");\n\n\nclass HitGame {\n  constructor(board) {\n    if (typeof board === 'string') {\n      board = document.querySelector(board);\n    }\n    this._board = board;\n    this._renderBoard();\n    this._hits = 0;\n    this._misses = 0;\n    this.onBoardClick = this.onBoardClick.bind(this);\n  }\n  _renderBoard() {\n    this._board.classList.add('board');\n    for (let i = 0; i < 16; i++) {\n      let hole = document.createElement(\"div\");\n      hole.classList.add(\"hole\");\n      hole.setAttribute(\"data-index\", i);\n      this._board.appendChild(hole);\n    }\n  }\n  start() {\n    this._goblinHead = new Image();\n    this._goblinHead.classList.add(\"goblin\");\n    this._goblinHead.src = _goblin_png__WEBPACK_IMPORTED_MODULE_1__;\n    this._board.addEventListener('click', this.onBoardClick);\n    this._goblinIntervalId = setInterval(() => {\n      let goblinHoleIndex = Math.floor(Math.random() * 15);\n      this._board.querySelector(`[data-index=\"${goblinHoleIndex}\"]`).appendChild(this._goblinHead);\n    }, 1000);\n  }\n  onBoardClick() {\n    this._board.classList.toggle('hammer-down');\n    if (this._goblinHead.matches(':hover')) {\n      this._hits++;\n    } else {\n      this._miss();\n    }\n    this._timeout = setTimeout(() => {\n      this._board.classList.toggle('hammer-down');\n      clearTimeout(this._timeout);\n    }, 100);\n  }\n  _miss() {\n    if (this._misses == 4) {\n      this._gameOver();\n    } else {\n      this._misses++;\n    }\n  }\n  _gameOver() {\n    this._goblinHead.remove();\n    clearInterval(this._goblinIntervalId);\n    this._board.removeEventListener('click', this.onBoardClick);\n    this._gameOverDiv = document.createElement('div');\n    this._gameOverDiv.appendChild(document.createTextNode(`!!!GAME OVER!!! \\n You hit ${this._hits} time${this._hits == 1 ? '' : 's'}`));\n    this._gameOverDiv.classList.add('game-over');\n    this._board.appendChild(this._gameOverDiv);\n  }\n}\n\n//# sourceURL=webpack://hit-game-finally/./src/components/hit-game/hit-game.js?\n}");

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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ \"./src/js/app.js\");\n\n\n\n//# sourceURL=webpack://hit-game-finally/./src/index.js?\n}");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_hit_game_hit_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/hit-game/hit-game */ \"./src/components/hit-game/hit-game.js\");\n\nconst board = document.createElement('div');\ndocument.body.appendChild(board);\nconst game = new _components_hit_game_hit_game__WEBPACK_IMPORTED_MODULE_0__.HitGame(board);\ngame.start();\n\n//# sourceURL=webpack://hit-game-finally/./src/js/app.js?\n}");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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