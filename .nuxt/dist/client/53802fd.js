(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{278:function(t,n,e){},280:function(t,n,e){"use strict";e.r(n);var c={props:["current","sec_current"],data:function(){return{nav:[{name:"首页",type:"index",url:"/"},{name:"产品服务",type:"product",url:"",second:[{name:"会员SaaS服务",type:"nav_saas",url:"/saas"},{name:"精细化运营服务",type:"nav_service",url:"/operation"}]},{name:"关于我们",type:"about",url:"",second:[{name:"公司介绍",type:"nav_about",url:"/about"},{name:"联系我们",type:"nav_contact",url:"/contact"}]},{name:"加入我们",type:"join",url:"/join"}]}}},r=(e(284),e(46)),component=Object(r.a)(c,(function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("header",{staticClass:"header",attrs:{id:"header"}},[c("div",{staticClass:"container"},[c("h1",{staticClass:"logo"},[c("nuxt-link",{attrs:{to:"/"}},[c("img",{attrs:{src:e(282),alt:""}})])],1),t._v(" "),c("nav",{staticClass:"nav"},[c("ul",t._l(t.nav,(function(n,e){return c("li",{key:n.name,class:{item:!0,active:t.current===e}},[c("nuxt-link",{class:{down:n.second},attrs:{to:n.url}},[t._v(t._s(n.name))]),t._v(" "),n.second?c("div",{class:"sec_nav "+n.type},[c("div",{staticClass:"sec_nav-main"},t._l(n.second,(function(i){return c("div",{key:i.name,class:[{item:!0,sec_active:t.sec_current===i.type},""+i.type]},[c("nuxt-link",{attrs:{to:i.url}},[c("span"),t._v(t._s(i.name))])],1)})),0)]):t._e()],1)})),0)]),t._v(" "),c("div",{staticClass:"heaedr-r"},[c("div",{staticClass:"phone"},[t._v("400-150-9669")]),t._v(" "),c("div",{staticClass:"mobile-nav"},[c("img",{attrs:{src:e(283),alt:""}}),t._v(" "),c("ul",t._l(t.nav,(function(n,e){return c("li",{key:n.name,class:{item:!0,active:t.current===e}},[c("nuxt-link",{class:{down:n.second},attrs:{to:n.url}},[t._v(t._s(n.name))]),t._v(" "),n.second?c("div",{class:"sec_nav "+n.type},[c("div",{staticClass:"sec_nav-main"},t._l(n.second,(function(i){return c("div",{key:i.name,class:[{item:!0,sec_active:t.sec_current===i.type},""+i.type]},[c("nuxt-link",{attrs:{to:i.url}},[c("span"),t._v(t._s(i.name))])],1)})),0)]):t._e()],1)})),0)])])])])}),[],!1,null,"ab97de6c",null);n.default=component.exports;installComponents(component,{Header:e(280).default})},282:function(t,n,e){t.exports=e.p+"img/logo.51d04d5.png"},283:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAACVBMVEUAAAA0NDQzMzNa9oIkAAAAAnRSTlMAf7YpoZUAAAAdSURBVBjTYyAGsIaCQQAD1yowWABnIKQwwPAwGQB4ZCnXYu1vKgAAAABJRU5ErkJggg=="},284:function(t,n,e){"use strict";e(278)}}]);