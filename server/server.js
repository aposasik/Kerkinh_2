module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/about","2":"pages/creators","3":"pages/deigmata/_id/edit","4":"pages/deigmata/_id/index","5":"pages/deigmata/dynamic-search/page/_number/index","6":"pages/deigmata/index","7":"pages/deigmata/search/page/_number/index","8":"pages/files/index","9":"pages/files/search/page/_number/index","10":"pages/index","11":"pages/ornithopanida/ct-eidh/_id/edit","12":"pages/ornithopanida/ct-eidh/_id/index","13":"pages/ornithopanida/ct-eidh/dynamic-search/page/_number/index","14":"pages/ornithopanida/ct-eidh/index","15":"pages/ornithopanida/ct-eidh/new","16":"pages/ornithopanida/ct-eidh/search/page/_number/index","17":"pages/ornithopanida/ct-press-threats/_id/edit","18":"pages/ornithopanida/ct-press-threats/_id/index","19":"pages/ornithopanida/ct-press-threats/dynamic-search/page/_number/index","20":"pages/ornithopanida/ct-press-threats/index","21":"pages/ornithopanida/ct-press-threats/new","22":"pages/ornithopanida/ct-press-threats/search/page/_number/index","23":"pages/ornithopanida/deigma-ornithopanida-x-eidh/_id/edit","24":"pages/ornithopanida/deigma-ornithopanida-x-eidh/_id/index","25":"pages/ornithopanida/deigma-ornithopanida-x-eidh/dynamic-search/page/_number/index","26":"pages/ornithopanida/deigma-ornithopanida-x-eidh/index","27":"pages/ornithopanida/deigma-ornithopanida-x-eidh/new","28":"pages/ornithopanida/deigma-ornithopanida-x-eidh/search/page/_number/index","29":"pages/ornithopanida/deigma-ornithopanida-x-press-threats/_id/edit","30":"pages/ornithopanida/deigma-ornithopanida-x-press-threats/_id/index","31":"pages/ornithopanida/deigma-ornithopanida-x-press-threats/dynamic-search/page/_number/index","32":"pages/ornithopanida/deigma-ornithopanida-x-press-threats/index","33":"pages/ornithopanida/deigma-ornithopanida-x-press-threats/new","34":"pages/ornithopanida/deigma-ornithopanida-x-press-threats/search/page/_number/index","35":"pages/ornithopanida/deigma-ornithopanida/_id/edit","36":"pages/ornithopanida/deigma-ornithopanida/_id/files/index","37":"pages/ornithopanida/deigma-ornithopanida/_id/index","38":"pages/ornithopanida/deigma-ornithopanida/_id/pictures/index","39":"pages/ornithopanida/deigma-ornithopanida/_id/x-eidh/index","40":"pages/ornithopanida/deigma-ornithopanida/_id/x-press-threats/index","41":"pages/ornithopanida/deigma-ornithopanida/dynamic-search/page/_number/index","42":"pages/ornithopanida/deigma-ornithopanida/index","43":"pages/ornithopanida/deigma-ornithopanida/map","44":"pages/ornithopanida/deigma-ornithopanida/new","45":"pages/ornithopanida/deigma-ornithopanida/search/page/_number/index","46":"pages/ornithopanida/eventBus","47":"pages/pictures/index","48":"pages/pictures/search/page/_number/index","49":"pages/prwtokola/_id/edit","50":"pages/prwtokola/_id/index","51":"pages/prwtokola/index","52":"pages/prwtokola/new","53":"pages/prwtokola/search/page/_number/index","54":"pages/thhlastika/ct-eidh/_id/edit","55":"pages/thhlastika/ct-eidh/_id/index","56":"pages/thhlastika/ct-eidh/dynamic-search/page/_number/index","57":"pages/thhlastika/ct-eidh/index","58":"pages/thhlastika/ct-eidh/new","59":"pages/thhlastika/ct-eidh/search/page/_number/index","60":"pages/thhlastika/ct-press-threats/_id/edit","61":"pages/thhlastika/ct-press-threats/_id/index","62":"pages/thhlastika/ct-press-threats/dynamic-search/page/_number/index","63":"pages/thhlastika/ct-press-threats/index","64":"pages/thhlastika/ct-press-threats/new","65":"pages/thhlastika/ct-press-threats/search/page/_number/index","66":"pages/thhlastika/deigma-thhlastikwn-x-eidh/_id/edit","67":"pages/thhlastika/deigma-thhlastikwn-x-eidh/_id/index","68":"pages/thhlastika/deigma-thhlastikwn-x-eidh/dynamic-search/page/_number/index","69":"pages/thhlastika/deigma-thhlastikwn-x-eidh/index","70":"pages/thhlastika/deigma-thhlastikwn-x-eidh/new","71":"pages/thhlastika/deigma-thhlastikwn-x-eidh/search/page/_number/index","72":"pages/thhlastika/deigma-thhlastikwn-x-press-threats/_id/edit","73":"pages/thhlastika/deigma-thhlastikwn-x-press-threats/_id/index","74":"pages/thhlastika/deigma-thhlastikwn-x-press-threats/dynamic-search/page/_number/index","75":"pages/thhlastika/deigma-thhlastikwn-x-press-threats/index","76":"pages/thhlastika/deigma-thhlastikwn-x-press-threats/new","77":"pages/thhlastika/deigma-thhlastikwn-x-press-threats/search/page/_number/index","78":"pages/thhlastika/deigma-thhlastikwn/_id/edit","79":"pages/thhlastika/deigma-thhlastikwn/_id/files/index","80":"pages/thhlastika/deigma-thhlastikwn/_id/index","81":"pages/thhlastika/deigma-thhlastikwn/_id/pictures/index","82":"pages/thhlastika/deigma-thhlastikwn/_id/x-eidh/index","83":"pages/thhlastika/deigma-thhlastikwn/_id/x-press-threats/index","84":"pages/thhlastika/deigma-thhlastikwn/dynamic-search/page/_number/index","85":"pages/thhlastika/deigma-thhlastikwn/index","86":"pages/thhlastika/deigma-thhlastikwn/map","87":"pages/thhlastika/deigma-thhlastikwn/new","88":"pages/thhlastika/deigma-thhlastikwn/search/page/_number/index","89":"pages/thhlastika/eventBus"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (options) {
  var mappedProps = options.mappedProps,
      name = options.name,
      ctr = options.ctr,
      ctrArgs = options.ctrArgs,
      events = options.events,
      beforeCreate = options.beforeCreate,
      afterCreate = options.afterCreate,
      props = options.props,
      rest = _objectWithoutProperties(options, ['mappedProps', 'name', 'ctr', 'ctrArgs', 'events', 'beforeCreate', 'afterCreate', 'props']);

  var promiseName = '$' + name + 'Promise';
  var instanceName = '$' + name + 'Object';

  assert(!(rest.props instanceof Array), '`props` should be an object, not Array');

  return _extends({}, typeof GENERATE_DOC !== 'undefined' ? { $vgmOptions: options } : {}, {
    mixins: [_mapElementMixin2.default],
    props: _extends({}, props, mappedPropsToVueProps(mappedProps)),
    render: function render() {
      return '';
    },
    provide: function provide() {
      var _this = this;

      var promise = this.$mapPromise.then(function (map) {
        // Infowindow needs this to be immediately available
        _this.$map = map;

        // Initialize the maps with the given options
        var options = _extends({}, _this.options, {
          map: map
        }, (0, _bindProps.getPropsValues)(_this, mappedProps));
        delete options.options; // delete the extra options

        if (beforeCreate) {
          var result = beforeCreate.bind(_this)(options);

          if (result instanceof Promise) {
            return result.then(function () {
              return { options: options };
            });
          }
        }
        return { options: options };
      }).then(function (_ref) {
        var _Function$prototype$b;

        var options = _ref.options;

        var ConstructorObject = ctr();
        // https://stackoverflow.com/questions/1606797/use-of-apply-with-new-operator-is-this-possible
        _this[instanceName] = ctrArgs ? new ((_Function$prototype$b = Function.prototype.bind).call.apply(_Function$prototype$b, [ConstructorObject, null].concat(_toConsumableArray(ctrArgs(options, (0, _bindProps.getPropsValues)(_this, props || {}))))))() : new ConstructorObject(options);

        (0, _bindProps.bindProps)(_this, _this[instanceName], mappedProps);
        (0, _bindEvents2.default)(_this, _this[instanceName], events);

        if (afterCreate) {
          afterCreate.bind(_this)(_this[instanceName]);
        }
        return _this[instanceName];
      });
      this[promiseName] = promise;
      return _defineProperty({}, promiseName, promise);
    },
    destroyed: function destroyed() {
      // Note: not all Google Maps components support maps
      if (this[instanceName] && this[instanceName].setMap) {
        this[instanceName].setMap(null);
      }
    }
  }, rest);
};

exports.mappedPropsToVueProps = mappedPropsToVueProps;

var _bindEvents = __webpack_require__(13);

var _bindEvents2 = _interopRequireDefault(_bindEvents);

var _bindProps = __webpack_require__(7);

var _mapElementMixin = __webpack_require__(20);

var _mapElementMixin2 = _interopRequireDefault(_mapElementMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 *
 * @param {Object} options
 * @param {Object} options.mappedProps - Definitions of props
 * @param {Object} options.mappedProps.PROP.type - Value type
 * @param {Boolean} options.mappedProps.PROP.twoWay
 *  - Whether the prop has a corresponding PROP_changed
 *   event
 * @param {Boolean} options.mappedProps.PROP.noBind
 *  - If true, do not apply the default bindProps / bindEvents.
 * However it will still be added to the list of component props
 * @param {Object} options.props - Regular Vue-style props.
 *  Note: must be in the Object form because it will be
 *  merged with the `mappedProps`
 *
 * @param {Object} options.events - Google Maps API events
 *  that are not bound to a corresponding prop
 * @param {String} options.name - e.g. `polyline`
 * @param {=> String} options.ctr - constructor, e.g.
 *  `google.maps.Polyline`. However, since this is not
 *  generally available during library load, this becomes
 *  a function instead, e.g. () => google.maps.Polyline
 *  which will be called only after the API has been loaded
 * @param {(MappedProps, OtherVueProps) => Array} options.ctrArgs -
 *   If the constructor in `ctr` needs to be called with
 *   arguments other than a single `options` object, e.g. for
 *   GroundOverlay, we call `new GroundOverlay(url, bounds, options)`
 *   then pass in a function that returns the argument list as an array
 *
 * Otherwise, the constructor will be called with an `options` object,
 *   with property and values merged from:
 *
 *   1. the `options` property, if any
 *   2. a `map` property with the Google Maps
 *   3. all the properties passed to the component in `mappedProps`
 * @param {Object => Any} options.beforeCreate -
 *  Hook to modify the options passed to the initializer
 * @param {(options.ctr, Object) => Any} options.afterCreate -
 *  Hook called when
 *
 */


function assert(v, message) {
  if (!v) throw new Error(message);
}

/**
 * Strips out the extraneous properties we have in our
 * props definitions
 * @param {Object} props
 */
function mappedPropsToVueProps(mappedProps) {
  return Object.entries(mappedProps).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        prop = _ref4[1];

    var value = {};

    if ('type' in prop) value.type = prop.type;
    if ('default' in prop) value.default = prop.default;
    if ('required' in prop) value.required = prop.required;

    return [key, value];
  }).reduce(function (acc, _ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        key = _ref6[0],
        val = _ref6[1];

    acc[key] = val;
    return acc;
  }, {});
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vuetify/es5/util/colors");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPropsValues = getPropsValues;
exports.bindProps = bindProps;

var _WatchPrimitiveProperties = __webpack_require__(14);

var _WatchPrimitiveProperties2 = _interopRequireDefault(_WatchPrimitiveProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getPropsValues(vueInst, props) {
  return Object.keys(props).reduce(function (acc, prop) {
    if (vueInst[prop] !== undefined) {
      acc[prop] = vueInst[prop];
    }
    return acc;
  }, {});
}

/**
  * Binds the properties defined in props to the google maps instance.
  * If the prop is an Object type, and we wish to track the properties
  * of the object (e.g. the lat and lng of a LatLng), then we do a deep
  * watch. For deep watch, we also prevent the _changed event from being
  * emitted if the data source was external.
  */
function bindProps(vueInst, googleMapsInst, props) {
  var _loop = function (attribute) {
    var _props$attribute = props[attribute],
        twoWay = _props$attribute.twoWay,
        type = _props$attribute.type,
        trackProperties = _props$attribute.trackProperties,
        noBind = _props$attribute.noBind;


    if (noBind) return 'continue';

    var setMethodName = 'set' + capitalizeFirstLetter(attribute);
    var getMethodName = 'get' + capitalizeFirstLetter(attribute);
    var eventName = attribute.toLowerCase() + '_changed';
    var initialValue = vueInst[attribute];

    if (typeof googleMapsInst[setMethodName] === 'undefined') {
      throw new Error(setMethodName + ' is not a method of (the Maps object corresponding to) ' + vueInst.$options._componentTag);
    }

    // We need to avoid an endless
    // propChanged -> event emitted -> propChanged -> event emitted loop
    // although this may really be the user's responsibility
    if (type !== Object || !trackProperties) {
      // Track the object deeply
      vueInst.$watch(attribute, function () {
        var attributeValue = vueInst[attribute];

        googleMapsInst[setMethodName](attributeValue);
      }, {
        immediate: typeof initialValue !== 'undefined',
        deep: type === Object
      });
    } else {
      (0, _WatchPrimitiveProperties2.default)(vueInst, trackProperties.map(function (prop) {
        return attribute + '.' + prop;
      }), function () {
        googleMapsInst[setMethodName](vueInst[attribute]);
      }, vueInst[attribute] !== undefined);
    }

    if (twoWay && (vueInst.$gmapOptions.autobindAllEvents || vueInst.$listeners[eventName])) {
      googleMapsInst.addListener(eventName, function () {
        // eslint-disable-line no-unused-vars
        vueInst.$emit(eventName, googleMapsInst[getMethodName]());
      });
    }
  };

  for (var attribute in props) {
    var _ret = _loop(attribute);

    if (_ret === 'continue') continue;
  }
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bindProps = __webpack_require__(7);

var _simulateArrowDown = __webpack_require__(24);

var _simulateArrowDown2 = _interopRequireDefault(_simulateArrowDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var props = {
  bounds: {
    type: Object
  },
  defaultPlace: {
    type: String,
    default: ''
  },
  componentRestrictions: {
    type: Object,
    default: null
  },
  types: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  placeholder: {
    required: false,
    type: String
  },
  className: {
    required: false,
    type: String
  },
  label: {
    required: false,
    type: String,
    default: null
  },
  selectFirstOnEnter: {
    require: false,
    type: Boolean,
    default: false
  }
};

exports.default = {
  mounted: function mounted() {
    var _this = this;

    var input = this.$refs.input;

    // Allow default place to be set
    input.value = this.defaultPlace;
    this.$watch('defaultPlace', function () {
      input.value = _this.defaultPlace;
    });

    this.$gmapApiPromiseLazy().then(function () {
      var options = (0, _bindProps.getPropsValues)(_this, props);
      if (_this.selectFirstOnEnter) {
        (0, _simulateArrowDown2.default)(_this.$refs.input);
      }

      if (typeof google.maps.places.Autocomplete !== 'function') {
        throw new Error('google.maps.places.Autocomplete is undefined. Did you add \'places\' to libraries when loading Google Maps?');
      }

      _this.autoCompleter = new google.maps.places.Autocomplete(_this.$refs.input, options);

      var placeholder = props.placeholder,
          place = props.place,
          defaultPlace = props.defaultPlace,
          className = props.className,
          label = props.label,
          selectFirstOnEnter = props.selectFirstOnEnter,
          rest = _objectWithoutProperties(props, ['placeholder', 'place', 'defaultPlace', 'className', 'label', 'selectFirstOnEnter']); // eslint-disable-line


      (0, _bindProps.bindProps)(_this, _this.autoCompleter, rest);

      _this.autoCompleter.addListener('place_changed', function () {
        _this.$emit('place_changed', _this.autoCompleter.getPlace());
      });
    });
  },
  created: function created() {
    console.warn('The PlaceInput class is deprecated! Please consider using the Autocomplete input instead'); // eslint-disable-line no-console
  },

  props: props
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (vueInst, googleMapsInst, events) {
  var _loop = function (eventName) {
    if (vueInst.$gmapOptions.autobindAllEvents || vueInst.$listeners[eventName]) {
      googleMapsInst.addListener(eventName, function (ev) {
        vueInst.$emit(eventName, ev);
      });
    }
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var eventName = _step.value;

      _loop(eventName);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WatchPrimitiveProperties;
/**
 * Watch the individual properties of a PoD object, instead of the object
 * per se. This is different from a deep watch where both the reference
 * and the individual values are watched.
 *
 * In effect, it throttles the multiple $watch to execute at most once per tick.
 */
function WatchPrimitiveProperties(vueInst, propertiesToTrack, handler) {
  var immediate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var isHandled = false;

  function requestHandle() {
    if (!isHandled) {
      isHandled = true;
      vueInst.$nextTick(function () {
        isHandled = false;
        handler();
      });
    }
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = propertiesToTrack[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var prop = _step.value;

      vueInst.$watch(prop, requestHandle, { immediate: immediate });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
Mixin for objects that are mounted by Google Maps
Javascript API.

These are objects that are sensitive to element resize
operations so it exposes a property which accepts a bus

*/

exports.default = {
  props: ['resizeBus'],

  data: function data() {
    return {
      _actualResizeBus: null
    };
  },
  created: function created() {
    if (typeof this.resizeBus === 'undefined') {
      this.$data._actualResizeBus = this.$gmapDefaultResizeBus;
    } else {
      this.$data._actualResizeBus = this.resizeBus;
    }
  },


  methods: {
    _resizeCallback: function _resizeCallback() {
      this.resize();
    },
    _delayedResizeCallback: function _delayedResizeCallback() {
      var _this = this;

      this.$nextTick(function () {
        return _this._resizeCallback();
      });
    }
  },

  watch: {
    resizeBus: function resizeBus(newVal) {
      // eslint-disable-line no-unused-vars
      this.$data._actualResizeBus = newVal;
    },
    '$data._actualResizeBus': function $data_actualResizeBus(newVal, oldVal) {
      if (oldVal) {
        oldVal.$off('resize', this._delayedResizeCallback);
      }
      if (newVal) {
        newVal.$on('resize', this._delayedResizeCallback);
      }
    }
  },

  destroyed: function destroyed() {
    if (this.$data._actualResizeBus) {
      this.$data._actualResizeBus.$off('resize', this._delayedResizeCallback);
    }
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ render; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ staticRenderFns; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/placeInput.vue?vue&type=template&id=13bfbbee&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',[_vm._ssrNode("<span>"+_vm._ssrEscape(_vm._s(_vm.label))+"</span> <input type=\"text\""+(_vm._ssrAttr("placeholder",_vm.placeholder))+(_vm._ssrClass(null,_vm.className))+">")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/placeInput.vue?vue&type=template&id=13bfbbee&


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3191d5ad", content, true, context)
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("456dc608", content, true, context)
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @class MapElementMixin
 *
 * Extends components to include the following fields:
 *
 * @property $map        The Google map (valid only after the promise returns)
 *
 *
 * */
exports.default = {
  inject: {
    '$mapPromise': { default: 'abcdef' }
  },

  provide: function provide() {
    var _this = this;

    // Note: although this mixin is not "providing" anything,
    // components' expect the `$map` property to be present on the component.
    // In order for that to happen, this mixin must intercept the $mapPromise
    // .then(() =>) first before its component does so.
    //
    // Since a provide() on a mixin is executed before a provide() on the
    // component, putting this code in provide() ensures that the $map is
    // already set by the time the
    // component's provide() is called.
    this.$mapPromise.then(function (map) {
      _this.$map = map;
    });

    return {};
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TwoWayBindingWrapper;
/**
 * When you have two-way bindings, but the actual bound value will not equal
 * the value you initially passed in, then to avoid an infinite loop you
 * need to increment a counter every time you pass in a value, decrement the
 * same counter every time the bound value changed, but only bubble up
 * the event when the counter is zero.
 *
Example:

Let's say DrawingRecognitionCanvas is a deep-learning backed canvas
that, when given the name of an object (e.g. 'dog'), draws a dog.
But whenever the drawing on it changes, it also sends back its interpretation
of the image by way of the @newObjectRecognized event.

<input
  type="text"
  placeholder="an object, e.g. Dog, Cat, Frog"
  v-model="identifiedObject" />
<DrawingRecognitionCanvas
  :object="identifiedObject"
  @newObjectRecognized="identifiedObject = $event"
  />

new TwoWayBindingWrapper((increment, decrement, shouldUpdate) => {
  this.$watch('identifiedObject', () => {
    // new object passed in
    increment()
  })
  this.$deepLearningBackend.on('drawingChanged', () => {
    recognizeObject(this.$deepLearningBackend)
      .then((object) => {
        decrement()
        if (shouldUpdate()) {
          this.$emit('newObjectRecognized', object.name)
        }
      })
  })
})
 */
function TwoWayBindingWrapper(fn) {
  var counter = 0;

  fn(function () {
    counter += 1;
  }, function () {
    counter = Math.max(0, counter - 1);
  }, function () {
    return counter === 0;
  });
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("78d5fb28", content, true, context)
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("81c3769c", content, true, context)
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// This piece of code was orignally written by amirnissim and can be seen here
// http://stackoverflow.com/a/11703018/2694653
// This has been ported to Vanilla.js by GuillaumeLeclerc
exports.default = function (input) {
  var _addEventListener = input.addEventListener ? input.addEventListener : input.attachEvent;

  function addEventListenerWrapper(type, listener) {
    // Simulate a 'down arrow' keypress on hitting 'return' when no pac suggestion is selected,
    // and then trigger the original listener.
    if (type === 'keydown') {
      var origListener = listener;
      listener = function (event) {
        var suggestionSelected = document.getElementsByClassName('pac-item-selected').length > 0;
        if (event.which === 13 && !suggestionSelected) {
          var simulatedEvent = document.createEvent('Event');
          simulatedEvent.keyCode = 40;
          simulatedEvent.which = 40;
          origListener.apply(input, [simulatedEvent]);
        }
        origListener.apply(input, [event]);
      };
    }
    _addEventListener.apply(input, [type, listener]);
  }

  input.addEventListener = addEventListenerWrapper;
  input.attachEvent = addEventListenerWrapper;
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("vuetify");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StreetViewPanorama = exports.MountableMixin = exports.Autocomplete = exports.MapElementFactory = exports.MapElementMixin = exports.PlaceInput = exports.Map = exports.InfoWindow = exports.Rectangle = exports.Cluster = exports.Circle = exports.Polygon = exports.Polyline = exports.Marker = exports.loadGmapApi = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Vue component imports


exports.install = install;
exports.gmapApi = gmapApi;

var _lazyValue = __webpack_require__(51);

var _lazyValue2 = _interopRequireDefault(_lazyValue);

var _manager = __webpack_require__(52);

var _marker = __webpack_require__(53);

var _marker2 = _interopRequireDefault(_marker);

var _polyline = __webpack_require__(54);

var _polyline2 = _interopRequireDefault(_polyline);

var _polygon = __webpack_require__(55);

var _polygon2 = _interopRequireDefault(_polygon);

var _circle = __webpack_require__(56);

var _circle2 = _interopRequireDefault(_circle);

var _rectangle = __webpack_require__(57);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _infoWindow = __webpack_require__(68);

var _infoWindow2 = _interopRequireDefault(_infoWindow);

var _map = __webpack_require__(69);

var _map2 = _interopRequireDefault(_map);

var _streetViewPanorama = __webpack_require__(70);

var _streetViewPanorama2 = _interopRequireDefault(_streetViewPanorama);

var _placeInput = __webpack_require__(65);

var _placeInput2 = _interopRequireDefault(_placeInput);

var _autocomplete = __webpack_require__(71);

var _autocomplete2 = _interopRequireDefault(_autocomplete);

var _mapElementMixin = __webpack_require__(20);

var _mapElementMixin2 = _interopRequireDefault(_mapElementMixin);

var _mapElementFactory = __webpack_require__(2);

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

var _mountableMixin = __webpack_require__(15);

var _mountableMixin2 = _interopRequireDefault(_mountableMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// HACK: Cluster should be loaded conditionally
// However in the web version, it's not possible to write
// `import 'vue2-google-maps/src/components/cluster'`, so we need to
// import it anyway (but we don't have to register it)
// Therefore we use babel-plugin-transform-inline-environment-variables to
// set BUILD_DEV to truthy / falsy
var Cluster = undefined;

var GmapApi = null;

// export everything
exports.loadGmapApi = _manager.loadGmapApi;
exports.Marker = _marker2.default;
exports.Polyline = _polyline2.default;
exports.Polygon = _polygon2.default;
exports.Circle = _circle2.default;
exports.Cluster = Cluster;
exports.Rectangle = _rectangle2.default;
exports.InfoWindow = _infoWindow2.default;
exports.Map = _map2.default;
exports.PlaceInput = _placeInput2.default;
exports.MapElementMixin = _mapElementMixin2.default;
exports.MapElementFactory = _mapElementFactory2.default;
exports.Autocomplete = _autocomplete2.default;
exports.MountableMixin = _mountableMixin2.default;
exports.StreetViewPanorama = _streetViewPanorama2.default;
function install(Vue, options) {
  // Set defaults
  options = _extends({
    installComponents: true,
    autobindAllEvents: false
  }, options);

  // Update the global `GmapApi`. This will allow
  // components to use the `google` global reactively
  // via:
  //   import {gmapApi} from 'vue2-google-maps'
  //   export default {  computed: { google: gmapApi }  }
  GmapApi = new Vue({ data: { gmapApi: null } });

  var defaultResizeBus = new Vue();

  // Use a lazy to only load the API when
  // a VGM component is loaded
  var gmapApiPromiseLazy = makeGmapApiPromiseLazy(options);

  Vue.mixin({
    created: function created() {
      this.$gmapDefaultResizeBus = defaultResizeBus;
      this.$gmapOptions = options;
      this.$gmapApiPromiseLazy = gmapApiPromiseLazy;
    }
  });
  Vue.$gmapDefaultResizeBus = defaultResizeBus;
  Vue.$gmapApiPromiseLazy = gmapApiPromiseLazy;

  if (options.installComponents) {
    Vue.component('GmapMap', _map2.default);
    Vue.component('GmapMarker', _marker2.default);
    Vue.component('GmapInfoWindow', _infoWindow2.default);
    Vue.component('GmapPolyline', _polyline2.default);
    Vue.component('GmapPolygon', _polygon2.default);
    Vue.component('GmapCircle', _circle2.default);
    Vue.component('GmapRectangle', _rectangle2.default);
    Vue.component('GmapAutocomplete', _autocomplete2.default);
    Vue.component('GmapPlaceInput', _placeInput2.default);
    Vue.component('GmapStreetViewPanorama', _streetViewPanorama2.default);
  }
}

function makeGmapApiPromiseLazy(options) {
  // Things to do once the API is loaded
  function onApiLoaded() {
    GmapApi.gmapApi = {};
    return window.google;
  }

  if (options.load) {
    // If library should load the API
    return (0, _lazyValue2.default)(function () {
      // Load the
      // This will only be evaluated once
      if (typeof window === 'undefined') {
        // server side -- never resolve this promise
        return new Promise(function () {}).then(onApiLoaded);
      } else {
        return new Promise(function (resolve, reject) {
          try {
            window['vueGoogleMapsInit'] = resolve;
            (0, _manager.loadGmapApi)(options.load, options.loadCn);
          } catch (err) {
            reject(err);
          }
        }).then(onApiLoaded);
      }
    });
  } else {
    // If library should not handle API, provide
    // end-users with the global `vueGoogleMapsInit: () => undefined`
    // when the Google Maps API has been loaded
    var promise = new Promise(function (resolve) {
      if (typeof window === 'undefined') {
        // Do nothing if run from server-side
        return;
      }
      window['vueGoogleMapsInit'] = resolve;
    }).then(onApiLoaded);

    return (0, _lazyValue2.default)(function () {
      return promise;
    });
  }
}

function gmapApi() {
  return GmapApi.gmapApi && window.google;
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(67);


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#1b5e20;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("18eee8ff", content, true)

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@-webkit-keyframes shake{59%{margin-left:0}60%,80%{margin-left:2px}70%,90%{margin-left:-2px}}@keyframes shake{59%{margin-left:0}60%,80%{margin-left:2px}70%,90%{margin-left:-2px}}.black{background-color:#000!important;border-color:#000!important}.black--text{color:#000!important;caret-color:#000!important}.white{background-color:#fff!important;border-color:#fff!important}.white--text{color:#fff!important;caret-color:#fff!important}.transparent{background-color:transparent!important;border-color:transparent!important}.transparent--text{color:transparent!important;caret-color:transparent!important}.red{background-color:#f44336!important;border-color:#f44336!important}.red--text{color:#f44336!important;caret-color:#f44336!important}.red.lighten-5{background-color:#ffebee!important;border-color:#ffebee!important}.red--text.text--lighten-5{color:#ffebee!important;caret-color:#ffebee!important}.red.lighten-4{background-color:#ffcdd2!important;border-color:#ffcdd2!important}.red--text.text--lighten-4{color:#ffcdd2!important;caret-color:#ffcdd2!important}.red.lighten-3{background-color:#ef9a9a!important;border-color:#ef9a9a!important}.red--text.text--lighten-3{color:#ef9a9a!important;caret-color:#ef9a9a!important}.red.lighten-2{background-color:#e57373!important;border-color:#e57373!important}.red--text.text--lighten-2{color:#e57373!important;caret-color:#e57373!important}.red.lighten-1{background-color:#ef5350!important;border-color:#ef5350!important}.red--text.text--lighten-1{color:#ef5350!important;caret-color:#ef5350!important}.red.darken-1{background-color:#e53935!important;border-color:#e53935!important}.red--text.text--darken-1{color:#e53935!important;caret-color:#e53935!important}.red.darken-2{background-color:#d32f2f!important;border-color:#d32f2f!important}.red--text.text--darken-2{color:#d32f2f!important;caret-color:#d32f2f!important}.red.darken-3{background-color:#c62828!important;border-color:#c62828!important}.red--text.text--darken-3{color:#c62828!important;caret-color:#c62828!important}.red.darken-4{background-color:#b71c1c!important;border-color:#b71c1c!important}.red--text.text--darken-4{color:#b71c1c!important;caret-color:#b71c1c!important}.red.accent-1{background-color:#ff8a80!important;border-color:#ff8a80!important}.red--text.text--accent-1{color:#ff8a80!important;caret-color:#ff8a80!important}.red.accent-2{background-color:#ff5252!important;border-color:#ff5252!important}.red--text.text--accent-2{color:#ff5252!important;caret-color:#ff5252!important}.red.accent-3{background-color:#ff1744!important;border-color:#ff1744!important}.red--text.text--accent-3{color:#ff1744!important;caret-color:#ff1744!important}.red.accent-4{background-color:#d50000!important;border-color:#d50000!important}.red--text.text--accent-4{color:#d50000!important;caret-color:#d50000!important}.pink{background-color:#e91e63!important;border-color:#e91e63!important}.pink--text{color:#e91e63!important;caret-color:#e91e63!important}.pink.lighten-5{background-color:#fce4ec!important;border-color:#fce4ec!important}.pink--text.text--lighten-5{color:#fce4ec!important;caret-color:#fce4ec!important}.pink.lighten-4{background-color:#f8bbd0!important;border-color:#f8bbd0!important}.pink--text.text--lighten-4{color:#f8bbd0!important;caret-color:#f8bbd0!important}.pink.lighten-3{background-color:#f48fb1!important;border-color:#f48fb1!important}.pink--text.text--lighten-3{color:#f48fb1!important;caret-color:#f48fb1!important}.pink.lighten-2{background-color:#f06292!important;border-color:#f06292!important}.pink--text.text--lighten-2{color:#f06292!important;caret-color:#f06292!important}.pink.lighten-1{background-color:#ec407a!important;border-color:#ec407a!important}.pink--text.text--lighten-1{color:#ec407a!important;caret-color:#ec407a!important}.pink.darken-1{background-color:#d81b60!important;border-color:#d81b60!important}.pink--text.text--darken-1{color:#d81b60!important;caret-color:#d81b60!important}.pink.darken-2{background-color:#c2185b!important;border-color:#c2185b!important}.pink--text.text--darken-2{color:#c2185b!important;caret-color:#c2185b!important}.pink.darken-3{background-color:#ad1457!important;border-color:#ad1457!important}.pink--text.text--darken-3{color:#ad1457!important;caret-color:#ad1457!important}.pink.darken-4{background-color:#880e4f!important;border-color:#880e4f!important}.pink--text.text--darken-4{color:#880e4f!important;caret-color:#880e4f!important}.pink.accent-1{background-color:#ff80ab!important;border-color:#ff80ab!important}.pink--text.text--accent-1{color:#ff80ab!important;caret-color:#ff80ab!important}.pink.accent-2{background-color:#ff4081!important;border-color:#ff4081!important}.pink--text.text--accent-2{color:#ff4081!important;caret-color:#ff4081!important}.pink.accent-3{background-color:#f50057!important;border-color:#f50057!important}.pink--text.text--accent-3{color:#f50057!important;caret-color:#f50057!important}.pink.accent-4{background-color:#c51162!important;border-color:#c51162!important}.pink--text.text--accent-4{color:#c51162!important;caret-color:#c51162!important}.purple{background-color:#9c27b0!important;border-color:#9c27b0!important}.purple--text{color:#9c27b0!important;caret-color:#9c27b0!important}.purple.lighten-5{background-color:#f3e5f5!important;border-color:#f3e5f5!important}.purple--text.text--lighten-5{color:#f3e5f5!important;caret-color:#f3e5f5!important}.purple.lighten-4{background-color:#e1bee7!important;border-color:#e1bee7!important}.purple--text.text--lighten-4{color:#e1bee7!important;caret-color:#e1bee7!important}.purple.lighten-3{background-color:#ce93d8!important;border-color:#ce93d8!important}.purple--text.text--lighten-3{color:#ce93d8!important;caret-color:#ce93d8!important}.purple.lighten-2{background-color:#ba68c8!important;border-color:#ba68c8!important}.purple--text.text--lighten-2{color:#ba68c8!important;caret-color:#ba68c8!important}.purple.lighten-1{background-color:#ab47bc!important;border-color:#ab47bc!important}.purple--text.text--lighten-1{color:#ab47bc!important;caret-color:#ab47bc!important}.purple.darken-1{background-color:#8e24aa!important;border-color:#8e24aa!important}.purple--text.text--darken-1{color:#8e24aa!important;caret-color:#8e24aa!important}.purple.darken-2{background-color:#7b1fa2!important;border-color:#7b1fa2!important}.purple--text.text--darken-2{color:#7b1fa2!important;caret-color:#7b1fa2!important}.purple.darken-3{background-color:#6a1b9a!important;border-color:#6a1b9a!important}.purple--text.text--darken-3{color:#6a1b9a!important;caret-color:#6a1b9a!important}.purple.darken-4{background-color:#4a148c!important;border-color:#4a148c!important}.purple--text.text--darken-4{color:#4a148c!important;caret-color:#4a148c!important}.purple.accent-1{background-color:#ea80fc!important;border-color:#ea80fc!important}.purple--text.text--accent-1{color:#ea80fc!important;caret-color:#ea80fc!important}.purple.accent-2{background-color:#e040fb!important;border-color:#e040fb!important}.purple--text.text--accent-2{color:#e040fb!important;caret-color:#e040fb!important}.purple.accent-3{background-color:#d500f9!important;border-color:#d500f9!important}.purple--text.text--accent-3{color:#d500f9!important;caret-color:#d500f9!important}.purple.accent-4{background-color:#a0f!important;border-color:#a0f!important}.purple--text.text--accent-4{color:#a0f!important;caret-color:#a0f!important}.deep-purple{background-color:#673ab7!important;border-color:#673ab7!important}.deep-purple--text{color:#673ab7!important;caret-color:#673ab7!important}.deep-purple.lighten-5{background-color:#ede7f6!important;border-color:#ede7f6!important}.deep-purple--text.text--lighten-5{color:#ede7f6!important;caret-color:#ede7f6!important}.deep-purple.lighten-4{background-color:#d1c4e9!important;border-color:#d1c4e9!important}.deep-purple--text.text--lighten-4{color:#d1c4e9!important;caret-color:#d1c4e9!important}.deep-purple.lighten-3{background-color:#b39ddb!important;border-color:#b39ddb!important}.deep-purple--text.text--lighten-3{color:#b39ddb!important;caret-color:#b39ddb!important}.deep-purple.lighten-2{background-color:#9575cd!important;border-color:#9575cd!important}.deep-purple--text.text--lighten-2{color:#9575cd!important;caret-color:#9575cd!important}.deep-purple.lighten-1{background-color:#7e57c2!important;border-color:#7e57c2!important}.deep-purple--text.text--lighten-1{color:#7e57c2!important;caret-color:#7e57c2!important}.deep-purple.darken-1{background-color:#5e35b1!important;border-color:#5e35b1!important}.deep-purple--text.text--darken-1{color:#5e35b1!important;caret-color:#5e35b1!important}.deep-purple.darken-2{background-color:#512da8!important;border-color:#512da8!important}.deep-purple--text.text--darken-2{color:#512da8!important;caret-color:#512da8!important}.deep-purple.darken-3{background-color:#4527a0!important;border-color:#4527a0!important}.deep-purple--text.text--darken-3{color:#4527a0!important;caret-color:#4527a0!important}.deep-purple.darken-4{background-color:#311b92!important;border-color:#311b92!important}.deep-purple--text.text--darken-4{color:#311b92!important;caret-color:#311b92!important}.deep-purple.accent-1{background-color:#b388ff!important;border-color:#b388ff!important}.deep-purple--text.text--accent-1{color:#b388ff!important;caret-color:#b388ff!important}.deep-purple.accent-2{background-color:#7c4dff!important;border-color:#7c4dff!important}.deep-purple--text.text--accent-2{color:#7c4dff!important;caret-color:#7c4dff!important}.deep-purple.accent-3{background-color:#651fff!important;border-color:#651fff!important}.deep-purple--text.text--accent-3{color:#651fff!important;caret-color:#651fff!important}.deep-purple.accent-4{background-color:#6200ea!important;border-color:#6200ea!important}.deep-purple--text.text--accent-4{color:#6200ea!important;caret-color:#6200ea!important}.indigo{background-color:#3f51b5!important;border-color:#3f51b5!important}.indigo--text{color:#3f51b5!important;caret-color:#3f51b5!important}.indigo.lighten-5{background-color:#e8eaf6!important;border-color:#e8eaf6!important}.indigo--text.text--lighten-5{color:#e8eaf6!important;caret-color:#e8eaf6!important}.indigo.lighten-4{background-color:#c5cae9!important;border-color:#c5cae9!important}.indigo--text.text--lighten-4{color:#c5cae9!important;caret-color:#c5cae9!important}.indigo.lighten-3{background-color:#9fa8da!important;border-color:#9fa8da!important}.indigo--text.text--lighten-3{color:#9fa8da!important;caret-color:#9fa8da!important}.indigo.lighten-2{background-color:#7986cb!important;border-color:#7986cb!important}.indigo--text.text--lighten-2{color:#7986cb!important;caret-color:#7986cb!important}.indigo.lighten-1{background-color:#5c6bc0!important;border-color:#5c6bc0!important}.indigo--text.text--lighten-1{color:#5c6bc0!important;caret-color:#5c6bc0!important}.indigo.darken-1{background-color:#3949ab!important;border-color:#3949ab!important}.indigo--text.text--darken-1{color:#3949ab!important;caret-color:#3949ab!important}.indigo.darken-2{background-color:#303f9f!important;border-color:#303f9f!important}.indigo--text.text--darken-2{color:#303f9f!important;caret-color:#303f9f!important}.indigo.darken-3{background-color:#283593!important;border-color:#283593!important}.indigo--text.text--darken-3{color:#283593!important;caret-color:#283593!important}.indigo.darken-4{background-color:#1a237e!important;border-color:#1a237e!important}.indigo--text.text--darken-4{color:#1a237e!important;caret-color:#1a237e!important}.indigo.accent-1{background-color:#8c9eff!important;border-color:#8c9eff!important}.indigo--text.text--accent-1{color:#8c9eff!important;caret-color:#8c9eff!important}.indigo.accent-2{background-color:#536dfe!important;border-color:#536dfe!important}.indigo--text.text--accent-2{color:#536dfe!important;caret-color:#536dfe!important}.indigo.accent-3{background-color:#3d5afe!important;border-color:#3d5afe!important}.indigo--text.text--accent-3{color:#3d5afe!important;caret-color:#3d5afe!important}.indigo.accent-4{background-color:#304ffe!important;border-color:#304ffe!important}.indigo--text.text--accent-4{color:#304ffe!important;caret-color:#304ffe!important}.blue{background-color:#2196f3!important;border-color:#2196f3!important}.blue--text{color:#2196f3!important;caret-color:#2196f3!important}.blue.lighten-5{background-color:#e3f2fd!important;border-color:#e3f2fd!important}.blue--text.text--lighten-5{color:#e3f2fd!important;caret-color:#e3f2fd!important}.blue.lighten-4{background-color:#bbdefb!important;border-color:#bbdefb!important}.blue--text.text--lighten-4{color:#bbdefb!important;caret-color:#bbdefb!important}.blue.lighten-3{background-color:#90caf9!important;border-color:#90caf9!important}.blue--text.text--lighten-3{color:#90caf9!important;caret-color:#90caf9!important}.blue.lighten-2{background-color:#64b5f6!important;border-color:#64b5f6!important}.blue--text.text--lighten-2{color:#64b5f6!important;caret-color:#64b5f6!important}.blue.lighten-1{background-color:#42a5f5!important;border-color:#42a5f5!important}.blue--text.text--lighten-1{color:#42a5f5!important;caret-color:#42a5f5!important}.blue.darken-1{background-color:#1e88e5!important;border-color:#1e88e5!important}.blue--text.text--darken-1{color:#1e88e5!important;caret-color:#1e88e5!important}.blue.darken-2{background-color:#1976d2!important;border-color:#1976d2!important}.blue--text.text--darken-2{color:#1976d2!important;caret-color:#1976d2!important}.blue.darken-3{background-color:#1565c0!important;border-color:#1565c0!important}.blue--text.text--darken-3{color:#1565c0!important;caret-color:#1565c0!important}.blue.darken-4{background-color:#0d47a1!important;border-color:#0d47a1!important}.blue--text.text--darken-4{color:#0d47a1!important;caret-color:#0d47a1!important}.blue.accent-1{background-color:#82b1ff!important;border-color:#82b1ff!important}.blue--text.text--accent-1{color:#82b1ff!important;caret-color:#82b1ff!important}.blue.accent-2{background-color:#448aff!important;border-color:#448aff!important}.blue--text.text--accent-2{color:#448aff!important;caret-color:#448aff!important}.blue.accent-3{background-color:#2979ff!important;border-color:#2979ff!important}.blue--text.text--accent-3{color:#2979ff!important;caret-color:#2979ff!important}.blue.accent-4{background-color:#2962ff!important;border-color:#2962ff!important}.blue--text.text--accent-4{color:#2962ff!important;caret-color:#2962ff!important}.light-blue{background-color:#03a9f4!important;border-color:#03a9f4!important}.light-blue--text{color:#03a9f4!important;caret-color:#03a9f4!important}.light-blue.lighten-5{background-color:#e1f5fe!important;border-color:#e1f5fe!important}.light-blue--text.text--lighten-5{color:#e1f5fe!important;caret-color:#e1f5fe!important}.light-blue.lighten-4{background-color:#b3e5fc!important;border-color:#b3e5fc!important}.light-blue--text.text--lighten-4{color:#b3e5fc!important;caret-color:#b3e5fc!important}.light-blue.lighten-3{background-color:#81d4fa!important;border-color:#81d4fa!important}.light-blue--text.text--lighten-3{color:#81d4fa!important;caret-color:#81d4fa!important}.light-blue.lighten-2{background-color:#4fc3f7!important;border-color:#4fc3f7!important}.light-blue--text.text--lighten-2{color:#4fc3f7!important;caret-color:#4fc3f7!important}.light-blue.lighten-1{background-color:#29b6f6!important;border-color:#29b6f6!important}.light-blue--text.text--lighten-1{color:#29b6f6!important;caret-color:#29b6f6!important}.light-blue.darken-1{background-color:#039be5!important;border-color:#039be5!important}.light-blue--text.text--darken-1{color:#039be5!important;caret-color:#039be5!important}.light-blue.darken-2{background-color:#0288d1!important;border-color:#0288d1!important}.light-blue--text.text--darken-2{color:#0288d1!important;caret-color:#0288d1!important}.light-blue.darken-3{background-color:#0277bd!important;border-color:#0277bd!important}.light-blue--text.text--darken-3{color:#0277bd!important;caret-color:#0277bd!important}.light-blue.darken-4{background-color:#01579b!important;border-color:#01579b!important}.light-blue--text.text--darken-4{color:#01579b!important;caret-color:#01579b!important}.light-blue.accent-1{background-color:#80d8ff!important;border-color:#80d8ff!important}.light-blue--text.text--accent-1{color:#80d8ff!important;caret-color:#80d8ff!important}.light-blue.accent-2{background-color:#40c4ff!important;border-color:#40c4ff!important}.light-blue--text.text--accent-2{color:#40c4ff!important;caret-color:#40c4ff!important}.light-blue.accent-3{background-color:#00b0ff!important;border-color:#00b0ff!important}.light-blue--text.text--accent-3{color:#00b0ff!important;caret-color:#00b0ff!important}.light-blue.accent-4{background-color:#0091ea!important;border-color:#0091ea!important}.light-blue--text.text--accent-4{color:#0091ea!important;caret-color:#0091ea!important}.cyan{background-color:#00bcd4!important;border-color:#00bcd4!important}.cyan--text{color:#00bcd4!important;caret-color:#00bcd4!important}.cyan.lighten-5{background-color:#e0f7fa!important;border-color:#e0f7fa!important}.cyan--text.text--lighten-5{color:#e0f7fa!important;caret-color:#e0f7fa!important}.cyan.lighten-4{background-color:#b2ebf2!important;border-color:#b2ebf2!important}.cyan--text.text--lighten-4{color:#b2ebf2!important;caret-color:#b2ebf2!important}.cyan.lighten-3{background-color:#80deea!important;border-color:#80deea!important}.cyan--text.text--lighten-3{color:#80deea!important;caret-color:#80deea!important}.cyan.lighten-2{background-color:#4dd0e1!important;border-color:#4dd0e1!important}.cyan--text.text--lighten-2{color:#4dd0e1!important;caret-color:#4dd0e1!important}.cyan.lighten-1{background-color:#26c6da!important;border-color:#26c6da!important}.cyan--text.text--lighten-1{color:#26c6da!important;caret-color:#26c6da!important}.cyan.darken-1{background-color:#00acc1!important;border-color:#00acc1!important}.cyan--text.text--darken-1{color:#00acc1!important;caret-color:#00acc1!important}.cyan.darken-2{background-color:#0097a7!important;border-color:#0097a7!important}.cyan--text.text--darken-2{color:#0097a7!important;caret-color:#0097a7!important}.cyan.darken-3{background-color:#00838f!important;border-color:#00838f!important}.cyan--text.text--darken-3{color:#00838f!important;caret-color:#00838f!important}.cyan.darken-4{background-color:#006064!important;border-color:#006064!important}.cyan--text.text--darken-4{color:#006064!important;caret-color:#006064!important}.cyan.accent-1{background-color:#84ffff!important;border-color:#84ffff!important}.cyan--text.text--accent-1{color:#84ffff!important;caret-color:#84ffff!important}.cyan.accent-2{background-color:#18ffff!important;border-color:#18ffff!important}.cyan--text.text--accent-2{color:#18ffff!important;caret-color:#18ffff!important}.cyan.accent-3{background-color:#00e5ff!important;border-color:#00e5ff!important}.cyan--text.text--accent-3{color:#00e5ff!important;caret-color:#00e5ff!important}.cyan.accent-4{background-color:#00b8d4!important;border-color:#00b8d4!important}.cyan--text.text--accent-4{color:#00b8d4!important;caret-color:#00b8d4!important}.teal{background-color:#009688!important;border-color:#009688!important}.teal--text{color:#009688!important;caret-color:#009688!important}.teal.lighten-5{background-color:#e0f2f1!important;border-color:#e0f2f1!important}.teal--text.text--lighten-5{color:#e0f2f1!important;caret-color:#e0f2f1!important}.teal.lighten-4{background-color:#b2dfdb!important;border-color:#b2dfdb!important}.teal--text.text--lighten-4{color:#b2dfdb!important;caret-color:#b2dfdb!important}.teal.lighten-3{background-color:#80cbc4!important;border-color:#80cbc4!important}.teal--text.text--lighten-3{color:#80cbc4!important;caret-color:#80cbc4!important}.teal.lighten-2{background-color:#4db6ac!important;border-color:#4db6ac!important}.teal--text.text--lighten-2{color:#4db6ac!important;caret-color:#4db6ac!important}.teal.lighten-1{background-color:#26a69a!important;border-color:#26a69a!important}.teal--text.text--lighten-1{color:#26a69a!important;caret-color:#26a69a!important}.teal.darken-1{background-color:#00897b!important;border-color:#00897b!important}.teal--text.text--darken-1{color:#00897b!important;caret-color:#00897b!important}.teal.darken-2{background-color:#00796b!important;border-color:#00796b!important}.teal--text.text--darken-2{color:#00796b!important;caret-color:#00796b!important}.teal.darken-3{background-color:#00695c!important;border-color:#00695c!important}.teal--text.text--darken-3{color:#00695c!important;caret-color:#00695c!important}.teal.darken-4{background-color:#004d40!important;border-color:#004d40!important}.teal--text.text--darken-4{color:#004d40!important;caret-color:#004d40!important}.teal.accent-1{background-color:#a7ffeb!important;border-color:#a7ffeb!important}.teal--text.text--accent-1{color:#a7ffeb!important;caret-color:#a7ffeb!important}.teal.accent-2{background-color:#64ffda!important;border-color:#64ffda!important}.teal--text.text--accent-2{color:#64ffda!important;caret-color:#64ffda!important}.teal.accent-3{background-color:#1de9b6!important;border-color:#1de9b6!important}.teal--text.text--accent-3{color:#1de9b6!important;caret-color:#1de9b6!important}.teal.accent-4{background-color:#00bfa5!important;border-color:#00bfa5!important}.teal--text.text--accent-4{color:#00bfa5!important;caret-color:#00bfa5!important}.green{background-color:#4caf50!important;border-color:#4caf50!important}.green--text{color:#4caf50!important;caret-color:#4caf50!important}.green.lighten-5{background-color:#e8f5e9!important;border-color:#e8f5e9!important}.green--text.text--lighten-5{color:#e8f5e9!important;caret-color:#e8f5e9!important}.green.lighten-4{background-color:#c8e6c9!important;border-color:#c8e6c9!important}.green--text.text--lighten-4{color:#c8e6c9!important;caret-color:#c8e6c9!important}.green.lighten-3{background-color:#a5d6a7!important;border-color:#a5d6a7!important}.green--text.text--lighten-3{color:#a5d6a7!important;caret-color:#a5d6a7!important}.green.lighten-2{background-color:#81c784!important;border-color:#81c784!important}.green--text.text--lighten-2{color:#81c784!important;caret-color:#81c784!important}.green.lighten-1{background-color:#66bb6a!important;border-color:#66bb6a!important}.green--text.text--lighten-1{color:#66bb6a!important;caret-color:#66bb6a!important}.green.darken-1{background-color:#43a047!important;border-color:#43a047!important}.green--text.text--darken-1{color:#43a047!important;caret-color:#43a047!important}.green.darken-2{background-color:#388e3c!important;border-color:#388e3c!important}.green--text.text--darken-2{color:#388e3c!important;caret-color:#388e3c!important}.green.darken-3{background-color:#2e7d32!important;border-color:#2e7d32!important}.green--text.text--darken-3{color:#2e7d32!important;caret-color:#2e7d32!important}.green.darken-4{background-color:#1b5e20!important;border-color:#1b5e20!important}.green--text.text--darken-4{color:#1b5e20!important;caret-color:#1b5e20!important}.green.accent-1{background-color:#b9f6ca!important;border-color:#b9f6ca!important}.green--text.text--accent-1{color:#b9f6ca!important;caret-color:#b9f6ca!important}.green.accent-2{background-color:#69f0ae!important;border-color:#69f0ae!important}.green--text.text--accent-2{color:#69f0ae!important;caret-color:#69f0ae!important}.green.accent-3{background-color:#00e676!important;border-color:#00e676!important}.green--text.text--accent-3{color:#00e676!important;caret-color:#00e676!important}.green.accent-4{background-color:#00c853!important;border-color:#00c853!important}.green--text.text--accent-4{color:#00c853!important;caret-color:#00c853!important}.light-green{background-color:#8bc34a!important;border-color:#8bc34a!important}.light-green--text{color:#8bc34a!important;caret-color:#8bc34a!important}.light-green.lighten-5{background-color:#f1f8e9!important;border-color:#f1f8e9!important}.light-green--text.text--lighten-5{color:#f1f8e9!important;caret-color:#f1f8e9!important}.light-green.lighten-4{background-color:#dcedc8!important;border-color:#dcedc8!important}.light-green--text.text--lighten-4{color:#dcedc8!important;caret-color:#dcedc8!important}.light-green.lighten-3{background-color:#c5e1a5!important;border-color:#c5e1a5!important}.light-green--text.text--lighten-3{color:#c5e1a5!important;caret-color:#c5e1a5!important}.light-green.lighten-2{background-color:#aed581!important;border-color:#aed581!important}.light-green--text.text--lighten-2{color:#aed581!important;caret-color:#aed581!important}.light-green.lighten-1{background-color:#9ccc65!important;border-color:#9ccc65!important}.light-green--text.text--lighten-1{color:#9ccc65!important;caret-color:#9ccc65!important}.light-green.darken-1{background-color:#7cb342!important;border-color:#7cb342!important}.light-green--text.text--darken-1{color:#7cb342!important;caret-color:#7cb342!important}.light-green.darken-2{background-color:#689f38!important;border-color:#689f38!important}.light-green--text.text--darken-2{color:#689f38!important;caret-color:#689f38!important}.light-green.darken-3{background-color:#558b2f!important;border-color:#558b2f!important}.light-green--text.text--darken-3{color:#558b2f!important;caret-color:#558b2f!important}.light-green.darken-4{background-color:#33691e!important;border-color:#33691e!important}.light-green--text.text--darken-4{color:#33691e!important;caret-color:#33691e!important}.light-green.accent-1{background-color:#ccff90!important;border-color:#ccff90!important}.light-green--text.text--accent-1{color:#ccff90!important;caret-color:#ccff90!important}.light-green.accent-2{background-color:#b2ff59!important;border-color:#b2ff59!important}.light-green--text.text--accent-2{color:#b2ff59!important;caret-color:#b2ff59!important}.light-green.accent-3{background-color:#76ff03!important;border-color:#76ff03!important}.light-green--text.text--accent-3{color:#76ff03!important;caret-color:#76ff03!important}.light-green.accent-4{background-color:#64dd17!important;border-color:#64dd17!important}.light-green--text.text--accent-4{color:#64dd17!important;caret-color:#64dd17!important}.lime{background-color:#cddc39!important;border-color:#cddc39!important}.lime--text{color:#cddc39!important;caret-color:#cddc39!important}.lime.lighten-5{background-color:#f9fbe7!important;border-color:#f9fbe7!important}.lime--text.text--lighten-5{color:#f9fbe7!important;caret-color:#f9fbe7!important}.lime.lighten-4{background-color:#f0f4c3!important;border-color:#f0f4c3!important}.lime--text.text--lighten-4{color:#f0f4c3!important;caret-color:#f0f4c3!important}.lime.lighten-3{background-color:#e6ee9c!important;border-color:#e6ee9c!important}.lime--text.text--lighten-3{color:#e6ee9c!important;caret-color:#e6ee9c!important}.lime.lighten-2{background-color:#dce775!important;border-color:#dce775!important}.lime--text.text--lighten-2{color:#dce775!important;caret-color:#dce775!important}.lime.lighten-1{background-color:#d4e157!important;border-color:#d4e157!important}.lime--text.text--lighten-1{color:#d4e157!important;caret-color:#d4e157!important}.lime.darken-1{background-color:#c0ca33!important;border-color:#c0ca33!important}.lime--text.text--darken-1{color:#c0ca33!important;caret-color:#c0ca33!important}.lime.darken-2{background-color:#afb42b!important;border-color:#afb42b!important}.lime--text.text--darken-2{color:#afb42b!important;caret-color:#afb42b!important}.lime.darken-3{background-color:#9e9d24!important;border-color:#9e9d24!important}.lime--text.text--darken-3{color:#9e9d24!important;caret-color:#9e9d24!important}.lime.darken-4{background-color:#827717!important;border-color:#827717!important}.lime--text.text--darken-4{color:#827717!important;caret-color:#827717!important}.lime.accent-1{background-color:#f4ff81!important;border-color:#f4ff81!important}.lime--text.text--accent-1{color:#f4ff81!important;caret-color:#f4ff81!important}.lime.accent-2{background-color:#eeff41!important;border-color:#eeff41!important}.lime--text.text--accent-2{color:#eeff41!important;caret-color:#eeff41!important}.lime.accent-3{background-color:#c6ff00!important;border-color:#c6ff00!important}.lime--text.text--accent-3{color:#c6ff00!important;caret-color:#c6ff00!important}.lime.accent-4{background-color:#aeea00!important;border-color:#aeea00!important}.lime--text.text--accent-4{color:#aeea00!important;caret-color:#aeea00!important}.yellow{background-color:#ffeb3b!important;border-color:#ffeb3b!important}.yellow--text{color:#ffeb3b!important;caret-color:#ffeb3b!important}.yellow.lighten-5{background-color:#fffde7!important;border-color:#fffde7!important}.yellow--text.text--lighten-5{color:#fffde7!important;caret-color:#fffde7!important}.yellow.lighten-4{background-color:#fff9c4!important;border-color:#fff9c4!important}.yellow--text.text--lighten-4{color:#fff9c4!important;caret-color:#fff9c4!important}.yellow.lighten-3{background-color:#fff59d!important;border-color:#fff59d!important}.yellow--text.text--lighten-3{color:#fff59d!important;caret-color:#fff59d!important}.yellow.lighten-2{background-color:#fff176!important;border-color:#fff176!important}.yellow--text.text--lighten-2{color:#fff176!important;caret-color:#fff176!important}.yellow.lighten-1{background-color:#ffee58!important;border-color:#ffee58!important}.yellow--text.text--lighten-1{color:#ffee58!important;caret-color:#ffee58!important}.yellow.darken-1{background-color:#fdd835!important;border-color:#fdd835!important}.yellow--text.text--darken-1{color:#fdd835!important;caret-color:#fdd835!important}.yellow.darken-2{background-color:#fbc02d!important;border-color:#fbc02d!important}.yellow--text.text--darken-2{color:#fbc02d!important;caret-color:#fbc02d!important}.yellow.darken-3{background-color:#f9a825!important;border-color:#f9a825!important}.yellow--text.text--darken-3{color:#f9a825!important;caret-color:#f9a825!important}.yellow.darken-4{background-color:#f57f17!important;border-color:#f57f17!important}.yellow--text.text--darken-4{color:#f57f17!important;caret-color:#f57f17!important}.yellow.accent-1{background-color:#ffff8d!important;border-color:#ffff8d!important}.yellow--text.text--accent-1{color:#ffff8d!important;caret-color:#ffff8d!important}.yellow.accent-2{background-color:#ff0!important;border-color:#ff0!important}.yellow--text.text--accent-2{color:#ff0!important;caret-color:#ff0!important}.yellow.accent-3{background-color:#ffea00!important;border-color:#ffea00!important}.yellow--text.text--accent-3{color:#ffea00!important;caret-color:#ffea00!important}.yellow.accent-4{background-color:#ffd600!important;border-color:#ffd600!important}.yellow--text.text--accent-4{color:#ffd600!important;caret-color:#ffd600!important}.amber{background-color:#ffc107!important;border-color:#ffc107!important}.amber--text{color:#ffc107!important;caret-color:#ffc107!important}.amber.lighten-5{background-color:#fff8e1!important;border-color:#fff8e1!important}.amber--text.text--lighten-5{color:#fff8e1!important;caret-color:#fff8e1!important}.amber.lighten-4{background-color:#ffecb3!important;border-color:#ffecb3!important}.amber--text.text--lighten-4{color:#ffecb3!important;caret-color:#ffecb3!important}.amber.lighten-3{background-color:#ffe082!important;border-color:#ffe082!important}.amber--text.text--lighten-3{color:#ffe082!important;caret-color:#ffe082!important}.amber.lighten-2{background-color:#ffd54f!important;border-color:#ffd54f!important}.amber--text.text--lighten-2{color:#ffd54f!important;caret-color:#ffd54f!important}.amber.lighten-1{background-color:#ffca28!important;border-color:#ffca28!important}.amber--text.text--lighten-1{color:#ffca28!important;caret-color:#ffca28!important}.amber.darken-1{background-color:#ffb300!important;border-color:#ffb300!important}.amber--text.text--darken-1{color:#ffb300!important;caret-color:#ffb300!important}.amber.darken-2{background-color:#ffa000!important;border-color:#ffa000!important}.amber--text.text--darken-2{color:#ffa000!important;caret-color:#ffa000!important}.amber.darken-3{background-color:#ff8f00!important;border-color:#ff8f00!important}.amber--text.text--darken-3{color:#ff8f00!important;caret-color:#ff8f00!important}.amber.darken-4{background-color:#ff6f00!important;border-color:#ff6f00!important}.amber--text.text--darken-4{color:#ff6f00!important;caret-color:#ff6f00!important}.amber.accent-1{background-color:#ffe57f!important;border-color:#ffe57f!important}.amber--text.text--accent-1{color:#ffe57f!important;caret-color:#ffe57f!important}.amber.accent-2{background-color:#ffd740!important;border-color:#ffd740!important}.amber--text.text--accent-2{color:#ffd740!important;caret-color:#ffd740!important}.amber.accent-3{background-color:#ffc400!important;border-color:#ffc400!important}.amber--text.text--accent-3{color:#ffc400!important;caret-color:#ffc400!important}.amber.accent-4{background-color:#ffab00!important;border-color:#ffab00!important}.amber--text.text--accent-4{color:#ffab00!important;caret-color:#ffab00!important}.orange{background-color:#ff9800!important;border-color:#ff9800!important}.orange--text{color:#ff9800!important;caret-color:#ff9800!important}.orange.lighten-5{background-color:#fff3e0!important;border-color:#fff3e0!important}.orange--text.text--lighten-5{color:#fff3e0!important;caret-color:#fff3e0!important}.orange.lighten-4{background-color:#ffe0b2!important;border-color:#ffe0b2!important}.orange--text.text--lighten-4{color:#ffe0b2!important;caret-color:#ffe0b2!important}.orange.lighten-3{background-color:#ffcc80!important;border-color:#ffcc80!important}.orange--text.text--lighten-3{color:#ffcc80!important;caret-color:#ffcc80!important}.orange.lighten-2{background-color:#ffb74d!important;border-color:#ffb74d!important}.orange--text.text--lighten-2{color:#ffb74d!important;caret-color:#ffb74d!important}.orange.lighten-1{background-color:#ffa726!important;border-color:#ffa726!important}.orange--text.text--lighten-1{color:#ffa726!important;caret-color:#ffa726!important}.orange.darken-1{background-color:#fb8c00!important;border-color:#fb8c00!important}.orange--text.text--darken-1{color:#fb8c00!important;caret-color:#fb8c00!important}.orange.darken-2{background-color:#f57c00!important;border-color:#f57c00!important}.orange--text.text--darken-2{color:#f57c00!important;caret-color:#f57c00!important}.orange.darken-3{background-color:#ef6c00!important;border-color:#ef6c00!important}.orange--text.text--darken-3{color:#ef6c00!important;caret-color:#ef6c00!important}.orange.darken-4{background-color:#e65100!important;border-color:#e65100!important}.orange--text.text--darken-4{color:#e65100!important;caret-color:#e65100!important}.orange.accent-1{background-color:#ffd180!important;border-color:#ffd180!important}.orange--text.text--accent-1{color:#ffd180!important;caret-color:#ffd180!important}.orange.accent-2{background-color:#ffab40!important;border-color:#ffab40!important}.orange--text.text--accent-2{color:#ffab40!important;caret-color:#ffab40!important}.orange.accent-3{background-color:#ff9100!important;border-color:#ff9100!important}.orange--text.text--accent-3{color:#ff9100!important;caret-color:#ff9100!important}.orange.accent-4{background-color:#ff6d00!important;border-color:#ff6d00!important}.orange--text.text--accent-4{color:#ff6d00!important;caret-color:#ff6d00!important}.deep-orange{background-color:#ff5722!important;border-color:#ff5722!important}.deep-orange--text{color:#ff5722!important;caret-color:#ff5722!important}.deep-orange.lighten-5{background-color:#fbe9e7!important;border-color:#fbe9e7!important}.deep-orange--text.text--lighten-5{color:#fbe9e7!important;caret-color:#fbe9e7!important}.deep-orange.lighten-4{background-color:#ffccbc!important;border-color:#ffccbc!important}.deep-orange--text.text--lighten-4{color:#ffccbc!important;caret-color:#ffccbc!important}.deep-orange.lighten-3{background-color:#ffab91!important;border-color:#ffab91!important}.deep-orange--text.text--lighten-3{color:#ffab91!important;caret-color:#ffab91!important}.deep-orange.lighten-2{background-color:#ff8a65!important;border-color:#ff8a65!important}.deep-orange--text.text--lighten-2{color:#ff8a65!important;caret-color:#ff8a65!important}.deep-orange.lighten-1{background-color:#ff7043!important;border-color:#ff7043!important}.deep-orange--text.text--lighten-1{color:#ff7043!important;caret-color:#ff7043!important}.deep-orange.darken-1{background-color:#f4511e!important;border-color:#f4511e!important}.deep-orange--text.text--darken-1{color:#f4511e!important;caret-color:#f4511e!important}.deep-orange.darken-2{background-color:#e64a19!important;border-color:#e64a19!important}.deep-orange--text.text--darken-2{color:#e64a19!important;caret-color:#e64a19!important}.deep-orange.darken-3{background-color:#d84315!important;border-color:#d84315!important}.deep-orange--text.text--darken-3{color:#d84315!important;caret-color:#d84315!important}.deep-orange.darken-4{background-color:#bf360c!important;border-color:#bf360c!important}.deep-orange--text.text--darken-4{color:#bf360c!important;caret-color:#bf360c!important}.deep-orange.accent-1{background-color:#ff9e80!important;border-color:#ff9e80!important}.deep-orange--text.text--accent-1{color:#ff9e80!important;caret-color:#ff9e80!important}.deep-orange.accent-2{background-color:#ff6e40!important;border-color:#ff6e40!important}.deep-orange--text.text--accent-2{color:#ff6e40!important;caret-color:#ff6e40!important}.deep-orange.accent-3{background-color:#ff3d00!important;border-color:#ff3d00!important}.deep-orange--text.text--accent-3{color:#ff3d00!important;caret-color:#ff3d00!important}.deep-orange.accent-4{background-color:#dd2c00!important;border-color:#dd2c00!important}.deep-orange--text.text--accent-4{color:#dd2c00!important;caret-color:#dd2c00!important}.brown{background-color:#795548!important;border-color:#795548!important}.brown--text{color:#795548!important;caret-color:#795548!important}.brown.lighten-5{background-color:#efebe9!important;border-color:#efebe9!important}.brown--text.text--lighten-5{color:#efebe9!important;caret-color:#efebe9!important}.brown.lighten-4{background-color:#d7ccc8!important;border-color:#d7ccc8!important}.brown--text.text--lighten-4{color:#d7ccc8!important;caret-color:#d7ccc8!important}.brown.lighten-3{background-color:#bcaaa4!important;border-color:#bcaaa4!important}.brown--text.text--lighten-3{color:#bcaaa4!important;caret-color:#bcaaa4!important}.brown.lighten-2{background-color:#a1887f!important;border-color:#a1887f!important}.brown--text.text--lighten-2{color:#a1887f!important;caret-color:#a1887f!important}.brown.lighten-1{background-color:#8d6e63!important;border-color:#8d6e63!important}.brown--text.text--lighten-1{color:#8d6e63!important;caret-color:#8d6e63!important}.brown.darken-1{background-color:#6d4c41!important;border-color:#6d4c41!important}.brown--text.text--darken-1{color:#6d4c41!important;caret-color:#6d4c41!important}.brown.darken-2{background-color:#5d4037!important;border-color:#5d4037!important}.brown--text.text--darken-2{color:#5d4037!important;caret-color:#5d4037!important}.brown.darken-3{background-color:#4e342e!important;border-color:#4e342e!important}.brown--text.text--darken-3{color:#4e342e!important;caret-color:#4e342e!important}.brown.darken-4{background-color:#3e2723!important;border-color:#3e2723!important}.brown--text.text--darken-4{color:#3e2723!important;caret-color:#3e2723!important}.blue-grey{background-color:#607d8b!important;border-color:#607d8b!important}.blue-grey--text{color:#607d8b!important;caret-color:#607d8b!important}.blue-grey.lighten-5{background-color:#eceff1!important;border-color:#eceff1!important}.blue-grey--text.text--lighten-5{color:#eceff1!important;caret-color:#eceff1!important}.blue-grey.lighten-4{background-color:#cfd8dc!important;border-color:#cfd8dc!important}.blue-grey--text.text--lighten-4{color:#cfd8dc!important;caret-color:#cfd8dc!important}.blue-grey.lighten-3{background-color:#b0bec5!important;border-color:#b0bec5!important}.blue-grey--text.text--lighten-3{color:#b0bec5!important;caret-color:#b0bec5!important}.blue-grey.lighten-2{background-color:#90a4ae!important;border-color:#90a4ae!important}.blue-grey--text.text--lighten-2{color:#90a4ae!important;caret-color:#90a4ae!important}.blue-grey.lighten-1{background-color:#78909c!important;border-color:#78909c!important}.blue-grey--text.text--lighten-1{color:#78909c!important;caret-color:#78909c!important}.blue-grey.darken-1{background-color:#546e7a!important;border-color:#546e7a!important}.blue-grey--text.text--darken-1{color:#546e7a!important;caret-color:#546e7a!important}.blue-grey.darken-2{background-color:#455a64!important;border-color:#455a64!important}.blue-grey--text.text--darken-2{color:#455a64!important;caret-color:#455a64!important}.blue-grey.darken-3{background-color:#37474f!important;border-color:#37474f!important}.blue-grey--text.text--darken-3{color:#37474f!important;caret-color:#37474f!important}.blue-grey.darken-4{background-color:#263238!important;border-color:#263238!important}.blue-grey--text.text--darken-4{color:#263238!important;caret-color:#263238!important}.grey{background-color:#9e9e9e!important;border-color:#9e9e9e!important}.grey--text{color:#9e9e9e!important;caret-color:#9e9e9e!important}.grey.lighten-5{background-color:#fafafa!important;border-color:#fafafa!important}.grey--text.text--lighten-5{color:#fafafa!important;caret-color:#fafafa!important}.grey.lighten-4{background-color:#f5f5f5!important;border-color:#f5f5f5!important}.grey--text.text--lighten-4{color:#f5f5f5!important;caret-color:#f5f5f5!important}.grey.lighten-3{background-color:#eee!important;border-color:#eee!important}.grey--text.text--lighten-3{color:#eee!important;caret-color:#eee!important}.grey.lighten-2{background-color:#e0e0e0!important;border-color:#e0e0e0!important}.grey--text.text--lighten-2{color:#e0e0e0!important;caret-color:#e0e0e0!important}.grey.lighten-1{background-color:#bdbdbd!important;border-color:#bdbdbd!important}.grey--text.text--lighten-1{color:#bdbdbd!important;caret-color:#bdbdbd!important}.grey.darken-1{background-color:#757575!important;border-color:#757575!important}.grey--text.text--darken-1{color:#757575!important;caret-color:#757575!important}.grey.darken-2{background-color:#616161!important;border-color:#616161!important}.grey--text.text--darken-2{color:#616161!important;caret-color:#616161!important}.grey.darken-3{background-color:#424242!important;border-color:#424242!important}.grey--text.text--darken-3{color:#424242!important;caret-color:#424242!important}.grey.darken-4{background-color:#212121!important;border-color:#212121!important}.grey--text.text--darken-4{color:#212121!important;caret-color:#212121!important}.shades.black{background-color:#000!important;border-color:#000!important}.shades--text.text--black{color:#000!important;caret-color:#000!important}.shades.white{background-color:#fff!important;border-color:#fff!important}.shades--text.text--white{color:#fff!important;caret-color:#fff!important}.shades.transparent{background-color:transparent!important;border-color:transparent!important}.shades--text.text--transparent{color:transparent!important;caret-color:transparent!important}.elevation-0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.elevation-1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)!important}.elevation-2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)!important}.elevation-3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)!important}.elevation-4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)!important}.elevation-5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)!important}.elevation-6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)!important}.elevation-7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)!important}.elevation-8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)!important}.elevation-9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)!important}.elevation-10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)!important}.elevation-11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)!important}.elevation-12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)!important}.elevation-13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)!important}.elevation-14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)!important}.elevation-15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)!important}.elevation-16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)!important}.elevation-17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)!important}.elevation-18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)!important}.elevation-19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)!important}.elevation-20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)!important}.elevation-21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)!important}.elevation-22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)!important}.elevation-23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)!important}.elevation-24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)!important}html{box-sizing:border-box;overflow-y:scroll;-webkit-text-size-adjust:100%}*,:after,:before{box-sizing:inherit}:after,:before{text-decoration:inherit;vertical-align:inherit}*{background-repeat:no-repeat;padding:0;margin:0}audio:not([controls]){display:none;height:0}hr{overflow:visible}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}summary{display:list-item}small{font-size:80%}[hidden],template{display:none}abbr[title]{border-bottom:1px dotted;text-decoration:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}code,kbd,pre,samp{font-family:monospace,monospace}b,strong{font-weight:bolder}dfn{font-style:italic}mark{background-color:#ff0;color:#000}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}input{border-radius:0}[role=button],[type=button],[type=reset],[type=submit],button{cursor:pointer}[disabled]{cursor:default}[type=number]{width:auto}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}textarea{overflow:auto;resize:vertical}button,input,optgroup,select,textarea{font:inherit}optgroup{font-weight:700}button{overflow:visible}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:0;padding:0}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button:-moz-focusring{outline:0;border:0}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}button,select{text-transform:none}button,input,select,textarea{background-color:transparent;border-style:none;color:inherit}select{-moz-appearance:none;-webkit-appearance:none}select::-ms-expand{display:none}select::-ms-value{color:currentColor}legend{border:0;color:inherit;display:table;max-width:100%;white-space:normal}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}img{border-style:none}progress{vertical-align:baseline}svg:not(:root){overflow:hidden}audio,canvas,progress,video{display:inline-block}@media screen{[hidden~=screen]{display:inherit}[hidden~=screen]:not(:active):not(:focus):not(:target){position:absolute!important;clip:rect(0 0 0 0)!important}}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-disabled]{cursor:default}::-moz-selection{background-color:#b3d4fc;color:#000;text-shadow:none}::selection{background-color:#b3d4fc;color:#000;text-shadow:none}.bottom-sheet-transition-enter,.bottom-sheet-transition-leave-to{transform:translateY(100%)}.carousel-transition-enter{transform:translate(100%)}.carousel-transition-leave,.carousel-transition-leave-to{position:absolute;top:0;transform:translate(-100%)}.carousel-reverse-transition-enter{transform:translate(-100%)}.carousel-reverse-transition-leave,.carousel-reverse-transition-leave-to{position:absolute;top:0;transform:translate(100%)}.dialog-transition-enter,.dialog-transition-leave-to{transform:scale(.5);opacity:0}.dialog-transition-enter-to,.dialog-transition-leave{opacity:1}.dialog-bottom-transition-enter,.dialog-bottom-transition-leave-to{transform:translateY(100%)}.picker-reverse-transition-enter-active,.picker-reverse-transition-leave-active,.picker-transition-enter-active,.picker-transition-leave-active{transition:.3s cubic-bezier(0,0,.2,1)}.picker-reverse-transition-enter,.picker-reverse-transition-leave-to,.picker-transition-enter,.picker-transition-leave-to{opacity:0}.picker-reverse-transition-leave,.picker-reverse-transition-leave-active,.picker-reverse-transition-leave-to,.picker-transition-leave,.picker-transition-leave-active,.picker-transition-leave-to{position:absolute!important}.picker-transition-enter{transform:translateY(100%)}.picker-reverse-transition-enter,.picker-transition-leave-to{transform:translateY(-100%)}.picker-reverse-transition-leave-to{transform:translateY(100%)}.picker-title-transition-enter-to,.picker-title-transition-leave{transform:translate(0)}.picker-title-transition-enter{transform:translate(-100%)}.picker-title-transition-leave-to{opacity:0;transform:translate(100%)}.picker-title-transition-leave,.picker-title-transition-leave-active,.picker-title-transition-leave-to{position:absolute!important}.tab-transition-enter{transform:translate(100%)}.tab-transition-leave,.tab-transition-leave-active{position:absolute;top:0}.tab-transition-leave-to{position:absolute}.tab-reverse-transition-enter,.tab-transition-leave-to{transform:translate(-100%)}.tab-reverse-transition-leave,.tab-reverse-transition-leave-to{top:0;position:absolute;transform:translate(100%)}.expand-transition-enter-active,.expand-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.expand-transition-move{transition:transform .6s}.expand-x-transition-enter-active,.expand-x-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.expand-x-transition-move{transition:transform .6s}.scale-transition-enter-active,.scale-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.scale-transition-move{transition:transform .6s}.scale-transition-enter,.scale-transition-leave,.scale-transition-leave-to{opacity:0;transform:scale(0)}.message-transition-enter-active,.message-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.message-transition-move{transition:transform .6s}.message-transition-enter,.message-transition-leave-to{opacity:0;transform:translateY(-15px)}.message-transition-leave,.message-transition-leave-active{position:absolute}.slide-y-transition-enter-active,.slide-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.slide-y-transition-move{transition:transform .6s}.slide-y-transition-enter,.slide-y-transition-leave-to{opacity:0;transform:translateY(-15px)}.slide-y-reverse-transition-enter-active,.slide-y-reverse-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.slide-y-reverse-transition-move{transition:transform .6s}.slide-y-reverse-transition-enter,.slide-y-reverse-transition-leave-to{opacity:0;transform:translateY(15px)}.scroll-y-transition-enter-active,.scroll-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.scroll-y-transition-move{transition:transform .6s}.scroll-y-transition-enter,.scroll-y-transition-leave-to{opacity:0}.scroll-y-transition-enter{transform:translateY(-15px)}.scroll-y-transition-leave-to{transform:translateY(15px)}.scroll-y-reverse-transition-enter-active,.scroll-y-reverse-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.scroll-y-reverse-transition-move{transition:transform .6s}.scroll-y-reverse-transition-enter,.scroll-y-reverse-transition-leave-to{opacity:0}.scroll-y-reverse-transition-enter{transform:translateY(15px)}.scroll-y-reverse-transition-leave-to{transform:translateY(-15px)}.scroll-x-transition-enter-active,.scroll-x-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.scroll-x-transition-move{transition:transform .6s}.scroll-x-transition-enter,.scroll-x-transition-leave-to{opacity:0}.scroll-x-transition-enter{transform:translateX(-15px)}.scroll-x-transition-leave-to{transform:translateX(15px)}.scroll-x-reverse-transition-enter-active,.scroll-x-reverse-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.scroll-x-reverse-transition-move{transition:transform .6s}.scroll-x-reverse-transition-enter,.scroll-x-reverse-transition-leave-to{opacity:0}.scroll-x-reverse-transition-enter{transform:translateX(15px)}.scroll-x-reverse-transition-leave-to{transform:translateX(-15px)}.slide-x-transition-enter-active,.slide-x-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.slide-x-transition-move{transition:transform .6s}.slide-x-transition-enter,.slide-x-transition-leave-to{opacity:0;transform:translateX(-15px)}.slide-x-reverse-transition-enter-active,.slide-x-reverse-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.slide-x-reverse-transition-move{transition:transform .6s}.slide-x-reverse-transition-enter,.slide-x-reverse-transition-leave-to{opacity:0;transform:translateX(15px)}.fade-transition-enter-active,.fade-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.fade-transition-move{transition:transform .6s}.fade-transition-enter,.fade-transition-leave-to{opacity:0}.fab-transition-enter-active,.fab-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.fab-transition-move{transition:transform .6s}.fab-transition-enter,.fab-transition-leave-to{transform:scale(0) rotate(-45deg)}.blockquote{padding:16px 0 16px 24px;font-size:18px;font-weight:300}code,kbd{display:inline-block;border-radius:3px;white-space:pre-wrap;font-size:85%;font-weight:900}code:after,code:before,kbd:after,kbd:before{content:\"\\00a0\";letter-spacing:-1px}code{background-color:#f5f5f5;color:#bd4147;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}kbd{background:#616161;color:#fff}html{font-size:14px;overflow-x:hidden;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:rgba(0,0,0,0)}.application{font-family:\"Roboto\",sans-serif;line-height:1.5}::-ms-clear,::-ms-reveal{display:none}ol,ul{padding-left:24px}.display-4{font-size:112px!important;font-weight:300;line-height:1!important;letter-spacing:-.04em!important;font-family:\"Roboto\",sans-serif!important}.display-3{font-size:56px!important;line-height:1.35!important;letter-spacing:-.02em!important}.display-2,.display-3{font-weight:400;font-family:\"Roboto\",sans-serif!important}.display-2{font-size:45px!important;line-height:48px!important;letter-spacing:normal!important}.display-1{font-size:34px!important;line-height:40px!important}.display-1,.headline{font-weight:400;letter-spacing:normal!important;font-family:\"Roboto\",sans-serif!important}.headline{font-size:24px!important;line-height:32px!important}.title{font-size:20px!important;font-weight:500;line-height:1!important;letter-spacing:.02em!important;font-family:\"Roboto\",sans-serif!important}.subheading{font-size:16px!important;font-weight:400}.body-2{font-weight:500}.body-1,.body-2{font-size:14px!important}.body-1,.caption{font-weight:400}.caption{font-size:12px!important}p{margin-bottom:16px}@media only print{.hidden-print-only{display:none!important}}@media only screen{.hidden-screen-only{display:none!important}}@media only screen and (max-width:599px){.hidden-xs-only{display:none!important}}@media only screen and (min-width:600px) and (max-width:959px){.hidden-sm-only{display:none!important}}@media only screen and (max-width:959px){.hidden-sm-and-down{display:none!important}}@media only screen and (min-width:600px){.hidden-sm-and-up{display:none!important}}@media only screen and (min-width:960px) and (max-width:1263px){.hidden-md-only{display:none!important}}@media only screen and (max-width:1263px){.hidden-md-and-down{display:none!important}}@media only screen and (min-width:960px){.hidden-md-and-up{display:none!important}}@media only screen and (min-width:1264px) and (max-width:1903px){.hidden-lg-only{display:none!important}}@media only screen and (max-width:1903px){.hidden-lg-and-down{display:none!important}}@media only screen and (min-width:1264px){.hidden-lg-and-up{display:none!important}}@media only screen and (min-width:1904px){.hidden-xl-only{display:none!important}}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-hidden{overflow-y:hidden}.right{float:right!important}.left{float:left!important}.ma-auto{margin:auto!important}.my-auto{margin-top:auto!important;margin-bottom:auto!important}.mx-auto{margin-left:auto!important;margin-right:auto!important}.mt-auto{margin-top:auto!important}.mr-auto{margin-right:auto!important}.mb-auto{margin-bottom:auto!important}.ml-auto{margin-left:auto!important}.ma-0{margin:0!important}.my-0{margin-top:0!important;margin-bottom:0!important}.mx-0{margin-left:0!important;margin-right:0!important}.mt-0{margin-top:0!important}.mr-0{margin-right:0!important}.mb-0{margin-bottom:0!important}.ml-0{margin-left:0!important}.pa-0{padding:0!important}.py-0{padding-top:0!important;padding-bottom:0!important}.px-0{padding-left:0!important;padding-right:0!important}.pt-0{padding-top:0!important}.pr-0{padding-right:0!important}.pb-0{padding-bottom:0!important}.pl-0{padding-left:0!important}.ma-1{margin:4px!important}.my-1{margin-top:4px!important;margin-bottom:4px!important}.mx-1{margin-left:4px!important;margin-right:4px!important}.mt-1{margin-top:4px!important}.mr-1{margin-right:4px!important}.mb-1{margin-bottom:4px!important}.ml-1{margin-left:4px!important}.pa-1{padding:4px!important}.py-1{padding-top:4px!important;padding-bottom:4px!important}.px-1{padding-left:4px!important;padding-right:4px!important}.pt-1{padding-top:4px!important}.pr-1{padding-right:4px!important}.pb-1{padding-bottom:4px!important}.pl-1{padding-left:4px!important}.ma-2{margin:8px!important}.my-2{margin-top:8px!important;margin-bottom:8px!important}.mx-2{margin-left:8px!important;margin-right:8px!important}.mt-2{margin-top:8px!important}.mr-2{margin-right:8px!important}.mb-2{margin-bottom:8px!important}.ml-2{margin-left:8px!important}.pa-2{padding:8px!important}.py-2{padding-top:8px!important;padding-bottom:8px!important}.px-2{padding-left:8px!important;padding-right:8px!important}.pt-2{padding-top:8px!important}.pr-2{padding-right:8px!important}.pb-2{padding-bottom:8px!important}.pl-2{padding-left:8px!important}.ma-3{margin:16px!important}.my-3{margin-top:16px!important;margin-bottom:16px!important}.mx-3{margin-left:16px!important;margin-right:16px!important}.mt-3{margin-top:16px!important}.mr-3{margin-right:16px!important}.mb-3{margin-bottom:16px!important}.ml-3{margin-left:16px!important}.pa-3{padding:16px!important}.py-3{padding-top:16px!important;padding-bottom:16px!important}.px-3{padding-left:16px!important;padding-right:16px!important}.pt-3{padding-top:16px!important}.pr-3{padding-right:16px!important}.pb-3{padding-bottom:16px!important}.pl-3{padding-left:16px!important}.ma-4{margin:24px!important}.my-4{margin-top:24px!important;margin-bottom:24px!important}.mx-4{margin-left:24px!important;margin-right:24px!important}.mt-4{margin-top:24px!important}.mr-4{margin-right:24px!important}.mb-4{margin-bottom:24px!important}.ml-4{margin-left:24px!important}.pa-4{padding:24px!important}.py-4{padding-top:24px!important;padding-bottom:24px!important}.px-4{padding-left:24px!important;padding-right:24px!important}.pt-4{padding-top:24px!important}.pr-4{padding-right:24px!important}.pb-4{padding-bottom:24px!important}.pl-4{padding-left:24px!important}.ma-5{margin:48px!important}.my-5{margin-top:48px!important;margin-bottom:48px!important}.mx-5{margin-left:48px!important;margin-right:48px!important}.mt-5{margin-top:48px!important}.mr-5{margin-right:48px!important}.mb-5{margin-bottom:48px!important}.ml-5{margin-left:48px!important}.pa-5{padding:48px!important}.py-5{padding-top:48px!important;padding-bottom:48px!important}.px-5{padding-left:48px!important;padding-right:48px!important}.pt-5{padding-top:48px!important}.pr-5{padding-right:48px!important}.pb-5{padding-bottom:48px!important}.pl-5{padding-left:48px!important}@media (min-width:0){.text-xs-left{text-align:left!important}.text-xs-center{text-align:center!important}.text-xs-right{text-align:right!important}.text-xs-justify{text-align:justify!important}}@media (min-width:600px){.text-sm-left{text-align:left!important}.text-sm-center{text-align:center!important}.text-sm-right{text-align:right!important}.text-sm-justify{text-align:justify!important}}@media (min-width:960px){.text-md-left{text-align:left!important}.text-md-center{text-align:center!important}.text-md-right{text-align:right!important}.text-md-justify{text-align:justify!important}}@media (min-width:1264px){.text-lg-left{text-align:left!important}.text-lg-center{text-align:center!important}.text-lg-right{text-align:right!important}.text-lg-justify{text-align:justify!important}}@media (min-width:1904px){.text-xl-left{text-align:left!important}.text-xl-center{text-align:center!important}.text-xl-right{text-align:right!important}.text-xl-justify{text-align:justify!important}}.font-weight-thin{font-weight:100!important}.font-weight-light{font-weight:300!important}.font-weight-regular{font-weight:400!important}.font-weight-medium{font-weight:500!important}.font-weight-bold{font-weight:700!important}.font-weight-black{font-weight:900!important}.font-italic{font-style:italic!important}.text-capitalize{text-transform:capitalize!important}.text-lowercase{text-transform:lowercase!important}.text-none{text-transform:none!important}.text-uppercase{text-transform:uppercase!important}.text-no-wrap,.text-truncate{white-space:nowrap!important}.text-truncate{overflow:hidden!important;text-overflow:ellipsis!important;line-height:1.1!important}.transition-fast-out-slow-in{transition:.3s cubic-bezier(.4,0,.2,1)!important}.transition-linear-out-slow-in{transition:.3s cubic-bezier(0,0,.2,1)!important}.transition-fast-out-linear-in{transition:.3s cubic-bezier(.4,0,1,1)!important}.transition-ease-in-out{transition:.3s cubic-bezier(.4,0,.6,1)!important}.transition-fast-in-fast-out{transition:.3s cubic-bezier(.25,.8,.25,1)!important}.transition-swing{transition:.3s cubic-bezier(.25,.8,.5,1)!important}.v-alert{border-radius:0;border-width:4px 0 0;border-style:solid;color:#fff;display:flex;font-size:14px;margin:4px auto;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert .v-alert__icon.v-icon,.v-alert__dismissible .v-icon{align-self:center;color:rgba(0,0,0,.3);font-size:24px}.v-alert--outline .v-icon{color:inherit!important}.v-alert__icon{margin-right:16px}.v-alert__dismissible{align-self:flex-start;color:inherit;margin-left:16px;margin-right:0;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-alert__dismissible:hover{opacity:.8}.v-alert--no-icon .v-alert__icon{display:none}.v-alert>div{align-self:center;flex:1 1}@media screen and (max-width:600px){.v-alert__icon{display:none}}.v-alert.v-alert{border-color:rgba(0,0,0,.12)!important}.v-alert.v-alert--outline{border:1px solid!important}.application{display:flex}.application a{cursor:pointer}.application--is-rtl{direction:rtl}.application--wrap{flex:1 1 auto;-webkit-backface-visibility:hidden;backface-visibility:hidden;display:flex;flex-direction:column;min-height:100vh;max-width:100%;position:relative}.theme--light.application{background:#fafafa;color:rgba(0,0,0,.87)}.theme--light.application .text--primary{color:rgba(0,0,0,.87)!important}.theme--light.application .text--secondary{color:rgba(0,0,0,.54)!important}.theme--light.application .text--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.application{background:#303030;color:#fff}.theme--dark.application .text--primary{color:#fff!important}.theme--dark.application .text--secondary{color:hsla(0,0%,100%,.7)!important}.theme--dark.application .text--disabled{color:hsla(0,0%,100%,.5)!important}@-moz-document url-prefix(){@media print{.application,.application--wrap{display:block}}}.v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line) .v-select__slot>input{margin-top:24px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}.v-avatar{align-items:center;border-radius:50%;display:inline-flex;justify-content:center;position:relative;text-align:center;vertical-align:middle}.v-avatar .v-icon,.v-avatar .v-image,.v-avatar img{border-radius:50%;display:inline-flex;height:inherit;width:inherit}.v-avatar--tile,.v-avatar--tile .v-icon,.v-avatar--tile .v-image,.v-avatar--tile img{border-radius:0}.application--is-rtl .v-badge__badge{right:auto;left:-22px}.application--is-rtl .v-badge--overlap .v-badge__badge{right:auto;left:-8px}.application--is-rtl .v-badge--overlap.v-badge--left .v-badge__badge{right:-8px;left:auto}.application--is-rtl .v-badge--left .v-badge__badge{right:-22px;left:auto}.v-badge{display:inline-block;position:relative}.v-badge__badge{color:#fff;display:flex;position:absolute;font-size:14px;top:-11px;right:-22px;border-radius:50%;height:22px;width:22px;justify-content:center;align-items:center;flex-direction:row;flex-wrap:wrap;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-badge__badge .v-icon{font-size:14px}.v-badge--overlap .v-badge__badge{top:-8px;right:-8px}.v-badge--overlap.v-badge--left .v-badge__badge{left:-8px;right:auto}.v-badge--overlap.v-badge--bottom .v-badge__badge{bottom:-8px;top:auto}.v-badge--left .v-badge__badge{left:-22px}.v-badge--bottom .v-badge__badge{bottom:-11px;top:auto}.theme--light.v-bottom-nav{background-color:#fff}.theme--light.v-bottom-nav .v-btn:not(.v-btn--active){color:rgba(0,0,0,.54)!important}.theme--dark.v-bottom-nav{background-color:#424242}.theme--dark.v-bottom-nav .v-btn:not(.v-btn--active){color:hsla(0,0%,100%,.7)!important}.v-item-group.v-bottom-nav{bottom:0;box-shadow:0 3px 14px 2px rgba(0,0,0,.12);display:flex;left:0;justify-content:center;transform:translateY(60px);transition:all .4s cubic-bezier(.25,.8,.5,1);width:100%}.v-item-group.v-bottom-nav--absolute{position:absolute}.v-item-group.v-bottom-nav--active{transform:translate(0)}.v-item-group.v-bottom-nav--fixed{position:fixed;z-index:4}.v-item-group.v-bottom-nav .v-btn{background:transparent!important;border-radius:0;box-shadow:none!important;font-weight:400;height:100%;margin:0;max-width:168px;min-width:80px;padding:8px 12px 10px;text-transform:none;width:100%;flex-shrink:1}.v-item-group.v-bottom-nav .v-btn .v-btn__content{flex-direction:column-reverse;font-size:12px;white-space:nowrap;will-change:font-size}.v-item-group.v-bottom-nav .v-btn .v-btn__content i.v-icon{color:inherit;margin-bottom:4px;transition:all .4s cubic-bezier(.25,.8,.5,1)}.v-item-group.v-bottom-nav .v-btn .v-btn__content span{line-height:1}.v-item-group.v-bottom-nav .v-btn--active{padding-top:6px}.v-item-group.v-bottom-nav .v-btn--active:before{background-color:transparent}.v-item-group.v-bottom-nav .v-btn--active .v-btn__content{font-size:14px}.v-item-group.v-bottom-nav .v-btn--active .v-btn__content .v-icon{transform:none}.v-item-group.v-bottom-nav--shift .v-btn__content{font-size:14px}.v-item-group.v-bottom-nav--shift .v-btn{transition:all .3s;min-width:56px;max-width:96px}.v-item-group.v-bottom-nav--shift .v-btn--active{min-width:96px;max-width:168px}.v-bottom-nav--shift .v-btn:not(.v-btn--active) .v-btn__content .v-icon{transform:scale(1) translateY(8px)}.v-bottom-nav--shift .v-btn:not(.v-btn--active) .v-btn__content>span:not(.v-badge){color:transparent}.v-bottom-sheet.v-dialog{align-self:flex-end;border-radius:0;flex:1 0 100%;margin:0;min-width:100%;overflow:visible;transition:.3s cubic-bezier(.25,.8,.25,1)}.v-bottom-sheet.v-dialog.v-bottom-sheet--inset{max-width:70%;min-width:0}@media only screen and (max-width:599px){.v-bottom-sheet.v-dialog.v-bottom-sheet--inset{max-width:none}}.theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.theme--light.v-btn-toggle{background:#fff}.theme--light.v-btn-toggle .v-btn{color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--only-child) .v-btn.v-btn--active:not(:last-child){border-right-color:rgba(0,0,0,.26)}.theme--dark.v-btn-toggle{background:#424242}.theme--dark.v-btn-toggle .v-btn{color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--only-child) .v-btn.v-btn--active:not(:last-child){border-right-color:hsla(0,0%,100%,.3)}.v-btn-toggle{display:inline-flex;border-radius:2px;transition:.3s cubic-bezier(.25,.8,.5,1);will-change:background,box-shadow}.v-btn-toggle .v-btn{justify-content:center;min-width:auto;width:auto;padding:0 8px;margin:0;opacity:.4;border-radius:0}.v-btn-toggle .v-btn:not(:last-child){border-right:1px solid transparent}.v-btn-toggle .v-btn:after{display:none}.v-btn-toggle .v-btn.v-btn--active{opacity:1}.v-btn-toggle .v-btn span+.v-icon{font-size:medium;margin-left:10px}.v-btn-toggle .v-btn:first-child{border-radius:2px 0 0 2px}.v-btn-toggle .v-btn:last-child{border-radius:0 2px 2px 0}.v-btn-toggle--selected{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.theme--light.v-btn{color:rgba(0,0,0,.87)}.theme--light.v-btn.v-btn--disabled,.theme--light.v-btn.v-btn--disabled .v-btn__loading,.theme--light.v-btn.v-btn--disabled .v-icon{color:rgba(0,0,0,.26)!important}.theme--light.v-btn.v-btn--disabled:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline){background-color:rgba(0,0,0,.12)!important}.theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat){background-color:#f5f5f5}.theme--dark.v-btn{color:#fff}.theme--dark.v-btn.v-btn--disabled,.theme--dark.v-btn.v-btn--disabled .v-btn__loading,.theme--dark.v-btn.v-btn--disabled .v-icon{color:hsla(0,0%,100%,.3)!important}.theme--dark.v-btn.v-btn--disabled:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline){background-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn:not(.v-btn--icon):not(.v-btn--flat){background-color:#212121}.v-btn{align-items:center;border-radius:2px;display:inline-flex;height:36px;flex:0 0 auto;font-size:14px;font-weight:500;justify-content:center;margin:6px 8px;min-width:88px;outline:0;text-transform:uppercase;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1),color 1ms;position:relative;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-btn:before{border-radius:inherit;color:inherit;content:\"\";position:absolute;left:0;top:0;height:100%;opacity:.12;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-btn{padding:0 16px}.v-btn--active,.v-btn:focus,.v-btn:hover{position:relative}.v-btn--active:before,.v-btn:focus:before,.v-btn:hover:before{background-color:currentColor}@media (hover:none){.v-btn:hover:before{background-color:transparent}}.v-btn__content{align-items:center;border-radius:inherit;color:inherit;display:flex;flex:1 0 auto;justify-content:center;margin:0 auto;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap;width:inherit}.v-btn--small{font-size:13px;height:28px;padding:0 8px}.v-btn--large{font-size:15px;height:44px;padding:0 32px}.v-btn .v-btn__content .v-icon{color:inherit}.v-btn:not(.v-btn--depressed):not(.v-btn--flat){will-change:box-shadow;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-btn:not(.v-btn--depressed):not(.v-btn--flat):active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-btn--icon{background:transparent;box-shadow:none!important;border-radius:50%;justify-content:center;min-width:0;width:36px}.v-btn--icon.v-btn--small{width:28px}.v-btn--icon.v-btn--large{width:44px}.v-btn--floating,.v-btn--icon:before{border-radius:50%}.v-btn--floating{min-width:0;height:56px;width:56px;padding:0}.v-btn--floating.v-btn--absolute,.v-btn--floating.v-btn--fixed{z-index:4}.v-btn--floating:not(.v-btn--depressed):not(.v-btn--flat){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-btn--floating:not(.v-btn--depressed):not(.v-btn--flat):active{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.v-btn--floating .v-btn__content{flex:1 1 auto;margin:0;height:100%}.v-btn--floating:after{border-radius:50%}.v-btn--floating .v-btn__content>:not(:only-child){transition:.3s cubic-bezier(.25,.8,.5,1)}.v-btn--floating .v-btn__content>:not(:only-child):first-child{opacity:1}.v-btn--floating .v-btn__content>:not(:only-child):last-child{opacity:0;transform:rotate(-45deg)}.v-btn--floating .v-btn__content>:not(:only-child):first-child,.v-btn--floating .v-btn__content>:not(:only-child):last-child{-webkit-backface-visibility:hidden;position:absolute;left:0;top:0}.v-btn--floating.v-btn--active .v-btn__content>:not(:only-child):first-child{opacity:0;transform:rotate(45deg)}.v-btn--floating.v-btn--active .v-btn__content>:not(:only-child):last-child{opacity:1;transform:rotate(0)}.v-btn--floating .v-icon{height:inherit;width:inherit}.v-btn--floating.v-btn--small{height:40px;width:40px}.v-btn--floating.v-btn--small .v-icon{font-size:18px}.v-btn--floating.v-btn--large{height:72px;width:72px}.v-btn--floating.v-btn--large .v-icon{font-size:30px}.v-btn--reverse .v-btn__content{flex-direction:row-reverse}.v-btn--reverse.v-btn--column .v-btn__content{flex-direction:column-reverse}.v-btn--absolute,.v-btn--fixed{margin:0}.v-btn.v-btn--absolute{position:absolute}.v-btn.v-btn--fixed{position:fixed}.v-btn--top:not(.v-btn--absolute){top:16px}.v-btn--top.v-btn--absolute{top:-28px}.v-btn--top.v-btn--absolute.v-btn--small{top:-20px}.v-btn--top.v-btn--absolute.v-btn--large{top:-36px}.v-btn--bottom:not(.v-btn--absolute){bottom:16px}.v-btn--bottom.v-btn--absolute{bottom:-28px}.v-btn--bottom.v-btn--absolute.v-btn--small{bottom:-20px}.v-btn--bottom.v-btn--absolute.v-btn--large{bottom:-36px}.v-btn--left{left:16px}.v-btn--right{right:16px}.v-btn.v-btn--disabled{box-shadow:none!important;pointer-events:none}.v-btn:not(.v-btn--disabled):not(.v-btn--floating):not(.v-btn--icon) .v-btn__content .v-icon{transition:none}.v-btn--icon{padding:0}.v-btn--loader{pointer-events:none}.v-btn--loader .v-btn__content{opacity:0}.v-btn__loading{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.v-btn__loading .v-icon--left{margin-right:1rem;line-height:inherit}.v-btn__loading .v-icon--right{margin-left:1rem;line-height:inherit}.v-btn.v-btn--outline{border:1px solid;background:transparent!important;box-shadow:none}.v-btn.v-btn--outline:hover{box-shadow:none}.v-btn--block{display:flex;flex:1;margin:6px 0;width:100%}.v-btn--round,.v-btn--round:after{border-radius:28px}.v-btn:not(.v-btn--outline).accent,.v-btn:not(.v-btn--outline).error,.v-btn:not(.v-btn--outline).info,.v-btn:not(.v-btn--outline).primary,.v-btn:not(.v-btn--outline).secondary,.v-btn:not(.v-btn--outline).success,.v-btn:not(.v-btn--outline).warning{color:#fff}.theme--light.v-calendar-daily{background-color:#fff}.theme--light.v-calendar-daily .v-calendar-daily__intervals-head{border-right:1px solid #e0e0e0}.theme--light.v-calendar-daily .v-calendar-daily_head-day{border-right:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0;color:#000}.theme--light.v-calendar-daily .v-calendar-daily_head-day.v-past .v-calendar-daily_head-day-label,.theme--light.v-calendar-daily .v-calendar-daily_head-day.v-past .v-calendar-daily_head-weekday{color:rgba(0,0,0,.38)}.theme--light.v-calendar-daily .v-calendar-daily__intervals-body{border-right:1px solid #e0e0e0}.theme--light.v-calendar-daily .v-calendar-daily__intervals-body .v-calendar-daily__interval-text{color:#424242}.theme--light.v-calendar-daily .v-calendar-daily__day{border-right:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0}.theme--light.v-calendar-daily .v-calendar-daily__day-interval{border-top:1px solid #e0e0e0}.theme--light.v-calendar-daily .v-calendar-daily__day-interval:first-child{border-top:none!important}.theme--dark.v-calendar-daily{background-color:#303030}.theme--dark.v-calendar-daily .v-calendar-daily__intervals-head{border-right:1px solid #9e9e9e}.theme--dark.v-calendar-daily .v-calendar-daily_head-day{border-right:1px solid #9e9e9e;border-bottom:1px solid #9e9e9e;color:#fff}.theme--dark.v-calendar-daily .v-calendar-daily_head-day.v-past .v-calendar-daily_head-day-label,.theme--dark.v-calendar-daily .v-calendar-daily_head-day.v-past .v-calendar-daily_head-weekday{color:hsla(0,0%,100%,.5)}.theme--dark.v-calendar-daily .v-calendar-daily__intervals-body{border-right:1px solid #9e9e9e}.theme--dark.v-calendar-daily .v-calendar-daily__intervals-body .v-calendar-daily__interval-text{color:#eee}.theme--dark.v-calendar-daily .v-calendar-daily__day{border-right:1px solid #616161;border-bottom:1px solid #616161}.theme--dark.v-calendar-daily .v-calendar-daily__day-interval{border-top:1px solid #616161}.theme--dark.v-calendar-daily .v-calendar-daily__day-interval:first-child{border-top:none!important}.v-calendar-daily{display:flex;flex-direction:column;overflow:hidden;height:100%}.v-calendar-daily__head{flex:none;display:flex}.v-calendar-daily__intervals-head{flex:none;width:44px}.v-calendar-daily_head-day{flex:1 1 auto;width:0}.v-calendar-daily_head-weekday{padding:4px 4px 4px 8px;font-size:14px}.v-calendar-daily_head-day-label,.v-calendar-daily_head-weekday{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-calendar-daily_head-day-label{font-size:40px;padding:0 4px 4px 8px;line-height:40px;cursor:pointer}.v-calendar-daily_head-day-label:hover{text-decoration:underline}.v-calendar-daily__body{flex:1 1 60%;overflow:hidden;display:flex;position:relative;flex-direction:column}.v-calendar-daily__scroll-area{overflow-y:scroll;flex:1 1 auto;display:flex;align-items:flex-start}.v-calendar-daily__pane{width:100%;overflow-y:hidden;flex:none;display:flex;align-items:flex-start}.v-calendar-daily__day-container{display:flex;flex:1;width:100%;height:100%}.v-calendar-daily__intervals-body{flex:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:44px}.v-calendar-daily__interval{text-align:center;border-bottom:none}.v-calendar-daily__interval-text{display:block;position:relative;top:-6px;font-size:10px}.v-calendar-daily__day{flex:1;width:0;position:relative}.theme--light.v-calendar-weekly{background-color:#fff}.theme--light.v-calendar-weekly .v-calendar-weekly__head-weekday{border-right:1px solid #e0e0e0;color:#000}.theme--light.v-calendar-weekly .v-calendar-weekly__head-weekday.v-past{color:rgba(0,0,0,.38)}.theme--light.v-calendar-weekly .v-calendar-weekly__head-weekday.v-outside{background-color:#f7f7f7}.theme--light.v-calendar-weekly .v-calendar-weekly__day{border-right:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0;color:#000}.theme--light.v-calendar-weekly .v-calendar-weekly__day.v-outside{background-color:#f7f7f7}.theme--dark.v-calendar-weekly{background-color:#303030}.theme--dark.v-calendar-weekly .v-calendar-weekly__head-weekday{border-right:1px solid #9e9e9e;color:#fff}.theme--dark.v-calendar-weekly .v-calendar-weekly__head-weekday.v-past{color:hsla(0,0%,100%,.5)}.theme--dark.v-calendar-weekly .v-calendar-weekly__head-weekday.v-outside{background-color:#202020}.theme--dark.v-calendar-weekly .v-calendar-weekly__day{border-right:1px solid #9e9e9e;border-bottom:1px solid #9e9e9e;color:#fff}.theme--dark.v-calendar-weekly .v-calendar-weekly__day.v-outside{background-color:#202020}.v-calendar-weekly{width:100%;height:100%;display:flex;flex-direction:column}.v-calendar-weekly__head{display:flex}.v-calendar-weekly__head,.v-calendar-weekly__head-weekday{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-calendar-weekly__head-weekday{flex:1 0 20px;padding:0 4px;font-size:14px}.v-calendar-weekly__week{display:flex;flex:1}.v-calendar-weekly__day{flex:1;width:0;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;padding:32px 4px 4px}.v-calendar-weekly__day.v-present .v-calendar-weekly__day-label{border:1px solid}.v-calendar-weekly__day.v-present .v-calendar-weekly__day-month{color:currentColor}.v-calendar-weekly__day-label{position:absolute;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;box-shadow:none;text-align:center;left:0;top:0;border-radius:16px;width:32px;height:32px;line-height:32px}.v-calendar-weekly__day-label:hover{text-decoration:underline}.v-calendar-weekly__day-month{position:absolute;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-shadow:none;top:0;left:36px;height:32px;line-height:32px}.theme--light.v-card{background-color:#fff;border-color:#fff;color:rgba(0,0,0,.87)}.theme--dark.v-card{background-color:#424242;border-color:#424242;color:#fff}.v-card{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);text-decoration:none}.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-card--hover{cursor:pointer;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:box-shadow}.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;padding:16px}.v-card__title--primary{padding-top:24px}.v-card__text{padding:16px;width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions .v-btn,.v-card__actions>*{margin:0}.v-card__actions .v-btn+.v-btn{margin-left:8px}.application--is-rtl .v-carousel__prev{left:auto;right:5px}.application--is-rtl .v-carousel__next{left:5px;right:auto}.v-carousel{width:100%;position:relative;overflow:hidden;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-carousel__next,.v-carousel__prev{position:absolute;top:50%;z-index:1;transform:translateY(-50%)}.v-carousel__next .v-btn,.v-carousel__prev .v-btn{margin:0;height:auto;width:auto}.v-carousel__next .v-btn i,.v-carousel__prev .v-btn i{font-size:48px}.v-carousel__next .v-btn:hover,.v-carousel__prev .v-btn:hover{background:none}.v-carousel__prev{left:5px}.v-carousel__next{right:5px}.v-carousel__controls{background:rgba(0,0,0,.5);align-items:center;bottom:0;display:flex;justify-content:center;left:0;position:absolute;height:50px;list-style-type:none;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px!important}.v-carousel__controls__item .v-icon{opacity:.5;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.theme--light.v-chip{background:#e0e0e0;color:rgba(0,0,0,.87)}.theme--light.v-chip--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-chip{background:#555;color:#fff}.theme--dark.v-chip--disabled{color:hsla(0,0%,100%,.5)}.application--is-rtl .v-chip__close{margin:0 8px 0 2px}.application--is-rtl .v-chip--removable .v-chip__content{padding:0 12px 0 4px}.application--is-rtl .v-chip--select-multi{margin:4px 0 4px 4px}.application--is-rtl .v-chip .v-avatar{margin-right:-12px;margin-left:8px}.application--is-rtl .v-chip .v-icon--right{margin-right:12px;margin-left:-8px}.application--is-rtl .v-chip .v-icon--left{margin-right:-8px;margin-left:12px}.v-chip{font-size:13px;margin:4px;outline:none;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-chip,.v-chip .v-chip__content{align-items:center;border-radius:28px;display:inline-flex;vertical-align:middle}.v-chip .v-chip__content{cursor:default;height:32px;justify-content:space-between;padding:0 12px;white-space:nowrap;z-index:1}.v-chip--removable .v-chip__content{padding:0 4px 0 12px}.v-chip .v-avatar{height:32px!important;margin-left:-12px;margin-right:8px;min-width:32px;width:32px!important}.v-chip .v-avatar img{height:100%;width:100%}.v-chip--active,.v-chip--selected,.v-chip:focus:not(.v-chip--disabled){border-color:rgba(0,0,0,.13);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--active:after,.v-chip--selected:after,.v-chip:focus:not(.v-chip--disabled):after{background:currentColor;border-radius:inherit;content:\"\";height:100%;position:absolute;top:0;left:0;transition:inherit;width:100%;pointer-events:none;opacity:.13}.v-chip--label,.v-chip--label .v-chip__content{border-radius:2px}.v-chip.v-chip.v-chip--outline{background:transparent!important;border:1px solid;color:#9e9e9e;height:32px}.v-chip.v-chip.v-chip--outline .v-avatar{margin-left:-13px}.v-chip--small{height:24px!important}.v-chip--small .v-avatar{height:24px!important;min-width:24px;width:24px!important}.v-chip--small .v-icon{font-size:20px}.v-chip__close{align-items:center;color:inherit;display:flex;font-size:20px;margin:0 2px 0 8px;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__close>.v-icon{color:inherit!important;font-size:20px;cursor:pointer;opacity:.5}.v-chip__close>.v-icon:hover{opacity:1}.v-chip--disabled .v-chip__close{pointer-events:none}.v-chip--select-multi{margin:4px 4px 4px 0}.v-chip .v-icon{color:inherit}.v-chip .v-icon--right{margin-left:12px;margin-right:-8px}.v-chip .v-icon--left{margin-left:-8px;margin-right:12px}.v-content{transition:none;display:flex;flex:1 0 auto;max-width:100%}.v-content[data-booted=true]{transition:.2s cubic-bezier(.4,0,.2,1)}.v-content__wrap{flex:1 1 auto;max-width:100%;position:relative}@-moz-document url-prefix(){@media print{.v-content{display:block}}}.theme--light.v-counter{color:rgba(0,0,0,.54)}.theme--dark.v-counter{color:hsla(0,0%,100%,.7)}.v-counter{flex:0 1 auto;font-size:12px;min-height:12px;line-height:1}.theme--light.v-data-iterator .v-data-iterator__actions{color:rgba(0,0,0,.54)}.theme--light.v-data-iterator .v-data-iterator__actions__select .v-select .v-input__append-inner,.theme--light.v-data-iterator .v-data-iterator__actions__select .v-select .v-select__selection--comma{color:rgba(0,0,0,.54)!important}.theme--dark.v-data-iterator .v-data-iterator__actions{color:hsla(0,0%,100%,.7)}.theme--dark.v-data-iterator .v-data-iterator__actions__select .v-select .v-input__append-inner,.theme--dark.v-data-iterator .v-data-iterator__actions__select .v-select .v-select__selection--comma{color:hsla(0,0%,100%,.7)!important}.v-data-iterator__actions{display:flex;justify-content:flex-end;align-items:center;font-size:12px;flex-wrap:wrap-reverse}.v-data-iterator__actions .v-btn{color:inherit}.v-data-iterator__actions .v-btn:last-of-type{margin-left:14px}.v-data-iterator__actions__range-controls{display:flex;align-items:center;min-height:48px}.v-data-iterator__actions__pagination{display:block;text-align:center;margin:0 32px 0 24px}.v-data-iterator__actions__select{display:flex;align-items:center;justify-content:flex-end;margin-right:14px;white-space:nowrap}.v-data-iterator__actions__select .v-select{flex:0 1 0;margin:13px 0 13px 34px;padding:0;position:static}.v-data-iterator__actions__select .v-select__selections{flex-wrap:nowrap}.v-data-iterator__actions__select .v-select__selections .v-select__selection--comma{font-size:12px}.theme--light.v-datatable thead th.column.sortable .v-icon{color:rgba(0,0,0,.38)}.theme--light.v-datatable thead th.column.sortable.active,.theme--light.v-datatable thead th.column.sortable.active .v-icon,.theme--light.v-datatable thead th.column.sortable:hover{color:rgba(0,0,0,.87)}.theme--light.v-datatable .v-datatable__actions{background-color:#fff;color:rgba(0,0,0,.54);border-top:1px solid rgba(0,0,0,.12)}.theme--light.v-datatable .v-datatable__expand-col--expanded{border-bottom:1px solid #e0e0e0}.theme--dark.v-datatable thead th.column.sortable .v-icon{color:hsla(0,0%,100%,.5)}.theme--dark.v-datatable thead th.column.sortable.active,.theme--dark.v-datatable thead th.column.sortable.active .v-icon,.theme--dark.v-datatable thead th.column.sortable:hover{color:#fff}.theme--dark.v-datatable .v-datatable__actions{background-color:#424242;color:hsla(0,0%,100%,.7);border-top:1px solid hsla(0,0%,100%,.12)}.theme--dark.v-datatable .v-datatable__expand-col--expanded{border-bottom:1px solid #616161}.v-datatable .v-input--selection-controls{margin:0;padding:0}.v-datatable thead th.column.sortable{cursor:pointer;outline:0}.v-datatable thead th.column.sortable .v-icon{font-size:16px;display:inline-block;opacity:0;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-datatable thead th.column.sortable:focus .v-icon,.v-datatable thead th.column.sortable:hover .v-icon{opacity:.6}.v-datatable thead th.column.sortable.active{transform:none}.v-datatable thead th.column.sortable.active .v-icon{opacity:1}.v-datatable thead th.column.sortable.active.desc .v-icon{transform:rotate(-180deg)}.v-datatable__actions{display:flex;justify-content:flex-end;align-items:center;font-size:12px;flex-wrap:wrap-reverse}.v-datatable__actions .v-btn{color:inherit}.v-datatable__actions .v-btn:last-of-type{margin-left:14px}.v-datatable__actions__range-controls{display:flex;align-items:center;min-height:48px}.v-datatable__actions__pagination{display:block;text-align:center;margin:0 32px 0 24px}.v-datatable__actions__select{display:flex;align-items:center;justify-content:flex-end;margin-right:14px;white-space:nowrap}.v-datatable__actions__select .v-select{flex:0 1 0;margin:13px 0 13px 34px;padding:0;position:static}.v-datatable__actions__select .v-select__selections{flex-wrap:nowrap}.v-datatable__actions__select .v-select__selections .v-select__selection--comma{font-size:12px}.v-datatable__progress,.v-datatable__progress td,.v-datatable__progress th,.v-datatable__progress tr{height:auto!important}.v-datatable__progress th{padding:0!important}.v-datatable__progress th .v-progress-linear{margin:0}.v-datatable__expand-row{border-top:none!important}.v-datatable__expand-col{padding:0!important;height:0!important;visibility:hidden}.v-datatable__expand-col--expanded{visibility:visible}.v-datatable__expand-content{transition:height .3s cubic-bezier(.25,.8,.5,1)}.v-datatable__expand-content>.card{border-radius:0;box-shadow:none}.theme--light.v-date-picker-header .v-date-picker-header__value:not(.v-date-picker-header__value--disabled) button:not(:hover):not(:focus){color:rgba(0,0,0,.87)}.theme--light.v-date-picker-header .v-date-picker-header__value--disabled button{color:rgba(0,0,0,.38)}.theme--dark.v-date-picker-header .v-date-picker-header__value:not(.v-date-picker-header__value--disabled) button:not(:hover):not(:focus){color:#fff}.theme--dark.v-date-picker-header .v-date-picker-header__value--disabled button{color:hsla(0,0%,100%,.5)}.v-date-picker-header{padding:4px 16px;align-items:center;display:flex;justify-content:space-between;position:relative}.v-date-picker-header .v-btn{margin:0;z-index:auto}.v-date-picker-header .v-icon{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-date-picker-header__value{flex:1;text-align:center;position:relative;overflow:hidden}.v-date-picker-header__value div{transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-date-picker-header__value button{cursor:pointer;font-weight:700;outline:none;padding:.5rem;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-date-picker-header--disabled{pointer-events:none}.theme--light.v-date-picker-table .v-date-picker-table--date__week,.theme--light.v-date-picker-table th{color:rgba(0,0,0,.38)}.theme--dark.v-date-picker-table .v-date-picker-table--date__week,.theme--dark.v-date-picker-table th{color:hsla(0,0%,100%,.5)}.v-date-picker-table{position:relative;padding:0 12px;height:242px}.v-date-picker-table table{transition:.3s cubic-bezier(.25,.8,.5,1);top:0;table-layout:fixed;width:100%}.v-date-picker-table td,.v-date-picker-table th{text-align:center;position:relative}.v-date-picker-table th{font-size:12px}.v-date-picker-table--date .v-btn{height:32px;width:32px}.v-date-picker-table .v-btn{z-index:auto;margin:0;font-size:12px}.v-date-picker-table .v-btn.v-btn--active{color:#fff}.v-date-picker-table--month td{width:33.333333%;height:56px;vertical-align:middle;text-align:center}.v-date-picker-table--month td .v-btn{margin:0 auto;max-width:160px;min-width:40px;width:100%}.v-date-picker-table--date th{padding:8px 0;font-weight:600}.v-date-picker-table--date td{width:45px}.v-date-picker-table__events{height:8px;left:0;position:absolute;text-align:center;white-space:pre;width:100%}.v-date-picker-table__events>div{border-radius:50%;display:inline-block;height:8px;margin:0 1px;width:8px}.v-date-picker-table--date .v-date-picker-table__events{bottom:6px}.v-date-picker-table--month .v-date-picker-table__events{bottom:8px}.v-date-picker-table--disabled{pointer-events:none}.application--is-rtl .v-date-picker-title .v-picker__title__btn{text-align:right}.v-date-picker-title{display:flex;justify-content:space-between;flex-direction:column;flex-wrap:wrap;line-height:1}.v-date-picker-title__year{align-items:center;display:inline-flex;font-size:14px;font-weight:500;margin-bottom:8px}.v-date-picker-title__date{font-size:34px;text-align:left;font-weight:500;position:relative;overflow:hidden;padding-bottom:8px;margin-bottom:-8px}.v-date-picker-title__date>div{position:relative}.v-date-picker-title--disabled{pointer-events:none}.v-date-picker-years{font-size:16px;font-weight:400;height:286px;list-style-type:none;overflow:auto;padding:0;text-align:center}.v-date-picker-years li{cursor:pointer;padding:8px 0;transition:none}.v-date-picker-years li.active{font-size:26px;font-weight:500;padding:10px 0}.v-date-picker-years li:hover{background:rgba(0,0,0,.12)}.v-picker--landscape .v-date-picker-years{height:286px}.v-dialog{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);border-radius:2px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1);width:100%;z-index:6;outline:none}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog__activator,.v-dialog__activator *{cursor:pointer}.v-dialog__container{display:inline-block;vertical-align:middle}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;max-width:100%;flex-direction:column}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:1 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{overflow-y:auto;-webkit-backface-visibility:hidden;backface-visibility:hidden}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}.theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){margin-left:72px;max-width:calc(100% - 72px)}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}.theme--light.v-expansion-panel .v-expansion-panel__container{border-top:1px solid rgba(0,0,0,.12);background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-expansion-panel .v-expansion-panel__container .v-expansion-panel__header .v-expansion-panel__header__icon .v-icon{color:rgba(0,0,0,.54)}.theme--light.v-expansion-panel .v-expansion-panel__container--disabled{color:rgba(0,0,0,.38)}.theme--light.v-expansion-panel--focusable .v-expansion-panel__container:focus{background-color:#eee}.theme--dark.v-expansion-panel .v-expansion-panel__container{border-top:1px solid hsla(0,0%,100%,.12);background-color:#424242;color:#fff}.theme--dark.v-expansion-panel .v-expansion-panel__container .v-expansion-panel__header .v-expansion-panel__header__icon .v-icon{color:#fff}.theme--dark.v-expansion-panel .v-expansion-panel__container--disabled{color:hsla(0,0%,100%,.5)}.theme--dark.v-expansion-panel--focusable .v-expansion-panel__container:focus{background-color:#494949}.v-expansion-panel{display:flex;flex-wrap:wrap;justify-content:center;list-style-type:none;padding:0;text-align:left;width:100%;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.v-expansion-panel__container{flex:1 0 100%;max-width:100%;outline:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel__container:first-child{border-top:none!important}.v-expansion-panel__container .v-expansion-panel__header__iconnel__header__icon{margin-left:auto}.v-expansion-panel__container--disabled .v-expansion-panel__header{pointer-events:none}.v-expansion-panel__container--active>.v-expansion-panel__header .v-expansion-panel__header__icon .v-icon{transform:rotate(-180deg)}.v-expansion-panel__header{display:flex;cursor:pointer;align-items:center;position:relative;padding:12px 24px;min-height:48px}.v-expansion-panel__header>:not(.v-expansion-panel__header__icon){flex:1 1 auto}.v-expansion-panel__body{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel__body>.v-card{border-radius:0;box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-expansion-panel--inset,.v-expansion-panel--popout{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-expansion-panel--inset .v-expansion-panel__container--active,.v-expansion-panel--popout .v-expansion-panel__container--active{margin:16px;box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.v-expansion-panel--inset .v-expansion-panel__container,.v-expansion-panel--popout .v-expansion-panel__container{max-width:95%}.v-expansion-panel--popout .v-expansion-panel__container--active{max-width:100%}.v-expansion-panel--inset .v-expansion-panel__container--active{max-width:85%}.theme--light.v-footer{background:#f5f5f5;color:rgba(0,0,0,.87)}.theme--dark.v-footer{background:#212121;color:#fff}.v-footer{align-items:center;display:flex;flex:0 1 auto!important;min-height:36px;transition:.2s cubic-bezier(.4,0,.2,1)}.v-footer--absolute,.v-footer--fixed{bottom:0;left:0;width:100%;z-index:3}.v-footer--inset{z-index:2}.v-footer--absolute{position:absolute}.v-footer--fixed{position:fixed}.v-form>.container{padding:16px}.v-form>.container>.layout>.flex{padding:8px}.v-form>.container>.layout:only-child{margin:-8px}.v-form>.container>.layout:not(:only-child){margin:auto -8px}.container{flex:1 1 100%;margin:auto;padding:24px;width:100%}@media only screen and (min-width:960px){.container{max-width:900px}}@media only screen and (min-width:1264px){.container{max-width:1185px}}@media only screen and (min-width:1904px){.container{max-width:1785px}}@media only screen and (max-width:959px){.container{padding:16px}}.container.fluid{max-width:100%}.container.fill-height{align-items:center;display:flex}.container.fill-height>.layout{height:100%;flex:1 1 auto}.container.grid-list-xs .layout .flex{padding:1px}.container.grid-list-xs .layout:only-child{margin:-1px}.container.grid-list-xs .layout:not(:only-child){margin:auto -1px}.container.grid-list-xs :not(:only-child) .layout:first-child{margin-top:-1px}.container.grid-list-xs :not(:only-child) .layout:last-child{margin-bottom:-1px}.container.grid-list-sm .layout .flex{padding:2px}.container.grid-list-sm .layout:only-child{margin:-2px}.container.grid-list-sm .layout:not(:only-child){margin:auto -2px}.container.grid-list-sm :not(:only-child) .layout:first-child{margin-top:-2px}.container.grid-list-sm :not(:only-child) .layout:last-child{margin-bottom:-2px}.container.grid-list-md .layout .flex{padding:4px}.container.grid-list-md .layout:only-child{margin:-4px}.container.grid-list-md .layout:not(:only-child){margin:auto -4px}.container.grid-list-md :not(:only-child) .layout:first-child{margin-top:-4px}.container.grid-list-md :not(:only-child) .layout:last-child{margin-bottom:-4px}.container.grid-list-lg .layout .flex{padding:8px}.container.grid-list-lg .layout:only-child{margin:-8px}.container.grid-list-lg .layout:not(:only-child){margin:auto -8px}.container.grid-list-lg :not(:only-child) .layout:first-child{margin-top:-8px}.container.grid-list-lg :not(:only-child) .layout:last-child{margin-bottom:-8px}.container.grid-list-xl .layout .flex{padding:12px}.container.grid-list-xl .layout:only-child{margin:-12px}.container.grid-list-xl .layout:not(:only-child){margin:auto -12px}.container.grid-list-xl :not(:only-child) .layout:first-child{margin-top:-12px}.container.grid-list-xl :not(:only-child) .layout:last-child{margin-bottom:-12px}.layout{display:flex;flex:1 1 auto;flex-wrap:nowrap;min-width:0}.layout.row{flex-direction:row}.layout.row.reverse{flex-direction:row-reverse}.layout.column{flex-direction:column}.layout.column.reverse{flex-direction:column-reverse}.layout.column>.flex{max-width:100%}.layout.wrap{flex-wrap:wrap}@media (min-width:0){.flex.xs1{flex-basis:8.333333333333332%;flex-grow:0;max-width:8.333333333333332%}.flex.order-xs1{order:1}.flex.xs2{flex-basis:16.666666666666664%;flex-grow:0;max-width:16.666666666666664%}.flex.order-xs2{order:2}.flex.xs3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order-xs3{order:3}.flex.xs4{flex-basis:33.33333333333333%;flex-grow:0;max-width:33.33333333333333%}.flex.order-xs4{order:4}.flex.xs5{flex-basis:41.66666666666667%;flex-grow:0;max-width:41.66666666666667%}.flex.order-xs5{order:5}.flex.xs6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order-xs6{order:6}.flex.xs7{flex-basis:58.333333333333336%;flex-grow:0;max-width:58.333333333333336%}.flex.order-xs7{order:7}.flex.xs8{flex-basis:66.66666666666666%;flex-grow:0;max-width:66.66666666666666%}.flex.order-xs8{order:8}.flex.xs9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order-xs9{order:9}.flex.xs10{flex-basis:83.33333333333334%;flex-grow:0;max-width:83.33333333333334%}.flex.order-xs10{order:10}.flex.xs11{flex-basis:91.66666666666666%;flex-grow:0;max-width:91.66666666666666%}.flex.order-xs11{order:11}.flex.xs12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order-xs12{order:12}.flex.offset-xs0{margin-left:0}.flex.offset-xs1{margin-left:8.333333333333332%}.flex.offset-xs2{margin-left:16.666666666666664%}.flex.offset-xs3{margin-left:25%}.flex.offset-xs4{margin-left:33.33333333333333%}.flex.offset-xs5{margin-left:41.66666666666667%}.flex.offset-xs6{margin-left:50%}.flex.offset-xs7{margin-left:58.333333333333336%}.flex.offset-xs8{margin-left:66.66666666666666%}.flex.offset-xs9{margin-left:75%}.flex.offset-xs10{margin-left:83.33333333333334%}.flex.offset-xs11{margin-left:91.66666666666666%}.flex.offset-xs12{margin-left:100%}}@media (min-width:600px){.flex.sm1{flex-basis:8.333333333333332%;flex-grow:0;max-width:8.333333333333332%}.flex.order-sm1{order:1}.flex.sm2{flex-basis:16.666666666666664%;flex-grow:0;max-width:16.666666666666664%}.flex.order-sm2{order:2}.flex.sm3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order-sm3{order:3}.flex.sm4{flex-basis:33.33333333333333%;flex-grow:0;max-width:33.33333333333333%}.flex.order-sm4{order:4}.flex.sm5{flex-basis:41.66666666666667%;flex-grow:0;max-width:41.66666666666667%}.flex.order-sm5{order:5}.flex.sm6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order-sm6{order:6}.flex.sm7{flex-basis:58.333333333333336%;flex-grow:0;max-width:58.333333333333336%}.flex.order-sm7{order:7}.flex.sm8{flex-basis:66.66666666666666%;flex-grow:0;max-width:66.66666666666666%}.flex.order-sm8{order:8}.flex.sm9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order-sm9{order:9}.flex.sm10{flex-basis:83.33333333333334%;flex-grow:0;max-width:83.33333333333334%}.flex.order-sm10{order:10}.flex.sm11{flex-basis:91.66666666666666%;flex-grow:0;max-width:91.66666666666666%}.flex.order-sm11{order:11}.flex.sm12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order-sm12{order:12}.flex.offset-sm0{margin-left:0}.flex.offset-sm1{margin-left:8.333333333333332%}.flex.offset-sm2{margin-left:16.666666666666664%}.flex.offset-sm3{margin-left:25%}.flex.offset-sm4{margin-left:33.33333333333333%}.flex.offset-sm5{margin-left:41.66666666666667%}.flex.offset-sm6{margin-left:50%}.flex.offset-sm7{margin-left:58.333333333333336%}.flex.offset-sm8{margin-left:66.66666666666666%}.flex.offset-sm9{margin-left:75%}.flex.offset-sm10{margin-left:83.33333333333334%}.flex.offset-sm11{margin-left:91.66666666666666%}.flex.offset-sm12{margin-left:100%}}@media (min-width:960px){.flex.md1{flex-basis:8.333333333333332%;flex-grow:0;max-width:8.333333333333332%}.flex.order-md1{order:1}.flex.md2{flex-basis:16.666666666666664%;flex-grow:0;max-width:16.666666666666664%}.flex.order-md2{order:2}.flex.md3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order-md3{order:3}.flex.md4{flex-basis:33.33333333333333%;flex-grow:0;max-width:33.33333333333333%}.flex.order-md4{order:4}.flex.md5{flex-basis:41.66666666666667%;flex-grow:0;max-width:41.66666666666667%}.flex.order-md5{order:5}.flex.md6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order-md6{order:6}.flex.md7{flex-basis:58.333333333333336%;flex-grow:0;max-width:58.333333333333336%}.flex.order-md7{order:7}.flex.md8{flex-basis:66.66666666666666%;flex-grow:0;max-width:66.66666666666666%}.flex.order-md8{order:8}.flex.md9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order-md9{order:9}.flex.md10{flex-basis:83.33333333333334%;flex-grow:0;max-width:83.33333333333334%}.flex.order-md10{order:10}.flex.md11{flex-basis:91.66666666666666%;flex-grow:0;max-width:91.66666666666666%}.flex.order-md11{order:11}.flex.md12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order-md12{order:12}.flex.offset-md0{margin-left:0}.flex.offset-md1{margin-left:8.333333333333332%}.flex.offset-md2{margin-left:16.666666666666664%}.flex.offset-md3{margin-left:25%}.flex.offset-md4{margin-left:33.33333333333333%}.flex.offset-md5{margin-left:41.66666666666667%}.flex.offset-md6{margin-left:50%}.flex.offset-md7{margin-left:58.333333333333336%}.flex.offset-md8{margin-left:66.66666666666666%}.flex.offset-md9{margin-left:75%}.flex.offset-md10{margin-left:83.33333333333334%}.flex.offset-md11{margin-left:91.66666666666666%}.flex.offset-md12{margin-left:100%}}@media (min-width:1264px){.flex.lg1{flex-basis:8.333333333333332%;flex-grow:0;max-width:8.333333333333332%}.flex.order-lg1{order:1}.flex.lg2{flex-basis:16.666666666666664%;flex-grow:0;max-width:16.666666666666664%}.flex.order-lg2{order:2}.flex.lg3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order-lg3{order:3}.flex.lg4{flex-basis:33.33333333333333%;flex-grow:0;max-width:33.33333333333333%}.flex.order-lg4{order:4}.flex.lg5{flex-basis:41.66666666666667%;flex-grow:0;max-width:41.66666666666667%}.flex.order-lg5{order:5}.flex.lg6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order-lg6{order:6}.flex.lg7{flex-basis:58.333333333333336%;flex-grow:0;max-width:58.333333333333336%}.flex.order-lg7{order:7}.flex.lg8{flex-basis:66.66666666666666%;flex-grow:0;max-width:66.66666666666666%}.flex.order-lg8{order:8}.flex.lg9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order-lg9{order:9}.flex.lg10{flex-basis:83.33333333333334%;flex-grow:0;max-width:83.33333333333334%}.flex.order-lg10{order:10}.flex.lg11{flex-basis:91.66666666666666%;flex-grow:0;max-width:91.66666666666666%}.flex.order-lg11{order:11}.flex.lg12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order-lg12{order:12}.flex.offset-lg0{margin-left:0}.flex.offset-lg1{margin-left:8.333333333333332%}.flex.offset-lg2{margin-left:16.666666666666664%}.flex.offset-lg3{margin-left:25%}.flex.offset-lg4{margin-left:33.33333333333333%}.flex.offset-lg5{margin-left:41.66666666666667%}.flex.offset-lg6{margin-left:50%}.flex.offset-lg7{margin-left:58.333333333333336%}.flex.offset-lg8{margin-left:66.66666666666666%}.flex.offset-lg9{margin-left:75%}.flex.offset-lg10{margin-left:83.33333333333334%}.flex.offset-lg11{margin-left:91.66666666666666%}.flex.offset-lg12{margin-left:100%}}@media (min-width:1904px){.flex.xl1{flex-basis:8.333333333333332%;flex-grow:0;max-width:8.333333333333332%}.flex.order-xl1{order:1}.flex.xl2{flex-basis:16.666666666666664%;flex-grow:0;max-width:16.666666666666664%}.flex.order-xl2{order:2}.flex.xl3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order-xl3{order:3}.flex.xl4{flex-basis:33.33333333333333%;flex-grow:0;max-width:33.33333333333333%}.flex.order-xl4{order:4}.flex.xl5{flex-basis:41.66666666666667%;flex-grow:0;max-width:41.66666666666667%}.flex.order-xl5{order:5}.flex.xl6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order-xl6{order:6}.flex.xl7{flex-basis:58.333333333333336%;flex-grow:0;max-width:58.333333333333336%}.flex.order-xl7{order:7}.flex.xl8{flex-basis:66.66666666666666%;flex-grow:0;max-width:66.66666666666666%}.flex.order-xl8{order:8}.flex.xl9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order-xl9{order:9}.flex.xl10{flex-basis:83.33333333333334%;flex-grow:0;max-width:83.33333333333334%}.flex.order-xl10{order:10}.flex.xl11{flex-basis:91.66666666666666%;flex-grow:0;max-width:91.66666666666666%}.flex.order-xl11{order:11}.flex.xl12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order-xl12{order:12}.flex.offset-xl0{margin-left:0}.flex.offset-xl1{margin-left:8.333333333333332%}.flex.offset-xl2{margin-left:16.666666666666664%}.flex.offset-xl3{margin-left:25%}.flex.offset-xl4{margin-left:33.33333333333333%}.flex.offset-xl5{margin-left:41.66666666666667%}.flex.offset-xl6{margin-left:50%}.flex.offset-xl7{margin-left:58.333333333333336%}.flex.offset-xl8{margin-left:66.66666666666666%}.flex.offset-xl9{margin-left:75%}.flex.offset-xl10{margin-left:83.33333333333334%}.flex.offset-xl11{margin-left:91.66666666666666%}.flex.offset-xl12{margin-left:100%}}.child-flex>*,.flex{flex:1 1 auto;max-width:100%}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-self-start{align-self:flex-start}.align-self-end{align-self:flex-end}.align-self-center{align-self:center}.align-self-baseline{align-self:baseline}.align-content-start{align-content:flex-start}.align-content-end{align-content:flex-end}.align-content-center{align-content:center}.align-content-space-between{align-content:space-between}.align-content-space-around{align-content:space-around}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-space-around{justify-content:space-around}.justify-space-between{justify-content:space-between}.justify-self-start{justify-self:flex-start}.justify-self-end{justify-self:flex-end}.justify-self-center{justify-self:center}.justify-self-baseline{justify-self:baseline}.grow,.spacer{flex-grow:1!important}.grow{flex-shrink:0!important}.shrink{flex-grow:0!important;flex-shrink:1!important}.scroll-y{overflow-y:auto}.fill-height{height:100%}.hide-overflow{overflow:hidden!important}.show-overflow{overflow:visible!important}.ellipsis,.no-wrap{white-space:nowrap}.ellipsis{overflow:hidden;text-overflow:ellipsis}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}.d-flex>*,.d-inline-flex>*{flex:1 1 auto!important}.d-block{display:block!important}.d-inline-block{display:inline-block!important}.d-inline{display:inline!important}.d-none{display:none!important}.theme--light.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-icon.v-icon--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-icon{color:#fff}.theme--dark.v-icon.v-icon--disabled{color:hsla(0,0%,100%,.5)!important}.v-icon{align-items:center;display:inline-flex;font-feature-settings:\"liga\";font-size:24px;justify-content:center;line-height:1;transition:.3s cubic-bezier(.25,.8,.5,1);vertical-align:text-bottom}.v-icon--right{margin-left:16px}.v-icon--left{margin-right:16px}.v-icon.v-icon.v-icon--link{cursor:pointer}.v-icon--disabled{pointer-events:none;opacity:.6}.v-icon--is-component{height:24px}.v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}.theme--light.v-input:not(.v-input--is-disabled) input,.theme--light.v-input:not(.v-input--is-disabled) textarea{color:rgba(0,0,0,.87)}.theme--light.v-input input::-moz-placeholder,.theme--light.v-input textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--light.v-input input:-ms-input-placeholder,.theme--light.v-input textarea:-ms-input-placeholder{color:rgba(0,0,0,.38)}.theme--light.v-input input::placeholder,.theme--light.v-input textarea::placeholder{color:rgba(0,0,0,.38)}.theme--light.v-input--is-disabled .v-label,.theme--light.v-input--is-disabled input,.theme--light.v-input--is-disabled textarea{color:rgba(0,0,0,.38)}.theme--dark.v-input:not(.v-input--is-disabled) input,.theme--dark.v-input:not(.v-input--is-disabled) textarea{color:#fff}.theme--dark.v-input input::-moz-placeholder,.theme--dark.v-input textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-input input:-ms-input-placeholder,.theme--dark.v-input textarea:-ms-input-placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-input input::placeholder,.theme--dark.v-input textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-input--is-disabled .v-label,.theme--dark.v-input--is-disabled input,.theme--dark.v-input--is-disabled textarea{color:hsla(0,0%,100%,.5)}.v-input{align-items:flex-start;display:flex;flex:1 1 auto;font-size:16px;text-align:left}.v-input .v-progress-linear{top:calc(100% - 1px);left:0;margin:0;position:absolute}.v-input input{max-height:32px}.v-input input:invalid,.v-input textarea:invalid{box-shadow:none}.v-input input:active,.v-input input:focus,.v-input textarea:active,.v-input textarea:focus{outline:none}.v-input .v-label{height:20px;line-height:20px}.v-input__append-outer,.v-input__prepend-outer{display:inline-flex;margin-bottom:4px;margin-top:4px;line-height:1}.v-input__append-outer .v-icon,.v-input__prepend-outer .v-icon{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input__append-outer{margin-left:9px}.v-input__prepend-outer{margin-right:9px}.v-input__control{display:flex;flex-direction:column;height:auto;flex-grow:1;flex-wrap:wrap;width:100%}.v-input__icon{align-items:center;display:inline-flex;height:24px;flex:1 0 auto;justify-content:center;min-width:24px;width:24px}.v-input__icon--clear{border-radius:50%}.v-input__slot{align-items:center;color:inherit;display:flex;margin-bottom:8px;min-height:inherit;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-input--is-disabled:not(.v-input--is-readonly){pointer-events:none}.v-input--is-loading>.v-input__control>.v-input__slot:after,.v-input--is-loading>.v-input__control>.v-input__slot:before{display:none}.v-input--hide-details>.v-input__control>.v-input__slot{margin-bottom:0}.v-input--has-state.error--text .v-label{-webkit-animation:shake .6s cubic-bezier(.25,.8,.5,1);animation:shake .6s cubic-bezier(.25,.8,.5,1)}.v-item-group{flex:0 1 auto;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-item-group>*{cursor:pointer;flex:1 1 auto}.theme--light.v-jumbotron .v-jumbotron__content{color:rgba(0,0,0,.87)}.theme--dark.v-jumbotron .v-jumbotron__content{color:#fff}.v-jumbotron{display:block;top:0;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-jumbotron__wrapper{height:100%;overflow:hidden;position:relative;transition:inherit;width:100%}.v-jumbotron__background{position:absolute;top:0;left:0;right:0;bottom:0;contain:strict;transition:inherit}.v-jumbotron__image{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);min-width:100%;will-change:transform;transition:inherit}.v-jumbotron__content{height:100%;position:relative;transition:inherit}.theme--light.v-label{color:rgba(0,0,0,.54)}.theme--light.v-label--is-disabled{color:rgba(0,0,0,.38)}.theme--dark.v-label{color:hsla(0,0%,100%,.7)}.theme--dark.v-label--is-disabled{color:hsla(0,0%,100%,.5)}.v-label{font-size:16px;line-height:1;min-height:8px;transition:.3s cubic-bezier(.25,.8,.5,1)}.theme--light.v-list{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-list .v-list--disabled{color:rgba(0,0,0,.38)}.theme--light.v-list .v-list__tile__sub-title{color:rgba(0,0,0,.54)}.theme--light.v-list .v-list__tile__mask{color:rgba(0,0,0,.38);background:#eee}.theme--light.v-list .v-list__group__header:hover,.theme--light.v-list .v-list__tile--highlighted,.theme--light.v-list .v-list__tile--link:hover{background:rgba(0,0,0,.04)}.theme--light.v-list .v-list__group--active:after,.theme--light.v-list .v-list__group--active:before{background:rgba(0,0,0,.12)}.theme--light.v-list .v-list__group--disabled .v-list__group__header__prepend-icon .v-icon,.theme--light.v-list .v-list__group--disabled .v-list__tile{color:rgba(0,0,0,.38)!important}.theme--dark.v-list{background:#424242;color:#fff}.theme--dark.v-list .v-list--disabled{color:hsla(0,0%,100%,.5)}.theme--dark.v-list .v-list__tile__sub-title{color:hsla(0,0%,100%,.7)}.theme--dark.v-list .v-list__tile__mask{color:hsla(0,0%,100%,.5);background:#494949}.theme--dark.v-list .v-list__group__header:hover,.theme--dark.v-list .v-list__tile--highlighted,.theme--dark.v-list .v-list__tile--link:hover{background:hsla(0,0%,100%,.08)}.theme--dark.v-list .v-list__group--active:after,.theme--dark.v-list .v-list__group--active:before{background:hsla(0,0%,100%,.12)}.theme--dark.v-list .v-list__group--disabled .v-list__group__header__prepend-icon .v-icon,.theme--dark.v-list .v-list__group--disabled .v-list__tile{color:hsla(0,0%,100%,.5)!important}.application--is-rtl .v-list__tile__content,.application--is-rtl .v-list__tile__title{text-align:right}.v-list{list-style-type:none;padding:8px 0;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-list>div{transition:inherit}.v-list__tile{align-items:center;color:inherit;display:flex;font-size:16px;font-weight:400;height:48px;margin:0;padding:0 16px;position:relative;text-decoration:none;transition:background .3s cubic-bezier(.25,.8,.5,1)}.v-list__tile--link{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-list__tile__action,.v-list__tile__content{height:100%}.v-list__tile__sub-title,.v-list__tile__title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-list__tile__title{height:24px;line-height:24px;position:relative;text-align:left}.v-list__tile__sub-title{font-size:14px}.v-list__tile__action,.v-list__tile__avatar{display:flex;justify-content:flex-start;min-width:56px}.v-list__tile__action{align-items:center}.v-list__tile__action .v-btn{padding:0;margin:0}.v-list__tile__action .v-btn--icon{margin:-6px}.v-list__tile__action .v-radio.v-radio{margin:0}.v-list__tile__action .v-input--selection-controls{padding:0;margin:0}.v-list__tile__action .v-input--selection-controls .v-messages{display:none}.v-list__tile__action .v-input--selection-controls .v-input__slot{margin:0}.v-list__tile__action-text{color:#9e9e9e;font-size:12px}.v-list__tile__action--stack{align-items:flex-end;justify-content:space-between;padding-top:8px;padding-bottom:8px;white-space:nowrap;flex-direction:column}.v-list__tile__content{text-align:left;flex:1 1 auto;overflow:hidden;display:flex;align-items:flex-start;justify-content:center;flex-direction:column}.v-list__tile__content~.v-list__tile__action:not(.v-list__tile__action--stack),.v-list__tile__content~.v-list__tile__avatar{justify-content:flex-end}.v-list__tile--active .v-list__tile__action:first-of-type .v-icon{color:inherit}.v-list__tile--avatar{height:56px}.v-list--dense{padding-top:4px;padding-bottom:4px}.v-list--dense .v-subheader{font-size:13px;height:40px}.v-list--dense .v-list__group .v-subheader{height:40px}.v-list--dense .v-list__tile{font-size:13px}.v-list--dense .v-list__tile--avatar{height:48px}.v-list--dense .v-list__tile:not(.v-list__tile--avatar){height:40px}.v-list--dense .v-list__tile .v-icon{font-size:22px}.v-list--dense .v-list__tile__sub-title{font-size:13px}.v-list--disabled{pointer-events:none}.v-list--two-line .v-list__tile{height:72px}.v-list--two-line.v-list--dense .v-list__tile{height:60px}.v-list--three-line .v-list__tile{height:88px}.v-list--three-line .v-list__tile__avatar{margin-top:-18px}.v-list--three-line .v-list__tile__sub-title{white-space:normal;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box}.v-list--three-line.v-list--dense .v-list__tile{height:76px}.v-list>.v-list__group:before{top:0}.v-list>.v-list__group:before .v-list__tile__avatar{margin-top:-14px}.v-list__group{padding:0;position:relative;transition:inherit}.v-list__group:after,.v-list__group:before{content:\"\";height:1px;left:0;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-list__group--active~.v-list__group:before{display:none}.v-list__group__header{align-items:center;cursor:pointer;display:flex;list-style-type:none}.v-list__group__header>div:not(.v-list__group__header__prepend-icon):not(.v-list__group__header__append-icon){flex:1 1 auto;overflow:hidden}.v-list__group__header .v-list__group__header__append-icon,.v-list__group__header .v-list__group__header__prepend-icon{padding:0 16px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-list__group__header--sub-group{align-items:center;display:flex}.v-list__group__header--sub-group div .v-list__tile{padding-left:0}.v-list__group__header--sub-group .v-list__group__header__prepend-icon{padding:0 0 0 40px;margin-right:8px}.v-list__group__header .v-list__group__header__prepend-icon{display:flex;justify-content:flex-start;min-width:56px}.v-list__group__header--active .v-list__group__header__append-icon .v-icon{transform:rotate(-180deg)}.v-list__group__header--active .v-list__group__header__prepend-icon .v-icon{color:inherit}.v-list__group__header--active.v-list__group__header--sub-group .v-list__group__header__prepend-icon .v-icon{transform:rotate(-180deg)}.v-list__group__items{position:relative;padding:0;transition:inherit}.v-list__group__items>div{display:block}.v-list__group__items--no-action .v-list__tile{padding-left:72px}.v-list__group--disabled{pointer-events:none}.v-list--subheader{padding-top:0}.v-menu{display:block;vertical-align:middle}.v-menu--inline{display:inline-block}.v-menu__activator{align-items:center;cursor:pointer;display:flex}.v-menu__activator *{cursor:pointer}.v-menu__content{position:absolute;display:inline-block;border-radius:2px;max-width:80%;overflow-y:auto;overflow-x:hidden;contain:content;will-change:transform;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-menu__content--active{pointer-events:none}.v-menu__content--fixed{position:fixed}.v-menu__content>.card{contain:content;-webkit-backface-visibility:hidden;backface-visibility:hidden}.v-menu>.v-menu__content{max-width:none}.v-menu-transition-enter .v-list__tile{min-width:0;pointer-events:none}.v-menu-transition-enter-to .v-list__tile{pointer-events:auto;transition-delay:.1s}.v-menu-transition-leave-active,.v-menu-transition-leave-to{pointer-events:none}.v-menu-transition-enter,.v-menu-transition-leave-to{opacity:0}.v-menu-transition-enter-active,.v-menu-transition-leave-active{transition:all .3s cubic-bezier(.25,.8,.25,1)}.v-menu-transition-enter.v-menu__content--auto{transition:none!important}.v-menu-transition-enter.v-menu__content--auto .v-list__tile{opacity:0;transform:translateY(-15px)}.v-menu-transition-enter.v-menu__content--auto .v-list__tile--active{opacity:1;transform:none!important;pointer-events:auto}.theme--light.v-messages{color:rgba(0,0,0,.54)}.theme--dark.v-messages{color:hsla(0,0%,100%,.7)}.application--is-rtl .v-messages{text-align:right}.v-messages{flex:1 1 auto;font-size:12px;min-height:12px;min-width:1px;position:relative}.v-messages__message{line-height:normal;word-break:break-word;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.theme--light.v-navigation-drawer{background-color:#fff}.theme--light.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border{background-color:rgba(0,0,0,.12)}.theme--light.v-navigation-drawer .v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-navigation-drawer{background-color:#424242}.theme--dark.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border{background-color:hsla(0,0%,100%,.12)}.theme--dark.v-navigation-drawer .v-divider{border-color:hsla(0,0%,100%,.12)}.v-navigation-drawer{transition:none;display:block;left:0;max-width:100%;overflow-y:auto;overflow-x:hidden;pointer-events:auto;top:0;will-change:transform;z-index:3;-webkit-overflow-scrolling:touch}.v-navigation-drawer[data-booted=true]{transition:.2s cubic-bezier(.4,0,.2,1);transition-property:transform,width}.v-navigation-drawer__border{position:absolute;right:0;top:0;height:100%;width:1px}.v-navigation-drawer.v-navigation-drawer--right:after{left:0;right:auto}.v-navigation-drawer--right{left:auto;right:0}.v-navigation-drawer--right>.v-navigation-drawer__border{right:auto;left:0}.v-navigation-drawer--absolute{position:absolute}.v-navigation-drawer--fixed{position:fixed}.v-navigation-drawer--floating:after{display:none}.v-navigation-drawer--mini-variant{overflow:hidden}.v-navigation-drawer--mini-variant .v-list__group__header__prepend-icon{flex:1 0 auto;justify-content:center;width:100%}.v-navigation-drawer--mini-variant .v-list__tile__action,.v-navigation-drawer--mini-variant .v-list__tile__avatar{justify-content:center;min-width:48px}.v-navigation-drawer--mini-variant .v-list__tile:after,.v-navigation-drawer--mini-variant .v-list__tile__content{opacity:0}.v-navigation-drawer--mini-variant .v-divider,.v-navigation-drawer--mini-variant .v-list--group,.v-navigation-drawer--mini-variant .v-subheader{display:none!important}.v-navigation-drawer--is-mobile,.v-navigation-drawer--temporary{z-index:6}.v-navigation-drawer--is-mobile:not(.v-navigation-drawer--close),.v-navigation-drawer--temporary:not(.v-navigation-drawer--close){box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.v-navigation-drawer .v-list{background:inherit}.v-navigation-drawer>.v-list .v-list__tile{transition:none;font-weight:500}.v-navigation-drawer>.v-list .v-list__tile--active .v-list__tile__title{color:inherit}.v-navigation-drawer>.v-list .v-list--group .v-list__tile{font-weight:400}.v-navigation-drawer>.v-list .v-list--group__header--active:after{background:transparent}.v-navigation-drawer>.v-list:not(.v-list--dense) .v-list__tile{font-size:14px}.theme--light.v-overflow-btn .v-input__control:before,.theme--light.v-overflow-btn .v-input__slot:before{background-color:rgba(0,0,0,.12)!important}.theme--light.v-overflow-btn.v-text-field--outline .v-input__control:before,.theme--light.v-overflow-btn.v-text-field--outline .v-input__slot:before{background-color:transparent!important}.theme--light.v-overflow-btn--editable.v-input--is-focused .v-input__append-inner,.theme--light.v-overflow-btn--editable.v-select--is-menu-active .v-input__append-inner,.theme--light.v-overflow-btn--editable:hover .v-input__append-inner,.theme--light.v-overflow-btn--segmented .v-input__append-inner{border-left:1px solid rgba(0,0,0,.12)}.theme--light.v-overflow-btn.v-input--is-focused .v-input__slot,.theme--light.v-overflow-btn.v-select--is-menu-active .v-input__slot,.theme--light.v-overflow-btn:hover .v-input__slot{background:#fff}.theme--dark.v-overflow-btn .v-input__control:before,.theme--dark.v-overflow-btn .v-input__slot:before{background-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-overflow-btn.v-text-field--outline .v-input__control:before,.theme--dark.v-overflow-btn.v-text-field--outline .v-input__slot:before{background-color:transparent!important}.theme--dark.v-overflow-btn--editable.v-input--is-focused .v-input__append-inner,.theme--dark.v-overflow-btn--editable.v-select--is-menu-active .v-input__append-inner,.theme--dark.v-overflow-btn--editable:hover .v-input__append-inner,.theme--dark.v-overflow-btn--segmented .v-input__append-inner{border-left:1px solid hsla(0,0%,100%,.12)}.theme--dark.v-overflow-btn.v-input--is-focused .v-input__slot,.theme--dark.v-overflow-btn.v-select--is-menu-active .v-input__slot,.theme--dark.v-overflow-btn:hover .v-input__slot{background:#424242}.v-overflow-btn{margin-top:12px;padding-top:0}.v-overflow-btn:not(.v-overflow-btn--editable)>.v-input__control>.v-input__slot{cursor:pointer}.v-overflow-btn .v-select__slot{height:48px}.v-overflow-btn .v-select__slot input{margin-left:16px;cursor:pointer}.v-overflow-btn .v-select__selection--comma:first-child{margin-left:16px}.v-overflow-btn .v-input__slot{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-overflow-btn .v-input__slot:after{content:none}.v-overflow-btn .v-label{margin-left:16px;top:calc(50% - 10px)}.v-overflow-btn .v-input__append-inner{width:48px;height:48px;align-self:auto;align-items:center;margin-top:0;padding:0;flex-shrink:0}.v-overflow-btn .v-input__append-outer,.v-overflow-btn .v-input__prepend-outer{margin-top:12px;margin-bottom:12px}.v-overflow-btn .v-input__control:before{height:1px;top:-1px;content:\"\";left:0;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-overflow-btn.v-input--is-focused .v-input__slot,.v-overflow-btn.v-select--is-menu-active .v-input__slot{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-overflow-btn .v-select__selections{width:0}.v-overflow-btn--segmented .v-select__selections{flex-wrap:nowrap}.v-overflow-btn--segmented .v-select__selections .v-btn{border-radius:0;margin:0 -16px 0 0;height:48px;width:100%}.v-overflow-btn--segmented .v-select__selections .v-btn__content{justify-content:start}.v-overflow-btn--segmented .v-select__selections .v-btn__content:before{background-color:transparent}.v-overflow-btn--editable .v-select__slot input{cursor:text}.v-overflow-btn--editable .v-input__append-inner,.v-overflow-btn--editable .v-input__append-inner *{cursor:pointer}.v-overlay{position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;transition:.3s cubic-bezier(.25,.8,.5,1);z-index:5}.v-overlay--absolute{position:absolute}.v-overlay:before{background-color:#212121;bottom:0;content:\"\";height:100%;left:0;opacity:0;position:absolute;right:0;top:0;transition:inherit;transition-delay:.15s;width:100%}.v-overlay--active{pointer-events:auto;touch-action:none}.v-overlay--active:before{opacity:.46}.theme--light.v-pagination .v-pagination__item{background:#fff;color:#000;width:auto;min-width:34px;padding:0 5px}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--light.v-pagination .v-pagination__navigation .v-icon{color:rgba(0,0,0,.54)}.theme--dark.v-pagination .v-pagination__item{background:#424242;color:#fff;width:auto;min-width:34px;padding:0 5px}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#424242}.theme--dark.v-pagination .v-pagination__navigation .v-icon{color:#fff}.v-pagination{align-items:center;display:inline-flex;list-style-type:none;margin:0;max-width:100%;padding:0}.v-pagination>li{align-items:center;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{pointer-events:none;opacity:.6}.v-pagination__item{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:4px;font-size:14px;background:transparent;height:34px;width:34px;margin:.3rem;text-decoration:none;transition:.3s cubic-bezier(0,0,.2,1)}.v-pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);display:inline-flex;justify-content:center;align-items:center;text-decoration:none;height:2rem;border-radius:4px;width:2rem;margin:.3rem 10px}.v-pagination__navigation .v-icon{font-size:2rem;transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{margin:.3rem;display:inline-flex;align-items:flex-end;justify-content:center;height:2rem;width:2rem}.v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}.theme--light.v-picker__title{background:#e0e0e0}.theme--dark.v-picker__title{background:#616161}.theme--light.v-picker__body{background:#fff}.theme--dark.v-picker__body{background:#424242}.v-picker{border-radius:2px;contain:layout style;display:inline-flex;flex-direction:column;vertical-align:top;position:relative}.v-picker--full-width{display:flex}.v-picker__title{color:#fff;border-top-left-radius:2px;border-top-right-radius:2px;padding:16px}.v-picker__title__btn{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-picker__title__btn:not(.v-picker__title__btn--active){opacity:.6;cursor:pointer}.v-picker__title__btn:not(.v-picker__title__btn--active):hover:not(:focus){opacity:1}.v-picker__title__btn--readonly{pointer-events:none}.v-picker__title__btn--active{opacity:1}.v-picker__body{height:auto;overflow:hidden;position:relative;z-index:0;flex:1 0 auto;display:flex;flex-direction:column;align-items:center}.v-picker__body>div{width:100%}.v-picker__body>div.fade-transition-leave-active{position:absolute}.v-picker--landscape .v-picker__title{border-top-right-radius:0;border-bottom-right-radius:0;width:170px;position:absolute;top:0;left:0;height:100%;z-index:1}.v-picker--landscape .v-picker__actions,.v-picker--landscape .v-picker__body{margin-left:170px}.v-progress-circular{position:relative;display:inline-flex;vertical-align:middle}.v-progress-circular svg{width:100%;height:100%;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0;z-index:0}.v-progress-circular--indeterminate svg{-webkit-animation:progress-circular-rotate 1.4s linear infinite;animation:progress-circular-rotate 1.4s linear infinite;transform-origin:center center;transition:all .2s ease-in-out}.v-progress-circular--indeterminate .v-progress-circular__overlay{-webkit-animation:progress-circular-dash 1.4s ease-in-out infinite;animation:progress-circular-dash 1.4s ease-in-out infinite;stroke-linecap:round;stroke-dasharray:80,200;stroke-dashoffset:0px}.v-progress-circular__underlay{stroke:rgba(0,0,0,.1);z-index:1}.v-progress-circular__overlay{stroke:currentColor;z-index:2;transition:all .6s ease-in-out}.v-progress-circular__info{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}@-webkit-keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-125px}}@keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-125px}}@-webkit-keyframes progress-circular-rotate{to{transform:rotate(1turn)}}@keyframes progress-circular-rotate{to{transform:rotate(1turn)}}.v-progress-linear{background:transparent;margin:1rem 0;overflow:hidden;width:100%;position:relative}.v-progress-linear__bar{width:100%;position:relative;z-index:1}.v-progress-linear__bar,.v-progress-linear__bar__determinate{height:inherit;transition:.2s cubic-bezier(.4,0,.6,1)}.v-progress-linear__bar__indeterminate .long,.v-progress-linear__bar__indeterminate .short{height:inherit;position:absolute;left:0;top:0;bottom:0;will-change:left,right;width:auto;background-color:inherit}.v-progress-linear__bar__indeterminate--active .long{-webkit-animation:indeterminate;animation:indeterminate;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear__bar__indeterminate--active .short{-webkit-animation:indeterminate-short;animation:indeterminate-short;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear__background{position:absolute;top:0;left:0;bottom:0;transition:.3s ease-in}.v-progress-linear__content{width:100%;height:100%;position:absolute;top:0;left:0;z-index:2}.v-progress-linear--query .v-progress-linear__bar__indeterminate--active .long{-webkit-animation:query;animation:query;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__bar__indeterminate--active .short{-webkit-animation:query-short;animation:query-short;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes indeterminate{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes query{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-short{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}.v-input--radio-group__input{display:flex;width:100%}.v-input--radio-group--column .v-input--radio-group__input>.v-label{padding-bottom:8px}.v-input--radio-group--row .v-input--radio-group__input>.v-label{padding-right:8px}.v-input--radio-group--row .v-input--radio-group__input{flex-direction:row;flex-wrap:wrap}.v-input--radio-group--column .v-radio:not(:last-child):not(:only-child){margin-bottom:8px}.v-input--radio-group--column .v-input--radio-group__input{flex-direction:column}.theme--light.v-radio--is-disabled label{color:rgba(0,0,0,.38)}.theme--light.v-radio--is-disabled .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-radio--is-disabled label{color:hsla(0,0%,100%,.5)}.theme--dark.v-radio--is-disabled .v-icon{color:hsla(0,0%,100%,.3)!important}.v-radio{align-items:center;display:flex;height:auto;margin-right:16px;outline:none}.v-radio--is-disabled{pointer-events:none}.theme--light.v-input--range-slider.v-input--slider.v-input--is-disabled .v-slider.v-slider .v-slider__thumb{background:#bdbdbd}.theme--dark.v-input--range-slider.v-input--slider.v-input--is-disabled .v-slider.v-slider .v-slider__thumb{background:#424242}.v-input--range-slider.v-input--is-disabled .v-slider__track-fill{display:none}.v-input--range-slider.v-input--is-disabled.v-input--slider .v-slider.v-slider .v-slider__thumb{border-color:transparent}.v-rating .v-icon{padding:.5rem;border-radius:50%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}.v-responsive{position:relative;overflow:hidden;flex:1 0 auto;display:flex}.v-responsive__content{flex:1 0 0px}.v-responsive__sizer{transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);flex:0 0 0px}.v-ripple__container{border-radius:inherit;width:100%;height:100%;z-index:0;contain:strict}.v-ripple__animation,.v-ripple__container{color:inherit;position:absolute;left:0;top:0;overflow:hidden;pointer-events:none}.v-ripple__animation{border-radius:50%;background:currentColor;opacity:0;will-change:transform,opacity}.v-ripple__animation--enter{transition:none}.v-ripple__animation--in{transition:transform .25s cubic-bezier(.4,0,.2,1),opacity .1s cubic-bezier(.4,0,.2,1)}.v-ripple__animation--out{transition:opacity .3s cubic-bezier(.4,0,.2,1)}.theme--light.v-select .v-select__selections{color:rgba(0,0,0,.87)}.theme--light.v-select .v-chip--disabled,.theme--light.v-select.v-input--is-disabled .v-select__selections,.theme--light.v-select .v-select__selection--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-select .v-select__selections,.theme--light.v-select.v-text-field--solo-inverted.v-input--is-focused .v-select__selections{color:#fff}.theme--dark.v-select .v-chip--disabled,.theme--dark.v-select.v-input--is-disabled .v-select__selections,.theme--dark.v-select .v-select__selection--disabled{color:hsla(0,0%,100%,.5)}.theme--dark.v-select.v-text-field--solo-inverted.v-input--is-focused .v-select__selections{color:rgba(0,0,0,.87)}.v-select{position:relative}.v-select>.v-input__control>.v-input__slot{cursor:pointer}.v-select .v-chip{flex:0 1 auto}.v-select .fade-transition-leave-active{position:absolute;left:0}.v-select.v-input--is-dirty ::-moz-placeholder{color:transparent!important}.v-select.v-input--is-dirty :-ms-input-placeholder{color:transparent!important}.v-select.v-input--is-dirty ::placeholder{color:transparent!important}.v-select:not(.v-input--is-dirty):not(.v-input--is-focused) .v-text-field__prefix{line-height:20px;position:absolute;top:7px;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-select.v-text-field--enclosed:not(.v-text-field--single-line) .v-select__selections{padding-top:24px}.v-select.v-text-field input{flex:1 1;margin-top:0;min-width:0;pointer-events:none;position:relative}.v-select.v-select--is-menu-active .v-input__icon--append .v-icon{transform:rotate(180deg)}.v-select.v-select--chips input{margin:0}.v-select.v-select--chips .v-select__selections{min-height:42px}.v-select.v-select--chips.v-select--chips--small .v-select__selections{min-height:32px}.v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--box .v-select__selections,.v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--enclosed .v-select__selections{min-height:68px}.v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--box.v-select--chips--small .v-select__selections,.v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--enclosed.v-select--chips--small .v-select__selections{min-height:56px}.v-select.v-text-field--reverse .v-select__selections,.v-select.v-text-field--reverse .v-select__slot{flex-direction:row-reverse}.v-select__selections{align-items:center;display:flex;flex:1 1 auto;flex-wrap:wrap;line-height:18px}.v-select__selection{max-width:90%}.v-select__selection--comma{align-items:center;display:inline-flex;margin:7px 4px 7px 0}.v-select__slot{position:relative;align-items:center;display:flex;width:100%}.v-select:not(.v-text-field--single-line) .v-select__slot>input{align-self:flex-end}.theme--light.v-input--selection-controls.v-input--is-disabled .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-input--selection-controls.v-input--is-disabled .v-icon{color:hsla(0,0%,100%,.3)!important}.application--is-rtl .v-input--selection-controls .v-input--selection-controls__input{margin-right:0;margin-left:8px}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls .v-input__append-outer,.v-input--selection-controls .v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls .v-input__control{flex-grow:0;width:auto}.v-input--selection-controls:not(.v-input--hide-details) .v-input__slot{margin-bottom:12px}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;margin-right:8px;transition:.3s cubic-bezier(.25,.8,.25,1);transition-property:color,transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input input{position:absolute;opacity:0;width:100%;height:100%}.v-input--selection-controls__input+.v-label,.v-input--selection-controls__input input{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:\"\";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple .v-ripple__container{transform:scale(1.4)}.v-input--selection-controls.v-input .v-label{align-items:center;display:inline-flex;top:0;height:auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(.8)}.theme--light.v-sheet{background-color:#fff;border-color:#fff;color:rgba(0,0,0,.87)}.theme--dark.v-sheet{background-color:#424242;border-color:#424242;color:#fff}.v-sheet{display:block;border-radius:2px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-sheet--tile{border-radius:0}.theme--light.v-input--slider .v-slider__track,.theme--light.v-input--slider .v-slider__track-fill{background:rgba(0,0,0,.26)}.theme--light.v-input--slider .v-slider__track__container:after{border:1px solid rgba(0,0,0,.87)}.theme--light.v-input--slider .v-slider__ticks{border-color:rgba(0,0,0,.87);color:rgba(0,0,0,.54)}.theme--light.v-input--slider:not(.v-input--is-dirty) .v-slider__thumb-label{background:rgba(0,0,0,.26)}.theme--light.v-input--slider:not(.v-input--is-dirty) .v-slider__thumb{border:3px solid rgba(0,0,0,.26)}.theme--light.v-input--slider:not(.v-input--is-dirty).v-input--slider--is-active .v-slider__thumb{border:3px solid rgba(0,0,0,.38)}.theme--light.v-input--slider.v-input--is-disabled .v-slider__thumb{border:5px solid rgba(0,0,0,.26)}.theme--light.v-input--slider.v-input--is-disabled.v-input--is-dirty .v-slider__thumb{background:rgba(0,0,0,.26)}.theme--light.v-input--slider.v-input--slider--is-active .v-slider__track{background:rgba(0,0,0,.38)}.theme--dark.v-input--slider .v-slider__track,.theme--dark.v-input--slider .v-slider__track-fill{background:hsla(0,0%,100%,.2)}.theme--dark.v-input--slider .v-slider__track__container:after{border:1px solid #fff}.theme--dark.v-input--slider .v-slider__ticks{border-color:#fff;color:hsla(0,0%,100%,.7)}.theme--dark.v-input--slider:not(.v-input--is-dirty) .v-slider__thumb-label{background:hsla(0,0%,100%,.2)}.theme--dark.v-input--slider:not(.v-input--is-dirty) .v-slider__thumb{border:3px solid hsla(0,0%,100%,.2)}.theme--dark.v-input--slider:not(.v-input--is-dirty).v-input--slider--is-active .v-slider__thumb{border:3px solid hsla(0,0%,100%,.3)}.theme--dark.v-input--slider.v-input--is-disabled .v-slider__thumb{border:5px solid hsla(0,0%,100%,.2)}.theme--dark.v-input--slider.v-input--is-disabled.v-input--is-dirty .v-slider__thumb{background:hsla(0,0%,100%,.2)}.theme--dark.v-input--slider.v-input--slider--is-active .v-slider__track{background:hsla(0,0%,100%,.3)}.application--is-rtl .v-input--slider .v-label{margin-left:16px;margin-right:0}.v-input--slider{margin-top:16px}.v-input--slider.v-input--is-focused .v-slider__thumb-container--is-active:not(.v-slider__thumb-container--show-label):before{opacity:.2;transform:scale(1)}.v-input--slider.v-input--is-focused .v-slider__track{transition:none}.v-input--slider.v-input--is-focused.v-input--slider--ticks .v-slider .v-slider__tick,.v-input--slider.v-input--is-focused.v-input--slider--ticks .v-slider__track__container:after,.v-input--slider.v-input--slider--ticks .v-slider__ticks.v-slider__ticks--always-show{opacity:1}.v-input--slider.v-input--slider--ticks-labels .v-input__slot{margin-bottom:16px}.v-input--slider.v-input--is-readonly .v-input__control{pointer-events:none}.v-input--slider.v-input--is-disabled .v-slider__thumb{transform:translateY(-50%) scale(.45)}.v-input--slider.v-input--is-disabled.v-input--is-dirty .v-slider__thumb{border:0 solid transparent}.v-input--slider .v-input__slot>:first-child:not(:only-child){margin-right:16px}.v-slider{cursor:default;display:flex;align-items:center;position:relative;height:32px;flex:1;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider input{cursor:default;opacity:0;padding:0;width:100%}.v-slider__track__container{height:2px;left:0;overflow:hidden;pointer-events:none;position:absolute;top:50%;transform:translateY(-50%);width:100%}.v-slider__track__container:after{content:\"\";position:absolute;right:0;top:0;height:2px;transition:.3s cubic-bezier(.25,.8,.5,1);width:2px;opacity:0}.v-slider__thumb,.v-slider__ticks,.v-slider__track{position:absolute;top:0}.v-slider__track{transform-origin:right;overflow:hidden}.v-slider__track,.v-slider__track-fill{height:2px;left:0;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-slider__track-fill{position:absolute;transform-origin:left}.v-slider__ticks-container{position:absolute;left:0;height:2px;width:100%;top:50%;transform:translateY(-50%)}.v-slider__ticks{opacity:0;border-style:solid;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-slider__ticks>span{position:absolute;top:8px;transform:translateX(-50%);white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider__ticks:first-child>span{transform:translateX(0)}.v-slider__ticks:last-child>span{transform:translateX(-100%)}.v-slider:not(.v-input--is-dirty) .v-slider__ticks:first-child{border-color:transparent}.v-slider__thumb-container{position:absolute;top:50%;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-slider__thumb-container:before{content:\"\";color:inherit;background:currentColor;height:32px;left:-16px;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:-16px;transform:scale(.2);width:32px;will-change:transform,opacity}.v-slider__thumb,.v-slider__thumb-container:before{border-radius:50%;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-slider__thumb{width:24px;height:24px;left:-12px;top:50%;background:transparent;transform:translateY(-50%) scale(.6);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider--is-active .v-slider__thumb-container--is-active .v-slider__thumb{transform:translateY(-50%) scale(1)}.v-slider--is-active .v-slider__thumb-container--is-active.v-slider__thumb-container--show-label .v-slider__thumb{transform:translateY(-50%) scale(0)}.v-slider--is-active .v-slider__ticks-container .v-slider__ticks{opacity:1}.v-slider__thumb-label__container{top:0}.v-slider__thumb-label,.v-slider__thumb-label__container{position:absolute;left:0;transition:.3s cubic-bezier(.25,.8,.25,1)}.v-slider__thumb-label{display:flex;align-items:center;justify-content:center;font-size:12px;color:#fff;width:32px;height:32px;border-radius:50% 50% 0;bottom:100%;transform:translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider__thumb-label>*{transform:rotate(-45deg)}.v-slider__track,.v-slider__track-fill{position:absolute}.theme--light.v-small-dialog a{color:rgba(0,0,0,.87)}.theme--dark.v-small-dialog a{color:#fff}.theme--light.v-small-dialog__content{background:#fff}.theme--dark.v-small-dialog__content{background:#424242}.theme--light.v-small-dialog__actions{background:#fff}.theme--dark.v-small-dialog__actions{background:#424242}.v-small-dialog{display:block;width:100%;height:100%}.v-small-dialog__content{padding:0 24px}.v-small-dialog__actions{text-align:right;white-space:pre}.v-small-dialog a{display:flex;align-items:center;height:100%;text-decoration:none}.v-small-dialog a>*{width:100%}.v-small-dialog .v-menu__activator{height:100%}.application--is-rtl .v-snack__content .v-btn{margin:0 24px 0 0}.v-snack{position:fixed;display:flex;align-items:center;color:#fff;pointer-events:none;z-index:1000;font-size:14px;left:0;right:0}.v-snack--absolute{position:absolute}.v-snack--top{top:0}.v-snack--bottom{bottom:0}.v-snack__wrapper{background-color:#323232;pointer-events:auto;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-snack__content,.v-snack__wrapper{display:flex;align-items:center;width:100%}.v-snack__content{height:48px;padding:14px 24px;justify-content:space-between;overflow:hidden}.v-snack__content .v-btn{color:#fff;flex:0 0 auto;padding:8px;margin:0 0 0 24px;height:auto;min-width:auto;width:auto}.v-snack__content .v-btn__content{margin:-2px}.v-snack__content .v-btn:before{display:none}.v-snack--multi-line .v-snack__content{height:80px;padding:24px}.v-snack--vertical .v-snack__content{height:112px;padding:24px 24px 14px;flex-direction:column;align-items:stretch}.v-snack--vertical .v-snack__content .v-btn.v-btn{justify-content:flex-end;padding:0;margin-left:0;margin-top:24px}.v-snack--vertical .v-snack__content .v-btn__content{flex:0 0 auto;margin:0}.v-snack--auto-height .v-snack__content{height:auto}@media only screen and (min-width:600px){.application--is-rtl .v-snack__content .v-btn:first-of-type{margin-left:0;margin-right:42px}}@media only screen and (min-width:600px){.v-snack__wrapper{width:auto;max-width:568px;min-width:288px;margin:0 auto;border-radius:2px}.v-snack--left .v-snack__wrapper{margin-left:0}.v-snack--right .v-snack__wrapper{margin-right:0}.v-snack--left,.v-snack--right{margin:0 24px}.v-snack--left.v-snack--top,.v-snack--right.v-snack--top{transform:translateY(24px)}.v-snack--left.v-snack--bottom,.v-snack--right.v-snack--bottom{transform:translateY(-24px)}.v-snack__content .v-btn:first-of-type{margin-left:42px}}.v-snack-transition-enter-active,.v-snack-transition-leave-active{transition:transform .4s cubic-bezier(.25,.8,.5,1)}.v-snack-transition-enter-active .v-snack__content,.v-snack-transition-leave-active .v-snack__content{transition:opacity .3s linear .1s}.v-snack-transition-enter .v-snack__content{opacity:0}.v-snack-transition-enter-to .v-snack__content,.v-snack-transition-leave .v-snack__content{opacity:1}.v-snack-transition-enter.v-snack.v-snack--top,.v-snack-transition-leave-to.v-snack.v-snack--top{transform:translateY(calc(-100% - 8px))}.v-snack-transition-enter.v-snack.v-snack--bottom,.v-snack-transition-leave-to.v-snack.v-snack--bottom{transform:translateY(100%)}.v-speed-dial{position:relative}.v-speed-dial--absolute{position:absolute}.v-speed-dial--fixed{position:fixed}.v-speed-dial--absolute,.v-speed-dial--fixed{z-index:4}.v-speed-dial--absolute>.v-btn--floating,.v-speed-dial--fixed>.v-btn--floating{margin:0}.v-speed-dial--top:not(.v-speed-dial--absolute){top:16px}.v-speed-dial--top.v-speed-dial--absolute{top:50%;transform:translateY(-50%)}.v-speed-dial--bottom:not(.v-speed-dial--absolute){bottom:16px}.v-speed-dial--bottom.v-speed-dial--absolute{bottom:50%;transform:translateY(50%)}.v-speed-dial--left{left:16px}.v-speed-dial--right{right:16px}.v-speed-dial--direction-left .v-speed-dial__list,.v-speed-dial--direction-right .v-speed-dial__list{height:100%;top:0}.v-speed-dial--direction-bottom .v-speed-dial__list,.v-speed-dial--direction-top .v-speed-dial__list{left:0;width:100%}.v-speed-dial--direction-top .v-speed-dial__list{flex-direction:column-reverse;bottom:100%}.v-speed-dial--direction-right .v-speed-dial__list{flex-direction:row;left:100%}.v-speed-dial--direction-bottom .v-speed-dial__list{flex-direction:column;top:100%}.v-speed-dial--direction-left .v-speed-dial__list{flex-direction:row-reverse;right:100%}.v-speed-dial__list{align-items:center;display:flex;justify-content:center;position:absolute}.theme--light.v-stepper{background:#fff}.theme--light.v-stepper .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__step__step{background:rgba(0,0,0,.38)}.theme--light.v-stepper .v-stepper__step__step,.theme--light.v-stepper .v-stepper__step__step .v-icon{color:#fff}.theme--light.v-stepper .v-stepper__header .v-divider{border-color:rgba(0,0,0,.12)}.theme--light.v-stepper .v-stepper__step--active .v-stepper__label{text-shadow:0 0 0 #000}.theme--light.v-stepper .v-stepper__step--editable:hover{background:rgba(0,0,0,.06)}.theme--light.v-stepper .v-stepper__step--editable:hover .v-stepper__label{text-shadow:0 0 0 #000}.theme--light.v-stepper .v-stepper__step--complete .v-stepper__label{color:rgba(0,0,0,.87)}.theme--light.v-stepper .v-stepper__step--inactive.v-stepper__step--editable:not(.v-stepper__step--error):hover .v-stepper__step__step{background:rgba(0,0,0,.54)}.theme--light.v-stepper .v-stepper__label{color:rgba(0,0,0,.38)}.theme--light.v-stepper--non-linear .v-stepper__step:not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__label,.theme--light.v-stepper .v-stepper__label small{color:rgba(0,0,0,.54)}.theme--light.v-stepper--vertical .v-stepper__content:not(:last-child){border-left:1px solid rgba(0,0,0,.12)}.theme--dark.v-stepper{background:#303030}.theme--dark.v-stepper .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__step__step{background:hsla(0,0%,100%,.5)}.theme--dark.v-stepper .v-stepper__step__step,.theme--dark.v-stepper .v-stepper__step__step .v-icon{color:#fff}.theme--dark.v-stepper .v-stepper__header .v-divider{border-color:hsla(0,0%,100%,.12)}.theme--dark.v-stepper .v-stepper__step--active .v-stepper__label{text-shadow:0 0 0 #fff}.theme--dark.v-stepper .v-stepper__step--editable:hover{background:hsla(0,0%,100%,.06)}.theme--dark.v-stepper .v-stepper__step--editable:hover .v-stepper__label{text-shadow:0 0 0 #fff}.theme--dark.v-stepper .v-stepper__step--complete .v-stepper__label{color:hsla(0,0%,100%,.87)}.theme--dark.v-stepper .v-stepper__step--inactive.v-stepper__step--editable:not(.v-stepper__step--error):hover .v-stepper__step__step{background:hsla(0,0%,100%,.75)}.theme--dark.v-stepper .v-stepper__label{color:hsla(0,0%,100%,.5)}.theme--dark.v-stepper--non-linear .v-stepper__step:not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__label,.theme--dark.v-stepper .v-stepper__label small{color:hsla(0,0%,100%,.7)}.theme--dark.v-stepper--vertical .v-stepper__content:not(:last-child){border-left:1px solid hsla(0,0%,100%,.12)}.application--is-rtl .v-stepper .v-stepper__step__step{margin-right:0;margin-left:12px}.v-stepper{overflow:hidden;position:relative}.v-stepper,.v-stepper__header{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-stepper__header{height:72px;align-items:stretch;display:flex;flex-wrap:wrap;justify-content:space-between}.v-stepper__header .v-divider{align-self:center;margin:0 -16px}.v-stepper__items{position:relative;overflow:hidden}.v-stepper__step__step{align-items:center;border-radius:50%;display:inline-flex;font-size:12px;justify-content:center;height:24px;margin-right:8px;min-width:24px;width:24px;transition:.3s cubic-bezier(.25,.8,.25,1)}.v-stepper__step__step .v-icon{font-size:18px}.v-stepper__step{align-items:center;display:flex;flex-direction:row;padding:24px;position:relative}.v-stepper__step--active .v-stepper__label{transition:.3s cubic-bezier(.4,0,.6,1)}.v-stepper__step--editable{cursor:pointer}.v-stepper__step.v-stepper__step--error .v-stepper__step__step{background:transparent;color:inherit}.v-stepper__step.v-stepper__step--error .v-stepper__step__step .v-icon{font-size:24px;color:inherit}.v-stepper__step.v-stepper__step--error .v-stepper__label{color:inherit;text-shadow:none;font-weight:500}.v-stepper__step.v-stepper__step--error .v-stepper__label small{color:inherit}.v-stepper__label{align-items:flex-start;display:flex;flex-direction:column;text-align:left}.v-stepper__label small{font-size:12px;font-weight:300;text-shadow:none}.v-stepper__wrapper{overflow:hidden;transition:none}.v-stepper__content{top:0;padding:24px 24px 16px;flex:1 0 auto;width:100%}.v-stepper__content>.v-btn{margin:24px 8px 8px 0}.v-stepper--is-booted .v-stepper__content,.v-stepper--is-booted .v-stepper__wrapper{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-stepper--vertical{padding-bottom:36px}.v-stepper--vertical .v-stepper__content{margin:-8px -36px -16px 36px;padding:16px 60px 16px 23px;width:auto}.v-stepper--vertical .v-stepper__step{padding:24px 24px 16px}.v-stepper--vertical .v-stepper__step__step{margin-right:12px}.v-stepper--alt-labels .v-stepper__header{height:auto}.v-stepper--alt-labels .v-stepper__header .v-divider{margin:35px -67px 0;align-self:flex-start}.v-stepper--alt-labels .v-stepper__step{flex-direction:column;justify-content:flex-start;align-items:center;flex-basis:175px}.v-stepper--alt-labels .v-stepper__step small{align-self:center}.v-stepper--alt-labels .v-stepper__step__step{margin-right:0;margin-bottom:11px}@media only screen and (max-width:959px){.v-stepper:not(.v-stepper--vertical) .v-stepper__label{display:none}.v-stepper:not(.v-stepper--vertical) .v-stepper__step__step{margin-right:0}}.theme--light.v-subheader{color:rgba(0,0,0,.54)}.theme--dark.v-subheader{color:hsla(0,0%,100%,.7)}.v-subheader{align-items:center;display:flex;height:48px;font-size:14px;font-weight:500;padding:0 16px}.v-subheader--inset{margin-left:56px}.theme--light.v-input--switch__thumb{color:#fafafa}.theme--light.v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled .v-input--switch__thumb{color:#bdbdbd!important}.theme--light.v-input--switch.v-input--is-disabled .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.application--is-rtl .v-input--switch .v-input--selection-controls__ripple{left:auto;right:-14px}.application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-16px)}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;height:14px;left:2px;opacity:.6;position:absolute;right:2px;top:calc(50% - 7px)}.v-input--switch__thumb{border-radius:50%;top:calc(50% - 10px);height:20px;position:relative;width:20px;display:flex;justify-content:center;align-items:center;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch .v-input--selection-controls__input{width:38px}.v-input--switch .v-input--selection-controls__ripple{left:-14px;top:calc(50% - 24px)}.v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(16px)}.theme--light.v-system-bar{background-color:#e0e0e0;color:rgba(0,0,0,.54)}.theme--light.v-system-bar .v-icon{color:rgba(0,0,0,.54)}.theme--light.v-system-bar--lights-out{background-color:hsla(0,0%,100%,.7)!important}.theme--dark.v-system-bar{background-color:#000;color:hsla(0,0%,100%,.7)}.theme--dark.v-system-bar .v-icon{color:hsla(0,0%,100%,.7)}.theme--dark.v-system-bar--lights-out{background-color:rgba(0,0,0,.2)!important}.v-system-bar{align-items:center;display:flex;font-size:14px;font-weight:500;padding:0 8px}.v-system-bar .v-icon{font-size:16px}.v-system-bar--absolute,.v-system-bar--fixed{left:0;top:0;width:100%;z-index:3}.v-system-bar--fixed{position:fixed}.v-system-bar--absolute{position:absolute}.v-system-bar--status .v-icon{margin-right:4px}.v-system-bar--window .v-icon{font-size:20px;margin-right:8px}.theme--light.v-table{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-table thead tr:first-child{border-bottom:1px solid rgba(0,0,0,.12)}.theme--light.v-table thead th{color:rgba(0,0,0,.54)}.theme--light.v-table tbody tr:not(:first-child){border-top:1px solid rgba(0,0,0,.12)}.theme--light.v-table tbody tr[active]{background:#f5f5f5}.theme--light.v-table tbody tr:hover:not(.v-datatable__expand-row){background:#eee}.theme--light.v-table tfoot tr{border-top:1px solid rgba(0,0,0,.12)}.theme--dark.v-table{background-color:#424242;color:#fff}.theme--dark.v-table thead tr:first-child{border-bottom:1px solid hsla(0,0%,100%,.12)}.theme--dark.v-table thead th{color:hsla(0,0%,100%,.7)}.theme--dark.v-table tbody tr:not(:first-child){border-top:1px solid hsla(0,0%,100%,.12)}.theme--dark.v-table tbody tr[active]{background:#505050}.theme--dark.v-table tbody tr:hover:not(.v-datatable__expand-row){background:#616161}.theme--dark.v-table tfoot tr{border-top:1px solid hsla(0,0%,100%,.12)}.v-table__overflow{width:100%;overflow-x:auto;overflow-y:hidden}table.v-table{border-radius:2px;border-collapse:collapse;border-spacing:0;width:100%;max-width:100%}table.v-table tbody td:first-child,table.v-table tbody td:not(:first-child),table.v-table tbody th:first-child,table.v-table tbody th:not(:first-child),table.v-table thead td:first-child,table.v-table thead td:not(:first-child),table.v-table thead th:first-child,table.v-table thead th:not(:first-child){padding:0 24px}table.v-table thead tr{height:56px}table.v-table thead th{font-weight:500;font-size:12px;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}table.v-table thead th.sortable{pointer-events:auto}table.v-table thead th>div{width:100%}table.v-table tbody tr{transition:background .3s cubic-bezier(.25,.8,.5,1);will-change:background}table.v-table tbody td,table.v-table tbody th{height:48px}table.v-table tbody td{font-weight:400;font-size:13px}table.v-table .input-group--selection-controls{padding:0}table.v-table .input-group--selection-controls .input-group__details{display:none}table.v-table .input-group--selection-controls.checkbox .v-icon{left:50%;transform:translateX(-50%)}table.v-table .input-group--selection-controls.checkbox .input-group--selection-controls__ripple{left:50%;transform:translate(-50%,-50%)}table.v-table tfoot tr{height:48px}table.v-table tfoot tr td{padding:0 24px}.theme--light.v-tabs__bar{background-color:#fff}.theme--light.v-tabs__bar .v-tabs__div{color:rgba(0,0,0,.87)}.theme--light.v-tabs__bar .v-tabs__item--disabled{color:rgba(0,0,0,.26)}.theme--dark.v-tabs__bar{background-color:#424242}.theme--dark.v-tabs__bar .v-tabs__div{color:#fff}.theme--dark.v-tabs__bar .v-tabs__item--disabled{color:hsla(0,0%,100%,.3)}.v-tabs,.v-tabs__bar{position:relative}.v-tabs__bar{border-radius:inherit}.v-tabs__icon{align-items:center;cursor:pointer;display:inline-flex;height:100%;position:absolute;top:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:32px}.v-tabs__icon--prev{left:4px}.v-tabs__icon--next{right:4px}.v-tabs__wrapper{overflow:hidden;contain:content;display:flex}.v-tabs__wrapper--show-arrows{margin-left:40px;margin-right:40px}.v-tabs__wrapper--show-arrows .v-tabs__container--align-with-title{padding-left:16px}@media only screen and (max-width:599px){.v-tabs__wrapper--show-arrows .v-tabs__container--align-with-title{padding-left:24px}}.v-tabs__container{flex:1 0 auto;display:flex;height:48px;list-style-type:none;transition:transform .6s cubic-bezier(.86,0,.07,1);white-space:nowrap;position:relative}.v-tabs__container--overflow .v-tabs__div{flex:1 0 auto}.v-tabs__container--grow .v-tabs__div{flex:1 0 auto;max-width:none}.v-tabs__container--icons-and-text{height:72px}.v-tabs__container--align-with-title{padding-left:56px}.v-tabs__container--fixed-tabs .v-tabs__div,.v-tabs__container--icons-and-text .v-tabs__div{min-width:72px}@media only screen and (min-width:600px){.v-tabs__container--fixed-tabs .v-tabs__div,.v-tabs__container--icons-and-text .v-tabs__div{min-width:160px}}@media only screen and (max-width:599px){.v-tabs__container--fixed-tabs .v-tabs__div{flex:1 0 auto}}.v-tabs__container--centered .v-tabs__slider-wrapper+.v-tabs__div,.v-tabs__container--centered>.v-tabs__div:first-child,.v-tabs__container--fixed-tabs .v-tabs__slider-wrapper+.v-tabs__div,.v-tabs__container--fixed-tabs>.v-tabs__div:first-child,.v-tabs__container--right .v-tabs__slider-wrapper+.v-tabs__div,.v-tabs__container--right>.v-tabs__div:first-child{margin-left:auto}.v-tabs__container--centered>.v-tabs__div:last-child,.v-tabs__container--fixed-tabs>.v-tabs__div:last-child{margin-right:auto}.v-tabs__container--icons-and-text .v-tabs__item{flex-direction:column-reverse}.v-tabs__container--icons-and-text .v-tabs__item .v-icon{margin-bottom:6px}.v-tabs__div{align-items:center;display:inline-flex;flex:0 1 auto;font-size:14px;font-weight:500;line-height:normal;height:inherit;max-width:264px;text-align:center;text-transform:uppercase;vertical-align:middle}.v-tabs__item{align-items:center;color:inherit;display:flex;flex:1 1 auto;height:100%;justify-content:center;max-width:inherit;padding:6px 12px;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:normal}.v-tabs__item:not(.v-tabs__item--active){opacity:.7}.v-tabs__item--disabled{pointer-events:none}.v-tabs__slider{height:2px;width:100%}.v-tabs__slider-wrapper{bottom:0;margin:0!important;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1)}.theme--light.v-text-field>.v-input__control>.v-input__slot:before{border-color:rgba(0,0,0,.42)}.theme--light.v-text-field:not(.v-input--has-state)>.v-input__control>.v-input__slot:hover:before{border-color:rgba(0,0,0,.87)}.theme--light.v-text-field.v-input--is-disabled>.v-input__control>.v-input__slot:before{-o-border-image:repeating-linear-gradient(90deg,rgba(0,0,0,.38) 0,rgba(0,0,0,.38) 2px,transparent 0,transparent 4px) 1 repeat;border-image:repeating-linear-gradient(90deg,rgba(0,0,0,.38) 0,rgba(0,0,0,.38) 2px,transparent 0,transparent 4px) 1 repeat}.theme--light.v-text-field.v-input--is-disabled>.v-input__control>.v-input__slot:before .v-text-field__prefix,.theme--light.v-text-field.v-input--is-disabled>.v-input__control>.v-input__slot:before .v-text-field__suffix{color:rgba(0,0,0,.38)}.theme--light.v-text-field__prefix,.theme--light.v-text-field__suffix{color:rgba(0,0,0,.54)}.theme--light.v-text-field--solo>.v-input__control>.v-input__slot{border-radius:2px;background:#fff}.theme--light.v-text-field--solo-inverted.v-text-field--solo>.v-input__control>.v-input__slot{background:rgba(0,0,0,.16)}.theme--light.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused>.v-input__control>.v-input__slot{background:#424242}.theme--light.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused>.v-input__control>.v-input__slot .v-label,.theme--light.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused>.v-input__control>.v-input__slot input{color:#fff}.theme--light.v-text-field--box>.v-input__control>.v-input__slot{background:rgba(0,0,0,.06)}.theme--light.v-text-field--box .v-text-field__prefix{max-height:32px;margin-top:22px}.theme--light.v-text-field--box.v-input--is-dirty .v-text-field__prefix,.theme--light.v-text-field--box.v-input--is-focused .v-text-field__prefix,.theme--light.v-text-field--box.v-text-field--placeholder .v-text-field__prefix{margin-top:22px;transition:.3s cubic-bezier(.25,.8,.5,1)}.theme--light.v-text-field--box:not(.v-input--is-focused)>.v-input__control>.v-input__slot:hover{background:rgba(0,0,0,.12)}.theme--light.v-text-field--outline>.v-input__control>.v-input__slot{border:2px solid rgba(0,0,0,.54)}.theme--light.v-text-field--outline:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot:hover{border:2px solid rgba(0,0,0,.87)}.theme--dark.v-text-field>.v-input__control>.v-input__slot:before{border-color:hsla(0,0%,100%,.7)}.theme--dark.v-text-field:not(.v-input--has-state)>.v-input__control>.v-input__slot:hover:before{border-color:#fff}.theme--dark.v-text-field.v-input--is-disabled>.v-input__control>.v-input__slot:before{-o-border-image:repeating-linear-gradient(90deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.5) 2px,transparent 0,transparent 4px) 1 repeat;border-image:repeating-linear-gradient(90deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.5) 2px,transparent 0,transparent 4px) 1 repeat}.theme--dark.v-text-field.v-input--is-disabled>.v-input__control>.v-input__slot:before .v-text-field__prefix,.theme--dark.v-text-field.v-input--is-disabled>.v-input__control>.v-input__slot:before .v-text-field__suffix{color:hsla(0,0%,100%,.5)}.theme--dark.v-text-field__prefix,.theme--dark.v-text-field__suffix{color:hsla(0,0%,100%,.7)}.theme--dark.v-text-field--solo>.v-input__control>.v-input__slot{border-radius:2px;background:#424242}.theme--dark.v-text-field--solo-inverted.v-text-field--solo>.v-input__control>.v-input__slot{background:hsla(0,0%,100%,.16)}.theme--dark.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused>.v-input__control>.v-input__slot{background:#fff}.theme--dark.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused>.v-input__control>.v-input__slot .v-label,.theme--dark.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused>.v-input__control>.v-input__slot input{color:rgba(0,0,0,.87)}.theme--dark.v-text-field--box>.v-input__control>.v-input__slot{background:rgba(0,0,0,.1)}.theme--dark.v-text-field--box .v-text-field__prefix{max-height:32px;margin-top:22px}.theme--dark.v-text-field--box.v-input--is-dirty .v-text-field__prefix,.theme--dark.v-text-field--box.v-input--is-focused .v-text-field__prefix,.theme--dark.v-text-field--box.v-text-field--placeholder .v-text-field__prefix{margin-top:22px;transition:.3s cubic-bezier(.25,.8,.5,1)}.theme--dark.v-text-field--box:not(.v-input--is-focused)>.v-input__control>.v-input__slot:hover{background:rgba(0,0,0,.2)}.theme--dark.v-text-field--outline>.v-input__control>.v-input__slot{border:2px solid hsla(0,0%,100%,.7)}.theme--dark.v-text-field--outline:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot:hover{border:2px solid #fff}.application--is-rtl .v-text-field .v-label{transform-origin:top right}.application--is-rtl .v-text-field .v-counter{margin-left:0;margin-right:8px}.application--is-rtl .v-text-field--enclosed .v-input__append-outer{margin-left:0;margin-right:16px}.application--is-rtl .v-text-field--enclosed .v-input__prepend-outer{margin-left:16px;margin-right:0}.application--is-rtl .v-text-field--reverse input{text-align:left}.application--is-rtl .v-text-field--reverse .v-label{transform-origin:top left}.application--is-rtl .v-text-field__prefix{text-align:left;padding-right:0;padding-left:4px}.application--is-rtl .v-text-field__suffix{padding-left:0;padding-right:4px}.application--is-rtl .v-text-field--reverse .v-text-field__prefix{text-align:right;padding-left:0;padding-right:4px}.application--is-rtl .v-text-field--reverse .v-text-field__suffix{padding-left:0;padding-right:4px}.v-text-field{padding-top:12px;margin-top:4px}.v-text-field input{flex:1 1 auto;line-height:20px;padding:8px 0;max-width:100%;min-width:0;width:100%}.v-text-field .v-input__append-inner,.v-text-field .v-input__prepend-inner{align-self:flex-start;display:inline-flex;margin-top:4px;line-height:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-text-field .v-input__prepend-inner{margin-right:auto;padding-right:4px}.v-text-field .v-input__append-inner{margin-left:auto;padding-left:4px}.v-text-field .v-counter{margin-left:8px;white-space:nowrap}.v-text-field .v-label{max-width:90%;overflow:hidden;text-overflow:ellipsis;top:6px;transform-origin:top left;white-space:nowrap;pointer-events:none}.v-text-field .v-label--active{max-width:133%;transform:translateY(-18px) scale(.75)}.v-text-field>.v-input__control>.v-input__slot{cursor:text;transition:background .3s cubic-bezier(.25,.8,.5,1)}.v-text-field>.v-input__control>.v-input__slot:after,.v-text-field>.v-input__control>.v-input__slot:before{bottom:-1px;content:\"\";left:0;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-text-field>.v-input__control>.v-input__slot:before{border-style:solid;border-width:thin 0 0}.v-text-field>.v-input__control>.v-input__slot:after{border-color:currentcolor;border-style:solid;border-width:thin 0;transform:scaleX(0)}.v-text-field__details{display:flex;flex:1 0 auto;max-width:100%;overflow:hidden}.v-text-field__prefix,.v-text-field__suffix{align-self:center;cursor:default}.v-text-field__prefix{text-align:right;padding-right:4px}.v-text-field__suffix{padding-left:4px;white-space:nowrap}.v-text-field--reverse .v-text-field__prefix{text-align:left;padding-right:0;padding-left:4px}.v-text-field--reverse .v-text-field__suffix{padding-left:0;padding-right:4px}.v-text-field>.v-input__control>.v-input__slot>.v-text-field__slot{display:flex;flex:1 1 auto;position:relative}.v-text-field--box,.v-text-field--full-width,.v-text-field--outline{position:relative}.v-text-field--box>.v-input__control>.v-input__slot,.v-text-field--full-width>.v-input__control>.v-input__slot,.v-text-field--outline>.v-input__control>.v-input__slot{align-items:stretch;min-height:56px}.v-text-field--box input,.v-text-field--full-width input,.v-text-field--outline input{margin-top:22px}.v-text-field--box.v-text-field--single-line input,.v-text-field--full-width.v-text-field--single-line input,.v-text-field--outline.v-text-field--single-line input{margin-top:12px}.v-text-field--box .v-label,.v-text-field--full-width .v-label,.v-text-field--outline .v-label{top:18px}.v-text-field--box .v-label--active,.v-text-field--full-width .v-label--active,.v-text-field--outline .v-label--active{transform:translateY(-6px) scale(.75)}.v-text-field--box>.v-input__control>.v-input__slot{border-top-left-radius:4px;border-top-right-radius:4px}.v-text-field--box>.v-input__control>.v-input__slot:before{border-style:solid;border-width:thin 0}.v-text-field.v-text-field--enclosed{margin:0;padding:0}.v-text-field.v-text-field--enclosed:not(.v-text-field--box) .v-progress-linear__background{display:none}.v-text-field.v-text-field--enclosed .v-input__append-inner,.v-text-field.v-text-field--enclosed .v-input__append-outer,.v-text-field.v-text-field--enclosed .v-input__prepend-inner,.v-text-field.v-text-field--enclosed .v-input__prepend-outer{margin-top:16px}.v-text-field.v-text-field--enclosed .v-text-field__details,.v-text-field.v-text-field--enclosed>.v-input__control>.v-input__slot{padding:0 12px}.v-text-field.v-text-field--enclosed .v-text-field__details{margin-bottom:8px}.v-text-field--reverse input{text-align:right}.v-text-field--reverse .v-label{transform-origin:top right}.v-text-field--reverse .v-text-field__slot,.v-text-field--reverse>.v-input__control>.v-input__slot{flex-direction:row-reverse}.v-text-field--full-width>.v-input__control>.v-input__slot:after,.v-text-field--full-width>.v-input__control>.v-input__slot:before,.v-text-field--outline>.v-input__control>.v-input__slot:after,.v-text-field--outline>.v-input__control>.v-input__slot:before,.v-text-field--solo>.v-input__control>.v-input__slot:after,.v-text-field--solo>.v-input__control>.v-input__slot:before{display:none}.v-text-field--outline{margin-bottom:16px;transition:border .3s cubic-bezier(.25,.8,.5,1)}.v-text-field--outline>.v-input__control>.v-input__slot{background:transparent!important;border-radius:4px}.v-text-field--outline .v-text-field__prefix{margin-top:22px;max-height:32px}.v-text-field--outline .v-input__append-outer,.v-text-field--outline .v-input__prepend-outer{margin-top:18px}.v-text-field--outline.v-input--is-dirty .v-text-field__prefix,.v-text-field--outline.v-input--is-focused .v-text-field__prefix,.v-text-field--outline.v-text-field--placeholder .v-text-field__prefix{margin-top:22px;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-text-field--outline.v-input--has-state>.v-input__control>.v-input__slot,.v-text-field--outline.v-input--is-focused>.v-input__control>.v-input__slot{border:2px solid;transition:border .3s cubic-bezier(.25,.8,.5,1)}.v-text-field.v-text-field--solo .v-label{top:calc(50% - 10px)}.v-text-field.v-text-field--solo .v-input__control{min-height:48px;padding:0}.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)>.v-input__control>.v-input__slot{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-text-field.v-text-field--solo .v-text-field__slot{align-items:center}.v-text-field.v-text-field--solo .v-input__append-inner,.v-text-field.v-text-field--solo .v-input__prepend-inner{align-self:center;margin-top:0}.v-text-field.v-text-field--solo .v-input__append-outer,.v-text-field.v-text-field--solo .v-input__prepend-outer{margin-top:12px}.v-text-field.v-input--is-focused>.v-input__control>.v-input__slot:after{transform:scaleX(1)}.v-text-field.v-input--has-state>.v-input__control>.v-input__slot:before{border-color:currentColor}.theme--light.v-textarea.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused textarea{color:#fff}.theme--dark.v-textarea.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:0;margin-left:-12px}.application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:0;padding-left:12px}.v-textarea textarea{flex:1 1 auto;line-height:18px;max-width:100%;min-height:32px;outline:none;padding:7px 0 8px;width:100%}.v-textarea .v-text-field__prefix{padding-top:4px;align-self:start}.v-textarea.v-text-field--full-width.v-text-field--single-line .v-text-field__slot textarea,.v-textarea.v-text-field--full-width .v-text-field__slot textarea{margin-top:0}.v-textarea.v-text-field--full-width.v-text-field--single-line .v-text-field__details,.v-textarea.v-text-field--full-width .v-text-field__details{bottom:4px}.v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--single-line .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line textarea{margin-top:12px}.v-textarea.v-text-field--box.v-text-field--single-line .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--single-line.v-text-field--outline .v-input__control,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-text-field--outline .v-input__control{padding-top:0}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:16px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.theme--light.v-time-picker-clock{background:#e0e0e0}.theme--light.v-time-picker-clock .v-time-picker-clock__item--disabled{color:rgba(0,0,0,.26)}.theme--light.v-time-picker-clock .v-time-picker-clock__item--disabled.v-time-picker-clock__item--active{color:hsla(0,0%,100%,.3)}.theme--light.v-time-picker-clock--indeterminate .v-time-picker-clock__hand{background-color:#bdbdbd}.theme--light.v-time-picker-clock--indeterminate .v-time-picker-clock__hand:after{color:#bdbdbd}.theme--light.v-time-picker-clock--indeterminate .v-time-picker-clock__item--active{background-color:#bdbdbd}.theme--dark.v-time-picker-clock{background:#616161}.theme--dark.v-time-picker-clock .v-time-picker-clock__item--disabled,.theme--dark.v-time-picker-clock .v-time-picker-clock__item--disabled.v-time-picker-clock__item--active{color:hsla(0,0%,100%,.3)}.theme--dark.v-time-picker-clock--indeterminate .v-time-picker-clock__hand{background-color:#757575}.theme--dark.v-time-picker-clock--indeterminate .v-time-picker-clock__hand:after{color:#757575}.theme--dark.v-time-picker-clock--indeterminate .v-time-picker-clock__item--active{background-color:#757575}.v-time-picker-clock{border-radius:100%;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%;padding-top:100%}.v-time-picker-clock__container{display:flex;align-items:center;justify-content:center;padding:10px}.v-time-picker-clock__hand{height:calc(50% - 4px);width:2px;bottom:50%;left:calc(50% - 1px);transform-origin:center bottom;position:absolute;will-change:transform;z-index:1}.v-time-picker-clock__hand:before{background:transparent;border:2px solid;border-color:inherit;border-radius:100%;width:10px;height:10px;top:-4px}.v-time-picker-clock__hand:after,.v-time-picker-clock__hand:before{content:\"\";position:absolute;left:50%;transform:translate(-50%,-50%)}.v-time-picker-clock__hand:after{height:8px;width:8px;top:100%;border-radius:100%;border-style:solid;border-color:inherit;background-color:inherit}.v-time-picker-clock__hand--inner:after{height:14px}.v-picker--full-width .v-time-picker-clock__container{max-width:290px}.v-time-picker-clock__inner{position:absolute;bottom:27px;left:27px;right:27px;top:27px}.v-time-picker-clock__item{align-items:center;border-radius:100%;cursor:default;display:flex;font-size:16px;justify-content:center;height:40px;position:absolute;text-align:center;width:40px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transform:translate(-50%,-50%)}.v-time-picker-clock__item>span{z-index:1}.v-time-picker-clock__item:after,.v-time-picker-clock__item:before{content:\"\";border-radius:100%;position:absolute;top:50%;left:50%;height:14px;width:14px;transform:translate(-50%,-50%);height:40px;width:40px}.v-time-picker-clock__item--active{color:#fff;cursor:default;z-index:2}.v-time-picker-clock__item--disabled{pointer-events:none}.v-time-picker-title{color:#fff;display:flex;line-height:1;justify-content:flex-end}.v-time-picker-title__time{white-space:nowrap}.v-time-picker-title__time .v-picker__title__btn,.v-time-picker-title__time span{align-items:center;display:inline-flex;height:70px;font-size:70px;justify-content:center}.v-time-picker-title__ampm{align-self:flex-end;display:flex;flex-direction:column;font-size:16px;margin:8px 0 6px 8px;text-transform:uppercase}.v-time-picker-title__ampm div:only-child{flex-direction:row}.v-picker__title--landscape .v-time-picker-title{flex-direction:column;justify-content:center;height:100%}.v-picker__title--landscape .v-time-picker-title__time{text-align:right}.v-picker__title--landscape .v-time-picker-title__time .v-picker__title__btn,.v-picker__title--landscape .v-time-picker-title__time span{height:55px;font-size:55px}.v-picker__title--landscape .v-time-picker-title__ampm{margin:16px 0 0;align-self:auto;text-align:center}.theme--light.v-timeline:before{background:rgba(0,0,0,.12)}.theme--light.v-timeline .v-timeline-item__dot{background:#fff}.theme--light.v-timeline .v-timeline-item .v-card:before{border-right-color:rgba(0,0,0,.12)}.theme--dark.v-timeline:before{background:hsla(0,0%,100%,.12)}.theme--dark.v-timeline .v-timeline-item__dot{background:#424242}.theme--dark.v-timeline .v-timeline-item .v-card:before{border-right-color:rgba(0,0,0,.12)}.v-timeline-item{display:flex;flex-direction:row-reverse;padding-bottom:24px}.v-timeline-item--left,.v-timeline-item:nth-child(odd):not(.v-timeline-item--right){flex-direction:row}.v-timeline-item--left .v-card:after,.v-timeline-item--left .v-card:before,.v-timeline-item:nth-child(odd):not(.v-timeline-item--right) .v-card:after,.v-timeline-item:nth-child(odd):not(.v-timeline-item--right) .v-card:before{transform:rotate(180deg);left:100%}.v-timeline-item--left .v-timeline-item__opposite,.v-timeline-item:nth-child(odd):not(.v-timeline-item--right) .v-timeline-item__opposite{margin-left:96px;text-align:left}.v-timeline-item--left .v-timeline-item__opposite .v-card:after,.v-timeline-item--left .v-timeline-item__opposite .v-card:before,.v-timeline-item:nth-child(odd):not(.v-timeline-item--right) .v-timeline-item__opposite .v-card:after,.v-timeline-item:nth-child(odd):not(.v-timeline-item--right) .v-timeline-item__opposite .v-card:before{transform:rotate(0);left:-10px}.v-timeline-item--right .v-card:after,.v-timeline-item--right .v-card:before,.v-timeline-item:nth-child(2n):not(.v-timeline-item--left) .v-card:after,.v-timeline-item:nth-child(2n):not(.v-timeline-item--left) .v-card:before{right:100%}.v-timeline-item--right .v-timeline-item__opposite,.v-timeline-item:nth-child(2n):not(.v-timeline-item--left) .v-timeline-item__opposite{margin-right:96px;text-align:right}.v-timeline-item--right .v-timeline-item__opposite .v-card:after,.v-timeline-item--right .v-timeline-item__opposite .v-card:before,.v-timeline-item:nth-child(2n):not(.v-timeline-item--left) .v-timeline-item__opposite .v-card:after,.v-timeline-item:nth-child(2n):not(.v-timeline-item--left) .v-timeline-item__opposite .v-card:before{transform:rotate(180deg);right:-10px}.v-timeline-item__dot,.v-timeline-item__inner-dot{border-radius:50%}.v-timeline-item__dot{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);align-self:center;position:absolute;height:38px;left:calc(50% - 19px);width:38px}.v-timeline-item__dot .v-timeline-item__inner-dot{height:30px;margin:4px;width:30px}.v-timeline-item__dot--small{height:24px;left:calc(50% - 12px);width:24px}.v-timeline-item__dot--small .v-timeline-item__inner-dot{height:18px;margin:3px;width:18px}.v-timeline-item__dot--large{height:52px;left:calc(50% - 26px);width:52px}.v-timeline-item__dot--large .v-timeline-item__inner-dot{height:42px;margin:5px;width:42px}.v-timeline-item__inner-dot{display:flex;justify-content:center;align-items:center}.v-timeline-item__body{position:relative;height:100%;flex:1 1 100%;max-width:calc(50% - 48px)}.v-timeline-item .v-card:after,.v-timeline-item .v-card:before{content:\"\";position:absolute;border-top:10px solid transparent;border-bottom:10px solid transparent;border-right:10px solid #000;top:calc(50% - 10px)}.v-timeline-item .v-card:after{border-right-color:inherit}.v-timeline-item .v-card:before{top:calc(50% - 8px)}.v-timeline-item__opposite{flex:1 1 auto;align-self:center;max-width:calc(50% - 48px)}.v-timeline-item--fill-dot .v-timeline-item__inner-dot{height:inherit;margin:0;width:inherit}.v-timeline{padding-top:24px;position:relative}.v-timeline:before{bottom:0;content:\"\";height:100%;left:calc(50% - 1px);position:absolute;top:0;width:2px}.v-timeline--align-top .v-timeline-item{position:relative}.v-timeline--align-top .v-timeline-item__dot{top:6px}.v-timeline--align-top .v-timeline-item__dot--small{top:12px}.v-timeline--align-top .v-timeline-item__dot--large{top:0}.v-timeline--align-top .v-timeline-item .v-card:before{top:12px}.v-timeline--align-top .v-timeline-item .v-card:after{top:10px}.v-timeline--dense:before{left:18px}.v-timeline--dense .v-timeline-item--left,.v-timeline--dense .v-timeline-item:nth-child(odd):not(.v-timeline-item--right){flex-direction:row-reverse}.v-timeline--dense .v-timeline-item--left .v-card:after,.v-timeline--dense .v-timeline-item--left .v-card:before,.v-timeline--dense .v-timeline-item:nth-child(odd):not(.v-timeline-item--right) .v-card:after,.v-timeline--dense .v-timeline-item:nth-child(odd):not(.v-timeline-item--right) .v-card:before{right:auto;left:-10px;transform:none}.v-timeline--dense .v-timeline-item__dot{left:0}.v-timeline--dense .v-timeline-item__dot--small{left:7px}.v-timeline--dense .v-timeline-item__dot--large{left:-7px}.v-timeline--dense .v-timeline-item__body{max-width:calc(100% - 64px)}.v-timeline--dense .v-timeline-item__opposite{display:none}.theme--light.v-toolbar{background-color:#f5f5f5;color:rgba(0,0,0,.87)}.theme--dark.v-toolbar{background-color:#212121;color:#fff}.application--is-rtl .v-toolbar__title:not(:first-child){margin-left:0;margin-right:20px}.v-toolbar{transition:none;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);position:relative;width:100%;will-change:padding-left,padding-right}.v-toolbar[data-booted=true]{transition:.2s cubic-bezier(.4,0,.2,1)}.v-toolbar .v-text-field--box,.v-toolbar .v-text-field--enclosed{margin:0}.v-toolbar .v-text-field--box .v-text-field__details,.v-toolbar .v-text-field--enclosed .v-text-field__details{display:none}.v-toolbar .v-tabs{width:100%}.v-toolbar__title{font-size:20px;font-weight:500;letter-spacing:.02em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.v-toolbar__title:not(:first-child){margin-left:20px}.v-toolbar__content,.v-toolbar__extension{align-items:center;display:flex;padding:0 24px}@media only screen and (max-width:959px){.v-toolbar__content,.v-toolbar__extension{padding:0 16px}}.v-toolbar__content .v-btn--icon,.v-toolbar__extension .v-btn--icon{margin:6px}.v-toolbar__content>:first-child,.v-toolbar__extension>:first-child{margin-left:0}.v-toolbar__content>:first-child.v-btn--icon,.v-toolbar__extension>:first-child.v-btn--icon{margin-left:-6px}.v-toolbar__content>:first-child.v-menu .v-menu__activator .v-btn,.v-toolbar__content>:first-child.v-tooltip span .v-btn,.v-toolbar__extension>:first-child.v-menu .v-menu__activator .v-btn,.v-toolbar__extension>:first-child.v-tooltip span .v-btn{margin-left:0}.v-toolbar__content>:first-child.v-menu .v-menu__activator .v-btn--icon,.v-toolbar__content>:first-child.v-tooltip span .v-btn--icon,.v-toolbar__extension>:first-child.v-menu .v-menu__activator .v-btn--icon,.v-toolbar__extension>:first-child.v-tooltip span .v-btn--icon{margin-left:-6px}.v-toolbar__content>:last-child,.v-toolbar__extension>:last-child{margin-right:0}.v-toolbar__content>:last-child.v-btn--icon,.v-toolbar__extension>:last-child.v-btn--icon{margin-right:-6px}.v-toolbar__content>:last-child.v-menu .v-menu__activator .v-btn,.v-toolbar__content>:last-child.v-tooltip span .v-btn,.v-toolbar__extension>:last-child.v-menu .v-menu__activator .v-btn,.v-toolbar__extension>:last-child.v-tooltip span .v-btn{margin-right:0}.v-toolbar__content>:last-child.v-menu .v-menu__activator .v-btn--icon,.v-toolbar__content>:last-child.v-tooltip span .v-btn--icon,.v-toolbar__extension>:last-child.v-menu .v-menu__activator .v-btn--icon,.v-toolbar__extension>:last-child.v-tooltip span .v-btn--icon{margin-right:-6px}.v-toolbar__content>.v-list,.v-toolbar__extension>.v-list{flex:1 1 auto;max-height:100%}.v-toolbar__content>.v-list:first-child,.v-toolbar__extension>.v-list:first-child{margin-left:-24px}@media only screen and (max-width:959px){.v-toolbar__content>.v-list:first-child,.v-toolbar__extension>.v-list:first-child{margin-left:-16px}}.v-toolbar__content>.v-list:last-child,.v-toolbar__extension>.v-list:last-child{margin-right:-24px}@media only screen and (max-width:959px){.v-toolbar__content>.v-list:last-child,.v-toolbar__extension>.v-list:last-child{margin-right:-16px}}.v-toolbar__extension>.v-toolbar__title{margin-left:72px}.v-toolbar__items{display:flex;height:inherit;max-width:100%;padding:0}.v-toolbar__items .v-btn{align-items:center;align-self:center}.v-toolbar__items .v-tooltip,.v-toolbar__items .v-tooltip>span{height:inherit}.v-toolbar__items .v-btn:not(.v-btn--floating):not(.v-btn--icon),.v-toolbar__items .v-menu,.v-toolbar__items .v-menu__activator{height:inherit;margin:0}.v-toolbar .v-btn-toggle,.v-toolbar .v-overflow-btn{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-toolbar .v-input{margin:0}.v-toolbar .v-overflow-btn .v-input__control:before,.v-toolbar .v-overflow-btn .v-input__slot:before{display:none}.v-toolbar--card{border-radius:2px 2px 0 0;box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-toolbar--fixed{position:fixed;z-index:2}.v-toolbar--absolute,.v-toolbar--fixed{top:0;left:0}.v-toolbar--absolute{position:absolute;z-index:2}.v-toolbar--floating{display:inline-flex;margin:16px;width:auto}.v-toolbar--clipped{z-index:3}.v-tooltip__content{background:#616161;border-radius:2px;color:#fff;font-size:12px;display:inline-block;padding:5px 8px;position:absolute;text-transform:none;width:auto;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-tooltip__content[class*=-active]{transition:.15s cubic-bezier(.25,.8,.5,1);pointer-events:none}.v-tooltip__content--fixed{position:fixed}@media only screen and (max-width:959px){.v-tooltip .v-tooltip__content{padding:10px 16px}}.theme--light.v-treeview{color:rgba(0,0,0,.87)}.theme--light.v-treeview--hoverable .v-treeview-node__root:hover,.theme--light.v-treeview .v-treeview-node--active{background:rgba(0,0,0,.12)}.theme--dark.v-treeview{color:#fff}.theme--dark.v-treeview--hoverable .v-treeview-node__root:hover,.theme--dark.v-treeview .v-treeview-node--active{background:hsla(0,0%,100%,.12)}.application--is-rtl .v-treeview>.v-treeview-node{margin-right:0}.application--is-rtl .v-treeview>.v-treeview-node--leaf{margin-right:24px;margin-left:0}.application--is-rtl .v-treeview-node{margin-right:26px;margin-left:0}.application--is-rtl .v-treeview-node--leaf{margin-right:50px;margin-left:0}.application--is-rtl .v-treeview-node__toggle{transform:rotate(90deg)}.application--is-rtl .v-treeview-node__toggle--open{transform:none}.v-treeview>.v-treeview-node{margin-left:0}.v-treeview>.v-treeview-node--leaf{margin-left:24px}.v-treeview-node{margin-left:26px}.v-treeview-node--excluded{display:none}.v-treeview-node--click>.v-treeview-node__root,.v-treeview-node--click>.v-treeview-node__root>.v-treeview-node__content>*{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-treeview-node--leaf{margin-left:50px}.v-treeview-node__root{display:flex;align-items:center;min-height:34px}.v-treeview-node__content{display:flex;flex-grow:1;flex-shrink:0;align-items:center}.v-treeview-node__content .v-btn{flex-grow:0!important;flex-shrink:1!important}.v-treeview-node__label{font-size:1.2rem;margin-left:6px;flex-grow:1;flex-shrink:0}.v-treeview-node__label .v-icon{padding-right:8px}.v-treeview-node__checkbox,.v-treeview-node__toggle{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-treeview-node__toggle{transform:rotate(-90deg)}.v-treeview-node__toggle--open{transform:none}.v-treeview-node__toggle--loading{-webkit-animation:progress-circular-rotate 1s linear infinite;animation:progress-circular-rotate 1s linear infinite}.v-treeview-node__children{transition:all .2s cubic-bezier(0,0,.2,1)}.v-window__container{position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window__container--is-active{overflow:hidden}.v-window-x-reverse-transition-enter-active,.v-window-x-reverse-transition-leave-active,.v-window-x-transition-enter-active,.v-window-x-transition-leave-active,.v-window-y-reverse-transition-enter-active,.v-window-y-reverse-transition-leave-active,.v-window-y-transition-enter-active,.v-window-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window-x-reverse-transition-leave,.v-window-x-reverse-transition-leave-to,.v-window-x-transition-leave,.v-window-x-transition-leave-to,.v-window-y-reverse-transition-leave,.v-window-y-reverse-transition-leave-to,.v-window-y-transition-leave,.v-window-y-transition-leave-to{position:absolute!important;top:0;width:100%}.v-window-x-transition-enter{transform:translateX(100%)}.v-window-x-reverse-transition-enter,.v-window-x-transition-leave-to{transform:translateX(-100%)}.v-window-x-reverse-transition-leave-to{transform:translateX(100%)}.v-window-y-transition-enter{transform:translateY(100%)}.v-window-y-reverse-transition-enter,.v-window-y-transition-leave-to{transform:translateY(-100%)}.v-window-y-reverse-transition-leave-to{transform:translateY(100%)}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-menu.4b19274.png";

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoMenu_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoMenu_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoMenu_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoMenu_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoMenu_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".KerkiniLogo{max-width:500px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
const state = () => ({
  // Server - Back End Base Url
  baseUrl: '',
  prwtokolaUrl: 'v1/prwtokola',
  deigmataUrl: 'v1/deigmata',
  picturesUrl: 'v1/pictures',
  filesUrl: 'v1/files',
  deigmaThhlastikwnUrl: 'v1/deigmaThhlastikwn',
  thhlastikaCtEidosUrl: 'v1/ctThhlastikaEidh',
  thhlastikaCtPressThreatsUrl: 'v1/ctThhlastikaPressThreats',
  thhlastikaXEidhUrl: 'v1/deigmaThhlastikwnXEidh',
  thhlastikaXPressThreatsUrl: 'v1/deigmaThhlastikwnXPressThreats',
  ornithopanidaCtPressThreatsUrl: 'v1/ctornithopanidaPressuresAndThreats',
  ornithopanidaCtEidosUrl: 'v1/ctornithopanidaEidi',
  deigmaOrnithopanidaUrl: 'v1/deigmaOrnithopanida',
  ornithopanidaXPressThreatsUrl: 'v1/deigmaOrnithopanidaXPresAndThreats',
  ornithopanidaXEidhUrl: 'v1/deigmaOrnithopanidaXSpecies/'
});
const getters = {
  // Prwtokola
  getPrwtokolaAddUrl: state => {
    return state.baseUrl + state.prwtokolaUrl;
  },
  getPrwtokolaAddFromExcelUrl: state => {
    return state.baseUrl + state.prwtokolaUrl + '/addPrwtokolaFromExcel';
  },
  getPrwtokolaSearchUrl: state => {
    return state.baseUrl + state.prwtokolaUrl + '/getAllByPaging';
  },
  getPrwtokolaByIdUrl: state => {
    return state.baseUrl + state.prwtokolaUrl + '/';
  },
  getPrwtokolaDistinctUrl: state => {
    return state.baseUrl + state.prwtokolaUrl + '/getDistinctIds';
  },
  // Deigmata
  getDeigmataSearchUrl: state => {
    return state.baseUrl + state.deigmataUrl + '/getAllByPaging';
  },
  getDeigmataByIdUrl: state => {
    return state.baseUrl + state.deigmataUrl + '/';
  },
  getDeigmataDynamicSearchUrl: state => {
    return state.baseUrl + state.deigmataUrl + '/search';
  },
  getDeigmataDynamicDownloadUrl: state => {
    return state.baseUrl + state.deigmataUrl + '/downloadExcel';
  },
  getDeigmataAutocompletes: state => {
    return state.baseUrl + state.deigmataUrl + '/getAutocompletes';
  },
  // Deigma Thhlastikwn
  getDeigmaThhlastikwnAddUrl: state => {
    return state.baseUrl + state.deigmaThhlastikwnUrl;
  },
  getDeigmaThhlastikwnAddFromExcelUrl: state => {
    return state.baseUrl + state.deigmaThhlastikwnUrl + '/addDeigmaThhlastikwnFromExcel';
  },
  getDeigmaThhlastikwnSearchUrl: state => {
    return state.baseUrl + state.deigmaThhlastikwnUrl + '/getAllByPaging';
  },
  getDeigmaThhlastikwnByIdUrl: state => {
    return state.baseUrl + state.deigmaThhlastikwnUrl + '/';
  },
  getDeigmaThhlastikwnAutocompletesUrl: state => {
    return state.baseUrl + state.deigmaThhlastikwnUrl + '/getAutocompletes';
  },
  getDeigmaThhlastikwnMapMarkersUrl: state => {
    return state.baseUrl + state.deigmaThhlastikwnUrl + '/getAllGeoLocations';
  },
  getDeigmaThhlastikwnDynamicSearchUrl: state => {
    return state.baseUrl + state.deigmaThhlastikwnUrl + '/search';
  },
  getDeigmaThhlastikwnDynamicDownloadUrl: state => {
    return state.baseUrl + state.deigmaThhlastikwnUrl + '/downloadExcel';
  },
  getDeigmaThhlastikwnAutocompletes: state => {
    return state.baseUrl + state.deigmaThhlastikwnUrl + '/getAutocompletes';
  },
  // Pictures
  getPictureByIdUrl: state => {
    return state.baseUrl + state.picturesUrl + '/';
  },
  getPicturesByDeigmaThhlastikwnIdIs: state => {
    return state.baseUrl + state.picturesUrl + '/getPicturesByDeigmaThhlastikwnIs/';
  },
  getPicturesSearchUrl: state => {
    return state.baseUrl + state.picturesUrl + '/getAllByPaging/';
  },
  // Files
  getFileByIdUrl: state => {
    return state.baseUrl + state.filesUrl + '/';
  },
  getFilesByDeigmaThhlastikwnIdIs: state => {
    return state.baseUrl + state.filesUrl + '/getFilesByDeigmaThhlastikwnIs/';
  },
  getFilesSearchUrl: state => {
    return state.baseUrl + state.filesUrl + '/getAllByPaging/';
  },
  // Ct Eidh
  getThhlastikaCtEidosAddUrl: state => {
    return state.baseUrl + state.thhlastikaCtEidosUrl;
  },
  getThhlastikaCtEidosAddFromExcelUrl: state => {
    return state.baseUrl + state.thhlastikaCtEidosUrl + '/addEidhFromExcel';
  },
  getThhlastikaCtEidosSearchUrl: state => {
    return state.baseUrl + state.thhlastikaCtEidosUrl + '/getAllByPaging';
  },
  getThhlastikaCtEidosByIdUrl: state => {
    return state.baseUrl + state.thhlastikaCtEidosUrl + '/';
  },
  getThhlastikaCtEidosDistinctUrl: state => {
    return state.baseUrl + state.thhlastikaCtEidosUrl + '/getAllEidh';
  },
  getCtEidhDynamicSearchUrl: state => {
    return state.baseUrl + state.thhlastikaCtEidosUrl + '/search';
  },
  getCtEidhDynamicDownloadUrl: state => {
    return state.baseUrl + state.thhlastikaCtEidosUrl + '/downloadExcel';
  },
  // Ct PressThreats
  getThhlastikaCtPressThreatsAddUrl: state => {
    return state.baseUrl + state.thhlastikaCtPressThreatsUrl;
  },
  getThhlastikaCtPressThreatsAddFromExcelUrl: state => {
    return state.baseUrl + state.thhlastikaCtPressThreatsUrl + '/addPressThreatsFromExcel';
  },
  getThhlastikaCtPressThreatsSearchUrl: state => {
    return state.baseUrl + state.thhlastikaCtPressThreatsUrl + '/getAllByPaging';
  },
  getThhlastikaCtPressThreatsByIdUrl: state => {
    return state.baseUrl + state.thhlastikaCtPressThreatsUrl + '/';
  },
  getThhlastikaCtPressThreatsDistinctUrl: state => {
    return state.baseUrl + state.thhlastikaCtPressThreatsUrl + '/getAllActCodes';
  },
  getCtPressThreatsDynamicSearchUrl: state => {
    return state.baseUrl + state.thhlastikaCtPressThreatsUrl + '/search';
  },
  getCtPressThreatsDynamicDownloadUrl: state => {
    return state.baseUrl + state.thhlastikaCtPressThreatsUrl + '/downloadExcel';
  },
  // Ct Ornithopanida PressThreats
  getOrnithopanidaCtPressThreatsAddUrl: state => {
    return state.baseUrl + state.ornithopanidaCtPressThreatsUrl;
  },
  getOrnithopanidaCtPressThreatsAddFromExcelUrl: state => {
    return state.baseUrl + state.ornithopanidaCtPressThreatsUrl + '/addPressThreatsFromExcel';
  },
  getOrnithopanidaCtPressThreatsSearchUrl: state => {
    return state.baseUrl + state.ornithopanidaCtPressThreatsUrl + '/getAllByPaging';
  },
  getOrnithopanidaCtPressThreatsByIdUrl: state => {
    return state.baseUrl + state.ornithopanidaCtPressThreatsUrl + '//';
  },
  getOrnithopanidaCtPressThreatsDistinctUrl: state => {
    return state.baseUrl + state.ornithopanidaCtPressThreatsUrl + '/getAllActCodes';
  },
  getCtPressThreatsDynamicSearchUrl: state => {
    return state.baseUrl + state.ornithopanidaCtPressThreatsUrl + '/search';
  },
  getCtPressThreatsDynamicDownloadUrl: state => {
    return state.baseUrl + state.ornithopanidaCtPressThreatsUrl + '/downloadExcel';
  },
  //Ct Ornithopanida Eidi
  getOrnithopanidaCtEidosAddUrl: state => {
    return state.baseUrl + state.ornithopanidaCtEidosUrl;
  },
  getOrnithopanidaCtEidosAddFromExcelUrl: state => {
    return state.baseUrl + state.ornithopanidaCtEidosUrl + '/addEidhFromExcel';
  },
  getOrnithopanidaCtEidosSearchUrl: state => {
    return state.baseUrl + state.ornithopanidaCtEidosUrl + '/getAllByPaging';
  },
  getOrnithopanidaCtEidosByIdUrl: state => {
    return state.baseUrl + state.ornithopanidaCtEidosUrl + '/';
  },
  getOrnithopanidaCtEidosDistinctUrl: state => {
    return state.baseUrl + state.ornithopanidaCtEidosUrl + '/getAllEidh';
  },
  getCtEidhDynamicSearchUrl: state => {
    return state.baseUrl + state.ornithopanidaCtEidosUrl + '/search';
  },
  getCtEidhDynamicDownloadUrl: state => {
    return state.baseUrl + state.ornithopanidaCtEidosUrl + '/downloadExcel';
  },
  //Deigma Ornithopanida
  getDeigmaOrnithopanidaAddUrl: state => {
    return state.baseUrl + state.deigmaOrnithopanidaUrl;
  },
  getDeigmaOrnithopanidaAddFromExcelUrl: state => {
    return state.baseUrl + state.deigmaOrnithopanidaUrl + '/addDeigmaOrnithopanidaFromExcel';
  },
  getDeigmaOrnithopanidaSearchUrl: state => {
    return state.baseUrl + state.deigmaOrnithopanidaUrl + '/getAllByPaging';
  },
  getDeigmaOrnithopanidaByIdUrl: state => {
    return state.baseUrl + state.deigmaOrnithopanidaUrl + '/';
  },
  getDeigmaOrnithopanidaAutocompletesUrl: state => {
    return state.baseUrl + state.deigmaOrnithopanidaUrl + '/getAutocompletes';
  },
  getDeigmaOrnithopanidaMapMarkersUrl: state => {
    return state.baseUrl + state.deigmaOrnithopanidaUrl + '/getAllGeoLocations';
  },
  getDeigmaOrnithopanidaDynamicSearchUrl: state => {
    return state.baseUrl + state.deigmaOrnithopanidaUrl + '/search';
  },
  getDeigmaOrnithopanidaDynamicDownloadUrl: state => {
    return state.baseUrl + state.deigmaOrnithopanidaUrl + '/downloadExcel';
  },
  getDeigmaOrnithopanidanAutocompletes: state => {
    return state.baseUrl + state.deigmaOrnithopanidaUrl + '/getAutocompletes';
  },
  // Ornithopanida X Eidh
  getOrnithopanidaXEidhAddUrl: state => {
    return state.baseUrl + state.ornithopanidaXEidhUrl;
  },
  getOrnithopanidaXEidhAddFromExcelUrl: state => {
    return state.baseUrl + state.ornithopanidaXEidhUrl + '/addDeigmaOrnithopanidaXEidhFromExcel';
  },
  getOrnithopanidaXEidhSearchUrl: state => {
    return state.baseUrl + state.ornithopanidaXEidhUrl + '/getAllByPaging';
  },
  getOrnithopanidaXEidhByIdUrl: state => {
    return state.baseUrl + state.ornithopanidaXEidhUrl + '/';
  },
  getOrnithopanidaXEidhByDeigmaOrnithopanidaIdIs: state => {
    return state.baseUrl + state.ornithopanidaXEidhUrl + '/getDeigmaOrnithopanidaXSpeciesByDeigmaOrnithopanidaIs/';
  },
  getOrnithopanidaXEidhDynamicSearchUrl: state => {
    return state.baseUrl + state.ornithopanidaXEidhUrl + '/search';
  },
  getOrnithopanidaXEidhDynamicDownloadUrl: state => {
    return state.baseUrl + state.ornithopanidaXEidhUrl + '/downloadExcel';
  },
  getOrnithopanidaXEidhAutocompletes: state => {
    return state.baseUrl + state.ornithopanidaXEidhUrl + '/getAutocompletes';
  },
  // Ornithopanida X PressThreats
  getOrnithopanidaXPressThreatsAddUrl: state => {
    return state.baseUrl + state.ornithopanidaXPressThreatsUrl;
  },
  getOrnithopanidaXPressThreatsAddFromExcelUrl: state => {
    return state.baseUrl + state.ornithopanidaXPressThreatsUrl + '/addDeigmaOrnithopanidaXPressAndThreats';
  },
  getOrnithopanidaXPressThreatsSearchUrl: state => {
    return state.baseUrl + state.ornithopanidaXPressThreatsUrl + '/getAllByPaging';
  },
  getOrnithopanidaXPressThreatsByIdUrl: state => {
    return state.baseUrl + state.ornithopanidaXPressThreatsUrl + '/';
  },
  getOrnithopanidaXPressThreatsByDeigmaOrnithopanidaIdIs: state => {
    return state.baseUrl + state.ornithopanidaXPressThreatsUrl + '/getDeigmaOrnithopanidaXPressThreatsByDeigmaOrnithopanidaIs/';
  },
  getOrnithopanidaXPressThreatsDynamicSearchUrl: state => {
    return state.baseUrl + state.ornithopanidaXPressThreatsUrl + '/search';
  },
  getOrnithopanidaXPressThreatsDynamicDownloadUrl: state => {
    return state.baseUrl + state.ornithopanidaXPressThreatsUrl + '/downloadExcel';
  },
  getOrnithopanidaXPressThreatsAutocompletes: state => {
    return state.baseUrl + state.ornithopanidaXPressThreatsUrl + '/getAutocompletes';
  },
  // Thhlastika X Eidh
  getThhlastikaXEidhAddUrl: state => {
    return state.baseUrl + state.thhlastikaXEidhUrl;
  },
  getThhlastikaXEidhAddFromExcelUrl: state => {
    return state.baseUrl + state.thhlastikaXEidhUrl + '/addDeigmaThhlastikwnXEidhFromExcel';
  },
  getThhlastikaXEidhSearchUrl: state => {
    return state.baseUrl + state.thhlastikaXEidhUrl + '/getAllByPaging';
  },
  getThhlastikaXEidhByIdUrl: state => {
    return state.baseUrl + state.thhlastikaXEidhUrl + '/';
  },
  getThhlastikaXEidhByDeigmaThhlastikwnIdIs: state => {
    return state.baseUrl + state.thhlastikaXEidhUrl + '/getDeigmaThhlastikwnXEidhByDeigmaThhlastikwnIs/';
  },
  getThhlastikaXEidhDynamicSearchUrl: state => {
    return state.baseUrl + state.thhlastikaXEidhUrl + '/search';
  },
  getThhlastikaXEidhDynamicDownloadUrl: state => {
    return state.baseUrl + state.thhlastikaXEidhUrl + '/downloadExcel';
  },
  getThhlastikaXEidhAutocompletes: state => {
    return state.baseUrl + state.thhlastikaXEidhUrl + '/getAutocompletes';
  },
  // Thhlastika X PressThreats
  getThhlastikaXPressThreatsAddUrl: state => {
    return state.baseUrl + state.thhlastikaXPressThreatsUrl;
  },
  getThhlastikaXPressThreatsAddFromExcelUrl: state => {
    return state.baseUrl + state.thhlastikaXPressThreatsUrl + '/addDeigmaThhlastikwnXPressThreatsFromExcel';
  },
  getThhlastikaXPressThreatsSearchUrl: state => {
    return state.baseUrl + state.thhlastikaXPressThreatsUrl + '/getAllByPaging';
  },
  getThhlastikaXPressThreatsByIdUrl: state => {
    return state.baseUrl + state.thhlastikaXPressThreatsUrl + '/';
  },
  getThhlastikaXPressThreatsByDeigmaThhlastikwnIdIs: state => {
    return state.baseUrl + state.thhlastikaXPressThreatsUrl + '/getDeigmaThhlastikwnXPressThreatsByDeigmaThhlastikwnIs/';
  },
  getThhlastikaXPressThreatsDynamicSearchUrl: state => {
    return state.baseUrl + state.thhlastikaXPressThreatsUrl + '/search';
  },
  getThhlastikaXPressThreatsDynamicDownloadUrl: state => {
    return state.baseUrl + state.thhlastikaXPressThreatsUrl + '/downloadExcel';
  },
  getThhlastikaXPressThreatsAutocompletes: state => {
    return state.baseUrl + state.thhlastikaXPressThreatsUrl + '/getAutocompletes';
  }
};
const mutations = {// setSnackbar (state, snackbar) {
  //     state.snackbar = snackbar
  // },
};
const actions = {// setSnackbarSettings ({ commit }, snackbar, snackbarColor, snackbarText) {
  // commit('setSnackbarColor', snackbarColor)
  // },
};

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
const state = () => ({
  chipsList: ['Χωρίς φίλτρα'],
  size: 10,
  sort: 'Desc',
  prwtokolaList: []
});
const getters = {
  getChipsList: state => {
    return state.chipsList;
  },
  getSize: state => {
    return state.size;
  },
  getSort: state => {
    return state.sort;
  },
  getPrwtokolaList: state => {
    return state.prwtokolaList;
  }
};
const mutations = {
  setChipsList(state, newChips) {
    state.chipsList = newChips;
  },

  setSize(state, newSize) {
    state.size = newSize;
  },

  setSort(state, newSort) {
    state.sort = newSort;
  },

  setPrwtokolaList(state, newPrwtokola) {
    state.prwtokolaList = newPrwtokola;
  }

};

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
const state = () => ({
  chipsList: ['Χωρίς φίλτρα'],
  size: 10,
  sort: 'Desc',
  eidhList: []
});
const getters = {
  getChipsList: state => {
    return state.chipsList;
  },
  getSize: state => {
    return state.size;
  },
  getSort: state => {
    return state.sort;
  },
  getEidhList: state => {
    return state.eidhList;
  }
};
const mutations = {
  setChipsList(state, newChips) {
    state.chipsList = newChips;
  },

  setSize(state, newSize) {
    state.size = newSize;
  },

  setSort(state, newSort) {
    state.sort = newSort;
  },

  setEidhList(state, newEidh) {
    state.eidhList = newEidh;
  }

};

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
const state = () => ({
  chipsList: ['Χωρίς φίλτρα'],
  size: 10,
  sort: 'Desc',
  actCodesList: []
});
const getters = {
  getChipsList: state => {
    return state.chipsList;
  },
  getSize: state => {
    return state.size;
  },
  getSort: state => {
    return state.sort;
  },
  getActCodesList: state => {
    return state.actCodesList;
  }
};
const mutations = {
  setChipsList(state, newChips) {
    state.chipsList = newChips;
  },

  setSize(state, newSize) {
    state.size = newSize;
  },

  setSort(state, newSort) {
    state.sort = newSort;
  },

  setActCodesList(state, newActCodes) {
    state.actCodesList = newActCodes;
  }

};

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
const state = () => ({
  chipsList: ['Χωρίς φίλτρα'],
  size: 10,
  sort: 'Desc',
  deigmaOrnithopanidaIdList: [],
  eidhList: [],
  sxetikhAfthoniaList: [],
  hlikiaList: [],
  fuloList: [],
  // Apo
  plhthosFrom: null,
  // Ews kai
  plhthosTo: null,
  eokParII: null,
  eokParIV: null,
  eokParV: null
});
const getters = {
  getChipsList: state => {
    return state.chipsList;
  },
  getSize: state => {
    return state.size;
  },
  getSort: state => {
    return state.sort;
  },
  getDeigmaOrnithopanidaIdList: state => {
    return state.deigmaOrnithopanidaIdList;
  },
  getEidhList: state => {
    return state.eidhList;
  },
  getSxetikhAfthoniaList: state => {
    return state.sxetikhAfthoniaList;
  },
  getHlikiaList: state => {
    return state.hlikiaList;
  },
  getFuloList: state => {
    return state.fuloList;
  },
  getPlhthosFrom: state => {
    return state.plhthosFrom;
  },
  getPlhthosTo: state => {
    return state.plhthosTo;
  },
  getEokParII: state => {
    return state.eokParII;
  },
  getEokParIV: state => {
    return state.eokParIV;
  },
  getEokParV: state => {
    return state.eokParV;
  }
};
const mutations = {
  setChipsList(state, newChips) {
    state.chipsList = newChips;
  },

  setSize(state, newSize) {
    state.size = newSize;
  },

  setSort(state, newSort) {
    state.sort = newSort;
  },

  setDeigmaOrnithopanidaIdList(state, newDeigmaOrnithopanidaIdList) {
    state.deigmaOrnithopanidaIdList = newDeigmaOrnithopanidaIdList;
  },

  setEidhList(state, newEidh) {
    state.eidhList = newEidh;
  },

  setSxetikhAfthoniaList(state, newSxetikhAfthonia) {
    state.sxetikhAfthoniaList = newSxetikhAfthonia;
  },

  setHlikiaList(state, newHlikia) {
    state.hlikiaList = newHlikia;
  },

  setFuloList(state, newFulo) {
    state.fuloList = newFulo;
  },

  setPlhthosFrom(state, newPlhthosFrom) {
    state.plhthosFrom = newPlhthosFrom;
  },

  setPlhthosTo(state, newPlhthosTo) {
    state.plhthosTo = newPlhthosTo;
  },

  setEokParII(state, newEokParII) {
    state.eokParII = newEokParII;
  },

  setEokParIV(state, newEokParIV) {
    state.eokParIV = newEokParIV;
  },

  setEokParV(state, newEokParV) {
    state.eokParV = newEokParV;
  }

};

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
const state = () => ({
  chipsList: ['Χωρίς φίλτρα'],
  size: 10,
  sort: 'Desc',
  deigmaOrnithopanidaIdList: [],
  actCodesList: [],
  kwdikosEidousList: [],
  pressThreatList: [],
  importanceList: []
});
const getters = {
  getChipsList: state => {
    return state.chipsList;
  },
  getSize: state => {
    return state.size;
  },
  getSort: state => {
    return state.sort;
  },
  getDeigmaOrnithopanidaIdList: state => {
    return state.deigmaOrnithopanidaIdList;
  },
  getActCodesList: state => {
    return state.actCodesList;
  },
  getKwdikosEidousList: state => {
    return state.kwdikosEidousList;
  },
  getPressThreatList: state => {
    return state.pressThreatList;
  },
  getImportanceList: state => {
    return state.importanceList;
  }
};
const mutations = {
  setChipsList(state, newChips) {
    state.chipsList = newChips;
  },

  setSize(state, newSize) {
    state.size = newSize;
  },

  setSort(state, newSort) {
    state.sort = newSort;
  },

  setDeigmaOrnithopanidaIdList(state, newDeigmaOrnithopanidaIdList) {
    state.deigmaOrnithopanidaIdList = newDeigmaOrnithopanidaIdList;
  },

  setActCodesList(state, newActCodes) {
    state.actCodesList = newActCodes;
  },

  setKwdikosEidousList(state, newKwdikosEidous) {
    state.kwdikosEidousList = newKwdikosEidous;
  },

  setPressThreatList(state, newPressThreat) {
    state.pressThreatList = newPressThreat;
  },

  setImportanceList(state, newImportance) {
    state.importanceList = newImportance;
  }

};

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
const state = () => ({
  chipsList: ['Χωρίς φίλτρα'],
  size: 10,
  sort: 'Desc',
  kwdikosDeigmatolhpsiasList: [],
  xrhmatodothshList: [],
  ereunhthsList: [],
  topothesiaList: [],
  // Apo
  dateFrom: null,
  // Ews kai
  dateTo: null,
  timeFrom: null,
  timeTo: null,
  diarkeiaList: [],
  tuposVlasthshsList: [],
  tuposOikotopouList: [],
  epifaneiaDeigmatolhpsiasFrom: null,
  epifaneiaDeigmatolhpsiasTo: null,
  latitudeEGSAList: [],
  longitudeEGSAList: [],
  latitudeWGS84List: [],
  longitudeWGS84List: [],
  gridCellList: [],
  kwdikosNaturaList: [],
  methodosDeigmatolhpsiasList: [],
  nomosList: []
});
const getters = {
  getChipsList: state => {
    return state.chipsList;
  },
  getSize: state => {
    return state.size;
  },
  getSort: state => {
    return state.sort;
  },
  getKwdikosDeigmatolhpsiasList: state => {
    return state.kwdikosDeigmatolhpsiasList;
  },
  getXrhmatodothshList: state => {
    return state.xrhmatodothshList;
  },
  getEreunhthsList: state => {
    return state.ereunhthsList;
  },
  getTopothesiaList: state => {
    return state.topothesiaList;
  },
  getDateFrom: state => {
    return state.dateFrom;
  },
  getDateTo: state => {
    return state.dateTo;
  },
  getTimeFrom: state => {
    return state.timeFrom;
  },
  getTimeTo: state => {
    return state.timeTo;
  },
  getDiarkeiaList: state => {
    return state.diarkeiaList;
  },
  getTuposVlasthshsList: state => {
    return state.tuposVlasthshsList;
  },
  getTuposOikotopouList: state => {
    return state.tuposOikotopouList;
  },
  getEpifaneiaDeigmatolhpsiasFrom: state => {
    return state.epifaneiaDeigmatolhpsiasFrom;
  },
  getEpifaneiaDeigmatolhpsiasTo: state => {
    return state.epifaneiaDeigmatolhpsiasTo;
  },
  getLatitudeEGSAList: state => {
    return state.latitudeEGSAList;
  },
  getLongitudeEGSAList: state => {
    return state.longitudeEGSAList;
  },
  getLatitudeWGS84List: state => {
    return state.latitudeWGS84List;
  },
  getLongitudeWGS84List: state => {
    return state.longitudeWGS84List;
  },
  getGridCellList: state => {
    return state.gridCellList;
  },
  getKwdikosNaturaList: state => {
    return state.kwdikosNaturaList;
  },
  getMethodosDeigmatolhpsiasList: state => {
    return state.methodosDeigmatolhpsiasList;
  },
  getNomosList: state => {
    return state.nomosList;
  }
};
const mutations = {
  setChipsList(state, newChips) {
    state.chipsList = newChips;
  },

  setSize(state, newSize) {
    state.size = newSize;
  },

  setSort(state, newSort) {
    state.sort = newSort;
  },

  setKwdikosDeigmatolhpsiasList(state, newKwdikosDeigmatolhpsiasList) {
    state.kwdikosDeigmatolhpsiasList = newKwdikosDeigmatolhpsiasList;
  },

  setXrhmatodothshList(state, newXrhmatodothshList) {
    state.xrhmatodothshList = newXrhmatodothshList;
  },

  setEreunhthsList(state, newEreunhthsList) {
    state.ereunhthsList = newEreunhthsList;
  },

  setTopothesiaList(state, newTopothesiaList) {
    state.topothesiaList = newTopothesiaList;
  },

  setDateFrom(state, newDateFrom) {
    state.dateFrom = newDateFrom;
  },

  setDateTo(state, newDateTo) {
    state.dateTo = newDateTo;
  },

  setTimeFrom(state, newTimeFrom) {
    state.timeFrom = newTimeFrom;
  },

  setTimeTo(state, newTimeTo) {
    state.timeTo = newTimeTo;
  },

  setDiarkeiaList(state, newDiarkeiaList) {
    state.diarkeiaList = newDiarkeiaList;
  },

  setTuposVlasthshsList(state, newTuposVlasthshsList) {
    state.tuposVlasthshsList = newTuposVlasthshsList;
  },

  setTuposOikotopouList(state, newTuposOikotopouList) {
    state.tuposOikotopouList = newTuposOikotopouList;
  },

  setEpifaneiaDeigmatolhpsiasFrom(state, newEpifaneiaDeigmatolhpsiasFrom) {
    state.epifaneiaDeigmatolhpsiasFrom = newEpifaneiaDeigmatolhpsiasFrom;
  },

  setEpifaneiaDeigmatolhpsiasTo(state, newEpifaneiaDeigmatolhpsiasTo) {
    state.epifaneiaDeigmatolhpsiasTo = newEpifaneiaDeigmatolhpsiasTo;
  },

  setLatitudeEGSAList(state, newLatitudeEGSAList) {
    state.latitudeEGSAList = newLatitudeEGSAList;
  },

  setLongitudeEGSAList(state, newLongitudeEGSAList) {
    state.longitudeEGSAList = newLongitudeEGSAList;
  },

  setLatitudeWGS84List(state, newLatitudeWGS84List) {
    state.latitudeWGS84List = newLatitudeWGS84List;
  },

  setLongitudeWGS84List(state, newLongitudeWGS84List) {
    state.longitudeWGS84List = newLongitudeWGS84List;
  },

  setGridCellList(state, newGridCellList) {
    state.gridCellList = newGridCellList;
  },

  setKwdikosNaturaList(state, newKwdikosNaturaList) {
    state.kwdikosNaturaList = newKwdikosNaturaList;
  },

  setMethodosDeigmatolhpsiasList(state, newMethodosDeigmatolhpsiasList) {
    state.methodosDeigmatolhpsiasList = newMethodosDeigmatolhpsiasList;
  },

  setNomosList(state, newNomosList) {
    state.nomosList = newNomosList;
  }

};

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
const state = () => ({
  chipsList: ['Χωρίς φίλτρα'],
  size: 10,
  sort: 'Desc',
  eidhList: []
});
const getters = {
  getChipsList: state => {
    return state.chipsList;
  },
  getSize: state => {
    return state.size;
  },
  getSort: state => {
    return state.sort;
  },
  getEidhList: state => {
    return state.eidhList;
  }
};
const mutations = {
  setChipsList(state, newChips) {
    state.chipsList = newChips;
  },

  setSize(state, newSize) {
    state.size = newSize;
  },

  setSort(state, newSort) {
    state.sort = newSort;
  },

  setEidhList(state, newEidh) {
    state.eidhList = newEidh;
  }

};

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
const state = () => ({
  chipsList: ['Χωρίς φίλτρα'],
  size: 10,
  sort: 'Desc',
  actCodesList: []
});
const getters = {
  getChipsList: state => {
    return state.chipsList;
  },
  getSize: state => {
    return state.size;
  },
  getSort: state => {
    return state.sort;
  },
  getActCodesList: state => {
    return state.actCodesList;
  }
};
const mutations = {
  setChipsList(state, newChips) {
    state.chipsList = newChips;
  },

  setSize(state, newSize) {
    state.size = newSize;
  },

  setSort(state, newSort) {
    state.sort = newSort;
  },

  setActCodesList(state, newActCodes) {
    state.actCodesList = newActCodes;
  }

};

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
const state = () => ({
  chipsList: ['Χωρίς φίλτρα'],
  size: 10,
  sort: 'Desc',
  deigmaThhlastikwnIdList: [],
  eidhList: [],
  sxetikhAfthoniaList: [],
  hlikiaList: [],
  fuloList: [],
  // Apo
  plhthosFrom: null,
  // Ews kai
  plhthosTo: null,
  eokParII: null,
  eokParIV: null,
  eokParV: null
});
const getters = {
  getChipsList: state => {
    return state.chipsList;
  },
  getSize: state => {
    return state.size;
  },
  getSort: state => {
    return state.sort;
  },
  getDeigmaThhlastikwnIdList: state => {
    return state.deigmaThhlastikwnIdList;
  },
  getEidhList: state => {
    return state.eidhList;
  },
  getSxetikhAfthoniaList: state => {
    return state.sxetikhAfthoniaList;
  },
  getHlikiaList: state => {
    return state.hlikiaList;
  },
  getFuloList: state => {
    return state.fuloList;
  },
  getPlhthosFrom: state => {
    return state.plhthosFrom;
  },
  getPlhthosTo: state => {
    return state.plhthosTo;
  },
  getEokParII: state => {
    return state.eokParII;
  },
  getEokParIV: state => {
    return state.eokParIV;
  },
  getEokParV: state => {
    return state.eokParV;
  }
};
const mutations = {
  setChipsList(state, newChips) {
    state.chipsList = newChips;
  },

  setSize(state, newSize) {
    state.size = newSize;
  },

  setSort(state, newSort) {
    state.sort = newSort;
  },

  setDeigmaThhlastikwnIdList(state, newDeigmaThhlastikwnIdList) {
    state.deigmaThhlastikwnIdList = newDeigmaThhlastikwnIdList;
  },

  setEidhList(state, newEidh) {
    state.eidhList = newEidh;
  },

  setSxetikhAfthoniaList(state, newSxetikhAfthonia) {
    state.sxetikhAfthoniaList = newSxetikhAfthonia;
  },

  setHlikiaList(state, newHlikia) {
    state.hlikiaList = newHlikia;
  },

  setFuloList(state, newFulo) {
    state.fuloList = newFulo;
  },

  setPlhthosFrom(state, newPlhthosFrom) {
    state.plhthosFrom = newPlhthosFrom;
  },

  setPlhthosTo(state, newPlhthosTo) {
    state.plhthosTo = newPlhthosTo;
  },

  setEokParII(state, newEokParII) {
    state.eokParII = newEokParII;
  },

  setEokParIV(state, newEokParIV) {
    state.eokParIV = newEokParIV;
  },

  setEokParV(state, newEokParV) {
    state.eokParV = newEokParV;
  }

};

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
const state = () => ({
  chipsList: ['Χωρίς φίλτρα'],
  size: 10,
  sort: 'Desc',
  deigmaThhlastikwnIdList: [],
  actCodesList: [],
  kwdikosEidousList: [],
  pressThreatList: [],
  importanceList: []
});
const getters = {
  getChipsList: state => {
    return state.chipsList;
  },
  getSize: state => {
    return state.size;
  },
  getSort: state => {
    return state.sort;
  },
  getDeigmaThhlastikwnIdList: state => {
    return state.deigmaThhlastikwnIdList;
  },
  getActCodesList: state => {
    return state.actCodesList;
  },
  getKwdikosEidousList: state => {
    return state.kwdikosEidousList;
  },
  getPressThreatList: state => {
    return state.pressThreatList;
  },
  getImportanceList: state => {
    return state.importanceList;
  }
};
const mutations = {
  setChipsList(state, newChips) {
    state.chipsList = newChips;
  },

  setSize(state, newSize) {
    state.size = newSize;
  },

  setSort(state, newSort) {
    state.sort = newSort;
  },

  setDeigmaThhlastikwnIdList(state, newDeigmaThhlastikwnIdList) {
    state.deigmaThhlastikwnIdList = newDeigmaThhlastikwnIdList;
  },

  setActCodesList(state, newActCodes) {
    state.actCodesList = newActCodes;
  },

  setKwdikosEidousList(state, newKwdikosEidous) {
    state.kwdikosEidousList = newKwdikosEidous;
  },

  setPressThreatList(state, newPressThreat) {
    state.pressThreatList = newPressThreat;
  },

  setImportanceList(state, newImportance) {
    state.importanceList = newImportance;
  }

};

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
const state = () => ({
  chipsList: ['Χωρίς φίλτρα'],
  size: 10,
  sort: 'Desc',
  kwdikosDeigmatolhpsiasList: [],
  xrhmatodothshList: [],
  ereunhthsList: [],
  topothesiaList: [],
  // Apo
  dateFrom: null,
  // Ews kai
  dateTo: null,
  timeFrom: null,
  timeTo: null,
  diarkeiaList: [],
  tuposVlasthshsList: [],
  tuposOikotopouList: [],
  epifaneiaDeigmatolhpsiasFrom: null,
  epifaneiaDeigmatolhpsiasTo: null,
  latitudeEGSAList: [],
  longitudeEGSAList: [],
  latitudeWGS84List: [],
  longitudeWGS84List: [],
  gridCellList: [],
  kwdikosNaturaList: [],
  methodosDeigmatolhpsiasList: [],
  nomosList: []
});
const getters = {
  getChipsList: state => {
    return state.chipsList;
  },
  getSize: state => {
    return state.size;
  },
  getSort: state => {
    return state.sort;
  },
  getKwdikosDeigmatolhpsiasList: state => {
    return state.kwdikosDeigmatolhpsiasList;
  },
  getXrhmatodothshList: state => {
    return state.xrhmatodothshList;
  },
  getEreunhthsList: state => {
    return state.ereunhthsList;
  },
  getTopothesiaList: state => {
    return state.topothesiaList;
  },
  getDateFrom: state => {
    return state.dateFrom;
  },
  getDateTo: state => {
    return state.dateTo;
  },
  getTimeFrom: state => {
    return state.timeFrom;
  },
  getTimeTo: state => {
    return state.timeTo;
  },
  getDiarkeiaList: state => {
    return state.diarkeiaList;
  },
  getTuposVlasthshsList: state => {
    return state.tuposVlasthshsList;
  },
  getTuposOikotopouList: state => {
    return state.tuposOikotopouList;
  },
  getEpifaneiaDeigmatolhpsiasFrom: state => {
    return state.epifaneiaDeigmatolhpsiasFrom;
  },
  getEpifaneiaDeigmatolhpsiasTo: state => {
    return state.epifaneiaDeigmatolhpsiasTo;
  },
  getLatitudeEGSAList: state => {
    return state.latitudeEGSAList;
  },
  getLongitudeEGSAList: state => {
    return state.longitudeEGSAList;
  },
  getLatitudeWGS84List: state => {
    return state.latitudeWGS84List;
  },
  getLongitudeWGS84List: state => {
    return state.longitudeWGS84List;
  },
  getGridCellList: state => {
    return state.gridCellList;
  },
  getKwdikosNaturaList: state => {
    return state.kwdikosNaturaList;
  },
  getMethodosDeigmatolhpsiasList: state => {
    return state.methodosDeigmatolhpsiasList;
  },
  getNomosList: state => {
    return state.nomosList;
  }
};
const mutations = {
  setChipsList(state, newChips) {
    state.chipsList = newChips;
  },

  setSize(state, newSize) {
    state.size = newSize;
  },

  setSort(state, newSort) {
    state.sort = newSort;
  },

  setKwdikosDeigmatolhpsiasList(state, newKwdikosDeigmatolhpsiasList) {
    state.kwdikosDeigmatolhpsiasList = newKwdikosDeigmatolhpsiasList;
  },

  setXrhmatodothshList(state, newXrhmatodothshList) {
    state.xrhmatodothshList = newXrhmatodothshList;
  },

  setEreunhthsList(state, newEreunhthsList) {
    state.ereunhthsList = newEreunhthsList;
  },

  setTopothesiaList(state, newTopothesiaList) {
    state.topothesiaList = newTopothesiaList;
  },

  setDateFrom(state, newDateFrom) {
    state.dateFrom = newDateFrom;
  },

  setDateTo(state, newDateTo) {
    state.dateTo = newDateTo;
  },

  setTimeFrom(state, newTimeFrom) {
    state.timeFrom = newTimeFrom;
  },

  setTimeTo(state, newTimeTo) {
    state.timeTo = newTimeTo;
  },

  setDiarkeiaList(state, newDiarkeiaList) {
    state.diarkeiaList = newDiarkeiaList;
  },

  setTuposVlasthshsList(state, newTuposVlasthshsList) {
    state.tuposVlasthshsList = newTuposVlasthshsList;
  },

  setTuposOikotopouList(state, newTuposOikotopouList) {
    state.tuposOikotopouList = newTuposOikotopouList;
  },

  setEpifaneiaDeigmatolhpsiasFrom(state, newEpifaneiaDeigmatolhpsiasFrom) {
    state.epifaneiaDeigmatolhpsiasFrom = newEpifaneiaDeigmatolhpsiasFrom;
  },

  setEpifaneiaDeigmatolhpsiasTo(state, newEpifaneiaDeigmatolhpsiasTo) {
    state.epifaneiaDeigmatolhpsiasTo = newEpifaneiaDeigmatolhpsiasTo;
  },

  setLatitudeEGSAList(state, newLatitudeEGSAList) {
    state.latitudeEGSAList = newLatitudeEGSAList;
  },

  setLongitudeEGSAList(state, newLongitudeEGSAList) {
    state.longitudeEGSAList = newLongitudeEGSAList;
  },

  setLatitudeWGS84List(state, newLatitudeWGS84List) {
    state.latitudeWGS84List = newLatitudeWGS84List;
  },

  setLongitudeWGS84List(state, newLongitudeWGS84List) {
    state.longitudeWGS84List = newLongitudeWGS84List;
  },

  setGridCellList(state, newGridCellList) {
    state.gridCellList = newGridCellList;
  },

  setKwdikosNaturaList(state, newKwdikosNaturaList) {
    state.kwdikosNaturaList = newKwdikosNaturaList;
  },

  setMethodosDeigmatolhpsiasList(state, newMethodosDeigmatolhpsiasList) {
    state.methodosDeigmatolhpsiasList = newMethodosDeigmatolhpsiasList;
  },

  setNomosList(state, newNomosList) {
    state.nomosList = newNomosList;
  }

};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// This piece of code was orignally written by sindresorhus and can be seen here
// https://github.com/sindresorhus/lazy-value/blob/master/index.js

exports.default = function (fn) {
  var called = false;
  var ret = void 0;

  return function () {
    if (!called) {
      called = true;
      ret = fn();
    }

    return ret;
  };
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isApiSetUp = false;

/**
 * @param apiKey    API Key, or object with the URL parameters. For example
 *                  to use Google Maps Premium API, pass
 *                    `{ client: <YOUR-CLIENT-ID> }`.
 *                  You may pass the libraries and/or version (as `v`) parameter into
 *                  this parameter and skip the next two parameters
 * @param version   Google Maps version
 * @param libraries Libraries to load (@see
 *                  https://developers.google.com/maps/documentation/javascript/libraries)
 * @param loadCn    Boolean. If set to true, the map will be loaded from google maps China
 *                  (@see https://developers.google.com/maps/documentation/javascript/basics#GoogleMapsChina)
 *
 * Example:
 * ```
 *      import {load} from 'vue-google-maps'
 *
 *      load(<YOUR-API-KEY>)
 *
 *      load({
 *              key: <YOUR-API-KEY>,
 *      })
 *
 *      load({
 *              client: <YOUR-CLIENT-ID>,
 *              channel: <YOUR CHANNEL>
 *      })
 * ```
 */
var loadGmapApi = exports.loadGmapApi = function (options, loadCn) {
  if (typeof document === 'undefined') {
    // Do nothing if run from server-side
    return;
  }
  if (!isApiSetUp) {
    isApiSetUp = true;

    var googleMapScript = document.createElement('SCRIPT');

    // Allow options to be an object.
    // This is to support more esoteric means of loading Google Maps,
    // such as Google for business
    // https://developers.google.com/maps/documentation/javascript/get-api-key#premium-auth
    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
      throw new Error('options should  be an object');
    }

    // libraries
    if (Array.prototype.isPrototypeOf(options.libraries)) {
      options.libraries = options.libraries.join(',');
    }
    options['callback'] = 'vueGoogleMapsInit';

    var baseUrl = 'https://maps.googleapis.com/';

    if (typeof loadCn === 'boolean' && loadCn === true) {
      baseUrl = 'https://maps.google.cn/';
    }

    var url = baseUrl + 'maps/api/js?' + Object.keys(options).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(options[key]);
    }).join('&');

    googleMapScript.setAttribute('src', url);
    googleMapScript.setAttribute('async', '');
    googleMapScript.setAttribute('defer', '');
    document.head.appendChild(googleMapScript);
  } else {
    throw new Error('You already started the loading of google maps');
  }
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapElementFactory = __webpack_require__(2);

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  animation: {
    twoWay: true,
    type: Number
  },
  attribution: {
    type: Object
  },
  clickable: {
    type: Boolean,
    twoWay: true,
    default: true
  },
  cursor: {
    type: String,
    twoWay: true
  },
  draggable: {
    type: Boolean,
    twoWay: true,
    default: false
  },
  icon: {
    twoWay: true
  },
  label: {},
  opacity: {
    type: Number,
    default: 1
  },
  options: {
    type: Object
  },
  place: {
    type: Object
  },
  position: {
    type: Object,
    twoWay: true
  },
  shape: {
    type: Object,
    twoWay: true
  },
  title: {
    type: String,
    twoWay: true
  },
  zIndex: {
    type: Number,
    twoWay: true
  },
  visible: {
    twoWay: true,
    default: true
  }
};

var events = ['click', 'rightclick', 'dblclick', 'drag', 'dragstart', 'dragend', 'mouseup', 'mousedown', 'mouseover', 'mouseout'];

/**
 * @class Marker
 *
 * Marker class with extra support for
 *
 * - Embedded info windows
 * - Clustered markers
 *
 * Support for clustered markers is for backward-compatability
 * reasons. Otherwise we should use a cluster-marker mixin or
 * subclass.
 */
exports.default = (0, _mapElementFactory2.default)({
  mappedProps: props,
  events: events,
  name: 'marker',
  ctr: function ctr() {
    return google.maps.Marker;
  },

  inject: {
    '$clusterPromise': {
      default: null
    }
  },

  render: function render(h) {
    if (!this.$slots.default || this.$slots.default.length === 0) {
      return '';
    } else if (this.$slots.default.length === 1) {
      // So that infowindows can have a marker parent
      return this.$slots.default[0];
    } else {
      return h('div', this.$slots.default);
    }
  },
  destroyed: function destroyed() {
    if (!this.$markerObject) {
      return;
    }

    if (this.$clusterObject) {
      // Repaint will be performed in `updated()` of cluster
      this.$clusterObject.removeMarker(this.$markerObject, true);
    } else {
      this.$markerObject.setMap(null);
    }
  },
  beforeCreate: function beforeCreate(options) {
    if (this.$clusterPromise) {
      options.map = null;
    }

    return this.$clusterPromise;
  },
  afterCreate: function afterCreate(inst) {
    var _this = this;

    if (this.$clusterPromise) {
      this.$clusterPromise.then(function (co) {
        co.addMarker(inst);
        _this.$clusterObject = co;
      });
    }
  }
});

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _mapElementFactory = __webpack_require__(2);

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  draggable: {
    type: Boolean
  },
  editable: {
    type: Boolean
  },
  options: {
    twoWay: false,
    type: Object
  },
  path: {
    type: Array,
    twoWay: true
  }
};

var events = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

exports.default = (0, _mapElementFactory2.default)({
  mappedProps: props,
  props: {
    deepWatch: {
      type: Boolean,
      default: false
    }
  },
  events: events,

  name: 'polyline',
  ctr: function ctr() {
    return google.maps.Polyline;
  },

  afterCreate: function afterCreate() {
    var _this = this;

    var clearEvents = function () {};

    this.$watch('path', function (path) {
      if (path) {
        clearEvents();

        _this.$polylineObject.setPath(path);

        var mvcPath = _this.$polylineObject.getPath();
        var eventListeners = [];

        var updatePaths = function () {
          _this.$emit('path_changed', _this.$polylineObject.getPath());
        };

        eventListeners.push([mvcPath, mvcPath.addListener('insert_at', updatePaths)]);
        eventListeners.push([mvcPath, mvcPath.addListener('remove_at', updatePaths)]);
        eventListeners.push([mvcPath, mvcPath.addListener('set_at', updatePaths)]);

        clearEvents = function () {
          eventListeners.map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                obj = _ref2[0],
                listenerHandle = _ref2[1];

            return (// eslint-disable-line no-unused-vars
              google.maps.event.removeListener(listenerHandle)
            );
          });
        };
      }
    }, {
      deep: this.deepWatch,
      immediate: true
    });
  }
});

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _mapElementFactory = __webpack_require__(2);

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  draggable: {
    type: Boolean
  },
  editable: {
    type: Boolean
  },
  options: {
    type: Object
  },
  path: {
    type: Array,
    twoWay: true,
    noBind: true
  },
  paths: {
    type: Array,
    twoWay: true,
    noBind: true
  }
};

var events = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

exports.default = (0, _mapElementFactory2.default)({
  props: {
    deepWatch: {
      type: Boolean,
      default: false
    }
  },
  events: events,
  mappedProps: props,
  name: 'polygon',
  ctr: function ctr() {
    return google.maps.Polygon;
  },

  beforeCreate: function beforeCreate(options) {
    if (!options.path) delete options.path;
    if (!options.paths) delete options.paths;
  },
  afterCreate: function afterCreate(inst) {
    var _this = this;

    var clearEvents = function () {};

    // Watch paths, on our own, because we do not want to set either when it is
    // empty
    this.$watch('paths', function (paths) {
      if (paths) {
        clearEvents();

        inst.setPaths(paths);

        var updatePaths = function () {
          _this.$emit('paths_changed', inst.getPaths());
        };
        var eventListeners = [];

        var mvcArray = inst.getPaths();
        for (var i = 0; i < mvcArray.getLength(); i++) {
          var mvcPath = mvcArray.getAt(i);
          eventListeners.push([mvcPath, mvcPath.addListener('insert_at', updatePaths)]);
          eventListeners.push([mvcPath, mvcPath.addListener('remove_at', updatePaths)]);
          eventListeners.push([mvcPath, mvcPath.addListener('set_at', updatePaths)]);
        }
        eventListeners.push([mvcArray, mvcArray.addListener('insert_at', updatePaths)]);
        eventListeners.push([mvcArray, mvcArray.addListener('remove_at', updatePaths)]);
        eventListeners.push([mvcArray, mvcArray.addListener('set_at', updatePaths)]);

        clearEvents = function () {
          eventListeners.map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                obj = _ref2[0],
                listenerHandle = _ref2[1];

            return (// eslint-disable-line no-unused-vars
              google.maps.event.removeListener(listenerHandle)
            );
          });
        };
      }
    }, {
      deep: this.deepWatch,
      immediate: true
    });

    this.$watch('path', function (path) {
      if (path) {
        clearEvents();

        inst.setPaths(path);

        var mvcPath = inst.getPath();
        var eventListeners = [];

        var updatePaths = function () {
          _this.$emit('path_changed', inst.getPath());
        };

        eventListeners.push([mvcPath, mvcPath.addListener('insert_at', updatePaths)]);
        eventListeners.push([mvcPath, mvcPath.addListener('remove_at', updatePaths)]);
        eventListeners.push([mvcPath, mvcPath.addListener('set_at', updatePaths)]);

        clearEvents = function () {
          eventListeners.map(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                obj = _ref4[0],
                listenerHandle = _ref4[1];

            return (// eslint-disable-line no-unused-vars
              google.maps.event.removeListener(listenerHandle)
            );
          });
        };
      }
    }, {
      deep: this.deepWatch,
      immediate: true
    });
  }
});

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapElementFactory = __webpack_require__(2);

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  center: {
    type: Object,
    twoWay: true,
    required: true
  },
  radius: {
    type: Number,
    twoWay: true
  },
  draggable: {
    type: Boolean,
    default: false
  },
  editable: {
    type: Boolean,
    default: false
  },
  options: {
    type: Object,
    twoWay: false
  }
};

var events = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

exports.default = (0, _mapElementFactory2.default)({
  mappedProps: props,
  name: 'circle',
  ctr: function ctr() {
    return google.maps.Circle;
  },
  events: events
});

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapElementFactory = __webpack_require__(2);

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  bounds: {
    type: Object,
    twoWay: true
  },
  draggable: {
    type: Boolean,
    default: false
  },
  editable: {
    type: Boolean,
    default: false
  },
  options: {
    type: Object,
    twoWay: false
  }
};

var events = ['click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

exports.default = (0, _mapElementFactory2.default)({
  mappedProps: props,
  name: 'rectangle',
  ctr: function ctr() {
    return google.maps.Rectangle;
  },
  events: events
});

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapElementFactory = __webpack_require__(2);

var _mapElementFactory2 = _interopRequireDefault(_mapElementFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  options: {
    type: Object,
    required: false,
    default: function _default() {
      return {};
    }
  },
  position: {
    type: Object,
    twoWay: true
  },
  zIndex: {
    type: Number,
    twoWay: true
  }
};

var events = ['domready', 'closeclick', 'content_changed'];

exports.default = (0, _mapElementFactory2.default)({
  mappedProps: props,
  events: events,
  name: 'infoWindow',
  ctr: function ctr() {
    return google.maps.InfoWindow;
  },
  props: {
    opened: {
      type: Boolean,
      default: true
    }
  },

  inject: {
    '$markerPromise': {
      default: null
    }
  },

  mounted: function mounted() {
    var el = this.$refs.flyaway;
    el.parentNode.removeChild(el);
  },
  beforeCreate: function beforeCreate(options) {
    var _this = this;

    options.content = this.$refs.flyaway;

    if (this.$markerPromise) {
      delete options.position;
      return this.$markerPromise.then(function (mo) {
        _this.$markerObject = mo;
        return mo;
      });
    }
  },


  methods: {
    _openInfoWindow: function _openInfoWindow() {
      if (this.opened) {
        if (this.$markerObject !== null) {
          this.$infoWindowObject.open(this.$map, this.$markerObject);
        } else {
          this.$infoWindowObject.open(this.$map);
        }
      } else {
        this.$infoWindowObject.close();
      }
    }
  },

  afterCreate: function afterCreate() {
    var _this2 = this;

    this._openInfoWindow();
    this.$watch('opened', function () {
      _this2._openInfoWindow();
    });
  }
});

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _bindEvents = __webpack_require__(13);

var _bindEvents2 = _interopRequireDefault(_bindEvents);

var _bindProps = __webpack_require__(7);

var _mountableMixin = __webpack_require__(15);

var _mountableMixin2 = _interopRequireDefault(_mountableMixin);

var _TwoWayBindingWrapper = __webpack_require__(21);

var _TwoWayBindingWrapper2 = _interopRequireDefault(_TwoWayBindingWrapper);

var _WatchPrimitiveProperties = __webpack_require__(14);

var _WatchPrimitiveProperties2 = _interopRequireDefault(_WatchPrimitiveProperties);

var _mapElementFactory = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  center: {
    required: true,
    twoWay: true,
    type: Object,
    noBind: true
  },
  zoom: {
    required: false,
    twoWay: true,
    type: Number,
    noBind: true
  },
  heading: {
    type: Number,
    twoWay: true
  },
  mapTypeId: {
    twoWay: true,
    type: String
  },
  tilt: {
    twoWay: true,
    type: Number
  },
  options: {
    type: Object,
    default: function _default() {
      return {};
    }
  }
};

var events = ['bounds_changed', 'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'idle', 'mousemove', 'mouseout', 'mouseover', 'resize', 'rightclick', 'tilesloaded'];

// Plain Google Maps methods exposed here for convenience
var linkedMethods = ['panBy', 'panTo', 'panToBounds', 'fitBounds'].reduce(function (all, methodName) {
  all[methodName] = function () {
    if (this.$mapObject) {
      this.$mapObject[methodName].apply(this.$mapObject, arguments);
    }
  };
  return all;
}, {});

// Other convenience methods exposed by Vue Google Maps
var customMethods = {
  resize: function resize() {
    if (this.$mapObject) {
      google.maps.event.trigger(this.$mapObject, 'resize');
    }
  },
  resizePreserveCenter: function resizePreserveCenter() {
    if (!this.$mapObject) {
      return;
    }

    var oldCenter = this.$mapObject.getCenter();
    google.maps.event.trigger(this.$mapObject, 'resize');
    this.$mapObject.setCenter(oldCenter);
  },


  /// Override mountableMixin::_resizeCallback
  /// because resizePreserveCenter is usually the
  /// expected behaviour
  _resizeCallback: function _resizeCallback() {
    this.resizePreserveCenter();
  }
};

exports.default = {
  mixins: [_mountableMixin2.default],
  props: (0, _mapElementFactory.mappedPropsToVueProps)(props),

  provide: function provide() {
    var _this = this;

    this.$mapPromise = new Promise(function (resolve, reject) {
      _this.$mapPromiseDeferred = { resolve: resolve, reject: reject };
    });
    return {
      '$mapPromise': this.$mapPromise
    };
  },


  computed: {
    finalLat: function finalLat() {
      return this.center && typeof this.center.lat === 'function' ? this.center.lat() : this.center.lat;
    },
    finalLng: function finalLng() {
      return this.center && typeof this.center.lng === 'function' ? this.center.lng() : this.center.lng;
    },
    finalLatLng: function finalLatLng() {
      return { lat: this.finalLat, lng: this.finalLng };
    }
  },

  watch: {
    zoom: function zoom(_zoom) {
      if (this.$mapObject) {
        this.$mapObject.setZoom(_zoom);
      }
    }
  },

  mounted: function mounted() {
    var _this2 = this;

    return this.$gmapApiPromiseLazy().then(function () {
      // getting the DOM element where to create the map
      var element = _this2.$refs['vue-map'];

      // creating the map
      var options = _extends({}, _this2.options, (0, _bindProps.getPropsValues)(_this2, props));
      delete options.options;
      _this2.$mapObject = new google.maps.Map(element, options);

      // binding properties (two and one way)
      (0, _bindProps.bindProps)(_this2, _this2.$mapObject, props);
      // binding events
      (0, _bindEvents2.default)(_this2, _this2.$mapObject, events);

      // manually trigger center and zoom
      (0, _TwoWayBindingWrapper2.default)(function (increment, decrement, shouldUpdate) {
        _this2.$mapObject.addListener('center_changed', function () {
          if (shouldUpdate()) {
            _this2.$emit('center_changed', _this2.$mapObject.getCenter());
          }
          decrement();
        });

        (0, _WatchPrimitiveProperties2.default)(_this2, ['finalLat', 'finalLng'], function updateCenter() {
          increment();
          _this2.$mapObject.setCenter(_this2.finalLatLng);
        });
      });
      _this2.$mapObject.addListener('zoom_changed', function () {
        _this2.$emit('zoom_changed', _this2.$mapObject.getZoom());
      });
      _this2.$mapObject.addListener('bounds_changed', function () {
        _this2.$emit('bounds_changed', _this2.$mapObject.getBounds());
      });

      _this2.$mapPromiseDeferred.resolve(_this2.$mapObject);

      return _this2.$mapObject;
    }).catch(function (error) {
      throw error;
    });
  },

  methods: _extends({}, customMethods, linkedMethods)
};

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-map-container{position:relative}.vue-map-container .vue-map{left:0;right:0;top:0;bottom:0;position:absolute}.vue-map-hidden{display:none}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _bindEvents = __webpack_require__(13);

var _bindEvents2 = _interopRequireDefault(_bindEvents);

var _bindProps = __webpack_require__(7);

var _mountableMixin = __webpack_require__(15);

var _mountableMixin2 = _interopRequireDefault(_mountableMixin);

var _TwoWayBindingWrapper = __webpack_require__(21);

var _TwoWayBindingWrapper2 = _interopRequireDefault(_TwoWayBindingWrapper);

var _WatchPrimitiveProperties = __webpack_require__(14);

var _WatchPrimitiveProperties2 = _interopRequireDefault(_WatchPrimitiveProperties);

var _mapElementFactory = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  zoom: {
    twoWay: true,
    type: Number
  },
  pov: {
    twoWay: true,
    type: Object,
    trackProperties: ['pitch', 'heading']
  },
  position: {
    twoWay: true,
    type: Object,
    noBind: true
  },
  pano: {
    twoWay: true,
    type: String
  },
  motionTracking: {
    twoWay: false,
    type: Boolean
  },
  visible: {
    twoWay: true,
    type: Boolean,
    default: true
  },
  options: {
    twoWay: false,
    type: Object,
    default: function _default() {
      return {};
    }
  }
};

var events = ['closeclick', 'status_changed'];

exports.default = {
  mixins: [_mountableMixin2.default],
  props: (0, _mapElementFactory.mappedPropsToVueProps)(props),
  replace: false, // necessary for css styles
  methods: {
    resize: function resize() {
      if (this.$panoObject) {
        google.maps.event.trigger(this.$panoObject, 'resize');
      }
    }
  },

  provide: function provide() {
    var _this = this;

    var promise = new Promise(function (resolve, reject) {
      _this.$panoPromiseDeferred = { resolve: resolve, reject: reject };
    });
    return {
      '$panoPromise': promise,
      '$mapPromise': promise // so that we can use it with markers
    };
  },


  computed: {
    finalLat: function finalLat() {
      return this.position && typeof this.position.lat === 'function' ? this.position.lat() : this.position.lat;
    },
    finalLng: function finalLng() {
      return this.position && typeof this.position.lng === 'function' ? this.position.lng() : this.position.lng;
    },
    finalLatLng: function finalLatLng() {
      return {
        lat: this.finalLat,
        lng: this.finalLng
      };
    }
  },

  watch: {
    zoom: function zoom(_zoom) {
      if (this.$panoObject) {
        this.$panoObject.setZoom(_zoom);
      }
    }
  },

  mounted: function mounted() {
    var _this2 = this;

    return this.$gmapApiPromiseLazy().then(function () {
      // getting the DOM element where to create the map
      var element = _this2.$refs['vue-street-view-pano'];

      // creating the map
      var options = _extends({}, _this2.options, (0, _bindProps.getPropsValues)(_this2, props));
      delete options.options;

      _this2.$panoObject = new google.maps.StreetViewPanorama(element, options);

      // binding properties (two and one way)
      (0, _bindProps.bindProps)(_this2, _this2.$panoObject, props);
      // binding events
      (0, _bindEvents2.default)(_this2, _this2.$panoObject, events);

      // manually trigger position
      (0, _TwoWayBindingWrapper2.default)(function (increment, decrement, shouldUpdate) {
        // Panos take a while to load
        increment();

        _this2.$panoObject.addListener('position_changed', function () {
          if (shouldUpdate()) {
            _this2.$emit('position_changed', _this2.$panoObject.getPosition());
          }
          decrement();
        });

        (0, _WatchPrimitiveProperties2.default)(_this2, ['finalLat', 'finalLng'], function updateCenter() {
          increment();
          _this2.$panoObject.setPosition(_this2.finalLatLng);
        });
      });

      _this2.$panoPromiseDeferred.resolve(_this2.$panoObject);

      return _this2.$panoPromise;
    }).catch(function (error) {
      throw error;
    });
  }
};

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_vue_loader_lib_index_js_vue_loader_options_streetViewPanorama_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-street-view-pano-container{position:relative}.vue-street-view-pano-container .vue-street-view-pano{left:0;right:0;top:0;bottom:0;position:absolute}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _placeInput_vue_vue_type_template_id_13bfbbee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _placeInputImpl_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _placeInput_vue_vue_type_template_id_13bfbbee___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _placeInput_vue_vue_type_template_id_13bfbbee___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  "405a8ec2"
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _bindProps = __webpack_require__(7);

var _simulateArrowDown = __webpack_require__(24);

var _simulateArrowDown2 = _interopRequireDefault(_simulateArrowDown);

var _mapElementFactory = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mappedProps = {
  bounds: {
    type: Object
  },
  componentRestrictions: {
    type: Object,
    // Do not bind -- must check for undefined
    // in the property
    noBind: true
  },
  types: {
    type: Array,
    default: function _default() {
      return [];
    }
  }
};

var props = {
  selectFirstOnEnter: {
    required: false,
    type: Boolean,
    default: false
  },
  options: {
    type: Object
  }
};

exports.default = {
  mounted: function mounted() {
    var _this = this;

    this.$gmapApiPromiseLazy().then(function () {
      if (_this.selectFirstOnEnter) {
        (0, _simulateArrowDown2.default)(_this.$refs.input);
      }

      if (typeof google.maps.places.Autocomplete !== 'function') {
        throw new Error('google.maps.places.Autocomplete is undefined. Did you add \'places\' to libraries when loading Google Maps?');
      }

      /* eslint-disable no-unused-vars */
      var finalOptions = _extends({}, (0, _bindProps.getPropsValues)(_this, mappedProps), _this.options);

      _this.$autocomplete = new google.maps.places.Autocomplete(_this.$refs.input, finalOptions);
      (0, _bindProps.bindProps)(_this, _this.$autocomplete, mappedProps);

      _this.$watch('componentRestrictions', function (v) {
        if (v !== undefined) {
          _this.$autocomplete.setComponentRestrictions(v);
        }
      });

      // Not using `bindEvents` because we also want
      // to return the result of `getPlace()`
      _this.$autocomplete.addListener('place_changed', function () {
        _this.$emit('place_changed', _this.$autocomplete.getPlace());
      });
    });
  },

  props: _extends({}, (0, _mapElementFactory.mappedPropsToVueProps)(mappedProps), props)
};

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(25);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(26);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js
 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      Component = await Component();
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: '/',
      env: {}
    }; // Only set once

    if ( true && context.req) {
      app.context.req = context.req;
    }

    if ( true && context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = formatUrl(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  let path = decodeURI(window.location.pathname);

  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  } // To get matched with sanitized router.base add trailing slash


  if (base && (path.endsWith('/') ? path : path + '/').startsWith(base)) {
    path = path.slice(base.length);
  }

  return (path || '/') + window.location.search + window.location.hash;
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */


function formatUrl(url, query) {
  let protocol;
  const index = url.indexOf('://');

  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.startsWith('//')) {
    url = url.substring(2);
  }

  let parts = url.split('/');
  let result = (protocol ? protocol + '://' : '//') + parts.shift();
  let path = parts.join('/');

  if (path === '' && parts.length === 1) {
    result += '/';
  }

  let hash;
  parts = path.split('#');

  if (parts.length === 2) {
    [path, hash] = parts;
  }

  result += path ? '/' + path : '';

  if (query && JSON.stringify(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }

  result += hash ? '#' + hash : '';
  return result;
}
/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */


function formatQuery(query) {
  return Object.keys(query).sort().map(key => {
    const val = query[key];

    if (val == null) {
      return '';
    }

    if (Array.isArray(val)) {
      return val.slice().map(val2 => [key, '=', val2].join('')).join('&');
    }

    return key + '=' + val;
  }).filter(Boolean).join('&');
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/').replace(':/', '://');
}
function stripTrailingSlash(path) {
  return path.replace(/\/+$/, '') || '/';
}
function isSamePath(p1, p2) {
  return stripTrailingSlash(p1) === stripTrailingSlash(p2);
}
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this.$ssrContext.nuxt.fetch.length; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch.push(this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(27);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(16);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(12);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(8);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const Pages = getMatchedComponents(to); // Scroll to the top of the page if...

  if ( // One of the children set `scrollToTop`
  Pages.some(Page => Page.options.scrollToTop) || // scrollToTop set in only page without children
  Pages.length < 2 && Pages.every(Page => Page.options.scrollToTop !== false)) {
    position = {
      x: 0,
      y: 0
    };
  } // savedPosition is only available for popstate navigations (back button)


  if (savedPosition) {
    position = savedPosition;
  }

  const nuxt = window.$nuxt;

  if ( // Route hash changes
  to.path === from.path && to.hash !== from.hash || // Initial load (vuejs/vue-router#3199)
  to === from) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _628df67f = () => interopDefault(__webpack_require__.e(/* import() | pages/about */ 1).then(__webpack_require__.bind(null, 160)));

const _e974b076 = () => interopDefault(__webpack_require__.e(/* import() | pages/creators */ 2).then(__webpack_require__.bind(null, 157)));

const _34933738 = () => interopDefault(__webpack_require__.e(/* import() | pages/deigmata/index */ 6).then(__webpack_require__.bind(null, 161)));

const _4856b3f9 = () => interopDefault(__webpack_require__.e(/* import() | pages/files/index */ 8).then(__webpack_require__.bind(null, 162)));

const _e864f222 = () => interopDefault(__webpack_require__.e(/* import() | pages/pictures/index */ 47).then(__webpack_require__.bind(null, 163)));

const _ac7a3b32 = () => interopDefault(__webpack_require__.e(/* import() | pages/prwtokola/index */ 51).then(__webpack_require__.bind(null, 158)));

const _454a8474 = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/ct-eidh/index */ 14).then(__webpack_require__.bind(null, 164)));

const _af4cdc12 = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/ct-press-threats/index */ 20).then(__webpack_require__.bind(null, 165)));

const _d1a221c4 = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/deigma-ornithopanida/index */ 42).then(__webpack_require__.bind(null, 166)));

const _956f39a8 = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/deigma-ornithopanida-x-eidh/index */ 26).then(__webpack_require__.bind(null, 167)));

const _16389f51 = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/deigma-ornithopanida-x-press-threats/index */ 32).then(__webpack_require__.bind(null, 168)));

const _9a4bb55e = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/eventBus */ 46).then(__webpack_require__.bind(null, 101)));

const _655a2775 = () => interopDefault(__webpack_require__.e(/* import() | pages/prwtokola/new */ 52).then(__webpack_require__.bind(null, 169)));

const _27b2ef01 = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/ct-eidh/index */ 57).then(__webpack_require__.bind(null, 170)));

const _46d4d9c8 = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/ct-press-threats/index */ 63).then(__webpack_require__.bind(null, 171)));

const _5ef0b9e6 = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/deigma-thhlastikwn/index */ 85).then(__webpack_require__.bind(null, 172)));

const _908b3138 = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/deigma-thhlastikwn-x-eidh/index */ 69).then(__webpack_require__.bind(null, 173)));

const _49dbda19 = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/deigma-thhlastikwn-x-press-threats/index */ 75).then(__webpack_require__.bind(null, 174)));

const _d081df14 = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/eventBus */ 89).then(__webpack_require__.bind(null, 103)));

const _d4c162d8 = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/ct-eidh/new */ 15).then(__webpack_require__.bind(null, 175)));

const _15f77b05 = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/ct-press-threats/new */ 21).then(__webpack_require__.bind(null, 176)));

const _6139d50c = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/deigma-ornithopanida-x-eidh/new */ 27).then(__webpack_require__.bind(null, 177)));

const _6f0e16df = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/deigma-ornithopanida-x-press-threats/new */ 33).then(__webpack_require__.bind(null, 178)));

const _68e3b3a8 = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/deigma-ornithopanida/map */ 43).then(__webpack_require__.bind(null, 179)));

const _b6001428 = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/deigma-ornithopanida/new */ 44).then(__webpack_require__.bind(null, 180)));

const _6138928f = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/ct-eidh/new */ 58).then(__webpack_require__.bind(null, 181)));

const _031b816a = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/ct-press-threats/new */ 64).then(__webpack_require__.bind(null, 182)));

const _7f0e709c = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/deigma-thhlastikwn-x-eidh/new */ 70).then(__webpack_require__.bind(null, 183)));

const _665163a7 = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/deigma-thhlastikwn-x-press-threats/new */ 76).then(__webpack_require__.bind(null, 184)));

const _eaacdf20 = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/deigma-thhlastikwn/map */ 86).then(__webpack_require__.bind(null, 185)));

const _72745a98 = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/deigma-thhlastikwn/new */ 87).then(__webpack_require__.bind(null, 186)));

const _87aab3aa = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/ct-eidh/dynamic-search/page/_number/index */ 13).then(__webpack_require__.bind(null, 187)));

const _4817cb46 = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/ct-eidh/search/page/_number/index */ 16).then(__webpack_require__.bind(null, 188)));

const _178d8bda = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/ct-press-threats/dynamic-search/page/_number/index */ 19).then(__webpack_require__.bind(null, 189)));

const _19d31f0c = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/ct-press-threats/search/page/_number/index */ 22).then(__webpack_require__.bind(null, 190)));

const _f9fc57f6 = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/deigma-ornithopanida-x-eidh/dynamic-search/page/_number/index */ 25).then(__webpack_require__.bind(null, 191)));

const _59c87b92 = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/deigma-ornithopanida-x-eidh/search/page/_number/index */ 28).then(__webpack_require__.bind(null, 192)));

const _02035340 = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/deigma-ornithopanida-x-press-threats/dynamic-search/page/_number/index */ 31).then(__webpack_require__.bind(null, 193)));

const _2de1ac72 = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/deigma-ornithopanida-x-press-threats/search/page/_number/index */ 34).then(__webpack_require__.bind(null, 194)));

const _56b36c5a = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/deigma-ornithopanida/dynamic-search/page/_number/index */ 41).then(__webpack_require__.bind(null, 195)));

const _4081e605 = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/deigma-ornithopanida/search/page/_number/index */ 45).then(__webpack_require__.bind(null, 196)));

const _73a9e4e0 = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/ct-eidh/dynamic-search/page/_number/index */ 56).then(__webpack_require__.bind(null, 197)));

const _615e927c = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/ct-eidh/search/page/_number/index */ 59).then(__webpack_require__.bind(null, 198)));

const _3b0aa615 = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/ct-press-threats/dynamic-search/page/_number/index */ 62).then(__webpack_require__.bind(null, 199)));

const _4fdfa447 = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/ct-press-threats/search/page/_number/index */ 65).then(__webpack_require__.bind(null, 200)));

const _3ddd48cd = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/deigma-thhlastikwn-x-eidh/dynamic-search/page/_number/index */ 68).then(__webpack_require__.bind(null, 201)));

const _56fc7eff = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/deigma-thhlastikwn-x-eidh/search/page/_number/index */ 71).then(__webpack_require__.bind(null, 202)));

const _6e2abf78 = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/deigma-thhlastikwn-x-press-threats/dynamic-search/page/_number/index */ 74).then(__webpack_require__.bind(null, 203)));

const _63165eac = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/deigma-thhlastikwn-x-press-threats/search/page/_number/index */ 77).then(__webpack_require__.bind(null, 204)));

const _6645b3ea = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/deigma-thhlastikwn/dynamic-search/page/_number/index */ 84).then(__webpack_require__.bind(null, 205)));

const _6b947a3d = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/deigma-thhlastikwn/search/page/_number/index */ 88).then(__webpack_require__.bind(null, 206)));

const _80bca866 = () => interopDefault(__webpack_require__.e(/* import() | pages/deigmata/dynamic-search/page/_number/index */ 5).then(__webpack_require__.bind(null, 207)));

const _28d3e1ff = () => interopDefault(__webpack_require__.e(/* import() | pages/deigmata/search/page/_number/index */ 7).then(__webpack_require__.bind(null, 208)));

const _0b9a4a6c = () => interopDefault(__webpack_require__.e(/* import() | pages/files/search/page/_number/index */ 9).then(__webpack_require__.bind(null, 209)));

const _baa1d9d8 = () => interopDefault(__webpack_require__.e(/* import() | pages/pictures/search/page/_number/index */ 48).then(__webpack_require__.bind(null, 210)));

const _4f9e509c = () => interopDefault(__webpack_require__.e(/* import() | pages/prwtokola/search/page/_number/index */ 53).then(__webpack_require__.bind(null, 211)));

const _418b3b14 = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/ct-eidh/_id/index */ 12).then(__webpack_require__.bind(null, 212)));

const _876344fa = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/ct-press-threats/_id/index */ 18).then(__webpack_require__.bind(null, 213)));

const _d929f524 = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/deigma-ornithopanida-x-eidh/_id/index */ 24).then(__webpack_require__.bind(null, 214)));

const _2b38cf2e = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/deigma-ornithopanida-x-press-threats/_id/index */ 30).then(__webpack_require__.bind(null, 215)));

const _804fbe88 = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/deigma-ornithopanida/_id/index */ 37).then(__webpack_require__.bind(null, 216)));

const _9f50d28e = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/ct-eidh/_id/index */ 55).then(__webpack_require__.bind(null, 217)));

const _7ce36904 = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/ct-press-threats/_id/index */ 61).then(__webpack_require__.bind(null, 218)));

const _7b2ae436 = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/deigma-thhlastikwn-x-eidh/_id/index */ 67).then(__webpack_require__.bind(null, 219)));

const _5a044abe = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/deigma-thhlastikwn-x-press-threats/_id/index */ 73).then(__webpack_require__.bind(null, 220)));

const _9e245a18 = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/deigma-thhlastikwn/_id/index */ 80).then(__webpack_require__.bind(null, 221)));

const _529335b8 = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/ct-eidh/_id/edit */ 11).then(__webpack_require__.bind(null, 222)));

const _1cba8969 = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/ct-press-threats/_id/edit */ 17).then(__webpack_require__.bind(null, 223)));

const _f2788fc4 = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/deigma-ornithopanida-x-eidh/_id/edit */ 23).then(__webpack_require__.bind(null, 224)));

const _3f3f59c3 = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/deigma-ornithopanida-x-press-threats/_id/edit */ 29).then(__webpack_require__.bind(null, 225)));

const _8c8209e0 = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/deigma-ornithopanida/_id/edit */ 35).then(__webpack_require__.bind(null, 226)));

const _30ea8d81 = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/deigma-ornithopanida/_id/files/index */ 36).then(__webpack_require__.bind(null, 227)));

const _4d863f32 = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/deigma-ornithopanida/_id/pictures/index */ 38).then(__webpack_require__.bind(null, 228)));

const _c0be0a82 = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/deigma-ornithopanida/_id/x-eidh/index */ 39).then(__webpack_require__.bind(null, 229)));

const _327445c4 = () => interopDefault(__webpack_require__.e(/* import() | pages/ornithopanida/deigma-ornithopanida/_id/x-press-threats/index */ 40).then(__webpack_require__.bind(null, 230)));

const _66aa5173 = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/ct-eidh/_id/edit */ 54).then(__webpack_require__.bind(null, 231)));

const _39d11fe4 = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/ct-press-threats/_id/edit */ 60).then(__webpack_require__.bind(null, 232)));

const _3ba8e056 = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/deigma-thhlastikwn-x-eidh/_id/edit */ 66).then(__webpack_require__.bind(null, 233)));

const _25b7f08b = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/deigma-thhlastikwn-x-press-threats/_id/edit */ 72).then(__webpack_require__.bind(null, 234)));

const _3ae3bc50 = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/deigma-thhlastikwn/_id/edit */ 78).then(__webpack_require__.bind(null, 235)));

const _18aa6c49 = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/deigma-thhlastikwn/_id/files/index */ 79).then(__webpack_require__.bind(null, 236)));

const _6b39a6c2 = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/deigma-thhlastikwn/_id/pictures/index */ 81).then(__webpack_require__.bind(null, 237)));

const _a0461612 = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/deigma-thhlastikwn/_id/x-eidh/index */ 82).then(__webpack_require__.bind(null, 238)));

const _1173e1e6 = () => interopDefault(__webpack_require__.e(/* import() | pages/thhlastika/deigma-thhlastikwn/_id/x-press-threats/index */ 83).then(__webpack_require__.bind(null, 239)));

const _e7b5f194 = () => interopDefault(__webpack_require__.e(/* import() | pages/deigmata/_id/index */ 4).then(__webpack_require__.bind(null, 240)));

const _7755d313 = () => interopDefault(__webpack_require__.e(/* import() | pages/prwtokola/_id/index */ 50).then(__webpack_require__.bind(null, 241)));

const _3d434554 = () => interopDefault(__webpack_require__.e(/* import() | pages/deigmata/_id/edit */ 3).then(__webpack_require__.bind(null, 242)));

const _a1b3bc4e = () => interopDefault(__webpack_require__.e(/* import() | pages/prwtokola/_id/edit */ 49).then(__webpack_require__.bind(null, 243)));

const _fb745d78 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 10).then(__webpack_require__.bind(null, 159))); // TODO: remove in Nuxt 3


const emptyFn = () => {};

const originalPush = external_vue_router_default.a.prototype.push;

external_vue_router_default.a.prototype.push = function push(location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort);
};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/about",
    component: _628df67f,
    name: "about"
  }, {
    path: "/creators",
    component: _e974b076,
    name: "creators"
  }, {
    path: "/deigmata",
    component: _34933738,
    name: "deigmata"
  }, {
    path: "/files",
    component: _4856b3f9,
    name: "files"
  }, {
    path: "/pictures",
    component: _e864f222,
    name: "pictures"
  }, {
    path: "/prwtokola",
    component: _ac7a3b32,
    name: "prwtokola"
  }, {
    path: "/ornithopanida/ct-eidh",
    component: _454a8474,
    name: "ornithopanida-ct-eidh"
  }, {
    path: "/ornithopanida/ct-press-threats",
    component: _af4cdc12,
    name: "ornithopanida-ct-press-threats"
  }, {
    path: "/ornithopanida/deigma-ornithopanida",
    component: _d1a221c4,
    name: "ornithopanida-deigma-ornithopanida"
  }, {
    path: "/ornithopanida/deigma-ornithopanida-x-eidh",
    component: _956f39a8,
    name: "ornithopanida-deigma-ornithopanida-x-eidh"
  }, {
    path: "/ornithopanida/deigma-ornithopanida-x-press-threats",
    component: _16389f51,
    name: "ornithopanida-deigma-ornithopanida-x-press-threats"
  }, {
    path: "/ornithopanida/eventBus",
    component: _9a4bb55e,
    name: "ornithopanida-eventBus"
  }, {
    path: "/prwtokola/new",
    component: _655a2775,
    name: "prwtokola-new"
  }, {
    path: "/thhlastika/ct-eidh",
    component: _27b2ef01,
    name: "thhlastika-ct-eidh"
  }, {
    path: "/thhlastika/ct-press-threats",
    component: _46d4d9c8,
    name: "thhlastika-ct-press-threats"
  }, {
    path: "/thhlastika/deigma-thhlastikwn",
    component: _5ef0b9e6,
    name: "thhlastika-deigma-thhlastikwn"
  }, {
    path: "/thhlastika/deigma-thhlastikwn-x-eidh",
    component: _908b3138,
    name: "thhlastika-deigma-thhlastikwn-x-eidh"
  }, {
    path: "/thhlastika/deigma-thhlastikwn-x-press-threats",
    component: _49dbda19,
    name: "thhlastika-deigma-thhlastikwn-x-press-threats"
  }, {
    path: "/thhlastika/eventBus",
    component: _d081df14,
    name: "thhlastika-eventBus"
  }, {
    path: "/ornithopanida/ct-eidh/new",
    component: _d4c162d8,
    name: "ornithopanida-ct-eidh-new"
  }, {
    path: "/ornithopanida/ct-press-threats/new",
    component: _15f77b05,
    name: "ornithopanida-ct-press-threats-new"
  }, {
    path: "/ornithopanida/deigma-ornithopanida-x-eidh/new",
    component: _6139d50c,
    name: "ornithopanida-deigma-ornithopanida-x-eidh-new"
  }, {
    path: "/ornithopanida/deigma-ornithopanida-x-press-threats/new",
    component: _6f0e16df,
    name: "ornithopanida-deigma-ornithopanida-x-press-threats-new"
  }, {
    path: "/ornithopanida/deigma-ornithopanida/map",
    component: _68e3b3a8,
    name: "ornithopanida-deigma-ornithopanida-map"
  }, {
    path: "/ornithopanida/deigma-ornithopanida/new",
    component: _b6001428,
    name: "ornithopanida-deigma-ornithopanida-new"
  }, {
    path: "/thhlastika/ct-eidh/new",
    component: _6138928f,
    name: "thhlastika-ct-eidh-new"
  }, {
    path: "/thhlastika/ct-press-threats/new",
    component: _031b816a,
    name: "thhlastika-ct-press-threats-new"
  }, {
    path: "/thhlastika/deigma-thhlastikwn-x-eidh/new",
    component: _7f0e709c,
    name: "thhlastika-deigma-thhlastikwn-x-eidh-new"
  }, {
    path: "/thhlastika/deigma-thhlastikwn-x-press-threats/new",
    component: _665163a7,
    name: "thhlastika-deigma-thhlastikwn-x-press-threats-new"
  }, {
    path: "/thhlastika/deigma-thhlastikwn/map",
    component: _eaacdf20,
    name: "thhlastika-deigma-thhlastikwn-map"
  }, {
    path: "/thhlastika/deigma-thhlastikwn/new",
    component: _72745a98,
    name: "thhlastika-deigma-thhlastikwn-new"
  }, {
    path: "/ornithopanida/ct-eidh/dynamic-search/page/:number",
    component: _87aab3aa,
    name: "ornithopanida-ct-eidh-dynamic-search-page-number"
  }, {
    path: "/ornithopanida/ct-eidh/search/page/:number",
    component: _4817cb46,
    name: "ornithopanida-ct-eidh-search-page-number"
  }, {
    path: "/ornithopanida/ct-press-threats/dynamic-search/page/:number",
    component: _178d8bda,
    name: "ornithopanida-ct-press-threats-dynamic-search-page-number"
  }, {
    path: "/ornithopanida/ct-press-threats/search/page/:number",
    component: _19d31f0c,
    name: "ornithopanida-ct-press-threats-search-page-number"
  }, {
    path: "/ornithopanida/deigma-ornithopanida-x-eidh/dynamic-search/page/:number",
    component: _f9fc57f6,
    name: "ornithopanida-deigma-ornithopanida-x-eidh-dynamic-search-page-number"
  }, {
    path: "/ornithopanida/deigma-ornithopanida-x-eidh/search/page/:number",
    component: _59c87b92,
    name: "ornithopanida-deigma-ornithopanida-x-eidh-search-page-number"
  }, {
    path: "/ornithopanida/deigma-ornithopanida-x-press-threats/dynamic-search/page/:number",
    component: _02035340,
    name: "ornithopanida-deigma-ornithopanida-x-press-threats-dynamic-search-page-number"
  }, {
    path: "/ornithopanida/deigma-ornithopanida-x-press-threats/search/page/:number",
    component: _2de1ac72,
    name: "ornithopanida-deigma-ornithopanida-x-press-threats-search-page-number"
  }, {
    path: "/ornithopanida/deigma-ornithopanida/dynamic-search/page/:number",
    component: _56b36c5a,
    name: "ornithopanida-deigma-ornithopanida-dynamic-search-page-number"
  }, {
    path: "/ornithopanida/deigma-ornithopanida/search/page/:number",
    component: _4081e605,
    name: "ornithopanida-deigma-ornithopanida-search-page-number"
  }, {
    path: "/thhlastika/ct-eidh/dynamic-search/page/:number",
    component: _73a9e4e0,
    name: "thhlastika-ct-eidh-dynamic-search-page-number"
  }, {
    path: "/thhlastika/ct-eidh/search/page/:number",
    component: _615e927c,
    name: "thhlastika-ct-eidh-search-page-number"
  }, {
    path: "/thhlastika/ct-press-threats/dynamic-search/page/:number",
    component: _3b0aa615,
    name: "thhlastika-ct-press-threats-dynamic-search-page-number"
  }, {
    path: "/thhlastika/ct-press-threats/search/page/:number",
    component: _4fdfa447,
    name: "thhlastika-ct-press-threats-search-page-number"
  }, {
    path: "/thhlastika/deigma-thhlastikwn-x-eidh/dynamic-search/page/:number",
    component: _3ddd48cd,
    name: "thhlastika-deigma-thhlastikwn-x-eidh-dynamic-search-page-number"
  }, {
    path: "/thhlastika/deigma-thhlastikwn-x-eidh/search/page/:number",
    component: _56fc7eff,
    name: "thhlastika-deigma-thhlastikwn-x-eidh-search-page-number"
  }, {
    path: "/thhlastika/deigma-thhlastikwn-x-press-threats/dynamic-search/page/:number",
    component: _6e2abf78,
    name: "thhlastika-deigma-thhlastikwn-x-press-threats-dynamic-search-page-number"
  }, {
    path: "/thhlastika/deigma-thhlastikwn-x-press-threats/search/page/:number",
    component: _63165eac,
    name: "thhlastika-deigma-thhlastikwn-x-press-threats-search-page-number"
  }, {
    path: "/thhlastika/deigma-thhlastikwn/dynamic-search/page/:number",
    component: _6645b3ea,
    name: "thhlastika-deigma-thhlastikwn-dynamic-search-page-number"
  }, {
    path: "/thhlastika/deigma-thhlastikwn/search/page/:number",
    component: _6b947a3d,
    name: "thhlastika-deigma-thhlastikwn-search-page-number"
  }, {
    path: "/deigmata/dynamic-search/page/:number",
    component: _80bca866,
    name: "deigmata-dynamic-search-page-number"
  }, {
    path: "/deigmata/search/page/:number",
    component: _28d3e1ff,
    name: "deigmata-search-page-number"
  }, {
    path: "/files/search/page/:number",
    component: _0b9a4a6c,
    name: "files-search-page-number"
  }, {
    path: "/pictures/search/page/:number",
    component: _baa1d9d8,
    name: "pictures-search-page-number"
  }, {
    path: "/prwtokola/search/page/:number",
    component: _4f9e509c,
    name: "prwtokola-search-page-number"
  }, {
    path: "/ornithopanida/ct-eidh/:id",
    component: _418b3b14,
    name: "ornithopanida-ct-eidh-id"
  }, {
    path: "/ornithopanida/ct-press-threats/:id",
    component: _876344fa,
    name: "ornithopanida-ct-press-threats-id"
  }, {
    path: "/ornithopanida/deigma-ornithopanida-x-eidh/:id",
    component: _d929f524,
    name: "ornithopanida-deigma-ornithopanida-x-eidh-id"
  }, {
    path: "/ornithopanida/deigma-ornithopanida-x-press-threats/:id",
    component: _2b38cf2e,
    name: "ornithopanida-deigma-ornithopanida-x-press-threats-id"
  }, {
    path: "/ornithopanida/deigma-ornithopanida/:id",
    component: _804fbe88,
    name: "ornithopanida-deigma-ornithopanida-id"
  }, {
    path: "/thhlastika/ct-eidh/:id",
    component: _9f50d28e,
    name: "thhlastika-ct-eidh-id"
  }, {
    path: "/thhlastika/ct-press-threats/:id",
    component: _7ce36904,
    name: "thhlastika-ct-press-threats-id"
  }, {
    path: "/thhlastika/deigma-thhlastikwn-x-eidh/:id",
    component: _7b2ae436,
    name: "thhlastika-deigma-thhlastikwn-x-eidh-id"
  }, {
    path: "/thhlastika/deigma-thhlastikwn-x-press-threats/:id",
    component: _5a044abe,
    name: "thhlastika-deigma-thhlastikwn-x-press-threats-id"
  }, {
    path: "/thhlastika/deigma-thhlastikwn/:id",
    component: _9e245a18,
    name: "thhlastika-deigma-thhlastikwn-id"
  }, {
    path: "/ornithopanida/ct-eidh/:id?/edit",
    component: _529335b8,
    name: "ornithopanida-ct-eidh-id-edit"
  }, {
    path: "/ornithopanida/ct-press-threats/:id?/edit",
    component: _1cba8969,
    name: "ornithopanida-ct-press-threats-id-edit"
  }, {
    path: "/ornithopanida/deigma-ornithopanida-x-eidh/:id?/edit",
    component: _f2788fc4,
    name: "ornithopanida-deigma-ornithopanida-x-eidh-id-edit"
  }, {
    path: "/ornithopanida/deigma-ornithopanida-x-press-threats/:id?/edit",
    component: _3f3f59c3,
    name: "ornithopanida-deigma-ornithopanida-x-press-threats-id-edit"
  }, {
    path: "/ornithopanida/deigma-ornithopanida/:id?/edit",
    component: _8c8209e0,
    name: "ornithopanida-deigma-ornithopanida-id-edit"
  }, {
    path: "/ornithopanida/deigma-ornithopanida/:id?/files",
    component: _30ea8d81,
    name: "ornithopanida-deigma-ornithopanida-id-files"
  }, {
    path: "/ornithopanida/deigma-ornithopanida/:id?/pictures",
    component: _4d863f32,
    name: "ornithopanida-deigma-ornithopanida-id-pictures"
  }, {
    path: "/ornithopanida/deigma-ornithopanida/:id?/x-eidh",
    component: _c0be0a82,
    name: "ornithopanida-deigma-ornithopanida-id-x-eidh"
  }, {
    path: "/ornithopanida/deigma-ornithopanida/:id?/x-press-threats",
    component: _327445c4,
    name: "ornithopanida-deigma-ornithopanida-id-x-press-threats"
  }, {
    path: "/thhlastika/ct-eidh/:id?/edit",
    component: _66aa5173,
    name: "thhlastika-ct-eidh-id-edit"
  }, {
    path: "/thhlastika/ct-press-threats/:id?/edit",
    component: _39d11fe4,
    name: "thhlastika-ct-press-threats-id-edit"
  }, {
    path: "/thhlastika/deigma-thhlastikwn-x-eidh/:id?/edit",
    component: _3ba8e056,
    name: "thhlastika-deigma-thhlastikwn-x-eidh-id-edit"
  }, {
    path: "/thhlastika/deigma-thhlastikwn-x-press-threats/:id?/edit",
    component: _25b7f08b,
    name: "thhlastika-deigma-thhlastikwn-x-press-threats-id-edit"
  }, {
    path: "/thhlastika/deigma-thhlastikwn/:id?/edit",
    component: _3ae3bc50,
    name: "thhlastika-deigma-thhlastikwn-id-edit"
  }, {
    path: "/thhlastika/deigma-thhlastikwn/:id?/files",
    component: _18aa6c49,
    name: "thhlastika-deigma-thhlastikwn-id-files"
  }, {
    path: "/thhlastika/deigma-thhlastikwn/:id?/pictures",
    component: _6b39a6c2,
    name: "thhlastika-deigma-thhlastikwn-id-pictures"
  }, {
    path: "/thhlastika/deigma-thhlastikwn/:id?/x-eidh",
    component: _a0461612,
    name: "thhlastika-deigma-thhlastikwn-id-x-eidh"
  }, {
    path: "/thhlastika/deigma-thhlastikwn/:id?/x-press-threats",
    component: _1173e1e6,
    name: "thhlastika-deigma-thhlastikwn-id-x-press-threats"
  }, {
    path: "/deigmata/:id",
    component: _e7b5f194,
    name: "deigmata-id"
  }, {
    path: "/prwtokola/:id",
    component: _7755d313,
    name: "prwtokola-id"
  }, {
    path: "/deigmata/:id/edit",
    component: _3d434554,
    name: "deigmata-id-edit"
  }, {
    path: "/prwtokola/:id/edit",
    component: _a1b3bc4e,
    name: "prwtokola-id-edit"
  }, {
    path: "/",
    component: _fb745d78,
    name: "index"
  }],
  fallback: false
};
function createRouter() {
  return new external_vue_router_default.a(routerOptions);
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=template&id=99cbacd4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',[_c('v-layout',{attrs:{"align-center":"","justify-center":""}},[_c('v-flex',{staticClass:"pa-4",attrs:{"xs12":"","md10":""}},[(_vm.error.statusCode === 404)?_c('h2',{staticClass:"text-xs-center grey--text text--darken-2 mt-1 mb-4"},[_vm._v(_vm._s(_vm.title404))]):(_vm.error.statusCode === 502)?_c('h2',{staticClass:"text-xs-center grey--text text--darken-2 mt-1 mb-4"},[_vm._v(_vm._s(_vm.title502))]):_c('h2',{staticClass:"text-xs-center grey--text text--darken-2 mt-1 mb-4"},[_vm._v(_vm._s(_vm.main.titleOther))]),_vm._v(" "),_c('p',{staticClass:"subheading"},[_vm._v(" "+_vm._s(_vm.text)+" ")])])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./layouts/error.vue?vue&type=template&id=99cbacd4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var errorvue_type_script_lang_js_ = ({
  props: ['error'],
  layout: 'default',

  head() {
    return {
      title: 'Σφάλμα | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Υπήρξε κάποιο σφάλμα με αποτέλεσμα να διακοπεί η φυσιολογική ροή της εφαρμογής. Επικοινωνήστε μαζί μας. Φορέας Διαχείρισης Λίμνης Κερκίνης.'
      }]
    };
  },

  data() {
    return {
      title404: 'Σφάλμα 404 Η σελίδα δεν βρέθηκε',
      title502: 'Σφάλμα 502. Υπήρξε κάποιο σφάλμα με τον διακομιστή - server',
      titleOther: 'Υπήρξε κάποιο σφάλμα',
      text: 'Υπήρξε κάποιο πρόβλημα προσπαθώντας να γίνει πρόσβαση στον ζητούμενο σύνδεσμο. Αυτό μπορεί να προέκυψε από αδρανοποίηση του τοπικού δικτύου. Αλλιώς είτε ο σύνδεσμος μπορεί να μην υπάρχει πλέον ή έγινε κάποιο λάθος κατά την καταχώρησή του, παρακαλούμε σιγουρευτείτε ότι ο σύνδεσμος που χρησημοποιήσατε είναι ο σωστός. Μπορείτε πάντοτε να συνεχίσετε την πλοήγησή σας χρησημοποιώντας το μενού.'
    };
  }

});
// CONCATENATED MODULE: ./layouts/error.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_errorvue_type_script_lang_js_ = (errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./layouts/error.vue





/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "233aecce"
  
)

/* harmony default export */ var layouts_error = (error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: layouts_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(layouts_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function injectStyles (context) {
  
  var style0 = __webpack_require__(32)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  injectStyles,
  null,
  "47c5ef71"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./assets/style/app.styl
var style_app = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=f9cb84cc&
var defaultvue_type_template_id_f9cb84cc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',[_c('v-navigation-drawer',{attrs:{"temporary":"","app":"","dark":""},model:{value:(_vm.drawer),callback:function ($$v) {_vm.drawer=$$v},expression:"drawer"}},[_c('v-list',[_vm._l((_vm.items),function(item,i){return _c('v-list-tile',{key:i,attrs:{"to":item.to,"nuxt":"","exact":"","active-class":"green--text text--darken-1"}},[_c('v-list-tile-action',[_c('v-icon',{domProps:{"innerHTML":_vm._s(item.icon)}})],1),_vm._v(" "),_c('v-list-tile-content',[_c('v-list-tile-title',{domProps:{"textContent":_vm._s(item.title)}})],1)],1)}),_vm._v(" "),_c('v-list-group',{attrs:{"prepend-icon":_vm.groupDeigmata.icon,"no-action":"","active-class":"green--text text--darken-1"}},[_c('v-list-tile',{attrs:{"slot":"activator","active-class":"green--text text--darken-1"},slot:"activator"},[_c('v-list-tile-title',[_vm._v(_vm._s(_vm.groupDeigmata.title))])],1),_vm._v(" "),_vm._l((_vm.groupDeigmata.pages),function(page,i){return _c('v-list-tile',{key:i,attrs:{"to":page.to,"nuxt":"","exact":"","active-class":"green--text text--darken-1"}},[_c('v-list-tile-content',[_c('v-list-tile-title',{domProps:{"textContent":_vm._s(page.title)}})],1),_vm._v(" "),_c('v-list-tile-action',[_c('v-icon',{domProps:{"innerHTML":_vm._s(page.icon)}})],1)],1)})],2),_vm._v(" "),_c('v-list-group',{attrs:{"prepend-icon":_vm.groupPrwtokola.icon,"no-action":"","active-class":"green--text text--darken-1"}},[_c('v-list-tile',{attrs:{"slot":"activator","active-class":"green--text text--darken-1"},slot:"activator"},[_c('v-list-tile-title',[_vm._v(_vm._s(_vm.groupPrwtokola.title))])],1),_vm._v(" "),_vm._l((_vm.groupPrwtokola.pages),function(page,i){return _c('v-list-tile',{key:i,attrs:{"to":page.to,"nuxt":"","exact":"","active-class":"green--text text--darken-1"}},[_c('v-list-tile-content',[_c('v-list-tile-title',{domProps:{"textContent":_vm._s(page.title)}})],1),_vm._v(" "),_c('v-list-tile-action',[_c('v-icon',{domProps:{"innerHTML":_vm._s(page.icon)}})],1)],1)})],2),_vm._v(" "),_c('v-list-group',{attrs:{"prepend-icon":_vm.groupThhlastika.icon,"no-action":"","active-class":"green--text text--darken-1"}},[_c('v-list-tile',{attrs:{"slot":"activator","active-class":"green--text text--darken-1"},slot:"activator"},[_c('v-list-tile-title',[_vm._v(_vm._s(_vm.groupThhlastika.title))])],1),_vm._v(" "),_vm._l((_vm.groupThhlastika.subGroups),function(subGroup,i){return _c('v-list-group',{key:i,attrs:{"no-action":"","sub-group":"","active-class":"green--text text--darken-1"}},[_c('v-list-tile',{attrs:{"slot":"activator","active-class":"green--text text--darken-1"},slot:"activator"},[_c('v-list-tile-title',[_vm._v(" "+_vm._s(subGroup.title)+" ")])],1),_vm._v(" "),_vm._l((subGroup.pages),function(page,i){return _c('v-list-tile',{key:i,attrs:{"to":page.to,"nuxt":"","exact":"","active-class":"green--text text--darken-1"}},[_c('v-list-tile-title',{domProps:{"textContent":_vm._s(page.title)}}),_vm._v(" "),_c('v-list-tile-action',[_c('v-icon',{domProps:{"innerHTML":_vm._s(page.icon)}})],1)],1)})],2)})],2),_vm._v(" "),_c('v-list-group',{attrs:{"prepend-icon":_vm.groupOrnithopanida.icon,"no-action":"","active-class":"green--text text--darken-1"}},[_c('v-list-tile',{attrs:{"slot":"activator","active-class":"green--text text--darken-1"},slot:"activator"},[_c('v-list-tile-title',[_vm._v(_vm._s(_vm.groupOrnithopanida.title))])],1),_vm._v(" "),_vm._l((_vm.groupOrnithopanida.subGroups),function(subGroup,i){return _c('v-list-group',{key:i,attrs:{"no-action":"","sub-group":"","active-class":"green--text text--darken-1"}},[_c('v-list-tile',{attrs:{"slot":"activator","active-class":"green--text text--darken-1"},slot:"activator"},[_c('v-list-tile-title',[_vm._v(" "+_vm._s(subGroup.title)+" ")])],1),_vm._v(" "),_vm._l((subGroup.pages),function(page,i){return _c('v-list-tile',{key:i,attrs:{"to":page.to,"nuxt":"","exact":"","active-class":"green--text text--darken-1"}},[_c('v-list-tile-title',{domProps:{"textContent":_vm._s(page.title)}}),_vm._v(" "),_c('v-list-tile-action',[_c('v-icon',{domProps:{"innerHTML":_vm._s(page.icon)}})],1)],1)})],2)})],2),_vm._v(" "),_c('v-list-group',{attrs:{"prepend-icon":_vm.groupPictures.icon,"no-action":"","active-class":"green--text text--darken-1"}},[_c('v-list-tile',{attrs:{"slot":"activator","active-class":"green--text text--darken-1"},slot:"activator"},[_c('v-list-tile-title',[_vm._v(_vm._s(_vm.groupPictures.title))])],1),_vm._v(" "),_vm._l((_vm.groupPictures.pages),function(page,i){return _c('v-list-tile',{key:i,attrs:{"to":page.to,"nuxt":"","exact":"","active-class":"green--text text--darken-1"}},[_c('v-list-tile-content',[_c('v-list-tile-title',{domProps:{"textContent":_vm._s(page.title)}})],1),_vm._v(" "),_c('v-list-tile-action',[_c('v-icon',{domProps:{"innerHTML":_vm._s(page.icon)}})],1)],1)})],2),_vm._v(" "),_c('v-list-group',{attrs:{"prepend-icon":_vm.groupFiles.icon,"no-action":"","active-class":"green--text text--darken-1"}},[_c('v-list-tile',{attrs:{"slot":"activator","active-class":"green--text text--darken-1"},slot:"activator"},[_c('v-list-tile-title',[_vm._v(_vm._s(_vm.groupFiles.title))])],1),_vm._v(" "),_vm._l((_vm.groupFiles.pages),function(page,i){return _c('v-list-tile',{key:i,attrs:{"to":page.to,"nuxt":"","exact":"","active-class":"green--text text--darken-1"}},[_c('v-list-tile-content',[_c('v-list-tile-title',{domProps:{"textContent":_vm._s(page.title)}})],1),_vm._v(" "),_c('v-list-tile-action',[_c('v-icon',{domProps:{"innerHTML":_vm._s(page.icon)}})],1)],1)})],2)],2)],1),_vm._v(" "),_c('v-toolbar',{staticStyle:{"background":"linear-gradient(90deg, rgba(102,187,106,1) 0%, rgba(165,214,167,1) 100%)"},attrs:{"app":"","color":"green lighten-1","dark":"","dense":""}},[_c('v-toolbar-side-icon',{on:{"click":function($event){_vm.drawer = !_vm.drawer}}}),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('div',{staticStyle:{"height":"100%","padding":"3px"}},[_c('nuxt-link',{attrs:{"to":"/","title":"Αρχική σελίδα"}},[_c('logo-menu',{staticStyle:{"height":"100%"}})],1)],1)],1),_vm._v(" "),_c('v-content',[_c('nuxt')],1),_vm._v(" "),_c('v-footer',[_c('span',{staticClass:"ml-2"},[_vm._v("© 2018 - "+_vm._s(_vm.currentYear))]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('div',{staticClass:"mr-2"},[_vm._v("\n      Rights reserved by \n    "),_c('nuxt-link',{attrs:{"title":"Creators of the Web App","to":"/creators"}},[_vm._v("Creators")])],1)],1)],1)}
var defaultvue_type_template_id_f9cb84cc_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=f9cb84cc&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/LogoMenu.vue?vue&type=template&id=1d93f2f4&
var LogoMenuvue_type_template_id_1d93f2f4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('img',{staticClass:"KerkiniLogo",attrs:{"alt":"Kerkini Logo","src":__webpack_require__(36)}},[])}
var LogoMenuvue_type_template_id_1d93f2f4_staticRenderFns = []


// CONCATENATED MODULE: ./components/LogoMenu.vue?vue&type=template&id=1d93f2f4&

// CONCATENATED MODULE: ./components/LogoMenu.vue

var script = {}
function LogoMenu_injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var LogoMenu_component = Object(componentNormalizer["a" /* default */])(
  script,
  LogoMenuvue_type_template_id_1d93f2f4_render,
  LogoMenuvue_type_template_id_1d93f2f4_staticRenderFns,
  false,
  LogoMenu_injectStyles,
  null,
  "8462c018"
  
)

/* harmony default export */ var LogoMenu = (LogoMenu_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  components: {
    LogoMenu: LogoMenu
  },

  data() {
    return {
      drawer: false,
      items: [{
        icon: 'apps',
        title: 'Αρχική',
        to: '/'
      }, {
        icon: 'info_outline',
        title: 'Πληροφορίες',
        to: '/about'
      }],
      groupDeigmata: {
        icon: 'select_all',
        title: 'Δείγματα',
        pages: [{
          icon: 'info_outline',
          title: 'Σχετικά',
          to: '/deigmata/'
        }, {
          icon: 'search',
          title: 'Αναζήτηση',
          to: '/deigmata/search/page/1'
        }, {
          icon: 'find_replace',
          title: 'Δυναμική αναζήτηση',
          to: '/deigmata/dynamic-search/page/1'
        }]
      },
      groupPrwtokola: {
        icon: 'chrome_reader_mode',
        title: 'Πρωτόκολα',
        pages: [{
          icon: 'info_outline',
          title: 'Σχετικά',
          to: '/prwtokola/'
        }, {
          icon: 'create_new_folder',
          title: 'Εγγραφή',
          to: '/prwtokola/new'
        }, {
          icon: 'search',
          title: 'Αναζήτηση',
          to: '/prwtokola/search/page/1'
        }]
      },
      groupFiles: {
        icon: 'file_copy',
        title: 'Αρχεία',
        pages: [{
          icon: 'info_outline',
          title: 'Σχετικά',
          to: '/files/'
        }, {
          icon: 'find_in_page',
          title: 'Αναζήτηση',
          to: '/files/search/page/1'
        }]
      },
      groupPictures: {
        icon: 'photo_library',
        title: 'Φωτογραφίες',
        pages: [{
          icon: 'info_outline',
          title: 'Σχετικά',
          to: '/pictures/'
        }, {
          icon: 'image_search',
          title: 'Αναζήτηση',
          to: '/pictures/search/page/1'
        }]
      },
      groupOrnithopanida: {
        icon: 'inbox',
        title: 'Ορνιθοπανιδα',
        subGroups: [{
          title: 'Είδη',
          pages: [{
            icon: 'info_outline',
            title: 'Σχετικά',
            to: '/ornithopanida/ct-eidh/'
          }, {
            icon: 'create_new_folder',
            title: 'Εγγραφή',
            to: '/ornithopanida/ct-eidh/new'
          }, {
            icon: 'search',
            title: 'Αναζήτηση',
            to: '/ornithopanida/ct-eidh/search/page/1'
          }, {
            icon: 'find_replace',
            title: 'Δυναμική αναζήτηση',
            to: '/ornithopanida/ct-eidh/dynamic-search/page/1'
          }]
        }, {
          title: 'Πιέσεις',
          pages: [{
            icon: 'info_outline',
            title: 'Σχετικά',
            to: '/ornithopanida/ct-press-threats/'
          }, {
            icon: 'create_new_folder',
            title: 'Εγγραφή',
            to: '/ornithopanida/ct-press-threats/new'
          }, {
            icon: 'search',
            title: 'Αναζήτηση',
            to: '/ornithopanida/ct-press-threats/search/page/1'
          }, {
            icon: 'find_replace',
            title: 'Δυναμική αναζήτηση',
            to: '/ornithopanida/ct-press-threats/dynamic-search/page/1'
          }]
        }, {
          title: 'Δείγμα Ορνιθαπανίδας',
          pages: [{
            icon: 'info_outline',
            title: 'Σχετικά',
            to: '/ornithopanida/deigma-ornithopanida/'
          }, {
            icon: 'create_new_folder',
            title: 'Εγγραφή',
            to: '/ornithopanida/deigma-ornithopanida/new'
          }, {
            icon: 'map',
            title: 'Χάρτης',
            to: '/ornithopanida/deigma-ornithopanida/map'
          }, {
            icon: 'search',
            title: 'Αναζήτηση',
            to: '/ornithopanida/deigma-ornithopanida/search/page/1'
          }, {
            icon: 'find_replace',
            title: 'Δυναμική αναζήτηση',
            to: '/ornithopanida/deigma-ornithopanida/dynamic-search/page/1'
          }]
        }, {
          title: 'Δείγμα Χ είδη',
          pages: [{
            icon: 'info_outline',
            title: 'Σχετικά',
            to: '/ornithopanida/deigma-ornithopanida-x-eidh/'
          }, {
            icon: 'create_new_folder',
            title: 'Εγγραφή',
            to: '/ornithopanida/deigma-ornithopanida-x-eidh/new'
          }, {
            icon: 'search',
            title: 'Αναζήτηση',
            to: '/ornithopanida/deigma-ornithopanida-x-eidh/search/page/1'
          }, {
            icon: 'find_replace',
            title: 'Δυναμική αναζήτηση',
            to: '/ornithopanida/deigma-ornithopanida-x-eidh/dynamic-search/page/1'
          }]
        }, {
          title: 'Δείγμα Χ πιέσεις',
          pages: [{
            icon: 'info_outline',
            title: 'Σχετικά',
            to: '/ornithopanida/deigma-ornithopanida-x-press-threats/'
          }, {
            icon: 'create_new_folder',
            title: 'Εγγραφή',
            to: '/ornithopanida/deigma-ornithopanida-x-press-threats/new'
          }, {
            icon: 'search',
            title: 'Αναζήτηση',
            to: '/ornithopanida/deigma-ornithopanida-x-press-threats/search/page/1'
          }, {
            icon: 'find_replace',
            title: 'Δυναμική αναζήτηση',
            to: '/ornithopanida/deigma-ornithopanida-x-press-threats/dynamic-search/page/1'
          }]
        }]
      },
      groupThhlastika: {
        icon: 'inbox',
        title: 'Θηλαστικά',
        subGroups: [{
          title: 'Είδη',
          pages: [{
            icon: 'info_outline',
            title: 'Σχετικά',
            to: '/thhlastika/ct-eidh/'
          }, {
            icon: 'create_new_folder',
            title: 'Εγγραφή',
            to: '/thhlastika/ct-eidh/new'
          }, {
            icon: 'search',
            title: 'Αναζήτηση',
            to: '/thhlastika/ct-eidh/search/page/1'
          }, {
            icon: 'find_replace',
            title: 'Δυναμική αναζήτηση',
            to: '/thhlastika/ct-eidh/dynamic-search/page/1'
          }]
        }, {
          title: 'Πιέσεις',
          pages: [{
            icon: 'info_outline',
            title: 'Σχετικά',
            to: '/thhlastika/ct-press-threats/'
          }, {
            icon: 'create_new_folder',
            title: 'Εγγραφή',
            to: '/thhlastika/ct-press-threats/new'
          }, {
            icon: 'search',
            title: 'Αναζήτηση',
            to: '/thhlastika/ct-press-threats/search/page/1'
          }, {
            icon: 'find_replace',
            title: 'Δυναμική αναζήτηση',
            to: '/thhlastika/ct-press-threats/dynamic-search/page/1'
          }]
        }, {
          title: 'Δείγμα θηλαστικών',
          pages: [{
            icon: 'info_outline',
            title: 'Σχετικά',
            to: '/thhlastika/deigma-thhlastikwn/'
          }, {
            icon: 'create_new_folder',
            title: 'Εγγραφή',
            to: '/thhlastika/deigma-thhlastikwn/new'
          }, {
            icon: 'map',
            title: 'Χάρτης',
            to: '/thhlastika/deigma-thhlastikwn/map'
          }, {
            icon: 'search',
            title: 'Αναζήτηση',
            to: '/thhlastika/deigma-thhlastikwn/search/page/1'
          }, {
            icon: 'find_replace',
            title: 'Δυναμική αναζήτηση',
            to: '/thhlastika/deigma-thhlastikwn/dynamic-search/page/1'
          }]
        }, {
          title: 'Δείγμα Χ είδη',
          pages: [{
            icon: 'info_outline',
            title: 'Σχετικά',
            to: '/thhlastika/deigma-thhlastikwn-x-eidh/'
          }, {
            icon: 'create_new_folder',
            title: 'Εγγραφή',
            to: '/thhlastika/deigma-thhlastikwn-x-eidh/new'
          }, {
            icon: 'search',
            title: 'Αναζήτηση',
            to: '/thhlastika/deigma-thhlastikwn-x-eidh/search/page/1'
          }, {
            icon: 'find_replace',
            title: 'Δυναμική αναζήτηση',
            to: '/thhlastika/deigma-thhlastikwn-x-eidh/dynamic-search/page/1'
          }]
        }, {
          title: 'Δείγμα Χ πιέσεις',
          pages: [{
            icon: 'info_outline',
            title: 'Σχετικά',
            to: '/thhlastika/deigma-thhlastikwn-x-press-threats/'
          }, {
            icon: 'create_new_folder',
            title: 'Εγγραφή',
            to: '/thhlastika/deigma-thhlastikwn-x-press-threats/new'
          }, {
            icon: 'search',
            title: 'Αναζήτηση',
            to: '/thhlastika/deigma-thhlastikwn-x-press-threats/search/page/1'
          }, {
            icon: 'find_replace',
            title: 'Δυναμική αναζήτηση',
            to: '/thhlastika/deigma-thhlastikwn-x-press-threats/dynamic-search/page/1'
          }]
        }]
      },
      currentYear: ''
    };
  },

  mounted() {
    this.getCurrentYear();
  },

  methods: {
    getCurrentYear: function () {
      this.currentYear = new Date().getFullYear();
    }
  }
});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue





/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_f9cb84cc_render,
  defaultvue_type_template_id_f9cb84cc_staticRenderFns,
  false,
  null,
  null,
  "4a046f12"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js






const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (layouts_error.options || layouts_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(39), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(40), 'deigmata.js');
  resolveStoreModules(__webpack_require__(41), 'ornithopanida/ct-eidh.js');
  resolveStoreModules(__webpack_require__(42), 'ornithopanida/ct-press-threats.js');
  resolveStoreModules(__webpack_require__(43), 'ornithopanida/deigma-ornithopanida-x-eidh.js');
  resolveStoreModules(__webpack_require__(44), 'ornithopanida/deigma-ornithopanida-x-press-threats.js');
  resolveStoreModules(__webpack_require__(45), 'ornithopanida/deigma-ornithopanida.js');
  resolveStoreModules(__webpack_require__(46), 'thhlastika/ct-eidh.js');
  resolveStoreModules(__webpack_require__(47), 'thhlastika/ct-press-threats.js');
  resolveStoreModules(__webpack_require__(48), 'thhlastika/deigma-thhlastikwn-x-eidh.js');
  resolveStoreModules(__webpack_require__(49), 'thhlastika/deigma-thhlastikwn-x-press-threats.js');
  resolveStoreModules(__webpack_require__(50), 'thhlastika/deigma-thhlastikwn.js'); // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}

function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData; // Remove store src + extension (./foo/index.js -> foo/index)

  const namespace = filename.replace(/\.(js|mjs)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath); // If src is a known Vuex property

  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const propertyStoreModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    }); // Replace state since it's a function

    mergeProperty(propertyStoreModule, moduleData, property);
    return;
  } // If file is foo/index.js, it should be saved as foo


  const isIndexModule = moduleName === 'index';

  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }

  const storeModule = getStoreModule(store_store, namespaces);

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}

function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }

  return normalizeModule(moduleData, filePath);
}

function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }

  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}

function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(9);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(28);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        return;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || process.env._AXIOS_BASE_URL_ || 'https://spring-boota.herokuapp.com'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "host", "cf-ray", "cf-connecting-ip", "content-length", "content-md5", "content-type"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// EXTERNAL MODULE: external "vuetify"
var external_vuetify_ = __webpack_require__(29);
var external_vuetify_default = /*#__PURE__*/__webpack_require__.n(external_vuetify_);

// EXTERNAL MODULE: external "vuetify/es5/util/colors"
var colors_ = __webpack_require__(3);
var colors_default = /*#__PURE__*/__webpack_require__.n(colors_);

// CONCATENATED MODULE: ./plugins/vuetify.js



external_vue_default.a.use(external_vuetify_default.a, {
  theme: {
    primary: '#121212',
    // a color that is not in the material colors palette
    accent: colors_default.a.grey.darken3,
    secondary: colors_default.a.amber.darken3,
    info: colors_default.a.teal.lighten1,
    warning: colors_default.a.amber.base,
    error: colors_default.a.deepOrange.accent4,
    success: colors_default.a.green.accent3
  }
});
// EXTERNAL MODULE: ./node_modules/vue2-google-maps/dist/main.js
var main = __webpack_require__(30);

// CONCATENATED MODULE: ./plugins/vue2-google-maps.js


external_vue_default.a.use(main, {
  load: {
    key: 'AIzaSyC16zRdIjbGnsKsuZjGUH5UgltGr1sDiy8'
  }
});
// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: .\\axios.js (mode: 'all')

 // Source: ..\\plugins\\vuetify (mode: 'all')

 // Source: ..\\plugins\\vue2-google-maps (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;
const baseStoreOptions = {
  preserveState: false
};

function registerModule(path, rawModule, options = {}) {
  return originalRegisterModule.call(this, path, rawModule, { ...baseStoreOptions,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "htmlAttrs": {
        "lang": "el"
      },
      "title": "Φορέας Διαχείρισης Λίμνης Κερκίνης",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": "Ο Φορέας Διαχείρισης Λίμνης Κερκίνης είναι υπεύθυνος για την μελέτη, συλλογή, αποθήκευση και ανάλυση πληροφοριών με τη δημιουργία στατιστικών για τη περιοχή της Λίμνης Κερκίνης."
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Flogo.png"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:300,400,500,700|Material+Icons"
      }],
      "style": [],
      "script": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/vuetify.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vuetify.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/vue2-google-maps.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue2-google-maps.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // If server-side, wait for async component to be resolved first


  if ( true && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, err => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err);
        if (err.type !== 2
        /* NavigationFailureType.redirected */
        ) return resolve(); // navigated to a different route in router guard

        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath;
          app.context.route = await getRouteData(to);
          app.context.params = to.params || {};
          app.context.query = to.query || {};
          unregister();
          resolve();
        });
      });
    });
  }

  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div')
});

function server_urlJoin() {
  return Array.prototype.slice.call(arguments).join('/').replace(/\/+/g, '/');
}

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  opts.query = Object(external_querystring_["stringify"])(opts.query);
  opts.path = opts.path + (opts.query ? '?' + opts.query : '');
  const routerBase = '/';

  if (!opts.path.startsWith('http') && routerBase !== '/' && !opts.path.startsWith(routerBase)) {
    opts.path = server_urlJoin(routerBase, opts.path);
  } // Avoid loop redirect


  if (opts.path === ssrContext.url) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: opts.path
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: [],
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  }; // Remove query from url is static target

  if (false) {} // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public; // Create the app definition and the instance (created for each request)

  const {
    app,
    router,
    store
  } = await createApp(ssrContext, { ...ssrContext.runtimeConfig.public,
    ...ssrContext.runtimeConfig.private
  });

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (layouts_error.options || layouts_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(layouts_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(router.match(ssrContext.url));
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : layouts_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=template&id=25e3f758&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div>","</div>",[_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=template&id=25e3f758&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var infoWindowvue_type_script_lang_js_ = ((function (x) {
  return x.default || x;
})(__webpack_require__(58)));
// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/infoWindow.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_infoWindowvue_type_script_lang_js_ = (infoWindowvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/infoWindow.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_infoWindowvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "58a4fa5a"
  
)

/* harmony default export */ var infoWindow = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=template&id=6839df3e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-map-container"},[_vm._ssrNode("<div class=\"vue-map\"></div> "),_vm._ssrNode("<div class=\"vue-map-hidden\">","</div>",[_vm._t("default")],2),_vm._ssrNode(" "),_vm._t("visible")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=template&id=6839df3e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var mapvue_type_script_lang_js_ = ((function (x) {
  return x.default || x;
})(__webpack_require__(59)));
// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/map.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_mapvue_type_script_lang_js_ = (mapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/map.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(60)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_mapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "082271f0"
  
)

/* harmony default export */ var map = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=template&id=50f7f8d6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-street-view-pano-container"},[_vm._ssrNode("<div class=\"vue-street-view-pano\"></div> "),_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=template&id=50f7f8d6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var streetViewPanoramavue_type_script_lang_js_ = ((function (x) {
  return x.default || x;
})(__webpack_require__(62)));
// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_streetViewPanoramavue_type_script_lang_js_ = (streetViewPanoramavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/streetViewPanorama.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(63)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_streetViewPanoramavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7cff370e"
  
)

/* harmony default export */ var streetViewPanorama = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=template&id=5e569f3e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',_vm._g(_vm._b({ref:"input"},'input',_vm.$attrs,false),_vm.$listeners),[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=template&id=5e569f3e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var autocompletevue_type_script_lang_js_ = ((function (x) {
  return x.default || x;
})(__webpack_require__(66)));
// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/autocomplete.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_autocompletevue_type_script_lang_js_ = (autocompletevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vue2-google-maps/dist/components/autocomplete.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_autocompletevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "35e4fbf8"
  
)

/* harmony default export */ var autocomplete = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("vue-browser-geolocation");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map