(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{343:function(t,e,n){},380:function(t,e,n){t.exports=n.p+"img/img4.e5234fa.png"},381:function(t,e,n){t.exports=n.p+"img/img5.a4b311f.png"},382:function(t,e,n){t.exports=n.p+"img/img1.4e3364d.png"},383:function(t,e,n){t.exports=n.p+"img/img2.af2f476.png"},384:function(t,e,n){t.exports=n.p+"img/img3.37e23f2.png"},385:function(t,e,n){t.exports=n.p+"img/img6.810a033.png"},386:function(t,e,n){t.exports=n.p+"img/img4.7f4ea2e.png"},387:function(t,e,n){t.exports=n.p+"img/img7.8b79086.png"},388:function(t,e,n){"use strict";n(343)},421:function(t,e,n){"use strict";n.r(e);var c=[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("ul",[c("li",[c("img",{attrs:{src:n(340),alt:""}}),t._v("交易数据")]),t._v(" "),c("li",[c("img",{attrs:{src:n(341),alt:""}}),t._v("权益使用数据")]),t._v(" "),c("li",[c("img",{attrs:{src:n(342),alt:""}}),t._v("用户生命周期")])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"section2-main"},[c("ul",[c("li",[t._v("· 支持快速配置会员上线")]),t._v(" "),c("li",[t._v("· 支持批量权益SKU管理")]),t._v(" "),c("li",[t._v("· 支持会员卡和权益管理")]),t._v(" "),c("li",[t._v("· 支持常见活动快速配置上线")]),t._v(" "),c("li",[t._v("· 支持支付方式灵活配置")])]),t._v(" "),c("img",{attrs:{src:n(384),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mobile-section2-main"},[e("img",{attrs:{src:n(385),alt:""}})])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"container"},[c("div",{staticClass:"common-title"},[c("div",{staticClass:"en"},[t._v("Technical")]),t._v(" "),c("div",{staticClass:"name"},[t._v("敏捷高效的技术能力")]),t._v(" "),c("div",{staticClass:"desc"},[t._v("持续迭代 快速上线")])]),t._v(" "),c("div",{staticClass:"section3-main"},[c("img",{attrs:{src:n(386),alt:""}}),t._v(" "),c("img",{staticClass:"mobile-img",attrs:{src:n(387),alt:""}}),t._v(" "),c("div",{staticClass:"right"},[c("ul",[c("li",[t._v("快速上线")]),t._v(" "),c("li",[t._v("持续迭代")])]),t._v(" "),c("div",{staticClass:"jishu"},[c("div",[t._v("3384次提交")]),t._v(" "),c("div",[t._v("306个分支")]),t._v(" "),c("div",[t._v("148个标签")])]),t._v(" "),c("div",{staticClass:"item"},[t._v("\n              开发团队经验丰富，累计开发上线50+项目，近一年上线20+项目\n            ")]),t._v(" "),c("div",{staticClass:"item"},[t._v("\n              项目采用敏捷开发流程，每周迭代发版次数达1-2次，近一年累计发版次数100+\n            ")]),t._v(" "),c("div",{staticClass:"item"},[t._v("\n              系统模块可复用性强，采用微服务模式+中台模式开发\n            ")])])])])}],header=(n(57),n(303)),footer=n(317),o=n(318),r=n(304),v=n(301),l={name:"saas",components:{oakHeader:header.default,oakFooter:footer.default,oakForm:o.default},data:function(){return{url:v.d,tab:["数字化会员产品设计","会员管理后台","敏捷高效的技术能力"],current:0,pageShow:!1,sec_list:[{title:"会员SaaS服务",url:"/saas",type:"saas"},{title:"精细化运营服务",url:"/operation",type:"operation"}],project:null}},head:function(){var t=this.$store.state.project,title="橡树黑卡--会员SAAS服务",e="橡树支持对会员设计，及全链路的各项核心数据（包括：交易数据、权益使用数据、用户生命周期等）监控，400-150-9669。",n="橡树黑卡，会员SAAS服务，会员设计，配置会员，权益SKU管理，会员卡和权益管理，活动快速配置，敏捷开发";return t&&(title="".concat(t.name,"--会员SAAS服务"),e="".concat(t.name,"支持对会员设计，及全链路的各项核心数据（包括：交易数据、权益使用数据、用户生命周期等）监控，400-150-9669。"),n="".concat(t.name,"，会员SAAS服务，会员设计，配置会员，权益SKU管理，会员卡和权益管理，活动快速配置，敏捷开发")),{title:title,meta:[{hid:"about",name:"description",content:e},{name:"keywords",content:n}]}},mounted:function(){this.pageShow=!0,this.project=this.$store.state.project,r.a.pageView("oak_saas_page")},methods:{scrollView:function(t){this.current=t,this.$refs["section".concat(t+1)].scrollIntoView({behavior:"smooth"})}}},_=(n(388),n(64)),component=Object(_.a)(l,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{directives:[{name:"show",rawName:"v-show",value:t.pageShow,expression:"pageShow"}],ref:"saas"},[c("oakHeader",{attrs:{current:1,sec_current:"nav_saas"}}),t._v(" "),c("main",[c("section",{staticClass:"saas-banner"}),t._v(" "),c("section",{staticClass:"saas-tab"},[c("div",{staticClass:"container"},t._l(t.tab,(function(e,n){return c("div",{key:e,class:{item:!0,active:t.current===n},on:{click:function(e){return t.scrollView(n)}}},[t._v("\n          "+t._s(e)+"\n        ")])})),0)]),t._v(" "),c("section",{staticClass:"mobile-second-nav"},[c("ul",t._l(t.sec_list,(function(e){return c("li",{key:e.title,class:{active:"saas"===e.type}},[c("nuxt-link",{attrs:{to:e.url}},[t._v(t._s(e.title))])],1)})),0)]),t._v(" "),c("section",{ref:"section1",staticClass:"section1"},[c("div",{staticClass:"container"},[c("div",{staticClass:"common-title"},[c("div",{staticClass:"en"},[t._v("digitization")]),t._v(" "),c("div",{staticClass:"name"},[t._v("数字化会员产品设计")]),t._v(" "),c("div",{staticClass:"desc"},[t._v("\n            "+t._s(t.project?t.project.name:"橡树")+"支持对会员设计，及全链路的各项核心数据监控\n          ")])]),t._v(" "),c("section",{staticClass:"mobile-section1-main"},[c("img",{attrs:{src:n(380),alt:""}}),t._v(" "),c("h4",[t._v("丰富的权益资源")]),t._v(" "),c("p",[t._v("\n            "+t._s(t.project?t.project.name:"橡树")+"整合内外部资源，拥有多平台数千个虚拟服务产品的权益资源。\n          ")]),t._v(" "),c("img",{attrs:{src:n(381),alt:""}}),t._v(" "),c("p",[t._v("\n            通过SasS运营赋能的方式快速、定制化输出，可广泛应用于用户生活的不同场景，发挥成本和规模交易的优势，助力客户促活，提升交易量。\n          ")])]),t._v(" "),c("div",{staticClass:"section1-main"},[c("div",{staticClass:"left"},[c("p",[t._v(t._s(t.project?t.project.name:"橡树")+"支持对会员设计")]),t._v(" "),c("p",[t._v("及全链路的各项核心数据监控")]),t._v(" "),t._m(0)]),t._v(" "),c("img",{staticClass:"img1",attrs:{src:n(382),alt:""}})])])]),t._v(" "),c("div",{staticClass:"section1-2"},[c("div",{staticClass:"container"},[t.project?t._e():c("img",{staticClass:"img2",attrs:{src:n(383),alt:""}}),t._v(" "),t.project?c("img",{staticClass:"img2",attrs:{src:t.url+"img2-"+t.project.en+".png",alt:""}}):t._e(),t._v(" "),c("div",{staticClass:"text"},[c("p",[t._v("\n            "+t._s(t.project?t.project.name:"橡树")+"整合内外部资源，拥有包括通信服务、娱乐充值、电商购物卡、网络工具、美食卡券、休闲生活、交通出行、车主服务等多平台数千个虚拟服务产品的权益资源。\n          ")]),t._v(" "),c("p"),t._v(" "),c("p",[t._v("\n            通过SasS运营赋能的方式快速、定制化输出，可广泛应用于用户生活的不同场景，发挥成本和规模交易的优势，助力客户促活，提升交易量。\n          ")])])])]),t._v(" "),c("section",{ref:"section2",staticClass:"section2"},[c("div",{staticClass:"container"},[c("div",{staticClass:"common-title"},[c("div",{staticClass:"en"},[t._v("backstage")]),t._v(" "),c("div",{staticClass:"name"},[t._v("会员管理后台")]),t._v(" "),c("div",{staticClass:"desc"},[t._v("\n            "+t._s(t.project?t.project.name:"橡树")+"支持对会员设计，及全链路的各项核心数据监控\n          ")])]),t._v(" "),t._m(1),t._v(" "),t._m(2)])]),t._v(" "),c("section",{ref:"section3",staticClass:"section3"},[t._m(3)]),t._v(" "),c("oakForm")],1),t._v(" "),c("oakFooter",{attrs:{type:"saas"}})],1)}),c,!1,null,"4678e0c0",null);e.default=component.exports}}]);