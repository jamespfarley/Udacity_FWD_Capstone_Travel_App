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

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! exports provided: getDestinationData, getWeatherData, postData, mergeObjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app */ "./src/client/js/app.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDestinationData", function() { return _js_app__WEBPACK_IMPORTED_MODULE_0__["getDestinationData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return _js_app__WEBPACK_IMPORTED_MODULE_0__["postData"]; });

!(function webpackMissingModule() { var e = new Error("Cannot find module './js/weather'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
throw new Error("Cannot find module './js/weather'");
throw new Error("Cannot find module './js/weather'");
// import MAIN function from app javascript
// import { function_name } from './path/to/JS/file'






//import SCSS files

document.onreadystatechange = () => {
    if (document.readyState == 'interactive'){
        Object(_js_app__WEBPACK_IMPORTED_MODULE_0__["initSearchBtn"])();
    }
}

 



/***/ }),

/***/ "./src/client/js/app.js":
/*!******************************!*\
  !*** ./src/client/js/app.js ***!
  \******************************/
/*! exports provided: initSearchBtn, getDestinationData, postData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initSearchBtn", function() { return initSearchBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDestinationData", function() { return getDestinationData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
!(function webpackMissingModule() { var e = new Error("Cannot find module './weather'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _pixabay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pixabay */ "./src/client/js/pixabay.js");
// https://www.npmjs.com/package/node-fetch




// a window.fetch compatible API on Node.js runtime
const fetch = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");

// Function to addEventListener to SEARCH button
const initSearchBtn = () => {
    document.getElementById('search').addEventListener('click', getDestinationData);
}

/* Function called by event listener */
function getDestinationData(){

                            // !!!
                            console.log('... app.js : getDestinationData()');

                            let destination = document.getElementById('destination').value;
                            //!!!
                            console.log(`... getDestinationData() : destination = ${destination}`);

                            let departureDate = document.getElementById('departureDate').value;
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
                            .then((data) => !(function webpackMissingModule() { var e = new Error("Cannot find module './weather'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(data))
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
                                                                                    , image: data.imgUrl}))
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

                                //const request = await fetch('http://localhost:8081/destination').catch( error => { console.log(`updateUI fetch() error: ${error}`)});
                                const request = await fetch('http://localhost:8081/all').catch( error => { console.log(`updateUI fetch() error: ${error}`)});
                                const destinationImg = document.getElementById('image');

                                try{
                                    const data = await request.json();

                                    // !!!
                                    console.log('... app.js : updateUI() :: data = ' + JSON.stringify(data));

                                    document.getElementById('city').innerHTML = data.city;
                                    document.getElementById('city_lat').innerHTML = data.latitude;
                                    document.getElementById('city_lng').innerHTML = data.longitude;
                                    document.getElementById('country').innerHTML = data.country;
                                    document.getElementById('daysTilDepart').innerHTML = data.diffInDays;
                                    document.getElementById('lo_temp').innerHTML = data.lo_temp;
                                    document.getElementById('hi_temp').innerHTML = data.hi_temp;
                                    document.getElementById('forecast').innerHTML = data.forecast;

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
!(function webpackMissingModule() { var e = new Error("Cannot find module './weather'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



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

                                            return !(function webpackMissingModule() { var e = new Error("Cannot find module './weather'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(data, imgData);

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

/***/ })

/******/ });
//# sourceMappingURL=main.js.map