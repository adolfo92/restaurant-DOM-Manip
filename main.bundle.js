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
  padding: 0px;
  list-style: none;
  font-family: Arial, Helvetica, sans-serif;
}
body {
  box-sizing: border-box;
  background-color: var(--blackColor);
  color: var(--boneWhite);
  margin: 0;
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
  box-sizing: border-box;
  min-height: 100vh;
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
  height: 5vh;
  background-color: var(--blacker);
  gap: calc(50vw - 6ch);
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 15px;
}

footer > a {
  text-decoration: none;
  color: rgb(1, 114, 243);
}

footer > a > img {
  width: 15px;
  height: 15px;
  margin-left: 2px;
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
  display: flex;
  align-items: center;
  background-color: var(--blacker);
  margin-top: auto;
  margin-bottom: auto;
  height: 300px;
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
  flex: none;
  max-height: 500px;
  min-height: 400px;
}

/*------------------- Content module---------*/
.bandsWrapper {
  padding: 0 5px 0px 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 7px;
  max-width: 99vw;
  margin-top: 10px;
  margin-bottom: 10px;
}

.bandCard:nth-child(even) {
  justify-self: end;
}

.bandCard {
  width: min(100%, 800px);
  box-sizing: border-box;
  margin: 0 10px 0 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: min-content 1fr;
  overflow: hidden;
}

