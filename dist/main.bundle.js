"use strict";
(self["webpackChunkrestaurant_dom_manip"] = self["webpackChunkrestaurant_dom_manip"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/page-load.js */ "./src/modules/page-load.js");


const contentDiv = document.querySelector("#content");

const load = _modules_page_load_js__WEBPACK_IMPORTED_MODULE_0__["default"];
const navBar = document.createElement("nav");

const navbarItems = ["home", "contact", "memes"];
for (let i = 0; i < navbarItems.length; i++) {
  const navItem = document.createElement("div");
  navItem.classList.add(navbarItems[i]);
  navItem.textContent =
    navbarItems[i].charAt(0).toUpperCase() + navbarItems[i].slice(1);
  navBar.appendChild(navItem);
}
contentDiv.appendChild(navBar);
contentDiv.appendChild(load("home"));


/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function homeLoader() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const title = document.createElement("h1");
  title.textContent = "Mr. Spagetthi";
  title.classList.add("title");

  const description = document.createElement("div");
  description.classList.add("description");
  description.textContent = "You will never forgetti";

  wrapper.appendChild(title);
  wrapper.appendChild(description);

  console.log("Home.js check");

  return wrapper;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeLoader);


/***/ }),

/***/ "./src/modules/page-load.js":
/*!**********************************!*\
  !*** ./src/modules/page-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_lostInSauce_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/lostInSauce.jpg */ "./src/img/lostInSauce.jpg");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/modules/home.js");



function pageRender(status) {
  console.log("page render check");

  if (status === "home") return (0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageRender);


/***/ }),

/***/ "./src/img/lostInSauce.jpg":
/*!*********************************!*\
  !*** ./src/img/lostInSauce.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6a5542ad7880dc536c5f.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBZ0Q7O0FBRWhEOztBQUVBLGFBQWEsNkRBQVU7QUFDdkI7O0FBRUE7QUFDQSxnQkFBZ0Isd0JBQXdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCb0I7QUFDakI7O0FBRTdCO0FBQ0E7O0FBRUEsZ0NBQWdDLG9EQUFJO0FBQ3BDOztBQUVBLGlFQUFlLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLW1hbmlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLW1hbmlwLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS1tYW5pcC8uL3NyYy9tb2R1bGVzL3BhZ2UtbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGFnZUxvYWRlciBmcm9tIFwiLi9tb2R1bGVzL3BhZ2UtbG9hZC5qc1wiO1xuXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5jb25zdCBsb2FkID0gcGFnZUxvYWRlcjtcbmNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5cbmNvbnN0IG5hdmJhckl0ZW1zID0gW1wiaG9tZVwiLCBcImNvbnRhY3RcIiwgXCJtZW1lc1wiXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgbmF2YmFySXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgY29uc3QgbmF2SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5hdkl0ZW0uY2xhc3NMaXN0LmFkZChuYXZiYXJJdGVtc1tpXSk7XG4gIG5hdkl0ZW0udGV4dENvbnRlbnQgPVxuICAgIG5hdmJhckl0ZW1zW2ldLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmF2YmFySXRlbXNbaV0uc2xpY2UoMSk7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChuYXZJdGVtKTtcbn1cbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobmF2QmFyKTtcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobG9hZChcImhvbWVcIikpO1xuIiwiZnVuY3Rpb24gaG9tZUxvYWRlcigpIHtcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIndyYXBwZXJcIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJNci4gU3BhZ2V0dGhpXCI7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIllvdSB3aWxsIG5ldmVyIGZvcmdldHRpXCI7XG5cbiAgd3JhcHBlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gIGNvbnNvbGUubG9nKFwiSG9tZS5qcyBjaGVja1wiKTtcblxuICByZXR1cm4gd3JhcHBlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaG9tZUxvYWRlcjtcbiIsImltcG9ydCBwYXN0YU1hbiBmcm9tIFwiLi4vaW1nL2xvc3RJblNhdWNlLmpwZ1wiO1xuaW1wb3J0IGhvbWUgZnJvbSBcIi4vaG9tZS5qc1wiO1xuXG5mdW5jdGlvbiBwYWdlUmVuZGVyKHN0YXR1cykge1xuICBjb25zb2xlLmxvZyhcInBhZ2UgcmVuZGVyIGNoZWNrXCIpO1xuXG4gIGlmIChzdGF0dXMgPT09IFwiaG9tZVwiKSByZXR1cm4gaG9tZSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlUmVuZGVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9