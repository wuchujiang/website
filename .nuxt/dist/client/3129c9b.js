(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{262:function(e,t,o){e.exports=o.p+"img/close.ce01f75.png"},263:function(e,t,o){},264:function(e,t,o){e.exports=o.p+"img/img11.8918ed7.png"},265:function(e,t,o){e.exports=o.p+"img/img12.da9e37e.png"},266:function(e,t,o){"use strict";o(263)},267:function(e,t,o){"use strict";o.r(t);o(72),o(43),o(26);var n={data:function(){return{name:"",name_error:"",company_name:"",company_name_error:"",phone:"",phone_error:"",code:"",code_error:"",clearFixed:!1,hidePlan:!1,showForm:!1}},mounted:function(){var e=this,t=setTimeout((function(){var o=document.body.scrollHeight;document.addEventListener("scroll",(function(){var t=(document.documentElement.scrollTop||document.body.scrollTop)+window.innerHeight+290;t>=o&&!e.clearFixed&&(e.clearFixed=!0),t<o&&e.clearFixed&&(e.clearFixed=!1)})),clearTimeout(t)}),2e3)},methods:{getCode:function(){},getPlan:function(){this.name?(this.name_error="",this.phone?/^1([3-9])\d{9}$/.test(this.phone)?(this.phone_error="",this.code?(this.code_error="",this.showDialog=!0):this.code_error="请填写验证码"):this.phone_error="请填写正确的联系电话":this.phone_error="请填写您的联系电话"):this.name_error="请填写您的姓名"}}},r=(o(266),o(42)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.hidePlan?e._e():n("section",{class:"free-plan "+(e.clearFixed&&"clear-fixed")},[n("div",{staticClass:"container"},[n("img",{staticClass:"img",attrs:{src:o(265),alt:""}}),e._v(" "),n("div",{staticClass:"free-get-plan",on:{click:function(t){e.showForm=!0}}},[e._v("免费获取方案")]),e._v(" "),n("img",{staticClass:"img-close",attrs:{src:o(262),alt:""},on:{click:function(t){e.hidePlan=!0}}})]),e._v(" "),e.showForm?n("div",{staticClass:"form-dialog"},[n("div",{staticClass:"form-dialog-main"},[n("img",{staticClass:"form-dialog-close",attrs:{src:o(262),alt:""},on:{click:function(t){e.showForm=!1}}}),e._v(" "),n("img",{staticClass:"b-img",attrs:{src:o(264),alt:""}}),e._v(" "),n("div",{staticClass:"plan-form"},[n("h2",[e._v("完善信息后 48小时内会有专门的商务人员与您对接")]),e._v(" "),n("div",{staticClass:"item"},[e._m(0),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",maxlength:"10",placeholder:"请输入姓名",name:"",id:"name",autocomplete:"off"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),n("div",{staticClass:"input-error"},[e._v(e._s(e.name_error))])]),e._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"text"},[e._v("公司名称：")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.company_name,expression:"company_name"}],attrs:{type:"text",placeholder:"请输入公司名称",maxlength:"100",name:"",id:"companyName",autocomplete:"off"},domProps:{value:e.company_name},on:{input:function(t){t.target.composing||(e.company_name=t.target.value)}}}),e._v(" "),n("div",{staticClass:"input-error"},[e._v(e._s(e.company_name_error))])]),e._v(" "),n("div",{staticClass:"item"},[e._m(1),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",placeholder:"请输入联系电话",maxlength:"30",name:"",id:"phone",autocomplete:"off"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}}),e._v(" "),n("div",{staticClass:"input-error"},[e._v(e._s(e.phone_error))])]),e._v(" "),n("div",{staticClass:"item"},[e._m(2),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{type:"text",placeholder:"请输入验证码",name:"",id:"code",autocomplete:"off"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}}),e._v(" "),n("div",{staticClass:"input-error"},[e._v(e._s(e.code_error))]),e._v(" "),n("div",{staticClass:"get-code",on:{click:e.getCode}},[e._v("获取验证码")])]),e._v(" "),n("div",{staticClass:"plan-btn",on:{click:e.getPlan}},[e._v("免费获取方案")])])])]):e._e()])}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"text"},[o("span",[e._v("*")]),e._v("您的姓名：")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"text"},[o("span",[e._v("*")]),e._v("联系电话：")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"text"},[o("span",[e._v("*")]),e._v("验证码：")])}],!1,null,"2b481c4c",null);t.default=component.exports}}]);