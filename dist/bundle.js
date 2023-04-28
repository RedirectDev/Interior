/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Caldina.ttf */ \"./src/fonts/Caldina.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/slide2.jpg */ \"./src/images/slide2.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/slide3.jpg */ \"./src/images/slide3.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/slide4.jpg */ \"./src/images/slide4.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/slide1.jpg */ \"./src/images/slide1.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\r\\n::before,\\r\\n::after {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n@font-face {\\r\\n  font-family: Caldina;\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  scroll-behavior: smooth;\\r\\n  font-family: Caldina;\\r\\n  background-color: #292828;\\r\\n  overflow-x: hidden;\\r\\n  color: #000000;\\r\\n}\\r\\n.container {\\r\\n  scroll-behavior: smooth;\\r\\n  display: grid;\\r\\n  grid-template-columns: auto;\\r\\n}\\r\\n.section {\\r\\n  position: relative;\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n}\\r\\n.header {\\r\\n  display: grid;\\r\\n  grid-auto-flow: column;\\r\\n  position: fixed;\\r\\n  z-index: 20;\\r\\n  width: 100%;\\r\\n  height: 2.5em;\\r\\n  background-color: #292828;\\r\\n}\\r\\n.header i {\\r\\n  font-size: 1.5em;\\r\\n  margin-left: 5px;\\r\\n  margin-top: 10px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n.header i:hover {\\r\\n  opacity: 0.5;\\r\\n}\\r\\n.header h1 {\\r\\n  font-size: 1.5em;\\r\\n  margin-top: 5px;\\r\\n}\\r\\n/* Section 1 */\\r\\n.section_content {\\r\\n  position: absolute;\\r\\n  z-index: 5;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  position: absolute;\\r\\n  flex-direction: column;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  width: 80%;\\r\\n}\\r\\n.section_content h1 {\\r\\n  font-size: 5em;\\r\\n}\\r\\n.section_content i {\\r\\n  font-size: 1.5em;\\r\\n  transform: translateY(15em);\\r\\n  animation: icon 3s infinite;\\r\\n}\\r\\n\\r\\n.dot-container {\\r\\n  position: fixed;\\r\\n  right: 50px;\\r\\n  top: 40%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.dot {\\r\\n  width: 15px;\\r\\n  height: 15px;\\r\\n  border-radius: 50%;\\r\\n  margin-bottom: 40px;\\r\\n  border: 2px solid rgb(255, 255, 255);\\r\\n  cursor: pointer;\\r\\n  transition: all 0.5s ease;\\r\\n}\\r\\n.dot:hover {\\r\\n  transform: scale(1.5);\\r\\n}\\r\\n\\r\\n.slide1,\\r\\n.slide2,\\r\\n.slide3,\\r\\n.slide4,\\r\\n.slide5 {\\r\\n  background-size: cover;\\r\\n  position: absolute;\\r\\n  z-index: -2;\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\n.slide1 {\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") no-repeat center;\\r\\n  animation: fade1 15s infinite;\\r\\n}\\r\\n\\r\\n.slide2 {\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") no-repeat center;\\r\\n  animation: fade2 15s infinite;\\r\\n}\\r\\n\\r\\n.slide3 {\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") no-repeat center;\\r\\n  animation: fade3 15s infinite;\\r\\n}\\r\\n\\r\\n.slide4 {\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \") no-repeat center;\\r\\n  animation: fade4 15s infinite;\\r\\n}\\r\\n\\r\\n@keyframes fade1 {\\r\\n  0% {\\r\\n    opacity: 1;\\r\\n  }\\r\\n\\r\\n  25% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n\\r\\n  50% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n\\r\\n  75% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    opacity: 1;\\r\\n  }\\r\\n}\\r\\n\\r\\n@keyframes fade2 {\\r\\n  0% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n\\r\\n  25% {\\r\\n    opacity: 1;\\r\\n  }\\r\\n\\r\\n  50% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n\\r\\n  75% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n}\\r\\n\\r\\n@keyframes fade3 {\\r\\n  0% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n\\r\\n  25% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n\\r\\n  50% {\\r\\n    opacity: 1;\\r\\n  }\\r\\n\\r\\n  75% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n}\\r\\n\\r\\n@keyframes fade4 {\\r\\n  0% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n\\r\\n  25% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n\\r\\n  50% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n\\r\\n  75% {\\r\\n    opacity: 1;\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n}\\r\\n@keyframes icon {\\r\\n  50% {\\r\\n    transform: translateY(14em);\\r\\n  }\\r\\n  100% {\\r\\n    transform: translateY(15em);\\r\\n  }\\r\\n}\\r\\n/* Section 2 */\\r\\n#section2 {\\r\\n  width: 300%;\\r\\n}\\r\\n.section_element {\\r\\n  letter-spacing: 0.8em;\\r\\n  position: absolute;\\r\\n  width: 33.5%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  font-size: 5em;\\r\\n  opacity: 0;\\r\\n  transform: translateY(10em);\\r\\n  transition: opacity 1s ease-in-out, transform 1s ease-in-out;\\r\\n}\\r\\n\\r\\n.section_element_show {\\r\\n  opacity: 1;\\r\\n  transform: translateY(5em);\\r\\n}\\r\\n\\r\\n.section_img {\\r\\n  display: flex;\\r\\n  flex-wrap: nowrap;\\r\\n}\\r\\n.section_img img {\\r\\n  border: 1px solid #ffff;\\r\\n  width: 6.7%;\\r\\n  height: 100vh;\\r\\n  object-fit: cover;\\r\\n  object-position: 33.5% 0;\\r\\n}\\r\\n\\r\\n.section_icons {\\r\\n  width: 34.5%;\\r\\n  position: absolute;\\r\\n  z-index: 10;\\r\\n  bottom: 0.1px;\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\n.section_icons_text {\\r\\n  width: 10em;\\r\\n  cursor: pointer;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  text-align: center;\\r\\n  margin: auto;\\r\\n  transition: transform 0.5s ease;\\r\\n}\\r\\n\\r\\n.section_icons_text:hover {\\r\\n  transform: translateY(-2em);\\r\\n  opacity: 1;\\r\\n}\\r\\n\\r\\n.section_icons_text p {\\r\\n  opacity: 0;\\r\\n  font-size: 1.5em;\\r\\n  align-items: center;\\r\\n  font-weight: 600;\\r\\n}\\r\\n.section_icons_text:hover p {\\r\\n  opacity: 1;\\r\\n}\\r\\n/* Srction 3 */\\r\\n#section3 {\\r\\n  position: relative;\\r\\n}\\r\\n.a {\\r\\n  grid-area: a;\\r\\n  transition: opacity 0.5s ease;\\r\\n}\\r\\n.a img {\\r\\n  border-top: 2px solid #ffff;\\r\\n  width: 100%;\\r\\n  height: 70vh;\\r\\n  object-fit: cover;\\r\\n  object-position: 33.5% 0;\\r\\n}\\r\\n.b {\\r\\n  grid-area: b;\\r\\n  transition: opacity 0.5s ease;\\r\\n}\\r\\n.b img {\\r\\n  border-top: 2px solid #ffff;\\r\\n  border-bottom: 2px solid #ffff;\\r\\n  width: 100%;\\r\\n  height: 30vh;\\r\\n  object-fit: cover;\\r\\n  object-position: 33.5% 0;\\r\\n}\\r\\n.c {\\r\\n  grid-area: c;\\r\\n  transition: opacity 0.5s ease;\\r\\n}\\r\\n.c img {\\r\\n  border: 2px solid #ffff;\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n  object-fit: cover;\\r\\n  object-position: 33.5% 0;\\r\\n}\\r\\n\\r\\n.d {\\r\\n  grid-area: d;\\r\\n  transition: opacity 0.5s ease;\\r\\n}\\r\\n.d img {\\r\\n  border-top: 2px solid #ffff;\\r\\n  border-bottom: 2px solid #ffff;\\r\\n  width: 100%;\\r\\n  height: 55vh;\\r\\n  object-fit: cover;\\r\\n  object-position: 33.5% 0;\\r\\n}\\r\\n.e {\\r\\n  grid-area: e;\\r\\n  transition: opacity 0.5s ease;\\r\\n}\\r\\n.e img {\\r\\n  border-top: 2px solid #ffff;\\r\\n  width: 100%;\\r\\n  height: 45vh;\\r\\n  object-fit: cover;\\r\\n  object-position: 33.5% 0;\\r\\n}\\r\\n.a:hover,\\r\\n.b:hover,\\r\\n.c:hover,\\r\\n.d:hover,\\r\\n.e:hover {\\r\\n  opacity: 0.7;\\r\\n  cursor: pointer;\\r\\n}\\r\\n.section_project {\\r\\n  display: grid;\\r\\n  grid-template-columns: 7% 35% 25% 33.4%;\\r\\n  grid-template-rows: 45vh 25vh 30vh;\\r\\n  grid-template-areas:\\r\\n    \\\"a a c e\\\"\\r\\n    \\\"a a c d\\\"\\r\\n    \\\"b b c d\\\";\\r\\n}\\r\\n.section_projects {\\r\\n  letter-spacing: 0.8em;\\r\\n  position: absolute;\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  font-size: 5em;\\r\\n  opacity: 0;\\r\\n  transform: translateY(-1em);\\r\\n  transition: opacity 1s ease-in-out, transform 1s ease-in-out;\\r\\n}\\r\\n.section_projects_show {\\r\\n  opacity: 1;\\r\\n  transform: translateY(-6.5em);\\r\\n}\\r\\n/* Section 4 */\\r\\n\\r\\n#section4 {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr;\\r\\n}\\r\\n.section_contact {\\r\\n  padding: 1em;\\r\\n  color: #ffff;\\r\\n  position: relative;\\r\\n  display: grid;\\r\\n  justify-content: end;\\r\\n  align-content: center;\\r\\n}\\r\\n.section_contact h1 {\\r\\n  font-size: 5em;\\r\\n  padding-bottom: 2em;\\r\\n}\\r\\n.section_contact span {\\r\\n  display: grid;\\r\\n  justify-content: end;\\r\\n  font-size: 1.5em;\\r\\n}\\r\\n.section_contact img {\\r\\n  padding-top: 5em;\\r\\n}\\r\\n\\r\\n.section_form {\\r\\n  padding: 1em;\\r\\n  display: grid;\\r\\n  justify-content: center;\\r\\n  align-content: center;\\r\\n}\\r\\n.form_groups {\\r\\n  position: relative;\\r\\n  padding: 0em 0em 0em 2em;\\r\\n  font-size: 1em;\\r\\n  color: #ffff;\\r\\n  font-family: Caldina;\\r\\n}\\r\\n\\r\\n.form_groups_one,\\r\\n.form_groups_two,\\r\\n.form_groups_three {\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.form_groups_one label,\\r\\n.form_groups_two label {\\r\\n  position: absolute;\\r\\n  bottom: 1.5em;\\r\\n}\\r\\n\\r\\n.form_groups_three {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.form {\\r\\n  margin-top: 3em;\\r\\n  font-family: Caldina;\\r\\n}\\r\\n\\r\\n.label {\\r\\n  visibility: hidden;\\r\\n  opacity: 0;\\r\\n  transition: opacity 0.5s ease;\\r\\n  position: absolute;\\r\\n}\\r\\n\\r\\n.text_form:focus::placeholder {\\r\\n  visibility: hidden;\\r\\n  transition: opacity 0.5s ease;\\r\\n}\\r\\n\\r\\n.text_form:focus ~ .label,\\r\\n.text_form:not(:placeholder-shown) ~ .label {\\r\\n  opacity: 1;\\r\\n  visibility: visible;\\r\\n  transition: opacity 0.5s ease;\\r\\n}\\r\\n\\r\\n#label {\\r\\n  visibility: hidden;\\r\\n  opacity: 0;\\r\\n  transition: opacity 0.5s ease;\\r\\n  font-family: Caldina;\\r\\n}\\r\\n\\r\\n.form_input:focus ~ #label,\\r\\n.form_input:valid ~ #label {\\r\\n  opacity: 1;\\r\\n  visibility: visible;\\r\\n}\\r\\n\\r\\n.input-label {\\r\\n  display: block;\\r\\n  border: 0 transparent;\\r\\n  background-color: #2f2c2c00;\\r\\n  width: 30em;\\r\\n}\\r\\n\\r\\n.form_input {\\r\\n  color: #ffffffb3;\\r\\n  border-bottom: 0.1em solid black;\\r\\n  font-size: 1em;\\r\\n}\\r\\n\\r\\ninput:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\ninput:focus::placeholder {\\r\\n  color: transparent;\\r\\n  transition: 0.5s;\\r\\n}\\r\\n\\r\\n.form_input:focus {\\r\\n  border-bottom: 0.06em solid rgb(249, 249, 249);\\r\\n}\\r\\n\\r\\n#form_button {\\r\\n  font-family: Caldina;\\r\\n  font-size: 1em;\\r\\n  width: 7em;\\r\\n  height: 3em;\\r\\n  margin-top: 1.2em;\\r\\n  background-color: rgb(169, 135, 11);\\r\\n}\\r\\n@media (max-width: 70em) {\\r\\n  .section_icons {\\r\\n    width: 36.5%;\\r\\n\\r\\n    justify-content: space-around;\\r\\n  }\\r\\n  .section_icons img {\\r\\n    width: 5em;\\r\\n    height: 5em;\\r\\n  }\\r\\n  .section_icons_text p {\\r\\n    margin-right: 5em;\\r\\n    opacity: 0;\\r\\n    font-size: 1em;\\r\\n\\r\\n    font-weight: 600;\\r\\n  }\\r\\n  #section4 {\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr;\\r\\n    align-content: center;\\r\\n    justify-content: center;\\r\\n  }\\r\\n  .section_contact {\\r\\n    display: grid;\\r\\n    justify-content: center;\\r\\n    align-content: center;\\r\\n  }\\r\\n  .section_contact h1 {\\r\\n    padding: 0 1em;\\r\\n  }\\r\\n  .section_contact span {\\r\\n    display: grid;\\r\\n    justify-content: center;\\r\\n    font-size: 1.5em;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://interior-bundled/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://interior-bundled/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://interior-bundled/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://interior-bundled/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/style.svg */ \"./src/icons/style.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/space.svg */ \"./src/icons/space.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/color.svg */ \"./src/icons/color.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/lightning.svg */ \"./src/icons/lightning.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/texture.svg */ \"./src/icons/texture.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pagetwo/two_slide2.jpg */ \"./src/images/pagetwo/two_slide2.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pagetwo/two_slide3.jpg */ \"./src/images/pagetwo/two_slide3.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pagetwo/two_slide4.jpg */ \"./src/images/pagetwo/two_slide4.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pagetwo/two_slide5.jpg */ \"./src/images/pagetwo/two_slide5.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pagetwo/two_slide1.jpg */ \"./src/images/pagetwo/two_slide1.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pagethree/three_slide3.jpg */ \"./src/images/pagethree/three_slide3.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pagethree/three_slide1.jpg */ \"./src/images/pagethree/three_slide1.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pagethree/three_slide2.jpg */ \"./src/images/pagethree/three_slide2.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pagethree/three_slide5.jpg */ \"./src/images/pagethree/three_slide5.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pagethree/three_slide4.jpg */ \"./src/images/pagethree/three_slide4.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./images/logo.png */ \"./src/images/logo.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);\nvar ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);\nvar ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);\nvar ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);\nvar ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n\\r\\n<head>\\r\\n  <meta charset=\\\"UTF-8\\\">\\r\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\r\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n\\r\\n  <!-- <link rel=\\\"stylesheet\\\" href=\\\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\\\"> -->\\r\\n  <link rel=\\\"stylesheet\\\" href=\\\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css\\\" />\\r\\n\\r\\n  <title>Document</title>\\r\\n</head>\\r\\n\\r\\n<body>\\r\\n  <section class=\\\"container\\\">\\r\\n    <!-- Section header with slider -->\\r\\n    <section class=\\\"section\\\" id=\\\"section1\\\">\\r\\n      <header class=\\\"header\\\">\\r\\n        <i class=\\\"fa-brands fa-facebook\\\"></i>\\r\\n        <h1>INTERIOR</h1>\\r\\n      </header>\\r\\n      <!--Section slider with four photos -->\\r\\n      <div class='section_slider'>\\r\\n        <div class='slide1'></div>\\r\\n        <div class='slide2'></div>\\r\\n        <div class='slide3'></div>\\r\\n        <div class=\\\"slide4\\\"></div>\\r\\n      </div>\\r\\n      <div class=\\\"section_content\\\">\\r\\n        <h1>Your Vision, Our Design</h1>\\r\\n        <i class=\\\"fa fa-chevron-down\\\" aria-hidden=\\\"true\\\"></i>\\r\\n      </div>\\r\\n    </section>\\r\\n    <!-- Section Elements -->\\r\\n    <section class=\\\"section\\\" id=\\\"section2\\\">\\r\\n      <h1 class=\\\"section_element\\\">\\r\\n        ELEMENTS\\r\\n      </h1>\\r\\n      <div class=\\\"section_icons\\\">\\r\\n        <div class=\\\"icon icon_one\\\"> <span class=\\\"section_icons_text\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" >\\r\\n            <p>STYLE</p></i></div>\\r\\n        <div class=\\\"icon icon_two\\\"> <span class=\\\"section_icons_text\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"\\\" >\\r\\n            <p>SPACE</p></i></div>\\r\\n        <div class=\\\"icon icon_three\\\"> <span class=\\\"section_icons_text\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"\\\" >\\r\\n            <p>COLOR</p></i></div>\\r\\n        <div class=\\\"icon icon_four\\\"> <span class=\\\"section_icons_text\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"\\\" >\\r\\n            <p>LIGHTNING</p></i></div>\\r\\n        <div class=\\\"icon icon_five\\\"> <span class=\\\"section_icons_text\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"\\\" >\\r\\n            <p>TEXTURE</p></i></div>\\r\\n      </div>\\r\\n      <div class=\\\"section_img\\\">\\r\\n        <img class=\\\"imgs img_one\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" >\\r\\n        <img class=\\\"imgs img_two\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" >\\r\\n        <img class=\\\"imgs img_three\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" >\\r\\n        <img class=\\\"imgs img_four\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" >\\r\\n        <img class=\\\"imgs img_five\\\" style=\\\"width: 20%; height: 100vh;\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" >\\r\\n      </div>\\r\\n    </section>\\r\\n    <!-- Section projects -->\\r\\n    <section class=\\\"section\\\" id=\\\"section3\\\">\\r\\n      <div class=\\\"section_project\\\">\\r\\n        <div class=\\\"a\\\"><img class=\\\"imgs  section_project_img_one\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\" >\\r\\n        </div>\\r\\n        <div class=\\\"b\\\"> <img class=\\\"imgs  section_project_img_five\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_11___ + \"\\\" >\\r\\n        </div>\\r\\n        <div class=\\\"c\\\"><img class=\\\"imgs  section_project_img_two\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_12___ + \"\\\" >\\r\\n        </div>\\r\\n        <div class=\\\"e\\\"> <img class=\\\"imgs  section_project_img_four\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\" >\\r\\n        </div>\\r\\n        <div class=\\\"d\\\"> <img class=\\\"imgs  section_project_img_three\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_14___ + \"\\\" >\\r\\n        </div>\\r\\n      </div>\\r\\n      <h1 class=\\\"section_projects\\\">\\r\\n        PROJECTS\\r\\n      </h1>\\r\\n    </section>\\r\\n    <!-- Section contact -->\\r\\n    <section class=\\\"section\\\" id=\\\"section4\\\">\\r\\n      <div class=\\\"section_contact\\\">\\r\\n        <h1>Contact Us</h1>\\r\\n        <span>Tel:9123456789</span>\\r\\n        <span>redirect@interior.com</span>\\r\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_15___ + \"\\\" >\\r\\n      </div>\\r\\n      <!-- Form section -->\\r\\n      <div class=\\\"section_form\\\">\\r\\n        <form action=\\\"https://formsubmit.co/17042dfe4b0ebef8d62c9a88c4eab262\\\" method=\\\"POST\\\" class=\\\"form_groups\\\">\\r\\n          <div class=\\\"form form_groups_one\\\">\\r\\n            <input type=\\\"text\\\" name=\\\"name\\\" class=\\\"form_input input-label\\\" required placeholder=\\\"*NAME\\\"\\r\\n              autocomplete=\\\"off\\\" />\\r\\n            <label for=\\\"name\\\" class=\\\"form_label input-label\\\" id=\\\"label\\\">*NAME</label>\\r\\n          </div>\\r\\n          <div class=\\\"form form_groups_two\\\">\\r\\n            <input type=\\\"email\\\" name=\\\"name\\\" class=\\\"form_input input-label\\\" required placeholder=\\\"*EMAIL\\\"\\r\\n              autocomplete=\\\"off\\\" />\\r\\n            <label for=\\\"name\\\" class=\\\"form_label input-label\\\" id=\\\"label\\\">*EMAIL</label>\\r\\n          </div>\\r\\n          <div class=\\\"form form_groups_two\\\">\\r\\n            <input type=\\\"phone\\\" name=\\\"name\\\" class=\\\"form_input input-label\\\" required placeholder=\\\"PHONE\\\"\\r\\n              autocomplete=\\\"off\\\" />\\r\\n            <label for=\\\"name\\\" class=\\\"form_label input-label\\\" id=\\\"label\\\">PHONE</label>\\r\\n          </div>\\r\\n          <div class=\\\"form form_groups_two\\\">\\r\\n            <input type=\\\"text\\\" name=\\\"name\\\" class=\\\"form_input input-label\\\" required\\r\\n              placeholder=\\\"TELLS US ABOUT YOUR PROJECT\\\" autocomplete=\\\"off\\\" />\\r\\n            <label for=\\\"name\\\" class=\\\"form_label input-label\\\" id=\\\"label\\\">TELLS US ABOUT YOUR PROJECT</label>\\r\\n          </div>\\r\\n          <button id=\\\"form_button\\\">Send</button>\\r\\n        </form>\\r\\n      </div>\\r\\n    </section>\\r\\n    <!-- Dot navigators -->\\r\\n    <div class=\\\"dot-container\\\">\\r\\n      <a href=\\\"#section1\\\" class=\\\"dot\\\"></a>\\r\\n      <a href=\\\"#section2\\\" class=\\\"dot\\\"></a>\\r\\n      <a href=\\\"#section3\\\" class=\\\"dot\\\"></a>\\r\\n      <a href=\\\"#section4\\\" class=\\\"dot\\\"></a>\\r\\n    </div>\\r\\n  </section>\\r\\n</body>\\r\\n\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://interior-bundled/./src/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://interior-bundled/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://interior-bundled/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://interior-bundled/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://interior-bundled/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://interior-bundled/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://interior-bundled/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://interior-bundled/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://interior-bundled/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n\r\n\r\n\r\n/* Changing color of header im scroll */\r\nwindow.addEventListener(\"scroll\",  ()=> {\r\n  const elements = document.querySelector(\".header\");\r\n  if (window.scrollY >= 2900) {\r\n    elements.style.color = \"#fff\";\r\n  } else if (window.scrollY <= 2900) {\r\n    elements.style.color = \"#000\";\r\n  }\r\n});\r\n/* Selectors for changing dimesion of images in icon hover */\r\nconst iconOne = document.querySelector(\".icon_one\");\r\nconst iconTwo = document.querySelector(\".icon_two\");\r\nconst iconThree = document.querySelector(\".icon_three\");\r\nconst iconFour = document.querySelector(\".icon_four\");\r\nconst iconFive = document.querySelector(\".icon_five\");\r\n\r\nconst imgOne = document.querySelector(\".img_one\");\r\nconst imgTwo = document.querySelector(\".img_two\");\r\nconst imgThree = document.querySelector(\".img_three\");\r\nconst imgFour = document.querySelector(\".img_four\");\r\nconst imgFive = document.querySelector(\".img_five\");\r\n\r\n\r\n\r\n/* Icons thant changing dimasion of photos */\r\niconOne.addEventListener(\"mouseover\", () => {\r\n  imgOne.style.width = \"33.4%\";\r\n});\r\n\r\niconOne.addEventListener(\"mouseout\", () => {\r\n  imgOne.style.width = \"7%\";\r\n});\r\n\r\niconTwo.addEventListener(\"mouseover\", () => {\r\n  imgTwo.style.width = \"33.4%\";\r\n  imgOne.style.display = \"none\";\r\n});\r\n\r\niconTwo.addEventListener(\"mouseout\", () => {\r\n  imgTwo.style.width = \"7%\";\r\n  imgOne.style.display = \"flex\";\r\n});\r\n\r\niconThree.addEventListener(\"mouseover\", () => {\r\n  imgThree.style.width = \"33.4%\";\r\n  imgOne.style.display = \"none\";\r\n  imgTwo.style.display = \"none\";\r\n});\r\n\r\niconThree.addEventListener(\"mouseout\", () => {\r\n  imgThree.style.width = \"7%\";\r\n  imgOne.style.display = \"flex\";\r\n  imgTwo.style.display = \"flex\";\r\n});\r\n\r\niconFour.addEventListener(\"mouseover\", () => {\r\n  imgFour.style.width = \"33.4%\";\r\n  imgOne.style.display = \"none\";\r\n  imgTwo.style.display = \"none\";\r\n  imgThree.style.display = \"none\";\r\n});\r\n\r\niconFour.addEventListener(\"mouseout\", () => {\r\n  imgFour.style.width = \"7%\";\r\n  imgOne.style.display = \"flex\";\r\n  imgTwo.style.display = \"flex\";\r\n  imgThree.style.display = \"flex\";\r\n});\r\niconFive.addEventListener(\"mouseover\", () => {\r\n  imgFive.style.width = \"33.4%\";\r\n  imgOne.style.display = \"none\";\r\n  imgTwo.style.display = \"none\";\r\n  imgThree.style.display = \"none\";\r\n  imgFour.style.display = \"none\";\r\n});\r\n\r\niconFive.addEventListener(\"mouseout\", () => {\r\n  imgFive.style.width = \"7%\";\r\n  imgOne.style.display = \"flex\";\r\n  imgTwo.style.display = \"flex\";\r\n  imgThree.style.display = \"flex\";\r\n  imgFour.style.display = \"flex\";\r\n});\r\n\r\n/* Fading H1 element in scroll */\r\nwindow.addEventListener(\"scroll\",  ()=> {\r\n  const elements = document.querySelector(\".section_element\");\r\n  if (window.scrollY >= 600) {\r\n    elements.classList.add(\"section_element_show\");\r\n  } else if (window.scrollY <= 1500) {\r\n    elements.classList.remove(\"section_element_show\");\r\n  }\r\n});\r\n\r\n/* Fading H1 element in scroll */\r\nwindow.addEventListener(\"scroll\",  ()=> {\r\n  const elements = document.querySelector(\".section_projects\");\r\n  if (window.scrollY >= 1500) {\r\n    elements.classList.add(\"section_projects_show\");\r\n  } else if (window.scrollY <= 2000) {\r\n    elements.classList.remove(\"section_projects_show\");\r\n  }\r\n});\r\n\r\n\n\n//# sourceURL=webpack://interior-bundled/./src/index.js?");

