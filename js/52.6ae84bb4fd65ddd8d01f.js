webpackJsonp([52],{IRRc:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("Dd8w"),i=n.n(o),s=n("NYxO"),a=n("QLyc"),r=n("BMSc"),l=n("Ml+6"),h=function(e,t){void 0===t&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),l.G.call(this),this.visible=!1,this.domElement=t;var n=new c;this.add(n);var o=new p;this.add(o);var i=this;F("camera",e),F("object",void 0),F("enabled",!0),F("axis",null),F("mode","translate"),F("translationSnap",null),F("rotationSnap",null),F("scaleSnap",null),F("space","world"),F("size",1),F("dragging",!1),F("showX",!0),F("showY",!0),F("showZ",!0);var s={type:"change"},a={type:"mouseDown"},r={type:"mouseUp",mode:i.mode},h={type:"objectChange"},d=new l.O,u=new l.Z,m=new l.Z,w=new l.M,y={X:new l.Z(1,0,0),Y:new l.Z(0,1,0),Z:new l.Z(0,0,1)},b=new l.Z,v=new l.Z,f=new l.Z,M=new l.Z,g=new l.Z,x=new l.Z,E=0,Z=new l.Z,B=new l.M,P=new l.Z,X=new l.Z,Y=new l.M,S=new l.M,C=new l.Z,j=new l.Z,I=new l.M,T=new l.Z,k=new l.Z,z=new l.M,Q=new l.M,R=new l.Z,L=new l.Z,H=new l.Z,A=new l.M,O=new l.Z;function F(e,t){var a=t;Object.defineProperty(i,e,{get:function(){return void 0!==a?a:t},set:function(t){a!==t&&(a=t,o[e]=t,n[e]=t,i.dispatchEvent({type:e+"-changed",value:t}),i.dispatchEvent(s))}}),i[e]=t,o[e]=t,n[e]=t}function W(e){if(document.pointerLockElement)return{x:0,y:0,button:e.button};var n=e.changedTouches?e.changedTouches[0]:e,o=t.getBoundingClientRect();return{x:(n.clientX-o.left)/o.width*2-1,y:-(n.clientY-o.top)/o.height*2+1,button:e.button}}function q(e){i.enabled&&i.pointerHover(W(e))}function G(e){i.enabled&&(document.addEventListener("mousemove",D,!1),i.pointerHover(W(e)),i.pointerDown(W(e)))}function D(e){i.enabled&&i.pointerMove(W(e))}function _(e){i.enabled&&(document.removeEventListener("mousemove",D,!1),i.pointerUp(W(e)))}F("worldPosition",k),F("worldPositionStart",j),F("worldQuaternion",z),F("worldQuaternionStart",I),F("cameraPosition",Z),F("cameraQuaternion",B),F("pointStart",b),F("pointEnd",v),F("rotationAxis",M),F("rotationAngle",E),F("eye",L),t.addEventListener("mousedown",G,!1),t.addEventListener("touchstart",G,!1),t.addEventListener("mousemove",q,!1),t.addEventListener("touchmove",q,!1),t.addEventListener("touchmove",D,!1),document.addEventListener("mouseup",_,!1),t.addEventListener("touchend",_,!1),t.addEventListener("touchcancel",_,!1),t.addEventListener("touchleave",_,!1),this.dispose=function(){t.removeEventListener("mousedown",G),t.removeEventListener("touchstart",G),t.removeEventListener("mousemove",q),document.removeEventListener("mousemove",D),t.removeEventListener("touchmove",q),t.removeEventListener("touchmove",D),document.removeEventListener("mouseup",_),t.removeEventListener("touchend",_),t.removeEventListener("touchcancel",_),t.removeEventListener("touchleave",_),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})},this.attach=function(e){return this.object=e,this.visible=!0,this},this.detach=function(){return this.object=void 0,this.visible=!1,this.axis=null,this},this.updateMatrixWorld=function(){void 0!==this.object&&(this.object.updateMatrixWorld(),this.object.parent.matrixWorld.decompose(X,Y,C),this.object.matrixWorld.decompose(k,z,R),S.copy(Y).inverse(),Q.copy(z).inverse()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(Z,B,P),L.copy(Z).sub(k).normalize(),l.G.prototype.updateMatrixWorld.call(this)},this.pointerHover=function(e){if(void 0!==this.object&&!0!==this.dragging&&(void 0===e.button||0===e.button)){d.setFromCamera(e,this.camera);var t=d.intersectObjects(n.picker[this.mode].children,!0)[0]||!1;this.axis=t?t.object.name:null}},this.pointerDown=function(e){if(!(void 0===this.object||!0===this.dragging||void 0!==e.button&&0!==e.button||0!==e.button&&void 0!==e.button||null===this.axis)){d.setFromCamera(e,this.camera);var t=d.intersectObjects([o],!0)[0]||!1;if(t){var n=this.space;if("scale"===this.mode?n="local":"E"!==this.axis&&"XYZE"!==this.axis&&"XYZ"!==this.axis||(n="world"),"local"===n&&"rotate"===this.mode){var i=this.rotationSnap;"X"===this.axis&&i&&(this.object.rotation.x=Math.round(this.object.rotation.x/i)*i),"Y"===this.axis&&i&&(this.object.rotation.y=Math.round(this.object.rotation.y/i)*i),"Z"===this.axis&&i&&(this.object.rotation.z=Math.round(this.object.rotation.z/i)*i)}this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),H.copy(this.object.position),A.copy(this.object.quaternion),O.copy(this.object.scale),this.object.matrixWorld.decompose(j,I,T),b.copy(t.point).sub(j)}this.dragging=!0,a.mode=this.mode,this.dispatchEvent(a)}},this.pointerMove=function(e){var t=this.axis,n=this.mode,i=this.object,a=this.space;if("scale"===n?a="local":"E"!==t&&"XYZE"!==t&&"XYZ"!==t||(a="world"),void 0!==i&&null!==t&&!1!==this.dragging&&(void 0===e.button||0===e.button)){d.setFromCamera(e,this.camera);var r=d.intersectObjects([o],!0)[0]||!1;if(!1!==r){if(v.copy(r.point).sub(j),"translate"===n)f.copy(v).sub(b),"local"===a&&"XYZ"!==t&&f.applyQuaternion(Q),-1===t.indexOf("X")&&(f.x=0),-1===t.indexOf("Y")&&(f.y=0),-1===t.indexOf("Z")&&(f.z=0),"local"===a&&"XYZ"!==t?f.applyQuaternion(A).divide(C):f.applyQuaternion(S).divide(C),i.position.copy(f).add(H),this.translationSnap&&("local"===a&&(i.position.applyQuaternion(w.copy(A).inverse()),-1!==t.search("X")&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),-1!==t.search("Y")&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),-1!==t.search("Z")&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.position.applyQuaternion(A)),"world"===a&&(i.parent&&i.position.add(u.setFromMatrixPosition(i.parent.matrixWorld)),-1!==t.search("X")&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),-1!==t.search("Y")&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),-1!==t.search("Z")&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.parent&&i.position.sub(u.setFromMatrixPosition(i.parent.matrixWorld))));else if("scale"===n){if(-1!==t.search("XYZ")){var l=v.length()/b.length();v.dot(b)<0&&(l*=-1),m.set(l,l,l)}else u.copy(b),m.copy(v),u.applyQuaternion(Q),m.applyQuaternion(Q),m.divide(u),-1===t.search("X")&&(m.x=1),-1===t.search("Y")&&(m.y=1),-1===t.search("Z")&&(m.z=1);i.scale.copy(O).multiply(m),this.scaleSnap&&(-1!==t.search("X")&&(i.scale.x=Math.round(i.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),-1!==t.search("Y")&&(i.scale.y=Math.round(i.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),-1!==t.search("Z")&&(i.scale.z=Math.round(i.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if("rotate"===n){f.copy(v).sub(b);var c=20/k.distanceTo(u.setFromMatrixPosition(this.camera.matrixWorld));"E"===t?(M.copy(L),E=v.angleTo(b),g.copy(b).normalize(),x.copy(v).normalize(),E*=x.cross(g).dot(L)<0?1:-1):"XYZE"===t?(M.copy(f).cross(L).normalize(),E=f.dot(u.copy(M).cross(this.eye))*c):"X"!==t&&"Y"!==t&&"Z"!==t||(M.copy(y[t]),u.copy(y[t]),"local"===a&&u.applyQuaternion(z),E=f.dot(u.cross(L).normalize())*c),this.rotationSnap&&(E=Math.round(E/this.rotationSnap)*this.rotationSnap),this.rotationAngle=E,"local"===a&&"E"!==t&&"XYZE"!==t?(i.quaternion.copy(A),i.quaternion.multiply(w.setFromAxisAngle(M,E)).normalize()):(M.applyQuaternion(S),i.quaternion.copy(w.setFromAxisAngle(M,E)),i.quaternion.multiply(A).normalize())}this.dispatchEvent(s),this.dispatchEvent(h)}}},this.pointerUp=function(e){void 0!==e.button&&0!==e.button||(this.dragging&&null!==this.axis&&(r.mode=this.mode,this.dispatchEvent(r)),this.dragging=!1,void 0===e.button&&(this.axis=null))},this.getMode=function(){return i.mode},this.setMode=function(e){i.mode=e},this.setTranslationSnap=function(e){i.translationSnap=e},this.setRotationSnap=function(e){i.rotationSnap=e},this.setScaleSnap=function(e){i.scaleSnap=e},this.setSize=function(e){i.size=e},this.setSpace=function(e){i.space=e},this.update=function(){console.warn("THREE.TransformControls: update function has no more functionality and therefore has been deprecated.")}};h.prototype=Object.assign(Object.create(l.G.prototype),{constructor:h,isTransformControls:!0});var c=function(){l.G.call(this),this.type="TransformControlsGizmo";var e=new l.C({depthTest:!1,depthWrite:!1,transparent:!0,side:l.j,fog:!1}),t=new l.t({depthTest:!1,depthWrite:!1,transparent:!0,linewidth:1,fog:!1}),n=e.clone();n.opacity=.15;var o=e.clone();o.opacity=.33;var i=e.clone();i.color.set(16711680);var s=e.clone();s.color.set(65280);var a=e.clone();a.color.set(255);var r=e.clone();r.opacity=.25;var h=r.clone();h.color.set(16776960);var c=r.clone();c.color.set(65535);var p=r.clone();p.color.set(16711935),e.clone().color.set(16776960);var d=t.clone();d.color.set(16711680);var u=t.clone();u.color.set(65280);var m=t.clone();m.color.set(255);var w=t.clone();w.color.set(65535);var y=t.clone();y.color.set(16711935);var b=t.clone();b.color.set(16776960);var v=t.clone();v.color.set(7895160);var f=b.clone();f.opacity=.25;var M=new l.g(0,.05,.2,12,1,!1),g=new l.b(.125,.125,.125),x=new l.c;x.setAttribute("position",new l.n([0,0,0,1,0,0],3));var E,Z=function(e,t){for(var n=new l.c,o=[],i=0;i<=64*t;++i)o.push(0,Math.cos(i/32*Math.PI)*e,Math.sin(i/32*Math.PI)*e);return n.setAttribute("position",new l.n(o,3)),n},B={X:[[new l.B(M,i),[1,0,0],[0,0,-Math.PI/2],null,"fwd"],[new l.B(M,i),[1,0,0],[0,0,Math.PI/2],null,"bwd"],[new l.s(x,d)]],Y:[[new l.B(M,s),[0,1,0],null,null,"fwd"],[new l.B(M,s),[0,1,0],[Math.PI,0,0],null,"bwd"],[new l.s(x,u),null,[0,0,Math.PI/2]]],Z:[[new l.B(M,a),[0,0,1],[Math.PI/2,0,0],null,"fwd"],[new l.B(M,a),[0,0,1],[-Math.PI/2,0,0],null,"bwd"],[new l.s(x,m),null,[0,-Math.PI/2,0]]],XYZ:[[new l.B(new l.H(.1,0),r.clone()),[0,0,0],[0,0,0]]],XY:[[new l.B(new l.J(.295,.295),h.clone()),[.15,.15,0]],[new l.s(x,b),[.18,.3,0],null,[.125,1,1]],[new l.s(x,b),[.3,.18,0],[0,0,Math.PI/2],[.125,1,1]]],YZ:[[new l.B(new l.J(.295,.295),c.clone()),[0,.15,.15],[0,Math.PI/2,0]],[new l.s(x,w),[0,.18,.3],[0,0,Math.PI/2],[.125,1,1]],[new l.s(x,w),[0,.3,.18],[0,-Math.PI/2,0],[.125,1,1]]],XZ:[[new l.B(new l.J(.295,.295),p.clone()),[.15,0,.15],[-Math.PI/2,0,0]],[new l.s(x,y),[.18,0,.3],null,[.125,1,1]],[new l.s(x,y),[.3,0,.18],[0,-Math.PI/2,0],[.125,1,1]]]},P={X:[[new l.B(new l.g(.2,0,1,4,1,!1),n),[.6,0,0],[0,0,-Math.PI/2]]],Y:[[new l.B(new l.g(.2,0,1,4,1,!1),n),[0,.6,0]]],Z:[[new l.B(new l.g(.2,0,1,4,1,!1),n),[0,0,.6],[Math.PI/2,0,0]]],XYZ:[[new l.B(new l.H(.2,0),n)]],XY:[[new l.B(new l.J(.4,.4),n),[.2,.2,0]]],YZ:[[new l.B(new l.J(.4,.4),n),[0,.2,.2],[0,Math.PI/2,0]]],XZ:[[new l.B(new l.J(.4,.4),n),[.2,0,.2],[-Math.PI/2,0,0]]]},X={START:[[new l.B(new l.H(.01,2),o),null,null,null,"helper"]],END:[[new l.B(new l.H(.01,2),o),null,null,null,"helper"]],DELTA:[[new l.s((E=new l.c,E.setAttribute("position",new l.n([0,0,0,1,1,1],3)),E),o),null,null,null,"helper"]],X:[[new l.s(x,o.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new l.s(x,o.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new l.s(x,o.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},Y={X:[[new l.s(Z(1,.5),d)],[new l.B(new l.H(.04,0),i),[0,0,.99],null,[1,3,1]]],Y:[[new l.s(Z(1,.5),u),null,[0,0,-Math.PI/2]],[new l.B(new l.H(.04,0),s),[0,0,.99],null,[3,1,1]]],Z:[[new l.s(Z(1,.5),m),null,[0,Math.PI/2,0]],[new l.B(new l.H(.04,0),a),[.99,0,0],null,[1,3,1]]],E:[[new l.s(Z(1.25,1),f),null,[0,Math.PI/2,0]],[new l.B(new l.g(.03,0,.15,4,1,!1),f),[1.17,0,0],[0,0,-Math.PI/2],[1,1,.001]],[new l.B(new l.g(.03,0,.15,4,1,!1),f),[-1.17,0,0],[0,0,Math.PI/2],[1,1,.001]],[new l.B(new l.g(.03,0,.15,4,1,!1),f),[0,-1.17,0],[Math.PI,0,0],[1,1,.001]],[new l.B(new l.g(.03,0,.15,4,1,!1),f),[0,1.17,0],[0,0,0],[1,1,.001]]],XYZE:[[new l.s(Z(1,1),v),null,[0,Math.PI/2,0]]]},S={AXIS:[[new l.s(x,o.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},C={X:[[new l.B(new l.V(1,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new l.B(new l.V(1,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new l.B(new l.V(1,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new l.B(new l.V(1.25,.1,2,24),n)]],XYZE:[[new l.B(new l.R(.7,10,8),n)]]},j={X:[[new l.B(g,i),[.8,0,0],[0,0,-Math.PI/2]],[new l.s(x,d),null,null,[.8,1,1]]],Y:[[new l.B(g,s),[0,.8,0]],[new l.s(x,u),null,[0,0,Math.PI/2],[.8,1,1]]],Z:[[new l.B(g,a),[0,0,.8],[Math.PI/2,0,0]],[new l.s(x,m),null,[0,-Math.PI/2,0],[.8,1,1]]],XY:[[new l.B(g,h),[.85,.85,0],null,[2,2,.2]],[new l.s(x,b),[.855,.98,0],null,[.125,1,1]],[new l.s(x,b),[.98,.855,0],[0,0,Math.PI/2],[.125,1,1]]],YZ:[[new l.B(g,c),[0,.85,.85],null,[.2,2,2]],[new l.s(x,w),[0,.855,.98],[0,0,Math.PI/2],[.125,1,1]],[new l.s(x,w),[0,.98,.855],[0,-Math.PI/2,0],[.125,1,1]]],XZ:[[new l.B(g,p),[.85,0,.85],null,[2,.2,2]],[new l.s(x,y),[.855,0,.98],null,[.125,1,1]],[new l.s(x,y),[.98,0,.855],[0,-Math.PI/2,0],[.125,1,1]]],XYZX:[[new l.B(new l.b(.125,.125,.125),r.clone()),[1.1,0,0]]],XYZY:[[new l.B(new l.b(.125,.125,.125),r.clone()),[0,1.1,0]]],XYZZ:[[new l.B(new l.b(.125,.125,.125),r.clone()),[0,0,1.1]]]},I={X:[[new l.B(new l.g(.2,0,.8,4,1,!1),n),[.5,0,0],[0,0,-Math.PI/2]]],Y:[[new l.B(new l.g(.2,0,.8,4,1,!1),n),[0,.5,0]]],Z:[[new l.B(new l.g(.2,0,.8,4,1,!1),n),[0,0,.5],[Math.PI/2,0,0]]],XY:[[new l.B(g,n),[.85,.85,0],null,[3,3,.2]]],YZ:[[new l.B(g,n),[0,.85,.85],null,[.2,3,3]]],XZ:[[new l.B(g,n),[.85,0,.85],null,[3,.2,3]]],XYZX:[[new l.B(new l.b(.2,.2,.2),n),[1.1,0,0]]],XYZY:[[new l.B(new l.b(.2,.2,.2),n),[0,1.1,0]]],XYZZ:[[new l.B(new l.b(.2,.2,.2),n),[0,0,1.1]]]},T={X:[[new l.s(x,o.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new l.s(x,o.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new l.s(x,o.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},k=function(e){var t=new l.G;for(var n in e)for(var o=e[n].length;o--;){var i=e[n][o][0].clone(),s=e[n][o][1],a=e[n][o][2],r=e[n][o][3],h=e[n][o][4];i.name=n,i.tag=h,s&&i.position.set(s[0],s[1],s[2]),a&&i.rotation.set(a[0],a[1],a[2]),r&&i.scale.set(r[0],r[1],r[2]),i.updateMatrix();var c=i.geometry.clone();c.applyMatrix4(i.matrix),i.geometry=c,i.renderOrder=1/0,i.position.set(0,0,0),i.rotation.set(0,0,0),i.scale.set(1,1,1),t.add(i)}return t},z=new l.Z(0,0,0),Q=new l.k,R=new l.Z(0,1,0),L=new l.Z(0,0,0),H=new l.A,A=new l.M,O=new l.M,F=new l.M,W=new l.Z(1,0,0),q=new l.Z(0,1,0),G=new l.Z(0,0,1);this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=k(B)),this.add(this.gizmo.rotate=k(Y)),this.add(this.gizmo.scale=k(j)),this.add(this.picker.translate=k(P)),this.add(this.picker.rotate=k(C)),this.add(this.picker.scale=k(I)),this.add(this.helper.translate=k(X)),this.add(this.helper.rotate=k(S)),this.add(this.helper.scale=k(T)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1,this.updateMatrixWorld=function(){var e=this.space;"scale"===this.mode&&(e="local");var t="local"===e?this.worldQuaternion:F;this.gizmo.translate.visible="translate"===this.mode,this.gizmo.rotate.visible="rotate"===this.mode,this.gizmo.scale.visible="scale"===this.mode,this.helper.translate.visible="translate"===this.mode,this.helper.rotate.visible="rotate"===this.mode,this.helper.scale.visible="scale"===this.mode;var n=[];n=(n=(n=n.concat(this.picker[this.mode].children)).concat(this.gizmo[this.mode].children)).concat(this.helper[this.mode].children);for(var o=0;o<n.length;o++){var i=n[o];i.visible=!0,i.rotation.set(0,0,0),i.position.copy(this.worldPosition);var s=this.worldPosition.distanceTo(this.cameraPosition);if(i.scale.set(1,1,1).multiplyScalar(s*this.size/7),"helper"!==i.tag){if(i.quaternion.copy(t),"translate"===this.mode||"scale"===this.mode){"X"!==i.name&&"XYZX"!==i.name||Math.abs(R.copy(W).applyQuaternion(t).dot(this.eye))>.99&&(i.scale.set(1e-10,1e-10,1e-10),i.visible=!1),"Y"!==i.name&&"XYZY"!==i.name||Math.abs(R.copy(q).applyQuaternion(t).dot(this.eye))>.99&&(i.scale.set(1e-10,1e-10,1e-10),i.visible=!1),"Z"!==i.name&&"XYZZ"!==i.name||Math.abs(R.copy(G).applyQuaternion(t).dot(this.eye))>.99&&(i.scale.set(1e-10,1e-10,1e-10),i.visible=!1),"XY"===i.name&&Math.abs(R.copy(G).applyQuaternion(t).dot(this.eye))<.2&&(i.scale.set(1e-10,1e-10,1e-10),i.visible=!1),"YZ"===i.name&&Math.abs(R.copy(W).applyQuaternion(t).dot(this.eye))<.2&&(i.scale.set(1e-10,1e-10,1e-10),i.visible=!1),"XZ"===i.name&&Math.abs(R.copy(q).applyQuaternion(t).dot(this.eye))<.2&&(i.scale.set(1e-10,1e-10,1e-10),i.visible=!1),-1!==i.name.search("X")&&(R.copy(W).applyQuaternion(t).dot(this.eye)<0?"fwd"===i.tag?i.visible=!1:i.scale.x*=-1:"bwd"===i.tag&&(i.visible=!1)),-1!==i.name.search("Y")&&(R.copy(q).applyQuaternion(t).dot(this.eye)<0?"fwd"===i.tag?i.visible=!1:i.scale.y*=-1:"bwd"===i.tag&&(i.visible=!1)),-1!==i.name.search("Z")&&(R.copy(G).applyQuaternion(t).dot(this.eye)<0?"fwd"===i.tag?i.visible=!1:i.scale.z*=-1:"bwd"===i.tag&&(i.visible=!1))}else"rotate"===this.mode&&(O.copy(t),R.copy(this.eye).applyQuaternion(A.copy(t).inverse()),-1!==i.name.search("E")&&i.quaternion.setFromRotationMatrix(H.lookAt(this.eye,L,q)),"X"===i.name&&(A.setFromAxisAngle(W,Math.atan2(-R.y,R.z)),A.multiplyQuaternions(O,A),i.quaternion.copy(A)),"Y"===i.name&&(A.setFromAxisAngle(q,Math.atan2(R.x,R.z)),A.multiplyQuaternions(O,A),i.quaternion.copy(A)),"Z"===i.name&&(A.setFromAxisAngle(G,Math.atan2(R.y,R.x)),A.multiplyQuaternions(O,A),i.quaternion.copy(A)));i.visible=i.visible&&(-1===i.name.indexOf("X")||this.showX),i.visible=i.visible&&(-1===i.name.indexOf("Y")||this.showY),i.visible=i.visible&&(-1===i.name.indexOf("Z")||this.showZ),i.visible=i.visible&&(-1===i.name.indexOf("E")||this.showX&&this.showY&&this.showZ),i.material._opacity=i.material._opacity||i.material.opacity,i.material._color=i.material._color||i.material.color.clone(),i.material.color.copy(i.material._color),i.material.opacity=i.material._opacity,this.enabled?this.axis&&(i.name===this.axis?(i.material.opacity=1,i.material.color.lerp(new l.e(1,1,1),.5)):this.axis.split("").some(function(e){return i.name===e})?(i.material.opacity=1,i.material.color.lerp(new l.e(1,1,1),.5)):(i.material.opacity*=.25,i.material.color.lerp(new l.e(1,1,1),.5))):(i.material.opacity*=.5,i.material.color.lerp(new l.e(1,1,1),.5))}else i.visible=!1,"AXIS"===i.name?(i.position.copy(this.worldPositionStart),i.visible=!!this.axis,"X"===this.axis&&(A.setFromEuler(Q.set(0,0,0)),i.quaternion.copy(t).multiply(A),Math.abs(R.copy(W).applyQuaternion(t).dot(this.eye))>.9&&(i.visible=!1)),"Y"===this.axis&&(A.setFromEuler(Q.set(0,0,Math.PI/2)),i.quaternion.copy(t).multiply(A),Math.abs(R.copy(q).applyQuaternion(t).dot(this.eye))>.9&&(i.visible=!1)),"Z"===this.axis&&(A.setFromEuler(Q.set(0,Math.PI/2,0)),i.quaternion.copy(t).multiply(A),Math.abs(R.copy(G).applyQuaternion(t).dot(this.eye))>.9&&(i.visible=!1)),"XYZE"===this.axis&&(A.setFromEuler(Q.set(0,Math.PI/2,0)),R.copy(this.rotationAxis),i.quaternion.setFromRotationMatrix(H.lookAt(L,R,q)),i.quaternion.multiply(A),i.visible=this.dragging),"E"===this.axis&&(i.visible=!1)):"START"===i.name?(i.position.copy(this.worldPositionStart),i.visible=this.dragging):"END"===i.name?(i.position.copy(this.worldPosition),i.visible=this.dragging):"DELTA"===i.name?(i.position.copy(this.worldPositionStart),i.quaternion.copy(this.worldQuaternionStart),z.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),z.applyQuaternion(this.worldQuaternionStart.clone().inverse()),i.scale.copy(z),i.visible=this.dragging):(i.quaternion.copy(t),this.dragging?i.position.copy(this.worldPositionStart):i.position.copy(this.worldPosition),this.axis&&(i.visible=-1!==this.axis.search(i.name)))}l.G.prototype.updateMatrixWorld.call(this)}};c.prototype=Object.assign(Object.create(l.G.prototype),{constructor:c,isTransformControlsGizmo:!0});var p=function(){l.B.call(this,new l.J(1e5,1e5,2,2),new l.C({visible:!1,wireframe:!0,side:l.j,transparent:!0,opacity:.1})),this.type="TransformControlsPlane";var e=new l.Z(1,0,0),t=new l.Z(0,1,0),n=new l.Z(0,0,1),o=new l.Z,i=new l.Z,s=new l.Z,a=new l.A,r=new l.M;this.updateMatrixWorld=function(){var h=this.space;switch(this.position.copy(this.worldPosition),"scale"===this.mode&&(h="local"),e.set(1,0,0).applyQuaternion("local"===h?this.worldQuaternion:r),t.set(0,1,0).applyQuaternion("local"===h?this.worldQuaternion:r),n.set(0,0,1).applyQuaternion("local"===h?this.worldQuaternion:r),s.copy(t),this.mode){case"translate":case"scale":switch(this.axis){case"X":s.copy(this.eye).cross(e),i.copy(e).cross(s);break;case"Y":s.copy(this.eye).cross(t),i.copy(t).cross(s);break;case"Z":s.copy(this.eye).cross(n),i.copy(n).cross(s);break;case"XY":i.copy(n);break;case"YZ":i.copy(e);break;case"XZ":s.copy(n),i.copy(t);break;case"XYZ":case"E":i.set(0,0,0)}break;case"rotate":default:i.set(0,0,0)}0===i.length()?this.quaternion.copy(this.cameraQuaternion):(a.lookAt(o.set(0,0,0),i,s),this.quaternion.setFromRotationMatrix(a)),l.G.prototype.updateMatrixWorld.call(this)}};p.prototype=Object.assign(Object.create(l.B.prototype),{constructor:p,isTransformControlsPlane:!0});var d={data:function(){return{renderer:"",scene:"",camera:"",stats:"",lightBox:"",helperBox:"",objBox:"",clock:"",orbitControls:"",transformControls:"",animationFrame:""}},methods:i()({init:function(){this.initRender(),this.initCamera(),this.initObj(),this.initLight(),this.initHelper(),this.initStats(),this.initOrbitControls(),this.initTranformControls(),this.updateRenderer()},initRender:function(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.$refs["three-canvas"].appendChild(this.renderer.domElement),this.renderer.setClearColor("rgb(15, 1, 25)")},initLight:function(){this.scene.add(this.lightBox.ambientLight)},initCamera:function(){this.camera.position.x=400,this.camera.position.y=400,this.camera.position.z=400,this.camera.up.x=0,this.camera.up.y=1,this.camera.up.z=0,this.camera.lookAt(new THREE.Vector3(0,0,0))},initObj:function(){var e=new THREE.BoxGeometry(100,100,100,4,4),t=new THREE.MeshLambertMaterial({color:"rgb(115, 30, 150)"});this.objBox.obj1=new THREE.Mesh(e,t),this.objBox.obj1.position.set(0,50,0),this.scene.add(this.objBox.obj1)},initHelper:function(){this.scene.add(this.helperBox.axesHelper.helper),this.scene.add(this.helperBox.gridHelper.helper)},initStats:function(){this.stats.setMode(0),this.stats.domElement.id="three-stats",this.stats.domElement.style.position="absolute",this.stats.domElement.style.left="unset",this.stats.domElement.style.right="0px",this.stats.domElement.style.top="0px",document.body.appendChild(this.stats.domElement)},initOrbitControls:function(){this.orbitControls=new r.a(this.camera,this.renderer.domElement),this.orbitControls.autoRotate=!0,this.orbitControls.enablePan=!1,this.orbitControls.mouseButtons={LEFT:THREE.MOUSE.PAN,MIDDLE:THREE.MOUSE.DOLLY,RIGHT:THREE.MOUSE.ROTATE}},initTranformControls:function(){this.transformControls=new h(this.camera,this.renderer.domElement),this.transformControls.attach(this.objBox.obj1),this.scene.add(this.transformControls)},animation:function(){},updateRenderer:function(){var e=this.clock.getDelta();this.orbitControls.update(e),this.renderer.render(this.scene,this.camera),this.stats.update(),this.animationFrame=requestAnimationFrame(this.updateRenderer)},clearObjCache:function(e){e.geometry.dispose(),e.material.dispose()},clearCache:function(){this.renderer.clear(!0,!0,!0),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement=null,this.clearObjCache(this.objBox.obj1),this.scene.dispose()}},Object(s.b)(["resetThreeTipsFun","resetThreeLinkFun"])),created:function(){this.resetThreeTipsFun("    相机旋转：鼠标左键键  相机移动：鼠标右键  相机缩放：鼠标滚轮\n    设置物体位移：W  设置物体旋转：E  设置物体缩放：R\n    控制X轴：X  控制Y轴：Y   控制Z轴：Z\n    变换固定位移100旋转15度缩放0.25：shift\n    设置控制器大小： +/-\n    禁用/启用控制器：空格 "),this.resetThreeLinkFun("geometry/controlObj.vue")},beforeMount:function(){this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.scene=new THREE.Scene,this.camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1e4),this.stats=new a.a,this.lightBox={ambientLight:new THREE.AmbientLight("rgb(255, 255, 255)")},this.helperBox={axesHelper:{helper:new THREE.AxesHelper(1e4)},gridHelper:{helper:new THREE.GridHelper(1500,30,"white","rgb(150, 150, 150)")}},this.objBox={obj1:""},this.clock=new THREE.Clock},mounted:function(){var e=this;this.init(),window.onkeydown=function(t){switch(t.keyCode){case 81:e.transformControls.setSpace("local"===e.transformControls.space?"world":"local");break;case 16:e.transformControls.setTranslationSnap(100),e.transformControls.setRotationSnap(THREE.MathUtils.degToRad(15)),e.transformControls.setScaleSnap(.25);break;case 87:e.transformControls.setMode("translate");break;case 69:e.transformControls.setMode("rotate");break;case 82:e.transformControls.setMode("scale");break;case 187:case 107:e.transformControls.setSize(e.transformControls.size+.1);break;case 189:case 109:e.transformControls.setSize(Math.max(e.transformControls.size-.1,.1));break;case 88:e.transformControls.showX=!e.transformControls.showX;break;case 89:e.transformControls.showY=!e.transformControls.showY;break;case 90:e.transformControls.showZ=!e.transformControls.showZ;break;case 32:e.transformControls.enabled=!e.transformControls.enabled}}},beforeDestroy:function(){document.body.removeChild(document.getElementById("three-stats")),window.onkeydown=null,this.renderer=null,this.scene=null,this.camera=null,this.lightBox=null,this.helperBox=null,this.objBox=null,this.clock=null,this.orbitControls=null,this.transformControls=null,cancelAnimationFrame(this.animationFrame)}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"three-display three-init"},[t("div",{ref:"three-canvas",staticClass:"three-canvas",attrs:{id:"three-canvas"}})])},staticRenderFns:[]};var m=n("VU/8")(d,u,!1,function(e){n("vv48")},"data-v-67674e76",null);t.default=m.exports},vv48:function(e,t){}});