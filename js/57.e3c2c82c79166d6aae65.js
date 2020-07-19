webpackJsonp([57],{"2De7":function(e,t){},"SE/Y":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o("Dd8w"),s=o.n(i),n=o("NYxO"),r=o("QLyc"),h=o("BMSc"),a={data:function(){return{tips:"",renderer:"",scene:"",camera:"",stats:"",helperBox:"",lightBox:"",objBox:{stage:"",dodecahedron:"",icosahedron:"",octahedron:"",tetrahedron:""},clock:"",orbitControls:"",animationFrame:""}},methods:s()({init:function(){this.initRender(),this.initScene(),this.initCamera(),this.initClock(),this.initObj(),this.initLight(),this.initHelper(),this.initStats(),this.initOrbitControls(),this.updateRenderer()},initRender:function(){this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=THREE.PCFSoftShadowMap,this.$refs["three-canvas"].appendChild(this.renderer.domElement),this.renderer.setClearColor("rgb(15, 1, 25)")},initScene:function(){this.scene=new THREE.Scene},initClock:function(){this.clock=new THREE.Clock},initLight:function(){this.lightBox={ambientLight:new THREE.AmbientLight("rgb(255, 255, 255)"),spotLight:new THREE.SpotLight("rgb(255, 255, 255)",1.5)},this.lightBox.spotLight.position.set(220,250,200),this.lightBox.spotLight.castShadow=!0,this.lightBox.spotLight.angle=Math.PI/3,this.scene.add(this.lightBox.spotLight)},initCamera:function(){this.camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1e4),this.camera.position.x=350,this.camera.position.y=200,this.camera.position.z=350,this.camera.up.x=0,this.camera.up.y=1,this.camera.up.z=0,this.camera.lookAt(new THREE.Vector3(0,0,0))},initObj:function(){var e=new THREE.BoxGeometry(400,10,400,4,4),t=new THREE.MeshLambertMaterial({color:"rgb(45, 0, 50)"});this.objBox.stage=new THREE.Mesh(e,t),this.objBox.stage.castShadow=!0,this.objBox.stage.receiveShadow=!0,this.objBox.stage.position.set(0,5,0),this.scene.add(this.objBox.stage),e=new THREE.DodecahedronGeometry(40,0),t=new THREE.MeshLambertMaterial({color:"rgb(230, 230, 230)"}),this.objBox.dodecahedron=new THREE.Mesh(e,t),this.objBox.dodecahedron.castShadow=!0,this.objBox.dodecahedron.receiveShadow=!0,this.objBox.dodecahedron.position.set(0,55,-100),this.scene.add(this.objBox.dodecahedron),e=new THREE.IcosahedronGeometry(40,0),this.objBox.icosahedron=new THREE.Mesh(e,t),this.objBox.icosahedron.castShadow=!0,this.objBox.icosahedron.receiveShadow=!0,this.objBox.icosahedron.position.set(100,55,0),this.scene.add(this.objBox.icosahedron),e=new THREE.OctahedronGeometry(40,0),this.objBox.octahedron=new THREE.Mesh(e,t),this.objBox.octahedron.castShadow=!0,this.objBox.octahedron.receiveShadow=!0,this.objBox.octahedron.position.set(-100,55,0),this.scene.add(this.objBox.octahedron),e=new THREE.TetrahedronGeometry(40,0),this.objBox.tetrahedron=new THREE.Mesh(e,t),this.objBox.tetrahedron.castShadow=!0,this.objBox.tetrahedron.receiveShadow=!0,this.objBox.tetrahedron.position.set(0,50,100),this.scene.add(this.objBox.tetrahedron)},initHelper:function(){this.helperBox={axesHelper:{helper:new THREE.AxesHelper(1e4)},gridHelper:{helper:new THREE.GridHelper(1500,30,"white","rgb(150, 150, 150)")},spotLightHelper:{helper:new THREE.SpotLightHelper(this.lightBox.spotLight)}},this.scene.add(this.helperBox.axesHelper.helper)},initStats:function(){this.stats=new r.a,this.stats.setMode(0),this.stats.domElement.id="three-stats",this.stats.domElement.style.position="absolute",this.stats.domElement.style.left="unset",this.stats.domElement.style.right="0px",this.stats.domElement.style.top="0px",document.body.appendChild(this.stats.domElement)},initOrbitControls:function(){this.orbitControls=new h.a(this.camera,this.renderer.domElement),this.orbitControls.autoRotate=!0},animation:function(e){this.objBox.dodecahedron.rotation.x+=e,this.objBox.icosahedron.rotation.y+=e,this.objBox.tetrahedron.rotation.z+=e,this.objBox.octahedron.rotation.x+=e},updateRenderer:function(){var e=this.clock.getDelta();this.orbitControls.update(e),this.animation(e),this.renderer.render(this.scene,this.camera),this.stats.update(),this.animationFrame=requestAnimationFrame(this.updateRenderer)},clearObjCache:function(e){e.geometry.dispose(),e.material.dispose()},clearCache:function(){this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.clear(!0,!0,!0),this.renderer.context=null,this.renderer.domElement=null,this.scene.dispose(),this.clearObjCache(this.objBox.stage),this.clearObjCache(this.objBox.dodecahedron),this.clearObjCache(this.objBox.icosahedron),this.clearObjCache(this.objBox.octahedron),this.clearObjCache(this.objBox.tetrahedron)}},Object(n.b)(["resetThreeTipsFun","resetThreeLinkFun"])),created:function(){this.resetThreeTipsFun("    旋转相机：鼠标左键\n    缩放场景：鼠标滚轮\n    移动相机：鼠标右键 "),this.resetThreeLinkFun("geometry/complexGeometry.vue")},beforeMount:function(){},mounted:function(){this.init()},beforeDestroy:function(){document.body.removeChild(document.getElementById("three-stats")),this.clearCache(),this.renderer=null,this.scene=null,this.camera=null,this.stats=null,this.helperBox=null,this.objBox=null,this.clock=null,this.orbitControls=null,cancelAnimationFrame(this.animationFrame)}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"three-display three-init"},[t("div",{ref:"three-canvas",staticClass:"three-canvas",attrs:{id:"three-canvas"}})])},staticRenderFns:[]};var c=o("VU/8")(a,d,!1,function(e){o("2De7")},"data-v-340c6324",null);t.default=c.exports}});