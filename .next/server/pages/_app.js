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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/SingInButton/style.module.scss":
/*!*******************************************************!*\
  !*** ./src/components/SingInButton/style.module.scss ***!
  \*******************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"singInButton\": \"style_singInButton__MXJr6\",\n\t\"closeIcon\": \"style_closeIcon___1Uei\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaW5nSW5CdXR0b24vc3R5bGUubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9jb21wb25lbnRzL1NpbmdJbkJ1dHRvbi9zdHlsZS5tb2R1bGUuc2Nzcz81MDYzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNpbmdJbkJ1dHRvblwiOiBcInN0eWxlX3NpbmdJbkJ1dHRvbl9fTVhKcjZcIixcblx0XCJjbG9zZUljb25cIjogXCJzdHlsZV9jbG9zZUljb25fX18xVWVpXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SingInButton/style.module.scss\n");

/***/ }),

/***/ "./src/components/header/style.module.scss":
/*!*************************************************!*\
  !*** ./src/components/header/style.module.scss ***!
  \*************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"HeaderComtainer\": \"style_HeaderComtainer__GStqS\",\n\t\"HeaderContent\": \"style_HeaderContent__WaNxP\",\n\t\"active\": \"style_active__8cW87\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvc3R5bGUubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL3N0eWxlLm1vZHVsZS5zY3NzP2FhM2IiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiSGVhZGVyQ29tdGFpbmVyXCI6IFwic3R5bGVfSGVhZGVyQ29tdGFpbmVyX19HU3RxU1wiLFxuXHRcIkhlYWRlckNvbnRlbnRcIjogXCJzdHlsZV9IZWFkZXJDb250ZW50X19XYU54UFwiLFxuXHRcImFjdGl2ZVwiOiBcInN0eWxlX2FjdGl2ZV9fOGNXODdcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/header/style.module.scss\n");

/***/ }),

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _header_style_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/style.module.scss */ \"./src/components/header/style.module.scss\");\n/* harmony import */ var _header_style_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_header_style_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _SingInButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SingInButton */ \"./src/components/SingInButton/index.tsx\");\n\n\n\n\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_header_style_module_scss__WEBPACK_IMPORTED_MODULE_3___default().HeaderComtainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_header_style_module_scss__WEBPACK_IMPORTED_MODULE_3___default().HeaderContent),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/images/logo.svg\",\n                    alt: \"Logo\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: (_header_style_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active),\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                            lineNumber: 11,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: \"Post\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                            lineNumber: 12,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SingInButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\components\\\\Header\\\\index.tsx\",\n            lineNumber: 8,\n            columnNumber: 10\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\components\\\\Header\\\\index.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNzQjtBQUNYO0FBRXJCLFFBQVEsQ0FBQ0csTUFBTSxHQUFHLENBQUM7SUFDaEMsTUFBTSw2RUFDSEMsQ0FBTTtRQUFDQyxTQUFTLEVBQUVKLGtGQUFxQjs4RkFDbENNLENBQUc7WUFBQ0YsU0FBUyxFQUFFSixnRkFBbUI7OzRGQUMvQlEsQ0FBRztvQkFBQ0MsR0FBRyxFQUFDLENBQWtCO29CQUFDQyxHQUFHLEVBQUMsQ0FBTTs7Ozs7OzRGQUNyQ0MsQ0FBRzs7b0dBQ0NDLENBQUM7NEJBQUNSLFNBQVMsRUFBRUoseUVBQVk7c0NBQUUsQ0FBSTs7Ozs7O29HQUMvQlksQ0FBQztzQ0FBQyxDQUFJOzs7Ozs7Ozs7Ozs7NEZBRVZYLHFEQUFNOzs7Ozs7Ozs7Ozs7Ozs7O0FBSW5CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4PzQwMDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uL2hlYWRlci9zdHlsZS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9TaW5nSW5CdXR0b24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGUuSGVhZGVyQ29tdGFpbmVyfT5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLkhlYWRlckNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5zdmdcIiBhbHQ9XCJMb2dvXCIgLz5cclxuICAgICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGUuYWN0aXZlfT5Ib21lPC9hPlxyXG4gICAgICAgICAgICAgICAgPGE+UG9zdDwvYT5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDxCdXR0b24+PC9CdXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZSIsIkJ1dHRvbiIsIkhlYWRlciIsImhlYWRlciIsImNsYXNzTmFtZSIsIkhlYWRlckNvbXRhaW5lciIsImRpdiIsIkhlYWRlckNvbnRlbnQiLCJpbWciLCJzcmMiLCJhbHQiLCJuYXYiLCJhIiwiYWN0aXZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Header/index.tsx\n");

/***/ }),

