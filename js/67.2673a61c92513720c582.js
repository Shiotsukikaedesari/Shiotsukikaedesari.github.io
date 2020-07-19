webpackJsonp([67],{mfVw:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("Dd8w"),o=e.n(n),s=e("NYxO"),h=e("QLyc"),r=e("BMSc"),a=e("AkSr"),l={data:function(){return{renderer:"",scene:"",camera:"",stats:"",lightBox:"",helperBox:"",objBox:{group:""},clock:"",orbitControls:"",animationFrame:"",gui:"",guiParam:""}},methods:o()({init:function(){this.initRender(),this.initScene(),this.initClock(),this.initCamera(),this.initObj(),this.initLight(),this.initHelper(),this.initStats(),this.initOrbitControls(),this.initGui(),this.updateRenderer()},initRender:function(){this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=THREE.PCFSoftShadowMap,this.$refs["three-canvas"].appendChild(this.renderer.domElement),this.renderer.setClearColor("rgb(15, 1, 25)")},initScene:function(){this.scene=new THREE.Scene},initClock:function(){this.clock=new THREE.Clock},initLight:function(){this.lightBox={pointLight:new THREE.PointLight("rgb(255, 255, 255)",3,400,.5)},this.lightBox.pointLight.castShadow=!1,this.scene.add(this.lightBox.pointLight)},initCamera:function(){this.camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1e4),this.camera.position.x=700,this.camera.position.y=0,this.camera.position.z=700,this.camera.up.x=0,this.camera.up.y=1,this.camera.up.z=0,this.camera.lookAt(new THREE.Vector3(0,0,0))},initObj:function(){this.objBox.group=new THREE.Group;for(var t=new THREE.BoxBufferGeometry(50,50,50),i=[0,64,128,192,255],e=[-200,-100,0,100,200],n=0;n<e.length;n+=1)for(var o=0;o<e.length;o+=1)for(var s=0;s<e.length;s+=1){var h=new THREE.MeshStandardMaterial({color:"rgb("+i[n]+", "+i[o]+", "+i[s]+")",roughness:0,metalness:0}),r=new THREE.Mesh(t,h);r.castShadow=!0,r.receiveShadow=!0,r.position.set(e[n],e[o],e[s]),this.objBox.group.add(r)}this.scene.add(this.objBox.group)},initHelper:function(){this.helperBox={axesHelper:{helper:new THREE.AxesHelper(1e4)},gridHelper:{helper:new THREE.GridHelper(1500,30,"white","rgb(150, 150, 150)")},pointLightHelper:{helper:new THREE.PointLightHelper(this.lightBox.pointLight,200)}},this.scene.add(this.helperBox.pointLightHelper.helper)},initStats:function(){this.stats=new h.a,this.stats.setMode(0),this.stats.domElement.id="three-stats",this.stats.domElement.style.position="absolute",this.stats.domElement.style.left="unset",this.stats.domElement.style.right="300px",this.stats.domElement.style.top="0px",document.body.appendChild(this.stats.domElement)},initOrbitControls:function(){this.orbitControls=new r.a(this.camera,this.renderer.domElement),this.orbitControls.autoRotate=!0},initGui:function(){var t=this;this.gui=new a.a({name:"pointLight Controller"}),this.guiParam={autoCamera:this.orbitControls.autoRotate,castShadow:this.lightBox.pointLight.castShadow,color:this.lightBox.pointLight.color.getHex(),intensity:this.lightBox.pointLight.intensity,distance:this.lightBox.pointLight.distance,decay:this.lightBox.pointLight.decay,positionX:this.lightBox.pointLight.position.x,positionY:this.lightBox.pointLight.position.y,positionZ:this.lightBox.pointLight.position.z},this.gui.add(this.guiParam,"autoCamera").onChange(function(i){t.orbitControls.autoRotate=i}),this.gui.add(this.guiParam,"castShadow").onChange(function(i){t.lightBox.pointLight.castShadow=i}),this.gui.addColor(this.guiParam,"color",-500,500).onChange(function(i){t.lightBox.pointLight.color.setHex(i),t.helperBox.pointLight.helper.update()}),this.gui.add(this.guiParam,"intensity",0,10).onChange(function(i){t.lightBox.pointLight.intensity=i,t.helperBox.pointLight.helper.update()}),this.gui.add(this.guiParam,"distance",0,600).onChange(function(i){t.lightBox.pointLight.distance=i,t.helperBox.pointLight.helper.update()}),this.gui.add(this.guiParam,"decay",0,5).onChange(function(i){t.lightBox.pointLight.decay=i,t.helperBox.pointLight.helper.update()}),this.gui.add(this.guiParam,"positionX",-500,500).onChange(function(i){t.lightBox.pointLight.position.x=i}),this.gui.add(this.guiParam,"positionY",-500,500).onChange(function(i){t.lightBox.pointLight.position.y=i}),this.gui.add(this.guiParam,"positionZ",-500,500).onChange(function(i){t.lightBox.pointLight.position.x=i})},animation:function(){},updateRenderer:function(){var t=this.clock.getDelta();this.orbitControls.update(t),this.renderer.render(this.scene,this.camera),this.stats.update(),this.animationFrame=requestAnimationFrame(this.updateRenderer)},clearObjCache:function(t){t.geometry.dispose(),t.material.dispose()},clearCache:function(){var t=this;this.renderer.clear(!0,!0,!0),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement=null,this.objBox.group.children.forEach(function(i){t.clearObjCache(i)}),this.scene.dispose(),this.gui.destroy()}},Object(s.b)(["resetThreeTipsFun","resetThreeLinkFun"])),created:function(){this.resetThreeTipsFun("    旋转相机：鼠标左键\n    缩放场景：鼠标滚轮\n    移动相机：鼠标右键 "),this.resetThreeLinkFun("light/pointLight.vue")},mounted:function(){this.init()},beforeDestroy:function(){document.body.removeChild(document.getElementById("three-stats")),this.clearCache(),this.renderer=null,this.scene=null,this.camera=null,this.stats=null,this.lightBox=null,this.helperBox=null,this.clock=null,this.gui=null,cancelAnimationFrame(this.animationFrame)}},d={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"three-display three-init"},[i("div",{ref:"three-canvas",staticClass:"three-canvas",attrs:{id:"three-canvas"}})])},staticRenderFns:[]};var c=e("VU/8")(l,d,!1,function(t){e("sSOt")},"data-v-057b860a",null);i.default=c.exports},sSOt:function(t,i){}});