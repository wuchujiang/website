(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{299:function(n,t,e){},300:function(n,t,e){"use strict";e.r(t);var o=e(298),c={props:["current","sec_current"],data:function(){return{showNav:!1,project:null,url:o.d,nav:[{name:"首页",type:"index",url:"/"},{name:"产品服务",type:"product",url:"",second:[{name:"会员SaaS服务",type:"nav_saas",url:"/saas"},{name:"精细化运营服务",type:"nav_service",url:"/operation"}]},{name:"关于我们",type:"about",url:"",second:[{name:"公司介绍",type:"nav_about",url:"/about"},{name:"联系我们",type:"nav_contact",url:"/contact"}]},{name:"加入我们",type:"join",url:"/join"}]}},mounted:function(){this.project=window.local,console.log(this.project)}},r=(e(304),e(64)),component=Object(r.a)(c,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("header",{staticClass:"header",attrs:{id:"header"}},[o("div",{staticClass:"container"},[o("h1",{staticClass:"logo"},[o("nuxt-link",{attrs:{to:"/"}},[o("img",{attrs:{src:n.project?""+n.url+n.project.en+"_logo.png":n.url+"logo.png",alt:""}})])],1),n._v(" "),o("nav",{staticClass:"nav"},[o("ul",n._l(n.nav,(function(t,e){return o("li",{key:t.name,class:{item:!0,active:n.current===e}},[o("nuxt-link",{class:{down:t.second},attrs:{to:t.url}},[n._v(n._s(t.name))]),n._v(" "),t.second?o("div",{class:"sec_nav "+t.type},[o("div",{staticClass:"sec_nav-main"},n._l(t.second,(function(i){return o("div",{key:i.name,class:[{item:!0,sec_active:n.sec_current===i.type},""+i.type]},[o("nuxt-link",{attrs:{to:i.url}},[o("span"),n._v(n._s(i.name))])],1)})),0)]):n._e()],1)})),0)]),n._v(" "),o("div",{staticClass:"heaedr-r"},[o("div",{staticClass:"phone"},[n._v("400-150-9669")]),n._v(" "),o("div",{staticClass:"mobile-nav"},[o("img",{attrs:{src:e(302),alt:""},on:{click:function(t){n.showNav=!n.showNav}}}),n._v(" "),n.showNav?o("div",{staticClass:"nav-shadow",on:{click:function(t){n.showNav=!1}}}):n._e(),n._v(" "),n.showNav?o("ul",[o("img",{staticClass:"close2",attrs:{src:e(303),alt:""},on:{click:function(t){n.showNav=!1}}}),n._v(" "),n._l(n.nav,(function(t,e){return o("li",{key:t.name,class:{item:!0,active:n.current===e&&!t.second}},[o("nuxt-link",{class:{down:t.second},attrs:{to:t.url}},[n._v(n._s(t.name))]),n._v(" "),t.second?o("div",{class:"sec_nav "+t.type},[o("div",{staticClass:"sec_nav-main"},n._l(t.second,(function(i){return o("div",{key:i.name,class:[{item:!0,sec_active:n.sec_current===i.type},""+i.type]},[o("nuxt-link",{attrs:{to:i.url}},[o("span"),n._v(n._s(i.name))])],1)})),0)]):n._e()],1)}))],2):n._e()])])])])}),[],!1,null,"62d64acd",null);t.default=component.exports;installComponents(component,{Header:e(300).default})},302:function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAACVBMVEUAAAA0NDQzMzNa9oIkAAAAAnRSTlMAf7YpoZUAAAAdSURBVBjTYyAGsIaCQQAD1yowWABnIKQwwPAwGQB4ZCnXYu1vKgAAAABJRU5ErkJggg=="},303:function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABVElEQVRYR+2XMa7CMAxA41bcqOkVmJn+jpDgn+iDhNiZ/swVmt4ItUapWglQW9tJkSwU1jjxy0tsUjDKf6CczyTA2BNKBpPBWAOx87/nDpZluWnbdu2c+wUADDGDiGCt/cuy7FZV1T9nDZZBD9c0zdUYswKAi3NuJ4Xs4c6IuDXG3PM8/+FAsgCLojgi4n7YsRTyDa5bBgBOdV0fKIsswIkELJMxc7uNUDsYxkMShcx552ED+omShJLYOUkiQC7kUnCiI37e5RyAj7PWDtU6FATrvo6ZFBuk7mRv2beSaLhgg3OQzxak7WhRgxTkEnDRBqeKpm/Ewffu5RS4fXAsbqxY1BzxVCWrKBLVbYbThDkx3Ksl6oOSxJLYRf7qQhKGzAl6LMQkipnL7oPqH6zqn/xeteqPJm5L+EScqM18AoBaMwFShqjxZJAyRI0ng5Qhaly9wQeVfKo46617JwAAAABJRU5ErkJggg=="},304:function(n,t,e){"use strict";e(299)},335:function(n,t,e){},367:function(n,t,e){"use strict";e(335)},416:function(n,t,e){"use strict";e.r(t);e(59);var header=e(300),footer=e(314),o=e(301),c=e(298),r={name:"join",components:{oakHeader:header.default,oakFooter:footer.default},data:function(){return{url:c.d,pageShow:!1,project:null,current:0,list:[{name:"  高级后端开发工程师",address:"深圳",desc:["参与公司核心业务系统的开发；","参与项目的需求分析，系统设计和研发工作;","参与项目日常运维，数据分析;","参与平台整体架构优化，提高系统扩展能力以及保证系统安全、可靠。","研究新的技术，并应用到业务之中；"],qualification:["计算机相关专业，本科以上学历，3年以上后端开发工作经验，负责过大型项目的开发，具备设计高并发，高可用，可扩展性的应用开发经验；","良好的设计和编码习惯（所用语言主要为 Python）；","熟悉常见的设计模式，算法和数据结构；","较好的产品意识，愿意将产品效果做为工作最重要的驱动因素；","掌握 Web后端开发技术: 协议、架构、存储、缓存、安全等；","具备高度责任感、良好的沟通协作能力，具有较强的沟通表达能力、自我驱动能力，能持续优化工作过程和结果；","具备良好的执行能力，主动性，抗压能力；","互联网行业背景优先，有开源项目者优先。"],email:"简历发送至  hr@oakblack.com",show:!1},{name:"  系统架构师",address:"深圳",desc:["具有金融行业开发经验，对软件开发生命周期有深入的理解","熟悉主流的架构设计方法（微服务架构、分布式架构、高并发架构、云化架构等）;","熟练常用关系数据库、时序数据库、nosql等技术;","能撰写软件系统分析和设计方案","深入了解JavaEE相关的主流框架，并熟知它的原理及机制","具备良好的面向对象的设计能力，熟悉面向对象设计原则，掌握设计模式及应用场景","责任心强、有一定抗压能力，有良好的产品思维和沟通能力，能够制定中长期技术规划",'有带领团队，成功完成日志回放系统的设计和开发工作经验者优先考虑"'],qualification:["本科及以上学历，计算机、网络、软件工程等相关专业，8年以上工作；","拥有良好的计算机体系结构、网络知识；","熟练Golang；","有良好的团队工作精神，具备突出的学习能⼒，对代码精益求精；","熟悉某个云厂商（包括但不限于腾讯、阿里、华为、亚马逊等）提供的IaaS、PaaS、容器服务等产品或业务；","熟悉etcd、raft协议；","熟悉云原生技术，如容器、Kubernetes、Devops、服务网格等并具有相关项目建设经验；","具有IaaS，PaaS相关项目建设经验，有金融行业项目实施经验优先；","深入理解servicemesh、Istio、knative等技术；","有kubernetes开发经验（包括二次开发）者优先，有搭建容器运维平台经验者优先；","能针对业务场景进行正确的技术选型，有能力设计大型系统并通过UML、Presentation的形式进行表述。"],email:"简历发送至  hr@oakblack.com",show:!1},{name:"测试工程师",address:"深圳",desc:["负责软件测试领域相关工具/平台的设计、开发和维护，探索研究新的测试技术和工具并引入到测试领域，提升软件测试质量和效率；","支持并推动各测试团队的自动化测试的实施，提升各测试团队整体的自动化测试能力;","培养和指导其他员工，提升团队的测试质量和效率；;"],qualification:["**本科及以上学历，计算机相关专业，3年及以上全职测试或开发工作经验；有电商类相关测试经验优先，参与过中大型的项目测试工作优先；","熟悉测试流程和规范，熟练掌握软件测试方法和理论；","扎实的编程基础，有良好的编码习惯及技术功底，有自动化平台开发、维护实战经验的优先；","熟悉业界开源的自动化方案，并有自己的研究和理解；","拥有技术激情，对⾃⼰的⼯作认真负责，对最终效果追求**；","较强的表达沟通能力、团队合作精神，工作细致、责任心强，较强的逻辑分析总结能力和学习能力。"],email:"简历发送至  hr@oakblack.com",show:!1},{name:"数据分析师",address:"深圳",desc:["构建电商产品指标体系，对数据异常进行监控，及时发现业务风险；","为电商场景中相应决策提供专业的数据支持；","通过对数据的分析和探索，挖掘出业务机会或者产品改进方向，并产出条理清晰、论证严谨的分析报告；;","能积极推动各相关部门完善数据收集，以及分析建议的落地。"],qualification:["统计、数学、计算机**本科及以上学历，有5年以上互联网工作经验优先；","较好的数理统计基础、数据敏感度高、逻辑思维严密，能独立开展数据分析相关工作；","英文可作为工作语言，有带团队管理经验优先。"],email:"简历发送至  hr@oakblack.com",show:!1},{name:"资深风控数据分析专家",address:"深圳",desc:["基于对用户流量、产品的深入理解，构建平台商业化风控分析指标体系，能够建立系统化指标异常监控及归因分析；","深入分析、挖掘安全性指标要素，并对行业风险、收益风险、流量作弊风险等进行量化描述和分析；","将复杂问题进行拆解、定义，利用数据挖掘、统计建模方法评估、预测风险，给业务决策提供建设性建议和有效支撑；","跨团队紧密合作，能将关键分析结果产出清晰呈现给协同团队，并推动其实施落地，给产品、平台带来实际影响；","业务风险的问题与分析框架，与数据产品团队协同沉淀数据资产与数据科学解决方案，提升团队分析、决策效率。"],qualification:["统计学、数学、经济学、计算机等数据科学、量化分析相关专业硕士及以上学历；5年以上数据分析或建模经验，有风控、反作弊数据分析工作经验优先；","熟悉SQL及大数据处理技术，至少掌握Hadoop/Hive/Spark/Flink其中一项；熟悉Python、常见机器学习算法，具有模型搭建经验者优先；","具备优秀的商业敏感度与逻辑思维能力，能够在较大不确定性的问题中构建框架，将数据转化为有效的商业洞察，有互联网及计算广告相关行业经验优先；","富有责任心，良好的团队协作能力，优秀的沟通表达能力，善于在跨部门沟通中协调资源与影响其他跨职能团队成员；","具备强烈的好奇心与自我驱动力，乐于接受挑战，富有使命感。"],email:"简历发送至  hr@oakblack.com",show:!1}]}},head:function(){var n=window.local,title="橡树黑卡--招聘职位，欢迎投递",t="橡树黑卡正在招聘数据分析师，系统架构师，高级后端开发工程师，资深风控数据分析专家,400-150-9669。";return n&&(title="".concat(n.name,"--招聘职位，欢迎投递"),t="".concat(n.name,"正在招聘数据分析师，系统架构师，高级后端开发工程师，资深风控数据分析专家,400-150-9669。")),{title:title,meta:[{hid:"about",name:"description",content:t},{name:"keywords",content:"大数据，用户分析，用户运营，量化分析，指标监控，数据归因，数据挖掘，统计分析，统计建模，商业化，收益风险"}]}},mounted:function(){this.pageShow=!0,this.project=window.local,o.a.pageView("oak_join_page")},methods:{showDetail:function(n){var t=this.list;t[n].show=!t[n].show,this.list=t}}},l=(e(367),e(64)),component=Object(l.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:n.pageShow,expression:"pageShow"}]},[e("oakHeader",{attrs:{current:3}}),n._v(" "),e("main",[e("section",{staticClass:"join-banner",style:{background:n.project?"url("+n.url+"join-banner-"+n.project.en+".png) center center / auto 100% no-repeat":"url("+n.url+"join-banner.png) center center / auto 100% no-repeat"}}),n._v(" "),e("section",{staticClass:"mobile-join-banner",style:{background:n.project?"url("+n.url+"mobile-join-banner-"+n.project.en+".png) center center / auto 100% no-repeat":"url("+n.url+"mobile-join-banner.png) center center / auto 100% no-repeat"}}),n._v(" "),e("section",{staticClass:"join-main"},[e("div",{staticClass:"container"},[e("h2",[n._v("社招岗位")]),n._v(" "),e("div",{staticClass:"title"},[n._v("全部")]),n._v(" "),e("div",{staticClass:"join-container"},[e("div",{staticClass:"left"},n._l(n.list,(function(t,o){return e("div",{key:t.name,class:{item:!0,active:n.current===o},on:{click:function(t){n.current=o}}},[n._v("\n              "+n._s(t.name)+"\n              "),e("span",[n._v(n._s(t.address)+" >")])])})),0),n._v(" "),e("div",{staticClass:"right"},[e("h4",[n._v("职位描述")]),n._v(" "),e("ul",n._l(n.list[n.current].desc,(function(t,o){return e("li",{key:t},[n._v("\n                "+n._s(o+1)+"."+n._s(t)+"\n              ")])})),0),n._v(" "),e("h4",[n._v("任职资格")]),n._v(" "),e("ul",n._l(n.list[n.current].qualification,(function(t,o){return e("li",{key:t},[n._v("\n                "+n._s(o+1)+"."+n._s(t)+"\n              ")])})),0),n._v(" "),e("div",{staticClass:"join-email"},[n._v(n._s(n.list[n.current].email))])])]),n._v(" "),e("div",{staticClass:"mobile-join-container"},n._l(n.list,(function(t,o){return e("div",{key:t.name,staticClass:"item"},[e("div",{staticClass:"top",on:{click:function(t){return n.showDetail(o)}}},[n._v("\n              "+n._s(t.name)+"\n              "),e("span",[n._v(n._s(t.address)+" >")])]),n._v(" "),t.show?e("div",{staticClass:"right"},[e("h4",[n._v("职位描述")]),n._v(" "),e("ul",n._l(n.list[o].desc,(function(t,o){return e("li",{key:t},[n._v("\n                  "+n._s(o+1)+"."+n._s(t)+"\n                ")])})),0),n._v(" "),e("h4",[n._v("任职资格")]),n._v(" "),e("ul",n._l(n.list[o].qualification,(function(t,o){return e("li",{key:t},[n._v("\n                  "+n._s(o+1)+"."+n._s(t)+"\n                ")])})),0),n._v(" "),e("div",{staticClass:"join-email"},[n._v(n._s(n.list[o].email))])]):n._e()])})),0)])])]),n._v(" "),e("oakFooter",{attrs:{type:"join"}})],1)}),[],!1,null,"2572e42b",null);t.default=component.exports}}]);