webpackJsonp([52],{XkRy:function(e,t){},iGHC:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("Dd8w"),r=i.n(n),a=i("NYxO"),s=i("QLyc"),o=i("BMSc"),h=i("AkSr"),c={data:function(){return{renderer:"",scene:"",camera:"",stats:"",lightBox:"",helperBox:"",objBox:{group:""},clock:"",orbitControls:"",animationFrame:"",gui:"",guiParam:""}},methods:r()({init:function(){this.initRender(),this.initScene(),this.initClock(),this.initCamera(),this.initObj(),this.initLight(),this.initHelper(),this.initStats(),this.initOrbitControls(),this.initGui(),this.updateRenderer()},initRender:function(){this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=THREE.PCFSoftShadowMap,this.$refs["three-canvas"].appendChild(this.renderer.domElement),this.renderer.setClearColor("rgb(15, 1, 25)")},initScene:function(){this.scene=new THREE.Scene},initClock:function(){this.clock=new THREE.Clock},initLight:function(){this.lightBox={ambientLight:new THREE.AmbientLight("rgb(255, 255, 255)")},this.scene.add(this.lightBox.ambientLight)},initCamera:function(){this.camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1e4),this.camera.position.x=650,this.camera.position.y=100,this.camera.position.z=650,this.camera.up.x=0,this.camera.up.y=1,this.camera.up.z=0,this.camera.lookAt(new THREE.Vector3(0,0,0))},initObj:function(){this.objBox.group=new THREE.Group;for(var e=new THREE.BoxBufferGeometry(50,50,50),t=[0,64,128,192,255],i=[-200,-100,0,100,200],n=0;n<i.length;n+=1)for(var r=0;r<i.length;r+=1)for(var a=0;a<i.length;a+=1){var s=new THREE.MeshPhongMaterial({color:"rgb("+t[n]+", "+t[r]+", "+t[a]+")"}),o=new THREE.Mesh(e,s);o.castShadow=!0,o.receiveShadow=!0,o.position.set(i[n],i[r],i[a]),this.objBox.group.add(o)}this.scene.add(this.objBox.group)},initHelper:function(){this.helperBox={axesHelper:{helper:new THREE.AxesHelper(1e4)},gridHelper:{helper:new THREE.GridHelper(1500,30,"white","rgb(150, 150, 150)")}},this.scene.add(this.helperBox.axesHelper.helper),this.scene.add(this.helperBox.gridHelper.helper)},initStats:function(){this.stats=new s.a,this.stats.setMode(0),this.stats.domElement.id="three-stats",this.stats.domElement.style.position="absolute",this.stats.domElement.style.left="unset",this.stats.domElement.style.right="300px",this.stats.domElement.style.top="0px",document.body.appendChild(this.stats.domElement)},initOrbitControls:function(){this.orbitControls=new o.a(this.camera,this.renderer.domElement),this.orbitControls.autoRotate=!0},initGui:function(){var e=this;this.gui=new h.a,this.guiParam={autoCamera:this.orbitControls.autoRotate},this.gui.add(this.guiParam,"autoCamera").onChange(function(t){e.orbitControls.autoRotate=t}),this.gui.add(this.guiParam,"fov",0,180,1).onChange(function(t){e.camera.fov=t,e.camera.updateProjectionMatrix()}),this.gui.add(this.guiParam,"aspect",0,2,.1).onChange(function(t){e.camera.aspect=t,e.camera.updateProjectionMatrix()}),this.gui.add(this.guiParam,"near",0,1e3,10).onChange(function(t){e.camera.near=t,e.camera.updateProjectionMatrix()}),this.gui.add(this.guiParam,"far",1e3,2e3,10).onChange(function(t){e.camera.far=t,e.camera.updateProjectionMatrix()})},animation:function(){},updateRenderer:function(){var e=this.clock.getDelta();this.orbitControls.update(e),this.renderer.render(this.scene,this.camera),this.stats.update(),this.animationFrame=requestAnimationFrame(this.updateRenderer)},clearObjCache:function(e){e.geometry.dispose(),e.material.dispose()},clearCache:function(){var e=this;this.renderer.clear(!0,!0,!0),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement=null,this.objBox.group.children.forEach(function(t){e.clearObjCache(t)}),this.scene.dispose(),this.gui.destroy()}},Object(a.b)(["resetThreeTipsFun","resetThreeLinkFun"])),created:function(){this.resetThreeTipsFun("    旋转相机：鼠标左键\n    缩放场景：鼠标滚轮\n    移动相机：鼠标右键 "),this.resetThreeLinkFun("camera/perspectiveCamera.vue")},mounted:function(){this.init()},beforeDestroy:function(){document.body.removeChild(document.getElementById("three-stats")),this.clearCache(),this.renderer=null,this.scene=null,this.camera=null,this.stats=null,this.lightBox=null,this.helperBox=null,this.clock=null,this.gui=null,cancelAnimationFrame(this.animationFrame)}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"three-display three-init"},[t("div",{ref:"three-canvas",staticClass:"three-canvas",attrs:{id:"three-canvas"}})])},staticRenderFns:[]};var l=i("VU/8")(c,d,!1,function(e){i("XkRy")},"data-v-6ff69874",null);t.default=l.exports}});