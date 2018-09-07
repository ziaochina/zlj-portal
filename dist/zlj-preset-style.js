(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("MK.metaEngine"), require("MK.utils"), require("react"), require("immutable"));
	else if(typeof define === 'function' && define.amd)
		define(["MK.metaEngine", "MK.utils", "react", "immutable"], factory);
	else if(typeof exports === 'object')
		exports["MKApp_zlj_preset_style"] = factory(require("MK")["metaEngine"], require("MK.utils"), require("react"), require("immutable"));
	else
		root["MKApp_zlj_preset_style"] = factory(root["MK.metaEngine"], root["MK"]["utils"], root["React"], root["Immutable"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__11__, __WEBPACK_EXTERNAL_MODULE__13__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _webapi=__webpack_require__(6);var _webapi2=_interopRequireDefault(_webapi);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _options={webapi:_webapi2.default,webapiMap:{}};function config(options){if(options){Object.assign(_options,options);}}config.current=_options;exports.default=config;module.exports=exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.getMeta=getMeta;exports.getInitState=getInitState;function getMeta(){return{name:'root',component:'::div',_visible:false};}function getInitState(){return{data:{}};}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _mkMetaEngine=__webpack_require__(1);var pkgJson=__webpack_require__(5);__webpack_require__.p=window['__pub_'+pkgJson.name+'__'];var data=__webpack_require__(2);var config=__webpack_require__(0);__webpack_require__(8);exports.default={name:pkgJson.name,version:pkgJson.version,description:pkgJson.description,meta:data.getMeta(),components:[],config:config,load:function load(cb){cb(_mkMetaEngine.defaultComponent,__webpack_require__(10),__webpack_require__(12));}};module.exports=exports['default'];

/***/ }),
/* 5 */
/***/ (function(module) {

module.exports = {"isMKPresetApp":true,"name":"zlj-preset-style","description":"zlj-preset-style","version":"1.0.0","license":"MIT","author":"","keywords":["mk","monkey king","react","redux","mk-js","mk-command","zlj-preset-style"],"repository":{"type":"git","url":"https://github.com/ziaochina/zlj-preset-style.git"},"bugs":{"url":"https://github.com/ziaochina/zlj-preset-style/issues"},"homepage":"https://github.com/ziaochina/zlj-preset-style#readme","scripts":{"start":"mk start","build":"mk build","pkg":"mk pkg"},"dependencies":{"mk-command":"*"}};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _mkUtils=__webpack_require__(7);var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var api=function api(key){return _config2.default.current.webapiMap[key];};exports.default={};module.exports=exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=creator;var _react=__webpack_require__(11);var _react2=_interopRequireDefault(_react);var _mkMetaEngine=__webpack_require__(1);var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var action=function action(option){var _this=this;_classCallCheck(this,action);this.onInit=function(_ref){var component=_ref.component,injections=_ref.injections;_this.component=component;_this.injections=injections;//injections.reduce('init')
};this.metaAction=option.metaAction;this.config=_config2.default.current;};function creator(option){var metaAction=new _mkMetaEngine.action(option),o=new action(_extends({},option,{metaAction:metaAction})),ret=_extends({},metaAction,o);metaAction.config({metaHandlers:ret});return ret;}module.exports=exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__11__;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=creator;var _immutable=__webpack_require__(13);var _mkMetaEngine=__webpack_require__(1);var _config=__webpack_require__(0);var _config2=_interopRequireDefault(_config);var _data=__webpack_require__(2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var reducer=function reducer(option){var _this=this;_classCallCheck(this,reducer);this.init=function(state,option){return _this.metaReducer.init(state,(0,_data.getInitState)());};this.metaReducer=option.metaReducer;this.config=_config2.default.current;};function creator(option){var metaReducer=new _mkMetaEngine.reducer(option),o=new reducer(_extends({},option,{metaReducer:metaReducer}));return _extends({},metaReducer,o);}module.exports=exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__13__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=zlj-preset-style.js.map