webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/About.js":
/*!*****************************!*\
  !*** ./components/About.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form */ "./components/Form.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modal */ "./components/Modal.js");
var _jsxFileName = "G:\\dev\\portfolio\\components\\About.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var socialMedia = [{
  icon: ["fab", "github"],
  link: "https://www.github.com/jlylui"
}, {
  icon: ["fab", "linkedin"],
  link: "https://www.linkedin.com/in/joycelyn-lui-44302585"
}, {
  icon: ["fab", "pinterest"],
  link: "https://www.pinterest.co.uk/heyjoycelyn/"
}];
var assetPrefix = "";

var About = function About() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      contactModal = _useState[0],
      setContactModal = _useState[1];

  var handleContactModal = function handleContactModal() {
    setContactModal(!contactModal);
  };

  return __jsx("div", {
    className: "container",
    id: "about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: "profile-about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "About Me"), __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Passion driven | Focused | Team Player"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: ["far", "envelope"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), " ", __jsx("a", {
    href: "mailto:joycelyn.lui@hotmail.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "joycelyn.lui@hotmail.com"))), __jsx("div", {
    className: "row justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, socialMedia.map(function (media, index) {
    return __jsx("a", {
      href: media.link,
      target: "_blank",
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("button", {
      className: "btn btn-social btn-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
      icon: media.icon,
      size: "2x",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })));
  }))), __jsx("div", {
    className: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontWeight: "bold"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Hi, I'm Joycelyn."), __jsx("div", {
    className: "container about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "I'm a software engineer with experience in full-stack web development, CICD and automation. I love exploring new technologies, solving problems and challenges. I'm also intrigued by cutting-edge technology such as AI and bionics."), __jsx("blockquote", {
    style: {
      fontStyle: "italic"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("p", {
    className: "mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "I aspire to work on projects which deliver life-changing solutions to leave a legacy behind."))))), __jsx("div", {
    className: "container about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("div", {
    className: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("p", {
    style: {
      textTransform: "uppercase",
      fontWeight: "bold"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "What do I do in my spare time?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Coding"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Basketball"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Running"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Indoor Rock Climbing"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Hiking")))), __jsx("div", {
    id: "form",
    className: "container about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("p", {
    style: {
      fontWeight: "bold"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Feel free to leave me a message", " ", __jsx("a", {
    className: "btn btn-primary btn-link",
    style: {
      padding: "0px",
      margin: "0px"
    },
    onClick: handleContactModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "here")), __jsx("div", {
    className: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attrs: {
      show: contactModal,
      id: "email-form",
      title: "Write me a message",
      handler: handleContactModal
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

})
//# sourceMappingURL=index.js.a2a85a36d46ca1f27a2a.hot-update.js.map