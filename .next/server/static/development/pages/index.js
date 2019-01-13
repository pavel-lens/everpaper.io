module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/css */ "./shared/css.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/m_ax/Projects/everpaper.io/app.everpaper.io/pages/index.js";



function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  background-color: ", "\n  border: 1px solid ", ";\n  color: ", ";\n  padding: 15px 55px;\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase;\n  margin-top: 50px;\n  cursor: pointer;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: 46px;\n  font-weight: 100;\n  font-family: 'Dancing Script';\n  margin: 10px 0;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 26px;\n  font-weight: lighter;\n  margin: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-weight: 100;\n  font-size: 0.8em;\n  text-align: center;\n  padding: 10px 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 25px 50px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 100vh;\n  background-color: ", ";\n  font-family: ", ";\n  color: ", ";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Layout = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div(_templateObject(), _shared_css__WEBPACK_IMPORTED_MODULE_2__["primaryColor"], _shared_css__WEBPACK_IMPORTED_MODULE_2__["primaryFont"], _shared_css__WEBPACK_IMPORTED_MODULE_2__["primaryFontColor"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div(_templateObject2());
var Footer = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div(_templateObject3());
var H1 = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.h1(_templateObject4());
var H2 = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.h2(_templateObject5());
var Button = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div(_templateObject6(), _shared_css__WEBPACK_IMPORTED_MODULE_2__["secondaryColor"], _shared_css__WEBPACK_IMPORTED_MODULE_2__["primaryColor"], _shared_css__WEBPACK_IMPORTED_MODULE_2__["primaryColor"]);

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Layout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-2090500164",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "everPaper - own your daily journals")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(H1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "everPaper.io"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(H2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Keep your daily journals"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://typeform.com",
    target: "_blank",
    className: "jsx-2090500164",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Sign up")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2090500164",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Sign up for early access"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "everpaper.io \xA9 Build with \u2665 using IPFS in Berlin and Zurich."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2090500164",
    css: "body{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tX2F4L1Byb2plY3RzL2V2ZXJwYXBlci5pby9hcHAuZXZlcnBhcGVyLmlvL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBFdUIsQUFHa0IsU0FDQyxVQUNaIiwiZmlsZSI6Ii9Vc2Vycy9tX2F4L1Byb2plY3RzL2V2ZXJwYXBlci5pby9hcHAuZXZlcnBhcGVyLmlvL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY3NzIGZyb20gJy4uL3NoYXJlZC9jc3MnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgTGF5b3V0ID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjc3MucHJpbWFyeUNvbG9yfTtcbiAgZm9udC1mYW1pbHk6ICR7Y3NzLnByaW1hcnlGb250fTtcbiAgY29sb3I6ICR7Y3NzLnByaW1hcnlGb250Q29sb3J9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAyNXB4IDUwcHg7XG5gO1xuXG5jb25zdCBGb290ZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAwO1xuYDtcblxuY29uc3QgSDEgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogMDtcbmA7XG5cbmNvbnN0IEgyID0gc3R5bGVkLmgyYFxuICBmb250LXNpemU6IDQ2cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnO1xuICBtYXJnaW46IDEwcHggMDtcbmA7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjc3Muc2Vjb25kYXJ5Q29sb3J9XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7Y3NzLnByaW1hcnlDb2xvcn07XG4gIGNvbG9yOiAke2Nzcy5wcmltYXJ5Q29sb3J9O1xuICBwYWRkaW5nOiAxNXB4IDU1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuY29uc3QgSW5kZXggPSAoKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+ZXZlclBhcGVyIC0gb3duIHlvdXIgZGFpbHkgam91cm5hbHM8L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICA8SDE+ZXZlclBhcGVyLmlvPC9IMT5cbiAgICA8SDI+S2VlcCB5b3VyIGRhaWx5IGpvdXJuYWxzPC9IMj5cblxuICAgIDxhIGhyZWY9XCJodHRwczovL3R5cGVmb3JtLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgPEJ1dHRvbj5TaWduIHVwPC9CdXR0b24+XG4gICAgPC9hPlxuICAgIDxwPlNpZ24gdXAgZm9yIGVhcmx5IGFjY2VzczwvcD5cbiAgICB7LyogPHA+TGF1bmNoaW5nIE1hciAyMDE5PC9wPiAqL31cblxuICAgIDxGb290ZXI+XG4gICAgICBldmVycGFwZXIuaW8gJmNvcHk7IEJ1aWxkIHdpdGggJmhlYXJ0czsgdXNpbmcgSVBGUyBpbiBCZXJsaW4gYW5kIFp1cmljaC5cbiAgICA8L0Zvb3Rlcj5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgYm9keSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/m_ax/Projects/everpaper.io/app.everpaper.io/pages/index.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./shared/css.js":
/*!***********************!*\
  !*** ./shared/css.js ***!
  \***********************/
/*! exports provided: primaryColor, secondaryColor, primaryFontColor, primaryFont, secondaryFont */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryColor", function() { return primaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secondaryColor", function() { return secondaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryFontColor", function() { return primaryFontColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryFont", function() { return primaryFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secondaryFont", function() { return secondaryFont; });
var primaryColor = '#573592';
var secondaryColor = '#eee';
var primaryFontColor = '#eee'; // Fonts
// export const primaryFont = "'Source Sans Pro', sans-serif";

var primaryFont = "'Open Sans Pro', sans-serif";
var secondaryFont = 'EB Garamond';

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map