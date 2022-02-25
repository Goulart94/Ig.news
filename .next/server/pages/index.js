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

/***/ "./src/components/SubscribeButton/style.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/SubscribeButton/style.module.scss ***!
  \**********************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"subscribeButton\": \"style_subscribeButton__nD5ak\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vc3R5bGUubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vc3R5bGUubW9kdWxlLnNjc3M/N2JkZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzdWJzY3JpYmVCdXR0b25cIjogXCJzdHlsZV9zdWJzY3JpYmVCdXR0b25fX25ENWFrXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/style.module.scss\n");

/***/ }),

/***/ "./src/pages/homeStyle.module.scss":
/*!*****************************************!*\
  !*** ./src/pages/homeStyle.module.scss ***!
  \*****************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"contentContainer\": \"homeStyle_contentContainer__js0uE\",\n\t\"hero\": \"homeStyle_hero__eOUN_\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZVN0eWxlLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvaG9tZVN0eWxlLm1vZHVsZS5zY3NzPzdhOTAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGVudENvbnRhaW5lclwiOiBcImhvbWVTdHlsZV9jb250ZW50Q29udGFpbmVyX19qczB1RVwiLFxuXHRcImhlcm9cIjogXCJob21lU3R5bGVfaGVyb19fZU9VTl9cIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/homeStyle.module.scss\n");

/***/ }),

/***/ "./src/components/SubscribeButton/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/SubscribeButton/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SubscribeButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/api/api */ \"./src/pages/api/api.ts\");\n/* harmony import */ var _pages_api_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/api/stripe-js */ \"./src/pages/api/stripe-js.ts\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.scss */ \"./src/components/SubscribeButton/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction SubscribeButton({ priceId  }) {\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    async function hendleSubscribe() {\n        if (!session) {\n            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)('github');\n            return;\n        }\n        try {\n            const response = await _pages_api_api__WEBPACK_IMPORTED_MODULE_2__.api.post('/subscribe');\n            const { sessionId  } = response.data;\n            const stripeJs = await (0,_pages_api_stripe_js__WEBPACK_IMPORTED_MODULE_3__.getStripeJs)();\n            await stripeJs.redirectToCheckout({\n                sessionId: sessionId\n            });\n        } catch (err) {\n            alert(err.message);\n        }\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().subscribeButton),\n        onClick: hendleSubscribe,\n        children: \"Subscribe now\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\components\\\\SubscribeButton\\\\index.tsx\",\n        lineNumber: 37,\n        columnNumber: 7\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDb0Q7QUFDWDtBQUNjO0FBQ2hCO0FBTXhCLFFBQVEsQ0FBQ0ssZUFBZSxDQUFDLENBQUNDLENBQUFBLE9BQU8sRUFBc0IsQ0FBQyxFQUFFLENBQUM7SUFDeEUsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLEVBQUMsQ0FBQyxHQUFHUCwyREFBVTttQkFFckJRLGVBQWUsR0FBRSxDQUFDO1FBQy9CLEVBQUUsR0FBRUQsT0FBTyxFQUFDLENBQUM7WUFDWFIsdURBQU0sQ0FBQyxDQUFRO1lBQ2YsTUFBTTtRQUVSLENBQUM7UUFDRCxHQUFHLEVBQUM7WUFDRixLQUFLLENBQUNVLFFBQVEsR0FBRyxLQUFLLENBQUNSLG9EQUFRLENBQUMsQ0FBWTtZQUU1QyxLQUFLLENBQUMsQ0FBQ1UsQ0FBQUEsU0FBUyxHQUFDLEdBQUdGLFFBQVEsQ0FBQ0gsSUFBSTtZQUVqQyxLQUFLLENBQUNNLFFBQVEsR0FBRyxLQUFLLENBQUNWLGlFQUFXO1lBRWxDLEtBQUssQ0FBQ1UsUUFBUSxDQUFDQyxrQkFBa0IsQ0FBQyxDQUFDRjtnQkFBQUEsU0FBUyxFQUFFQSxTQUFTO1lBQUEsQ0FBQztRQUkxRCxDQUFDLE1BQUssRUFBQ0csR0FBRyxFQUFDLENBQUM7WUFDVkMsS0FBSyxDQUFDRCxHQUFHLENBQUNFLE9BQU87UUFFbkIsQ0FBQztJQUNILENBQUM7SUFDRCxNQUFNLDZFQUNEQyxDQUFNO1FBQUNDLElBQUksRUFBQyxDQUFRO1FBQUNDLFNBQVMsRUFBRWhCLDJFQUFxQjtRQUFFa0IsT0FBTyxFQUFFYixlQUFlO2tCQUFFLENBRWxGOzs7Ozs7QUFHTixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uL2luZGV4LnRzeD85MGU2Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBzaWduSW4sIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi8uLi9wYWdlcy9hcGkvYXBpJztcclxuaW1wb3J0IHsgZ2V0U3RyaXBlSnMgfSBmcm9tICcuLi8uLi9wYWdlcy9hcGkvc3RyaXBlLWpzJztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUubW9kdWxlLnNjc3MnO1xyXG5cclxuaW50ZXJmYWNlIFN1YnNjcmliZVByb2R1Y3RQcm9wc3tcclxuICBwcmljZUlkOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3Vic2NyaWJlQnV0dG9uKHtwcmljZUlkfTpTdWJzY3JpYmVQcm9kdWN0UHJvcHMpIHtcclxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKVxyXG4gIFxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhlbmRsZVN1YnNjcmliZSgpe1xyXG4gICAgaWYoIXNlc3Npb24pe1xyXG4gICAgICBzaWduSW4oJ2dpdGh1YicpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoJy9zdWJzY3JpYmUnKTtcclxuXHJcbiAgICAgIGNvbnN0IHtzZXNzaW9uSWR9ID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgIGNvbnN0IHN0cmlwZUpzID0gYXdhaXQgZ2V0U3RyaXBlSnMoKTtcclxuICAgICAgXHJcbiAgICAgIGF3YWl0IHN0cmlwZUpzLnJlZGlyZWN0VG9DaGVja291dCh7c2Vzc2lvbklkOiBzZXNzaW9uSWR9KTtcclxuXHJcblxyXG5cclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICBhbGVydChlcnIubWVzc2FnZSk7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e3N0eWxlLnN1YnNjcmliZUJ1dHRvbn0gb25DbGljaz17aGVuZGxlU3Vic2NyaWJlfT5cclxuICAgICAgICAgIFN1YnNjcmliZSBub3dcclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInNpZ25JbiIsInVzZVNlc3Npb24iLCJhcGkiLCJnZXRTdHJpcGVKcyIsInN0eWxlIiwiU3Vic2NyaWJlQnV0dG9uIiwicHJpY2VJZCIsImRhdGEiLCJzZXNzaW9uIiwiaGVuZGxlU3Vic2NyaWJlIiwicmVzcG9uc2UiLCJwb3N0Iiwic2Vzc2lvbklkIiwic3RyaXBlSnMiLCJyZWRpcmVjdFRvQ2hlY2tvdXQiLCJlcnIiLCJhbGVydCIsIm1lc3NhZ2UiLCJidXR0b24iLCJ0eXBlIiwiY2xhc3NOYW1lIiwic3Vic2NyaWJlQnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/index.tsx\n");