/***/ }),

/***/ "./src/fonts/Caldina.ttf":
/*!*******************************!*\
  !*** ./src/fonts/Caldina.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Caldina..ttf\";\n\n//# sourceURL=webpack://interior-bundled/./src/fonts/Caldina.ttf?");

/***/ }),

/***/ "./src/icons/color.svg":
/*!*****************************!*\
  !*** ./src/icons/color.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/color..svg\";\n\n//# sourceURL=webpack://interior-bundled/./src/icons/color.svg?");

/***/ }),

/***/ "./src/icons/lightning.svg":
/*!*********************************!*\
  !*** ./src/icons/lightning.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/lightning..svg\";\n\n//# sourceURL=webpack://interior-bundled/./src/icons/lightning.svg?");

/***/ }),

/***/ "./src/icons/space.svg":
/*!*****************************!*\
  !*** ./src/icons/space.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/space..svg\";\n\n//# sourceURL=webpack://interior-bundled/./src/icons/space.svg?");

/***/ }),

/***/ "./src/icons/style.svg":
/*!*****************************!*\
  !*** ./src/icons/style.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/style..svg\";\n\n//# sourceURL=webpack://interior-bundled/./src/icons/style.svg?");

/***/ }),

/***/ "./src/icons/texture.svg":
/*!*******************************!*\
  !*** ./src/icons/texture.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/texture..svg\";\n\n//# sourceURL=webpack://interior-bundled/./src/icons/texture.svg?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/logo..png\";\n\n//# sourceURL=webpack://interior-bundled/./src/images/logo.png?");

/***/ }),

