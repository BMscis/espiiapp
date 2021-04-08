/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/components/carousel/carousel.js":
/*!******************************************************!*\
  !*** ./resources/js/components/carousel/carousel.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _svg_webdev_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../svg/webdev.gif */ "./resources/svg/webdev.gif");
/* harmony import */ var _svg_coa_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../svg/coa.gif */ "./resources/svg/coa.gif");
/* harmony import */ var _svg_me_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../svg/me.gif */ "./resources/svg/me.gif");
/* harmony import */ var _svg_stairs2_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../svg/stairs2.gif */ "./resources/svg/stairs2.gif");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

//import {Story} from '../storyBoard/story'
//images



 //import ws from '../../assets/svg/ws.gif'

var Carousel = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Carousel, _HTMLElement);

  var _super = _createSuper(Carousel);

  function Carousel() {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _super.call(this); //console.log('Carousel constructed')

    _this.shadow = _this.attachShadow({
      mode: 'open'
    });
    return _this;
  } //attributes


  _createClass(Carousel, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(prop, oldVal, newVal) {
      //console.log('Carousel change')
      switch (prop) {
        case 'width':
          //console.log('carousel width change')
          return;

        case 'resize':
          if (newVal == 'true' && oldVal != newVal) {
            //console.log('Carousel resize')
            this.resizeCar();
            return;
          }

          if (newVal == 'false' && oldVal != newVal) {
            return;
          } else {
            return;
          }

        case 'mobibusinesscard':
          this.render(newVal);
          return;
      }
    }
  }, {
    key: "width",
    get: function get() {
      //console.log('Carousel get width')
      return this.getAttribute('width');
    },
    set: function set(val) {
      //console.log('Carousel set width')
      return this.setAttribute('width');
    }
  }, {
    key: "resize",
    get: function get() {
      return this.getAttribute('resize');
    },
    set: function set(val) {
      if (val === 'true') {
        return;
      }

      if (val === 'false') {
        return;
      }
    }
  }, {
    key: "setImages",
    value: function setImages() {
      var dw = [_svg_webdev_gif__WEBPACK_IMPORTED_MODULE_0__.default, _svg_coa_gif__WEBPACK_IMPORTED_MODULE_1__.default, _svg_me_gif__WEBPACK_IMPORTED_MODULE_2__.default, _svg_stairs2_gif__WEBPACK_IMPORTED_MODULE_3__.default];
      Story.imgset = dw; //console.log(Story)

      return;
    }
  }, {
    key: "resizeCar",
    value: function resizeCar() {
      var html = document.querySelector('html'); //console.log('RESIZING')

      function detectMob() {
        var toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];
        return toMatch.some(function (toMatchItem) {
          return navigator.userAgent.match(toMatchItem);
        });
      }

      if (html.getAttribute('mobi') === "true") {
        var navi = detectMob();
        html.setAttribute('mobi', navi);

        if (navi === true || window.outerWidth < 850) {
          this.render(true);
        }

        if (navi === false) {
          this.render(false);
        }
      }

      if (html.getAttribute('mobi') === 'false') {
        var navi = detectMob();
        html.setAttribute('mobi', navi);

        if (navi === true || window.outerWidth < 850) {
          this.render(true);
        } else {
          this.render(false);
        }
      }

      return;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      //console.log('Carousel connected')
      window.addEventListener('resize', function (e) {
        //console.log('@ WINDOW RESIZE')
        _this2.setAttribute('resize', 'true');

        _this2.setAttribute('resize', 'false');

        return;
      });

      if (document.querySelector('html').getAttribute('mobi' === 'true') || window.outerWidth < 850) {
        this.render(true);
      } else {
        this.render(false);
      }

      this.disconnectedCallback();
    }
  }, {
    key: "render",
    value: function render(val) {
      //mobile
      if (val == true) {
        this.shadow.innerHTML = "\n            ".concat(this.styledTemplate, "\n            <es-previous></es-previous>\n            <es-story h1='3D' h2='Design ' img=").concat(_svg_coa_gif__WEBPACK_IMPORTED_MODULE_1__.default, " active class=\"0\" ptext=\"Get access to hyper-realistic 3D designs with real-time animation.\"></es-story>\n            <es-story h1='Web ' h2='Development ' img=").concat(_svg_webdev_gif__WEBPACK_IMPORTED_MODULE_0__.default, " class=\"1\"  ptext='create modern websites '></es-story>\n            <es-story h1='Graphic' h2='Design' img=").concat(_svg_me_gif__WEBPACK_IMPORTED_MODULE_2__.default, " class=\"2\" ptext=\"Visualize your idea and bring it to life with awsome designs\"></es-story>\n            <es-story h1='UI/UX' h2='Design' img=").concat(_svg_stairs2_gif__WEBPACK_IMPORTED_MODULE_3__.default, " class=\"3\" ptext=\"Create custom user-friendly interfaces with custom widgets.\"></es-story>\n            <es-next></es-next>\n            <es-scrollpad mobi></es-scrollpad>\n        ");
      } //closed 


      if (val == false) {
        this.shadow.innerHTML = "\n            ".concat(this.styledTemplate, "\n            <es-businesscard ></es-businesscard>\n            <es-previous></es-previous>\n            <es-story h1='3D' h2='Design ' img=").concat(_svg_coa_gif__WEBPACK_IMPORTED_MODULE_1__.default, " active class=\"0\" ptext=\"Get access to hyper-realistic 3D designs with real-time animation.\"></es-story>\n            <es-story h1='Web ' h2='Development ' img=").concat(_svg_webdev_gif__WEBPACK_IMPORTED_MODULE_0__.default, " class=\"1\"  ptext='create modern websites '></es-story>\n            <es-story h1='Graphic' h2='Design' img=").concat(_svg_me_gif__WEBPACK_IMPORTED_MODULE_2__.default, " class=\"2\" ptext=\"Visualize your idea and bring it to life with awsome designs\"></es-story>\n            <es-story h1='UI/UX' h2='Design' img=").concat(_svg_stairs2_gif__WEBPACK_IMPORTED_MODULE_3__.default, " class=\"3\" ptext=\"Create custom user-friendly interfaces with custom widgets.\"></es-story>\n            <es-next><es-next>\n        ");
      }

      if (val === 'Contact Us') {
        this.shadow.innerHTML = "\n            <es-businesscard text='Contact Us'></es-businesscard>\n            ";
      }

      if (val === 'Portfolio') {
        this.shadow.innerHTML = "\n            ".concat(this.styledTemplate, "\n            <es-previous></es-previous>\n            <es-story h1='3D' h2='Design ' img=").concat(_svg_coa_gif__WEBPACK_IMPORTED_MODULE_1__.default, " active class=\"0\" ptext=\"Get access to hyper-realistic 3D designs with real-time animation.\"></es-story>\n            <es-story h1='Web ' h2='Development ' img=").concat(_svg_webdev_gif__WEBPACK_IMPORTED_MODULE_0__.default, " class=\"1\"  ptext='create modern websites '></es-story>\n            <es-story h1='Graphic' h2='Design' img=").concat(_svg_me_gif__WEBPACK_IMPORTED_MODULE_2__.default, " class=\"2\" ptext=\"Visualize your idea and bring it to life with awsome designs\"></es-story>\n            <es-story h1='UI/UX' h2='Design' img=").concat(_svg_stairs2_gif__WEBPACK_IMPORTED_MODULE_3__.default, " class=\"3\" ptext=\"Create custom user-friendly interfaces with custom widgets.\"></es-story>\n            <es-next><es-next>\n        ");
      }
    }
  }, {
    key: "styledTemplate",
    get: function get() {
      return "<style>\n        *{\n            outline:none;\n        }\n        :host{\n            position:absolute;\n            top:20vh;\n            left:0;\n            width:95vw;\n            height:78vh;\n            display: flex;\n            flex-direction:row;\n            perspective: 600px;\n            perspective-origin: center;\n            transition:0.5s ease-in-out;\n            -webkit-box-align: center;\n            //background-image: radial-gradient(circle at bottom left,#00f5de00 ,68%,transparent 44%,#000024,rgb(0 54 142),transparent);\n            background-repeat:no-repeat;\n            z-index:1;\n        }\n        :host([expand]){\n            backdrop-filter: blur(5px);\n            -webkit-backdrop-filter: blur(5px);\n        }\n        :host(:hover){\n            //backdrop-filter: blur(15px);\n\n        }\n        @media only Screen and (max-width:850px){\n            :host{\n                transform: scale(0.8);\n            }\n            :host([expand]){\n                transform: scale(1);\n            }\n        }\n        </style>\n        ";
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      //console.log('Carousel disconnect')
      return false;
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['width', 'nextwidth', 'resize', 'mobibusinesscard'];
    }
  }]);

  return Carousel;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('es-carousel', Carousel);

/***/ }),

/***/ "./resources/svg/coa.gif":
/*!*******************************!*\
  !*** ./resources/svg/coa.gif ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/coa.gif?0088035e601a0fb5ae170ea277b8db18");

/***/ }),

/***/ "./resources/svg/me.gif":
/*!******************************!*\
  !*** ./resources/svg/me.gif ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/me.gif?8d75dc137025311475d629ba9a909bef");

/***/ }),

/***/ "./resources/svg/stairs2.gif":
/*!***********************************!*\
  !*** ./resources/svg/stairs2.gif ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/stairs2.gif?4ee4cdc67995789d45dfc6d5cd75e78c");

/***/ }),

/***/ "./resources/svg/webdev.gif":
/*!**********************************!*\
  !*** ./resources/svg/webdev.gif ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/webdev.gif?95a83367c6f5d2c04a1f2c172870ca3f");

/***/ }),

/***/ "./resources/scss/style.scss":
/*!***********************************!*\
  !*** ./resources/scss/style.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/resources/js/components/bars/imagebar/imagebar": 0,
/******/ 			"css/style": 0
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
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./resources/js/components/carousel/carousel.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./resources/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;