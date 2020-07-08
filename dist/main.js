var Client =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/base.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/base.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Oswald);"]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway);"]);
// Module
exports.push([module.i, "/* * {\n    border: 1px red solid;\n} */\n.container {\n  display: grid;\n  gap: 5px;\n  grid-template-rows: 30vh 20vh 45vh;\n  grid-template-areas: \"head\" \"srch\" \"itin\"; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/header.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/header.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../media/map_1.jpg */ "./src/client/media/map_1.jpg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".header {\n  grid-area: head;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-size: 65px;\n  font-weight: bolder;\n  color: white;\n  font-family: Oswald; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/itinerary.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/itinerary.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".itinerary {\n  grid-area: itin;\n  padding: 10px 5px;\n  background-color: lightblue;\n  font-family: Raleway; }\n\nimg {\n  height: 25vh;\n  width: 25vh; }\n\nbutton {\n  height: 5vh;\n  width: 7vw;\n  background-color: lightgrey;\n  border: 2px solid darkgrey;\n  font-family: Raleway; }\n\n.subItems {\n  display: grid;\n  gap: 5px;\n  grid-template-columns: 15vw 15vw 12vw 12vw;\n  grid-template-rows: repeat(7, 3vh) 5vh 5vh;\n  grid-template-areas: \"img dest dest dest\" \"img date date date\" \"img days days days\" \"img lat lat lat\" \"img lng lng lng\" \"img txt fore fore\" \"img tmp tmp tmp\" \"img btn btn btn btn\"; }\n\n#image {\n  grid-area: img;\n  grid-row: 1 / 8;\n  grid-column: 1; }\n\n#dest {\n  grid-area: dest;\n  grid-row: 1;\n  grid-column: 2 / 2; }\n\n#tripDate {\n  grid-area: date;\n  grid-row: 2;\n  grid-column: 2; }\n\n#daysTilDepart {\n  grid-area: days;\n  grid-row: 3;\n  grid-column: 2; }\n\n#city_lat {\n  grid-area: lat;\n  grid-row: 4;\n  grid-column: 2; }\n\n#city_lng {\n  grid-area: lng;\n  grid-row: 5;\n  grid-column: 2; }\n\n#currForecast {\n  grid-area: txt;\n  grid-row: 6;\n  grid-column: 2; }\n\n#forecast {\n  grid-area: fore;\n  grid-row: 6;\n  grid-column: 3; }\n\n#lo_temp {\n  grid-area: tmp;\n  grid-row: 7;\n  grid-column: 3; }\n\n#hi_temp {\n  grid-area: tmp;\n  grid-row: 7;\n  grid-column: 4; }\n\n#save {\n  grid-area: btn;\n  grid-row: 8;\n  grid-column: 2;\n  justify-self: end; }\n\n#delete {\n  grid-area: btn;\n  grid-row: 8;\n  grid-column: 3; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/search.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/search.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".search {\n  grid-area: srch;\n  padding: 10px 5px;\n  background-color: lightgrey; }\n\n.search .criteria {\n  font-family: Raleway;\n  display: grid;\n  gap: 10px;\n  grid-template-columns: 7vw 20.5vw;\n  grid-template-rows: repeat(3, 4vh);\n  grid-area: \"lbl input\" \"lbl input\" \"btn btn\"; }\n\n#departureDate, #destination {\n  width: 20vw; }\n\nlabel {\n  grid-template-areas: lbl;\n  width: 9vw;\n  height: 3vh;\n  text-align: left; }\n\ninput {\n  grid-template-areas: input;\n  height: 3vh;\n  font-family: Raleway; }\n\n#search {\n  grid-template-areas: btn;\n  grid-column: 2;\n  width: 10vw;\n  background-color: lightblue;\n  justify-self: end;\n  border: 2px solid darkgrey;\n  font-family: Raleway; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
exports.default = global.fetch.bind(global);

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! exports provided: getDestinationData, getWeatherData, postData, mergeObjects, saveTripData, getTripData, clearTripData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app */ "./src/client/js/app.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDestinationData", function() { return _js_app__WEBPACK_IMPORTED_MODULE_0__["getDestinationData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return _js_app__WEBPACK_IMPORTED_MODULE_0__["postData"]; });

/* harmony import */ var _js_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/weather */ "./src/client/js/weather.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWeatherData", function() { return _js_weather__WEBPACK_IMPORTED_MODULE_1__["getWeatherData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeObjects", function() { return _js_weather__WEBPACK_IMPORTED_MODULE_1__["mergeObjects"]; });

/* harmony import */ var _js_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/storage */ "./src/client/js/storage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveTripData", function() { return _js_storage__WEBPACK_IMPORTED_MODULE_2__["saveTripData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTripData", function() { return _js_storage__WEBPACK_IMPORTED_MODULE_2__["getTripData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearTripData", function() { return _js_storage__WEBPACK_IMPORTED_MODULE_2__["clearTripData"]; });

/* harmony import */ var _styles_base_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/base.scss */ "./src/client/styles/base.scss");
/* harmony import */ var _styles_base_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_base_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/header.scss */ "./src/client/styles/header.scss");
/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_header_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_search_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/search.scss */ "./src/client/styles/search.scss");
/* harmony import */ var _styles_search_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_search_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_itinerary_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/itinerary.scss */ "./src/client/styles/itinerary.scss");
/* harmony import */ var _styles_itinerary_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_itinerary_scss__WEBPACK_IMPORTED_MODULE_6__);
// import MAIN function from app javascript
// import { function_name } from './path/to/JS/file'








//import SCSS files





document.onreadystatechange = () => {
    if (document.readyState == 'interactive'){
        Object(_js_app__WEBPACK_IMPORTED_MODULE_0__["init"])();
    }
}

 



/***/ }),

/***/ "./src/client/js/app.js":
/*!******************************!*\
  !*** ./src/client/js/app.js ***!
  \******************************/
/*! exports provided: init, getDestinationData, postData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDestinationData", function() { return getDestinationData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/client/js/weather.js");
/* harmony import */ var _pixabay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pixabay */ "./src/client/js/pixabay.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/client/js/storage.js");
// https://www.npmjs.com/package/node-fetch





// a window.fetch compatible API on Node.js runtime
const fetch = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");

// Function to addEventListener to SEARCH button
const init = () => {
    document.getElementById('search').addEventListener('click', getDestinationData);
    document.getElementById('save').addEventListener('click', _storage__WEBPACK_IMPORTED_MODULE_2__["saveTripData"])
    document.getElementById('delete').addEventListener('click', _storage__WEBPACK_IMPORTED_MODULE_2__["clearTripData"])
    //document.getElementById('image').setAttribute('src', '../media/globe.jpg');
    //document.getElementById("image").addEventListener("error", () => {
    //    document.getElementById("image").setAttribute('src', '../media/globe.jpg');
    //});
}

/* Function called by event listener */
function getDestinationData(){

                            // !!!
                            console.log('... app.js : getDestinationData()');

                            let destination = document.getElementById('destination').value;
                            //!!!
                            console.log(`... getDestinationData() : destination = ${destination}`);


                            let date = document.getElementById('departureDate').value;
                            let departureDate = new Intl.DateTimeFormat('en-US', {month:"2-digit", day:"2-digit", year:"numeric"}).format(new Date(date + 'T00:00:00'));
                            let numDays = getDaysTilDeparture(departureDate);

                            // !!!
                            console.log(`... getDestinationData() : departureDate = ${departureDate}`);
                            console.log(`... getDestinationData() : numDays = ${numDays}`);


                            document.getElementById('city').innerHTML = "";
                            document.getElementById('city_lat').innerHTML = "";
                            document.getElementById('city_lng').innerHTML = "";
                            document.getElementById('country').innerHTML = "";

                            const geonamesURL = `http://api.geonames.org/searchJSON?username=${"jamespfarley"}&lang=en&maxRows=1&style=short&name_equals=${destination}`

                            getCityData(geonamesURL)
                            .then((data) => Object(_weather__WEBPACK_IMPORTED_MODULE_0__["getWeatherData"])(data))
                            .then((data) => Object(_pixabay__WEBPACK_IMPORTED_MODULE_1__["postPixabayCity"])(data))
                            .then((data) => Object(_pixabay__WEBPACK_IMPORTED_MODULE_1__["getDestinationImage"])(data))
                            .then((data) => postData('http://localhost:8081/destination', {latitude: data.geonames[0].lat
                                                                                    , longitude: data.geonames[0].lng
                                                                                    , city: data.geonames[0].name
                                                                                    , country: data.geonames[0].countryCode
                                                                                    , diffInDays: numDays
                                                                                    , lo_temp: data.data[0].low_temp
                                                                                    , hi_temp: data.data[0].high_temp
                                                                                    , forecast: data.data[0].weather.description
                                                                                    , image: data.imgUrl
                                                                                    , tripDate: departureDate}))
                            .then(() => updateUI())
                            .catch((error) => {console.error(`getDestinationData() chained promises :: error: ${error}`)});
}

// Get number of days until departure
const getDaysTilDeparture = (dateValue) => {

    const currentDate = new Date();

    let departureDate = new Date(dateValue) ;

    console.log(`Current date = ${currentDate} ... departureDate = ${departureDate}`);

    return Math.trunc((departureDate.getTime() - currentDate.getTime()) / (1000*60*60*24));
}


/* Function to GET Web API Data*/
const getCityData = async (url) => {
                                    // !!!
                                    console.log('... app.js : getCityData()');

                                    const response = await fetch(url).catch( error => { console.log(`getCityData fetch() error: ${error}`)});
                                    try{
                                        const cityData = await response.json();
                                        // !!!
                                        console.log('app.js : getCityData() :: cityData = ' + JSON.stringify(cityData));

                                        return cityData;
                                    } catch(error) {
                                        console.error(`Error in getCityData() : ${error}`);
                                    }
}


/* Function to POST data */
const postData = async (url, data) => {  

                                        // !!!
                                        console.log('... app.js : postData() :: data = ' + JSON.stringify(data));

                                        const response = await fetch(url,
                                                                    { method: 'POST',
                                                                    credentials: 'same-origin',
                                                                    headers: {'Content-type':'application/json', },
                                                                    body: JSON.stringify(data)
                                                                    }).catch( 
                                                                        error => { console.log(`postData() fetch() error: ${error}`)}
                                                                    );
                                        try{
                                            const newData = await response.json();

                                            // !!!
                                            console.log('... app.js : postData() :: newData = ' + JSON.stringify(newData));

                                            return newData;
                                        } catch(error){
                                            console.error(`Error in postData() : ${error}`);
                                        }                                   
}


/* Function to GET Project Data */
const updateUI = async () => {
                                console.log('... app.js : updateUI()');

                                const request = await fetch('http://localhost:8081/all').catch( error => { console.log(`updateUI fetch() error: ${error}`)});
                                const destinationImg = document.getElementById('image');

                                try{
                                    const data = await request.json();

                                    // !!!
                                    console.log('... app.js : updateUI() :: data = ' + JSON.stringify(data));

                                    let destination = 'Your trip to ' + data.city + ', ' +  data.country;

                                    document.getElementById('city').innerHTML = destination;
                                    document.getElementById('tripDate').innerHTML = 'on ' + data.tripDate;
                                    document.getElementById('daysTilDepart').innerHTML = 'is in ' + data.diffInDays + ' days.';
                                    document.getElementById('city_lat').innerHTML = 'Latitude : ' + data.latitude;
                                    document.getElementById('city_lng').innerHTML = 'Longitude : ' + data.longitude;
                                    document.getElementById('currForecast').innerHTML = 'Current forecast : ';
                                    document.getElementById('forecast').innerHTML = data.forecast
                                    document.getElementById('lo_temp').innerHTML = 'Low : ' + data.lo_temp;
                                    document.getElementById('hi_temp').innerHTML = 'High : ' + data.hi_temp;

                                    destinationImg.setAttribute('src', data.image);
                                } catch(error) {
                                    console.error(`Error in updateUI() : ${error}`);
                                }
}

/***/ }),

