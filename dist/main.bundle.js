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
  margin-right: 3px;
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

.active {
  color: rgb(24, 206, 0);
  -webkit-text-stroke: 0.5px #000000;
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
  letter-spacing: 5px;
  -webkit-text-stroke: 1.5px rgb(0, 0, 0);
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
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA,0CAA0C;AAC1C;EACE,qBAAqB;EACrB,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA,0CAA0C;AAC1C;EACE,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,yCAAyC;AAC3C;AACA;EACE,sBAAsB;EACtB,mCAAmC;EACnC,uBAAuB;AACzB;;AAEA,kCAAkC;AAClC;EACE,yBAAyB;EACzB,+DAA0D;EAC1D,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B,+DAA0D;EAC1D,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA,yCAAyC;AACzC;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;AACxB;AACA,2CAA2C;AAC3C;EACE,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB,yBAAyB;EACzB,QAAQ;EACR,YAAY;EACZ,yBAAyB;EACzB,eAAe;EACf,OAAO;EACP,gCAAgC;EAChC,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,wBAAwB;EACxB,qBAAqB;EACrB,UAAU;EACV,kBAAkB;EAClB,eAAe;EACf,6BAA6B;AAC/B;AACA;EACE,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,kCAAkC;AACpC;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,wBAAwB;AAC1B;;AAEA,mCAAmC;AACnC;EACE,aAAa;EACb,QAAQ;EACR,YAAY;EACZ,UAAU;EACV,gCAAgC;AAClC;;AAEA,oCAAoC;AACpC;EACE,aAAa;EACb,sBAAsB;EACtB,OAAO;EACP,QAAQ;AACV;;AAEA,+CAA+C;;AAE/C;EACE,OAAO;EACP,kBAAkB;EAClB,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,gCAAgC;EAChC,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,2BAA2B;EAC3B,yCAAyC;AAC3C;;AAEA,wCAAwC;;AAExC;EACE,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,6BAA6B;EAC7B,mBAAmB;EACnB,uCAAuC;AACzC;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,iBAAiB;EACjB,4BAA4B;AAC9B;;AAEA;EACE,2BAA2B;AAC7B","sourcesContent":["/*--------------------------Color Pallete*/\n:root {\n  --blackColor: #2c2c2c;\n  --blacker: #1f1f1f;\n  --boneWhite: #faf6f1;\n}\n\n/*--------------------------Global stuff */\n* {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  font-family: Arial, Helvetica, sans-serif;\n}\nbody {\n  box-sizing: border-box;\n  background-color: var(--blackColor);\n  color: var(--boneWhite);\n}\n\n/*--------------------------Fonts*/\n@font-face {\n  font-family: \"horrorFont\";\n  src: url(\"../fonts/who_asks_satan.ttf\") format(\"truetype\");\n  font-weight: 900;\n  font-size: medium;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"melted-monster\";\n  src: url(\"../fonts/melted_monster.ttf\") format(\"truetype\");\n  font-weight: 900;\n  font-size: medium;\n  font-style: normal;\n}\n\n/*--------------------------Content zone*/\n#content {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n/*--------------------------Navigation bar*/\nnav {\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  order: 1;\n  height: 10vh;\n  font-family: \"horrorFont\";\n  font-size: 25px;\n  gap: 3%;\n  background-color: var(--blacker);\n  margin-right: 3px;\n}\n\n.navItem {\n  margin: 0px 10px 0px 10px;\n  transition: ease-in 0.1s;\n  align-content: center;\n  width: 10%;\n  text-align: center;\n  cursor: pointer;\n  font-family: \"melted-monster\";\n}\n.navItem:hover {\n  font-size: 1.25em;\n}\n\n.active {\n  color: rgb(24, 206, 0);\n  -webkit-text-stroke: 0.5px #000000;\n}\n\n.webTitle {\n  font-family: \"horrorFont\";\n  font-size: 4rem;\n  color: var(--boneWhite);\n  margin-right: auto;\n  margin-left: 20px;\n  /*padding-right: 100px;*/\n}\n\n/*--------------------------Footer*/\nfooter {\n  display: flex;\n  order: 3;\n  width: 100vw;\n  height: 5%;\n  background-color: var(--blacker);\n}\n\n/*--------------------------wrapper*/\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  order: 2;\n}\n\n/*--------------------------Inter module stuff*/\n\n.card {\n  flex: 1;\n  align-self: center;\n  width: max(70%, 400px);\n  border-radius: 30px;\n  max-height: 300px;\n  display: flex;\n  align-items: center;\n  background-color: var(--blacker);\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.writingCard {\n  margin: 30px 10px 30px 30px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n/*--------------------------Home module*/\n\n.title {\n  text-align: center;\n  margin-top: 20px;\n  font-size: 50px;\n  font-family: \"melted-monster\";\n  letter-spacing: 5px;\n  -webkit-text-stroke: 1.5px rgb(0, 0, 0);\n}\n\np.homeArticle {\n  max-height: 285px;\n  overflow: hidden;\n  scrollbar-width: 5px;\n}\n\n.homePhoto {\n  width: max(25%, 186px);\n  height: 100%;\n  object-fit: cover;\n  border-radius: 0 30px 30px 0;\n}\n\n.description {\n  max-height: max(400px, 80%);\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _img_bands_christianDeath_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/bands/christianDeath.webp */ "./src/img/bands/christianDeath.webp");
/* harmony import */ var _img_bands_alienSexFiend_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/bands/alienSexFiend.jpg */ "./src/img/bands/alienSexFiend.jpg");
/* harmony import */ var _img_bands_45Grave_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/bands/45Grave.jpeg */ "./src/img/bands/45Grave.jpeg");
/* harmony import */ var _img_bands_eatYM_JPEG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/bands/eatYM.JPEG */ "./src/img/bands/eatYM.JPEG");
/* harmony import */ var _img_bands_Los_Carniceros_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/bands/Los_Carniceros.jpg */ "./src/img/bands/Los_Carniceros.jpg");
/* harmony import */ var _tools_articleWriter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tools/articleWriter */ "./src/modules/tools/articleWriter.js");
/* harmony import */ var _tools_cardMaker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tools/cardMaker */ "./src/modules/tools/cardMaker.js");
// ----- Image import





