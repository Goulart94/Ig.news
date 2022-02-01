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
exports.id = "pages/api/subscribe";
exports.ids = ["pages/api/subscribe"];
exports.modules = {

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "./src/pages/api/subscribe.ts":
/*!************************************!*\
  !*** ./src/pages/api/subscribe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/stripe */ \"./src/services/stripe.ts?da1c\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/fauna */ \"./src/services/fauna.ts\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n        req\n    });\n    const user = await _services_fauna__WEBPACK_IMPORTED_MODULE_2__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Casefold(session.user.email))));\n    let customerId = user.data.stripe_customer_id;\n    if (!customerId) {\n        const stripeCustomer = await _services_stripe__WEBPACK_IMPORTED_MODULE_0__.stripe.customers.create({\n            email: session.user.email\n        });\n        await _services_fauna__WEBPACK_IMPORTED_MODULE_2__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Update(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Ref(faunadb__WEBPACK_IMPORTED_MODULE_3__.query.Collection('users'), user.ref.id), {\n            data: {\n                stripe_customer_id: stripeCustomer.id\n            }\n        }));\n        customerId = stripeCustomer.id;\n    }\n    if (req.method === 'POST') {\n        const stripeChekOutSession = await _services_stripe__WEBPACK_IMPORTED_MODULE_0__.stripe.checkout.sessions.create({\n            customer: customerId,\n            payment_method_types: [\n                'card'\n            ],\n            billing_address_collection: 'required',\n            line_items: [\n                {\n                    price: 'price_1KNHePAWRu2jah07896mrCee',\n                    quantity: 1\n                }\n            ],\n            mode: 'subscription',\n            allow_promotion_codes: true,\n            success_url: process.env.STIPE_SUSSES_URL,\n            cancel_url: process.env.STIPE_CANCEL_URL\n        });\n        return res.status(200).json({\n            sessionId: stripeChekOutSession.id\n        });\n    } else {\n        res.setHeader('Allow', 'POST');\n        res.status(405).end('Method not allowed');\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzhDO0FBRUY7QUFDQTtBQUNSO0FBYXBDLGlFQUFNLE9BQWdCSyxHQUFtQixFQUFFQyxHQUFvQixHQUFHLENBQUM7SUFDakUsS0FBSyxDQUFDQyxPQUFPLEdBQUcsS0FBSyxDQUFDTiwyREFBVSxDQUFDLENBQUNJO1FBQUFBLEdBQUc7SUFBQSxDQUFDO0lBRXRDLEtBQUssQ0FBQ0csSUFBSSxHQUFHLEtBQUssQ0FBQ04sd0RBQVcsQ0FDNUJFLDhDQUFLLENBQ0hBLGdEQUFPLENBQ0xBLGdEQUFPLENBQUMsQ0FBZSxpQkFDdkJBLG1EQUFVLENBQUNHLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDSyxLQUFLO0lBS25DLEdBQUcsQ0FBQ0MsVUFBVSxHQUFHTixJQUFJLENBQUNPLElBQUksQ0FBQ0Msa0JBQWtCO0lBRTdDLEVBQUUsR0FBRUYsVUFBVSxFQUFDLENBQUM7UUFDZCxLQUFLLENBQUNHLGNBQWMsR0FBRyxLQUFLLENBQUNqQixxRUFBdUIsQ0FBQyxDQUFDO1lBQ3REYSxLQUFLLEVBQUVOLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDSyxLQUFLO1FBRXpCLENBQUM7UUFFRixLQUFLLENBQUNYLHdEQUFXLENBQ2hCRSxpREFBUSxDQUNKQSw4Q0FBSyxDQUFDQSxxREFBWSxDQUFDLENBQU8sU0FBR0ksSUFBSSxDQUFDZSxHQUFHLENBQUNDLEVBQUUsR0FDeEMsQ0FBQztZQUVDVCxJQUFJLEVBQUMsQ0FBQ0M7Z0JBQUFBLGtCQUFrQixFQUFHQyxjQUFjLENBQUNPLEVBQUU7WUFBQSxDQUFDO1FBRS9DLENBQUM7UUFJTFYsVUFBVSxHQUFHRyxjQUFjLENBQUNPLEVBQUU7SUFDaEMsQ0FBQztJQUlDLEVBQUUsRUFBQ25CLEdBQUcsQ0FBQ29CLE1BQU0sS0FBRyxDQUFNLE9BQUMsQ0FBQztRQUV0QixLQUFLLENBQUNDLG9CQUFvQixHQUFHLEtBQUssQ0FBQzFCLDZFQUErQixDQUFDLENBQUM7WUFFOUQ2QixRQUFRLEVBQUVmLFVBQVU7WUFFcEJnQixvQkFBb0IsRUFBQyxDQUFDO2dCQUFBLENBQU07WUFBQSxDQUFDO1lBQzdCQywwQkFBMEIsRUFBRSxDQUFVO1lBQ3RDQyxVQUFVLEVBQUMsQ0FBQztnQkFDVixDQUFDQztvQkFBQUEsS0FBSyxFQUFFLENBQWdDO29CQUFFQyxRQUFRLEVBQUUsQ0FBQztnQkFBQSxDQUFDO1lBQ3hELENBQUM7WUFDREMsSUFBSSxFQUFFLENBQWM7WUFDcEJDLHFCQUFxQixFQUFFLElBQUk7WUFDM0JDLFdBQVcsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN6Q0MsVUFBVSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csZ0JBQWdCO1FBRzVDLENBQUM7UUFFRCxNQUFNLENBQUNwQyxHQUFHLENBQUNxQyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQ0M7WUFBQUEsU0FBUyxFQUFHbkIsb0JBQW9CLENBQUNGLEVBQUU7UUFBQSxDQUFDO0lBSXJFLENBQUMsTUFDRyxDQUFDO1FBQ0RsQixHQUFHLENBQUN3QyxTQUFTLENBQUMsQ0FBTyxRQUFFLENBQU07UUFDN0J4QyxHQUFHLENBQUNxQyxNQUFNLENBQUMsR0FBRyxFQUFFSSxHQUFHLENBQUMsQ0FBb0I7SUFDNUMsQ0FBQztBQUVMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS50cz8wNThhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3RyaXBlXCI7IFxyXG5cclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IHsgZmF1bmEgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZmF1bmFcIjtcclxuaW1wb3J0IHsgcXVlcnkgYXMgcSB9IGZyb20gXCJmYXVuYWRiXCI7XHJcblxyXG5cclxudHlwZSBVc2VyID17XHJcbiAgcmVmOntcclxuICAgIGlkOnN0cmluZ1xyXG4gIH1cclxuICBkYXRhOntcclxuICAgIHN0cmlwZV9jdXN0b21lcl9pZDogc3RyaW5nXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKT0+e1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHtyZXF9KTtcclxuXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IGZhdW5hLnF1ZXJ5PFVzZXI+KFxyXG4gICAgcS5HZXQoXHJcbiAgICAgIHEuTWF0Y2goXHJcbiAgICAgICAgcS5JbmRleCgndXNlcl9ieV9lbWFpbCcpLFxyXG4gICAgICAgIHEuQ2FzZWZvbGQoc2Vzc2lvbi51c2VyLmVtYWlsKVxyXG4gICAgICApXHJcbiAgICApXHJcbiAgKVxyXG4gIFxyXG4gIGxldCBjdXN0b21lcklkID0gdXNlci5kYXRhLnN0cmlwZV9jdXN0b21lcl9pZFxyXG5cclxuICBpZighY3VzdG9tZXJJZCl7XHJcbiAgICBjb25zdCBzdHJpcGVDdXN0b21lciA9IGF3YWl0IHN0cmlwZS5jdXN0b21lcnMuY3JlYXRlKHtcclxuICAgIGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWxcclxuICAgIC8vbWV0YWRhdGFcclxuICAgIH0pO1xyXG5cclxuICAgYXdhaXQgZmF1bmEucXVlcnkoXHJcbiAgICBxLlVwZGF0ZShcclxuICAgICAgICBxLlJlZihxLkNvbGxlY3Rpb24oJ3VzZXJzJyksIHVzZXIucmVmLmlkKSxcclxuICAgICAgICB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBkYXRhOntzdHJpcGVfY3VzdG9tZXJfaWQgOiBzdHJpcGVDdXN0b21lci5pZH0gXHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICk7XHJcblxyXG4gICAgY3VzdG9tZXJJZCA9IHN0cmlwZUN1c3RvbWVyLmlkXHJcbiAgfVxyXG5cclxuICBcclxuXHJcbiAgICBpZihyZXEubWV0aG9kPT09J1BPU1QnKXtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHN0cmlwZUNoZWtPdXRTZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjdXN0b21lcjogY3VzdG9tZXJJZCxcclxuXHJcbiAgICAgICAgICAgIHBheW1lbnRfbWV0aG9kX3R5cGVzOlsnY2FyZCddLFxyXG4gICAgICAgICAgICBiaWxsaW5nX2FkZHJlc3NfY29sbGVjdGlvbjogJ3JlcXVpcmVkJyxcclxuICAgICAgICAgICAgbGluZV9pdGVtczpbXHJcbiAgICAgICAgICAgICAge3ByaWNlOiAncHJpY2VfMUtOSGVQQVdSdTJqYWgwNzg5Nm1yQ2VlJywgcXVhbnRpdHk6IDF9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIG1vZGU6ICdzdWJzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICBhbGxvd19wcm9tb3Rpb25fY29kZXM6IHRydWUsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3NfdXJsOiBwcm9jZXNzLmVudi5TVElQRV9TVVNTRVNfVVJMLFxyXG4gICAgICAgICAgICBjYW5jZWxfdXJsOiBwcm9jZXNzLmVudi5TVElQRV9DQU5DRUxfVVJMXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe3Nlc3Npb25JZCA6IHN0cmlwZUNoZWtPdXRTZXNzaW9uLmlkfSk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsICdQT1NUJylcclxuICAgICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKCdNZXRob2Qgbm90IGFsbG93ZWQnKVxyXG4gICAgfVxyXG5cclxufSJdLCJuYW1lcyI6WyJzdHJpcGUiLCJnZXRTZXNzaW9uIiwiZmF1bmEiLCJxdWVyeSIsInEiLCJyZXEiLCJyZXMiLCJzZXNzaW9uIiwidXNlciIsIkdldCIsIk1hdGNoIiwiSW5kZXgiLCJDYXNlZm9sZCIsImVtYWlsIiwiY3VzdG9tZXJJZCIsImRhdGEiLCJzdHJpcGVfY3VzdG9tZXJfaWQiLCJzdHJpcGVDdXN0b21lciIsImN1c3RvbWVycyIsImNyZWF0ZSIsIlVwZGF0ZSIsIlJlZiIsIkNvbGxlY3Rpb24iLCJyZWYiLCJpZCIsIm1ldGhvZCIsInN0cmlwZUNoZWtPdXRTZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsImN1c3RvbWVyIiwicGF5bWVudF9tZXRob2RfdHlwZXMiLCJiaWxsaW5nX2FkZHJlc3NfY29sbGVjdGlvbiIsImxpbmVfaXRlbXMiLCJwcmljZSIsInF1YW50aXR5IiwibW9kZSIsImFsbG93X3Byb21vdGlvbl9jb2RlcyIsInN1Y2Nlc3NfdXJsIiwicHJvY2VzcyIsImVudiIsIlNUSVBFX1NVU1NFU19VUkwiLCJjYW5jZWxfdXJsIiwiU1RJUEVfQ0FOQ0VMX1VSTCIsInN0YXR1cyIsImpzb24iLCJzZXNzaW9uSWQiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/subscribe.ts\n");

