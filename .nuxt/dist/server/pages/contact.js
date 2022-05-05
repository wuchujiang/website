exports.ids = [5,1,3];
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("f0b3fa0e", content, true, context)
};

/***/ }),
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
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footer/footer.vue?vue&type=template&id=2f2f33fa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"left\"><img"+(_vm._ssrAttr("src",__webpack_require__(44)))+" alt> <p>合作电话：400-150-9669</p> <p>业务合作：marketing@oakblack.com</p> <p>媒体合作：media@oakblack.com</p></div> "),_vm._ssrNode("<div class=\"r-nav\">","</div>",[_vm._ssrNode("<div class=\"item\">","</div>",[_vm._ssrNode("<h2>产品服务</h2> "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/saas"}},[_vm._v("会员SAAS服务")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/operation"}},[_vm._v("精细化运营服务")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"item\">","</div>",[_vm._ssrNode("<h2>关于我们</h2> "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/about"}},[_vm._v("公司介绍")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/contact"}},[_vm._v("联系我们")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"item\">","</div>",[_vm._ssrNode("<h2>加入我们</h2> "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":"/join"}},[_vm._v("招聘职位")])],1)])],2)],2)],2),_vm._ssrNode(" <div class=\"copyright\"><a href=\"https://beian.miit.gov.cn/\" target=\"_blank\">粤ICP备18120172号</a> Copyright ©\n    2018 深圳市橡树黑卡网络科技有限公司 XSHKVIP.COM\n  </div> <div class=\"suspend\"><div class=\"item online-hover\"><img"+(_vm._ssrAttr("src",__webpack_require__(45)))+" alt> <div class=\"text\">在线咨询</div> <div class=\"online-consult\"><div class=\"online-consult-main\"><h3>亲爱的用户</h3> <p>为了更好的帮您解决问题，请选择您要咨询的会员类型</p> <ul><li><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\"><img"+(_vm._ssrAttr("src",__webpack_require__(46)))+" alt>省呗</a></li> <li><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\"><img"+(_vm._ssrAttr("src",__webpack_require__(47)))+" alt>小赢卡贷</a></li> <li><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\"><img"+(_vm._ssrAttr("src",__webpack_require__(48)))+" alt>keep</a></li> <li><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\"><img"+(_vm._ssrAttr("src",__webpack_require__(49)))+" alt>榕树贷款</a></li> <li><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\"><img"+(_vm._ssrAttr("src",__webpack_require__(50)))+" alt>新橙优品</a></li> <li><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\"><img"+(_vm._ssrAttr("src",__webpack_require__(51)))+" alt>其他</a></li></ul> <p>如您需要商务合作请联络邮箱：marketing@oakblack.com</p> <p>电话：400-150-9669</p></div></div></div> <div class=\"item item2\"><img"+(_vm._ssrAttr("src",__webpack_require__(52)))+" alt> <div class=\"text\">\n        电话咨询\n        <p>400-150-9669</p></div> <div class=\"phone-consult\"><div class=\"phone-consult-main\"><h4>客服电话：400-150-9669</h4> <h4>客服工作时间：</h4> <p>周一到周五：9：00～20：00</p> <span>(在线和电话)</span> <p>周末或节假日：9：00～20：00</p> <span>(电话)</span></div></div></div> <div class=\"item\"><img"+(_vm._ssrAttr("src",__webpack_require__(53)))+" alt> <div class=\"text\">\n        返回顶部\n      </div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/footer/footer.vue?vue&type=template&id=2f2f33fa&

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
  
  var style0 = __webpack_require__(54)
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

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo2.f72a0aa.png";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/suspend1.07a3205.png";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh1.4ce57c5.png";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh2.111c040.png";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh3.c4c197c.png";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh4.32ab95a.png";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh5.2b8b3b8.png";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh6.22c1639.png";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/suspend2.6264901.png";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/suspend3.6f91d5d.png";

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".footer{background-color:#333;padding:72px 0}.footer .container{display:flex;justify-content:space-between}.footer .left{font-size:14px;color:#fff}.footer .left p{margin-top:24px}.r-nav{display:flex;color:#fff}.r-nav .item{margin-left:170px}.r-nav .item h2{font-size:20px}.r-nav .item ul li{margin-top:22px;font-size:14px}.r-nav .item ul li a{color:#fff;transition:all .3s linear}.r-nav .item ul li:hover a{opacity:.8}.copyright{text-align:center;margin-top:72px;color:#999}.copyright a{color:#999}.suspend{position:fixed;width:80px;right:30px;top:50%;transform:translateY(-50%);z-index:51}.suspend .item{width:100%;height:80px;background:linear-gradient(173deg,#ff8133,#ff6c29);margin-bottom:10px;border-radius:5px;font-size:12px;color:#fff;text-align:center;position:relative;cursor:pointer}.suspend .item .text{transform:translateY(-10px)}.suspend .item.item2{height:90px}.online-consult,.phone-consult{position:absolute;right:78px;top:-20px;border-radius:5px;display:none}.online-consult-main{box-sizing:border-box;background-color:#fff;box-shadow:0 0 10px 0 rgba(0,0,0,.1);width:418px;margin-right:12px;padding:24px 28px;text-align:left;color:#333;font-size:14px;border-radius:5px}.online-consult-main ul{display:flex;margin-bottom:22px;margin-top:16px}.online-consult-main ul li{text-align:center;width:60px}.online-consult-main ul li a{color:#333}.online-consult-main ul li img{width:40px;height:40px;display:block;margin:0 auto 5px}.online-consult-main p{font-size:14px;color:#666;margin-top:4px}.online-hover:hover .online-consult{display:block}.phone-consult-main{box-sizing:border-box;background-color:#fff;box-shadow:0 0 10px 0 rgba(0,0,0,.1);width:280px;margin-right:12px;padding:18px;text-align:left;color:#333;font-size:14px;border-radius:5px}.item2:hover .phone-consult{display:block}.phone-consult h4{margin-bottom:10px;font-size:18px}.phone-consult p{font-size:16px;color:#333;margin-top:10px}.phone-consult span{font-size:14px;color:#666}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon11.4bc15c2.png";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/about-banner.d8a2b1e.png";

/***/ }),
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(77);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("007a9bda", content, true, context)
};

/***/ }),
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img11.de7963e.png";

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(24);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(62);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".about-banner{width:100%;height:430px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat 50%}.contact-main{padding:75px 0}.contact-main .container{display:flex;justify-content:space-between}.contact-main .item{box-sizing:border-box;padding-top:35px;width:30%;height:283px;background-color:#333;border-radius:4px;text-align:center;color:#fff}.contact-main .item h4{font-size:16px;margin-top:15px}.contact-main .item p{font-size:16px;margin-top:18px}.contact-main .item button{background:#ff5001;border-radius:4px;display:flex;font-size:16px;margin:28px auto 0;border:none}.contact-main .item button,.contact-main .item button a{width:154px;height:42px;align-items:center;justify-content:center;color:#fff}.contact-main .item button a{display:block;display:flex}.contact-main .item button.btn{background-color:#fff;color:#ff5001}.contact-form{background-color:#fbfbfb;margin-bottom:72px}.contact-form .container{display:flex;justify-content:space-between}.plan-form h2{text-align:center;font-size:24px;color:#333;padding-top:58px}.plan-form .item{margin-top:30px;display:flex;position:relative}.plan-form .item .text{width:88px;text-align:right;line-height:50px;font-size:16px;color:#333}.plan-form .item .text span{color:#ff5001}.plan-form .item input{width:520px;height:50px;background-color:#eee;border:none;text-indent:10px;font-size:16px;outline:none}.plan-form .item.code input{width:285px}.get-code{width:117px;height:40px;background-color:#333;text-align:center;line-height:40px;color:#fff;font-size:16px;border-radius:4px;margin:5px 0 0 26px;cursor:pointer;transition:all .3s linear}.get-code:hover{opacity:.8}.plan-btn{width:190px;height:50px;background-color:#333;text-align:center;line-height:50px;color:#fff;font-size:16px;border-radius:4px;margin:40px 0 0 232px;cursor:pointer;transition:all .3s linear}.plan-btn:hover{opacity:.8}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
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
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=template&id=72ec721e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('oakHeader',{attrs:{"current":2}}),_vm._ssrNode(" <main><section class=\"about-banner\"></section> <section class=\"contact-main\"><div class=\"container\"><div class=\"item\"><img"+(_vm._ssrAttr("src",__webpack_require__(61)))+" alt> <h4>在线客服</h4> <p>周一到周五：9：00～20：00 (在线和电话)</p> <button><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=28877\" target=\"_blank\">立即联系</a></button></div> <div class=\"item\"><img"+(_vm._ssrAttr("src",__webpack_require__(61)))+" alt> <h4>电话咨询</h4> <p>周末或节假日：9：00～20：00 (电话)</p> <button class=\"btn\">400-150-9669</button></div> <div class=\"item\"><img"+(_vm._ssrAttr("src",__webpack_require__(61)))+" alt> <h4>商务合作邮箱</h4> <p>marketing@oakblack.com</p> <button><a href=\"mailto:marketing@oakblack.com\" target=\"_blank\">发送邮件</a></button></div></div></section> <section class=\"contact-form\"><div class=\"container\"><img"+(_vm._ssrAttr("src",__webpack_require__(75)))+" alt> <div class=\"plan-form\"><h2>完善信息后会有专门的商务人员与您对接</h2> <div class=\"item\"><div class=\"text\"><span>*</span>您的姓名：</div> <input type=\"text\" maxlength=\"10\" placeholder=\"请输入姓名\" name id=\"name\""+(_vm._ssrAttr("value",(_vm.name)))+"> <div class=\"input-error\">"+_vm._ssrEscape(_vm._s(_vm.name_error))+"</div></div> <div class=\"item\"><div class=\"text\">公司名称：</div> <input type=\"text\" placeholder=\"请输入公司名称\" maxlength=\"100\" name id=\"companyName\""+(_vm._ssrAttr("value",(_vm.company_name)))+"> <div class=\"input-error\">"+_vm._ssrEscape(_vm._s(_vm.company_name_error))+"</div></div> <div class=\"item\"><div class=\"text\"><span>*</span>联系电话：</div> <input type=\"text\" placeholder=\"请输入联系电话\" maxlength=\"30\" name id=\"phone\""+(_vm._ssrAttr("value",(_vm.phone)))+"> <div class=\"input-error\">"+_vm._ssrEscape(_vm._s(_vm.phone_error))+"</div></div> <div class=\"item code\"><div class=\"text\"><span>*</span>验证码：</div> <input type=\"text\" placeholder=\"请输入验证码\" name id=\"code\""+(_vm._ssrAttr("value",(_vm.code)))+"> <div class=\"input-error\">"+_vm._ssrEscape(_vm._s(_vm.code_error))+"</div> <div class=\"get-code\">获取验证码</div></div> <div class=\"plan-btn\">免费获取方案</div></div></div></section></main> "),_c('oakFooter')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/contact.vue?vue&type=template&id=72ec721e&

// EXTERNAL MODULE: ./components/header/header.vue + 4 modules
var header = __webpack_require__(27);

// EXTERNAL MODULE: ./components/footer/footer.vue + 4 modules
var footer = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var contactvue_type_script_lang_js_ = ({
  name: "contact",
  components: {
    oakHeader: header["default"],
    oakFooter: footer["default"]
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
      code_error: ""
    };
  },

  head() {
    return {
      title: "橡树黑卡--联系我们",
      meta: [{
        hid: "about",
        name: "description",
        content: "完善您的信息后，橡树黑卡会有专门的商务人员与您对接，400-150-9669。"
      }, {
        name: "keywords",
        content: "付费会员，会员权益，高新技术企业，提升活跃，带动营收，增加收入，客户关怀，用户画像，延长用户生命周期"
      }]
    };
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
// CONCATENATED MODULE: ./pages/contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contactvue_type_script_lang_js_ = (contactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/contact.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(76)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "29cdfebf"
  
)

/* harmony default export */ var contact = __webpack_exports__["default"] = (component.exports);

/***/ })
]);;
//# sourceMappingURL=contact.js.map