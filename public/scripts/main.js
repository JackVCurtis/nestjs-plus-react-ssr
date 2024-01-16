export const id = "main";
export const ids = ["main"];
export const modules = {

/***/ "./app/helpers.tsx":
/*!*************************!*\
  !*** ./app/helpers.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeApp: () => (/* binding */ initializeApp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function initializeApp() {
  return _initializeApp.apply(this, arguments);
}
function _initializeApp() {
  _initializeApp = _asyncToGenerator(function* () {
    var {
      state,
      location,
      routes
    } = document.getElementById("initial-state").dataset;
    var parsedState = JSON.parse(state);
    var parsedRoutes = JSON.parse(routes);
    var reactRoutes = [];
    var _loop = function* _loop() {
      var ComponentName = parsedRoutes[path];
      var routeObject = {
        path
      };
      var loader = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator(function* (_ref) {
          var {
            request
          } = _ref;
          var url = new URL(request.url);
          url.pathname += url.pathname.endsWith('/') ? 'pages-api' : '/pages-api';
          var res = yield fetch(url);
          return res;
        });
        return function loader(_x) {
          return _ref2.apply(this, arguments);
        };
      }();
      var url = "http://localhost:3000" + '/public/scripts/' + ComponentName.toLowerCase() + '.js';
      if (path === location) {
        var module = yield import( /* webpackIgnore: true */url);
        var Component = module.default;
        routeObject['element'] = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, null);
        routeObject['loader'] = loader;
      } else {
        routeObject['lazy'] = /*#__PURE__*/_asyncToGenerator(function* () {
          var module = yield import( /* webpackIgnore: true */url);
          var Component = module.default;
          return {
            element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, null),
            loader
          };
        });
      }
      reactRoutes.push(routeObject);
    };
    for (var path of Object.keys(parsedRoutes)) {
      yield* _loop();
    }
    var router = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.createBrowserRouter)(reactRoutes, {
      hydrationData: {
        loaderData: reactRoutes.reduce((acc, route, i) => {
          if (route.path === location) {
            acc[i] = parsedState;
          } else {
            acc[i] = undefined;
          }
          return acc;
        }, {})
      }
    });
    var App = () => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.RouterProvider, {
        router: router
      });
    };
    return App;
  });
  return _initializeApp.apply(this, arguments);
}

/***/ }),

/***/ "./app/main.tsx":
/*!**********************!*\
  !*** ./app/main.tsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./app/helpers.tsx");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function main() {
  return _main.apply(this, arguments);
}
function _main() {
  _main = _asyncToGenerator(function* () {
    var App = yield (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.initializeApp)();
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.hydrateRoot)(document.getElementById('root'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));
  });
  return _main.apply(this, arguments);
}
main();

/***/ })

};
;