/***/ }),

/***/ "./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": () => (/* binding */ fauna)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n    secret: process.env.FAUNA_KEY\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZmF1bmEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThCO0FBRXZCLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEdBQUcsQ0FBQ0QsMkNBQU0sQ0FBQyxDQUFDO0lBRS9CRSxNQUFNLEVBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFTO0FBRWhDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvZmF1bmEudHM/MzIzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NsaWVudH0gZnJvbSAnZmF1bmFkYic7XHJcblxyXG5leHBvcnQgY29uc3QgZmF1bmEgPSBuZXcgQ2xpZW50KHtcclxuXHJcbiAgc2VjcmV0IDogcHJvY2Vzcy5lbnYuRkFVTkFfS0VZICBcclxuXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiQ2xpZW50IiwiZmF1bmEiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiRkFVTkFfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/fauna.ts\n");

/***/ }),

/***/ "./src/services/stripe.ts?da1c":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ \"./package.json?2eee\");\n\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n    apiVersion: '2020-08-27',\n    appInfo: {\n        name: _package_json__WEBPACK_IMPORTED_MODULE_1__.name,\n        version: '0.1.0'\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzP2RhMWMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQjtBQUNZO0FBR2hDLEtBQUssQ0FBQ0UsTUFBTSxHQUFHLEdBQUcsQ0FBQ0YsK0NBQU0sQ0FDNUJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjLEVBQzFCLENBQUM7SUFDR0MsVUFBVSxFQUFFLENBQVk7SUFDeEJDLE9BQU8sRUFBQyxDQUFDO1FBQ0xOLElBQUksRUFBRUEsK0NBQUk7UUFDVk8sT0FBTyxFQUFFLENBQU87SUFDcEIsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzP2FiOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0cmlwZSBmcm9tIFwic3RyaXBlXCI7XHJcbmltcG9ydCB7bmFtZX0gZnJvbSAnLi4vLi4vcGFja2FnZS5qc29uJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzdHJpcGUgPSBuZXcgU3RyaXBlKFxyXG4gICAgcHJvY2Vzcy5lbnYuU1RSSVBFX0FQSV9LRVksXHJcbiAgICB7XHJcbiAgICAgICAgYXBpVmVyc2lvbjogJzIwMjAtMDgtMjcnLFxyXG4gICAgICAgIGFwcEluZm86e1xyXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICB2ZXJzaW9uOiAnMC4xLjAnXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxuKSJdLCJuYW1lcyI6WyJTdHJpcGUiLCJuYW1lIiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9BUElfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJ2ZXJzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/stripe.ts?da1c\n");

/***/ }),

/***/ "./package.json?2eee":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"ignews","private":true,"scripts":{"dev":"next dev","build":"next build","start":"next start","lint":"next lint"},"dependencies":{"@stripe/stripe-js":"^1.22.0","@types/next-auth":"^3.15.0","axios":"^0.25.0","faunadb":"^4.4.2","next":"12.0.8","next-auth":"^4.1.2","react":"17.0.2","react-dom":"17.0.2","react-icons":"^4.3.1","sass":"^1.48.0","stripe":"^8.201.0"},"devDependencies":{"@types/node":"^17.0.8","@types/react":"^17.0.38","eslint":"8.6.0","eslint-config-next":"12.0.8","typescript":"^4.5.4"}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/subscribe.ts"));
module.exports = __webpack_exports__;

})();