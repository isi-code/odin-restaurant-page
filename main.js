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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/restaurant-styles.css"
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/restaurant-styles.css ***!
  \*************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*, *::before, *::after {\n    box-sizing: border-box;\n\tpadding: 0;\n\tmargin: 0;\n}\n\nbody{\n\tbackground-color: rgb(0, 153, 255);\n}\n\nheader {\n\tmargin:1rem 0;\n}\n\nh1,h2,h3,h4{\n\ttext-align: center;\n}\n\nnav{\n\tdisplay:flex;\n\tgap: calc((100% / 3) / 3);\n\tborder-top:1rem white solid;\n\tborder-bottom:1rem white solid;\n}\n\nnav button {\n\tflex: 1;\n\tcursor: pointer;\n\tpadding: 0.8rem 2rem;\n\tbackground: whitesmoke;\n\tborder: none;\n}\n\nnav button:hover { background: white; }\n\n#content {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tgap: 2rem;\n\twidth: 80%;\n\tmax-width: 55rem;\n\tmargin: auto;\n}\n\n#content section {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n\tbackground-color: whitesmoke;\n\tpadding: 2rem;\n\tborder: 1rem white solid;\n\ttext-align: center;\n}\n\n#content section img {\n\tdisplay: block;\n\tmargin: 1rem auto;\n\twidth: 80%;\n\tmax-width:400px;\n\tmax-height:400px;\n\tobject-fit: cover;\n}\n\n#content section button { \n\tbackground-color: white;\n\tborder: 0.5rem rgb(221, 223, 228) solid;\n\twidth: fit-content;\n\tpadding: 0.5rem;\n\talign-self: center;\n\tcursor: pointer;\n}\n\ntable{\n\tmargin: auto;\n}\n\ntable tr {\n\toutline: 1px solid black;\n}\n\ntable td{\n\tpadding: 0.5rem;\n}\n\nul > li {\n\tlist-style-type: none;\n\tline-height: 2rem;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/restaurant-styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _restaurant_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant-styles.css */ \"./src/restaurant-styles.css\");\n/* harmony import */ var _page_contents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-contents.js */ \"./src/page-contents.js\");\n/* harmony import */ var _page_section_generator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-section-generator.js */ \"./src/page-section-generator.js\");\n/* harmony import */ var _navigation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.js */ \"./src/navigation.js\");\n\n\n\n\n\nconst navBarContainer = document.querySelector(\"header > nav\");\nconst pageContentContainer = document.getElementById(\"content\");\n\nconst home = new _page_section_generator_js__WEBPACK_IMPORTED_MODULE_2__.PageSectionGenerator(\"Gyros' Paradise\", _page_contents_js__WEBPACK_IMPORTED_MODULE_1__.homepageContent);\nconst menu = new _page_section_generator_js__WEBPACK_IMPORTED_MODULE_2__.PageSectionGenerator(\"Menu\", _page_contents_js__WEBPACK_IMPORTED_MODULE_1__.menuContent);\nconst about = new _page_section_generator_js__WEBPACK_IMPORTED_MODULE_2__.PageSectionGenerator(\"About\", _page_contents_js__WEBPACK_IMPORTED_MODULE_1__.aboutContent);\n\nconst pages = { \n    home : home.addPageContent(),\n    menu : menu.addPageContent(), \n    about : about.addPageContent()\n}\n\nconst nav = new _navigation_js__WEBPACK_IMPORTED_MODULE_3__.PageNavigation(navBarContainer, pageContentContainer, pages);\nnav.updatePage(pages.home);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/navigation.js"
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PageNavigation: () => (/* binding */ PageNavigation)\n/* harmony export */ });\n/* harmony import */ var _page_renderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-renderer.js */ \"./src/page-renderer.js\");\n\n\nfunction PageNavigation(navBar, pageContentContainer, pagesContent) {\n    const navBarContainer = navBar;\n    const pageRenderer = new _page_renderer_js__WEBPACK_IMPORTED_MODULE_0__.PageContentRenderer(pageContentContainer);\n    const pages = pagesContent;\n\n    const navBarEventHandler = (event, method) => {\n        navBarContainer.addEventListener(event, (e) => { method(e) });\n    }\n\n    const clickNavController = (e) => { \n        if (e.target.tagName === \"BUTTON\"){\n            const navBtn = e.target.id;\n            if (navBtn in pages) updatePage(pages[navBtn]);\n        }\n    };\n\n    const updatePage = (pageContent) => {\n        pageRenderer.removePageContent();\n        pageRenderer.renderPageContent(pageContent);\n    }\n\n    const addNavigationEvents = () =>{ navBarEventHandler(\"click\", clickNavController) };\n\n    addNavigationEvents();\n\n    return { updatePage }\n};\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/navigation.js?\n}");

