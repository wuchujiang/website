exports.ids = [6,1,2,3];
exports.modules = Array(24).concat([
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7730ccaa", content, true, context)
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("f0b3fa0e", content, true, context)
};

/***/ }),
/* 26 */
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
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/header/header.vue?vue&type=template&id=355cde8c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"header",attrs:{"id":"header"}},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1 class=\"logo\">","</h1>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":__webpack_require__(39),"alt":""}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<nav class=\"nav\">","</nav>",[_vm._ssrNode("<ul>","</ul>",_vm._l((_vm.nav),function(item,index){return _vm._ssrNode("<li"+(_vm._ssrClass(null,_vm.current === index && 'active'))+">","</li>",[_c('nuxt-link',{class:item.second && 'down',attrs:{"to":item.url}},[_vm._v(_vm._s(item.name))]),_vm._ssrNode(" "),(item.second)?_vm._ssrNode("<div"+(_vm._ssrClass(null,("sec_nav " + (item.type))))+">","</div>",[_vm._ssrNode("<div class=\"sec_nav-main\">","</div>",_vm._l((item.second),function(i){return _vm._ssrNode("<div"+(_vm._ssrClass(null,("item " + (i.type))))+">","</div>",[_c('nuxt-link',{attrs:{"to":i.url}},[_vm._v(_vm._s(i.name))])],1)}),0)]):_vm._e()],2)}),0)]),_vm._ssrNode(" <div class=\"phone\"><img"+(_vm._ssrAttr("src",__webpack_require__(40)))+" alt>400-150-9669\n    </div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/header/header.vue?vue&type=template&id=355cde8c&

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
  
  var style0 = __webpack_require__(41)
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
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footer/footer.vue?vue&type=template&id=a9a1b3de&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"left\"><img"+(_vm._ssrAttr("src",__webpack_require__(45)))+" alt> <p>合作电话：400-150-9669</p> <p>业务合作：marketing@oakblack.com</p> <p>媒体合作：media@oakblack.com</p></div> "),_vm._ssrNode("<div class=\"r-nav\">","</div>",[_vm._ssrNode("<div class=\"item\">","</div>",[_vm._ssrNode("<h2>产品服务</h2> "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/saas"}},[_vm._v("会员SAAS服务")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/operation"}},[_vm._v("精细化运营服务")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"item\">","</div>",[_vm._ssrNode("<h2>关于我们</h2> "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/about"}},[_vm._v("公司介绍")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/contact"}},[_vm._v("联系我们")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"item\">","</div>",[_vm._ssrNode("<h2>加入我们</h2> "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/join"}},[_vm._v("招聘职位")])],1)])],2)],2)],2),_vm._ssrNode(" <div class=\"copyright\"><a href=\"https://beian.miit.gov.cn/\" target=\"_blank\">粤ICP备18120172号</a> Copyright ©\n    2018 深圳市橡树黑卡网络科技有限公司 XSHKVIP.COM\n  </div> <div class=\"suspend\"><div class=\"item online-hover\"><img"+(_vm._ssrAttr("src",__webpack_require__(46)))+" alt> <div class=\"text\">在线咨询</div> <div class=\"online-consult\"><div class=\"online-consult-main\"><h3>亲爱的用户</h3> <p>为了更好的帮您解决问题，请选择您要咨询的会员类型</p> <ul><li><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\"><img"+(_vm._ssrAttr("src",__webpack_require__(47)))+" alt>省呗</a></li> <li><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\"><img"+(_vm._ssrAttr("src",__webpack_require__(48)))+" alt>小赢卡贷</a></li> <li><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\"><img"+(_vm._ssrAttr("src",__webpack_require__(49)))+" alt>keep</a></li> <li><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\"><img"+(_vm._ssrAttr("src",__webpack_require__(50)))+" alt>榕树贷款</a></li> <li><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\"><img"+(_vm._ssrAttr("src",__webpack_require__(51)))+" alt>新橙优品</a></li> <li><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\"><img"+(_vm._ssrAttr("src",__webpack_require__(52)))+" alt>其他</a></li></ul> <p>如您需要商务合作请联络邮箱：marketing@oakblack.com</p> <p>电话：400-150-9669</p></div></div></div> <div class=\"item item2\"><img"+(_vm._ssrAttr("src",__webpack_require__(53)))+" alt> <div class=\"text\">\n        电话咨询\n      </div> <div class=\"phone-consult\"><div class=\"phone-consult-main\"><h4>客服电话：400-150-9669</h4> <h4>客服工作时间：</h4> <p>周一到周五：9：00～20：00</p> <span>(在线和电话)</span> <p>周末或节假日：9：00～20：00</p> <span>(电话)</span></div></div></div> <div class=\"item\"><img"+(_vm._ssrAttr("src",__webpack_require__(54)))+" alt> <div class=\"text\">\n        返回顶部\n      </div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/footer/footer.vue?vue&type=template&id=a9a1b3de&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footer/footer.vue?vue&type=script&lang=js&
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
/* harmony default export */ var footervue_type_script_lang_js_ = ({
  data() {
    return {};
  },

  methods: {
    toTop() {
      let scrollToptimer = setInterval(function () {
        var top = document.body.scrollTop || document.documentElement.scrollTop;
        var speed = top / 4;

        if (document.body.scrollTop != 0) {
          document.body.scrollTop -= speed;
        } else {
          document.documentElement.scrollTop -= speed;
        }

        if (top == 0) {
          clearInterval(scrollToptimer);
        }
      }, 30);
    }

  }
});
// CONCATENATED MODULE: ./components/footer/footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var footer_footervue_type_script_lang_js_ = (footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/footer/footer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(55)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footer_footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3f9dbecf"
  
)

/* harmony default export */ var footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(28).default})


/***/ }),
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/close.ce01f75.png";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("23b7a0c2", content, true, context)
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.ccb2c30.png";

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEqADAAQAAAABAAAAEgAAAACaqbJVAAACeElEQVQ4EYWUTWgTURSFM0kmk2iwmi4kNSDEH1RoRZIQQ7AuBSHdaArWjSAoogtLXbgqKsWKiFAEqVCwC5euiijERbFNDGUSsNKVFqNSBiS2BYkIIT/9bnSGIej44HLuPe/c896bNzOK6y8jmUweaTabY+12+6SiKHvAdWQrxJLP55sqFosb3W2KncBgR6PRmKT5Evw88YZYwWg72A+fIe9zu923dV2fgrOGx8xisZjaarVeUB9DOELTE/Jt4CFQgysHg8Hxer3+HbPJSCSiGoYhC3WG10xomEZwmPoUhldAMdXgOhLBWq32Dd09iGHquUQi8YmdPRNB52ipVGo/K31g1bOYjMMflUmHMYvhF8zOl0qlg+Rtt4gxuUixzITs5H8m0nIBbRDcy66GhFDi8fg5UI71GRwgnMYDFryKNgD+AKuI95E/9YTD4QWKncRuJwfEa4FAYIRblVOcIDQiJD3MDQi5S4p/jE34eYR3WT2dz+c3yR8RDbueOY/Ctf++lj8ziNaJ6zz0hXK5/NXeYOY8Dp3muFkLemn6BRmwkRPmldq47nQVwm5kyNEuE4vEDOHCVDjHgaaJoMrrkmYjG16v94z1iTCpcJWLYIsjDTo5cbQldLMYFcE7vEtD1uo4tzVNG8agB+FpMcJ4kGfYQ/ST3xCO7/E4zWXSGfAWOE24LCMpCoWCEY1GE5geSKfTfWAv9DvwOfFavkeuvzeTyVyDf4zRe3bzUnqto0nRPbLZrK9SqWRUVV3m17EqRhxH/gA3iTkewYTZ42jEEUdpeIi4yo4+gir1W7/ff192b5oIWl+/nTRzmnQM1sBXoVBoNJfL/TTnunELzUMZaV6kuboAAAAASUVORK5CYII="

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(26);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(43);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(44);
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
___CSS_LOADER_EXPORT___.push([module.i, ".header{height:67px;background-color:#fff}.logo{width:153px;height:30px;margin-top:20px;display:flex;margin-right:94px;cursor:pointer;overflow:hidden}.logo,.logo img,.nav{float:left}.nav ul,.nav ul li{display:flex}.nav ul li{line-height:67px;font-size:16px;color:#666;padding:0 50px;position:relative;align-items:center}.nav ul li a{transition:all .3s linear}.down{padding-right:14px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat 100%}.nav ul li.active>a{color:#ff5a27}.nav ul li.active>a.down{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat 100%}.nav ul li:hover>a{color:#ff5a27}.nav ul li:hover .sec_nav{display:block}.nav ul li:hover a.down{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat 100%}.phone{height:67px;display:flex;align-items:center;font-size:16px;color:#333;float:right}.phone img{margin-right:10px}.sec_nav{position:absolute;z-index:9;top:64px;left:50%;transform:translateX(-50%);padding-top:5px;display:none}.sec_nav-main{background-color:#fff;border-radius:4px;padding:9px 0 16px}.sec_nav .item{margin-left:25px;font-size:14px;padding-left:32px;line-height:24px;margin-top:10px;transition:all .3s linear;cursor:pointer}.sec_nav .item a{color:#333}.sec_nav .item:hover a{color:#ff5001}.product{width:182px}.about{width:140px}.nav_saas{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat 0}.nav_service{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat 0}.nav_about{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") no-repeat 0}.nav_contact{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") no-repeat 0}.nav_saas:hover{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") no-repeat 0}.nav_service:hover{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") no-repeat 0}.nav_about:hover{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") no-repeat 0}.nav_contact:hover{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") no-repeat 0}@media screen and (max-width:1200px){.nav ul li{padding:0 30px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAGCAYAAAAVMmT4AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAC6ADAAQAAAABAAAABgAAAAB5Lp63AAAAl0lEQVQYGWM2MTE5Jikpef45EDDgAGZmZiZANRuYgKAYqGadsbGxETa1QMMM//79u+b///+5zE+fPn0iKyt7EshZLScndxjIh9sANFH/379/IBOjzpw5c4IZZBpIA1DhiT9//sA1AG3SBRqwESgdC1R4FKQOrBjEQNYgIyPzBqhwNtDEBKDCwyB5rABoojkQPwA6wQldAQBbE0/Awl4DWgAAAABJRU5ErkJggg=="

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAGCAYAAAAVMmT4AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAC6ADAAQAAAABAAAABgAAAAB5Lp63AAAAjUlEQVQYGWP4H6Vx7H+MphEDHvA/Vt3kf7T6KSYGFoZihv//1+HS8D9Oy5DhH+MaBibmXLB5/+M0LP9HazwA2mKMbMH/GG19sHiMhhWyOMP/aE0LZA1Ati5Q8/3/cdo2MIWMMAaIBmkAkisYGJhqGP7/a2ZgZkhgXHzjILIaFPb/WC1zsA2x2k4oEkAOANVBNuWgmqQBAAAAAElFTkSuQmCC"

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo2.f72a0aa.png";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/suspend1.07a3205.png";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh1.4ce57c5.png";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh2.111c040.png";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh3.c4c197c.png";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh4.32ab95a.png";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh5.2b8b3b8.png";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh6.22c1639.png";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/suspend2.6264901.png";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/suspend3.6f91d5d.png";

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".footer{background-color:#333;padding:72px 0}.footer .container{display:flex;justify-content:space-between}.footer .left{font-size:14px;color:#fff}.footer .left p{margin-top:24px}.r-nav{display:flex;color:#fff}.r-nav .item{margin-left:170px}.r-nav .item h2{font-size:20px}.r-nav .item ul li{margin-top:22px;font-size:14px}.r-nav .item ul li a{color:#fff;transition:all .3s linear}.r-nav .item ul li:hover a{opacity:.8}.copyright{text-align:center;margin-top:72px;color:#999}.copyright a{color:#999}.suspend{position:fixed;width:80px;right:30px;top:50%;transform:translateY(-50%);z-index:51}.suspend .item{width:100%;height:80px;background:linear-gradient(173deg,#ff8133,#ff6c29);margin-bottom:10px;border-radius:5px;font-size:12px;color:#fff;text-align:center;position:relative;cursor:pointer}.suspend .item .text{transform:translateY(-10px)}.online-consult,.phone-consult{position:absolute;right:78px;top:-20px;border-radius:5px;display:none}.online-consult-main{box-sizing:border-box;background-color:#fff;box-shadow:0 0 10px 0 rgba(0,0,0,.1);width:418px;margin-right:12px;padding:24px 28px;text-align:left;color:#333;font-size:14px;border-radius:5px}.online-consult-main ul{display:flex;margin-bottom:22px;margin-top:16px}.online-consult-main ul li{text-align:center;width:60px}.online-consult-main ul li a{color:#333}.online-consult-main ul li img{width:40px;height:40px;display:block;margin:0 auto 5px}.online-consult-main p{font-size:14px;color:#666;margin-top:4px}.online-hover:hover .online-consult{display:block}.phone-consult-main{box-sizing:border-box;background-color:#fff;box-shadow:0 0 10px 0 rgba(0,0,0,.1);width:280px;margin-right:12px;padding:18px;text-align:left;color:#333;font-size:14px;border-radius:5px}.item2:hover .phone-consult{display:block}.phone-consult h4{margin-bottom:10px;font-size:18px}.phone-consult p{font-size:16px;color:#333;margin-top:10px}.phone-consult span{font-size:14px;color:#666}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img11.24752ff.png";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img12.348e3ad.png";

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".common-title{text-align:center}.common-title .name{font-size:30px;color:#333;font-weight:700}.common-title .desc{font-size:20px;color:#666;margin-top:10px}.free-plan{box-sizing:border-box;padding-top:1px;height:115px;background:linear-gradient(180deg,#ffc71c,#ff960c);position:fixed;width:100%;left:0;bottom:0;z-index:50}.free-plan .container{padding:0 100px;display:flex;justify-content:space-between;position:relative}.free-plan .img{width:434px;transform:translateY(-8px)}.free-plan ul{padding:2px 30px 0;display:flex;justify-content:space-between;flex-wrap:wrap}.free-plan ul li{margin-top:30px;width:464px;border-radius:4px;height:50px;position:relative}.free-plan ul li.li2{display:flex}.free-plan ul li.li2 input{width:285px}.free-plan ul li input{width:100%;text-indent:13px;height:50px;font-size:16px;color:#333;border:none;border-radius:4px;background-color:#fff;outline:none}.free-plan ul li .input-error{left:0}.free-get-plan{background-color:#333;width:246px;height:50px;display:flex;justify-content:center;align-items:center;color:#fff;font-size:16px;margin:28px 100px 0 0;border-radius:4px;cursor:pointer;transition:all .3s linear}.free-get-plan:hover{opacity:.8}.input-error{position:absolute;left:88px;top:50px;color:red;font-size:14px}.clear-fixed{position:relative}.img-close{width:44px;position:absolute;top:0;right:100px;cursor:pointer}.form-dialog{position:fixed;width:100%;height:100%;left:0;top:0;z-index:52;background-color:rgba(0,0,0,.5)}.form-dialog-main{box-sizing:border-box;position:absolute;width:1000px;height:480px;background-color:#fff;left:50%;top:50%;transform:translate(-50%,-50%);display:flex;justify-content:space-between;padding:0 30px 0 0}.form-dialog-main .b-img{width:440px;height:480px}.form-dialog-main .plan-form{padding-top:30px}.form-dialog-main .plan-form .item input{width:420px}.form-dialog-main .plan-form h2{padding-top:0;font-size:22px;text-align:left}.form-dialog-main .plan-form .plan-btn{margin:25px auto 0}.form-dialog-close{position:absolute;width:43px;height:43px;right:0;top:0;cursor:pointer}.form-dialog-main .plan-form .item.code input{width:250px}@media screen and (max-width:1200px){.free-plan ul li{width:430px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/form.vue?vue&type=template&id=5cb454d1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.hidePlan)?_c('section',{class:("free-plan " + (_vm.clearFixed && 'clear-fixed'))},[_vm._ssrNode("<div class=\"container\"><img"+(_vm._ssrAttr("src",__webpack_require__(58)))+" alt class=\"img\"> <div class=\"free-get-plan\">免费获取方案</div> <img"+(_vm._ssrAttr("src",__webpack_require__(37)))+" alt class=\"img-close\"></div> "+((_vm.showForm)?("<div class=\"form-dialog\"><div class=\"form-dialog-main\"><img"+(_vm._ssrAttr("src",__webpack_require__(37)))+" alt class=\"form-dialog-close\"> <img"+(_vm._ssrAttr("src",__webpack_require__(57)))+" alt class=\"b-img\"> <div class=\"plan-form\"><h2>完善信息后 48小时内会有专门的商务人员与您对接</h2> <div class=\"item\"><div class=\"text\"><span>*</span>您的姓名：</div> <input type=\"text\" maxlength=\"10\" placeholder=\"请输入姓名\" name id=\"name\""+(_vm._ssrAttr("value",(_vm.name)))+"> <div class=\"input-error\">"+_vm._ssrEscape(_vm._s(_vm.name_error))+"</div></div> <div class=\"item\"><div class=\"text\">公司名称：</div> <input type=\"text\" placeholder=\"请输入公司名称\" maxlength=\"100\" name id=\"companyName\""+(_vm._ssrAttr("value",(_vm.company_name)))+"> <div class=\"input-error\">"+_vm._ssrEscape(_vm._s(_vm.company_name_error))+"</div></div> <div class=\"item\"><div class=\"text\"><span>*</span>联系电话：</div> <input type=\"text\" placeholder=\"请输入联系电话\" maxlength=\"30\" name id=\"phone\""+(_vm._ssrAttr("value",(_vm.phone)))+"> <div class=\"input-error\">"+_vm._ssrEscape(_vm._s(_vm.phone_error))+"</div></div> <div class=\"item code\"><div class=\"text\"><span>*</span>验证码：</div> <input type=\"text\" placeholder=\"请输入验证码\" name id=\"code\""+(_vm._ssrAttr("value",(_vm.code)))+"> <div class=\"input-error\">"+_vm._ssrEscape(_vm._s(_vm.code_error))+"</div> <div class=\"get-code\">获取验证码</div></div> <div class=\"plan-btn\">免费获取方案</div></div></div></div>"):"<!---->"))]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/form/form.vue?vue&type=template&id=5cb454d1&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/form.vue?vue&type=script&lang=js&
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
/* harmony default export */ var formvue_type_script_lang_js_ = ({
  data() {
    return {
      name: "",
      name_error: "",
      company_name: "",
      company_name_error: "",
      phone: "",
      phone_error: "",
      code: "",
      code_error: "",
      clearFixed: false,
      hidePlan: false,
      showForm: false
    };
  },

  mounted() {
    const timer = setTimeout(() => {
      const documentHeight = document.body.scrollHeight;
      document.addEventListener("scroll", () => {
        const scroll = document.documentElement.scrollTop || document.body.scrollTop;
        let top = scroll + window.innerHeight + 290;

        if (top >= documentHeight && !this.clearFixed) {
          this.clearFixed = true;
        }

        if (top < documentHeight && this.clearFixed) {
          this.clearFixed = false;
        }
      });
      clearTimeout(timer);
    }, 2000);
  },

  methods: {
    getCode() {//获取验证码
    },

    getPlan() {
      if (!this.name) {
        this.name_error = "请填写您的姓名";
        return;
      } else {
        this.name_error = "";
      }

      if (!this.phone) {
        this.phone_error = "请填写您的联系电话";
        return;
      } else {
        if (!/^1([3-9])\d{9}$/.test(this.phone)) {
          this.phone_error = "请填写正确的联系电话";
          return;
        }

        this.phone_error = "";
      }

      if (!this.code) {
        this.code_error = "请填写验证码";
        return;
      } else {
        this.code_error = "";
      }

      this.showDialog = true;
    }

  }
});
// CONCATENATED MODULE: ./components/form/form.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_formvue_type_script_lang_js_ = (formvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/form/form.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(59)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  form_formvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5c789a2f"
  
)

