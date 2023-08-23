/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*
{
    padding: 0;
    margin: 0;

    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
}

#wrapper
{
    /* General properties */
    width: auto;
    height: 100vh;

    /* Grid properties */
    display: grid;
    grid-template-columns: 200px auto 200px;
    grid-template-rows: 50px auto;
}

.logoBox
{
    /* General properties */
    width: auto;
    height: auto;

    /* Parent grid properties */
    grid-column: 1/2;
    grid-row: 1/2;
}

.searchBox
{
    /* General properties */
    width: auto;
    height: auto;

    /* Parent grid properties */
    grid-column: 2/3;
    grid-row: 1/2;
}

.accountBox
{
    /* General properties */
    width: auto;
    height: auto;

    /* Parent grid properties */
    grid-column: 3/-1;
    grid-row: 1/2;
}

.projectsBox
{
    /* General properties */
    width: auto;
    height: auto;

    /* Parent grid properties */
    grid-column: 1/2;
    grid-row: 2/-1;

    /* Main Flex properties */
    display: flex;
    flex-direction: column;
}

.projectsHeader
{
    /* General properties */
    justify-content: center;
    padding: 10px;

    /* Flex properties */
    display: flex;
}

.projectsHeaderIcon
{
    /* Text properties */
    font-size: 25px;
    text-align: center;

    /* General properties */
    width: 25px;
}

.projectsHeaderText
{
    /* Text properties */
    font-size: 25px;
}

.projectsCreateBox
{
    /* General properties */
    justify-content: center;
    padding: 10px;

    /* Flex properties */
    display: flex;
}

.createProjectButton
{
    /* General properties */
    padding: 5px;
    /* Text properties */
    font-size: 18px;
    text-align: center;

    /* Border properties */
    border-style: solid;
    border-radius: 10px;

    /* Main flex properties */
    display: flex;
}

