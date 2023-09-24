/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/ThemeProvider.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/theme */ "./src/styles/theme/index.js");
/* harmony import */ var _components_appbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/appbar */ "./src/components/appbar/index.js");
/* harmony import */ var _components_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/products */ "./src/components/products/index.js");
/* harmony import */ var _context_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context/ui */ "./src/context/ui/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_productdetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/productdetail */ "./src/components/productdetail/index.js");
/* harmony import */ var _components_productdetail_NoPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/productdetail/NoPage */ "./src/components/productdetail/NoPage.js");
/* harmony import */ var _styles_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/app */ "./src/styles/app/index.js");










function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    theme: _styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_app__WEBPACK_IMPORTED_MODULE_7__.AppContainer, {
    disableGutters: true,
    maxWidth: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context_ui__WEBPACK_IMPORTED_MODULE_4__.UIProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/articles",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_appbar__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_products__WEBPACK_IMPORTED_MODULE_3__["default"], {
      content: "articles"
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/about",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_appbar__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_products__WEBPACK_IMPORTED_MODULE_3__["default"], {
      content: "about"
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_appbar__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_products__WEBPACK_IMPORTED_MODULE_3__["default"], {
      content: "articles"
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/:productId/*",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_appbar__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_productdetail__WEBPACK_IMPORTED_MODULE_5__["default"], null))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "*",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_productdetail_NoPage__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/components/appbar/actions.js":
/*!******************************************!*\
  !*** ./src/components/appbar/actions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Actions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _styles_appbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/appbar */ "./src/styles/appbar/index.js");
/* harmony import */ var _context_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/ui */ "./src/context/ui/index.js");





function Actions() {
  var _useUIContext = (0,_context_ui__WEBPACK_IMPORTED_MODULE_2__.useUIContext)(),
    contentPage = _useUIContext.contentPage;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_appbar__WEBPACK_IMPORTED_MODULE_1__.ActionIconsContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_appbar__WEBPACK_IMPORTED_MODULE_1__.MyList, {
    type: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_appbar__WEBPACK_IMPORTED_MODULE_1__.ActionStyledLink, {
    to: "/articles",
    active: contentPage === "articles"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_appbar__WEBPACK_IMPORTED_MODULE_1__.MyListItemIcon, null, "Articles")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    orientation: "vertical",
    flexItem: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_appbar__WEBPACK_IMPORTED_MODULE_1__.ActionStyledLink, {
    to: "/about",
    active: contentPage === "about"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_appbar__WEBPACK_IMPORTED_MODULE_1__.MyListItemIcon, null, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    orientation: "vertical",
    flexItem: true
  })));
}

/***/ }),

/***/ "./src/components/appbar/index.js":
/*!****************************************!*\
  !*** ./src/components/appbar/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Appbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styles_appbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/appbar */ "./src/styles/appbar/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/components/appbar/actions.js");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Twitter */ "./node_modules/@material-ui/icons/Twitter.js");
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/LinkedIn */ "./node_modules/@material-ui/icons/LinkedIn.js");





function Appbar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_appbar__WEBPACK_IMPORTED_MODULE_1__.AppbarContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_appbar__WEBPACK_IMPORTED_MODULE_1__.AppbarTopContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_appbar__WEBPACK_IMPORTED_MODULE_1__.AppbarLink, {
    to: "/articles"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_appbar__WEBPACK_IMPORTED_MODULE_1__.LogoImage, {
    src: "/images/logo.png",
    alt: "semand.net logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_appbar__WEBPACK_IMPORTED_MODULE_1__.AppbarButtonContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_appbar__WEBPACK_IMPORTED_MODULE_1__.HoverIconButton, {
    href: "https://www.linkedin.com/in/semandnet/",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fontSize: "large"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_appbar__WEBPACK_IMPORTED_MODULE_1__.HoverIconButton, {
    href: "https://twitter.com/semandnet",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fontSize: "large"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_actions__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}

/***/ }),

/***/ "./src/components/productdetail/NoPage.js":
/*!************************************************!*\
  !*** ./src/components/productdetail/NoPage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styles_nopage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/nopage */ "./src/styles/nopage/index.js");


function NoPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_nopage__WEBPACK_IMPORTED_MODULE_1__.NoPageContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Oops! Page not found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_nopage__WEBPACK_IMPORTED_MODULE_1__.NoPageLink, {
    to: "/"
  }, "Return to Home"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoPage);