/***/ "./src/client/js/pixabay.js":
/*!**********************************!*\
  !*** ./src/client/js/pixabay.js ***!
  \**********************************/
/*! exports provided: getDestinationImage, postPixabayCity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDestinationImage", function() { return getDestinationImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postPixabayCity", function() { return postPixabayCity; });
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/client/js/weather.js");



const getDestinationImage = async (data) => {

                                        // !!!
                                        console.log('... pixabay.js : getDestinationImage() :: data.geonames[0].name = ' + JSON.stringify(data.geonames[0].name));

                                        const pixabayURL = 'http://localhost:8081/pixabay';

                                        const response = await fetch(pixabayURL).catch( error => { console.log(`updateUI fetch() error: ${error}`)});
                                        try{

                                            const imgData = {};
                                            const retData = await response.json();

                                            // !!!
                                            console.log('...  pixabay.js : getDestinationImage() :: data = ' + JSON.stringify(data));


                                            imgData['imgUrl'] = retData.hits[0].previewURL;
                                            // !!!
                                            console.log('...  pixabay.js : getDestinationImage() :: imgData = ' + JSON.stringify(imgData));

                                            return Object(_weather__WEBPACK_IMPORTED_MODULE_0__["mergeObjects"])(data, imgData);

                                        } catch(error){
                                            console.error(`Error in postData() : ${error}`);
                                        }  
}

const postPixabayCity = async (data) => {

                                        const pixabayURL = 'http://localhost:8081/pixabay';

                                        console.log('... postPixabayCity : data.geonames[0].name = ' + data.geonames[0].name);

                                        const paramObj = {};
                                        paramObj['city'] = data.geonames[0].name;

                                        const response = fetch(pixabayURL,
                                                                { method: 'POST',
                                                                  credentials: 'same-origin',
                                                                  headers: {'Content-type':'application/json', },
                                                                  body: JSON.stringify(paramObj)
                                                                }).catch( 
                                                                    error => { console.log(`postData() fetch() error: ${error}`)}
                                                                );

                                        return data;

}

/***/ }),

