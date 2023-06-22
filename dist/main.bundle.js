"use strict";
(self["webpackChunkrestaurant_dom_manip"] = self["webpackChunkrestaurant_dom_manip"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/who_asks_satan.ttf */ "./src/fonts/who_asks_satan.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/melted_monster.ttf */ "./src/fonts/melted_monster.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*--------------------------Color Pallete*/
:root {
  --blackColor: #2c2c2c;
  --blacker: #1f1f1f;
  --boneWhite: #faf6f1;
}

/*--------------------------Global stuff */
* {
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: Arial, Helvetica, sans-serif;
}
body {
  box-sizing: border-box;
  background-color: var(--blackColor);
  color: var(--boneWhite);
}

/*--------------------------Fonts*/
@font-face {
  font-family: "horrorFont";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
  font-weight: 900;
  font-size: medium;
  font-style: normal;
}

@font-face {
  font-family: "melted-monster";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("truetype");
  font-weight: 900;
  font-size: medium;
  font-style: normal;
}

/*--------------------------Content zone*/
#content {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
/*--------------------------Navigation bar*/
nav {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  order: 1;
  height: 10vh;
  font-family: "horrorFont";
  font-size: 25px;
  gap: 3%;
  background-color: var(--blacker);
}

.navItem {
  margin: 0px 10px 0px 10px;
  transition: ease-in 0.1s;
  align-content: center;
  width: 10%;
  text-align: center;
  cursor: pointer;
  font-family: "melted-monster";
}
.navItem:hover {
  font-size: 1.25em;
}

.webTitle {
  font-family: "horrorFont";
  font-size: 4rem;
  color: var(--boneWhite);
  margin-right: auto;
  margin-left: 20px;
  /*padding-right: 100px;*/
}

/*--------------------------Footer*/
footer {
  display: flex;
  order: 3;
  width: 100vw;
  height: 5%;
  background-color: var(--blacker);
}

/*--------------------------wrapper*/
.wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
  order: 2;
}

/*--------------------------Inter module stuff*/

.card {
  flex: 1;
  align-self: center;
  width: max(70%, 400px);
  border-radius: 30px;
  max-height: 300px;
  display: flex;
  align-items: center;
  background-color: var(--blacker);
  margin-top: auto;
  margin-bottom: auto;
}

.writingCard {
  margin: 30px 10px 30px 30px;
  font-family: Arial, Helvetica, sans-serif;
}

/*--------------------------Home module*/

.title {
  text-align: center;
  margin-top: 20px;
  font-size: 50px;
  font-family: "melted-monster";
}

p.homeArticle {
  max-height: 285px;
  overflow: hidden;
  scrollbar-width: 5px;
}

.homePhoto {
  width: max(25%, 186px);
  height: 100%;
  object-fit: cover;
  border-radius: 0 30px 30px 0;
}

.description {
  max-height: max(400px, 80%);
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA,0CAA0C;AAC1C;EACE,qBAAqB;EACrB,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA,0CAA0C;AAC1C;EACE,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,yCAAyC;AAC3C;AACA;EACE,sBAAsB;EACtB,mCAAmC;EACnC,uBAAuB;AACzB;;AAEA,kCAAkC;AAClC;EACE,yBAAyB;EACzB,+DAA0D;EAC1D,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B,+DAA0D;EAC1D,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA,yCAAyC;AACzC;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;AACxB;AACA,2CAA2C;AAC3C;EACE,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB,yBAAyB;EACzB,QAAQ;EACR,YAAY;EACZ,yBAAyB;EACzB,eAAe;EACf,OAAO;EACP,gCAAgC;AAClC;;AAEA;EACE,yBAAyB;EACzB,wBAAwB;EACxB,qBAAqB;EACrB,UAAU;EACV,kBAAkB;EAClB,eAAe;EACf,6BAA6B;AAC/B;AACA;EACE,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,wBAAwB;AAC1B;;AAEA,mCAAmC;AACnC;EACE,aAAa;EACb,QAAQ;EACR,YAAY;EACZ,UAAU;EACV,gCAAgC;AAClC;;AAEA,oCAAoC;AACpC;EACE,aAAa;EACb,sBAAsB;EACtB,OAAO;EACP,QAAQ;AACV;;AAEA,+CAA+C;;AAE/C;EACE,OAAO;EACP,kBAAkB;EAClB,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,gCAAgC;EAChC,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,2BAA2B;EAC3B,yCAAyC;AAC3C;;AAEA,wCAAwC;;AAExC;EACE,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,iBAAiB;EACjB,4BAA4B;AAC9B;;AAEA;EACE,2BAA2B;AAC7B","sourcesContent":["/*--------------------------Color Pallete*/\n:root {\n  --blackColor: #2c2c2c;\n  --blacker: #1f1f1f;\n  --boneWhite: #faf6f1;\n}\n\n/*--------------------------Global stuff */\n* {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  font-family: Arial, Helvetica, sans-serif;\n}\nbody {\n  box-sizing: border-box;\n  background-color: var(--blackColor);\n  color: var(--boneWhite);\n}\n\n/*--------------------------Fonts*/\n@font-face {\n  font-family: \"horrorFont\";\n  src: url(\"../fonts/who_asks_satan.ttf\") format(\"truetype\");\n  font-weight: 900;\n  font-size: medium;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"melted-monster\";\n  src: url(\"../fonts/melted_monster.ttf\") format(\"truetype\");\n  font-weight: 900;\n  font-size: medium;\n  font-style: normal;\n}\n\n/*--------------------------Content zone*/\n#content {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n/*--------------------------Navigation bar*/\nnav {\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  order: 1;\n  height: 10vh;\n  font-family: \"horrorFont\";\n  font-size: 25px;\n  gap: 3%;\n  background-color: var(--blacker);\n}\n\n.navItem {\n  margin: 0px 10px 0px 10px;\n  transition: ease-in 0.1s;\n  align-content: center;\n  width: 10%;\n  text-align: center;\n  cursor: pointer;\n  font-family: \"melted-monster\";\n}\n.navItem:hover {\n  font-size: 1.25em;\n}\n\n.webTitle {\n  font-family: \"horrorFont\";\n  font-size: 4rem;\n  color: var(--boneWhite);\n  margin-right: auto;\n  margin-left: 20px;\n  /*padding-right: 100px;*/\n}\n\n/*--------------------------Footer*/\nfooter {\n  display: flex;\n  order: 3;\n  width: 100vw;\n  height: 5%;\n  background-color: var(--blacker);\n}\n\n/*--------------------------wrapper*/\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  order: 2;\n}\n\n/*--------------------------Inter module stuff*/\n\n.card {\n  flex: 1;\n  align-self: center;\n  width: max(70%, 400px);\n  border-radius: 30px;\n  max-height: 300px;\n  display: flex;\n  align-items: center;\n  background-color: var(--blacker);\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.writingCard {\n  margin: 30px 10px 30px 30px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n/*--------------------------Home module*/\n\n.title {\n  text-align: center;\n  margin-top: 20px;\n  font-size: 50px;\n  font-family: \"melted-monster\";\n}\n\np.homeArticle {\n  max-height: 285px;\n  overflow: hidden;\n  scrollbar-width: 5px;\n}\n\n.homePhoto {\n  width: max(25%, 186px);\n  height: 100%;\n  object-fit: cover;\n  border-radius: 0 30px 30px 0;\n}\n\n.description {\n  max-height: max(400px, 80%);\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/page-load.js */ "./src/modules/page-load.js");
/* harmony import */ var _modules_console_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/console.js */ "./src/modules/console.js");
/* harmony import */ var _img_favicon_murcielago_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/favicon/murcielago.png */ "./src/img/favicon/murcielago.png");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _fonts_who_asks_satan_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fonts/who_asks_satan.ttf */ "./src/fonts/who_asks_satan.ttf");