/***/ }),

/***/ "./src/components/productdetail/TextProduct.js":
/*!*****************************************************!*\
  !*** ./src/components/productdetail/TextProduct.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TextProduct)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Dialog/Dialog.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogTitle/DialogTitle.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogContent/DialogContent.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/theme */ "./src/styles/theme/index.js");
/* harmony import */ var _styles_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/products */ "./src/styles/products/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _context_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/ui */ "./src/context/ui/index.js");
/* harmony import */ var _sharesocial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sharesocial */ "./src/components/sharesocial/index.js");
/* harmony import */ var _styles_appbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/appbar */ "./src/styles/appbar/index.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









var renderText = function renderText(data) {
  if (!data) return null;
  return data.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
      key: item.id
    }, item.props), item.content.map(function (content, index) {
      switch (content.type) {
        case 'text':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            key: index,
            style: content.style
          }, content.value);
        case 'link':
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            key: index,
            style: content.style
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_products__WEBPACK_IMPORTED_MODULE_2__.StyledLink, {
            href: content.link
          }, content.linkContent));
        default:
          return null;
      }
    }));
  });
};
function TextProduct(_ref) {
  var productDetails = _ref.productDetails;
  var _useUIContext = (0,_context_ui__WEBPACK_IMPORTED_MODULE_3__.useUIContext)(),
    contentPage = _useUIContext.contentPage;
  var articleDetails = {
    articleUrl: 'https://musja.com',
    title: productDetails.title || 'Fallback Title',
    summary: productDetails.summary || 'Fallback summary',
    source: productDetails.source || 'Fallback source'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: true,
    fullScreen: true,
    sx: {
      zIndex: 90
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      background: _styles_theme__WEBPACK_IMPORTED_MODULE_1__.Colors.secondary,
      textAlign: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    spacing: 3
  }, contentPage !== "about" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_sharesocial__WEBPACK_IMPORTED_MODULE_4__.LinkedInShareButton, articleDetails), contentPage !== "about" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_sharesocial__WEBPACK_IMPORTED_MODULE_4__.TwitterShareButton, articleDetails), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "Back to main page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link, {
    to: "/".concat(contentPage)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_appbar__WEBPACK_IMPORTED_MODULE_5__.HoverIconButton, {
    "aria-label": "Back to main page",
    size: "large",
    sx: {
      marginLeft: "20px",
      fontSize: "1em"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_12__["default"], {
    fontSize: "inherit"
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_products__WEBPACK_IMPORTED_MODULE_2__.ProductDetailWrapper, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      maxWidth: "800px",
      alignContent: "center",
      textAlign: "center"
    }
  }, renderText(productDetails.header)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_products__WEBPACK_IMPORTED_MODULE_2__.Product, {
    sx: {
      maxWidth: "500px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_products__WEBPACK_IMPORTED_MODULE_2__.ProductImage, {
    src: productDetails.image
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      maxWidth: "800px"
    }
  }, renderText(productDetails.text)))));
}

/***/ }),

/***/ "./src/components/productdetail/index.js":
/*!***********************************************!*\
  !*** ./src/components/productdetail/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductDetail)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _TextProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextProduct */ "./src/components/productdetail/TextProduct.js");
/* harmony import */ var _NoPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NoPage */ "./src/components/productdetail/NoPage.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function ProductDetail() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)(),
    productId = _useParams.productId;
  var pattern = "^(article|about)-\\d{4}-\\d{2}-\\d{2}-\\w+(-\\w+)*$";
  var regex = new RegExp(pattern);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      header: [{
        id: "product-title",
        content: [{
          "type": "text",
          "value": "Product title"
        }]
      }]
    }),
    _useState2 = _slicedToArray(_useState, 2),
    productDetails = _useState2[0],
    setProductDetails = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var fetchProductDetails = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_4__["default"].get("./products/".concat(productId, ".json"));
            case 3:
              response = _context.sent;
              if (response.data && response.data.image && response.data.text && response.data.header) {
                setProductDetails(response.data);
              } else {
                setError(true);
              }
              _context.next = 11;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error("Error fetching product details:", _context.t0);
              setError(true);
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      }));
      return function fetchProductDetails() {
        return _ref.apply(this, arguments);
      };
    }();
    fetchProductDetails();
  }, [productId]);
  if (!regex.test(productId) || error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NoPage__WEBPACK_IMPORTED_MODULE_2__["default"], null);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TextProduct__WEBPACK_IMPORTED_MODULE_1__["default"], {
    productDetails: productDetails
  });
}

