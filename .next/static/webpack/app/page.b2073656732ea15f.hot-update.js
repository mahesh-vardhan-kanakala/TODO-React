"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/TODOHero.jsx":
/*!*************************************!*\
  !*** ./src/components/TODOHero.jsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"(app-pages-browser)/./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // Import PropTypes for validation\nfunction TODOHero(param) {\n    let { todos_completed, total_todos } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"todohero_section\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text_large\",\n                        children: \"Task Done\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\TO DO LIST\\\\todo\\\\src\\\\components\\\\TODOHero.jsx\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text_small\",\n                        children: \"Keep it up\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\TO DO LIST\\\\todo\\\\src\\\\components\\\\TODOHero.jsx\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\TO DO LIST\\\\todo\\\\src\\\\components\\\\TODOHero.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    todos_completed,\n                    \"/\",\n                    total_todos\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\TO DO LIST\\\\todo\\\\src\\\\components\\\\TODOHero.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\TO DO LIST\\\\todo\\\\src\\\\components\\\\TODOHero.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = TODOHero;\nTODOHero.propTypes = {\n    todos_completed: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired,\n    total_todos: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TODOHero);\nvar _c;\n$RefreshReg$(_c, \"TODOHero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RPRE9IZXJvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQ1MsQ0FBQyxrQ0FBa0M7QUFFdEUsU0FBU0UsU0FBUyxLQUFnQztRQUFoQyxFQUFFQyxlQUFlLEVBQUVDLFdBQVcsRUFBRSxHQUFoQztJQUNoQixxQkFDRSw4REFBQ0M7UUFBUUMsV0FBVTs7MEJBQ2pCLDhEQUFDQzs7a0NBQ0MsOERBQUNDO3dCQUFFRixXQUFVO2tDQUFhOzs7Ozs7a0NBQzFCLDhEQUFDRTt3QkFBRUYsV0FBVTtrQ0FBYTs7Ozs7Ozs7Ozs7OzBCQUU1Qiw4REFBQ0M7O29CQUNFSjtvQkFBZ0I7b0JBQUVDOzs7Ozs7Ozs7Ozs7O0FBSTNCO0tBWlNGO0FBZVRBLFNBQVNPLFNBQVMsR0FBRztJQUNuQk4saUJBQWlCRiwwREFBZ0IsQ0FBQ1UsVUFBVTtJQUM1Q1AsYUFBYUgsMERBQWdCLENBQUNVLFVBQVU7QUFDMUM7QUFFQSxpRUFBZVQsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RPRE9IZXJvLmpzeD83ZWQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjsgLy8gSW1wb3J0IFByb3BUeXBlcyBmb3IgdmFsaWRhdGlvblxuXG5mdW5jdGlvbiBUT0RPSGVybyh7IHRvZG9zX2NvbXBsZXRlZCwgdG90YWxfdG9kb3MgfSkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRvZG9oZXJvX3NlY3Rpb25cIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRfbGFyZ2VcIj5UYXNrIERvbmU8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRfc21hbGxcIj5LZWVwIGl0IHVwPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICB7dG9kb3NfY29tcGxldGVkfS97dG90YWxfdG9kb3N9XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cblxuVE9ET0hlcm8ucHJvcFR5cGVzID0ge1xuICB0b2Rvc19jb21wbGV0ZWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCwgLy8gRW5zdXJlIHRvZG9zX2NvbXBsZXRlZCBpcyBhIG51bWJlciBhbmQgaXMgcmVxdWlyZWRcbiAgdG90YWxfdG9kb3M6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCwgLy8gRW5zdXJlIHRvdGFsX3RvZG9zIGlzIGEgbnVtYmVyIGFuZCBpcyByZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVE9ET0hlcm87XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJUT0RPSGVybyIsInRvZG9zX2NvbXBsZXRlZCIsInRvdGFsX3RvZG9zIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInAiLCJwcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/TODOHero.jsx\n"));

/***/ })

});