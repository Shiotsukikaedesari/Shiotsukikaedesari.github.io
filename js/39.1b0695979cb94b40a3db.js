webpackJsonp([39],{"2HDT":function(t,o){},"9DXX":function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i=e("Dd8w"),s=e.n(i),n=e("NYxO"),c={name:"display",data:function(){return{sign:this.$route.query.sign||"",headerHeight:"80px",containerHeight:"calc(100% - 180px)",footerHeight:"100px",toTopBottom:"calc(3% + 100px)",toTopTimer:""}},methods:{toTop:function(){var t=this,o=document.querySelector(".display-main"),e=o.scrollTop,i=e/30;e<1e3&&(i=e/10),clearInterval(this.toTopTimer),this.toTopTimer=setInterval(function(){(e-=i)<=0?(o.scrollTop=0,clearInterval(t.toTopTimer)):o.scrollTop=e},1e3/60)},toIndex:function(){this.$router.push({path:"/"})},toGuide:function(){this.$router.push({path:"/guide"})},toStyle:function(){this.$router.push({path:"/style"})},toComponents:function(){this.$router.push({path:"/components"})},toEffect:function(){this.$router.push({path:"/effect"})},toGithub:function(){window.open("https://github.com/Shiotsukikaedesari/cpc-component-library","_blank")},toNotes:function(){this.$router.push({path:"/notes"})}},created:function(){this.containerHeight=this.setContainerHeight,this.footerHeight=this.setFooterHeight,this.headerHeight=this.setHeaderHeight,this.toTopBottom=this.setToTopBottom},computed:s()({},Object(n.c)(["setFooterHeight","setContainerHeight","setHeaderHeight","setToTopBottom"])),watch:{$route:function(t,o){var e=this;this.$nextTick(function(){e.toTop()})},setFooterHeight:function(t,o){this.footerHeight=t},setContainerHeight:function(t,o){this.containerHeight=t},setHeaderHeight:function(t,o){this.headerHeight=t},setToTopBottom:function(t,o){this.toTopBottom=t}}},a={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"display"},[e("header",{staticClass:"cpc-nav-top"},[e("cpc-nav-top",{attrs:{height:t.headerHeight,fixed:!0}},[e("div",{staticClass:"top-logo",attrs:{slot:"nav-top-left"},slot:"nav-top-left"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/static/logo-fill.png",expression:"'/static/logo-fill.png'"}],attrs:{alt:""}})]),t._v(" "),e("cpc-nav-top-elem",{attrs:{slot:"nav-top-left",elemKey:"1",click:t.toIndex},slot:"nav-top-left"},[e("cpc-icon",{attrs:{slot:"top-ui",code:"#icon-home"},slot:"top-ui"}),t._v("首页\n        ")],1),t._v(" "),e("cpc-nav-top-elem",{attrs:{slot:"nav-top-right",elemKey:"2",click:t.toGuide,isSignal:"guide"===t.sign},slot:"nav-top-right"},[e("cpc-icon",{attrs:{slot:"top-ui",code:"#icon-compass"},slot:"top-ui"}),t._v("指南\n      ")],1),t._v(" "),e("cpc-nav-top-elem",{attrs:{slot:"nav-top-right",elemKey:"3",click:t.toComponents,isSignal:"components"===t.sign},slot:"nav-top-right"},[e("cpc-icon",{attrs:{slot:"top-ui",code:"#icon-widgets"},slot:"top-ui"}),t._v("组件\n      ")],1),t._v(" "),e("cpc-nav-top-elem",{attrs:{slot:"nav-top-right",elemKey:"4",click:t.toStyle,isSignal:"style"===t.sign},slot:"nav-top-right"},[e("cpc-icon",{attrs:{slot:"top-ui",code:"#icon-drawing-box"},slot:"top-ui"}),t._v("UI风格\n      ")],1),t._v(" "),e("cpc-nav-top-elem",{attrs:{slot:"nav-top-right",elemKey:"5",click:t.toEffect,isSignal:"effect"===t.sign},slot:"nav-top-right"},[e("cpc-icon",{attrs:{slot:"top-ui",code:"#icon-flash"},slot:"top-ui"}),t._v("交互动效\n      ")],1),t._v(" "),e("cpc-nav-top-elem",{attrs:{slot:"nav-top-right",elemKey:"6",click:t.toGithub},slot:"nav-top-right"},[e("cpc-icon",{attrs:{slot:"top-ui",code:"#icon-github-circle"},slot:"top-ui"}),t._v("Github\n      ")],1),t._v(" "),e("cpc-nav-top-elem",{attrs:{slot:"nav-top-right",elemKey:"7",click:t.toNotes,isSignal:"notes"===t.sign},slot:"nav-top-right"},[e("cpc-icon",{attrs:{slot:"top-ui",code:"#icon-note-multiple"},slot:"top-ui"}),t._v("前端笔记\n      ")],1)],1)],1),t._v(" "),e("section",{staticClass:"display-container flex-row",style:{height:t.containerHeight}},[e("cpc-md-nav"),t._v(" "),e("router-view"),t._v(" "),e("div",{staticClass:"toTop-box animation",style:{bottom:t.toTopBottom},on:{click:t.toTop}})],1),t._v(" "),e("footer",{staticClass:"display-footer",style:{height:t.footerHeight}})])},staticRenderFns:[]};var l=e("VU/8")(c,a,!1,function(t){e("2HDT")},"data-v-9ceab4a4",null);o.default=l.exports}});