/***/ }),

/***/ "./src/components/products/SingleProduct.js":
/*!**************************************************!*\
  !*** ./src/components/products/SingleProduct.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SingleProduct)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styles_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/products */ "./src/styles/products/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");



function SingleProduct(_ref) {
  var product = _ref.product;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_products__WEBPACK_IMPORTED_MODULE_1__.Product, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: product.link
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_products__WEBPACK_IMPORTED_MODULE_1__.ProductImage, {
    src: product.image,
    alt: product.name
  })));
}

/***/ }),

/***/ "./src/components/products/index.js":
/*!******************************************!*\
  !*** ./src/components/products/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _SingleProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleProduct */ "./src/components/products/SingleProduct.js");
/* harmony import */ var _context_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/ui */ "./src/context/ui/index.js");
/* harmony import */ var _static_data_articles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/data/articles */ "./src/static/data/articles.js");
/* harmony import */ var _static_data_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/data/about */ "./src/static/data/about.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function getDataBasedOnContent(contentType) {
  if (contentType === "articles") {
    return _static_data_articles__WEBPACK_IMPORTED_MODULE_3__["default"];
  } else if (contentType === "about") {
    return _static_data_about__WEBPACK_IMPORTED_MODULE_4__["default"];
  } else {
    return [];
  }
}
function Products(_ref) {
  var content = _ref.content;
  var _useUIContext = (0,_context_ui__WEBPACK_IMPORTED_MODULE_2__.useUIContext)(),
    contentPage = _useUIContext.contentPage,
    setContentPage = _useUIContext.setContentPage;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    items = _useState2[0],
    setItems = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (content !== contentPage) {
      setContentPage(content);
    }
    setItems(getDataBasedOnContent(content));
  }, [content, contentPage, setContentPage]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    maxWidth: "100%",
    sx: {
      marginTop: "80px",
      marginBottom: "40px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    container: true,
    maxWidth: "100%",
    width: "100%",
    spacing: {
      xs: 2,
      md: 3
    },
    justifyContent: "center",
    sx: {
      margin: "20px 4px 10px 4px"
    },
    columns: {
      xs: 4,
      sm: 8,
      md: 8,
      lg: 12,
      xl: 16
    }
  }, items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      item: true,
      key: item.id,
      xs: 4,
      display: "flex",
      flexDirection: 'column',
      alignItems: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SingleProduct__WEBPACK_IMPORTED_MODULE_1__["default"], {
      product: item
    }));
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Products);

/***/ }),

/***/ "./src/components/sharesocial/index.js":
/*!*********************************************!*\
  !*** ./src/components/sharesocial/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkedInShareButton: () => (/* binding */ LinkedInShareButton),
/* harmony export */   TwitterShareButton: () => (/* binding */ TwitterShareButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styles_sharesocial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/sharesocial */ "./src/styles/sharesocial/index.js");


var _openPopup = function openPopup(url, width, height, name) {
  var left = (window.innerWidth - width) / 2;
  var top = (window.innerHeight - height) / 2;
  window.open(url, name, "status=1,width=".concat(width, ",height=").concat(height, ",top=").concat(top, ",left=").concat(left));
};
function LinkedInShareButton(_ref) {
  var articleUrl = _ref.articleUrl,
    title = _ref.title,
    summary = _ref.summary,
    source = _ref.source;
  var baseUrl = 'https://www.linkedin.com/shareArticle?mini=true';
  var shareUrl = "".concat(baseUrl, "&url=").concat(encodeURIComponent(articleUrl), "&title=").concat(encodeURIComponent(title), "&summary=").concat(encodeURIComponent(summary), "&source=").concat(encodeURIComponent(source));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_sharesocial__WEBPACK_IMPORTED_MODULE_1__.LinkedInButtonComponent, {
    openPopup: function openPopup() {
      return _openPopup(shareUrl, 600, 400, 'LinkedInShare');
    }
  });
}
function TwitterShareButton(_ref2) {
  var articleUrl = _ref2.articleUrl,
    title = _ref2.title,
    via = _ref2.via,
    hashtags = _ref2.hashtags;
  var baseUrl = 'https://twitter.com/intent/tweet';
  var shareUrl = "".concat(baseUrl, "?text=").concat(encodeURIComponent(title), "&url=").concat(encodeURIComponent(articleUrl)).concat(via ? "&via=".concat(encodeURIComponent(via)) : '').concat(hashtags ? "&hashtags=".concat(encodeURIComponent(hashtags)) : '');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_sharesocial__WEBPACK_IMPORTED_MODULE_1__.TwitterButtonComponent, {
    openPopup: function openPopup() {
      return _openPopup(shareUrl, 600, 400, 'TwitterShare');
    }
  });
}

