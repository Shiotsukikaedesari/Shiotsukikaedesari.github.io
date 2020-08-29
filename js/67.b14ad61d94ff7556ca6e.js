webpackJsonp([67],{"2nWL":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("Dd8w"),i=o.n(s),n=o("NYxO"),r=o("QLyc"),a=o("BMSc"),h=o("Ml+6"),c={klein:function(t,e,o){var s,i,n;e*=Math.PI,t*=2*Math.PI,(e*=2)<Math.PI?(s=3*Math.cos(e)*(1+Math.sin(e))+2*(1-Math.cos(e)/2)*Math.cos(e)*Math.cos(t),n=-8*Math.sin(e)-2*(1-Math.cos(e)/2)*Math.sin(e)*Math.cos(t)):(s=3*Math.cos(e)*(1+Math.sin(e))+2*(1-Math.cos(e)/2)*Math.cos(t+Math.PI),n=-8*Math.sin(e)),i=-2*(1-Math.cos(e)/2)*Math.sin(t),o.set(s,i,n)},plane:function(t,e){return function(o,s,i){var n=o*t,r=s*e;i.set(n,0,r)}},mobius:function(t,e,o){t-=.5;var s,i,n,r=2*Math.PI*e;s=Math.cos(r)*(2+t*Math.cos(r/2)),i=Math.sin(r)*(2+t*Math.cos(r/2)),n=t*Math.sin(r/2),o.set(s,i,n)},mobius3d:function(t,e,o){t*=Math.PI,e*=2*Math.PI;var s,i,n,r=(t*=2)/2;s=.125*Math.cos(e)*Math.cos(r)-.65*Math.sin(e)*Math.sin(r),n=.125*Math.cos(e)*Math.sin(r)+.65*Math.sin(e)*Math.cos(r),i=(2.25+s)*Math.sin(t),s=(2.25+s)*Math.cos(t),o.set(s,i,n)},TubeGeometry:function(t,e,o,s,i,n){this.path=t,this.segments=e||64,this.radius=o||1,this.segmentsRadius=s||8,this.closed=i||!1,n&&(this.debug=new h.T);var r=this,a=this.segments+1,c=t.computeFrenetFrames(e,i),l=c.tangents,u=c.normals,d=c.binormals;this.tangents=l,this.normals=u,this.binormals=d;h.X.call(this,function(e,s,i){s*=2*Math.PI;var n=e*(a-1);n=Math.floor(n);var c=t.getPointAt(e),p=l[n],m=u[n],b=d[n];r.debug&&(r.debug.add(new h.e(p,c,o,255)),r.debug.add(new h.e(m,c,o,16711680)),r.debug.add(new h.e(b,c,o,65280)));var M=-r.radius*Math.cos(s),x=r.radius*Math.sin(s);c.x+=M*m.x+x*b.x,c.y+=M*m.y+x*b.y,c.z+=M*m.z+x*b.z,i.copy(c)},e,s)}};c.TubeGeometry.prototype=Object.create(h.z.prototype),c.TubeGeometry.prototype.constructor=c.TubeGeometry,c.TorusKnotGeometry=function(t,e,o,s,i,n){function r(){h.m.call(this)}this.radius=t||200,this.tube=e||40,this.segmentsT=o||64,this.segmentsR=s||8,this.p=i||2,this.q=n||3,r.prototype=Object.create(h.m.prototype),r.prototype.constructor=r,r.prototype.getPoint=function(e,o){var s=o||new h._23;e*=2*Math.PI;var r=(1+.5*Math.cos(n*e))*Math.cos(i*e),a=(1+.5*Math.cos(n*e))*Math.sin(i*e),c=.5*Math.sin(n*e);return s.set(r,a,c).multiplyScalar(t)};var a=o,l=s,u=new r;c.TubeGeometry.call(this,u,a,e,l,!0,!1)},c.TorusKnotGeometry.prototype=Object.create(h.z.prototype),c.TorusKnotGeometry.prototype.constructor=c.TorusKnotGeometry,c.SphereGeometry=function(t,e,o){h.X.call(this,function(e,o,s){e*=Math.PI,o*=2*Math.PI;var i=t*Math.sin(e)*Math.cos(o),n=t*Math.sin(e)*Math.sin(o),r=t*Math.cos(e);s.set(i,n,r)},e,o)},c.SphereGeometry.prototype=Object.create(h.z.prototype),c.SphereGeometry.prototype.constructor=c.SphereGeometry,c.PlaneGeometry=function(t,e,o,s){h.X.call(this,function(o,s,i){var n=o*t,r=s*e;i.set(n,0,r)},o,s)},c.PlaneGeometry.prototype=Object.create(h.z.prototype),c.PlaneGeometry.prototype.constructor=c.PlaneGeometry;var l={data:function(){return{tips:"",renderer:"",scene:"",camera:"",stats:"",helperBox:"",lightBox:"",objBox:{stage:"",tube:"",torus:"",torusKnot:"",Parametric:""},clock:"",orbitControls:"",animationFrame:""}},methods:i()({init:function(){this.initRender(),this.initScene(),this.initCamera(),this.initClock(),this.initObj(),this.initLight(),this.initHelper(),this.initStats(),this.initOrbitControls(),this.updateRenderer()},initRender:function(){this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=THREE.PCFSoftShadowMap,this.$refs["three-canvas"].appendChild(this.renderer.domElement),this.renderer.setClearColor("rgb(15, 1, 25)")},initScene:function(){this.scene=new THREE.Scene},initClock:function(){this.clock=new THREE.Clock},initLight:function(){this.lightBox={ambientLight:new THREE.AmbientLight("rgb(255, 255, 255)"),spotLight:new THREE.SpotLight("rgb(255, 255, 255)",1.5)},this.lightBox.spotLight.position.set(220,250,200),this.lightBox.spotLight.castShadow=!0,this.lightBox.spotLight.angle=Math.PI/3,this.scene.add(this.lightBox.spotLight)},initCamera:function(){this.camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1e4),this.camera.position.x=350,this.camera.position.y=200,this.camera.position.z=350,this.camera.up.x=0,this.camera.up.y=1,this.camera.up.z=0,this.camera.lookAt(new THREE.Vector3(0,0,0))},initObj:function(){var t=new THREE.BoxGeometry(200,10,500,4,4),e=new THREE.MeshLambertMaterial({color:"rgb(45, 0, 50)"});this.objBox.stage=new THREE.Mesh(t,e),this.objBox.stage.castShadow=!0,this.objBox.stage.receiveShadow=!0,this.objBox.stage.position.set(0,5,0),this.scene.add(this.objBox.stage);var o=new THREE.CatmullRomCurve3([new THREE.Vector3(0,-20,-40),new THREE.Vector3(0,-20,-20),new THREE.Vector3(0,0,0),new THREE.Vector3(0,20,20),new THREE.Vector3(0,20,40)]);t=new THREE.TubeGeometry(o,20,5,12,!1),e=new THREE.MeshNormalMaterial,this.objBox.tube=new THREE.Mesh(t,e),this.objBox.tube.castShadow=!0,this.objBox.tube.receiveShadow=!0,this.objBox.tube.position.set(0,40,-150),this.scene.add(this.objBox.tube),t=new THREE.TorusGeometry(20,4,32,64),this.objBox.torus=new THREE.Mesh(t,e),this.objBox.torus.castShadow=!0,this.objBox.torus.receiveShadow=!0,this.objBox.torus.position.set(0,40,-50),this.scene.add(this.objBox.torus),t=new THREE.TorusKnotGeometry(18,4,128,16,3,2),this.objBox.torusKnot=new THREE.Mesh(t,e),this.objBox.torusKnot.castShadow=!0,this.objBox.torusKnot.receiveShadow=!0,this.objBox.torusKnot.position.set(0,40,50),this.scene.add(this.objBox.torusKnot),t=new THREE.ParametricGeometry(c.klein,32,32),this.objBox.parametric=new THREE.Mesh(t,e),this.objBox.parametric.castShadow=!0,this.objBox.parametric.receiveShadow=!0,this.objBox.parametric.scale.x=3,this.objBox.parametric.scale.y=3,this.objBox.parametric.scale.z=3,this.objBox.parametric.position.set(0,40,150),this.scene.add(this.objBox.parametric)},initHelper:function(){this.helperBox={axesHelper:{helper:new THREE.AxesHelper(1e4)},gridHelper:{helper:new THREE.GridHelper(1500,30,"white","rgb(150, 150, 150)")},spotLightHelper:{helper:new THREE.SpotLightHelper(this.lightBox.spotLight)}},this.scene.add(this.helperBox.axesHelper.helper)},initStats:function(){this.stats=new r.a,this.stats.setMode(0),this.stats.domElement.id="three-stats",this.stats.domElement.style.position="absolute",this.stats.domElement.style.left="unset",this.stats.domElement.style.right="0px",this.stats.domElement.style.top="0px",document.body.appendChild(this.stats.domElement)},initOrbitControls:function(){this.orbitControls=new a.a(this.camera,this.renderer.domElement),this.orbitControls.autoRotate=!0},animation:function(t){this.objBox.tube.rotation.y+=t,this.objBox.tube.rotation.z+=t,this.objBox.torus.rotation.y+=t,this.objBox.torusKnot.rotation.z+=t,this.objBox.torusKnot.rotation.x+=t,this.objBox.parametric.rotation.z+=t,this.objBox.parametric.rotation.x+=t},updateRenderer:function(){var t=this.clock.getDelta();this.orbitControls.update(t),this.animation(t),this.renderer.render(this.scene,this.camera),this.stats.update(),this.animationFrame=requestAnimationFrame(this.updateRenderer)},clearObjCache:function(t){t.geometry.dispose(),t.material.dispose()},clearCache:function(){this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.clear(!0,!0,!0),this.renderer.context=null,this.renderer.domElement=null,this.scene.dispose(),this.clearObjCache(this.objBox.stage),this.clearObjCache(this.objBox.tube),this.clearObjCache(this.objBox.torus),this.clearObjCache(this.objBox.torusKnot),this.clearObjCache(this.objBox.parametric)}},Object(n.b)(["resetThreeTipsFun","resetThreeLinkFun"])),created:function(){this.resetThreeTipsFun("    旋转相机：鼠标左键\n    缩放场景：鼠标滚轮\n    移动相机：鼠标右键 "),this.resetThreeLinkFun("geometry/pipeGeometry.vue")},beforeMount:function(){},mounted:function(){this.init()},beforeDestroy:function(){document.body.removeChild(document.getElementById("three-stats")),this.clearCache(),this.renderer=null,this.scene=null,this.camera=null,this.stats=null,this.helperBox=null,this.objBox=null,this.clock=null,this.orbitControls=null,cancelAnimationFrame(this.animationFrame)}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"three-display three-init"},[e("div",{ref:"three-canvas",staticClass:"three-canvas",attrs:{id:"three-canvas"}})])},staticRenderFns:[]};var d=o("VU/8")(l,u,!1,function(t){o("l2KR")},"data-v-2e8a66ac",null);e.default=d.exports},l2KR:function(t,e){}});