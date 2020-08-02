webpackJsonp([70],{W0Ce:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Dd8w"),o=i.n(s),r=i("NYxO"),n=i("QLyc"),a=i("BMSc"),h=i("AkSr"),l={data:function(){return{renderer:"",scene:"",camera:"",stats:"",lightBox:"",helperBox:"",objBox:{obj1:""},clock:"",orbitControls:"",animationFrame:"",gui:"",guiParam:""}},methods:o()({init:function(){this.initRender(),this.initScene(),this.initClock(),this.initCamera(),this.initObj(),this.initLight(),this.initHelper(),this.initStats(),this.initOrbitControls(),this.initGui(),this.updateRenderer()},initRender:function(){this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.$refs["three-canvas"].appendChild(this.renderer.domElement),this.renderer.setClearColor("rgb(15, 1, 25)")},initScene:function(){this.scene=new THREE.Scene},initClock:function(){this.clock=new THREE.Clock},initLight:function(){this.lightBox={ambientLight:new THREE.AmbientLight("rgb(255, 255, 255)")},this.scene.add(this.lightBox.ambientLight)},initCamera:function(){this.camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1e4),this.camera.position.x=400,this.camera.position.y=400,this.camera.position.z=400,this.camera.up.x=0,this.camera.up.y=1,this.camera.up.z=0,this.camera.lookAt(new THREE.Vector3(0,0,0))},initObj:function(){var t=new THREE.BoxGeometry(100,100,100,4,4),e=new THREE.MeshLambertMaterial({color:"rgb(115, 30, 150)"});this.objBox.obj1=new THREE.Mesh(t,e),this.objBox.obj1.position.set(0,50,0),this.scene.add(this.objBox.obj1)},initHelper:function(){this.helperBox={axesHelper:{helper:new THREE.AxesHelper(1e4)},gridHelper:{helper:new THREE.GridHelper(1500,30,"white","rgb(150, 150, 150)")}},this.scene.add(this.helperBox.axesHelper.helper),this.scene.add(this.helperBox.gridHelper.helper)},initStats:function(){this.stats=new n.a,this.stats.setMode(0),this.stats.domElement.id="three-stats",this.stats.domElement.style.position="absolute",this.stats.domElement.style.left="unset",this.stats.domElement.style.right="300px",this.stats.domElement.style.top="0px",document.body.appendChild(this.stats.domElement)},initOrbitControls:function(){this.orbitControls=new a.a(this.camera,this.renderer.domElement),this.orbitControls.autoRotate=!0,this.orbitControls.enablePan=!1,this.orbitControls.mouseButtons={LEFT:THREE.MOUSE.PAN,MIDDLE:THREE.MOUSE.DOLLY,RIGHT:THREE.MOUSE.ROTATE}},initGui:function(){this.gui=new h.a,this.guiParam={cameraAutoRotate:!0,positionX:0,positionY:50,positionZ:0,rotateX:0,rotateY:0,rotateZ:0,scale:1},this.gui.add(this.guiParam,"cameraAutoRotate"),this.gui.add(this.guiParam,"positionX",-500,500),this.gui.add(this.guiParam,"positionY",-500,500),this.gui.add(this.guiParam,"positionZ",-500,500),this.gui.add(this.guiParam,"rotateX",0,360),this.gui.add(this.guiParam,"rotateY",0,360),this.gui.add(this.guiParam,"rotateZ",0,360)},animation:function(){},updateRenderer:function(){var t=this.clock.getDelta();this.orbitControls.update(t),this.renderer.render(this.scene,this.camera),this.stats.update(),this.orbitControls.autoRotate=this.guiParam.cameraAutoRotate,this.objBox.obj1.position.x=this.guiParam.positionX,this.objBox.obj1.position.y=this.guiParam.positionY,this.objBox.obj1.position.z=this.guiParam.positionZ,this.objBox.obj1.rotation.x=Math.PI*this.guiParam.rotateX/180,this.objBox.obj1.rotation.y=Math.PI*this.guiParam.rotateY/180,this.objBox.obj1.rotation.z=Math.PI*this.guiParam.rotateZ/180,this.animationFrame=requestAnimationFrame(this.updateRenderer)},clearObjCache:function(t){t.geometry.dispose(),t.material.dispose()},clearCache:function(){this.renderer.clear(!0,!0,!0),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement=null,this.clearObjCache(this.objBox.obj1),this.scene.dispose(),this.gui.destroy()}},Object(r.b)(["resetThreeTipsFun","resetThreeLinkFun"])),created:function(){this.resetThreeTipsFun("相机旋转：鼠标右键  相机缩放：鼠标滚轮 "),this.resetThreeLinkFun("base/gui.vue")},mounted:function(){var t=this;this.init(),window.onkeydown=function(e){switch(e.keyCode){case 81:t.transformControls.setSpace("local"===t.transformControls.space?"world":"local");break;case 16:t.transformControls.setTranslationSnap(100),t.transformControls.setRotationSnap(THREE.MathUtils.degToRad(15)),t.transformControls.setScaleSnap(.25);break;case 87:t.transformControls.setMode("translate");break;case 69:t.transformControls.setMode("rotate");break;case 82:t.transformControls.setMode("scale");break;case 187:case 107:t.transformControls.setSize(t.transformControls.size+.1);break;case 189:case 109:t.transformControls.setSize(Math.max(t.transformControls.size-.1,.1));break;case 88:t.transformControls.showX=!t.transformControls.showX;break;case 89:t.transformControls.showY=!t.transformControls.showY;break;case 90:t.transformControls.showZ=!t.transformControls.showZ;break;case 32:t.transformControls.enabled=!t.transformControls.enabled}}},beforeDestroy:function(){document.body.removeChild(document.getElementById("three-stats")),window.onkeydown="",this.clearCache(),this.renderer=null,this.scene=null,this.camera=null,this.stats=null,this.lightBox=null,this.helperBox=null,this.clock=null,this.gui=null,cancelAnimationFrame(this.animationFrame)}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"three-display three-init"},[e("div",{ref:"three-canvas",staticClass:"three-canvas",attrs:{id:"three-canvas"}})])},staticRenderFns:[]};var d=i("VU/8")(l,c,!1,function(t){i("pXHN")},"data-v-0f8b70cb",null);e.default=d.exports},pXHN:function(t,e){}});