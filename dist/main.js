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

/***/ "./homework-03/homework-03.js":
/*!************************************!*\
  !*** ./homework-03/homework-03.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"numberInPower\": () => (/* binding */ numberInPower)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n// Function 1\nfunction getMaxDigit(num) {\n  return isNaN(num) || num == '' ? '' : Math.max.apply(Math, _toConsumableArray(num.split('').filter(function (item) {\n    return !isNaN(item);\n  })));\n}\n\nconsole.log('getMaxDigit() - ', getMaxDigit('5459254')); // Function 2\n\nfunction numberInPower(num, pow) {\n  // [num, pow] = [ Math.floor(num), Math.abs(Math.floor(pow) ) ];\n  // return pow === 1 ? num : num * numberInPower(num, pow - 1);\n  var summ = 1;\n\n  if (pow === 0) {\n    return 1;\n  } else if (pow < 0) {\n    for (var i = 0; i > pow; i--) {\n      summ *= num;\n      console.log(summ);\n    }\n\n    return 1 / summ;\n  } else {\n    for (var _i = 0; _i < pow; _i++) {\n      summ *= num;\n    }\n\n    return summ;\n  }\n}\nconsole.log('numberInPower() - ', numberInPower(0, 0)); // Function 3\n\nfunction setFirstLetterUpper(str) {\n  if (!str || typeof str === 'number') {\n    return '';\n  }\n\n  var strCopy = str.toLowerCase();\n  return strCopy[0].toUpperCase() + strCopy.slice(1);\n}\n\nconsole.log('setFirstLetterUpper() - ', setFirstLetterUpper('volOdymyr')); // Function 4\n\nfunction getClearSalary(salary) {\n  if (isNaN(salary)) {\n    return \"Invalid value.\";\n  }\n\n  var tax = 19.5;\n  var clearSalary = (salary - tax * salary / 100).toFixed(2);\n  return clearSalary;\n}\n\nconsole.log('getClearSalary() - ', getClearSalary('53745')); // Function 5\n\nfunction getRandomNumber(firstNum, secondNum) {\n  if (isNaN(firstNum) || isNaN(secondNum)) {\n    return \"Invalid value.\";\n  }\n\n  var _ref = [Math.min.apply(Math, arguments), Math.max.apply(Math, arguments)];\n  firstNum = _ref[0];\n  secondNum = _ref[1];\n  return Math.floor(Math.random() * (secondNum - firstNum) + firstNum);\n}\n\nconsole.log('getRandomNumber() - ', getRandomNumber(77, -16)); // Function 6\n\nfunction countLetter(_char, string) {\n  // return (!char || !string) ?\n  //  \"Empty value.\" : string.match(new RegExp(char, 'gi')).length;\n  for (var i = 0; i < string.length; i++) {\n    if (!_char || !string) {\n      return 'Empty value';\n    }\n\n    return string.match(new RegExp(_char, 'gi')).length;\n  }\n}\n\nconsole.log('countLetter() - ', countLetter('6', '648к556765656')); // Function 7\n\nfunction convertCurrency(currency) {\n  var curr = document.querySelector(\"#uah\");\n  var exchangeRate = 27;\n  return curr.checked ? \"\".concat((+currency / exchangeRate).toFixed(2), \" $\") : \"\".concat(+currency * exchangeRate, \" UAH\");\n}\n\nconsole.log('convertCurrency() - ', convertCurrency('16.477')); // Function 8\n\nfunction getRandomPassword() {\n  var quantity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;\n\n  if (isNaN(quantity) || quantity <= 0) {\n    return \"Please enter valid value\";\n  }\n\n  var password = '';\n\n  for (var i = 1; i <= quantity; i++) {\n    password += Math.floor(Math.random() * 10);\n  }\n\n  return password;\n}\n\nconsole.log('getRandomPassword() - ', getRandomPassword(5)); // Function 9\n\nfunction deleteLetters(_char2, string) {\n  return !_char2 || !string ? \"Empty value.\" : string.replaceAll(_char2, '');\n}\n\nconsole.log('deleteLetters() - ', deleteLetters('a', 'ababahalamaha')); // Function 10\n\nfunction isPalyndrom(string) {\n  return string === string.toString().split('').reverse().join('');\n}\n\nconsole.log('isPalyndrom() - ', isPalyndrom(5564455)); // Function 11\n\nfunction deleteDuplicateLetter(string) {\n  var newStr = '';\n\n  for (var i = 0; i < string.length; i++) {\n    var regExp = new RegExp(string[i], 'gi');\n\n    if (string.match(regExp).length <= 1) {\n      newStr += string[i];\n    }\n  }\n\n  return newStr;\n}\n\nconsole.log('deleteDuplicateLetter() - ', deleteDuplicateLetter(\"абабахаламага\")); // Код для стилізації та роботи сторінки.\n\nvar inp = document.querySelector('#maxNumber');\nvar span = document.querySelector('.res1');\ninp.addEventListener('input', function (e) {\n  e.preventDefault();\n  span.textContent = getMaxDigit(inp.value);\n});\nvar inp2 = document.querySelector('#numForPow');\nvar inp3 = document.querySelector('#power');\nvar span2 = document.querySelector('.res2');\ninp2.addEventListener('input', function (e) {\n  e.preventDefault();\n  span2.textContent = numberInPower(inp2.value, inp3.value);\n});\ninp3.addEventListener('input', function (e) {\n  e.preventDefault();\n  span2.textContent = numberInPower(inp2.value, inp3.value);\n});\nvar inp4 = document.querySelector('#strForUpper');\nvar span3 = document.querySelector('.res3');\ninp4.addEventListener('input', function (e) {\n  e.preventDefault();\n  span3.textContent = setFirstLetterUpper(inp4.value);\n});\nvar inps = document.querySelector('#salary');\nvar span4 = document.querySelector('.res4');\ninps.addEventListener('input', function (e) {\n  e.preventDefault();\n  span4.textContent = getClearSalary(inps.value);\n});\nvar inp6 = document.querySelector('#rundomNumber');\nvar inp7 = document.querySelector('#rundomNumber2');\nvar setRunNum = document.querySelector('.rumNum');\nvar span5 = document.querySelector('.res5');\nsetRunNum.addEventListener('click', function (e) {\n  e.preventDefault();\n  span5.textContent = getRandomNumber(inp6.value, inp7.value);\n});\nvar inp8 = document.querySelector('#letter');\nvar inp9 = document.querySelector('#string');\nvar span6 = document.querySelector('.res6');\ninp8.addEventListener('input', function (e) {\n  e.preventDefault();\n  span6.textContent = countLetter(inp8.value, inp9.value);\n});\ninp9.addEventListener('input', function (e) {\n  e.preventDefault();\n  span6.textContent = countLetter(inp8.value, inp9.value);\n});\nvar inp10 = document.querySelector('#currency');\nvar span7 = document.querySelector('.res7');\ninp10.addEventListener('input', function (e) {\n  e.preventDefault();\n  span7.textContent = convertCurrency(inp10.value);\n});\nvar inp11 = document.querySelector('#quantityNum');\nvar span8 = document.querySelector('.res8');\nvar genPass = document.querySelector('.pass');\ngenPass.addEventListener('click', function (e) {\n  e.preventDefault();\n  span8.textContent = getRandomPassword(inp11.value);\n});\nvar inp12 = document.querySelector('#letter2');\nvar inp13 = document.querySelector('#string2');\nvar span9 = document.querySelector('.res9');\ninp12.addEventListener('input', function (e) {\n  e.preventDefault();\n  span9.textContent = deleteLetters(inp12.value, inp13.value);\n});\ninp13.addEventListener('input', function (e) {\n  e.preventDefault();\n  span9.textContent = deleteLetters(inp12.value, inp13.value);\n});\nvar inp14 = document.querySelector('#palyn');\nvar span10 = document.querySelector('.res10');\ninp14.addEventListener('input', function (e) {\n  e.preventDefault();\n  span10.textContent = isPalyndrom(inp14.value);\n});\nvar inp15 = document.querySelector('#string3');\nvar span11 = document.querySelector('.res11');\ninp15.addEventListener('input', function (e) {\n  e.preventDefault();\n  span11.textContent = deleteDuplicateLetter(inp15.value);\n}); // Fun\n\nvar elem = document.querySelectorAll('.function-block');\nelem.forEach(function (item) {\n  if (item.getBoundingClientRect().top < document.documentElement.clientHeight) {\n    item.style.opacity = 1;\n  }\n});\ndocument.addEventListener('scroll', function () {\n  elem.forEach(function (item) {\n    var coor = item.getBoundingClientRect().top;\n\n    if (coor < document.documentElement.clientHeight * 0.85) {\n      item.style.opacity = 1;\n      item.style.marginTop = '20px';\n    } else if (coor > document.documentElement.clientHeight * 0.75) {\n      item.style.opacity = 0;\n      item.style.marginTop = '100px';\n    }\n  });\n});\n\n//# sourceURL=webpack://cursor-homework/./homework-03/homework-03.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.png */ \"./src/logo.png\");\n/* harmony import */ var _homework_03_homework_03__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../homework-03/homework-03 */ \"./homework-03/homework-03.js\");\n\n\n\nconsole.log((0,_homework_03_homework_03__WEBPACK_IMPORTED_MODULE_2__.numberInPower)(2, 3));\n\n//# sourceURL=webpack://cursor-homework/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/logo.png */ \"./src/logo.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    box-sizing: border-box;\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    height: 100%;\\r\\n    background: linear-gradient(45deg, #3255a0, #14db57);\\r\\n    font-family: 'Archivo Black', sans-serif;\\r\\n    font-size: 20px;\\r\\n}\\r\\n\\r\\n.container {\\r\\n    width: 80%;\\r\\n    margin: 0 auto;\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 1fr 1fr;\\r\\n}\\r\\n\\r\\n.header-card {\\r\\n    grid-column-start: 1;\\r\\n    grid-column-end: 4;\\r\\n    position: relative;\\r\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat 4%/5%;\\r\\n    background-size: auto 80%;\\r\\n}\\r\\n\\r\\n.name {\\r\\n    position: absolute;\\r\\n    right: 30px;\\r\\n    bottom: 5px;\\r\\n    color: rgb(255 79 0);\\r\\n}\\r\\n\\r\\n\\r\\n.homework-card {\\r\\n    height: 160px;\\r\\n    margin: 20px;\\r\\n    border-radius: 15px;\\r\\n    box-shadow: inset 0 0 1px #363636, 5px 5px 20px #363636;\\r\\n    color: rgb(211, 210, 210);\\r\\n    transition: box-shadow 1s, transform 1s ;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.anim {\\r\\n    visibility: hidden;\\r\\n    animation: appear 1s ease-in 1 forwards;\\r\\n\\r\\n}\\r\\n\\r\\n.anim:nth-child(2) {animation-delay: .2s;}\\r\\n.anim:nth-child(3) {animation-delay: .2s;}\\r\\n.anim:nth-child(4) {animation-delay: .2s;}\\r\\n.anim:nth-child(5) {animation-delay: .4s;}\\r\\n.anim:nth-child(6) {animation-delay: .4s;}\\r\\n.anim:nth-child(7) {animation-delay: .4s;}\\r\\n.anim:nth-child(8) {animation-delay: .6s;}\\r\\n.anim:nth-child(9) {animation-delay: .6s;}\\r\\n.anim:nth-child(10) {animation-delay: .6s;}\\r\\n.anim:nth-child(11) {animation-delay: .8s;}\\r\\n.anim:nth-child(12) {animation-delay: .8s;}\\r\\n.anim:nth-child(13) {animation-delay: .8s;}\\r\\n.anim:nth-child(14) {animation-delay: 1s;}\\r\\n.anim:nth-child(15) {animation-delay: 1s;}\\r\\n.anim:nth-child(16) {animation-delay: 1s;}\\r\\n\\r\\n/* Animation */\\r\\n@keyframes appear {\\r\\n    from {\\r\\n        /* transform: scale(3.3); */\\r\\n        opacity: 0;\\r\\n    }\\r\\n    to {\\r\\n        visibility: visible;\\r\\n        /* transform: scale(1); */\\r\\n        opacity: 1;\\r\\n    }\\r\\n}\\r\\n\\r\\n.homework-card:hover:not(.header-card) {\\r\\n    transform: scale(0.97);\\r\\n    box-shadow: inset 5px 5px 15px #363636;\\r\\n}\\r\\n\\r\\n.homework-card-header,\\r\\n.homework-card-description,\\r\\nh1 {\\r\\n    text-align: center;\\r\\n    margin: 2%;\\r\\n    margin-top: 15px;\\r\\n    text-shadow: 2px 2px 15px #333333;\\r\\n}\\r\\n\\r\\n/* .logo {\\r\\n    height: 100px;\\r\\n    position:absolute;\\r\\n    left: 3%;\\r\\n    top: calc(50% - 50px);\\r\\n} */\\r\\n\\r\\n@media (max-width: 1240px) {\\r\\n    body {\\r\\n        font-size: 18px;\\r\\n    }\\r\\n\\r\\n    .header-card {\\r\\n        grid-column-start: 1;\\r\\n        grid-column-end: 3;\\r\\n    }\\r\\n\\r\\n    .container {\\r\\n        width: 90%;\\r\\n        grid-template-columns: 1fr 1fr;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media (max-width: 780px) {\\r\\n\\r\\n    .header-card {\\r\\n        grid-column-start: 1;\\r\\n        grid-column-end: 2;\\r\\n        background-size: auto 30%;\\r\\n\\r\\n    }\\r\\n\\r\\n    .container {\\r\\n        width: 99%;\\r\\n        grid-template-columns: 1fr;\\r\\n        font-size: 15px;\\r\\n    }\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://cursor-homework/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://cursor-homework/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://cursor-homework/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://cursor-homework/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://cursor-homework/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://cursor-homework/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://cursor-homework/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://cursor-homework/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://cursor-homework/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://cursor-homework/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cefc07a0fd46e339fad5.png\";\n\n//# sourceURL=webpack://cursor-homework/./src/logo.png?");

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;