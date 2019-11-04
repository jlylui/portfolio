webpackHotUpdate("static\\development\\pages\\projects.js",{

/***/ "./components/StockData.js":
/*!*********************************!*\
  !*** ./components/StockData.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search */ "./components/Search.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Link */ "./components/Link.js");
var _jsxFileName = "G:\\dev\\portfolio\\components\\StockData.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var StockData = function StockData() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      response = _useState[0],
      setResponse = _useState[1];

  var handleResponse = function handleResponse(respData) {
    if (respData.httpRequestErrored) {
      console.log(respData.message);
    } else {
      setResponse(respData);
    }
  };

  return __jsx("div", {
    className: "section container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Project Demo"), __jsx("div", {
    style: {
      padding: "10px 0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: {
      pathname: "/shares",
      query: {
        shareCode: "APX.AUS"
      }
    },
    as: "shares/APX.AUS",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("a", {
    className: "btn btn-primary btn-raised inline-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "APX"))), __jsx(_Search__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onSubmit: handleResponse,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), response ? response.data["bestMatches"] && response.data["bestMatches"].length > 0 ? __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, response.data["bestMatches"].filter(function (match) {
    return response.inputRegion !== "" ? match["4. region"] === response.inputRegion : match;
  }).map(function (result, index) {
    return __jsx("li", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: {
        pathname: "/shares",
        query: {
          shareCode: result["1. symbol"]
        }
      },
      as: "shares/".concat(result["1. symbol"]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, result["1. symbol"], " (", result["2. name"], " ", response.inputRegion !== "" ? "" : result["4. region"], ")")));
  })) : __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "No match found") : null);
};

/* harmony default export */ __webpack_exports__["default"] = (StockData);

/***/ })

})
//# sourceMappingURL=projects.js.c4fb20656a372c0e368b.hot-update.js.map