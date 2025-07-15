/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/Drawer.js":
/*!*******************************!*\
  !*** ./src/scripts/Drawer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Drawer {
  constructor(drawerSelector, toggleSelector, closeSelector) {
    this.drawer = document.querySelector(drawerSelector);
    this.toggle = document.querySelector(toggleSelector);
    this.hamburger = this.toggle?.querySelector('.group');
    this.close = closeSelector ? document.querySelector(closeSelector) : null;
    if (this.toggle && this.drawer) {
      this.toggle.addEventListener('click', () => this.toggleDrawer());
    }
    if (this.close && this.drawer) {
      this.close.addEventListener('click', () => this.closeDrawer());
    }
    window.addEventListener('resize', this.handleResize.bind(this));
    document.addEventListener('keydown', event => {
      const isEscKeyPressed = event.key === 'Escape';
      if (isEscKeyPressed) {
        this.closeDrawer();
      }
    });
  }
  toggleDrawer() {
    const isOpen = this.hamburger.classList.contains('open');
    if (isOpen) {
      this.closeDrawer();
    } else {
      this.openDrawer();
    }
  }
  openDrawer() {
    this.hamburger.classList.add('open');
    this.drawer.classList.remove('h-0');
    this.drawer.classList.add('h-screen');
  }
  closeDrawer() {
    this.hamburger.classList.remove('open');
    this.drawer.classList.remove('h-screen');
    this.drawer.classList.add('h-0');
  }
  handleResize() {
    const currentWidth = window.innerWidth;
    const isLargeViewport = currentWidth >= 1024;
    const isOpen = this.hamburger.classList.contains('open');
    if (isLargeViewport && isOpen) {
      this.closeDrawer();
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Drawer);

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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_Drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/Drawer */ "./src/scripts/Drawer.js");

document.addEventListener('DOMContentLoaded', function () {
  new _scripts_Drawer__WEBPACK_IMPORTED_MODULE_0__["default"]('#drawer', '#drawer-toggle', '#drawer-close');
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map