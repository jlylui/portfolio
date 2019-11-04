webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Link */ "./components/Link.js");
var _jsxFileName = "G:\\dev\\portfolio\\components\\NavBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import Link from "next/link";

var assetPrefix = "";

var NavBar = function NavBar(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("collapse navbar-collapse"),
      navClassName = _useState[0],
      setNavClassName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("navbar-transparent"),
      navbarColor = _useState2[0],
      setNavbarColor = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isLoading = _useState3[0],
      setIsLoading = _useState3[1]; // console.log(isLoading);


  var navRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var handleNav = function handleNav() {
    if (navClassName !== "") {
      // opened navbar
      setNavClassName("");
    } else {
      // collapsed navbar
      setNavClassName("collapse navbar-collapse");
    }
  };

  var handleClickOutsideRef = function handleClickOutsideRef(ref) {
    var handleClickOutside = function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target) && navClassName === "") {
        handleNav();
      }
    };

    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
      document.addEventListener("mousedown", handleClickOutside);
      return function () {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var scroll_height = window.innerHeight * 0.2;
    console.log(scroll_height);
    setIsLoading(false);

    var updateNavbarColor = function updateNavbarColor() {
      if (document.documentElement.scrollTop > scroll_height || document.body.scrollTop > scroll_height) {
        // console.log("setNavbarColor to not transparent");
        setNavbarColor("");
      } else if (document.documentElement.scrollTop < scroll_height || document.body.scrollTop < scroll_height) {
        // console.log("setNavbarColor to transparent");
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);
    return function () {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  }, [isLoading]);

  var navMenu = __jsx("div", {
    className: navClassName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("ul", {
    className: "navbar-nav ml-auto nav-ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, props.navMenu.map(function (menu, index) {
    return __jsx("li", {
      className: "nav-item nav-li",
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: menu.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx("a", {
      href: menu.link,
      className: "nav-link",
      onClick: handleNav,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, menu.icon != "" ? __jsx("span", {
      style: {
        margin: "0 4px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
      icon: menu.icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    })) : null, menu.label)));
  })));

  handleClickOutsideRef(navRef);
  return __jsx("nav", {
    className: "navbar fixed-top navbar-expand-lg " + navbarColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("div", {
    className: "container nav-container",
    ref: navRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("div", {
    className: "navbar-translate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: props.navMenu[0].link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("a", {
    className: "navbar-brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("img", {
    src: "".concat(assetPrefix).concat(props.navMenu[0].logo),
    alt: "",
    width: "30",
    scroll_height: "30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), " ", props.navMenu[0].brand)), __jsx("button", {
    className: "navbar-toggler ".concat(navClassName === "" ? "toggled" : ""),
    type: "button",
    onClick: handleNav,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), __jsx("span", {
    className: "navbar-toggler-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), __jsx("span", {
    className: "navbar-toggler-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), __jsx("span", {
    className: "navbar-toggler-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }))), navMenu));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ })

})
//# sourceMappingURL=index.js.9abedf425ba1a08e8da9.hot-update.js.map