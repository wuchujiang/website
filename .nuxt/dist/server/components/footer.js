exports.ids = [1];
exports.modules = {

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("f0b3fa0e", content, true, context)
};

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footer/footer.vue?vue&type=template&id=40bf3fa0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"left\"><img"+(_vm._ssrAttr("src",__webpack_require__(44)))+" alt> <p>合作电话：400-150-9669</p> <p>业务合作：marketing@oakblack.com</p> <p>媒体合作：media@oakblack.com</p></div> "),_vm._ssrNode("<div class=\"r-nav\">","</div>",[_vm._ssrNode("<div class=\"item\">","</div>",[_vm._ssrNode("<h2>产品服务</h2> "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":_vm.saas}},[_vm._v("会员SAAS服务")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":_vm.operation}},[_vm._v("精细化运营服务")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"item\">","</div>",[_vm._ssrNode("<h2>关于我们</h2> "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":_vm.about}},[_vm._v("公司介绍")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":_vm.contact}},[_vm._v("联系我们")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"item\">","</div>",[_vm._ssrNode("<h2>加入我们</h2> "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('nuxt-link',{attrs:{"to":_vm.join}},[_vm._v("招聘职位")])],1)])],2)],2)],2),_vm._ssrNode(" <div class=\"copyright\"><a href=\"https://beian.miit.gov.cn/\">粤ICP备18120172号</a>    Copyright © 2018 深圳市橡树黑卡网络科技有限公司 XSHKVIP.COM</div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/footer/footer.vue?vue&type=template&id=40bf3fa0&

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
/* harmony default export */ var footervue_type_script_lang_js_ = ({
  data() {
    return {
      saas:  true ? '/saas.html' : undefined,
      operation:  true ? '/operation.html' : undefined,
      about:  true ? '/about.html' : undefined,
      contact:  true ? '/contact.html' : undefined,
      join:  true ? '/join.html' : undefined
    };
  }

});
// CONCATENATED MODULE: ./components/footer/footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var footer_footervue_type_script_lang_js_ = (footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/footer/footer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(45)
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
  "4f7635ba"
  
)

/* harmony default export */ var footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(28).default})


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo2.f72a0aa.png";

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".footer{background-color:#333;padding:72px 0}.footer .container{display:flex;justify-content:space-between}.footer .left{font-size:14px;color:#fff}.footer .left p{margin-top:24px}.r-nav{display:flex;color:#fff}.r-nav .item{margin-left:170px}.r-nav .item h2{font-size:20px}.r-nav .item ul li{margin-top:22px;font-size:14px}.r-nav .item ul li a{color:#fff;transition:all .3s linear}.r-nav .item ul li:hover a{opacity:.8}.copyright{text-align:center;margin-top:72px;color:#999}.copyright a{color:#999}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=footer.js.map