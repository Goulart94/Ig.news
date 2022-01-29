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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SingInButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.module.scss */ \"./src/components/SingInButton/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ \"react-icons/fi\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction SingInButton() {\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    console.log(session);\n    return session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().singInButton),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaGithub, {\n                color: \"#04d361\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\components\\\\SingInButton\\\\index.tsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this),\n            session.user.name,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiX, {\n                color: \"#737380\",\n                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().closeIcon),\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\components\\\\SingInButton\\\\index.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\components\\\\SingInButton\\\\index.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().singInButton),\n        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)('github')\n        ,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaGithub, {\n                color: \"#eba417\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\components\\\\SingInButton\\\\index.tsx\",\n                lineNumber: 29,\n                columnNumber: 11\n            }, this),\n            \"Sing in with GitHub\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\components\\\\SingInButton\\\\index.tsx\",\n        lineNumber: 26,\n        columnNumber: 7\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaW5nSW5CdXR0b24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ2M7QUFDc0I7QUFFdEI7QUFDTDtBQUVuQixRQUFRLENBQUNPLFlBQVksR0FBRyxDQUFDO0lBRXRDLEtBQUssQ0FBQyxDQUFDLENBQUNDLElBQUksRUFBRUMsT0FBTyxFQUFDLENBQUMsR0FBR1AsMkRBQVU7SUFFcENRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixPQUFPO0lBRW5CLE1BQU0sQ0FBQ0EsT0FBTywrRUFFWEcsQ0FBTTtRQUFDQyxJQUFJLEVBQUMsQ0FBUTtRQUNyQkMsU0FBUyxFQUFFYix3RUFBa0I7O3dGQUV4Qkksb0RBQVE7Z0JBQUNXLEtBQUssRUFBQyxDQUFTOzs7Ozs7WUFDeEJQLE9BQU8sQ0FBQ1EsSUFBSSxDQUFDQyxJQUFJO3dGQUNqQlosK0NBQUc7Z0JBQUNVLEtBQUssRUFBQyxDQUFTO2dCQUFDRixTQUFTLEVBQUViLHFFQUFlO2dCQUFFbUIsT0FBTyxNQUFRaEIsd0RBQU87Ozs7Ozs7Ozs7OzJGQUt4RVEsQ0FBTTtRQUFDQyxJQUFJLEVBQUMsQ0FBUTtRQUNyQkMsU0FBUyxFQUFFYix3RUFBa0I7UUFDN0JtQixPQUFPLE1BQVFqQix1REFBTSxDQUFDLENBQVE7Ozt3RkFDekJFLG9EQUFRO2dCQUFDVyxLQUFLLEVBQUMsQ0FBUzs7Ozs7O1lBQUUsQ0FFL0I7Ozs7Ozs7QUFFTixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL2NvbXBvbmVudHMvU2luZ0luQnV0dG9uL2luZGV4LnRzeD82MjY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiXHJcblxyXG5pbXBvcnQge0ZhR2l0aHVifSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7RmlYfSBmcm9tICdyZWFjdC1pY29ucy9maSc7XHJcbmltcG9ydCB7IHVzZXJJbmZvIH0gZnJvbSAnb3MnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW5nSW5CdXR0b24oKSB7XHJcblxyXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpXHJcblxyXG4gIGNvbnNvbGUubG9nKHNlc3Npb24pO1xyXG5cclxuICByZXR1cm4gc2Vzc2lvbiA/XHJcbiAgKFxyXG4gICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nXHJcbiAgICBjbGFzc05hbWU9e3N0eWxlLnNpbmdJbkJ1dHRvbn0+XHJcbiAgICBcclxuICAgICAgICA8RmFHaXRodWIgY29sb3I9JyMwNGQzNjEnLz5cclxuICAgICAgICB7c2Vzc2lvbi51c2VyLm5hbWV9XHJcbiAgICAgICAgPEZpWCBjb2xvcj0nIzczNzM4MCcgY2xhc3NOYW1lPXtzdHlsZS5jbG9zZUljb259IG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0gPjwvRmlYPlxyXG5cclxuICAgIDwvYnV0dG9uPlxyXG4pOlxyXG4gIChcclxuICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nXHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGUuc2luZ0luQnV0dG9ufVxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiBzaWduSW4oJ2dpdGh1YicpfT5cclxuICAgICAgICAgIDxGYUdpdGh1YiBjb2xvcj0nI2ViYTQxNycvPlxyXG4gICAgICAgICAgU2luZyBpbiB3aXRoIEdpdEh1YlxyXG4gICAgICA8L2J1dHRvbj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGUiLCJ1c2VTZXNzaW9uIiwic2lnbkluIiwic2lnbk91dCIsIkZhR2l0aHViIiwiRmlYIiwiU2luZ0luQnV0dG9uIiwiZGF0YSIsInNlc3Npb24iLCJjb25zb2xlIiwibG9nIiwiYnV0dG9uIiwidHlwZSIsImNsYXNzTmFtZSIsInNpbmdJbkJ1dHRvbiIsImNvbG9yIiwidXNlciIsIm5hbWUiLCJjbG9zZUljb24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SingInButton/index.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var _style_global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/global.scss */ \"./src/style/global.scss\");\n/* harmony import */ var _style_global_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_global_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_3__.SessionProvider, {\n        session: pageProps.session,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 8,\n                columnNumber: 8\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 4\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ3lDO0FBQ1o7QUFDb0I7U0FDeENFLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFXLENBQUMsRUFBRSxDQUFDO0lBQ2xELE1BQU0sNkVBQ0pILDREQUFlO1FBQUNJLE9BQU8sRUFBRUQsU0FBUyxDQUFDQyxPQUFPOzt3RkFDdENMLDBEQUFNOzs7Ozt3RkFDUEcsU0FBUzttQkFBS0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBRzlCLENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXBwUHJvcHN9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgJy4uL3N0eWxlL2dsb2JhbC5zY3NzJztcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjsgXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3BhZ2VQcm9wcy5zZXNzaW9ufSA+XG4gICAgICAgPEhlYWRlci8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICA8L1Nlc3Npb25Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJTZXNzaW9uUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/style/global.scss":
/*!*******************************!*\
  !*** ./src/style/global.scss ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

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