exports.ids = [4,1,2,3];
exports.modules = {

/***/ 18:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 19:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/header/header.vue?vue&type=template&id=7a1f0e7e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"header",attrs:{"id":"header"}},[_vm._ssrNode("<div class=\"container\" data-v-7a1f0e7e>","</div>",[_vm._ssrNode("<h1 class=\"logo\" data-v-7a1f0e7e>","</h1>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":__webpack_require__(24),"alt":""}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<nav class=\"nav\" data-v-7a1f0e7e>","</nav>",[_vm._ssrNode("<ul data-v-7a1f0e7e>","</ul>",_vm._l((_vm.nav),function(item,index){return _vm._ssrNode("<li"+(_vm._ssrClass(null,{ item: true, active: _vm.current === index }))+" data-v-7a1f0e7e>","</li>",[_c('nuxt-link',{class:{ down: item.second },attrs:{"to":item.url}},[_vm._v(_vm._s(item.name))]),_vm._ssrNode(" "),(item.second)?_vm._ssrNode("<div"+(_vm._ssrClass(null,("sec_nav " + (item.type))))+" data-v-7a1f0e7e>","</div>",[_vm._ssrNode("<div class=\"sec_nav-main\" data-v-7a1f0e7e>","</div>",_vm._l((item.second),function(i){return _vm._ssrNode("<div"+(_vm._ssrClass(null,[{item: true, sec_active: _vm.sec_current === i.type}, ("" + (i.type))]))+" data-v-7a1f0e7e>","</div>",[_c('nuxt-link',{attrs:{"to":i.url}},[_c('span'),_vm._v(_vm._s(i.name))])],1)}),0)]):_vm._e()],2)}),0)]),_vm._ssrNode(" <div class=\"heaedr-r\" data-v-7a1f0e7e><div class=\"phone\" data-v-7a1f0e7e>400-150-9669</div> <div class=\"mobile-nav\" data-v-7a1f0e7e><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-7a1f0e7e></div></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/header/header.vue?vue&type=template&id=7a1f0e7e&scoped=true&

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
  
  var style0 = __webpack_require__(26)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  header_headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7a1f0e7e",
  "2a94ca8f"
  
)

/* harmony default export */ var header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(20).default})


