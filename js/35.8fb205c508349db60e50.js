webpackJsonp([35],{"2QER":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("Dd8w"),n=e.n(s),c=e("NYxO"),o={name:"effect",data:function(){return{sideNavWidth:"300px",mainWidth:" calc(100% - 140px)"}},methods:{toIntro:function(){this.$router.push({path:"/effect/intro"})},toLoading:function(){this.$router.push({path:"/effect/loading"})},toCarousel:function(){this.$router.push({path:"/effect/carousel"})}},created:function(){this.sideNavWidth=this.setSideNavWidth,this.mainWidth=this.setContainerWidth},computed:n()({},Object(c.c)(["setSideNavWidth","setContainerWidth"]))},a={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"components flex-row"},[e("div",{staticClass:"cpc-nav-side"},[e("cpc-nav-side",{attrs:{width:t.sideNavWidth,height:"100%",background:""}},[e("template",{slot:"menu"},[e("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"0",isSignal:!0,click:t.toIntro},slot:"child"},[e("cpc-icon",{attrs:{slot:"side-ui",code:"#icon-file-document-box"},slot:"side-ui"}),t._v("介绍\n              ")],1),t._v(" "),e("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"1",click:t.toLoading},slot:"child"},[e("cpc-icon",{attrs:{slot:"side-ui",code:"#icon-rotate-right",animation:"rotation2D-Ani",aniDuration:"1000ms"},slot:"side-ui"}),t._v("加载\n              ")],1),t._v(" "),e("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"2",click:t.toCarousel},slot:"child"},[e("cpc-icon",{attrs:{slot:"side-ui",code:"#icon-cards",animation:"drawer-X-Ani",aniDuration:"2s"},slot:"side-ui"}),t._v("轮播\n              ")],1)],1)],2)],1),t._v(" "),e("div",{staticClass:"display-main",style:{width:t.mainWidth}},[e("router-view")],1)])},staticRenderFns:[]};var d=e("VU/8")(o,a,!1,function(t){e("f0h1")},"data-v-c13c8246",null);i.default=d.exports},f0h1:function(t,i){}});