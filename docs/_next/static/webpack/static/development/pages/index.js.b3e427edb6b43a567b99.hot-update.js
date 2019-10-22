webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/About.js":
/*!*****************************!*\
  !*** ./components/About.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;


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

var About =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(About, _Component);

  function About() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, About);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(About).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(About, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "col-lg-4 text-center",
        id: "about"
      }, __jsx("img", {
        src: "".concat(assetPrefix, "/static/img/me.jpg"),
        alt: "",
        className: "img-raised rounded-circle img-fluid profile-img"
      }), __jsx("div", {
        className: "profile-name"
      }, __jsx("h2", {
        className: "profile-title title"
      }, "Joycelyn Lui"), __jsx("h6", null, "Passion driven | Focused | Team Player"), __jsx("p", null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
        icon: ["far", "envelope"]
      }), " ", __jsx("a", {
        href: "mailto:joycelyn.lui@hotmail.com"
      }, "joycelyn.lui@hotmail.com"))), __jsx("div", {
        className: "row justify-content-center"
      }, __jsx("p", null, socialMedia.map(function (media, index) {
        return __jsx("a", {
          href: media.link,
          target: "_blank",
          key: index
        }, __jsx("button", {
          className: "btn btn-social btn-link"
        }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
          icon: media.icon,
          size: "2x"
        })));
      }))), __jsx("div", {
        className: "container"
      }, __jsx("p", null, "Hi, I'm Joycelyn. I am a software engineer with experiences in full-stack web development, CICD and automation. I love exploring new technologies and is always intrigued by cutting-edge technology such as AI and human-computer interction.")));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.b3e427edb6b43a567b99.hot-update.js.map