/***/ "./src/client/js/storage.js":
/*!**********************************!*\
  !*** ./src/client/js/storage.js ***!
  \**********************************/
/*! exports provided: saveTripData, getTripData, clearTripData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveTripData", function() { return saveTripData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTripData", function() { return getTripData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearTripData", function() { return clearTripData; });
const locStorage = localStorage;

const saveTripData = () => {

    const savedData = {};
    const idx = locStorage.length;

    const elementList = document.querySelectorAll('.output');

    for ( let i = 0; i < elementList.length; i++ ){
        if ( elementList[i].id == 'image'){
            savedData[elementList[i].id] = elementList[i].src;    
        } else {
            savedData[elementList[i].id] = elementList[i].innerText;
        }
    }

    locStorage.setItem(JSON.stringify(idx), JSON.stringify(savedData));

    for ( let j = 0; j < locStorage.length; j++ ){
        console.log(`... idx = ${j}`);
        console.log(JSON.parse(locStorage.getItem(JSON.stringify(j))));
    }
}

const getTripData = () => {

    document.getElementById('tripDate').value = locStorage.getItem('tripDate');
    document.getElementById('city').value = locStorage.getItem('city');
    document.getElementById('country').value = locStorage.getItem('country');
    document.getElementById('city_lng').value = locStorage.getItem('city_lng');
    document.getElementById('city_lat').value = locStorage.getItem('city_lat');
    document.getElementById('image').src = locStorage.getItem('image');
   
}

const clearTripData = () => {

    console.log(`locStorage count before clear = ${locStorage.length}`);

    locStorage.clear();

    console.log(`locStorage count after clear = ${locStorage.length}`);
}

/***/ }),

