"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ \"./node_modules/yup/es/index.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hookform/resolvers/yup */ \"./node_modules/@hookform/resolvers/yup/dist/yup.module.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({\n        mode: \"onTouched\"\n    }), register = ref.register, handleSubmit = ref.handleSubmit, watch = ref.watch, errors = ref.formState.errors;\n    var submit = function(data) {\n        console.log(data);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"container login_wrapper\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"Login_text justify-content-center align-items-center\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/Users/shaikrahuman/my projects/frontend-framework/pages/index.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-md-4 col-lg-4 m-auto\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"mt-2\",\n                            onSubmit: handleSubmit(submit),\n                            method: \"post\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.TextField, _objectSpread({\n                                        label: \"Email\",\n                                        helperText: errors.email ? \"Email field is required\" : \"Do not share your email with anyone\",\n                                        type: \"text\",\n                                        fullWidth: true,\n                                        error: errors.email\n                                    }, register(\"email\", {\n                                        required: true\n                                    })), void 0, false, {\n                                        fileName: \"/Users/shaikrahuman/my projects/frontend-framework/pages/index.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/shaikrahuman/my projects/frontend-framework/pages/index.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-4 mb-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.TextField, _objectSpread({\n                                        label: \"Password\",\n                                        helperText: errors.email ? \"Password field is required\" : \"Do not share your Password with anyone\",\n                                        type: \"password\",\n                                        fullWidth: true,\n                                        error: errors.password\n                                    }, register(\"password\", {\n                                        required: true\n                                    })), void 0, false, {\n                                        fileName: \"/Users/shaikrahuman/my projects/frontend-framework/pages/index.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/shaikrahuman/my projects/frontend-framework/pages/index.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    fullWidth: true,\n                                    type: \"submit\",\n                                    variant: \"contained\",\n                                    color: \"primary\",\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/shaikrahuman/my projects/frontend-framework/pages/index.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/shaikrahuman/my projects/frontend-framework/pages/index.js\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/shaikrahuman/my projects/frontend-framework/pages/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/shaikrahuman/my projects/frontend-framework/pages/index.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/shaikrahuman/my projects/frontend-framework/pages/index.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/shaikrahuman/my projects/frontend-framework/pages/index.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this));\n};\n_s(Home, \"+LcrTzTax1ndAePIwZBfPwbnP68=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ0M7QUFDZTtBQUNZO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxRQUFRLENBQUNNLElBQUksR0FBRyxDQUFDOztJQUM5QixHQUFLLENBS0RKLEdBRUYsR0FGRUEsd0RBQU8sQ0FBQyxDQUFDO1FBQ1hLLElBQUksRUFBRSxDQUFXO0lBQ25CLENBQUMsR0FOQ0MsUUFBUSxHQUlOTixHQUVGLENBTkFNLFFBQVEsRUFDUkMsWUFBWSxHQUdWUCxHQUVGLENBTEFPLFlBQVksRUFDWkMsS0FBSyxHQUVIUixHQUVGLENBSkFRLEtBQUssRUFDUUMsTUFBTSxHQUNqQlQsR0FFRixDQUhBVSxTQUFTLENBQUlELE1BQU07SUFJckIsR0FBSyxDQUFDRSxNQUFNLEdBQUcsUUFBUSxDQUFQQyxJQUFJLEVBQUssQ0FBQztRQUN4QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUk7SUFDbEIsQ0FBQztJQUNELE1BQU0sNkVBQ0hHLENBQUc7OEZBQ0RBLENBQUc7WUFBQ0MsS0FBSyxFQUFDLENBQXlCOzs0RkFDakNDLENBQUU7b0JBQUNDLFNBQVMsRUFBQyxDQUFzRDs4QkFBQyxDQUFLOzs7Ozs7NEZBQ3pFSCxDQUFHO29CQUFDRyxTQUFTLEVBQUMsQ0FBSzswR0FDakJILENBQUc7d0JBQUNHLFNBQVMsRUFBQyxDQUEwQjs4R0FDdENDLENBQUk7NEJBQ0hELFNBQVMsRUFBQyxDQUFNOzRCQUNoQkUsUUFBUSxFQUFFYixZQUFZLENBQUNJLE1BQU07NEJBQzdCVSxNQUFNLEVBQUMsQ0FBTTs7NEdBRVpOLENBQUc7b0NBQUNHLFNBQVMsRUFBQyxDQUFFOzBIQUNkaEIsd0RBQVM7d0NBQ1JvQixLQUFLLEVBQUMsQ0FBTzt3Q0FDYkMsVUFBVSxFQUNSZCxNQUFNLENBQUNlLEtBQUssR0FDUixDQUF5QiwyQkFDekIsQ0FBcUM7d0NBRTNDQyxJQUFJLEVBQUMsQ0FBTTt3Q0FDWEMsU0FBUzt3Q0FDVEMsS0FBSyxFQUFFbEIsTUFBTSxDQUFDZSxLQUFLO3VDQUNmbEIsUUFBUSxDQUFDLENBQU8sUUFBRSxDQUFDO3dDQUNyQnNCLFFBQVEsRUFBRSxJQUFJO29DQUNoQixDQUFDOzs7Ozs7Ozs7OzRHQUdKYixDQUFHO29DQUFDRyxTQUFTLEVBQUMsQ0FBVzswSEFDdkJoQix3REFBUzt3Q0FDUm9CLEtBQUssRUFBQyxDQUFVO3dDQUNoQkMsVUFBVSxFQUNSZCxNQUFNLENBQUNlLEtBQUssR0FDUixDQUE0Qiw4QkFDNUIsQ0FBd0M7d0NBRTlDQyxJQUFJLEVBQUMsQ0FBVTt3Q0FDZkMsU0FBUzt3Q0FDVEMsS0FBSyxFQUFFbEIsTUFBTSxDQUFDb0IsUUFBUTt1Q0FDbEJ2QixRQUFRLENBQUMsQ0FBVSxXQUFFLENBQUM7d0NBQ3hCc0IsUUFBUSxFQUFFLElBQUk7b0NBQ2hCLENBQUM7Ozs7Ozs7Ozs7NEdBR0p6QixxREFBTTtvQ0FDTHVCLFNBQVM7b0NBQ1RELElBQUksRUFBQyxDQUFRO29DQUNiSyxPQUFPLEVBQUMsQ0FBVztvQ0FDbkJDLEtBQUssRUFBQyxDQUFTOzhDQUNoQixDQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPZCxDQUFDO0dBckV1QjNCLElBQUk7O1FBTXRCSixvREFBTzs7O0tBTldJLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyB5dXAgZnJvbSBcInl1cFwiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSBcIkBob29rZm9ybS9yZXNvbHZlcnMveXVwXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQsIEJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7XG4gICAgcmVnaXN0ZXIsXG4gICAgaGFuZGxlU3VibWl0LFxuICAgIHdhdGNoLFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgfSA9IHVzZUZvcm0oe1xuICAgIG1vZGU6IFwib25Ub3VjaGVkXCIsXG4gIH0pO1xuICBjb25zdCBzdWJtaXQgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGxvZ2luX3dyYXBwZXJcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIkxvZ2luX3RleHQganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5Mb2dpbjwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBjb2wtbGctNCBtLWF1dG9cIj5cbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTJcIlxuICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHN1Ym1pdCl9XG4gICAgICAgICAgICAgIG1ldGhvZD1cInBvc3RcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17XG4gICAgICAgICAgICAgICAgICAgIGVycm9ycy5lbWFpbFxuICAgICAgICAgICAgICAgICAgICAgID8gXCJFbWFpbCBmaWVsZCBpcyByZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIkRvIG5vdCBzaGFyZSB5b3VyIGVtYWlsIHdpdGggYW55b25lXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5lbWFpbH1cbiAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcImVtYWlsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IG1iLTRcIj5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e1xuICAgICAgICAgICAgICAgICAgICBlcnJvcnMuZW1haWxcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiUGFzc3dvcmQgZmllbGQgaXMgcmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJEbyBub3Qgc2hhcmUgeW91ciBQYXNzd29yZCB3aXRoIGFueW9uZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwicGFzc3dvcmRcIiwge1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwieXVwIiwidXNlRm9ybSIsInl1cFJlc29sdmVyIiwiVGV4dEZpZWxkIiwiQnV0dG9uIiwiSG9tZSIsIm1vZGUiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsIndhdGNoIiwiZXJyb3JzIiwiZm9ybVN0YXRlIiwic3VibWl0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzcyIsImgyIiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwibWV0aG9kIiwibGFiZWwiLCJoZWxwZXJUZXh0IiwiZW1haWwiLCJ0eXBlIiwiZnVsbFdpZHRoIiwiZXJyb3IiLCJyZXF1aXJlZCIsInBhc3N3b3JkIiwidmFyaWFudCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});