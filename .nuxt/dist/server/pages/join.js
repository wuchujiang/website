exports.ids = [7,1,3];
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

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/header/header.vue?vue&type=template&id=223d0d83&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"header",attrs:{"id":"header"}},[_vm._ssrNode("<div class=\"container\" data-v-223d0d83>","</div>",[_vm._ssrNode("<h1 class=\"logo\" data-v-223d0d83>","</h1>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":__webpack_require__(24),"alt":""}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<nav class=\"nav\" data-v-223d0d83>","</nav>",[_vm._ssrNode("<ul data-v-223d0d83>","</ul>",_vm._l((_vm.nav),function(item,index){return _vm._ssrNode("<li"+(_vm._ssrClass(null,{'item': true, 'active': _vm.current === index}))+" data-v-223d0d83>","</li>",[_c('nuxt-link',{class:{'down': item.second},attrs:{"to":item.url}},[_vm._v(_vm._s(item.name))]),_vm._ssrNode(" "),(item.second)?_vm._ssrNode("<div"+(_vm._ssrClass(null,("sec_nav " + (item.type))))+" data-v-223d0d83>","</div>",[_vm._ssrNode("<div class=\"sec_nav-main\" data-v-223d0d83>","</div>",_vm._l((item.second),function(i){return _vm._ssrNode("<div"+(_vm._ssrClass(null,("item " + (i.type))))+" data-v-223d0d83>","</div>",[_c('nuxt-link',{attrs:{"to":i.url}},[_c('span'),_vm._v(_vm._s(i.name))])],1)}),0)]):_vm._e()],2)}),0)]),_vm._ssrNode(" <div class=\"heaedr-r\" data-v-223d0d83><div class=\"phone\" data-v-223d0d83>\n        400-150-9669\n      </div> <div class=\"mobile-nav\" data-v-223d0d83><img"+(_vm._ssrAttr("src",__webpack_require__(25)))+" alt data-v-223d0d83></div></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/header/header.vue?vue&type=template&id=223d0d83&scoped=true&

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
  "223d0d83",
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

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footer/footer.vue?vue&type=template&id=85a68650&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer"},[_vm._ssrNode("<div class=\"container\" data-v-85a68650>","</div>",[_vm._ssrNode("<div class=\"left\" data-v-85a68650><img"+(_vm._ssrAttr("src",__webpack_require__(27)))+" alt data-v-85a68650> <p data-v-85a68650>合作电话：400-150-9669</p> <p data-v-85a68650>业务合作：marketing@oakblack.com</p> <p data-v-85a68650>媒体合作：media@oakblack.com</p></div> "),_vm._ssrNode("<div class=\"r-nav\" data-v-85a68650>","</div>",[_vm._ssrNode("<div class=\"item\" data-v-85a68650>","</div>",[_vm._ssrNode("<h2 data-v-85a68650>产品服务</h2> "),_vm._ssrNode("<ul data-v-85a68650>","</ul>",[_vm._ssrNode("<li data-v-85a68650>","</li>",[_c('nuxt-link',{attrs:{"to":"/saas"}},[_vm._v("会员SAAS服务")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-85a68650>","</li>",[_c('nuxt-link',{attrs:{"to":"/operation"}},[_vm._v("精细化运营服务")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"item\" data-v-85a68650>","</div>",[_vm._ssrNode("<h2 data-v-85a68650>关于我们</h2> "),_vm._ssrNode("<ul data-v-85a68650>","</ul>",[_vm._ssrNode("<li data-v-85a68650>","</li>",[_c('nuxt-link',{attrs:{"to":"/about"}},[_vm._v("公司介绍")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-85a68650>","</li>",[_c('nuxt-link',{attrs:{"to":"/contact"}},[_vm._v("联系我们")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"item\" data-v-85a68650>","</div>",[_vm._ssrNode("<h2 data-v-85a68650>加入我们</h2> "),_vm._ssrNode("<ul data-v-85a68650>","</ul>",[_vm._ssrNode("<li data-v-85a68650>","</li>",[_c('nuxt-link',{attrs:{"to":"/join"}},[_vm._v("招聘职位")])],1)])],2)],2)],2),_vm._ssrNode(" <div class=\"copyright\" data-v-85a68650><a href=\"https://beian.miit.gov.cn/\" target=\"_blank\" data-v-85a68650>粤ICP备18120172号</a>\n    Copyright © 2018 深圳市橡树黑卡网络科技有限公司 XSHKVIP.COM\n  </div> <div class=\"suspend\" data-v-85a68650><div class=\"item online-hover\" data-v-85a68650><img"+(_vm._ssrAttr("src",__webpack_require__(28)))+" alt data-v-85a68650> <div class=\"online-consult\" data-v-85a68650><div class=\"online-consult-main\" data-v-85a68650><h3 data-v-85a68650>亲爱的用户</h3> <p data-v-85a68650>为了更好的帮您解决问题，请选择您要咨询的会员类型</p> <ul data-v-85a68650><li data-v-85a68650><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\" data-v-85a68650><img"+(_vm._ssrAttr("src",__webpack_require__(29)))+" alt data-v-85a68650>省呗</a></li> <li data-v-85a68650><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\" data-v-85a68650><img"+(_vm._ssrAttr("src",__webpack_require__(30)))+" alt data-v-85a68650>小赢卡贷</a></li> <li data-v-85a68650><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\" data-v-85a68650><img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt data-v-85a68650>keep</a></li> <li data-v-85a68650><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\" data-v-85a68650><img"+(_vm._ssrAttr("src",__webpack_require__(32)))+" alt data-v-85a68650>榕树贷款</a></li> <li data-v-85a68650><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\" data-v-85a68650><img"+(_vm._ssrAttr("src",__webpack_require__(33)))+" alt data-v-85a68650>新橙优品</a></li> <li data-v-85a68650><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\" data-v-85a68650><img"+(_vm._ssrAttr("src",__webpack_require__(34)))+" alt data-v-85a68650>其他</a></li></ul> <p data-v-85a68650>\n            如您需要商务合作请联络邮箱：<a href=\"mailto:marketing@oakblack.com\" target=\"_blank\" data-v-85a68650><span data-v-85a68650>marketing@oakblack.com</span></a></p> <p data-v-85a68650>电话：400-150-9669</p></div></div></div> <div class=\"item item2\" data-v-85a68650><img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt data-v-85a68650> <div class=\"phone-consult\" data-v-85a68650><div class=\"phone-consult-main\" data-v-85a68650><h4 data-v-85a68650>客服电话<span data-v-85a68650>400-150-9669</span></h4> <h4 data-v-85a68650>客服工作时间</h4> <p data-v-85a68650>周一到周五：9：00～20：00（在线和电话）</p> <p data-v-85a68650>周末或节假日：9：00～20：00（电话）</p></div></div></div> "+((_vm.showBackTop)?("<div class=\"item\" data-v-85a68650><img"+(_vm._ssrAttr("src",__webpack_require__(36)))+" alt data-v-85a68650></div>"):"<!---->")+"</div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/footer/footer.vue?vue&type=template&id=85a68650&scoped=true&

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
  "85a68650",
  "3f9dbecf"
  
)

/* harmony default export */ var footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(21).default})


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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_223d0d83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_223d0d83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_223d0d83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_223d0d83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_223d0d83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo2.3a282f1.png";

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_85a68650_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_85a68650_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_85a68650_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_85a68650_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_85a68650_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 48:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_join_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_join_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_join_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_join_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_join_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/join.vue?vue&type=template&id=0e9cf391&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('oakHeader',{attrs:{"current":3}}),_vm._ssrNode(" <main><section class=\"join-banner\"></section> <section class=\"join-main\"><div class=\"container\"><h2>社招岗位</h2> <div class=\"title\">全部</div> <div class=\"join-container\"><div class=\"left\">"+(_vm._ssrList((_vm.list),function(item,index){return ("<div"+(_vm._ssrClass(null,{'item': true, 'active': _vm.current === index}))+">"+_vm._ssrEscape("\n              "+_vm._s(item.name)+"\n              ")+"<span>"+_vm._ssrEscape(_vm._s(item.address)+" >")+"</span></div>")}))+"</div> <div class=\"right\"><h4>职位描述</h4> <ul>"+(_vm._ssrList((_vm.list[_vm.current].desc),function(item,index){return ("<li>"+_vm._ssrEscape("\n                "+_vm._s(index + 1)+"."+_vm._s(item)+"\n              ")+"</li>")}))+"</ul> <h4>任职资格</h4> <ul>"+(_vm._ssrList((_vm.list[_vm.current].qualification),function(item,index){return ("<li>"+_vm._ssrEscape("\n                "+_vm._s(index + 1)+"."+_vm._s(item)+"\n              ")+"</li>")}))+"</ul> <div class=\"join-email\">"+_vm._ssrEscape(_vm._s(_vm.list[_vm.current].email))+"</div></div></div></div></section></main> "),_c('oakFooter')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/join.vue?vue&type=template&id=0e9cf391&

// EXTERNAL MODULE: ./components/header/header.vue + 4 modules
var header = __webpack_require__(20);

// EXTERNAL MODULE: ./components/footer/footer.vue + 4 modules
var footer = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/join.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var joinvue_type_script_lang_js_ = ({
  name: "join",
  components: {
    oakHeader: header["default"],
    oakFooter: footer["default"]
  },

  data() {
    return {
      current: 0,
      list: [{
        name: "  高级后端开发工程师",
        address: "深圳",
        desc: ["参与公司核心业务系统的开发；", "参与项目的需求分析，系统设计和研发工作;", "参与项目日常运维，数据分析;", "参与平台整体架构优化，提高系统扩展能力以及保证系统安全、可靠。", "研究新的技术，并应用到业务之中；"],
        qualification: ["计算机相关专业，本科以上学历，3年以上后端开发工作经验，负责过大型项目的开发，具备设计高并发，高可用，可扩展性的应用开发经验；", "良好的设计和编码习惯（所用语言主要为 Python）；", "熟悉常见的设计模式，算法和数据结构；", "较好的产品意识，愿意将产品效果做为工作最重要的驱动因素；", "掌握 Web后端开发技术: 协议、架构、存储、缓存、安全等；", "具备高度责任感、良好的沟通协作能力，具有较强的沟通表达能力、自我驱动能力，能持续优化工作过程和结果；", "具备良好的执行能力，主动性，抗压能力；", "互联网行业背景优先，有开源项目者优先。"],
        email: "简历发送至  hr@oakblack.com"
      }, {
        name: "  系统架构师",
        address: "深圳",
        desc: ["具有金融行业开发经验，对软件开发生命周期有深入的理解", "熟悉主流的架构设计方法（微服务架构、分布式架构、高并发架构、云化架构等）;", "熟练常用关系数据库、时序数据库、nosql等技术;", "能撰写软件系统分析和设计方案", "深入了解JavaEE相关的主流框架，并熟知它的原理及机制", "具备良好的面向对象的设计能力，熟悉面向对象设计原则，掌握设计模式及应用场景", "责任心强、有一定抗压能力，有良好的产品思维和沟通能力，能够制定中长期技术规划", '有带领团队，成功完成日志回放系统的设计和开发工作经验者优先考虑"'],
        qualification: ["本科及以上学历，计算机、网络、软件工程等相关专业，8年以上工作；", "拥有良好的计算机体系结构、网络知识；", "熟练Golang；", "有良好的团队工作精神，具备突出的学习能⼒，对代码精益求精；", "熟悉某个云厂商（包括但不限于腾讯、阿里、华为、亚马逊等）提供的IaaS、PaaS、容器服务等产品或业务；", "熟悉etcd、raft协议；", "熟悉云原生技术，如容器、Kubernetes、Devops、服务网格等并具有相关项目建设经验；", "具有IaaS，PaaS相关项目建设经验，有金融行业项目实施经验优先；", "深入理解servicemesh、Istio、knative等技术；", "有kubernetes开发经验（包括二次开发）者优先，有搭建容器运维平台经验者优先；", "能针对业务场景进行正确的技术选型，有能力设计大型系统并通过UML、Presentation的形式进行表述。"],
        email: "简历发送至  hr@oakblack.com"
      }, {
        name: "测试工程师",
        address: "深圳",
        desc: ["负责软件测试领域相关工具/平台的设计、开发和维护，探索研究新的测试技术和工具并引入到测试领域，提升软件测试质量和效率；", "支持并推动各测试团队的自动化测试的实施，提升各测试团队整体的自动化测试能力;", "培养和指导其他员工，提升团队的测试质量和效率；;"],
        qualification: ["**本科及以上学历，计算机相关专业，3年及以上全职测试或开发工作经验；有电商类相关测试经验优先，参与过中大型的项目测试工作优先；", "熟悉测试流程和规范，熟练掌握软件测试方法和理论；", "扎实的编程基础，有良好的编码习惯及技术功底，有自动化平台开发、维护实战经验的优先；", "熟悉业界开源的自动化方案，并有自己的研究和理解；", "拥有技术激情，对⾃⼰的⼯作认真负责，对最终效果追求**；", "较强的表达沟通能力、团队合作精神，工作细致、责任心强，较强的逻辑分析总结能力和学习能力。"],
        email: "简历发送至  hr@oakblack.com"
      }, {
        name: "数据分析师",
        address: "深圳",
        desc: ["构建电商产品指标体系，对数据异常进行监控，及时发现业务风险；", "为电商场景中相应决策提供专业的数据支持；", "通过对数据的分析和探索，挖掘出业务机会或者产品改进方向，并产出条理清晰、论证严谨的分析报告；;", "能积极推动各相关部门完善数据收集，以及分析建议的落地。"],
        qualification: ["统计、数学、计算机**本科及以上学历，有5年以上互联网工作经验优先；", "较好的数理统计基础、数据敏感度高、逻辑思维严密，能独立开展数据分析相关工作；", "英文可作为工作语言，有带团队管理经验优先。"],
        email: "简历发送至  hr@oakblack.com"
      }, {
        name: "资深风控数据分析专家",
        address: "深圳",
        desc: ["基于对用户流量、产品的深入理解，构建平台商业化风控分析指标体系，能够建立系统化指标异常监控及归因分析；", "深入分析、挖掘安全性指标要素，并对行业风险、收益风险、流量作弊风险等进行量化描述和分析；", "将复杂问题进行拆解、定义，利用数据挖掘、统计建模方法评估、预测风险，给业务决策提供建设性建议和有效支撑；", "跨团队紧密合作，能将关键分析结果产出清晰呈现给协同团队，并推动其实施落地，给产品、平台带来实际影响；", "业务风险的问题与分析框架，与数据产品团队协同沉淀数据资产与数据科学解决方案，提升团队分析、决策效率。"],
        qualification: ["统计学、数学、经济学、计算机等数据科学、量化分析相关专业硕士及以上学历；5年以上数据分析或建模经验，有风控、反作弊数据分析工作经验优先；", "熟悉SQL及大数据处理技术，至少掌握Hadoop/Hive/Spark/Flink其中一项；熟悉Python、常见机器学习算法，具有模型搭建经验者优先；", "具备优秀的商业敏感度与逻辑思维能力，能够在较大不确定性的问题中构建框架，将数据转化为有效的商业洞察，有互联网及计算广告相关行业经验优先；", "富有责任心，良好的团队协作能力，优秀的沟通表达能力，善于在跨部门沟通中协调资源与影响其他跨职能团队成员；", "具备强烈的好奇心与自我驱动力，乐于接受挑战，富有使命感。"],
        email: "简历发送至  hr@oakblack.com"
      }]
    };
  },

  head() {
    return {
      title: "橡树黑卡--招聘职位，欢迎投递",
      meta: [{
        hid: "about",
        name: "description",
        content: "橡树黑卡正在招聘数据分析师，系统架构师，高级后端开发工程师，资深风控数据分析专家,400-150-9669。"
      }, {
        name: "keywords",
        content: "大数据，用户分析，用户运营，量化分析，指标监控，数据归因，数据挖掘，统计分析，统计建模，商业化，收益风险"
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/join.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_joinvue_type_script_lang_js_ = (joinvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/join.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(55)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_joinvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "ed6befca"
  
)

/* harmony default export */ var join = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=join.js.map