/* harmony default export */ var form_form = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEqADAAQAAAABAAAADgAAAAA/ucjWAAABo0lEQVQoFaVTOywEURQ999nBIn4JjU9JaASNRqEQotrdmIhEo6FQKCQKhSARBaVCRKOTYFcifhGJZEU0sqKkREOBID5vZ643z85kiE/wkpl777nnnPfevDeEfww2MyqRfFkD027grz5sBsshn7aVvgxgg/5ixGZOEZIPe2BUgGCDRIf4rRGbBXmQD1vaxBGT6KWotfQrIzZLg5A3q0peqxdANKhM5pxcsJlezeFAq2588+KeegPyYklRGjVN0ATF7ElXIiDlJtja4LAYdcGPkUdGBK4S8wpv0z2iGYraQ36es7UjDTAPc0j0+5tefjw2DeZOXRMtoGa4z+ulEmIztxDyLq7qavWw+njdFLOc2fVQKx1XJu7s6yiuC9HsoXT7btTHz5FgKeynfQWWqeO0IEQ7LVsrHBEDsHkqRY7DKGmhxfNHV+yP2sgBOJxeBUjnbhSq8hlEc2ol7hYSMPKbaPH61i/2556RA3LEaICd3FFplkcinADZjRS7v/SwT5J394ii8gBpwlS8ZIp7hkBm808mn/i+QRxK6+IQneqf8kvW+8Yrl1GF2A9xFqAAAAAASUVORK5CYII="

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon11.4bc15c2.png";

