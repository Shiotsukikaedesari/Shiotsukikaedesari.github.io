webpackJsonp([1],{"+t0e":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Dd8w"),r=i.n(s),a=i("NYxO"),n=i("AkSr"),o=i("QLyc"),h=i("BMSc"),l=i("SR+r"),c=i("voLq"),p={data:function(){return{renderer:"",scene:"",camera:"",stats:"",helperBox:"",lightBox:"",managerBox:"",objBox:{stage:"",box:""},gui:"",clock:"",orbitControls:"",animationFrame:""}},methods:r()({init:function(){this.initRender(),this.initScene(),this.initCamera(),this.initClock(),this.initManager(),this.initLoader(),this.initObj(),this.initLight(),this.initHelper(),this.initStats(),this.initOrbitControls(),this.initGui(),this.updateRenderer()},initRender:function(){this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=THREE.PCFSoftShadowMap,this.$refs["three-canvas"].appendChild(this.renderer.domElement),this.renderer.setClearColor("rgb(15, 1, 25)")},initScene:function(){this.scene=new THREE.Scene},initClock:function(){this.clock=new THREE.Clock},initLight:function(){this.lightBox={ambientLight:new THREE.AmbientLight("rgb(50, 50, 50)"),spotLight:new THREE.SpotLight("rgb(255, 255, 255)",1.5,800,Math.PI/180*45,.3,0)},this.lightBox.spotLight.position.set(300,600,300),this.lightBox.spotLight.castShadow=!0,this.scene.add(this.lightBox.spotLight),this.scene.add(this.lightBox.ambientLight)},initCamera:function(){this.camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1e4),this.camera.position.x=600,this.camera.position.y=800,this.camera.position.z=600,this.camera.up.x=0,this.camera.up.y=1,this.camera.up.z=0},initManager:function(){var t=this,e=0,i=function(i,s){s.onStart=function(s,r,a){e+=60;var n=new THREE.BoxBufferGeometry(300,40,40,4,4),o=new THREE.MeshStandardMaterial({color:"rgb(125, 255, 255)",roughness:0,metalness:0});t.objBox[i]=new THREE.Mesh(n,o),t.objBox[i].castShadow=!0,t.objBox[i].receiveShadow=!0,t.objBox[i].position.set(0,e,0),t.objBox[i].scale.x=.01,t.scene.add(t.objBox[i]),t.objBox[i+"BoxLine"]=new THREE.LineSegments(new THREE.EdgesGeometry(n),new THREE.LineBasicMaterial({color:16777215})),t.objBox[i+"BoxLine"].position.set(0,e,0),t.scene.add(t.objBox[i+"BoxLine"])},s.onLoad=function(){t.scene.remove(t.objBox[i]),t.clearObjCache(t.objBox[i]),t.scene.remove(t.objBox[i+"BoxLine"]),t.clearObjCache(t.objBox[i+"BoxLine"])},s.onProgress=function(t,e,i){},s.onError=function(e){t.objBox[i+"BoxLine"].material.color.setHex("rgb(255, 0, 0)")}};this.managerBox={OBJManager:new THREE.LoadingManager,MTLManager:new THREE.LoadingManager},i("OBJManager",this.managerBox.OBJManager),i("MTLManager",this.managerBox.MTLManager)},initLoader:function(){var t=this,e=this,i=new l.a(this.managerBox.OBJManager);new c.a(this.managerBox.MTLManager).load("/static/three/obj/knife/knife.mtl",function(s){i.setMaterials(s),i.load("/static/three/obj/knife/knife.obj",function(e){e.scale.set(.5,.5,.5),e.translateY(140),e.translateX(50),e.rotateZ(Math.PI/180*60),e.children.forEach(function(t){t.castShadow=!0,t.receiveShadow=!0}),t.objBox.knife=e,t.scene.add(t.objBox.knife)},function(t){e.objBox.OBJManager.scale.x=t.loaded/t.total})},function(t){e.objBox.MTLManager.scale.x=t.loaded/t.total})},initObj:function(){var t=new THREE.BoxGeometry(300,10,300,4,4),e=new THREE.MeshLambertMaterial({color:"rgb(45, 0, 50)"});this.objBox.stage=new THREE.Mesh(t,e),this.objBox.stage.castShadow=!0,this.objBox.stage.receiveShadow=!0,this.objBox.stage.position.set(0,5,0),this.scene.add(this.objBox.stage)},initHelper:function(){this.helperBox={axesHelper:{helper:new THREE.AxesHelper(1e4)},gridHelper:{helper:new THREE.GridHelper(1500,30,"white","rgb(150, 150, 150)")},spotLightHelper:{helper:new THREE.SpotLightHelper(this.lightBox.spotLight)}},this.scene.add(this.helperBox.spotLightHelper.helper)},initStats:function(){this.stats=new o.a,this.stats.setMode(0),this.stats.domElement.id="three-stats",this.stats.domElement.style.position="absolute",this.stats.domElement.style.left="unset",this.stats.domElement.style.right="300px",this.stats.domElement.style.top="0px",document.body.appendChild(this.stats.domElement)},initGui:function(){var t=this;this.gui=new n.a,this.guiParam={showHelper:!0,castShadow:this.lightBox.spotLight.castShadow,color:this.lightBox.spotLight.color.getHex(),intensity:this.lightBox.spotLight.intensity,distance:this.lightBox.spotLight.distance,angle:180*this.lightBox.spotLight.angle/Math.PI,penumbra:this.lightBox.spotLight.penumbra,decay:this.lightBox.spotLight.decay,positionY:this.lightBox.spotLight.position.y};var e=this.gui.addFolder("Light setting");e.add(this.guiParam,"showHelper").onChange(function(e){e?t.scene.add(t.helperBox.spotLightHelper.helper):t.scene.remove(t.helperBox.spotLightHelper.helper)}),e.add(this.guiParam,"castShadow").onChange(function(e){t.lightBox.spotLight.castShadow=e}),e.addColor(this.guiParam,"color",-500,500).onChange(function(e){t.lightBox.spotLight.color.setHex(e),t.helperBox.spotLightHelper.helper.update()}),e.add(this.guiParam,"intensity",0,10).onChange(function(e){t.lightBox.spotLight.intensity=e,t.helperBox.spotLightHelper.helper.update()}),e.add(this.guiParam,"distance",0,1e3,1).onChange(function(e){t.lightBox.spotLight.distance=e,t.helperBox.spotLightHelper.helper.update()}),e.add(this.guiParam,"angle",0,60,1).onChange(function(e){t.lightBox.spotLight.angle=Math.PI/180*e,t.helperBox.spotLightHelper.helper.update()}),e.add(this.guiParam,"penumbra",0,1,.1).onChange(function(e){t.lightBox.spotLight.penumbra=e,t.helperBox.spotLightHelper.helper.update()}),e.add(this.guiParam,"decay",0,5,.1).onChange(function(e){t.lightBox.spotLight.decay=e,t.helperBox.spotLightHelper.helper.update()}),e.open();var i=this.gui.addFolder("Light position");i.add(this.guiParam,"positionY",-500,500,1).onChange(function(e){t.lightBox.spotLight.position.y=e,t.helperBox.spotLightHelper.helper.update()}),i.open()},initOrbitControls:function(){this.orbitControls=new h.a(this.camera,this.renderer.domElement),this.orbitControls.autoRotate=!0,this.orbitControls.target=new THREE.Vector3(0,250,0)},animation:function(){var t=.001*Date.now();this.lightBox.spotLight.position.x=400*-Math.cos(t),this.lightBox.spotLight.position.z=400*Math.sin(t),this.helperBox.spotLightHelper.helper.update()},updateRenderer:function(){this.orbitControls.update(this.clock.getDelta()),this.renderer.render(this.scene,this.camera),this.animation(),this.stats.update(),this.animationFrame=requestAnimationFrame(this.updateRenderer)},clearObjCache:function(t){t.geometry.dispose(),t.material.dispose()},clearCache:function(){var t=this;this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.clear(!0,!0,!0),this.renderer.domElement=null,this.scene.dispose(),this.clearObjCache(this.objBox.stage),this.objBox.knife&&this.objBox.knife.children.forEach(function(e){t.clearObjCache(e)}),this.gui.destroy()}},Object(a.b)(["resetThreeTipsFun","resetThreeLinkFun"])),created:function(){this.resetThreeTipsFun("    旋转相机：鼠标左键\n    缩放场景：鼠标滚轮\n    移动相机：鼠标右键\n    模型提供：hcity "),this.resetThreeLinkFun("loader/loadingManager.vue")},beforeMount:function(){},mounted:function(){this.init()},beforeDestroy:function(){document.body.removeChild(document.getElementById("three-stats")),this.clearCache(),this.renderer=null,this.scene=null,this.camera=null,this.stats=null,this.helperBox=null,this.managerBox=null,this.objBox=null,this.clock=null,this.orbitControls=null,cancelAnimationFrame(this.animationFrame)}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"three-display three-init"},[e("div",{ref:"three-canvas",staticClass:"three-canvas",attrs:{id:"three-canvas"}})])},staticRenderFns:[]};var d=i("VU/8")(p,u,!1,function(t){i("SYJ8")},"data-v-2fe61b88",null);e.default=d.exports},"SR+r":function(t,e,i){"use strict";i.d(e,"a",function(){return r});var s=i("Ml+6"),r=function(){var t=/^[og]\s*(.+)?/,e=/^mtllib /,i=/^usemtl /,r=/^usemap /;function a(t){s.y.call(this,t),this.materials=null}return a.prototype=Object.assign(Object.create(s.y.prototype),{constructor:a,load:function(t,e,i,r){var a=this,n=new s.o(a.manager);n.setPath(this.path),n.load(t,function(t){e(a.parse(t))},i,r)},setMaterials:function(t){return this.materials=t,this},parse:function(a){var n=new function(){var t={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&!1===this.object.fromDeclaration)return this.object.name=t,void(this.object.fromDeclaration=!1!==e);var i=this.object&&"function"==typeof this.object.currentMaterial?this.object.currentMaterial():void 0;if(this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:!1!==e,geometry:{vertices:[],normals:[],colors:[],uvs:[]},materials:[],smooth:!0,startMaterial:function(t,e){var i=this._finalize(!1);i&&(i.inherited||i.groupCount<=0)&&this.materials.splice(i.index,1);var s={index:this.materials.length,name:t||"",mtllib:Array.isArray(e)&&e.length>0?e[e.length-1]:"",smooth:void 0!==i?i.smooth:this.smooth,groupStart:void 0!==i?i.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(t){var e={index:"number"==typeof t?t:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return e.clone=this.clone.bind(e),e}};return this.materials.push(s),s},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(t){var e=this.currentMaterial();if(e&&-1===e.groupEnd&&(e.groupEnd=this.geometry.vertices.length/3,e.groupCount=e.groupEnd-e.groupStart,e.inherited=!1),t&&this.materials.length>1)for(var i=this.materials.length-1;i>=0;i--)this.materials[i].groupCount<=0&&this.materials.splice(i,1);return t&&0===this.materials.length&&this.materials.push({name:"",smooth:this.smooth}),e}},i&&i.name&&"function"==typeof i.clone){var s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0)},parseVertexIndex:function(t,e){var i=parseInt(t,10);return 3*(i>=0?i-1:i+e/3)},parseNormalIndex:function(t,e){var i=parseInt(t,10);return 3*(i>=0?i-1:i+e/3)},parseUVIndex:function(t,e){var i=parseInt(t,10);return 2*(i>=0?i-1:i+e/2)},addVertex:function(t,e,i){var s=this.vertices,r=this.object.geometry.vertices;r.push(s[t+0],s[t+1],s[t+2]),r.push(s[e+0],s[e+1],s[e+2]),r.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(t){var e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){var e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,i){var s=this.normals,r=this.object.geometry.normals;r.push(s[t+0],s[t+1],s[t+2]),r.push(s[e+0],s[e+1],s[e+2]),r.push(s[i+0],s[i+1],s[i+2])},addColor:function(t,e,i){var s=this.colors,r=this.object.geometry.colors;r.push(s[t+0],s[t+1],s[t+2]),r.push(s[e+0],s[e+1],s[e+2]),r.push(s[i+0],s[i+1],s[i+2])},addUV:function(t,e,i){var s=this.uvs,r=this.object.geometry.uvs;r.push(s[t+0],s[t+1]),r.push(s[e+0],s[e+1]),r.push(s[i+0],s[i+1])},addUVLine:function(t){var e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,i,s,r,a,n,o,h){var l=this.vertices.length,c=this.parseVertexIndex(t,l),p=this.parseVertexIndex(e,l),u=this.parseVertexIndex(i,l);if(this.addVertex(c,p,u),this.colors.length>0&&this.addColor(c,p,u),void 0!==s&&""!==s){var d=this.uvs.length;c=this.parseUVIndex(s,d),p=this.parseUVIndex(r,d),u=this.parseUVIndex(a,d),this.addUV(c,p,u)}if(void 0!==n&&""!==n){var m=this.normals.length;c=this.parseNormalIndex(n,m),p=n===o?c:this.parseNormalIndex(o,m),u=n===h?c:this.parseNormalIndex(h,m),this.addNormal(c,p,u)}},addPointGeometry:function(t){this.object.geometry.type="Points";for(var e=this.vertices.length,i=0,s=t.length;i<s;i++)this.addVertexPoint(this.parseVertexIndex(t[i],e))},addLineGeometry:function(t,e){this.object.geometry.type="Line";for(var i=this.vertices.length,s=this.uvs.length,r=0,a=t.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(t[r],i));var n=0;for(a=e.length;n<a;n++)this.addUVLine(this.parseUVIndex(e[n],s))}};return t.startObject("",!1),t};-1!==a.indexOf("\r\n")&&(a=a.replace(/\r\n/g,"\n")),-1!==a.indexOf("\\\n")&&(a=a.replace(/\\\n/g,""));for(var o=a.split("\n"),h="",l="",c=[],p="function"==typeof"".trimLeft,u=0,d=o.length;u<d;u++)if(h=o[u],0!==(h=p?h.trimLeft():h.trim()).length&&"#"!==(l=h.charAt(0)))if("v"===l){var m=h.split(/\s+/);switch(m[0]){case"v":n.vertices.push(parseFloat(m[1]),parseFloat(m[2]),parseFloat(m[3])),m.length>=7&&n.colors.push(parseFloat(m[4]),parseFloat(m[5]),parseFloat(m[6]));break;case"vn":n.normals.push(parseFloat(m[1]),parseFloat(m[2]),parseFloat(m[3]));break;case"vt":n.uvs.push(parseFloat(m[1]),parseFloat(m[2]))}}else if("f"===l){for(var g=h.substr(1).trim().split(/\s+/),f=[],b=0,v=g.length;b<v;b++){var x=g[b];if(x.length>0){var w=x.split("/");f.push(w)}}var B=f[0];for(b=1,v=f.length-1;b<v;b++){var L=f[b],y=f[b+1];n.addFace(B[0],L[0],y[0],B[1],L[1],y[1],B[2],L[2],y[2])}}else if("l"===l){var j=h.substring(1).trim().split(" "),E=[],M=[];if(-1===h.indexOf("/"))E=j;else for(var C=0,H=j.length;C<H;C++){var k=j[C].split("/");""!==k[0]&&E.push(k[0]),""!==k[1]&&M.push(k[1])}n.addLineGeometry(E,M)}else if("p"===l){var O=h.substr(1).trim().split(" ");n.addPointGeometry(O)}else if(null!==(c=t.exec(h))){var T=(" "+c[0].substr(1).trim()).substr(1);n.startObject(T)}else if(i.test(h))n.object.startMaterial(h.substring(7).trim(),n.materialLibraries);else if(e.test(h))n.materialLibraries.push(h.substring(7).trim());else if(r.test(h))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if("s"===l){if((c=h.split(" ")).length>1){var F=c[1].trim().toLowerCase();n.object.smooth="0"!==F&&"off"!==F}else n.object.smooth=!0;(Y=n.object.currentMaterial())&&(Y.smooth=n.object.smooth)}else{if("\0"===h)continue;console.warn('THREE.OBJLoader: Unexpected line: "'+h+'"')}n.finalize();var S=new s.t;S.materialLibraries=[].concat(n.materialLibraries);for(u=0,d=n.objects.length;u<d;u++){var R=n.objects[u],P=R.geometry,I=R.materials,A="Line"===P.type,V="Points"===P.type,_=!1;if(0!==P.vertices.length){var z=new s.d;z.setAttribute("position",new s.p(P.vertices,3)),P.normals.length>0?z.setAttribute("normal",new s.p(P.normals,3)):z.computeVertexNormals(),P.colors.length>0&&(_=!0,z.setAttribute("color",new s.p(P.colors,3))),P.uvs.length>0&&z.setAttribute("uv",new s.p(P.uvs,2));for(var G,U=[],J=0,N=I.length;J<N;J++){var D=(Z=I[J]).name+"_"+Z.smooth+"_"+_,Y=n.materials[D];if(null!==this.materials)if(Y=this.materials.create(Z.name),!A||!Y||Y instanceof s.v){if(V&&Y&&!(Y instanceof s.O)){var q=new s.O({size:10,sizeAttenuation:!1});s.B.prototype.copy.call(q,Y),q.color.copy(Y.color),q.map=Y.map,Y=q}}else{var W=new s.v;s.B.prototype.copy.call(W,Y),W.color.copy(Y.color),Y=W}void 0===Y&&((Y=A?new s.v:V?new s.O({size:1,sizeAttenuation:!1}):new s.F).name=Z.name,Y.flatShading=!Z.smooth,Y.vertexColors=_?s._5:s.H,n.materials[D]=Y),U.push(Y)}if(U.length>1){for(J=0,N=I.length;J<N;J++){var Z=I[J];z.addGroup(Z.groupStart,Z.groupCount,J)}G=A?new s.w(z,U):V?new s.N(z,U):new s.D(z,U)}else G=A?new s.w(z,U[0]):V?new s.N(z,U[0]):new s.D(z,U[0]);G.name=R.name,S.add(G)}}return S}}),a}()},SYJ8:function(t,e){},voLq:function(t,e,i){"use strict";i.d(e,"a",function(){return r});var s=i("Ml+6"),r=function(t){s.y.call(this,t)};r.prototype=Object.assign(Object.create(s.y.prototype),{constructor:r,load:function(t,e,i,r){var a=this,n=""===this.path?s.z.extractUrlBase(t):this.path,o=new s.o(this.manager);o.setPath(this.path),o.load(t,function(t){e(a.parse(t,n))},i,r)},setMaterialOptions:function(t){return this.materialOptions=t,this},parse:function(t,e){for(var i=t.split("\n"),s={},a=/\s+/,n={},o=0;o<i.length;o++){var h=i[o];if(0!==(h=h.trim()).length&&"#"!==h.charAt(0)){var l=h.indexOf(" "),c=l>=0?h.substring(0,l):h;c=c.toLowerCase();var p=l>=0?h.substring(l+1):"";if(p=p.trim(),"newmtl"===c)s={name:p},n[p]=s;else if("ka"===c||"kd"===c||"ks"===c||"ke"===c){var u=p.split(a,3);s[c]=[parseFloat(u[0]),parseFloat(u[1]),parseFloat(u[2])]}else s[c]=p}}var d=new r.MaterialCreator(this.resourcePath||e,this.materialOptions);return d.setCrossOrigin(this.crossOrigin),d.setManager(this.manager),d.setMaterials(n),d}}),r.MaterialCreator=function(t,e){this.baseUrl=t||"",this.options=e,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.side=this.options&&this.options.side?this.options.side:s.r,this.wrap=this.options&&this.options.wrap?this.options.wrap:s.S},r.MaterialCreator.prototype={constructor:r.MaterialCreator,crossOrigin:"anonymous",setCrossOrigin:function(t){return this.crossOrigin=t,this},setManager:function(t){this.manager=t},setMaterials:function(t){this.materialsInfo=this.convert(t),this.materials={},this.materialsArray=[],this.nameLookup={}},convert:function(t){if(!this.options)return t;var e={};for(var i in t){var s=t[i],r={};for(var a in e[i]=r,s){var n=!0,o=s[a],h=a.toLowerCase();switch(h){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(o=[o[0]/255,o[1]/255,o[2]/255]),this.options&&this.options.ignoreZeroRGBs&&0===o[0]&&0===o[1]&&0===o[2]&&(n=!1)}n&&(r[h]=o)}}return e},preload:function(){for(var t in this.materialsInfo)this.create(t)},getIndex:function(t){return this.nameLookup[t]},getAsArray:function(){var t=0;for(var e in this.materialsInfo)this.materialsArray[t]=this.create(e),this.nameLookup[e]=t,t++;return this.materialsArray},create:function(t){return void 0===this.materials[t]&&this.createMaterial_(t),this.materials[t]},createMaterial_:function(t){var e=this,i=this.materialsInfo[t],r={name:t,side:this.side};function a(t,i){if(!r[t]){var s,a,n=e.getTextureParams(i,r),o=e.loadTexture((s=e.baseUrl,"string"!=typeof(a=n.url)||""===a?"":/^https?:\/\//i.test(a)?a:s+a));o.repeat.copy(n.scale),o.offset.copy(n.offset),o.wrapS=e.wrap,o.wrapT=e.wrap,r[t]=o}}for(var n in i){var o,h=i[n];if(""!==h)switch(n.toLowerCase()){case"kd":r.color=(new s.g).fromArray(h);break;case"ks":r.specular=(new s.g).fromArray(h);break;case"ke":r.emissive=(new s.g).fromArray(h);break;case"map_kd":a("map",h);break;case"map_ks":a("specularMap",h);break;case"map_ke":a("emissiveMap",h);break;case"norm":a("normalMap",h);break;case"map_bump":case"bump":a("bumpMap",h);break;case"map_d":a("alphaMap",h),r.transparent=!0;break;case"ns":r.shininess=parseFloat(h);break;case"d":(o=parseFloat(h))<1&&(r.opacity=o,r.transparent=!0);break;case"tr":o=parseFloat(h),this.options&&this.options.invertTrProperty&&(o=1-o),o>0&&(r.opacity=1-o,r.transparent=!0)}}return this.materials[t]=new s.F(r),this.materials[t]},getTextureParams:function(t,e){var i,r={scale:new s._3(1,1),offset:new s._3(0,0)},a=t.split(/\s+/);return(i=a.indexOf("-bm"))>=0&&(e.bumpScale=parseFloat(a[i+1]),a.splice(i,2)),(i=a.indexOf("-s"))>=0&&(r.scale.set(parseFloat(a[i+1]),parseFloat(a[i+2])),a.splice(i,4)),(i=a.indexOf("-o"))>=0&&(r.offset.set(parseFloat(a[i+1]),parseFloat(a[i+2])),a.splice(i,4)),r.url=a.join(" ").trim(),r},loadTexture:function(t,e,i,r,a){var n,o=void 0!==this.manager?this.manager:s.k,h=o.getHandler(t);return null===h&&(h=new s.Y(o)),h.setCrossOrigin&&h.setCrossOrigin(this.crossOrigin),n=h.load(t,i,r,a),void 0!==e&&(n.mapping=e),n}}}});