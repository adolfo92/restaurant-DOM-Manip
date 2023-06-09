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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBZ0Q7O0FBRWhEOztBQUVBLGFBQWEsNkRBQVU7QUFDdkI7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJvQjtBQUNqQjs7QUFFN0I7QUFDQTs7QUFFQSxnQ0FBZ0Msb0RBQUk7QUFDcEM7O0FBRUEsaUVBQWUsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20tbWFuaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20tbWFuaXAvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLW1hbmlwLy4vc3JjL21vZHVsZXMvcGFnZS1sb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYWdlTG9hZGVyIGZyb20gXCIuL21vZHVsZXMvcGFnZS1sb2FkLmpzXCI7XG5cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbmNvbnN0IGxvYWQgPSBwYWdlTG9hZGVyO1xuY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcblxuY29udGVudERpdi5hcHBlbmRDaGlsZChuYXZCYXIpO1xuXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKGxvYWQoXCJob21lXCIpKTtcbiIsImZ1bmN0aW9uIGhvbWVMb2FkZXIoKSB7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ3cmFwcGVyXCIpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiTXIuIFNwYWdldHRoaVwiO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJZb3Ugd2lsbCBuZXZlciBmb3JnZXR0aVwiO1xuXG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICBjb25zb2xlLmxvZyhcIkhvbWUuanMgY2hlY2tcIik7XG5cbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVMb2FkZXI7XG4iLCJpbXBvcnQgcGFzdGFNYW4gZnJvbSBcIi4uL2ltZy9sb3N0SW5TYXVjZS5qcGdcIjtcbmltcG9ydCBob21lIGZyb20gXCIuL2hvbWUuanNcIjtcblxuZnVuY3Rpb24gcGFnZVJlbmRlcihzdGF0dXMpIHtcbiAgY29uc29sZS5sb2coXCJwYWdlIHJlbmRlciBjaGVja1wiKTtcblxuICBpZiAoc3RhdHVzID09PSBcImhvbWVcIikgcmV0dXJuIGhvbWUoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFnZVJlbmRlcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==