/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footer/footer.vue?vue&type=template&id=4fb195bd&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer"},[_vm._ssrNode("<div class=\"container\" data-v-4fb195bd>","</div>",[_vm._ssrNode("<div class=\"left\" data-v-4fb195bd><img"+(_vm._ssrAttr("src",__webpack_require__(27)))+" alt data-v-4fb195bd> <p data-v-4fb195bd>合作电话：400-150-9669</p> <p data-v-4fb195bd>业务合作：marketing@oakblack.com</p> <p data-v-4fb195bd>媒体合作：media@oakblack.com</p> <a target=\"_blank\" href=\"http://wpa.qq.com/msgrd?v=3&uin=&site=qq&menu=yes\" class=\"qqkf\" data-v-4fb195bd>QQ咨询</a></div> "),_vm._ssrNode("<div class=\"r-nav\" data-v-4fb195bd>","</div>",[_vm._ssrNode("<div class=\"item\" data-v-4fb195bd>","</div>",[_vm._ssrNode("<h2 data-v-4fb195bd>产品服务</h2> "),_vm._ssrNode("<ul data-v-4fb195bd>","</ul>",[_vm._ssrNode("<li data-v-4fb195bd>","</li>",[_c('nuxt-link',{attrs:{"to":"/saas"}},[_vm._v("会员SAAS服务")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-4fb195bd>","</li>",[_c('nuxt-link',{attrs:{"to":"/operation"}},[_vm._v("精细化运营服务")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"item\" data-v-4fb195bd>","</div>",[_vm._ssrNode("<h2 data-v-4fb195bd>关于我们</h2> "),_vm._ssrNode("<ul data-v-4fb195bd>","</ul>",[_vm._ssrNode("<li data-v-4fb195bd>","</li>",[_c('nuxt-link',{attrs:{"to":"/about"}},[_vm._v("公司介绍")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-4fb195bd>","</li>",[_c('nuxt-link',{attrs:{"to":"/contact"}},[_vm._v("联系我们")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"item\" data-v-4fb195bd>","</div>",[_vm._ssrNode("<h2 data-v-4fb195bd>加入我们</h2> "),_vm._ssrNode("<ul data-v-4fb195bd>","</ul>",[_vm._ssrNode("<li data-v-4fb195bd>","</li>",[_c('nuxt-link',{attrs:{"to":"/join"}},[_vm._v("招聘职位")])],1)])],2)],2)],2),_vm._ssrNode(" <div class=\"copyright\" data-v-4fb195bd><a href=\"https://beian.miit.gov.cn/\" target=\"_blank\" data-v-4fb195bd>粤ICP备18120172号</a>\n    Copyright © 2018 深圳市橡树黑卡网络科技有限公司 XSHKVIP.COM\n  </div> <div class=\"suspend\" data-v-4fb195bd><div class=\"item online-hover\" data-v-4fb195bd><img"+(_vm._ssrAttr("src",__webpack_require__(28)))+" alt data-v-4fb195bd> <div class=\"online-consult\" data-v-4fb195bd><div class=\"online-consult-main\" data-v-4fb195bd><h3 data-v-4fb195bd>亲爱的用户</h3> <p data-v-4fb195bd>为了更好的帮您解决问题，请选择您要咨询的会员类型</p> <ul data-v-4fb195bd><li data-v-4fb195bd><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\" data-v-4fb195bd><img"+(_vm._ssrAttr("src",__webpack_require__(29)))+" alt data-v-4fb195bd>省呗</a></li> <li data-v-4fb195bd><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\" data-v-4fb195bd><img"+(_vm._ssrAttr("src",__webpack_require__(30)))+" alt data-v-4fb195bd>小赢卡贷</a></li> <li data-v-4fb195bd><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\" data-v-4fb195bd><img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt data-v-4fb195bd>keep</a></li> <li data-v-4fb195bd><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\" data-v-4fb195bd><img"+(_vm._ssrAttr("src",__webpack_require__(32)))+" alt data-v-4fb195bd>榕树贷款</a></li> <li data-v-4fb195bd><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\" data-v-4fb195bd><img"+(_vm._ssrAttr("src",__webpack_require__(33)))+" alt data-v-4fb195bd>新橙优品</a></li> <li data-v-4fb195bd><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\" data-v-4fb195bd><img"+(_vm._ssrAttr("src",__webpack_require__(34)))+" alt data-v-4fb195bd>其他</a></li></ul> <p data-v-4fb195bd>\n            如您需要商务合作请联络邮箱：<a href=\"mailto:marketing@oakblack.com\" target=\"_blank\" data-v-4fb195bd><span data-v-4fb195bd>marketing@oakblack.com</span></a></p> <p data-v-4fb195bd>电话：400-150-9669</p></div></div></div> <div class=\"item item2\" data-v-4fb195bd><img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt data-v-4fb195bd> <div class=\"phone-consult\" data-v-4fb195bd><div class=\"phone-consult-main\" data-v-4fb195bd><h4 data-v-4fb195bd>客服电话<span data-v-4fb195bd>400-150-9669</span></h4> <h4 data-v-4fb195bd>客服工作时间</h4> <p data-v-4fb195bd>周一到周五：9：00～20：00（在线和电话）</p> <p data-v-4fb195bd>周末或节假日：9：00～20：00（电话）</p></div></div></div> "+((_vm.showBackTop)?("<div class=\"item\" data-v-4fb195bd><img"+(_vm._ssrAttr("src",__webpack_require__(36)))+" alt data-v-4fb195bd></div>"):"<!---->")+"</div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/footer/footer.vue?vue&type=template&id=4fb195bd&scoped=true&

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
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footer_footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4fb195bd",
  "3f9dbecf"
  
)

/* harmony default export */ var footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(21).default})


/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/close.ce01f75.png";

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.b6e5be2.png";

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAAAY0lEQVRYCe2UQQrAMAgEY8mT/F+T//knSwv2lqNCyHhRUFwZZFsjTicgAUBV76grspnNV6eHmLuPqIvyd8BVJLaU+QmIyFhO0YAABBIJ4IQ4YeJ7sRoCmxDACXHCTV6VMxMJPLEZGaV5wuftAAAAAElFTkSuQmCC"

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_7a1f0e7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_7a1f0e7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_7a1f0e7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_7a1f0e7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_7a1f0e7e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo2.f1af3d8.png";

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/suspend1.4ae37a9.png";

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh1.4ce57c5.png";

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh2.111c040.png";

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh3.c4c197c.png";

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh4.32ab95a.png";

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh5.2b8b3b8.png";

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh6.22c1639.png";

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/suspend2.3216117.png";

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAALaADAAQAAAABAAAALQAAAABGqAVQAAAC3ElEQVRYCe2Yv2/TQBTH33PikNJQ8RupSAgGBihtU/gLSlaGltYgFsTAvwFqga0SC38AA0OFSn7AwABJACExIJaCBAssMIGg0CSlau3k8c7UlWvHsWNfpjhS5Lv37r7vc9+cnUsA4lfsQOxA7EDfOICyV0rawDEwNnOQHCrg0u9V2fpCTyo0TannAIwy6+5l5U+Q3j2Ji2vfZYMrsgTponqWgZ+bwEKU4BSs/63SlcEjsmpYOlKcphl1AppGhUX3WcK260fAwUksNn7YYpGakZ02gVvmlmgHLOBOA6xVScscikRqmxwJmjQ1CwKYYL9N090kGAFDHnjo7UHT6jjv4QoDH3BTekY+wEDmPC7Wf3qOCJAI5TTNpMZCAAucUVhv8M2552AANs8hXTtNWmoUdL3KiuELI7wHYMeL9V+eZB0SXUHTdOoMkP4iErAFg7DM4Lkw4IG3hwkMER22gMWVYByoUSZtqPNNbJ+z1Q4EzXt4BEAXN520x9ZW/Szo9Uq34L7QfJY4Ci12mOBwm0X/DyFscuOPR77mEbfCArxM146nrYDf1Rca9I2rPsA6oKJxoS8exfirHW945KzwBNS+XbA6fld/aG8HxXFLB1A0LDSfdCqEpdYdUPBmpzGstdExb0v6Q6uZhyzoPjcIYEW5hMXmY5ueZxMLrdu8yjmPAV9h+MQzj5wr7AuNS7UVSCRmGXxle7YARuUy5pul7ViABjs+z47P7xhq6iY1vPdZotNcAR8ZryGZHgPEW/y+z4vI8ZYoOooHeuaz43P8CV3nuU9Z6y7sSmexpL/doeXTCVTIR8NM0xS+4wb/CHC98liiWVc0QsB3e0TQ7tnUGLpn1jqEY6cdhvSsGzvdM2sdwn3uNEL7IyjiqsOoyF2JTuPL9jT4qn08fFQedHJ4gTHeOFDyUDAeOGKRu9LOHoKENC0BRoEP83SSz9nLWDT/24sMGQvEDsQOxA70sQP/AK/euoPzJA03AAAAAElFTkSuQmCC"

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_4fb195bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_4fb195bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_4fb195bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_4fb195bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_4fb195bd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img11.8918ed7.png";

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img12.da9e37e.png";

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_2b481c4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_2b481c4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_2b481c4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_2b481c4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_2b481c4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/form.vue?vue&type=template&id=2b481c4c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.hidePlan)?_c('section',{class:("free-plan " + (_vm.clearFixed && 'clear-fixed'))},[_vm._ssrNode("<div class=\"container\" data-v-2b481c4c><img"+(_vm._ssrAttr("src",__webpack_require__(39)))+" alt class=\"img\" data-v-2b481c4c> <div class=\"free-get-plan\" data-v-2b481c4c>免费获取方案</div> <img"+(_vm._ssrAttr("src",__webpack_require__(22)))+" alt class=\"img-close\" data-v-2b481c4c></div> "+((_vm.showForm)?("<div class=\"form-dialog\" data-v-2b481c4c><div class=\"form-dialog-main\" data-v-2b481c4c><img"+(_vm._ssrAttr("src",__webpack_require__(22)))+" alt class=\"form-dialog-close\" data-v-2b481c4c> <img"+(_vm._ssrAttr("src",__webpack_require__(38)))+" alt class=\"b-img\" data-v-2b481c4c> <div class=\"plan-form\" data-v-2b481c4c><h2 data-v-2b481c4c>完善信息后 48小时内会有专门的商务人员与您对接</h2> <div class=\"item\" data-v-2b481c4c><div class=\"text\" data-v-2b481c4c><span data-v-2b481c4c>*</span>您的姓名：</div> <input type=\"text\" maxlength=\"10\" placeholder=\"请输入姓名\" name id=\"name\" autocomplete=\"off\""+(_vm._ssrAttr("value",(_vm.name)))+" data-v-2b481c4c> <div class=\"input-error\" data-v-2b481c4c>"+_vm._ssrEscape(_vm._s(_vm.name_error))+"</div></div> <div class=\"item\" data-v-2b481c4c><div class=\"text\" data-v-2b481c4c>公司名称：</div> <input type=\"text\" placeholder=\"请输入公司名称\" maxlength=\"100\" name id=\"companyName\" autocomplete=\"off\""+(_vm._ssrAttr("value",(_vm.company_name)))+" data-v-2b481c4c> <div class=\"input-error\" data-v-2b481c4c>"+_vm._ssrEscape(_vm._s(_vm.company_name_error))+"</div></div> <div class=\"item\" data-v-2b481c4c><div class=\"text\" data-v-2b481c4c><span data-v-2b481c4c>*</span>联系电话：</div> <input type=\"text\" placeholder=\"请输入联系电话\" maxlength=\"30\" name id=\"phone\" autocomplete=\"off\""+(_vm._ssrAttr("value",(_vm.phone)))+" data-v-2b481c4c> <div class=\"input-error\" data-v-2b481c4c>"+_vm._ssrEscape(_vm._s(_vm.phone_error))+"</div></div> <div class=\"item\" data-v-2b481c4c><div class=\"text\" data-v-2b481c4c><span data-v-2b481c4c>*</span>验证码：</div> <input type=\"text\" placeholder=\"请输入验证码\" name id=\"code\" autocomplete=\"off\""+(_vm._ssrAttr("value",(_vm.code)))+" data-v-2b481c4c> <div class=\"input-error\" data-v-2b481c4c>"+_vm._ssrEscape(_vm._s(_vm.code_error))+"</div> <div class=\"get-code\" data-v-2b481c4c>获取验证码</div></div> <div class=\"plan-btn\" data-v-2b481c4c>免费获取方案</div></div></div></div>"):"<!---->"))]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/form/form.vue?vue&type=template&id=2b481c4c&scoped=true&

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
  
  var style0 = __webpack_require__(40)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  form_formvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2b481c4c",
  "5c789a2f"
  
)

/* harmony default export */ var form_form = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img10.8a02310.png";

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_efcee428_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_efcee428_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_efcee428_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_efcee428_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_efcee428_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=template&id=efcee428&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"about"},[_c('oakHeader',{attrs:{"current":2,"sec_current":"nav_about"}}),_vm._ssrNode(" "),_vm._ssrNode("<main data-v-efcee428>","</main>",[_vm._ssrNode("<section class=\"about-banner\" data-v-efcee428></section> <section class=\"about-section1\" data-v-efcee428><div class=\"container\" data-v-efcee428><div class=\"common-title\" data-v-efcee428><div class=\"name\" data-v-efcee428>关于我们</div></div> <div class=\"about-text\" data-v-efcee428><p data-v-efcee428>橡树黑卡成立于2018年，</p> <p data-v-efcee428>\n            是国内领先的付费会员制权益SaaS服务平台，是国家高新技术企业、“双软企业”\n            。\n          </p> <p data-v-efcee428></p> <p data-v-efcee428>\n            合作伙伴包括华润集团、微众银行、工商银行、浦发银行、招商银行、腾讯理财通、微信、滴滴出行、龙腾出行，创维，TCL等知名企业。\n          </p> <p data-v-efcee428></p> <p data-v-efcee428>\n            创始团队来自于腾讯、平安、乐信等，在会员服务领域拥有丰富的权益供应链整合、会员体系搭建运营成功经验，致力于打造领先的权益服务平台。\n          </p> <p data-v-efcee428></p> <p data-v-efcee428>\n            目前公司业务正处于高速发展中，求才若渴，有广阔的成长和发展空间，我们迫切的需要优秀的你来加入，与公司共同成长进步！\n          </p> <img"+(_vm._ssrAttr("src",__webpack_require__(52)))+" alt data-v-efcee428></div></div></section> <section class=\"course\" data-v-efcee428><div class=\"container\" data-v-efcee428><div class=\"common-title\" data-v-efcee428><div class=\"name\" data-v-efcee428>公司历程</div></div></div> <div class=\"course-main container\" data-v-efcee428><div class=\"list\" data-v-efcee428><div class=\"item\" data-v-efcee428><div class=\"date\" data-v-efcee428><span data-v-efcee428>2018.11</span> <span data-v-efcee428>【橡树黑卡小程序】</span></div> <p data-v-efcee428>\n              与龙腾出行、海南航空、希尔顿、洲际、凯悦、\n              雅高、滴滴出行、易安保险等企业达成合作，\n              整合权益资源，搭建会员系统，奠基To B能力\n            </p> <b data-v-efcee428></b></div> <div class=\"item\" data-v-efcee428><div class=\"date\" data-v-efcee428><span data-v-efcee428>2019.09</span> <span data-v-efcee428>【全面展开企业付费会员合作】</span></div> <p data-v-efcee428>\n              面向银行、商业地产、金融科技、智慧屏等行业机构提供专业方案定制和跨场景权益务，助力企业业务拉新与促活\n            </p> <b data-v-efcee428></b></div> <div class=\"item\" data-v-efcee428><div class=\"date\" data-v-efcee428><span data-v-efcee428>2020.09</span> <span data-v-efcee428>【华润通享卡】</span></div> <p data-v-efcee428>\n              华润集团以”引领商业进步，共创美好生活”为使命。华润通为其线上美好生活的载体，通卡打造行业标杆\n            </p> <b data-v-efcee428></b></div></div> <div class=\"list\" data-v-efcee428><div class=\"item\" data-v-efcee428><div class=\"date\" data-v-efcee428><span data-v-efcee428>2018.08</span> <span data-v-efcee428>【公司成立】</span></div> <p data-v-efcee428>\n              来自腾讯、携程、平安、乐信的初始团队成员，拥有百万级付费会员平台的操盘经验\n            </p> <b data-v-efcee428></b></div> <div class=\"item\" data-v-efcee428><div class=\"date\" data-v-efcee428><span data-v-efcee428>2019.03</span> <span data-v-efcee428>【腾讯理财通、滴滴出行】</span></div> <p data-v-efcee428>与腾讯理财通、滴滴出行等达成会员权益输出合作，夯实服务能力</p> <b data-v-efcee428></b></div> <div class=\"item\" data-v-efcee428><div class=\"date\" data-v-efcee428><span data-v-efcee428>2020.06</span> <span data-v-efcee428>【全新推出橡树生活权益平台】</span></div> <p data-v-efcee428>\n              橡树生活权益平台，涵盖娱乐视听类、生\n              活服务类、旅游出行、车主福利、阅读学\n              习、医护健康等300余项权益服务\n            </p> <b data-v-efcee428></b></div></div></div></section> "),_c('oakForm')],2),_vm._ssrNode(" "),_c('oakFooter')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about.vue?vue&type=template&id=efcee428&scoped=true&

// EXTERNAL MODULE: ./components/header/header.vue + 4 modules
var header = __webpack_require__(20);

// EXTERNAL MODULE: ./components/footer/footer.vue + 4 modules
var footer = __webpack_require__(21);

// EXTERNAL MODULE: ./components/form/form.vue + 4 modules
var form_form = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var aboutvue_type_script_lang_js_ = ({
  name: "about",
  components: {
    oakHeader: header["default"],
    oakFooter: footer["default"],
    oakForm: form_form["default"]
  },

  data() {
    return {};
  },

  head() {
    return {
      title: "橡树黑卡--公司介绍",
      meta: [{
        hid: "about",
        name: "description",
        content: "橡树黑卡成立于2018年，是国内领先的付费会员制权益SaaS服务平台，是国家高新技术企业、“双软企业” 。客户包含华润集团，微众银行，工商银行，浦发银行，招商银行，腾讯理财通、微信、滴滴出行、龙腾出行，创维，TCL等知名企业，400-150-9669。"
      }, {
        name: "keywords",
        content: "付费会员，会员权益，高新技术企业，提升活跃，带动营收，增加收入，客户关怀，用户画像，延长用户生命周期"
      }]
    };
  },

  mounted() {
    this.$refs.about.scrollIntoView();
  }

});
// CONCATENATED MODULE: ./pages/about.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/about.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(53)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "efcee428",
  "7030d56c"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about.js.map