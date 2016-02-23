(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(6)
	__vue_template__ = __webpack_require__(40)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/jxli/github/vue-calendar/src/main.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-570bc767&file=main.vue&scoped=true!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./main.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-570bc767&file=main.vue&scoped=true!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./main.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".calendar[_v-570bc767] {\n  display: inline-block;\n  width: 200px;\n}\n.panel[_v-570bc767] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  text-align: center;\n}\n.fade-transition[_v-570bc767] {\n  -webkit-transition: opacity .15s ease;\n  transition: opacity .15s ease;\n}\n.fade-enter[_v-570bc767],\n.fade-leave[_v-570bc767] {\n  opacity: 0;\n}\n", "", {"version":3,"sources":["/./src/main.vue.style"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,aAAa;CACd;AACD;EACE,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,wBAAgB;MAAhB,oBAAgB;UAAhB,gBAAgB;EAChB,mBAAmB;CACpB;AACD;EACE,sCAA8B;EAA9B,8BAA8B;CAC/B;AACD;;EAEE,WAAW;CACZ","file":"main.vue","sourcesContent":[".calendar {\n  display: inline-block;\n  width: 200px;\n}\n.panel {\n  display: flex;\n  flex-wrap: wrap;\n  text-align: center;\n}\n.fade-transition {\n  transition: opacity .15s ease;\n}\n.fade-enter,\n.fade-leave {\n  opacity: 0;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(7);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _moment = __webpack_require__(23);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _days = __webpack_require__(24);
	
	var _days2 = _interopRequireDefault(_days);
	
	var _months = __webpack_require__(30);
	
	var _months2 = _interopRequireDefault(_months);
	
	var _years = __webpack_require__(35);
	
	var _years2 = _interopRequireDefault(_years);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div :class="classNames.root">
	//     <input :class="classNames.input" type="text"
	//     v-model="date" @keydown.stop.prevent @click="show">
	//     <component :class="classNames.panel" :is="currentView"
	//     keep-alive
	//     transition="fade"
	//     transition-mode="out-in"
	//     :date="now"
	//     :display="display"
	//     :active="active"
	//     :week-text="weekText"
	//     :month-text="monthText"
	//     :class-names="classNames"
	//     ></component>
	//   </div>
	// </template>
	//
	// <style lang="less" scoped>
	// .calendar {
	//   display: inline-block;
	//   width: 200px;
	// }
	// .panel {
	//  display: flex;
	//  flex-wrap: wrap;
	//  text-align: center;
	// }
	// .fade-transition {
	//   transition: opacity .15s ease;
	// }
	// .fade-enter, .fade-leave {
	//   opacity: 0;
	// }
	// </style>
	//
	// <script>
	exports.default = {
	  props: {
	    format: {
	      type: String,
	      default: function _default() {
	        return 'YYYY/MM/DD';
	      }
	    },
	    date: {
	      type: String,
	      twoWay: true,
	      required: true
	    },
	    classNames: {
	      type: Object,
	      coerce: function coerce(val) {
	        var preset = {
	          root: 'calendar',
	          input: 'calendar-input',
	          panel: 'panel',
	          box: 'box',
	          bar: 'bar',
	          day: 'day',
	          month: 'month',
	          year: 'year'
	        };
	        return (0, _extends3.default)({}, preset, val);
	      }
	    },
	    weekText: {
	      type: Array,
	      default: function _default() {
	        return ['日', '一', '二', '三', '四', '五', '六'];
	      }
	    },
	    monthText: {
	      type: Array,
	      default: function _default() {
	        return ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
	      }
	    }
	  },
	  data: function data() {
	    var _this = this;
	
	    var now = (0, _moment2.default)(this.date, this.format);
	    return {
	      now: now,
	      currentView: null,
	      dateCache: now.clone(),
	      blur: function blur(e) {
	        return !_this.$el.contains(e.target) && _this.hide();
	      }
	    };
	  },
	  ready: function ready() {
	    window.addEventListener('click', this.blur);
	  },
	  beforeDestroy: function beforeDestroy() {
	    window.removeEventListener('click', this.blur);
	  },
	
	  events: {
	    year: function year(val) {
	      this.now = this.now.clone().year(val);
	    },
	    month: function month(val) {
	      this.now = this.now.clone().month(val);
	    },
	    day: function day(val) {
	      this.now = this.now.clone().date(val);
	      this.date = this.dump();
	    }
	  },
	  methods: {
	    show: function show() {
	      this.currentView = 'days';
	    },
	    display: function display(viewName) {
	      this.currentView = viewName;
	    },
	    hide: function hide() {
	      this.currentView = null;
	    },
	    active: function active(key, val) {
	      var _dateCache$toObject = this.dateCache.toObject();
	
	      var Y = _dateCache$toObject.years;
	      var M = _dateCache$toObject.months;
	      var D = _dateCache$toObject.date;
	
	      var _now$toObject = this.now.toObject();
	
	      var years = _now$toObject.years;
	      var months = _now$toObject.months;
	
	      var test = {
	        year: val === Y,
	        month: years === Y && val === M,
	        day: years === Y && months === M && val === D
	      };
	      return test[key] ? 'active' : '';
	    },
	    dump: function dump() {
	      this.dateCache = this.now.clone();
	      return this.dateCache.format(this.format);
	    }
	  },
	  components: {
	    days: _days2.default,
	    months: _months2.default,
	    years: _years2.default
	  }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$assign = __webpack_require__(8)["default"];
	
	exports["default"] = _Object$assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};
	
	exports.__esModule = true;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(9), __esModule: true };

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(10);
	module.exports = __webpack_require__(13).Object.assign;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(11);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(16)});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(12)
	  , core      = __webpack_require__(13)
	  , ctx       = __webpack_require__(14)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 12 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 13 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(15);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(17)
	  , toObject = __webpack_require__(18)
	  , IObject  = __webpack_require__(20);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(22)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 17 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(19);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(21);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(25)
	__vue_script__ = __webpack_require__(27)
	__vue_template__ = __webpack_require__(29)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/jxli/github/vue-calendar/src/days.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-689599f6&file=days.vue&scoped=true!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./days.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-689599f6&file=days.vue&scoped=true!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./days.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".bar[_v-689599f6] {\n  -webkit-flex-basis: 100%;\n      -ms-flex-preferred-size: 100%;\n          flex-basis: 100%;\n  text-align: center;\n}\n.box.active[_v-689599f6] {\n  background-color: cyan;\n}\n.box[_v-689599f6]:hover:not([unhover]) {\n  background-color: red;\n  cursor: pointer;\n}\n.day[_v-689599f6] {\n  -webkit-flex-basis: 14.28571429%;\n      -ms-flex-preferred-size: 14.28571429%;\n          flex-basis: 14.28571429%;\n  margin: 5px 0;\n}\n", "", {"version":3,"sources":["/./src/days.vue.style"],"names":[],"mappings":"AAAA;EACE,yBAAiB;MAAjB,8BAAiB;UAAjB,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,sBAAsB;EACtB,gBAAgB;CACjB;AACD;EACE,iCAAyB;MAAzB,sCAAyB;UAAzB,yBAAyB;EACzB,cAAc;CACf","file":"days.vue","sourcesContent":[".bar {\n  flex-basis: 100%;\n  text-align: center;\n}\n.box.active {\n  background-color: cyan;\n}\n.box:hover:not([unhover]) {\n  background-color: red;\n  cursor: pointer;\n}\n.day {\n  flex-basis: 14.28571429%;\n  margin: 5px 0;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(28);
	
	exports.default = {
	  props: ['weekText', 'date', 'display', 'classNames', 'active'],
	  computed: {
	    days: function days() {
	      var lastDay = this.date.daysInMonth();
	      var days = (0, _utils.arr)(lastDay).map(function (v, i) {
	        return i + 1;
	      });
	      var paddingLeft = (0, _utils.arr)(this.date.clone().startOf('month').day()).map(function (v) {
	        return '';
	      });
	      return [].concat(paddingLeft, days);
	    }
	  },
	  methods: {
	    ifActive: function ifActive(day) {
	      return this.date.date() === day ? this.classNames.active : '';
	    },
	    select: function select(day) {
	      this.$dispatch('day', day);
	    },
	    next: function next(step) {
	      this.$dispatch('month', this.date.month() + step);
	    }
	  }
	};
	// </script>
	/* generated by vue-loader */
	// <template>
	//   <div>
	//     <div :class="classNames.bar">
	//       <span @click="next(-1)">&lt;</span>
	//       <span @click="display('years')">{{date.format('YYYY')}}</span>
	//       <span @click="display('months')">{{date.format('MM')}}</span>
	//       <span @click="next(1)">&gt;</span>
	//     </div>
	//     <div v-for="val in weekText" unhover
	//     :class="[classNames.day, classNames.box]"
	//     >{{val}}</div>
	//     <div v-for="day in days" track-by="$index"
	//     :class="[classNames.day, classNames.box, active('day', day)]"
	//     :unhover="!day"
	//     @click="select(day)">{{day}}</div>
	//   </div>
	// </template>
	//
	// <style lang="less" scoped>
	// .bar {
	//   flex-basis: 100%;
	//   text-align: center;
	// }
	// .box {
	//   @import 'box.less';
	// }
	// .day {
	//   flex-basis: 1/7 * 100%;
	//   margin: 5px 0;
	// }
	// </style>
	//
	// <script>

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var arr = exports.arr = function arr(size) {
	  return Array.apply(null, new Array(size));
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "\n  <div _v-689599f6=\"\">\n    <div :class=\"classNames.bar\" _v-689599f6=\"\">\n      <span @click=\"next(-1)\" _v-689599f6=\"\">&lt;</span>\n      <span @click=\"display('years')\" _v-689599f6=\"\">{{date.format('YYYY')}}</span>\n      <span @click=\"display('months')\" _v-689599f6=\"\">{{date.format('MM')}}</span>\n      <span @click=\"next(1)\" _v-689599f6=\"\">&gt;</span>\n    </div>\n    <div v-for=\"val in weekText\" unhover=\"\" :class=\"[classNames.day, classNames.box]\" _v-689599f6=\"\">{{val}}</div>\n    <div v-for=\"day in days\" track-by=\"$index\" :class=\"[classNames.day, classNames.box, active('day', day)]\" :unhover=\"!day\" @click=\"select(day)\" _v-689599f6=\"\">{{day}}</div>\n  </div>\n";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(31)
	__vue_script__ = __webpack_require__(33)
	__vue_template__ = __webpack_require__(34)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/jxli/github/vue-calendar/src/months.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-f32095be&file=months.vue&scoped=true!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./months.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-f32095be&file=months.vue&scoped=true!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./months.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".box.active[_v-f32095be] {\n  background-color: cyan;\n}\n.box[_v-f32095be]:hover:not([unhover]) {\n  background-color: red;\n  cursor: pointer;\n}\n.month[_v-f32095be] {\n  -webkit-flex-basis: 25%;\n      -ms-flex-preferred-size: 25%;\n          flex-basis: 25%;\n  margin: 10px 0;\n}\n", "", {"version":3,"sources":["/./src/months.vue.style"],"names":[],"mappings":"AAAA;EACE,uBAAuB;CACxB;AACD;EACE,sBAAsB;EACtB,gBAAgB;CACjB;AACD;EACE,wBAAgB;MAAhB,6BAAgB;UAAhB,gBAAgB;EAChB,eAAe;CAChB","file":"months.vue","sourcesContent":[".box.active {\n  background-color: cyan;\n}\n.box:hover:not([unhover]) {\n  background-color: red;\n  cursor: pointer;\n}\n.month {\n  flex-basis: 25%;\n  margin: 10px 0;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div>
	//     <div v-for="(index, m) in monthText"
	//     :class="[classNames.month, classNames.box, active('month', index)]"
	//     @click="select(index)"
	//     >{{m}}</div>
	//   </div>
	// </template>
	//
	// <style lang="less" scoped>
	// .box {
	//   @import 'box.less';
	// }
	// .month {
	//   flex-basis: 1/4 * 100%;
	//   margin: 10px 0;
	// }
	// </style>
	//
	// <script>
	exports.default = {
	  props: ['monthText', 'date', 'display', 'classNames', 'active'],
	  methods: {
	    select: function select(month) {
	      this.$dispatch('month', month);
	      this.display('days');
	    }
	  }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "\n  <div _v-f32095be=\"\">\n    <div v-for=\"(index, m) in monthText\" :class=\"[classNames.month, classNames.box, active('month', index)]\" @click=\"select(index)\" _v-f32095be=\"\">{{m}}</div>\n  </div>\n";

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(36)
	__vue_script__ = __webpack_require__(38)
	__vue_template__ = __webpack_require__(39)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/jxli/github/vue-calendar/src/years.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(37);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-ff1792d0&file=years.vue&scoped=true!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./years.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-ff1792d0&file=years.vue&scoped=true!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./years.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".panel-vertical[_v-ff1792d0] {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-flex-wrap: nowrap;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.box.active[_v-ff1792d0] {\n  background-color: cyan;\n}\n.box[_v-ff1792d0]:hover:not([unhover]) {\n  background-color: red;\n  cursor: pointer;\n}\n.year[_v-ff1792d0] {\n  margin: 5px 0;\n}\n", "", {"version":3,"sources":["/./src/years.vue.style"],"names":[],"mappings":"AAAA;EACE,6BAAuB;EAAvB,8BAAuB;EAAvB,+BAAuB;MAAvB,2BAAuB;UAAvB,uBAAuB;EACvB,0BAAkB;MAAlB,sBAAkB;UAAlB,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;CAClB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,sBAAsB;EACtB,gBAAgB;CACjB;AACD;EACE,cAAc;CACf","file":"years.vue","sourcesContent":[".panel-vertical {\n  flex-direction: column;\n  flex-wrap: nowrap;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.box.active {\n  background-color: cyan;\n}\n.box:hover:not([unhover]) {\n  background-color: red;\n  cursor: pointer;\n}\n.year {\n  margin: 5px 0;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(28);
	
	exports.default = {
	  props: ['date', 'display', 'classNames', 'active'],
	  data: function data() {
	    var size = 200;
	    var begin = this.date.year() - size / 2;
	    var years = (0, _utils.arr)(size).map(function (_, i) {
	      return begin + i;
	    });
	    return {
	      years: years
	    };
	  },
	  attached: function attached() {
	    var activeEle = this.$el.getElementsByClassName('active')[0];
	    if (activeEle) {
	      var offset = activeEle.offsetTop - this.$el.clientHeight / 2;
	      this.$el.scrollTop = offset;
	    }
	  },
	
	  methods: {
	    select: function select(year) {
	      this.$dispatch('year', year);
	      this.display('months');
	    }
	  }
	};
	// </script>
	/* generated by vue-loader */
	// <template>
	//   <div :class="classNames.panel + '-vertical'">
	//     <div v-for="y in years"
	//     :class="[classNames.year, classNames.box, active('year', y)]"
	//     @click="select(y)"
	//     >{{y}}</div>
	//   </div>
	// </template>
	//
	// <style lang="less" scoped>
	// .panel-vertical {
	//   flex-direction: column;
	//   flex-wrap: nowrap;
	//   max-height: 300px;
	//   overflow-y: auto;
	// }
	// .box {
	//   @import 'box.less';
	// }
	// .year {
	//   margin: 5px 0;
	// }
	// </style>
	//
	// <script>

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "\n  <div :class=\"classNames.panel + '-vertical'\" _v-ff1792d0=\"\">\n    <div v-for=\"y in years\" :class=\"[classNames.year, classNames.box, active('year', y)]\" @click=\"select(y)\" _v-ff1792d0=\"\">{{y}}</div>\n  </div>\n";

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "\n  <div :class=\"classNames.root\" _v-570bc767=\"\">\n    <input :class=\"classNames.input\" type=\"text\" v-model=\"date\" @keydown.stop.prevent=\"\" @click=\"show\" _v-570bc767=\"\">\n    <component :class=\"classNames.panel\" :is=\"currentView\" keep-alive=\"\" transition=\"fade\" transition-mode=\"out-in\" :date=\"now\" :display=\"display\" :active=\"active\" :week-text=\"weekText\" :month-text=\"monthText\" :class-names=\"classNames\" _v-570bc767=\"\"></component>\n  </div>\n";

/***/ }
/******/ ])));
//# sourceMappingURL=vue-calendar.js.map