/***/ }),

/***/ "./src/context/ui/index.js":
/*!*********************************!*\
  !*** ./src/context/ui/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UIContext: () => (/* binding */ UIContext),
/* harmony export */   UIProvider: () => (/* binding */ UIProvider),
/* harmony export */   useUIContext: () => (/* binding */ useUIContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var UIContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
var useUIContext = function useUIContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(UIContext);
};
var UIProvider = function UIProvider(_ref) {
  var children = _ref.children;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    contentPage = _useState2[0],
    setContentPage = _useState2[1];
  var value = {
    contentPage: contentPage,
    setContentPage: setContentPage
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(UIContext.Provider, {
    value: value
  }, children);
};

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/theme */ "./src/styles/theme/index.js");




document.body.style.margin = 0;
document.body.style.padding = 0;
document.body.style.width = '100%';
document.body.style.height = '100%';
document.body.style.background = _styles_theme__WEBPACK_IMPORTED_MODULE_3__.Colors.bodyBackground;
document.body.style.boxSizing = 'border-box';
var root = document.createElement('div');
root.style.width = '100%';
root.style.height = '100%';
root.style.boxSizing = 'border-box';
document.body.appendChild(root);
(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null), root);

/***/ }),

/***/ "./src/static/data/about.js":
/*!**********************************!*\
  !*** ./src/static/data/about.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var aboutData = [
  /*    {
          "id": "about-2023-08-30",
          "link": "/about-2023-08-30-first-template",
          "image": "./images/products/about-2023-08-30-first-template.png"
      }*/
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutData);

/***/ }),

/***/ "./src/static/data/articles.js":
/*!*************************************!*\
  !*** ./src/static/data/articles.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var articlesData = [
  /*    {
          "id": "article-2023-08-30",
          "link": "/article-2023-08-30-first-template",
          "image": "./images/products/article-2023-08-30-first-template.png"
      }*/
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (articlesData);

/***/ }),

/***/ "./src/styles/app/index.js":
/*!*********************************!*\
  !*** ./src/styles/app/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppContainer: () => (/* binding */ AppContainer)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme */ "./src/styles/theme/index.js");



var AppContainer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
  return {
    width: "100%",
    maxWidth: "100%",
    background: _theme__WEBPACK_IMPORTED_MODULE_0__.Colors.light_gray
  };
});

/***/ }),

/***/ "./src/styles/appbar/index.js":
/*!************************************!*\
  !*** ./src/styles/appbar/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionIconsContainer: () => (/* binding */ ActionIconsContainer),
/* harmony export */   ActionStyledLink: () => (/* binding */ ActionStyledLink),
/* harmony export */   AppbarButtonContainer: () => (/* binding */ AppbarButtonContainer),
/* harmony export */   AppbarContainer: () => (/* binding */ AppbarContainer),
/* harmony export */   AppbarLink: () => (/* binding */ AppbarLink),
/* harmony export */   AppbarTopContainer: () => (/* binding */ AppbarTopContainer),
/* harmony export */   HoverIconButton: () => (/* binding */ HoverIconButton),
/* harmony export */   LogoImage: () => (/* binding */ LogoImage),
/* harmony export */   MyList: () => (/* binding */ MyList),
/* harmony export */   MyListItemIcon: () => (/* binding */ MyListItemIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme */ "./src/styles/theme/index.js");
/* harmony import */ var _fontsource_merriweather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fontsource/merriweather */ "./node_modules/@fontsource/merriweather/index.css");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemIcon/ListItemIcon.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
var _excluded = ["active"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var AppbarContainer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
  return {
    backgroundColor: _theme__WEBPACK_IMPORTED_MODULE_1__.Colors.light_gray
  };
});

