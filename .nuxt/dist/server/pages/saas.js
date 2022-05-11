exports.ids = [9,1,2,3];
exports.modules = Array(22).concat([
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh1.4ce57c5.png";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh2.111c040.png";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh3.c4c197c.png";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh4.32ab95a.png";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh5.2b8b3b8.png";

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/header/header.vue?vue&type=template&id=ab97de6c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"header",attrs:{"id":"header"}},[_vm._ssrNode("<div class=\"container\" data-v-ab97de6c>","</div>",[_vm._ssrNode("<h1 class=\"logo\" data-v-ab97de6c>","</h1>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":__webpack_require__(33),"alt":""}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<nav class=\"nav\" data-v-ab97de6c>","</nav>",[_vm._ssrNode("<ul data-v-ab97de6c>","</ul>",_vm._l((_vm.nav),function(item,index){return _vm._ssrNode("<li"+(_vm._ssrClass(null,{ item: true, active: _vm.current === index }))+" data-v-ab97de6c>","</li>",[_c('nuxt-link',{class:{ down: item.second },attrs:{"to":item.url}},[_vm._v(_vm._s(item.name))]),_vm._ssrNode(" "),(item.second)?_vm._ssrNode("<div"+(_vm._ssrClass(null,("sec_nav " + (item.type))))+" data-v-ab97de6c>","</div>",[_vm._ssrNode("<div class=\"sec_nav-main\" data-v-ab97de6c>","</div>",_vm._l((item.second),function(i){return _vm._ssrNode("<div"+(_vm._ssrClass(null,[{item: true, sec_active: _vm.sec_current === i.type}, ("" + (i.type))]))+" data-v-ab97de6c>","</div>",[_c('nuxt-link',{attrs:{"to":i.url}},[_c('span'),_vm._v(_vm._s(i.name))])],1)}),0)]):_vm._e()],2)}),0)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"heaedr-r\" data-v-ab97de6c>","</div>",[_vm._ssrNode("<div class=\"phone\" data-v-ab97de6c>400-150-9669</div> "),_vm._ssrNode("<div class=\"mobile-nav\" data-v-ab97de6c>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(34)))+" alt data-v-ab97de6c> "),_vm._ssrNode("<ul data-v-ab97de6c>","</ul>",_vm._l((_vm.nav),function(item,index){return _vm._ssrNode("<li"+(_vm._ssrClass(null,{ item: true, active: _vm.current === index }))+" data-v-ab97de6c>","</li>",[_c('nuxt-link',{class:{ down: item.second },attrs:{"to":item.url}},[_vm._v(_vm._s(item.name))]),_vm._ssrNode(" "),(item.second)?_vm._ssrNode("<div"+(_vm._ssrClass(null,("sec_nav " + (item.type))))+" data-v-ab97de6c>","</div>",[_vm._ssrNode("<div class=\"sec_nav-main\" data-v-ab97de6c>","</div>",_vm._l((item.second),function(i){return _vm._ssrNode("<div"+(_vm._ssrClass(null,[{item: true, sec_active: _vm.sec_current === i.type}, ("" + (i.type))]))+" data-v-ab97de6c>","</div>",[_c('nuxt-link',{attrs:{"to":i.url}},[_c('span'),_vm._v(_vm._s(i.name))])],1)}),0)]):_vm._e()],2)}),0)],2)],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/header/header.vue?vue&type=template&id=ab97de6c&scoped=true&

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["current", "sec_current"],

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
  
  var style0 = __webpack_require__(35)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  header_headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ab97de6c",
  "2a94ca8f"
  
)

