(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{299:function(t,e,n){},300:function(t,e,n){"use strict";n.r(e);var o=n(298),r={props:["current","sec_current"],data:function(){return{showNav:!1,project:null,url:o.d,nav:[{name:"首页",type:"index",url:"/"},{name:"产品服务",type:"product",url:"",second:[{name:"会员SaaS服务",type:"nav_saas",url:"/saas"},{name:"精细化运营服务",type:"nav_service",url:"/operation"}]},{name:"关于我们",type:"about",url:"",second:[{name:"公司介绍",type:"nav_about",url:"/about"},{name:"联系我们",type:"nav_contact",url:"/contact"}]},{name:"加入我们",type:"join",url:"/join"}]}},mounted:function(){this.project=window.local,console.log(this.project)}},c=(n(304),n(64)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header",attrs:{id:"header"}},[o("div",{staticClass:"container"},[o("h1",{staticClass:"logo"},[o("nuxt-link",{attrs:{to:"/"}},[o("img",{attrs:{src:t.project?""+t.url+t.project.en+"_logo.png":t.url+"logo.png",alt:""}})])],1),t._v(" "),o("nav",{staticClass:"nav"},[o("ul",t._l(t.nav,(function(e,n){return o("li",{key:e.name,class:{item:!0,active:t.current===n}},[o("nuxt-link",{class:{down:e.second},attrs:{to:e.url}},[t._v(t._s(e.name))]),t._v(" "),e.second?o("div",{class:"sec_nav "+e.type},[o("div",{staticClass:"sec_nav-main"},t._l(e.second,(function(i){return o("div",{key:i.name,class:[{item:!0,sec_active:t.sec_current===i.type},""+i.type]},[o("nuxt-link",{attrs:{to:i.url}},[o("span"),t._v(t._s(i.name))])],1)})),0)]):t._e()],1)})),0)]),t._v(" "),o("div",{staticClass:"heaedr-r"},[o("div",{staticClass:"phone"},[t._v("400-150-9669")]),t._v(" "),o("div",{staticClass:"mobile-nav"},[o("img",{attrs:{src:n(302),alt:""},on:{click:function(e){t.showNav=!t.showNav}}}),t._v(" "),t.showNav?o("div",{staticClass:"nav-shadow",on:{click:function(e){t.showNav=!1}}}):t._e(),t._v(" "),t.showNav?o("ul",[o("img",{staticClass:"close2",attrs:{src:n(303),alt:""},on:{click:function(e){t.showNav=!1}}}),t._v(" "),t._l(t.nav,(function(e,n){return o("li",{key:e.name,class:{item:!0,active:t.current===n&&!e.second}},[o("nuxt-link",{class:{down:e.second},attrs:{to:e.url}},[t._v(t._s(e.name))]),t._v(" "),e.second?o("div",{class:"sec_nav "+e.type},[o("div",{staticClass:"sec_nav-main"},t._l(e.second,(function(i){return o("div",{key:i.name,class:[{item:!0,sec_active:t.sec_current===i.type},""+i.type]},[o("nuxt-link",{attrs:{to:i.url}},[o("span"),t._v(t._s(i.name))])],1)})),0)]):t._e()],1)}))],2):t._e()])])])])}),[],!1,null,"62d64acd",null);e.default=component.exports;installComponents(component,{Header:n(300).default})},302:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAACVBMVEUAAAA0NDQzMzNa9oIkAAAAAnRSTlMAf7YpoZUAAAAdSURBVBjTYyAGsIaCQQAD1yowWABnIKQwwPAwGQB4ZCnXYu1vKgAAAABJRU5ErkJggg=="},303:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABVElEQVRYR+2XMa7CMAxA41bcqOkVmJn+jpDgn+iDhNiZ/swVmt4ItUapWglQW9tJkSwU1jjxy0tsUjDKf6CczyTA2BNKBpPBWAOx87/nDpZluWnbdu2c+wUADDGDiGCt/cuy7FZV1T9nDZZBD9c0zdUYswKAi3NuJ4Xs4c6IuDXG3PM8/+FAsgCLojgi4n7YsRTyDa5bBgBOdV0fKIsswIkELJMxc7uNUDsYxkMShcx552ED+omShJLYOUkiQC7kUnCiI37e5RyAj7PWDtU6FATrvo6ZFBuk7mRv2beSaLhgg3OQzxak7WhRgxTkEnDRBqeKpm/Ewffu5RS4fXAsbqxY1BzxVCWrKBLVbYbThDkx3Ksl6oOSxJLYRf7qQhKGzAl6LMQkipnL7oPqH6zqn/xeteqPJm5L+EScqM18AoBaMwFShqjxZJAyRI0ng5Qhaly9wQeVfKo46617JwAAAABJRU5ErkJggg=="},304:function(t,e,n){"use strict";n(299)},305:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABWCAMAAABiiJHFAAAAh1BMVEUAAABmZmZsbGxmZmZ1dXVoaGhnZ2d8fHyCgoJmZmZmZmZpaWlnZ2dnZ2dmZmZmZmZpaWlnZ2dnZ2dnZ2dnZ2dubm5mZmZnZ2dpaWltbW1nZ2dnZ2dnZ2doaGhoaGhnZ2dnZ2dnZ2dnZ2dpaWltbW1mZmZnZ2dmZmZoaGhnZ2dmZmZnZ2dmZma74kPmAAAALHRSTlMA1RX7DFvGBgPw6CD2tYzeOKFqQTIPcFYnGxGGYk9Jy7+akzwK0rqoLXqtncbZehkAAAI1SURBVFjD7dXJjqMwFIXh65jEZoYwJIHMc6rO+z9fqySIpbKbYJJFS82/YvUJrsw1jY2NjY2N/SeJws9zvxIfJJ1tytEURPln6GUIgMf7WxTd9uzHD/230ckX4N4WBTUVi9QDwtV7E42AePrrq+U0Bg5yuFowuKVCFbyOwaqhqh8gLMhYESLIh6knIJL0l2QNJEPUFfiaOlpwrOxV4WFOnZVwHWv2ipRedMBFWqoL7AS9SO6xsVNlwJfNY37W5tP+ZXfuCit2jbRVwSa/VsTMo6ZvzG1UwXn7RmfWuErl0+dpCXC2YLc4qK2gXKW2HbGwYL+Qke7qKmVg/VUJV5Lu6ipJF/3P7h03It1VqirFqTc7x5p016TSFGVvNkJGBteg0gnH3myIJRncna7SEvvebIyCDK7p7J/h9WbBScvZ4We+WgF6sx4cTZ3xOTO4Au6w2arzOjG4Pma92SMyg0omN8HB4txODarRXeBhcTl+66rZPVhclAU8qalm14Og3sU4aarRzTGj/k0RUZN4qsrdUVtttW8duO0b+V6jKnfHZPvowiGLHp0bRKqd9CCbhLp5DdlfZWq6Ib1KhijJLhmjphfVYJIsqwKsqbMNgoqsW4Jn1NHWRU4D2oLPO/YGV19j6yIVZEwegYwGtvJw2RrHyuD6NDhxBWbaWyUzIHTone4X4FInUpk1A9id3i2JAXjXNCrLKN17AOKMPlG1ueIZK1f0sUTlJ5tN4leCxsbGxsbG/q3+AJdlL7UiHjrxAAAAAElFTkSuQmCC"},306:function(t,e,n){},307:function(t,e,n){t.exports=n.p+"img/kh7.2b8b3b8.png"},308:function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return f}));n(316),n(47),n(28);var o=n(317),r=n.n(o),c=n(319),l=n.n(c),v=n(320),m=n(298),d=n(27);var _=function(t,e){var n=t.create({timeout:3e4,headers:{Accept:"application/x-www-form-urlencoded","X-Ca-Stage":"RELEASE","X-Ca-Key":m.b,"X-Ca-Signature-Headers":"X-Ca-Key,X-Ca-Stage"}});return n.interceptors.request.use((function(t){t.baseURL=m.a;var e=t.data||{};"post"!==t.method&&"put"!==t.method||(t.headers["Content-Type"]="application/x-www-form-urlencoded",t.data=r.a.stringify(t.data||{}));var n=function(option,t,e,n){var o="X-Ca-Key:"+m.b+"\nX-Ca-Stage:RELEASE\n",r="",c=Object.keys(option.data).sort();for(var l in c)option.data[c[l]]||0===option.data[c[l]]?r+=c[l]+"="+option.data[c[l]]+"&":r+=c[l]+"&";var d="";d=r.length?option.url+"?"+r.substring(0,r.length-1):option.url;var _=t.toUpperCase()+"\n"+e+"\n\n"+(n||"")+"\n\n"+o+d,h=v.CryptoJS.HmacSHA256(_,m.c);return{hashInBase64:v.CryptoJS.enc.Base64.stringify(h)}}({url:t.url,data:l()(Object.assign(e,t.params||{}),(function(t){return null!=t}))},t.method.toUpperCase(),t.headers.Accept,t.headers["Content-Type"]).hashInBase64;return t.headers["X-Ca-Signature"]=n,t.headers.Authorization="",t})),n(e).then((function(t){var e;return!1===(null===(e=t.data)||void 0===e?void 0:e.ok)?(d.a.clear(),Object(d.a)(t.data.msg||"网络繁忙"),Promise.reject(t.data)):t.data})).catch((function(t){var e;return null!=t&&null!==(e=t.response)&&void 0!==e&&e.status&&t.response.status,Promise.reject(t)}))},h=function(t,data){return _(t,{url:"/api/phone/register",method:"post",data:data})},f=function(t,data){return _(t,{url:"/tools/official_website",method:"post",data:data})}},313:function(t,e,n){"use strict";n(306)},315:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mobile-top"},[o("h4",[t._v("这些企业都已免费获得定制会员方案")]),t._v(" "),o("ul",[o("li",[o("img",{attrs:{src:n(309),alt:""}}),t._v("省呗")]),t._v(" "),o("li",[o("img",{attrs:{src:n(312),alt:""}}),t._v("我来数科")]),t._v(" "),o("li",[o("img",{attrs:{src:n(310),alt:""}}),t._v("keep")]),t._v(" "),o("li",[o("img",{attrs:{src:n(311),alt:""}}),t._v("榕树贷款")]),t._v(" "),o("li",[o("img",{attrs:{src:n(307),alt:""}}),t._v("新橙优品")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text"},[n("span",[t._v("*")]),t._v("您的姓名：")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text"},[n("span",[t._v("*")]),t._v("公司名称：")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text"},[n("span",[t._v("*")]),t._v("联系电话：")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text"},[n("span",[t._v("*")]),t._v("验证码：")])}],r=(n(100),n(59),n(44),n(308)),c=n(27),l=n(301),v=n(298),m={data:function(){return{codeText:"",num:60,name:"",name_error:"",company_name:"",company_name_error:"",phone:"",phone_error:"",code:"",code_error:"",clearFixed:!1,hidePlan:!1,showForm:!1,project:null,url:v.d}},mounted:function(){var t=this;this.project=window.local;var e=290;window.innerWidth<641&&(e=400);var n=setTimeout((function(){var o=document.body.scrollHeight;document.addEventListener("scroll",(function(){var n=(document.documentElement.scrollTop||document.body.scrollTop)+window.innerHeight+e;n>=o&&!t.clearFixed&&(t.clearFixed=!0),n<o&&t.clearFixed&&(t.clearFixed=!1)})),clearTimeout(n)}),2e3)},watch:{name:{handler:function(){this.name&&(this.name_error="")},immediate:!0},phone:{handler:function(){this.phone&&(this.phone_error="")},immediate:!0},code:{handler:function(){this.code&&(this.code_error="")},immediate:!0}},methods:{showFormFn:function(){this.showForm=!0,l.a.track("bottom_click")},getCode:function(){var t=this;this.phone?/^1([3-9])\d{9}$/.test(this.phone)?(c.a.loading({message:"加载中...",forbidClick:!0}),Object(r.b)(this.$axios,{phone_number:this.phone,app_name:"橡树黑卡"}).then((function(e){c.a.clear(),t.session_code=e.session_code,t.timer()}))):this.phone_error="请填写正确的联系电话":this.phone_error="请填写您的联系电话"},getPlan:function(){var t=this;this.name?(this.name_error="",this.company_name?(this.company_name_error="",this.phone?/^1([3-9])\d{9}$/.test(this.phone)?(this.phone_error="",this.code?(this.code_error="",this.session_code?(c.a.loading({message:"加载中...",forbidClick:!0}),Object(r.a)(this.$axios,{name:this.name,phone_number:this.phone,company:this.company_name,otp:this.code,session_code:this.session_code}).then((function(){c.a.clear(),Object(c.a)("提交成功，稍后会有专门商务联络，谢谢！"),t.phone="",t.company_name="",t.code="",t.name="",l.a.track("pop_click")}))):Object(c.a)("请先获取验证码")):this.code_error="请填写验证码"):this.phone_error="请填写正确的联系电话":this.phone_error="请填写您的联系电话"):this.company_name_error="请填写公司名称"):this.name_error="请填写您的姓名"},timer:function(){var t=this,time=setInterval((function(){t.num--,t.codeText="".concat(t.num,"s后重新获取"),t.num<=0&&(clearInterval(time),t.codeText="",t.num=60)}),1e3)}}},d=(n(313),n(64)),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.hidePlan?t._e():o("section",{class:"free-plan "+(t.clearFixed&&"clear-fixed"),style:{zIndex:t.showForm?99:50}},[o("div",{staticClass:"container"},[o("img",{staticClass:"img",attrs:{src:t.project?""+t.url+t.project.en+"_img12.png":t.url+"img12.png",alt:""}}),t._v(" "),o("div",{staticClass:"free-get-plan",on:{click:t.showFormFn}},[t._v("免费获取方案")]),t._v(" "),o("img",{staticClass:"img-close",attrs:{src:n(305),alt:""},on:{click:function(e){t.hidePlan=!0}}})]),t._v(" "),t.showForm?o("div",{staticClass:"form-dialog"},[o("div",{staticClass:"form-dialog-main"},[o("img",{staticClass:"form-dialog-close",attrs:{src:n(305),alt:""},on:{click:function(e){t.showForm=!1}}}),t._v(" "),o("img",{staticClass:"b-img",attrs:{src:t.project?""+t.url+t.project.en+"_img11.png":t.url+"img11.png",alt:""}}),t._v(" "),o("div",{staticClass:"plan-form"},[t._m(0),t._v(" "),o("h2",[t._v("完善信息后 48小时内会有专门的商务人员与您对接")]),t._v(" "),o("div",{staticClass:"item"},[t._m(1),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",maxlength:"10",placeholder:"请输入姓名",name:"",id:"name",autocomplete:"off"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),o("div",{staticClass:"input-error"},[t._v(t._s(t.name_error))])]),t._v(" "),o("div",{staticClass:"item"},[t._m(2),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.company_name,expression:"company_name"}],attrs:{type:"text",placeholder:"请输入公司名称",maxlength:"100",name:"",id:"companyName",autocomplete:"off"},domProps:{value:t.company_name},on:{input:function(e){e.target.composing||(t.company_name=e.target.value)}}}),t._v(" "),o("div",{staticClass:"input-error"},[t._v(t._s(t.company_name_error))])]),t._v(" "),o("div",{staticClass:"item"},[t._m(3),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",placeholder:"请输入联系电话",maxlength:"30",name:"",id:"phone",autocomplete:"off"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),t._v(" "),o("div",{staticClass:"input-error"},[t._v(t._s(t.phone_error))])]),t._v(" "),o("div",{staticClass:"item"},[t._m(4),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],attrs:{type:"text",placeholder:"请输入验证码",name:"",id:"code",autocomplete:"off"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),t._v(" "),o("div",{staticClass:"input-error"},[t._v(t._s(t.code_error))]),t._v(" "),t.codeText?o("div",{staticClass:"get-code code-disable"},[t._v(t._s(t.codeText))]):o("div",{staticClass:"get-code",on:{click:t.getCode}},[t._v("\n            获取验证码\n          ")])]),t._v(" "),o("div",{staticClass:"plan-btn",on:{click:t.getPlan}},[t._v("免费获取方案")])])])]):t._e()])}),o,!1,null,"63c1b502",null);e.default=component.exports},318:function(t,e){},333:function(t,e,n){},343:function(t,e,n){t.exports=n.p+"img/img10.8a02310.png"},344:function(t,e,n){t.exports=n.p+"img/img13.e325be6.png"},345:function(t,e,n){t.exports=n.p+"img/img14.169348f.png"},365:function(t,e,n){"use strict";n(333)},414:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"common-title"},[n("div",{staticClass:"en"},[t._v("about")]),t._v(" "),n("div",{staticClass:"name"},[t._v("关于我们")]),t._v(" "),n("div",{staticClass:"desc"},[t._v("助力企业构建会员体系实现活跃与创收")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"common-title"},[n("div",{staticClass:"en"},[t._v("history")]),t._v(" "),n("div",{staticClass:"name"},[t._v("公司历程")]),t._v(" "),n("div",{staticClass:"desc"},[t._v("\n            针对性地输出客户权益套餐，满足用户在不同生活场景下的需求，高频使用产品，增加用户黏性，提高用户留存率，进而提升LTV。\n          ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("div",{staticClass:"date"},[n("span",[t._v("2019.09")]),t._v(" "),n("span",[t._v("【全面展开企业付费会员合作】")])]),t._v(" "),n("p",[t._v("\n              面向银行、商业地产、金融科技、智慧屏等行业机构提供专业方案定制和跨场景权益务，助力企业业务拉新与促活\n            ")]),t._v(" "),n("b")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("div",{staticClass:"date"},[n("span",[t._v("2020.09")]),t._v(" "),n("span",[t._v("【华润通享卡】")])]),t._v(" "),n("p",[t._v("\n              华润集团以”引领商业进步，共创美好生活”为使命。华润通为其线上美好生活的载体，通卡打造行业标杆\n            ")]),t._v(" "),n("b")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("div",{staticClass:"date"},[n("span",[t._v("2018.08")]),t._v(" "),n("span",[t._v("【公司成立】")])]),t._v(" "),n("p",[t._v("\n              来自腾讯、携程、平安、乐信的初始团队成员，拥有百万级付费会员平台的操盘经验\n            ")]),t._v(" "),n("b")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("div",{staticClass:"date"},[n("span",[t._v("2019.03")]),t._v(" "),n("span",[t._v("【腾讯理财通、滴滴出行】")])]),t._v(" "),n("p",[t._v("与腾讯理财通、滴滴出行等达成会员权益输出合作，夯实服务能力")]),t._v(" "),n("b")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mobile-course-main"},[e("img",{attrs:{src:n(345),alt:""}})])}],header=(n(59),n(300)),footer=n(314),r=n(315),c=n(301),l=n(298),v={name:"about",components:{oakHeader:header.default,oakFooter:footer.default,oakForm:r.default},data:function(){return{url:l.d,pageShow:!1,sec_list:[{title:"公司介绍",url:"/about",type:"about"},{title:"联系我们",url:"/contact",type:"contact"}],project:null}},head:function(){var t=window.local,title="橡树黑卡--公司介绍",e="橡树黑卡成立于2018年，是国内领先的付费会员制权益SaaS服务平台，是国家高新技术企业、“双软企业” 。客户包含华润集团，微众银行，工商银行，浦发银行，招商银行，腾讯理财通、微信、滴滴出行、龙腾出行，创维，TCL等知名企业，400-150-9669。";return t&&(title="".concat(t.name,"--公司介绍"),e="".concat(t.name,"成立于2018年，是国内领先的付费会员制权益SaaS服务平台，是国家高新技术企业、“双软企业” 。客户包含华润集团，微众银行，工商银行，浦发银行，招商银行，腾讯理财通、微信、滴滴出行、龙腾出行，创维，TCL等知名企业，400-150-9669。")),{title:title,meta:[{hid:"about",name:"description",content:e},{name:"keywords",content:"付费会员，会员权益，高新技术企业，提升活跃，带动营收，增加收入，客户关怀，用户画像，延长用户生命周期"}]}},mounted:function(){this.pageShow=!0,this.project=window.local,c.a.pageView("oak_about_page")}},m=(n(365),n(64)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"show",rawName:"v-show",value:t.pageShow,expression:"pageShow"}],ref:"about"},[o("oakHeader",{attrs:{current:2,sec_current:"nav_about"}}),t._v(" "),o("main",[o("section",{staticClass:"about-banner",style:{background:t.project?"url("+t.url+"about-banner-"+t.project.en+".png) center center / auto 100% no-repeat":"url("+t.url+"about-banner.png) center center / auto 100% no-repeat"}}),t._v(" "),o("section",{staticClass:"mobile-second-nav"},[o("ul",t._l(t.sec_list,(function(e){return o("li",{key:e.title,class:{active:"about"===e.type}},[o("nuxt-link",{attrs:{to:e.url}},[t._v(t._s(e.title))])],1)})),0)]),t._v(" "),o("section",{staticClass:"about-section1"},[o("div",{staticClass:"container"},[t._m(0),t._v(" "),o("div",{staticClass:"about-text"},[o("p",[t._v(t._s(t.project?t.project.name:"橡树黑卡")+"成立于2018年，")]),t._v(" "),o("p",[t._v("\n            是国内领先的付费会员制权益SaaS服务平台，是国家高新技术企业、“双软企业”\n            。\n          ")]),t._v(" "),o("p"),t._v(" "),o("p",[t._v("\n            合作伙伴包括华润集团、微众银行、工商银行、浦发银行、招商银行、腾讯理财通、微信、滴滴出行、龙腾出行，创维，TCL等知名企业。\n          ")]),t._v(" "),o("p"),t._v(" "),o("p",[t._v("\n            创始团队来自于腾讯、平安、乐信等，在会员服务领域拥有丰富的权益供应链整合、会员体系搭建运营成功经验，致力于打造领先的权益服务平台。\n          ")]),t._v(" "),o("p"),t._v(" "),o("p",[t._v("\n            目前公司业务正处于高速发展中，求才若渴，有广阔的成长和发展空间，我们迫切的需要优秀的你来加入，与公司共同成长进步！\n          ")]),t._v(" "),o("img",{attrs:{src:n(343),alt:""}}),t._v(" "),o("img",{staticClass:"mobile-img",attrs:{src:n(344),alt:""}})])])]),t._v(" "),o("section",{staticClass:"course"},[t._m(1),t._v(" "),o("div",{staticClass:"course-main container"},[o("div",{staticClass:"list"},[o("div",{staticClass:"item"},[o("div",{staticClass:"date"},[o("span",[t._v("2018.11")]),t._v(" "),o("span",[t._v("【"+t._s(t.project?t.project.name:"橡树黑卡")+"小程序】")])]),t._v(" "),o("p",[t._v("\n              与龙腾出行、海南航空、希尔顿、洲际、凯悦、雅高、滴滴出行、易安保险等企业达成合作，整合权益资源，搭建会员系统，奠基ToB能力\n            ")]),t._v(" "),o("b")]),t._v(" "),t._m(2),t._v(" "),t._m(3)]),t._v(" "),o("div",{staticClass:"list"},[t._m(4),t._v(" "),t._m(5),t._v(" "),o("div",{staticClass:"item"},[o("div",{staticClass:"date"},[o("span",[t._v("2020.06")]),t._v(" "),o("span",[t._v("【全新推出"+t._s(t.project?t.project.name:"橡树")+"生活权益平台】")])]),t._v(" "),o("p",[t._v("\n              "+t._s(t.project?t.project.name:"橡树")+"生活权益平台，涵盖娱乐视听类、生活服务类、旅游出行、车主福利、阅读学习、医护健康等300余项权益服务\n            ")]),t._v(" "),o("b")])])]),t._v(" "),t._m(6)]),t._v(" "),o("oakForm")],1),t._v(" "),o("oakFooter",{attrs:{type:"about"}})],1)}),o,!1,null,"67a1619d",null);e.default=component.exports}}]);