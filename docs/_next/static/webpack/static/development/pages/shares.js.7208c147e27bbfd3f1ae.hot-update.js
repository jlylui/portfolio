webpackHotUpdate("static\\development\\pages\\shares.js",{

/***/ "./pages/shares.js":
/*!*************************!*\
  !*** ./pages/shares.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_GraphCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/GraphCard */ "./components/GraphCard.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");



var _jsxFileName = "G:\\dev\\portfolio\\pages\\shares.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






var GetStockDataUrl = function GetStockDataUrl() {
  if (false) {} else {
    return "https://www.alphavantage.co/query";
  }
};

var Shares = function Shares(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setIsLoading(props.isLoading);
  });
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "content-page",
    hide: true,
    subtitle: "SHARE",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "page-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("h3", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("div", {
    className: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, isLoading ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("p", {
    className: "text-center text-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: "spinner",
    spin: true,
    size: "2x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }))) : props.httpRequestErrored ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "HTTP Request Error")) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, props.timeData["Meta Data"]["2. Symbol"]), __jsx("table", {
    className: "table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("th", {
    "data-field": "price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Price"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, props.quoteRequestData["Global Quote"]["05. price"])), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("th", {
    "data-field": "change",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Change"), __jsx("td", {
    className: props.quoteRequestData["Global Quote"]["09. change"] > 0 ? "text-success" : "text-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, props.quoteRequestData["Global Quote"]["09. change"], " ", "(", props.quoteRequestData["Global Quote"]["10. change percent"], ")")), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("th", {
    "data-field": "previous-close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Previous Close"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, props.quoteRequestData["Global Quote"]["08. previous close"])), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("th", {
    "data-field": "volume",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Volume"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, props.quoteRequestData["Global Quote"]["06. volume"])))), __jsx(_components_GraphCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    timeSeriesData: props.timeData["Time Series (Daily)"],
    metaData: props.timeData["Meta Data"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  })))))));
};

Shares.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var query, commonParams, res, promise;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref.query;
            console.log(query.shareCode);
            console.log(query.shareCode.replace(".html", ""));
            commonParams = {
              symbol: query.shareCode,
              apikey: "H8HG5KWNVPK38JDU"
            };
            res = {
              isLoading: true
            };
            promise = axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(GetStockDataUrl(), {
              params: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
                "function": "GLOBAL_QUOTE"
              }, commonParams)
            }).then(function (response) {
              res = {
                isLoading: false,
                quoteRequestErrored: false,
                quoteRequestStatus: response.status,
                quoteRequestStatusText: response.statusText,
                quoteRequestData: response.data
              };
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("https://www.alphavantage.co/query", {
                params: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
                  "function": "TIME_SERIES_DAILY"
                }, commonParams)
              });
            }).then(function (response) {
              res = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, res, {
                timeRequestErrored: false,
                timeRequestStatus: response.status,
                timeRequestStatusText: response.statusText,
                timeData: response.data
              });
              return res;
            })["catch"](function (error) {
              return {
                httpRequestErrored: true,
                message: error.message
              };
            });
            return _context.abrupt("return", promise);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Shares);

/***/ })

})
//# sourceMappingURL=shares.js.7208c147e27bbfd3f1ae.hot-update.js.map