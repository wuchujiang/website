exports.ids = [1];
exports.modules = {

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return key; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return secret; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return url; });
//阿里云api网关使用的key，secret
const key =  false ? undefined : '203810451';
const secret =  false ? undefined : "fa70o4nrgiqrz7tk2f20gksluh7qyg3s";
const baseUrl =  false ? undefined : "https://api.xiangshuheika.com";
const url = 'https://cdn.xiangshuheika.com/static/website/';

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh1.b160cb0.png";

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAMAAABU4iNhAAAA/FBMVEUAAABaT2FYTmBYTmFaUGJYTmBZTmBZT2JZT2FYT2NbU2RgWm5YTmBYT2BYT2BYTmFYTmBYT2BZTmFZT2BaUGRgUHCAZ4BYT2BZTmFYTmBZTmFaUWBZUWNaT2FcT2FgUGheVWZgYIBYTmD///9TSVxXTV9VS13AvMHr6utyaXfu7e59d4ODfYnq6et6c4BaUGHm5ebk4uTe3N92cH1cU2P39/jo5+htZHT6+fr09PXV1NfGw8icmKGTjpiIg46AeoZzbHlqYXFjWmry8vLv7u/f3+HS0NS2s7myrrWZlJ6Mh5N1bXtvZ3VQRlna19vW1NfNy8/JyMzCv8OsqLB2ifNTAAAAInRSTlMAWea1QPjvjXAyJQz74djQyryjmRkQBfbasIlSSEc6IB4IY+PUaAAAAeJJREFUOMul1WdTwkAQBuAEIiBgw971GgqBEEAQG4KdYv3//8XdUK4QZBjfT+HmmSO3e3ex9Gw58d3VpYXISnR9P2VNj5OJEZmFqD3FLUaJmZXDEHe67pGQrG2YcGOVhCeyaPxzhEzLtva2SVgJJx43lcDh9IGEqWUYbF2XOwZlxc/vniCx5FjiovkPpX6bazBfozQLDzubQ2gTTJbSs3OhzZijlF7jY3zYlyVNSlgDWKpwbMJxIBNElRL6AHN5RjCZQEbCJKsUABYQBjkBeERCJOv6CJsjSBIg90KkqJQBPjYZH3cV5PKkFNUvfEeXyfWlN60UmZDCq7ZfVIhxrOSEZK2X7L33ese4Km3LMSWrf1Bay/c1h0uyDSnq71TWRyZuSlbHVcuaS2n8e7/1DOoCG+4XNZrQV1RvXyHsFJGWKiq1tSqVXIQPtyLYb7SgUkerfKOMM94KDlvzDB6fukxWXusm5hIgFrX5gPSeKd080mTjDSFSt4DvOqIJbdfhjG8c4JA+wkC5N/h9ou5khDcARxFuY3Q6SEY5HfwVFnMj1B6yOyjWM5GnY9AmcX6VC2bUaMl3cSiunmLCvaoBcaNWuXqK8Wb4K7GkdttMT/pg3hts9q045007+/b+zxdh9lfmF/LesdJwxKu2AAAAAElFTkSuQmCC"

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh4.32ab95a.png";

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kh5.8b814ab.png";

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  alias: function (data) {
    const {
      aplus_queue
    } = window;
    aplus_queue.push({
      action: "aplus.setMetaInfo",
      arguments: ["_user_id", data]
    });
  },
  pageView: function (name, props, callback) {
    try {
      let page_name = name;
      const {
        aplus_queue
      } = window;
      aplus_queue.push({
        action: 'aplus.sendPV',
        arguments: [{
          is_auto: false
        }, {
          //必传参数
          ts: new Date().getTime(),
          path: location.href,
          page_name,
          ...props
        }]
      });
    } catch (error) {
      console.log('err：调用quick tracking统计页面失败');
    }
  },
  track: function (eventName, eventInfo, callback) {
    let event_name = eventName;
    let event_type = 'CLK';

    try {
      const {
        aplus_queue
      } = window;
      aplus_queue.push({
        action: 'aplus.record',
        arguments: [event_name, event_type, { ...eventInfo
        }]
      });
    } catch (error) {
      console.log('err：调用quick tracking统计事件失败');
    }
  },
  profileSet: function (data) {
    const {
      aplus_queue
    } = window;
    aplus_queue.push({
      'action': 'aplus.record',
      'arguments': ['$$_user_profile', 'OTHER', { ...data
      }]
    });
  }
});

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAMAAAANxBKoAAAAqFBMVEUAAAD/UQH/WA7/UgT/aEL/UAL/UAP/XBL/UAH/UAH/UAH/XyL/UQH/UAH/Uwf/UQH/UAH/UAH/UQL/VQr/UAH/UQL/UQL/UQP/UQP/UgP/UwT/UgX/UgX/VQj/UQH/UAH/UAH/UQH/UQL/UQL/UQL/UQL/UAL/UQP/UQP/Wxb/UAH/UQH/UAH/UAH/UQL/UQT/Uwn/UQL/UgL/UgL/UAL/Uwb/UwP/UAHFkiQEAAAAN3RSTlMA+xFDA6JXDfTw3wfr2CX248qaGc2ell9RSD02MCHmz8S0qJGCe2pkTAv40rytdzkcjIZ+cStT5Z6U9wAAAg1JREFUSMe9k9mWojAURW8AGWUWEed5nqq0+vz/n3UiVCkGtB569X5hATt33Zyb0P8k1huh7ZvueLY23rndCe5sI++V6+1zzbcDBgFLlFo5NQEM22ul6Ei8Bt0a+UP8XDr0gzLnPtNr5alxa0jVO90zcQZjrqckcwWwJNLWhyZu2FGPv0Zc70ny1/Ym/7HxwJh7CWA/b1UbATNSJijDPjRtDLSfbB1wHc+FxMQYWGCDss1Lq7GNCvbaEUjKIwRazgiVRIYFc/NofwLpHDVkM6DzaLeAE0MN9hoYd36qDxrArg2JzyKilSjknosBi3H4PiS6sQVBPq5Dbh9RTVOjBe5YuZ2gmhXRpok7ud1AFWxRhPXeHk6OHgm8N7Z9WGRxKdtae6c/H7d2vd2Sb/mq3lZJQsU3fv7hggJGMqf7YSwGbwqTAaYm230Ao0TM6ut7fbjdZaKfnmz3AKS0RrO8fY8BF9nWeVWHdz+lMhEQli+2KLcAdJFj+mRvdkUoeTLG1XX4wxVVY9+SsvWsvPgsmLaTFmMdsRIh9yLMK/YfYMkf2sUHEAjZaYW8nQ6GCsmcw+0tFkVfqo5Y14gMXsRkKlWhrUZnutPNRDMWjlSD8TQhZ85wpZf0V6fCTV1Y+mt5DmDBI81mQ+AQv5YH4LC9zQA27Vcq8iFlboPfjbcoFgCzr9HvUAMMM/o9Cv0L/gK0bpR9FziaZgAAAABJRU5ErkJggg=="

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAApVBMVEUAAAD/UAL/UQH/VRf/UAH/UAH/UQH/UQH/UAH/UQL/UAL/UAL/UQL/UQP/UAf/UQz/UAH/UAH/yrP/2cn/Yhv/t5f/5dn/0bz/sIv/fUL/eTz/o3r/n3P/mGn/ZyL/VQj/4dP/3tD/g0v/WA3/9vP/7+j/2Mf/q4X/kmH/cjH/////6uH/1MH/zLX/xKr/v6P/aSX/28v/zLb/so//sI3/qoT/WxE/NpULAAAAEXRSTlMAf/ML/ujZ07+qpYJyUiMW8pdXt8UAAAFaSURBVDjLjZXXjoMwEEWNqQESMjbVoaf3bP3/T1trtQKTTcicNzRHuhp7PJAhM991LEotx/Vn5CmBZ4OC7QUPNV2jcAfV9P/e1IQHmNN7TzPgIYY2jJ3AUyZqvPRGTCUXRunSp8a4aPx1pJvwAlPvgxHhAX0t0kCKHiDwpGhjRFvOC6CYEV/9DJcAyxAk3wBVqFR84ipay9O2TXkrjTgLs40iusTpPwRbN4w1ayZAxHmUvWWfXc0hFiiwaLeLGAAk2/z9elituopF6EBk2y2TYnG4HtfnpuxFSuYDsU6SWoo5Sz+ibFMeu8pcjV6GyWK/XySy93SRSzGJ+mi1mYLzmvOG8+JXFBcQWd+MCz3izCujvgiQYnG6lWX01R2PeuBlvDMAqiK+STFM4jg+7bsDf3KFVXV/hdihQI8ZenCxTwH9uLDPFbsAsCsFv6Twaw+/SPGrGb/s0b+PHzW4WN43W7qcAAAAAElFTkSuQmCC"

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAAllBMVEUAAAD/UQH/UAH/UAH/UgP/cVL/UAH/UAH/UQL/VAf/UAL/UQL/UwT/VAb/XRv/UAH/UAH/UAH/UAH/UQL/UAL/UQL/UQL/UwX/UwX/VQn/Zir/UQH/UQL/UAL/UQL/UAL/UAH/UQH/UAH/UAL/UQL/UAP/VQz/WA7/XxX/UQH/UQH/UAH/UQH/UQL/UgP/UQP/UQT/UAGYWYtTAAAAMXRSTlMA+PzDUgPfs34hppE7KAnuzr2sqZ56aDMuHAbomoqGb/Xz1JV0WRURC/rj2cekTFtCKUNl2wAAAahJREFUWMPt10mW2kAQBNCQ0IAYBAjQxNTQNPRsx/0v54WfbUoqt5EIFn5P/wCxyMyqykKn0+l0Ohb+5+LN5epjDLHyuOJP7hOkRgF/c0cQSh1emEHnG026cmcOTRuoHFjxChGPNapGTlkzhETBugAST7TIofBIiyUUerToQeGdFu5ZNyBV3v2i19Ja68fvkVaRIDq9X0FGtFhAIX5gzYcPiTmr5v69LtXEh0i8pyEsIbMwz/gJOmPXfuvpGzl5hk5GwxZCoRH9MoZO5FQeAqE+DUfoxIER7WTQ+aQhOENnTcOshMzzGw0D6GQv1eVM50jTwodMQtM8xoVluPWi1uU+0DSNqpM/mW29Ai1EE5omnu1MvQ7SMZr67rAijH4lm4JhfvNG7GyKP8mGTcM271jjJkMa2o7nhldzc8WiZtdHQ0NeK0RTW1qI/g5LXmeG5rwH2gluxzzgFVK0cZrxn5wT2tk5NCiX8PGUX9oXaK3sf9nNHW5RDPhXc9xo1KNdLxZ8o0JahDEU8vWEJmfpQ6T0kv1FcBJByc92g95htXofpGd0Op3Of+cHJLH+GDCYr7sAAAAASUVORK5CYII="

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAMAAAANxBKoAAAAY1BMVEUAAAD/UAH/UAH/UAH/UgP/UQH/UQH/UQH/UAH/UQX/Vgv/UAH/UQL/Ugb/VQ3/VQ7/UQL/UQP/UwX/UAH/UQL/VAT/Vgn/VQn/ZiL/UAH/UAH/UQL/UQL/UAL/UQT/VRz/UAE4CQcKAAAAIHRSTlMAzazRUO3q+u8yFtV8LBMRgGEvwp49HRsH4bWNdGlFCW4fQRcAAACmSURBVEjH7dHLDoIwEIXhQSlSrJbK1Xvf/ylNSsfGpIHjgoRF/83M4ltMMpRao95oHMvSHqs/sGUOYZhLYS3ML8Jy+wrBgZ+XMcxPBbvAERw4ggPXCxjhA+PD9J2SeTZGtGKcZ27uFPM8op+MyWtSM1oXHn811W65jhSpEw4HPXEhKdpQtx39aDK3e09zBe1LelO6cboFtXLagPrd8CFY+eNFqVX6AK72Je4L2y48AAAAAElFTkSuQmCC"

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/footer/footer.vue?vue&type=template&id=763fb9da&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer"},[_vm._ssrNode("<div class=\"container\" data-v-763fb9da>","</div>",[_vm._ssrNode("<div class=\"left\" data-v-763fb9da><img"+(_vm._ssrAttr("src",_vm.project.en ? ("" + _vm.url + (_vm.project.en) + "_logo2.png") : (_vm.url + "logo2.png")))+" alt data-v-763fb9da> <p data-v-763fb9da>合作电话：400-150-9669</p> <p data-v-763fb9da>业务合作：marketing@oakblack.com</p> <p data-v-763fb9da>媒体合作：media@oakblack.com</p> <a target=\"_blank\" href=\"http://wpa.qq.com/msgrd?v=3&uin=&site=qq&menu=yes\" class=\"qqkf\" data-v-763fb9da>QQ咨询</a></div> "),_vm._ssrNode("<div class=\"r-nav \" data-v-763fb9da>","</div>",_vm._l((_vm.nav),function(item){return _vm._ssrNode("<div class=\"item\" data-v-763fb9da>","</div>",[(true)?_vm._ssrNode("<div class=\"nav-wrap\" data-v-763fb9da>","</div>",[_vm._ssrNode("<h2 data-v-763fb9da>"+_vm._ssrEscape(_vm._s(item.name))+"</h2> "),_vm._ssrNode("<ul data-v-763fb9da>","</ul>",_vm._l((item.sec_list),function(i){return _vm._ssrNode("<li data-v-763fb9da>","</li>",[_c('nuxt-link',{attrs:{"to":i.url}},[_vm._v(_vm._s(i.name))]),_vm._ssrNode(" "+((_vm.type === i.type)?("<div class=\"shadow\" data-v-763fb9da></div>"):"<!---->"))],2)}),0)],2):undefined])}),0),_vm._ssrNode(" "+((true)?("<div class=\"qr-code hide-on-mobile\" data-v-763fb9da><img"+(_vm._ssrAttr("src",(_vm.url + "code.png")))+" alt data-v-763fb9da></div>"):undefined))],2),_vm._ssrNode(" <div class=\"copyright\" data-v-763fb9da><span data-v-763fb9da><a href=\"https://beian.miit.gov.cn/\" target=\"_blank\" data-v-763fb9da>"+_vm._ssrEscape("粤ICP备"+_vm._s(_vm.project.record
            ? _vm.project.record
            : _vm.href.includes("xsvips")
            ? "20003741"
            : "18120172")+"号")+"</a></span>"+_vm._ssrEscape("\n    版权所有 深圳市"+_vm._s(_vm.project.name ? _vm.project.name : "橡树黑卡")+"网络科技有限公司\n  ")+"</div> <div class=\"suspend\" data-v-763fb9da><div class=\"item online-hover\" data-v-763fb9da><img"+(_vm._ssrAttr("src",__webpack_require__(33)))+" alt data-v-763fb9da> <div class=\"online-consult\" data-v-763fb9da><div class=\"online-consult-main\" data-v-763fb9da><h3 data-v-763fb9da>亲爱的用户</h3> <p data-v-763fb9da>为了更好的帮您解决问题，请选择您要咨询的会员类型</p> <ul data-v-763fb9da><li data-v-763fb9da><a href=\"https://.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\" data-v-763fb9da><img"+(_vm._ssrAttr("src",__webpack_require__(27)))+" alt data-v-763fb9da><span data-v-763fb9da>省呗</span></a></li> <li data-v-763fb9da><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=30020\" target=\"_blank\" data-v-763fb9da><img"+(_vm._ssrAttr("src",__webpack_require__(28)))+" alt data-v-763fb9da><span data-v-763fb9da>keep</span></a></li> <li data-v-763fb9da><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=29924\" target=\"_blank\" data-v-763fb9da><img"+(_vm._ssrAttr("src",__webpack_require__(29)))+" alt data-v-763fb9da><span data-v-763fb9da>榕树贷款</span></a></li> <li data-v-763fb9da><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=29354\" target=\"_blank\" data-v-763fb9da><img"+(_vm._ssrAttr("src",__webpack_require__(30)))+" alt data-v-763fb9da><span data-v-763fb9da>我来数科</span></a></li> <li data-v-763fb9da><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=28877\" target=\"_blank\" data-v-763fb9da><img"+(_vm._ssrAttr("src",__webpack_require__(34)))+" alt data-v-763fb9da><span data-v-763fb9da>其他</span></a></li></ul> <p data-v-763fb9da>\n            如您需要商务合作请联络邮箱：<a href=\"mailto:marketing@oakblack.com\" target=\"_blank\" data-v-763fb9da><span data-v-763fb9da>marketing@oakblack.com</span></a></p> <p data-v-763fb9da>电话：400-150-9669</p></div></div></div> <div class=\"item item2\" data-v-763fb9da><img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt data-v-763fb9da> <div class=\"phone-consult\" data-v-763fb9da><div class=\"phone-consult-main\" data-v-763fb9da><h4 data-v-763fb9da><a href=\"tel:400-150-9669\" data-v-763fb9da>客服电话<span data-v-763fb9da>400-150-9669</span></a></h4> <h4 data-v-763fb9da>客服工作时间</h4> <p data-v-763fb9da>周一到周五：9：00～20：00（在线和电话）</p> <p data-v-763fb9da>周末或节假日：9：00～20：00（电话）</p></div></div></div> "+((_vm.showBackTop)?("<div class=\"item\" data-v-763fb9da><img"+(_vm._ssrAttr("src",__webpack_require__(36)))+" alt data-v-763fb9da></div>"):"<!---->")+"</div> <div class=\"suspend mobile-suspend\" data-v-763fb9da><div class=\"item\" data-v-763fb9da><img"+(_vm._ssrAttr("src",__webpack_require__(33)))+" alt data-v-763fb9da> "+((_vm.show_online)?("<div class=\"online-consult show-online-consult\" data-v-763fb9da><div class=\"online-consult-main\" data-v-763fb9da><h3 data-v-763fb9da>亲爱的用户</h3> <p data-v-763fb9da>为了更好的帮您解决问题，请选择您要咨询的会员类型</p> <ul data-v-763fb9da><li data-v-763fb9da><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433\" target=\"_blank\" data-v-763fb9da><img"+(_vm._ssrAttr("src",__webpack_require__(27)))+" alt data-v-763fb9da><span data-v-763fb9da>省呗</span></a></li> <li data-v-763fb9da><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=30020\" target=\"_blank\" data-v-763fb9da><img"+(_vm._ssrAttr("src",__webpack_require__(28)))+" alt data-v-763fb9da><span data-v-763fb9da>keep</span></a></li> <li data-v-763fb9da><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=29924\" target=\"_blank\" data-v-763fb9da><img"+(_vm._ssrAttr("src",__webpack_require__(29)))+" alt data-v-763fb9da><span data-v-763fb9da>榕树贷款</span></a></li> <li data-v-763fb9da><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=29354\" target=\"_blank\" data-v-763fb9da><img"+(_vm._ssrAttr("src",__webpack_require__(30)))+" alt data-v-763fb9da><span data-v-763fb9da>我来数科</span></a></li> <li data-v-763fb9da><a href=\"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=28877\" target=\"_blank\" data-v-763fb9da><img"+(_vm._ssrAttr("src",__webpack_require__(34)))+" alt data-v-763fb9da><span data-v-763fb9da>其他</span></a></li></ul> <p data-v-763fb9da>\n            如您需要商务合作请联络邮箱：<a href=\"mailto:marketing@oakblack.com\" target=\"_blank\" data-v-763fb9da><span data-v-763fb9da>marketing@oakblack.com</span></a></p> <p data-v-763fb9da>电话：400-150-9669</p></div></div>"):"<!---->")+"</div> <div class=\"item\" data-v-763fb9da><img"+(_vm._ssrAttr("src",__webpack_require__(35)))+" alt data-v-763fb9da> "+((_vm.show_phone_consult)?("<div class=\"phone-consult show-phone-consult\" data-v-763fb9da><div class=\"phone-consult-main\" data-v-763fb9da><h4 data-v-763fb9da><a href=\"tel:400-150-9669\" data-v-763fb9da>客服电话<span data-v-763fb9da>400-150-9669</span></a></h4> <h4 data-v-763fb9da>客服工作时间</h4> <p data-v-763fb9da>周一到周五：9：00～20：00（在线和电话）</p> <p data-v-763fb9da>周末或节假日：9：00～20：00（电话）</p></div></div>"):"<!---->")+"</div> "+((_vm.showBackTop)?("<div class=\"item\" data-v-763fb9da><img"+(_vm._ssrAttr("src",__webpack_require__(36)))+" alt data-v-763fb9da></div>"):"<!---->")+"</div> "+((_vm.show_online)?("<div class=\"shadow\" data-v-763fb9da></div>"):"<!---->")+" "+((_vm.show_phone_consult)?("<div class=\"shadow2\" data-v-763fb9da></div>"):"<!---->"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/footer/footer.vue?vue&type=template&id=763fb9da&scoped=true&

// EXTERNAL MODULE: ./utils/ans.js
var ans = __webpack_require__(31);

// EXTERNAL MODULE: ./utils/config.js
var config = __webpack_require__(26);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["type"],

  data() {
    return {
      showBackTop: false,
      show_online: false,
      show_phone_consult: false,
      url: config["d" /* url */],
      href: "",
      nav: [{
        name: "产品服务",
        use: "xshk",
        sec_list: [{
          name: "会员SAAS服务",
          type: "saas",
          url: "/saas"
        }, {
          name: "精细化运营服务",
          type: "operation",
          url: "/operation"
        }]
      }, {
        name: "关于我们",
        use: "xshk",
        sec_list: [{
          name: "公司介绍",
          type: "about",
          url: "/about"
        }, {
          name: "联系我们",
          type: "contact",
          url: "/contact"
        }]
      }, {
        name: "加入我们",
        use: "xshk",
        sec_list: [{
          name: "招聘职位",
          type: "join",
          url: "/join"
        }]
      }],
      project: {}
    };
  },

  mounted() {
    this.project = this.$store.state.project;
    this.href = window.location.href;
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
    },

    show1() {
      this.show_phone_consult = !this.show_phone_consult;
      this.show_online = false;
    },

    show2() {
      this.show_online = !this.show_online;
      this.show_phone_consult = false;
    },

    toAns(namespace) {
      ans["a" /* default */].track("button_service_click", {
        type: namespace
      });
    }

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
  "763fb9da",
  "656c10f2"
  
)

/* harmony default export */ var footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(39).default})


/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_763fb9da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_763fb9da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_763fb9da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_763fb9da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_763fb9da_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

};;
//# sourceMappingURL=footer.js.map