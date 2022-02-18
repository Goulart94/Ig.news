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
exports.id = "pages/api/webhooks";
exports.ids = ["pages/api/webhooks"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "./src/pages/api/webhooks.ts":
/*!***********************************!*\
  !*** ./src/pages/api/webhooks.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/stripe */ \"./src/services/stripe.ts\");\n\nasync function buffer(readable) {\n    const chunks = [];\n    for await (const chunk of readable){\n        chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);\n    }\n    return Buffer.concat(chunks);\n}\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nconst relevantEvent = new Set([\n    'checkout.session.completed'\n]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === 'POST') {\n        const buf = await buffer(req);\n        const secret = req.headers['stripe-signature'];\n        let event;\n        try {\n            event = _services_stripe__WEBPACK_IMPORTED_MODULE_0__.stripe.webhooks.constructEvent(buf, secret, process.env.STRIPE_SECRET_WEBHOOKS);\n        } catch (err) {\n            return res.status(400).send(`webhooks error: ${err.message}`);\n        }\n        const type = event.type;\n        if (relevantEvent.has(type)) {\n            console.log('Evento recibido', event);\n        }\n        res.json({\n            received: true\n        });\n    } else {\n        res.setHeader('Allow', 'POST');\n        res.status(405).end('Method not allowed');\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL3dlYmhvb2tzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUs4QztlQUUvQkMsTUFBTSxDQUFDQyxRQUFpQixFQUFFLENBQUM7SUFDdEMsS0FBSyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBRWpCLEdBQUcsUUFBTyxLQUFLLENBQUNDLEtBQUssSUFBSUYsUUFBUSxDQUFDLENBQUM7UUFDL0JDLE1BQU0sQ0FBQ0UsSUFBSSxDQUNQLE1BQU0sQ0FBQ0QsS0FBSyxLQUFLLENBQVEsVUFBR0UsTUFBTSxDQUFDQyxJQUFJLENBQUNILEtBQUssSUFBSUEsS0FBSztJQUU5RCxDQUFDO0lBQ0QsTUFBTSxDQUFDRSxNQUFNLENBQUNFLE1BQU0sQ0FBQ0wsTUFBTTtBQUMvQixDQUFDO0FBRU0sS0FBSyxDQUFDTSxNQUFNLEdBQUcsQ0FBQztJQUNwQkMsR0FBRyxFQUFDLENBQUM7UUFDREMsVUFBVSxFQUFHLEtBQUs7SUFFdEIsQ0FBQztBQUVKLENBQUM7QUFDRCxLQUFLLENBQUNDLGFBQWEsR0FBRyxHQUFHLENBQUNDLEdBQUcsQ0FDekIsQ0FBQztJQUFBLENBQTRCO0FBQUEsQ0FBQztBQUdsQyxpRUFBTSxPQUFnQkMsR0FBbUIsRUFBRUMsR0FBb0IsR0FBRyxDQUFDO0lBRWhFLEVBQUUsRUFBQ0QsR0FBRyxDQUFDRSxNQUFNLEtBQUcsQ0FBTSxPQUFDLENBQUM7UUFDdEIsS0FBSyxDQUFDQyxHQUFHLEdBQUcsS0FBSyxDQUFDaEIsTUFBTSxDQUFDYSxHQUFHO1FBQzVCLEtBQUssQ0FBQ0ksTUFBTSxHQUFHSixHQUFHLENBQUNLLE9BQU8sQ0FBQyxDQUFrQjtRQUU3QyxHQUFHLENBQUNDLEtBQUs7UUFFVCxHQUFHLEVBQUM7WUFDQUEsS0FBSyxHQUFHcEIsNEVBQThCLENBQUNpQixHQUFHLEVBQUVDLE1BQU0sRUFBRUssT0FBTyxDQUFDQyxHQUFHLENBQUNDLHNCQUFzQjtRQUMxRixDQUFDLENBQUMsS0FBSyxFQUFDQyxHQUFHLEVBQUMsQ0FBQztZQUNWLE1BQU0sQ0FBQ1gsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUVGLEdBQUcsQ0FBQ0csT0FBTztRQUM3RCxDQUFDO1FBRUQsS0FBSyxDQUFDQyxJQUFJLEdBQUdWLEtBQUssQ0FBQ1UsSUFBSTtRQUV2QixFQUFFLEVBQUNsQixhQUFhLENBQUNtQixHQUFHLENBQUNELElBQUksR0FBRSxDQUFDO1lBQ3hCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFpQixrQkFBRWIsS0FBSztRQUV4QyxDQUFDO1FBRUZMLEdBQUcsQ0FBQ21CLElBQUksQ0FBQyxDQUFDQztZQUFBQSxRQUFRLEVBQUUsSUFBSTtRQUFBLENBQUM7SUFFMUIsQ0FBQyxNQUFLLENBQUM7UUFDTnBCLEdBQUcsQ0FBQ3FCLFNBQVMsQ0FBQyxDQUFPLFFBQUUsQ0FBTTtRQUM3QnJCLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsRUFBRVUsR0FBRyxDQUFDLENBQW9CO0lBQ3pDLENBQUM7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2FwaS93ZWJob29rcy50cz9kM2E0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHR5cGUgfSBmcm9tICdvcyc7XHJcbmltcG9ydCB7IFN0cmlwZSB9IGZyb20gJ3N0cmlwZSc7XHJcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4vYXBpJztcclxuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7UmVhZGFibGV9IGZyb20gXCJzdHJlYW1cIjtcclxuaW1wb3J0IHsgc3RyaXBlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc3RyaXBlJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGJ1ZmZlcihyZWFkYWJsZTpSZWFkYWJsZSkge1xyXG4gICAgY29uc3QgY2h1bmtzID0gW107XHJcblxyXG4gICAgZm9yIGF3YWl0KGNvbnN0IGNodW5rIG9mIHJlYWRhYmxlKXtcclxuICAgICAgICBjaHVua3MucHVzaChcclxuICAgICAgICAgICAgdHlwZW9mIGNodW5rID09PSAnc3RyaW5nJyA/IEJ1ZmZlci5mcm9tKGNodW5rKSA6IGNodW5rXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiBCdWZmZXIuY29uY2F0KGNodW5rcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgIGFwaTp7XHJcbiAgICAgICBib2R5UGFyc2VyIDogZmFsc2VcclxuXHJcbiAgIH0sXHJcblxyXG59XHJcbmNvbnN0IHJlbGV2YW50RXZlbnQgPSBuZXcgU2V0KFxyXG4gICAgWydjaGVja291dC5zZXNzaW9uLmNvbXBsZXRlZCddXHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSk9PntcclxuICAgIFxyXG4gICBpZihyZXEubWV0aG9kPT09J1BPU1QnKXtcclxuICAgICBjb25zdCBidWYgPSBhd2FpdCBidWZmZXIocmVxKVxyXG4gICAgIGNvbnN0IHNlY3JldCA9IHJlcS5oZWFkZXJzWydzdHJpcGUtc2lnbmF0dXJlJ11cclxuXHJcbiAgICAgbGV0IGV2ZW50IDogU3RyaXBlLkV2ZW50O1xyXG5cclxuICAgICB0cnl7XHJcbiAgICAgICAgIGV2ZW50ID0gc3RyaXBlLndlYmhvb2tzLmNvbnN0cnVjdEV2ZW50KGJ1Ziwgc2VjcmV0LCBwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUX1dFQkhPT0tTKVxyXG4gICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoYHdlYmhvb2tzIGVycm9yOiAke2Vyci5tZXNzYWdlfWAgKTtcclxuICAgICB9XHJcbiAgICBcclxuICAgICBjb25zdCB0eXBlID0gZXZlbnQudHlwZTtcclxuXHJcbiAgICAgaWYocmVsZXZhbnRFdmVudC5oYXModHlwZSkpe1xyXG4gICAgICAgICBjb25zb2xlLmxvZygnRXZlbnRvIHJlY2liaWRvJywgZXZlbnQpXHJcblxyXG4gICAgIH1cclxuXHJcbiAgICByZXMuanNvbih7cmVjZWl2ZWQ6IHRydWV9KVxyXG5cclxuICAgfSBlbHNle1xyXG4gICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCAnUE9TVCcpXHJcbiAgICByZXMuc3RhdHVzKDQwNSkuZW5kKCdNZXRob2Qgbm90IGFsbG93ZWQnKVxyXG4gICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJzdHJpcGUiLCJidWZmZXIiLCJyZWFkYWJsZSIsImNodW5rcyIsImNodW5rIiwicHVzaCIsIkJ1ZmZlciIsImZyb20iLCJjb25jYXQiLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIiwicmVsZXZhbnRFdmVudCIsIlNldCIsInJlcSIsInJlcyIsIm1ldGhvZCIsImJ1ZiIsInNlY3JldCIsImhlYWRlcnMiLCJldmVudCIsIndlYmhvb2tzIiwiY29uc3RydWN0RXZlbnQiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1NFQ1JFVF9XRUJIT09LUyIsImVyciIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIiwidHlwZSIsImhhcyIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwicmVjZWl2ZWQiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/webhooks.ts\n");

