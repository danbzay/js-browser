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

/***/ "./src/components/credit-card-validator/credit-card-validator.css":
/*!************************************************************************!*\
  !*** ./src/components/credit-card-validator/credit-card-validator.css ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://testing/./src/components/credit-card-validator/credit-card-validator.css?\n}");

/***/ }),

/***/ "./src/components/credit-card-validator/credit-card-validator.js":
/*!***********************************************************************!*\
  !*** ./src/components/credit-card-validator/credit-card-validator.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreditCardValidator: () => (/* binding */ CreditCardValidator),\n/* harmony export */   checkLuhnAlgorithm: () => (/* binding */ checkLuhnAlgorithm),\n/* harmony export */   getPaymentNetwork: () => (/* binding */ getPaymentNetwork),\n/* harmony export */   paymentNetworks: () => (/* binding */ paymentNetworks)\n/* harmony export */ });\n/* harmony import */ var _credit_card_validator_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./credit-card-validator.css */ \"./src/components/credit-card-validator/credit-card-validator.css\");\n\nconst paymentNetworks = [{\n  name: 'VISA',\n  regex: /^4\\d{12,18}$/\n}, {\n  name: 'MASTERCARD',\n  regex: /^(5[1-5]\\d\\d|2(22[1-9]|2[3-9]\\d|[3-6]\\d\\d|7[0-1]\\d\\d|720))\\d{12}$/\n}, {\n  name: 'MIR',\n  regex: /^220[0-4]\\d{12,15}$/\n}, {\n  name: 'UNIONPAY',\n  regex: /^62\\d{14,17}$/\n}, {\n  name: 'UNKNOWN',\n  regex: /.*/\n}];\nclass CreditCardValidator {\n  constructor(element) {\n    if (typeof element === 'string') {\n      element = document.querySelector(element);\n    }\n    this.form = element;\n    this.paymentNetworksLogos = this.form.querySelector('.payment-networks-logos');\n    this.messageArea = this.form.querySelector('.message-area');\n    this.onSubmitHandler = this.onSubmitHandler.bind(this);\n    this.form.addEventListener('submit', this.onSubmitHandler);\n  }\n  onSubmitHandler(e) {\n    e.preventDefault();\n    let cardNumber = String(this.form.elements.cardNumber.value);\n    const selected = this.paymentNetworksLogos.querySelector('.selected');\n    if (selected) {\n      selected.classList.remove('selected');\n    }\n    if (checkLuhnAlgorithm(cardNumber)) {\n      this.messageArea.textContent = 'Card number successfully validated';\n      this.paymentNetworksLogos.querySelector('[data-name=' + getPaymentNetwork(cardNumber) + ']').classList.add('selected');\n    } else {\n      this.messageArea.textContent = 'Card number not validated';\n    }\n  }\n}\nfunction checkLuhnAlgorithm(stringCardNumber) {\n  const cardNumber = Array.from(stringCardNumber, Number);\n  return cardNumber.pop() === (10 - cardNumber.reverse().reduce((a, c, i) => {\n    return a + (c * (1 + (i + 1) % 2) > 9 ? c * (1 + (i + 1) % 2) - 9 : c * (1 + (i + 1) % 2));\n  }, 0) % 10) % 10;\n}\nfunction getPaymentNetwork(stringCardNumber = '') {\n  return paymentNetworks.find(n => n.regex.test(stringCardNumber)).name;\n}\n\n//# sourceURL=webpack://testing/./src/components/credit-card-validator/credit-card-validator.js?\n}");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://testing/./src/css/style.css?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ \"./src/js/app.js\");\n\n\n\n// TODO: write your code in app.js\n\n//# sourceURL=webpack://testing/./src/index.js?\n}");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_credit_card_validator_credit_card_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/credit-card-validator/credit-card-validator */ \"./src/components/credit-card-validator/credit-card-validator.js\");\n\nnew _components_credit_card_validator_credit_card_validator__WEBPACK_IMPORTED_MODULE_0__.CreditCardValidator('.credit-card-validator');\n\n//# sourceURL=webpack://testing/./src/js/app.js?\n}");

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