// ----- Tools



const articles = {
  article1: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
};

function content() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  wrapper.classList.add("bandsWrapper");
  wrapper.appendChild(
    (0,_tools_cardMaker__WEBPACK_IMPORTED_MODULE_6__["default"])("Christian Death", articles.article1.text, _img_bands_christianDeath_webp__WEBPACK_IMPORTED_MODULE_0__)
  );
  wrapper.appendChild((0,_tools_cardMaker__WEBPACK_IMPORTED_MODULE_6__["default"])("45Grave", articles.article1.text, _img_bands_45Grave_jpeg__WEBPACK_IMPORTED_MODULE_2__));
  wrapper.appendChild(
    (0,_tools_cardMaker__WEBPACK_IMPORTED_MODULE_6__["default"])("Alien Sex Fiend", articles.article1.text, _img_bands_alienSexFiend_jpg__WEBPACK_IMPORTED_MODULE_1__)
  );
  wrapper.appendChild(
    (0,_tools_cardMaker__WEBPACK_IMPORTED_MODULE_6__["default"])("Eat Your Make-up", articles.article1.text, _img_bands_eatYM_JPEG__WEBPACK_IMPORTED_MODULE_3__)
  );
  wrapper.appendChild(
    (0,_tools_cardMaker__WEBPACK_IMPORTED_MODULE_6__["default"])("Los Carniceros del norte", articles.article1.text, _img_bands_Los_Carniceros_jpg__WEBPACK_IMPORTED_MODULE_4__)
  );

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
  console.log(status);
  const navItems = document.querySelectorAll(".navItem");
  navItems.forEach((item) => item.classList.remove("active"));
  const active = document.querySelector(`.${status}`);
  active.classList.add("active");

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

/***/ "./src/modules/tools/cardMaker.js":
/*!****************************************!*\
  !*** ./src/modules/tools/cardMaker.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cardMaker)
/* harmony export */ });
/* harmony import */ var _articleWriter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articleWriter */ "./src/modules/tools/articleWriter.js");

function cardMaker(cardTitle, cardText, cardImageSrc) {
  const description = document.createElement("div");
  description.classList.add("bandCard");
  description.classList.add("card");

  const title = document.createElement("h2");
  title.textContent = cardTitle;
  title.classList.add("bandTitle");

  const cardArticle = (0,_articleWriter__WEBPACK_IMPORTED_MODULE_0__["default"])(cardText, "bandDesc");

  const cardImage = new Image();
  cardImage.src = cardImageSrc;
  cardImage.classList.add("homePhoto");

  description.appendChild(title);
  description.appendChild(cardArticle);
  description.appendChild(cardImage);

  return description;
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

/***/ "./src/img/bands/45Grave.jpeg":
/*!************************************!*\
  !*** ./src/img/bands/45Grave.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "45Grave.jpeg";

/***/ }),

/***/ "./src/img/bands/Los_Carniceros.jpg":
/*!******************************************!*\
  !*** ./src/img/bands/Los_Carniceros.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Los_Carniceros.jpg";

/***/ }),