/* harmony default export */ var header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(29).default})


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footer/footer.vue?vue&type=template&id=cc0c13d8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer"},[_vm._ssrNode("<div class=\"container\" data-v-cc0c13d8>","</div>",[_vm._ssrNode("<div class=\"left\" data-v-cc0c13d8><img"+(_vm._ssrAttr("src",__webpack_require__(36)))+" alt data-v-cc0c13d8> <p data-v-cc0c13d8>合作电话：400-150-9669</p> <p data-v-cc0c13d8>业务合作：marketing@oakblack.com</p> <p data-v-cc0c13d8>媒体合作：media@oakblack.com</p> <a target=\"_blank\" href=\"http://wpa.qq.com/msgrd?v=3&uin=&site=qq&menu=yes\" class=\"qqkf\" data-v-cc0c13d8>QQ咨询</a></div> "),_vm._ssrNode("<div class=\"r-nav\" data-v-cc0c13d8>","</div>",[_vm._ssrNode("<div class=\"item\" data-v-cc0c13d8>","</div>",[_vm._ssrNode("<h2 data-v-cc0c13d8>产品服务</h2> "),_vm._ssrNode("<ul data-v-cc0c13d8>","</ul>",[_vm._ssrNode("<li data-v-cc0c13d8>","</li>",[_c('nuxt-link',{attrs:{"to":"/saas"}},[_vm._v("会员SAAS服务")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-cc0c13d8>","</li>",[_c('nuxt-link',{attrs:{"to":"/operation"}},[_vm._v("精细化运营服务")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"item\" data-v-cc0c13d8>","</div>",[_vm._ssrNode("<h2 data-v-cc0c13d8>关于我们</h2> "),_vm._ssrNode("<ul data-v-cc0c13d8>","</ul>",[_vm._ssrNode("<li data-v-cc0c13d8>","</li>",[_c('nuxt-link',{attrs:{"to":"/about"}},[_vm._v("公司介绍")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-cc0c13d8>","</li>",[_c('nuxt-link',{attrs:{"to":"/contact"}},[_vm._v("联系我们")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"item\" data-v-cc0c13d8>","</div>",[_vm._ssrNode("<h2 data-v-cc0c13d8>加入我们</h2> "),_vm._ssrNode("<ul data-v-cc0c13d8>","</ul>",[_vm._ssrNode("<li data-v-cc0c13d8>","</li>",[_c('nuxt-link',{attrs:{"to":"/join"}},[_vm._v("招聘职位")])],1)])],2)],2)],2),_vm._ssrNode(" <div class=\"copyright\" data-v-cc0c13d8><span data-v-cc0c13d8><a href=\"https://beian.miit.gov.cn/\" target=\"_blank\" data-v-cc0c13d8>粤ICP备18120172号</a>\n    Copyright © 2018</span> 深圳市橡树黑卡网络科技有限公司 XSHKVIP.COM\n  </div> <div class=\"suspend\" data-v-cc0c13d8><div class=\"item online-hover\" data-v-cc0c13d8><img"+(_vm._ssrAttr("src",__webpack_require__(37)))+" alt data-v-cc0c13d8> <div class=\"online-consult\" data-v-cc0c13d8><div class=\"online-consult-main\" data-v-cc0c13d8><h3 data-v-cc0c13d8>亲爱的用户</h3> <p data-v-cc0c13d8>为了更好的帮您解决问题，请选择您要咨询的会员类型</p> <ul data-v-cc0c13d8><li data-v-cc0c13d8><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\" data-v-cc0c13d8><img"+(_vm._ssrAttr("src",__webpack_require__(22)))+" alt data-v-cc0c13d8><span data-v-cc0c13d8>省呗</span></a></li> <li data-v-cc0c13d8><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\" data-v-cc0c13d8><img"+(_vm._ssrAttr("src",__webpack_require__(23)))+" alt data-v-cc0c13d8><span data-v-cc0c13d8>小赢卡贷</span></a></li> <li data-v-cc0c13d8><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\" data-v-cc0c13d8><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-cc0c13d8><span data-v-cc0c13d8>keep</span></a></li> <li data-v-cc0c13d8><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\" data-v-cc0c13d8><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-cc0c13d8><span data-v-cc0c13d8>榕树贷款</span></a></li> <li data-v-cc0c13d8><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\" data-v-cc0c13d8><img"+(_vm._ssrAttr("src",__webpack_require__(26)))+" alt data-v-cc0c13d8><span data-v-cc0c13d8>新橙优品</span></a></li> <li data-v-cc0c13d8><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\" data-v-cc0c13d8><img"+(_vm._ssrAttr("src",__webpack_require__(38)))+" alt data-v-cc0c13d8><span data-v-cc0c13d8>其他</span></a></li></ul> <p data-v-cc0c13d8>\n            如您需要商务合作请联络邮箱：<a href=\"mailto:marketing@oakblack.com\" target=\"_blank\" data-v-cc0c13d8><span data-v-cc0c13d8>marketing@oakblack.com</span></a></p> <p data-v-cc0c13d8>电话：400-150-9669</p></div></div></div> <div class=\"item item2\" data-v-cc0c13d8><img"+(_vm._ssrAttr("src",__webpack_require__(39)))+" alt data-v-cc0c13d8> <div class=\"phone-consult\" data-v-cc0c13d8><div class=\"phone-consult-main\" data-v-cc0c13d8><h4 data-v-cc0c13d8>客服电话<span data-v-cc0c13d8>400-150-9669</span></h4> <h4 data-v-cc0c13d8>客服工作时间</h4> <p data-v-cc0c13d8>周一到周五：9：00～20：00（在线和电话）</p> <p data-v-cc0c13d8>周末或节假日：9：00～20：00（电话）</p></div></div></div> "+((_vm.showBackTop)?("<div class=\"item\" data-v-cc0c13d8><img"+(_vm._ssrAttr("src",__webpack_require__(40)))+" alt data-v-cc0c13d8></div>"):"<!---->")+"</div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/footer/footer.vue?vue&type=template&id=cc0c13d8&scoped=true&

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return {
      showBackTop: false
    };
  },

  mounted() {
    document.addEventListener("scroll", () => {
      const scroll = document.documentElement.scrollTop || document.body.scrollTop;

      if (scroll > 500 && !this.showBackTop) {
        this.showBackTop = true;
      } else if (scroll <= 500 && this.showBackTop) {
        this.showBackTop = false;
      }
    });
    !function (x) {
      function w() {
        var v,
            u,
            t,
            tes,
            s = x.document,
            r = s.documentElement,
            a = r.getBoundingClientRect().width;

        if (!v && !u) {
          var n = !!x.navigator.appVersion.match(/AppleWebKit.*Mobile.*/);
          v = x.devicePixelRatio;
          tes = x.devicePixelRatio;
          v = n ? v : 1, u = 1 / v;
        }

        if (a >= 640) {
          r.style.fontSize = "23.4375px";
        } else {
          if (a <= 320) {
            r.style.fontSize = "23.4375px";
          } else {
            r.style.fontSize = a / 320 * 20 + "px";
          }
        }
      }

      x.addEventListener("resize", function () {
        w();
      });
      w();
    }(window);
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
  
  var style0 = __webpack_require__(41)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footer_footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "cc0c13d8",
  "3f9dbecf"
  
)

/* harmony default export */ var footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(30).default})


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/close.ce01f75.png";

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.b6e5be2.png";

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAAAY0lEQVRYCe2UQQrAMAgEY8mT/F+T//knSwv2lqNCyHhRUFwZZFsjTicgAUBV76grspnNV6eHmLuPqIvyd8BVJLaU+QmIyFhO0YAABBIJ4IQ4YeJ7sRoCmxDACXHCTV6VMxMJPLEZGaV5wuftAAAAAElFTkSuQmCC"

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_ab97de6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_ab97de6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_ab97de6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_ab97de6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_ab97de6c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo2.f1af3d8.png";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/suspend1.4ae37a9.png";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh6.22c1639.png";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/suspend2.3216117.png";

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAALaADAAQAAAABAAAALQAAAABGqAVQAAAC3ElEQVRYCe2Yv2/TQBTH33PikNJQ8RupSAgGBihtU/gLSlaGltYgFsTAvwFqga0SC38AA0OFSn7AwABJACExIJaCBAssMIGg0CSlau3k8c7UlWvHsWNfpjhS5Lv37r7vc9+cnUsA4lfsQOxA7EDfOICyV0rawDEwNnOQHCrg0u9V2fpCTyo0TannAIwy6+5l5U+Q3j2Ji2vfZYMrsgTponqWgZ+bwEKU4BSs/63SlcEjsmpYOlKcphl1AppGhUX3WcK260fAwUksNn7YYpGakZ02gVvmlmgHLOBOA6xVScscikRqmxwJmjQ1CwKYYL9N090kGAFDHnjo7UHT6jjv4QoDH3BTekY+wEDmPC7Wf3qOCJAI5TTNpMZCAAucUVhv8M2552AANs8hXTtNWmoUdL3KiuELI7wHYMeL9V+eZB0SXUHTdOoMkP4iErAFg7DM4Lkw4IG3hwkMER22gMWVYByoUSZtqPNNbJ+z1Q4EzXt4BEAXN520x9ZW/Szo9Uq34L7QfJY4Ci12mOBwm0X/DyFscuOPR77mEbfCArxM146nrYDf1Rca9I2rPsA6oKJxoS8exfirHW945KzwBNS+XbA6fld/aG8HxXFLB1A0LDSfdCqEpdYdUPBmpzGstdExb0v6Q6uZhyzoPjcIYEW5hMXmY5ueZxMLrdu8yjmPAV9h+MQzj5wr7AuNS7UVSCRmGXxle7YARuUy5pul7ViABjs+z47P7xhq6iY1vPdZotNcAR8ZryGZHgPEW/y+z4vI8ZYoOooHeuaz43P8CV3nuU9Z6y7sSmexpL/doeXTCVTIR8NM0xS+4wb/CHC98liiWVc0QsB3e0TQ7tnUGLpn1jqEY6cdhvSsGzvdM2sdwn3uNEL7IyjiqsOoyF2JTuPL9jT4qn08fFQedHJ4gTHeOFDyUDAeOGKRu9LOHoKENC0BRoEP83SSz9nLWDT/24sMGQvEDsQOxA70sQP/AK/euoPzJA03AAAAAElFTkSuQmCC"

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_cc0c13d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_cc0c13d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_cc0c13d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_cc0c13d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_cc0c13d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img11.8918ed7.png";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img12.da9e37e.png";

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_38b0288e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_38b0288e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_38b0288e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_38b0288e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_38b0288e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/form.vue?vue&type=template&id=38b0288e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.hidePlan)?_c('section',{class:("free-plan " + (_vm.clearFixed && 'clear-fixed'))},[_vm._ssrNode("<div class=\"container\" data-v-38b0288e><img"+(_vm._ssrAttr("src",__webpack_require__(43)))+" alt class=\"img\" data-v-38b0288e> <div class=\"free-get-plan\" data-v-38b0288e>免费获取方案</div> <img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt class=\"img-close\" data-v-38b0288e></div> "+((_vm.showForm)?("<div class=\"form-dialog\" data-v-38b0288e><div class=\"form-dialog-main\" data-v-38b0288e><img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt class=\"form-dialog-close\" data-v-38b0288e> <img"+(_vm._ssrAttr("src",__webpack_require__(42)))+" alt class=\"b-img\" data-v-38b0288e> <div class=\"plan-form\" data-v-38b0288e><div class=\"mobile-top\" data-v-38b0288e><h4 data-v-38b0288e>这些企业都已免费获得定制会员方案</h4> <ul data-v-38b0288e><li data-v-38b0288e><img"+(_vm._ssrAttr("src",__webpack_require__(22)))+" alt data-v-38b0288e>省呗\n            </li> <li data-v-38b0288e><img"+(_vm._ssrAttr("src",__webpack_require__(23)))+" alt data-v-38b0288e>小赢卡贷\n            </li> <li data-v-38b0288e><img"+(_vm._ssrAttr("src",__webpack_require__(24)))+" alt data-v-38b0288e>keep\n            </li> <li data-v-38b0288e><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-38b0288e>榕树贷款\n            </li> <li data-v-38b0288e><img"+(_vm._ssrAttr("src",__webpack_require__(26)))+" alt data-v-38b0288e>新橙优品\n            </li></ul></div> <h2 data-v-38b0288e>完善信息后 48小时内会有专门的商务人员与您对接</h2> <div class=\"item\" data-v-38b0288e><div class=\"text\" data-v-38b0288e><span data-v-38b0288e>*</span>您的姓名：</div> <input type=\"text\" maxlength=\"10\" placeholder=\"请输入姓名\" name id=\"name\" autocomplete=\"off\""+(_vm._ssrAttr("value",(_vm.name)))+" data-v-38b0288e> <div class=\"input-error\" data-v-38b0288e>"+_vm._ssrEscape(_vm._s(_vm.name_error))+"</div></div> <div class=\"item\" data-v-38b0288e><div class=\"text\" data-v-38b0288e>公司名称：</div> <input type=\"text\" placeholder=\"请输入公司名称\" maxlength=\"100\" name id=\"companyName\" autocomplete=\"off\""+(_vm._ssrAttr("value",(_vm.company_name)))+" data-v-38b0288e> <div class=\"input-error\" data-v-38b0288e>"+_vm._ssrEscape(_vm._s(_vm.company_name_error))+"</div></div> <div class=\"item\" data-v-38b0288e><div class=\"text\" data-v-38b0288e><span data-v-38b0288e>*</span>联系电话：</div> <input type=\"text\" placeholder=\"请输入联系电话\" maxlength=\"30\" name id=\"phone\" autocomplete=\"off\""+(_vm._ssrAttr("value",(_vm.phone)))+" data-v-38b0288e> <div class=\"input-error\" data-v-38b0288e>"+_vm._ssrEscape(_vm._s(_vm.phone_error))+"</div></div> <div class=\"item\" data-v-38b0288e><div class=\"text\" data-v-38b0288e><span data-v-38b0288e>*</span>验证码：</div> <input type=\"text\" placeholder=\"请输入验证码\" name id=\"code\" autocomplete=\"off\""+(_vm._ssrAttr("value",(_vm.code)))+" data-v-38b0288e> <div class=\"input-error\" data-v-38b0288e>"+_vm._ssrEscape(_vm._s(_vm.code_error))+"</div> <div class=\"get-code\" data-v-38b0288e>获取验证码</div></div> <div class=\"plan-btn\" data-v-38b0288e>免费获取方案</div></div></div></div>"):"<!---->"))]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/form/form.vue?vue&type=template&id=38b0288e&scoped=true&

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
    let footer_height = 290;

    if (window.innerWidth < 641) {
      footer_height = 400;
    }

    const timer = setTimeout(() => {
      const documentHeight = document.body.scrollHeight;
      document.addEventListener("scroll", () => {
        const scroll = document.documentElement.scrollTop || document.body.scrollTop;
        let top = scroll + window.innerHeight + footer_height;

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
  
  var style0 = __webpack_require__(44)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  form_formvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "38b0288e",
  "5c789a2f"
  
)

/* harmony default export */ var form_form = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon8.867805d.png";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon9.b78df08.png";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon10.a63312e.png";

/***/ }),
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img4.2d60484.png";

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img5.26749dc.png";

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img1.a65a321.png";

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img2.bbdf6d9.png";

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img3.00d58a3.png";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img6.f6c055d.png";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img4.b0d7413.png";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img7.e665d17.png";

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_saas_vue_vue_type_style_index_0_id_9928deda_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_saas_vue_vue_type_style_index_0_id_9928deda_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_saas_vue_vue_type_style_index_0_id_9928deda_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_saas_vue_vue_type_style_index_0_id_9928deda_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_saas_vue_vue_type_style_index_0_id_9928deda_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
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
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/saas.vue?vue&type=template&id=9928deda&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.pageShow),expression:"pageShow"}],ref:"saas"},[_c('oakHeader',{attrs:{"current":1,"sec_current":"nav_saas"}}),_vm._ssrNode(" "),_vm._ssrNode("<main data-v-9928deda>","</main>",[_vm._ssrNode("<section class=\"saas-banner\" data-v-9928deda></section> <section class=\"saas-tab\" data-v-9928deda><div class=\"container\" data-v-9928deda>"+(_vm._ssrList((_vm.tab),function(item,index){return ("<div"+(_vm._ssrClass(null,{'item': true, 'active': _vm.current === index}))+" data-v-9928deda>"+_vm._ssrEscape("\n          "+_vm._s(item)+"\n        ")+"</div>")}))+"</div></section> "),_vm._ssrNode("<section class=\"mobile-second-nav\" data-v-9928deda>","</section>",[_vm._ssrNode("<ul data-v-9928deda>","</ul>",_vm._l((_vm.sec_list),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass(null,{active: item.type === 'saas'}))+" data-v-9928deda>","</li>",[_c('nuxt-link',{attrs:{"to":item.url}},[_vm._v(_vm._s(item.title))])],1)}),0)]),_vm._ssrNode(" <section class=\"section1\" data-v-9928deda><div class=\"container\" data-v-9928deda><div class=\"common-title\" data-v-9928deda><div class=\"en\" data-v-9928deda>digitization</div> <div class=\"name\" data-v-9928deda>数字化会员产品设计</div> <div class=\"desc\" data-v-9928deda>橡树支持对会员设计，及全链路的各项核心数据监控</div></div> <section class=\"mobile-section1-main\" data-v-9928deda><img"+(_vm._ssrAttr("src",__webpack_require__(73)))+" alt data-v-9928deda> <h4 data-v-9928deda>丰富的权益资源</h4> <p data-v-9928deda>橡树整合内外部资源，拥有多平台数千个虚拟服务产品的权益资源。</p> <img"+(_vm._ssrAttr("src",__webpack_require__(74)))+" alt data-v-9928deda> <p data-v-9928deda>通过SasS运营赋能的方式快速、定制化输出，可广泛应用于用户生活的不同场景，发挥成本和规模交易的优势，助力客户促活，提升交易量。</p></section> <div class=\"section1-main\" data-v-9928deda><div class=\"left\" data-v-9928deda><p data-v-9928deda>橡树支持对会员设计</p> <p data-v-9928deda>及全链路的各项核心数据监控</p> <ul data-v-9928deda><li data-v-9928deda><img"+(_vm._ssrAttr("src",__webpack_require__(49)))+" alt data-v-9928deda>交易数据</li> <li data-v-9928deda><img"+(_vm._ssrAttr("src",__webpack_require__(50)))+" alt data-v-9928deda>权益使用数据</li> <li data-v-9928deda><img"+(_vm._ssrAttr("src",__webpack_require__(51)))+" alt data-v-9928deda>用户生命周期</li></ul></div> <img"+(_vm._ssrAttr("src",__webpack_require__(75)))+" alt class=\"img1\" data-v-9928deda></div></div></section> <div class=\"section1-2\" data-v-9928deda><div class=\"container\" data-v-9928deda><img"+(_vm._ssrAttr("src",__webpack_require__(76)))+" alt class=\"img2\" data-v-9928deda> <div class=\"text\" data-v-9928deda><p data-v-9928deda>\n            橡树整合内外部资源，拥有包括通信服务、娱乐充值、电商购物卡、网络工具、美食卡券、休闲生活、交通出行、车主服务等多平台数千个虚拟服务产品的权益资源。\n          </p> <p data-v-9928deda></p> <p data-v-9928deda>\n            通过SasS运营赋能的方式快速、定制化输出，可广泛应用于用户生活的不同场景，发挥成本和规模交易的优势，助力客户促活，提升交易量。\n          </p></div></div></div> <section class=\"section2\" data-v-9928deda><div class=\"container\" data-v-9928deda><div class=\"common-title\" data-v-9928deda><div class=\"en\" data-v-9928deda>backstage</div> <div class=\"name\" data-v-9928deda>会员管理后台</div> <div class=\"desc\" data-v-9928deda>橡树支持对会员设计，及全链路的各项核心数据监控</div></div> <div class=\"section2-main\" data-v-9928deda><ul data-v-9928deda><li data-v-9928deda>· 支持快速配置会员上线</li> <li data-v-9928deda>· 支持批量权益SKU管理</li> <li data-v-9928deda>· 支持会员卡和权益管理</li> <li data-v-9928deda>· 支持常见活动快速配置上线</li> <li data-v-9928deda>· 支持支付方式灵活配置</li></ul> <img"+(_vm._ssrAttr("src",__webpack_require__(77)))+" alt data-v-9928deda></div> <div class=\"mobile-section2-main\" data-v-9928deda><img"+(_vm._ssrAttr("src",__webpack_require__(78)))+" alt data-v-9928deda></div></div></section> <section class=\"section3\" data-v-9928deda><div class=\"container\" data-v-9928deda><div class=\"common-title\" data-v-9928deda><div class=\"en\" data-v-9928deda>Technical </div> <div class=\"name\" data-v-9928deda>敏捷高效的技术能力</div> <div class=\"desc\" data-v-9928deda>持续迭代  快速上线</div></div> <div class=\"section3-main\" data-v-9928deda><img"+(_vm._ssrAttr("src",__webpack_require__(79)))+" alt data-v-9928deda> <img"+(_vm._ssrAttr("src",__webpack_require__(80)))+" alt class=\"mobile-img\" data-v-9928deda> <div class=\"right\" data-v-9928deda><ul data-v-9928deda><li data-v-9928deda>快速上线</li> <li data-v-9928deda>持续迭代</li></ul> <div class=\"item\" data-v-9928deda>\n              开发图案经验丰富，累计开发上线50+项目，近一年上线20+项目\n            </div> <div class=\"item\" data-v-9928deda>\n              项目采用敏捷开发流程，每周迭代发版次数达1-2次，，近一年累计发版次数100+\n            </div> <div class=\"item\" data-v-9928deda>\n              系统模块可复用性强，采用微服务模式+中台模式开发\n            </div></div></div></div></section> "),_c('oakForm')],2),_vm._ssrNode(" "),_c('oakFooter')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/saas.vue?vue&type=template&id=9928deda&scoped=true&

// EXTERNAL MODULE: ./components/header/header.vue + 4 modules
var header = __webpack_require__(29);

// EXTERNAL MODULE: ./components/footer/footer.vue + 4 modules
var footer = __webpack_require__(30);

// EXTERNAL MODULE: ./components/form/form.vue + 4 modules
var form_form = __webpack_require__(45);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/saas.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var saasvue_type_script_lang_js_ = ({
  name: "saas",
  components: {
    oakHeader: header["default"],
    oakFooter: footer["default"],
    oakForm: form_form["default"]
  },

  data() {
    return {
      tab: ["数字化会员产品设计", "会员管理后台", "敏捷高效的技术能力"],
      current: 0,
      pageShow: false,
      sec_list: [{
        title: '会员SaaS服务',
        url: "/saas",
        type: 'saas'
      }, {
        title: '精细化运营服务',
        url: "/operation",
        type: 'operation'
      }]
    };
  },

  head() {
    return {
      title: "橡树黑卡--会员SAAS服务",
      meta: [{
        hid: "about",
        name: "description",
        content: "橡树支持对会员设计，及全链路的各项核心数据（包括：交易数据、权益使用数据、用户生命周期等）监控，400-150-9669。"
      }, {
        name: "keywords",
        content: "橡树黑卡，会员SAAS服务，会员设计，配置会员，权益SKU管理，会员卡和权益管理，活动快速配置，敏捷开发"
      }]
    };
  },

  mounted() {
    this.$refs.saas.scrollIntoView();
    this.pageShow = true;
  },

  methods: {
    scrollView(index) {
      this.current = index;
      this.$refs[`section${index + 1}`].scrollIntoView({
        behavior: "smooth"
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/saas.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_saasvue_type_script_lang_js_ = (saasvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/saas.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(81)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_saasvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9928deda",
  "3e3d0ef1"
  
)

/* harmony default export */ var saas = __webpack_exports__["default"] = (component.exports);

/***/ })
]);;
//# sourceMappingURL=saas.js.map