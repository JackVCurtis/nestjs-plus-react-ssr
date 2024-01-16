export const id = "blog";
export const ids = ["blog"];
export const modules = {

/***/ "./app/pages/Blog.tsx":
/*!****************************!*\
  !*** ./app/pages/Blog.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");


var Blog = () => {
  var {
    posts
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLoaderData)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Blog"), posts === null || posts === void 0 ? void 0 : posts.map((post, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: "posts-".concat(i)
  }, post)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: '/'
  }, "Home"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);

/***/ })

};
;

// load runtime
import __webpack_require__ from "./vendor.js";
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
import * as __webpack_chunk_0__ from "./blog.js";
__webpack_require__.C(__webpack_chunk_0__);
var __webpack_exports__ = __webpack_exec__("./app/pages/Blog.tsx");
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUMwQjtBQUM2QjtBQUV2RCxJQUFNRyxJQUFjLEdBQUdBLENBQUEsS0FBTTtFQUN6QixJQUFNO0lBQUVDO0VBQU0sQ0FBQyxHQUFHRiwrREFBYSxDQUFDLENBQWE7RUFFN0Msb0JBQU9GLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNIQSwwREFBQSxhQUFJLE1BQVEsQ0FBQyxFQUVUSSxLQUFLLGFBQUxBLEtBQUssdUJBQUxBLEtBQUssQ0FBRUcsR0FBRyxDQUFDLENBQUNDLElBQUksRUFBRUMsQ0FBQyxrQkFBS1QsMERBQUE7SUFBS1UsR0FBRyxXQUFBQyxNQUFBLENBQVdGLENBQUM7RUFBRyxHQUFFRCxJQUFVLENBQUMsQ0FBQyxlQUVqRVIsMERBQUEsQ0FBQ0Msa0RBQUk7SUFBQ1csRUFBRSxFQUFFO0VBQUksR0FBQyxNQUFVLENBQzNCLENBQUM7QUFDUCxDQUFDO0FBRUQsaUVBQWVULElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnN0YWNvaW4vLi9hcHAvcGFnZXMvQmxvZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmxvZ0RhdGEgfSBmcm9tIFwiaW50ZXJmYWNlcy9CbG9nRGF0YVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluaywgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmNvbnN0IEJsb2c6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcG9zdHMgfSA9IHVzZUxvYWRlckRhdGEoKSBhcyBCbG9nRGF0YSBcblxuICAgIHJldHVybiA8PlxuICAgICAgICA8aDE+QmxvZzwvaDE+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHBvc3RzPy5tYXAoKHBvc3QsIGkpID0+IDxkaXYga2V5PXtgcG9zdHMtJHtpfWB9Pntwb3N0fTwvZGl2PilcbiAgICAgICAgfVxuICAgICAgICA8TGluayB0bz17Jy8nfT5Ib21lPC9MaW5rPlxuICAgIDwvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsInVzZUxvYWRlckRhdGEiLCJCbG9nIiwicG9zdHMiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJtYXAiLCJwb3N0IiwiaSIsImtleSIsImNvbmNhdCIsInRvIl0sInNvdXJjZVJvb3QiOiIifQ==