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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  font-family: Arial, sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #0f172a;\n  color: #f8fafc;\n}\n\n#status-message {\n  margin: 1rem 0;\n  font-size: 1.25rem;\n  font-weight: bold;\n}\n\n.controls {\n  margin-bottom: 1.5rem;\n  display: flex;\n  gap: 1rem;\n}\n\nbutton {\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  background-color: #3b82f6;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #2563eb;\n}\n\n.boards-container {\n  display: flex;\n  gap: 3rem;\n  justify-content: center;\n}\n\n.board-wrapper {\n  text-align: center;\n}\n\n.board {\n  display: grid;\n  /* 11 columns: 1 label column + 10 grid columns */\n  grid-template-columns: repeat(11, 35px);\n  grid-template-rows: repeat(11, 35px);\n  gap: 2px;\n  background-color: #334155;\n  padding: 6px;\n  border-radius: 6px;\n}\n.grid-label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 0.85rem;\n  color: #94a3b8;\n  user-select: none;\n}\n\n.cell {\n  background-color: #1e293b;\n  width: 35px;\n  height: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border-radius: 2px;\n  box-sizing: border-box;\n}\n\n.cell.ship {\n  background-color: #64748b;\n}\n\n.cell.hit {\n  background-color: #cfbebe; \n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.cell.hit::after {\n  content: 'X';\n  font-size: 1.25rem;\n  font-weight: bold;\n  color: #dc2626; \n  line-height: 1;\n}\n\n.cell.miss::after {\n  content: '•';\n  font-size: 1.5rem;\n  color: #0f172a;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship-game/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship-game/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship-game/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship-game/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/dom/domUI.js"
/*!**************************!*\
  !*** ./src/dom/domUI.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderBoard: () => (/* binding */ renderBoard)\n/* harmony export */ });\nfunction renderBoard(\n  containerElement,\n  gameboard,\n  isEnemy = false,\n  onCellClick = null,\n) {\n  containerElement.innerHTML = \"\";\n\n  const rowLetters = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\", \"I\", \"J\"];\n\n  // Top-left blank corner cell\n  const cornerLabel = document.createElement(\"div\");\n  cornerLabel.classList.add(\"grid-label\");\n  containerElement.appendChild(cornerLabel);\n\n  // Column Headers (1 to 10)\n  for (let col = 1; col <= gameboard.size; col++) {\n    const colLabel = document.createElement(\"div\");\n    colLabel.classList.add(\"grid-label\");\n    colLabel.textContent = col;\n    containerElement.appendChild(colLabel);\n  }\n\n  // Render Rows (A-J) with Grid Cells\n  for (let y = 0; y < gameboard.size; y++) {\n    // Row Header (Letter)\n    const rowLabel = document.createElement(\"div\");\n    rowLabel.classList.add(\"grid-label\");\n    rowLabel.textContent = rowLetters[y];\n    containerElement.appendChild(rowLabel);\n\n    // Row Cells\n    for (let x = 0; x < gameboard.size; x++) {\n      const cell = document.createElement(\"div\");\n      cell.classList.add(\"cell\");\n      cell.dataset.x = x;\n      cell.dataset.y = y;\n\n      const squareContent = gameboard.getSquare(x, y);\n      const isAttacked = gameboard.attackedCoordinates.has(`${x},${y}`);\n\n      if (squareContent && !isEnemy) {\n        cell.classList.add(\"ship\");\n      }\n\n      if (isAttacked) {\n        if (squareContent) {\n          cell.classList.add(\"hit\");\n        } else {\n          cell.classList.add(\"miss\");\n        }\n      }\n\n      if (isEnemy && onCellClick && !isAttacked) {\n        cell.addEventListener(\"click\", () => onCellClick(x, y));\n      }\n\n      containerElement.appendChild(cell);\n    }\n  }\n}\n\n\n//# sourceURL=webpack://battleship-game/./src/dom/domUI.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_gamecontrol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/gamecontrol.js */ \"./src/modules/gamecontrol.js\");\n/* harmony import */ var _dom_domUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/domUI.js */ \"./src/dom/domUI.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\nlet game = new _modules_gamecontrol_js__WEBPACK_IMPORTED_MODULE_0__.GameController();\n\nconst playerBoardElement = document.getElementById(\"player-board\");\nconst computerBoardElement = document.getElementById(\"computer-board\");\nconst statusMessage = document.getElementById(\"status-message\");\nconst randomizeBtn = document.getElementById(\"randomize-btn\");\nconst restartBtn = document.getElementById(\"restart-btn\");\n\nfunction updateDisplay() {\n  (0,_dom_domUI_js__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(playerBoardElement, game.player.gameboard, false);\n  (0,_dom_domUI_js__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(\n    computerBoardElement,\n    game.computer.gameboard,\n    true,\n    handleCellClick,\n  );\n}\n\nfunction handleCellClick(x, y) {\n  if (game.isGameOver) return;\n\n  const turnOutcome = game.playTurn(x, y);\n  if (!turnOutcome) return;\n\n  updateDisplay();\n\n  if (turnOutcome.winner) {\n    statusMessage.textContent = `${turnOutcome.winner} wins the battle! `;\n  } else {\n    statusMessage.textContent =\n      \"Your turn! Choose a target on the opponent board.\";\n  }\n}\n\nrandomizeBtn.addEventListener(\"click\", () => {\n  if (game.isGameOver) return;\n  game.placePlayerShipsRandomly();\n  updateDisplay();\n});\n\nrestartBtn.addEventListener(\"click\", () => {\n  game = new _modules_gamecontrol_js__WEBPACK_IMPORTED_MODULE_0__.GameController();\n  game.placePlayerShipsRandomly();\n  statusMessage.textContent = \"New game started! Fire when ready.\";\n  updateDisplay();\n});\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // Move initial setup here\n  game.placePlayerShipsRandomly();\n  updateDisplay();\n});\n\n// Initial Setup\ngame.placePlayerShipsRandomly();\nupdateDisplay();\n\n\n//# sourceURL=webpack://battleship-game/./src/index.js?\n}");