// --------- Assets importing --------------




const contentDiv = document.querySelector("#content");

const load = _modules_page_load_js__WEBPACK_IMPORTED_MODULE_0__["default"];

// Navbar maker
const navBar = document.createElement("nav");

const webTitle = document.createElement("h1");
webTitle.textContent = "Deathrock diaries";
webTitle.classList.add("webTitle");
navBar.appendChild(webTitle);

const navbarItems = ["home", "content", "contact"];
for (let i = 0; i < navbarItems.length; i++) {
  const navItem = document.createElement("div");
  navItem.classList.add(navbarItems[i]);
  navItem.classList.add("navItem");
  navItem.textContent =
    navbarItems[i].charAt(0).toUpperCase() + navbarItems[i].slice(1);
  navBar.appendChild(navItem);
}

contentDiv.appendChild(navBar);

// Load index page content
contentDiv.appendChild(load("home"));

// navbar Event Listeners
const allNavItems = document.querySelectorAll(".navItem");

allNavItems.forEach((key) => {
  const pagetoLoad = key.className.split(" ")[0];
  key.addEventListener("click", () => load_other_page(pagetoLoad));
});

// Other pages loader
function load_other_page(page) {
  contentDiv.removeChild(document.querySelector(".wrapper"));
  contentDiv.appendChild(load(page));
}

