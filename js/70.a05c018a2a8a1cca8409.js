webpackJsonp([70],{"286C":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("Dd8w"),o=e.n(n),r=e("NYxO"),s=e("QLyc"),h=e("BMSc"),a=e("AkSr"),l={data:function(){return{renderer:"",scene:"",camera:"",stats:"",lightBox:"",helperBox:"",objBox:{group:""},clock:"",orbitControls:"",animationFrame:"",gui:"",guiParam:""}},methods:o()({init:function(){this.initRender(),this.initScene(),this.initClock(),this.initCamera(),this.initObj(),this.initLight(),this.initHelper(),this.initStats(),this.initOrbitControls(),this.initGui(),this.updateRenderer()},initRender:function(){this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=THREE.PCFSoftShadowMap,this.$refs["three-canvas"].appendChild(this.renderer.domElement),this.renderer.setClearColor("rgb(15, 1, 25)")},initScene:function(){this.scene=new THREE.Scene},initClock:function(){this.clock=new THREE.Clock},initLight:function(){this.lightBox={ambientLight:new THREE.AmbientLight("rgb(255, 255, 255)"),directionalLight:new THREE.DirectionalLight("rgb(255, 255, 255)",1)},this.lightBox.directionalLight.position.set(0,300,0),this.lightBox.directionalLight.castShadow=!0,this.scene.add(this.lightBox.directionalLight)},initCamera:function(){this.camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1e4),this.camera.position.x=400,this.camera.position.y=800,this.camera.position.z=400,this.camera.up.x=0,this.camera.up.y=1,this.camera.up.z=0,this.camera.lookAt(new THREE.Vector3(0,0,0))},initObj:function(){this.objBox.group=new THREE.Group;for(var t=new THREE.BoxBufferGeometry(50,50,50),i=[0,64,128,192,255],e=[-200,-100,0,100,200],n=0;n<e.length;n+=1)for(var o=0;o<e.length;o+=1)for(var r=0;r<e.length;r+=1){var s=new THREE.MeshPhongMaterial({color:"rgb("+i[n]+", "+i[o]+", "+i[r]+")",roughness:0}),h=new THREE.Mesh(t,s);h.castShadow=!0,h.receiveShadow=!0,h.position.set(e[n],e[o],e[r]),this.objBox.group.add(h)}this.scene.add(this.objBox.group)},initHelper:function(){this.helperBox={axesHelper:{helper:new THREE.AxesHelper(1e4)},gridHelper:{helper:new THREE.GridHelper(1500,30,"white","rgb(150, 150, 150)")},directionalLightHelper:{helper:new THREE.DirectionalLightHelper(this.lightBox.directionalLight,200)}},this.scene.add(this.helperBox.directionalLightHelper.helper)},initStats:function(){this.stats=new s.a,this.stats.setMode(0),this.stats.domElement.id="three-stats",this.stats.domElement.style.position="absolute",this.stats.domElement.style.left="unset",this.stats.domElement.style.right="300px",this.stats.domElement.style.top="0px",document.body.appendChild(this.stats.domElement)},initOrbitControls:function(){this.orbitControls=new h.a(this.camera,this.renderer.domElement),this.orbitControls.autoRotate=!0},initGui:function(){var t=this;this.gui=new a.a({name:"AmbientLight Controller"}),this.guiParam={autoCamera:this.orbitControls.autoRotate,color:this.lightBox.directionalLight.color.getHex(),intensity:this.lightBox.directionalLight.intensity,positionX:this.lightBox.directionalLight.position.x,positionY:this.lightBox.directionalLight.position.y,positionZ:this.lightBox.directionalLight.position.z},this.gui.add(this.guiParam,"autoCamera").onChange(function(i){t.orbitControls.autoRotate=i}),this.gui.addColor(this.guiParam,"color",-500,500).onChange(function(i){t.lightBox.directionalLight.color.setHex(i),t.helperBox.directionalLightHelper.helper.update()}),this.gui.add(this.guiParam,"intensity",0,10).onChange(function(i){t.lightBox.directionalLight.intensity=i,t.helperBox.directionalLightHelper.helper.update()}),this.gui.add(this.guiParam,"positionX",-400,400).onChange(function(i){t.lightBox.directionalLight.position.x=i,t.helperBox.directionalLightHelper.helper.update()}),this.gui.add(this.guiParam,"positionY",-400,400).onChange(function(i){t.lightBox.directionalLight.position.y=i,t.helperBox.directionalLightHelper.helper.update()}),this.gui.add(this.guiParam,"positionZ",-400,400).onChange(function(i){t.lightBox.directionalLight.position.z=i,t.helperBox.directionalLightHelper.helper.update()})},animation:function(){},updateRenderer:function(){var t=this.clock.getDelta();this.orbitControls.update(t),this.renderer.render(this.scene,this.camera),this.stats.update(),this.animationFrame=requestAnimationFrame(this.updateRenderer)},clearObjCache:function(t){t.geometry.dispose(),t.material.dispose()},clearCache:function(){var t=this;this.renderer.clear(!0,!0,!0),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement=null,this.objBox.group.children.forEach(function(i){t.clearObjCache(i)}),this.scene.dispose(),this.gui.destroy()}},Object(r.b)(["resetThreeTipsFun","resetThreeLinkFun"])),created:function(){this.resetThreeTipsFun("    旋转相机：鼠标左键\n    缩放场景：鼠标滚轮\n    移动相机：鼠标右键 "),this.resetThreeLinkFun("light/ambientLight.vue")},mounted:function(){this.init()},beforeDestroy:function(){document.body.removeChild(document.getElementById("three-stats")),this.clearCache(),this.renderer=null,this.scene=null,this.camera=null,this.stats=null,this.lightBox=null,this.helperBox=null,this.clock=null,this.gui=null,cancelAnimationFrame(this.animationFrame)}},c={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"three-display three-init"},[i("div",{ref:"three-canvas",staticClass:"three-canvas",attrs:{id:"three-canvas"}})])},staticRenderFns:[]};var d=e("VU/8")(l,c,!1,function(t){e("qWq9")},"data-v-20c4fcde",null);i.default=d.exports},qWq9:function(t,i){}});