/***/ "./src/components/SingInButton/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/SingInButton/index.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SingInButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.scss */ \"./src/components/SingInButton/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ \"react-icons/fi\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction SingInButton() {\n    const userLogin = true;\n    return userLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().singInButton),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaGithub, {\n                color: \"#04d361\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\components\\\\SingInButton\\\\index.tsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this),\n            \"Goulart94\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiX, {\n                color: \"#737380\",\n                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().closeIcon)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\components\\\\SingInButton\\\\index.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\components\\\\SingInButton\\\\index.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().singInButton),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaGithub, {\n                color: \"#eba417\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\components\\\\SingInButton\\\\index.tsx\",\n                lineNumber: 23,\n                columnNumber: 11\n            }, this),\n            \"Sing in with GitHub\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\components\\\\SingInButton\\\\index.tsx\",\n        lineNumber: 21,\n        columnNumber: 7\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaW5nSW5CdXR0b24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNjO0FBRUE7QUFDTDtBQUNuQixRQUFRLENBQUNJLFlBQVksR0FBRyxDQUFDO0lBRXBDLEtBQUssQ0FBQ0MsU0FBUyxHQUFHLElBQUk7SUFFeEIsTUFBTSxDQUFDQSxTQUFTLCtFQUViQyxDQUFNO1FBQUNDLElBQUksRUFBQyxDQUFRO1FBQ3JCQyxTQUFTLEVBQUVQLHdFQUFrQjs7d0ZBQ3hCQyxvREFBUTtnQkFBQ1EsS0FBSyxFQUFDLENBQVM7Ozs7OztZQUFFLENBRTNCO3dGQUFDUCwrQ0FBRztnQkFBQ08sS0FBSyxFQUFDLENBQVM7Z0JBQUNGLFNBQVMsRUFBRVAscUVBQWU7Ozs7Ozs7Ozs7OzJGQUtoREssQ0FBTTtRQUFDQyxJQUFJLEVBQUMsQ0FBUTtRQUNyQkMsU0FBUyxFQUFFUCx3RUFBa0I7O3dGQUN4QkMsb0RBQVE7Z0JBQUNRLEtBQUssRUFBQyxDQUFTOzs7Ozs7WUFBRSxDQUUvQjs7Ozs7OztBQUVOLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvY29tcG9uZW50cy9TaW5nSW5CdXR0b24vaW5kZXgudHN4PzYyNjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUubW9kdWxlLnNjc3MnO1xyXG5cclxuaW1wb3J0IHtGYUdpdGh1Yn0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQge0ZpWH0gZnJvbSAncmVhY3QtaWNvbnMvZmknO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW5nSW5CdXR0b24oKSB7XHJcblxyXG4gICAgY29uc3QgdXNlckxvZ2luID0gdHJ1ZTtcclxuXHJcbiAgcmV0dXJuIHVzZXJMb2dpbiA/XHJcbiAgKFxyXG4gICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nXHJcbiAgICBjbGFzc05hbWU9e3N0eWxlLnNpbmdJbkJ1dHRvbn0+XHJcbiAgICAgICAgPEZhR2l0aHViIGNvbG9yPScjMDRkMzYxJy8+XHJcbiAgICAgICAgR291bGFydDk0XHJcbiAgICAgICAgPEZpWCBjb2xvcj0nIzczNzM4MCcgY2xhc3NOYW1lPXtzdHlsZS5jbG9zZUljb259PjwvRmlYPlxyXG5cclxuICAgIDwvYnV0dG9uPlxyXG4pOlxyXG4gIChcclxuICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nXHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGUuc2luZ0luQnV0dG9ufT5cclxuICAgICAgICAgIDxGYUdpdGh1YiBjb2xvcj0nI2ViYTQxNycvPlxyXG4gICAgICAgICAgU2luZyBpbiB3aXRoIEdpdEh1YlxyXG4gICAgICA8L2J1dHRvbj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGUiLCJGYUdpdGh1YiIsIkZpWCIsIlNpbmdJbkJ1dHRvbiIsInVzZXJMb2dpbiIsImJ1dHRvbiIsInR5cGUiLCJjbGFzc05hbWUiLCJzaW5nSW5CdXR0b24iLCJjb2xvciIsImNsb3NlSWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SingInButton/index.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var _style_global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/global.scss */ \"./src/style/global.scss\");\n/* harmony import */ var _style_global_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_global_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 7,\n                columnNumber: 8\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN5QztBQUNaO1NBQ3BCQyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBVyxDQUFDLEVBQUUsQ0FBQztJQUNsRCxNQUFNOzt3RkFFQUgsMERBQU07Ozs7O3dGQUNQRSxTQUFTO21CQUFLQyxTQUFTOzs7Ozs7OztBQUc5QixDQUFDO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FwcFByb3BzfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0ICcuLi9zdHlsZS9nbG9iYWwuc2Nzcyc7XG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICA8PlxuICAgICAgIDxIZWFkZXIvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiSGVhZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/style/global.scss":
/*!*******************************!*\
  !*** ./src/style/global.scss ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();