// Footer maker
const footer = document.createElement("footer");

const footerNameHolder = document.createElement("div");
footerNameHolder.classList.add("footer_name");
footerNameHolder.textContent = "Adolfo Castro";

const footerGHHolder = document.createElement("a");
footerGHHolder.classList.add("GH");
footerGHHolder.href = "https://www.github.com/adolfo92";
footerGHHolder.textContent = "github";

footer.appendChild(footerNameHolder);
footer.appendChild(footerGHHolder);

contentDiv.appendChild(footer);

(0,_modules_console_js__WEBPACK_IMPORTED_MODULE_1__["default"])();


/***/ }),

/***/ "./src/modules/console.js":
/*!********************************!*\
  !*** ./src/modules/console.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ consoleBanner)
/* harmony export */ });
function consoleBanner() {
  return console.log(
    "\n          ------Made with \u2665 by------" +
      "\n             _       _  __       ___ ____  \n    __ _  __| | ___ | |/ _| ___ / _ \\___ \\ \n   / _` |/ _` |/ _ \\| | |_ / _ \\ (_) |__) |\n  | (_| | (_| | (_) | |  _| (_) \\__, / __/ \n   \\__,_|\\__,_|\\___/|_|_|  \\___/  /_/_____|\n" +
      "\n        ------github.com/adolfo92------"
  );
}


/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
function contact() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  console.log("contact check");
  return wrapper;
}


/***/ }),

/***/ "./src/modules/content.js":
/*!********************************!*\
  !*** ./src/modules/content.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function content() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  console.log("content check");
  return wrapper;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (content);


/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tools_articleWriter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools/articleWriter */ "./src/modules/tools/articleWriter.js");
/* harmony import */ var _img_bands_RozzWilliamsHomepage_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/bands/RozzWilliamsHomepage.webp */ "./src/img/bands/RozzWilliamsHomepage.webp");



const article = {
  main: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};

function homeLoader() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const title = document.createElement("h1");
  title.textContent = "Welcome";
  title.classList.add("title");

  const description = document.createElement("div");
  description.classList.add("description");
  description.classList.add("card");

  description.appendChild((0,_tools_articleWriter__WEBPACK_IMPORTED_MODULE_0__["default"])(article.main, "homeArticle"));

  const rozzWilliams = new Image();
  rozzWilliams.src = _img_bands_RozzWilliamsHomepage_webp__WEBPACK_IMPORTED_MODULE_1__;
  rozzWilliams.classList.add("homePhoto");
  description.appendChild(rozzWilliams);

  wrapper.appendChild(title);
  wrapper.appendChild(description);

  console.log("Home.js check");

  return wrapper;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeLoader);


/***/ }),

/***/ "./src/modules/page-load.js":
/*!**********************************!*\
  !*** ./src/modules/page-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/modules/home.js");
/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content.js */ "./src/modules/content.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/modules/contact.js");




