"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/SingInButton/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/SingInButton/index.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SingInButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.scss */ \"./src/components/SingInButton/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SingInButton() {\n    _s();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)(), session = ref.data;\n    console.log(session);\n    return session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_3___default().singInButton),\n        onClick: function() {\n            return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)('github');\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaGithub, {\n                color: \"#04d361\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\components\\\\SingInButton\\\\index.tsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this),\n            \"Goulart94\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiX, {\n                color: \"#737380\",\n                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_3___default().closeIcon)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\components\\\\SingInButton\\\\index.tsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\components\\\\SingInButton\\\\index.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_3___default().singInButton),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaGithub, {\n                color: \"#eba417\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\components\\\\SingInButton\\\\index.tsx\",\n                lineNumber: 27,\n                columnNumber: 11\n            }, this),\n            \"Sing in with GitHub\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\components\\\\SingInButton\\\\index.tsx\",\n        lineNumber: 25,\n        columnNumber: 7\n    }, this);\n};\n_s(SingInButton, \"xGqsfA9Yc4bug2CeORcyTsHwvXY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = SingInButton;\nvar _c;\n$RefreshReg$(_c, \"SingInButton\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaW5nSW5CdXR0b24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDYztBQUNzQjtBQUV0QjtBQUNMOztBQUNuQixRQUFRLENBQUNNLFlBQVksR0FBRyxDQUFDOztJQUV0QyxHQUFLLENBQXFCSixHQUFZLEdBQVpBLDJEQUFVLElBQXRCSyxPQUFPLEdBQUtMLEdBQVksQ0FBOUJNLElBQUk7SUFFWkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILE9BQU87SUFFbkIsTUFBTSxDQUFDQSxPQUFPLCtFQUVYSSxDQUFNO1FBQUNDLElBQUksRUFBQyxDQUFRO1FBQ3JCQyxTQUFTLEVBQUVaLHdFQUFrQjtRQUM3QmMsT0FBTyxFQUFFLFFBQVE7WUFBSFosTUFBTSxDQUFOQSx1REFBTSxDQUFDLENBQVE7Ozt3RkFDeEJDLG9EQUFRO2dCQUFDWSxLQUFLLEVBQUMsQ0FBUzs7Ozs7O1lBQUUsQ0FFM0I7d0ZBQUNYLCtDQUFHO2dCQUFDVyxLQUFLLEVBQUMsQ0FBUztnQkFBQ0gsU0FBUyxFQUFFWixxRUFBZTs7Ozs7Ozs7Ozs7MkZBS2hEVSxDQUFNO1FBQUNDLElBQUksRUFBQyxDQUFRO1FBQ3JCQyxTQUFTLEVBQUVaLHdFQUFrQjs7d0ZBQ3hCRyxvREFBUTtnQkFBQ1ksS0FBSyxFQUFDLENBQVM7Ozs7OztZQUFFLENBRS9COzs7Ozs7O0FBRU4sQ0FBQztHQXhCdUJWLFlBQVk7O1FBRVJKLHVEQUFVOzs7S0FGZEksWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaW5nSW5CdXR0b24vaW5kZXgudHN4PzYyNjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduSW4sIHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCJcclxuXHJcbmltcG9ydCB7RmFHaXRodWJ9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHtGaVh9IGZyb20gJ3JlYWN0LWljb25zL2ZpJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2luZ0luQnV0dG9uKCkge1xyXG5cclxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKVxyXG5cclxuICBjb25zb2xlLmxvZyhzZXNzaW9uKTtcclxuXHJcbiAgcmV0dXJuIHNlc3Npb24gP1xyXG4gIChcclxuICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xyXG4gICAgY2xhc3NOYW1lPXtzdHlsZS5zaW5nSW5CdXR0b259XHJcbiAgICBvbkNsaWNrPXsoKT0+IHNpZ25JbignZ2l0aHViJyl9PlxyXG4gICAgICAgIDxGYUdpdGh1YiBjb2xvcj0nIzA0ZDM2MScvPlxyXG4gICAgICAgIEdvdWxhcnQ5NFxyXG4gICAgICAgIDxGaVggY29sb3I9JyM3MzczODAnIGNsYXNzTmFtZT17c3R5bGUuY2xvc2VJY29ufT48L0ZpWD5cclxuXHJcbiAgICA8L2J1dHRvbj5cclxuKTpcclxuICAoXHJcbiAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJ1xyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlLnNpbmdJbkJ1dHRvbn0+XHJcbiAgICAgICAgICA8RmFHaXRodWIgY29sb3I9JyNlYmE0MTcnLz5cclxuICAgICAgICAgIFNpbmcgaW4gd2l0aCBHaXRIdWJcclxuICAgICAgPC9idXR0b24+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlIiwidXNlU2Vzc2lvbiIsInNpZ25JbiIsIkZhR2l0aHViIiwiRmlYIiwiU2luZ0luQnV0dG9uIiwic2Vzc2lvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiYnV0dG9uIiwidHlwZSIsImNsYXNzTmFtZSIsInNpbmdJbkJ1dHRvbiIsIm9uQ2xpY2siLCJjb2xvciIsImNsb3NlSWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SingInButton/index.tsx\n");

/***/ })

});