.bandTitle {
  grid-column: 1/3;
  grid-row: 1/2;
  height: 3ch;
  font-family: "melted-monster";
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bandText {
  grid-column: 1/3;
  margin: 5px;
  text-align: start;
}
.bandImage {
  grid-column: 3/4;
  grid-row: 1/3;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 30px 30px 0;
}

.bandCard:nth-child(odd) {
  grid-column: 1/4;
}
.bandCard:nth-child(even) {
  grid-column: 2/5;
}

/*----------------------------Contact---------------------*/

.contactWrapper {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contactP {
  margin-top: 20px;
  font-size: 20px;
  margin-left: 15px;
}

.messageInv {
  margin-top: 20px;
  font-size: 40px;
}

form {
  margin-left: 15px;
  display: grid;
  width: 60%;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 30px 1fr 30px;
}
input {
  border: none;
  background-color: var(--boneWhite);
}

form > input[name="name"] {
  background-color: var(--boneWhite);
}
form > textarea {
  grid-column: 1/3;
  resize: none;
  background-color: var(--boneWhite);
  border: none;
}

button {
  background-color: transparent;
  border: solid 3px var(--boneWhite);
  border-radius: 20px;
  font-size: 20px;
  font-family: "melted-monster";
  color: rgb(24, 206, 0);
  background-color: var(--blacker);
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["/*--------------------------Color Pallete*/\n:root {\n  --blackColor: #2c2c2c;\n  --blacker: #1f1f1f;\n  --boneWhite: #faf6f1;\n}\n\n/*--------------------------Global stuff */\n* {\n  margin: 0;\n  padding: 0px;\n  list-style: none;\n  font-family: Arial, Helvetica, sans-serif;\n}\nbody {\n  box-sizing: border-box;\n  background-color: var(--blackColor);\n  color: var(--boneWhite);\n  margin: 0;\n}\n\n/*--------------------------Fonts*/\n@font-face {\n  font-family: \"horrorFont\";\n  src: url(\"../fonts/who_asks_satan.ttf\") format(\"truetype\");\n  font-weight: 900;\n  font-size: medium;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"melted-monster\";\n  src: url(\"../fonts/melted_monster.ttf\") format(\"truetype\");\n  font-weight: 900;\n  font-size: medium;\n  font-style: normal;\n}\n\n/*--------------------------Content zone*/\n#content {\n  box-sizing: border-box;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n/*--------------------------Navigation bar*/\nnav {\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  order: 1;\n  height: 10vh;\n  font-family: \"horrorFont\";\n  font-size: 25px;\n  gap: 3%;\n  background-color: var(--blacker);\n  margin-right: 3px;\n}\n\n.navItem {\n  margin: 0px 10px 0px 10px;\n  transition: ease-in 0.1s;\n  align-content: center;\n  width: 10%;\n  text-align: center;\n  cursor: pointer;\n  font-family: \"melted-monster\";\n}\n.navItem:hover {\n  font-size: 1.25em;\n}\n\n.active {\n  color: rgb(24, 206, 0);\n  -webkit-text-stroke: 0.5px #000000;\n  font-size: 1.25em;\n}\n\n.webTitle {\n  font-family: \"horrorFont\";\n  font-size: 4rem;\n  color: var(--boneWhite);\n  margin-right: auto;\n  margin-left: 20px;\n  /*padding-right: 100px;*/\n}\n\n/*--------------------------Footer*/\nfooter {\n  display: flex;\n  order: 3;\n  height: 5vh;\n  background-color: var(--blacker);\n  gap: calc(50vw - 6ch);\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n  font-size: 15px;\n}\n\nfooter > a {\n  text-decoration: none;\n  color: rgb(1, 114, 243);\n}\n\nfooter > a > img {\n  width: 15px;\n  height: 15px;\n  margin-left: 2px;\n}\n\n/*--------------------------wrapper*/\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  order: 2;\n}\n\n/*--------------------------Inter module stuff*/\n\n.card {\n  flex: 1;\n  align-self: center;\n  width: max(70%, 400px);\n  border-radius: 30px;\n  display: flex;\n  align-items: center;\n  background-color: var(--blacker);\n  margin-top: auto;\n  margin-bottom: auto;\n  height: 300px;\n}\n\n.writingCard {\n  margin: 30px 10px 30px 30px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n/*--------------------------Home module*/\n\n.title {\n  text-align: center;\n  margin-top: 20px;\n  font-size: 50px;\n  font-family: \"melted-monster\";\n  letter-spacing: 5px;\n  -webkit-text-stroke: 1.5px rgb(0, 0, 0);\n}\n\np.homeArticle {\n  max-height: 285px;\n  overflow: hidden;\n  scrollbar-width: 5px;\n}\n\n.homePhoto {\n  width: max(25%, 186px);\n  height: 100%;\n  object-fit: cover;\n  border-radius: 0 30px 30px 0;\n}\n\n.description {\n  flex: none;\n  max-height: 500px;\n  min-height: 400px;\n}\n\n/*------------------- Content module---------*/\n.bandsWrapper {\n  padding: 0 5px 0px 5px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  row-gap: 7px;\n  max-width: 99vw;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.bandCard:nth-child(even) {\n  justify-self: end;\n}\n\n.bandCard {\n  width: min(100%, 800px);\n  box-sizing: border-box;\n  margin: 0 10px 0 10px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: min-content 1fr;\n  overflow: hidden;\n}\n\n.bandTitle {\n  grid-column: 1/3;\n  grid-row: 1/2;\n  height: 3ch;\n  font-family: \"melted-monster\";\n  font-size: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.bandText {\n  grid-column: 1/3;\n  margin: 5px;\n  text-align: start;\n}\n.bandImage {\n  grid-column: 3/4;\n  grid-row: 1/3;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 0 30px 30px 0;\n}\n\n.bandCard:nth-child(odd) {\n  grid-column: 1/4;\n}\n.bandCard:nth-child(even) {\n  grid-column: 2/5;\n}\n\n/*----------------------------Contact---------------------*/\n\n.contactWrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n.contactP {\n  margin-top: 20px;\n  font-size: 20px;\n  margin-left: 15px;\n}\n\n.messageInv {\n  margin-top: 20px;\n  font-size: 40px;\n}\n\nform {\n  margin-left: 15px;\n  display: grid;\n  width: 60%;\n  gap: 10px;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 30px 1fr 30px;\n}\ninput {\n  border: none;\n  background-color: var(--boneWhite);\n}\n\nform > input[name=\"name\"] {\n  background-color: var(--boneWhite);\n}\nform > textarea {\n  grid-column: 1/3;\n  resize: none;\n  background-color: var(--boneWhite);\n  border: none;\n}\n\nbutton {\n  background-color: transparent;\n  border: solid 3px var(--boneWhite);\n  border-radius: 20px;\n  font-size: 20px;\n  font-family: \"melted-monster\";\n  color: rgb(24, 206, 0);\n  background-color: var(--blacker);\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _img_favicon_github_mark_white_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/favicon/github-mark-white.png */ "./src/img/favicon/github-mark-white.png");



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
contentDiv.appendChild(load("contact"));

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
const githubLogo = new Image();
githubLogo.src = _img_favicon_github_mark_white_png__WEBPACK_IMPORTED_MODULE_5__;
githubLogo.classList.add("ghLogo");

const footerNameHolder = document.createElement("div");
footerNameHolder.classList.add("footer_name");
footerNameHolder.textContent = "Adolfo Castro - 2023";

const footerGHHolder = document.createElement("a");
footerGHHolder.classList.add("GH");
footerGHHolder.href = "https://www.github.com/adolfo92";
footerGHHolder.textContent = "GitHub";
footerGHHolder.appendChild(githubLogo);

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
  wrapper.classList.add("contactWrapper");

  const paragraph = document.createElement("p");
  paragraph.textContent = "Website made by Adolfo Castro for The Odin project";
  paragraph.classList.add("contactP");

  const paragraph2 = document.createElement("p");
  paragraph2.textContent = "Leave me a message!";
  paragraph2.classList.add("contactP");
  paragraph2.classList.add("messageInv");

  const FORM = document.createElement("form");
  FORM.action = "";
  FORM.method = "post";
  const fname = document.createElement("input");
  fname.placeholder = "Your name";
  fname.name = "name";
  fname.type = "text";

  const fmail = document.createElement("input");
  fmail.name = "e-mail";
  fmail.type = "email";
  fmail.placeholder = "Your e-mail";

  const ftext = document.createElement("textarea");
  ftext.placeholder = "Your wonderful text";
  ftext.name = "message";
  ftext.cols = 50;
  ftext.rows = 10;

  const fbutton = document.createElement("button");
  fbutton.value = "Submit";
  fbutton.type = "submit";
  fbutton.textContent = "Submit";
  fbutton.addEventListener("click", (e) => e.preventDefault());

  FORM.appendChild(fname);
  FORM.appendChild(fmail);
  FORM.appendChild(ftext);
  FORM.appendChild(fbutton);

  wrapper.appendChild(paragraph);
  wrapper.appendChild(paragraph2);
  wrapper.appendChild(FORM);

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
/* harmony import */ var _tools_cardMaker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tools/cardMaker */ "./src/modules/tools/cardMaker.js");
// ----- Image import





// ----- Tools



const articles = {
  article1: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
};
// Funcion para agregar a las cartas las clases respectivas a sus titulos, fotos y descripciones
function bandCardInvoker(Title, Text, PhotoSRC) {
  return (0,_tools_cardMaker__WEBPACK_IMPORTED_MODULE_5__["default"])(
    Title,
    "bandTitle",
    Text,
    "bandText",
    PhotoSRC,
    "bandImage",
    "bandCard"
  );
}

function content() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  wrapper.classList.add("bandsWrapper");
  wrapper.appendChild(
    bandCardInvoker("Christian Death", articles.article1.text, _img_bands_christianDeath_webp__WEBPACK_IMPORTED_MODULE_0__)
  );
  wrapper.appendChild(
    bandCardInvoker("45Grave", articles.article1.text, _img_bands_45Grave_jpeg__WEBPACK_IMPORTED_MODULE_2__)
  );
  wrapper.appendChild(
    bandCardInvoker("Alien Sex Fiend", articles.article1.text, _img_bands_alienSexFiend_jpg__WEBPACK_IMPORTED_MODULE_1__)
  );
  wrapper.appendChild(
    bandCardInvoker("Eat Your Make-up", articles.article1.text, _img_bands_eatYM_JPEG__WEBPACK_IMPORTED_MODULE_3__)
  );
  wrapper.appendChild(
    bandCardInvoker("Los Carniceros del norte", articles.article1.text, _img_bands_Los_Carniceros_jpg__WEBPACK_IMPORTED_MODULE_4__)
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
/* harmony import */ var _tools_cardMaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools/cardMaker */ "./src/modules/tools/cardMaker.js");



// Import tools


const article = {
  main: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};

function homeLoader() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const title = document.createElement("h1");
  title.textContent = "Welcome";
  title.classList.add("title");

  wrapper.appendChild(title);
  wrapper.appendChild(
    (0,_tools_cardMaker__WEBPACK_IMPORTED_MODULE_2__["default"])(
      null,
      null,
      article.main,
      "homeArticle",
      _img_bands_RozzWilliamsHomepage_webp__WEBPACK_IMPORTED_MODULE_1__,
      "homePhoto",
      "description"
    )
  );

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

function cardMaker(
  cardTitle,
  cardTitleID,
  cardText,
  cardTextID,
  cardImageSrc,
  cardImageID,
  cardType
) {
  const description = document.createElement("div");
  description.classList.add(cardType);
  description.classList.add("card");

  if (cardTitle) {
    const title = document.createElement("h2");
    title.textContent = cardTitle;
    title.classList.add(cardTitleID);
    description.appendChild(title);
  }

  const cardArticle = (0,_articleWriter__WEBPACK_IMPORTED_MODULE_0__["default"])(cardText, cardTextID);

  const cardImage = new Image();
  cardImage.src = cardImageSrc;
  cardImage.classList.add(cardImageID);

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

/***/ "./src/img/favicon/github-mark-white.png":
/*!***********************************************!*\
  !*** ./src/img/favicon/github-mark-white.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "github-mark-white.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLGtJQUE4QztBQUMxRiw0Q0FBNEMsa0lBQThDO0FBQzFGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDhGQUE4RixNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0s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WDtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsMkJBQTJCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEMwQztBQUMzQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQiwwREFBVzs7QUFFakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLW1hbmlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20tbWFuaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLW1hbmlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS1tYW5pcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLW1hbmlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS1tYW5pcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS1tYW5pcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20tbWFuaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20tbWFuaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20tbWFuaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS1tYW5pcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLW1hbmlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLW1hbmlwLy4vc3JjL21vZHVsZXMvY29uc29sZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS1tYW5pcC8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20tbWFuaXAvLi9zcmMvbW9kdWxlcy9jb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLW1hbmlwLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS1tYW5pcC8uL3NyYy9tb2R1bGVzL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS1tYW5pcC8uL3NyYy9tb2R1bGVzL3Rvb2xzL2FydGljbGVXcml0ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20tbWFuaXAvLi9zcmMvbW9kdWxlcy90b29scy9jYXJkTWFrZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3dob19hc2tzX3NhdGFuLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL21lbHRlZF9tb25zdGVyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Db2xvciBQYWxsZXRlKi9cbjpyb290IHtcbiAgLS1ibGFja0NvbG9yOiAjMmMyYzJjO1xuICAtLWJsYWNrZXI6ICMxZjFmMWY7XG4gIC0tYm9uZVdoaXRlOiAjZmFmNmYxO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tR2xvYmFsIHN0dWZmICovXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuYm9keSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrQ29sb3IpO1xuICBjb2xvcjogdmFyKC0tYm9uZVdoaXRlKTtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRm9udHMqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImhvcnJvckZvbnRcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJtZWx0ZWQtbW9uc3RlclwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUNvbnRlbnQgem9uZSovXG4jY29udGVudCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU5hdmlnYXRpb24gYmFyKi9cbm5hdiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG9yZGVyOiAxO1xuICBoZWlnaHQ6IDEwdmg7XG4gIGZvbnQtZmFtaWx5OiBcImhvcnJvckZvbnRcIjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBnYXA6IDMlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFja2VyKTtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG5cbi5uYXZJdGVtIHtcbiAgbWFyZ2luOiAwcHggMTBweCAwcHggMTBweDtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjFzO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogXCJtZWx0ZWQtbW9uc3RlclwiO1xufVxuLm5hdkl0ZW06aG92ZXIge1xuICBmb250LXNpemU6IDEuMjVlbTtcbn1cblxuLmFjdGl2ZSB7XG4gIGNvbG9yOiByZ2IoMjQsIDIwNiwgMCk7XG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDAuNXB4ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xufVxuXG4ud2ViVGl0bGUge1xuICBmb250LWZhbWlseTogXCJob3Jyb3JGb250XCI7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgY29sb3I6IHZhcigtLWJvbmVXaGl0ZSk7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIC8qcGFkZGluZy1yaWdodDogMTAwcHg7Ki9cbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUZvb3RlciovXG5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvcmRlcjogMztcbiAgaGVpZ2h0OiA1dmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrZXIpO1xuICBnYXA6IGNhbGMoNTB2dyAtIDZjaCk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5mb290ZXIgPiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogcmdiKDEsIDExNCwgMjQzKTtcbn1cblxuZm9vdGVyID4gYSA+IGltZyB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS13cmFwcGVyKi9cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMTtcbiAgb3JkZXI6IDI7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1JbnRlciBtb2R1bGUgc3R1ZmYqL1xuXG4uY2FyZCB7XG4gIGZsZXg6IDE7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IG1heCg3MCUsIDQwMHB4KTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2tlcik7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbi53cml0aW5nQ2FyZCB7XG4gIG1hcmdpbjogMzBweCAxMHB4IDMwcHggMzBweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Ib21lIG1vZHVsZSovXG5cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LWZhbWlseTogXCJtZWx0ZWQtbW9uc3RlclwiO1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxLjVweCByZ2IoMCwgMCwgMCk7XG59XG5cbnAuaG9tZUFydGljbGUge1xuICBtYXgtaGVpZ2h0OiAyODVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgc2Nyb2xsYmFyLXdpZHRoOiA1cHg7XG59XG5cbi5ob21lUGhvdG8ge1xuICB3aWR0aDogbWF4KDI1JSwgMTg2cHgpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAwIDMwcHggMzBweCAwO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBmbGV4OiBub25lO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgbWluLWhlaWdodDogNDAwcHg7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLSBDb250ZW50IG1vZHVsZS0tLS0tLS0tLSovXG4uYmFuZHNXcmFwcGVyIHtcbiAgcGFkZGluZzogMCA1cHggMHB4IDVweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gIHJvdy1nYXA6IDdweDtcbiAgbWF4LXdpZHRoOiA5OXZ3O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYmFuZENhcmQ6bnRoLWNoaWxkKGV2ZW4pIHtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cbi5iYW5kQ2FyZCB7XG4gIHdpZHRoOiBtaW4oMTAwJSwgODAwcHgpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYmFuZFRpdGxlIHtcbiAgZ3JpZC1jb2x1bW46IDEvMztcbiAgZ3JpZC1yb3c6IDEvMjtcbiAgaGVpZ2h0OiAzY2g7XG4gIGZvbnQtZmFtaWx5OiBcIm1lbHRlZC1tb25zdGVyXCI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYmFuZFRleHQge1xuICBncmlkLWNvbHVtbjogMS8zO1xuICBtYXJnaW46IDVweDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG4uYmFuZEltYWdlIHtcbiAgZ3JpZC1jb2x1bW46IDMvNDtcbiAgZ3JpZC1yb3c6IDEvMztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDAgMzBweCAzMHB4IDA7XG59XG5cbi5iYW5kQ2FyZDpudGgtY2hpbGQob2RkKSB7XG4gIGdyaWQtY29sdW1uOiAxLzQ7XG59XG4uYmFuZENhcmQ6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgZ3JpZC1jb2x1bW46IDIvNTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ29udGFjdC0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5jb250YWN0V3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTVweDtcbn1cblxuLmNvbnRhY3RQIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLm1lc3NhZ2VJbnYge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbmZvcm0ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDYwJTtcbiAgZ2FwOiAxMHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzBweCAxZnIgMzBweDtcbn1cbmlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib25lV2hpdGUpO1xufVxuXG5mb3JtID4gaW5wdXRbbmFtZT1cIm5hbWVcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib25lV2hpdGUpO1xufVxuZm9ybSA+IHRleHRhcmVhIHtcbiAgZ3JpZC1jb2x1bW46IDEvMztcbiAgcmVzaXplOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib25lV2hpdGUpO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1ib25lV2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIm1lbHRlZC1tb25zdGVyXCI7XG4gIGNvbG9yOiByZ2IoMjQsIDIwNiwgMCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrZXIpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwwQ0FBMEM7QUFDMUM7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQSwwQ0FBMEM7QUFDMUM7RUFDRSxTQUFTO0VBQ1QsWUFBWTtF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RUFDaEIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQSwyREFBMkQ7O0FBRTNEO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixVQUFVO0VBQ1YsU0FBUztFQUNULDhCQUE4QjtFQUM5QixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLFlBQVk7RUFDWixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLGdDQUFnQztBQUNsQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ29sb3IgUGFsbGV0ZSovXFxuOnJvb3Qge1xcbiAgLS1ibGFja0NvbG9yOiAjMmMyYzJjO1xcbiAgLS1ibGFja2VyOiAjMWYxZjFmO1xcbiAgLS1ib25lV2hpdGU6ICNmYWY2ZjE7XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1HbG9iYWwgc3R1ZmYgKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuYm9keSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2tDb2xvcik7XFxuICBjb2xvcjogdmFyKC0tYm9uZVdoaXRlKTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUZvbnRzKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiaG9ycm9yRm9udFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvd2hvX2Fza3Nfc2F0YW4udHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibWVsdGVkLW1vbnN0ZXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL21lbHRlZF9tb25zdGVyLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUNvbnRlbnQgem9uZSovXFxuI2NvbnRlbnQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1OYXZpZ2F0aW9uIGJhciovXFxubmF2IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBvcmRlcjogMTtcXG4gIGhlaWdodDogMTB2aDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiaG9ycm9yRm9udFxcXCI7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBnYXA6IDMlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2tlcik7XFxuICBtYXJnaW4tcmlnaHQ6IDNweDtcXG59XFxuXFxuLm5hdkl0ZW0ge1xcbiAgbWFyZ2luOiAwcHggMTBweCAwcHggMTBweDtcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4xcztcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIm1lbHRlZC1tb25zdGVyXFxcIjtcXG59XFxuLm5hdkl0ZW06aG92ZXIge1xcbiAgZm9udC1zaXplOiAxLjI1ZW07XFxufVxcblxcbi5hY3RpdmUge1xcbiAgY29sb3I6IHJnYigyNCwgMjA2LCAwKTtcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDAuNXB4ICMwMDAwMDA7XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG59XFxuXFxuLndlYlRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiaG9ycm9yRm9udFxcXCI7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBjb2xvcjogdmFyKC0tYm9uZVdoaXRlKTtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgLypwYWRkaW5nLXJpZ2h0OiAxMDBweDsqL1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRm9vdGVyKi9cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG9yZGVyOiAzO1xcbiAgaGVpZ2h0OiA1dmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFja2VyKTtcXG4gIGdhcDogY2FsYyg1MHZ3IC0gNmNoKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG5mb290ZXIgPiBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiByZ2IoMSwgMTE0LCAyNDMpO1xcbn1cXG5cXG5mb290ZXIgPiBhID4gaW1nIHtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDJweDtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXdyYXBwZXIqL1xcbi53cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG4gIG9yZGVyOiAyO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tSW50ZXIgbW9kdWxlIHN0dWZmKi9cXG5cXG4uY2FyZCB7XFxuICBmbGV4OiAxO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IG1heCg3MCUsIDQwMHB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrZXIpO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICBoZWlnaHQ6IDMwMHB4O1xcbn1cXG5cXG4ud3JpdGluZ0NhcmQge1xcbiAgbWFyZ2luOiAzMHB4IDEwcHggMzBweCAzMHB4O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Ib21lIG1vZHVsZSovXFxuXFxuLnRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBmb250LWZhbWlseTogXFxcIm1lbHRlZC1tb25zdGVyXFxcIjtcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxLjVweCByZ2IoMCwgMCwgMCk7XFxufVxcblxcbnAuaG9tZUFydGljbGUge1xcbiAgbWF4LWhlaWdodDogMjg1cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiA1cHg7XFxufVxcblxcbi5ob21lUGhvdG8ge1xcbiAgd2lkdGg6IG1heCgyNSUsIDE4NnB4KTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogMCAzMHB4IDMwcHggMDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gIGZsZXg6IG5vbmU7XFxuICBtYXgtaGVpZ2h0OiA1MDBweDtcXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0gQ29udGVudCBtb2R1bGUtLS0tLS0tLS0qL1xcbi5iYW5kc1dyYXBwZXIge1xcbiAgcGFkZGluZzogMCA1cHggMHB4IDVweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gIHJvdy1nYXA6IDdweDtcXG4gIG1heC13aWR0aDogOTl2dztcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uYmFuZENhcmQ6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4uYmFuZENhcmQge1xcbiAgd2lkdGg6IG1pbigxMDAlLCA4MDBweCk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5iYW5kVGl0bGUge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBoZWlnaHQ6IDNjaDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibWVsdGVkLW1vbnN0ZXJcXFwiO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmJhbmRUZXh0IHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBtYXJnaW46IDVweDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG4uYmFuZEltYWdlIHtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxuICBncmlkLXJvdzogMS8zO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMzBweCAzMHB4IDA7XFxufVxcblxcbi5iYW5kQ2FyZDpudGgtY2hpbGQob2RkKSB7XFxuICBncmlkLWNvbHVtbjogMS80O1xcbn1cXG4uYmFuZENhcmQ6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIGdyaWQtY29sdW1uOiAyLzU7XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUNvbnRhY3QtLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi5jb250YWN0V3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuLmNvbnRhY3RQIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG59XFxuXFxuLm1lc3NhZ2VJbnYge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuZm9ybSB7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogNjAlO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4IDFmciAzMHB4O1xcbn1cXG5pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib25lV2hpdGUpO1xcbn1cXG5cXG5mb3JtID4gaW5wdXRbbmFtZT1cXFwibmFtZVxcXCJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvbmVXaGl0ZSk7XFxufVxcbmZvcm0gPiB0ZXh0YXJlYSB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgcmVzaXplOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9uZVdoaXRlKTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0tYm9uZVdoaXRlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LWZhbWlseTogXFxcIm1lbHRlZC1tb25zdGVyXFxcIjtcXG4gIGNvbG9yOiByZ2IoMjQsIDIwNiwgMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFja2VyKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcGFnZUxvYWRlciBmcm9tIFwiLi9tb2R1bGVzL3BhZ2UtbG9hZC5qc1wiO1xuaW1wb3J0IGNvbnNvbGVCYW5uZXIgZnJvbSBcIi4vbW9kdWxlcy9jb25zb2xlLmpzXCI7XG5cbi8vIC0tLS0tLS0tLSBBc3NldHMgaW1wb3J0aW5nIC0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgXCIuL2ltZy9mYXZpY29uL211cmNpZWxhZ28ucG5nXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vZm9udHMvd2hvX2Fza3Nfc2F0YW4udHRmXCI7XG5pbXBvcnQgZ2l0aHViIGZyb20gXCIuL2ltZy9mYXZpY29uL2dpdGh1Yi1tYXJrLXdoaXRlLnBuZ1wiO1xuXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5jb25zdCBsb2FkID0gcGFnZUxvYWRlcjtcblxuLy8gTmF2YmFyIG1ha2VyXG5jb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuXG5jb25zdCB3ZWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbndlYlRpdGxlLnRleHRDb250ZW50ID0gXCJEZWF0aHJvY2sgZGlhcmllc1wiO1xud2ViVGl0bGUuY2xhc3NMaXN0LmFkZChcIndlYlRpdGxlXCIpO1xubmF2QmFyLmFwcGVuZENoaWxkKHdlYlRpdGxlKTtcblxuY29uc3QgbmF2YmFySXRlbXMgPSBbXCJob21lXCIsIFwiY29udGVudFwiLCBcImNvbnRhY3RcIl07XG5mb3IgKGxldCBpID0gMDsgaSA8IG5hdmJhckl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gIGNvbnN0IG5hdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXZJdGVtLmNsYXNzTGlzdC5hZGQobmF2YmFySXRlbXNbaV0pO1xuICBuYXZJdGVtLmNsYXNzTGlzdC5hZGQoXCJuYXZJdGVtXCIpO1xuICBuYXZJdGVtLnRleHRDb250ZW50ID1cbiAgICBuYXZiYXJJdGVtc1tpXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hdmJhckl0ZW1zW2ldLnNsaWNlKDEpO1xuICBuYXZCYXIuYXBwZW5kQ2hpbGQobmF2SXRlbSk7XG59XG5cbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobmF2QmFyKTtcblxuLy8gTG9hZCBpbmRleCBwYWdlIGNvbnRlbnRcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobG9hZChcImNvbnRhY3RcIikpO1xuXG4vLyBuYXZiYXIgRXZlbnQgTGlzdGVuZXJzXG5jb25zdCBhbGxOYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2SXRlbVwiKTtcblxuYWxsTmF2SXRlbXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gIGNvbnN0IHBhZ2V0b0xvYWQgPSBrZXkuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKVswXTtcbiAga2V5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBsb2FkX290aGVyX3BhZ2UocGFnZXRvTG9hZCkpO1xufSk7XG5cbi8vIE90aGVyIHBhZ2VzIGxvYWRlclxuZnVuY3Rpb24gbG9hZF9vdGhlcl9wYWdlKHBhZ2UpIHtcbiAgY29udGVudERpdi5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIikpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGxvYWQocGFnZSkpO1xufVxuXG4vLyBGb290ZXIgbWFrZXJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG5jb25zdCBnaXRodWJMb2dvID0gbmV3IEltYWdlKCk7XG5naXRodWJMb2dvLnNyYyA9IGdpdGh1YjtcbmdpdGh1YkxvZ28uY2xhc3NMaXN0LmFkZChcImdoTG9nb1wiKTtcblxuY29uc3QgZm9vdGVyTmFtZUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5mb290ZXJOYW1lSG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJfbmFtZVwiKTtcbmZvb3Rlck5hbWVIb2xkZXIudGV4dENvbnRlbnQgPSBcIkFkb2xmbyBDYXN0cm8gLSAyMDIzXCI7XG5cbmNvbnN0IGZvb3RlckdISG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5mb290ZXJHSEhvbGRlci5jbGFzc0xpc3QuYWRkKFwiR0hcIik7XG5mb290ZXJHSEhvbGRlci5ocmVmID0gXCJodHRwczovL3d3dy5naXRodWIuY29tL2Fkb2xmbzkyXCI7XG5mb290ZXJHSEhvbGRlci50ZXh0Q29udGVudCA9IFwiR2l0SHViXCI7XG5mb290ZXJHSEhvbGRlci5hcHBlbmRDaGlsZChnaXRodWJMb2dvKTtcblxuZm9vdGVyLmFwcGVuZENoaWxkKGZvb3Rlck5hbWVIb2xkZXIpO1xuZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckdISG9sZGVyKTtcblxuY29udGVudERpdi5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG5jb25zb2xlQmFubmVyKCk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25zb2xlQmFubmVyKCkge1xuICByZXR1cm4gY29uc29sZS5sb2coXG4gICAgXCJcXG4gICAgICAgICAgLS0tLS0tTWFkZSB3aXRoIFxcdTI2NjUgYnktLS0tLS1cIiArXG4gICAgICBcIlxcbiAgICAgICAgICAgICBfICAgICAgIF8gIF9fICAgICAgIF9fXyBfX19fICBcXG4gICAgX18gXyAgX198IHwgX19fIHwgfC8gX3wgX19fIC8gXyBcXFxcX19fIFxcXFwgXFxuICAgLyBfYCB8LyBfYCB8LyBfIFxcXFx8IHwgfF8gLyBfIFxcXFwgKF8pIHxfXykgfFxcbiAgfCAoX3wgfCAoX3wgfCAoXykgfCB8ICBffCAoXykgXFxcXF9fLCAvIF9fLyBcXG4gICBcXFxcX18sX3xcXFxcX18sX3xcXFxcX19fL3xffF98ICBcXFxcX19fLyAgL18vX19fX198XFxuXCIgK1xuICAgICAgXCJcXG4gICAgICAgIC0tLS0tLWdpdGh1Yi5jb20vYWRvbGZvOTItLS0tLS1cIlxuICApO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdCgpIHtcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIndyYXBwZXJcIik7XG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RXcmFwcGVyXCIpO1xuXG4gIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBcIldlYnNpdGUgbWFkZSBieSBBZG9sZm8gQ2FzdHJvIGZvciBUaGUgT2RpbiBwcm9qZWN0XCI7XG4gIHBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFBcIik7XG5cbiAgY29uc3QgcGFyYWdyYXBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwYXJhZ3JhcGgyLnRleHRDb250ZW50ID0gXCJMZWF2ZSBtZSBhIG1lc3NhZ2UhXCI7XG4gIHBhcmFncmFwaDIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RQXCIpO1xuICBwYXJhZ3JhcGgyLmNsYXNzTGlzdC5hZGQoXCJtZXNzYWdlSW52XCIpO1xuXG4gIGNvbnN0IEZPUk0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgRk9STS5hY3Rpb24gPSBcIlwiO1xuICBGT1JNLm1ldGhvZCA9IFwicG9zdFwiO1xuICBjb25zdCBmbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZm5hbWUucGxhY2Vob2xkZXIgPSBcIllvdXIgbmFtZVwiO1xuICBmbmFtZS5uYW1lID0gXCJuYW1lXCI7XG4gIGZuYW1lLnR5cGUgPSBcInRleHRcIjtcblxuICBjb25zdCBmbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZm1haWwubmFtZSA9IFwiZS1tYWlsXCI7XG4gIGZtYWlsLnR5cGUgPSBcImVtYWlsXCI7XG4gIGZtYWlsLnBsYWNlaG9sZGVyID0gXCJZb3VyIGUtbWFpbFwiO1xuXG4gIGNvbnN0IGZ0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBmdGV4dC5wbGFjZWhvbGRlciA9IFwiWW91ciB3b25kZXJmdWwgdGV4dFwiO1xuICBmdGV4dC5uYW1lID0gXCJtZXNzYWdlXCI7XG4gIGZ0ZXh0LmNvbHMgPSA1MDtcbiAgZnRleHQucm93cyA9IDEwO1xuXG4gIGNvbnN0IGZidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBmYnV0dG9uLnZhbHVlID0gXCJTdWJtaXRcIjtcbiAgZmJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgZmJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gIGZidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xuXG4gIEZPUk0uYXBwZW5kQ2hpbGQoZm5hbWUpO1xuICBGT1JNLmFwcGVuZENoaWxkKGZtYWlsKTtcbiAgRk9STS5hcHBlbmRDaGlsZChmdGV4dCk7XG4gIEZPUk0uYXBwZW5kQ2hpbGQoZmJ1dHRvbik7XG5cbiAgd3JhcHBlci5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKHBhcmFncmFwaDIpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKEZPUk0pO1xuXG4gIGNvbnNvbGUubG9nKFwiY29udGFjdCBjaGVja1wiKTtcbiAgcmV0dXJuIHdyYXBwZXI7XG59XG4iLCIvLyAtLS0tLSBJbWFnZSBpbXBvcnRcbmltcG9ydCBjaHJpc3RpYW5EZWF0aCBmcm9tIFwiLi4vaW1nL2JhbmRzL2NocmlzdGlhbkRlYXRoLndlYnBcIjtcbmltcG9ydCBhbGllblNGIGZyb20gXCIuLi9pbWcvYmFuZHMvYWxpZW5TZXhGaWVuZC5qcGdcIjtcbmltcG9ydCBncmF2ZTQ1IGZyb20gXCIuLi9pbWcvYmFuZHMvNDVHcmF2ZS5qcGVnXCI7XG5pbXBvcnQgZWF0WU0gZnJvbSBcIi4uL2ltZy9iYW5kcy9lYXRZTS5KUEVHXCI7XG5pbXBvcnQgY2FybmljIGZyb20gXCIuLi9pbWcvYmFuZHMvTG9zX0Nhcm5pY2Vyb3MuanBnXCI7XG4vLyAtLS0tLSBUb29sc1xuXG5pbXBvcnQgY2FyZE1ha2VyIGZyb20gXCIuL3Rvb2xzL2NhcmRNYWtlclwiO1xuXG5jb25zdCBhcnRpY2xlcyA9IHtcbiAgYXJ0aWNsZTE6IHtcbiAgICB0ZXh0OiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIixcbiAgfSxcbn07XG4vLyBGdW5jaW9uIHBhcmEgYWdyZWdhciBhIGxhcyBjYXJ0YXMgbGFzIGNsYXNlcyByZXNwZWN0aXZhcyBhIHN1cyB0aXR1bG9zLCBmb3RvcyB5IGRlc2NyaXBjaW9uZXNcbmZ1bmN0aW9uIGJhbmRDYXJkSW52b2tlcihUaXRsZSwgVGV4dCwgUGhvdG9TUkMpIHtcbiAgcmV0dXJuIGNhcmRNYWtlcihcbiAgICBUaXRsZSxcbiAgICBcImJhbmRUaXRsZVwiLFxuICAgIFRleHQsXG4gICAgXCJiYW5kVGV4dFwiLFxuICAgIFBob3RvU1JDLFxuICAgIFwiYmFuZEltYWdlXCIsXG4gICAgXCJiYW5kQ2FyZFwiXG4gICk7XG59XG5cbmZ1bmN0aW9uIGNvbnRlbnQoKSB7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ3cmFwcGVyXCIpO1xuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJiYW5kc1dyYXBwZXJcIik7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoXG4gICAgYmFuZENhcmRJbnZva2VyKFwiQ2hyaXN0aWFuIERlYXRoXCIsIGFydGljbGVzLmFydGljbGUxLnRleHQsIGNocmlzdGlhbkRlYXRoKVxuICApO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKFxuICAgIGJhbmRDYXJkSW52b2tlcihcIjQ1R3JhdmVcIiwgYXJ0aWNsZXMuYXJ0aWNsZTEudGV4dCwgZ3JhdmU0NSlcbiAgKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChcbiAgICBiYW5kQ2FyZEludm9rZXIoXCJBbGllbiBTZXggRmllbmRcIiwgYXJ0aWNsZXMuYXJ0aWNsZTEudGV4dCwgYWxpZW5TRilcbiAgKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChcbiAgICBiYW5kQ2FyZEludm9rZXIoXCJFYXQgWW91ciBNYWtlLXVwXCIsIGFydGljbGVzLmFydGljbGUxLnRleHQsIGVhdFlNKVxuICApO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKFxuICAgIGJhbmRDYXJkSW52b2tlcihcIkxvcyBDYXJuaWNlcm9zIGRlbCBub3J0ZVwiLCBhcnRpY2xlcy5hcnRpY2xlMS50ZXh0LCBjYXJuaWMpXG4gICk7XG5cbiAgY29uc29sZS5sb2coXCJjb250ZW50IGNoZWNrXCIpO1xuICByZXR1cm4gd3JhcHBlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudDtcbiIsImltcG9ydCB3cml0ZU1ldGhpcyBmcm9tIFwiLi90b29scy9hcnRpY2xlV3JpdGVyXCI7XG5pbXBvcnQgcm96elBob3RvIGZyb20gXCIuLi9pbWcvYmFuZHMvUm96eldpbGxpYW1zSG9tZXBhZ2Uud2VicFwiO1xuXG4vLyBJbXBvcnQgdG9vbHNcbmltcG9ydCBjYXJkTWFrZXIgZnJvbSBcIi4vdG9vbHMvY2FyZE1ha2VyXCI7XG5cbmNvbnN0IGFydGljbGUgPSB7XG4gIG1haW46IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlxcbkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LlwiLFxufTtcblxuZnVuY3Rpb24gaG9tZUxvYWRlcigpIHtcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIndyYXBwZXJcIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJXZWxjb21lXCI7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcblxuICB3cmFwcGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChcbiAgICBjYXJkTWFrZXIoXG4gICAgICBudWxsLFxuICAgICAgbnVsbCxcbiAgICAgIGFydGljbGUubWFpbixcbiAgICAgIFwiaG9tZUFydGljbGVcIixcbiAgICAgIHJvenpQaG90byxcbiAgICAgIFwiaG9tZVBob3RvXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCJcbiAgICApXG4gICk7XG5cbiAgY29uc29sZS5sb2coXCJIb21lLmpzIGNoZWNrXCIpO1xuXG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBob21lTG9hZGVyO1xuIiwiaW1wb3J0IGhvbWUgZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IGNvbnRlbnQgZnJvbSBcIi4vY29udGVudC5qc1wiO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuXG5mdW5jdGlvbiBwYWdlUmVuZGVyKHN0YXR1cykge1xuICBjb25zb2xlLmxvZyhcInBhZ2UgcmVuZGVyIGNoZWNrXCIpO1xuICBjb25zb2xlLmxvZyhzdGF0dXMpO1xuICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2SXRlbVwiKTtcbiAgbmF2SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgY29uc3QgYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7c3RhdHVzfWApO1xuICBhY3RpdmUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICBpZiAoc3RhdHVzID09PSBcImhvbWVcIikgcmV0dXJuIGhvbWUoKTtcbiAgaWYgKHN0YXR1cyA9PT0gXCJjb250ZW50XCIpIHJldHVybiBjb250ZW50KCk7XG4gIGlmIChzdGF0dXMgPT09IFwiY29udGFjdFwiKSByZXR1cm4gY29udGFjdCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlUmVuZGVyO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd3JpdGVNZXRoaXModGV4dCwgaWRlbnRpZmljYXRpb24pIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ3cml0aW5nQ2FyZFwiKTtcblxuICBpZiAoaWRlbnRpZmljYXRpb24pIHtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChpZGVudGlmaWNhdGlvbik7XG4gIH1cblxuICBmdW5jdGlvbiBERVRFQ1RfTElORV9CUkVBS1Moc29tZVRleHQpIHtcbiAgICAvLyBCdXNjYSBcXG4geSBtZSBzZXBhcmFzIGVsIHRleHRvIGVuIHVuIGFycmF5IGRlIHBhcnJhZm9zXG4gICAgbGV0IHBhcmFncmFwaEFycmF5ID0gc29tZVRleHQuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFncmFwaEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBDcmVhIGVsIHBhcnJhZm9cbiAgICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgLy8gQWdyZWdhIGxhIGNsYXNlXG4gICAgICBpZiAoaWRlbnRpZmljYXRpb24pIHtcbiAgICAgICAgcGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoaWRlbnRpZmljYXRpb24pO1xuICAgICAgfVxuICAgICAgLy8gQWdyZWdhIGFsIHBhcnJhZm8gZWwgdGV4dG8gZW4gbGEgcG9zaWNpb24gZGVsIGFycmF5IGFjdHVhbFxuICAgICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gcGFyYWdyYXBoQXJyYXlbaV07XG5cbiAgICAgIC8vTWV0ZWxlIGVsIHBhcnJhdG8gYWwgY29udGVuZWRvclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG5cbiAgICAgIC8vU2kgbm8gZXN0YW1vcyBlbiBlbCBmaW5hbCBkZWwgYXJyYXksIGludHJvZHVjZSB1biBzYWx0byBkZSBsaW5lYSBlbiBlbCBkb2N1bWVudG9cbiAgICAgIGlmIChpIDwgcGFyYWdyYXBoQXJyYXkubGVuZ3RoIC0gMSkge1xuICAgICAgICBjb25zdCBsaW5lYnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5lYnJlYWspO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIERFVEVDVF9MSU5FX0JSRUFLUyh0ZXh0KTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuIiwiaW1wb3J0IHdyaXRlTWV0aGlzIGZyb20gXCIuL2FydGljbGVXcml0ZXJcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhcmRNYWtlcihcbiAgY2FyZFRpdGxlLFxuICBjYXJkVGl0bGVJRCxcbiAgY2FyZFRleHQsXG4gIGNhcmRUZXh0SUQsXG4gIGNhcmRJbWFnZVNyYyxcbiAgY2FyZEltYWdlSUQsXG4gIGNhcmRUeXBlXG4pIHtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKGNhcmRUeXBlKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG5cbiAgaWYgKGNhcmRUaXRsZSkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gY2FyZFRpdGxlO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoY2FyZFRpdGxlSUQpO1xuICAgIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgfVxuXG4gIGNvbnN0IGNhcmRBcnRpY2xlID0gd3JpdGVNZXRoaXMoY2FyZFRleHQsIGNhcmRUZXh0SUQpO1xuXG4gIGNvbnN0IGNhcmRJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBjYXJkSW1hZ2Uuc3JjID0gY2FyZEltYWdlU3JjO1xuICBjYXJkSW1hZ2UuY2xhc3NMaXN0LmFkZChjYXJkSW1hZ2VJRCk7XG5cbiAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoY2FyZEFydGljbGUpO1xuICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChjYXJkSW1hZ2UpO1xuXG4gIHJldHVybiBkZXNjcmlwdGlvbjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==