.projectsListBox
{
    /* General properties */
    width: auto;
    height: 100%;
    padding: 10px;
    background-color: rgb(143, 255, 255);

    /* Flex properties */
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.deckBox
{
    /* General properties */
    width: auto;
    height: auto;

    /* Parent grid properties */
    grid-column: 2/-1;
    grid-row: 2/-1;

    /* Main flex properties */
    display: flex;
    flex-direction: column;
}

.deckHeader
{
    /* General properties */
    justify-content: center;
    align-items: center;
    padding: 10px;

    /* Main flex properties */
    display: flex;
}

.deckHeaderIcon
{
    /* Text properties */
    font-size: 25px;
}

.deckHeaderText
{
    /* Text properties */
    font-size: 25px;
}

.deckButtons
{
    /* General properties */
    padding: 10px;
}

.createCardButton
{
    /* General properties */
    padding: 5px;
    /* Text properties */
    font-size: 18px;
    text-align: center;

    /* Border properties */
    border-style: solid;
    border-radius: 10px;

    /* Main flex properties */
    display: flex;
}

.deckContent
{
    /* General properties */
    height: 100%;
    padding: 10px;

    /* Flex properties */
    display: flex;
}

.cardListBox
{
    /* General properties */
    background-color: rgb(143, 255, 255);

    /* Parent flex properties */
    flex: 1;
}

.cardDisplay
{
    /* General properties */
    display: flex;
    flex-direction: column;
    min-width: 50%;
    padding: 10px;
    background-color: rgb(143, 255, 255);
}

.normalCardDisplayBox, .editCardDisplayBox
{
    /* General properties */
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: rgb(165, 139, 192);
}

.normCardHeader, .editCardHeader
{
    /* General properties */
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    padding: 2px;
}

.editCardButton
{
    /* General properties */
    width: 50px;
    background-color: rgb(117, 117, 255);
}

.applyEditButton
{
    /* General properties */
    width: 50px;
    background-color: rgb(117, 255, 140);
}

.cancelEditButton
{
    /* General properties */
    width: 50px;
    background-color: rgb(255, 117, 117);
}

.editCardForm
{
    /* General properties */
    display: flex;
    flex-direction: column;
}


/* SUPPORT CSS */
.hidden
{
    display: none;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*\n{\n    padding: 0;\n    margin: 0;\n\n    border-style: solid;\n    border-width: 1px;\n    box-sizing: border-box;\n}\n\n#wrapper\n{\n    /* General properties */\n    width: auto;\n    height: 100vh;\n\n    /* Grid properties */\n    display: grid;\n    grid-template-columns: 200px auto 200px;\n    grid-template-rows: 50px auto;\n}\n\n.logoBox\n{\n    /* General properties */\n    width: auto;\n    height: auto;\n\n    /* Parent grid properties */\n    grid-column: 1/2;\n    grid-row: 1/2;\n}\n\n.searchBox\n{\n    /* General properties */\n    width: auto;\n    height: auto;\n\n    /* Parent grid properties */\n    grid-column: 2/3;\n    grid-row: 1/2;\n}\n\n.accountBox\n{\n    /* General properties */\n    width: auto;\n    height: auto;\n\n    /* Parent grid properties */\n    grid-column: 3/-1;\n    grid-row: 1/2;\n}\n\n.projectsBox\n{\n    /* General properties */\n    width: auto;\n    height: auto;\n\n    /* Parent grid properties */\n    grid-column: 1/2;\n    grid-row: 2/-1;\n\n    /* Main Flex properties */\n    display: flex;\n    flex-direction: column;\n}\n\n.projectsHeader\n{\n    /* General properties */\n    justify-content: center;\n    padding: 10px;\n\n    /* Flex properties */\n    display: flex;\n}\n\n.projectsHeaderIcon\n{\n    /* Text properties */\n    font-size: 25px;\n    text-align: center;\n\n    /* General properties */\n    width: 25px;\n}\n\n.projectsHeaderText\n{\n    /* Text properties */\n    font-size: 25px;\n}\n\n.projectsCreateBox\n{\n    /* General properties */\n    justify-content: center;\n    padding: 10px;\n\n    /* Flex properties */\n    display: flex;\n}\n\n.createProjectButton\n{\n    /* General properties */\n    padding: 5px;\n    /* Text properties */\n    font-size: 18px;\n    text-align: center;\n\n    /* Border properties */\n    border-style: solid;\n    border-radius: 10px;\n\n    /* Main flex properties */\n    display: flex;\n}\n\n.projectsListBox\n{\n    /* General properties */\n    width: auto;\n    height: 100%;\n    padding: 10px;\n    background-color: rgb(143, 255, 255);\n\n    /* Flex properties */\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.deckBox\n{\n    /* General properties */\n    width: auto;\n    height: auto;\n\n    /* Parent grid properties */\n    grid-column: 2/-1;\n    grid-row: 2/-1;\n\n    /* Main flex properties */\n    display: flex;\n    flex-direction: column;\n}\n\n.deckHeader\n{\n    /* General properties */\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n\n    /* Main flex properties */\n    display: flex;\n}\n\n.deckHeaderIcon\n{\n    /* Text properties */\n    font-size: 25px;\n}\n\n.deckHeaderText\n{\n    /* Text properties */\n    font-size: 25px;\n}\n\n.deckButtons\n{\n    /* General properties */\n    padding: 10px;\n}\n\n.createCardButton\n{\n    /* General properties */\n    padding: 5px;\n    /* Text properties */\n    font-size: 18px;\n    text-align: center;\n\n    /* Border properties */\n    border-style: solid;\n    border-radius: 10px;\n\n    /* Main flex properties */\n    display: flex;\n}\n\n.deckContent\n{\n    /* General properties */\n    height: 100%;\n    padding: 10px;\n\n    /* Flex properties */\n    display: flex;\n}\n\n.cardListBox\n{\n    /* General properties */\n    background-color: rgb(143, 255, 255);\n\n    /* Parent flex properties */\n    flex: 1;\n}\n\n.cardDisplay\n{\n    /* General properties */\n    display: flex;\n    flex-direction: column;\n    min-width: 50%;\n    padding: 10px;\n    background-color: rgb(143, 255, 255);\n}\n\n.normalCardDisplayBox, .editCardDisplayBox\n{\n    /* General properties */\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    background-color: rgb(165, 139, 192);\n}\n\n.normCardHeader, .editCardHeader\n{\n    /* General properties */\n    display: flex;\n    justify-content: flex-end;\n    gap: 10px;\n    padding: 2px;\n}\n\n.editCardButton\n{\n    /* General properties */\n    width: 50px;\n    background-color: rgb(117, 117, 255);\n}\n\n.applyEditButton\n{\n    /* General properties */\n    width: 50px;\n    background-color: rgb(117, 255, 140);\n}\n\n.cancelEditButton\n{\n    /* General properties */\n    width: 50px;\n    background-color: rgb(255, 117, 117);\n}\n\n.editCardForm\n{\n    /* General properties */\n    display: flex;\n    flex-direction: column;\n}\n\n\n/* SUPPORT CSS */\n.hidden\n{\n    display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/projectManager.js":
/*!*******************************!*\
  !*** ./src/projectManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");
// JS imports


// This script job is to:
// Create a project, store project in a array/data structure
// Then "Pass to render"

const projectList = [];
let currentProject = new Project(); // This variable saves the current project id# for lookup
let selectedCard; //Keeps track of our current selected card.

// Pubsub subscriptions
_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("addProject", addProject);
_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("addCard", addCard);
_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("openProject", openProject);
_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("viewCard", viewCard);
_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("editCard", editSelectedCard);
_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("applyEdit",applyCardEdit);
_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("applyChecklistChange", applyChecklistChange);
_pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("addCheckbox", addCheckbox);


// This function handles initilization for this script
function initilization()
{
    // We want to make sure to get the correct localstorage data.
    // Then we go ahead and load it up if there is projectList data to load.
    if(localStorage.getItem("projectList"))
    {
        // Add data to the projectList
        let data = JSON.parse(localStorage.getItem("projectList"));
        data.forEach(element => {
            projectList.push(element);
        });
        console.log(projectList);

        // Set current project default to project 1
        // Else create a default project and set current to that
        if(projectList[0] !== null)
        {
            console.log("ProjectList found: Setting default project");
            currentProject = projectList[0];
        }

        // Go ahead and do a renderProjects call
        _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("renderProjects", projectList);
    }
    else // We go ahead and back a new projectList in localStorage and set the currentProject to default.
    {
        console.log("ProjectList not found: Creating default project");
        addProject("New Project");
        currentProject = projectList[0];
    }
}


// This function will be subscribed to the "addProject" event call
// This will handle adding the new project to the projectList.
// The project will create a default "New Project".
// Then this will call render projects function
function addProject(projectName)
{
    // Want to make sure that a string was passed through
    // the pubsub.
    if(typeof projectName === 'string')
    {
        console.log("ProjectManager.js 'Action': Creating project....");

        // Generate new id for project
        let newID = generateID();

        // Create a new project object
        let newProject = new Project(newID, projectName);

        // We then pass the newProject to the projectList.
        projectList.push(newProject);

        // We make sure to convert the new updated projectList to
        // our localstorage.
        localStorage.setItem("projectList", JSON.stringify(projectList));
    }
    else
    {
        console.log("ERROR: Project name is not of type 'string'");
    }

    console.log(projectList);

    // Go ahead and do a renderProjects call
    _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("renderProjects", projectList);
}

// This function will handle adding a card to the current selected project.
function addCard(cardName)
{
    console.log(`Card added to ${currentProject.name} with id#${currentProject.id} and card list of ${currentProject.cardList}`);
    console.log(currentProject.cardList);

    // Generate a new id for the new card
    let newID = generateID();
    
    // Create a new card and add it to the currentProject cardList
    let newCard = new Card(newID, cardName, "N/A", "0/0/00", "Low");
    currentProject.cardList.push(newCard);

    // Update projectList with the new changes to the current project
    // and save it to local storage
    updateProjectList();

    // Then we go ahead and call renderCards
    _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("renderCards", currentProject.cardList);
}

// This function will handle adding a new checkbox to the selected card checklist
function addCheckbox()
{
    // console.log("Adding new checkbox to checklist");

    // // Add a new checkbox item to the selectCard checkList
    // selectedCard.checkList.push({state: 0, text: "Test"});

    // // Update the currentProject cardList with the selectCard changes
    // let index = currentProject.cardList.indexOf(currentProject.cardList.find((element) => element.id === selectedCard.id ? element : null));
    // currentProject.cardList.splice(index, 1, selectedCard);

    // // Update projectlist with new changes
    // updateProjectList();
}

// This function handles what happens when the user opens a project 
// (clicks on the project button)
function openProject(projectID)
{
    console.log(`Opening project id# ${projectID}`);

    // We make sure to set the currenProject to the project we opened.
    setCurrentProject(projectID);
    console.log("Current Project:" + currentProject);

    // We call renderCards so we can display the currentProject's cardList
    _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("renderCards", currentProject.cardList);
}

// This function handles what happens when the user clicks
// on a card so they can view it.
function viewCard(card)
{
    // We check to see if a new card was passed. If not then we must want
    // to view the existing selectedCard.
    if(card !== null)
    {
        console.log(`Viewing card: "${card.title}"`);
            // Make sure that we keep track of what card is currently selected.
        selectedCard = card;
    }

    _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("renderCardDisplay", selectedCard);
}

// This function handles finding a project from the projectList based on projectID.
// Make sure to convert the data to a project object.
function setCurrentProject(projectID)
{
    console.log(`Finding project: ${projectID} in the projectList.`);
    currentProject = projectList.find((element) => element.id === projectID ? element : null);
    console.log(currentProject);
}

// This function handles what happens when the user wants to 
// edit the selected card.
function editSelectedCard()
{
    if(selectedCard)
    {
        console.log(`Editing the selected card ${selectedCard.title}`);
    
        // Render the edit display
        _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("renderEditCardDisplay", selectedCard);
    }
}

function updateProjectList()
{
    // Apply changes to the currentProject to the projectList
    let index = projectList.indexOf(projectList.find((element) => element.id === currentProject.id ? element : null));
    projectList.splice(index, 1, currentProject);

    // Save/upload changes to the localStorage.
    localStorage.setItem("projectList", JSON.stringify(projectList));
}

// This function handles the changes to the selected card
// and updates it then saves it to the localstorage.
function applyCardEdit(data)
{
    console.log("Applying edit changes to the selected card");
    console.log(`New card title: ${data.get("editCardTitle")}`);

    // We make sure to apply the new changes to the selectedCard
    // Apply Card title changes
    selectedCard.title = data.get("editCardTitle");
    // Apply Card description changes
    selectedCard.desc = data.get("editCardDesc");
    // Apply Card due date changes
    selectedCard.due = data.get("editCardDue");
    // Apply Card priority changes
    selectedCard.priority = data.get("editCardPriority");
    // Apply Card checklist changes
    for(const element of data)
    {
        console.log(element);
    }
    for(let i = 0; i < Number(data.get("checklistCount")); i++)
    {
        if(selectedCard.checkList[i])
        {
            selectedCard.checkList[i].text = data.get(`editCheckbox${i}`);
        }
        else
        {
            selectedCard.checkList.push({state: 0, text: data.get(`editCheckbox${i}`)});
        }
    }


    // Apply changes to the selectedCard and update the currentProject cardList
    let index = currentProject.cardList.indexOf(currentProject.cardList.find((element) => element.id === selectedCard.id ? element : null));
    currentProject.cardList.splice(index, 1, selectedCard);

    // Apply changes to the projectList because we made changes to the current project
    updateProjectList();

    // Update the render of the current project card list
    // Update the card display with the new updated card data.
    _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("renderCards", currentProject.cardList);
    _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("renderCardDisplay", selectedCard);
}

// This function handles the changes made to the checklist of a card.
// This makes sure that update the correct state for each checklist element that changed.
function applyChecklistChange(data)
{
    console.log(`Applying checklist changes to card ${data.id}`);
    // Apply changes to the selectedCard and update the currentProject cardList
    let index = currentProject.cardList.indexOf(currentProject.cardList.find((element) => element.id === selectedCard.id ? element : null));
    currentProject.cardList.splice(index, 1, selectedCard);

    // Apply changes to the projectList because we made changes to the current project
    updateProjectList();
}

// This function handles deleting a project from the projectList
// Pubsub subcription when the delete project button is clicked
function deleteProject()
{

}

// This function handles generating a basic id for any object that needs it
function generateID()
{
    // Generating a quick unique ID using Date.now() + some random-ness. This is a bandaid solution to get everything working.
    let idNumber = (Math.random().toString(16).slice(2) + Date.now()).toString();
    return idNumber;
}

// Quick factory function to create project objects with data properties
// Currently have project name and a unqiue ID that is given to each project.
// Starts with a empty cardList array that will contain the cards added to the project.
function Project(id, name, cardList)
{
    cardList = [];
    return { id: id, name: name, cardList: cardList}
}

// Quick factory function that will create card objects to be stored in projects
// and localStorage.
function Card(id, title, description, due, priority)
{
    //This array will store an object that will represent a checkbox properties like
    // have check state and the text description.
    let checkList = []; // ex: {state: 0, text: "Clean your room"}
    return { id: id, title: title, desc: description, due: due, priority: priority, checkList: checkList}
}


// We call initilization when this script is loaded at start.
initilization();

/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Create a const variable that uses the module pattern
const pubsub = (function()
{
    const calls = {};

    // This function handles subscribing actions to a call
    // actions are functions that will be called when the call
    // is published.
    function subscribe(call, action)
    {
        // If call exists
        if(this.calls[call])
        {
            this.calls[call].push(action);
        }
        else // Go ahead and create a new call property with an array type.
        {
            this.calls[call] = [];
            this.calls[call].push(action);
        }
    }
    
    // This method handles calling all the actions that are contained
    // in a call.
    function publish(call, data)
    {
        // If call exists
        if(this.calls[call])
        {
            console.log(`Publish Call: "${call}"`);
            this.calls[call].forEach(action => 
            {
                action(data);
            });
        }
        else // Go ahead and create a new call property with an array type.
        {
            this.calls[call] = [];
        }
    }

    // This function handles unsubscribing the action from a call.
    // Make sure to use this to clean up the calls list.
    function unsubscribe(call, action)
    {

    }

    return{ calls: calls, publish: publish, subscribe: subscribe};
})();

// Export that pubsub module
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pubsub);

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub.js */ "./src/pubsub.js");
// JS imports


// This script job is to:
// update and render the web elements on the page

// DOM references
const projectListBox = document.querySelector('.projectsListBox');
const cardListBox = document.querySelector('.cardListBox');
const normalCardDisplayBox = document.querySelector('.normalCardDisplayBox');
const editCardDisplayBox = document.querySelector('.editCardDisplayBox');
const normCardTitle = document.querySelector('.normCardTitle');
const normCardDesc = document.querySelector('.normCardDesc');
const normCardDue = document.querySelector('.normCardDue');
const normCardPriority = document.querySelector('.normCardPriority');
const normCardChecklist = document.querySelector('.normCardChecklist');
const editCardTitle = document.querySelector('#editCardTitle');
const editCardDesc = document.querySelector('#editCardDesc');
const editCardDue = document.querySelector('#editCardDue');
const editCardPriority = document.querySelector('#editCardPriority');
const editCardChecklist = document.querySelector('.editCardChecklist');
const editCardChecklistCount = document.querySelector('.checklistCount');

// Pubsub subscriptions
_pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("renderProjects", renderProjectList);
_pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("renderCards", renderCardList);
_pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("renderCardDisplay", renderCardDisplay);
_pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("renderEditCardDisplay", renderEditCardDisplay);
_pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("renderNewCheckbox", renderNewCheckbox);


// This function handles the rendering of the projectlist on the page.
function renderProjectList(projectList)
{
    if(Array.isArray(projectList))
    {
        console.log("render.js 'Action': Rendering projects....");

        // Clear the box and re-render the whole list
        projectListBox.innerHTML = ' ';

        // We loop through each project in the projectList and render it
        // as a button.
        projectList.forEach(project => {

            // Debug console
            console.log("Creating new button element for projectList");

            // Create a new project element
            let newElement = document.createElement('button');
            newElement.classList.add("projectButton")
            newElement.textContent = project.name;

            // Make sure to add an eventlistener on click that will
            // call a pubsub publish for opening the project.
            newElement.addEventListener('click', function(e)
            {
                _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish("openProject", project.id);
            });

            // We finally add the new element to the projectList.
            projectListBox.appendChild(newElement);
        });
    }
    else
    {
        console.log("ERROR: projectList is not of type 'Array'");
    }
}

// This function handles the rendering of the cardList on the page.
// cardList will be the current project's to-do-list lists if that makes sense.
function renderCardList(cardList)
{
    console.log(`render.js 'Action': Rendering cards from current project`);

    // Clear the box and re-render the whole list
    cardListBox.innerHTML = ' ';

    // Check if cardList is an array then go ahead and see if we can render cards.
    if(Array.isArray(cardList))
    {
        if(cardList.length === 0)
        {
            console.log("Current project contains no cards");
        }
        else
        {
            cardList.forEach(card => {

                // Debug console
                console.log("Rendering card:")

                // Create a new card element
                let newElement = document.createElement('button');
                newElement.classList.add('cardButton');
                newElement.textContent = card.title;

                // Make sure to add an eventlistener on click that will
                // call a pubsub publish for opening the project.
                newElement.addEventListener('click', function(e)
                {
                    console.log(`Card button was clicked. Calling "viewCard".`);
                    _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish("viewCard", card);
                    // pubsub.publish("renderCardDisplay", card);
                });

                // Append new element to the cardListBox
                cardListBox.appendChild(newElement);
            });
        }
    }
    else
    {
        console.log("ERROR: cardList is not of type 'Array'");
    }
}

// This function handles rendering a new checkbox to the checklist when editCardDisplay
// is open. It would have to be because only the +new checkbox button would be able to call this function
// We want to make sure that the apply changes is the only way for the user to change cards.
// This function will render a new checkbox element to the editCardDisplay but will not save the changes
function renderNewCheckbox()
{
    // Get the last checkbox number and divide by 2 (because of label and input element)
    // We want to use this number so we can create id/name with the correct checkbox#
    let i = (editCardChecklist.childElementCount / 2);

    // Create a new element that will represent the checkbox label for editing
    let newElement = document.createElement('input');
    newElement.classList.add('editCheckbox');
    newElement.setAttribute("id", `editCheckbox${i}`);
    newElement.setAttribute("name", `editCheckbox${i}`);

    // Create a new label for that text input element
    let newText = document.createElement('label');
    newText.setAttribute('for', `editCheckbox${i}`);
    newText.textContent = `Checkbox #${i+1}`;

    // Append it to the editCardChecklist for display
    editCardChecklist.appendChild(newText);
    editCardChecklist.appendChild(newElement);

    // Make sure we update the hidden element checklistCount to keep track of
    // the new total of elements in the checklist. We go ahead and just add 1 to the total.
    editCardChecklistCount.setAttribute('value', (Number(editCardChecklistCount.getAttribute('value')) + 1));
}

// This function handles rendering the selected card to the card display element.
// It will render all the card information to the card display.
function renderCardDisplay(card)
{
    console.log(`Rendering "${card.title}" to card display`);

    // Render card title to the display
    normCardTitle.textContent = card.title;

    // Render card description to the display
    normCardDesc.textContent = card.desc;

    // Render card due date to the display
    normCardDue.textContent = card.due;

    // Render card priority to the display
    normCardPriority.textContent = card.priority;

    // Before we begin, we will clear the checklist to prevent any duplicates.
    // or elements that aren't suppose to be in the checklist.
    normCardChecklist.innerHTML = "";
    // Render card checklist to the display
    for(let i = 0; i < card.checkList.length; i++)
    {
        // We make sure to go through the checklist array and create a new checkbox
        // for each element in the array till we have the full checklist in the display.

        // Create a new checkbox div
        let newDiv = document.createElement('div');
        newDiv.classList.add("Checkbox");

        // Create a new checkbox input element
        let newCheckbox = document.createElement('input');
        newCheckbox.setAttribute('type', 'checkbox');
        newCheckbox.setAttribute('id',`cb${i+1}`);
        newCheckbox.checked = card.checkList[i].state;

        // Make sure to add an eventlistener when there is a change in the checkbox
        newCheckbox.addEventListener('click', function(e)
        {
            console.log(`checkbox ${newCheckbox.getAttribute('id')} state has changed`);
            console.log(card.checkList[i].state);
            card.checkList[i].state === 0 ? card.checkList[i].state = 1 : card.checkList[i].state = 0;
            console.log(card.checkList[i].state);

            // Pubsub call when this happens to update the card checklist.
            _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish("applyChecklistChange", card);
        })

        // Create a new label for that checkbox input element
        let newText = document.createElement('label');
        newText.setAttribute('for', `cb${i+1}`);
        newText.textContent = card.checkList[i].text;

        // Append both checkbox element and text element to div
        newDiv.appendChild(newCheckbox);
        newDiv.appendChild(newText);

        // Append the div to the checklist element
        normCardChecklist.appendChild(newDiv);
    }



    // We make sure that the normal card display is active
    // and not the edit card display.
    editCardDisplayBox.classList.add('hidden');
    normalCardDisplayBox.classList.remove('hidden');
}

// This function handles rendering the edit form for the currently selected card.
// This just handles rendering the form and not the editing.
function renderEditCardDisplay(card)
{
    if(card)
    {
        console.log(`Rendering "${card.title}" to card display for editing`);
        console.log(card);

        // We render the selected card values to the correct place on the display.
        editCardTitle.setAttribute('value', card.title);
        editCardDesc.setAttribute('value', card.desc);
        editCardDue.setAttribute('value', card.due);

        // This lets us make sure the priority is on the correct option.
        let index = -1;
        for(const option of editCardPriority.options)
        {
            index++;
            if(option.value === card.priority)
            {
                editCardPriority.selectedIndex = index;
            }
        }

        // This lets us change the label text for each checkbox in the checklist
        // by converting all the labels into input type text elements.
        // First we clear the editCardChecklist div element so we don't run into duplicates
        editCardChecklist.innerHTML = "";
        // This keeps track of how many checkboxes we have and later used to store in formDat by checklistCount.
        let checklistCount = 0;
        for(let i = 0; i < card.checkList.length; i++)
        {
            // Create a new element that will represent the checkbox label for editing
            let newElement = document.createElement('input');
            newElement.classList.add('editCheckbox');
            newElement.setAttribute("id", `editCheckbox${i}`);
            newElement.setAttribute("name", `editCheckbox${i}`);
            newElement.value = card.checkList[i].text;

            // Create a new label for that text input element
            let newText = document.createElement('label');
            newText.setAttribute('for', `editCheckbox${i}`);
            newText.textContent = `Checkbox #${i+1}`;

            // Append it to the editCardChecklist for display
            editCardChecklist.appendChild(newText);
            editCardChecklist.appendChild(newElement);

            // Add to checkbox count
            checklistCount++;
        }

        // Apply the value to the hidden checklistCount element for formData.
        editCardChecklistCount.setAttribute('value', checklistCount);


        // Display editCardDisplay and hide normalCardDisplay
        editCardDisplayBox.classList.remove('hidden');
        normalCardDisplayBox.classList.add('hidden');
    }
}



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub.js */ "./src/pubsub.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ "./src/render.js");
/* harmony import */ var _projectManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectManager.js */ "./src/projectManager.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
// 
// JS imports
// 
 //pubsub will always be load order -1. Core script that all scripts need for calls.
/* IMPORTANT*/  //MUST BE AT TOP LOAD ORDER. Problem with rendering localstorage on awake.


// 
// CSS imports
// 


// 
// DOM references
// 
const createProjectButton = document.querySelector('.createProjectButton');
const createCardButton = document.querySelector('.createCardButton');
const editCardButton = document.querySelector('.editCardButton');
const applyEditButton = document.querySelector('.applyEditButton');
const editCardForm = document.querySelector('.editCardForm');
const cancelEditButton = document.querySelector('.cancelEditButton');
const newCheckboxButton = document.querySelector('.newCheckboxButton');

// 
// Event Listeners\\
// 

// Create project button
createProjectButton.addEventListener('click', function(e)
{
    console.log("Create project button pressed");
    _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish("addProject", "New Project");
});
// Create card button
createCardButton.addEventListener('click', function(e)
{
    console.log("Create card button pressed");
    _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish("addCard", "New Card");
});
// Edit card Button
editCardButton.addEventListener('click', function(e)
{
    console.log("Editing card button pressed");
    _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish("editCard", "Edit Card");
})
// Apply Edit Button
applyEditButton.addEventListener('click', function()
{
    console.log("Apply edit button pressed");

    // Grab the form data from editCardForm
    const data = new FormData(editCardForm);

    // Then use that form data and pass it to the publish call: applyEdit
    // Those that are subscribed will have the form data now.
    _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish("applyEdit", data);

    // After everything is done, we want to make sure that we reset the form.
    // If we don't, there is a bug where the old values remain when editing a new card. 
    // It's weird but reset() fixes that.
    editCardForm.reset();
})
// Cancel Edit Button
cancelEditButton.addEventListener('click', function(e)
{
    console.log("Cancel edit button pressed");
    // We use the viewCard call so we can just refresh the card display
    // with the current selected card. We pass the null so we make sure that we don't want
    // to view a new card but rather view the existing selected card.
    _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish("viewCard", null);
})
newCheckboxButton.addEventListener('click', function(e)
{
    console.log("New checkbox button pressed");

    _pubsub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish("renderNewCheckbox", null);
    

    // // Pubsub call that will let us add a new checkbox
    // pubsub.publish("addCheckbox", null);
})



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFVBQVUsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFdBQVcsWUFBWSxhQUFhLFlBQVksWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxZQUFZLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLGFBQWEsYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxZQUFZLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxhQUFhLGFBQWEsV0FB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YnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3QvLi9zcmMvcHJvamVjdE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKlxue1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4jd3JhcHBlclxue1xuICAgIC8qIEdlbmVyYWwgcHJvcGVydGllcyAqL1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogMTAwdmg7XG5cbiAgICAvKiBHcmlkIHByb3BlcnRpZXMgKi9cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggYXV0byAyMDBweDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggYXV0bztcbn1cblxuLmxvZ29Cb3hcbntcbiAgICAvKiBHZW5lcmFsIHByb3BlcnRpZXMgKi9cbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICAvKiBQYXJlbnQgZ3JpZCBwcm9wZXJ0aWVzICovXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgICBncmlkLXJvdzogMS8yO1xufVxuXG4uc2VhcmNoQm94XG57XG4gICAgLyogR2VuZXJhbCBwcm9wZXJ0aWVzICovXG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuXG4gICAgLyogUGFyZW50IGdyaWQgcHJvcGVydGllcyAqL1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gICAgZ3JpZC1yb3c6IDEvMjtcbn1cblxuLmFjY291bnRCb3hcbntcbiAgICAvKiBHZW5lcmFsIHByb3BlcnRpZXMgKi9cbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICAvKiBQYXJlbnQgZ3JpZCBwcm9wZXJ0aWVzICovXG4gICAgZ3JpZC1jb2x1bW46IDMvLTE7XG4gICAgZ3JpZC1yb3c6IDEvMjtcbn1cblxuLnByb2plY3RzQm94XG57XG4gICAgLyogR2VuZXJhbCBwcm9wZXJ0aWVzICovXG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuXG4gICAgLyogUGFyZW50IGdyaWQgcHJvcGVydGllcyAqL1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gICAgZ3JpZC1yb3c6IDIvLTE7XG5cbiAgICAvKiBNYWluIEZsZXggcHJvcGVydGllcyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnByb2plY3RzSGVhZGVyXG57XG4gICAgLyogR2VuZXJhbCBwcm9wZXJ0aWVzICovXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcblxuICAgIC8qIEZsZXggcHJvcGVydGllcyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wcm9qZWN0c0hlYWRlckljb25cbntcbiAgICAvKiBUZXh0IHByb3BlcnRpZXMgKi9cbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLyogR2VuZXJhbCBwcm9wZXJ0aWVzICovXG4gICAgd2lkdGg6IDI1cHg7XG59XG5cbi5wcm9qZWN0c0hlYWRlclRleHRcbntcbiAgICAvKiBUZXh0IHByb3BlcnRpZXMgKi9cbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5wcm9qZWN0c0NyZWF0ZUJveFxue1xuICAgIC8qIEdlbmVyYWwgcHJvcGVydGllcyAqL1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAvKiBGbGV4IHByb3BlcnRpZXMgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY3JlYXRlUHJvamVjdEJ1dHRvblxue1xuICAgIC8qIEdlbmVyYWwgcHJvcGVydGllcyAqL1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICAvKiBUZXh0IHByb3BlcnRpZXMgKi9cbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLyogQm9yZGVyIHByb3BlcnRpZXMgKi9cbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICAvKiBNYWluIGZsZXggcHJvcGVydGllcyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wcm9qZWN0c0xpc3RCb3hcbntcbiAgICAvKiBHZW5lcmFsIHByb3BlcnRpZXMgKi9cbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQzLCAyNTUsIDI1NSk7XG5cbiAgICAvKiBGbGV4IHByb3BlcnRpZXMgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uZGVja0JveFxue1xuICAgIC8qIEdlbmVyYWwgcHJvcGVydGllcyAqL1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcblxuICAgIC8qIFBhcmVudCBncmlkIHByb3BlcnRpZXMgKi9cbiAgICBncmlkLWNvbHVtbjogMi8tMTtcbiAgICBncmlkLXJvdzogMi8tMTtcblxuICAgIC8qIE1haW4gZmxleCBwcm9wZXJ0aWVzICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZGVja0hlYWRlclxue1xuICAgIC8qIEdlbmVyYWwgcHJvcGVydGllcyAqL1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcblxuICAgIC8qIE1haW4gZmxleCBwcm9wZXJ0aWVzICovXG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmRlY2tIZWFkZXJJY29uXG57XG4gICAgLyogVGV4dCBwcm9wZXJ0aWVzICovXG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uZGVja0hlYWRlclRleHRcbntcbiAgICAvKiBUZXh0IHByb3BlcnRpZXMgKi9cbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5kZWNrQnV0dG9uc1xue1xuICAgIC8qIEdlbmVyYWwgcHJvcGVydGllcyAqL1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jcmVhdGVDYXJkQnV0dG9uXG57XG4gICAgLyogR2VuZXJhbCBwcm9wZXJ0aWVzICovXG4gICAgcGFkZGluZzogNXB4O1xuICAgIC8qIFRleHQgcHJvcGVydGllcyAqL1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAvKiBCb3JkZXIgcHJvcGVydGllcyAqL1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgIC8qIE1haW4gZmxleCBwcm9wZXJ0aWVzICovXG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmRlY2tDb250ZW50XG57XG4gICAgLyogR2VuZXJhbCBwcm9wZXJ0aWVzICovXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAvKiBGbGV4IHByb3BlcnRpZXMgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY2FyZExpc3RCb3hcbntcbiAgICAvKiBHZW5lcmFsIHByb3BlcnRpZXMgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQzLCAyNTUsIDI1NSk7XG5cbiAgICAvKiBQYXJlbnQgZmxleCBwcm9wZXJ0aWVzICovXG4gICAgZmxleDogMTtcbn1cblxuLmNhcmREaXNwbGF5XG57XG4gICAgLyogR2VuZXJhbCBwcm9wZXJ0aWVzICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi13aWR0aDogNTAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MywgMjU1LCAyNTUpO1xufVxuXG4ubm9ybWFsQ2FyZERpc3BsYXlCb3gsIC5lZGl0Q2FyZERpc3BsYXlCb3hcbntcbiAgICAvKiBHZW5lcmFsIHByb3BlcnRpZXMgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjUsIDEzOSwgMTkyKTtcbn1cblxuLm5vcm1DYXJkSGVhZGVyLCAuZWRpdENhcmRIZWFkZXJcbntcbiAgICAvKiBHZW5lcmFsIHByb3BlcnRpZXMgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZ2FwOiAxMHB4O1xuICAgIHBhZGRpbmc6IDJweDtcbn1cblxuLmVkaXRDYXJkQnV0dG9uXG57XG4gICAgLyogR2VuZXJhbCBwcm9wZXJ0aWVzICovXG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNywgMTE3LCAyNTUpO1xufVxuXG4uYXBwbHlFZGl0QnV0dG9uXG57XG4gICAgLyogR2VuZXJhbCBwcm9wZXJ0aWVzICovXG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNywgMjU1LCAxNDApO1xufVxuXG4uY2FuY2VsRWRpdEJ1dHRvblxue1xuICAgIC8qIEdlbmVyYWwgcHJvcGVydGllcyAqL1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDExNywgMTE3KTtcbn1cblxuLmVkaXRDYXJkRm9ybVxue1xuICAgIC8qIEdlbmVyYWwgcHJvcGVydGllcyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuXG4vKiBTVVBQT1JUIENTUyAqL1xuLmhpZGRlblxue1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksVUFBVTtJQUNWLFNBQVM7O0lBRVQsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixzQkFBc0I7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LFdBQVc7SUFDWCxvQ0FBb0M7QUFDeEM7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxvQ0FBb0M7QUFDeEM7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxvQ0FBb0M7QUFDeEM7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7OztBQUdBLGdCQUFnQjtBQUNoQjs7SUFFSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIipcXG57XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG5cXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiN3cmFwcGVyXFxue1xcbiAgICAvKiBHZW5lcmFsIHByb3BlcnRpZXMgKi9cXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFxuICAgIC8qIEdyaWQgcHJvcGVydGllcyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IGF1dG8gMjAwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCBhdXRvO1xcbn1cXG5cXG4ubG9nb0JveFxcbntcXG4gICAgLyogR2VuZXJhbCBwcm9wZXJ0aWVzICovXFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuXFxuICAgIC8qIFBhcmVudCBncmlkIHByb3BlcnRpZXMgKi9cXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLnNlYXJjaEJveFxcbntcXG4gICAgLyogR2VuZXJhbCBwcm9wZXJ0aWVzICovXFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuXFxuICAgIC8qIFBhcmVudCBncmlkIHByb3BlcnRpZXMgKi9cXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuLmFjY291bnRCb3hcXG57XFxuICAgIC8qIEdlbmVyYWwgcHJvcGVydGllcyAqL1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcblxcbiAgICAvKiBQYXJlbnQgZ3JpZCBwcm9wZXJ0aWVzICovXFxuICAgIGdyaWQtY29sdW1uOiAzLy0xO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG4ucHJvamVjdHNCb3hcXG57XFxuICAgIC8qIEdlbmVyYWwgcHJvcGVydGllcyAqL1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcblxcbiAgICAvKiBQYXJlbnQgZ3JpZCBwcm9wZXJ0aWVzICovXFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAyLy0xO1xcblxcbiAgICAvKiBNYWluIEZsZXggcHJvcGVydGllcyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdHNIZWFkZXJcXG57XFxuICAgIC8qIEdlbmVyYWwgcHJvcGVydGllcyAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgLyogRmxleCBwcm9wZXJ0aWVzICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wcm9qZWN0c0hlYWRlckljb25cXG57XFxuICAgIC8qIFRleHQgcHJvcGVydGllcyAqL1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgLyogR2VuZXJhbCBwcm9wZXJ0aWVzICovXFxuICAgIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG4ucHJvamVjdHNIZWFkZXJUZXh0XFxue1xcbiAgICAvKiBUZXh0IHByb3BlcnRpZXMgKi9cXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4ucHJvamVjdHNDcmVhdGVCb3hcXG57XFxuICAgIC8qIEdlbmVyYWwgcHJvcGVydGllcyAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgLyogRmxleCBwcm9wZXJ0aWVzICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jcmVhdGVQcm9qZWN0QnV0dG9uXFxue1xcbiAgICAvKiBHZW5lcmFsIHByb3BlcnRpZXMgKi9cXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICAvKiBUZXh0IHByb3BlcnRpZXMgKi9cXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIC8qIEJvcmRlciBwcm9wZXJ0aWVzICovXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuICAgIC8qIE1haW4gZmxleCBwcm9wZXJ0aWVzICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wcm9qZWN0c0xpc3RCb3hcXG57XFxuICAgIC8qIEdlbmVyYWwgcHJvcGVydGllcyAqL1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQzLCAyNTUsIDI1NSk7XFxuXFxuICAgIC8qIEZsZXggcHJvcGVydGllcyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5kZWNrQm94XFxue1xcbiAgICAvKiBHZW5lcmFsIHByb3BlcnRpZXMgKi9cXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogYXV0bztcXG5cXG4gICAgLyogUGFyZW50IGdyaWQgcHJvcGVydGllcyAqL1xcbiAgICBncmlkLWNvbHVtbjogMi8tMTtcXG4gICAgZ3JpZC1yb3c6IDIvLTE7XFxuXFxuICAgIC8qIE1haW4gZmxleCBwcm9wZXJ0aWVzICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5kZWNrSGVhZGVyXFxue1xcbiAgICAvKiBHZW5lcmFsIHByb3BlcnRpZXMgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIC8qIE1haW4gZmxleCBwcm9wZXJ0aWVzICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kZWNrSGVhZGVySWNvblxcbntcXG4gICAgLyogVGV4dCBwcm9wZXJ0aWVzICovXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLmRlY2tIZWFkZXJUZXh0XFxue1xcbiAgICAvKiBUZXh0IHByb3BlcnRpZXMgKi9cXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4uZGVja0J1dHRvbnNcXG57XFxuICAgIC8qIEdlbmVyYWwgcHJvcGVydGllcyAqL1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uY3JlYXRlQ2FyZEJ1dHRvblxcbntcXG4gICAgLyogR2VuZXJhbCBwcm9wZXJ0aWVzICovXFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgLyogVGV4dCBwcm9wZXJ0aWVzICovXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICAvKiBCb3JkZXIgcHJvcGVydGllcyAqL1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcbiAgICAvKiBNYWluIGZsZXggcHJvcGVydGllcyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZGVja0NvbnRlbnRcXG57XFxuICAgIC8qIEdlbmVyYWwgcHJvcGVydGllcyAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIC8qIEZsZXggcHJvcGVydGllcyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY2FyZExpc3RCb3hcXG57XFxuICAgIC8qIEdlbmVyYWwgcHJvcGVydGllcyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQzLCAyNTUsIDI1NSk7XFxuXFxuICAgIC8qIFBhcmVudCBmbGV4IHByb3BlcnRpZXMgKi9cXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmNhcmREaXNwbGF5XFxue1xcbiAgICAvKiBHZW5lcmFsIHByb3BlcnRpZXMgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLXdpZHRoOiA1MCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDMsIDI1NSwgMjU1KTtcXG59XFxuXFxuLm5vcm1hbENhcmREaXNwbGF5Qm94LCAuZWRpdENhcmREaXNwbGF5Qm94XFxue1xcbiAgICAvKiBHZW5lcmFsIHByb3BlcnRpZXMgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY1LCAxMzksIDE5Mik7XFxufVxcblxcbi5ub3JtQ2FyZEhlYWRlciwgLmVkaXRDYXJkSGVhZGVyXFxue1xcbiAgICAvKiBHZW5lcmFsIHByb3BlcnRpZXMgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi5lZGl0Q2FyZEJ1dHRvblxcbntcXG4gICAgLyogR2VuZXJhbCBwcm9wZXJ0aWVzICovXFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE3LCAxMTcsIDI1NSk7XFxufVxcblxcbi5hcHBseUVkaXRCdXR0b25cXG57XFxuICAgIC8qIEdlbmVyYWwgcHJvcGVydGllcyAqL1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNywgMjU1LCAxNDApO1xcbn1cXG5cXG4uY2FuY2VsRWRpdEJ1dHRvblxcbntcXG4gICAgLyogR2VuZXJhbCBwcm9wZXJ0aWVzICovXFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMTcsIDExNyk7XFxufVxcblxcbi5lZGl0Q2FyZEZvcm1cXG57XFxuICAgIC8qIEdlbmVyYWwgcHJvcGVydGllcyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5cXG4vKiBTVVBQT1JUIENTUyAqL1xcbi5oaWRkZW5cXG57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBKUyBpbXBvcnRzXG5pbXBvcnQgcHVic3ViIGZyb20gXCIuL3B1YnN1YlwiO1xuXG4vLyBUaGlzIHNjcmlwdCBqb2IgaXMgdG86XG4vLyBDcmVhdGUgYSBwcm9qZWN0LCBzdG9yZSBwcm9qZWN0IGluIGEgYXJyYXkvZGF0YSBzdHJ1Y3R1cmVcbi8vIFRoZW4gXCJQYXNzIHRvIHJlbmRlclwiXG5cbmNvbnN0IHByb2plY3RMaXN0ID0gW107XG5sZXQgY3VycmVudFByb2plY3QgPSBuZXcgUHJvamVjdCgpOyAvLyBUaGlzIHZhcmlhYmxlIHNhdmVzIHRoZSBjdXJyZW50IHByb2plY3QgaWQjIGZvciBsb29rdXBcbmxldCBzZWxlY3RlZENhcmQ7IC8vS2VlcHMgdHJhY2sgb2Ygb3VyIGN1cnJlbnQgc2VsZWN0ZWQgY2FyZC5cblxuLy8gUHVic3ViIHN1YnNjcmlwdGlvbnNcbnB1YnN1Yi5zdWJzY3JpYmUoXCJhZGRQcm9qZWN0XCIsIGFkZFByb2plY3QpO1xucHVic3ViLnN1YnNjcmliZShcImFkZENhcmRcIiwgYWRkQ2FyZCk7XG5wdWJzdWIuc3Vic2NyaWJlKFwib3BlblByb2plY3RcIiwgb3BlblByb2plY3QpO1xucHVic3ViLnN1YnNjcmliZShcInZpZXdDYXJkXCIsIHZpZXdDYXJkKTtcbnB1YnN1Yi5zdWJzY3JpYmUoXCJlZGl0Q2FyZFwiLCBlZGl0U2VsZWN0ZWRDYXJkKTtcbnB1YnN1Yi5zdWJzY3JpYmUoXCJhcHBseUVkaXRcIixhcHBseUNhcmRFZGl0KTtcbnB1YnN1Yi5zdWJzY3JpYmUoXCJhcHBseUNoZWNrbGlzdENoYW5nZVwiLCBhcHBseUNoZWNrbGlzdENoYW5nZSk7XG5wdWJzdWIuc3Vic2NyaWJlKFwiYWRkQ2hlY2tib3hcIiwgYWRkQ2hlY2tib3gpO1xuXG5cbi8vIFRoaXMgZnVuY3Rpb24gaGFuZGxlcyBpbml0aWxpemF0aW9uIGZvciB0aGlzIHNjcmlwdFxuZnVuY3Rpb24gaW5pdGlsaXphdGlvbigpXG57XG4gICAgLy8gV2Ugd2FudCB0byBtYWtlIHN1cmUgdG8gZ2V0IHRoZSBjb3JyZWN0IGxvY2Fsc3RvcmFnZSBkYXRhLlxuICAgIC8vIFRoZW4gd2UgZ28gYWhlYWQgYW5kIGxvYWQgaXQgdXAgaWYgdGhlcmUgaXMgcHJvamVjdExpc3QgZGF0YSB0byBsb2FkLlxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdExpc3RcIikpXG4gICAge1xuICAgICAgICAvLyBBZGQgZGF0YSB0byB0aGUgcHJvamVjdExpc3RcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdExpc3RcIikpO1xuICAgICAgICBkYXRhLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xuXG4gICAgICAgIC8vIFNldCBjdXJyZW50IHByb2plY3QgZGVmYXVsdCB0byBwcm9qZWN0IDFcbiAgICAgICAgLy8gRWxzZSBjcmVhdGUgYSBkZWZhdWx0IHByb2plY3QgYW5kIHNldCBjdXJyZW50IHRvIHRoYXRcbiAgICAgICAgaWYocHJvamVjdExpc3RbMF0gIT09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUHJvamVjdExpc3QgZm91bmQ6IFNldHRpbmcgZGVmYXVsdCBwcm9qZWN0XCIpO1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TGlzdFswXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdvIGFoZWFkIGFuZCBkbyBhIHJlbmRlclByb2plY3RzIGNhbGxcbiAgICAgICAgcHVic3ViLnB1Ymxpc2goXCJyZW5kZXJQcm9qZWN0c1wiLCBwcm9qZWN0TGlzdCk7XG4gICAgfVxuICAgIGVsc2UgLy8gV2UgZ28gYWhlYWQgYW5kIGJhY2sgYSBuZXcgcHJvamVjdExpc3QgaW4gbG9jYWxTdG9yYWdlIGFuZCBzZXQgdGhlIGN1cnJlbnRQcm9qZWN0IHRvIGRlZmF1bHQuXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlByb2plY3RMaXN0IG5vdCBmb3VuZDogQ3JlYXRpbmcgZGVmYXVsdCBwcm9qZWN0XCIpO1xuICAgICAgICBhZGRQcm9qZWN0KFwiTmV3IFByb2plY3RcIik7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdExpc3RbMF07XG4gICAgfVxufVxuXG5cbi8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBzdWJzY3JpYmVkIHRvIHRoZSBcImFkZFByb2plY3RcIiBldmVudCBjYWxsXG4vLyBUaGlzIHdpbGwgaGFuZGxlIGFkZGluZyB0aGUgbmV3IHByb2plY3QgdG8gdGhlIHByb2plY3RMaXN0LlxuLy8gVGhlIHByb2plY3Qgd2lsbCBjcmVhdGUgYSBkZWZhdWx0IFwiTmV3IFByb2plY3RcIi5cbi8vIFRoZW4gdGhpcyB3aWxsIGNhbGwgcmVuZGVyIHByb2plY3RzIGZ1bmN0aW9uXG5mdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3ROYW1lKVxue1xuICAgIC8vIFdhbnQgdG8gbWFrZSBzdXJlIHRoYXQgYSBzdHJpbmcgd2FzIHBhc3NlZCB0aHJvdWdoXG4gICAgLy8gdGhlIHB1YnN1Yi5cbiAgICBpZih0eXBlb2YgcHJvamVjdE5hbWUgPT09ICdzdHJpbmcnKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJQcm9qZWN0TWFuYWdlci5qcyAnQWN0aW9uJzogQ3JlYXRpbmcgcHJvamVjdC4uLi5cIik7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgbmV3IGlkIGZvciBwcm9qZWN0XG4gICAgICAgIGxldCBuZXdJRCA9IGdlbmVyYXRlSUQoKTtcblxuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcHJvamVjdCBvYmplY3RcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuZXdJRCwgcHJvamVjdE5hbWUpO1xuXG4gICAgICAgIC8vIFdlIHRoZW4gcGFzcyB0aGUgbmV3UHJvamVjdCB0byB0aGUgcHJvamVjdExpc3QuXG4gICAgICAgIHByb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdCk7XG5cbiAgICAgICAgLy8gV2UgbWFrZSBzdXJlIHRvIGNvbnZlcnQgdGhlIG5ldyB1cGRhdGVkIHByb2plY3RMaXN0IHRvXG4gICAgICAgIC8vIG91ciBsb2NhbHN0b3JhZ2UuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdExpc3RcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUjogUHJvamVjdCBuYW1lIGlzIG5vdCBvZiB0eXBlICdzdHJpbmcnXCIpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KTtcblxuICAgIC8vIEdvIGFoZWFkIGFuZCBkbyBhIHJlbmRlclByb2plY3RzIGNhbGxcbiAgICBwdWJzdWIucHVibGlzaChcInJlbmRlclByb2plY3RzXCIsIHByb2plY3RMaXN0KTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGhhbmRsZSBhZGRpbmcgYSBjYXJkIHRvIHRoZSBjdXJyZW50IHNlbGVjdGVkIHByb2plY3QuXG5mdW5jdGlvbiBhZGRDYXJkKGNhcmROYW1lKVxue1xuICAgIGNvbnNvbGUubG9nKGBDYXJkIGFkZGVkIHRvICR7Y3VycmVudFByb2plY3QubmFtZX0gd2l0aCBpZCMke2N1cnJlbnRQcm9qZWN0LmlkfSBhbmQgY2FyZCBsaXN0IG9mICR7Y3VycmVudFByb2plY3QuY2FyZExpc3R9YCk7XG4gICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QuY2FyZExpc3QpO1xuXG4gICAgLy8gR2VuZXJhdGUgYSBuZXcgaWQgZm9yIHRoZSBuZXcgY2FyZFxuICAgIGxldCBuZXdJRCA9IGdlbmVyYXRlSUQoKTtcbiAgICBcbiAgICAvLyBDcmVhdGUgYSBuZXcgY2FyZCBhbmQgYWRkIGl0IHRvIHRoZSBjdXJyZW50UHJvamVjdCBjYXJkTGlzdFxuICAgIGxldCBuZXdDYXJkID0gbmV3IENhcmQobmV3SUQsIGNhcmROYW1lLCBcIk4vQVwiLCBcIjAvMC8wMFwiLCBcIkxvd1wiKTtcbiAgICBjdXJyZW50UHJvamVjdC5jYXJkTGlzdC5wdXNoKG5ld0NhcmQpO1xuXG4gICAgLy8gVXBkYXRlIHByb2plY3RMaXN0IHdpdGggdGhlIG5ldyBjaGFuZ2VzIHRvIHRoZSBjdXJyZW50IHByb2plY3RcbiAgICAvLyBhbmQgc2F2ZSBpdCB0byBsb2NhbCBzdG9yYWdlXG4gICAgdXBkYXRlUHJvamVjdExpc3QoKTtcblxuICAgIC8vIFRoZW4gd2UgZ28gYWhlYWQgYW5kIGNhbGwgcmVuZGVyQ2FyZHNcbiAgICBwdWJzdWIucHVibGlzaChcInJlbmRlckNhcmRzXCIsIGN1cnJlbnRQcm9qZWN0LmNhcmRMaXN0KTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGhhbmRsZSBhZGRpbmcgYSBuZXcgY2hlY2tib3ggdG8gdGhlIHNlbGVjdGVkIGNhcmQgY2hlY2tsaXN0XG5mdW5jdGlvbiBhZGRDaGVja2JveCgpXG57XG4gICAgLy8gY29uc29sZS5sb2coXCJBZGRpbmcgbmV3IGNoZWNrYm94IHRvIGNoZWNrbGlzdFwiKTtcblxuICAgIC8vIC8vIEFkZCBhIG5ldyBjaGVja2JveCBpdGVtIHRvIHRoZSBzZWxlY3RDYXJkIGNoZWNrTGlzdFxuICAgIC8vIHNlbGVjdGVkQ2FyZC5jaGVja0xpc3QucHVzaCh7c3RhdGU6IDAsIHRleHQ6IFwiVGVzdFwifSk7XG5cbiAgICAvLyAvLyBVcGRhdGUgdGhlIGN1cnJlbnRQcm9qZWN0IGNhcmRMaXN0IHdpdGggdGhlIHNlbGVjdENhcmQgY2hhbmdlc1xuICAgIC8vIGxldCBpbmRleCA9IGN1cnJlbnRQcm9qZWN0LmNhcmRMaXN0LmluZGV4T2YoY3VycmVudFByb2plY3QuY2FyZExpc3QuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC5pZCA9PT0gc2VsZWN0ZWRDYXJkLmlkID8gZWxlbWVudCA6IG51bGwpKTtcbiAgICAvLyBjdXJyZW50UHJvamVjdC5jYXJkTGlzdC5zcGxpY2UoaW5kZXgsIDEsIHNlbGVjdGVkQ2FyZCk7XG5cbiAgICAvLyAvLyBVcGRhdGUgcHJvamVjdGxpc3Qgd2l0aCBuZXcgY2hhbmdlc1xuICAgIC8vIHVwZGF0ZVByb2plY3RMaXN0KCk7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaGFuZGxlcyB3aGF0IGhhcHBlbnMgd2hlbiB0aGUgdXNlciBvcGVucyBhIHByb2plY3QgXG4vLyAoY2xpY2tzIG9uIHRoZSBwcm9qZWN0IGJ1dHRvbilcbmZ1bmN0aW9uIG9wZW5Qcm9qZWN0KHByb2plY3RJRClcbntcbiAgICBjb25zb2xlLmxvZyhgT3BlbmluZyBwcm9qZWN0IGlkIyAke3Byb2plY3RJRH1gKTtcblxuICAgIC8vIFdlIG1ha2Ugc3VyZSB0byBzZXQgdGhlIGN1cnJlblByb2plY3QgdG8gdGhlIHByb2plY3Qgd2Ugb3BlbmVkLlxuICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3RJRCk7XG4gICAgY29uc29sZS5sb2coXCJDdXJyZW50IFByb2plY3Q6XCIgKyBjdXJyZW50UHJvamVjdCk7XG5cbiAgICAvLyBXZSBjYWxsIHJlbmRlckNhcmRzIHNvIHdlIGNhbiBkaXNwbGF5IHRoZSBjdXJyZW50UHJvamVjdCdzIGNhcmRMaXN0XG4gICAgcHVic3ViLnB1Ymxpc2goXCJyZW5kZXJDYXJkc1wiLCBjdXJyZW50UHJvamVjdC5jYXJkTGlzdCk7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaGFuZGxlcyB3aGF0IGhhcHBlbnMgd2hlbiB0aGUgdXNlciBjbGlja3Ncbi8vIG9uIGEgY2FyZCBzbyB0aGV5IGNhbiB2aWV3IGl0LlxuZnVuY3Rpb24gdmlld0NhcmQoY2FyZClcbntcbiAgICAvLyBXZSBjaGVjayB0byBzZWUgaWYgYSBuZXcgY2FyZCB3YXMgcGFzc2VkLiBJZiBub3QgdGhlbiB3ZSBtdXN0IHdhbnRcbiAgICAvLyB0byB2aWV3IHRoZSBleGlzdGluZyBzZWxlY3RlZENhcmQuXG4gICAgaWYoY2FyZCAhPT0gbnVsbClcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBWaWV3aW5nIGNhcmQ6IFwiJHtjYXJkLnRpdGxlfVwiYCk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCB3ZSBrZWVwIHRyYWNrIG9mIHdoYXQgY2FyZCBpcyBjdXJyZW50bHkgc2VsZWN0ZWQuXG4gICAgICAgIHNlbGVjdGVkQ2FyZCA9IGNhcmQ7XG4gICAgfVxuXG4gICAgcHVic3ViLnB1Ymxpc2goXCJyZW5kZXJDYXJkRGlzcGxheVwiLCBzZWxlY3RlZENhcmQpO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGhhbmRsZXMgZmluZGluZyBhIHByb2plY3QgZnJvbSB0aGUgcHJvamVjdExpc3QgYmFzZWQgb24gcHJvamVjdElELlxuLy8gTWFrZSBzdXJlIHRvIGNvbnZlcnQgdGhlIGRhdGEgdG8gYSBwcm9qZWN0IG9iamVjdC5cbmZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3RJRClcbntcbiAgICBjb25zb2xlLmxvZyhgRmluZGluZyBwcm9qZWN0OiAke3Byb2plY3RJRH0gaW4gdGhlIHByb2plY3RMaXN0LmApO1xuICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdExpc3QuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC5pZCA9PT0gcHJvamVjdElEID8gZWxlbWVudCA6IG51bGwpO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBoYW5kbGVzIHdoYXQgaGFwcGVucyB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIFxuLy8gZWRpdCB0aGUgc2VsZWN0ZWQgY2FyZC5cbmZ1bmN0aW9uIGVkaXRTZWxlY3RlZENhcmQoKVxue1xuICAgIGlmKHNlbGVjdGVkQ2FyZClcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBFZGl0aW5nIHRoZSBzZWxlY3RlZCBjYXJkICR7c2VsZWN0ZWRDYXJkLnRpdGxlfWApO1xuICAgIFxuICAgICAgICAvLyBSZW5kZXIgdGhlIGVkaXQgZGlzcGxheVxuICAgICAgICBwdWJzdWIucHVibGlzaChcInJlbmRlckVkaXRDYXJkRGlzcGxheVwiLCBzZWxlY3RlZENhcmQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdExpc3QoKVxue1xuICAgIC8vIEFwcGx5IGNoYW5nZXMgdG8gdGhlIGN1cnJlbnRQcm9qZWN0IHRvIHRoZSBwcm9qZWN0TGlzdFxuICAgIGxldCBpbmRleCA9IHByb2plY3RMaXN0LmluZGV4T2YocHJvamVjdExpc3QuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC5pZCA9PT0gY3VycmVudFByb2plY3QuaWQgPyBlbGVtZW50IDogbnVsbCkpO1xuICAgIHByb2plY3RMaXN0LnNwbGljZShpbmRleCwgMSwgY3VycmVudFByb2plY3QpO1xuXG4gICAgLy8gU2F2ZS91cGxvYWQgY2hhbmdlcyB0byB0aGUgbG9jYWxTdG9yYWdlLlxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdExpc3RcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBoYW5kbGVzIHRoZSBjaGFuZ2VzIHRvIHRoZSBzZWxlY3RlZCBjYXJkXG4vLyBhbmQgdXBkYXRlcyBpdCB0aGVuIHNhdmVzIGl0IHRvIHRoZSBsb2NhbHN0b3JhZ2UuXG5mdW5jdGlvbiBhcHBseUNhcmRFZGl0KGRhdGEpXG57XG4gICAgY29uc29sZS5sb2coXCJBcHBseWluZyBlZGl0IGNoYW5nZXMgdG8gdGhlIHNlbGVjdGVkIGNhcmRcIik7XG4gICAgY29uc29sZS5sb2coYE5ldyBjYXJkIHRpdGxlOiAke2RhdGEuZ2V0KFwiZWRpdENhcmRUaXRsZVwiKX1gKTtcblxuICAgIC8vIFdlIG1ha2Ugc3VyZSB0byBhcHBseSB0aGUgbmV3IGNoYW5nZXMgdG8gdGhlIHNlbGVjdGVkQ2FyZFxuICAgIC8vIEFwcGx5IENhcmQgdGl0bGUgY2hhbmdlc1xuICAgIHNlbGVjdGVkQ2FyZC50aXRsZSA9IGRhdGEuZ2V0KFwiZWRpdENhcmRUaXRsZVwiKTtcbiAgICAvLyBBcHBseSBDYXJkIGRlc2NyaXB0aW9uIGNoYW5nZXNcbiAgICBzZWxlY3RlZENhcmQuZGVzYyA9IGRhdGEuZ2V0KFwiZWRpdENhcmREZXNjXCIpO1xuICAgIC8vIEFwcGx5IENhcmQgZHVlIGRhdGUgY2hhbmdlc1xuICAgIHNlbGVjdGVkQ2FyZC5kdWUgPSBkYXRhLmdldChcImVkaXRDYXJkRHVlXCIpO1xuICAgIC8vIEFwcGx5IENhcmQgcHJpb3JpdHkgY2hhbmdlc1xuICAgIHNlbGVjdGVkQ2FyZC5wcmlvcml0eSA9IGRhdGEuZ2V0KFwiZWRpdENhcmRQcmlvcml0eVwiKTtcbiAgICAvLyBBcHBseSBDYXJkIGNoZWNrbGlzdCBjaGFuZ2VzXG4gICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgZGF0YSlcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgIH1cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgTnVtYmVyKGRhdGEuZ2V0KFwiY2hlY2tsaXN0Q291bnRcIikpOyBpKyspXG4gICAge1xuICAgICAgICBpZihzZWxlY3RlZENhcmQuY2hlY2tMaXN0W2ldKVxuICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RlZENhcmQuY2hlY2tMaXN0W2ldLnRleHQgPSBkYXRhLmdldChgZWRpdENoZWNrYm94JHtpfWApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0ZWRDYXJkLmNoZWNrTGlzdC5wdXNoKHtzdGF0ZTogMCwgdGV4dDogZGF0YS5nZXQoYGVkaXRDaGVja2JveCR7aX1gKX0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyBBcHBseSBjaGFuZ2VzIHRvIHRoZSBzZWxlY3RlZENhcmQgYW5kIHVwZGF0ZSB0aGUgY3VycmVudFByb2plY3QgY2FyZExpc3RcbiAgICBsZXQgaW5kZXggPSBjdXJyZW50UHJvamVjdC5jYXJkTGlzdC5pbmRleE9mKGN1cnJlbnRQcm9qZWN0LmNhcmRMaXN0LmZpbmQoKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgPT09IHNlbGVjdGVkQ2FyZC5pZCA/IGVsZW1lbnQgOiBudWxsKSk7XG4gICAgY3VycmVudFByb2plY3QuY2FyZExpc3Quc3BsaWNlKGluZGV4LCAxLCBzZWxlY3RlZENhcmQpO1xuXG4gICAgLy8gQXBwbHkgY2hhbmdlcyB0byB0aGUgcHJvamVjdExpc3QgYmVjYXVzZSB3ZSBtYWRlIGNoYW5nZXMgdG8gdGhlIGN1cnJlbnQgcHJvamVjdFxuICAgIHVwZGF0ZVByb2plY3RMaXN0KCk7XG5cbiAgICAvLyBVcGRhdGUgdGhlIHJlbmRlciBvZiB0aGUgY3VycmVudCBwcm9qZWN0IGNhcmQgbGlzdFxuICAgIC8vIFVwZGF0ZSB0aGUgY2FyZCBkaXNwbGF5IHdpdGggdGhlIG5ldyB1cGRhdGVkIGNhcmQgZGF0YS5cbiAgICBwdWJzdWIucHVibGlzaChcInJlbmRlckNhcmRzXCIsIGN1cnJlbnRQcm9qZWN0LmNhcmRMaXN0KTtcbiAgICBwdWJzdWIucHVibGlzaChcInJlbmRlckNhcmREaXNwbGF5XCIsIHNlbGVjdGVkQ2FyZCk7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaGFuZGxlcyB0aGUgY2hhbmdlcyBtYWRlIHRvIHRoZSBjaGVja2xpc3Qgb2YgYSBjYXJkLlxuLy8gVGhpcyBtYWtlcyBzdXJlIHRoYXQgdXBkYXRlIHRoZSBjb3JyZWN0IHN0YXRlIGZvciBlYWNoIGNoZWNrbGlzdCBlbGVtZW50IHRoYXQgY2hhbmdlZC5cbmZ1bmN0aW9uIGFwcGx5Q2hlY2tsaXN0Q2hhbmdlKGRhdGEpXG57XG4gICAgY29uc29sZS5sb2coYEFwcGx5aW5nIGNoZWNrbGlzdCBjaGFuZ2VzIHRvIGNhcmQgJHtkYXRhLmlkfWApO1xuICAgIC8vIEFwcGx5IGNoYW5nZXMgdG8gdGhlIHNlbGVjdGVkQ2FyZCBhbmQgdXBkYXRlIHRoZSBjdXJyZW50UHJvamVjdCBjYXJkTGlzdFxuICAgIGxldCBpbmRleCA9IGN1cnJlbnRQcm9qZWN0LmNhcmRMaXN0LmluZGV4T2YoY3VycmVudFByb2plY3QuY2FyZExpc3QuZmluZCgoZWxlbWVudCkgPT4gZWxlbWVudC5pZCA9PT0gc2VsZWN0ZWRDYXJkLmlkID8gZWxlbWVudCA6IG51bGwpKTtcbiAgICBjdXJyZW50UHJvamVjdC5jYXJkTGlzdC5zcGxpY2UoaW5kZXgsIDEsIHNlbGVjdGVkQ2FyZCk7XG5cbiAgICAvLyBBcHBseSBjaGFuZ2VzIHRvIHRoZSBwcm9qZWN0TGlzdCBiZWNhdXNlIHdlIG1hZGUgY2hhbmdlcyB0byB0aGUgY3VycmVudCBwcm9qZWN0XG4gICAgdXBkYXRlUHJvamVjdExpc3QoKTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBoYW5kbGVzIGRlbGV0aW5nIGEgcHJvamVjdCBmcm9tIHRoZSBwcm9qZWN0TGlzdFxuLy8gUHVic3ViIHN1YmNyaXB0aW9uIHdoZW4gdGhlIGRlbGV0ZSBwcm9qZWN0IGJ1dHRvbiBpcyBjbGlja2VkXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KClcbntcblxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGhhbmRsZXMgZ2VuZXJhdGluZyBhIGJhc2ljIGlkIGZvciBhbnkgb2JqZWN0IHRoYXQgbmVlZHMgaXRcbmZ1bmN0aW9uIGdlbmVyYXRlSUQoKVxue1xuICAgIC8vIEdlbmVyYXRpbmcgYSBxdWljayB1bmlxdWUgSUQgdXNpbmcgRGF0ZS5ub3coKSArIHNvbWUgcmFuZG9tLW5lc3MuIFRoaXMgaXMgYSBiYW5kYWlkIHNvbHV0aW9uIHRvIGdldCBldmVyeXRoaW5nIHdvcmtpbmcuXG4gICAgbGV0IGlkTnVtYmVyID0gKE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIpICsgRGF0ZS5ub3coKSkudG9TdHJpbmcoKTtcbiAgICByZXR1cm4gaWROdW1iZXI7XG59XG5cbi8vIFF1aWNrIGZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIHByb2plY3Qgb2JqZWN0cyB3aXRoIGRhdGEgcHJvcGVydGllc1xuLy8gQ3VycmVudGx5IGhhdmUgcHJvamVjdCBuYW1lIGFuZCBhIHVucWl1ZSBJRCB0aGF0IGlzIGdpdmVuIHRvIGVhY2ggcHJvamVjdC5cbi8vIFN0YXJ0cyB3aXRoIGEgZW1wdHkgY2FyZExpc3QgYXJyYXkgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIGNhcmRzIGFkZGVkIHRvIHRoZSBwcm9qZWN0LlxuZnVuY3Rpb24gUHJvamVjdChpZCwgbmFtZSwgY2FyZExpc3QpXG57XG4gICAgY2FyZExpc3QgPSBbXTtcbiAgICByZXR1cm4geyBpZDogaWQsIG5hbWU6IG5hbWUsIGNhcmRMaXN0OiBjYXJkTGlzdH1cbn1cblxuLy8gUXVpY2sgZmFjdG9yeSBmdW5jdGlvbiB0aGF0IHdpbGwgY3JlYXRlIGNhcmQgb2JqZWN0cyB0byBiZSBzdG9yZWQgaW4gcHJvamVjdHNcbi8vIGFuZCBsb2NhbFN0b3JhZ2UuXG5mdW5jdGlvbiBDYXJkKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZSwgcHJpb3JpdHkpXG57XG4gICAgLy9UaGlzIGFycmF5IHdpbGwgc3RvcmUgYW4gb2JqZWN0IHRoYXQgd2lsbCByZXByZXNlbnQgYSBjaGVja2JveCBwcm9wZXJ0aWVzIGxpa2VcbiAgICAvLyBoYXZlIGNoZWNrIHN0YXRlIGFuZCB0aGUgdGV4dCBkZXNjcmlwdGlvbi5cbiAgICBsZXQgY2hlY2tMaXN0ID0gW107IC8vIGV4OiB7c3RhdGU6IDAsIHRleHQ6IFwiQ2xlYW4geW91ciByb29tXCJ9XG4gICAgcmV0dXJuIHsgaWQ6IGlkLCB0aXRsZTogdGl0bGUsIGRlc2M6IGRlc2NyaXB0aW9uLCBkdWU6IGR1ZSwgcHJpb3JpdHk6IHByaW9yaXR5LCBjaGVja0xpc3Q6IGNoZWNrTGlzdH1cbn1cblxuXG4vLyBXZSBjYWxsIGluaXRpbGl6YXRpb24gd2hlbiB0aGlzIHNjcmlwdCBpcyBsb2FkZWQgYXQgc3RhcnQuXG5pbml0aWxpemF0aW9uKCk7IiwiLy8gQ3JlYXRlIGEgY29uc3QgdmFyaWFibGUgdGhhdCB1c2VzIHRoZSBtb2R1bGUgcGF0dGVyblxuY29uc3QgcHVic3ViID0gKGZ1bmN0aW9uKClcbntcbiAgICBjb25zdCBjYWxscyA9IHt9O1xuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBoYW5kbGVzIHN1YnNjcmliaW5nIGFjdGlvbnMgdG8gYSBjYWxsXG4gICAgLy8gYWN0aW9ucyBhcmUgZnVuY3Rpb25zIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgY2FsbFxuICAgIC8vIGlzIHB1Ymxpc2hlZC5cbiAgICBmdW5jdGlvbiBzdWJzY3JpYmUoY2FsbCwgYWN0aW9uKVxuICAgIHtcbiAgICAgICAgLy8gSWYgY2FsbCBleGlzdHNcbiAgICAgICAgaWYodGhpcy5jYWxsc1tjYWxsXSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jYWxsc1tjYWxsXS5wdXNoKGFjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSAvLyBHbyBhaGVhZCBhbmQgY3JlYXRlIGEgbmV3IGNhbGwgcHJvcGVydHkgd2l0aCBhbiBhcnJheSB0eXBlLlxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNhbGxzW2NhbGxdID0gW107XG4gICAgICAgICAgICB0aGlzLmNhbGxzW2NhbGxdLnB1c2goYWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBUaGlzIG1ldGhvZCBoYW5kbGVzIGNhbGxpbmcgYWxsIHRoZSBhY3Rpb25zIHRoYXQgYXJlIGNvbnRhaW5lZFxuICAgIC8vIGluIGEgY2FsbC5cbiAgICBmdW5jdGlvbiBwdWJsaXNoKGNhbGwsIGRhdGEpXG4gICAge1xuICAgICAgICAvLyBJZiBjYWxsIGV4aXN0c1xuICAgICAgICBpZih0aGlzLmNhbGxzW2NhbGxdKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUHVibGlzaCBDYWxsOiBcIiR7Y2FsbH1cImApO1xuICAgICAgICAgICAgdGhpcy5jYWxsc1tjYWxsXS5mb3JFYWNoKGFjdGlvbiA9PiBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24oZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIC8vIEdvIGFoZWFkIGFuZCBjcmVhdGUgYSBuZXcgY2FsbCBwcm9wZXJ0eSB3aXRoIGFuIGFycmF5IHR5cGUuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbHNbY2FsbF0gPSBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gaGFuZGxlcyB1bnN1YnNjcmliaW5nIHRoZSBhY3Rpb24gZnJvbSBhIGNhbGwuXG4gICAgLy8gTWFrZSBzdXJlIHRvIHVzZSB0aGlzIHRvIGNsZWFuIHVwIHRoZSBjYWxscyBsaXN0LlxuICAgIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGNhbGwsIGFjdGlvbilcbiAgICB7XG5cbiAgICB9XG5cbiAgICByZXR1cm57IGNhbGxzOiBjYWxscywgcHVibGlzaDogcHVibGlzaCwgc3Vic2NyaWJlOiBzdWJzY3JpYmV9O1xufSkoKTtcblxuLy8gRXhwb3J0IHRoYXQgcHVic3ViIG1vZHVsZVxuZXhwb3J0IGRlZmF1bHQgcHVic3ViOyIsIi8vIEpTIGltcG9ydHNcbmltcG9ydCBwdWJzdWIgZnJvbSAnLi9wdWJzdWIuanMnO1xuXG4vLyBUaGlzIHNjcmlwdCBqb2IgaXMgdG86XG4vLyB1cGRhdGUgYW5kIHJlbmRlciB0aGUgd2ViIGVsZW1lbnRzIG9uIHRoZSBwYWdlXG5cbi8vIERPTSByZWZlcmVuY2VzXG5jb25zdCBwcm9qZWN0TGlzdEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c0xpc3RCb3gnKTtcbmNvbnN0IGNhcmRMaXN0Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRMaXN0Qm94Jyk7XG5jb25zdCBub3JtYWxDYXJkRGlzcGxheUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3JtYWxDYXJkRGlzcGxheUJveCcpO1xuY29uc3QgZWRpdENhcmREaXNwbGF5Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRDYXJkRGlzcGxheUJveCcpO1xuY29uc3Qgbm9ybUNhcmRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3JtQ2FyZFRpdGxlJyk7XG5jb25zdCBub3JtQ2FyZERlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm9ybUNhcmREZXNjJyk7XG5jb25zdCBub3JtQ2FyZER1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3JtQ2FyZER1ZScpO1xuY29uc3Qgbm9ybUNhcmRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3JtQ2FyZFByaW9yaXR5Jyk7XG5jb25zdCBub3JtQ2FyZENoZWNrbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3JtQ2FyZENoZWNrbGlzdCcpO1xuY29uc3QgZWRpdENhcmRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0Q2FyZFRpdGxlJyk7XG5jb25zdCBlZGl0Q2FyZERlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdENhcmREZXNjJyk7XG5jb25zdCBlZGl0Q2FyZER1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0Q2FyZER1ZScpO1xuY29uc3QgZWRpdENhcmRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0Q2FyZFByaW9yaXR5Jyk7XG5jb25zdCBlZGl0Q2FyZENoZWNrbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Q2FyZENoZWNrbGlzdCcpO1xuY29uc3QgZWRpdENhcmRDaGVja2xpc3RDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2xpc3RDb3VudCcpO1xuXG4vLyBQdWJzdWIgc3Vic2NyaXB0aW9uc1xucHVic3ViLnN1YnNjcmliZShcInJlbmRlclByb2plY3RzXCIsIHJlbmRlclByb2plY3RMaXN0KTtcbnB1YnN1Yi5zdWJzY3JpYmUoXCJyZW5kZXJDYXJkc1wiLCByZW5kZXJDYXJkTGlzdCk7XG5wdWJzdWIuc3Vic2NyaWJlKFwicmVuZGVyQ2FyZERpc3BsYXlcIiwgcmVuZGVyQ2FyZERpc3BsYXkpO1xucHVic3ViLnN1YnNjcmliZShcInJlbmRlckVkaXRDYXJkRGlzcGxheVwiLCByZW5kZXJFZGl0Q2FyZERpc3BsYXkpO1xucHVic3ViLnN1YnNjcmliZShcInJlbmRlck5ld0NoZWNrYm94XCIsIHJlbmRlck5ld0NoZWNrYm94KTtcblxuXG4vLyBUaGlzIGZ1bmN0aW9uIGhhbmRsZXMgdGhlIHJlbmRlcmluZyBvZiB0aGUgcHJvamVjdGxpc3Qgb24gdGhlIHBhZ2UuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0TGlzdChwcm9qZWN0TGlzdClcbntcbiAgICBpZihBcnJheS5pc0FycmF5KHByb2plY3RMaXN0KSlcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyLmpzICdBY3Rpb24nOiBSZW5kZXJpbmcgcHJvamVjdHMuLi4uXCIpO1xuXG4gICAgICAgIC8vIENsZWFyIHRoZSBib3ggYW5kIHJlLXJlbmRlciB0aGUgd2hvbGUgbGlzdFxuICAgICAgICBwcm9qZWN0TGlzdEJveC5pbm5lckhUTUwgPSAnICc7XG5cbiAgICAgICAgLy8gV2UgbG9vcCB0aHJvdWdoIGVhY2ggcHJvamVjdCBpbiB0aGUgcHJvamVjdExpc3QgYW5kIHJlbmRlciBpdFxuICAgICAgICAvLyBhcyBhIGJ1dHRvbi5cbiAgICAgICAgcHJvamVjdExpc3QuZm9yRWFjaChwcm9qZWN0ID0+IHtcblxuICAgICAgICAgICAgLy8gRGVidWcgY29uc29sZVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDcmVhdGluZyBuZXcgYnV0dG9uIGVsZW1lbnQgZm9yIHByb2plY3RMaXN0XCIpO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcHJvamVjdCBlbGVtZW50XG4gICAgICAgICAgICBsZXQgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEJ1dHRvblwiKVxuICAgICAgICAgICAgbmV3RWxlbWVudC50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcblxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRvIGFkZCBhbiBldmVudGxpc3RlbmVyIG9uIGNsaWNrIHRoYXQgd2lsbFxuICAgICAgICAgICAgLy8gY2FsbCBhIHB1YnN1YiBwdWJsaXNoIGZvciBvcGVuaW5nIHRoZSBwcm9qZWN0LlxuICAgICAgICAgICAgbmV3RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goXCJvcGVuUHJvamVjdFwiLCBwcm9qZWN0LmlkKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBXZSBmaW5hbGx5IGFkZCB0aGUgbmV3IGVsZW1lbnQgdG8gdGhlIHByb2plY3RMaXN0LlxuICAgICAgICAgICAgcHJvamVjdExpc3RCb3guYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SOiBwcm9qZWN0TGlzdCBpcyBub3Qgb2YgdHlwZSAnQXJyYXknXCIpO1xuICAgIH1cbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBoYW5kbGVzIHRoZSByZW5kZXJpbmcgb2YgdGhlIGNhcmRMaXN0IG9uIHRoZSBwYWdlLlxuLy8gY2FyZExpc3Qgd2lsbCBiZSB0aGUgY3VycmVudCBwcm9qZWN0J3MgdG8tZG8tbGlzdCBsaXN0cyBpZiB0aGF0IG1ha2VzIHNlbnNlLlxuZnVuY3Rpb24gcmVuZGVyQ2FyZExpc3QoY2FyZExpc3QpXG57XG4gICAgY29uc29sZS5sb2coYHJlbmRlci5qcyAnQWN0aW9uJzogUmVuZGVyaW5nIGNhcmRzIGZyb20gY3VycmVudCBwcm9qZWN0YCk7XG5cbiAgICAvLyBDbGVhciB0aGUgYm94IGFuZCByZS1yZW5kZXIgdGhlIHdob2xlIGxpc3RcbiAgICBjYXJkTGlzdEJveC5pbm5lckhUTUwgPSAnICc7XG5cbiAgICAvLyBDaGVjayBpZiBjYXJkTGlzdCBpcyBhbiBhcnJheSB0aGVuIGdvIGFoZWFkIGFuZCBzZWUgaWYgd2UgY2FuIHJlbmRlciBjYXJkcy5cbiAgICBpZihBcnJheS5pc0FycmF5KGNhcmRMaXN0KSlcbiAgICB7XG4gICAgICAgIGlmKGNhcmRMaXN0Lmxlbmd0aCA9PT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDdXJyZW50IHByb2plY3QgY29udGFpbnMgbm8gY2FyZHNcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBjYXJkTGlzdC5mb3JFYWNoKGNhcmQgPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8gRGVidWcgY29uc29sZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVuZGVyaW5nIGNhcmQ6XCIpXG5cbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgY2FyZCBlbGVtZW50XG4gICAgICAgICAgICAgICAgbGV0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmRCdXR0b24nKTtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LnRleHRDb250ZW50ID0gY2FyZC50aXRsZTtcblxuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0byBhZGQgYW4gZXZlbnRsaXN0ZW5lciBvbiBjbGljayB0aGF0IHdpbGxcbiAgICAgICAgICAgICAgICAvLyBjYWxsIGEgcHVic3ViIHB1Ymxpc2ggZm9yIG9wZW5pbmcgdGhlIHByb2plY3QuXG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQ2FyZCBidXR0b24gd2FzIGNsaWNrZWQuIENhbGxpbmcgXCJ2aWV3Q2FyZFwiLmApO1xuICAgICAgICAgICAgICAgICAgICBwdWJzdWIucHVibGlzaChcInZpZXdDYXJkXCIsIGNhcmQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBwdWJzdWIucHVibGlzaChcInJlbmRlckNhcmREaXNwbGF5XCIsIGNhcmQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gQXBwZW5kIG5ldyBlbGVtZW50IHRvIHRoZSBjYXJkTGlzdEJveFxuICAgICAgICAgICAgICAgIGNhcmRMaXN0Qm94LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUjogY2FyZExpc3QgaXMgbm90IG9mIHR5cGUgJ0FycmF5J1wiKTtcbiAgICB9XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaGFuZGxlcyByZW5kZXJpbmcgYSBuZXcgY2hlY2tib3ggdG8gdGhlIGNoZWNrbGlzdCB3aGVuIGVkaXRDYXJkRGlzcGxheVxuLy8gaXMgb3Blbi4gSXQgd291bGQgaGF2ZSB0byBiZSBiZWNhdXNlIG9ubHkgdGhlICtuZXcgY2hlY2tib3ggYnV0dG9uIHdvdWxkIGJlIGFibGUgdG8gY2FsbCB0aGlzIGZ1bmN0aW9uXG4vLyBXZSB3YW50IHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBhcHBseSBjaGFuZ2VzIGlzIHRoZSBvbmx5IHdheSBmb3IgdGhlIHVzZXIgdG8gY2hhbmdlIGNhcmRzLlxuLy8gVGhpcyBmdW5jdGlvbiB3aWxsIHJlbmRlciBhIG5ldyBjaGVja2JveCBlbGVtZW50IHRvIHRoZSBlZGl0Q2FyZERpc3BsYXkgYnV0IHdpbGwgbm90IHNhdmUgdGhlIGNoYW5nZXNcbmZ1bmN0aW9uIHJlbmRlck5ld0NoZWNrYm94KClcbntcbiAgICAvLyBHZXQgdGhlIGxhc3QgY2hlY2tib3ggbnVtYmVyIGFuZCBkaXZpZGUgYnkgMiAoYmVjYXVzZSBvZiBsYWJlbCBhbmQgaW5wdXQgZWxlbWVudClcbiAgICAvLyBXZSB3YW50IHRvIHVzZSB0aGlzIG51bWJlciBzbyB3ZSBjYW4gY3JlYXRlIGlkL25hbWUgd2l0aCB0aGUgY29ycmVjdCBjaGVja2JveCNcbiAgICBsZXQgaSA9IChlZGl0Q2FyZENoZWNrbGlzdC5jaGlsZEVsZW1lbnRDb3VudCAvIDIpO1xuXG4gICAgLy8gQ3JlYXRlIGEgbmV3IGVsZW1lbnQgdGhhdCB3aWxsIHJlcHJlc2VudCB0aGUgY2hlY2tib3ggbGFiZWwgZm9yIGVkaXRpbmdcbiAgICBsZXQgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlZGl0Q2hlY2tib3gnKTtcbiAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIGBlZGl0Q2hlY2tib3gke2l9YCk7XG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGBlZGl0Q2hlY2tib3gke2l9YCk7XG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgbGFiZWwgZm9yIHRoYXQgdGV4dCBpbnB1dCBlbGVtZW50XG4gICAgbGV0IG5ld1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIG5ld1RleHQuc2V0QXR0cmlidXRlKCdmb3InLCBgZWRpdENoZWNrYm94JHtpfWApO1xuICAgIG5ld1RleHQudGV4dENvbnRlbnQgPSBgQ2hlY2tib3ggIyR7aSsxfWA7XG5cbiAgICAvLyBBcHBlbmQgaXQgdG8gdGhlIGVkaXRDYXJkQ2hlY2tsaXN0IGZvciBkaXNwbGF5XG4gICAgZWRpdENhcmRDaGVja2xpc3QuYXBwZW5kQ2hpbGQobmV3VGV4dCk7XG4gICAgZWRpdENhcmRDaGVja2xpc3QuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgdXBkYXRlIHRoZSBoaWRkZW4gZWxlbWVudCBjaGVja2xpc3RDb3VudCB0byBrZWVwIHRyYWNrIG9mXG4gICAgLy8gdGhlIG5ldyB0b3RhbCBvZiBlbGVtZW50cyBpbiB0aGUgY2hlY2tsaXN0LiBXZSBnbyBhaGVhZCBhbmQganVzdCBhZGQgMSB0byB0aGUgdG90YWwuXG4gICAgZWRpdENhcmRDaGVja2xpc3RDb3VudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgKE51bWJlcihlZGl0Q2FyZENoZWNrbGlzdENvdW50LmdldEF0dHJpYnV0ZSgndmFsdWUnKSkgKyAxKSk7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaGFuZGxlcyByZW5kZXJpbmcgdGhlIHNlbGVjdGVkIGNhcmQgdG8gdGhlIGNhcmQgZGlzcGxheSBlbGVtZW50LlxuLy8gSXQgd2lsbCByZW5kZXIgYWxsIHRoZSBjYXJkIGluZm9ybWF0aW9uIHRvIHRoZSBjYXJkIGRpc3BsYXkuXG5mdW5jdGlvbiByZW5kZXJDYXJkRGlzcGxheShjYXJkKVxue1xuICAgIGNvbnNvbGUubG9nKGBSZW5kZXJpbmcgXCIke2NhcmQudGl0bGV9XCIgdG8gY2FyZCBkaXNwbGF5YCk7XG5cbiAgICAvLyBSZW5kZXIgY2FyZCB0aXRsZSB0byB0aGUgZGlzcGxheVxuICAgIG5vcm1DYXJkVGl0bGUudGV4dENvbnRlbnQgPSBjYXJkLnRpdGxlO1xuXG4gICAgLy8gUmVuZGVyIGNhcmQgZGVzY3JpcHRpb24gdG8gdGhlIGRpc3BsYXlcbiAgICBub3JtQ2FyZERlc2MudGV4dENvbnRlbnQgPSBjYXJkLmRlc2M7XG5cbiAgICAvLyBSZW5kZXIgY2FyZCBkdWUgZGF0ZSB0byB0aGUgZGlzcGxheVxuICAgIG5vcm1DYXJkRHVlLnRleHRDb250ZW50ID0gY2FyZC5kdWU7XG5cbiAgICAvLyBSZW5kZXIgY2FyZCBwcmlvcml0eSB0byB0aGUgZGlzcGxheVxuICAgIG5vcm1DYXJkUHJpb3JpdHkudGV4dENvbnRlbnQgPSBjYXJkLnByaW9yaXR5O1xuXG4gICAgLy8gQmVmb3JlIHdlIGJlZ2luLCB3ZSB3aWxsIGNsZWFyIHRoZSBjaGVja2xpc3QgdG8gcHJldmVudCBhbnkgZHVwbGljYXRlcy5cbiAgICAvLyBvciBlbGVtZW50cyB0aGF0IGFyZW4ndCBzdXBwb3NlIHRvIGJlIGluIHRoZSBjaGVja2xpc3QuXG4gICAgbm9ybUNhcmRDaGVja2xpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAvLyBSZW5kZXIgY2FyZCBjaGVja2xpc3QgdG8gdGhlIGRpc3BsYXlcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2FyZC5jaGVja0xpc3QubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICAvLyBXZSBtYWtlIHN1cmUgdG8gZ28gdGhyb3VnaCB0aGUgY2hlY2tsaXN0IGFycmF5IGFuZCBjcmVhdGUgYSBuZXcgY2hlY2tib3hcbiAgICAgICAgLy8gZm9yIGVhY2ggZWxlbWVudCBpbiB0aGUgYXJyYXkgdGlsbCB3ZSBoYXZlIHRoZSBmdWxsIGNoZWNrbGlzdCBpbiB0aGUgZGlzcGxheS5cblxuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgY2hlY2tib3ggZGl2XG4gICAgICAgIGxldCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoXCJDaGVja2JveFwiKTtcblxuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgY2hlY2tib3ggaW5wdXQgZWxlbWVudFxuICAgICAgICBsZXQgbmV3Q2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBuZXdDaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgbmV3Q2hlY2tib3guc2V0QXR0cmlidXRlKCdpZCcsYGNiJHtpKzF9YCk7XG4gICAgICAgIG5ld0NoZWNrYm94LmNoZWNrZWQgPSBjYXJkLmNoZWNrTGlzdFtpXS5zdGF0ZTtcblxuICAgICAgICAvLyBNYWtlIHN1cmUgdG8gYWRkIGFuIGV2ZW50bGlzdGVuZXIgd2hlbiB0aGVyZSBpcyBhIGNoYW5nZSBpbiB0aGUgY2hlY2tib3hcbiAgICAgICAgbmV3Q2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgY2hlY2tib3ggJHtuZXdDaGVja2JveC5nZXRBdHRyaWJ1dGUoJ2lkJyl9IHN0YXRlIGhhcyBjaGFuZ2VkYCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjYXJkLmNoZWNrTGlzdFtpXS5zdGF0ZSk7XG4gICAgICAgICAgICBjYXJkLmNoZWNrTGlzdFtpXS5zdGF0ZSA9PT0gMCA/IGNhcmQuY2hlY2tMaXN0W2ldLnN0YXRlID0gMSA6IGNhcmQuY2hlY2tMaXN0W2ldLnN0YXRlID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhcmQuY2hlY2tMaXN0W2ldLnN0YXRlKTtcblxuICAgICAgICAgICAgLy8gUHVic3ViIGNhbGwgd2hlbiB0aGlzIGhhcHBlbnMgdG8gdXBkYXRlIHRoZSBjYXJkIGNoZWNrbGlzdC5cbiAgICAgICAgICAgIHB1YnN1Yi5wdWJsaXNoKFwiYXBwbHlDaGVja2xpc3RDaGFuZ2VcIiwgY2FyZCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IGxhYmVsIGZvciB0aGF0IGNoZWNrYm94IGlucHV0IGVsZW1lbnRcbiAgICAgICAgbGV0IG5ld1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBuZXdUZXh0LnNldEF0dHJpYnV0ZSgnZm9yJywgYGNiJHtpKzF9YCk7XG4gICAgICAgIG5ld1RleHQudGV4dENvbnRlbnQgPSBjYXJkLmNoZWNrTGlzdFtpXS50ZXh0O1xuXG4gICAgICAgIC8vIEFwcGVuZCBib3RoIGNoZWNrYm94IGVsZW1lbnQgYW5kIHRleHQgZWxlbWVudCB0byBkaXZcbiAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKG5ld0NoZWNrYm94KTtcbiAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKG5ld1RleHQpO1xuXG4gICAgICAgIC8vIEFwcGVuZCB0aGUgZGl2IHRvIHRoZSBjaGVja2xpc3QgZWxlbWVudFxuICAgICAgICBub3JtQ2FyZENoZWNrbGlzdC5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgIH1cblxuXG5cbiAgICAvLyBXZSBtYWtlIHN1cmUgdGhhdCB0aGUgbm9ybWFsIGNhcmQgZGlzcGxheSBpcyBhY3RpdmVcbiAgICAvLyBhbmQgbm90IHRoZSBlZGl0IGNhcmQgZGlzcGxheS5cbiAgICBlZGl0Q2FyZERpc3BsYXlCb3guY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgbm9ybWFsQ2FyZERpc3BsYXlCb3guY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaGFuZGxlcyByZW5kZXJpbmcgdGhlIGVkaXQgZm9ybSBmb3IgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBjYXJkLlxuLy8gVGhpcyBqdXN0IGhhbmRsZXMgcmVuZGVyaW5nIHRoZSBmb3JtIGFuZCBub3QgdGhlIGVkaXRpbmcuXG5mdW5jdGlvbiByZW5kZXJFZGl0Q2FyZERpc3BsYXkoY2FyZClcbntcbiAgICBpZihjYXJkKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coYFJlbmRlcmluZyBcIiR7Y2FyZC50aXRsZX1cIiB0byBjYXJkIGRpc3BsYXkgZm9yIGVkaXRpbmdgKTtcbiAgICAgICAgY29uc29sZS5sb2coY2FyZCk7XG5cbiAgICAgICAgLy8gV2UgcmVuZGVyIHRoZSBzZWxlY3RlZCBjYXJkIHZhbHVlcyB0byB0aGUgY29ycmVjdCBwbGFjZSBvbiB0aGUgZGlzcGxheS5cbiAgICAgICAgZWRpdENhcmRUaXRsZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY2FyZC50aXRsZSk7XG4gICAgICAgIGVkaXRDYXJkRGVzYy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY2FyZC5kZXNjKTtcbiAgICAgICAgZWRpdENhcmREdWUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGNhcmQuZHVlKTtcblxuICAgICAgICAvLyBUaGlzIGxldHMgdXMgbWFrZSBzdXJlIHRoZSBwcmlvcml0eSBpcyBvbiB0aGUgY29ycmVjdCBvcHRpb24uXG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICBmb3IoY29uc3Qgb3B0aW9uIG9mIGVkaXRDYXJkUHJpb3JpdHkub3B0aW9ucylcbiAgICAgICAge1xuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIGlmKG9wdGlvbi52YWx1ZSA9PT0gY2FyZC5wcmlvcml0eSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlZGl0Q2FyZFByaW9yaXR5LnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoaXMgbGV0cyB1cyBjaGFuZ2UgdGhlIGxhYmVsIHRleHQgZm9yIGVhY2ggY2hlY2tib3ggaW4gdGhlIGNoZWNrbGlzdFxuICAgICAgICAvLyBieSBjb252ZXJ0aW5nIGFsbCB0aGUgbGFiZWxzIGludG8gaW5wdXQgdHlwZSB0ZXh0IGVsZW1lbnRzLlxuICAgICAgICAvLyBGaXJzdCB3ZSBjbGVhciB0aGUgZWRpdENhcmRDaGVja2xpc3QgZGl2IGVsZW1lbnQgc28gd2UgZG9uJ3QgcnVuIGludG8gZHVwbGljYXRlc1xuICAgICAgICBlZGl0Q2FyZENoZWNrbGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAvLyBUaGlzIGtlZXBzIHRyYWNrIG9mIGhvdyBtYW55IGNoZWNrYm94ZXMgd2UgaGF2ZSBhbmQgbGF0ZXIgdXNlZCB0byBzdG9yZSBpbiBmb3JtRGF0IGJ5IGNoZWNrbGlzdENvdW50LlxuICAgICAgICBsZXQgY2hlY2tsaXN0Q291bnQgPSAwO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2FyZC5jaGVja0xpc3QubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBlbGVtZW50IHRoYXQgd2lsbCByZXByZXNlbnQgdGhlIGNoZWNrYm94IGxhYmVsIGZvciBlZGl0aW5nXG4gICAgICAgICAgICBsZXQgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2VkaXRDaGVja2JveCcpO1xuICAgICAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgZWRpdENoZWNrYm94JHtpfWApO1xuICAgICAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGBlZGl0Q2hlY2tib3gke2l9YCk7XG4gICAgICAgICAgICBuZXdFbGVtZW50LnZhbHVlID0gY2FyZC5jaGVja0xpc3RbaV0udGV4dDtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IGxhYmVsIGZvciB0aGF0IHRleHQgaW5wdXQgZWxlbWVudFxuICAgICAgICAgICAgbGV0IG5ld1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgbmV3VGV4dC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGBlZGl0Q2hlY2tib3gke2l9YCk7XG4gICAgICAgICAgICBuZXdUZXh0LnRleHRDb250ZW50ID0gYENoZWNrYm94ICMke2krMX1gO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgaXQgdG8gdGhlIGVkaXRDYXJkQ2hlY2tsaXN0IGZvciBkaXNwbGF5XG4gICAgICAgICAgICBlZGl0Q2FyZENoZWNrbGlzdC5hcHBlbmRDaGlsZChuZXdUZXh0KTtcbiAgICAgICAgICAgIGVkaXRDYXJkQ2hlY2tsaXN0LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuXG4gICAgICAgICAgICAvLyBBZGQgdG8gY2hlY2tib3ggY291bnRcbiAgICAgICAgICAgIGNoZWNrbGlzdENvdW50Kys7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBcHBseSB0aGUgdmFsdWUgdG8gdGhlIGhpZGRlbiBjaGVja2xpc3RDb3VudCBlbGVtZW50IGZvciBmb3JtRGF0YS5cbiAgICAgICAgZWRpdENhcmRDaGVja2xpc3RDb3VudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY2hlY2tsaXN0Q291bnQpO1xuXG5cbiAgICAgICAgLy8gRGlzcGxheSBlZGl0Q2FyZERpc3BsYXkgYW5kIGhpZGUgbm9ybWFsQ2FyZERpc3BsYXlcbiAgICAgICAgZWRpdENhcmREaXNwbGF5Qm94LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICBub3JtYWxDYXJkRGlzcGxheUJveC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIFxuLy8gSlMgaW1wb3J0c1xuLy8gXG5pbXBvcnQgcHVic3ViIGZyb20gJy4vcHVic3ViLmpzJzsgLy9wdWJzdWIgd2lsbCBhbHdheXMgYmUgbG9hZCBvcmRlciAtMS4gQ29yZSBzY3JpcHQgdGhhdCBhbGwgc2NyaXB0cyBuZWVkIGZvciBjYWxscy5cbi8qIElNUE9SVEFOVCovIGltcG9ydCByZW5kZXIgZnJvbSAnLi9yZW5kZXIuanMnOyAvL01VU1QgQkUgQVQgVE9QIExPQUQgT1JERVIuIFByb2JsZW0gd2l0aCByZW5kZXJpbmcgbG9jYWxzdG9yYWdlIG9uIGF3YWtlLlxuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdE1hbmFnZXIuanMnO1xuXG4vLyBcbi8vIENTUyBpbXBvcnRzXG4vLyBcbmltcG9ydCBjc3MgZnJvbSAnLi9zdHlsZS5jc3MnO1xuXG4vLyBcbi8vIERPTSByZWZlcmVuY2VzXG4vLyBcbmNvbnN0IGNyZWF0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlUHJvamVjdEJ1dHRvbicpO1xuY29uc3QgY3JlYXRlQ2FyZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVDYXJkQnV0dG9uJyk7XG5jb25zdCBlZGl0Q2FyZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Q2FyZEJ1dHRvbicpO1xuY29uc3QgYXBwbHlFZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcGx5RWRpdEJ1dHRvbicpO1xuY29uc3QgZWRpdENhcmRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRDYXJkRm9ybScpO1xuY29uc3QgY2FuY2VsRWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWxFZGl0QnV0dG9uJyk7XG5jb25zdCBuZXdDaGVja2JveEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdDaGVja2JveEJ1dHRvbicpO1xuXG4vLyBcbi8vIEV2ZW50IExpc3RlbmVyc1xcXFxcbi8vIFxuXG4vLyBDcmVhdGUgcHJvamVjdCBidXR0b25cbmNyZWF0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKVxue1xuICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRlIHByb2plY3QgYnV0dG9uIHByZXNzZWRcIik7XG4gICAgcHVic3ViLnB1Ymxpc2goXCJhZGRQcm9qZWN0XCIsIFwiTmV3IFByb2plY3RcIik7XG59KTtcbi8vIENyZWF0ZSBjYXJkIGJ1dHRvblxuY3JlYXRlQ2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpXG57XG4gICAgY29uc29sZS5sb2coXCJDcmVhdGUgY2FyZCBidXR0b24gcHJlc3NlZFwiKTtcbiAgICBwdWJzdWIucHVibGlzaChcImFkZENhcmRcIiwgXCJOZXcgQ2FyZFwiKTtcbn0pO1xuLy8gRWRpdCBjYXJkIEJ1dHRvblxuZWRpdENhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKVxue1xuICAgIGNvbnNvbGUubG9nKFwiRWRpdGluZyBjYXJkIGJ1dHRvbiBwcmVzc2VkXCIpO1xuICAgIHB1YnN1Yi5wdWJsaXNoKFwiZWRpdENhcmRcIiwgXCJFZGl0IENhcmRcIik7XG59KVxuLy8gQXBwbHkgRWRpdCBCdXR0b25cbmFwcGx5RWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKClcbntcbiAgICBjb25zb2xlLmxvZyhcIkFwcGx5IGVkaXQgYnV0dG9uIHByZXNzZWRcIik7XG5cbiAgICAvLyBHcmFiIHRoZSBmb3JtIGRhdGEgZnJvbSBlZGl0Q2FyZEZvcm1cbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGVkaXRDYXJkRm9ybSk7XG5cbiAgICAvLyBUaGVuIHVzZSB0aGF0IGZvcm0gZGF0YSBhbmQgcGFzcyBpdCB0byB0aGUgcHVibGlzaCBjYWxsOiBhcHBseUVkaXRcbiAgICAvLyBUaG9zZSB0aGF0IGFyZSBzdWJzY3JpYmVkIHdpbGwgaGF2ZSB0aGUgZm9ybSBkYXRhIG5vdy5cbiAgICBwdWJzdWIucHVibGlzaChcImFwcGx5RWRpdFwiLCBkYXRhKTtcblxuICAgIC8vIEFmdGVyIGV2ZXJ5dGhpbmcgaXMgZG9uZSwgd2Ugd2FudCB0byBtYWtlIHN1cmUgdGhhdCB3ZSByZXNldCB0aGUgZm9ybS5cbiAgICAvLyBJZiB3ZSBkb24ndCwgdGhlcmUgaXMgYSBidWcgd2hlcmUgdGhlIG9sZCB2YWx1ZXMgcmVtYWluIHdoZW4gZWRpdGluZyBhIG5ldyBjYXJkLiBcbiAgICAvLyBJdCdzIHdlaXJkIGJ1dCByZXNldCgpIGZpeGVzIHRoYXQuXG4gICAgZWRpdENhcmRGb3JtLnJlc2V0KCk7XG59KVxuLy8gQ2FuY2VsIEVkaXQgQnV0dG9uXG5jYW5jZWxFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSlcbntcbiAgICBjb25zb2xlLmxvZyhcIkNhbmNlbCBlZGl0IGJ1dHRvbiBwcmVzc2VkXCIpO1xuICAgIC8vIFdlIHVzZSB0aGUgdmlld0NhcmQgY2FsbCBzbyB3ZSBjYW4ganVzdCByZWZyZXNoIHRoZSBjYXJkIGRpc3BsYXlcbiAgICAvLyB3aXRoIHRoZSBjdXJyZW50IHNlbGVjdGVkIGNhcmQuIFdlIHBhc3MgdGhlIG51bGwgc28gd2UgbWFrZSBzdXJlIHRoYXQgd2UgZG9uJ3Qgd2FudFxuICAgIC8vIHRvIHZpZXcgYSBuZXcgY2FyZCBidXQgcmF0aGVyIHZpZXcgdGhlIGV4aXN0aW5nIHNlbGVjdGVkIGNhcmQuXG4gICAgcHVic3ViLnB1Ymxpc2goXCJ2aWV3Q2FyZFwiLCBudWxsKTtcbn0pXG5uZXdDaGVja2JveEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpXG57XG4gICAgY29uc29sZS5sb2coXCJOZXcgY2hlY2tib3ggYnV0dG9uIHByZXNzZWRcIik7XG5cbiAgICBwdWJzdWIucHVibGlzaChcInJlbmRlck5ld0NoZWNrYm94XCIsIG51bGwpO1xuICAgIFxuXG4gICAgLy8gLy8gUHVic3ViIGNhbGwgdGhhdCB3aWxsIGxldCB1cyBhZGQgYSBuZXcgY2hlY2tib3hcbiAgICAvLyBwdWJzdWIucHVibGlzaChcImFkZENoZWNrYm94XCIsIG51bGwpO1xufSlcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=