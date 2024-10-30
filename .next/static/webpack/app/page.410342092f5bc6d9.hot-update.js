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

/***/ "(app-pages-browser)/./src/components/TODOList.jsx":
/*!*************************************!*\
  !*** ./src/components/TODOList.jsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction TODOList(param) {\n    let { todos, setTodos } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n        className: \"todo_list\",\n        children: todos && todos.length > 0 ? todos.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                item: item,\n                todos: todos,\n                setTodos: setTodos\n            }, index, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\TO DO LIST\\\\todo\\\\src\\\\components\\\\TODOList.jsx\",\n                lineNumber: 8,\n                columnNumber: 11\n            }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Seems lonely in here, what are you up to?\"\n        }, void 0, false, {\n            fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\TO DO LIST\\\\todo\\\\src\\\\components\\\\TODOList.jsx\",\n            lineNumber: 11,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\TO DO LIST\\\\todo\\\\src\\\\components\\\\TODOList.jsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = TODOList;\nfunction Item(param) {\n    let { item, todos, setTodos } = param;\n    _s();\n    const [editing, setEditing] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const inputRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    const completeTodo = ()=>{\n        setTodos((prevTodos)=>prevTodos.map((todo)=>todo.id === item.id ? {\n                    ...todo,\n                    is_completed: !todo.is_completed\n                } : todo));\n        const updatedTodos = JSON.stringify(todos);\n        localStorage.setItem(\"todos\", updatedTodos);\n    };\n    const handleEdit = ()=>{\n        setEditing(true);\n    };\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        if (editing && inputRef.current) {\n            inputRef.current.focus();\n            // Position the cursor at the end of the text\n            inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);\n        }\n    }, [\n        editing\n    ]);\n    const handleInputChange = (e)=>{\n        setTodos((prevTodos)=>prevTodos.map((todo)=>todo.id === item.id ? {\n                    ...todo,\n                    title: e.target.value\n                } : todo));\n    };\n    const handleInputSubmit = (event)=>{\n        event.preventDefault();\n        const updatedTodos = JSON.stringify(todos);\n        localStorage.setItem(\"todos\", updatedTodos);\n        setEditing(false);\n    };\n    const handleInputBlur = ()=>{\n        const updatedTodos = JSON.stringify(todos);\n        localStorage.setItem(\"todos\", updatedTodos);\n        setEditing(false);\n    };\n    const handleDelete = ()=>{\n        setTodos((prevTodos)=>prevTodos.filter((todo)=>todo.id !== item.id));\n        const updatedTodos = JSON.stringify(todos.filter((todo)=>todo.id !== item.id));\n        localStorage.setItem(\"todos\", updatedTodos);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        id: item === null || item === void 0 ? void 0 : item.id,\n        className: \"todo_item\",\n        children: editing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"edit-form\",\n            onSubmit: handleInputSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"edit-todo-\".concat(item.id),\n                    children: \"Edit Todo:\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\TO DO LIST\\\\todo\\\\src\\\\components\\\\TODOList.jsx\",\n                    lineNumber: 83,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    ref: inputRef,\n                    type: \"text\",\n                    name: \"edit-todo\",\n                    id: \"edit-todo-\".concat(item.id),\n                    defaultValue: item === null || item === void 0 ? void 0 : item.title,\n                    onBlur: handleInputBlur,\n                    onChange: handleInputChange,\n                    \"aria-label\": \"Edit todo: \".concat(item.title)\n                }, void 0, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\TO DO LIST\\\\todo\\\\src\\\\components\\\\TODOList.jsx\",\n                    lineNumber: 84,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\TO DO LIST\\\\todo\\\\src\\\\components\\\\TODOList.jsx\",\n            lineNumber: 82,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"todo_items_left\",\n                    onClick: completeTodo,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            clipRule: \"evenodd\",\n                            fillRule: \"evenodd\",\n                            strokeLinejoin: \"round\",\n                            strokeMiterlimit: \"2\",\n                            viewBox: \"0 0 24 24\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            width: 34,\n                            height: 34,\n                            stroke: \"#22C55E\",\n                            fill: item.is_completed ? \"#22C55E\" : \"#0d0d0d\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                cx: \"11.998\",\n                                cy: \"11.998\",\n                                fillRule: \"nonzero\",\n                                r: \"9.998\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\TO DO LIST\\\\todo\\\\src\\\\components\\\\TODOList.jsx\",\n                                lineNumber: 110,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\TO DO LIST\\\\todo\\\\src\\\\components\\\\TODOList.jsx\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            style: item.is_completed ? {\n                                textDecoration: \"line-through\"\n                            } : {},\n                            children: item === null || item === void 0 ? void 0 : item.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\TO DO LIST\\\\todo\\\\src\\\\components\\\\TODOList.jsx\",\n                            lineNumber: 112,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\TO DO LIST\\\\todo\\\\src\\\\components\\\\TODOList.jsx\",\n                    lineNumber: 97,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"todo_items_right\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleEdit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"visually-hidden\",\n                                    children: \"Edit\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\TO DO LIST\\\\todo\\\\src\\\\components\\\\TODOList.jsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    clipRule: \"evenodd\",\n                                    fillRule: \"evenodd\",\n                                    strokeLinejoin: \"round\",\n                                    strokeMiterlimit: \"2\",\n                                    viewBox: \"0 0 24 24\",\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    width: 32,\n                                    height: 34,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"m11.25 6c.398 0 .75.352.75.75 0 .414-.336.75-.75.75-1.505 0-7.75 0-7.75 0v12h17v-8.749c0-.414.336-.75.75-.75s.75.336.75.75v9.249c0 .621-.522 1-1 1h-18c-.48 0-1-.379-1-1v-13c0-.481.38-1 1-1zm1.521 9.689 9.012-9.012c.133-.133.217-.329.217-.532 0-.179-.065-.363-.218-.515l-2.423-2.415c-.143-.143-.333-.215-.522-.215s-.378.072-.523.215l-9.027 8.996c-.442 1.371-1.158 3.586-1.264 3.952-.126.433.198.834.572.834.41 0 .696-.099 4.176-1.308zm-2.258-2.392 1.17 1.171c-.704.232-1.274.418-1.729.566zm.968-1.154 7.356-7.331 1.347 1.342-7.346 7.347z\",\n                                        fillRule: \"nonzero\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\TO DO LIST\\\\todo\\\\src\\\\components\\\\TODOList.jsx\",\n                                        lineNumber: 129,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\TO DO LIST\\\\todo\\\\src\\\\components\\\\TODOList.jsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\TO DO LIST\\\\todo\\\\src\\\\components\\\\TODOList.jsx\",\n                            lineNumber: 117,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleDelete,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"visually-hidden\",\n                                    children: \"Delete\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\TO DO LIST\\\\todo\\\\src\\\\components\\\\TODOList.jsx\",\n                                    lineNumber: 136,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    clipRule: \"evenodd\",\n                                    fillRule: \"evenodd\",\n                                    strokeLinejoin: \"round\",\n                                    strokeMiterlimit: \"2\",\n                                    viewBox: \"0 0 24 24\",\n                                    width: 32,\n                                    height: 34,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z\",\n                                        fillRule: \"nonzero\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\TO DO LIST\\\\todo\\\\src\\\\components\\\\TODOList.jsx\",\n                                        lineNumber: 147,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\TO DO LIST\\\\todo\\\\src\\\\components\\\\TODOList.jsx\",\n                                    lineNumber: 137,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\TO DO LIST\\\\todo\\\\src\\\\components\\\\TODOList.jsx\",\n                            lineNumber: 135,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\TO DO LIST\\\\todo\\\\src\\\\components\\\\TODOList.jsx\",\n                    lineNumber: 116,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\projects\\\\TO DO LIST\\\\todo\\\\src\\\\components\\\\TODOList.jsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n}\n_s(Item, \"1UEfVEAFbmtm6l8isYfTn5UXqqk=\");\n_c1 = Item;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TODOList);\nvar _c, _c1;\n$RefreshReg$(_c, \"TODOList\");\n$RefreshReg$(_c1, \"Item\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RPRE9MaXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFFMUIsU0FBU0MsU0FBUyxLQUFtQjtRQUFuQixFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFuQjtJQUNoQixxQkFDRSw4REFBQ0M7UUFBR0MsV0FBVTtrQkFDWEgsU0FBU0EsTUFBTUksTUFBTSxHQUFHLElBQ3ZCSixNQUFNSyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2YsOERBQUNDO2dCQUFpQkYsTUFBTUE7Z0JBQU1OLE9BQU9BO2dCQUFPQyxVQUFVQTtlQUEzQ007Ozs7c0NBR2IsOERBQUNFO3NCQUFFOzs7Ozs7Ozs7OztBQUlYO0tBWlNWO0FBY1QsU0FBU1MsS0FBSyxLQUF5QjtRQUF6QixFQUFFRixJQUFJLEVBQUVOLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQXpCOztJQUNaLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHYixxREFBYyxDQUFDO0lBQzdDLE1BQU1lLFdBQVdmLG1EQUFZLENBQUM7SUFFOUIsTUFBTWlCLGVBQWU7UUFDbkJkLFNBQVMsQ0FBQ2UsWUFDUkEsVUFBVVgsR0FBRyxDQUFDLENBQUNZLE9BQ2JBLEtBQUtDLEVBQUUsS0FBS1osS0FBS1ksRUFBRSxHQUNmO29CQUFFLEdBQUdELElBQUk7b0JBQUVFLGNBQWMsQ0FBQ0YsS0FBS0UsWUFBWTtnQkFBQyxJQUM1Q0Y7UUFJUixNQUFNRyxlQUFlQyxLQUFLQyxTQUFTLENBQUN0QjtRQUNwQ3VCLGFBQWFDLE9BQU8sQ0FBQyxTQUFTSjtJQUNoQztJQUVBLE1BQU1LLGFBQWE7UUFDakJkLFdBQVc7SUFDYjtJQUVBYixzREFBZSxDQUFDO1FBQ2QsSUFBSVksV0FBV0csU0FBU2MsT0FBTyxFQUFFO1lBQy9CZCxTQUFTYyxPQUFPLENBQUNDLEtBQUs7WUFDdEIsNkNBQTZDO1lBQzdDZixTQUFTYyxPQUFPLENBQUNFLGlCQUFpQixDQUNoQ2hC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Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJZiw4REFBQ0o7NEJBQU9DLFNBQVNoQjs7OENBQ2YsOERBQUNtQztvQ0FBS3ZFLFdBQVU7OENBQWtCOzs7Ozs7OENBQ2xDLDhEQUFDcUQ7b0NBQ0NNLE9BQU07b0NBQ05MLFVBQVM7b0NBQ1RDLFVBQVM7b0NBQ1RDLGdCQUFlO29DQUNmQyxrQkFBaUI7b0NBQ2pCQyxTQUFRO29DQUNSRSxPQUFPO29DQUNQQyxRQUFROzhDQUVSLDRFQUFDVzt3Q0FDQ0MsR0FBRTt3Q0FDRmxCLFVBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVMzQjtHQTdJU2xEO01BQUFBO0FBK0lULGlFQUFlVCxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVE9ET0xpc3QuanN4PzgxOGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBUT0RPTGlzdCh7IHRvZG9zLCBzZXRUb2RvcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPG9sIGNsYXNzTmFtZT1cInRvZG9fbGlzdFwiPlxuICAgICAge3RvZG9zICYmIHRvZG9zLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgIHRvZG9zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8SXRlbSBrZXk9e2luZGV4fSBpdGVtPXtpdGVtfSB0b2Rvcz17dG9kb3N9IHNldFRvZG9zPXtzZXRUb2Rvc30gLz5cbiAgICAgICAgKSlcbiAgICAgICkgOiAoXG4gICAgICAgIDxwPlNlZW1zIGxvbmVseSBpbiBoZXJlLCB3aGF0IGFyZSB5b3UgdXAgdG8/PC9wPlxuICAgICAgKX1cbiAgICA8L29sPlxuICApO1xufVxuXG5mdW5jdGlvbiBJdGVtKHsgaXRlbSwgdG9kb3MsIHNldFRvZG9zIH0pIHtcbiAgY29uc3QgW2VkaXRpbmcsIHNldEVkaXRpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICBjb25zdCBjb21wbGV0ZVRvZG8gPSAoKSA9PiB7XG4gICAgc2V0VG9kb3MoKHByZXZUb2RvcykgPT5cbiAgICAgIHByZXZUb2Rvcy5tYXAoKHRvZG8pID0+XG4gICAgICAgIHRvZG8uaWQgPT09IGl0ZW0uaWRcbiAgICAgICAgICA/IHsgLi4udG9kbywgaXNfY29tcGxldGVkOiAhdG9kby5pc19jb21wbGV0ZWQgfVxuICAgICAgICAgIDogdG9kb1xuICAgICAgKVxuICAgICk7XG5cbiAgICBjb25zdCB1cGRhdGVkVG9kb3MgPSBKU09OLnN0cmluZ2lmeSh0b2Rvcyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2Rvc1wiLCB1cGRhdGVkVG9kb3MpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUVkaXQgPSAoKSA9PiB7XG4gICAgc2V0RWRpdGluZyh0cnVlKTtcbiAgfTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChlZGl0aW5nICYmIGlucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgIC8vIFBvc2l0aW9uIHRoZSBjdXJzb3IgYXQgdGhlIGVuZCBvZiB0aGUgdGV4dFxuICAgICAgaW5wdXRSZWYuY3VycmVudC5zZXRTZWxlY3Rpb25SYW5nZShcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC52YWx1ZS5sZW5ndGgsXG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQudmFsdWUubGVuZ3RoXG4gICAgICApO1xuICAgIH1cbiAgfSwgW2VkaXRpbmddKTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0VG9kb3MoKHByZXZUb2RvcykgPT5cbiAgICAgIHByZXZUb2Rvcy5tYXAoKHRvZG8pID0+XG4gICAgICAgIHRvZG8uaWQgPT09IGl0ZW0uaWQgPyB7IC4uLnRvZG8sIHRpdGxlOiBlLnRhcmdldC52YWx1ZSB9IDogdG9kb1xuICAgICAgKVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHVwZGF0ZWRUb2RvcyA9IEpTT04uc3RyaW5naWZ5KHRvZG9zKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9zXCIsIHVwZGF0ZWRUb2Rvcyk7XG4gICAgc2V0RWRpdGluZyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRCbHVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRUb2RvcyA9IEpTT04uc3RyaW5naWZ5KHRvZG9zKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9zXCIsIHVwZGF0ZWRUb2Rvcyk7XG4gICAgc2V0RWRpdGluZyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKCkgPT4ge1xuICAgIHNldFRvZG9zKChwcmV2VG9kb3MpID0+IHByZXZUb2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uaWQgIT09IGl0ZW0uaWQpKTtcblxuICAgIGNvbnN0IHVwZGF0ZWRUb2RvcyA9IEpTT04uc3RyaW5naWZ5KFxuICAgICAgdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmlkICE9PSBpdGVtLmlkKVxuICAgICk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2Rvc1wiLCB1cGRhdGVkVG9kb3MpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGxpIGlkPXtpdGVtPy5pZH0gY2xhc3NOYW1lPVwidG9kb19pdGVtXCI+XG4gICAgICB7ZWRpdGluZyA/IChcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZWRpdC1mb3JtXCIgb25TdWJtaXQ9e2hhbmRsZUlucHV0U3VibWl0fT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YGVkaXQtdG9kby0ke2l0ZW0uaWR9YH0+RWRpdCBUb2RvOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cImVkaXQtdG9kb1wiXG4gICAgICAgICAgICBpZD17YGVkaXQtdG9kby0ke2l0ZW0uaWR9YH0gLy8gVW5pcXVlIElEIGZvciBlYWNoIGlucHV0XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2l0ZW0/LnRpdGxlfVxuICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVJbnB1dEJsdXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtgRWRpdCB0b2RvOiAke2l0ZW0udGl0bGV9YH0gXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRvZG9faXRlbXNfbGVmdFwiIG9uQ2xpY2s9e2NvbXBsZXRlVG9kb30+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICBzdHJva2VNaXRlcmxpbWl0PVwiMlwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgd2lkdGg9ezM0fVxuICAgICAgICAgICAgICBoZWlnaHQ9ezM0fVxuICAgICAgICAgICAgICBzdHJva2U9XCIjMjJDNTVFXCJcbiAgICAgICAgICAgICAgZmlsbD17aXRlbS5pc19jb21wbGV0ZWQgPyBcIiMyMkM1NUVcIiA6IFwiIzBkMGQwZFwifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTEuOTk4XCIgY3k9XCIxMS45OThcIiBmaWxsUnVsZT1cIm5vbnplcm9cIiByPVwiOS45OThcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8cCBzdHlsZT17aXRlbS5pc19jb21wbGV0ZWQgPyB7IHRleHREZWNvcmF0aW9uOiBcImxpbmUtdGhyb3VnaFwiIH0gOiB7fX0+XG4gICAgICAgICAgICAgIHtpdGVtPy50aXRsZX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG9faXRlbXNfcmlnaHRcIj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRWRpdH0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZpc3VhbGx5LWhpZGRlblwiPkVkaXQ8L3NwYW4+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdD1cIjJcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIHdpZHRoPXszMn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezM0fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGQ9XCJtMTEuMjUgNmMuMzk4IDAgLjc1LjM1Mi43NS43NSAwIC40MTQtLjMzNi43NS0uNzUuNzUtMS41MDUgMC03Ljc1IDAtNy43NSAwdjEyaDE3di04Ljc0OWMwLS40MTQuMzM2LS43NS43NS0uNzVzLjc1LjMzNi43NS43NXY5LjI0OWMwIC42MjEtLjUyMiAxLTEgMWgtMThjLS40OCAwLTEtLjM3OS0xLTF2LTEzYzAtLjQ4MS4zOC0xIDEtMXptMS41MjEgOS42ODkgOS4wMTItOS4wMTJjLjEzMy0uMTMzLjIxNy0uMzI5LjIxNy0uNTMyIDAtLjE3OS0uMDY1LS4zNjMtLjIxOC0uNTE1bC0yLjQyMy0yLjQxNWMtLjE0My0uMTQzLS4zMzMtLjIxNS0uNTIyLS4yMTVzLS4zNzguMDcyLS41MjMuMjE1bC05LjAyNyA4Ljk5NmMtLjQ0MiAxLjM3MS0xLjE1OCAzLjU4Ni0xLjI2NCAzLjk1Mi0uMTI2LjQzMy4xOTguODM0LjU3Mi44MzQuNDEgMCAuNjk2LS4wOTkgNC4xNzYtMS4zMDh6bS0yLjI1OC0yLjM5MiAxLjE3IDEuMTcxYy0uNzA0LjIzMi0xLjI3NC40MTgtMS43MjkuNTY2em0uOTY4LTEuMTU0IDcuMzU2LTcuMzMxIDEuMzQ3IDEuMzQyLTcuMzQ2IDcuMzQ3elwiXG4gICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cIm5vbnplcm9cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZpc3VhbGx5LWhpZGRlblwiPkRlbGV0ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VNaXRlcmxpbWl0PVwiMlwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9ezMyfVxuICAgICAgICAgICAgICAgIGhlaWdodD17MzR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgZD1cIm00LjAxNSA1LjQ5NGgtLjI1M2MtLjQxMyAwLS43NDctLjMzNS0uNzQ3LS43NDdzLjMzNC0uNzQ3Ljc0Ny0uNzQ3aDUuMjUzdi0xYzAtLjUzNS40NzQtMSAxLTFoNGMuNTI2IDAgMSAuNDY1IDEgMXYxaDUuMjU0Yy40MTIgMCAuNzQ2LjMzNS43NDYuNzQ3cy0uMzM0Ljc0Ny0uNzQ2Ljc0N2gtLjI1NHYxNS40MzVjMCAuNTkxLS40NDggMS4wNzEtMSAxLjA3MS0yLjg3MyAwLTExLjEyNyAwLTE0IDAtLjU1MiAwLTEtLjQ4LTEtMS4wNzF6bTE0LjUgMGgtMTN2MTUuMDA2aDEzem0tNC4yNSAyLjUwNmMtLjQxNCAwLS43NS4zMzYtLjc1Ljc1djguNWMwIC40MTQuMzM2Ljc1Ljc1Ljc1cy43NS0uMzM2Ljc1LS43NXYtOC41YzAtLjQxNC0uMzM2LS43NS0uNzUtLjc1em0tNC41IDBjLS40MTQgMC0uNzUuMzM2LS43NS43NXY4LjVjMCAuNDE0LjMzNi43NS43NS43NXMuNzUtLjMzNi43NS0uNzV2LTguNWMwLS40MTQtLjMzNi0uNzUtLjc1LS43NXptMy43NS00di0uNWgtM3YuNXpcIlxuICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJub256ZXJvXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9saT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVE9ET0xpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUT0RPTGlzdCIsInRvZG9zIiwic2V0VG9kb3MiLCJvbCIsImNsYXNzTmFtZSIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIkl0ZW0iLCJwIiwiZWRpdGluZyIsInNldEVkaXRpbmciLCJ1c2VTdGF0ZSIsImlucHV0UmVmIiwidXNlUmVmIiwiY29tcGxldGVUb2RvIiwicHJldlRvZG9zIiwidG9kbyIsImlkIiwiaXNfY29tcGxldGVkIiwidXBkYXRlZFRvZG9zIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJoYW5kbGVFZGl0IiwidXNlRWZmZWN0IiwiY3VycmVudCIsImZvY3VzIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJ2YWx1ZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRpdGxlIiwidGFyZ2V0IiwiaGFuZGxlSW5wdXRTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlSW5wdXRCbHVyIiwiaGFuZGxlRGVsZXRlIiwiZmlsdGVyIiwibGkiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInJlZiIsInR5cGUiLCJuYW1lIiwiZGVmYXVsdFZhbHVlIiwib25CbHVyIiwib25DaGFuZ2UiLCJhcmlhLWxhYmVsIiwiYnV0dG9uIiwib25DbGljayIsInN2ZyIsImNsaXBSdWxlIiwiZmlsbFJ1bGUiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZU1pdGVybGltaXQiLCJ2aWV3Qm94IiwieG1sbnMiLCJ3aWR0aCIsImhlaWdodCIsInN0cm9rZSIsImZpbGwiLCJjaXJjbGUiLCJjeCIsImN5IiwiciIsInN0eWxlIiwidGV4dERlY29yYXRpb24iLCJkaXYiLCJzcGFuIiwicGF0aCIsImQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/TODOList.jsx\n"));

/***/ })

});