function pageRender(status) {
  console.log("page render check");

  if (status === "home") return (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  if (status === "content") return (0,_content_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  if (status === "contact") return (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageRender);


/***/ }),

/***/ "./src/modules/tools/articleWriter.js":
/*!********************************************!*\
  !*** ./src/modules/tools/articleWriter.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ writeMethis)
/* harmony export */ });
function writeMethis(text, identification) {
  const container = document.createElement("div");
  container.classList.add("writingCard");

  if (identification) {
    container.classList.add(identification);
  }

  function DETECT_LINE_BREAKS(someText) {
    // Busca \n y me separas el texto en un array de parrafos
    let paragraphArray = someText.split("\n");

    for (let i = 0; i < paragraphArray.length; i++) {
      // Crea el parrafo
      const paragraph = document.createElement("p");
      // Agrega la clase
      if (identification) {
        paragraph.classList.add(identification);
      }
      // Agrega al parrafo el texto en la posicion del array actual
      paragraph.textContent = paragraphArray[i];

      //Metele el parrato al contenedor
      container.appendChild(paragraph);

      //Si no estamos en el final del array, introduce un salto de linea en el documento
      if (i < paragraphArray.length - 1) {
        const linebreak = document.createElement("br");
        container.appendChild(linebreak);
      }
    }
  }

  DETECT_LINE_BREAKS(text);

  return container;
}


/***/ }),

/***/ "./src/fonts/melted_monster.ttf":
/*!**************************************!*\
  !*** ./src/fonts/melted_monster.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c665e4acaa8bf7341ae9.ttf";

/***/ }),

/***/ "./src/fonts/who_asks_satan.ttf":
/*!**************************************!*\
  !*** ./src/fonts/who_asks_satan.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3993253149c9dbfc43df.ttf";

/***/ }),

/***/ "./src/img/bands/RozzWilliamsHomepage.webp":
/*!*************************************************!*\
  !*** ./src/img/bands/RozzWilliamsHomepage.webp ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "RozzWilliamsHomepage.webp";

/***/ }),