/***/ }),

/***/ "./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ \"./package.json\");\n\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n    apiVersion: '2020-08-27',\n    appInfo: {\n        name: _package_json__WEBPACK_IMPORTED_MODULE_1__.name,\n        version: '0.1.0'\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkI7QUFDWTtBQUdoQyxLQUFLLENBQUNFLE1BQU0sR0FBRyxHQUFHLENBQUNGLCtDQUFNLENBQzVCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsY0FBYyxFQUMxQixDQUFDO0lBQ0dDLFVBQVUsRUFBRSxDQUFZO0lBQ3hCQyxPQUFPLEVBQUMsQ0FBQztRQUNMTixJQUFJLEVBQUVBLCtDQUFJO1FBQ1ZPLE9BQU8sRUFBRSxDQUFPO0lBQ3BCLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3NlcnZpY2VzL3N0cmlwZS50cz9hYjk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJpcGUgZnJvbSBcInN0cmlwZVwiO1xyXG5pbXBvcnQge25hbWV9IGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbidcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZShcclxuICAgIHByb2Nlc3MuZW52LlNUUklQRV9BUElfS0VZLFxyXG4gICAge1xyXG4gICAgICAgIGFwaVZlcnNpb246ICcyMDIwLTA4LTI3JyxcclxuICAgICAgICBhcHBJbmZvOntcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgdmVyc2lvbjogJzAuMS4wJ1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbikiXSwibmFtZXMiOlsiU3RyaXBlIiwibmFtZSIsInN0cmlwZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfQVBJX0tFWSIsImFwaVZlcnNpb24iLCJhcHBJbmZvIiwidmVyc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/stripe.ts\n");

/***/ }),

/***/ "./package.json":
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
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/webhooks.ts"));
module.exports = __webpack_exports__;

})();