/***/ }),

/***/ "./src/pages/api/api.ts":
/*!******************************!*\
  !*** ./src/pages/api/api.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: '/api'\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2FwaS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUI7QUFFbEIsS0FBSyxDQUFDQyxHQUFHLEdBQUdELG1EQUFZLENBQzNCLENBQUM7SUFDR0csT0FBTyxFQUFFLENBQU07QUFDbkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9wYWdlcy9hcGkvYXBpLnRzPzhmZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZShcclxuICAgIHtcclxuICAgICAgICBiYXNlVVJMOiAnL2FwaSdcclxuICAgIH1cclxuKSJdLCJuYW1lcyI6WyJheGlvcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/api.ts\n");

/***/ }),

/***/ "./src/pages/api/stripe-js.ts":
/*!************************************!*\
  !*** ./src/pages/api/stripe-js.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStripeJs\": () => (/* binding */ getStripeJs)\n/* harmony export */ });\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ \"@stripe/stripe-js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getStripeJs() {\n    const stripeJs = await (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__.loadStripe)(\"pk_test_51KNHb9AWRu2jah07DISQHyflNd7rtiPqZPl5PmRiJAEXzj677zo0rn2p3kBm3F6kAElE8kE4OajSMUROx6HA37wK00Ml9vqkSq\");\n    return stripeJs;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL3N0cmlwZS1qcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFFckMsZUFBZUMsV0FBVyxHQUFHLENBQUM7SUFFakMsS0FBSyxDQUFDQyxRQUFRLEdBQUcsS0FBSyxDQUFDRiw2REFBVSxDQUFDRyw2R0FBeUM7SUFFM0UsTUFBTSxDQUFDRCxRQUFRO0FBR25CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL3N0cmlwZS1qcy50cz82ZjhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bG9hZFN0cmlwZX0gZnJvbSAnQHN0cmlwZS9zdHJpcGUtanMnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0cmlwZUpzKCkge1xyXG5cclxuICAgIGNvbnN0IHN0cmlwZUpzID0gYXdhaXQgbG9hZFN0cmlwZShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJJUEVfUFVCTElDX0tFWSlcclxuXHJcbiAgICByZXR1cm4gc3RyaXBlSnM7XHJcblxyXG4gICAgXHJcbn0iXSwibmFtZXMiOlsibG9hZFN0cmlwZSIsImdldFN0cmlwZUpzIiwic3RyaXBlSnMiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1RSSVBFX1BVQkxJQ19LRVkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/stripe-js.ts\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SubscribeButton */ \"./src/components/SubscribeButton/index.tsx\");\n/* harmony import */ var _homeStyle_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homeStyle.module.scss */ \"./src/pages/homeStyle.module.scss\");\n/* harmony import */ var _homeStyle_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_homeStyle_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/stripe */ \"./src/services/stripe.ts\");\n\n\n\n\n\nfunction Home({ product  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Home | Ig.News\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 22,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_homeStyle_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_homeStyle_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hero),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \" 👋 Hey, welcome!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 10\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \"News about the \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"React\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 29\n                                    }, this),\n                                    \" world\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 10\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Get access to all the publications \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 47\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: [\n                                            \"for \",\n                                            product.amount,\n                                            \" month\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 12\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 10\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                priceId: product.priceId\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 10\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 8\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/avatar.svg\",\n                        alt: \"girl coding\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 8\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\rocketseat\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 26,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true));\n};\nconst getStaticProps = async ()=>{\n    const price = await _services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.prices.retrieve('price_1KNHePAWRu2jah07896mrCee', {\n        expand: [\n            'product'\n        ]\n    });\n    const product = {\n        priceId: price.id,\n        amount: new Intl.NumberFormat('en-us', {\n            style: 'currency',\n            currency: 'USD'\n        }).format(price.unit_amount / 100)\n    };\n    return {\n        props: {\n            product\n        },\n        revalidate: 60 * 60 * 24 //24hrs\n    };\n}; //crente-server \n //Service serve redering\n //service serve generetion\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBSStCO0FBQ2pCO0FBQ0M7QUFXNUIsUUFBUSxDQUFDSSxJQUFJLENBQUMsQ0FBQ0MsQ0FBQUEsT0FBTyxFQUFVLENBQUMsRUFBRSxDQUFDO0lBQ2pELE1BQU07O3dGQUdITCxrREFBSTtzR0FDRk0sQ0FBSzs4QkFBQyxDQUFjOzs7Ozs7Ozs7Ozt3RkFHdEJDLENBQUk7Z0JBQUNDLFNBQVMsRUFBRU4sZ0ZBQXFCOztnR0FDbENRLENBQU87d0JBQUNGLFNBQVMsRUFBRU4sb0VBQVM7O3dHQUMxQlUsQ0FBSTswQ0FBQyxDQUFnQjs7Ozs7O3dHQUNyQkMsQ0FBRTs7b0NBQUMsQ0FBZTtnSEFBQ0QsQ0FBSTtrREFBQyxDQUFLOzs7Ozs7b0NBQU8sQ0FBTTs7Ozs7Ozt3R0FDMUNFLENBQUM7O29DQUFDLENBQ2tDO2dIQUFDQyxDQUFFOzs7OztnSEFDckNILENBQUk7OzRDQUFDLENBQUk7NENBQUNQLE9BQU8sQ0FBQ1csTUFBTTs0Q0FBQyxDQUFNOzs7Ozs7Ozs7Ozs7O3dHQUVqQ2YsbUVBQWU7Z0NBQUNnQixPQUFPLEVBQUlaLE9BQU8sQ0FBQ1ksT0FBTzs7Ozs7Ozs7Ozs7O2dHQUc1Q0MsQ0FBRzt3QkFBQ0MsR0FBRyxFQUFDLENBQW9CO3dCQUFDQyxHQUFHLEVBQUMsQ0FBYTs7Ozs7Ozs7Ozs7Ozs7QUFLdEQsQ0FBQztBQUVNLEtBQUssQ0FBQ0MsY0FBYyxhQUE0QixDQUFDO0lBQ3RELEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEtBQUssQ0FBQ25CLG9FQUFzQixDQUFDLENBQWdDLGlDQUFDLENBQUM7UUFDM0VzQixNQUFNLEVBQUUsQ0FBQztZQUFBLENBQVM7UUFBQSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxLQUFLLENBQUNwQixPQUFPLEdBQUUsQ0FBQztRQUNkWSxPQUFPLEVBQUVLLEtBQUssQ0FBQ0ksRUFBRTtRQUNqQlYsTUFBTSxFQUFFLEdBQUcsQ0FBQ1csSUFBSSxDQUFDQyxZQUFZLENBQUMsQ0FBTyxRQUFFLENBQUM7WUFDdENDLEtBQUssRUFBRSxDQUFVO1lBQ2pCQyxRQUFRLEVBQUUsQ0FBSztRQUNqQixDQUFDLEVBQUVDLE1BQU0sQ0FBQ1QsS0FBSyxDQUFDVSxXQUFXLEdBQUcsR0FBRztJQUVuQyxDQUFDO0lBQ0QsTUFBTSxFQUFDO1FBQ0xDLEtBQUssRUFBQyxDQUFDO1lBQ0w1QixPQUFPO1FBRVQsQ0FBQztRQUNBNkIsVUFBVSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFRO0lBQ25DLENBQUM7QUFFSCxDQUFDLENBRUQsQ0FBZ0I7QUFDaEIsQ0FBd0I7QUFDeEIsQ0FBMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuaW1wb3J0IHtHZXRTdGF0aWNQcm9wc30gZnJvbSAnbmV4dCdcblxuaW1wb3J0IFN1YnNjcmliZUJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL1N1YnNjcmliZUJ1dHRvbic7XG5pbXBvcnQgaG9tZSBmcm9tICcuL2hvbWVTdHlsZS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tICcuLi9zZXJ2aWNlcy9zdHJpcGUnO1xuXG5pbnRlcmZhY2UgSG9tZXByb3Bze1xuICBwcm9kdWN0OntcbiAgcHJpY2VJZDogc3RyaW5nLFxuICBhbW91bnQ6IG51bWJlclxufVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7cHJvZHVjdH06SG9tZXByb3BzKSB7XG4gIHJldHVybiAoXG4gICA8PlxuXG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+SG9tZSB8IElnLk5ld3M8L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgIFxuICAgIDxtYWluIGNsYXNzTmFtZT17aG9tZS5jb250ZW50Q29udGFpbmVyfT5cbiAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2hvbWUuaGVyb30+XG4gICAgICAgICA8c3Bhbj4g8J+RiyBIZXksIHdlbGNvbWUhPC9zcGFuPlxuICAgICAgICAgPGgxPk5ld3MgYWJvdXQgdGhlIDxzcGFuPlJlYWN0PC9zcGFuPiB3b3JsZDwvaDE+XG4gICAgICAgICA8cD5cbiAgICAgICAgICAgR2V0IGFjY2VzcyB0byBhbGwgdGhlIHB1YmxpY2F0aW9ucyA8YnIgLz5cbiAgICAgICAgICAgPHNwYW4+Zm9yIHtwcm9kdWN0LmFtb3VudH0gbW9udGg8L3NwYW4+ICBcbiAgICAgICAgIDwvcD5cbiAgICAgICAgIDxTdWJzY3JpYmVCdXR0b24gcHJpY2VJZCA9IHtwcm9kdWN0LnByaWNlSWR9PjwvU3Vic2NyaWJlQnV0dG9uPlxuICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgIDxpbWcgc3JjPScvaW1hZ2VzL2F2YXRhci5zdmcnIGFsdD1cImdpcmwgY29kaW5nXCI+PC9pbWc+XG4gICAgPC9tYWluPlxuICA8Lz5cbiAgXG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczpHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpPT57XG4gIGNvbnN0IHByaWNlID0gYXdhaXQgc3RyaXBlLnByaWNlcy5yZXRyaWV2ZSgncHJpY2VfMUtOSGVQQVdSdTJqYWgwNzg5Nm1yQ2VlJyx7XG4gICAgZXhwYW5kOiBbJ3Byb2R1Y3QnXVxuICB9KTtcbiAgY29uc3QgcHJvZHVjdCA9e1xuICAgIHByaWNlSWQ6IHByaWNlLmlkLFxuICAgIGFtb3VudDogbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi11cycsIHtcbiAgICAgIHN0eWxlOiAnY3VycmVuY3knLFxuICAgICAgY3VycmVuY3k6ICdVU0QnXG4gICAgfSkuZm9ybWF0KHByaWNlLnVuaXRfYW1vdW50IC8gMTAwLClcblxuICB9O1xuICByZXR1cm57XG4gICAgcHJvcHM6e1xuICAgICAgcHJvZHVjdFxuXG4gICAgfVxuICAgICxyZXZhbGlkYXRlOiA2MCAqIDYwICogMjQgLy8yNGhyc1xuICB9XG5cbn07XG5cbi8vY3JlbnRlLXNlcnZlciBcbi8vU2VydmljZSBzZXJ2ZSByZWRlcmluZ1xuLy9zZXJ2aWNlIHNlcnZlIGdlbmVyZXRpb24iXSwibmFtZXMiOlsiSGVhZCIsIlN1YnNjcmliZUJ1dHRvbiIsImhvbWUiLCJzdHJpcGUiLCJIb21lIiwicHJvZHVjdCIsInRpdGxlIiwibWFpbiIsImNsYXNzTmFtZSIsImNvbnRlbnRDb250YWluZXIiLCJzZWN0aW9uIiwiaGVybyIsInNwYW4iLCJoMSIsInAiLCJiciIsImFtb3VudCIsInByaWNlSWQiLCJpbWciLCJzcmMiLCJhbHQiLCJnZXRTdGF0aWNQcm9wcyIsInByaWNlIiwicHJpY2VzIiwicmV0cmlldmUiLCJleHBhbmQiLCJpZCIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0IiwidW5pdF9hbW91bnQiLCJwcm9wcyIsInJldmFsaWRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ \"./package.json\");\n\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n    apiVersion: '2020-08-27',\n    appInfo: {\n        name: _package_json__WEBPACK_IMPORTED_MODULE_1__.name,\n        version: '0.1.0'\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkI7QUFDWTtBQUdoQyxLQUFLLENBQUNFLE1BQU0sR0FBRyxHQUFHLENBQUNGLCtDQUFNLENBQzVCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsY0FBYyxFQUMxQixDQUFDO0lBQ0dDLFVBQVUsRUFBRSxDQUFZO0lBQ3hCQyxPQUFPLEVBQUMsQ0FBQztRQUNMTixJQUFJLEVBQUVBLCtDQUFJO1FBQ1ZPLE9BQU8sRUFBRSxDQUFPO0lBQ3BCLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3NlcnZpY2VzL3N0cmlwZS50cz9hYjk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJpcGUgZnJvbSBcInN0cmlwZVwiO1xyXG5pbXBvcnQge25hbWV9IGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbidcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZShcclxuICAgIHByb2Nlc3MuZW52LlNUUklQRV9BUElfS0VZLFxyXG4gICAge1xyXG4gICAgICAgIGFwaVZlcnNpb246ICcyMDIwLTA4LTI3JyxcclxuICAgICAgICBhcHBJbmZvOntcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgdmVyc2lvbjogJzAuMS4wJ1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbikiXSwibmFtZXMiOlsiU3RyaXBlIiwibmFtZSIsInN0cmlwZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfQVBJX0tFWSIsImFwaVZlcnNpb24iLCJhcHBJbmZvIiwidmVyc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/stripe.ts\n");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stripe");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"ignews","private":true,"scripts":{"dev":"next dev","build":"next build","start":"next start","lint":"next lint"},"dependencies":{"@stripe/stripe-js":"^1.22.0","@types/next-auth":"^3.15.0","axios":"^0.25.0","faunadb":"^4.4.2","next":"12.0.8","next-auth":"^4.1.2","react":"17.0.2","react-dom":"17.0.2","react-icons":"^4.3.1","sass":"^1.48.0","stripe":"^8.201.0"},"devDependencies":{"@types/node":"^17.0.8","@types/react":"^17.0.38","eslint":"8.6.0","eslint-config-next":"12.0.8","typescript":"^4.5.4"}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();