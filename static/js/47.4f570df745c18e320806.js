webpackJsonp([47],{jJ7f:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i("Dd8w"),n=i.n(o),a=i("NYxO"),s=i("QLyc"),r=i("BMSc"),h=i("AkSr"),c={data:function(){return{renderer:"",scene:"",camera:"",stats:"",lightBox:"",helperBox:"",objBox:{stage:"",box:"",sphere:"",torusKnot:"",icosahedron:""},mapBox:"",clock:"",orbitControls:"",animationFrame:"",gui:"",guiParam:"",pageDestory:!1}},methods:n()({init:function(){this.initManager(),this.initRender(),this.initScene(),this.initLoader(),this.initClock(),this.initCamera(),this.initLight(),this.initObj(),this.initHelper(),this.initStats(),this.initOrbitControls(),this.initGui(),this.updateRenderer()},initRender:function(){this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=THREE.PCFSoftShadowMap,this.$refs["three-canvas"].appendChild(this.renderer.domElement),this.renderer.setClearColor("rgb(15, 1, 25)")},initScene:function(){this.scene=new THREE.Scene,this.scene.fog=new THREE.Fog,this.scene.fog.color.setHex("rgb(55, 55, 55)"),this.scene.fog.near=1,this.scene.fog.far=450},initClock:function(){this.clock=new THREE.Clock},initLight:function(){this.lightBox={pointLight:new THREE.PointLight("rgb(255, 255, 255)",2,300,.5)},this.lightBox.pointLight.castShadow=!0,this.lightBox.pointLight.position.set(0,50,0),this.scene.add(this.lightBox.pointLight)},initCamera:function(){this.camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1e3),this.camera.position.x=150,this.camera.position.y=50,this.camera.position.z=150,this.camera.up.x=0,this.camera.up.y=1,this.camera.up.z=0,this.camera.lookAt(new THREE.Vector3(0,0,0))},initManager:function(){var e,t,i=this,o=0;this.managerBox={textureManager:new THREE.LoadingManager,mapManager:new THREE.LoadingManager},e="textureManager",(t=this.managerBox.textureManager).onStart=function(t,n,a){o+=25;var s=new THREE.BoxBufferGeometry(200,20,20,4,4),r=new THREE.MeshNormalMaterial;i.objBox[e]=new THREE.Mesh(s,r),i.objBox[e].position.set(0,o,0),i.objBox[e].scale.x=.01,i.scene.add(i.objBox[e]),i.objBox[e+"BoxLine"]=new THREE.LineSegments(new THREE.EdgesGeometry(s),new THREE.LineBasicMaterial({color:16777215})),i.objBox[e+"BoxLine"].position.set(0,o,0),i.scene.add(i.objBox[e+"BoxLine"])},t.onLoad=function(){i.scene.remove(i.objBox[e]),i.clearObjCache(i.objBox[e]),i.scene.remove(i.objBox[e+"BoxLine"]),i.clearObjCache(i.objBox[e+"BoxLine"])},t.onProgress=function(t,o,n){i.objBox[e].scale.x=o/n},t.onError=function(t){i.objBox&&i.objBox[e+"BoxLine"].material.color.setHex("rgb(255, 0, 0)")}},initLoader:function(){var e=this,t=new THREE.CubeTextureLoader(this.managerBox.textureManager);t.setPath("/static/three/skybox/"),t.load(["px.png","nx.png","py.png","ny.png","pz.png","nz.png"],function(t){t.minFilter=THREE.LinearFilter,e.mapBox.envMap=t,e.scene.background=t,e.objBox.stage.material.envMap=t,e.objBox.stage.material.needsUpdate=!0,e.objBox.box.material.envMap=t,e.objBox.box.material.needsUpdate=!0}),new THREE.TextureLoader(this.managerBox.textureManager).load("/static/three/texture/1.jpg",function(t){e.mapBox.map=t,t.wrapS=THREE.RepeatWrapping,t.wrapT=THREE.RepeatWrapping,t.repeat.set(2,2),e.objBox.box.material.map=t,e.objBox.box.material.needsUpdate=!0}),this.mapBox={envMap:"",map:""}},initObj:function(){var e=new THREE.BoxGeometry(1e3,10,1e3,4,4),t=new THREE.MeshStandardMaterial({color:"rgb(200, 200, 200)",roughness:.5,metalness:0,envMap:this.scene.background});this.objBox.stage=new THREE.Mesh(e,t),this.objBox.stage.castShadow=!0,this.objBox.stage.receiveShadow=!0,this.objBox.stage.position.set(0,5,0),this.scene.add(this.objBox.stage),e=new THREE.SphereGeometry(25,18,18,8),(t=new THREE.MeshLambertMaterial({color:"rgb(230, 230, 230)",envMap:this.mapBox.envMap,map:this.mapBox.map,reflectivity:.7,emissive:"rgb(50, 50, 50)"})).transparent=!0,this.objBox.sphere=new THREE.Mesh(e,t),this.objBox.sphere.castShadow=!0,this.objBox.sphere.receiveShadow=!0,this.objBox.sphere.position.set(0,35,100),this.scene.add(this.objBox.sphere),e=new THREE.BoxGeometry(50,50,50,1,1),this.objBox.box=new THREE.Mesh(e,t),this.objBox.box.castShadow=!0,this.objBox.box.receiveShadow=!0,this.objBox.box.position.set(100,35,0),this.scene.add(this.objBox.box),e=new THREE.TorusKnotGeometry(16,4,100,12,2,3),this.objBox.torusKnot=new THREE.Mesh(e,t),this.objBox.torusKnot.castShadow=!0,this.objBox.torusKnot.receiveShadow=!0,this.objBox.torusKnot.position.set(-100,35,0),this.scene.add(this.objBox.torusKnot),e=new THREE.IcosahedronGeometry(30),this.objBox.icosahedron=new THREE.Mesh(e,t),this.objBox.icosahedron.castShadow=!0,this.objBox.icosahedron.receiveShadow=!0,this.objBox.icosahedron.position.set(0,35,-100),this.scene.add(this.objBox.icosahedron)},initHelper:function(){this.helperBox={axesHelper:{helper:new THREE.AxesHelper(1e4)},gridHelper:{helper:new THREE.GridHelper(1500,30,"white","rgb(150, 150, 150)")},pointLightHelper:{helper:new THREE.PointLightHelper(this.lightBox.pointLight,20)}},this.scene.add(this.helperBox.pointLightHelper.helper)},initStats:function(){this.stats=new s.a,this.stats.setMode(0),this.stats.domElement.id="three-stats",this.stats.domElement.style.position="absolute",this.stats.domElement.style.left="unset",this.stats.domElement.style.right="300px",this.stats.domElement.style.top="0px",document.body.appendChild(this.stats.domElement)},initOrbitControls:function(){this.orbitControls=new r.a(this.camera,this.renderer.domElement),this.orbitControls.autoRotate=!0,this.orbitControls.target=new THREE.Vector3(0,30,0)},initGui:function(){var e=this;this.gui=new h.a,this.guiParam={showFog:!0,fogColor:this.scene.fog.color.getHex(),fogNear:this.scene.fog.near,fogFar:this.scene.fog.far,castShadow:this.lightBox.pointLight.castShadow,lightColor:this.lightBox.pointLight.color.getHex(),intensity:this.lightBox.pointLight.intensity,distance:this.lightBox.pointLight.distance,decay:this.lightBox.pointLight.decay,positionX:this.lightBox.pointLight.position.x,positionZ:this.lightBox.pointLight.position.z,materialColor:this.objBox.box.material.color.getHex(),opacity:this.objBox.box.material.opacity,showEnvMap:!0,reflectivity:this.objBox.box.material.reflectivity,showMap:!0,wireframe:this.objBox.box.material.wireframe,emissive:this.objBox.box.material.emissive.getHex(),emissiveIntensity:this.objBox.box.material.emissiveIntensity};var t=this.gui.addFolder("fog setting");t.add(this.guiParam,"showFog").onChange(function(t){t?(e.scene.fog=new THREE.Fog,e.scene.fog.color.setHex("rgb(55, 55, 55)"),e.scene.fog.near=1,e.scene.fog.far=400):e.scene.fog=null}),t.addColor(this.guiParam,"fogColor").onChange(function(t){e.scene.fog.color.setHex(t)}),t.add(this.guiParam,"fogNear",1,500,1).onChange(function(t){e.scene.fog.near=t}),t.add(this.guiParam,"fogFar",300,1500,1).onChange(function(t){e.scene.fog.far=t}),t.open();var i=this.gui.addFolder("Light setting");i.add(this.guiParam,"castShadow").onChange(function(t){e.lightBox.pointLight.castShadow=t}),i.addColor(this.guiParam,"lightColor",-500,500,1).onChange(function(t){e.lightBox.pointLight.color.setHex(t),e.helperBox.pointLightHelper.helper.update()}),i.add(this.guiParam,"intensity",0,10,.1).onChange(function(t){e.lightBox.pointLight.intensity=t,e.helperBox.pointLightHelper.helper.update()}),i.add(this.guiParam,"distance",0,600,1).onChange(function(t){e.lightBox.pointLight.distance=t,e.helperBox.pointLightHelper.helper.update()}),i.add(this.guiParam,"decay",0,5).onChange(function(t){e.lightBox.pointLight.decay=t,e.helperBox.pointLightHelper.helper.update()}),i.add(this.guiParam,"positionX",-500,500,1).onChange(function(t){e.lightBox.pointLight.position.x=t}),i.add(this.guiParam,"positionZ",-500,500,1).onChange(function(t){e.lightBox.pointLight.position.x=t}),i.open();var o=this.gui.addFolder("material Setting");o.addColor(this.guiParam,"materialColor").onChange(function(t){e.objBox.box.material.color.setHex(t)}),o.add(this.guiParam,"opacity",0,1,.1).onChange(function(t){e.objBox.box.material.opacity=t}),o.add(this.guiParam,"showEnvMap").onChange(function(t){t?(e.objBox.box.material.envMap=e.scene.background,e.objBox.box.material.needsUpdate=!0):(e.objBox.box.material.envMap=null,e.objBox.box.material.needsUpdate=!0)}),o.add(this.guiParam,"reflectivity",0,1,.1).onChange(function(t){e.objBox.box.material.reflectivity=t}),o.add(this.guiParam,"showMap").onChange(function(t){t?(e.objBox.box.material.map=e.mapBox.map,e.objBox.box.material.needsUpdate=!0):(e.objBox.box.material.map=null,e.objBox.box.material.needsUpdate=!0)}),o.add(this.guiParam,"wireframe").onChange(function(t){e.objBox.box.material.wireframe=t}),o.addColor(this.guiParam,"emissive").onChange(function(t){e.objBox.box.material.emissive.setHex(t)}),o.add(this.guiParam,"emissiveIntensity",0,2,.01).onChange(function(t){e.objBox.box.material.emissiveIntensity=t}),o.open()},animation:function(){var e=.001*new Date;this.lightBox.pointLight.position.y=30*Math.sin(e)+60},updateRenderer:function(){var e=this.clock.getDelta();this.orbitControls.update(e),this.animation(),this.renderer.render(this.scene,this.camera),this.stats.update(),this.animationFrame=requestAnimationFrame(this.updateRenderer)},clearObjCache:function(e){e.geometry.dispose(),e.material.dispose()},clearCache:function(){this.renderer.clear(!0,!0,!0),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement=null,this.clearObjCache(this.objBox.stage),this.clearObjCache(this.objBox.box),this.clearObjCache(this.objBox.sphere),this.clearObjCache(this.objBox.icosahedron),this.mapBox.envMap.dispose(),this.mapBox.map.dispose(),this.pageDestory=!0,this.scene.dispose(),this.gui.destroy()}},Object(a.b)(["resetThreeTipsFun","resetThreeLinkFun"])),created:function(){this.resetThreeTipsFun("    旋转相机：鼠标左键\n    缩放场景：鼠标滚轮\n    移动相机：鼠标右键 "),this.resetThreeLinkFun("material/meshBasicMaterial.vue")},mounted:function(){this.init()},beforeDestroy:function(){document.body.removeChild(document.getElementById("three-stats")),this.clearCache(),this.renderer=null,this.scene=null,this.camera=null,this.stats=null,this.lightBox=null,this.helperBox=null,this.clock=null,this.gui=null,cancelAnimationFrame(this.animationFrame)}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"three-display three-init"},[t("div",{ref:"three-canvas",staticClass:"three-canvas",attrs:{id:"three-canvas"}})])},staticRenderFns:[]};var d=i("VU/8")(c,l,!1,function(e){i("lWkp")},"data-v-3c0bd560",null);t.default=d.exports},lWkp:function(e,t){}});