/***/ "./src/img/bands/RozzWilliamsHomepage.webp":
/*!*************************************************!*\
  !*** ./src/img/bands/RozzWilliamsHomepage.webp ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "RozzWilliamsHomepage.webp";

/***/ }),

/***/ "./src/img/bands/alienSexFiend.jpg":
/*!*****************************************!*\
  !*** ./src/img/bands/alienSexFiend.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "alienSexFiend.jpg";

/***/ }),

/***/ "./src/img/bands/christianDeath.webp":
/*!*******************************************!*\
  !*** ./src/img/bands/christianDeath.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "christianDeath.webp";

/***/ }),

/***/ "./src/img/bands/eatYM.JPEG":
/*!**********************************!*\
  !*** ./src/img/bands/eatYM.JPEG ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eatYM.JPEG";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLGtJQUE4QztBQUMxRiw0Q0FBNEMsa0lBQThDO0FBQzFGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDhGQUE4RixNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksOEVBQThFLDBCQUEwQix1QkFBdUIseUJBQXlCLEdBQUcsb0RBQW9ELGNBQWMsZUFBZSxxQkFBcUIsOENBQThDLEdBQUcsUUFBUSwyQkFBMkIsd0NBQXdDLDRCQUE0QixHQUFHLHFEQUFxRCxnQ0FBZ0MsbUVBQW1FLHFCQUFxQixzQkFBc0IsdUJBQXVCLEdBQUcsZ0JBQWdCLG9DQUFvQyxtRUFBbUUscUJBQXFCLHNCQUFzQix1QkFBdUIsR0FBRywwREFBMEQsaUJBQWlCLGtCQUFrQixrQkFBa0IsMkJBQTJCLEdBQUcscURBQXFELDJCQUEyQixrQkFBa0Isd0JBQXdCLDhCQUE4QixhQUFhLGlCQUFpQixnQ0FBZ0Msb0JBQW9CLFlBQVkscUNBQXFDLHNCQUFzQixHQUFHLGNBQWMsOEJBQThCLDZCQUE2QiwwQkFBMEIsZUFBZSx1QkFBdUIsb0JBQW9CLG9DQUFvQyxHQUFHLGtCQUFrQixzQkFBc0IsR0FBRyxhQUFhLDJCQUEyQix1Q0FBdUMsR0FBRyxlQUFlLGdDQUFnQyxvQkFBb0IsNEJBQTRCLHVCQUF1QixzQkFBc0IsMkJBQTJCLEtBQUssa0RBQWtELGtCQUFrQixhQUFhLGlCQUFpQixlQUFlLHFDQUFxQyxHQUFHLHFEQUFxRCxrQkFBa0IsMkJBQTJCLFlBQVksYUFBYSxHQUFHLCtEQUErRCxZQUFZLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHNCQUFzQixrQkFBa0Isd0JBQXdCLHFDQUFxQyxxQkFBcUIsd0JBQXdCLEdBQUcsa0JBQWtCLGdDQUFnQyw4Q0FBOEMsR0FBRyx5REFBeUQsdUJBQXVCLHFCQUFxQixvQkFBb0Isb0NBQW9DLHdCQUF3Qiw0Q0FBNEMsR0FBRyxtQkFBbUIsc0JBQXNCLHFCQUFxQix5QkFBeUIsR0FBRyxnQkFBZ0IsMkJBQTJCLGlCQUFpQixzQkFBc0IsaUNBQWlDLEdBQUcsa0JBQWtCLGdDQUFnQyxHQUFHLHFCQUFxQjtBQUNsekk7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNsSzFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiZ0Q7QUFDQzs7QUFFakQ7QUFDc0M7QUFDVjtBQUNROztBQUVwQzs7QUFFQSxhQUFhLDZEQUFVOztBQUV2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHdCQUF3QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsK0RBQWE7Ozs7Ozs7Ozs7Ozs7OztBQ2xFRTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQzhEO0FBQ1Q7QUFDTDtBQUNKO0FBQ1M7QUFDckQ7QUFDZ0Q7QUFDTjs7QUFFMUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFTLDRDQUE0QywyREFBYztBQUN2RTtBQUNBLHNCQUFzQiw0REFBUyxvQ0FBb0Msb0RBQU87QUFDMUU7QUFDQSxJQUFJLDREQUFTLDRDQUE0Qyx5REFBTztBQUNoRTtBQUNBO0FBQ0EsSUFBSSw0REFBUyw2Q0FBNkMsa0RBQUs7QUFDL0Q7QUFDQTtBQUNBLElBQUksNERBQVMscURBQXFELDBEQUFNO0FBQ3hFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEN5QjtBQUNlOztBQUUvRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLGdFQUFXOztBQUVyQztBQUNBLHFCQUFxQixpRUFBUztBQUM5QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDRztBQUNNO0FBQ0g7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsT0FBTztBQUNuRDs7QUFFQSxnQ0FBZ0Msb0RBQUk7QUFDcEMsbUNBQW1DLHVEQUFPO0FBQzFDLG1DQUFtQyxvREFBTztBQUMxQzs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2pCWDtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsMkJBQTJCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEMwQztBQUMzQjtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLDBEQUFXOztBQUVqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS1tYW5pcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLW1hbmlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS1tYW5pcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20tbWFuaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS1tYW5pcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20tbWFuaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20tbWFuaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLW1hbmlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLW1hbmlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLW1hbmlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20tbWFuaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS1tYW5pcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS1tYW5pcC8uL3NyYy9tb2R1bGVzL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20tbWFuaXAvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLW1hbmlwLy4vc3JjL21vZHVsZXMvY29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS1tYW5pcC8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20tbWFuaXAvLi9zcmMvbW9kdWxlcy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20tbWFuaXAvLi9zcmMvbW9kdWxlcy90b29scy9hcnRpY2xlV3JpdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLW1hbmlwLy4vc3JjL21vZHVsZXMvdG9vbHMvY2FyZE1ha2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy93aG9fYXNrc19zYXRhbi50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9tZWx0ZWRfbW9uc3Rlci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ29sb3IgUGFsbGV0ZSovXG46cm9vdCB7XG4gIC0tYmxhY2tDb2xvcjogIzJjMmMyYztcbiAgLS1ibGFja2VyOiAjMWYxZjFmO1xuICAtLWJvbmVXaGl0ZTogI2ZhZjZmMTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUdsb2JhbCBzdHVmZiAqL1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5ib2R5IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2tDb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1ib25lV2hpdGUpO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRm9udHMqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImhvcnJvckZvbnRcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJtZWx0ZWQtbW9uc3RlclwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUNvbnRlbnQgem9uZSovXG4jY29udGVudCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1OYXZpZ2F0aW9uIGJhciovXG5uYXYge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBvcmRlcjogMTtcbiAgaGVpZ2h0OiAxMHZoO1xuICBmb250LWZhbWlseTogXCJob3Jyb3JGb250XCI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZ2FwOiAzJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2tlcik7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuXG4ubmF2SXRlbSB7XG4gIG1hcmdpbjogMHB4IDEwcHggMHB4IDEwcHg7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4xcztcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwibWVsdGVkLW1vbnN0ZXJcIjtcbn1cbi5uYXZJdGVtOmhvdmVyIHtcbiAgZm9udC1zaXplOiAxLjI1ZW07XG59XG5cbi5hY3RpdmUge1xuICBjb2xvcjogcmdiKDI0LCAyMDYsIDApO1xuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAwLjVweCAjMDAwMDAwO1xufVxuXG4ud2ViVGl0bGUge1xuICBmb250LWZhbWlseTogXCJob3Jyb3JGb250XCI7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgY29sb3I6IHZhcigtLWJvbmVXaGl0ZSk7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIC8qcGFkZGluZy1yaWdodDogMTAwcHg7Ki9cbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUZvb3RlciovXG5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvcmRlcjogMztcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFja2VyKTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXdyYXBwZXIqL1xuLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xuICBvcmRlcjogMjtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUludGVyIG1vZHVsZSBzdHVmZiovXG5cbi5jYXJkIHtcbiAgZmxleDogMTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogbWF4KDcwJSwgNDAwcHgpO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2tlcik7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG5cbi53cml0aW5nQ2FyZCB7XG4gIG1hcmdpbjogMzBweCAxMHB4IDMwcHggMzBweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Ib21lIG1vZHVsZSovXG5cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LWZhbWlseTogXCJtZWx0ZWQtbW9uc3RlclwiO1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxLjVweCByZ2IoMCwgMCwgMCk7XG59XG5cbnAuaG9tZUFydGljbGUge1xuICBtYXgtaGVpZ2h0OiAyODVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgc2Nyb2xsYmFyLXdpZHRoOiA1cHg7XG59XG5cbi5ob21lUGhvdG8ge1xuICB3aWR0aDogbWF4KDI1JSwgMTg2cHgpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAwIDMwcHggMzBweCAwO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBtYXgtaGVpZ2h0OiBtYXgoNDAwcHgsIDgwJSk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDBDQUEwQztBQUMxQztFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBLDBDQUEwQztBQUMxQztFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHlDQUF5QztBQUMzQztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1DQUFtQztFQUNuQyx1QkFBdUI7QUFDekI7O0FBRUEsa0NBQWtDO0FBQ2xDO0VBQ0UseUJBQXlCO0VBQ3pCLCtEQUEwRDtFQUMxRCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QiwrREFBMEQ7RUFDMUQsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUEseUNBQXlDO0FBQ3pDO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0EsMkNBQTJDO0FBQzNDO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFFBQVE7RUFDUixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixPQUFPO0VBQ1AsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsd0JBQXdCO0FBQzFCOztBQUVBLG1DQUFtQztBQUNuQztFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IsWUFBWTtFQUNaLFVBQVU7RUFDVixnQ0FBZ0M7QUFDbEM7O0FBRUEsb0NBQW9DO0FBQ3BDO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixPQUFPO0VBQ1AsUUFBUTtBQUNWOztBQUVBLCtDQUErQzs7QUFFL0M7RUFDRSxPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IseUNBQXlDO0FBQzNDOztBQUVBLHdDQUF3Qzs7QUFFeEM7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Db2xvciBQYWxsZXRlKi9cXG46cm9vdCB7XFxuICAtLWJsYWNrQ29sb3I6ICMyYzJjMmM7XFxuICAtLWJsYWNrZXI6ICMxZjFmMWY7XFxuICAtLWJvbmVXaGl0ZTogI2ZhZjZmMTtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUdsb2JhbCBzdHVmZiAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuYm9keSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2tDb2xvcik7XFxuICBjb2xvcjogdmFyKC0tYm9uZVdoaXRlKTtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUZvbnRzKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiaG9ycm9yRm9udFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvd2hvX2Fza3Nfc2F0YW4udHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibWVsdGVkLW1vbnN0ZXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL21lbHRlZF9tb25zdGVyLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUNvbnRlbnQgem9uZSovXFxuI2NvbnRlbnQge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTmF2aWdhdGlvbiBiYXIqL1xcbm5hdiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgb3JkZXI6IDE7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBmb250LWZhbWlseTogXFxcImhvcnJvckZvbnRcXFwiO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgZ2FwOiAzJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrZXIpO1xcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxufVxcblxcbi5uYXZJdGVtIHtcXG4gIG1hcmdpbjogMHB4IDEwcHggMHB4IDEwcHg7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMXM7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtZWx0ZWQtbW9uc3RlclxcXCI7XFxufVxcbi5uYXZJdGVtOmhvdmVyIHtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGNvbG9yOiByZ2IoMjQsIDIwNiwgMCk7XFxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAwLjVweCAjMDAwMDAwO1xcbn1cXG5cXG4ud2ViVGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJob3Jyb3JGb250XFxcIjtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGNvbG9yOiB2YXIoLS1ib25lV2hpdGUpO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAvKnBhZGRpbmctcmlnaHQ6IDEwMHB4OyovXFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Gb290ZXIqL1xcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3JkZXI6IDM7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2tlcik7XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS13cmFwcGVyKi9cXG4ud3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxuICBvcmRlcjogMjtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUludGVyIG1vZHVsZSBzdHVmZiovXFxuXFxuLmNhcmQge1xcbiAgZmxleDogMTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiBtYXgoNzAlLCA0MDBweCk7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgbWF4LWhlaWdodDogMzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrZXIpO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxufVxcblxcbi53cml0aW5nQ2FyZCB7XFxuICBtYXJnaW46IDMwcHggMTBweCAzMHB4IDMwcHg7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUhvbWUgbW9kdWxlKi9cXG5cXG4udGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibWVsdGVkLW1vbnN0ZXJcXFwiO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDEuNXB4IHJnYigwLCAwLCAwKTtcXG59XFxuXFxucC5ob21lQXJ0aWNsZSB7XFxuICBtYXgtaGVpZ2h0OiAyODVweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBzY3JvbGxiYXItd2lkdGg6IDVweDtcXG59XFxuXFxuLmhvbWVQaG90byB7XFxuICB3aWR0aDogbWF4KDI1JSwgMTg2cHgpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwIDMwcHggMzBweCAwO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgbWF4LWhlaWdodDogbWF4KDQwMHB4LCA4MCUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwYWdlTG9hZGVyIGZyb20gXCIuL21vZHVsZXMvcGFnZS1sb2FkLmpzXCI7XG5pbXBvcnQgY29uc29sZUJhbm5lciBmcm9tIFwiLi9tb2R1bGVzL2NvbnNvbGUuanNcIjtcblxuLy8gLS0tLS0tLS0tIEFzc2V0cyBpbXBvcnRpbmcgLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBcIi4vaW1nL2Zhdmljb24vbXVyY2llbGFnby5wbmdcIjtcbmltcG9ydCBcIi4vc3R5bGVzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFwiLi9mb250cy93aG9fYXNrc19zYXRhbi50dGZcIjtcblxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuY29uc3QgbG9hZCA9IHBhZ2VMb2FkZXI7XG5cbi8vIE5hdmJhciBtYWtlclxuY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcblxuY29uc3Qgd2ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG53ZWJUaXRsZS50ZXh0Q29udGVudCA9IFwiRGVhdGhyb2NrIGRpYXJpZXNcIjtcbndlYlRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ3ZWJUaXRsZVwiKTtcbm5hdkJhci5hcHBlbmRDaGlsZCh3ZWJUaXRsZSk7XG5cbmNvbnN0IG5hdmJhckl0ZW1zID0gW1wiaG9tZVwiLCBcImNvbnRlbnRcIiwgXCJjb250YWN0XCJdO1xuZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZiYXJJdGVtcy5sZW5ndGg7IGkrKykge1xuICBjb25zdCBuYXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmF2SXRlbS5jbGFzc0xpc3QuYWRkKG5hdmJhckl0ZW1zW2ldKTtcbiAgbmF2SXRlbS5jbGFzc0xpc3QuYWRkKFwibmF2SXRlbVwiKTtcbiAgbmF2SXRlbS50ZXh0Q29udGVudCA9XG4gICAgbmF2YmFySXRlbXNbaV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYXZiYXJJdGVtc1tpXS5zbGljZSgxKTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdkl0ZW0pO1xufVxuXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKG5hdkJhcik7XG5cbi8vIExvYWQgaW5kZXggcGFnZSBjb250ZW50XG5jb250ZW50RGl2LmFwcGVuZENoaWxkKGxvYWQoXCJob21lXCIpKTtcblxuLy8gbmF2YmFyIEV2ZW50IExpc3RlbmVyc1xuY29uc3QgYWxsTmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdkl0ZW1cIik7XG5cbmFsbE5hdkl0ZW1zLmZvckVhY2goKGtleSkgPT4ge1xuICBjb25zdCBwYWdldG9Mb2FkID0ga2V5LmNsYXNzTmFtZS5zcGxpdChcIiBcIilbMF07XG4gIGtleS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbG9hZF9vdGhlcl9wYWdlKHBhZ2V0b0xvYWQpKTtcbn0pO1xuXG4vLyBPdGhlciBwYWdlcyBsb2FkZXJcbmZ1bmN0aW9uIGxvYWRfb3RoZXJfcGFnZShwYWdlKSB7XG4gIGNvbnRlbnREaXYucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChsb2FkKHBhZ2UpKTtcbn1cblxuLy8gRm9vdGVyIG1ha2VyXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuXG5jb25zdCBmb290ZXJOYW1lSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmZvb3Rlck5hbWVIb2xkZXIuY2xhc3NMaXN0LmFkZChcImZvb3Rlcl9uYW1lXCIpO1xuZm9vdGVyTmFtZUhvbGRlci50ZXh0Q29udGVudCA9IFwiQWRvbGZvIENhc3Ryb1wiO1xuXG5jb25zdCBmb290ZXJHSEhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuZm9vdGVyR0hIb2xkZXIuY2xhc3NMaXN0LmFkZChcIkdIXCIpO1xuZm9vdGVyR0hIb2xkZXIuaHJlZiA9IFwiaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9hZG9sZm85MlwiO1xuZm9vdGVyR0hIb2xkZXIudGV4dENvbnRlbnQgPSBcImdpdGh1YlwiO1xuXG5mb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTmFtZUhvbGRlcik7XG5mb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyR0hIb2xkZXIpO1xuXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbmNvbnNvbGVCYW5uZXIoKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnNvbGVCYW5uZXIoKSB7XG4gIHJldHVybiBjb25zb2xlLmxvZyhcbiAgICBcIlxcbiAgICAgICAgICAtLS0tLS1NYWRlIHdpdGggXFx1MjY2NSBieS0tLS0tLVwiICtcbiAgICAgIFwiXFxuICAgICAgICAgICAgIF8gICAgICAgXyAgX18gICAgICAgX19fIF9fX18gIFxcbiAgICBfXyBfICBfX3wgfCBfX18gfCB8LyBffCBfX18gLyBfIFxcXFxfX18gXFxcXCBcXG4gICAvIF9gIHwvIF9gIHwvIF8gXFxcXHwgfCB8XyAvIF8gXFxcXCAoXykgfF9fKSB8XFxuICB8IChffCB8IChffCB8IChfKSB8IHwgIF98IChfKSBcXFxcX18sIC8gX18vIFxcbiAgIFxcXFxfXyxffFxcXFxfXyxffFxcXFxfX18vfF98X3wgIFxcXFxfX18vICAvXy9fX19fX3xcXG5cIiArXG4gICAgICBcIlxcbiAgICAgICAgLS0tLS0tZ2l0aHViLmNvbS9hZG9sZm85Mi0tLS0tLVwiXG4gICk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0KCkge1xuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwid3JhcHBlclwiKTtcblxuICBjb25zb2xlLmxvZyhcImNvbnRhY3QgY2hlY2tcIik7XG4gIHJldHVybiB3cmFwcGVyO1xufVxuIiwiLy8gLS0tLS0gSW1hZ2UgaW1wb3J0XG5pbXBvcnQgY2hyaXN0aWFuRGVhdGggZnJvbSBcIi4uL2ltZy9iYW5kcy9jaHJpc3RpYW5EZWF0aC53ZWJwXCI7XG5pbXBvcnQgYWxpZW5TRiBmcm9tIFwiLi4vaW1nL2JhbmRzL2FsaWVuU2V4RmllbmQuanBnXCI7XG5pbXBvcnQgZ3JhdmU0NSBmcm9tIFwiLi4vaW1nL2JhbmRzLzQ1R3JhdmUuanBlZ1wiO1xuaW1wb3J0IGVhdFlNIGZyb20gXCIuLi9pbWcvYmFuZHMvZWF0WU0uSlBFR1wiO1xuaW1wb3J0IGNhcm5pYyBmcm9tIFwiLi4vaW1nL2JhbmRzL0xvc19DYXJuaWNlcm9zLmpwZ1wiO1xuLy8gLS0tLS0gVG9vbHNcbmltcG9ydCB3cml0ZU1ldGhpcyBmcm9tIFwiLi90b29scy9hcnRpY2xlV3JpdGVyXCI7XG5pbXBvcnQgY2FyZE1ha2VyIGZyb20gXCIuL3Rvb2xzL2NhcmRNYWtlclwiO1xuXG5jb25zdCBhcnRpY2xlcyA9IHtcbiAgYXJ0aWNsZTE6IHtcbiAgICB0ZXh0OiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIixcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNvbnRlbnQoKSB7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ3cmFwcGVyXCIpO1xuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJiYW5kc1dyYXBwZXJcIik7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoXG4gICAgY2FyZE1ha2VyKFwiQ2hyaXN0aWFuIERlYXRoXCIsIGFydGljbGVzLmFydGljbGUxLnRleHQsIGNocmlzdGlhbkRlYXRoKVxuICApO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGNhcmRNYWtlcihcIjQ1R3JhdmVcIiwgYXJ0aWNsZXMuYXJ0aWNsZTEudGV4dCwgZ3JhdmU0NSkpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKFxuICAgIGNhcmRNYWtlcihcIkFsaWVuIFNleCBGaWVuZFwiLCBhcnRpY2xlcy5hcnRpY2xlMS50ZXh0LCBhbGllblNGKVxuICApO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKFxuICAgIGNhcmRNYWtlcihcIkVhdCBZb3VyIE1ha2UtdXBcIiwgYXJ0aWNsZXMuYXJ0aWNsZTEudGV4dCwgZWF0WU0pXG4gICk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoXG4gICAgY2FyZE1ha2VyKFwiTG9zIENhcm5pY2Vyb3MgZGVsIG5vcnRlXCIsIGFydGljbGVzLmFydGljbGUxLnRleHQsIGNhcm5pYylcbiAgKTtcblxuICBjb25zb2xlLmxvZyhcImNvbnRlbnQgY2hlY2tcIik7XG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50O1xuIiwiaW1wb3J0IHdyaXRlTWV0aGlzIGZyb20gXCIuL3Rvb2xzL2FydGljbGVXcml0ZXJcIjtcbmltcG9ydCByb3p6UGhvdG8gZnJvbSBcIi4uL2ltZy9iYW5kcy9Sb3p6V2lsbGlhbXNIb21lcGFnZS53ZWJwXCI7XG5cbmNvbnN0IGFydGljbGUgPSB7XG4gIG1haW46IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlxcbkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LlwiLFxufTtcblxuZnVuY3Rpb24gaG9tZUxvYWRlcigpIHtcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIndyYXBwZXJcIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJXZWxjb21lXCI7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG5cbiAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQod3JpdGVNZXRoaXMoYXJ0aWNsZS5tYWluLCBcImhvbWVBcnRpY2xlXCIpKTtcblxuICBjb25zdCByb3p6V2lsbGlhbXMgPSBuZXcgSW1hZ2UoKTtcbiAgcm96eldpbGxpYW1zLnNyYyA9IHJvenpQaG90bztcbiAgcm96eldpbGxpYW1zLmNsYXNzTGlzdC5hZGQoXCJob21lUGhvdG9cIik7XG4gIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHJvenpXaWxsaWFtcyk7XG5cbiAgd3JhcHBlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gIGNvbnNvbGUubG9nKFwiSG9tZS5qcyBjaGVja1wiKTtcblxuICByZXR1cm4gd3JhcHBlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaG9tZUxvYWRlcjtcbiIsImltcG9ydCBob21lIGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCBjb250ZW50IGZyb20gXCIuL2NvbnRlbnQuanNcIjtcbmltcG9ydCBjb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuZnVuY3Rpb24gcGFnZVJlbmRlcihzdGF0dXMpIHtcbiAgY29uc29sZS5sb2coXCJwYWdlIHJlbmRlciBjaGVja1wiKTtcbiAgY29uc29sZS5sb2coc3RhdHVzKTtcbiAgY29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdkl0ZW1cIik7XG4gIG5hdkl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gIGNvbnN0IGFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3N0YXR1c31gKTtcbiAgYWN0aXZlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgaWYgKHN0YXR1cyA9PT0gXCJob21lXCIpIHJldHVybiBob21lKCk7XG4gIGlmIChzdGF0dXMgPT09IFwiY29udGVudFwiKSByZXR1cm4gY29udGVudCgpO1xuICBpZiAoc3RhdHVzID09PSBcImNvbnRhY3RcIikgcmV0dXJuIGNvbnRhY3QoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFnZVJlbmRlcjtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdyaXRlTWV0aGlzKHRleHQsIGlkZW50aWZpY2F0aW9uKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwid3JpdGluZ0NhcmRcIik7XG5cbiAgaWYgKGlkZW50aWZpY2F0aW9uKSB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoaWRlbnRpZmljYXRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gREVURUNUX0xJTkVfQlJFQUtTKHNvbWVUZXh0KSB7XG4gICAgLy8gQnVzY2EgXFxuIHkgbWUgc2VwYXJhcyBlbCB0ZXh0byBlbiB1biBhcnJheSBkZSBwYXJyYWZvc1xuICAgIGxldCBwYXJhZ3JhcGhBcnJheSA9IHNvbWVUZXh0LnNwbGl0KFwiXFxuXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhZ3JhcGhBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gQ3JlYSBlbCBwYXJyYWZvXG4gICAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIC8vIEFncmVnYSBsYSBjbGFzZVxuICAgICAgaWYgKGlkZW50aWZpY2F0aW9uKSB7XG4gICAgICAgIHBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKGlkZW50aWZpY2F0aW9uKTtcbiAgICAgIH1cbiAgICAgIC8vIEFncmVnYSBhbCBwYXJyYWZvIGVsIHRleHRvIGVuIGxhIHBvc2ljaW9uIGRlbCBhcnJheSBhY3R1YWxcbiAgICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IHBhcmFncmFwaEFycmF5W2ldO1xuXG4gICAgICAvL01ldGVsZSBlbCBwYXJyYXRvIGFsIGNvbnRlbmVkb3JcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG4gICAgICAvL1NpIG5vIGVzdGFtb3MgZW4gZWwgZmluYWwgZGVsIGFycmF5LCBpbnRyb2R1Y2UgdW4gc2FsdG8gZGUgbGluZWEgZW4gZWwgZG9jdW1lbnRvXG4gICAgICBpZiAoaSA8IHBhcmFncmFwaEFycmF5Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgY29uc3QgbGluZWJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGluZWJyZWFrKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBERVRFQ1RfTElORV9CUkVBS1ModGV4dCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbiIsImltcG9ydCB3cml0ZU1ldGhpcyBmcm9tIFwiLi9hcnRpY2xlV3JpdGVyXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXJkTWFrZXIoY2FyZFRpdGxlLCBjYXJkVGV4dCwgY2FyZEltYWdlU3JjKSB7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImJhbmRDYXJkXCIpO1xuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBjYXJkVGl0bGU7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJiYW5kVGl0bGVcIik7XG5cbiAgY29uc3QgY2FyZEFydGljbGUgPSB3cml0ZU1ldGhpcyhjYXJkVGV4dCwgXCJiYW5kRGVzY1wiKTtcblxuICBjb25zdCBjYXJkSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgY2FyZEltYWdlLnNyYyA9IGNhcmRJbWFnZVNyYztcbiAgY2FyZEltYWdlLmNsYXNzTGlzdC5hZGQoXCJob21lUGhvdG9cIik7XG5cbiAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChjYXJkQXJ0aWNsZSk7XG4gIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGNhcmRJbWFnZSk7XG5cbiAgcmV0dXJuIGRlc2NyaXB0aW9uO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9