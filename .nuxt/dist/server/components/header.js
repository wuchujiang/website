exports.ids = [3];
exports.modules = Array(24).concat([
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(41);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7730ccaa", content, true, context)
};

/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/header/header.vue?vue&type=template&id=5d003eb4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"header",attrs:{"id":"header"}},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1 class=\"logo\">","</h1>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":__webpack_require__(38),"alt":""}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<nav class=\"nav\">","</nav>",[_vm._ssrNode("<ul>","</ul>",_vm._l((_vm.nav),function(item,index){return _vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.current === index && 'active'))+">","</li>",[_c('nuxt-link',{class:item.second && 'down',attrs:{"to":item.url}},[_vm._v(_vm._s(item.name))]),_vm._ssrNode(" "),(item.second)?_vm._ssrNode("<div"+(_vm._ssrClass(null,("sec_nav " + (item.type))))+">","</div>",[_vm._ssrNode("<div class=\"sec_nav-main\">","</div>",_vm._l((item.second),function(i){return _vm._ssrNode("<div"+(_vm._ssrClass(null,("item " + (i.type))))+">","</div>",[_c('nuxt-link',{attrs:{"to":i.url}},[_vm._v(_vm._s(i.name))])],1)}),0)]):_vm._e()],2)}),0)]),_vm._ssrNode(" <div class=\"phone\"><img"+(_vm._ssrAttr("src",__webpack_require__(39)))+" alt>400-150-9669\n    </div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/header/header.vue?vue&type=template&id=5d003eb4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/header/header.vue?vue&type=script&lang=js&
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
/* harmony default export */ var headervue_type_script_lang_js_ = ({
  props: ["current"],

  data() {
    return {
      nav: [{
        name: "首页",
        type: "index",
        url: "/"
      }, {
        name: "产品服务",
        type: "product",
        url: "",
        second: [{
          name: "会员SaaS服务",
          type: "nav_saas",
          url: "/saas"
        }, {
          name: "精细化运营服务",
          type: "nav_service",
          url: "/operation"
        }]
      }, {
        name: "关于我们",
        type: "about",
        url: "",
        second: [{
          name: "公司介绍",
          type: "nav_about",
          url: "/about"
        }, {
          name: "联系我们",
          type: "nav_contact",
          url: "/contact"
        }]
      }, {
        name: "加入我们",
        type: "join",
        url: "/join"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/header/header.vue?vue&type=script&lang=js&
 /* harmony default export */ var header_headervue_type_script_lang_js_ = (headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/header/header.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(40)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  header_headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2a94ca8f"
  
)

/* harmony default export */ var header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(27).default})


/***/ }),
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon4.c25ab94.png";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon5.3c8455f.png";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon6.53be023.png";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon7.48dd52a.png";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon4_selected.ee8d37f.png";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon5_selected.458724e.png";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon6_selected.f137c57.png";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon7_selected.9c97c81.png";

/***/ }),
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.ccb2c30.png";

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEqADAAQAAAABAAAAEgAAAACaqbJVAAACeElEQVQ4EYWUTWgTURSFM0kmk2iwmi4kNSDEH1RoRZIQQ7AuBSHdaArWjSAoogtLXbgqKsWKiFAEqVCwC5euiijERbFNDGUSsNKVFqNSBiS2BYkIIT/9bnSGIej44HLuPe/c896bNzOK6y8jmUweaTabY+12+6SiKHvAdWQrxJLP55sqFosb3W2KncBgR6PRmKT5Evw88YZYwWg72A+fIe9zu923dV2fgrOGx8xisZjaarVeUB9DOELTE/Jt4CFQgysHg8Hxer3+HbPJSCSiGoYhC3WG10xomEZwmPoUhldAMdXgOhLBWq32Dd09iGHquUQi8YmdPRNB52ipVGo/K31g1bOYjMMflUmHMYvhF8zOl0qlg+Rtt4gxuUixzITs5H8m0nIBbRDcy66GhFDi8fg5UI71GRwgnMYDFryKNgD+AKuI95E/9YTD4QWKncRuJwfEa4FAYIRblVOcIDQiJD3MDQi5S4p/jE34eYR3WT2dz+c3yR8RDbueOY/Ctf++lj8ziNaJ6zz0hXK5/NXeYOY8Dp3muFkLemn6BRmwkRPmldq47nQVwm5kyNEuE4vEDOHCVDjHgaaJoMrrkmYjG16v94z1iTCpcJWLYIsjDTo5cbQldLMYFcE7vEtD1uo4tzVNG8agB+FpMcJ4kGfYQ/ST3xCO7/E4zWXSGfAWOE24LCMpCoWCEY1GE5geSKfTfWAv9DvwOfFavkeuvzeTyVyDf4zRe3bzUnqto0nRPbLZrK9SqWRUVV3m17EqRhxH/gA3iTkewYTZ42jEEUdpeIi4yo4+gir1W7/ff192b5oIWl+/nTRzmnQM1sBXoVBoNJfL/TTnunELzUMZaV6kuboAAAAASUVORK5CYII="

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(24);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(42);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(43);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(29);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(30);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(31);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(32);
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(33);
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(34);
var ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(35);
var ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(36);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".header{height:67px;background-color:#fff}.logo{width:153px;height:30px;margin-top:20px;display:flex;margin-right:94px;cursor:pointer;overflow:hidden}.logo,.logo img,.nav{float:left}.nav ul,.nav ul li{display:flex}.nav ul li{line-height:67px;font-size:16px;color:#666;padding:0 50px;position:relative;align-items:center}.nav ul li a{transition:all .3s linear}.down{padding-right:14px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat 100%}.nav ul li.active>a{color:#ff5a27}.nav ul li.active>a.down{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat 100%}.nav ul li:hover>a{color:#ff5a27}.nav ul li:hover .sec_nav{display:block}.nav ul li:hover a.down{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat 100%}.phone{height:67px;display:flex;align-items:center;font-size:16px;color:#333;float:right}.phone img{margin-right:10px}.sec_nav{position:absolute;z-index:9;top:64px;left:50%;transform:translateX(-50%);padding-top:5px;display:none}.sec_nav-main{background-color:#fff;border-radius:4px;padding:9px 0 16px}.sec_nav .item{margin-left:25px;font-size:14px;padding-left:32px;line-height:24px;margin-top:10px;transition:all .3s linear;cursor:pointer}.sec_nav .item a{color:#333}.sec_nav .item:hover a{color:#ff5001}.product{width:182px}.about{width:140px}.nav_saas{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat 0}.nav_service{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat 0}.nav_about{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") no-repeat 0}.nav_contact{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") no-repeat 0}.nav_saas:hover{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") no-repeat 0}.nav_service:hover{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") no-repeat 0}.nav_about:hover{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") no-repeat 0}.nav_contact:hover{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") no-repeat 0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAGCAYAAAAVMmT4AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAC6ADAAQAAAABAAAABgAAAAB5Lp63AAAAl0lEQVQYGWM2MTE5Jikpef45EDDgAGZmZiZANRuYgKAYqGadsbGxETa1QMMM//79u+b///+5zE+fPn0iKyt7EshZLScndxjIh9sANFH/379/IBOjzpw5c4IZZBpIA1DhiT9//sA1AG3SBRqwESgdC1R4FKQOrBjEQNYgIyPzBqhwNtDEBKDCwyB5rABoojkQPwA6wQldAQBbE0/Awl4DWgAAAABJRU5ErkJggg=="

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAGCAYAAAAVMmT4AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAC6ADAAQAAAABAAAABgAAAAB5Lp63AAAAjUlEQVQYGWP4H6Vx7H+MphEDHvA/Vt3kf7T6KSYGFoZihv//1+HS8D9Oy5DhH+MaBibmXLB5/+M0LP9HazwA2mKMbMH/GG19sHiMhhWyOMP/aE0LZA1Ati5Q8/3/cdo2MIWMMAaIBmkAkisYGJhqGP7/a2ZgZkhgXHzjILIaFPb/WC1zsA2x2k4oEkAOANVBNuWgmqQBAAAAAElFTkSuQmCC"

/***/ })
]);;
//# sourceMappingURL=header.js.map