/***/ },

/***/ "./src/page-contents.js"
/*!******************************!*\
  !*** ./src/page-contents.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutContent: () => (/* binding */ aboutContent),\n/* harmony export */   homepageContent: () => (/* binding */ homepageContent),\n/* harmony export */   menuContent: () => (/* binding */ menuContent)\n/* harmony export */ });\nconst homepageContent = [\n  // 1. WELCOME / HERO SECTION\n  [\n    \"<h3>Welcome to the Gyros' Paradise</h3>\",\n    \"<p>Experience the authentic taste of Kalavryta. From our family table to yours, we serve hand-crafted Greek street food made with <em>meraki</em> and the finest Mediterranean ingredients.</p>\",\n  ],\n\n  // 2. THE ABOUT SECTION (Integrated from your previous story)\n  [\n    \"<h3>The Spirit of the Islands</h3>\",\n    \"<p>Founded in 1988, <strong>Gyros' Paradise</strong> began with a single rotisserie and a secret family recipe. What started as a small seaside stall has grown into a local sanctuary for food lovers seeking the true soul of Mediterranean cooking.</p>\",\n    \"<blockquote>'To eat at our table is to be part of our family.' — Mama Eleni, Founder</blockquote>\"\n  ],\n\n  // 3. FEATURED SPECIAL\n  [\n    \"<h3>Chef's Recommendation</h3>\",\n    \"<div class='featured-dish'>\",\n    \"<h4>The Olympian Gyro Platter</h4>\",\n    '<img src=\"https://images.unsplash.com/photo-1734974121561-11aee7d3cebd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\">',\n    \"<p>A massive serving of our 24-hour marinated lamb and beef, served with feta-dusted fries, house-made tzatziki, and warm pita bread. Perfect for sharing—or for one very hungry hero.</p>\",\n    \"<strong>$18.50</strong>\",\n    \"</div>\"\n  ],\n\n  // 4. YOUR HOURS SECTION\n  [\n    \"<h3>Hours of Operation</h3>\",\n    \"<table>\",\n    \"<thead><tr><th>Day</th><th>Hours</th></tr></thead>\",\n    \"<tbody>\",\n    \"<tr><td>Monday</td><td>7AM - 8PM</td></tr>\",\n    \"<tr><td>Tuesday</td><td>9AM - 8PM</td></tr>\",\n    \"<tr><td>Wednesday</td><td>7AM - 8PM</td></tr>\",\n    \"<tr><td>Thursday</td><td>7AM - 8PM</td></tr>\",\n    \"<tr><td>Friday</td><td>7AM - 8PM</td></tr>\",\n    \"<tr><td>Saturday</td><td>7AM - 2PM</td></tr>\",\n    \"<tr><td>Sunday</td><td>CLOSED</td></tr>\",\n    \"</tbody>\",\n    \"</table>\"\n  ],\n\n  // 5. LOCATION SECTION\n  [\n    \"<h3>Find Us</h3>\",\n    \"<p><strong>Address:</strong> 123 Mediterranean Way, Foodie District</p>\",\n    \"<p><strong>Phone:</strong> (555) 010-2025</p>\",\n    \"<p><em>Located just two blocks from the harbor with free parking in the rear.</em></p>\"\n  ]\n];\n\nconst menuContent = [\n  [\n    \"<h3>Orektika (Appetizers)</h3>\",\n    \"<ul>\",\n    \"<li><strong>Feta Fries:</strong> Crispy fries topped with crumbled feta and Greek oregano. - $7.00</li>\",\n    \"<li><strong>Flaming Saganaki:</strong> Pan-seared Kefalograviera cheese flambéed with brandy. - $12.50</li>\",\n    \"<li><strong>Trio of Dips:</strong> Tzatziki, Hummus, and Tirokafteri (spicy feta) with warm pita. - $14.00</li>\",\n    \"</ul>\",\n    \"<h3>Signature Gyros</h3>\",\n    \"<img src='https://images.unsplash.com/photo-1638865328079-0a3985220f9c?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>\",\n    \"<p><em>Wrapped in warm, fluffy pita with tomatoes, red onions, tzatziki, and a few crispy fries inside.</em></p>\",\n    \"<table>\",\n    \"<tr><td><strong>Classic Lamb & Beef:</strong> Our traditional rotisserie blend.</td><td>$13.50</td></tr>\",\n    \"<tr><td><strong>Chicken Souvlaki:</strong> Lemon-marinated grilled chicken breast.</td><td>$12.50</td></tr>\",\n    \"<tr><td><strong>Pork Belly Gyro:</strong> Crispy, slow-roasted pork shoulder.</td><td>$13.00</td></tr>\",\n    \"<tr><td><strong>The Veggie Paradise:</strong> Grilled halloumi, roasted peppers, and hummus.</td><td>$11.50</td></tr>\",\n    \"</table>\",\n    \"<h3>Entrée Platters</h3>\",\n    \"<img src='https://images.unsplash.com/photo-1702741168115-cd3d9a682972?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>\",\n    \"<p><em>Served with Greek salad, lemon rice pilaf, pita, and extra tzatziki.</em></p>\",\n    \"<ul>\",\n    \"<li><strong>The Spartan Feast:</strong> A sampling of lamb, chicken, and pork gyros. - $24.00</li>\",\n    \"<li><strong>Baked Moussaka:</strong> Eggplant, potato, and spiced beef with béchamel. - $19.00</li>\",\n    \"<li><strong>Grilled Lamb Chops:</strong> Four marinated chops with charred lemon. - $28.00</li>\",\n    \"</ul>\"\n  ],\n  [\n    \"<h3>Drinks & Refreshments</h3>\",\n    \"<img src='https://images.unsplash.com/photo-1547737992-582b4bbef433?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>\",\n    \"<table>\",\n    \"<tr>\",\n    \"<td><strong>Greek Frappé</strong><br><small>The iconic foam-covered iced coffee, shaken with water and sugar.</small></td>\",\n    \"<td>$5.00</td>\",\n    \"</tr>\",\n    \"<tr>\",\n    \"<td><strong>Greek Mountain Tea</strong><br><small>Hand-picked herbs from the Taygetos mountains, served hot with honey.</small></td>\",\n    \"<td>$4.50</td>\",\n    \"</tr>\",\n    \"<tr>\",\n    \"<td><strong>Mastiqua Sparking Water</strong><br><small>Infused with Mediterranean Mastic for a unique, pine-like refreshing taste.</small></td>\",\n    \"<td>$4.00</td>\",\n    \"</tr>\",\n    \"<tr>\",\n    \"<td><strong>Ouzo (2oz)</strong><br><small>The classic anise-flavored aperitif. Turns cloudy with a splash of ice water.</small></td>\",\n    \"<td>$9.00</td>\",\n    \"</tr>\",\n    \"<tr>\",\n    \"<td><strong>Mythos Beer</strong><br><small>Greece’s most famous crisp, golden lager.</small></td>\",\n    \"<td>$7.00</td>\",\n    \"</tr>\",\n    \"</table>\"\n  ],\n  [\n    \"<h3>Desserts</h3>\",\n    \"<p>Try our world-famous <strong>Baklava</strong> ($8.00) or our creamy <strong>Galaktoboureko</strong> ($8.50).</p>\"\n  ]\n];\n\nconst aboutContent = [\n  // SECTION 1: THE STORY\n  [\n    \"<h3>The Spirit of the Islands</h3>\",\n    \"<p>The story of <strong>Gyro Paradise</strong> began in 1988 with nothing more than a single rotisserie and a sacred family recipe carried all the way from the mountain village of Kalavryta. What started as a humble seaside stall has evolved into a local sanctuary—a sun-drenched escape where the vibrant flavors and authentic soul of Mediterranean cooking come to life.</p>\",\n    \"<p>Founded by <strong>Mama Eleni</strong>, the restaurant remains a family-operated pillar of the community, dedicated to the belief that good food has the power to bring people together regardless of where they come from.</p>\"\n  ],\n\n  // SECTION 2: OUR PHILOSOPHY (MERAKI)\n  [\n    \"<h3>Our Kitchen Philosophy</h3>\",\n    \"<p>At the heart of our kitchen is <em>'Meraki'</em>—the Greek art of pouring one’s soul, creativity, and love into every task. We honor this tradition by hand-stacking our gyros daily, using premium cuts marinated for 24 hours in a signature blend of wild Aegean oregano, fresh garlic, and 'liquid gold': our cold-pressed extra virgin olive oil.</p>\",\n    \"<ul>\",\n    \"<li><strong>Freshness First:</strong> We source our produce from local farmers every morning.</li>\",\n    \"<li><strong>Traditional Methods:</strong> No shortcuts. Our Tzatziki is strained for 12 hours for maximum creaminess.</li>\",\n    \"<li><strong>Authentic Spices:</strong> Our herbs are imported directly from the Peloponnese region.</li>\",\n    \"</ul>\"\n  ],\n\n  // SECTION 3: THE FOUNDER QUOTE\n  [\n    \"<div class='quote-container'>\",\n    \"<blockquote>'To eat at our table is to be part of our family. We don't just serve meals; we share our heritage.'</blockquote>\",\n    \"<cite>— Mama Eleni, Founder & Head Chef</cite>\",\n    \"</div>\"\n  ],\n\n  // SECTION 4: MEET THE TEAM\n  [\n    \"<h3>Meet the Family</h3>\",\n    \"<p>Today, Mama Eleni is joined by her son, Nikos, who manages the grill with the same passion his mother did 30 years ago, and her daughter, Sofia, who ensures every guest feels the warmth of Greek hospitality (<em>Xenia</em>) the moment they walk through our doors.</p>\",\n    \"<p>Whether for a quick lunch or a slow sunset dinner, welcome to the family. <strong>Opa!</strong></p>\"\n  ]\n];\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/page-contents.js?\n}");

/***/ },

