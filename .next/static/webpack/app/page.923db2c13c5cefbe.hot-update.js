/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Form */ \"(app-pages-browser)/./src/components/Form.jsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Header */ \"(app-pages-browser)/./src/components/Header.jsx\");\n/* harmony import */ var _components_TODOHero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/TODOHero */ \"(app-pages-browser)/./src/components/TODOHero.jsx\");\n/* harmony import */ var _components_TODOList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/TODOList */ \"(app-pages-browser)/./src/components/TODOList.jsx\");\n/* harmony import */ var _components_TODOList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_TODOList__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [todos, setTodos] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        const storedTodos = localStorage.getItem(\"todos\");\n        if (storedTodos) {\n            setTodos(JSON.parse(storedTodos));\n        }\n    }, []);\n    const todos_completed = todos.filter((todo)=>todo.is_completed).length;\n    const total_todos = todos.length;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"wrapper\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\TO DO LIST\\\\todo\\\\src\\\\app\\\\page.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TODOHero__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                todos_completed: todos_completed,\n                total_todos: total_todos\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\TO DO LIST\\\\todo\\\\src\\\\app\\\\page.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                todos: todos,\n                setTodos: setTodos\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\TO DO LIST\\\\todo\\\\src\\\\app\\\\page.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_TODOList__WEBPACK_IMPORTED_MODULE_5___default()), {\n                todos: todos,\n                setTodos: setTodos\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\TO DO LIST\\\\todo\\\\src\\\\app\\\\page.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\TO DO LIST\\\\todo\\\\src\\\\app\\\\page.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"4w2FR3x+JAhc2MKl4V8naiLXs70=\");\n_c = Home;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUMwQjtBQUVXO0FBQ0k7QUFDSTtBQUNBO0FBRTdDLFNBQVNLOztJQUNQLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUCxxREFBYyxDQUFDLEVBQUU7SUFHM0NBLHNEQUFlLENBQUM7UUFDZCxNQUFNVSxjQUFjQyxhQUFhQyxPQUFPLENBQUM7UUFDekMsSUFBSUYsYUFBYTtZQUNmSCxTQUFTTSxLQUFLQyxLQUFLLENBQUNKO1FBQ3RCO0lBQ0YsR0FBRyxFQUFFO0lBR0wsTUFBTUssa0JBQWtCVCxNQUFNVSxNQUFNLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLFlBQVksRUFBRUMsTUFBTTtJQUN0RSxNQUFNQyxjQUFjZCxNQUFNYSxNQUFNO0lBRWhDLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ3BCLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNDLDREQUFRQTtnQkFBQ1ksaUJBQWlCQTtnQkFBaUJLLGFBQWFBOzs7Ozs7MEJBQ3pELDhEQUFDbkIsd0RBQUlBO2dCQUFDSyxPQUFPQTtnQkFBT0MsVUFBVUE7Ozs7OzswQkFDOUIsOERBQUNILDZEQUFRQTtnQkFBQ0UsT0FBT0E7Z0JBQU9DLFVBQVVBOzs7Ozs7Ozs7Ozs7QUFHeEM7R0F2QlNGO0tBQUFBO0FBeUJULGlFQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBGb3JtIGZyb20gXCJAL2NvbXBvbmVudHMvRm9ybVwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IFRPRE9IZXJvIGZyb20gXCJAL2NvbXBvbmVudHMvVE9ET0hlcm9cIjtcbmltcG9ydCBUT0RPTGlzdCBmcm9tIFwiQC9jb21wb25lbnRzL1RPRE9MaXN0XCI7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdG9yZWRUb2RvcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIik7XG4gICAgaWYgKHN0b3JlZFRvZG9zKSB7XG4gICAgICBzZXRUb2RvcyhKU09OLnBhcnNlKHN0b3JlZFRvZG9zKSk7XG4gICAgfVxuICB9LCBbXSk7XG5cblxuICBjb25zdCB0b2Rvc19jb21wbGV0ZWQgPSB0b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLmlzX2NvbXBsZXRlZCkubGVuZ3RoO1xuICBjb25zdCB0b3RhbF90b2RvcyA9IHRvZG9zLmxlbmd0aDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPFRPRE9IZXJvIHRvZG9zX2NvbXBsZXRlZD17dG9kb3NfY29tcGxldGVkfSB0b3RhbF90b2Rvcz17dG90YWxfdG9kb3N9IC8+XG4gICAgICA8Rm9ybSB0b2Rvcz17dG9kb3N9IHNldFRvZG9zPXtzZXRUb2Rvc30gLz5cbiAgICAgIDxUT0RPTGlzdCB0b2Rvcz17dG9kb3N9IHNldFRvZG9zPXtzZXRUb2Rvc30gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZvcm0iLCJIZWFkZXIiLCJUT0RPSGVybyIsIlRPRE9MaXN0IiwiSG9tZSIsInRvZG9zIiwic2V0VG9kb3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0b3JlZFRvZG9zIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInRvZG9zX2NvbXBsZXRlZCIsImZpbHRlciIsInRvZG8iLCJpc19jb21wbGV0ZWQiLCJsZW5ndGgiLCJ0b3RhbF90b2RvcyIsImRpdiIsImNsYXNzTmFtZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/TODOList.jsx":
/*!*************************************!*\
  !*** ./src/components/TODOList.jsx ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});