/***/ "./src/img/favicon/murcielago.png":
/*!****************************************!*\
  !*** ./src/img/favicon/murcielago.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "murcielago.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2xDRztBQUNNO0FBQ0g7O0FBRWhDO0FBQ0E7O0FBRUEsZ0NBQWdDLG9EQUFJO0FBQ3BDLG1DQUFtQyx1REFBTztBQUMxQyxtQ0FBbUMsb0RBQU87QUFDMUM7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNaWDtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsMkJBQTJCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20tbWFuaXAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS1tYW5pcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20tbWFuaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLW1hbmlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20tbWFuaXAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLW1hbmlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLW1hbmlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS1tYW5pcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS1tYW5pcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS1tYW5pcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLW1hbmlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20tbWFuaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20tbWFuaXAvLi9zcmMvbW9kdWxlcy9jb25zb2xlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLW1hbmlwLy4vc3JjL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS1tYW5pcC8uL3NyYy9tb2R1bGVzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20tbWFuaXAvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLW1hbmlwLy4vc3JjL21vZHVsZXMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLW1hbmlwLy4vc3JjL21vZHVsZXMvdG9vbHMvYXJ0aWNsZVdyaXRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvd2hvX2Fza3Nfc2F0YW4udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvbWVsdGVkX21vbnN0ZXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUNvbG9yIFBhbGxldGUqL1xuOnJvb3Qge1xuICAtLWJsYWNrQ29sb3I6ICMyYzJjMmM7XG4gIC0tYmxhY2tlcjogIzFmMWYxZjtcbiAgLS1ib25lV2hpdGU6ICNmYWY2ZjE7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1HbG9iYWwgc3R1ZmYgKi9cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuYm9keSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrQ29sb3IpO1xuICBjb2xvcjogdmFyKC0tYm9uZVdoaXRlKTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUZvbnRzKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJob3Jyb3JGb250XCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwibWVsdGVkLW1vbnN0ZXJcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Db250ZW50IHpvbmUqL1xuI2NvbnRlbnQge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTmF2aWdhdGlvbiBiYXIqL1xubmF2IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgb3JkZXI6IDE7XG4gIGhlaWdodDogMTB2aDtcbiAgZm9udC1mYW1pbHk6IFwiaG9ycm9yRm9udFwiO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGdhcDogMyU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrZXIpO1xufVxuXG4ubmF2SXRlbSB7XG4gIG1hcmdpbjogMHB4IDEwcHggMHB4IDEwcHg7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4xcztcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwibWVsdGVkLW1vbnN0ZXJcIjtcbn1cbi5uYXZJdGVtOmhvdmVyIHtcbiAgZm9udC1zaXplOiAxLjI1ZW07XG59XG5cbi53ZWJUaXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcImhvcnJvckZvbnRcIjtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBjb2xvcjogdmFyKC0tYm9uZVdoaXRlKTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgLypwYWRkaW5nLXJpZ2h0OiAxMDBweDsqL1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRm9vdGVyKi9cbmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG9yZGVyOiAzO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogNSU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrZXIpO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0td3JhcHBlciovXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDE7XG4gIG9yZGVyOiAyO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tSW50ZXIgbW9kdWxlIHN0dWZmKi9cblxuLmNhcmQge1xuICBmbGV4OiAxO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiBtYXgoNzAlLCA0MDBweCk7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFja2VyKTtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLndyaXRpbmdDYXJkIHtcbiAgbWFyZ2luOiAzMHB4IDEwcHggMzBweCAzMHB4O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUhvbWUgbW9kdWxlKi9cblxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIm1lbHRlZC1tb25zdGVyXCI7XG59XG5cbnAuaG9tZUFydGljbGUge1xuICBtYXgtaGVpZ2h0OiAyODVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgc2Nyb2xsYmFyLXdpZHRoOiA1cHg7XG59XG5cbi5ob21lUGhvdG8ge1xuICB3aWR0aDogbWF4KDI1JSwgMTg2cHgpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAwIDMwcHggMzBweCAwO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBtYXgtaGVpZ2h0OiBtYXgoNDAwcHgsIDgwJSk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDBDQUEwQztBQUMxQztFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBLDBDQUEwQztBQUMxQztFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHlDQUF5QztBQUMzQztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1DQUFtQztFQUNuQyx1QkFBdUI7QUFDekI7O0FBRUEsa0NBQWtDO0FBQ2xDO0VBQ0UseUJBQXlCO0VBQ3pCLCtEQUEwRDtFQUMxRCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QiwrREFBMEQ7RUFDMUQsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUEseUNBQXlDO0FBQ3pDO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0EsMkNBQTJDO0FBQzNDO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFFBQVE7RUFDUixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixPQUFPO0VBQ1AsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtBQUMxQjs7QUFFQSxtQ0FBbUM7QUFDbkM7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0NBQWdDO0FBQ2xDOztBQUVBLG9DQUFvQztBQUNwQztFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsT0FBTztFQUNQLFFBQVE7QUFDVjs7QUFFQSwrQ0FBK0M7O0FBRS9DO0VBQ0UsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHlDQUF5QztBQUMzQzs7QUFFQSx3Q0FBd0M7O0FBRXhDO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUNvbG9yIFBhbGxldGUqL1xcbjpyb290IHtcXG4gIC0tYmxhY2tDb2xvcjogIzJjMmMyYztcXG4gIC0tYmxhY2tlcjogIzFmMWYxZjtcXG4gIC0tYm9uZVdoaXRlOiAjZmFmNmYxO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tR2xvYmFsIHN0dWZmICovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFja0NvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1ib25lV2hpdGUpO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRm9udHMqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJob3Jyb3JGb250XFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy93aG9fYXNrc19zYXRhbi50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtZWx0ZWQtbW9uc3RlclxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvbWVsdGVkX21vbnN0ZXIudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ29udGVudCB6b25lKi9cXG4jY29udGVudCB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1OYXZpZ2F0aW9uIGJhciovXFxubmF2IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBvcmRlcjogMTtcXG4gIGhlaWdodDogMTB2aDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiaG9ycm9yRm9udFxcXCI7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBnYXA6IDMlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2tlcik7XFxufVxcblxcbi5uYXZJdGVtIHtcXG4gIG1hcmdpbjogMHB4IDEwcHggMHB4IDEwcHg7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMXM7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtZWx0ZWQtbW9uc3RlclxcXCI7XFxufVxcbi5uYXZJdGVtOmhvdmVyIHtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbn1cXG5cXG4ud2ViVGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJob3Jyb3JGb250XFxcIjtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGNvbG9yOiB2YXIoLS1ib25lV2hpdGUpO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAvKnBhZGRpbmctcmlnaHQ6IDEwMHB4OyovXFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Gb290ZXIqL1xcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3JkZXI6IDM7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2tlcik7XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS13cmFwcGVyKi9cXG4ud3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxuICBvcmRlcjogMjtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUludGVyIG1vZHVsZSBzdHVmZiovXFxuXFxuLmNhcmQge1xcbiAgZmxleDogMTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiBtYXgoNzAlLCA0MDBweCk7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgbWF4LWhlaWdodDogMzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrZXIpO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxufVxcblxcbi53cml0aW5nQ2FyZCB7XFxuICBtYXJnaW46IDMwcHggMTBweCAzMHB4IDMwcHg7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUhvbWUgbW9kdWxlKi9cXG5cXG4udGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibWVsdGVkLW1vbnN0ZXJcXFwiO1xcbn1cXG5cXG5wLmhvbWVBcnRpY2xlIHtcXG4gIG1heC1oZWlnaHQ6IDI4NXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHNjcm9sbGJhci13aWR0aDogNXB4O1xcbn1cXG5cXG4uaG9tZVBob3RvIHtcXG4gIHdpZHRoOiBtYXgoMjUlLCAxODZweCk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMzBweCAzMHB4IDA7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICBtYXgtaGVpZ2h0OiBtYXgoNDAwcHgsIDgwJSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHBhZ2VMb2FkZXIgZnJvbSBcIi4vbW9kdWxlcy9wYWdlLWxvYWQuanNcIjtcbmltcG9ydCBjb25zb2xlQmFubmVyIGZyb20gXCIuL21vZHVsZXMvY29uc29sZS5qc1wiO1xuXG4vLyAtLS0tLS0tLS0gQXNzZXRzIGltcG9ydGluZyAtLS0tLS0tLS0tLS0tLVxuaW1wb3J0IFwiLi9pbWcvZmF2aWNvbi9tdXJjaWVsYWdvLnBuZ1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCIuL2ZvbnRzL3dob19hc2tzX3NhdGFuLnR0ZlwiO1xuXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5jb25zdCBsb2FkID0gcGFnZUxvYWRlcjtcblxuLy8gTmF2YmFyIG1ha2VyXG5jb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuXG5jb25zdCB3ZWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbndlYlRpdGxlLnRleHRDb250ZW50ID0gXCJEZWF0aHJvY2sgZGlhcmllc1wiO1xud2ViVGl0bGUuY2xhc3NMaXN0LmFkZChcIndlYlRpdGxlXCIpO1xubmF2QmFyLmFwcGVuZENoaWxkKHdlYlRpdGxlKTtcblxuY29uc3QgbmF2YmFySXRlbXMgPSBbXCJob21lXCIsIFwiY29udGVudFwiLCBcImNvbnRhY3RcIl07XG5mb3IgKGxldCBpID0gMDsgaSA8IG5hdmJhckl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gIGNvbnN0IG5hdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXZJdGVtLmNsYXNzTGlzdC5hZGQobmF2YmFySXRlbXNbaV0pO1xuICBuYXZJdGVtLmNsYXNzTGlzdC5hZGQoXCJuYXZJdGVtXCIpO1xuICBuYXZJdGVtLnRleHRDb250ZW50ID1cbiAgICBuYXZiYXJJdGVtc1tpXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hdmJhckl0ZW1zW2ldLnNsaWNlKDEpO1xuICBuYXZCYXIuYXBwZW5kQ2hpbGQobmF2SXRlbSk7XG59XG5cbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobmF2QmFyKTtcblxuLy8gTG9hZCBpbmRleCBwYWdlIGNvbnRlbnRcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobG9hZChcImhvbWVcIikpO1xuXG4vLyBuYXZiYXIgRXZlbnQgTGlzdGVuZXJzXG5jb25zdCBhbGxOYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2SXRlbVwiKTtcblxuYWxsTmF2SXRlbXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gIGNvbnN0IHBhZ2V0b0xvYWQgPSBrZXkuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKVswXTtcbiAga2V5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBsb2FkX290aGVyX3BhZ2UocGFnZXRvTG9hZCkpO1xufSk7XG5cbi8vIE90aGVyIHBhZ2VzIGxvYWRlclxuZnVuY3Rpb24gbG9hZF9vdGhlcl9wYWdlKHBhZ2UpIHtcbiAgY29udGVudERpdi5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIikpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGxvYWQocGFnZSkpO1xufVxuXG4vLyBGb290ZXIgbWFrZXJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG5cbmNvbnN0IGZvb3Rlck5hbWVIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZm9vdGVyTmFtZUhvbGRlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyX25hbWVcIik7XG5mb290ZXJOYW1lSG9sZGVyLnRleHRDb250ZW50ID0gXCJBZG9sZm8gQ2FzdHJvXCI7XG5cbmNvbnN0IGZvb3RlckdISG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5mb290ZXJHSEhvbGRlci5jbGFzc0xpc3QuYWRkKFwiR0hcIik7XG5mb290ZXJHSEhvbGRlci5ocmVmID0gXCJodHRwczovL3d3dy5naXRodWIuY29tL2Fkb2xmbzkyXCI7XG5mb290ZXJHSEhvbGRlci50ZXh0Q29udGVudCA9IFwiZ2l0aHViXCI7XG5cbmZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJOYW1lSG9sZGVyKTtcbmZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJHSEhvbGRlcik7XG5cbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuY29uc29sZUJhbm5lcigpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uc29sZUJhbm5lcigpIHtcbiAgcmV0dXJuIGNvbnNvbGUubG9nKFxuICAgIFwiXFxuICAgICAgICAgIC0tLS0tLU1hZGUgd2l0aCBcXHUyNjY1IGJ5LS0tLS0tXCIgK1xuICAgICAgXCJcXG4gICAgICAgICAgICAgXyAgICAgICBfICBfXyAgICAgICBfX18gX19fXyAgXFxuICAgIF9fIF8gIF9ffCB8IF9fXyB8IHwvIF98IF9fXyAvIF8gXFxcXF9fXyBcXFxcIFxcbiAgIC8gX2AgfC8gX2AgfC8gXyBcXFxcfCB8IHxfIC8gXyBcXFxcIChfKSB8X18pIHxcXG4gIHwgKF98IHwgKF98IHwgKF8pIHwgfCAgX3wgKF8pIFxcXFxfXywgLyBfXy8gXFxuICAgXFxcXF9fLF98XFxcXF9fLF98XFxcXF9fXy98X3xffCAgXFxcXF9fXy8gIC9fL19fX19ffFxcblwiICtcbiAgICAgIFwiXFxuICAgICAgICAtLS0tLS1naXRodWIuY29tL2Fkb2xmbzkyLS0tLS0tXCJcbiAgKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3QoKSB7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ3cmFwcGVyXCIpO1xuXG4gIGNvbnNvbGUubG9nKFwiY29udGFjdCBjaGVja1wiKTtcbiAgcmV0dXJuIHdyYXBwZXI7XG59XG4iLCJmdW5jdGlvbiBjb250ZW50KCkge1xuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwid3JhcHBlclwiKTtcblxuICBjb25zb2xlLmxvZyhcImNvbnRlbnQgY2hlY2tcIik7XG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50O1xuIiwiaW1wb3J0IHdyaXRlTWV0aGlzIGZyb20gXCIuL3Rvb2xzL2FydGljbGVXcml0ZXJcIjtcbmltcG9ydCByb3p6UGhvdG8gZnJvbSBcIi4uL2ltZy9iYW5kcy9Sb3p6V2lsbGlhbXNIb21lcGFnZS53ZWJwXCI7XG5cbmNvbnN0IGFydGljbGUgPSB7XG4gIG1haW46IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlxcbkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LlwiLFxufTtcblxuZnVuY3Rpb24gaG9tZUxvYWRlcigpIHtcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIndyYXBwZXJcIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJXZWxjb21lXCI7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG5cbiAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQod3JpdGVNZXRoaXMoYXJ0aWNsZS5tYWluLCBcImhvbWVBcnRpY2xlXCIpKTtcblxuICBjb25zdCByb3p6V2lsbGlhbXMgPSBuZXcgSW1hZ2UoKTtcbiAgcm96eldpbGxpYW1zLnNyYyA9IHJvenpQaG90bztcbiAgcm96eldpbGxpYW1zLmNsYXNzTGlzdC5hZGQoXCJob21lUGhvdG9cIik7XG4gIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHJvenpXaWxsaWFtcyk7XG5cbiAgd3JhcHBlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gIGNvbnNvbGUubG9nKFwiSG9tZS5qcyBjaGVja1wiKTtcblxuICByZXR1cm4gd3JhcHBlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaG9tZUxvYWRlcjtcbiIsImltcG9ydCBob21lIGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCBjb250ZW50IGZyb20gXCIuL2NvbnRlbnQuanNcIjtcbmltcG9ydCBjb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuZnVuY3Rpb24gcGFnZVJlbmRlcihzdGF0dXMpIHtcbiAgY29uc29sZS5sb2coXCJwYWdlIHJlbmRlciBjaGVja1wiKTtcblxuICBpZiAoc3RhdHVzID09PSBcImhvbWVcIikgcmV0dXJuIGhvbWUoKTtcbiAgaWYgKHN0YXR1cyA9PT0gXCJjb250ZW50XCIpIHJldHVybiBjb250ZW50KCk7XG4gIGlmIChzdGF0dXMgPT09IFwiY29udGFjdFwiKSByZXR1cm4gY29udGFjdCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlUmVuZGVyO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd3JpdGVNZXRoaXModGV4dCwgaWRlbnRpZmljYXRpb24pIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ3cml0aW5nQ2FyZFwiKTtcblxuICBpZiAoaWRlbnRpZmljYXRpb24pIHtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChpZGVudGlmaWNhdGlvbik7XG4gIH1cblxuICBmdW5jdGlvbiBERVRFQ1RfTElORV9CUkVBS1Moc29tZVRleHQpIHtcbiAgICAvLyBCdXNjYSBcXG4geSBtZSBzZXBhcmFzIGVsIHRleHRvIGVuIHVuIGFycmF5IGRlIHBhcnJhZm9zXG4gICAgbGV0IHBhcmFncmFwaEFycmF5ID0gc29tZVRleHQuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFncmFwaEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBDcmVhIGVsIHBhcnJhZm9cbiAgICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgLy8gQWdyZWdhIGxhIGNsYXNlXG4gICAgICBpZiAoaWRlbnRpZmljYXRpb24pIHtcbiAgICAgICAgcGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoaWRlbnRpZmljYXRpb24pO1xuICAgICAgfVxuICAgICAgLy8gQWdyZWdhIGFsIHBhcnJhZm8gZWwgdGV4dG8gZW4gbGEgcG9zaWNpb24gZGVsIGFycmF5IGFjdHVhbFxuICAgICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gcGFyYWdyYXBoQXJyYXlbaV07XG5cbiAgICAgIC8vTWV0ZWxlIGVsIHBhcnJhdG8gYWwgY29udGVuZWRvclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG5cbiAgICAgIC8vU2kgbm8gZXN0YW1vcyBlbiBlbCBmaW5hbCBkZWwgYXJyYXksIGludHJvZHVjZSB1biBzYWx0byBkZSBsaW5lYSBlbiBlbCBkb2N1bWVudG9cbiAgICAgIGlmIChpIDwgcGFyYWdyYXBoQXJyYXkubGVuZ3RoIC0gMSkge1xuICAgICAgICBjb25zdCBsaW5lYnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5lYnJlYWspO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIERFVEVDVF9MSU5FX0JSRUFLUyh0ZXh0KTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9