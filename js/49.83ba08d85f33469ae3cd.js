webpackJsonp([49],{BywO:function(e,t){},GMDB:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("Dd8w"),s=i.n(n),r=i("NYxO"),a=i("QLyc"),h={name:"three-init",data:function(){return{renderer:"",scene:"",camera:"",stats:"",helperBox:"",animationFrame:""}},methods:s()({init:function(){this.initRender(),this.initCamera(),this.initObj(),this.initLight(),this.initHelper(),this.initStats(),this.renderer.render(this.scene,this.camera)},initRender:function(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.$refs["three-canvas"].appendChild(this.renderer.domElement),this.renderer.setClearColor("rgb(15, 1, 25)")},initLight:function(){},initCamera:function(){this.camera.position.x=400,this.camera.position.y=400,this.camera.position.z=400,this.camera.up.x=0,this.camera.up.y=1,this.camera.up.z=0,this.camera.lookAt(new THREE.Vector3(0,0,0))},initObj:function(){},initHelper:function(){this.scene.add(this.helperBox.axesHelper.helper),this.scene.add(this.helperBox.gridHelper.helper)},initStats:function(){this.stats.setMode(0),this.stats.domElement.id="three-stats",this.stats.domElement.style.position="absolute",this.stats.domElement.style.left="unset",this.stats.domElement.style.right="0px",this.stats.domElement.style.top="0px",document.body.appendChild(this.stats.domElement)},animation:function(){var e=1e-4*Date.now();this.camera.position.x=600*Math.cos(e),this.camera.position.z=600*Math.sin(e),this.camera.lookAt(new THREE.Vector3(0,0,0))},updateRenderer:function(){this.animation(),this.renderer.render(this.scene,this.camera),this.stats.update(),this.animationFrame=requestAnimationFrame(this.updateRenderer)},clearObjCache:function(e){e.geometry.dispose(),e.material.dispose()},clearCache:function(){this.renderer.clear(!0,!0,!0),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.context=null,this.renderer.domElement=null,this.scene.dispose()}},Object(r.b)(["resetThreeTipsFun","resetThreeLinkFun"])),created:function(){this.resetThreeTipsFun(""),this.resetThreeLinkFun("camera/autoRotateCamera.vue")},beforeMount:function(){this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.scene=new THREE.Scene,this.camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1e4),this.stats=new a.a,this.helperBox={axesHelper:{helper:new THREE.AxesHelper(1e4)},gridHelper:{helper:new THREE.GridHelper(1500,30,"white","rgb(150, 150, 150)")}}},mounted:function(){this.init(),this.updateRenderer()},beforeDestroy:function(){document.body.removeChild(document.getElementById("three-stats")),this.clearCache(),this.renderer=null,this.camera=null,this.stats=null,this.helperBox=null,this.scene=null,cancelAnimationFrame(this.animationFrame)}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"three-display three-init"},[t("div",{ref:"three-canvas",staticClass:"three-canvas",attrs:{id:"three-canvas"}})])},staticRenderFns:[]};var c=i("VU/8")(h,o,!1,function(e){i("BywO")},"data-v-671f8bfc",null);t.default=c.exports}});