/***/ "./src/page-renderer.js"
/*!******************************!*\
  !*** ./src/page-renderer.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PageContentRenderer: () => (/* binding */ PageContentRenderer)\n/* harmony export */ });\nfunction PageContentRenderer(pageContainer) {\n  if (!new.target) {\n    throw Error(\"new keyword wasn't used\");\n  }\n  this.pageContentContainer = pageContainer;\n  this.removePageContent();\n}\nPageContentRenderer.prototype.removePageContent = function () {\n// Remove all present content when function is called clean content to render new content\n  while (this.pageContentContainer.lastChild) {\n    this.pageContentContainer.lastChild.remove();\n  }\n};\nPageContentRenderer.prototype.renderPageContent = function (pageContent) {\n  this.pageContentContainer.append(...pageContent);\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./src/page-renderer.js?\n}");

/***/ },

/***/ "./src/page-section-generator.js"
/*!***************************************!*\
  !*** ./src/page-section-generator.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PageSectionGenerator: () => (/* binding */ PageSectionGenerator)\n/* harmony export */ });\nfunction PageSectionGenerator(title, pageSections) {\n  if (!new.target) {\n    throw Error(\"new keyword wasn't used\");\n  }\n  this.pageTitle = title;\n  this.pageSections = pageSections;\n}\nPageSectionGenerator.prototype.createPageTitleSection = function () {\n// Create an individual section that contains title to later be added to the main content div\n  const titleSection = document.createElement(\"section\");\n  titleSection.setAttribute(\"id\", \"title-section\");\n  const titleTag = document.createElement(\"h1\");\n\n  titleTag.textContent = this.pageTitle;\n  titleSection.append(titleTag);\n\n  return titleSection;\n};\nPageSectionGenerator.prototype.addPageContent = function () {\n// A new section is created returning containing all the page content to later be added to page\n  const pageContent = [];\n  pageContent.push(this.createPageTitleSection());\n\n  this.pageSections.forEach((pageSectionContent) => {\n    const pageSection = document.createElement(\"section\");\n    pageSection.innerHTML = pageSectionContent.join(\"\");\n    pageContent.push(pageSection);\n  });\n\n  return pageContent;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./src/page-section-generator.js?\n}");

/***/ },

/***/ "./src/restaurant-styles.css"
/*!***********************************!*\
  !*** ./src/restaurant-styles.css ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_restaurant_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./restaurant-styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/restaurant-styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_restaurant_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_restaurant_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_restaurant_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_restaurant_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/restaurant-styles.css?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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