webpackJsonp([27],{"8hXn":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("Dd8w"),c=i.n(s),l=i("NYxO"),a={name:"cpc-index",props:{showNav:{type:Boolean},hideMessage:{type:Boolean}},data:function(){return{sideNavWidth:"300px",tips:"",hiddenNav:!0}},methods:{openThreeLink:function(){window.open(this.setThreeLink)},switchNav:function(){this.hiddenNav=!this.hiddenNav},toIndex:function(){this.$emit("showMessage")},jump:function(e){function t(){this.$router.replace({path:"/three/"+e})}return t}},computed:c()({},Object(l.c)(["setThreeLink"])),mounted:function(){this.hiddenNav=!this.showNav},watch:{showNav:function(e,t){this.hiddenNav=!e}}},o={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"three-world"},[i("div",{staticClass:"cpc-nav-side animation",class:{"cpc-nav-side-hidden":e.hiddenNav}},[i("cpc-nav-side",{attrs:{width:e.sideNavWidth,height:"100%",background:""}},[i("template",{slot:"menu"},[i("cpc-nav-side-elem",{attrs:{slot:"father",elemKey:"0",click:e.toIndex},slot:"father"},[i("cpc-icon",{attrs:{slot:"side-ui",code:"#icon-home"},slot:"side-ui"}),e._v("首页\n        ")],1),e._v(" "),i("cpc-nav-side-menu",{attrs:{slot:"menu",menuKey:"1"},slot:"menu"},[i("cpc-nav-side-elem",{attrs:{slot:"father",elemKey:"1-0",father:!0},slot:"father"},[i("cpc-icon",{attrs:{slot:"side-ui",code:"#icon-arrow-right-drop-circle"},slot:"side-ui"}),e._v("开始\n          ")],1),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"1-1",click:e.jump("initThree")},slot:"child"},[e._v("场景初始")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"1-2",click:e.jump("watchKeyframe")},slot:"child"},[e._v("帧率监视器（Stats）")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"1-3",click:e.jump("initObj")},slot:"child"},[e._v("初始物体")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"1-4",click:e.jump("gui")},slot:"child"},[e._v("图形控制界面（Gui）")])],1),e._v(" "),i("cpc-nav-side-menu",{attrs:{slot:"menu",menuKey:"2"},slot:"menu"},[i("cpc-nav-side-elem",{attrs:{slot:"father",elemKey:"2-0",father:!0},slot:"father"},[i("cpc-icon",{attrs:{slot:"side-ui",code:"#icon-camera"},slot:"side-ui"}),e._v("相机（Camera）\n          ")],1),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"2-1",click:e.jump("cameraFollowMouse")},slot:"child"},[e._v("相机跟随鼠标")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"2-2",click:e.jump("autoRotateCamera")},slot:"child"},[e._v("相机自动旋转")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"2-3",click:e.jump("dragCamera")},slot:"child"},[e._v("相机交互插件（OrbitControls）")])],1),e._v(" "),i("cpc-nav-side-menu",{attrs:{slot:"menu",menuKey:"3"},slot:"menu"},[i("cpc-nav-side-elem",{attrs:{slot:"father",elemKey:"3-0",father:!0},slot:"father"},[i("cpc-icon",{attrs:{slot:"side-ui",code:"#icon-hexagon"},slot:"side-ui"}),e._v("几何（Geometry）\n          ")],1),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"3-1",click:e.jump("controlObj")},slot:"child"},[e._v("物体交互控件（TransformControls）")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"3-2",click:e.jump("simpleGeometry")},slot:"child"},[e._v("简单几何体")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"3-3",click:e.jump("complexGeometry")},slot:"child"},[e._v("复杂几何体")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"3-4",click:e.jump("planeGeometry")},slot:"child"},[e._v("平面几何体")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"3-5",click:e.jump("pipeGeometry")},slot:"child"},[e._v("管状几何体")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"3-6",click:e.jump("edgesGeometry")},slot:"child"},[e._v("边缘几何体（EdgesGeometry）")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"3-7",click:e.jump("extrudeGeometry")},slot:"child"},[e._v("挤压几何体（ExtrudeGeometry）")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"3-8",click:e.jump("latheGeometry")},slot:"child"},[e._v("车削几何体（LatheGeometry）")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"3-9",click:e.jump("shapeGeometry")},slot:"child"},[e._v("形状几何体（ShapeGeometry）")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"3-10",click:e.jump("textGeometry")},slot:"child"},[e._v("文本几何体（textGeometry）")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"3-11",click:e.jump("wireframeGeometry")},slot:"child"},[e._v("网格几何体（wireframeGeometry）")])],1),e._v(" "),i("cpc-nav-side-menu",{attrs:{slot:"menu",menuKey:"4"},slot:"menu"},[i("cpc-nav-side-elem",{attrs:{slot:"father",elemKey:"4-0",father:!0},slot:"father"},[i("cpc-icon",{attrs:{slot:"side-ui",code:"#icon-lightbulb-on"},slot:"side-ui"}),e._v("光源（Light）\n          ")],1),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"4-1",click:e.jump("ambientLight")},slot:"child"},[e._v("环境光（AmbientLight）")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"4-2",click:e.jump("directionalLight")},slot:"child"},[e._v("平行光（DirectionalLight）")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"4-3",click:e.jump("hemisphereLight")},slot:"child"},[e._v("半球光（HemisphereLight）")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"4-4",click:e.jump("pointLight")},slot:"child"},[e._v("点光（PointLight）")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"4-5",click:e.jump("rectAreaLight")},slot:"child"},[e._v("平面光（RectAreaLight）")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"4-6",click:e.jump("spotLight")},slot:"child"},[e._v("聚光灯（SpotLight）")])],1),e._v(" "),i("cpc-nav-side-menu",{attrs:{slot:"menu",menuKey:"5",open:""},slot:"menu"},[i("cpc-nav-side-elem",{attrs:{slot:"father",elemKey:"5-0",father:!0,isSignal:"",arrowInit:""},slot:"father"},[i("cpc-icon",{attrs:{slot:"side-ui",code:"#icon-vector-triangle"},slot:"side-ui"}),e._v("材质（material）\n          ")],1),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"5-1",click:e.jump("lineBasicMaterial")},slot:"child"},[e._v("基础线条材质（LineBasicMaterial）")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"5-2",click:e.jump("lineDashedMaterial")},slot:"child"},[e._v("虚线材质（LineDashedMaterial）")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"5-3",click:e.jump("meshBasicMaterial")},slot:"child"},[e._v("基础网格材质（MeshBasicMaterial）")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"5-4",click:e.jump("meshDepthMaterial")},slot:"child"},[e._v("深度网格材质（MeshDepthMaterial）")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"5-5",isSignal:"",click:e.jump("meshDistanceMaterial")},slot:"child"},[e._v("距离网格材质（MeshDistanceMaterial）")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"5-6",click:e.jump("meshLambertMaterial")},slot:"child"},[e._v("Lambert网格材质（MeshLambertMaterial）")])],1),e._v(" "),i("cpc-nav-side-menu",{attrs:{slot:"menu",menuKey:"6"},slot:"menu"},[i("cpc-nav-side-elem",{attrs:{slot:"father",elemKey:"6-0",father:!0},slot:"father"},[i("cpc-icon",{attrs:{slot:"side-ui",code:"#icon-crosshairs-gps"},slot:"side-ui"}),e._v("核心\n          ")],1),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"6-1",click:e.jump("bufferGeometry")},slot:"child"},[e._v("缓存区几何体（bufferGeometry）")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"6-2",click:e.jump("bufferGeometry")},slot:"child"},[e._v("网格模型（mesh）")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"6-3",click:e.jump("bufferGeometry")},slot:"child"},[e._v("线模型（line）")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"6-4",click:e.jump("bufferGeometry")},slot:"child"},[e._v("点模型（point）")])],1),e._v(" "),i("cpc-nav-side-menu",{attrs:{slot:"menu",menuKey:"7"},slot:"menu"},[i("cpc-nav-side-elem",{attrs:{slot:"father",elemKey:"7-0",father:!0},slot:"father"},[i("cpc-icon",{attrs:{slot:"side-ui",code:"#icon-file-import"},slot:"side-ui"}),e._v("加载器（Loader）\n          ")],1),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"7-1",click:e.jump("loadingManager")},slot:"child"},[e._v("加载管理器（LoadingManager）")]),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"7-2",click:e.jump("OBJLoader")},slot:"child"},[e._v("OBJ格式加载器（OBJLoader）")])],1),e._v(" "),i("cpc-nav-side-menu",{attrs:{slot:"menu",menuKey:"8"},slot:"menu"},[i("cpc-nav-side-elem",{attrs:{slot:"father",elemKey:"8-0",father:!0},slot:"father"},[i("cpc-icon",{attrs:{slot:"side-ui",code:"#icon-soundcloud"},slot:"side-ui"}),e._v("后期处理（EffectComposer）\n          ")],1),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"8-1",click:e.jump("lineBasicMaterial")},slot:"child"},[e._v("基础线条材质（LineBasicMaterial）")])],1),e._v(" "),i("cpc-nav-side-menu",{attrs:{slot:"menu",menuKey:"9"},slot:"menu"},[i("cpc-nav-side-elem",{attrs:{slot:"father",elemKey:"9-0",father:!0},slot:"father"},[i("cpc-icon",{attrs:{slot:"side-ui",code:"#icon-gamepad"},slot:"side-ui"}),e._v("应用\n          ")],1),e._v(" "),i("cpc-nav-side-elem",{attrs:{slot:"child",elemKey:"9-1",click:e.jump("lineBasicMaterial")},slot:"child"},[e._v("基础线条材质（LineBasicMaterial）")])],1)],1)],2)],1),e._v(" "),i("cpc-three-tips",{class:{"cpc-nav-side-hidden":e.hiddenNav},attrs:{tips:e.tips}}),e._v(" "),i("div",{staticClass:"three-container"},[i("router-view")],1),e._v(" "),i("div",{staticClass:"three-nav-switch flex-row-center animation",class:{"three-nav-switch-close":e.hiddenNav,"three-nav-switch-hidden":!e.hideMessage},on:{click:e.switchNav}},[i("cpc-icon",{attrs:{code:"#icon-ray-end-arrow",color:"black",size:"20px"}})],1),e._v(" "),i("div",{staticClass:"three-link flex-row-center animation",class:{"three-nav-switch-hidden":!e.hideMessage},on:{click:e.openThreeLink}},[i("cpc-icon",{attrs:{code:"#icon-code-tags",color:"black",size:"20px"}})],1)],1)},staticRenderFns:[]};var n={name:"index",data:function(){return{hideMessage:!1,showNav:!1}},methods:{toGithub:function(){window.open("https://github.com/Shiotsukikaedesari/cpc-component-library","_blank")},toGuide:function(){this.$router.replace({path:"/display",query:{sign:"guide"}})},toComponent:function(){this.$router.replace({path:"/components",query:{sign:"components"}})},toStyle:function(){this.$router.replace({path:"/style",query:{sign:"style"}})},toNotes:function(){this.$router.replace({path:"/notes",query:{sign:"notes"}})},toEffect:function(){this.$router.replace({path:"/effect",query:{sign:"effect"}})},toControl:function(){this.hideMessage=!this.hideMessage,this.showNav=!this.showNav}},mounted:function(){},components:{cpcIndex:i("VU/8")(a,o,!1,function(e){i("dYGW")},"data-v-40a7a712",null).exports}},r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("div",{staticClass:"background"},[i("cpc-index",{attrs:{hideMessage:e.hideMessage,showNav:e.showNav},on:{showMessage:e.toControl}})],1),e._v(" "),i("div",{staticClass:"main flex-column-center animation",class:{"main-hidden":e.hideMessage,"main-show":!e.hideMessage}},[i("div",{staticClass:"logo"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/static/logo.png",expression:"'/static/logo.png'"}],attrs:{alt:"漫协logo"}})]),e._v(" "),e._m(0),e._v(" "),i("div",{staticClass:"button-box"},[i("button",{staticClass:"animation",on:{click:e.toGuide}},[e._v("指南")]),e._v(" "),i("button",{staticClass:"animation",on:{click:e.toComponent}},[e._v("组件")]),e._v(" "),i("button",{staticClass:"animation",on:{click:e.toStyle}},[e._v("UI风格")]),e._v(" "),i("button",{staticClass:"animation",on:{click:e.toEffect}},[e._v("交互动效")]),e._v(" "),i("button",{staticClass:"animation",on:{click:e.toGithub}},[e._v("Github")]),e._v(" "),i("button",{staticClass:"animation",on:{click:e.toNotes}},[e._v("前端笔记")]),e._v(" "),i("button",{staticClass:"animation",on:{click:e.toControl}},[e._v("3D world")])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"introduce"},[t("span",[this._v("一款基于Vue的前端开发库，为cpc官网提供支持（挖的坑是一定要填的！）")])])}]};var d=i("VU/8")(n,r,!1,function(e){i("fFJK")},"data-v-88fb6092",null);t.default=d.exports},dYGW:function(e,t){},fFJK:function(e,t){}});