/***/ "./src/client/js/weather.js":
/*!**********************************!*\
  !*** ./src/client/js/weather.js ***!
  \**********************************/
/*! exports provided: getWeatherData, mergeObjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeatherData", function() { return getWeatherData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeObjects", function() { return mergeObjects; });

// Get weather data
const getWeatherData = async (data) => {

            const weatherbitBaseURL = `https://api.weatherbit.io/v2.0/forecast/daily?key=${"bbe3b278fd8c4242aacd8dc4e541820d"}&lang=en&units=I&days=1`;

            let URL = `${weatherbitBaseURL}&city=${data.geonames[0].name}&country=${data.geonames[0].countryCode}`;

            const response = await fetch(URL).catch( error => { console.log(`getWeatherData fetch() error: ${error}`)});
            try{
                const weatherData = await response.json();

                // !!!
                console.log('... weather.js : getWeatherData() :: weatherData =  ' + JSON.stringify(weatherData));

                return mergeObjects(data, weatherData);

            } catch (error) {
                console.error(`Error in getWeatherData() : ${error}`);
            }

}

function mergeObjects( object1, object2){

    console.log('... mergeObjects() :: object1 = ' + JSON.stringify(object1) + ' ... object2 = ' + JSON.stringify(object2));

    let dataObj = {   ...object1
                    , ...object2 
                };

    console.log('... mergeObjects() :: dataObj = ' + JSON.stringify(dataObj));

    return dataObj;
}

/***/ }),

/***/ "./src/client/media/map_1.jpg":
/*!************************************!*\
  !*** ./src/client/media/map_1.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0c61baeef3887616609986dcefb47461.jpg");

/***/ }),

/***/ "./src/client/styles/base.scss":
/*!*************************************!*\
  !*** ./src/client/styles/base.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/base.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/client/styles/header.scss":
/*!***************************************!*\
  !*** ./src/client/styles/header.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/header.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/client/styles/itinerary.scss":
/*!******************************************!*\
  !*** ./src/client/styles/itinerary.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./itinerary.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/itinerary.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/client/styles/search.scss":
/*!***************************************!*\
  !*** ./src/client/styles/search.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./search.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/search.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=main.js.map