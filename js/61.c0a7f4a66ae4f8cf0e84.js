webpackJsonp([61],{"1hOG":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("Dd8w"),c=i.n(s),l=i("NYxO"),o={name:"components",data:function(){return{sideNavWidth:"300px",mainWidth:" calc(100% - 140px)"}},methods:{jump:function(e){function t(){this.$router.replace({path:"/components/"+e})}return t}},created:function(){this.sideNavWidth=this.setSideNavWidth,this.mainWidth=this.setContainerWidth},computed:c()({},Object(l.c)(["setSideNavWidth","setContainerWidth"]))},n={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"components flex-row"},[i("div",{staticClass:"cpc-nav-side"},[i("cpc-nav-side",{attrs:{width:e.sideNavWidth,height:"100%",background:""}},[i("cpc-nav-side-menu",{attrs:{slot:"menu",menuKey:"1",open:!0},slot:"menu"},[i("cpc-nav-side-elem",{attrs:{slot:"father",elemKey:"1-0",father:!0,isSignal:!0,arrowInit:!0},slot:"father"},[i("cpc-icon",{attrs:{slot:"side-ui",code:"#icon-arrow-right-drop-circle"},slot:"side-ui"}),e._v("开始\n              ")],1),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"1-1",isSignal:!0,click:e.jump("intro")},slot:"child"},[i("cpc-icon",{attrs:{slot:"side-ui",code:"#icon-file-document-box",size:"20px"},slot:"side-ui"}),e._v("基本介绍\n              ")],1),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"1-2",click:e.jump("use-explain")},slot:"child"},[i("cpc-icon",{attrs:{slot:"side-ui",code:"#icon-comment-text",size:"20px"},slot:"side-ui"}),e._v("编写说明\n              ")],1),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"1-3",click:e.jump("demo")},slot:"child"},[i("cpc-icon",{attrs:{slot:"side-ui",code:"#icon-microscope",size:"20px"},slot:"side-ui"}),e._v("DEMO测试\n              ")],1)],1),e._v(" "),i("cpc-nav-side-menu",{attrs:{slot:"menu",menuKey:"2"},slot:"menu"},[i("cpc-nav-side-elem",{attrs:{slot:"father",elemKey:"2-0",father:!0},slot:"father"},[i("cpc-icon",{attrs:{slot:"side-ui",code:"#icon-cube"},slot:"side-ui"}),e._v("通用组件\n              ")],1),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"2-1",click:e.jump("icon")},slot:"child"},[i("cpc-icon",{attrs:{slot:"side-ui",code:"#icon-resize-bottom-right"},slot:"side-ui"}),e._v("图标\n              ")],1),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"2-2",click:e.jump("button")},slot:"child"},[i("cpc-icon",{attrs:{slot:"side-ui",code:"#icon-nest-protect"},slot:"side-ui"}),e._v("按钮\n              ")],1),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"2-3",click:e.jump("message-reminder")},slot:"child"},[i("cpc-icon",{attrs:{slot:"side-ui",code:"#icon-checkbox-multiple-blank"},slot:"side-ui"}),e._v("消息弹窗\n              ")],1),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"2-4",click:e.jump("drag-plane")},slot:"child"},[i("cpc-icon",{attrs:{slot:"side-ui",code:"#icon-vector-square"},slot:"side-ui"}),e._v("拖拉面板\n              ")],1)],1),e._v(" "),i("cpc-nav-side-menu",{attrs:{slot:"menu",menuKey:"3"},slot:"menu"},[i("cpc-nav-side-elem",{attrs:{slot:"father",elemKey:"3-0",father:!0},slot:"father"},[i("cpc-icon",{attrs:{slot:"side-ui",code:"#icon-package-variant"},slot:"side-ui"}),e._v("功能组件\n            ")],1),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"3-1"},slot:"child"},[e._v("组件一")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"3-2"},slot:"child"},[e._v("组件二")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"3-3"},slot:"child"},[e._v("组件三")])],1)],1)],1),e._v(" "),i("div",{staticClass:"display-main",style:{width:e.mainWidth}},[i("router-view")],1)])},staticRenderFns:[]};var a=i("VU/8")(o,n,!1,function(e){i("aCB+")},"data-v-4cb7c2a6",null);t.default=a.exports},"aCB+":function(e,t){}});