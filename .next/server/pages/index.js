"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ \"yup\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\n/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hookform/resolvers/yup */ \"@hookform/resolvers/yup\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__]);\n([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction Home() {\n    const { register , handleSubmit , watch , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({\n        mode: \"onTouched\"\n    });\n    const submit = (data)=>{\n        console.log(data);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Paper, {\n            elevation: 3,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"login_wrapper\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"login_heading mb-4 text-center\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shaikrahuman/my projects/frontend-framework/pages/index.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-md-4 col-lg-4 m-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"mt-2\",\n                                onSubmit: handleSubmit(submit),\n                                method: \"post\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.TextField, {\n                                            label: \"Email\",\n                                            helperText: errors.email ? \"Email field is required\" : \"Do not share your email with anyone\",\n                                            type: \"text\",\n                                            fullWidth: true,\n                                            error: errors.email,\n                                            ...register(\"email\", {\n                                                required: true\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shaikrahuman/my projects/frontend-framework/pages/index.js\",\n                                            lineNumber: 32,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shaikrahuman/my projects/frontend-framework/pages/index.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-4 mb-4\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.TextField, {\n                                            label: \"Password\",\n                                            helperText: errors.password ? \"Password field is required\" : \"Do not share your Password with anyone\",\n                                            type: \"password\",\n                                            fullWidth: true,\n                                            error: errors.password,\n                                            ...register(\"password\", {\n                                                required: true\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shaikrahuman/my projects/frontend-framework/pages/index.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shaikrahuman/my projects/frontend-framework/pages/index.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                        fullWidth: true,\n                                        type: \"submit\",\n                                        variant: \"contained\",\n                                        color: \"primary\",\n                                        children: \"Login\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shaikrahuman/my projects/frontend-framework/pages/index.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/shaikrahuman/my projects/frontend-framework/pages/index.js\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/shaikrahuman/my projects/frontend-framework/pages/index.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/shaikrahuman/my projects/frontend-framework/pages/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shaikrahuman/my projects/frontend-framework/pages/index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/shaikrahuman/my projects/frontend-framework/pages/index.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/shaikrahuman/my projects/frontend-framework/pages/index.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this));\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDQztBQUNlO0FBQ1k7QUFDTTtBQUU1QyxRQUFRLENBQUNPLElBQUksR0FBRyxDQUFDO0lBQzlCLEtBQUssQ0FBQyxDQUFDLENBQ0xDLFFBQVEsR0FDUkMsWUFBWSxHQUNaQyxLQUFLLEdBQ0xDLFNBQVMsRUFBRSxDQUFDLENBQUNDLE1BQU0sRUFBQyxDQUFDLElBQ3ZCLENBQUMsR0FBR1Ysd0RBQU8sQ0FBQyxDQUFDO1FBQ1hXLElBQUksRUFBRSxDQUFXO0lBQ25CLENBQUM7SUFDRCxLQUFLLENBQUNDLE1BQU0sSUFBSUMsSUFBSSxHQUFLLENBQUM7UUFDeEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJO0lBQ2xCLENBQUM7SUFDRCxNQUFNLDZFQUNIRyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFXOzhGQUN2QmIsb0RBQUs7WUFBQ2MsU0FBUyxFQUFFLENBQUM7a0dBQ2xCRixDQUFHO2dCQUFDRyxLQUFLLEVBQUMsQ0FBZTs7Z0dBQ3ZCQyxDQUFFO3dCQUFDSCxTQUFTLEVBQUMsQ0FBZ0M7a0NBQUMsQ0FBSzs7Ozs7O2dHQUNuREQsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQUs7OEdBQ2pCRCxDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBMEI7a0hBQ3RDSSxDQUFJO2dDQUNISixTQUFTLEVBQUMsQ0FBTTtnQ0FDaEJLLFFBQVEsRUFBRWYsWUFBWSxDQUFDSyxNQUFNO2dDQUM3QlcsTUFBTSxFQUFDLENBQU07O2dIQUVaUCxDQUFHO3dDQUFDQyxTQUFTLEVBQUMsQ0FBRTs4SEFDZGYsd0RBQVM7NENBQ1JzQixLQUFLLEVBQUMsQ0FBTzs0Q0FDYkMsVUFBVSxFQUNSZixNQUFNLENBQUNnQixLQUFLLEdBQ1IsQ0FBeUIsMkJBQ3pCLENBQXFDOzRDQUUzQ0MsSUFBSSxFQUFDLENBQU07NENBQ1hDLFNBQVM7NENBQ1RDLEtBQUssRUFBRW5CLE1BQU0sQ0FBQ2dCLEtBQUs7K0NBQ2ZwQixRQUFRLENBQUMsQ0FBTyxRQUFFLENBQUM7Z0RBQ3JCd0IsUUFBUSxFQUFFLElBQUk7NENBQ2hCLENBQUM7Ozs7Ozs7Ozs7O2dIQUdKZCxDQUFHO3dDQUFDQyxTQUFTLEVBQUMsQ0FBVzs4SEFDdkJmLHdEQUFTOzRDQUNSc0IsS0FBSyxFQUFDLENBQVU7NENBQ2hCQyxVQUFVLEVBQ1JmLE1BQU0sQ0FBQ3FCLFFBQVEsR0FDWCxDQUE0Qiw4QkFDNUIsQ0FBd0M7NENBRTlDSixJQUFJLEVBQUMsQ0FBVTs0Q0FDZkMsU0FBUzs0Q0FDVEMsS0FBSyxFQUFFbkIsTUFBTSxDQUFDcUIsUUFBUTsrQ0FDbEJ6QixRQUFRLENBQUMsQ0FBVSxXQUFFLENBQUM7Z0RBQ3hCd0IsUUFBUSxFQUFFLElBQUk7NENBQ2hCLENBQUM7Ozs7Ozs7Ozs7O2dIQUdKM0IscURBQU07d0NBQ0x5QixTQUFTO3dDQUNURCxJQUFJLEVBQUMsQ0FBUTt3Q0FDYkssT0FBTyxFQUFDLENBQVc7d0NBQ25CQyxLQUFLLEVBQUMsQ0FBUztrREFDaEIsQ0FFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3Jhdml0aWNlLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyB5dXAgZnJvbSBcInl1cFwiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSBcIkBob29rZm9ybS9yZXNvbHZlcnMveXVwXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQsIEJ1dHRvbixQYXBlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7XG4gICAgcmVnaXN0ZXIsXG4gICAgaGFuZGxlU3VibWl0LFxuICAgIHdhdGNoLFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgfSA9IHVzZUZvcm0oe1xuICAgIG1vZGU6IFwib25Ub3VjaGVkXCIsXG4gIH0pO1xuICBjb25zdCBzdWJtaXQgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8UGFwZXIgZWxldmF0aW9uPXszfT5cbiAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbl93cmFwcGVyXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJsb2dpbl9oZWFkaW5nIG1iLTQgdGV4dC1jZW50ZXJcIj5Mb2dpbjwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBjb2wtbGctNCBtLWF1dG9cIj5cbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTJcIlxuICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHN1Ym1pdCl9XG4gICAgICAgICAgICAgIG1ldGhvZD1cInBvc3RcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17XG4gICAgICAgICAgICAgICAgICAgIGVycm9ycy5lbWFpbFxuICAgICAgICAgICAgICAgICAgICAgID8gXCJFbWFpbCBmaWVsZCBpcyByZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIkRvIG5vdCBzaGFyZSB5b3VyIGVtYWlsIHdpdGggYW55b25lXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5lbWFpbH1cbiAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcImVtYWlsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IG1iLTRcIj5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e1xuICAgICAgICAgICAgICAgICAgICBlcnJvcnMucGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiUGFzc3dvcmQgZmllbGQgaXMgcmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJEbyBub3Qgc2hhcmUgeW91ciBQYXNzd29yZCB3aXRoIGFueW9uZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwicGFzc3dvcmRcIiwge1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9QYXBlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInl1cCIsInVzZUZvcm0iLCJ5dXBSZXNvbHZlciIsIlRleHRGaWVsZCIsIkJ1dHRvbiIsIlBhcGVyIiwiSG9tZSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwid2F0Y2giLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJtb2RlIiwic3VibWl0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJlbGV2YXRpb24iLCJjbGFzcyIsImgzIiwiZm9ybSIsIm9uU3VibWl0IiwibWV0aG9kIiwibGFiZWwiLCJoZWxwZXJUZXh0IiwiZW1haWwiLCJ0eXBlIiwiZnVsbFdpZHRoIiwiZXJyb3IiLCJyZXF1aXJlZCIsInBhc3N3b3JkIiwidmFyaWFudCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ "@hookform/resolvers/yup":
/*!******************************************!*\
  !*** external "@hookform/resolvers/yup" ***!
  \******************************************/
/***/ ((module) => {

module.exports = import("@hookform/resolvers/yup");;

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();