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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_popover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/popover */ \"./src/js/popover.js\");\n/* harmony import */ var _js_crm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/crm */ \"./src/js/crm.js\");\n/* harmony import */ var _js_trip_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/trip-calendar */ \"./src/js/trip-calendar.js\");\n\n\n\nnew _js_popover__WEBPACK_IMPORTED_MODULE_0__.Popover('.popover-toggle');\nnew _js_crm__WEBPACK_IMPORTED_MODULE_1__.CRM('.crm');\nnew _js_trip_calendar__WEBPACK_IMPORTED_MODULE_2__.TripCalendar('.trip-calendar');\n\n//# sourceURL=webpack://testing/./src/index.js?\n}");

/***/ }),

/***/ "./src/js/crm.css":
/*!************************!*\
  !*** ./src/js/crm.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://testing/./src/js/crm.css?\n}");

/***/ }),

/***/ "./src/js/crm.js":
/*!***********************!*\
  !*** ./src/js/crm.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CRM: () => (/* binding */ CRM),\n/* harmony export */   validation: () => (/* binding */ validation)\n/* harmony export */ });\n/* harmony import */ var _crm_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crm.css */ \"./src/js/crm.css\");\n\nconst products = [{\n  name: \"IPhone XR\",\n  price: 60000\n}, {\n  name: \"Samsung Galaxy S10+\",\n  price: 80000\n}, {\n  name: \"Huawei View\",\n  price: 50000\n}];\nconst validation = {\n  name: {\n    patternMessage: \"Название должно быть от 3 до 50 символов \" + \"и не должно содержать _, {, }, <, >\",\n    pattern: \"^[ ]*[^_\\\\{\\\\} \\\\<\\\\>][^_\\\\{\\\\}\\\\<\\\\>]{1,48}[^_\\\\{\\\\}\\\\<\\\\>][ ]*$\",\n    invalidMessage: \"Такое название уже используется\",\n    //Return invalid messages or valid message '' \n    isValid: (name, update = false) => !RegExp(validation.name.pattern).test(name) ? validation.name.patternMessage : update ? '' : products.find(p => name === p.name) ? validation.name.invalidMessage : ''\n  },\n  price: {\n    pattern: \"^[ ]*[\\\\d ]*\\\\.?[\\\\d ]+$\",\n    patternMessage: \"Цена должна быть неотрицательным числом\",\n    invalidMessage: \"Цена не должна превышать 2 147 483 647\",\n    //Return invalid messages or valid message '' \n    isValid: price => !RegExp(validation.price.pattern).test(price) ? validation.price.patternMessage : Number(price) > 2147483647 ? validation.price.invalidMessage : ''\n  }\n};\nclass CRM {\n  constructor(element) {\n    if (typeof element === 'string') {\n      this.crm = document.querySelector(element);\n    } else {\n      this.crm = element;\n    }\n    this.productsTable = this.crm.querySelector('.products tbody');\n    this.renderProductsTable();\n    this.productForm = this.createProductForm();\n    //Add product click\n    this.crm.querySelector('.create').addEventListener('click', () => {\n      this.selectedProductIndex = null;\n      this.productForm.elements.name.value = '';\n      this.productForm.elements.price.value = '';\n      this.crm.append(this.productForm);\n    });\n  }\n  renderProductsTable() {\n    this.productsTable.innerHTML = products.reduce((a, c) => a + '<tr><td>' + c.name + '</td><td>' + /* 1234.5 to '1 235' */\n    c.price.toFixed(0).replace(/\\B(?=(\\d{3})+(?!\\d))/g, ' ') + '</td><td><div class=\"read\"></div><div class=\"delete\"></div></td></tr>', '');\n    for (let i = 0; i < products.length; i++) {\n      //Add click event to edit element\n      this.productsTable.children[i].children[2].children[0].addEventListener('click', () => {\n        this.selectedProductIndex = i;\n        this.productForm.elements.name.value = products[i].name;\n        this.productForm.elements.price.value = products[i].price;\n        this.crm.append(this.productForm);\n      });\n      //Add click event to delete element\n      this.productsTable.children[i].children[2].children[1].addEventListener('click', () => {\n        this.productsTable.children[i].remove();\n        products.splice(i, 1);\n        this.renderProductsTable();\n      });\n    }\n  }\n  createProductForm() {\n    const productForm = document.createElement('form');\n    //base html\n    productForm.classList.add('product');\n    productForm.innerHTML = `\n      <label for='name'>Название</label><input name='name' type='text'>\n      <label for='price'>Стоимость</label><input name='price' type='text'>\n      <button name='save' type='submit'>Сохранить</button>\n      <button name='cancel' type='button'>Отмена</button>`;\n    //set validation\n    for (const name in validation) {\n      productForm.elements[name].setAttribute('pattern', validation[name].pattern);\n      productForm.elements[name].addEventListener('invalid', ev => ev.target.validity.patternMismatch ? ev.target.setCustomValidity(validation[name].patternMessage) : 0);\n    }\n    productForm.addEventListener('submit', ev => {\n      ev.preventDefault();\n      //check validity\n      let name = productForm.elements.name.value.trim();\n      let message = validation.name.isValid(name, this.selectedProductIndex != null);\n      if (message) {\n        productForm.elements.name.setCustomValidity(message);\n        productForm.elements.name.reportValidity();\n        return;\n      }\n      let price = productForm.elements.price.value.replace(/ /g, '');\n      message = validation.price.isValid(price);\n      if (message) {\n        productForm.elements.price.setCustomValidity(message);\n        productForm.elements.price.reportValidity();\n        return;\n      }\n      //save results\n      price = Number(price);\n      if (this.selectedProductIndex != null) {\n        products[this.selectedProductIndex] = {\n          name: name,\n          price: price\n        };\n      } else {\n        products.push({\n          name: name,\n          price: price\n        });\n      }\n      productForm.remove();\n      this.renderProductsTable();\n    });\n    productForm.addEventListener('change', ev => ev.target.setCustomValidity(''));\n    productForm.elements.cancel.addEventListener('click', () => productForm.remove());\n    return productForm;\n  }\n}\n\n//# sourceURL=webpack://testing/./src/js/crm.js?\n}");

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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TripCalendar: () => (/* binding */ TripCalendar),\n/* harmony export */   validation: () => (/* binding */ validation)\n/* harmony export */ });\n/* harmony import */ var _trip_calendar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trip-calendar.css */ \"./src/js/trip-calendar.css\");\n\nconst validation = {\n  outbound: out => Date.parse(out + 'T24:00:00') >= new Date(),\n  outMessage: 'Вы не сможете уехать в прошлом',\n  inbound: (out, inb) => Date.parse(inb + 'T24:00:00') >= Date.parse(out + 'T24:00:00'),\n  inMessage: 'Вы не сможете вернуться пока еще не там'\n};\nclass TripCalendar {\n  constructor(element) {\n    if (typeof element === \"string\") {\n      element = document.querySelector(element);\n    }\n    this.outbound = element.elements.outbound;\n    this.inbound = element.elements.inbound;\n    // we need YYYY-MM-DD\n    this.today = new Date(Date.parse(new Date()) - new Date().getTimezoneOffset() * 60 * 1000).toISOString().slice(0, 10);\n    this.outbound.setAttribute('min', this.today);\n    this.outbound.addEventListener('invalid', ev => ev.target.validity.rangeUnderflow ? ev.target.setCustomValidity(validation.outMessage) : 0);\n    this.inbound.setAttribute('min', this.today);\n    this.inbound.addEventListener('invalid', ev => ev.target.validity.rangeUnderflow ? ev.target.setCustomValidity(validation.inMessage) : 0);\n    element.elements.return.addEventListener('change', ev => {\n      if (ev.target.checked) {\n        element.querySelector('.hide').classList.remove('hidden');\n        this.outbound.value ? this.inbound.setAttribute('min', this.outbound.value) : 0;\n      } else {\n        element.querySelector('.hide').classList.add('hidden');\n      }\n    });\n    element.addEventListener('change', ev => ev.target.setCustomValidity(''));\n    element.elements.return.addEventListener('change', ev => {\n      if (ev.target.checked) {\n        element.querySelector('.hide').classList.remove('hidden');\n        this.outbound.value ? this.inbound.setAttribute('min', this.outbound.value) : 0;\n      } else {\n        element.querySelector('.hide').classList.add('hidden');\n      }\n    });\n    element.addEventListener('submit', ev => {\n      ev.preventDefault();\n      if (!validation.outbound(this.outbound.value)) {\n        this.outbound.setCustomValidity(validation.outMessage);\n        this.outbound.reportValidity();\n        return;\n      }\n      if (element.elements.return.checked && !validation.inbound(this.outbound.value, this.inbound.value)) {\n        this.inbound.setCustomValidity(validation.inMessage);\n        this.inbound.reportValidity();\n        return;\n      }\n    });\n    element.addEventListener('change', ev => ev.target.setCustomValidity(''));\n  }\n}\n\n//# sourceURL=webpack://testing/./src/js/trip-calendar.js?\n}");

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