/***/ }),
/* 64 */,
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon8.867805d.png";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon9.b78df08.png";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon10.a63312e.png";

/***/ }),
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(122);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1b7833da", content, true, context)
};

/***/ }),
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./icon1.png": 98,
	"./icon10.png": 67,
	"./icon11.png": 63,
	"./icon12.png": 99,
	"./icon13.png": 100,
	"./icon2.png": 101,
	"./icon3.png": 102,
	"./icon4.png": 29,
	"./icon4_selected.png": 33,
	"./icon5.png": 30,
	"./icon5_selected.png": 34,
	"./icon6.png": 31,
	"./icon6_selected.png": 35,
	"./icon7.png": 32,
	"./icon7_selected.png": 36,
	"./icon8.png": 65,
	"./icon9.png": 66
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 97;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon1.0ff852b.png";

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon12.ae76458.png";

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon13.d13418a.png";

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon2.05b72da.png";

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon3.3231daf.png";

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/benefit.61d5b69.png";

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/co1.09ad9cb.png";

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/co2.30c8c06.png";

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/co3.5691352.png";

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/co4.1ab5ef4.png";

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/co5.7c17128.png";

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/co6.3f3df2d.png";

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cu1.e6ccf7e.png";

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cu2.1fd7930.png";

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/client.cd1635a.png";

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sv_icon0.5088c53.png";

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sv_icon0_selected.45b121c.png";

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sv_icon1.08de31d.png";

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sv_icon1_selected.fa5308c.png";

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sv_icon2.e9e1df2.png";

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sv_icon2_selected.d6434d4.png";

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sv_icon3.46d40f1.png";

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sv_icon3_selected.b16a188.png";

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(26);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(123);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".banner{width:100%;height:420px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat 50%;background-size:auto 100%}.why-select-oak{padding:80px 0 72px}.common-title{text-align:center}.common-title .name{font-size:30px;color:#333;font-weight:700}.common-title .desc{font-size:20px;color:#666;margin-top:10px}.why-select-oak .wrap{margin-top:72px}.capacity{display:flex;justify-content:space-between}.capacity .item{box-sizing:border-box;width:32%;border:1px solid #ebecf1;border-radius:4px;height:225px;text-align:center;padding:12px 20px 0;font-size:24px;color:#333;font-weight:700;transition:all .3s linear}.capacity .item img{margin-bottom:23px}.capacity .item.active{border:1px solid #ff5001;box-shadow:0 0 20px 0 hsla(0,0%,60%,.3);color:#ff5001}.capacity-content1{margin-top:32px;background-color:#fbfbfb;height:400px;padding:0 137px 0 74px;display:flex;align-items:center;justify-content:space-between}.capacity-content1 .text{line-height:30px;color:#666;font-size:16px}.capacity-content1 .text p{padding:15px 0}.capacity-content1 .text span{display:block}.capacity-content1 .text img{transform:translate(-4px,2px)}.capacity-content2{margin-top:32px;background-color:#fbfbfb;height:400px;padding:0 34px;display:flex;align-items:center;justify-content:space-between}.capacity-content2 .text{width:47%}.capacity-content2 .text p{height:60px;line-height:30px;color:#666;font-size:16px}.capacity-content2 .text p img{transform:translate(-4px,2px)}.show-list{margin-top:70px;display:flex;justify-content:space-between}.show-list img{width:32%}.capacity-content3{margin-top:32px;background-color:#fbfbfb;height:400px;padding:0 76px 0 34px;display:flex;align-items:center;justify-content:space-between}.capacity-content3 .text{width:45%}.capacity-content3 .text p{line-height:30px;color:#666;font-size:16px}.capacity-content3 .text p img{transform:translate(-4px,2px)}.capacity-content3 .text .cu1{margin:30px auto 0;display:block}.capacity-content3 .text .cu2{margin:44px auto 0;display:block}.plan{background-color:#fbfbfb}.plan .container{display:flex;justify-content:space-between}.plan img{width:40%}.plan-form{padding-top:50px}.plan-form h2{font-size:24px;color:#333}.plan-form .item{margin-top:30px;display:flex;position:relative}.plan-form .item .text{width:88px;text-align:right;line-height:50px;font-size:16px;color:#333}.plan-form .item .text span{color:#ff5001}.plan-form .item input{width:520px;height:50px;background-color:#eee;border:none;text-indent:10px;font-size:16px;outline:none}.plan-form .item.code input{width:285px}.get-code{width:117px;height:40px;background-color:#333;text-align:center;line-height:40px;color:#fff;font-size:16px;border-radius:4px;margin:5px 0 0 26px;cursor:pointer;transition:all .3s linear}.get-code:hover{opacity:.8}.plan-btn{width:190px;height:50px;background-color:#333;text-align:center;line-height:50px;color:#fff;font-size:16px;border-radius:4px;margin:40px 0 0 232px;cursor:pointer;transition:all .3s linear}.plan-btn:hover{opacity:.8}.service-value{padding:72px 0}.service-value .list{display:flex;justify-content:space-between;margin-top:72px}.service-value .list .item{width:21.6%;height:320px;border:1px solid #333;border-radius:5px;text-align:center;transition:all .3s linear}.service-value .list .item img{display:block;width:62px;height:62px;margin:33px auto 0}.service-value .list .item .name{font-size:24px;color:#ff5001;font-weight:700;display:inline-block;border-bottom:2px solid #ff5001;margin-top:32px}.service-value .list .item ul{display:inline-block;text-align:left;line-height:30px;color:#666;font-size:15px;margin-top:27px}.service-value .list .item.active{background-color:#333}.service-value .list .item.active .name,.service-value .list .item.active ul{color:#fff}.client{padding:72px 0;background-color:#fbfbfb}.client img{margin-top:72px}.input-error{position:absolute;left:88px;top:50px;color:#ff5001;font-size:14px}.dialog{position:fixed;z-index:99;display:none}.dialog,.dialog-bg{width:100%;height:100%;left:0;top:0}.dialog-bg{position:absolute;background-color:rgba(0,0,0,.4)}.dialog-container{background-color:#fff;width:520px;height:321px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);display:flex;justify-content:center;align-items:center;font-size:20px;color:#333;border-radius:4px}.dialog-container .close{position:absolute;font-size:20px;color:#999;right:10px;top:10px;line-height:1;cursor:pointer}.show-dialog{display:block}@media screen and (max-width:1200px){.banner{height:450px}.service-value .list .item{width:23%}.capacity .item{font-size:20px}.capacity-content1{padding:0 70px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner.053360b.png";