/***/ },

/***/ "./src/modules/gameboard.js"
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\nclass Gameboard {\n  constructor(size = 10) {\n    this.size = size;\n    // Create a 10x10 2D array filled with null\n    this.grid = Array(size)\n      .fill(null)\n      .map(() => Array(size).fill(null));\n\n    this.ships = [];\n    this.missedShots = [];\n    this.attackedCoordinates = new Set(); // Stores \"x,y\" strings for fast lookup\n  }\n\n  // Returns the contents of a grid cell or null if out of bounds\n  getSquare(x, y) {\n    if (this.isOutOfBounds(x, y)) return null;\n    return this.grid[y][x];\n  }\n\n  // Helper method to check if coordinates are within the board\n  isOutOfBounds(x, y) {\n    return x < 0 || x >= this.size || y < 0 || y >= this.size;\n  }\n\n  // Check if a ship can fit without going off-board or overlapping\n  canPlaceShip(ship, x, y, orientation) {\n    for (let i = 0; i < ship.length; i++) {\n      const currentX = orientation === \"horizontal\" ? x + i : x;\n      const currentY = orientation === \"vertical\" ? y + i : y;\n\n      if (this.isOutOfBounds(currentX, currentY)) return false;\n      if (this.grid[currentY][currentX] !== null) return false; // Cell already occupied\n    }\n    return true;\n  }\n\n  // Places ship onto the grid if valid\n  placeShip(ship, x, y, orientation = \"horizontal\") {\n    if (!this.canPlaceShip(ship, x, y, orientation)) return false;\n\n    for (let i = 0; i < ship.length; i++) {\n      const currentX = orientation === \"horizontal\" ? x + i : x;\n      const currentY = orientation === \"vertical\" ? y + i : y;\n      this.grid[currentY][currentX] = ship;\n    }\n\n    this.ships.push(ship);\n    return true;\n  }\n\n  // Processes an attack at (x, y)\n  receiveAttack(x, y) {\n    if (this.isOutOfBounds(x, y)) return false;\n\n    const coordKey = `${x},${y}`;\n    // Prevent attacking the same spot twice\n    if (this.attackedCoordinates.has(coordKey)) return false;\n\n    this.attackedCoordinates.add(coordKey);\n\n    const target = this.grid[y][x];\n\n    if (target) {\n      target.hit(); // Call hit() on the Ship object at this coordinate\n      return \"hit\";\n    } else {\n      this.missedShots.push([x, y]);\n      return \"miss\";\n    }\n  }\n\n  // Returns true if every ship placed on this board has been sunk\n  allShipsSunk() {\n    if (this.ships.length === 0) return false;\n    return this.ships.every((ship) => ship.isSunk());\n  }\n}\n\n\n//# sourceURL=webpack://battleship-game/./src/modules/gameboard.js?\n}");

/***/ },

/***/ "./src/modules/gamecontrol.js"
/*!************************************!*\
  !*** ./src/modules/gamecontrol.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameController: () => (/* binding */ GameController)\n/* harmony export */ });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/modules/player.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ \"./src/modules/ship.js\");\n\n\n\nclass GameController {\n  constructor() {\n    this.player = new _player_js__WEBPACK_IMPORTED_MODULE_0__.Player(\"human\");\n    this.computer = new _player_js__WEBPACK_IMPORTED_MODULE_0__.Player(\"computer\");\n    this.activePlayer = this.player;\n    this.isGameOver = false;\n\n    // Standard Battleship fleet sizes\n    this.shipLengths = [4, 3, 3, 2,1];\n\n    // Auto-place computer ships randomly at start\n    this.placeComputerShips();\n  }\n\n  placeRandomly(board, ship) {\n    let placed = false;\n    while (!placed) {\n      const x = Math.floor(Math.random() * board.size);\n      const y = Math.floor(Math.random() * board.size);\n      const orientation = Math.random() < 0.5 ? \"horizontal\" : \"vertical\";\n      placed = board.placeShip(ship, x, y, orientation);\n    }\n  }\n\n  placeComputerShips() {\n    this.shipLengths.forEach((length) => {\n      this.placeRandomly(this.computer.gameboard, new _ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship(length));\n    });\n  }\n\n  placePlayerShipsRandomly() {\n    this.player.gameboard = new this.player.gameboard.constructor();\n    this.shipLengths.forEach((length) => {\n      this.placeRandomly(this.player.gameboard, new _ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship(length));\n    });\n  }\n\n  playTurn(x, y) {\n    if (this.isGameOver || this.activePlayer !== this.player) return false;\n\n    // 1. Human attacks computer board\n    const playerAttackResult = this.player.attack(\n      this.computer.gameboard,\n      x,\n      y,\n    );\n    if (!playerAttackResult) return false; // Invalid or repeated cell\n\n    // Check if Human won\n    if (this.computer.gameboard.allShipsSunk()) {\n      this.isGameOver = true;\n      return { playerAttack: playerAttackResult, winner: \"Player\" };\n    }\n\n    // 2. Switch turn to Computer\n    this.activePlayer = this.computer;\n    const computerAttackResult = this.computer.randomAttack(\n      this.player.gameboard,\n    );\n\n    // Check if Computer won\n    if (this.player.gameboard.allShipsSunk()) {\n      this.isGameOver = true;\n      return {\n        playerAttack: playerAttackResult,\n        computerAttack: computerAttackResult,\n        winner: \"Computer\",\n      };\n    }\n\n    // Switch back to Human\n    this.activePlayer = this.player;\n\n    return {\n      playerAttack: playerAttackResult,\n      computerAttack: computerAttackResult,\n      winner: null,\n    };\n  }\n}\n\n\n//# sourceURL=webpack://battleship-game/./src/modules/gamecontrol.js?\n}");