// load runtime
import __webpack_require__ from "./vendor.js";
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
import * as __webpack_chunk_0__ from "./main.js";
__webpack_require__.C(__webpack_chunk_0__);
var __webpack_exports__ = __webpack_exec__("./app/main.tsx");

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssQ0FBQzlCLElBQUksS0FBS1osUUFBUSxFQUFFO1lBQ3pCeUMsR0FBRyxDQUFDRSxDQUFDLENBQUMsR0FBR3RDLFdBQVc7VUFDeEIsQ0FBQyxNQUFNO1lBQ0hvQyxHQUFHLENBQUNFLENBQUMsQ0FBQyxHQUFHQyxTQUFTO1VBQ3RCO1VBQ0EsT0FBT0gsR0FBRztRQUNkLENBQUMsRUFBRSxDQUFDLENBQUM7TUFDVDtJQUNKLENBQUMsQ0FBQztJQUVGLElBQU1JLEdBQUcsR0FBR0EsQ0FBQSxLQUFNO01BQ2Qsb0JBQU90RCwwREFBQSxDQUFDQyw0REFBYztRQUFDNkMsTUFBTSxFQUFFQTtNQUFPLENBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsT0FBT1EsR0FBRztFQUNkLENBQUM7RUFBQSxPQUFBbEQsY0FBQSxDQUFBQyxLQUFBLE9BQUFDLFNBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEeUI7QUFDcUI7QUFDTDtBQUFBLFNBRTNCa0QsSUFBSUEsQ0FBQTtFQUFBLE9BQUFDLEtBQUEsQ0FBQXBELEtBQUEsT0FBQUMsU0FBQTtBQUFBO0FBQUEsU0FBQW1ELE1BQUE7RUFBQUEsS0FBQSxHQUFBbEQsaUJBQUEsQ0FBbkIsYUFBc0I7SUFDbEIsSUFBTStDLEdBQUcsU0FBU25ELHVEQUFhLENBQUMsQ0FBQztJQUVqQ29ELDZEQUFXLENBQ1A1QyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxNQUFNLENBQUMsZUFDL0JaLDBEQUFBLENBQUNzRCxHQUFHLE1BQUUsQ0FDVixDQUFDO0VBQ0wsQ0FBQztFQUFBLE9BQUFHLEtBQUEsQ0FBQXBELEtBQUEsT0FBQUMsU0FBQTtBQUFBO0FBRURrRCxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2luc3RhY29pbi8uL2FwcC9oZWxwZXJzLnRzeCIsIndlYnBhY2s6Ly9pbnN0YWNvaW4vLi9hcHAvbWFpbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFN1c3BlbnNlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IE91dGxldCwgUm91dGVPYmplY3QsIFJvdXRlclByb3ZpZGVyLCBjcmVhdGVCcm93c2VyUm91dGVyLCBkZWZlciwganNvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0aWFsaXplQXBwKCk6IFByb21pc2U8UmVhY3QuRkM+IHtcbiAgICBjb25zdCB7IHN0YXRlLCBsb2NhdGlvbiwgcm91dGVzIH0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluaXRpYWwtc3RhdGVcIikuZGF0YXNldFxuICAgIGNvbnN0IHBhcnNlZFN0YXRlID0gSlNPTi5wYXJzZShzdGF0ZSlcbiAgICBjb25zdCBwYXJzZWRSb3V0ZXMgPSBKU09OLnBhcnNlKHJvdXRlcylcbiAgICBjb25zdCByZWFjdFJvdXRlczogUm91dGVPYmplY3RbXSA9IFtdXG4gICAgZm9yIChsZXQgcGF0aCBvZiBPYmplY3Qua2V5cyhwYXJzZWRSb3V0ZXMpKSB7XG4gICAgICAgIGNvbnN0IENvbXBvbmVudE5hbWUgPSBwYXJzZWRSb3V0ZXNbcGF0aF1cbiAgICAgICAgY29uc3Qgcm91dGVPYmplY3QgPSB7XG4gICAgICAgICAgICBwYXRoXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpXG4gICAgICAgICAgICB1cmwucGF0aG5hbWUgKz0gdXJsLnBhdGhuYW1lLmVuZHNXaXRoKCcvJykgPyAncGFnZXMtYXBpJyA6ICcvcGFnZXMtYXBpJ1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKVxuICAgICAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gcHJvY2Vzcy5lbnYuQkFTRV9VUkwgKyAnL3B1YmxpYy9zY3JpcHRzLycgKyBDb21wb25lbnROYW1lLnRvTG93ZXJDYXNlKCkgKyAnLmpzJ1xuXG4gICAgICAgIGlmIChwYXRoID09PSBsb2NhdGlvbikge1xuICAgICAgICAgICAgY29uc3QgbW9kdWxlID0gYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tJZ25vcmU6IHRydWUgKi8gdXJsKVxuICAgICAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gbW9kdWxlLmRlZmF1bHRcbiAgICAgICAgICAgIHJvdXRlT2JqZWN0WydlbGVtZW50J10gPSA8Q29tcG9uZW50IC8+XG4gICAgICAgICAgICByb3V0ZU9iamVjdFsnbG9hZGVyJ10gPSBsb2FkZXJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJvdXRlT2JqZWN0WydsYXp5J10gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kdWxlID0gYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tJZ25vcmU6IHRydWUgKi8gdXJsKVxuICAgICAgICAgICAgICAgIGNvbnN0IENvbXBvbmVudCA9IG1vZHVsZS5kZWZhdWx0XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgZWxlbWVudDogPENvbXBvbmVudCAvPiwgbG9hZGVyIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlYWN0Um91dGVzLnB1c2gocm91dGVPYmplY3QpXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVyID0gY3JlYXRlQnJvd3NlclJvdXRlcihyZWFjdFJvdXRlcywge1xuICAgICAgICBoeWRyYXRpb25EYXRhOiB7XG4gICAgICAgICAgICBsb2FkZXJEYXRhOiByZWFjdFJvdXRlcy5yZWR1Y2UoKGFjYywgcm91dGUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocm91dGUucGF0aCA9PT0gbG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjW2ldID0gcGFyc2VkU3RhdGUgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjW2ldID0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgICAgIH0sIHt9KVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIDxSb3V0ZXJQcm92aWRlciByb3V0ZXI9e3JvdXRlcn0gLz5cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIEFwcFxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaHlkcmF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCIuL2hlbHBlcnNcIjtcblxuYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcbiAgICBjb25zdCBBcHAgPSBhd2FpdCBpbml0aWFsaXplQXBwKClcblxuICAgIGh5ZHJhdGVSb290KFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpLFxuICAgICAgICA8QXBwIC8+ICAgXG4gICAgKTtcbn1cblxubWFpbigpIl0sIm5hbWVzIjpbIlJlYWN0IiwiUm91dGVyUHJvdmlkZXIiLCJjcmVhdGVCcm93c2VyUm91dGVyIiwiaW5pdGlhbGl6ZUFwcCIsIl9pbml0aWFsaXplQXBwIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfYXN5bmNUb0dlbmVyYXRvciIsInN0YXRlIiwibG9jYXRpb24iLCJyb3V0ZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGF0YXNldCIsInBhcnNlZFN0YXRlIiwiSlNPTiIsInBhcnNlIiwicGFyc2VkUm91dGVzIiwicmVhY3RSb3V0ZXMiLCJfbG9vcCIsIkNvbXBvbmVudE5hbWUiLCJwYXRoIiwicm91dGVPYmplY3QiLCJsb2FkZXIiLCJfcmVmMiIsIl9yZWYiLCJyZXF1ZXN0IiwidXJsIiwiVVJMIiwicGF0aG5hbWUiLCJlbmRzV2l0aCIsInJlcyIsImZldGNoIiwiX3giLCJwcm9jZXNzIiwiZW52IiwiQkFTRV9VUkwiLCJ0b0xvd2VyQ2FzZSIsIm1vZHVsZSIsIkNvbXBvbmVudCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiZWxlbWVudCIsInB1c2giLCJPYmplY3QiLCJrZXlzIiwicm91dGVyIiwiaHlkcmF0aW9uRGF0YSIsImxvYWRlckRhdGEiLCJyZWR1Y2UiLCJhY2MiLCJyb3V0ZSIsImkiLCJ1bmRlZmluZWQiLCJBcHAiLCJoeWRyYXRlUm9vdCIsIm1haW4iLCJfbWFpbiJdLCJzb3VyY2VSb290IjoiIn0=