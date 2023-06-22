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
  /*
  const description = document.createElement("div");
  description.classList.add("description");
  description.classList.add("card");

  description.appendChild(writeMethis(article.main, "homeArticle"));

  const rozzWilliams = new Image();
  rozzWilliams.src = rozzPhoto;
  rozzWilliams.classList.add("homePhoto");
  description.appendChild(rozzWilliams);
*/
  wrapper.appendChild(title);
  //wrapper.appendChild(description);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLGtJQUE4QztBQUMxRiw0Q0FBNEMsa0lBQThDO0FBQzFGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDhGQUE4RixNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0s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QW1DLG9EQUFPO0FBQzFDOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDakJYO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiwyQkFBMkI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQzBDO0FBQzNCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLDBEQUFXOztBQUVqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20tbWFuaXAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS1tYW5pcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20tbWFuaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLW1hbmlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20tbWFuaXAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLW1hbmlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLW1hbmlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS1tYW5pcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS1tYW5pcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS1tYW5pcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLW1hbmlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20tbWFuaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20tbWFuaXAvLi9zcmMvbW9kdWxlcy9jb25zb2xlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLW1hbmlwLy4vc3JjL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS1tYW5pcC8uL3NyYy9tb2R1bGVzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1kb20tbWFuaXAvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLW1hbmlwLy4vc3JjL21vZHVsZXMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtZG9tLW1hbmlwLy4vc3JjL21vZHVsZXMvdG9vbHMvYXJ0aWNsZVdyaXRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWRvbS1tYW5pcC8uL3NyYy9tb2R1bGVzL3Rvb2xzL2NhcmRNYWtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvd2hvX2Fza3Nfc2F0YW4udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvbWVsdGVkX21vbnN0ZXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUNvbG9yIFBhbGxldGUqL1xuOnJvb3Qge1xuICAtLWJsYWNrQ29sb3I6ICMyYzJjMmM7XG4gIC0tYmxhY2tlcjogIzFmMWYxZjtcbiAgLS1ib25lV2hpdGU6ICNmYWY2ZjE7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1HbG9iYWwgc3R1ZmYgKi9cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5ib2R5IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2tDb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1ib25lV2hpdGUpO1xuICBtYXJnaW46IDA7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Gb250cyovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiaG9ycm9yRm9udFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIm1lbHRlZC1tb25zdGVyXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ29udGVudCB6b25lKi9cbiNjb250ZW50IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTmF2aWdhdGlvbiBiYXIqL1xubmF2IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgb3JkZXI6IDE7XG4gIGhlaWdodDogMTB2aDtcbiAgZm9udC1mYW1pbHk6IFwiaG9ycm9yRm9udFwiO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGdhcDogMyU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrZXIpO1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbn1cblxuLm5hdkl0ZW0ge1xuICBtYXJnaW46IDBweCAxMHB4IDBweCAxMHB4O1xuICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMXM7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIm1lbHRlZC1tb25zdGVyXCI7XG59XG4ubmF2SXRlbTpob3ZlciB7XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xufVxuXG4uYWN0aXZlIHtcbiAgY29sb3I6IHJnYigyNCwgMjA2LCAwKTtcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMC41cHggIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxLjI1ZW07XG59XG5cbi53ZWJUaXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcImhvcnJvckZvbnRcIjtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBjb2xvcjogdmFyKC0tYm9uZVdoaXRlKTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgLypwYWRkaW5nLXJpZ2h0OiAxMDBweDsqL1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRm9vdGVyKi9cbmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG9yZGVyOiAzO1xuICBoZWlnaHQ6IDV2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2tlcik7XG4gIGdhcDogY2FsYyg1MHZ3IC0gNmNoKTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbmZvb3RlciA+IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiByZ2IoMSwgMTE0LCAyNDMpO1xufVxuXG5mb290ZXIgPiBhID4gaW1nIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXdyYXBwZXIqL1xuLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xuICBvcmRlcjogMjtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUludGVyIG1vZHVsZSBzdHVmZiovXG5cbi5jYXJkIHtcbiAgZmxleDogMTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogbWF4KDcwJSwgNDAwcHgpO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFja2VyKTtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLndyaXRpbmdDYXJkIHtcbiAgbWFyZ2luOiAzMHB4IDEwcHggMzBweCAzMHB4O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUhvbWUgbW9kdWxlKi9cblxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIm1lbHRlZC1tb25zdGVyXCI7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDEuNXB4IHJnYigwLCAwLCAwKTtcbn1cblxucC5ob21lQXJ0aWNsZSB7XG4gIG1heC1oZWlnaHQ6IDI4NXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBzY3JvbGxiYXItd2lkdGg6IDVweDtcbn1cblxuLmhvbWVQaG90byB7XG4gIHdpZHRoOiBtYXgoMjUlLCAxODZweCk7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDAgMzBweCAzMHB4IDA7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGZsZXg6IG5vbmU7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tIENvbnRlbnQgbW9kdWxlLS0tLS0tLS0tKi9cbi5iYW5kc1dyYXBwZXIge1xuICBwYWRkaW5nOiAwIDVweCAwcHggNXB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbiAgcm93LWdhcDogN3B4O1xuICBtYXgtd2lkdGg6IDk5dnc7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5iYW5kQ2FyZDpudGgtY2hpbGQoZXZlbikge1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuLmJhbmRDYXJkIHtcbiAgd2lkdGg6IG1pbigxMDAlLCA4MDBweCk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5iYW5kVGl0bGUge1xuICBncmlkLWNvbHVtbjogMS8zO1xuICBncmlkLXJvdzogMS8yO1xuICBoZWlnaHQ6IDNjaDtcbiAgZm9udC1mYW1pbHk6IFwibWVsdGVkLW1vbnN0ZXJcIjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5iYW5kVGV4dCB7XG4gIGdyaWQtY29sdW1uOiAxLzM7XG4gIG1hcmdpbjogNXB4O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cbi5iYW5kSW1hZ2Uge1xuICBncmlkLWNvbHVtbjogMy80O1xuICBncmlkLXJvdzogMS8zO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogMCAzMHB4IDMwcHggMDtcbn1cblxuLmJhbmRDYXJkOm50aC1jaGlsZChvZGQpIHtcbiAgZ3JpZC1jb2x1bW46IDEvNDtcbn1cbi5iYW5kQ2FyZDpudGgtY2hpbGQoZXZlbikge1xuICBncmlkLWNvbHVtbjogMi81O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Db250YWN0LS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmNvbnRhY3RXcmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNXB4O1xufVxuXG4uY29udGFjdFAge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4ubWVzc2FnZUludiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuZm9ybSB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogNjAlO1xuICBnYXA6IDEwcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4IDFmciAzMHB4O1xufVxuaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvbmVXaGl0ZSk7XG59XG5cbmZvcm0gPiBpbnB1dFtuYW1lPVwibmFtZVwiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvbmVXaGl0ZSk7XG59XG5mb3JtID4gdGV4dGFyZWEge1xuICBncmlkLWNvbHVtbjogMS8zO1xuICByZXNpemU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvbmVXaGl0ZSk7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogc29saWQgM3B4IHZhcigtLWJvbmVXaGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwibWVsdGVkLW1vbnN0ZXJcIjtcbiAgY29sb3I6IHJnYigyNCwgMjA2LCAwKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2tlcik7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDBDQUEwQztBQUMxQztFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFD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Q2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLDJEQUEyRDs7QUFFM0Q7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFVBQVU7RUFDVixTQUFTO0VBQ1QsOEJBQThCO0VBQzlCLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsWUFBWTtFQUNaLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsZ0NBQWdDO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Db2xvciBQYWxsZXRlKi9cXG46cm9vdCB7XFxuICAtLWJsYWNrQ29sb3I6ICMyYzJjMmM7XFxuICAtLWJsYWNrZXI6ICMxZjFmMWY7XFxuICAtLWJvbmVXaGl0ZTogI2ZhZjZmMTtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUdsb2JhbCBzdHVmZiAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFja0NvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1ib25lV2hpdGUpO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRm9udHMqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJob3Jyb3JGb250XFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy93aG9fYXNrc19zYXRhbi50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtZWx0ZWQtbW9uc3RlclxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvbWVsdGVkX21vbnN0ZXIudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ29udGVudCB6b25lKi9cXG4jY29udGVudCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU5hdmlnYXRpb24gYmFyKi9cXG5uYXYge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIG9yZGVyOiAxO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJob3Jyb3JGb250XFxcIjtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGdhcDogMyU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFja2VyKTtcXG4gIG1hcmdpbi1yaWdodDogM3B4O1xcbn1cXG5cXG4ubmF2SXRlbSB7XFxuICBtYXJnaW46IDBweCAxMHB4IDBweCAxMHB4O1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjFzO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibWVsdGVkLW1vbnN0ZXJcXFwiO1xcbn1cXG4ubmF2SXRlbTpob3ZlciB7XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBjb2xvcjogcmdiKDI0LCAyMDYsIDApO1xcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMC41cHggIzAwMDAwMDtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbn1cXG5cXG4ud2ViVGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJob3Jyb3JGb250XFxcIjtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGNvbG9yOiB2YXIoLS1ib25lV2hpdGUpO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAvKnBhZGRpbmctcmlnaHQ6IDEwMHB4OyovXFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Gb290ZXIqL1xcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3JkZXI6IDM7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrZXIpO1xcbiAgZ2FwOiBjYWxjKDUwdncgLSA2Y2gpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbmZvb3RlciA+IGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHJnYigxLCAxMTQsIDI0Myk7XFxufVxcblxcbmZvb3RlciA+IGEgPiBpbWcge1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBtYXJnaW4tbGVmdDogMnB4O1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0td3JhcHBlciovXFxuLndyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbiAgb3JkZXI6IDI7XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1JbnRlciBtb2R1bGUgc3R1ZmYqL1xcblxcbi5jYXJkIHtcXG4gIGZsZXg6IDE7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogbWF4KDcwJSwgNDAwcHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2tlcik7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gIGhlaWdodDogMzAwcHg7XFxufVxcblxcbi53cml0aW5nQ2FyZCB7XFxuICBtYXJnaW46IDMwcHggMTBweCAzMHB4IDMwcHg7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUhvbWUgbW9kdWxlKi9cXG5cXG4udGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibWVsdGVkLW1vbnN0ZXJcXFwiO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDEuNXB4IHJnYigwLCAwLCAwKTtcXG59XFxuXFxucC5ob21lQXJ0aWNsZSB7XFxuICBtYXgtaGVpZ2h0OiAyODVweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBzY3JvbGxiYXItd2lkdGg6IDVweDtcXG59XFxuXFxuLmhvbWVQaG90byB7XFxuICB3aWR0aDogbWF4KDI1JSwgMTg2cHgpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwIDMwcHggMzBweCAwO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgZmxleDogbm9uZTtcXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgbWluLWhlaWdodDogNDAwcHg7XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLSBDb250ZW50IG1vZHVsZS0tLS0tLS0tLSovXFxuLmJhbmRzV3JhcHBlciB7XFxuICBwYWRkaW5nOiAwIDVweCAwcHggNXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgcm93LWdhcDogN3B4O1xcbiAgbWF4LXdpZHRoOiA5OXZ3O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5iYW5kQ2FyZDpudGgtY2hpbGQoZXZlbikge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5iYW5kQ2FyZCB7XFxuICB3aWR0aDogbWluKDEwMCUsIDgwMHB4KTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmJhbmRUaXRsZSB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGhlaWdodDogM2NoO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJtZWx0ZWQtbW9uc3RlclxcXCI7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uYmFuZFRleHQge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIG1hcmdpbjogNXB4O1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcbi5iYW5kSW1hZ2Uge1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIGdyaWQtcm93OiAxLzM7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogMCAzMHB4IDMwcHggMDtcXG59XFxuXFxuLmJhbmRDYXJkOm50aC1jaGlsZChvZGQpIHtcXG4gIGdyaWQtY29sdW1uOiAxLzQ7XFxufVxcbi5iYW5kQ2FyZDpudGgtY2hpbGQoZXZlbikge1xcbiAgZ3JpZC1jb2x1bW46IDIvNTtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ29udGFjdC0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLmNvbnRhY3RXcmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uY29udGFjdFAge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG5cXG4ubWVzc2FnZUludiB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiA2MCU7XFxuICBnYXA6IDEwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggMWZyIDMwcHg7XFxufVxcbmlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvbmVXaGl0ZSk7XFxufVxcblxcbmZvcm0gPiBpbnB1dFtuYW1lPVxcXCJuYW1lXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9uZVdoaXRlKTtcXG59XFxuZm9ybSA+IHRleHRhcmVhIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICByZXNpemU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib25lV2hpdGUpO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IHNvbGlkIDNweCB2YXIoLS1ib25lV2hpdGUpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwibWVsdGVkLW1vbnN0ZXJcXFwiO1xcbiAgY29sb3I6IHJnYigyNCwgMjA2LCAwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrZXIpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwYWdlTG9hZGVyIGZyb20gXCIuL21vZHVsZXMvcGFnZS1sb2FkLmpzXCI7XG5pbXBvcnQgY29uc29sZUJhbm5lciBmcm9tIFwiLi9tb2R1bGVzL2NvbnNvbGUuanNcIjtcblxuLy8gLS0tLS0tLS0tIEFzc2V0cyBpbXBvcnRpbmcgLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBcIi4vaW1nL2Zhdmljb24vbXVyY2llbGFnby5wbmdcIjtcbmltcG9ydCBcIi4vc3R5bGVzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFwiLi9mb250cy93aG9fYXNrc19zYXRhbi50dGZcIjtcbmltcG9ydCBnaXRodWIgZnJvbSBcIi4vaW1nL2Zhdmljb24vZ2l0aHViLW1hcmstd2hpdGUucG5nXCI7XG5cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbmNvbnN0IGxvYWQgPSBwYWdlTG9hZGVyO1xuXG4vLyBOYXZiYXIgbWFrZXJcbmNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5cbmNvbnN0IHdlYlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xud2ViVGl0bGUudGV4dENvbnRlbnQgPSBcIkRlYXRocm9jayBkaWFyaWVzXCI7XG53ZWJUaXRsZS5jbGFzc0xpc3QuYWRkKFwid2ViVGl0bGVcIik7XG5uYXZCYXIuYXBwZW5kQ2hpbGQod2ViVGl0bGUpO1xuXG5jb25zdCBuYXZiYXJJdGVtcyA9IFtcImhvbWVcIiwgXCJjb250ZW50XCIsIFwiY29udGFjdFwiXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgbmF2YmFySXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgY29uc3QgbmF2SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5hdkl0ZW0uY2xhc3NMaXN0LmFkZChuYXZiYXJJdGVtc1tpXSk7XG4gIG5hdkl0ZW0uY2xhc3NMaXN0LmFkZChcIm5hdkl0ZW1cIik7XG4gIG5hdkl0ZW0udGV4dENvbnRlbnQgPVxuICAgIG5hdmJhckl0ZW1zW2ldLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmF2YmFySXRlbXNbaV0uc2xpY2UoMSk7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChuYXZJdGVtKTtcbn1cblxuY29udGVudERpdi5hcHBlbmRDaGlsZChuYXZCYXIpO1xuXG4vLyBMb2FkIGluZGV4IHBhZ2UgY29udGVudFxuY29udGVudERpdi5hcHBlbmRDaGlsZChsb2FkKFwiY29udGFjdFwiKSk7XG5cbi8vIG5hdmJhciBFdmVudCBMaXN0ZW5lcnNcbmNvbnN0IGFsbE5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZJdGVtXCIpO1xuXG5hbGxOYXZJdGVtcy5mb3JFYWNoKChrZXkpID0+IHtcbiAgY29uc3QgcGFnZXRvTG9hZCA9IGtleS5jbGFzc05hbWUuc3BsaXQoXCIgXCIpWzBdO1xuICBrZXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGxvYWRfb3RoZXJfcGFnZShwYWdldG9Mb2FkKSk7XG59KTtcblxuLy8gT3RoZXIgcGFnZXMgbG9hZGVyXG5mdW5jdGlvbiBsb2FkX290aGVyX3BhZ2UocGFnZSkge1xuICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKSk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobG9hZChwYWdlKSk7XG59XG5cbi8vIEZvb3RlciBtYWtlclxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbmNvbnN0IGdpdGh1YkxvZ28gPSBuZXcgSW1hZ2UoKTtcbmdpdGh1YkxvZ28uc3JjID0gZ2l0aHViO1xuZ2l0aHViTG9nby5jbGFzc0xpc3QuYWRkKFwiZ2hMb2dvXCIpO1xuXG5jb25zdCBmb290ZXJOYW1lSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmZvb3Rlck5hbWVIb2xkZXIuY2xhc3NMaXN0LmFkZChcImZvb3Rlcl9uYW1lXCIpO1xuZm9vdGVyTmFtZUhvbGRlci50ZXh0Q29udGVudCA9IFwiQWRvbGZvIENhc3RybyAtIDIwMjNcIjtcblxuY29uc3QgZm9vdGVyR0hIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbmZvb3RlckdISG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJHSFwiKTtcbmZvb3RlckdISG9sZGVyLmhyZWYgPSBcImh0dHBzOi8vd3d3LmdpdGh1Yi5jb20vYWRvbGZvOTJcIjtcbmZvb3RlckdISG9sZGVyLnRleHRDb250ZW50ID0gXCJHaXRIdWJcIjtcbmZvb3RlckdISG9sZGVyLmFwcGVuZENoaWxkKGdpdGh1YkxvZ28pO1xuXG5mb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTmFtZUhvbGRlcik7XG5mb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyR0hIb2xkZXIpO1xuXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbmNvbnNvbGVCYW5uZXIoKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnNvbGVCYW5uZXIoKSB7XG4gIHJldHVybiBjb25zb2xlLmxvZyhcbiAgICBcIlxcbiAgICAgICAgICAtLS0tLS1NYWRlIHdpdGggXFx1MjY2NSBieS0tLS0tLVwiICtcbiAgICAgIFwiXFxuICAgICAgICAgICAgIF8gICAgICAgXyAgX18gICAgICAgX19fIF9fX18gIFxcbiAgICBfXyBfICBfX3wgfCBfX18gfCB8LyBffCBfX18gLyBfIFxcXFxfX18gXFxcXCBcXG4gICAvIF9gIHwvIF9gIHwvIF8gXFxcXHwgfCB8XyAvIF8gXFxcXCAoXykgfF9fKSB8XFxuICB8IChffCB8IChffCB8IChfKSB8IHwgIF98IChfKSBcXFxcX18sIC8gX18vIFxcbiAgIFxcXFxfXyxffFxcXFxfXyxffFxcXFxfX18vfF98X3wgIFxcXFxfX18vICAvXy9fX19fX3xcXG5cIiArXG4gICAgICBcIlxcbiAgICAgICAgLS0tLS0tZ2l0aHViLmNvbS9hZG9sZm85Mi0tLS0tLVwiXG4gICk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0KCkge1xuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwid3JhcHBlclwiKTtcbiAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFdyYXBwZXJcIik7XG5cbiAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IFwiV2Vic2l0ZSBtYWRlIGJ5IEFkb2xmbyBDYXN0cm8gZm9yIFRoZSBPZGluIHByb2plY3RcIjtcbiAgcGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0UFwiKTtcblxuICBjb25zdCBwYXJhZ3JhcGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmFncmFwaDIudGV4dENvbnRlbnQgPSBcIkxlYXZlIG1lIGEgbWVzc2FnZSFcIjtcbiAgcGFyYWdyYXBoMi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFBcIik7XG4gIHBhcmFncmFwaDIuY2xhc3NMaXN0LmFkZChcIm1lc3NhZ2VJbnZcIik7XG5cbiAgY29uc3QgRk9STSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBGT1JNLmFjdGlvbiA9IFwiXCI7XG4gIEZPUk0ubWV0aG9kID0gXCJwb3N0XCI7XG4gIGNvbnN0IGZuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBmbmFtZS5wbGFjZWhvbGRlciA9IFwiWW91ciBuYW1lXCI7XG4gIGZuYW1lLm5hbWUgPSBcIm5hbWVcIjtcbiAgZm5hbWUudHlwZSA9IFwidGV4dFwiO1xuXG4gIGNvbnN0IGZtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBmbWFpbC5uYW1lID0gXCJlLW1haWxcIjtcbiAgZm1haWwudHlwZSA9IFwiZW1haWxcIjtcbiAgZm1haWwucGxhY2Vob2xkZXIgPSBcIllvdXIgZS1tYWlsXCI7XG5cbiAgY29uc3QgZnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGZ0ZXh0LnBsYWNlaG9sZGVyID0gXCJZb3VyIHdvbmRlcmZ1bCB0ZXh0XCI7XG4gIGZ0ZXh0Lm5hbWUgPSBcIm1lc3NhZ2VcIjtcbiAgZnRleHQuY29scyA9IDUwO1xuICBmdGV4dC5yb3dzID0gMTA7XG5cbiAgY29uc3QgZmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGZidXR0b24udmFsdWUgPSBcIlN1Ym1pdFwiO1xuICBmYnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICBmYnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgZmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSk7XG5cbiAgRk9STS5hcHBlbmRDaGlsZChmbmFtZSk7XG4gIEZPUk0uYXBwZW5kQ2hpbGQoZm1haWwpO1xuICBGT1JNLmFwcGVuZENoaWxkKGZ0ZXh0KTtcbiAgRk9STS5hcHBlbmRDaGlsZChmYnV0dG9uKTtcblxuICB3cmFwcGVyLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQocGFyYWdyYXBoMik7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoRk9STSk7XG5cbiAgY29uc29sZS5sb2coXCJjb250YWN0IGNoZWNrXCIpO1xuICByZXR1cm4gd3JhcHBlcjtcbn1cbiIsIi8vIC0tLS0tIEltYWdlIGltcG9ydFxuaW1wb3J0IGNocmlzdGlhbkRlYXRoIGZyb20gXCIuLi9pbWcvYmFuZHMvY2hyaXN0aWFuRGVhdGgud2VicFwiO1xuaW1wb3J0IGFsaWVuU0YgZnJvbSBcIi4uL2ltZy9iYW5kcy9hbGllblNleEZpZW5kLmpwZ1wiO1xuaW1wb3J0IGdyYXZlNDUgZnJvbSBcIi4uL2ltZy9iYW5kcy80NUdyYXZlLmpwZWdcIjtcbmltcG9ydCBlYXRZTSBmcm9tIFwiLi4vaW1nL2JhbmRzL2VhdFlNLkpQRUdcIjtcbmltcG9ydCBjYXJuaWMgZnJvbSBcIi4uL2ltZy9iYW5kcy9Mb3NfQ2FybmljZXJvcy5qcGdcIjtcbi8vIC0tLS0tIFRvb2xzXG5cbmltcG9ydCBjYXJkTWFrZXIgZnJvbSBcIi4vdG9vbHMvY2FyZE1ha2VyXCI7XG5cbmNvbnN0IGFydGljbGVzID0ge1xuICBhcnRpY2xlMToge1xuICAgIHRleHQ6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlwiLFxuICB9LFxufTtcbi8vIEZ1bmNpb24gcGFyYSBhZ3JlZ2FyIGEgbGFzIGNhcnRhcyBsYXMgY2xhc2VzIHJlc3BlY3RpdmFzIGEgc3VzIHRpdHVsb3MsIGZvdG9zIHkgZGVzY3JpcGNpb25lc1xuZnVuY3Rpb24gYmFuZENhcmRJbnZva2VyKFRpdGxlLCBUZXh0LCBQaG90b1NSQykge1xuICByZXR1cm4gY2FyZE1ha2VyKFxuICAgIFRpdGxlLFxuICAgIFwiYmFuZFRpdGxlXCIsXG4gICAgVGV4dCxcbiAgICBcImJhbmRUZXh0XCIsXG4gICAgUGhvdG9TUkMsXG4gICAgXCJiYW5kSW1hZ2VcIixcbiAgICBcImJhbmRDYXJkXCJcbiAgKTtcbn1cblxuZnVuY3Rpb24gY29udGVudCgpIHtcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIndyYXBwZXJcIik7XG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImJhbmRzV3JhcHBlclwiKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChcbiAgICBiYW5kQ2FyZEludm9rZXIoXCJDaHJpc3RpYW4gRGVhdGhcIiwgYXJ0aWNsZXMuYXJ0aWNsZTEudGV4dCwgY2hyaXN0aWFuRGVhdGgpXG4gICk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoXG4gICAgYmFuZENhcmRJbnZva2VyKFwiNDVHcmF2ZVwiLCBhcnRpY2xlcy5hcnRpY2xlMS50ZXh0LCBncmF2ZTQ1KVxuICApO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKFxuICAgIGJhbmRDYXJkSW52b2tlcihcIkFsaWVuIFNleCBGaWVuZFwiLCBhcnRpY2xlcy5hcnRpY2xlMS50ZXh0LCBhbGllblNGKVxuICApO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKFxuICAgIGJhbmRDYXJkSW52b2tlcihcIkVhdCBZb3VyIE1ha2UtdXBcIiwgYXJ0aWNsZXMuYXJ0aWNsZTEudGV4dCwgZWF0WU0pXG4gICk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoXG4gICAgYmFuZENhcmRJbnZva2VyKFwiTG9zIENhcm5pY2Vyb3MgZGVsIG5vcnRlXCIsIGFydGljbGVzLmFydGljbGUxLnRleHQsIGNhcm5pYylcbiAgKTtcblxuICBjb25zb2xlLmxvZyhcImNvbnRlbnQgY2hlY2tcIik7XG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50O1xuIiwiaW1wb3J0IHdyaXRlTWV0aGlzIGZyb20gXCIuL3Rvb2xzL2FydGljbGVXcml0ZXJcIjtcbmltcG9ydCByb3p6UGhvdG8gZnJvbSBcIi4uL2ltZy9iYW5kcy9Sb3p6V2lsbGlhbXNIb21lcGFnZS53ZWJwXCI7XG5cbi8vIEltcG9ydCB0b29sc1xuaW1wb3J0IGNhcmRNYWtlciBmcm9tIFwiLi90b29scy9jYXJkTWFrZXJcIjtcblxuY29uc3QgYXJ0aWNsZSA9IHtcbiAgbWFpbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXFxuTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuXCIsXG59O1xuXG5mdW5jdGlvbiBob21lTG9hZGVyKCkge1xuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwid3JhcHBlclwiKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIldlbGNvbWVcIjtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAvKlxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG5cbiAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQod3JpdGVNZXRoaXMoYXJ0aWNsZS5tYWluLCBcImhvbWVBcnRpY2xlXCIpKTtcblxuICBjb25zdCByb3p6V2lsbGlhbXMgPSBuZXcgSW1hZ2UoKTtcbiAgcm96eldpbGxpYW1zLnNyYyA9IHJvenpQaG90bztcbiAgcm96eldpbGxpYW1zLmNsYXNzTGlzdC5hZGQoXCJob21lUGhvdG9cIik7XG4gIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHJvenpXaWxsaWFtcyk7XG4qL1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgLy93cmFwcGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChcbiAgICBjYXJkTWFrZXIoXG4gICAgICBudWxsLFxuICAgICAgbnVsbCxcbiAgICAgIGFydGljbGUubWFpbixcbiAgICAgIFwiaG9tZUFydGljbGVcIixcbiAgICAgIHJvenpQaG90byxcbiAgICAgIFwiaG9tZVBob3RvXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCJcbiAgICApXG4gICk7XG5cbiAgY29uc29sZS5sb2coXCJIb21lLmpzIGNoZWNrXCIpO1xuXG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBob21lTG9hZGVyO1xuIiwiaW1wb3J0IGhvbWUgZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IGNvbnRlbnQgZnJvbSBcIi4vY29udGVudC5qc1wiO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuXG5mdW5jdGlvbiBwYWdlUmVuZGVyKHN0YXR1cykge1xuICBjb25zb2xlLmxvZyhcInBhZ2UgcmVuZGVyIGNoZWNrXCIpO1xuICBjb25zb2xlLmxvZyhzdGF0dXMpO1xuICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2SXRlbVwiKTtcbiAgbmF2SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgY29uc3QgYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7c3RhdHVzfWApO1xuICBhY3RpdmUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICBpZiAoc3RhdHVzID09PSBcImhvbWVcIikgcmV0dXJuIGhvbWUoKTtcbiAgaWYgKHN0YXR1cyA9PT0gXCJjb250ZW50XCIpIHJldHVybiBjb250ZW50KCk7XG4gIGlmIChzdGF0dXMgPT09IFwiY29udGFjdFwiKSByZXR1cm4gY29udGFjdCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlUmVuZGVyO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd3JpdGVNZXRoaXModGV4dCwgaWRlbnRpZmljYXRpb24pIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ3cml0aW5nQ2FyZFwiKTtcblxuICBpZiAoaWRlbnRpZmljYXRpb24pIHtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChpZGVudGlmaWNhdGlvbik7XG4gIH1cblxuICBmdW5jdGlvbiBERVRFQ1RfTElORV9CUkVBS1Moc29tZVRleHQpIHtcbiAgICAvLyBCdXNjYSBcXG4geSBtZSBzZXBhcmFzIGVsIHRleHRvIGVuIHVuIGFycmF5IGRlIHBhcnJhZm9zXG4gICAgbGV0IHBhcmFncmFwaEFycmF5ID0gc29tZVRleHQuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFncmFwaEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBDcmVhIGVsIHBhcnJhZm9cbiAgICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgLy8gQWdyZWdhIGxhIGNsYXNlXG4gICAgICBpZiAoaWRlbnRpZmljYXRpb24pIHtcbiAgICAgICAgcGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoaWRlbnRpZmljYXRpb24pO1xuICAgICAgfVxuICAgICAgLy8gQWdyZWdhIGFsIHBhcnJhZm8gZWwgdGV4dG8gZW4gbGEgcG9zaWNpb24gZGVsIGFycmF5IGFjdHVhbFxuICAgICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gcGFyYWdyYXBoQXJyYXlbaV07XG5cbiAgICAgIC8vTWV0ZWxlIGVsIHBhcnJhdG8gYWwgY29udGVuZWRvclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG5cbiAgICAgIC8vU2kgbm8gZXN0YW1vcyBlbiBlbCBmaW5hbCBkZWwgYXJyYXksIGludHJvZHVjZSB1biBzYWx0byBkZSBsaW5lYSBlbiBlbCBkb2N1bWVudG9cbiAgICAgIGlmIChpIDwgcGFyYWdyYXBoQXJyYXkubGVuZ3RoIC0gMSkge1xuICAgICAgICBjb25zdCBsaW5lYnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5lYnJlYWspO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIERFVEVDVF9MSU5FX0JSRUFLUyh0ZXh0KTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuIiwiaW1wb3J0IHdyaXRlTWV0aGlzIGZyb20gXCIuL2FydGljbGVXcml0ZXJcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhcmRNYWtlcihcbiAgY2FyZFRpdGxlLFxuICBjYXJkVGl0bGVJRCxcbiAgY2FyZFRleHQsXG4gIGNhcmRUZXh0SUQsXG4gIGNhcmRJbWFnZVNyYyxcbiAgY2FyZEltYWdlSUQsXG4gIGNhcmRUeXBlXG4pIHtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKGNhcmRUeXBlKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG5cbiAgaWYgKGNhcmRUaXRsZSkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gY2FyZFRpdGxlO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoY2FyZFRpdGxlSUQpO1xuICAgIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgfVxuXG4gIGNvbnN0IGNhcmRBcnRpY2xlID0gd3JpdGVNZXRoaXMoY2FyZFRleHQsIGNhcmRUZXh0SUQpO1xuXG4gIGNvbnN0IGNhcmRJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBjYXJkSW1hZ2Uuc3JjID0gY2FyZEltYWdlU3JjO1xuICBjYXJkSW1hZ2UuY2xhc3NMaXN0LmFkZChjYXJkSW1hZ2VJRCk7XG5cbiAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoY2FyZEFydGljbGUpO1xuICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChjYXJkSW1hZ2UpO1xuXG4gIHJldHVybiBkZXNjcmlwdGlvbjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==