/***/ "./src/images/pagethree/three_slide1.jpg":
/*!***********************************************!*\
  !*** ./src/images/pagethree/three_slide1.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/three_slide1..jpg\";\n\n//# sourceURL=webpack://interior-bundled/./src/images/pagethree/three_slide1.jpg?");

/***/ }),

/***/ "./src/images/pagethree/three_slide2.jpg":
/*!***********************************************!*\
  !*** ./src/images/pagethree/three_slide2.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/three_slide2..jpg\";\n\n//# sourceURL=webpack://interior-bundled/./src/images/pagethree/three_slide2.jpg?");

/***/ }),

/***/ "./src/images/pagethree/three_slide3.jpg":
/*!***********************************************!*\
  !*** ./src/images/pagethree/three_slide3.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/three_slide3..jpg\";\n\n//# sourceURL=webpack://interior-bundled/./src/images/pagethree/three_slide3.jpg?");

/***/ }),

/***/ "./src/images/pagethree/three_slide4.jpg":
/*!***********************************************!*\
  !*** ./src/images/pagethree/three_slide4.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/three_slide4..jpg\";\n\n//# sourceURL=webpack://interior-bundled/./src/images/pagethree/three_slide4.jpg?");

/***/ }),

/***/ "./src/images/pagethree/three_slide5.jpg":
/*!***********************************************!*\
  !*** ./src/images/pagethree/three_slide5.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/three_slide5..jpg\";\n\n//# sourceURL=webpack://interior-bundled/./src/images/pagethree/three_slide5.jpg?");

/***/ }),