// Top
var AppbarTopContainer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2px 8px",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 10,
    backgroundColor: _theme__WEBPACK_IMPORTED_MODULE_1__.Colors.light_gray
  };
});
var LogoImage = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["default"])('img')(function () {
  return {
    marginRight: '8px',
    marginTop: '8px',
    height: '1.8em'
  };
});
var AppbarLink = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link)(function () {
  return {
    padding: "4px",
    fontSize: "2em",
    fontFamily: '"Merriweather", serif',
    color: _theme__WEBPACK_IMPORTED_MODULE_1__.Colors.primary,
    marginLeft: "1.5em",
    marginRight: "1em",
    textDecoration: 'none'
  };
});
var AppbarButtonContainer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "3em"
  };
});
var HoverIconButton = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"])(function () {
  return {
    marginRight: "0.25em",
    '&:hover': {
      color: _theme__WEBPACK_IMPORTED_MODULE_1__.Colors.primary,
      transform: 'scale(1.5)',
      transition: 'transform 0.3s'
    }
  };
});

// Bottom
var ActionIconsContainer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
  return {
    display: "flex",
    background: _theme__WEBPACK_IMPORTED_MODULE_1__.Colors.shaft,
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    minHeight: "3em",
    alignItems: "center",
    zIndex: 99,
    borderTop: "1px solid ".concat(_theme__WEBPACK_IMPORTED_MODULE_1__.Colors.border),
    padding: "0 0 0 0"
  };
});
var MyList = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"])(function (_ref) {
  var type = _ref.type;
  return {
    display: type === "row" ? "flex" : "block",
    flexGrow: 3,
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 0 0 0"
  };
});
var ActionStyledLink = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(function (_ref2) {
  var active = _ref2.active,
    props = _objectWithoutProperties(_ref2, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, props);
})(function (_ref3) {
  var active = _ref3.active;
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "3em",
    flexGrow: 1,
    textDecoration: "none",
    background: active ? _theme__WEBPACK_IMPORTED_MODULE_1__.Colors.primary : "transparent",
    '&:hover': {
      background: active ? _theme__WEBPACK_IMPORTED_MODULE_1__.Colors.primary : "transparent"
    }
  };
});
var MyListItemIcon = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
  return {
    display: "flex",
    justifyContent: "center",
    color: _theme__WEBPACK_IMPORTED_MODULE_1__.Colors.whiteSmoke,
    fontSize: "1.2em"
  };
});

/***/ }),

/***/ "./src/styles/nopage/index.js":
/*!************************************!*\
  !*** ./src/styles/nopage/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoPageContainer: () => (/* binding */ NoPageContainer),
/* harmony export */   NoPageLink: () => (/* binding */ NoPageLink)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme */ "./src/styles/theme/index.js");




var NoPageContainer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
  return {
    textAlign: 'center',
    marginTop: 50,
    padding: 20,
    border: '1px solid #ddd',
    borderRadius: 8,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: _theme__WEBPACK_IMPORTED_MODULE_0__.Colors.light_gray,
    '& h2': {
      fontSize: 24,
      color: _theme__WEBPACK_IMPORTED_MODULE_0__.Colors.h2color,
      marginBottom: 20
    },
    '& p': {
      fontSize: 18,
      color: _theme__WEBPACK_IMPORTED_MODULE_0__.Colors.pcolor
    }
  };
});
var NoPageLink = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link)(function () {
  return {
    display: 'inline-block',
    marginTop: 20,
    padding: '10px 20px',
    backgroundColor: _theme__WEBPACK_IMPORTED_MODULE_0__.Colors.primary,
    color: _theme__WEBPACK_IMPORTED_MODULE_0__.Colors.backgroundWhite,
    borderRadius: 4,
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: _theme__WEBPACK_IMPORTED_MODULE_0__.Colors.button_hover_color
    }
  };
});

/***/ }),

/***/ "./src/styles/products/index.js":
/*!**************************************!*\
  !*** ./src/styles/products/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Product: () => (/* binding */ Product),
/* harmony export */   ProductDetailWrapper: () => (/* binding */ ProductDetailWrapper),
/* harmony export */   ProductImage: () => (/* binding */ ProductImage),
/* harmony export */   StyledLink: () => (/* binding */ StyledLink)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme */ "./src/styles/theme/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");



