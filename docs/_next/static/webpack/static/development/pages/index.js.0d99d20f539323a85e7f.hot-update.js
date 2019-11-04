webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _static_css_material_kit_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/css/material-kit.css */ "./static/css/material-kit.css");
/* harmony import */ var _static_css_material_kit_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_css_material_kit_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/css/style.css */ "./static/css/style.css");
/* harmony import */ var _static_css_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_css_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NavBar */ "./components/NavBar.js");
var _jsxFileName = "G:\\dev\\portfolio\\components\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__["config"].autoAddCss = false;
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["fab"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faHome"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faUser"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCode"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faHistory"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faHeart"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCoffee"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faEnvelope"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSearch"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSpinner"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faLaptopCode"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faLaptopMedical"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faMicroscope"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faGraduationCap"]);
var navMenu = [{
  brand: "Joycelyn Lui",
  label: "HOME",
  link: "/",
  icon: "home",
  logo: "/static/img/jl-icon-19144-light-square.png"
}, {
  label: "About",
  link: "/#about",
  icon: "user"
}, {
  label: "Projects",
  link: "/projects",
  icon: "code"
}, {
  label: "Timeline",
  link: "/#timeline",
  icon: "history"
}];
var socialMedia = [{
  icon: ["far", "envelope"],
  link: "mailto:joycelyn.lui@hotmail.com",
  target: ""
}, {
  icon: ["fab", "github"],
  link: "https://www.github.com/jlylui",
  target: "_blank"
}, {
  icon: ["fab", "linkedin"],
  link: "https://www.linkedin.com/in/joycelyn-lui-44302585",
  target: "_blank"
}, {
  icon: ["fab", "pinterest"],
  link: "https://www.pinterest.co.uk/heyjoycelyn/",
  target: "_blank"
}];
var assetPrefix = "";

var Layout = function Layout(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Joycelyn Lui"), __jsx("link", {
    rel: "shortcut icon",
    type: "image/x-icon",
    href: "".concat(assetPrefix, "/static/img/jl-icon-19144-light-square.ico"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  })), __jsx(_NavBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    navMenu: navMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), __jsx("div", {
    className: "".concat(props.className, " page-header header-filter"),
    style: {
      backgroundImage: "url(\"".concat(assetPrefix, "/static/img/header-04.jpg\")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("div", {
    className: "".concat(props.hide ? "collapse" : "", "  container"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("div", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("img", {
    src: "".concat(assetPrefix, "/static/img/jl-icon-19144-light-square.png"),
    alt: "",
    className: "img-fluid profile-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), __jsx("h2", {
    className: "profile-title ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Joycelyn Lui"), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "Software Engineer")))), __jsx("div", {
    className: "main main-raised",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, props.children), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    navMenu: navMenu,
    socialMedia: socialMedia,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.0d99d20f539323a85e7f.hot-update.js.map