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

/***/ "./src/fibonacci.js":
/*!**************************!*\
  !*** ./src/fibonacci.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fibs: () => (/* binding */ fibs),\n/* harmony export */   fibsRec: () => (/* binding */ fibsRec)\n/* harmony export */ });\nfunction fibs(n) {\r\n    let result = [];\r\n\r\n    let a = 0;\r\n    let b = 0;\r\n    let c = 1;\r\n\r\n    for (let i = 0; i < n; i++) {\r\n        result.push(a);\r\n\r\n        a = c;\r\n        c = a + b;\r\n        b = a;\r\n    }\r\n    \r\n    return result;\r\n}\r\n\r\n\r\nfunction fibsRec(n, result = []) {\r\n    if (result.length < n) {\r\n        if (result.length == 0) {\r\n            result.push(0);\r\n        } else if (result.length == 1) {\r\n            result.push(1);\r\n        } else {\r\n            result.push(\r\n                result[result.length - 2]\r\n                + result[result.length - 1]\r\n            );\r\n        }\r\n\r\n        return fibsRec(n, result);\r\n    } else {\r\n        return result;\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://recursion/./src/fibonacci.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fibonacci__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fibonacci */ \"./src/fibonacci.js\");\n/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./merge */ \"./src/merge.js\");\n/* harmony import */ var _merge_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./merge-sort */ \"./src/merge-sort.js\");\nconsole.log(\"Webpack configured successfully\");\r\n\r\n\r\n\r\n\r\n\r\n// console.log(fibs(8));\r\n// console.log(fibsRec(8));\r\n\r\n// let a = [1, 3, 7, 9];\r\n// let b = [0, 5, 6, 11];\r\n// let c = [];\r\n// console.log(a);\r\n// console.log(b);\r\n// merge(a, b, c);\r\n// console.log(c);\r\n\r\nlet d = [9, 3, 7, 5, 6, 4, 8, 2];\r\nconsole.log(d);\r\n(0,_merge_sort__WEBPACK_IMPORTED_MODULE_2__.mergeSort)(d);\r\nconsole.log(d);\r\n\n\n//# sourceURL=webpack://recursion/./src/index.js?\n}");

/***/ }),

/***/ "./src/merge-sort.js":
/*!***************************!*\
  !*** ./src/merge-sort.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mergeSort: () => (/* binding */ mergeSort)\n/* harmony export */ });\n/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./merge */ \"./src/merge.js\");\n\r\n\r\nfunction mergeSort(array) {\r\n    let low = 0;\r\n    let high = array.length - 1;\r\n\r\n    if (low < high) {\r\n        let mid = Math.floor((low + high) / 2);\r\n        let left = array.slice(0, mid + 1);\r\n        let right = array.slice(mid + 1);\r\n\r\n        mergeSort(left);\r\n        mergeSort(right);\r\n\r\n        (0,_merge__WEBPACK_IMPORTED_MODULE_0__.merge)(left, right, array);\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://recursion/./src/merge-sort.js?\n}");

/***/ }),

/***/ "./src/merge.js":
/*!**********************!*\
  !*** ./src/merge.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   merge: () => (/* binding */ merge)\n/* harmony export */ });\nfunction merge(left, right, array) {\r\n    let i = 0;\r\n    let j = 0;\r\n    let k = 0;\r\n\r\n    while (i < left.length && j < right.length) {\r\n        if (left[i] < right[j]) {\r\n            array[k++] = left[i++];\r\n        } else {\r\n            array[k++] = right[j++];\r\n        }\r\n    }\r\n\r\n    while (i < left.length) {\r\n        array[k++] = left[i++];\r\n    }\r\n\r\n    while (j < right.length) {\r\n        array[k++] = right[j++];\r\n    }\r\n\r\n    // console.log(array);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://recursion/./src/merge.js?\n}");

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