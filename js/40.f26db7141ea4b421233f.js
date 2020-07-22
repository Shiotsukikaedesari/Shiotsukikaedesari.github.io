webpackJsonp([40],{UHFd:function(e,t){},p4VQ:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("Dd8w"),o=i.n(s),n=i("NYxO"),r=i("QLyc"),h=i("BMSc"),a={data:function(){return{tips:"",renderer:"",scene:"",camera:"",stats:"",helperBox:"",lightBox:"",objBox:{stage:"",box:"",cone:"",cylinder:"",sphere:""},clock:"",orbitControls:"",animationFrame:""}},methods:o()({init:function(){this.initRender(),this.initScene(),this.initCamera(),this.initClock(),this.initObj(),this.initLight(),this.initHelper(),this.initStats(),this.initOrbitControls(),this.updateRenderer()},initRender:function(){this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=THREE.PCFSoftShadowMap,this.$refs["three-canvas"].appendChild(this.renderer.domElement),this.renderer.setClearColor("rgb(15, 1, 25)")},initScene:function(){this.scene=new THREE.Scene},initClock:function(){this.clock=new THREE.Clock},initLight:function(){this.lightBox={ambientLight:new THREE.AmbientLight("rgb(255, 255, 255)"),spotLight:new THREE.SpotLight("rgb(255, 255, 255)",1.5)},this.lightBox.spotLight.position.set(220,200,200),this.lightBox.spotLight.castShadow=!0,this.lightBox.spotLight.angle=Math.PI/3,this.scene.add(this.lightBox.spotLight)},initCamera:function(){this.camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1e4),this.camera.position.x=300,this.camera.position.y=200,this.camera.position.z=500,this.camera.up.x=0,this.camera.up.y=1,this.camera.up.z=0,this.camera.lookAt(new THREE.Vector3(0,0,0))},initObj:function(){var e=new THREE.BoxGeometry(200,10,600,4,4),t=new THREE.MeshLambertMaterial({color:"rgb(45, 0, 50)"});this.objBox.stage=new THREE.Mesh(e,t),this.objBox.stage.castShadow=!0,this.objBox.stage.receiveShadow=!0,this.objBox.stage.position.set(0,5,0),this.scene.add(this.objBox.stage),e=new THREE.BoxGeometry(50,50,50,4,4),(t=new THREE.MeshLambertMaterial({color:"rgb(230, 230, 230)"})).emissiveIntensity=10,this.objBox.box=new THREE.Mesh(e,t),this.objBox.box.castShadow=!0,this.objBox.box.receiveShadow=!0,this.objBox.box.position.set(0,30,-150),this.scene.add(this.objBox.box),e=new THREE.ConeGeometry(30,80,4),this.objBox.cone=new THREE.Mesh(e,t),this.objBox.cone.castShadow=!0,this.objBox.cone.receiveShadow=!0,this.objBox.cone.position.set(0,50,-50),this.scene.add(this.objBox.cone),e=new THREE.CylinderGeometry(20,20,80,8),this.objBox.cylinder=new THREE.Mesh(e,t),this.objBox.cylinder.castShadow=!0,this.objBox.cylinder.receiveShadow=!0,this.objBox.cylinder.position.set(0,50,50),this.scene.add(this.objBox.cylinder),e=new THREE.SphereGeometry(20,20,80,6),this.objBox.sphere=new THREE.Mesh(e,t),this.objBox.sphere.castShadow=!0,this.objBox.sphere.receiveShadow=!0,this.objBox.sphere.position.set(0,30,150),this.scene.add(this.objBox.sphere)},initHelper:function(){this.helperBox={axesHelper:{helper:new THREE.AxesHelper(1e4)},gridHelper:{helper:new THREE.GridHelper(1500,30,"white","rgb(150, 150, 150)")},spotLightHelper:{helper:new THREE.SpotLightHelper(this.lightBox.spotLight)}},this.scene.add(this.helperBox.axesHelper.helper)},initStats:function(){this.stats=new r.a,this.stats.setMode(0),this.stats.domElement.id="three-stats",this.stats.domElement.style.position="absolute",this.stats.domElement.style.left="unset",this.stats.domElement.style.right="0px",this.stats.domElement.style.top="0px",document.body.appendChild(this.stats.domElement)},initOrbitControls:function(){this.orbitControls=new h.a(this.camera,this.renderer.domElement),this.orbitControls.autoRotate=!0},animation:function(){},updateRenderer:function(){this.orbitControls.update(this.clock.getDelta()),this.renderer.render(this.scene,this.camera),this.stats.update(),this.animationFrame=requestAnimationFrame(this.updateRenderer)},clearObjCache:function(e){e.geometry.dispose(),e.material.dispose()},clearCache:function(){this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.clear(!0,!0,!0),this.renderer.domElement=null,this.scene.dispose(),this.clearObjCache(this.objBox.stage),this.clearObjCache(this.objBox.box),this.clearObjCache(this.objBox.cone),this.clearObjCache(this.objBox.cylinder),this.clearObjCache(this.objBox.sphere)}},Object(n.b)(["resetThreeTipsFun","resetThreeLinkFun"])),created:function(){this.resetThreeTipsFun("    旋转相机：鼠标左键\n    缩放场景：鼠标滚轮\n    移动相机：鼠标右键 "),this.resetThreeLinkFun("geometry/simpleGeometry.vue")},beforeMount:function(){},mounted:function(){this.init()},beforeDestroy:function(){document.body.removeChild(document.getElementById("three-stats")),this.clearCache(),this.renderer=null,this.scene=null,this.camera=null,this.stats=null,this.helperBox=null,this.objBox=null,this.clock=null,this.orbitControls=null,cancelAnimationFrame(this.animationFrame)}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"three-display three-init"},[t("div",{ref:"three-canvas",staticClass:"three-canvas",attrs:{id:"three-canvas"}})])},staticRenderFns:[]};var l=i("VU/8")(a,c,!1,function(e){i("UHFd")},"data-v-a362cd1a",null);t.default=l.exports}});