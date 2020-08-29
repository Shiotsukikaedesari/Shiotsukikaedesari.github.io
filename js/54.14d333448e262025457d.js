webpackJsonp([54],{"98QO":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("Dd8w"),s=i.n(n),r=i("NYxO"),o=i("QLyc"),a=i("BMSc"),h=i("AkSr"),c={data:function(){return{renderer:"",scene:"",camera:"",stats:"",raycaster:"",mouse:"",mousemoveStatus:!1,lightBox:"",helperBox:"",objBox:{group:""},clock:"",orbitControls:"",animationFrame:"",gui:"",guiParam:""}},methods:s()({init:function(){this.initRender(),this.initScene(),this.initClock(),this.initCamera(),this.initObj(),this.initLight(),this.initHelper(),this.initRaycasterAndMouse(),this.initStats(),this.initOrbitControls(),this.initGui(),this.updateRenderer()},initRender:function(){this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=THREE.PCFSoftShadowMap,this.$refs["three-canvas"].appendChild(this.renderer.domElement),this.renderer.setClearColor("rgb(15, 1, 25)")},initScene:function(){this.scene=new THREE.Scene},initClock:function(){this.clock=new THREE.Clock},initLight:function(){this.lightBox={ambientLight:new THREE.AmbientLight("rgb(255, 255, 255)")},this.scene.add(this.lightBox.ambientLight)},initCamera:function(){this.camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1e4),this.camera.position.x=650,this.camera.position.y=0,this.camera.position.z=650,this.camera.up.x=0,this.camera.up.y=1,this.camera.up.z=0,this.camera.lookAt(new THREE.Vector3(0,0,0))},initObj:function(){this.objBox.group=new THREE.Group;for(var e=new THREE.OctahedronBufferGeometry(20),t=[-200,-150,-100,-50,0,50,100,150,200],i=0;i<t.length;i+=1)for(var n=0;n<t.length;n+=1)for(var s=0;s<t.length;s+=1){var r=new THREE.MeshPhongMaterial({color:"rgb(255, 255, 255)"}),o=new THREE.Mesh(e,r);o.name=""+i+n+s,console.log(o.name),o.castShadow=!0,o.receiveShadow=!0,o.position.set(t[i],t[n],t[s]),this.objBox.group.add(o)}this.scene.add(this.objBox.group)},initHelper:function(){this.helperBox={axesHelper:{helper:new THREE.AxesHelper(1e4)},gridHelper:{helper:new THREE.GridHelper(1500,30,"white","rgb(150, 150, 150)")}}},initRaycasterAndMouse:function(){this.raycaster=new THREE.Raycaster,this.mouse=new THREE.Vector2},mousemove:function(e){this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-e.clientY/window.innerHeight*2+1,this.mousemoveStatus=!0},initStats:function(){this.stats=new o.a,this.stats.setMode(0),this.stats.domElement.id="three-stats",this.stats.domElement.style.position="absolute",this.stats.domElement.style.left="unset",this.stats.domElement.style.right="300px",this.stats.domElement.style.top="0px",document.body.appendChild(this.stats.domElement)},initOrbitControls:function(){this.orbitControls=new a.a(this.camera,this.renderer.domElement),this.orbitControls.autoRotate=!1},initGui:function(){var e=this;this.gui=new h.a,this.guiParam={autoCamera:this.orbitControls.autoRotate},this.gui.add(this.guiParam,"autoCamera").onChange(function(t){e.orbitControls.autoRotate=t})},animation:function(){},raycasterOperate:function(){var e=[0,32,64,96,128,160,192,224,255];this.raycaster.setFromCamera(this.mouse,this.camera);var t=this.raycaster.intersectObjects(this.objBox.group.children);if(t[0]){var i=t[0].object.name,n=e[i.slice(0,1)],s=e[i.slice(1,2)],r=e[i.slice(-1)];t[0].object.material.color.set(new THREE.Color("rgb("+n+", "+s+", "+r+")").getHex())}},updateRenderer:function(){var e=this.clock.getDelta();this.orbitControls.update(e),this.mousemoveStatus&&this.raycasterOperate(),this.renderer.render(this.scene,this.camera),this.stats.update(),this.animationFrame=requestAnimationFrame(this.updateRenderer)},fullAll:function(){var e=[0,32,64,96,128,160,192,224,255];this.objBox.group.children.forEach(function(t){var i=t.name,n=e[i.slice(0,1)],s=e[i.slice(1,2)],r=e[i.slice(-1)];t.material.color.set(new THREE.Color("rgb("+n+", "+s+", "+r+")").getHex())})},clearAll:function(){this.objBox.group.children.forEach(function(e){e.material.color.set(new THREE.Color("rgb(255, 255, 255)").getHex())})},clearObjCache:function(e){e.geometry.dispose(),e.material.dispose()},clearCache:function(){var e=this;this.renderer.clear(!0,!0,!0),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement=null,this.objBox.group.children.forEach(function(t){e.clearObjCache(t)}),this.scene.dispose(),this.gui.destroy()}},Object(r.b)(["resetThreeTipsFun","resetThreeLinkFun"])),created:function(){this.resetThreeTipsFun("    旋转相机：鼠标左键\n    缩放场景：鼠标滚轮\n    移动相机：鼠标右键 "),this.resetThreeLinkFun("light/ambientLight.vue")},mounted:function(){this.init()},beforeDestroy:function(){document.body.removeChild(document.getElementById("three-stats")),this.clearCache(),this.renderer=null,this.scene=null,this.camera=null,this.stats=null,this.lightBox=null,this.helperBox=null,this.clock=null,this.gui=null,cancelAnimationFrame(this.animationFrame)}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"three-display three-init"},[t("div",{ref:"three-canvas",staticClass:"three-canvas",attrs:{id:"three-canvas"},on:{mousemove:this.mousemove}}),this._v(" "),t("cpc-button",{staticClass:"full",on:{click:this.fullAll}},[this._v("填充")]),this._v(" "),t("cpc-button",{staticClass:"clear",on:{click:this.clearAll}},[this._v("重置")])],1)},staticRenderFns:[]};var u=i("VU/8")(c,l,!1,function(e){i("c3We")},"data-v-691a4c58",null);t.default=u.exports},c3We:function(e,t){}});