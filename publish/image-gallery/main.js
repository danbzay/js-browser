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

/***/ "./src/components/image-gallery/image-gallery.css":
/*!********************************************************!*\
  !*** ./src/components/image-gallery/image-gallery.css ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://hit-game-finally/./src/components/image-gallery/image-gallery.css?\n}");

/***/ }),

/***/ "./src/components/image-gallery/image-gallery.js":
/*!*******************************************************!*\
  !*** ./src/components/image-gallery/image-gallery.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ImageGallery: () => (/* binding */ ImageGallery)\n/* harmony export */ });\n/* harmony import */ var _image_gallery_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-gallery.css */ \"./src/components/image-gallery/image-gallery.css\");\n\nclass ImageGallery {\n  constructor(element) {\n    if (typeof element === 'string') {\n      element = document.querySelector(element);\n    }\n    this._inputForm = element.querySelector('.image-input-data');\n    this._messageArea = this._inputForm.querySelector('.message-area');\n    this._imageList = element.querySelector('.image-list');\n    this.onSubmitHandler = this.onSubmitHandler.bind(this);\n    this._inputForm.addEventListener('submit', this.onSubmitHandler);\n  }\n  onSubmitHandler(e) {\n    e.preventDefault();\n    if (!this._inputForm.title.value) {\n      this._inputForm.title.select();\n      this._messageArea.textContent = 'Должно же быть хоть какое-то название у картинки...';\n      return;\n    }\n    if (!this._inputForm.link.value) {\n      this._inputForm.link.select();\n      this._messageArea.textContent = 'А как мы ее без ссылки будем показывать?';\n      return;\n    }\n    this._addImageToList();\n  }\n  _addImageToList() {\n    const img = document.createElement('img');\n    img.addEventListener('load', () => {\n      const imgX = document.createElement('div');\n      imgX.className = 'remover';\n      imgX.addEventListener('click', e => e.target.parentElement.remove());\n      const li = document.createElement('li');\n      li.appendChild(img);\n      li.appendChild(document.createElement('span')).appendChild(document.createTextNode(this._inputForm.title.value));\n      li.appendChild(imgX);\n      this._imageList.appendChild(li);\n      this._messageArea.textContent = 'Возможно, ваша картинка успешно добавлена';\n      this._inputForm.title.value = '';\n      this._inputForm.link.value = '';\n    });\n    img.addEventListener('error', () => {\n      this._messageArea.textContent = 'Неверный URL изображения';\n      this._inputForm.link.select();\n    });\n    img.setAttribute('src', this._inputForm.link.value);\n  }\n}\n\n//# sourceURL=webpack://hit-game-finally/./src/components/image-gallery/image-gallery.js?\n}");

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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_image_gallery_image_gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/image-gallery/image-gallery */ \"./src/components/image-gallery/image-gallery.js\");\n\nnew _components_image_gallery_image_gallery__WEBPACK_IMPORTED_MODULE_0__.ImageGallery('.image-gallery');\n\n//# sourceURL=webpack://hit-game-finally/./src/js/app.js?\n}");

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