var Product = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  };
});
var ProductImage = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__["default"])("img")(function () {
  return {
    width: "100%",
    background: _theme__WEBPACK_IMPORTED_MODULE_0__.Colors.light_gray,
    padding: "10px"
  };
});
var ProductDetailWrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
  return {
    display: "flex"
  };
});
var StyledLink = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__["default"])("a")(function () {
  return {
    color: _theme__WEBPACK_IMPORTED_MODULE_0__.Colors.pcolor,
    textDecoration: "none",
    "&:hover": {
      color: _theme__WEBPACK_IMPORTED_MODULE_0__.Colors.primary,
      textDecoration: "underline"
    }
  };
});

/***/ }),

/***/ "./src/styles/sharesocial/index.js":
/*!*****************************************!*\
  !*** ./src/styles/sharesocial/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkedInButtonComponent: () => (/* binding */ LinkedInButtonComponent),
/* harmony export */   TwitterButtonComponent: () => (/* binding */ TwitterButtonComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme */ "./src/styles/theme/index.js");




// LinkedIn Styled Button
var LinkedInShareButton = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__["default"])('button')(function () {
  return {
    display: 'inline-block',
    backgroundColor: _theme__WEBPACK_IMPORTED_MODULE_1__.Colors.linkedinButton,
    color: _theme__WEBPACK_IMPORTED_MODULE_1__.Colors.white,
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.2s',
    marginRight: '1em',
    '&:hover': {
      backgroundColor: _theme__WEBPACK_IMPORTED_MODULE_1__.Colors.linkedinButtonHover
    },
    '&:focus': {
      outline: 'none'
    }
  };
});
var LinkedInButtonComponent = function LinkedInButtonComponent(_ref) {
  var openPopup = _ref.openPopup,
    shareUrl = _ref.shareUrl;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LinkedInShareButton, {
    onClick: function onClick(e) {
      e.preventDefault();
      openPopup(shareUrl, 600, 400);
    }
  }, "Share on LinkedIn");
};

// Twitter Styled Button
var TwitterShareButton = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__["default"])('button')(function () {
  return {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    color: _theme__WEBPACK_IMPORTED_MODULE_1__.Colors.white,
    textDecoration: 'none',
    outline: 'none',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: _theme__WEBPACK_IMPORTED_MODULE_1__.Colors.twitterButton,
    '&:hover': {
      backgroundColor: _theme__WEBPACK_IMPORTED_MODULE_1__.Colors.twitterButtonHover
    }
  };
});
var TwitterButtonComponent = function TwitterButtonComponent(_ref2) {
  var openPopup = _ref2.openPopup,
    shareUrl = _ref2.shareUrl;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TwitterShareButton, {
    onClick: function onClick(e) {
      e.preventDefault();
      openPopup(shareUrl, 600, 400);
    }
  }, "Share on Twitter");
};

/***/ }),

/***/ "./src/styles/theme/index.js":
/*!***********************************!*\
  !*** ./src/styles/theme/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Colors: () => (/* binding */ Colors),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/createTheme.js");

var Colors = {
  primary: "#007FFF",
  secondary: "#D3D3D3",
  backgroundWhite: "#FFFFFF",
  gainsboro: "#DCDCDC",
  dimGray: "#696969",
  slateGray: "#708090",
  black: "#000000",
  whiteSmoke: "#f5f5f5",
  shaft: "#333",
  border: "#DDDFE1",
  white: "#fff",
  light_gray: "rgb(230,230,230)",
  h2color: "#333",
  pcolor: "#666",
  button_hover_color: "#0056b3",
  bodyBackground: "#e6e6e6",
  linkedinButton: "#0077b5",
  linkedinButtonHover: '#005e93',
  twitterButton: "#1DA1F2",
  twitterButtonHover: '#0c84d2'
};
var theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__["default"])({
  palette: {
    primary: {
      main: Colors.primary
    },
    background: {
      "default": Colors.whiteSmoke,
      paper: Colors.secondary
    },
    text: {
      primary: Colors.black,
      secondary: Colors.dimGray
    },
    divider: Colors.slateGray
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksemand_net"] = self["webpackChunksemand_net"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_material-ui_icons_Close_js-node_modules_material-ui_icons_LinkedIn_js-no-ad9c49"], () => (__webpack_require__("./src/index.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map