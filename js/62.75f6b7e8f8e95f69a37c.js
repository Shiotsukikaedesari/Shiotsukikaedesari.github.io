webpackJsonp([62],{iULv:function(e,t){},k70Y:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("Dd8w"),s=i.n(n),r=i("NYxO"),a=i("QLyc"),h={name:"three-init",data:function(){return{renderer:"",scene:"",camera:"",stats:"",helperBox:""}},methods:s()({init:function(){this.initRender(),this.initCamera(),this.initObj(),this.initLight(),this.initHelper(),this.initStats(),this.updateRenderer()},initRender:function(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.$refs["three-canvas"].appendChild(this.renderer.domElement),this.renderer.setClearColor("rgb(15, 1, 25)")},initLight:function(){},initCamera:function(){this.camera.position.x=400,this.camera.position.y=400,this.camera.position.z=400,this.camera.up.x=0,this.camera.up.y=1,this.camera.up.z=0,this.camera.lookAt(new THREE.Vector3(0,0,0))},initObj:function(){},initHelper:function(){this.scene.add(this.helperBox.axesHelper.helper),this.scene.add(this.helperBox.gridHelper.helper)},initStats:function(){this.stats.setMode(0),this.stats.domElement.id="three-stats",this.stats.domElement.style.position="absolute",this.stats.domElement.style.left="unset",this.stats.domElement.style.right="0px",this.stats.domElement.style.top="0px",document.body.appendChild(this.stats.domElement)},initAnimation:function(){},updateRenderer:function(){this.renderer.render(this.scene,this.camera)},clearObjCache:function(e){e.geometry.dispose(),e.material.dispose()},clearCache:function(){this.renderer.clear(!0,!0,!0),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement=null,this.scene.dispose(),this.clearObjCache(this.objBox.obj1)}},Object(r.b)(["resetThreeTipsFun","resetThreeLinkFun"])),created:function(){this.resetThreeTipsFun(""),this.resetThreeLinkFun("base/watchKeyframe.vue")},beforeMount:function(){this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.scene=new THREE.Scene,this.camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1e4),this.stats=new a.a,this.helperBox={axesHelper:{helper:new THREE.AxesHelper(1e4)},gridHelper:{helper:new THREE.GridHelper(1500,30,"white","rgb(150, 150, 150)")}}},mounted:function(){this.init()},beforeDestroy:function(){document.body.removeChild(document.getElementById("three-stats")),this.clearCache(),this.renderer=null,this.scene=null,this.camera=null,this.stats=null,this.helperBox=null}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"three-display three-init"},[t("div",{ref:"three-canvas",staticClass:"three-canvas",attrs:{id:"three-canvas"}})])},staticRenderFns:[]};var d=i("VU/8")(h,o,!1,function(e){i("iULv")},"data-v-0ff9be52",null);t.default=d.exports}});