/***/ }),
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=f2d43aae&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"index"},[_c('oakHeader',{attrs:{"current":0}}),_vm._ssrNode(" "),_vm._ssrNode("<main>","</main>",[_vm._ssrNode("<section class=\"banner\"></section> <section class=\"why-select-oak\"><div class=\"container\"><div class=\"common-title\"><div class=\"name\">为什么选择橡树省钱卡</div> <div class=\"desc\">\n            专业团队根据合作方与用户诉求，设计定制产品，并提供专业运营支持服务\n          </div></div> <div class=\"wrap\"><div class=\"capacity\">"+(_vm._ssrList((_vm.list),function(item,index){return ("<div"+(_vm._ssrClass(null,("item " + (_vm.current === index && 'active'))))+"><img"+(_vm._ssrAttr("src",__webpack_require__(97)("./icon" + (index + 1) + ".png")))+" alt> <div>"+_vm._ssrEscape(_vm._s(item))+"</div></div>")}))+"</div> <div class=\"capacity-content1\""+(_vm._ssrStyle(null,null, { display: (_vm.current === 0) ? '' : 'none' }))+"><div class=\"text\"><p><span><img"+(_vm._ssrAttr("src",__webpack_require__(62)))+" alt>整合食住行用等全流程权益，</span>\n                覆盖类目广，满足用户大部分生活需求。\n              </p> <p><span><img"+(_vm._ssrAttr("src",__webpack_require__(62)))+" alt>权益具有高频、强流量、高价值属性，</span>\n                利于吸引新用户，提升用户忠诚度。\n              </p> <p><img"+(_vm._ssrAttr("src",__webpack_require__(62)))+" alt>权益成本更低。</p></div> <img"+(_vm._ssrAttr("src",__webpack_require__(103)))+" alt></div> <div class=\"capacity-content2\""+(_vm._ssrStyle(null,null, { display: (_vm.current === 1) ? '' : 'none' }))+"><div class=\"text\"><p><img"+(_vm._ssrAttr("src",__webpack_require__(62)))+" alt>与多家酒店集团、贵宾出行服务商合作，可为用户提供高级酒店会籍匹配，及全球贵宾休息室、快速安检等高端服务。\n              </p> <div class=\"show-list\"><img"+(_vm._ssrAttr("src",__webpack_require__(104)))+" alt> <img"+(_vm._ssrAttr("src",__webpack_require__(105)))+" alt> <img"+(_vm._ssrAttr("src",__webpack_require__(106)))+" alt></div></div> <div class=\"text\"><p><img"+(_vm._ssrAttr("src",__webpack_require__(62)))+" alt>与航空公司合作，支持积分兑换里程、充话费送里程等权益。\n              </p> <div class=\"show-list\"><img"+(_vm._ssrAttr("src",__webpack_require__(107)))+" alt> <img"+(_vm._ssrAttr("src",__webpack_require__(108)))+" alt> <img"+(_vm._ssrAttr("src",__webpack_require__(109)))+" alt></div></div></div> <div class=\"capacity-content3\""+(_vm._ssrStyle(null,null, { display: (_vm.current === 2) ? '' : 'none' }))+"><div class=\"text\"><p><img"+(_vm._ssrAttr("src",__webpack_require__(62)))+" alt>\n                拥有多家银行服务专业经验，无仓储，无物流，交付快，成本低。\n              </p> <img"+(_vm._ssrAttr("src",__webpack_require__(110)))+" alt class=\"cu1\"></div> <div class=\"text\"><p><img"+(_vm._ssrAttr("src",__webpack_require__(62)))+" alt>产品介入支持多种H5/API、兑换码等方式，可一键接入，权益可灵活配置。\n              </p> <img"+(_vm._ssrAttr("src",__webpack_require__(111)))+" alt class=\"cu2\"></div></div></div></div></section> <section class=\"plan\"><div class=\"container\"><img"+(_vm._ssrAttr("src",__webpack_require__(57)))+" alt> <div class=\"plan-form\"><h2>完善信息后 48小时内会有专门的商务人员与您对接</h2> <div class=\"item\"><div class=\"text\"><span>*</span>您的姓名：</div> <input type=\"text\" maxlength=\"10\" placeholder=\"请输入姓名\" name id=\"name\""+(_vm._ssrAttr("value",(_vm.name)))+"> <div class=\"input-error\">"+_vm._ssrEscape(_vm._s(_vm.name_error))+"</div></div> <div class=\"item\"><div class=\"text\">公司名称：</div> <input type=\"text\" placeholder=\"请输入公司名称\" maxlength=\"100\" name id=\"companyName\""+(_vm._ssrAttr("value",(_vm.company_name)))+"> <div class=\"input-error\">"+_vm._ssrEscape(_vm._s(_vm.company_name_error))+"</div></div> <div class=\"item\"><div class=\"text\"><span>*</span>联系电话：</div> <input type=\"text\" placeholder=\"请输入联系电话\" maxlength=\"30\" name id=\"phone\""+(_vm._ssrAttr("value",(_vm.phone)))+"> <div class=\"input-error\">"+_vm._ssrEscape(_vm._s(_vm.phone_error))+"</div></div> <div class=\"item code\"><div class=\"text\"><span>*</span>验证码：</div> <input type=\"text\" placeholder=\"请输入验证码\" name id=\"code\""+(_vm._ssrAttr("value",(_vm.code)))+"> <div class=\"input-error\">"+_vm._ssrEscape(_vm._s(_vm.code_error))+"</div> <div class=\"get-code\">获取验证码</div></div> <div class=\"plan-btn\">免费获取方案</div></div></div></section> <section class=\"service-value\"><div class=\"container\"><div class=\"common-title\"><div class=\"name\">服务价值</div> <div class=\"desc\">\n            助力企业满足用户对高品质服务的需求，提升拉新促活能力与品牌忠诚度\n          </div></div> <div class=\"list\">"+(_vm._ssrList((_vm.service_value),function(item,index){return ("<div"+(_vm._ssrClass(null,("item " + (_vm.service_value_current === index && 'active'))))+"><img"+(_vm._ssrAttr("src",_vm.service_value_current === index
                  ? item.icon_selected
                  : item.icon))+" alt> <div class=\"name\">"+_vm._ssrEscape(_vm._s(item.title))+"</div> <div><ul>"+(_vm._ssrList((item.list),function(i){return ("<li>"+_vm._ssrEscape("\n                  "+_vm._s(i)+"\n                ")+"</li>")}))+"</ul></div></div>")}))+"</div></div></section> <section class=\"client\"><div class=\"container\"><div class=\"common-title\"><div class=\"name\">我们服务的行业客户</div></div> <img"+(_vm._ssrAttr("src",__webpack_require__(112)))+" alt></div></section> "),_c('oakForm')],2),_vm._ssrNode(" "),_c('oakFooter'),_vm._ssrNode(" <div"+(_vm._ssrClass(null,("dialog " + (_vm.showDialog && 'show-dialog'))))+"><div class=\"dialog-bg\"></div> <div class=\"dialog-container\">\n      提交成功，稍后会有专门商务联络，谢谢！\n      <div class=\"close\">✖</div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=f2d43aae&

// EXTERNAL MODULE: ./components/header/header.vue + 4 modules
var header = __webpack_require__(27);

// EXTERNAL MODULE: ./components/footer/footer.vue + 4 modules
var footer = __webpack_require__(28);

// EXTERNAL MODULE: ./components/form/form.vue + 4 modules
var form_form = __webpack_require__(61);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: "IndexPage",
  components: {
    oakHeader: header["default"],
    oakFooter: footer["default"],
    oakForm: form_form["default"]
  },

  data() {
    return {
      name: "",
      name_error: "",
      company_name: "",
      company_name_error: "",
      phone: "",
      phone_error: "",
      code: "",
      code_error: "",
      list: ["一站式权益 低成本 高价值", "独家稀缺权益 提升产品竞争力", "专业服务   灵活定制"],
      current: 0,
      service_value: [{
        icon: __webpack_require__(113),
        icon_selected: __webpack_require__(114),
        title: "活跃",
        list: ["• 提升用户行为活跃", "• 提升用户交易活跃", "• 延长用户生命周"]
      }, {
        icon: __webpack_require__(115),
        icon_selected: __webpack_require__(116),
        title: "创收",
        list: ["• 获得会员费营收", "• 带动主营业务增收"]
      }, {
        icon: __webpack_require__(117),
        icon_selected: __webpack_require__(118),
        title: "客户关怀",
        list: ["• 通过会员礼，提升品牌价值", "• 提升用户尊贵感", "• 提升用户归属感"]
      }, {
        icon: __webpack_require__(119),
        icon_selected: __webpack_require__(120),
        title: "用户画像",
        list: ["• 整合多平台消费者数据", "• 构建画像与标签体系", "• 数据驱动精细化会员运营"]
      }],
      service_value_current: -1,
      showDialog: false
    };
  },

  head() {
    return {
      title: "橡树黑卡--值得信赖的会员权益平台",
      meta: [{
        hid: "index",
        name: "description",
        content: "橡树黑卡为金融、互联网、电商、零售等行业提供强大的用户运营全周期服务，提供积分体系运营、会员营销运营、游戏化运营等方案，400-150-9669。"
      }, {
        name: "keywords",
        content: "橡树黑卡，会员权益，会员积分，视频会员，网站会员，app会员，用户运营，SaaS平台"
      }]
    };
  },

  mounted() {
    this.$refs.index.scrollIntoView();
  },

  methods: {
    getCode() {//获取验证码
    },

    getPlan() {
      this.showDialog = true;

      if (!this.name) {
        this.name_error = "请填写您的姓名";
        return;
      } else {
        this.name_error = "";
      }

      if (!this.phone) {
        this.phone_error = "请填写您的联系电话";
        return;
      } else {
        if (!/^1([3-9])\d{9}$/.test(this.phone)) {
          this.phone_error = "请填写正确的联系电话";
          return;
        }

        this.phone_error = "";
      }

      if (!this.code) {
        this.code_error = "请填写验证码";
        return;
      } else {
        this.code_error = "";
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(121)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "e02e9f9e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })
]);;
//# sourceMappingURL=index.js.map