/***/ "./src/images/pagetwo/two_slide1.jpg":
/*!*******************************************!*\
  !*** ./src/images/pagetwo/two_slide1.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/two_slide1..jpg\";\n\n//# sourceURL=webpack://interior-bundled/./src/images/pagetwo/two_slide1.jpg?");

/***/ }),

/***/ "./src/images/pagetwo/two_slide2.jpg":
/*!*******************************************!*\
  !*** ./src/images/pagetwo/two_slide2.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/two_slide2..jpg\";\n\n//# sourceURL=webpack://interior-bundled/./src/images/pagetwo/two_slide2.jpg?");

/***/ }),

/***/ "./src/images/pagetwo/two_slide3.jpg":
/*!*******************************************!*\
  !*** ./src/images/pagetwo/two_slide3.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/two_slide3..jpg\";\n\n//# sourceURL=webpack://interior-bundled/./src/images/pagetwo/two_slide3.jpg?");

/***/ }),

/***/ "./src/images/pagetwo/two_slide4.jpg":
/*!*******************************************!*\
  !*** ./src/images/pagetwo/two_slide4.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/two_slide4..jpg\";\n\n//# sourceURL=webpack://interior-bundled/./src/images/pagetwo/two_slide4.jpg?");

/***/ }),

/***/ "./src/images/pagetwo/two_slide5.jpg":
/*!*******************************************!*\
  !*** ./src/images/pagetwo/two_slide5.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/two_slide5..jpg\";\n\n//# sourceURL=webpack://interior-bundled/./src/images/pagetwo/two_slide5.jpg?");

/***/ }),

/***/ "./src/images/slide1.jpg":
/*!*******************************!*\
  !*** ./src/images/slide1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/slide1..jpg\";\n\n//# sourceURL=webpack://interior-bundled/./src/images/slide1.jpg?");

/***/ }),

/***/ "./src/images/slide2.jpg":
/*!*******************************!*\
  !*** ./src/images/slide2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/slide2..jpg\";\n\n//# sourceURL=webpack://interior-bundled/./src/images/slide2.jpg?");

/***/ }),

/***/ "./src/images/slide3.jpg":
/*!*******************************!*\
  !*** ./src/images/slide3.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/slide3..jpg\";\n\n//# sourceURL=webpack://interior-bundled/./src/images/slide3.jpg?");

/***/ }),

/***/ "./src/images/slide4.jpg":
/*!*******************************!*\
  !*** ./src/images/slide4.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/slide4..jpg\";\n\n//# sourceURL=webpack://interior-bundled/./src/images/slide4.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;