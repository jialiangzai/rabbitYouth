(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-882fdf24"],{"0ec8":function(e,t,c){},"0f9e":function(e,t,c){"use strict";c("7487")},"45ab":function(e,t,c){"use strict";c("e89e")},"72b4":function(e,t,c){e.exports=c.p+"img/qrcode.5372a064.jpg"},7487:function(e,t,c){},"9dd4":function(e,t,c){"use strict";c("0ec8")},de57:function(e,t,c){"use strict";c("f47f")},e134:function(e,t,c){"use strict";c.r(t);var n=c("7a23");function a(e,t,c,a,o,r){var l=Object(n["resolveComponent"])("TopNav"),d=Object(n["resolveComponent"])("XtxHeader"),i=Object(n["resolveComponent"])("XtxHeaderSticky"),j=Object(n["resolveComponent"])("router-view"),s=Object(n["resolveComponent"])("XtxFooter");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(l),Object(n["createVNode"])(d),Object(n["createVNode"])(i),Object(n["createElementVNode"])("main",null,[Object(n["createVNode"])(j)]),Object(n["createVNode"])(s)],64)}var o=function(e){return Object(n["pushScopeId"])("data-v-996c5c0a"),e=e(),Object(n["popScopeId"])(),e},r={class:"app-topnav"},l={class:"container"},d={href:"javascript:;"},i=o((function(){return Object(n["createElementVNode"])("i",{class:"iconfont icon-user"},null,-1)})),j=Object(n["createTextVNode"])("请先登录"),s=o((function(){return Object(n["createElementVNode"])("li",null,[Object(n["createElementVNode"])("a",{href:"javascript:;"},"免费注册")],-1)})),b=Object(n["createTextVNode"])("我的订单"),O=Object(n["createStaticVNode"])('<li data-v-996c5c0a><a href="javascript:;" data-v-996c5c0a>会员中心</a></li><li data-v-996c5c0a><a href="javascript:;" data-v-996c5c0a>帮助中心</a></li><li data-v-996c5c0a><a href="javascript:;" data-v-996c5c0a>关于我们</a></li><li data-v-996c5c0a><a href="javascript:;" data-v-996c5c0a><i class="iconfont icon-phone" data-v-996c5c0a></i>手机版</a></li>',4);function u(e,t,c,a,o,u){var m=Object(n["resolveComponent"])("RouterLink");return Object(n["openBlock"])(),Object(n["createElementBlock"])("nav",r,[Object(n["createElementVNode"])("div",l,[Object(n["createElementVNode"])("ul",null,[a.token?(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:0},[Object(n["createElementVNode"])("li",null,[Object(n["createElementVNode"])("a",d,[i,Object(n["createTextVNode"])(Object(n["toDisplayString"])(a.store.state.user.profile.nickname||a.store.state.user.profile.account||"刘德华"),1)])]),Object(n["createElementVNode"])("li",null,[Object(n["createElementVNode"])("a",{href:"javascript:;",onClick:t[0]||(t[0]=function(){return a.logoutUse&&a.logoutUse.apply(a,arguments)})},"退出登录")])],64)):(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:1},[Object(n["createElementVNode"])("li",null,[Object(n["createVNode"])(m,{to:"/login"},{default:Object(n["withCtx"])((function(){return[j]})),_:1})]),s],64)),Object(n["createElementVNode"])("li",null,[Object(n["createVNode"])(m,{to:"/order"},{default:Object(n["withCtx"])((function(){return[b]})),_:1})]),O])])])}c("ac1f"),c("5319");var m=c("6c02"),p=c("5502"),N={name:"AppTopnav",setup:function(){var e=Object(p["d"])(),t=e.state.user.profile.token,c=Object(m["d"])(),n=function(){e.dispatch("user/logout"),c.replace("/login")};return{token:t,logoutUse:n,store:e}}},f=(c("45ab"),c("6b0d")),V=c.n(f);const v=V()(N,[["render",u],["__scopeId","data-v-996c5c0a"]]);var E=v,h=function(e){return Object(n["pushScopeId"])("data-v-62ed706a"),e=e(),Object(n["popScopeId"])(),e},k={class:"app-header"},g={class:"container"},x={class:"logo"},y=Object(n["createTextVNode"])("小兔鲜"),B=h((function(){return Object(n["createElementVNode"])("div",{class:"search"},[Object(n["createElementVNode"])("i",{class:"iconfont icon-search"}),Object(n["createElementVNode"])("input",{type:"text",placeholder:"搜一搜"})],-1)})),C={class:"cart"},w=h((function(){return Object(n["createElementVNode"])("i",{class:"iconfont icon-cart"},null,-1)}));function _(e,t,c,a,o,r){var l=Object(n["resolveComponent"])("RouterLink"),d=Object(n["resolveComponent"])("XtxHeaderNav"),i=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createElementBlock"])("header",k,[Object(n["createElementVNode"])("div",g,[Object(n["createElementVNode"])("h1",x,[Object(n["createVNode"])(l,{to:"/"},{default:Object(n["withCtx"])((function(){return[y]})),_:1})]),Object(n["createVNode"])(d),B,Object(n["createElementVNode"])("div",C,[Object(n["createVNode"])(i,{class:"curr",to:"/cart"},{default:Object(n["withCtx"])((function(){return[w,Object(n["createElementVNode"])("em",null,Object(n["toDisplayString"])(e.$store.getters["cart/effectiveList"].length),1)]})),_:1})])])])}c("b0c0");var S={class:"app-header-nav"},T={class:"home"},H=Object(n["createTextVNode"])("首页"),I={href:"#"},F={class:"layer"},L={href:"#"},X=["src"];function A(e,t,c,a,o,r){var l=Object(n["resolveComponent"])("RouterLink"),d=Object(n["resolveComponent"])("XtxSkeleton");return Object(n["openBlock"])(),Object(n["createElementBlock"])("ul",S,[Object(n["createElementVNode"])("li",T,[Object(n["createVNode"])(l,{to:"/"},{default:Object(n["withCtx"])((function(){return[H]})),_:1})]),a.list.length?(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],{key:0},Object(n["renderList"])(a.list,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:e.id},[Object(n["createElementVNode"])("a",I,Object(n["toDisplayString"])(e.name),1),Object(n["createElementVNode"])("div",F,[Object(n["createElementVNode"])("ul",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.children,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:e.id},[Object(n["createElementVNode"])("a",L,[Object(n["createElementVNode"])("img",{src:e.picture,alt:""},null,8,X),Object(n["createElementVNode"])("p",null,Object(n["toDisplayString"])(e.name),1)])])})),128))])])])})),128)):(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:1},Object(n["renderList"])(9,(function(e){return Object(n["createElementVNode"])("li",{key:e},[Object(n["createVNode"])(d,{width:40,height:20,bg:"#ccc",style:{"margin-right":"10px"}})])})),64))])}var R={name:"AppHeaderNav",setup:function(){var e=Object(p["d"])(),t=Object(n["computed"])((function(){return e.state.category.list}));return{list:t}}};c("fcbf");const D=V()(R,[["render",A],["__scopeId","data-v-4cbc9838"]]);var P=D,q={name:"AppHeader",components:{XtxHeaderNav:P}};c("de57");const U=V()(q,[["render",_],["__scopeId","data-v-62ed706a"]]);var J=U,z=c("72b4"),$=c.n(z),G=function(e){return Object(n["pushScopeId"])("data-v-31327ede"),e=e(),Object(n["popScopeId"])(),e},K={class:"app_footer"},M=G((function(){return Object(n["createElementVNode"])("div",{class:"contact"},[Object(n["createElementVNode"])("div",{class:"container"},[Object(n["createElementVNode"])("dl",null,[Object(n["createElementVNode"])("dt",null,"客户服务"),Object(n["createElementVNode"])("dd",null,[Object(n["createElementVNode"])("i",{class:"iconfont icon-kefu"}),Object(n["createTextVNode"])(" 在线客服")]),Object(n["createElementVNode"])("dd",null,[Object(n["createElementVNode"])("i",{class:"iconfont icon-question"}),Object(n["createTextVNode"])(" 问题反馈")])]),Object(n["createElementVNode"])("dl",null,[Object(n["createElementVNode"])("dt",null,"关注我们"),Object(n["createElementVNode"])("dd",null,[Object(n["createElementVNode"])("i",{class:"iconfont icon-weixin"}),Object(n["createTextVNode"])(" 公众号")]),Object(n["createElementVNode"])("dd",null,[Object(n["createElementVNode"])("i",{class:"iconfont icon-weibo"}),Object(n["createTextVNode"])(" 微博")])]),Object(n["createElementVNode"])("dl",null,[Object(n["createElementVNode"])("dt",null,"下载APP"),Object(n["createElementVNode"])("dd",{class:"qrcode"},[Object(n["createElementVNode"])("img",{src:$.a})]),Object(n["createElementVNode"])("dd",{class:"download"},[Object(n["createElementVNode"])("span",null,"扫描二维码"),Object(n["createElementVNode"])("span",null,"立马下载APP"),Object(n["createElementVNode"])("a",{href:"javascript:;"},"下载页面")])]),Object(n["createElementVNode"])("dl",null,[Object(n["createElementVNode"])("dt",null,"服务热线"),Object(n["createElementVNode"])("dd",{class:"hotline"},[Object(n["createTextVNode"])(" 400-0000-000 "),Object(n["createElementVNode"])("small",null,"周一至周日 8:00-18:00")])])])],-1)})),Q=G((function(){return Object(n["createElementVNode"])("div",{class:"extra"},[Object(n["createElementVNode"])("div",{class:"container"},[Object(n["createElementVNode"])("div",{class:"slogan"},[Object(n["createElementVNode"])("a",{href:"javascript:;"},[Object(n["createElementVNode"])("i",{class:"iconfont icon-footer01"}),Object(n["createElementVNode"])("span",null,"价格亲民")]),Object(n["createElementVNode"])("a",{href:"javascript:;"},[Object(n["createElementVNode"])("i",{class:"iconfont icon-footer02"}),Object(n["createElementVNode"])("span",null,"物流快捷")]),Object(n["createElementVNode"])("a",{href:"javascript:;"},[Object(n["createElementVNode"])("i",{class:"iconfont icon-footer03"}),Object(n["createElementVNode"])("span",null,"品质新鲜")])]),Object(n["createElementVNode"])("div",{class:"copyright"},[Object(n["createElementVNode"])("p",null,[Object(n["createElementVNode"])("a",{href:"javascript:;"},"关于我们"),Object(n["createElementVNode"])("a",{href:"javascript:;"},"帮助中心"),Object(n["createElementVNode"])("a",{href:"javascript:;"},"售后服务"),Object(n["createElementVNode"])("a",{href:"javascript:;"},"配送与验收"),Object(n["createElementVNode"])("a",{href:"javascript:;"},"商务合作"),Object(n["createElementVNode"])("a",{href:"javascript:;"},"搜索推荐"),Object(n["createElementVNode"])("a",{href:"javascript:;"},"友情链接")]),Object(n["createElementVNode"])("p",null,"CopyRight © 小兔鲜儿")])])],-1)})),W=[M,Q];function Y(e,t,c,a,o,r){return Object(n["openBlock"])(),Object(n["createElementBlock"])("footer",K,W)}var Z={name:"AppFooter"};c("0f9e");const ee=V()(Z,[["render",Y],["__scopeId","data-v-31327ede"]]);var te=ee,ce={class:"container"},ne={class:"right"},ae=Object(n["createTextVNode"])("品牌"),oe=Object(n["createTextVNode"])("专题");function re(e,t,c,a,o,r){var l=Object(n["resolveComponent"])("RouterLink"),d=Object(n["resolveComponent"])("HeaderNav");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:Object(n["normalizeClass"])(["app-header-sticky",{show:a.y>100}])},[Object(n["createElementVNode"])("div",ce,[Object(n["createVNode"])(l,{class:"logo",to:"/"}),Object(n["createVNode"])(d),Object(n["createElementVNode"])("div",ne,[Object(n["createVNode"])(l,{to:"/"},{default:Object(n["withCtx"])((function(){return[ae]})),_:1}),Object(n["createVNode"])(l,{to:"/"},{default:Object(n["withCtx"])((function(){return[oe]})),_:1})])])],2)}var le=c("5550"),de={name:"AppHeaderSticky",components:{HeaderNav:P},setup:function(){var e=Object(le["d"])(),t=e.y;return{y:t}}};c("9dd4");const ie=V()(de,[["render",re],["__scopeId","data-v-0dd22f5a"]]);var je=ie,se={name:"xtx-layout",components:{TopNav:E,XtxHeader:J,XtxFooter:te,XtxHeaderSticky:je},setup:function(){var e=Object(p["d"])();return e.dispatch("category/getListCate"),{}}};const be=V()(se,[["render",a]]);t["default"]=be},e89e:function(e,t,c){},f47f:function(e,t,c){},f50b:function(e,t,c){},fcbf:function(e,t,c){"use strict";c("f50b")}}]);
//# sourceMappingURL=chunk-882fdf24.11afbd78.js.map