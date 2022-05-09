exports.ids = [6,1,2,3];
exports.modules = Array(18).concat([
/* 18 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 20 */
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
/* 21 */
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/close.ce01f75.png";

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.b6e5be2.png";

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAAAY0lEQVRYCe2UQQrAMAgEY8mT/F+T//knSwv2lqNCyHhRUFwZZFsjTicgAUBV76grspnNV6eHmLuPqIvyd8BVJLaU+QmIyFhO0YAABBIJ4IQ4YeJ7sRoCmxDACXHCTV6VMxMJPLEZGaV5wuftAAAAAElFTkSuQmCC"

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_223d0d83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_223d0d83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_223d0d83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_223d0d83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_223d0d83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo2.3a282f1.png";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/suspend1.4ae37a9.png";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh1.4ce57c5.png";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh2.111c040.png";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh3.c4c197c.png";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh4.32ab95a.png";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh5.2b8b3b8.png";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh6.22c1639.png";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/suspend2.3216117.png";

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAALaADAAQAAAABAAAALQAAAABGqAVQAAAC3ElEQVRYCe2Yv2/TQBTH33PikNJQ8RupSAgGBihtU/gLSlaGltYgFsTAvwFqga0SC38AA0OFSn7AwABJACExIJaCBAssMIGg0CSlau3k8c7UlWvHsWNfpjhS5Lv37r7vc9+cnUsA4lfsQOxA7EDfOICyV0rawDEwNnOQHCrg0u9V2fpCTyo0TannAIwy6+5l5U+Q3j2Ji2vfZYMrsgTponqWgZ+bwEKU4BSs/63SlcEjsmpYOlKcphl1AppGhUX3WcK260fAwUksNn7YYpGakZ02gVvmlmgHLOBOA6xVScscikRqmxwJmjQ1CwKYYL9N090kGAFDHnjo7UHT6jjv4QoDH3BTekY+wEDmPC7Wf3qOCJAI5TTNpMZCAAucUVhv8M2552AANs8hXTtNWmoUdL3KiuELI7wHYMeL9V+eZB0SXUHTdOoMkP4iErAFg7DM4Lkw4IG3hwkMER22gMWVYByoUSZtqPNNbJ+z1Q4EzXt4BEAXN520x9ZW/Szo9Uq34L7QfJY4Ci12mOBwm0X/DyFscuOPR77mEbfCArxM146nrYDf1Rca9I2rPsA6oKJxoS8exfirHW945KzwBNS+XbA6fld/aG8HxXFLB1A0LDSfdCqEpdYdUPBmpzGstdExb0v6Q6uZhyzoPjcIYEW5hMXmY5ueZxMLrdu8yjmPAV9h+MQzj5wr7AuNS7UVSCRmGXxle7YARuUy5pul7ViABjs+z47P7xhq6iY1vPdZotNcAR8ZryGZHgPEW/y+z4vI8ZYoOooHeuaz43P8CV3nuU9Z6y7sSmexpL/doeXTCVTIR8NM0xS+4wb/CHC98liiWVc0QsB3e0TQ7tnUGLpn1jqEY6cdhvSsGzvdM2sdwn3uNEL7IyjiqsOoyF2JTuPL9jT4qn08fFQedHJ4gTHeOFDyUDAeOGKRu9LOHoKENC0BRoEP83SSz9nLWDT/24sMGQvEDsQOxA70sQP/AK/euoPzJA03AAAAAElFTkSuQmCC"

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_85a68650_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_85a68650_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_85a68650_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_85a68650_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_85a68650_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img11.8918ed7.png";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img12.da9e37e.png";

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_4200803a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_4200803a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_4200803a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_4200803a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_id_4200803a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/form.vue?vue&type=template&id=4200803a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.hidePlan)?_c('section',{class:("free-plan " + (_vm.clearFixed && 'clear-fixed'))},[_vm._ssrNode("<div class=\"container\" data-v-4200803a><img"+(_vm._ssrAttr("src",__webpack_require__(39)))+" alt class=\"img\" data-v-4200803a> <div class=\"free-get-plan\" data-v-4200803a>免费获取方案</div> <img"+(_vm._ssrAttr("src",__webpack_require__(22)))+" alt class=\"img-close\" data-v-4200803a></div> "+((_vm.showForm)?("<div class=\"form-dialog\" data-v-4200803a><div class=\"form-dialog-main\" data-v-4200803a><img"+(_vm._ssrAttr("src",__webpack_require__(22)))+" alt class=\"form-dialog-close\" data-v-4200803a> <img"+(_vm._ssrAttr("src",__webpack_require__(38)))+" alt class=\"b-img\" data-v-4200803a> <div class=\"plan-form\" data-v-4200803a><h2 data-v-4200803a>完善信息后 48小时内会有专门的商务人员与您对接</h2> <div class=\"item\" data-v-4200803a><div class=\"text\" data-v-4200803a><span data-v-4200803a>*</span>您的姓名：</div> <input type=\"text\" maxlength=\"10\" placeholder=\"请输入姓名\" name id=\"name\""+(_vm._ssrAttr("value",(_vm.name)))+" data-v-4200803a> <div class=\"input-error\" data-v-4200803a>"+_vm._ssrEscape(_vm._s(_vm.name_error))+"</div></div> <div class=\"item\" data-v-4200803a><div class=\"text\" data-v-4200803a>公司名称：</div> <input type=\"text\" placeholder=\"请输入公司名称\" maxlength=\"100\" name id=\"companyName\""+(_vm._ssrAttr("value",(_vm.company_name)))+" data-v-4200803a> <div class=\"input-error\" data-v-4200803a>"+_vm._ssrEscape(_vm._s(_vm.company_name_error))+"</div></div> <div class=\"item\" data-v-4200803a><div class=\"text\" data-v-4200803a><span data-v-4200803a>*</span>联系电话：</div> <input type=\"text\" placeholder=\"请输入联系电话\" maxlength=\"30\" name id=\"phone\""+(_vm._ssrAttr("value",(_vm.phone)))+" data-v-4200803a> <div class=\"input-error\" data-v-4200803a>"+_vm._ssrEscape(_vm._s(_vm.phone_error))+"</div></div> <div class=\"item\" data-v-4200803a><div class=\"text\" data-v-4200803a><span data-v-4200803a>*</span>验证码：</div> <input type=\"text\" placeholder=\"请输入验证码\" name id=\"code\""+(_vm._ssrAttr("value",(_vm.code)))+" data-v-4200803a> <div class=\"input-error\" data-v-4200803a>"+_vm._ssrEscape(_vm._s(_vm.code_error))+"</div> <div class=\"get-code\" data-v-4200803a>获取验证码</div></div> <div class=\"plan-btn\" data-v-4200803a>免费获取方案</div></div></div></div>"):"<!---->"))]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/form/form.vue?vue&type=template&id=4200803a&scoped=true&

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
  "4200803a",
  "5c789a2f"
  
)

/* harmony default export */ var form_form = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon11.4bc15c2.png";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon8.867805d.png";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon9.b78df08.png";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon10.a63312e.png";

/***/ }),
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./icon1.png": 68,
	"./icon10.png": 45,
	"./icon11.png": 42,
	"./icon12.png": 69,
	"./icon13.png": 70,
	"./icon2.png": 71,
	"./icon3.png": 72,
	"./icon4.png": 73,
	"./icon4_selected.png": 74,
	"./icon5.png": 75,
	"./icon5_selected.png": 76,
	"./icon6.png": 77,
	"./icon6_selected.png": 78,
	"./icon7.png": 79,
	"./icon7_selected.png": 80,
	"./icon8.png": 43,
	"./icon9.png": 44
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
webpackContext.id = 67;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon1.0ff852b.png";

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon12.ae76458.png";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon13.d13418a.png";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon2.05b72da.png";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon3.3231daf.png";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon4.c25ab94.png";

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon4_selected.ee8d37f.png";

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon5.3c8455f.png";

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon5_selected.458724e.png";

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon6.53be023.png";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon6_selected.f137c57.png";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon7.48dd52a.png";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon7_selected.9c97c81.png";

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/benefit.c9e25b9.png";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img14.c11bebe.png";

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img13.c82ea1d.png";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/client.cd1635a.png";

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sv_icon0.5088c53.png";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sv_icon0_selected.45b121c.png";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sv_icon1.08de31d.png";

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sv_icon1_selected.fa5308c.png";

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sv_icon2.e9e1df2.png";

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sv_icon2_selected.d6434d4.png";

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sv_icon3.46d40f1.png";

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sv_icon3_selected.b16a188.png";

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_29447116_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_29447116_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_29447116_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_29447116_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_29447116_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=29447116&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"index"},[_c('oakHeader',{attrs:{"current":0}}),_vm._ssrNode(" "),_vm._ssrNode("<main data-v-29447116>","</main>",[_vm._ssrNode("<section class=\"banner\" data-v-29447116></section> <section class=\"why-select-oak\" data-v-29447116><div class=\"container\" data-v-29447116><div class=\"common-title\" data-v-29447116><div class=\"name\" data-v-29447116>为什么选择橡树黑卡</div> <div class=\"desc\" data-v-29447116>\n            专业团队根据合作方与用户诉求，设计定制产品，并提供专业运营支持服务\n          </div></div> <div class=\"wrap\" data-v-29447116><div class=\"capacity\" data-v-29447116>"+(_vm._ssrList((_vm.list),function(item,index){return ("<div"+(_vm._ssrClass(null,("item " + (_vm.current === index && 'active'))))+" data-v-29447116><img"+(_vm._ssrAttr("src",__webpack_require__(67)("./icon" + (index + 1) + ".png")))+" alt data-v-29447116> <div data-v-29447116>"+_vm._ssrEscape(_vm._s(item))+"</div></div>")}))+"</div> <div class=\"capacity-content1\""+(_vm._ssrStyle(null,null, { display: (_vm.current === 0) ? '' : 'none' }))+" data-v-29447116><div class=\"text\" data-v-29447116><div class=\"top\" data-v-29447116><h4 data-v-29447116>一站式权益</h4> <span data-v-29447116>Equity one stop</span> <h5 data-v-29447116>低成本 高价值</h5></div> <p data-v-29447116><span data-v-29447116> - 整合食住行用等全流程权益，</span>\n                覆盖类目广，满足用户大部分生活需求。\n              </p> <p data-v-29447116><span data-v-29447116> - 权益具有高频、强流量、高价值属性，</span>\n                利于吸引新用户，提升用户忠诚度。\n              </p> <p data-v-29447116>- 权益成本更低。</p></div> <img"+(_vm._ssrAttr("src",__webpack_require__(81)))+" alt data-v-29447116></div> <div class=\"capacity-content1 capacity-content2\""+(_vm._ssrStyle(null,null, { display: (_vm.current === 1) ? '' : 'none' }))+" data-v-29447116><div class=\"text\" data-v-29447116><div class=\"top\" data-v-29447116><h4 data-v-29447116>独家权益</h4> <span data-v-29447116>Flexible customization</span> <h5 data-v-29447116>权益保障 出行无忧</h5></div> <p data-v-29447116><span data-v-29447116>\n                  -\n                  与多家酒店集团、贵宾出行服务商合作，可为用户提供高级酒</span> <span data-v-29447116>店会籍匹配，及全球贵宾休息室、快速安检等高端服务。</span></p> <p data-v-29447116><span data-v-29447116>\n                  -\n                  与航空公司合作，支持积分兑换里程、充话费送里程等权益。</span></p></div> <img"+(_vm._ssrAttr("src",__webpack_require__(82)))+" alt data-v-29447116></div> <div class=\"capacity-content1 capacity-content3\""+(_vm._ssrStyle(null,null, { display: (_vm.current === 2) ? '' : 'none' }))+" data-v-29447116><div class=\"text\" data-v-29447116><div class=\"top\" data-v-29447116><h4 data-v-29447116>灵活定制</h4> <span data-v-29447116>Flexible customizati</span> <h5 data-v-29447116>专业服务 一键接入</h5></div> <p data-v-29447116><span data-v-29447116> - 拥有多家银行服务专业经验，无仓储，无物</span> <span data-v-29447116>流，交付快，成本低。</span></p> <p data-v-29447116><span data-v-29447116> - 产品介入支持多种H5/API、兑换码等方</span> <span data-v-29447116>式，可一键接入，权益可灵活配置。</span></p></div> <img"+(_vm._ssrAttr("src",__webpack_require__(83)))+" alt data-v-29447116></div></div></div></section> <section class=\"plan\" data-v-29447116><div class=\"container\" data-v-29447116><img"+(_vm._ssrAttr("src",__webpack_require__(38)))+" alt data-v-29447116> <div class=\"plan-form\" data-v-29447116><h2 data-v-29447116>完善信息后 48小时内会有专门的商务人员与您对接</h2> <div class=\"item\" data-v-29447116><div class=\"text\" data-v-29447116><span data-v-29447116>*</span>您的姓名：</div> <input type=\"text\" maxlength=\"10\" placeholder=\"请输入姓名\" name id=\"name\""+(_vm._ssrAttr("value",(_vm.name)))+" data-v-29447116> <div class=\"input-error\" data-v-29447116>"+_vm._ssrEscape(_vm._s(_vm.name_error))+"</div></div> <div class=\"item\" data-v-29447116><div class=\"text\" data-v-29447116>公司名称：</div> <input type=\"text\" placeholder=\"请输入公司名称\" maxlength=\"100\" name id=\"companyName\""+(_vm._ssrAttr("value",(_vm.company_name)))+" data-v-29447116> <div class=\"input-error\" data-v-29447116>"+_vm._ssrEscape(_vm._s(_vm.company_name_error))+"</div></div> <div class=\"item\" data-v-29447116><div class=\"text\" data-v-29447116><span data-v-29447116>*</span>联系电话：</div> <input type=\"text\" placeholder=\"请输入联系电话\" maxlength=\"30\" name id=\"phone\""+(_vm._ssrAttr("value",(_vm.phone)))+" data-v-29447116> <div class=\"input-error\" data-v-29447116>"+_vm._ssrEscape(_vm._s(_vm.phone_error))+"</div></div> <div class=\"item\" data-v-29447116><div class=\"text\" data-v-29447116><span data-v-29447116>*</span>验证码：</div> <input type=\"text\" placeholder=\"请输入验证码\" name id=\"code\""+(_vm._ssrAttr("value",(_vm.code)))+" data-v-29447116> <div class=\"get-code\" data-v-29447116>获取验证码</div> <div class=\"input-error\" data-v-29447116>"+_vm._ssrEscape(_vm._s(_vm.code_error))+"</div></div> <div class=\"plan-btn\" data-v-29447116>免费获取方案</div></div></div></section> <section class=\"service-value\" data-v-29447116><div class=\"container\" data-v-29447116><div class=\"common-title\" data-v-29447116><div class=\"name\" data-v-29447116>服务价值</div> <div class=\"desc\" data-v-29447116>\n            助力企业满足用户对高品质服务的需求，提升拉新促活能力与品牌忠诚度\n          </div></div> <div class=\"list\" data-v-29447116>"+(_vm._ssrList((_vm.service_value),function(item,index){return ("<div"+(_vm._ssrClass(null,{'item': true, 'active': _vm.service_value_current === index}))+" data-v-29447116><img"+(_vm._ssrAttr("src",_vm.service_value_current === index
                  ? item.icon_selected
                  : item.icon))+" alt data-v-29447116> <div class=\"name\" data-v-29447116>"+_vm._ssrEscape(_vm._s(item.title))+"</div> <div data-v-29447116><ul data-v-29447116>"+(_vm._ssrList((item.list),function(i){return ("<li data-v-29447116>"+_vm._ssrEscape("\n                  "+_vm._s(i)+"\n                ")+"</li>")}))+"</ul></div></div>")}))+"</div></div></section> <section class=\"client\" data-v-29447116><div class=\"container\" data-v-29447116><div class=\"common-title\" data-v-29447116><div class=\"name\" data-v-29447116>我们服务的行业客户</div></div> <img"+(_vm._ssrAttr("src",__webpack_require__(84)))+" alt data-v-29447116></div></section> "),_c('oakForm')],2),_vm._ssrNode(" "),_c('oakFooter'),_vm._ssrNode(" <div"+(_vm._ssrClass(null,("dialog " + (_vm.showDialog && 'show-dialog'))))+" data-v-29447116><div class=\"dialog-bg\" data-v-29447116></div> <div class=\"dialog-container\" data-v-29447116>\n      提交成功，稍后会有专门商务联络，谢谢！\n      <div class=\"close\" data-v-29447116>✖</div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=29447116&scoped=true&

// EXTERNAL MODULE: ./components/header/header.vue + 4 modules
var header = __webpack_require__(20);

// EXTERNAL MODULE: ./components/footer/footer.vue + 4 modules
var footer = __webpack_require__(21);

// EXTERNAL MODULE: ./components/form/form.vue + 4 modules
var form_form = __webpack_require__(41);

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
        icon: __webpack_require__(85),
        icon_selected: __webpack_require__(86),
        title: "活跃",
        list: ["• 提升用户行为活跃", "• 提升用户交易活跃", "• 延长用户生命周"]
      }, {
        icon: __webpack_require__(87),
        icon_selected: __webpack_require__(88),
        title: "创收",
        list: ["• 获得会员费营收", "• 带动主营业务增收"]
      }, {
        icon: __webpack_require__(89),
        icon_selected: __webpack_require__(90),
        title: "客户关怀",
        list: ["• 通过会员礼，提升品牌价值", "• 提升用户尊贵感", "• 提升用户归属感"]
      }, {
        icon: __webpack_require__(91),
        icon_selected: __webpack_require__(92),
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
          r.style.fontSize = "40px";
        } else {
          if (a <= 320) {
            r.style.fontSize = "20px";
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
  
  var style0 = __webpack_require__(93)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "29447116",
  "e02e9f9e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })
]);;
//# sourceMappingURL=index.js.map