(window.webpackJsonp=window.webpackJsonp||[]).push([[1,4,5,6],{298:function(t,e,n){t.exports=n.p+"img/kh1.b160cb0.png"},299:function(t,e,n){t.exports=n.p+"img/kh2.d1d86ba.png"},300:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAMAAABU4iNhAAAA/FBMVEUAAABaT2FYTmBYTmFaUGJYTmBZTmBZT2JZT2FYT2NbU2RgWm5YTmBYT2BYT2BYTmFYTmBYT2BZTmFZT2BaUGRgUHCAZ4BYT2BZTmFYTmBZTmFaUWBZUWNaT2FcT2FgUGheVWZgYIBYTmD///9TSVxXTV9VS13AvMHr6utyaXfu7e59d4ODfYnq6et6c4BaUGHm5ebk4uTe3N92cH1cU2P39/jo5+htZHT6+fr09PXV1NfGw8icmKGTjpiIg46AeoZzbHlqYXFjWmry8vLv7u/f3+HS0NS2s7myrrWZlJ6Mh5N1bXtvZ3VQRlna19vW1NfNy8/JyMzCv8OsqLB2ifNTAAAAInRSTlMAWea1QPjvjXAyJQz74djQyryjmRkQBfbasIlSSEc6IB4IY+PUaAAAAeJJREFUOMul1WdTwkAQBuAEIiBgw971GgqBEEAQG4KdYv3//8XdUK4QZBjfT+HmmSO3e3ex9Gw58d3VpYXISnR9P2VNj5OJEZmFqD3FLUaJmZXDEHe67pGQrG2YcGOVhCeyaPxzhEzLtva2SVgJJx43lcDh9IGEqWUYbF2XOwZlxc/vniCx5FjiovkPpX6bazBfozQLDzubQ2gTTJbSs3OhzZijlF7jY3zYlyVNSlgDWKpwbMJxIBNElRL6AHN5RjCZQEbCJKsUABYQBjkBeERCJOv6CJsjSBIg90KkqJQBPjYZH3cV5PKkFNUvfEeXyfWlN60UmZDCq7ZfVIhxrOSEZK2X7L33ese4Km3LMSWrf1Bay/c1h0uyDSnq71TWRyZuSlbHVcuaS2n8e7/1DOoCG+4XNZrQV1RvXyHsFJGWKiq1tSqVXIQPtyLYb7SgUkerfKOMM94KDlvzDB6fukxWXusm5hIgFrX5gPSeKd080mTjDSFSt4DvOqIJbdfhjG8c4JA+wkC5N/h9ou5khDcARxFuY3Q6SEY5HfwVFnMj1B6yOyjWM5GnY9AmcX6VC2bUaMl3cSiunmLCvaoBcaNWuXqK8Wb4K7GkdttMT/pg3hts9q045007+/b+zxdh9lfmF/LesdJwxKu2AAAAAElFTkSuQmCC"},301:function(t,e,n){t.exports=n.p+"img/kh4.32ab95a.png"},302:function(t,e,n){t.exports=n.p+"img/kh5.ca477ae.png"},303:function(t,e,n){},304:function(t,e,n){},305:function(t,e,n){"use strict";n.r(e);var o={props:["current","sec_current"],data:function(){return{showNav:!1,nav:[{name:"首页",type:"index",url:"/"},{name:"产品服务",type:"product",url:"",second:[{name:"会员SaaS服务",type:"nav_saas",url:"/saas"},{name:"精细化运营服务",type:"nav_service",url:"/operation"}]},{name:"关于我们",type:"about",url:"",second:[{name:"公司介绍",type:"nav_about",url:"/about"},{name:"联系我们",type:"nav_contact",url:"/contact"}]},{name:"加入我们",type:"join",url:"/join"}]}}},r=(n(310),n(64)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header",attrs:{id:"header"}},[o("div",{staticClass:"container"},[o("h1",{staticClass:"logo"},[o("nuxt-link",{attrs:{to:"/"}},[o("img",{attrs:{src:n(307),alt:""}})])],1),t._v(" "),o("nav",{staticClass:"nav"},[o("ul",t._l(t.nav,(function(e,n){return o("li",{key:e.name,class:{item:!0,active:t.current===n}},[o("nuxt-link",{class:{down:e.second},attrs:{to:e.url}},[t._v(t._s(e.name))]),t._v(" "),e.second?o("div",{class:"sec_nav "+e.type},[o("div",{staticClass:"sec_nav-main"},t._l(e.second,(function(i){return o("div",{key:i.name,class:[{item:!0,sec_active:t.sec_current===i.type},""+i.type]},[o("nuxt-link",{attrs:{to:i.url}},[o("span"),t._v(t._s(i.name))])],1)})),0)]):t._e()],1)})),0)]),t._v(" "),o("div",{staticClass:"heaedr-r"},[o("div",{staticClass:"phone"},[t._v("400-150-9669")]),t._v(" "),o("div",{staticClass:"mobile-nav"},[o("img",{attrs:{src:n(308),alt:""},on:{click:function(e){t.showNav=!t.showNav}}}),t._v(" "),t.showNav?o("div",{staticClass:"nav-shadow",on:{click:function(e){t.showNav=!1}}}):t._e(),t._v(" "),t.showNav?o("ul",[o("img",{staticClass:"close2",attrs:{src:n(309),alt:""},on:{click:function(e){t.showNav=!1}}}),t._v(" "),t._l(t.nav,(function(e,n){return o("li",{key:e.name,class:{item:!0,active:t.current===n}},[o("nuxt-link",{class:{down:e.second},attrs:{to:e.url}},[t._v(t._s(e.name))]),t._v(" "),e.second?o("div",{class:"sec_nav "+e.type},[o("div",{staticClass:"sec_nav-main"},t._l(e.second,(function(i){return o("div",{key:i.name,class:[{item:!0,sec_active:t.sec_current===i.type},""+i.type]},[o("nuxt-link",{attrs:{to:i.url}},[o("span"),t._v(t._s(i.name))])],1)})),0)]):t._e()],1)}))],2):t._e()])])])])}),[],!1,null,"390598fa",null);e.default=component.exports;installComponents(component,{Header:n(305).default})},306:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"left"},[o("img",{attrs:{src:n(312),alt:""}}),t._v(" "),o("p",[t._v("合作电话：400-150-9669")]),t._v(" "),o("p",[t._v("业务合作：marketing@oakblack.com")]),t._v(" "),o("p",[t._v("媒体合作：media@oakblack.com")]),t._v(" "),o("a",{staticClass:"qqkf",attrs:{target:"_blank",href:"http://wpa.qq.com/msgrd?v=3&uin=&site=qq&menu=yes"}},[t._v("QQ咨询")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"copyright"},[n("span",[n("a",{attrs:{href:"https://beian.miit.gov.cn/",target:"_blank"}},[t._v("粤ICP备18120172号")]),t._v("\n    Copyright © 2018")]),t._v(" 深圳市橡树黑卡网络科技有限公司 XSHKVIP.COM\n  ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"item online-hover"},[o("img",{attrs:{src:n(313),alt:""}}),t._v(" "),o("div",{staticClass:"online-consult"},[o("div",{staticClass:"online-consult-main"},[o("h3",[t._v("亲爱的用户")]),t._v(" "),o("p",[t._v("为了更好的帮您解决问题，请选择您要咨询的会员类型")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433",target:"_blank"}},[o("img",{attrs:{src:n(298),alt:""}}),o("span",[t._v("省呗")])])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433",target:"_blank"}},[o("img",{attrs:{src:n(299),alt:""}}),o("span",[t._v("小赢卡贷")])])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433",target:"_blank"}},[o("img",{attrs:{src:n(300),alt:""}}),o("span",[t._v("keep")])])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433",target:"_blank"}},[o("img",{attrs:{src:n(301),alt:""}}),o("span",[t._v("榕树贷款")])])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433",target:"_blank"}},[o("img",{attrs:{src:n(302),alt:""}}),o("span",[t._v("新橙优品")])])]),t._v(" "),o("li",[o("a",{attrs:{href:"https://oakvip.s2.udesk.cn/im_client/?web_plugin_id=24433",target:"_blank"}},[o("img",{attrs:{src:n(314),alt:""}}),o("span",[t._v("其他")])])])]),t._v(" "),o("p",[t._v("\n            如您需要商务合作请联络邮箱："),o("a",{attrs:{href:"mailto:marketing@oakblack.com",target:"_blank"}},[o("span",[t._v("marketing@oakblack.com")])])]),t._v(" "),o("p",[t._v("电话：400-150-9669")])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"item item2"},[o("img",{attrs:{src:n(315),alt:""}}),t._v(" "),o("div",{staticClass:"phone-consult"},[o("div",{staticClass:"phone-consult-main"},[o("h4",[o("a",{attrs:{href:"tel:400-150-9669"}},[t._v("客服电话"),o("span",[t._v("400-150-9669")])])]),t._v(" "),o("h4",[t._v("客服工作时间")]),t._v(" "),o("p",[t._v("周一到周五：9：00～20：00（在线和电话）")]),t._v(" "),o("p",[t._v("周末或节假日：9：00～20：00（电话）")])])])])}],r=(n(44),n(214),n(98),{props:["type"],data:function(){return{showBackTop:!1,nav:[{name:"产品服务",sec_list:[{name:"会员SAAS服务",type:"saas",url:"/saas"},{name:"精细化运营服务",type:"operation",url:"/operation"}]},{name:"关于我们",sec_list:[{name:"公司介绍",type:"about",url:"/about"},{name:"联系我们",type:"contact",url:"/contact"}]},{name:"加入我们",sec_list:[{name:"招聘职位",type:"join",url:"/join"}]}]}},mounted:function(){var t=this;document.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>500&&!t.showBackTop?t.showBackTop=!0:e<=500&&t.showBackTop&&(t.showBackTop=!1)})),function(t){function e(){var e,u,n=t.document.documentElement,a=n.getBoundingClientRect().width;if(!e&&!u){var o=!!t.navigator.appVersion.match(/AppleWebKit.*Mobile.*/);e=t.devicePixelRatio,t.devicePixelRatio,u=1/(e=o?e:1)}n.style.fontSize=a>=640||a<=320?"23.4375px":a/320*20+"px"}t.addEventListener("resize",(function(){e()})),e()}(window)},methods:{toTop:function(){var t=setInterval((function(){var e=document.body.scrollTop||document.documentElement.scrollTop,n=e/4;0!=document.body.scrollTop?document.body.scrollTop-=n:document.documentElement.scrollTop-=n,0==e&&clearInterval(t)}),30)}}}),c=(n(316),n(64)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"footer"},[o("div",{staticClass:"container"},[t._m(0),t._v(" "),o("div",{staticClass:"r-nav"},t._l(t.nav,(function(e){return o("div",{key:e.name,staticClass:"item"},[o("h2",[t._v(t._s(e.name))]),t._v(" "),o("ul",t._l(e.sec_list,(function(i){return o("li",{key:i.name},[o("nuxt-link",{attrs:{to:i.url}},[t._v(t._s(i.name))]),t._v(" "),t.type===i.type?o("div",{staticClass:"shadow",on:{click:t.toTop}}):t._e()],1)})),0)])})),0)]),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"suspend"},[t._m(2),t._v(" "),t._m(3),t._v(" "),t.showBackTop?o("div",{staticClass:"item",on:{click:t.toTop}},[o("img",{attrs:{src:n(311),alt:""}})]):t._e()])])}),o,!1,null,"a0d28766",null);e.default=component.exports;installComponents(component,{Footer:n(306).default})},307:function(t,e,n){t.exports=n.p+"img/logo.51d04d5.png"},308:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAACVBMVEUAAAA0NDQzMzNa9oIkAAAAAnRSTlMAf7YpoZUAAAAdSURBVBjTYyAGsIaCQQAD1yowWABnIKQwwPAwGQB4ZCnXYu1vKgAAAABJRU5ErkJggg=="},309:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABVElEQVRYR+2XMa7CMAxA41bcqOkVmJn+jpDgn+iDhNiZ/swVmt4ItUapWglQW9tJkSwU1jjxy0tsUjDKf6CczyTA2BNKBpPBWAOx87/nDpZluWnbdu2c+wUADDGDiGCt/cuy7FZV1T9nDZZBD9c0zdUYswKAi3NuJ4Xs4c6IuDXG3PM8/+FAsgCLojgi4n7YsRTyDa5bBgBOdV0fKIsswIkELJMxc7uNUDsYxkMShcx552ED+omShJLYOUkiQC7kUnCiI37e5RyAj7PWDtU6FATrvo6ZFBuk7mRv2beSaLhgg3OQzxak7WhRgxTkEnDRBqeKpm/Ewffu5RS4fXAsbqxY1BzxVCWrKBLVbYbThDkx3Ksl6oOSxJLYRf7qQhKGzAl6LMQkipnL7oPqH6zqn/xeteqPJm5L+EScqM18AoBaMwFShqjxZJAyRI0ng5Qhaly9wQeVfKo46617JwAAAABJRU5ErkJggg=="},310:function(t,e,n){"use strict";n(303)},311:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAMAAAANxBKoAAAAY1BMVEUAAAD/UAH/UAH/UAH/UgP/UQH/UQH/UQH/UAH/UQX/Vgv/UAH/UQL/Ugb/VQ3/VQ7/UQL/UQP/UwX/UAH/UQL/VAT/Vgn/VQn/ZiL/UAH/UAH/UQL/UQL/UAL/UQT/VRz/UAE4CQcKAAAAIHRSTlMAzazRUO3q+u8yFtV8LBMRgGEvwp49HRsH4bWNdGlFCW4fQRcAAACmSURBVEjH7dHLDoIwEIXhQSlSrJbK1Xvf/ylNSsfGpIHjgoRF/83M4ltMMpRao95oHMvSHqs/sGUOYZhLYS3ML8Jy+wrBgZ+XMcxPBbvAERw4ggPXCxjhA+PD9J2SeTZGtGKcZ27uFPM8op+MyWtSM1oXHn811W65jhSpEw4HPXEhKdpQtx39aDK3e09zBe1LelO6cboFtXLagPrd8CFY+eNFqVX6AK72Je4L2y48AAAAAElFTkSuQmCC"},312:function(t,e,n){t.exports=n.p+"img/logo2.fedad8e.png"},313:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAMAAAANxBKoAAAAqFBMVEUAAAD/UQH/WA7/UgT/aEL/UAL/UAP/XBL/UAH/UAH/UAH/XyL/UQH/UAH/Uwf/UQH/UAH/UAH/UQL/VQr/UAH/UQL/UQL/UQP/UQP/UgP/UwT/UgX/UgX/VQj/UQH/UAH/UAH/UQH/UQL/UQL/UQL/UQL/UAL/UQP/UQP/Wxb/UAH/UQH/UAH/UAH/UQL/UQT/Uwn/UQL/UgL/UgL/UAL/Uwb/UwP/UAHFkiQEAAAAN3RSTlMA+xFDA6JXDfTw3wfr2CX248qaGc2ell9RSD02MCHmz8S0qJGCe2pkTAv40rytdzkcjIZ+cStT5Z6U9wAAAg1JREFUSMe9k9mWojAURW8AGWUWEed5nqq0+vz/n3UiVCkGtB569X5hATt33Zyb0P8k1huh7ZvueLY23rndCe5sI++V6+1zzbcDBgFLlFo5NQEM22ul6Ei8Bt0a+UP8XDr0gzLnPtNr5alxa0jVO90zcQZjrqckcwWwJNLWhyZu2FGPv0Zc70ny1/Ym/7HxwJh7CWA/b1UbATNSJijDPjRtDLSfbB1wHc+FxMQYWGCDss1Lq7GNCvbaEUjKIwRazgiVRIYFc/NofwLpHDVkM6DzaLeAE0MN9hoYd36qDxrArg2JzyKilSjknosBi3H4PiS6sQVBPq5Dbh9RTVOjBe5YuZ2gmhXRpok7ud1AFWxRhPXeHk6OHgm8N7Z9WGRxKdtae6c/H7d2vd2Sb/mq3lZJQsU3fv7hggJGMqf7YSwGbwqTAaYm230Ao0TM6ut7fbjdZaKfnmz3AKS0RrO8fY8BF9nWeVWHdz+lMhEQli+2KLcAdJFj+mRvdkUoeTLG1XX4wxVVY9+SsvWsvPgsmLaTFmMdsRIh9yLMK/YfYMkf2sUHEAjZaYW8nQ6GCsmcw+0tFkVfqo5Y14gMXsRkKlWhrUZnutPNRDMWjlSD8TQhZ85wpZf0V6fCTV1Y+mt5DmDBI81mQ+AQv5YH4LC9zQA27Vcq8iFlboPfjbcoFgCzr9HvUAMMM/o9Cv0L/gK0bpR9FziaZgAAAABJRU5ErkJggg=="},314:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAApVBMVEUAAAD/UAL/UQH/VRf/UAH/UAH/UQH/UQH/UAH/UQL/UAL/UAL/UQL/UQP/UAf/UQz/UAH/UAH/yrP/2cn/Yhv/t5f/5dn/0bz/sIv/fUL/eTz/o3r/n3P/mGn/ZyL/VQj/4dP/3tD/g0v/WA3/9vP/7+j/2Mf/q4X/kmH/cjH/////6uH/1MH/zLX/xKr/v6P/aSX/28v/zLb/so//sI3/qoT/WxE/NpULAAAAEXRSTlMAf/ML/ujZ07+qpYJyUiMW8pdXt8UAAAFaSURBVDjLjZXXjoMwEEWNqQESMjbVoaf3bP3/T1trtQKTTcicNzRHuhp7PJAhM991LEotx/Vn5CmBZ4OC7QUPNV2jcAfV9P/e1IQHmNN7TzPgIYY2jJ3AUyZqvPRGTCUXRunSp8a4aPx1pJvwAlPvgxHhAX0t0kCKHiDwpGhjRFvOC6CYEV/9DJcAyxAk3wBVqFR84ipay9O2TXkrjTgLs40iusTpPwRbN4w1ayZAxHmUvWWfXc0hFiiwaLeLGAAk2/z9elituopF6EBk2y2TYnG4HtfnpuxFSuYDsU6SWoo5Sz+ibFMeu8pcjV6GyWK/XySy93SRSzGJ+mi1mYLzmvOG8+JXFBcQWd+MCz3izCujvgiQYnG6lWX01R2PeuBlvDMAqiK+STFM4jg+7bsDf3KFVXV/hdihQI8ZenCxTwH9uLDPFbsAsCsFv6Twaw+/SPGrGb/s0b+PHzW4WN43W7qcAAAAAElFTkSuQmCC"},315:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAAllBMVEUAAAD/UQH/UAH/UAH/UgP/cVL/UAH/UAH/UQL/VAf/UAL/UQL/UwT/VAb/XRv/UAH/UAH/UAH/UAH/UQL/UAL/UQL/UQL/UwX/UwX/VQn/Zir/UQH/UQL/UAL/UQL/UAL/UAH/UQH/UAH/UAL/UQL/UAP/VQz/WA7/XxX/UQH/UQH/UAH/UQH/UQL/UgP/UQP/UQT/UAGYWYtTAAAAMXRSTlMA+PzDUgPfs34hppE7KAnuzr2sqZ56aDMuHAbomoqGb/Xz1JV0WRURC/rj2cekTFtCKUNl2wAAAahJREFUWMPt10mW2kAQBNCQ0IAYBAjQxNTQNPRsx/0v54WfbUoqt5EIFn5P/wCxyMyqykKn0+l0Ohb+5+LN5epjDLHyuOJP7hOkRgF/c0cQSh1emEHnG026cmcOTRuoHFjxChGPNapGTlkzhETBugAST7TIofBIiyUUerToQeGdFu5ZNyBV3v2i19Ja68fvkVaRIDq9X0FGtFhAIX5gzYcPiTmr5v69LtXEh0i8pyEsIbMwz/gJOmPXfuvpGzl5hk5GwxZCoRH9MoZO5FQeAqE+DUfoxIER7WTQ+aQhOENnTcOshMzzGw0D6GQv1eVM50jTwodMQtM8xoVluPWi1uU+0DSNqpM/mW29Ai1EE5omnu1MvQ7SMZr67rAijH4lm4JhfvNG7GyKP8mGTcM271jjJkMa2o7nhldzc8WiZtdHQ0NeK0RTW1qI/g5LXmeG5rwH2gluxzzgFVK0cZrxn5wT2tk5NCiX8PGUX9oXaK3sf9nNHW5RDPhXc9xo1KNdLxZ8o0JahDEU8vWEJmfpQ6T0kv1FcBJByc92g95htXofpGd0Op3Of+cHJLH+GDCYr7sAAAAASUVORK5CYII="},316:function(t,e,n){"use strict";n(304)},317:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABWCAMAAABiiJHFAAAAh1BMVEUAAABmZmZsbGxmZmZ1dXVoaGhnZ2d8fHyCgoJmZmZmZmZpaWlnZ2dnZ2dmZmZmZmZpaWlnZ2dnZ2dnZ2dnZ2dubm5mZmZnZ2dpaWltbW1nZ2dnZ2dnZ2doaGhoaGhnZ2dnZ2dnZ2dnZ2dpaWltbW1mZmZnZ2dmZmZoaGhnZ2dmZmZnZ2dmZma74kPmAAAALHRSTlMA1RX7DFvGBgPw6CD2tYzeOKFqQTIPcFYnGxGGYk9Jy7+akzwK0rqoLXqtncbZehkAAAI1SURBVFjD7dXJjqMwFIXh65jEZoYwJIHMc6rO+z9fqySIpbKbYJJFS82/YvUJrsw1jY2NjY2N/SeJws9zvxIfJJ1tytEURPln6GUIgMf7WxTd9uzHD/230ckX4N4WBTUVi9QDwtV7E42AePrrq+U0Bg5yuFowuKVCFbyOwaqhqh8gLMhYESLIh6knIJL0l2QNJEPUFfiaOlpwrOxV4WFOnZVwHWv2ipRedMBFWqoL7AS9SO6xsVNlwJfNY37W5tP+ZXfuCit2jbRVwSa/VsTMo6ZvzG1UwXn7RmfWuErl0+dpCXC2YLc4qK2gXKW2HbGwYL+Qke7qKmVg/VUJV5Lu6ipJF/3P7h03It1VqirFqTc7x5p016TSFGVvNkJGBteg0gnH3myIJRncna7SEvvebIyCDK7p7J/h9WbBScvZ4We+WgF6sx4cTZ3xOTO4Au6w2arzOjG4Pma92SMyg0omN8HB4txODarRXeBhcTl+66rZPVhclAU8qalm14Og3sU4aarRzTGj/k0RUZN4qsrdUVtttW8duO0b+V6jKnfHZPvowiGLHp0bRKqd9CCbhLp5DdlfZWq6Ib1KhijJLhmjphfVYJIsqwKsqbMNgoqsW4Jn1NHWRU4D2oLPO/YGV19j6yIVZEwegYwGtvJw2RrHyuD6NDhxBWbaWyUzIHTone4X4FInUpk1A9id3i2JAXjXNCrLKN17AOKMPlG1ueIZK1f0sUTlJ5tN4leCxsbGxsbG/q3+AJdlL7UiHjrxAAAAAElFTkSuQmCC"},318:function(t,e,n){},319:function(t,e,n){t.exports=n.p+"img/img11.bb54f33.png"},320:function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return _}));n(324),n(58),n(32);var o=n(325),r=n.n(o),c=n(327),l=n.n(c),A=n(328),m="203810450",d=n(27);var v=function(t,e){var n=t.create({timeout:3e4,headers:{Accept:"application/x-www-form-urlencoded","X-Ca-Stage":"RELEASE","X-Ca-Key":m,"X-Ca-Signature-Headers":"X-Ca-Key,X-Ca-Stage"}});return n.interceptors.request.use((function(t){t.baseURL="https://api-stag.xiangshuheika.com";var e=t.data||{};"post"!==t.method&&"put"!==t.method||(t.headers["Content-Type"]="application/x-www-form-urlencoded",t.data=r.a.stringify(t.data||{}));var n=function(option,t,e,n){var o="",r=Object.keys(option.data).sort();for(var c in r)option.data[r[c]]||0===option.data[r[c]]?o+=r[c]+"="+option.data[r[c]]+"&":o+=r[c]+"&";var l="";l=o.length?option.url+"?"+o.substring(0,o.length-1):option.url;var m=t.toUpperCase()+"\n"+e+"\n\n"+(n||"")+"\n\nX-Ca-Key:203810450\nX-Ca-Stage:RELEASE\n"+l,d=A.CryptoJS.HmacSHA256(m,"6qvbhkluygnkm58b49pcphdomh1q5d9o");return{hashInBase64:A.CryptoJS.enc.Base64.stringify(d)}}({url:t.url,data:l()(Object.assign(e,t.params||{}),(function(t){return null!=t}))},t.method.toUpperCase(),t.headers.Accept,t.headers["Content-Type"]).hashInBase64;return t.headers["X-Ca-Signature"]=n,t.headers.Authorization="",t})),n(e).then((function(t){var e;return!1===(null===(e=t.data)||void 0===e?void 0:e.ok)?(d.a.clear(),Object(d.a)(t.data.msg||"网络繁忙"),Promise.reject(t.data)):t.data})).catch((function(t){var e;return null!=t&&null!==(e=t.response)&&void 0!==e&&e.status&&t.response.status,Promise.reject(t)}))},h=function(t,data){return v(t,{url:"/api/phone/register",method:"post",data:data})},_=function(t,data){return v(t,{url:"/tools/official_website",method:"post",data:data})}},321:function(t,e,n){t.exports=n.p+"img/img12.e3e0f3d.png"},322:function(t,e,n){"use strict";n(318)},323:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mobile-top"},[o("h4",[t._v("这些企业都已免费获得定制会员方案")]),t._v(" "),o("ul",[o("li",[o("img",{attrs:{src:n(298),alt:""}}),t._v("省呗\n            ")]),t._v(" "),o("li",[o("img",{attrs:{src:n(299),alt:""}}),t._v("小赢卡贷\n            ")]),t._v(" "),o("li",[o("img",{attrs:{src:n(300),alt:""}}),t._v("keep\n            ")]),t._v(" "),o("li",[o("img",{attrs:{src:n(301),alt:""}}),t._v("榕树贷款\n            ")]),t._v(" "),o("li",[o("img",{attrs:{src:n(302),alt:""}}),t._v("新橙优品\n            ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text"},[n("span",[t._v("*")]),t._v("您的姓名：")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text"},[n("span",[t._v("*")]),t._v("联系电话：")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text"},[n("span",[t._v("*")]),t._v("验证码：")])}],r=(n(98),n(57),n(44),n(320)),c=n(27),l={data:function(){return{codeText:"",num:60,name:"",name_error:"",company_name:"",company_name_error:"",phone:"",phone_error:"",code:"",code_error:"",clearFixed:!1,hidePlan:!1,showForm:!1}},mounted:function(){var t=this,e=290;window.innerWidth<641&&(e=400);var n=setTimeout((function(){var o=document.body.scrollHeight;document.addEventListener("scroll",(function(){var n=(document.documentElement.scrollTop||document.body.scrollTop)+window.innerHeight+e;n>=o&&!t.clearFixed&&(t.clearFixed=!0),n<o&&t.clearFixed&&(t.clearFixed=!1)})),clearTimeout(n)}),2e3)},watch:{name:{handler:function(){this.name&&(this.name_error="")},immediate:!0},phone:{handler:function(){this.phone&&(this.phone_error="")},immediate:!0},code:{handler:function(){this.code&&(this.code_error="")},immediate:!0}},methods:{getCode:function(){var t=this;this.phone?/^1([3-9])\d{9}$/.test(this.phone)?(c.a.loading({message:"加载中...",forbidClick:!0}),Object(r.b)(this.$axios,{phone_number:this.phone,app_name:"橡树黑卡"}).then((function(e){c.a.clear(),t.session_code=e.session_code,t.timer()}))):this.phone_error="请填写正确的联系电话":this.phone_error="请填写您的联系电话"},getPlan:function(){var t=this;this.name?(this.name_error="",this.phone?/^1([3-9])\d{9}$/.test(this.phone)?(this.phone_error="",this.code?(this.code_error="",this.session_code?(c.a.loading({message:"加载中...",forbidClick:!0}),Object(r.a)(this.$axios,{name:this.name,phone_number:this.phone,company:this.company_name,otp:this.code,session_code:this.session_code}).then((function(){c.a.clear(),Object(c.a)("提交成功，稍后会有专门商务联络，谢谢！"),t.phone="",t.company_name="",t.code="",t.name=""}))):Object(c.a)("请先获取验证码")):this.code_error="请填写验证码"):this.phone_error="请填写正确的联系电话":this.phone_error="请填写您的联系电话"):this.name_error="请填写您的姓名"},timer:function(){var t=this,time=setInterval((function(){t.num--,t.codeText="".concat(t.num,"s后重新获取"),t.num<=0&&(clearInterval(time),t.codeText="",t.num=60)}),1e3)}}},A=(n(322),n(64)),component=Object(A.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.hidePlan?t._e():o("section",{class:"free-plan "+(t.clearFixed&&"clear-fixed"),style:{zIndex:t.showForm?99:50}},[o("div",{staticClass:"container"},[o("img",{staticClass:"img",attrs:{src:n(321),alt:""}}),t._v(" "),o("div",{staticClass:"free-get-plan",on:{click:function(e){t.showForm=!0}}},[t._v("免费获取方案")]),t._v(" "),o("img",{staticClass:"img-close",attrs:{src:n(317),alt:""},on:{click:function(e){t.hidePlan=!0}}})]),t._v(" "),t.showForm?o("div",{staticClass:"form-dialog"},[o("div",{staticClass:"form-dialog-main"},[o("img",{staticClass:"form-dialog-close",attrs:{src:n(317),alt:""},on:{click:function(e){t.showForm=!1}}}),t._v(" "),o("img",{staticClass:"b-img",attrs:{src:n(319),alt:""}}),t._v(" "),o("div",{staticClass:"plan-form"},[t._m(0),t._v(" "),o("h2",[t._v("完善信息后 48小时内会有专门的商务人员与您对接")]),t._v(" "),o("div",{staticClass:"item"},[t._m(1),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",maxlength:"10",placeholder:"请输入姓名",name:"",id:"name",autocomplete:"off"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),o("div",{staticClass:"input-error"},[t._v(t._s(t.name_error))])]),t._v(" "),o("div",{staticClass:"item"},[o("div",{staticClass:"text"},[t._v("公司名称：")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.company_name,expression:"company_name"}],attrs:{type:"text",placeholder:"请输入公司名称",maxlength:"100",name:"",id:"companyName",autocomplete:"off"},domProps:{value:t.company_name},on:{input:function(e){e.target.composing||(t.company_name=e.target.value)}}}),t._v(" "),o("div",{staticClass:"input-error"},[t._v(t._s(t.company_name_error))])]),t._v(" "),o("div",{staticClass:"item"},[t._m(2),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",placeholder:"请输入联系电话",maxlength:"30",name:"",id:"phone",autocomplete:"off"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),t._v(" "),o("div",{staticClass:"input-error"},[t._v(t._s(t.phone_error))])]),t._v(" "),o("div",{staticClass:"item"},[t._m(3),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],attrs:{type:"text",placeholder:"请输入验证码",name:"",id:"code",autocomplete:"off"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),t._v(" "),o("div",{staticClass:"input-error"},[t._v(t._s(t.code_error))]),t._v(" "),t.codeText?o("div",{staticClass:"get-code code-disable"},[t._v(t._s(t.codeText))]):o("div",{staticClass:"get-code",on:{click:t.getCode}},[t._v("获取验证码")])]),t._v(" "),o("div",{staticClass:"plan-btn",on:{click:t.getPlan}},[t._v("免费获取方案")])])])]):t._e()])}),o,!1,null,"c53f303c",null);e.default=component.exports},326:function(t,e){},340:function(t,e,n){t.exports=n.p+"img/icon8.c222e88.png"},341:function(t,e,n){t.exports=n.p+"img/icon9.eae265b.png"},342:function(t,e,n){t.exports=n.p+"img/icon10.5d2ceba.png"}}]);