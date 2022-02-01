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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/fauna */ \"./src/services/fauna.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GITHUB_CLIENT_ID,\n            clientSecret: process.env.GITHUB_CLIENT_SECRET,\n            authorization: {\n                params: {\n                    scope: 'read:user'\n                }\n            }\n        }), \n    ],\n    callbacks: {\n        async signIn ({ user , account , profile  }) {\n            const { email  } = user;\n            try {\n                await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.If(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Not(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Exists(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Casefold(user.email)))), faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Collection('users'), {\n                    data: {\n                        email\n                    }\n                }), faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Casefold(user.email)))));\n                return true;\n            } catch  {\n                return false;\n            }\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNnQztBQUN1QjtBQUNyQjtBQUVhO0FBRy9DLGlFQUFlQSxnREFBUSxDQUFDLENBQUM7SUFFdkJLLFNBQVMsRUFBRSxDQUFDO1FBQ1ZKLGlFQUFjLENBQUMsQ0FBQztZQUNkSyxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxnQkFBZ0I7WUFDdENDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLG9CQUFvQjtZQUM5Q0MsYUFBYSxFQUFFLENBQUM7Z0JBQ2RDLE1BQU0sRUFBRSxDQUFDO29CQUNQQyxLQUFLLEVBQUUsQ0FBVztnQkFDcEIsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0lBRUgsQ0FBQztJQUNBQyxTQUFTLEVBQUUsQ0FBQztjQUNIQyxNQUFNLEVBQUMsQ0FBQ0MsQ0FBQUEsSUFBSSxHQUFFQyxPQUFPLEdBQUVDLE9BQU8sR0FBQyxFQUFFLENBQUM7WUFDdEMsS0FBSyxDQUFDLENBQUNDLENBQUFBLEtBQUssR0FBQyxHQUFHSCxJQUFJO1lBQ3JCLEdBQUcsRUFBQztnQkFDSCxLQUFLLENBQUNiLHdEQUFXLENBQ2hCRCw2Q0FBSSxDQUNGQSw4Q0FBSyxDQUNIQSxpREFBUSxDQUNOQSxnREFBTyxDQUNMQSxnREFBTyxDQUFDLENBQWUsaUJBQ3ZCQSxtREFBVSxDQUFDYyxJQUFJLENBQUNHLEtBQUssTUFJMUJqQixpREFBUSxDQUNSQSxxREFBWSxDQUFDLENBQU8sU0FDcEIsQ0FBQzBCO29CQUFBQSxJQUFJLEVBQUcsQ0FBQ1Q7d0JBQUFBLEtBQUs7b0JBQUEsQ0FBQztnQkFBQyxDQUFDLEdBRW5CakIsOENBQUssQ0FDSEEsZ0RBQU8sQ0FDTEEsZ0RBQU8sQ0FBQyxDQUFlLGlCQUN2QkEsbURBQVUsQ0FBQ2MsSUFBSSxDQUFDRyxLQUFLO2dCQU0xQixNQUFNLENBQUMsSUFBSTtZQUNiLENBQUMsQ0FDQSxLQUFLLEVBQ0wsQ0FBQztnQkFDQyxNQUFNLENBQUMsS0FBSztZQUNkLENBQUM7UUFDSixDQUFDO0lBRUYsQ0FBQztBQUVMLENBQUMsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/NTBhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiO1xyXG5pbXBvcnQge3F1ZXJ5IGFzIHF9IGZyb20gJ2ZhdW5hZGInO1xyXG5cclxuaW1wb3J0IHsgZmF1bmEgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvZmF1bmFcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XHJcblxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgR2l0aHViUHJvdmlkZXIoe1xyXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX1NFQ1JFVCxcclxuICAgICAgYXV0aG9yaXphdGlvbjoge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgc2NvcGU6ICdyZWFkOnVzZXInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgXHJcbiAgXSxcclxuICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgIGFzeW5jIHNpZ25Jbih7dXNlciwgYWNjb3VudCwgcHJvZmlsZX0pIHtcclxuICAgICAgICBjb25zdCB7ZW1haWx9ID0gdXNlclxyXG4gICAgICAgdHJ5e1xyXG4gICAgICAgIGF3YWl0IGZhdW5hLnF1ZXJ5KFxyXG4gICAgICAgICBxLklmKFxyXG4gICAgICAgICAgIHEuTm90KFxyXG4gICAgICAgICAgICAgcS5FeGlzdHMoXHJcbiAgICAgICAgICAgICAgIHEuTWF0Y2goXHJcbiAgICAgICAgICAgICAgICAgcS5JbmRleCgndXNlcl9ieV9lbWFpbCcpLFxyXG4gICAgICAgICAgICAgICAgIHEuQ2FzZWZvbGQodXNlci5lbWFpbClcclxuICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICksXHJcbiAgICAgICAgICAgIHEuQ3JlYXRlKFxyXG4gICAgICAgICAgICBxLkNvbGxlY3Rpb24oJ3VzZXJzJyksXHJcbiAgICAgICAgICAgIHtkYXRhIDoge2VtYWlsfSB9XHJcbiAgICAgICAgICApLCBcclxuICAgICAgICAgIHEuR2V0KFxyXG4gICAgICAgICAgICBxLk1hdGNoKFxyXG4gICAgICAgICAgICAgIHEuSW5kZXgoJ3VzZXJfYnlfZW1haWwnKSxcclxuICAgICAgICAgICAgICBxLkNhc2Vmb2xkKHVzZXIuZW1haWwpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIClcclxuICAgICAgICAgKVxyXG5cclxuICAgICAgICApO1xyXG4gICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgfSBcclxuICAgICAgICBjYXRjaFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICB9LFxyXG5cclxuICAgIH1cclxuICBcclxufSk7Il0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR2l0aHViUHJvdmlkZXIiLCJxdWVyeSIsInEiLCJmYXVuYSIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfQ0xJRU5UX1NFQ1JFVCIsImF1dGhvcml6YXRpb24iLCJwYXJhbXMiLCJzY29wZSIsImNhbGxiYWNrcyIsInNpZ25JbiIsInVzZXIiLCJhY2NvdW50IiwicHJvZmlsZSIsImVtYWlsIiwiSWYiLCJOb3QiLCJFeGlzdHMiLCJNYXRjaCIsIkluZGV4IiwiQ2FzZWZvbGQiLCJDcmVhdGUiLCJDb2xsZWN0aW9uIiwiZGF0YSIsIkdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": () => (/* binding */ fauna)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n    secret: process.env.FAUNA_KEY\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZmF1bmEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThCO0FBRXZCLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEdBQUcsQ0FBQ0QsMkNBQU0sQ0FBQyxDQUFDO0lBRS9CRSxNQUFNLEVBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFTO0FBRWhDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvZmF1bmEudHM/MzIzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NsaWVudH0gZnJvbSAnZmF1bmFkYic7XHJcblxyXG5leHBvcnQgY29uc3QgZmF1bmEgPSBuZXcgQ2xpZW50KHtcclxuXHJcbiAgc2VjcmV0IDogcHJvY2Vzcy5lbnYuRkFVTkFfS0VZICBcclxuXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiQ2xpZW50IiwiZmF1bmEiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiRkFVTkFfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/fauna.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();