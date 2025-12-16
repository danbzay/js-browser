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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_helpdesk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/helpdesk */ \"./src/js/helpdesk.js\");\n\n\n//# sourceURL=webpack://trello/./src/index.js?\n}");

/***/ }),

/***/ "./src/js/helpdesk.css":
/*!*****************************!*\
  !*** ./src/js/helpdesk.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://trello/./src/js/helpdesk.css?\n}");

/***/ }),

/***/ "./src/js/helpdesk.js":
/*!****************************!*\
  !*** ./src/js/helpdesk.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpdesk_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpdesk.css */ \"./src/js/helpdesk.css\");\n\nconst URL = 'http://localhost:3000';\nconst tickets = new Map();\n//Add or edit ticket form\nconst ticketForm = document.createElement('form');\nticketForm.classList.add('ticket');\nticketForm.innerHTML = `\n  <h1></h1>\n  <label for=\"name\">Краткое описание</label><br>\n  <input type=\"text\" name=\"name\" required><br>\n  <label for=\"description\">Подробное описание</label><br>\n  <textarea type=\"text\" name=\"description\" rows=\"3\" required></textarea>\n  <button type=\"button\" name=\"cancel\">Отмена</button>\n  <button type=\"submit\">ОК</button>`;\n// Отмена  \nticketForm.elements.cancel.addEventListener('click', ev => {\n  ev.preventDefault();\n  ticketForm.remove();\n});\n// ОК\nticketForm.addEventListener('submit', async ev => {\n  ev.preventDefault();\n  let ticket = {\n    id: ticketForm.dataset.id,\n    name: ticketForm.elements.name.value\n  };\n  try {\n    const resj = await (await fetch(URL, {\n      method: ticket.id === null ? 'POST' : 'PUT',\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        ticket: ticket,\n        description: ticketForm.elements.description.value\n      })\n    })).json();\n    ticket = {\n      ...tickets.get(resj.id),\n      ...ticket,\n      ...resj\n    };\n    tickets.set(ticket.id, ticket);\n    ticketForm.remove();\n    renderTickets();\n    console.log('tickets:' + JSON.stringify([...tickets.values()]));\n  } catch (error) {\n    console.log(error);\n  }\n});\n\n//Add ticket button\nconst addBtn = document.querySelector('.add-ticket');\naddBtn.addEventListener('click', ev => {\n  ev.preventDefault();\n  ticketForm.dataset.id = 'NEW';\n  ticketForm.querySelector('h1').textContent = 'Добавить тикет';\n  ticketForm.elements.name.value = '';\n  ticketForm.elements.description.value = '';\n  document.querySelector('.app').append(ticketForm);\n});\n\n//Delete confirm form\nconst confirmDeleteForm = document.createElement('form');\nconfirmDeleteForm.classList.add('confirm-delete');\nconfirmDeleteForm.innerHTML = `\n  <h1>Точно удаляем?</h1>\n  <p>Вы уверены? Это навсегда.</p>\n  <button type=\"button\" name=\"no\">Нет</button>\n  <button type=\"submit\" name=\"yes\">Да</button>`;\n//No  \nconfirmDeleteForm.elements.no.addEventListener('click', ev => {\n  ev.preventDefault();\n  confirmDeleteForm.remove();\n});\n//Yes\nconfirmDeleteForm.elements.yes.addEventListener('click', async ev => {\n  ev.preventDefault();\n  try {\n    const res = await fetch(URL + '?id=' + confirmDeleteForm.dataset.id, {\n      method: 'DELETE',\n      headers: {\n        'Accept': 'application/json',\n        'Content-type': 'application/json'\n      }\n    });\n    tickets.delete(confirmDeleteForm.dataset.id);\n    ticketsTb.querySelector('[data-id=\"' + confirmDeleteForm.dataset.id).remove();\n    confirmDeleteForm.remove();\n  } catch (error) {\n    console.log(error);\n  }\n});\n\n//Render tickets table\nconst ticketsTb = document.querySelector('.tickets tbody');\nfetch(URL).then(res => res.json()).then(resj => resj.forEach(t => tickets.set(t.id, t))) //tickets.values()\n.then(() => renderTickets());\nfunction renderTickets() {\n  ticketsTb.innerHTML = [...tickets.values()].reduce((a, c) => a + '<tr data-id=\"' + c.id + '\"><td data-status=' + c.status + '></td><td data-full=false><span class=\"name\">' + c.name + '</span><span class=\"description\"></span></td><td>' + new Date(Number(c.created)).toISOString().replace(/^\\d\\d(\\d\\d)-(\\d\\d)-(\\d\\d)T(\\d\\d:\\d\\d).*$/, '$3.$2.$1 $4') + '</td><td class=\"read\"></td><td class=\"delete\"></td></tr>', '');\n  for (const r of ticketsTb.rows) {\n    // Toggle status\n    r.cells[0].addEventListener('click', async () => {\n      try {\n        r.cells[0].dataset.status = (r.cells[0].dataset.status === \"false\") + '';\n        await fetch(URL, {\n          method: 'PUT',\n          headers: {\n            'Accept': 'application/json',\n            'Content-type': 'application/json'\n          },\n          body: JSON.stringify({\n            ticket: {\n              id: r.dataset.id,\n              status: r.cells[0].dataset.status\n            }\n          })\n        });\n        tickets.get(r.dataset.id).status = r.cells[0].dataset.status;\n      } catch (error) {\n        console.log(error);\n      }\n    });\n    // Describe\n    r.cells[1].addEventListener('click', async () => {\n      if (r.cells[1].dataset.full === \"false\") {\n        try {\n          const resj = await (await fetch(URL + '?id=' + r.dataset.id, {\n            method: 'GET',\n            headers: {\n              'Accept': 'application/json',\n              'Content-type': 'application/json'\n            }\n          })).json();\n          console.log(resj);\n          r.cells[1].querySelector('.description').textContent = resj.description;\n          r.cells[1].dataset.full = \"true\";\n        } catch (error) {\n          console.log(error);\n        }\n      } else {\n        r.cells[1].children[1].textContent = '';\n        r.cells[1].dataset.full = \"false\";\n      }\n    });\n    // Edit\n    r.cells[3].addEventListener('click', async () => {\n      try {\n        ticketForm.dataset.id = r.dataset.id;\n        ticketForm.querySelector('h1').textContent = 'Изменить тикет #' + r.dataset.id;\n        const resj = await (await fetch(URL + '?id=' + r.dataset.id, {\n          method: 'GET',\n          headers: {\n            'Accept': 'application/json',\n            'Content-type': 'application/json'\n          }\n        })).json();\n        ticketForm.elements.name.value = resj.ticket.name;\n        ticketForm.elements.description.value = resj.description;\n      } catch (error) {\n        console.log(error);\n      }\n      document.querySelector('.app').append(ticketForm);\n    });\n    // Delete\n    r.cells[4].addEventListener('click', async () => {\n      confirmDeleteForm.dataset.id = r.dataset.id;\n      document.querySelector('.app').append(confirmDeleteForm);\n    });\n  }\n}\n\n//# sourceURL=webpack://trello/./src/js/helpdesk.js?\n}");

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