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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_Drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/Drawer */ \"./src/scripts/Drawer.js\");\n/* harmony import */ var _scripts_QuickHacks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/QuickHacks */ \"./src/scripts/QuickHacks.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  new _scripts_Drawer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('#drawer', '#drawer-toggle', '#drawer-close')\n  new _scripts_QuickHacks__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\n});\n\n\n//# sourceURL=webpack://change-me/./src/index.js?\n}");

/***/ }),

/***/ "./src/scripts/Drawer.js":
/*!*******************************!*\
  !*** ./src/scripts/Drawer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Drawer {\n    constructor(drawerSelector, toggleSelector, closeSelector) {\n        this.drawer = document.querySelector(drawerSelector)\n        this.toggle = document.querySelector(toggleSelector)\n        this.hamburger = this.toggle?.querySelector('.group')\n        this.close = closeSelector ? document.querySelector(closeSelector) : null\n\n        if (this.toggle && this.drawer) {\n            this.toggle.addEventListener('click', () => this.toggleDrawer())\n        }\n\n        if (this.close && this.drawer) {\n            this.close.addEventListener('click', () => this.closeDrawer())\n        }\n\n        window.addEventListener('resize', this.handleResize.bind(this))\n\n        document.addEventListener('keydown', (event) => {\n            const isEscKeyPressed = event.key === 'Escape'\n            if(isEscKeyPressed) {\n                this.closeDrawer()\n            }\n        })\n    }\n\n    toggleDrawer() {\n        const isOpen = this.hamburger.classList.contains('open')\n        if(isOpen) {\n            this.closeDrawer()\n        } else {\n            this.openDrawer()\n        }\n    }\n\n    openDrawer() {\n        this.hamburger.classList.add('open')\n        this.drawer.classList.remove('h-0')\n        this.drawer.classList.add('h-screen')\n    }\n\n    closeDrawer() {\n        this.hamburger.classList.remove('open')\n        this.drawer.classList.remove('h-screen') \n        this.drawer.classList.add('h-0')\n    }\n\n    handleResize() {\n        const currentWidth = window.innerWidth;\n        const isLargeViewport = currentWidth >= 1024;\n        const isOpen = this.hamburger.classList.contains('open');\n\n        if(isLargeViewport && isOpen) {\n            this.closeDrawer()\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Drawer);\n\n//# sourceURL=webpack://change-me/./src/scripts/Drawer.js?\n}");

/***/ }),

/***/ "./src/scripts/QuickHacks.js":
/*!***********************************!*\
  !*** ./src/scripts/QuickHacks.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//This is a quick solution but needs to be addressed soon. Keep this minimal and make sure to come back here and move the function to where it correctly belong.\n\nclass QuickHacks {\n  \n  constructor() {\n    this.footerLogo = document.querySelector('#footer-logo')\n    this.copyright = document.querySelector('#copyright')\n    this.footerBody = document.querySelector('#footer-body')\n\n    this.relocate()\n\n    this.events()\n  }\n\n  events() {\n    window.addEventListener('resize', () => {\n      this.relocate();\n    })\n  }\n\n  relocate() {\n    const currentWidth = window.innerWidth\n    const isLargeViewport = currentWidth >= 1024\n\n    if(isLargeViewport) {\n      this.footerLogo.after(this.copyright);\n    } else {\n      this.footerBody.after(this.copyright);\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuickHacks);\n\n//# sourceURL=webpack://change-me/./src/scripts/QuickHacks.js?\n}");

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