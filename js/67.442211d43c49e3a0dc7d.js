webpackJsonp([67],{AFrR:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Dd8w"),s=i.n(n),r=i("NYxO"),o=i("QLyc"),a=i("BMSc"),h=i("AkSr"),l={data:function(){return{renderer:"",scene:"",camera:"",stats:"",lightBox:"",helperBox:"",objBox:{group:""},clock:"",orbitControls:"",animationFrame:"",gui:"",guiParam:""}},methods:s()({init:function(){this.initRender(),this.initScene(),this.initClock(),this.initCamera(),this.initObj(),this.initLight(),this.initHelper(),this.initStats(),this.initOrbitControls(),this.initGui(),this.updateRenderer()},initRender:function(){this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=THREE.PCFSoftShadowMap,this.$refs["three-canvas"].appendChild(this.renderer.domElement),this.renderer.setClearColor("rgb(15, 1, 25)")},initScene:function(){this.scene=new THREE.Scene},initClock:function(){this.clock=new THREE.Clock},initLight:function(){this.lightBox={ambientLight:new THREE.AmbientLight("rgb(255, 255, 255)")},this.scene.add(this.lightBox.ambientLight)},initCamera:function(){this.camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1e4),this.camera.position.x=650,this.camera.position.y=0,this.camera.position.z=650,this.camera.up.x=0,this.camera.up.y=1,this.camera.up.z=0,this.camera.lookAt(new THREE.Vector3(0,0,0))},initObj:function(){this.objBox.group=new THREE.Group;for(var t=new THREE.BoxBufferGeometry(50,50,50),e=[0,64,128,192,255],i=[-200,-100,0,100,200],n=0;n<i.length;n+=1)for(var s=0;s<i.length;s+=1)for(var r=0;r<i.length;r+=1){var o=new THREE.MeshPhongMaterial({color:"rgb("+e[n]+", "+e[s]+", "+e[r]+")"}),a=new THREE.Mesh(t,o);a.castShadow=!0,a.receiveShadow=!0,a.position.set(i[n],i[s],i[r]),this.objBox.group.add(a)}this.scene.add(this.objBox.group)},initHelper:function(){this.helperBox={axesHelper:{helper:new THREE.AxesHelper(1e4)},gridHelper:{helper:new THREE.GridHelper(1500,30,"white","rgb(150, 150, 150)")}}},initStats:function(){this.stats=new o.a,this.stats.setMode(0),this.stats.domElement.id="three-stats",this.stats.domElement.style.position="absolute",this.stats.domElement.style.left="unset",this.stats.domElement.style.right="300px",this.stats.domElement.style.top="0px",document.body.appendChild(this.stats.domElement)},initOrbitControls:function(){this.orbitControls=new a.a(this.camera,this.renderer.domElement),this.orbitControls.autoRotate=!0},initGui:function(){var t=this;this.gui=new h.a,this.guiParam={autoCamera:this.orbitControls.autoRotate,color:this.lightBox.ambientLight.color.getHex(),intensity:1},this.gui.add(this.guiParam,"autoCamera").onChange(function(e){t.orbitControls.autoRotate=e}),this.gui.addColor(this.guiParam,"color").onChange(function(e){t.lightBox.ambientLight.color.setHex(e)}),this.gui.add(this.guiParam,"intensity",0,10).onChange(function(e){t.lightBox.ambientLight.intensity=e})},animation:function(){},updateRenderer:function(){var t=this.clock.getDelta();this.orbitControls.update(t),this.renderer.render(this.scene,this.camera),this.stats.update(),this.animationFrame=requestAnimationFrame(this.updateRenderer)},clearObjCache:function(t){t.geometry.dispose(),t.material.dispose()},clearCache:function(){var t=this;this.renderer.clear(!0,!0,!0),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement=null,this.objBox.group.children.forEach(function(e){t.clearObjCache(e)}),this.scene.dispose(),this.gui.destroy()}},Object(r.b)(["resetThreeTipsFun","resetThreeLinkFun"])),created:function(){this.resetThreeTipsFun("    旋转相机：鼠标左键\n    缩放场景：鼠标滚轮\n    移动相机：鼠标右键 "),this.resetThreeLinkFun("light/ambientLight.vue")},mounted:function(){this.init()},beforeDestroy:function(){document.body.removeChild(document.getElementById("three-stats")),this.clearCache(),this.renderer=null,this.scene=null,this.camera=null,this.stats=null,this.lightBox=null,this.helperBox=null,this.clock=null,this.gui=null,cancelAnimationFrame(this.animationFrame)}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"three-display three-init"},[e("div",{ref:"three-canvas",staticClass:"three-canvas",attrs:{id:"three-canvas"}})])},staticRenderFns:[]};var d=i("VU/8")(l,c,!1,function(t){i("slGY")},"data-v-028b035e",null);e.default=d.exports},slGY:function(t,e){}});