/***/ },

/***/ "./src/modules/player.js"
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/modules/gameboard.js\");\n\n\nclass Player {\n  constructor(type = \"Human\") {\n    this.type = type;\n    this.gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard();\n  }\n  attack(enemyBoard, x, y) {\n    return enemyBoard.receiveAttack(x, y);\n  }\n  randomAttack(enemyBoard) {\n    if (\n      enemyBoard.attackedCoordinates.size >=\n      enemyBoard.size * enemyBoard.size\n    ) {\n      return false; // Board fully attacked\n    }\n\n    let x, y, coordKey;\n    do {\n      x = Math.floor(Math.random() * enemyBoard.size);\n      y = Math.floor(Math.random() * enemyBoard.size);\n      coordKey = `${x},${y}`;\n    } while (enemyBoard.attackedCoordinates.has(coordKey));\n\n    return enemyBoard.receiveAttack(x, y);\n  }\n}\n\n//# sourceURL=webpack://battleship-game/./src/modules/player.js?\n}");

/***/ },

/***/ "./src/modules/ship.js"
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n    constructor(length) {\n        this.length = length;\n        this.hits = 0;\n    }\n\n    hit() {\n        if (this.hits < this.length) {\n            this.hits++;\n        }\n    }\n\n    isSunk() {\n        return this.hits >= this.length;\n    }\n}\n\n\n//# sourceURL=webpack://battleship-game/./src/modules/ship.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;