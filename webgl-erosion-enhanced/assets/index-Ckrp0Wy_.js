import{d as Nr,S as Xr}from"./vendor-ui-D9G9_rNR.js";import{f as gr,a as $,c as Me,i as zr,m as Fr,b as V,s as Ne,d as _e,e as Fn,n as Ie,g as Xe,l as Kn,p as Ir,h as Ye,j as Xn,k as ce,o as De,q as Vr,r as Wr,t as Ae,u as jn,v as tr,w as Gr,x as Kr,y as Ar,z as ir,A as ar,B as jr}from"./vendor-gl-matrix-CGyqgQl4.js";import{V as de,P as qr,O as $r,M as or,R as Yr,g as Zr,B as Jr,a as sr,b as ur,S as lr}from"./vendor-three-BGOT6zrs.js";import{m as Qr}from"./vendor-utils-DFm-itqf.js";import"./vendor-CRNwIL5F.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))o(f);new MutationObserver(f=>{for(const s of f)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function r(f){const s={};return f.integrity&&(s.integrity=f.integrity),f.referrerPolicy&&(s.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?s.credentials="include":f.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(f){if(f.ep)return;f.ep=!0;const s=r(f);fetch(f.href,s)}})();var a;function et(n){a=n}class Sr{constructor(){this.count=0,this.idxBound=!1,this.posBound=!1,this.norBound=!1,this.uvBound=!1,this.mode=a.TRIANGLES}destory(){a.deleteBuffer(this.bufIdx),a.deleteBuffer(this.bufPos),a.deleteBuffer(this.bufNor),a.deleteBuffer(this.bufUv)}generateIdx(){this.idxBound=!0,this.bufIdx=a.createBuffer()}generatePos(){this.posBound=!0,this.bufPos=a.createBuffer()}generateNor(){this.norBound=!0,this.bufNor=a.createBuffer()}generateUv(){this.uvBound=!0,this.bufUv=a.createBuffer()}bindIdx(){return this.idxBound&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.bufIdx),this.idxBound}bindPos(){return this.posBound&&a.bindBuffer(a.ARRAY_BUFFER,this.bufPos),this.posBound}bindNor(){return this.norBound&&a.bindBuffer(a.ARRAY_BUFFER,this.bufNor),this.norBound}bindUv(){return this.uvBound&&a.bindBuffer(a.ARRAY_BUFFER,this.bufUv),this.uvBound}elemCount(){return this.count}drawMode(){return this.mode}setDrawMode(e){this.mode=e}}class nt extends Sr{constructor(e){super(),this.center=gr(e[0],e[1],e[2],1)}create(){this.indices=new Uint32Array([0,1,2,0,2,3]),this.normals=new Float32Array([0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0]),this.positions=new Float32Array([-1,-1,.99999,1,1,-1,.99999,1,1,1,.99999,1,-1,1,.99999,1]),this.generateIdx(),this.generatePos(),this.generateNor(),this.count=this.indices.length,a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.bufIdx),a.bufferData(a.ELEMENT_ARRAY_BUFFER,this.indices,a.STATIC_DRAW),a.bindBuffer(a.ARRAY_BUFFER,this.bufNor),a.bufferData(a.ARRAY_BUFFER,this.normals,a.STATIC_DRAW),a.bindBuffer(a.ARRAY_BUFFER,this.bufPos),a.bufferData(a.ARRAY_BUFFER,this.positions,a.STATIC_DRAW),console.log("Created square")}}class fr extends Sr{constructor(e,r,o){super(),this.center=$(e[0],e[1],e[2]),this.scale=r,this.subdivs=o+o%2}create(){let e=Math.pow(2,this.subdivs/2),r=1/e;this.positions=new Float32Array((e+1)*(e+1)*4),this.normals=new Float32Array((e+1)*(e+1)*4),this.uvs=new Float32Array((e+1)*(e+1)*2),this.indices=new Uint32Array(e*e*6);let o=0;for(let h=0;h<=e;++h)for(let u=0;u<=e;++u)this.normals[o]=0,this.positions[o++]=h*r*this.scale[0]+this.center[0]-this.scale[0]*.5,this.normals[o]=1,this.positions[o++]=0+this.center[1],this.normals[o]=0,this.positions[o++]=u*r*this.scale[1]+this.center[2]-this.scale[1]*.5,this.normals[o]=0,this.positions[o++]=1;let f=0;for(let h=0;h<=e;++h)for(let u=0;u<=e;++u)this.uvs[f++]=h*r,this.uvs[f++]=u*r;let s=0;for(let h=0;h<e;++h)for(let u=0;u<e;++u)this.indices[s++]=u+h*(e+1),this.indices[s++]=u+1+h*(e+1),this.indices[s++]=u+(h+1)*(e+1),this.indices[s++]=u+1+h*(e+1),this.indices[s++]=u+(h+1)*(e+1),this.indices[s++]=u+1+(h+1)*(e+1);this.generateUv(),this.generateIdx(),this.generatePos(),this.generateNor(),this.count=this.indices.length,a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.bufIdx),a.bufferData(a.ELEMENT_ARRAY_BUFFER,this.indices,a.STATIC_DRAW),a.bindBuffer(a.ARRAY_BUFFER,this.bufNor),a.bufferData(a.ARRAY_BUFFER,this.normals,a.STATIC_DRAW),a.bindBuffer(a.ARRAY_BUFFER,this.bufPos),a.bufferData(a.ARRAY_BUFFER,this.positions,a.STATIC_DRAW),a.bindBuffer(a.ARRAY_BUFFER,this.bufUv),a.bufferData(a.ARRAY_BUFFER,this.uvs,a.STATIC_DRAW),console.log("Created plane")}}class rt{constructor(e){this.canvas=e,this.counter=0}setClearColor(e,r,o,f){a.clearColor(e,r,o,f)}setSize(e,r){this.canvas.width=e,this.canvas.height=r}clear(){a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT)}render(e,r,o){let f=Me(),s=Me();gr(1,0,0,1),zr(f),Fr(s,e.projectionMatrix,e.viewMatrix),r.setModelMatrix(f),r.setViewProjMatrix(s),r.setEyeRefUp(e.position,e.target,e.up),r.setDimensions(this.canvas.width,this.canvas.height);for(let h of o)r.draw(h)}}class tt{constructor(e,r,o,f){if(this.worldUp=$(0,1,0),this.projectionMatrix=Me(),this.viewMatrix=Me(),this.fovy=45,this.aspectRatio=1,this.near=.01,this.far=500,this.position=V(),this.direction=V(),this.target=V(),this.up=$(0,1,0),this.counter=0,this.tposition=new de(0,0,0),this.tdirection=new de(0,0,0),this.tup=new de(0,0,0),this.pressedKeys=new Set,this.lastUpdateTime=performance.now(),this.velocity=V(),this.smoothedDeltaTime=.016,this.deltaTimeSmoothingFactor=.05,Ne(this.direction,r,e),this.tposition=new de(e[0],e[1],e[2]),this.tdirection=new de(this.direction[0],this.direction[1],this.direction[2]),this.tup=new de(this.up[0],this.up[1],this.up[2]),this.threeCamera=new qr(this.fovy,this.aspectRatio,this.near,this.far),this.threeCamera.position.set(e[0],e[1],e[2]),this.threeControls=new $r(this.threeCamera,document.getElementById("canvas")),o){const T={LEFT:null,MIDDLE:null,RIGHT:null};f&&(console.log("[DEBUG] Camera: Disabling LEFT button for OrbitControls (brush uses it)"),T.LEFT=null),o.rotateButton&&(!f||o.rotateButton!=="LEFT")&&(T[o.rotateButton]=or.ROTATE),o.panButton&&(!f||o.panButton!=="LEFT")&&(T[o.panButton]=or.PAN),this.threeControls.mouseButtons=T,console.log("[DEBUG] Camera: OrbitControls mouseButtons set to:",T),this.threeControls.rotateSpeed=o.rotateSpeed,this.threeControls.zoomSpeed=o.zoomSpeed,this.threeControls.panSpeed=o.panSpeed,this.threeControls.enableRotate=o.enableRotate,this.threeControls.enablePan=o.enablePan,this.threeControls.enableZoom=o.enableZoom,this.threeControls.enableDamping=o.enableDamping,this.threeControls.dampingFactor=o.dampingFactor}else this.threeControls.enableDamping=!0,this.threeControls.dampingFactor=.08;this.threeControls.keys={LEFT:null,UP:null,RIGHT:null,BOTTOM:null},console.log(this.threeCamera.position),this.threeControls.update(),_e(this.target,this.position,this.direction);let s=new de;this.threeCamera.getWorldDirection(s),this.direction=$(s.x,s.y,s.z),this.position=$(this.threeCamera.position.x,this.threeCamera.position.y,this.threeCamera.position.z),_e(this.target,this.position,this.direction);let h=$(0,0,0);Ne(h,this.position,this.target);let u=$(0,0,0),l=$(0,0,0);Fn(u,this.worldUp,h),Fn(l,u,h),Ie(l,l),Xe(l,l,-1),this.up=l,Kn(this.viewMatrix,this.position,this.target,$(0,1,0))}setAspectRatio(e){this.aspectRatio=e}updateProjectionMatrix(){Ir(this.projectionMatrix,this.fovy,this.aspectRatio,this.near,this.far)}addMovementKey(e){this.pressedKeys.add(e.toLowerCase())}removeMovementKey(e){this.pressedKeys.delete(e.toLowerCase())}isMovementKeyPressed(e){return this.pressedKeys.has(e.toLowerCase())}updateMovement(e,r){if(!r.movement.enableWASD)return;const o=2,f=3,s=r.movement.moveSpeed,h=s*(r.movement.fastMoveMultiplier||3);this.threeCamera.updateMatrixWorld();const u=V(),l=V(),T=V(),v=V(),R=new de;this.threeCamera.getWorldDirection(R),R.y=0,R.length()<.001?R.set(0,0,-1):R.normalize(),u[0]=R.x,u[1]=0,u[2]=R.z,Ye(u)>.001?Ie(u,u):Xn(u,0,0,-1);const p=new de,b=new de(0,1,0);p.crossVectors(R,b),p.y=0,p.length()<.001?(p.set(-R.z,0,R.x),p.length()>.001?p.normalize():p.set(1,0,0)):p.normalize(),l[0]=p.x,l[1]=0,l[2]=p.z,Ye(l)>.001?Ie(l,l):(l[0]=-u[2],l[1]=0,l[2]=u[0],Ye(l)>.001?Ie(l,l):Xn(l,1,0,0)),ce(T,this.worldUp),Xn(v,0,0,0),this.isMovementKeyPressed("w")&&_e(v,v,u),this.isMovementKeyPressed("s")&&Ne(v,v,u),this.isMovementKeyPressed("a")&&Ne(v,v,l),this.isMovementKeyPressed("d")&&_e(v,v,l),r.movement.enableVerticalMovement&&(this.isMovementKeyPressed(" ")&&_e(v,v,T),this.isMovementKeyPressed("shift")&&Ne(v,v,T)),Ye(v)>.001&&Ie(v,v);const x=this.isMovementKeyPressed("shift")&&r.movement.fastMoveMultiplier>1?h:s,D=V();Xe(D,v,x);const P=V();if(Ye(v)>.001){Ne(P,D,this.velocity);const C=o*e;Xe(P,P,Math.min(C,1))}else{const C=f*e;Xe(P,this.velocity,-Math.min(C,1))}_e(this.velocity,this.velocity,P);const A=Ye(this.velocity);A>x&&Xe(this.velocity,this.velocity,x/A);const W=V();Xe(W,this.velocity,e),this.threeCamera.position.x+=W[0],this.threeCamera.position.y+=W[1],this.threeCamera.position.z+=W[2],this.threeControls.target.x+=W[0],this.threeControls.target.y+=W[1],this.threeControls.target.z+=W[2]}update(e){const r=performance.now();let o=(r-this.lastUpdateTime)/1e3;this.lastUpdateTime=r,o=Math.min(o,.1),this.smoothedDeltaTime=this.smoothedDeltaTime*(1-this.deltaTimeSmoothingFactor)+o*this.deltaTimeSmoothingFactor;const s=this.smoothedDeltaTime;e&&this.updateMovement(s,e),this.threeControls.update(),this.threeCamera.updateMatrixWorld();let h=new de;this.threeCamera.getWorldDirection(h),this.direction=$(h.x,h.y,h.z),this.position=$(this.threeCamera.position.x,this.threeCamera.position.y,this.threeCamera.position.z),_e(this.target,this.position,this.direction);let u=$(0,0,0);Ne(u,this.position,this.target);let l=$(0,0,0),T=$(0,0,0);Fn(l,this.worldUp,u),Fn(T,l,u),Ie(T,T),Xe(T,T,-1),this.up=T,this.counter++,Kn(this.viewMatrix,this.position,this.target,$(0,1,0))}}const z={keys:{brushActivate:"LEFT",permanentWaterSource:"r",removePermanentSource:"p"},mouse:{brushActivate:null},modifiers:{brushSizeScroll:"Ctrl",brushInvert:"Shift",brushSecondary:"Alt"},camera:{rotateButton:"RIGHT",panButton:"MIDDLE",rotateSpeed:1,zoomSpeed:1,panSpeed:1,enableRotate:!0,enablePan:!0,enableZoom:!0,enableDamping:!0,dampingFactor:.08,movement:{enableWASD:!0,moveSpeed:.3,fastMoveMultiplier:3,enableVerticalMovement:!0}},raycast:{method:"bvh"}};function cr(n,e){if(n!=="LEFT"&&n!=="MIDDLE"&&n!=="RIGHT"){if(n===e.keys.brushActivate)return"brushActivate";if(n===e.keys.permanentWaterSource)return"permanentWaterSource";if(n===e.keys.removePermanentSource)return"removePermanentSource"}return null}function dr(n,e){if(typeof n=="number"){const o={0:"LEFT",1:"MIDDLE",2:"RIGHT"}[n];return e.mouse.brushActivate?o===e.mouse.brushActivate:o===e.keys.brushActivate}else{const r=n.toLowerCase();return e.keys.brushActivate!=="LEFT"&&e.keys.brushActivate!=="MIDDLE"&&e.keys.brushActivate!=="RIGHT"?r===e.keys.brushActivate:!1}}function sn(n,e){const o={0:"LEFT",1:"MIDDLE",2:"RIGHT"}[n];return console.log("[DEBUG] getMouseButtonAction - button:",n,"-> buttonName:",o,"mouse.brushActivate:",e.mouse.brushActivate,"keys.brushActivate:",e.keys.brushActivate),e.mouse.brushActivate&&o===e.mouse.brushActivate?(console.log("[DEBUG] getMouseButtonAction - MATCH (mouse binding)!"),"brushActivate"):o&&e.keys.brushActivate===o?(console.log("[DEBUG] getMouseButtonAction - MATCH (key binding)!"),"brushActivate"):(console.log("[DEBUG] getMouseButtonAction - NO MATCH"),null)}function Tn(n,e){if(n===null)return!1;switch(n){case"Ctrl":return e.ctrlKey||e.metaKey;case"Shift":return e.shiftKey;case"Alt":return e.altKey;default:return!1}}const _r="webgl-erosion-controls";function Dr(){try{const n=localStorage.getItem(_r);if(n){const e=JSON.parse(n);return at(e)}}catch(n){console.warn("[Settings] Failed to load settings from localStorage:",n)}return z}function it(n){try{localStorage.setItem(_r,JSON.stringify(n,null,2)),console.log("[Settings] Settings saved successfully")}catch(e){console.error("[Settings] Failed to save settings to localStorage:",e)}}function at(n){var r,o,f,s,h,u,l,T,v,R,d,g,p,b,w,S,x,D,P,A,W,C,B,X,N,oe;return{keys:{brushActivate:((r=n.keys)==null?void 0:r.brushActivate)??z.keys.brushActivate,permanentWaterSource:((o=n.keys)==null?void 0:o.permanentWaterSource)??z.keys.permanentWaterSource,removePermanentSource:((f=n.keys)==null?void 0:f.removePermanentSource)??z.keys.removePermanentSource},mouse:{brushActivate:((s=n.mouse)==null?void 0:s.brushActivate)??z.mouse.brushActivate},modifiers:{brushSizeScroll:((h=n.modifiers)==null?void 0:h.brushSizeScroll)??z.modifiers.brushSizeScroll,brushInvert:((u=n.modifiers)==null?void 0:u.brushInvert)??z.modifiers.brushInvert,brushSecondary:((l=n.modifiers)==null?void 0:l.brushSecondary)??z.modifiers.brushSecondary},camera:{rotateButton:((T=n.camera)==null?void 0:T.rotateButton)??z.camera.rotateButton,panButton:((v=n.camera)==null?void 0:v.panButton)??z.camera.panButton,rotateSpeed:((R=n.camera)==null?void 0:R.rotateSpeed)??z.camera.rotateSpeed,zoomSpeed:((d=n.camera)==null?void 0:d.zoomSpeed)??z.camera.zoomSpeed,panSpeed:((g=n.camera)==null?void 0:g.panSpeed)??z.camera.panSpeed,enableRotate:((p=n.camera)==null?void 0:p.enableRotate)??z.camera.enableRotate,enablePan:((b=n.camera)==null?void 0:b.enablePan)??z.camera.enablePan,enableZoom:((w=n.camera)==null?void 0:w.enableZoom)??z.camera.enableZoom,enableDamping:((S=n.camera)==null?void 0:S.enableDamping)??z.camera.enableDamping,dampingFactor:((x=n.camera)==null?void 0:x.dampingFactor)??z.camera.dampingFactor,movement:{enableWASD:((P=(D=n.camera)==null?void 0:D.movement)==null?void 0:P.enableWASD)??z.camera.movement.enableWASD,moveSpeed:((W=(A=n.camera)==null?void 0:A.movement)==null?void 0:W.moveSpeed)??z.camera.movement.moveSpeed,fastMoveMultiplier:((B=(C=n.camera)==null?void 0:C.movement)==null?void 0:B.fastMoveMultiplier)??z.camera.movement.fastMoveMultiplier,enableVerticalMovement:((N=(X=n.camera)==null?void 0:X.movement)==null?void 0:N.enableVerticalMovement)??z.camera.movement.enableVerticalMovement}},raycast:{method:((oe=n.raycast)==null?void 0:oe.method)??z.raycast.method}}}const qn=[{id:0,name:"None",icon:"🚫",color:"#666",shortcut:"0",description:"Disable brush"},{id:1,name:"Terrain",icon:"⛰️",color:"#8B4513",shortcut:"1",description:"Modify terrain height"},{id:2,name:"Water",icon:"💧",color:"#4A90E2",shortcut:"2",description:"Add/remove water"},{id:3,name:"Rock",icon:"🪨",color:"#555",shortcut:"3",description:"Place erosion-resistant rock"},{id:4,name:"Smooth",icon:"✨",color:"#9B59B6",shortcut:"4",description:"Smooth terrain surface"},{id:5,name:"Flatten",icon:"📐",color:"#F39C12",shortcut:"5",description:"Flatten to target height"},{id:6,name:"Slope",icon:"📉",color:"#27AE60",shortcut:"6",description:"Create slope between two points"}],Mr=[{name:"Tiny",value:.5},{name:"Small",value:1},{name:"Medium",value:4},{name:"Large",value:8},{name:"Huge",value:15}],Ur=[{name:"Weak",value:.1},{name:"Normal",value:.25},{name:"Strong",value:.5},{name:"Very Strong",value:1}];function ot(n,e,r,o,f){const s=document.createElement("div");s.id="brush-palette";let h=!1;s.style.cssText=`
        position: fixed;
        top: 20px;
        left: 20px;
        background: rgba(30, 30, 30, 0.95);
        border: 2px solid #555;
        border-radius: 8px;
        padding: 15px;
        z-index: 10000;
        display: flex;
        flex-direction: column;
        gap: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
        font-family: 'Segoe UI', Arial, sans-serif;
        min-width: 200px;
        max-width: 220px;
        user-select: none;
        transition: all 0.3s ease;
    `;let u=!1,l={x:0,y:0};const T=y=>{if(y.target.closest("button, input, select, label"))return;u=!0;const F=s.getBoundingClientRect();l.x=y.clientX-F.left,l.y=y.clientY-F.top,s.style.cursor="grabbing"},v=y=>{u&&(s.style.left=`${y.clientX-l.x}px`,s.style.top=`${y.clientY-l.y}px`)},R=()=>{u=!1,s.style.cursor="default"};s.addEventListener("mousedown",T),document.addEventListener("mousemove",v),document.addEventListener("mouseup",R);const d=document.createElement("div");d.style.cssText=`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;
        cursor: move;
    `;const g=document.createElement("div");g.textContent="Brush Palette",g.style.cssText=`
        color: #fff;
        font-weight: bold;
        font-size: 16px;
        flex: 1;
    `,d.appendChild(g);const p=document.createElement("button");p.textContent="−",p.style.cssText=`
        background: transparent;
        border: 1px solid #555;
        color: #ccc;
        width: 24px;
        height: 24px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 18px;
        line-height: 1;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    `,p.addEventListener("click",y=>{y.stopPropagation(),h=!h;const F=s.querySelector(".palette-content");F&&(F.style.display=h?"none":"flex",p.textContent=h?"+":"−")}),d.appendChild(p),s.appendChild(d);const b=document.createElement("div");b.className="palette-content",b.style.cssText=`
        display: flex;
        flex-direction: column;
        gap: 10px;
    `;const w=document.createElement("div");w.style.cssText=`
        display: flex;
        flex-direction: column;
        gap: 6px;
    `;const S=document.createElement("div");S.textContent="Brush Type:",S.style.cssText=`
        color: #aaa;
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 4px;
    `,w.appendChild(S),qn.forEach(y=>{const F=document.createElement("button");F.className="brush-type-button",F.setAttribute("data-brush-id",y.id.toString());const j=y.shortcut?` [${y.shortcut}]`:"";F.textContent=`${y.icon||""} ${y.name}${j}`,F.title=y.description||y.name,F.style.cssText=`
            padding: 8px 12px;
            border: 2px solid ${y.color||"#666"};
            background: ${n.brushType===y.id?y.color||"#666":"transparent"};
            color: ${n.brushType===y.id?"#fff":y.color||"#ccc"};
            cursor: pointer;
            border-radius: 4px;
            font-size: 12px;
            transition: all 0.2s;
            text-align: left;
            position: relative;
        `,F.addEventListener("mouseenter",()=>{n.brushType!==y.id&&(F.style.background=`${y.color||"#666"}33`,F.style.transform="translateX(2px)")}),F.addEventListener("mouseleave",()=>{n.brushType!==y.id&&(F.style.background="transparent",F.style.transform="translateX(0)")}),F.addEventListener("click",O=>{O.stopPropagation(),e(y.id),me(s,n)}),w.appendChild(F)}),b.appendChild(w);const x=document.createElement("div");x.style.cssText=`
        border-top: 1px solid #555;
        margin: 5px 0;
    `,b.appendChild(x);const D=document.createElement("div");D.style.cssText=`
        display: flex;
        flex-direction: column;
        gap: 5px;
    `;const P=document.createElement("div");P.style.cssText=`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2px;
    `;const A=document.createElement("label");A.textContent=`Size: ${n.brushSize.toFixed(1)}`,A.style.cssText=`
        color: #ccc;
        font-size: 12px;
        font-weight: 500;
    `,P.appendChild(A);const W=document.createElement("div");W.style.cssText=`
        display: flex;
        gap: 2px;
    `,Mr.forEach(y=>{const F=document.createElement("button");F.textContent=y.name[0],F.title=`${y.name}: ${y.value}`,F.style.cssText=`
            width: 20px;
            height: 20px;
            padding: 0;
            font-size: 9px;
            background: ${Math.abs(n.brushSize-y.value)<.1?"#4A90E2":"#333"};
            border: 1px solid #555;
            color: #ccc;
            border-radius: 3px;
            cursor: pointer;
        `,F.addEventListener("click",j=>{j.stopPropagation(),r(y.value),me(s,n)}),W.appendChild(F)}),P.appendChild(W),D.appendChild(P);const C=document.createElement("input");C.type="range",C.min="0.1",C.max="20.0",C.step="0.1",C.value=n.brushSize.toString(),C.style.cssText=`
        width: 100%;
        cursor: pointer;
    `,C.addEventListener("input",y=>{const F=parseFloat(y.target.value);A.textContent=`Size: ${F.toFixed(1)}`,r(F)}),D.appendChild(C),b.appendChild(D);const B=document.createElement("div");B.style.cssText=`
        display: flex;
        flex-direction: column;
        gap: 5px;
    `;const X=document.createElement("div");X.style.cssText=`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2px;
    `;const N=document.createElement("label");N.textContent=`Strength: ${n.brushStrenth.toFixed(2)}`,N.style.cssText=`
        color: #ccc;
        font-size: 12px;
        font-weight: 500;
    `,X.appendChild(N);const oe=document.createElement("div");oe.style.cssText=`
        display: flex;
        gap: 2px;
    `,Ur.forEach(y=>{const F=document.createElement("button");F.textContent=y.name[0],F.title=`${y.name}: ${y.value}`,F.style.cssText=`
            width: 20px;
            height: 20px;
            padding: 0;
            font-size: 9px;
            background: ${Math.abs(n.brushStrenth-y.value)<.01?"#4A90E2":"#333"};
            border: 1px solid #555;
            color: #ccc;
            border-radius: 3px;
            cursor: pointer;
        `,F.addEventListener("click",j=>{j.stopPropagation(),o(y.value),me(s,n)}),oe.appendChild(F)}),X.appendChild(oe),B.appendChild(X);const K=document.createElement("input");K.type="range",K.min="0.1",K.max="2.0",K.step="0.01",K.value=n.brushStrenth.toString(),K.style.cssText=`
        width: 100%;
        cursor: pointer;
    `,K.addEventListener("input",y=>{const F=parseFloat(y.target.value);N.textContent=`Strength: ${F.toFixed(2)}`,o(F)}),B.appendChild(K),b.appendChild(B);const re=document.createElement("div");re.style.cssText=`
        display: flex;
        flex-direction: column;
        gap: 5px;
    `;const He=document.createElement("label");He.textContent="Operation:",He.style.cssText=`
        color: #ccc;
        font-size: 12px;
        font-weight: 500;
    `,re.appendChild(He);const Ee=document.createElement("div");Ee.style.cssText=`
        display: flex;
        gap: 4px;
    `;const ue=document.createElement("button");ue.className="operation-add-btn",ue.textContent="➕ Add",ue.style.cssText=`
        flex: 1;
        padding: 6px;
        background: ${n.brushOperation===0?"#27AE60":"#333"};
        border: 1px solid ${n.brushOperation===0?"#27AE60":"#555"};
        color: #fff;
        border-radius: 4px;
        font-size: 11px;
        cursor: pointer;
        transition: all 0.2s;
    `,ue.addEventListener("click",y=>{y.stopPropagation(),n.brushOperation=0,f(0),me(s,n)});const le=document.createElement("button");if(le.className="operation-subtract-btn",le.textContent="➖ Subtract",le.style.cssText=`
        flex: 1;
        padding: 6px;
        background: ${n.brushOperation===1?"#E74C3C":"#333"};
        border: 1px solid ${n.brushOperation===1?"#E74C3C":"#555"};
        color: #fff;
        border-radius: 4px;
        font-size: 11px;
        cursor: pointer;
        transition: all 0.2s;
    `,le.addEventListener("click",y=>{y.stopPropagation(),n.brushOperation=1,f(1),me(s,n)}),Ee.appendChild(ue),Ee.appendChild(le),re.appendChild(Ee),b.appendChild(re),n.flattenTargetHeight!==void 0){const y=document.createElement("div");y.id="flatten-controls",y.style.cssText=`
            display: ${n.brushType===5?"flex":"none"};
            flex-direction: column;
            gap: 5px;
            padding-top: 8px;
            border-top: 1px solid #555;
        `;const F=document.createElement("label");F.textContent=`Target Height: ${n.flattenTargetHeight.toFixed(1)}`,F.style.cssText=`
            color: #ccc;
            font-size: 11px;
        `,y.appendChild(F);const j=document.createElement("input");j.type="range",j.min="0",j.max="500",j.step="1",j.value=n.flattenTargetHeight.toString(),j.style.cssText="width: 100%;",j.addEventListener("input",O=>{const q=parseFloat(O.target.value);F.textContent=`Target Height: ${q.toFixed(1)}`,n.flattenTargetHeight!==void 0&&(n.flattenTargetHeight=q)}),y.appendChild(j),b.appendChild(y)}s.appendChild(b);const Se=y=>{if(y.target instanceof HTMLInputElement||y.target instanceof HTMLSelectElement)return;const F=qn.find(j=>j.shortcut===y.key);F&&(y.preventDefault(),e(F.id),me(s,n))};return document.addEventListener("keydown",Se),s.cleanup=()=>{document.removeEventListener("keydown",Se),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",R)},s}function me(n,e){var T,v,R,d,g;n.querySelectorAll(".brush-type-button").forEach(p=>{const b=parseInt(p.getAttribute("data-brush-id")||"-1"),w=qn.find(S=>S.id===b);if(w){const S=e.brushType===w.id;p.style.background=S?w.color||"#666":"transparent",p.style.color=S?"#fff":w.color||"#ccc"}});const o=n.querySelector('input[type="range"]'),f=n.querySelector("label");o&&f&&((T=f.textContent)!=null&&T.includes("Size:"))&&(o.value=e.brushSize.toString(),f.textContent=`Size: ${e.brushSize.toFixed(1)}`,Array.from(((v=f.parentElement)==null?void 0:v.querySelectorAll("button"))||[]).forEach((b,w)=>{const S=Mr[w];S&&(b.style.background=Math.abs(e.brushSize-S.value)<.1?"#4A90E2":"#333")}));const s=n.querySelectorAll('input[type="range"]');if(s.length>=2){const p=s[1];p.value=e.brushStrenth.toString();const b=(R=p.parentElement)==null?void 0:R.querySelector("label");b&&((d=b.textContent)!=null&&d.includes("Strength:"))&&(b.textContent=`Strength: ${e.brushStrenth.toFixed(2)}`,Array.from(((g=b.parentElement)==null?void 0:g.querySelectorAll("button"))||[]).forEach((S,x)=>{const D=Ur[x];D&&(S.style.background=Math.abs(e.brushStrenth-D.value)<.01?"#4A90E2":"#333")}))}const h=n.querySelector(".operation-add-btn"),u=n.querySelector(".operation-subtract-btn");h&&u&&(h.style.background=e.brushOperation===0?"#27AE60":"#333",h.style.borderColor=e.brushOperation===0?"#27AE60":"#555",u.style.background=e.brushOperation===1?"#E74C3C":"#333",u.style.borderColor=e.brushOperation===1?"#E74C3C":"#555");const l=n.querySelector("#flatten-controls");l&&(l.style.display=e.brushType===5?"flex":"none")}function st(n,e,r,o,f){const s=document.getElementById("brush-palette");if(s){const u=s.cleanup;u&&u(),s.remove()}const h=ot(n,e,r,o,f);return document.body.appendChild(h),h}function ut(n){const e=new Nr.GUI;var r=e.addFolder("Simulation Controls");r.add(n,"Pause/Resume"),r.add(n,"SimulationSpeed",{fast:3,medium:2,slow:1}),r.open();var o=e.addFolder("Terrain Parameters");o.add(n,"SimulationResolution",{256:256,512:512,1024:1024,2048:2048,4096:4096}),o.add(n,"TerrainScale",.1,4),o.add(n,"TerrainHeight",1,5),o.add(n,"TerrainMask",{OFF:0,Sphere:1,slope:2}),o.add(n,"TerrainBaseType",{ordinaryFBM:0,domainWarp:1,terrace:2,voroni:3,ridgeNoise:4}),o.add(n,"ResetTerrain"),o.add(n,"Import Height Map"),o.add(n,"Clear Height Map"),o.open();var f=e.addFolder("Erosion Parameters"),s=f.addFolder("Rain Erosion Parameters");s.add(n,"RainErosion"),s.add(n,"RainErosionStrength",.1,3),s.add(n,"RainErosionDropSize",.1,3),s.close(),f.add(n,"ErosionMode",{RiverMode:0,MountainMode:1,PolygonalMode:2}),f.add(n,"VelocityAdvectionMag",0,.5),f.add(n,"EvaporationConstant",1e-4,.08),f.add(n,"Kc",.01,.5),f.add(n,"Ks",.001,.2),f.add(n,"Kd",1e-4,.1),f.add(n,"TerrainDebug",{noDebugView:0,sediment:1,velocity:2,velocityHeatmap:9,terrain:3,flux:4,terrainflux:5,maxslippage:6,flowMap:7,spikeDiffusion:8,rockMaterial:10}),f.add(n,"AdvectionMethod",{Semilagrangian:0,MacCormack:1}),f.add(n,"VelocityMultiplier",1,5),f.open();var h=e.addFolder("Thermal Erosion Parameters");h.add(n,"thermalTalusAngleScale",1,10),h.add(n,"thermalErosionScale",0,5);var u=e.addFolder("Terrain Editor");u.add(n,"raycastMethod",{Heightmap:"heightmap",BVH:"bvh"}).onChange(w=>{console.log("[Raycast] Method changed to:",w);const S=Dr();S.raycast.method=w,it(S)});const l=u.add(n,"brushType",{NoBrush:0,TerrainBrush:1,WaterBrush:2,RockBrush:3,SmoothBrush:4,FlattenBrush:5,SlopeBrush:6});l.onChange(w=>{w!==6&&(n.slopeActive=0),window.brushPalette&&me(window.brushPalette,n)});const T=u.add(n,"flattenTargetHeight",0,500);u.add(n,"rockErosionResistance",0,1);const v=u.add(n,"brushSize",.1,20),R=u.add(n,"brushStrenth",.1,2),d=u.add(n,"brushOperation",{Add:0,Subtract:1});u.open();const g=st(n,w=>{n.brushType=w,w!==6&&(n.slopeActive=0),l.updateDisplay()},w=>{n.brushSize=w,v.updateDisplay()},w=>{n.brushStrenth=w},w=>{n.brushOperation=w,d.updateDisplay()});window.brushPalette=g,window.brushSizeController=v,window.flattenTargetHeightController=T,l.onChange(()=>{window.brushPalette&&me(window.brushPalette,n)}),v.onChange(()=>{window.brushPalette&&me(window.brushPalette,n)}),R.onChange(()=>{window.brushPalette&&me(window.brushPalette,n)}),d.onChange(()=>{window.brushPalette&&me(window.brushPalette,n)});var p=e.addFolder("Rendering Parameters");p.add(n,"WaterTransparency",0,1),p.add(n,"TerrainPlatte",{AlpineMtn:0,Desert:1,Jungle:2}),p.add(n,"SnowRange",0,100),p.add(n,"ForestRange",0,50),p.add(n,"ShowFlowTrace"),p.add(n,"SedimentTrace"),p.add(n,"showScattering"),p.add(n,"enableBilateralBlur");var b=p.addFolder("sunPos/Dir");return b.add(n,"lightPosX",-1,1),b.add(n,"lightPosY",0,1),b.add(n,"lightPosZ",-1,1),b.open(),p.open(),{gui:e,controllers:{brushTypeController:l,brushSizeController:v,brushStrengthController:R,brushOperationController:d,flattenTargetHeightController:T}}}const zn=.05,lt=5e-4,ft=25e-5,In=.02,ct=10,dt=200,ht=12,pt=1e-4;function An(n,e,r,o){const f=Math.max(0,Math.min(r-1,Math.floor(n))),h=Math.max(0,Math.min(r-1,Math.floor(e)))*r*4+f*4+0;return h>=0&&h<o.length?o[h]:0}function Ve(n,e,r){const o=Math.max(0,Math.min(1,n[0])),f=Math.max(0,Math.min(1,n[1])),s=o*e,h=f*e,u=Math.floor(s),l=Math.floor(h),T=Math.min(u+1,e-1),v=Math.min(l+1,e-1),R=s-u,d=h-l,g=An(u,l,e,r),p=An(T,l,e,r),b=An(u,v,e,r),w=An(T,v,e,r),S=g*(1-R)+p*R,x=b*(1-R)+w*R;return S*(1-d)+x*d}function hr(n,e,r,o,f){f[0]=-10,f[1]=-10;const s=V(),h=V(),u=De();De();const l=V(),T=V(),v=V(),R=V();ce(s,n),ce(h,n);let d=zn,g=0,p=!1,b=V(),w=De();if(w[0]=(n[0]+.5)/1,w[1]=(n[2]+.5)/1,w[0]>=0&&w[0]<=1&&w[1]>=0&&w[1]<=1){let x=Ve(w,r,o)/r;if(n[1]<=x){f[0]=w[0],f[1]=w[1];return}}for(let S=0;S<dt&&!(g>ct);++S){if(u[0]=(s[0]+.5)/1,u[1]=(s[2]+.5)/1,u[0]<0||u[0]>1||u[1]<0||u[1]>1){if(p)break;l[0]=e[0]*d,l[1]=e[1]*d,l[2]=e[2]*d,_e(s,s,l),g+=d;continue}let D=Ve(u,r,o)/r;if(s[1]<D){ce(b,s),ce(T,h),ce(v,s),p=!0;const A=V();let W=1/0;ce(A,v);for(let B=0;B<ht&&!(Vr(T,v)<pt);++B){Wr(R,T,v,.5);let N=De();if(N[0]=(R[0]+.5)/1,N[1]=(R[2]+.5)/1,N[0]<0||N[0]>1||N[1]<0||N[1]>1)break;let K=Ve(N,r,o)/r;const re=Math.abs(R[1]-K);re<W&&(W=re,ce(A,R)),R[1]<K?ce(T,R):ce(v,R)}ce(b,A);let C=De();if(C[0]=(b[0]+.5)/1,C[1]=(b[2]+.5)/1,C[0]>=0&&C[0]<=1&&C[1]>=0&&C[1]<=1){let X=Ve(C,r,o)/r;const N=.001*(1024/r);b[1]>X+N*2&&ce(b,h)}f[0]=(b[0]+.5)/1,f[1]=(b[2]+.5)/1;break}let P=Math.abs(s[1]-D);P<In*.5?d=ft:P<In?d=lt:P<In*2?d=zn*.5:d=zn,ce(h,s),l[0]=e[0]*d,l[1]=e[1]*d,l[2]=e[2]*d,_e(s,s,l),g+=d}}let ge=null;function tn(){return ge}function Mn(n){ge=n}function mt(n,e){const{controls:r,controlsConfig:o}=e;if(["LEFT","MIDDLE","RIGHT"][n.button],sn(n.button,o)!=="brushActivate")return{shouldActivate:!1,brushPressed:0};let s=1;const h=Number(r.brushType),u=o.modifiers.brushSecondary;if(Tn(u,n))if(h===5){ge===null&&(ge=r.brushOperation),r.brushOperation=1;const T=Ae(r.posTemp[0],r.posTemp[1]),R=Ve(T,e.simres,e.HightMapCpuBuf)/e.simres;if(R!==void 0&&!isNaN(R)){r.flattenTargetHeight=R;const d=document.querySelector("#flatten-controls");if(d){const p=d.querySelector('input[type="range"]'),b=d.querySelector("label");p&&(p.value=R.toString(),p.setAttribute("value",R.toString()),p.dispatchEvent(new Event("input",{bubbles:!0}))),b&&(b.textContent=`Target Height: ${R.toFixed(1)}`)}const g=window.flattenTargetHeightController;g&&g.updateDisplay()}return n.preventDefault(),n.stopPropagation(),n.stopImmediatePropagation(),s=0,{shouldActivate:!1,brushPressed:0}}else if(h===6)if(r.slopeStartPos=jn(r.posTemp),r.slopeActive>=1&&!tr(r.slopeEndPos,Ae(0,0)))r.slopeActive=2;else return r.slopeActive=1,n.preventDefault(),n.stopPropagation(),n.stopImmediatePropagation(),{shouldActivate:!1,brushPressed:0};else ge===null&&(ge=r.brushOperation),r.brushOperation=1;else{if(h===6){if(r.slopeEndPos=jn(r.posTemp),r.slopeActive===2)return n.preventDefault(),n.stopPropagation(),n.stopImmediatePropagation(),{shouldActivate:!1,brushPressed:0};if(r.slopeActive===1&&!tr(r.slopeStartPos,Ae(0,0)))r.slopeActive=2;else return r.slopeActive=1,n.preventDefault(),n.stopPropagation(),n.stopImmediatePropagation(),{shouldActivate:!1,brushPressed:0}}const T=o.modifiers.brushInvert;T&&T!==u&&Tn(T,n)&&(ge=r.brushOperation,r.brushOperation=r.brushOperation===0?1:0)}return{shouldActivate:!0,brushPressed:s}}function Tt(n,e){const{controls:r}=e;sn(n.button,e.controlsConfig)==="brushActivate"&&(Number(r.brushType)===6&&r.slopeActive,ge!==null&&(r.brushOperation=ge,ge=null))}function vt(n,e){const{controls:r}=e,o=Number(r.brushType);if(o===5&&r.brushPressed===1&&r.brushOperation===1){const f=Ae(n[0],n[1]),h=Ve(f,e.simres,e.HightMapCpuBuf)/e.simres;if(h!==void 0&&!isNaN(h)){r.flattenTargetHeight=h;const u=document.querySelector("#flatten-controls");if(u){const T=u.querySelector('input[type="range"]'),v=u.querySelector("label");T&&(T.value=h.toString(),T.setAttribute("value",h.toString()),T.dispatchEvent(new Event("input",{bubbles:!0}))),v&&(v.textContent=`Target Height: ${h.toFixed(1)}`)}const l=window.flattenTargetHeightController;l&&l.updateDisplay()}}o===6&&r.brushPressed===1&&r.slopeActive}const Qe=16;let he=[];function Et(n,e,r){if(he.length<Qe){const o={position:jn(n),size:e,strength:r};return he.push(o),!0}return!1}function Rt(n){if(he.length===0)return!1;let e=0,r=Number.MAX_VALUE;for(let o=0;o<he.length;o++){const f=Gr(he[o].position,n);f<r&&(r=f,e=o)}return he.splice(e,1),!0}function bt(){he=[]}function en(){return he.length}const wt=1024,nn=4096;let Qn=0,xr=!0,er=!1,se=new Float32Array(1024*1024*4),an=0;function yt(){an++}function gt(){an=0}const Pr=200,Ft=2,At=4;function pr(n){const r=n*n;return Math.max(1,Math.round(r/1048576))}function St(n,e,r){if(n){const o=pr(r);return an%(Ft*o)===0}if(e){const o=pr(r);return an%(At*o)===0}return an>=Pr}let E=wt;function _t(n){se=new Float32Array(n*n*4)}let Sn=0,_n=0;function Dt(n){E=n}function $n(n,e){Sn=n,_n=e}function Mt(n){er=n}function Ut(n){Qn=n}function xt(){Qn++}function Un(n){xr=n}let Je=null,hn=null;function Vn(n){Je=n}function Wn(n){hn=n}function Pt(n,e,r){function o(u){const l=u.key.toLowerCase(),T=cr(l,e);if(e.camera.movement.enableWASD&&((l==="w"||l==="a"||l==="s"||l==="d")&&r.addMovementKey(l),l===" "&&e.camera.movement.enableVerticalMovement&&r.addMovementKey(" "),l==="shift"&&e.camera.movement.enableVerticalMovement&&e.modifiers.brushInvert!=="Shift"&&e.modifiers.brushSizeScroll!=="Shift"&&e.modifiers.brushSecondary!=="Shift"&&r.addMovementKey("shift")),dr(l,e)||T==="brushActivate"?n.brushPressed=1:e.keys.brushActivate!=="LEFT"&&e.keys.brushActivate!=="MIDDLE"&&e.keys.brushActivate!=="RIGHT"&&(n.brushPressed=0),n.brushPressed===1){const v=e.modifiers.brushInvert;if(v){const R=Tn(v,u);(v==="Ctrl"&&(l==="control"||l==="meta")||v==="Shift"&&l==="shift"||v==="Alt"&&l==="alt")&&R&&tn()===null&&(Mn(n.brushOperation),n.brushOperation=n.brushOperation===0?1:0,console.log("[DEBUG] Brush operation inverted on modifier press to:",n.brushOperation===0?"Add":"Subtract"))}}T==="permanentWaterSource"&&(u.shiftKey?Rt(n.posTemp)&&(n.sourceCount=en(),console.log(`Removed water source. Remaining: ${en()}`)):Et(n.posTemp,n.brushSize,n.brushStrenth)?(n.sourceCount=en(),console.log(`Added water source at (${n.posTemp[0].toFixed(3)}, ${n.posTemp[1].toFixed(3)}). Total: ${en()}`)):console.log(`Maximum ${Qe} water sources reached`)),T==="removePermanentSource"&&(bt(),n.sourceCount=0,console.log("Removed all water sources"))}function f(u){const l=u.key.toLowerCase(),T=cr(l,e);if(e.camera.movement.enableWASD&&((l==="w"||l==="a"||l==="s"||l==="d")&&r.removeMovementKey(l),l===" "&&r.removeMovementKey(" "),l==="shift"&&r.removeMovementKey("shift")),(dr(l,e)||T==="brushActivate")&&(n.brushPressed=0),n.brushPressed===1){const v=e.modifiers.brushInvert;if(v&&(v==="Ctrl"&&(l==="control"||l==="meta")||v==="Shift"&&l==="shift"||v==="Alt"&&l==="alt")&&tn()!==null){const d=tn();d!==null&&(n.brushOperation=d,Mn(null)),console.log("[DEBUG] Brush operation restored on modifier release to:",n.brushOperation===0?"Add":"Subtract")}}}function s(u){const l=["LEFT","MIDDLE","RIGHT"][u.button];console.log("[DEBUG] onMouseDown CALLED - button:",u.button,"buttonName:",l,"target:",u.target),console.log("[DEBUG] Config - keys.brushActivate:",e.keys.brushActivate,"mouse.brushActivate:",e.mouse.brushActivate);const T=sn(u.button,e);if(console.log("[DEBUG] onMouseDown - action:",T,"brushType:",n.brushType),T==="brushActivate"){const v={controls:n,controlsConfig:e,simres:Number(E),HightMapCpuBuf:se},R=mt(u,v);if(R.shouldActivate){n.brushPressed=R.brushPressed,u.preventDefault(),u.stopPropagation(),u.stopImmediatePropagation(),console.log("[DEBUG] brushPressed set to:",n.brushPressed);return}else return}else console.log("[DEBUG] Not a brush action - button:",u.button,"buttonName:",l),console.log("[DEBUG] Expected - keys.brushActivate:",e.keys.brushActivate,"mouse.brushActivate:",e.mouse.brushActivate)}function h(u){console.log("[DEBUG] onMouseUp CALLED - button:",u.button,"target:",u.target);const l=sn(u.button,e);console.log("[DEBUG] onMouseUp - action:",l),l==="brushActivate"&&(console.log("[DEBUG] Deactivating brush - setting brushPressed = 0"),n.brushPressed=0,Tt(u,{controls:n,controlsConfig:e}),u.preventDefault(),u.stopPropagation(),u.stopImmediatePropagation())}return{onKeyDown:o,onKeyUp:f,onMouseDown:s,onMouseUp:h}}function Ct(n,e,r,o,f){if(f[0]=-10,f[1]=-10,!r||!o)return!1;const s=new de(n[0],n[1],n[2]),h=new de(e[0],e[1],e[2]).normalize(),u=new Yr(s,h),l=r.raycastFirst(u,100);if(l){const T=Zr(l.point,o,l.faceIndex,{});if(T&&T.uv)f[0]=T.uv.x,f[1]=T.uv.y;else{const v=l.point.x,R=l.point.z,d=v+.5,g=R+.5;f[0]=Math.max(0,Math.min(1,d)),f[1]=Math.max(0,Math.min(1,g))}return!0}return!1}function mr(n,e,r=1){const o=new Jr,f=n,s=n,h=f*s,u=new Float32Array(h*3),l=new Float32Array(h*2),T=[];let v=0;const R=De();for(let d=0;d<s;d++)for(let g=0;g<f;g++){const p=g/(f-1),b=d/(s-1);R[0]=p,R[1]=b;const S=Ve(R,n,e)/n,x=(p-.5)*r,D=S,P=(b-.5)*r;u[v++]=x,u[v++]=D,u[v++]=P;const A=(d*f+g)*2;l[A]=p,l[A+1]=b}for(let d=0;d<s-1;d++)for(let g=0;g<f-1;g++){const p=d*f+g,b=d*f+g+1,w=(d+1)*f+g,S=(d+1)*f+g+1;T.push(p,w,b),T.push(b,w,S)}return o.setAttribute("position",new sr(u,3)),o.setAttribute("uv",new sr(l,2)),o.setIndex(T),o.computeBoundingBox(),o}let i,k,Yn,pn,Z,Zn,We,Dn,Pe,un,vn,xn,Pn,mn,I,Te,ke,ln,Ke,fn,je,cn,ve,Fe,ne,Ce,Ge,Ue,Be,on,En,Cr=null;function J(n,e,r){let o=i.createTexture();return i.bindTexture(i.TEXTURE_2D,o),i.texImage2D(i.TEXTURE_2D,0,i.RGBA32F,n,e,0,i.RGBA,i.FLOAT,null),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,r),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,r),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),o}function Q(n,e,r,o){i.bindTexture(i.TEXTURE_2D,o),i.texImage2D(i.TEXTURE_2D,0,i.RGBA32F,n,e,0,i.RGBA,i.FLOAT,null),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,r),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,r),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}function ze(n,e,r){let o=i.createTexture();return i.bindTexture(i.TEXTURE_2D,o),i.texImage2D(i.TEXTURE_2D,0,i.RGBA32F,n,e,0,i.RGBA,i.FLOAT,null),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,r),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,r),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),o}function Bt(n,e){i=n;let r=i.LINEAR;Q(e,e,r,I),Q(e,e,r,Te),Q(e,e,r,ke),Q(e,e,r,ln),Q(e,e,r,Ke),Q(e,e,r,fn),Q(e,e,r,je),Q(e,e,r,cn),Q(e,e,r,ve),Q(e,e,r,Fe),Q(e,e,r,ne),Q(e,e,r,Ce),Q(e,e,r,Ge),Q(e,e,r,Ue),Q(e,e,r,Be),Q(e,e,r,on),Q(e,e,r,En),i.bindRenderbuffer(i.RENDERBUFFER,Z),i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT16,e,e),i.bindTexture(i.TEXTURE_2D,null),i.bindRenderbuffer(i.RENDERBUFFER,null)}function kt(n,e){i=n;let r=i.LINEAR;I=J(e,e,r),Te=J(e,e,r),ke=J(e,e,r),ln=J(e,e,r),Ke=J(e,e,r),fn=J(e,e,r),je=J(e,e,r),cn=J(e,e,r),ve=J(e,e,r),Fe=J(e,e,r),ne=J(e,e,r),Ce=J(e,e,r),Ge=J(e,e,r),Ue=J(e,e,r),Be=J(e,e,r),on=J(e,e,r),En=J(e,e,r),Dn=ze(nn,nn,i.LINEAR),Pe=ze(window.innerWidth,window.innerHeight,i.LINEAR),un=ze(window.innerWidth,window.innerHeight,i.LINEAR),vn=ze(window.innerWidth,window.innerHeight,i.LINEAR),xn=ze(window.innerWidth,window.innerHeight,i.LINEAR),Pn=ze(window.innerWidth,window.innerHeight,i.LINEAR),mn=ze(window.innerWidth,window.innerHeight,i.LINEAR),Yn=i.createFramebuffer(),Zn=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Zn),i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT16,nn,nn),pn=i.createFramebuffer(),We=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,We),i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT16,window.innerWidth,window.innerHeight),k=i.createFramebuffer(),Z=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z),i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT16,e,e),i.bindTexture(i.TEXTURE_2D,null),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ht(){i.bindTexture(i.TEXTURE_2D,Pn),i.texImage2D(i.TEXTURE_2D,0,i.RGBA32F,window.innerWidth,window.innerHeight,0,i.RGBA,i.FLOAT,null),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.bindTexture(i.TEXTURE_2D,mn),i.texImage2D(i.TEXTURE_2D,0,i.RGBA32F,window.innerWidth,window.innerHeight,0,i.RGBA,i.FLOAT,null),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.bindTexture(i.TEXTURE_2D,xn),i.texImage2D(i.TEXTURE_2D,0,i.RGBA32F,window.innerWidth,window.innerHeight,0,i.RGBA,i.FLOAT,null),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.bindTexture(i.TEXTURE_2D,vn),i.texImage2D(i.TEXTURE_2D,0,i.RGBA32F,window.innerWidth,window.innerHeight,0,i.RGBA,i.FLOAT,null),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.bindTexture(i.TEXTURE_2D,un),i.texImage2D(i.TEXTURE_2D,0,i.RGBA32F,window.innerWidth,window.innerHeight,0,i.RGBA,i.FLOAT,null),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.bindTexture(i.TEXTURE_2D,Pe),i.texImage2D(i.TEXTURE_2D,0,i.RGBA32F,window.innerWidth,window.innerHeight,0,i.RGBA,i.FLOAT,null),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.bindRenderbuffer(i.RENDERBUFFER,We),i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT16,window.innerWidth,window.innerHeight)}function Tr(n){Cr=n}function Jn(){return Cr}function Ze(){const n=I;I=Te,Te=n}function Lt(){const n=ke;ke=ln,ln=n}function Gn(){const n=ve;ve=Fe,Fe=n}function vr(){const n=ne;ne=Ce,Ce=n}function Ot(){const n=Ue;Ue=Be,Be=n}function Nt(){const n=je;je=cn,cn=n}function Xt(){const n=Ke;Ke=fn,fn=n}function zt(){const n=un;un=vn,vn=n}function It(n,e,r){function o(){const s=document.createElement("input");s.type="file",s.accept="image/*",s.onchange=h=>{var T;const u=(T=h.target.files)==null?void 0:T[0];if(!u)return;const l=new FileReader;l.onload=v=>{var d;const R=new Image;R.onload=()=>{const g=document.createElement("canvas");g.width=e,g.height=e;const p=g.getContext("2d");if(!p)return;p.drawImage(R,0,0,e,e);const b=p.getImageData(0,0,e,e),w=new Float32Array(e*e*4),S=r.TerrainHeight*120;for(let D=0;D<e*e;D++){const P=b.data[D*4],A=b.data[D*4+1],W=b.data[D*4+2],B=(P*.299+A*.587+W*.114)/255*S;w[D*4]=B,w[D*4+1]=0,w[D*4+2]=0,w[D*4+3]=1}let x=Jn();x||(x=n.createTexture()),n.bindTexture(n.TEXTURE_2D,x),n.texImage2D(n.TEXTURE_2D,0,n.RGBA32F,e,e,0,n.RGBA,n.FLOAT,w),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.bindTexture(n.TEXTURE_2D,null),Tr(x),Un(!0),console.log("Height map loaded successfully")},R.src=(d=v.target)==null?void 0:d.result},l.readAsDataURL(u)},s.click()}function f(){const s=Jn();s&&(n.deleteTexture(s),Tr(null),Un(!0),console.log("Height map cleared, using procedural generation"))}return{loadHeightMap:o,clearHeightMap:f}}const Er=new Map;function m(n,e){let r=Er.get(n);if(r||(r=new Map,Er.set(n,r)),!r.has(e)){const o=a.getUniformLocation(n,e);return r.set(e,o),o}return r.get(e)}function Y(n,e,r,o,f,s,h){e.bindRenderbuffer(e.RENDERBUFFER,Z),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,E,E),e.bindFramebuffer(e.FRAMEBUFFER,k),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,f,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT3,e.TEXTURE_2D,null,0),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,Z),e.drawBuffers([e.COLOR_ATTACHMENT0]);let u=e.checkFramebufferStatus(e.FRAMEBUFFER);u!==e.FRAMEBUFFER_COMPLETE&&console.log("frame buffer status:"+u.toString()),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.viewport(0,0,E,E),e.bindFramebuffer(e.FRAMEBUFFER,k),n.clear(),o.use();const l=Jn();h&&o===h&&l?(e.uniform1i(e.getUniformLocation(o.prog,"u_UseHeightMap"),1),e.activeTexture(e.TEXTURE0+10),e.bindTexture(e.TEXTURE_2D,l),e.uniform1i(e.getUniformLocation(o.prog,"u_HeightMap"),10)):h&&o===h&&e.uniform1i(e.getUniformLocation(o.prog,"u_UseHeightMap"),0),n.render(r,o,[s]),e.bindFramebuffer(e.FRAMEBUFFER,null)}function Vt(n,e){const r=a.getUniformLocation(n,"u_TerrainType");r!==-1&&a.uniform1i(r,e)}function Wt(n,e){const r=a.getUniformLocation(n,"u_TerrainDebug");r!==-1&&a.uniform1i(r,e)}function Gt(n,e){const r=a.getUniformLocation(n,"u_TerrainScale");r!==-1&&a.uniform1f(r,e)}function Kt(n,e){const r=a.getUniformLocation(n,"u_TerrainHeight");r!==-1&&a.uniform1f(r,e)}function jt(n,e){const r=a.getUniformLocation(n,"u_RndTerrain");r!==-1&&a.uniform1i(r,e)}const Rr=new Map;function dn(n,e){let r=Rr.get(n);if(r||(r=new Map,Rr.set(n,r)),!r.has(e)){const o=a.getUniformLocation(n,e);return r.set(e,o),o}return r.get(e)}function qt(n,e){const r=dn(n,"u_BrushType");r!==null&&r!==-1&&a.uniform1i(r,e)}function $t(n,e){const r=dn(n,"u_BrushSize");r!==null&&r!==-1&&a.uniform1f(r,e)}function Yt(n,e){const r=dn(n,"u_BrushStrength");r!==null&&r!==-1&&a.uniform1f(r,e)}function Zt(n,e){const r=dn(n,"u_BrushOperation");r!==null&&r!==-1&&a.uniform1i(r,e)}function Jt(n,e){const r=dn(n,"u_BrushPos");r!==null&&r!==-1&&a.uniform2fv(r,e)}function Qt(n,e){const r=dn(n,"u_BrushPressed");r!==null&&r!==-1&&a.uniform1i(r,e)}function ei(n,e){const r=a.getUniformLocation(n,"u_SimRes");r!==-1&&a.uniform1f(r,e)}function ni(n,e){const r=a.getUniformLocation(n,"u_PipeLen");r!==-1&&a.uniform1f(r,e)}function ri(n,e){const r=a.getUniformLocation(n,"u_Ks");r!==-1&&a.uniform1f(r,e)}function ti(n,e){const r=a.getUniformLocation(n,"u_Kc");r!==-1&&a.uniform1f(r,e)}function ii(n,e){const r=a.getUniformLocation(n,"u_Kd");r!==-1&&a.uniform1f(r,e)}function ai(n,e){const r=a.getUniformLocation(n,"u_RockErosionResistance");r!==-1&&a.uniform1f(r,e)}function oi(n,e){const r=a.getUniformLocation(n,"u_timestep");r!==-1&&a.uniform1f(r,e)}function si(n,e){const r=a.getUniformLocation(n,"u_PipeArea");r!==-1&&a.uniform1f(r,e)}var br=null;class _{constructor(e,r){if(this.shader=a.createShader(e),a.shaderSource(this.shader,r),a.compileShader(this.shader),!a.getShaderParameter(this.shader,a.COMPILE_STATUS))throw a.getShaderInfoLog(this.shader)}}class G{constructor(e){this.uniformLocationCache=new Map,this.prog=a.createProgram();for(let r of e)a.attachShader(this.prog,r.shader);if(a.linkProgram(this.prog),!a.getProgramParameter(this.prog,a.LINK_STATUS))throw a.getProgramInfoLog(this.prog);this.attrPos=a.getAttribLocation(this.prog,"vs_Pos"),this.attrNor=a.getAttribLocation(this.prog,"vs_Nor"),this.attrCol=a.getAttribLocation(this.prog,"vs_Col"),this.attrUv=a.getAttribLocation(this.prog,"vs_Uv"),this.unifModel=a.getUniformLocation(this.prog,"u_Model"),this.unifModelInvTr=a.getUniformLocation(this.prog,"u_ModelInvTr"),this.unifViewProj=a.getUniformLocation(this.prog,"u_ViewProj"),this.unifPlanePos=a.getUniformLocation(this.prog,"u_PlanePos"),this.unifSpanwPos=a.getUniformLocation(this.prog,"u_SpawnPos"),this.unifMouseWorldPos=a.getUniformLocation(this.prog,"u_MouseWorldPos"),this.unifMouseWorldDir=a.getUniformLocation(this.prog,"u_MouseWorldDir"),this.unifSimRes=a.getUniformLocation(this.prog,"u_SimRes"),this.unifPipeLen=a.getUniformLocation(this.prog,"u_PipeLen"),this.unifKs=a.getUniformLocation(this.prog,"u_Ks"),this.unifKc=a.getUniformLocation(this.prog,"u_Kc"),this.unifKd=a.getUniformLocation(this.prog,"u_Kd"),this.unifRockErosionResistance=a.getUniformLocation(this.prog,"u_RockErosionResistance"),this.unifTimestep=a.getUniformLocation(this.prog,"u_timestep"),this.unifPipeArea=a.getUniformLocation(this.prog,"u_PipeArea"),this.unifEye=a.getUniformLocation(this.prog,"u_Eye"),this.unifRef=a.getUniformLocation(this.prog,"u_Ref"),this.unifUp=a.getUniformLocation(this.prog,"u_Up"),this.unifDimensions=a.getUniformLocation(this.prog,"u_Dimensions"),this.unifTime=a.getUniformLocation(this.prog,"u_Time"),this.unifWaterTransparency=a.getUniformLocation(this.prog,"u_WaterTransparency"),this.unifRndTerrain=a.getUniformLocation(this.prog,"u_RndTerrain"),this.unifTerrainType=a.getUniformLocation(this.prog,"u_TerrainType"),this.unifTerrainDebug=a.getUniformLocation(this.prog,"u_TerrainDebug"),this.unifTerrainScale=a.getUniformLocation(this.prog,"u_TerrainScale"),this.unifTerrainHeight=a.getUniformLocation(this.prog,"u_TerrainHeight"),this.unifBrushSize=a.getUniformLocation(this.prog,"u_BrushSize"),this.unifBrushType=a.getUniformLocation(this.prog,"u_BrushType"),this.unifBrushStrength=a.getUniformLocation(this.prog,"u_BrushStrength"),this.unifBrushOperation=a.getUniformLocation(this.prog,"u_BrushOperation"),this.unifBrushPressed=a.getUniformLocation(this.prog,"u_BrushPressed"),this.unifBrusPos=a.getUniformLocation(this.prog,"u_BrushPos")}use(){br!==this.prog&&(a.useProgram(this.prog),br=this.prog)}setModelMatrix(e){if(this.use(),this.unifModel!==-1&&a.uniformMatrix4fv(this.unifModel,!1,e),this.unifModelInvTr!==-1){let r=Me();Kr(r,e),Ar(r,r),a.uniformMatrix4fv(this.unifModelInvTr,!1,r)}}setViewProjMatrix(e){this.use(),this.unifViewProj!==-1&&a.uniformMatrix4fv(this.unifViewProj,!1,e)}getUniformLocation(e){if(!this.uniformLocationCache.has(e)){const r=a.getUniformLocation(this.prog,e);return this.uniformLocationCache.set(e,r),r}return this.uniformLocationCache.get(e)}setInt(e,r){this.use();const o=this.getUniformLocation(r);o!==null&&o!==-1&&a.uniform1i(o,e)}setFloat(e,r){this.use();const o=this.getUniformLocation(r);o!==null&&o!==-1&&a.uniform1f(o,e)}setVec2(e,r){this.use();const o=this.getUniformLocation(r);o!==null&&o!==-1&&a.uniform2fv(o,e)}setTime(e){this.use(),this.unifTime!==-1&&a.uniform1f(this.unifTime,e)}setWaterTransparency(e){this.use(),this.unifWaterTransparency!==-1&&a.uniform1f(this.unifWaterTransparency,e)}setDimensions(e,r){this.use(),this.unifDimensions!==-1&&a.uniform2f(this.unifDimensions,e,r)}setTerrainType(e){this.use(),Vt(this.prog,e)}setBrushType(e){this.use(),qt(this.prog,e)}setBrushSize(e){this.use(),$t(this.prog,e)}setBrushStrength(e){this.use(),Yt(this.prog,e)}setBrushOperation(e){this.use(),Zt(this.prog,e)}setBrushPos(e){this.use(),Jt(this.prog,e)}setBrushPressed(e){this.use(),Qt(this.prog,e)}setSourceCount(e){this.use();const r=this.getUniformLocation("u_SourceCount");r!==null&&r!==-1&&a.uniform1i(r,e)}setSourcePositions(e){this.use();const r=this.getUniformLocation("u_SourcePositions");r!==null&&r!==-1&&a.uniform2fv(r,e)}setSourceSizes(e){this.use();const r=this.getUniformLocation("u_SourceSizes");r!==null&&r!==-1&&a.uniform1fv(r,e)}setSourceStrengths(e){this.use();const r=this.getUniformLocation("u_SourceStrengths");r!==-1&&a.uniform1fv(r,e)}setTerrainDebug(e){this.use(),Wt(this.prog,e)}setTerrainScale(e){this.use(),Gt(this.prog,e)}setTerrainHeight(e){this.use(),Kt(this.prog,e)}setSpawnPos(e){this.use(),this.unifSpanwPos!==-1&&a.uniform2fv(this.unifSpanwPos,e)}setMouseWorldPos(e){this.use(),this.unifMouseWorldPos!==-1&&a.uniform4fv(this.unifMouseWorldPos,e)}setMouseWorldDir(e){this.use(),this.unifMouseWorldDir!==-1&&a.uniform3fv(this.unifMouseWorldDir,e)}setRndTerrain(e){this.use(),jt(this.prog,e)}setPlanePos(e){this.use(),this.unifPlanePos!==-1&&a.uniform2fv(this.unifPlanePos,e)}setEyeRefUp(e,r,o){this.use(),this.unifEye!==-1&&a.uniform3f(this.unifEye,e[0],e[1],e[2]),this.unifRef!==-1&&a.uniform3f(this.unifRef,r[0],r[1],r[2]),this.unifUp!==-1&&a.uniform3f(this.unifUp,o[0],o[1],o[2])}setPipeLen(e){this.use(),ni(this.prog,e)}setKs(e){this.use(),ri(this.prog,e)}setKc(e){this.use(),ti(this.prog,e)}setTimestep(e){this.use(),oi(this.prog,e)}setPipeArea(e){this.use(),si(this.prog,e)}setKd(e){this.use(),ii(this.prog,e)}setRockErosionResistance(e){this.use(),ai(this.prog,e)}setSimres(e){this.use(),ei(this.prog,e)}draw(e){this.use(),this.attrPos!=-1&&e.bindPos()&&(a.enableVertexAttribArray(this.attrPos),a.vertexAttribPointer(this.attrPos,4,a.FLOAT,!1,0,0)),this.attrNor!=-1&&e.bindNor()&&(a.enableVertexAttribArray(this.attrNor),a.vertexAttribPointer(this.attrNor,4,a.FLOAT,!1,0,0)),this.attrUv!=-1&&e.bindUv()&&(a.enableVertexAttribArray(this.attrUv),a.vertexAttribPointer(this.attrUv,2,a.FLOAT,!1,0,0)),e.bindIdx(),a.drawElements(e.drawMode(),e.elemCount(),a.UNSIGNED_INT,0),this.attrPos!=-1&&a.disableVertexAttribArray(this.attrPos),this.attrNor!=-1&&a.disableVertexAttribArray(this.attrNor),this.attrUv!=-1&&a.disableVertexAttribArray(this.attrUv)}}const wr=`#version 300 es


uniform mat4 u_Model;
uniform mat4 u_ModelInvTr;
uniform mat4 u_ViewProj;
uniform vec2 u_PlanePos; // Our location in the virtual world displayed by the plane

uniform mat4 u_sproj;
uniform mat4 u_sview;

uniform sampler2D hightmap;
uniform sampler2D sedimap;
uniform float u_SimRes;

in vec4 vs_Pos;
in vec4 vs_Nor;
in vec4 vs_Col;
in vec2 vs_Uv;

out vec3 fs_Pos;
out vec4 fs_Nor;
out vec4 fs_Col;
out vec2 fs_Uv;
out vec4 fs_shadowPos;



void main()
{

  fs_Uv = vs_Uv;
  float sval = 1.f*texture(sedimap,vs_Uv).x;
  float yval = 1.f*texture(hightmap,vs_Uv).x;
  float wval = 1.f*texture(hightmap,vs_Uv).y;
  vec4 modelposition = vec4(vs_Pos.x, (yval )/u_SimRes , vs_Pos.z, 1.0);
  fs_Pos = modelposition.xyz;


  modelposition = u_Model * modelposition;

  fs_shadowPos = u_sproj * u_sview * modelposition;

  gl_Position = u_ViewProj * modelposition;
}
`,ui=`#version 300 es
precision highp float;

uniform vec2 u_PlanePos; // Our location in the virtual world displayed by the plane


in vec3 fs_Pos;
in vec4 fs_Nor;
in vec4 fs_Col;
in float fs_Sine;
in vec2 fs_Uv;
in vec4 fs_shadowPos;

uniform sampler2D hightmap;
uniform sampler2D normap;
uniform sampler2D sedimap;
uniform sampler2D velmap;
uniform sampler2D fluxmap;
uniform sampler2D terrainfluxmap;
uniform sampler2D maxslippagemap;
uniform sampler2D sediBlend;
uniform sampler2D shadowMap;
uniform sampler2D sceneDepth;

#define PI 3.1415926


layout (location = 0) out vec4 out_Col; // This is the final output color that you will see on your
layout (location = 1) out vec4 col_reflect;
                  // screen for the pixel that is currently being processed.
uniform vec3 u_Eye, u_Ref, u_Up;
uniform vec2 u_Dimensions;
uniform int u_TerrainDebug;
uniform int u_SedimentTrace;

uniform vec4 u_MouseWorldPos;
uniform vec3 u_MouseWorldDir;
uniform float u_BrushSize;
uniform int u_BrushType;
uniform vec2 u_BrushPos;
uniform float u_SimRes;
uniform float u_SnowRange;
uniform float u_ForestRange;
uniform int u_TerrainPlatte;
uniform vec3 unif_LightPos;
uniform int u_SourceCount;
uniform vec2 u_SourcePositions[16];  // Max 16 sources
uniform float u_SourceSizes[16];
uniform int u_FlowTrace;


uniform mat4 u_sproj;
uniform mat4 u_sview;

vec3 calnor(vec2 uv){
    float eps = 1.f/u_SimRes;
    vec4 cur = texture(hightmap,uv);
    vec4 r = texture(hightmap,uv+vec2(eps,0.f));
    vec4 t = texture(hightmap,uv+vec2(0.f,eps));
    vec4 b = texture(hightmap,uv+vec2(0.f,-eps));
    vec4 l = texture(hightmap,uv+vec2(-eps,0.f));

    vec3 nor = vec3(l.x - r.x, 2.0, t.x - b.x);
    nor = -normalize(nor);
    return nor;
}

    #define OCTAVES 12

float random (in vec2 st) {
    return fract(sin(dot(st.xy,
    vec2(12.9898,78.233)))*
    43758.5453123);
}


float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
    (c - a)* u.y * (1.0 - u.x) +
    (d - b) * u.x * u.y;
}


float fbm (in vec2 st) {
    // Initial values
    float value = 0.0;
    float amplitude = .5;
    float frequency = 0.;
    //
    // Loop of octaves
    for (int i = 0; i < OCTAVES; i++) {
        value += amplitude * noise(st);//iqnoise(st,1.f,1.f);
        st *= 2.0;
        amplitude *= .33;
    }
    return value;
}


float computeTerrainAO(){
    vec4 HC = texture(hightmap,fs_Uv);
    return 1.0;
}

void main()
{

    vec3 sundir = unif_LightPos;
    sundir = normalize(sundir);
    float angle = dot(sundir,vec3(0.0,1.0,0.0));
    vec3 hue = mix(vec3(255.0,255.0,255.0)/256.0, vec3(255.0,120.0,20.0)/256.0, 1.0 - angle);

    float shadowVal = 1.0f;
    vec3 shadowCol = vec3(1.0);
    vec3 ambientCol = vec3(0.01);
    vec3 shadowMapLoc = fs_shadowPos.xyz / fs_shadowPos.w;
    shadowMapLoc = shadowMapLoc*0.5+0.5;
    float texsize = 1.0/4096.0f;
    for(int x = -1; x <= 1; ++x)
    {
        for(int y = -1; y <= 1; ++y)
        {
            float pcfDepth = texture(shadowMap, shadowMapLoc.xy + vec2(x, y) * texsize).r;
            shadowVal += shadowMapLoc.z - 0.0001 > pcfDepth ? .1 : 1.;
            shadowCol += shadowMapLoc.z - 0.0001 > pcfDepth ? vec3(0.02,0.01,0.09) : vec3(1.0);
        }
    }
    shadowVal/=9.0;
    shadowCol/=9.0;
    float shadowColorVal = texture(shadowMap, fs_Uv.xy).x;

    vec3 forestcol = vec3(63.0/255.0,155.0/255.0,7.0/255.0)*0.6;
    vec3 mtncolor = vec3(0.99,0.99,0.99);
    vec3 dirtcol = vec3(0.45,0.45,0.45);
    vec3 grass = vec3(193.0/255.0,235.0/255.0,27.0/255.0);
    vec3 sand = vec3(214.f/255.f,184.f/255.f,96.f/255.f);
    vec3 watercol = vec3(0.1,0.3,0.8);
    vec3 permanentCol = vec3(0.8,0.1,0.2);
    vec3 obsidian = vec3(0.2);

    vec3 rock1 = vec3(0.4,0.4,0.4);
    vec3 rock2 = vec3(0.2,0.2,0.2);
    vec3 rock3 = vec3(0.1,0.1,0.1);




    vec3 addcol = vec3(0.0);
    // Only calculate brush visualization if brush is active (brushType != 0)
    // Note: We don't check u_BrushPressed here because we want to show the brush preview
    // even when not actively painting, but we can optimize by checking brushType first
    if(u_BrushType != 0){
        vec2 pointOnPlane = u_BrushPos;
        float pdis2fragment = distance(pointOnPlane, fs_Uv);
        // Early exit: only do expensive calculations if fragment is within brush radius
        if (pdis2fragment < 0.01 * u_BrushSize){
            float dens = (0.01 * u_BrushSize - pdis2fragment) / (0.01 * u_BrushSize);

            if(u_BrushType == 1){
                addcol = sand * 0.8;
            }else if(u_BrushType == 2){
                addcol = watercol * 0.8;
            }else if(u_BrushType == 3){
                addcol = rock1 * 0.8;
            }else if(u_BrushType == 4){
                // Smooth brush - light blue
                addcol = vec3(0.5, 0.8, 1.0) * 0.8;
            }else if(u_BrushType == 5){
                // Flatten brush - yellow
                addcol = vec3(1.0, 1.0, 0.3) * 0.8;
            }else if(u_BrushType == 6){
                // Slope brush - green
                addcol = vec3(0.3, 1.0, 0.3) * 0.8;
            }
            addcol *= 1.0;
        }

    }

    // Visualize all water sources
    for(int i = 0; i < u_SourceCount; i++){
        vec2 pointOnPlane = u_SourcePositions[i];
        float pdis2fragment = distance(pointOnPlane, fs_Uv);
        float sourceSize = u_SourceSizes[i];
        
        if (pdis2fragment < 0.01 * sourceSize){
            float dens = (0.01 * sourceSize - pdis2fragment) / (0.01 * sourceSize);
            vec3 sourceCol = permanentCol * 0.8;
            addcol += sourceCol * dens * 5.0;
        }
    }





    vec3 slopesin = texture(normap,fs_Uv).xyz;
    vec3 nor = -calnor(fs_Uv);



    float lamb = dot(nor,vec3(sundir.x,sundir.y,-sundir.z));


    //lamb =1.f;
    vec4 fH = texture(hightmap,fs_Uv);
    float yval = fH.x * 4.0;
    float wval = fH.y;
    float rockVal = fH.z; // Rock material value (1.0 = rock, 0.0 = normal)
    float sval = texture(sediBlend, fs_Uv).x;

    vec3 finalcol = vec3(0);

    float lowH = 0.0;
    float midH = 300.0;
    float highH = 600.0;

    if(u_TerrainPlatte == 1){
        forestcol = mtncolor;
    }else if(u_TerrainPlatte == 2){
        highH = 2000.0;
    }

    if(yval<=midH){
        finalcol = forestcol;
    }else if(yval>midH&&yval<=highH){
        finalcol = mix(forestcol,mtncolor,(yval-midH)/(highH-midH));
    }else if(yval>highH){

            finalcol = mtncolor;


    }

    finalcol =  mix(mtncolor, finalcol, clamp( pow(abs(nor.y), u_ForestRange), 0.0, 1.0));

    if(abs(nor.y)<0.75){
        finalcol = mix(dirtcol,finalcol,pow(abs(nor.y)/0.75,u_SnowRange));
    }

    // Apply rock material color (rock is darker than regular terrain)
    if(rockVal > 0.1){
        // Use darker rock colors - mix between rock3 (darkest) and rock2 based on rock value
        vec3 rockCol = mix(rock3, rock2, clamp((rockVal - 0.1) / 0.9, 0.0, 1.0));
        
        // Check if there's sediment on top of rock
        float baseRockHeight = fH.w;
        float sedimentLayerThickness = 0.0;
        float sedimentBlendFactor = 0.0;
        
        // Check if base rock height is valid and current height is significantly above it
        // If base height is very close to current height (within 0.01), it means new rock was placed (no sediment)
        float heightDiff = fH.x - baseRockHeight;
        if(baseRockHeight > 0.001 && abs(heightDiff) > 0.01){
            // There's sediment on top of rock (height is significantly above base)
            // Only apply blending if height is above base (positive difference)
            if(heightDiff > 0.0){
                sedimentLayerThickness = heightDiff;
                // Blend factor: 0.0 = pure rock, 1.0 = pure dirt
                // Use a smooth curve - more sediment = more dirt color
                // At 0.1 units of sediment, it should be mostly dirt
                sedimentBlendFactor = smoothstep(0.0, 0.1, sedimentLayerThickness);
            }
        }
        // If abs(heightDiff) <= 0.01, treat as no sediment (new rock was placed, base was reset to current height)
        
        // Blend between rock color and dirt color based on sediment coverage
        vec3 surfaceCol = mix(rockCol, dirtcol, sedimentBlendFactor);
        
        // Apply the blended color - reduce rock color influence when there's sediment on top
        // When sedimentBlendFactor is high, apply dirt color directly to look like normal dirt
        if(sedimentBlendFactor > 0.8){
            // Mostly covered with sediment - apply dirt color directly, no rock color
            finalcol = mix(finalcol, dirtcol, 0.9);
        } else {
            // Partially covered or no sediment - apply blended rock/sediment color
            float rockColorStrength = min(rockVal * 1.5, 1.0) * (1.0 - sedimentBlendFactor * 0.7);
            finalcol = mix(finalcol, surfaceCol, rockColorStrength);
        }
    }

    vec3 normal = lamb*(finalcol) + ambientCol;
    vec3 fcol = normal;
    bool debug = true;
    //normal : 0, sediment : 1, velocity : 2, terrain : 3, flux : 4
    if(u_TerrainDebug == 0){
        fcol = normal;
        debug = false;
    }else if(u_TerrainDebug == 1){
        fcol = texture(sedimap,fs_Uv).xyz * 2.0;
    }else if(u_TerrainDebug == 2){
        fcol = abs(texture(velmap,fs_Uv).xyz/20.0);
    }else if(u_TerrainDebug == 9){

        //fcol = vec3(length(texture(velmap,fs_Uv).xyz)/5.0);

        float velSize = length(texture(velmap,fs_Uv).xyz) / 5.0;
        velSize = 1.0 - exp(-velSize); // 1 - pow(e, -x)
        float midVelBlend = 0.5;
        float highVelBlend = 1.0;
        float maxVelBlend = 1.0;
        if(velSize <= midVelBlend && velSize >= 0.0){
            fcol = mix(vec3(0.0,0.0,1.0), vec3(0.0,1.0,0.0), (velSize - 0.0) / (midVelBlend - 0.0));
        }else  if( velSize >=midVelBlend){
            fcol = mix(vec3(0.0,1.0,0.0), vec3(1.0,0.0,0.0), (velSize - midVelBlend) / (highVelBlend - midVelBlend));
        }
        if(wval < 0.0001){
            fcol = vec3(0.0);
        }

        //fcol = nor1;
        //fcol.xy = fcol.xy / 2.0 + vec2(0.5);
    }else if(u_TerrainDebug == 3){
        fcol = texture(hightmap,fs_Uv).xyz;
        fcol.xy /= 200.0;
        fcol.y *= 80.0;
        //fcol = vec3(fcol.z);
    }else if(u_TerrainDebug == 4){
        fcol = texture(fluxmap,fs_Uv).xyz / 3.0;
        if(fcol == vec3(0.0)){
            fcol = vec3(texture(fluxmap,fs_Uv).w)/3.0;
        }
    }else if(u_TerrainDebug == 5){
        fcol = texture(terrainfluxmap, fs_Uv).xyz * 100000.0;
    }else if(u_TerrainDebug == 6){
        fcol = texture(maxslippagemap, fs_Uv).xyz / 13.0;
    }else if(u_TerrainDebug == 7){
        fcol = vec3(sval * 300.0);
    }else if(u_TerrainDebug == 8){
        fcol = slopesin;
    }else if(u_TerrainDebug == 10){
        // Rock/Soil material debug view
        // Rock (rockVal > 0.5): dark gray/black
        // Soil (rockVal <= 0.5): brown/tan
        // Sediment on rock: bright yellow/orange (clearly distinct)
        
        float baseRockHeight = fH.w;
        // Only show as sediment on rock if height is significantly above base (at least 0.05 units)
        // This prevents false positives from floating point errors
        bool hasSedimentOnRock = baseRockHeight > 0.001 && rockVal > 0.1 && (fH.x - baseRockHeight) > 0.05;
        
        if(hasSedimentOnRock){
            // Sediment on rock - bright yellow/orange to clearly distinguish from both rock and soil
            fcol = vec3(1.0, 0.8, 0.2); // Bright yellow-orange
        } else if(rockVal > 0.5){
            // Rock - dark gray, intensity based on rock value
            fcol = vec3(0.2, 0.2, 0.2) * (0.5 + rockVal * 0.5);
        } else {
            // Soil - brown/tan
            fcol = vec3(0.6, 0.5, 0.4);
        }
    }


    fcol = clamp(fcol, vec3(0.0), vec3(1.0));




    // realistic color
//    vec3 lightSedimentCol = vec3(0.9,0.9,0.6);
//    vec3 mediumSedimentCol = vec3(0.6, 0.6, 0.5);
//    vec3 deepSedimentCol = vec3(0.4, 0.2, 0.0);
    // vibrant color
    vec3 lightSedimentCol = vec3(0.0,0.5,0.3);
    vec3 mediumSedimentCol = vec3(0.0, 0.5, 0.5);
    vec3 deepSedimentCol = vec3(0.0, 0.0, 0.99);
    if(!debug){

        // flow traces : showing flow map in the final render
        if(u_FlowTrace == 0){
            float sedimentTrace = 0.0;
            sedimentTrace = 1.0 - exp( -sval*300.0);
            fcol = mix(fcol, vec3(240.f/255.f,230.f/255.f,140.f/255.f) * lamb + ambientCol,sedimentTrace * 1.50);
            //sedimentTrace *= pow(abs(nor.y), 1.0);
        }
        //fcol += lamb * clamp(sval * vec3(0.5,0.2,0.0) * 550.0, vec3(0.0), vec3(1.0));

        // sediment traces : showing movement of sediments on the terrain
        if(u_SedimentTrace == 0){
            float ssval = texture(sedimap, fs_Uv).x;
            //ssval = max(min(pow(3.0 * ssval, 0.6), 1.0), 0.0);
            ssval = 1.0 - exp(-ssval * 7.0);
            vec3 ss = vec3(0.8, 0.8, 0.8);
            ss = fcol;
            float small = 0.4, large = 0.7;
            if (ssval <=small){
                ss = mix(ss, lightSedimentCol, ssval/small);

            } else if (ssval > small && ssval <= large){
                ss = mix(lightSedimentCol, mediumSedimentCol, (ssval - small)/(large - small));
            }
            else if (ssval > large){
                ss = mix(mediumSedimentCol, deepSedimentCol, (ssval - large)/(1.0 - large));
            }
            fcol = mix(fcol, max(ss * lamb, vec3(0.0)), ssval);
        }





        fcol *= shadowCol * hue;

    }




    vec3 tmpCol = fcol;
    fcol += addcol;

//    float groundfog = 1.0 - min(yval / 200.0,1.0);
//    groundfog = (1.0 - exp(-groundfog * 0.4));
//    fcol = mix(fcol, vec3(0.8,0.8,0.8), groundfog);




    out_Col = vec4(vec3(fcol)*1.0 ,1.f);
    col_reflect = vec4(tmpCol,1.0);
    //out_Col = vec4(vec3(shadowColorVal),1.0);
}
`,li=`#version 300 es
precision highp float;


in vec4 vs_Pos;
out vec2 fs_Pos;

void main() {
  fs_Pos = vs_Pos.xy;
  vec4 pos = vs_Pos;

  gl_Position = pos;
}
`,fi=`#version 300 es
precision highp float;

uniform sampler2D hightmap;
uniform sampler2D sceneDepth;
uniform sampler2D shadowMap;


uniform vec3 u_Eye, u_Ref, u_Up;
uniform vec2 u_Dimensions;
uniform float u_Time;
uniform vec3  unif_LightPos;
uniform int u_showScattering;

uniform mat4 u_Model;
uniform mat4 u_ModelInvTr;
uniform mat4 u_ViewProj;
uniform mat4 u_sproj;
uniform mat4 u_sview;
uniform float u_far;
uniform float u_near;


in vec2 fs_Pos;
out vec4 out_Col;


#define FOV 45.f
vec3 sky(in vec3 rd){
    return 1.0 * mix(vec3(0.6,0.6,0.6),vec3(0.3,0.5,0.9),clamp(rd.y,0.f,1.f));
}

float getSun(in vec3 rd){
    vec3 lightpos = normalize(unif_LightPos);
    float cosine = normalize(dot(lightpos, rd));
    float sine = sqrt(1.0 - cosine * cosine);
    return max(0.0, sine - 0.7);
}

float linearDepth(float depthSample)
{
    depthSample = 2.0 * depthSample - 1.0;
    float zLinear = 2.0 * u_near * u_far / (u_far + u_near - depthSample * (u_far - u_near));
    return zLinear;
}

//bayer matrix for dithering

    //maxiterations for bayer matrix, maximum value is number of bits of your data type?
    //for crepuscular ray dithering [1..3] iterations are enough
    //because it is basically "noisy scattering" so  any patterns in it are "just fine"
#define iterBayerMat 1
#define bayer2x2(a) (4-(a).x-((a).y<<1))%4
//return bayer matris (bitwise operands for speed over compatibility)
float GetBayerFromCoordLevel(vec2 pixelpos)
{   ivec2 p=ivec2(pixelpos);
    int a=0;
    for(int i=0; i<iterBayerMat; i++)
    {
        a+=bayer2x2(p>>(iterBayerMat-1-i)&1)<<(2*i);

    }
    return float(a)/float(2<<(iterBayerMat*2-1));
}
//https://www.shadertoy.com/view/XtV3RG

//analytic bayer over 2 domains, is unrolled loop of GetBayerFromCoordLevel().
//but in terms of reusing subroutines, which is faster,while it does not extend as nicely.
float bayer2  (vec2 a){a=floor(a);return fract(dot(a,vec2(.5, a.y*.75)));}
float bayer4  (vec2 a){return bayer2 (  .5*a)*.25    +bayer2(a);}
float bayer8  (vec2 a){return bayer4 (  .5*a)*.25    +bayer2(a);}
float bayer16 (vec2 a){return bayer4 ( .25*a)*.0625  +bayer4(a);}
float bayer32 (vec2 a){return bayer8 ( .25*a)*.0625  +bayer4(a);}
float bayer64 (vec2 a){return bayer8 (.125*a)*.015625+bayer8(a);}
float bayer128(vec2 a){return bayer16(.125*a)*.015625+bayer8(a);}
#define dither2(p)   (bayer2(  p)-.375      )
#define dither4(p)   (bayer4(  p)-.46875    )
#define dither8(p)   (bayer8(  p)-.4921875  )
#define dither16(p)  (bayer16( p)-.498046875)
#define dither32(p)  (bayer32( p)-.499511719)
#define dither64(p)  (bayer64( p)-.49987793 )
#define dither128(p) (bayer128(p)-.499969482)
//https://www.shadertoy.com/view/4ssfWM

//3 ways to approach a bayer matrix for dithering (or for loops within permutations)
float iib(vec2 u){
    return dither16(u);//analytic bayer, base2
    //return GetBayerFromCoordLevel(u*999.);//iterative bayer
    //optionally: instad just use bitmap of a bayer matrix: (LUT approach)
    //return texture(iChannel1,u/iChannelResolution[1].xy).x;
}

// ====================== Raleigh scattering ========================
// reference https://github.com/wwwtyro/glsl-atmosphere

#define PI 3.141592
#define iSteps 8
#define jSteps 1

vec2 rsi(vec3 r0, vec3 rd, float sr) {
    // ray-sphere intersection that assumes
    // the sphere is centered at the origin.
    // No intersection when result.x > result.y
    float a = dot(rd, rd);
    float b = 2.0 * dot(rd, r0);
    float c = dot(r0, r0) - (sr * sr);
    float d = (b*b) - 4.0*a*c;
    if (d < 0.0) return vec2(1e5,-1e5);
    return vec2(
    (-b - sqrt(d))/(2.0*a),
    (-b + sqrt(d))/(2.0*a)
    );
}

vec3 atmosphere(vec3 r, vec3 r0, vec3 pSun, float iSun, float rPlanet, float rAtmos, vec3 kRlh, float kMie, float shRlh, float shMie, float g) {
    // Normalize the sun and view directions.
    pSun = normalize(pSun);
    r = normalize(r);

    // Calculate the step size of the primary ray.
    vec2 p = rsi(r0, r, rAtmos);
    if (p.x > p.y) return vec3(0,0,0);
    p.y = min(p.y, rsi(r0, r, rPlanet).x);
    float iStepSize = (p.y - p.x) / float(iSteps);

    // Initialize the primary ray time.
    float iTime = 0.0;

    // Initialize accumulators for Rayleigh and Mie scattering.
    vec3 totalRlh = vec3(0,0,0);
    vec3 totalMie = vec3(0,0,0);

    // Initialize optical depth accumulators for the primary ray.
    float iOdRlh = 0.0;
    float iOdMie = 0.0;

    // Calculate the Rayleigh and Mie phases.
    float mu = dot(r, pSun);
    float mumu = mu * mu;
    float gg = g * g;
    float pRlh = 3.0 / (16.0 * PI) * (1.0 + mumu);
    float pMie = 3.0 / (8.0 * PI) * ((1.0 - gg) * (mumu + 1.0)) / (pow(1.0 + gg - 2.0 * mu * g, 1.5) * (2.0 + gg));


    // Sample the primary ray.
    for (int i = 0; i < iSteps; i++) {

        // Calculate the primary ray sample position.
        vec3 iPos = r0 + r * (iTime + iStepSize * 0.5);



        // Calculate the height of the sample.
        float iHeight = length(iPos) - rPlanet;

        // Calculate the optical depth of the Rayleigh and Mie scattering for this step.
        float odStepRlh = exp(-iHeight / shRlh) * iStepSize;
        float odStepMie = exp(-iHeight / shMie) * iStepSize;

        // Accumulate optical depth.
        iOdRlh += odStepRlh;
        iOdMie += odStepMie;

        // Calculate the step size of the secondary ray.
        float jStepSize = rsi(iPos, pSun, rAtmos).y / float(jSteps);

        // Initialize the secondary ray time.
        float jTime = 0.0;

        // Initialize optical depth accumulators for the secondary ray.
        float jOdRlh = 0.0;
        float jOdMie = 0.0;

        // Sample the secondary ray.
        for (int j = 0; j < jSteps; j++) {

            // Calculate the secondary ray sample position.
            vec3 jPos = iPos + pSun * (jTime + jStepSize * 0.5);

            // Calculate the height of the sample.
            float jHeight = length(jPos) - rPlanet;

            // Accumulate the optical depth.
            jOdRlh += exp(-jHeight / shRlh) * jStepSize;
            jOdMie += exp(-jHeight / shMie) * jStepSize;

            // Increment the secondary ray time.
            jTime += jStepSize;
        }

        // Calculate attenuation.
        vec3 attn = exp(-(kMie * (iOdMie + jOdMie) + kRlh * (iOdRlh + jOdRlh)));

        // Accumulate scattering.
        totalRlh += odStepRlh * attn;
        totalMie += odStepMie * attn;

        // Increment the primary ray time.
        iTime += iStepSize;

    }

    // Calculate and return the final color.
    return iSun * (pRlh * kRlh * totalRlh + pMie * kMie * totalMie);
}



// my ray march


vec4 Wrld2Screen(vec3 pos){
    vec4 clipSpacePos =  u_ViewProj * vec4(pos,1.0);
    clipSpacePos = clipSpacePos/ clipSpacePos.w;
    clipSpacePos.x = (clipSpacePos.x + 1.0) / 2.0;
    clipSpacePos.y = (1.0 - clipSpacePos.y) / 2.0;
    clipSpacePos.z = (clipSpacePos.z + 1.0) / 2.0;// d
    return clipSpacePos;
}

vec4 Screen2Light(vec3 pos){
    vec4 lightSpacePos = u_sproj * u_sview * vec4(pos,1.0);
    lightSpacePos = lightSpacePos / lightSpacePos.w;
    lightSpacePos = lightSpacePos * 0.5 + 0.5;
    return lightSpacePos;
}

#define SCATTER_MARCH_STEPS 10
#define SCATTER_MARCH_STEP_SIZE 0.1

vec4 scatter_m(vec3 ro, vec3 rd){

    vec2 uv = 0.5*fs_Pos+0.5;
    vec3 sceneDepthValue = texture(sceneDepth,uv).xyz;
    float linearSceneDepthVal = linearDepth(sceneDepthValue.x); // max length can travel for this specific ray
    float rayAttenuation = 1.0 * linearSceneDepthVal;


    float stepSize = ((linearSceneDepthVal + 0.01) / float(SCATTER_MARCH_STEPS)) ;
    if(sceneDepthValue.x == 0.0){
        stepSize = 0.2;
        rayAttenuation = 1.0;
    }
    //rayAttenuation = clamp(rayAttenuation, 0.0, 1.0);

    vec4 col = vec4(0.0);
    vec3 fog_col = 1.50 *  vec3(0.6,0.6,0.6) * clamp(rayAttenuation,0.0,1.0);
    float fog_alpha = 1.0 * rayAttenuation;
    float scatter_alpha_acc_all = fog_alpha / float(SCATTER_MARCH_STEPS);
    float scatter_alpha_acc = scatter_alpha_acc_all*1.0/ 14.0;
    float scatter_alpha_acc_out = scatter_alpha_acc_all * 13.0/ 14.0;

    vec3 scatter_col_acc_all = fog_col/float(SCATTER_MARCH_STEPS);
    vec3 scatter_col_acc = scatter_col_acc_all*1.0 / 4.0;
    vec3 scatter_col_acc_out = scatter_col_acc_all * 13.0 / 14.0;



    float dither = iib(gl_FragCoord.xy);
    vec3 pos = ro + rd * stepSize * dither;
   //pos = ro;
    int i = 1;
    for(i = 1;i<SCATTER_MARCH_STEPS; ++i){

        float heightAtten = 1.0 * exp(-pos.y);
        col += heightAtten * vec4(scatter_col_acc,scatter_alpha_acc);


        pos += rd * stepSize;

        vec4 clipSpacePos =  Wrld2Screen(pos);
//        vec3 clipSpaceRdVec = Wrld2Screen(rd * stepSize).xyz;
//        float clipSpaceStepSize = length(clipSpaceRdVec);

        vec4 lightSpacePos = Screen2Light(pos);
        float texsize = 1.0/4096.0f;
        float shadowMapDepth = texture(shadowMap, lightSpacePos.xy).x;

        if(lightSpacePos.x <= 0.0 || lightSpacePos.x >= 1.0 || lightSpacePos.y <= 0.0 || lightSpacePos.y >= 1.0){
            shadowMapDepth = 0.0f;
        }
        if(lightSpacePos.z < shadowMapDepth || shadowMapDepth==0.0){
            col += vec4(scatter_col_acc_out,scatter_alpha_acc_out);
        }else{
            float diff = linearDepth(lightSpacePos.z) - linearDepth(shadowMapDepth);
            col -= 2.0 * diff * vec4(scatter_col_acc_out,scatter_alpha_acc_out) / SCATTER_MARCH_STEP_SIZE;

        }


        if(sceneDepthValue.x < clipSpacePos.z  && sceneDepthValue.x != 0.0){

            //col -= diff * vec4(scatter_col_acc,scatter_alpha_acc) / SCATTER_MARCH_STEP_SIZE;
           break;
        }
        //vec3 attn = exp( -)

    }



    col = clamp(col, vec4(0.0),vec4(1.0));

    return col;
}


void main() {
    vec2 uv = 0.5*fs_Pos+0.5;
    vec3 sceneDepthValue = texture(sceneDepth,uv).xyz;
    float vsceneDepthValue = linearDepth(sceneDepthValue.x);


    float sx = (2.f*gl_FragCoord.x/u_Dimensions.x)-1.f;
    float sy = 1.f-(2.f*gl_FragCoord.y/u_Dimensions.y);
    float len = length(u_Ref - u_Eye);
    vec3 forward = normalize(u_Ref - u_Eye);
    vec3 right = cross(forward,u_Up);
    vec3 V = u_Up * len * tan(FOV/2.f);
    vec3 H = right * len * (u_Dimensions.x/u_Dimensions.y) * tan(FOV/2.f);
    vec3 p = u_Ref + sx * H - sy * V;



    vec3 rd = normalize(p - u_Eye);
    vec3 ro = u_Eye;


    float planetScale = 1.0;



    gl_FragDepth = 0.01;

    float angle = dot(normalize(unif_LightPos),vec3(0.0,1.0,0.0));
    vec3 hue = mix(vec3(255.0,255.0,240.0)/256.0, vec3(255.0,100.0,20.0)/256.0, 1.0 - angle);

    vec4 finalCol = vec4(0.0,0.0,0.0,1.0);//vec4(0.0,0.0,0.0,1.0);
    if(u_showScattering == 0){
        finalCol = vec4(0.0,0.0,0.0,0.0);
        gl_FragDepth = 0.99999;
    }else{
        finalCol = scatter_m(ro,rd);
        finalCol.xyz = vec3(1.0) - exp(-finalCol.xyz * 2.0 ); //fog fall off
        finalCol.xyz = pow(finalCol.xyz, vec3(2.0)); // make fog more esay to accumulate based on dis
        float sunAmount = max(dot(rd, normalize(unif_LightPos)),0.0);
        finalCol.xyz *= mix(vec3(0.6,0.6,0.6) * 0.6,hue, pow(sunAmount, 8.0));
        finalCol.w *= 1.0;
        finalCol.w = clamp(finalCol.w, 0.0, 1.0);
        //finalCol.w *=  1.0 - exp(-finalCol.w * 2.0);
    }
    if(sceneDepthValue.x==0.0){
        vec3 color = sky(rd);
        //finalCol.w = 0.0;
        if(u_showScattering == 1){
            color = atmosphere(
                normalize(rd), // normalized ray direction
                vec3(0, 6371e3, 0) * planetScale + vec3(0.0, 0.0, 0.0) + ro, // ray origin
                unif_LightPos, // position of the sun
                20.0, // intensity of the sun
                6371e3 * planetScale, // radius of the planet in meters
                6871e3 * planetScale, // radius of the atmosphere in meters
                1.0 * vec3(5.5e-6, 13.0e-6, 22.4e-6), // Rayleigh scattering coefficient
                1.0 * 21e-6, // Mie scattering coefficient
                8e3 * planetScale, // Rayleigh scale height
                2.4e3 * planetScale, // Mie scale height
                0.958// Mie preferred scattering direction
                );
            finalCol.xyz  = mix(max(color,vec3(0.0,0.0,0.0)) , finalCol.xyz, 0.8 * finalCol.w);
            finalCol.w = 1.0;
        }else{
            finalCol.xyz = color;
            finalCol.w = 1.0;
        }

    }


    //finalCol = mix(finalCol, vec4(1.0,1.0,0.9,1.0), 3.0 * getSun(rd));

    out_Col = vec4(  pow(vec3(finalCol.xyz), vec3(1.0/2.0)), finalCol.w);
    //out_Col = vec4(sceneDepthValue,1.0);
}
`,ee=`#version 300 es
precision highp float;


in vec4 vs_Pos;
out vec2 fs_Pos;

void main() {
  fs_Pos = vs_Pos.xy;
  gl_Position = vs_Pos;
}
`,ci=`#version 300 es
precision highp float;


in vec2 fs_Pos;
uniform float u_Time;
uniform float u_TerrainScale;
uniform float u_TerrainHeight;
uniform int u_terrainBaseType;
uniform int u_TerrainMask;
uniform sampler2D u_HeightMap; // Optional height map texture
uniform int u_UseHeightMap; // 0 = procedural, 1 = use height map

layout (location = 0) out vec4 initial;
layout (location = 1) out vec4 initial2;

//voroni=========================================================================

vec3 hash3( vec2 p ){
    vec3 q = vec3( dot(p,vec2(127.1,311.7)),
				   dot(p,vec2(269.5,183.3)),
				   dot(p,vec2(419.2,371.9)) );
	return fract(sin(q)*43758.5453);
}

float iqnoise( in vec2 x, float u, float v ){
    vec2 p = floor(x);
    vec2 f = fract(x);

	float k = 1.0+63.0*pow(1.0-v,4.0);

	float va = 0.0;
	float wt = 0.0;
    for( int j=-2; j<=2; j++ )
    for( int i=-2; i<=2; i++ )
    {
        vec2 g = vec2( float(i),float(j) );
		vec3 o = hash3( p + g )*vec3(u,u,1.0);
		vec2 r = g - f + o.xy;
		float d = dot(r,r);
		float ww = pow( 1.0-smoothstep(0.0,1.414,sqrt(d)), k );
		va += o.z*ww;
		wt += ww;
    }

    return va/wt;
}
//voroni=========================================================================



//smooth========================================================================
vec2 random2(vec2 st){
    st = vec2( dot(st,vec2(127.1,311.7)),
              dot(st,vec2(269.5,183.3)) );
    return -1.0 + 2.0*fract(sin(st)*43758.5453123);
}

// Value Noise by Inigo Quilez - iq/2013
// https://www.shadertoy.com/view/lsf3WH
float noise2(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    vec2 u = f*f*(3.0-2.0*f);

    return mix( mix( dot( random2(i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ),
                     dot( random2(i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),
                mix( dot( random2(i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ),
                     dot( random2(i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x), u.y);
}


//smooth========================================================================

#define OCTAVES 12

float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}


float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}


float fbm (in vec2 st) {
    // Initial values
    float value = 0.0;
    float amplitude = .5;
    float frequency = 0.;
    //
    // Loop of octaves
    for (int i = 0; i < OCTAVES; i++) {
        value += amplitude * noise(st);//iqnoise(st,1.f,1.f);
        st *= 2.0;
        amplitude *= .47;
    }
    return value;
}

float voroni(in vec2 ss){
    float qq = iqnoise(ss * 2.0, 2.0f, 2.0f);
    return qq;
}

float teR(float h) {
    float W = 0.04; // width of terracing bands
    float k = floor(h / W);
    float f = (h - k*W) / W;
    float s = min(100.0 * f, 1.0);
    return (k+s) * W;
}

float domainwarp(vec2 p){
    return fbm(p+fbm(p+fbm(p)));
}

float test(vec2 p){
    return abs(pow(2.0,-length(p - vec2(0.5))*2.0));
}

float circle_mask(vec2 p){
    return max(0.5 - distance(p, vec2(0.5)), 0.0) ;
}

float ridgenoise(float p) {
    return 0.8 * (0.3 - abs(0.3 - p));
}

//nice one 5.3f*uv+vec2(178.f,27.f);

// 6.f*vec2(uv.x,uv.y)+vec2(121.f,41.f);
void main() {

  vec2 rdp1 = vec2(0.2,0.5);
  vec2 rdp2 = vec2(0.1,0.8);
  vec2 uv = 0.5f*fs_Pos+vec2(0.5f);

    float terrain_hight;
    float rainfall = .0f;
    
    // Check if we should use the imported height map
    if(u_UseHeightMap == 1){
        // Sample from the height map texture
        vec4 heightMapSample = texture(u_HeightMap, uv);
        terrain_hight = heightMapSample.x; // R channel contains terrain height
        // Optionally preserve water and rock from height map if they exist
        // rainfall = heightMapSample.y; // G channel for water (currently 0.0)
        // rock material = heightMapSample.z; // B channel for rock (currently 0.0)
    } else {
        // Procedural generation (original code)
        float c_mask = circle_mask(uv);
        vec2 cpos = 1.5 * uv * u_TerrainScale;
        cpos = cpos + vec2(1.f*sin(u_Time / 3.0) + 2.1,1.0 * cos(u_Time/17.0)+3.6);

        terrain_hight = fbm(cpos*2.0)*1.1;
        float base_height = fbm(cpos*6.2)/1.0;

        terrain_hight = pow(terrain_hight,3.0)/1.0;
        //terrain_hight = ridgenoise(terrain_hight);
        if(u_terrainBaseType == 2){
            terrain_hight = teR(terrain_hight / 1.2);
        }else if(u_terrainBaseType == 1){
            terrain_hight = domainwarp(cpos * 2.0)/1.0;
        }else if(u_terrainBaseType == 3){
            terrain_hight = voroni(cpos * 2.0)/3.0;
        }else if(u_terrainBaseType == 4){
            terrain_hight =  ridgenoise(pow(fbm(cpos*1.5),2.0));
        }

        terrain_hight *= u_TerrainHeight*120.0;
        if(u_TerrainMask == 1){
            terrain_hight *= 2.0 * pow(c_mask, 1.0);
        }else if(u_TerrainMask == 2){
            terrain_hight *= (uv.x + uv.y) * 1.0;
        }
        //terrain_hight = test(uv) * 500.0;
    }

//    if(uv.x > 0.5)
//    terrain_hight = (40.0 * (uv.x - 0.5));
//    else
//    terrain_hight = 0.0;

  //if(uv.x>0.6||uv.x<0.5||uv.y>0.6||uv.y<0.5) rainfall = 0.f;
    initial = vec4(terrain_hight,rainfall,0.0,1.f);
    initial2= vec4(terrain_hight,rainfall,0.0,1.f);
}
`,di=`#version 300 es
precision highp float;

uniform sampler2D readTerrain;//water and hight map R: hight map, G: water map, B: , A:
uniform sampler2D readFlux;
uniform sampler2D readSedi;


uniform float u_SimRes;
uniform float u_PipeLen;
uniform float u_timestep;
uniform float u_PipeArea;

layout (location = 0) out vec4 writeFlux;


in vec2 fs_Pos;

#define useMullerPath false


// normal centered grid vec4(x, y, z, w)
//
//      x
//  w   c   y
//      z
//
// staggered grid vec4(r,t,0,1);
//     t.()
//     c         r.()



void main() {





  vec2 curuv = 0.5f*fs_Pos+0.5f;
  float div = 1.f/u_SimRes;
  float g = 0.80;
  float pipelen = u_PipeLen;

  float sediImpact = 1.0;

  vec4 top = texture(readTerrain,curuv+vec2(0.f,div));
  vec4 right = texture(readTerrain,curuv+vec2(div,0.f));
  vec4 bottom = texture(readTerrain,curuv+vec2(0.f,-div));
  vec4 left = texture(readTerrain,curuv+vec2(-div,0.f));



  float damping = 1.0;
  vec4 curTerrain = texture(readTerrain,curuv);
  vec4 curFlux = texture(readFlux,curuv) * damping;

  // Check if this is rock material - rock surfaces are smoother, so water flows faster
  float rockVal = curTerrain.z;
  bool isRock = rockVal > 0.5;
  // Rock has lower roughness/friction, so water flows faster
  // Reduce effective pipe length on rock to simulate lower friction (smoother surface)
  // Rock typically has 2-3x lower roughness coefficient than soil
  float effectivePipeLen = pipelen;
  if (isRock) {
    // Reduce pipe length on rock by factor of 2-3 (representing lower friction)
    // This makes flow faster on rock surfaces
    effectivePipeLen = pipelen * 0.4; // Water flows ~2.5x faster on rock
  }

  // Calculate height differences for flow (terrain height + water height)
  // Flow is based on height differences, but rock affects flow speed through reduced friction
  float Htopout = (curTerrain.y+curTerrain.x )-(top.y+top.x );
  float Hrightout = (curTerrain.y+curTerrain.x)-(right.y+right.x);
  float Hbottomout = (curTerrain.y+curTerrain.x)-(bottom.x+bottom.y);
  float Hleftout = (curTerrain.y+curTerrain.x)-(left.y+left.x);
//
//  Htopout = max(0.0, Htopout);
//  Hbottomout = max(0.0, Hbottomout);
//  Hrightout = max(0.0, Hrightout);
//  Hleftout = max(0.0, Hleftout);

  //out flow readFlux
//  float ftopout = max(0.f,(u_timestep*g*u_PipeArea*Htopout)/pipelen);
//  float frightout = max(0.f,(u_timestep*g*u_PipeArea*Hrightout)/pipelen);
//  float fbottomout = max(0.f,(u_timestep*g*u_PipeArea*Hbottomout)/pipelen);
//  float fleftout = max(0.f,(u_timestep*g*u_PipeArea*Hleftout)/pipelen);

  float ftopout = max(0.f,curFlux.x+(u_timestep*g*u_PipeArea*Htopout)/effectivePipeLen);
  float frightout = max(0.f,curFlux.y+(u_timestep*g*u_PipeArea*Hrightout)/effectivePipeLen);
  float fbottomout = max(0.f,curFlux.z+(u_timestep*g*u_PipeArea*Hbottomout)/effectivePipeLen);
  float fleftout = max(0.f,curFlux.w+(u_timestep*g*u_PipeArea*Hleftout)/effectivePipeLen);

  float waterOut = u_timestep*(ftopout+frightout+fbottomout+fleftout);
  //damping = 1.0;
  float k = min(1.f,((curTerrain.y )*u_PipeLen*u_PipeLen)/waterOut) ;

  //k = 1.0;
  //rescale outflow readFlux so that outflow don't exceed current water volume
  ftopout *= k;
  frightout *= k;
  fbottomout *= k;
  fleftout *= k;

  //boundary conditions
  if(curuv.x<=div) fleftout = 0.f;
  if(curuv.x>=1.f - 2.0 * div) frightout = 0.f;
  if(curuv.y<=div) ftopout = 0.f;
  if(curuv.y>=1.f - 2.0 * div) fbottomout = 0.f;

  if(curuv.x<=div || (curuv.x>=1.f - 2.0 * div) ||(curuv.y<=div) ||(curuv.y>=1.f - 2.0 * div) ){
    ftopout = 0.0;
    frightout = 0.0;
    fbottomout = 0.0;
    fleftout = 0.0;
  }



//  float divs = min(abs(veloci.x), abs(veloci.y))/max(abs(veloci.x), abs(veloci.y));
//
//  veloci *= max(0.01,divs / 1.0);

  writeFlux = vec4(ftopout,frightout,fbottomout,fleftout);


  // for muller path


}
`,hi=`#version 300 es
precision highp float;

uniform sampler2D readTerrain;//water and hight map R: hight map, G: water map, B: , A:
uniform sampler2D readFlux;//flux map R: top, G: right, B: bottom, A: left
uniform sampler2D readSedi;
uniform sampler2D readVel;

uniform float u_SimRes;
uniform float u_PipeLen;
uniform float u_timestep;
uniform float u_PipeArea;
uniform float u_VelMult;
uniform float u_Time;
uniform float u_VelAdvMag;

layout (location = 0) out vec4 writeTerrain;
layout (location = 1) out vec4 writeVel;

#define useMullerPath false

in vec2 fs_Pos;
#define PI 3.1415926
#define SQRT2 1.414

float random (in vec2 st) {
  return fract(sin(dot(st.xy,
  vec2(12.9898,78.233)))*
  43758.5453123);
}

void main(){








  vec2 curuv = 0.5f*fs_Pos+0.5f;
  float div = 1.f/u_SimRes;
  float pipelen = u_PipeLen;
  float sediImpact = 1.0;
  float g = 0.80;
  //
  //      x
  //  w   c   y
  //      z
  //

  vec4 curflux = texture(readFlux, curuv);
  vec4 cur = texture(readTerrain, curuv);
  vec4 curvel = texture(readVel, curuv);


  vec4 topflux = texture(readFlux, curuv+vec2(0.f, div));
  vec4 rightflux = texture(readFlux, curuv+vec2(div, 0.f));
  vec4 bottomflux = texture(readFlux, curuv+vec2(0.f, -div));
  vec4 leftflux = texture(readFlux, curuv+vec2(-div, 0.f));



  //out flow flux
  float ftopout = curflux.x;
  float frightout = curflux.y;
  float fbottomout = curflux.z;
  float fleftout = curflux.w;

  vec4 outputflux = curflux;
  vec4 inputflux = vec4(topflux.z, rightflux.w, bottomflux.x, leftflux.y);

  float fout = ftopout+frightout+fbottomout+fleftout;
  float fin = topflux.z+rightflux.w+bottomflux.x+leftflux.y;


  float deltavol = u_timestep*(fin-fout)/(u_PipeLen*u_PipeLen);


  //float velFactor = pow((length(curvel.xy) * 0.2 + 1.0), -2.0);// emperical function for self aware velocity calculation


  //  vec2 randTime = vec2(1.f*sin(u_Time / 3.0) + 2.1,1.0 * cos(u_Time/17.0)+3.6) + curuv * 10.0;
  //  float rnd = random(randTime);

  float d1 = cur.y;
  float d2 = max(d1 + deltavol, 0.0);
  float da = (d1 + d2)/2.0f;
  vec2 veloci = vec2(leftflux.y-outputflux.w+outputflux.y-rightflux.w, bottomflux.x-outputflux.z+outputflux.x-topflux.z)/2.0;
  if (cur.y == 0.0 && deltavol == 0.0) veloci = vec2(0.0, 0.0);


  if (da <= 0.0001) {
    veloci = vec2(0.0);
  } else {
    veloci = veloci/(da * u_PipeLen);
  }

  //veloci += curvel.xy * 0.9;

  // my attempts trying to mitigate axis aligning problem, none worked :(
  //    vec2 velnorm = normalize(veloci);
  //    float lvel = abs(velnorm.x) >= abs(velnorm.y) ? abs(velnorm.x) : abs(velnorm.y);
  //    float svel = abs(velnorm.x) < abs(velnorm.y) ? abs(velnorm.x) : abs(velnorm.y);
  //    float sl = sqrt(velnorm.x * velnorm.x + velnorm.y * velnorm.y);


  //veclocity advection
    vec4 useVel = curvel/u_SimRes;
    useVel *= 0.5;


    vec2 oldloc = vec2(curuv.x-useVel.x*u_timestep,curuv.y-useVel.y*u_timestep);
    vec2 oldvel = texture(readVel, oldloc).xy;

    veloci += oldvel * u_VelAdvMag;//(1.0 - exp(- cur.y * 20.0));

  // !!! very important !!! : disregard really small body of water as it will disrupt the sediment advection step (since advection is only dependent on velocity, small water body will
  // be the numerical limitation for the lower threshold of simulation can handle, any value below it will be treated qually regardless of their own differences, and this is really bad
  // , it can make the sediment go entirely randomly and chaoticly when water happen to be very shallow, and I have been quite troubled by this issue for a while)
  //
  if (cur.y < 0.01){
    //veloci *= pow(cur.y/0.01,3.0);
    veloci = vec2(0.0);
  }
  else {
    //veloci *= (1.0 - exp(65.0 * (-cur.y + 0.01)));
  }



//    // muller height field integration
//
//    vec4 curTerrain = texture(readTerrain, curuv);
//    vec4 RTerrain = texture(readTerrain, curuv + vec2(div, 0.0));
//    vec4 TTerrain = texture(readTerrain, curuv + vec2(0.0, div));
//    vec4 BTerrain = texture(readTerrain, curuv - vec2(0.0, div));
//    vec4 LTerrain = texture(readTerrain, curuv - vec2(div, 0.0));
//
//
//    vec4 leftvel = texture(readVel, curuv - vec2(div, 0.0));
//    vec4 bottomvel = texture(readVel, curuv - vec2(0.0, div));
//
//    float deltaH = 0.0;
//
//    float waterHeightRight = 0.0, waterHeightLeft = 0.0;
//    float waterHeightTop = 0.0, waterHeightBottom = 0.0;
//
//    if(curvel.z <= 0.0){
//      deltaH += (RTerrain.y * curvel.z / 1.0);
//    }else{
//      deltaH += curTerrain.y * curvel.z / 1.0;
//    }
//
//    if(curvel.w <= 0.0){
//      deltaH += (TTerrain.y * curvel.w / 1.0);
//    }else{
//      deltaH += curTerrain.y * curvel.w / 1.0;
//    }
//
//    if(leftvel.z <= 0.0){
//      deltaH -= curTerrain.y * leftvel.z/1.0;
//    }else{
//      deltaH -= LTerrain.y * leftvel.z / 1.0;
//    }
//
//    if(bottomvel.w <= 0.0){
//      deltaH -= curTerrain.y * bottomvel.w / 1.0;
//    }else{
//      deltaH -= BTerrain.y * bottomvel.w / 1.0;
//    }
//
//    deltaH = -deltaH * u_timestep * 1.0;
//
//
//   // float hadj = max(0.0, (RTerrain.y + TTerrain.y + BTerrain.y + LTerrain.y)/4.0 - (2.0 * 1.0 / (g * u_timestep)));
//
//    // muller velocity integration
//
//
//    float velr = curvel.z+ (curTerrain.x + curTerrain.y - RTerrain.x - RTerrain.y)*g*u_timestep/1.0;
//    float velt = curvel.w + (curTerrain.x + curTerrain.y - TTerrain.x - TTerrain.y)*g*u_timestep/1.0;
//
//    velr = min(0.50/u_timestep, velr);
//    velt = min(0.50/u_timestep, velt);
//
//
//    float threshold = 0.0001;
//    if(curTerrain.y <= threshold && TTerrain.y <=threshold){
//      velt = 0.0;
//    }if(curTerrain.y <= threshold && RTerrain.y <=threshold){
//      velr = 0.0;
//    }


  //writeVel = vec4(veloci * u_VelMult, velr, velt);
  writeVel = vec4(veloci * u_VelMult, curvel.z, curvel.w);
  //writeTerrain = vec4(cur.x, max(0.0, deltaH + curTerrain.y ), 0.0, 1.0);
  // Preserve B channel (rock material) and A channel
  writeTerrain = vec4(cur.x, max(cur.y+deltavol, 0.0), cur.z, cur.w);


}`,pi=`#version 300 es
precision highp float;

uniform sampler2D readTerrain;//water and hight map R: hight map, G: water map, B: , A:
uniform sampler2D readVelocity;
uniform sampler2D readSediment;

uniform float u_SimRes;
uniform float u_PipeLen;
uniform float u_Ks;
uniform float u_Kc;
uniform float u_Kd;
uniform float u_timestep;
uniform float u_Time;
uniform float u_RockErosionResistance;

layout (location = 0) out vec4 writeTerrain;
layout (location = 1) out vec4 writeSediment;
layout (location = 2) out vec4 writeTerrainNormal;
layout (location = 3) out vec4 writeVelocity;





in vec2 fs_Pos;

#define OCTAVES 10

float random (in vec2 st) {
  return fract(sin(dot(st.xy,
  vec2(12.9898,78.233)))*
  43758.5453123);
}
float noise (in vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);

  // Four corners in 2D of a tile
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  vec2 u = f * f * (3.0 - 2.0 * f);

  return mix(a, b, u.x) +
  (c - a)* u.y * (1.0 - u.x) +
  (d - b) * u.x * u.y;
}


float fbm (in vec2 st) {
  // Initial values
  float value = 0.0;
  float amplitude = .5;
  float frequency = 0.;
  //
  // Loop of octaves
  for (int i = 0; i < OCTAVES; i++) {
    value += amplitude * noise(st);//iqnoise(st,1.f,1.f);
    st *= 2.0;
    amplitude *= .47;
  }
  return value;
}
vec3 calnor(vec2 uv){
  float eps = 1.f/u_SimRes;
//  vec4 cur = texture(readTerrain,uv);
  vec4 r = texture(readTerrain,uv+vec2(eps,0.f));
  vec4 t = texture(readTerrain,uv+vec2(0.f,eps));
  vec4 b = texture(readTerrain,uv+vec2(0.f,-eps));
  vec4 l = texture(readTerrain,uv+vec2(-eps,0.f));

//  vec4 rs = texture(readSediment,uv+vec2(eps,0.f));
//  vec4 ts = texture(readSediment,uv+vec2(0.f,eps));
//  vec4 bs = texture(readSediment,uv+vec2(0.f,-eps));
//  vec4 ls = texture(readSediment,uv+vec2(-eps,0.f));


  //vec3 nor = vec3(l.x + l.y  - r.x - r.y , 2.0, t.x + t.y - b.x - b.y );
  //vec3 nor = vec3(l.x + ls.x - r.x - rs.x, 2.0, t.x + ts.x - b.x - bs.x);
  vec3 nor = vec3(l.x - r.x , 2.0, t.x - b.x);
  nor = normalize(nor);
  return nor;
}

void main() {

  vec2 curuv = 0.5f*fs_Pos+0.5f;
  float div = 1.f/u_SimRes;
  float Kc = u_Kc;
  float Ks = u_Ks;
  float Kd = u_Kd;
  float alpha = 5.0;
  
  // Check if this is rock material (B channel > 0.5) and apply erosion resistance
  vec4 curTerrain = texture(readTerrain,curuv);
  bool isRock = curTerrain.z > 0.5;
  
  // Track base rock surface height (A channel stores the height of the rock surface
  // before any sediment was deposited on top)
  float baseRockSurfaceHeight = curTerrain.w;
  // If A channel is 0 or uninitialized and this is rock, initialize it to current height
  if (isRock && baseRockSurfaceHeight < 0.001) {
    baseRockSurfaceHeight = curTerrain.x;
  }
  
  // Rock should maintain constant resistance until fully converted to soil
  // Use binary check: if rock material exists, apply full resistance
  // u_RockErosionResistance: 0.0 = no resistance (erodes normally), 1.0 = maximum resistance (doesn't erode)
  // So we invert it: rockFactor = 1.0 - resistance (higher resistance = lower factor = less erosion)
  float rockMaterialValue = curTerrain.z;
  bool hasRock = rockMaterialValue > 0.1; // Threshold for "still rock"
  float rockFactor = hasRock ? (1.0 - u_RockErosionResistance) : 1.0;
  
  // Check if there's sediment on top of rock
  // If current height is above base rock surface, there's sediment on top
  bool hasSedimentOnRock = isRock && curTerrain.x > baseRockSurfaceHeight + 0.001;
  
  // Check neighboring cells for rock to boost erosion in non-rock areas between rock sections
  // This creates crevices/valleys between rock areas
  // IMPORTANT: Don't boost erosion for recently converted soil (was rock) - this causes excessive sediment
  float neighborRockFactor = 1.0;
  float capacityBoost = 1.0; // Boost sediment capacity for soil between rock
  
  // Check if this was recently rock (to prevent boosting recently converted soil)
  bool wasRecentlyRock = curTerrain.z > 0.1;
  
  if (!isRock && !wasRecentlyRock) {
    // Sample neighboring cells to see if any are rock
    vec4 topTerrain = texture(readTerrain, curuv + vec2(0.0, div));
    vec4 rightTerrain = texture(readTerrain, curuv + vec2(div, 0.0));
    vec4 bottomTerrain = texture(readTerrain, curuv + vec2(0.0, -div));
    vec4 leftTerrain = texture(readTerrain, curuv + vec2(-div, 0.0));
    
    int rockNeighbors = 0;
    
    // Check each neighbor for rock
    if (topTerrain.z > 0.5) rockNeighbors++;
    if (rightTerrain.z > 0.5) rockNeighbors++;
    if (bottomTerrain.z > 0.5) rockNeighbors++;
    if (leftTerrain.z > 0.5) rockNeighbors++;
    
    // MUCH stronger boost for soil between rock to create deep crevices
    // The more rock neighbors, the faster the soil should erode away
    // BUT: Only apply to soil that was never rock, not recently converted soil
    if (rockNeighbors > 0) {
      // Very aggressive erosion boost - soil between rock should erode much faster
      neighborRockFactor = 1.0 + float(rockNeighbors) * 3.0; // 4x to 13x erosion rate
      // Also boost capacity significantly so more material can be picked up
      capacityBoost = 1.0 + float(rockNeighbors) * 2.0; // 3x to 9x capacity boost
    }
  }
  
  // Apply erosion resistance to rock - reduce both erosion (Ks) and capacity (Kc)
  // Rock erodes slower AND produces less sediment capacity when it does erode
  // This ensures rock produces less total sediment overall
  // The capacity reduction should be proportional to the erosion resistance
  // BUT: If there's sediment on top of rock, use normal capacity for the sediment layer
  float effectiveCapacityRockFactor = hasSedimentOnRock ? 1.0 : rockFactor;
  
  // Boost erosion in non-rock areas adjacent to rock to create crevices
  // NOTE: Don't apply rockFactor here - it's applied later in the erosion calculation (line 232)
  // to avoid applying it twice. Only apply neighborRockFactor for soil between rock.
  Ks *= neighborRockFactor; // Boost for non-rock near rock (rockFactor applied later)
  Kc *= capacityBoost; // Boost capacity for soil between rock so it erodes faster
  // IMPORTANT: Reduce sediment capacity for rock proportionally to erosion resistance
  // Rock produces less fine sediment when it erodes, scaled by the same factor as erosion resistance
  // This ensures sediment production is proportional to erosion rate
  // But use normal capacity if there's sediment on top
  Kc *= effectiveCapacityRockFactor; // Reduce capacity for rock, but not for sediment on rock

  vec3 nor = calnor(curuv);
  float slopeSin;
  slopeSin = abs(sqrt(1.0 - nor.y*nor.y));



//  vec4 topvel = texture(readVelocity,curuv+vec2(0.f,div));
//  vec4 rightvel = texture(readVelocity,curuv+vec2(div,0.f));
//  vec4 bottomvel = texture(readVelocity,curuv+vec2(0.f,-div));
//  vec4 leftvel = texture(readVelocity,curuv+vec2(-div,0.f));
  vec4 curvel = texture(readVelocity,curuv);
//
//  float sumlen = length(topvel) + length(rightvel) + length(bottomvel) + length(leftvel);
//  //velocity diffussion
//  vec4 newVel = (topvel + rightvel + bottomvel + leftvel + alpha * curvel)/(4.0 + alpha);
//
//  newVel = curvel;

  vec4 curSediment = texture(readSediment,curuv);
  // curTerrain already read above for rock check




  float velo = length(curvel.xy);
  float slopeMulti = 5.0 * pow(abs(slopeSin),4.0);
  float slope = max(0.1f, abs(slopeSin)) ;//max(0.05f,sqrt(1.f- nor.y * nor.y));
  float volC = 1.0 - exp(-curTerrain.y* (100.0));
  float sedicap = Kc*pow(slope,1.0)*pow(velo,1.0);// * pow(curTerrain.y,0.2) ;

//  float lmax = 0.0f;
//  float maxdepth = 0.8;
//  if(curTerrain.y > maxdepth){ // max river bed depth
//    lmax = 0.0f;
//  }else{
//    lmax = (max(maxdepth - curTerrain.y,0.0)/maxdepth);
//  }
//  sedicap *= (1.0 - exp(-1.0 * lmax));




  float cursedi = curSediment.x;
  float hight = curTerrain.x;
  float outsedi = curSediment.x;

  float water = curTerrain.y;
  
  // Track if erosion is happening (height decrease)
  float heightChange = 0.0;

  // Track original rock material value before erosion
  float originalRockMaterial = curTerrain.z;
  
  if(sedicap >cursedi){
    // Check if we're eroding sediment on top of rock or the rock itself
    bool erodingSedimentLayer = hasSedimentOnRock && hight > baseRockSurfaceHeight;
    
    // Only apply rock resistance if we're eroding the actual rock, not sediment on top
    float effectiveRockFactor = erodingSedimentLayer ? 1.0 : rockFactor;
    
    // Calculate erosion with correct resistance
    float changesedi = (sedicap -cursedi) * (Ks * effectiveRockFactor);
    //changesedi = min(changesedi, curTerrain.y);

      hight = hight - changesedi;
      heightChange = -changesedi; // Negative = erosion
      
      // If we've eroded down to the base rock surface, reset the base surface height
      if (hasSedimentOnRock && hight <= baseRockSurfaceHeight) {
        baseRockSurfaceHeight = hight; // Update base to current height
      }
      
      // water = water + (sedicap-cursedi)*Ks;
      outsedi = outsedi + changesedi;
      
      // When rock erodes, gradually convert it to regular soil
      // Rock should erode into normal sediment, but conversion should be very slow so rock resistance actually matters
      // Only convert if we're actually eroding rock, not sediment on top
      if (rockMaterialValue > 0.1 && changesedi > 0.0 && !erodingSedimentLayer) {
        // Convert rock to soil proportionally to the amount eroded
        // IMPORTANT: Conversion should be very slow so rock stays rock longer and erosion resistance has effect
        // More erosion = more rock converted to soil, but at a much slower rate
        float erosionAmount = changesedi;
        // Convert rock to soil very slowly - scales with erosion but much slower
        // This ensures rock stays rock long enough for the resistance to matter
        float conversionRate = min(erosionAmount * 0.05, originalRockMaterial * 0.01); // Convert up to 1% of rock per frame, scales with erosion
        originalRockMaterial = max(0.0, originalRockMaterial - conversionRate); // Reduce rock value, convert to soil
      }

  }else {
    float changesedi = (cursedi-sedicap)*Kd;
    //changesedi = min(changesedi, curTerrain.y);
    
    // If sediment is depositing on rock, store the base rock surface height
    // Store the height BEFORE deposition as the base surface
    if (isRock && baseRockSurfaceHeight < 0.001) {
      // Initialize base surface to height before this deposition
      baseRockSurfaceHeight = curTerrain.x;
    }
    
    hight = hight + changesedi;
    heightChange = changesedi; // Positive = deposition
    //water = water - (cursedi-sedicap)*Kd;
    outsedi = outsedi - changesedi;
  }

  // Apply rock material spreading - rock fills in where terrain has eroded
  // Only spread when terrain has eroded down to the lowest PAINTED rock that is CONTIGUOUS
  // (directly touching/adjacent) to the neighboring terrain sections
  // IMPORTANT: Don't spread rock when water is present or flowing to prevent damming
  // Start with the eroded rock material value (rock converts to soil when it erodes)
  float finalRockMaterial = originalRockMaterial;
  float waterLevel = curTerrain.y; // Water height in this cell
  float waterVelocity = length(curvel.xy); // Water flow velocity
  
  // Check if this area is below the water surface by comparing total height (terrain + water)
  // to neighboring rock's total height
  float currentTotalHeight = hight + waterLevel; // Current terrain + water height
  
  // Only spread rock if:
  // 1. There's little or no water (water < 0.1) AND
  // 2. Water is not actively flowing (velocity < 0.5) AND
  // 3. Erosion is happening
  // 4. The area was NOT recently rock (to prevent converting eroded rock back to rock)
  // This prevents rock from creating barriers that dam up water
  // IMPORTANT: Don't spread rock into areas that were recently rock - rock should erode to soil and stay soil
  bool canSpreadRock = waterLevel < 0.1 && waterVelocity < 0.5;
  // wasRecentlyRock is already defined earlier in the function
  
  if (!isRock && heightChange < 0.0 && canSpreadRock && !wasRecentlyRock) { // Only if erosion is happening AND water conditions allow AND wasn't recently rock
    // Sample neighboring cells for rock (these are the contiguous/adjacent cells)
    // Use the ORIGINAL terrain height (before this frame's erosion) to find the painted rock edge
    vec4 topTerrain = texture(readTerrain, curuv + vec2(0.0, div));
    vec4 rightTerrain = texture(readTerrain, curuv + vec2(div, 0.0));
    vec4 bottomTerrain = texture(readTerrain, curuv + vec2(0.0, -div));
    vec4 leftTerrain = texture(readTerrain, curuv + vec2(-div, 0.0));
    
    float lowestContiguousRockHeight = 999999.0; // Find the lowest contiguous painted rock edge
    float bestRockValue = 0.0;
    int contiguousRockCount = 0;
    
    // Find the lowest PAINTED edge of rock that is CONTIGUOUS (directly adjacent/touching)
    // to this terrain cell. Use the ORIGINAL height (curTerrain.x) of rock neighbors,
    // not the current height after erosion, to find where rock was originally painted.
    if (topTerrain.z > 0.5) {
      // This rock neighbor is contiguous - it's directly touching this cell
      // Use the rock's original height to find the painted edge
      if (topTerrain.x < lowestContiguousRockHeight) {
        lowestContiguousRockHeight = topTerrain.x;
        bestRockValue = topTerrain.z;
      }
      contiguousRockCount++;
    }
    if (rightTerrain.z > 0.5) {
      if (rightTerrain.x < lowestContiguousRockHeight) {
        lowestContiguousRockHeight = rightTerrain.x;
        bestRockValue = rightTerrain.z;
      }
      contiguousRockCount++;
    }
    if (bottomTerrain.z > 0.5) {
      if (bottomTerrain.x < lowestContiguousRockHeight) {
        lowestContiguousRockHeight = bottomTerrain.x;
        bestRockValue = bottomTerrain.z;
      }
      contiguousRockCount++;
    }
    if (leftTerrain.z > 0.5) {
      if (leftTerrain.x < lowestContiguousRockHeight) {
        lowestContiguousRockHeight = leftTerrain.x;
        bestRockValue = leftTerrain.z;
      }
      contiguousRockCount++;
    }
    
    // Only spread if:
    // 1. There are contiguous rock neighbors (rock sections directly touching this terrain)
    // 2. Current cell's ORIGINAL height (before erosion) was above the rock, and
    //    has now eroded significantly below the lowest CONTIGUOUS painted rock edge
    //    Compare original terrain height to rock height to see if it was originally above
    float originalTerrainHeight = curTerrain.x; // Original height before this frame's erosion
    
    // Only spread if original terrain was above rock and has eroded well below it
    if (contiguousRockCount > 0 && originalTerrainHeight > lowestContiguousRockHeight) {
      // Calculate how far the CURRENT height is below the lowest contiguous painted edge
      float depthBelowContiguousEdge = lowestContiguousRockHeight - hight;
      
      // Check if this area is below the water surface by comparing total height (terrain + water)
      // to neighboring rock's total height - if water would need to flow through here, don't spread rock
      float lowestRockTotalHeight = 999999.0;
      if (topTerrain.z > 0.5) {
        float rockTotalHeight = topTerrain.x + topTerrain.y; // Rock terrain + water
        if (rockTotalHeight < lowestRockTotalHeight) lowestRockTotalHeight = rockTotalHeight;
      }
      if (rightTerrain.z > 0.5) {
        float rockTotalHeight = rightTerrain.x + rightTerrain.y;
        if (rockTotalHeight < lowestRockTotalHeight) lowestRockTotalHeight = rockTotalHeight;
      }
      if (bottomTerrain.z > 0.5) {
        float rockTotalHeight = bottomTerrain.x + bottomTerrain.y;
        if (rockTotalHeight < lowestRockTotalHeight) lowestRockTotalHeight = rockTotalHeight;
      }
      if (leftTerrain.z > 0.5) {
        float rockTotalHeight = leftTerrain.x + leftTerrain.y;
        if (rockTotalHeight < lowestRockTotalHeight) lowestRockTotalHeight = rockTotalHeight;
      }
      
      // Don't spread rock if current area's total height (terrain + water) is below or near
      // the water surface level of neighboring rock - this would block water flow
      bool isBelowWaterSurface = currentTotalHeight < lowestRockTotalHeight + 0.3;
      
      // Only spread if we're significantly below the painted edge (at least 0.2 units)
      // AND not below the water surface (to allow water to flow through)
      if (depthBelowContiguousEdge >= 0.2 && !isBelowWaterSurface) {
        // Spread amount based on depth below contiguous painted edge and erosion rate
        float erosionAmount = abs(heightChange);
        
        // Very gradual spreading - scales with depth below the contiguous painted edge
        // Only count depth beyond the 0.2 threshold
        float effectiveDepth = depthBelowContiguousEdge - 0.2;
        float depthFactor = clamp(effectiveDepth * 2.0, 0.0, 1.0);
        float spreadFactor = min(erosionAmount * 0.5 * (1.0 + depthFactor * 0.2), 0.01); // Max 1% per frame, very slow
        
        // Calculate how much rock material is being added
        float currentRockValue = curTerrain.z;
        float newRockValue = max(currentRockValue, mix(currentRockValue, 1.0, spreadFactor));
        float rockMaterialAdded = newRockValue - currentRockValue;
        
        // IMPORTANT: When rock spreads, we must maintain material conservation
        // Rock spreading converts existing soil/sediment into rock material
        // To prevent creating material out of thin air, we need to:
        // 1. Reduce sediment (we're converting sediment into rock)
        // 2. Slightly adjust height (rock is denser, but we want to be conservative)
        
        if (rockMaterialAdded > 0.0) {
          // Reduce sediment proportionally to rock material added
          // When soil converts to rock, the sediment that was in that soil is consumed
          float sedimentConsumed = rockMaterialAdded * outsedi * 0.5; // Consume up to 50% of sediment for rock conversion
          outsedi = max(0.0, outsedi - sedimentConsumed);
          
          // Rock is denser than soil, so converting soil to rock should slightly increase height
          // But be very conservative - only small adjustment to prevent material creation
          float rockDensityRatio = 1.1; // Rock is 10% denser than soil (conservative)
          float heightAdjustment = rockMaterialAdded * effectiveDepth * 0.05 * rockDensityRatio; // Very small adjustment
          hight = hight + heightAdjustment;
        }
        
        // Use max to ensure rock value increases (doesn't decrease if already partially rock)
        finalRockMaterial = newRockValue;
        
        // When rock spreads, set the base rock surface height to current height
        // This marks where the rock surface is before any future sediment deposition
        baseRockSurfaceHeight = hight;
      }
    }
  }
  
  // If this cell became rock (through spreading), ensure base surface is initialized
  if (finalRockMaterial > 0.5 && baseRockSurfaceHeight < 0.001) {
    baseRockSurfaceHeight = hight;
  }
  
  writeTerrainNormal = vec4(vec3(abs(slopeSin)),1.f);
  writeSediment = vec4(outsedi,0.0f,0.0f,1.0f);
  writeTerrain = vec4(hight,curTerrain.y,finalRockMaterial,baseRockSurfaceHeight);
  writeVelocity = curvel;
}`,mi=`#version 300 es
precision highp float;

uniform sampler2D vel;
uniform sampler2D sedi;
uniform sampler2D sediBlend;
uniform sampler2D terrain;

uniform float u_SimRes;
uniform float u_timestep;
uniform float unif_advectionSpeedScale;
uniform float unif_advectMultiplier;


layout (location = 0) out vec4 writeSediment;
layout (location = 1) out vec4 writeVel;
layout (location = 2) out vec4 writeSediBlend;



in vec2 fs_Pos;



float samplebilinear(vec2 uv, float sampleKernelSize){
    vec2 cur_loc = sampleKernelSize*uv;
    vec2 uva = floor(cur_loc);
    vec2 uvb = ceil(cur_loc);

    vec2 id00 = uva;
    vec2 id10 = vec2(uvb.x,uva.y);
    vec2 id01 = vec2(uva.x,uvb.y);
    vec2 id11 = uvb;

    vec2 d = cur_loc - uva;

    float res =  (texture(sedi,id00/sampleKernelSize).x*(1.f-d.x)*(1.f-d.y)+
    texture(sedi,id10/sampleKernelSize).x*d.x*(1.f-d.y)+
    texture(sedi,id01/sampleKernelSize).x*(1.f-d.x)*d.y+
    texture(sedi,id11/sampleKernelSize).x*d.x*d.y);

    return res;
}

 


void main() {
 
    vec2 curuv = 0.5f*fs_Pos+0.5f;
    float div = 1.f/u_SimRes;
    float alpha = 1.0;
    float velscale = 1.0/1.0;

    vec4 curvel = (texture(vel,curuv));
    vec4 cursedi = texture(sedi,curuv);
    vec4 curterrain = texture(terrain,curuv);



    vec4 useVel = curvel/u_SimRes;
    useVel *= unif_advectMultiplier * 0.5;



    vec2 oldloc = vec2(curuv.x-useVel.x*u_timestep,curuv.y-useVel.y*u_timestep);
    float oldsedi = texture(sedi, oldloc).x;
    //oldsedi = samplebilinear(oldloc,u_SimRes   );

    float curSediVal = cursedi.x * curterrain.y * 0.1;

    float sediBlendVal = texture(sediBlend, curuv).x;


    sediBlendVal = (sediBlendVal*1660.0 + curSediVal) / 1661.0;


    writeSediment = vec4(oldsedi, 0.0, 0.0, 1.0);
    writeVel = curvel;
    writeSediBlend = vec4(sediBlendVal, 0.0, 0.0, 1.0);
}`,Ti=`#version 300 es
precision highp float;

uniform sampler2D vel;
uniform sampler2D sedi;
uniform sampler2D sediadvecta;
uniform sampler2D sediadvectb;

uniform float u_SimRes;
uniform float u_timestep;
uniform float unif_advectionSpeedScale;


layout (location = 0) out vec4 writeSediment;




in vec2 fs_Pos;


void main() {
 
    vec2 curuv = 0.5f*fs_Pos+0.5f;
    float div = 1.f/u_SimRes;
    float alpha = 1.0;
    float velscale = 1.0/1.0;

    vec4 curvel = (texture(vel,curuv));
    vec4 cursedi = texture(sedi,curuv);

    vec2 targetPos = curuv * u_SimRes - u_timestep * curvel.xy;

    vec4 st;
    st.xy = floor(targetPos - 0.5) + 0.5;
    st.zw = st.xy + 1.0;

    float nodeVal[4];
    nodeVal[0] = texture(sedi, st.xy/u_SimRes).x;
    nodeVal[1] = texture(sedi, st.zy/u_SimRes).x;
    nodeVal[2] = texture(sedi, st.xw/u_SimRes).x;
    nodeVal[3] = texture(sedi, st.zw/u_SimRes).x;

    float clampMin = min(min(min(nodeVal[0],nodeVal[1]),nodeVal[2]),nodeVal[3]);
    float clampMax = max(max(max(nodeVal[0],nodeVal[1]),nodeVal[2]),nodeVal[3]);

    float sediment = texture(sedi,curuv).x;


    float res = texture(sediadvecta,curuv).x + 0.5 * (sediment - texture(sediadvectb,curuv).x);

    sediment = max(min(res,clampMax), clampMin);



//    vec4 useVel = curvel/u_SimRes;
//    useVel *= unif_advectionSpeedScale;
//
//
//
//    vec2 oldloc = vec2(curuv.x-useVel.x*velscale*u_timestep,curuv.y-useVel.y*velscale*u_timestep);
//    float oldsedi = texture(sedi, oldloc).x;



    writeSediment = vec4(sediment, 0.0, 0.0, 1.0);


}`,vi=`#version 300 es
precision highp float;

uniform sampler2D readTerrain;

uniform float u_Time;
uniform float raindeg;
uniform float u_SimRes; // Simulation resolution for neighbor sampling

uniform vec4 u_MouseWorldPos;
uniform vec3 u_MouseWorldDir;
uniform float u_BrushSize;
uniform float u_BrushStrength;
uniform int u_BrushType;
uniform int u_BrushPressed;
uniform vec2 u_BrushPos;
uniform int u_BrushOperation;
uniform int u_RainErosion;
uniform float u_RainErosionStrength;
uniform float u_RainErosionDropSize;
uniform float u_FlattenTargetHeight; // Target height for flatten brush (will be set from center)
uniform vec2 u_SlopeStartPos; // Start position for slope brush
uniform vec2 u_SlopeEndPos; // End position for slope brush
uniform int u_SlopeActive; // 0 = not active, 1 = start set, 2 = end set

uniform int u_SourceCount;
uniform vec2 u_SourcePositions[16];  // Max 16 sources
uniform float u_SourceSizes[16];
uniform float u_SourceStrengths[16];

layout (location = 0) out vec4 writeTerrain;

#define OCTAVES 6

float random (in vec2 st) {
      return fract(sin(dot(st.xy,
      vec2(12.9898,78.233)))*
      43758.5453123);
}


float noise (in vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);

      // Four corners in 2D of a tile
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));

      vec2 u = f * f * (3.0 - 2.0 * f);

      return mix(a, b, u.x) +
      (c - a)* u.y * (1.0 - u.x) +
      (d - b) * u.x * u.y;
}


float fbm (in vec2 st) {
      // Initial values
      float value = 0.0;
      float amplitude = .5;
      float frequency = 0.;
      //
      // Loop of octaves
      for (int i = 0; i < OCTAVES; i++) {
            value += amplitude * noise(st);//iqnoise(st,1.f,1.f);
            st *= 2.0;
            amplitude *= .53;
      }
      return value;
}


//generic noise from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}

float noise(vec3 p){
      vec3 a = floor(p);
      vec3 d = p - a;
      d = d * d * (3.0 - 2.0 * d);

      vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
      vec4 k1 = perm(b.xyxy);
      vec4 k2 = perm(k1.xyxy + b.zzww);

      vec4 c = k2 + a.zzzz;
      vec4 k3 = perm(c);
      vec4 k4 = perm(c + 1.0);

      vec4 o1 = fract(k3 * (1.0 / 41.0));
      vec4 o2 = fract(k4 * (1.0 / 41.0));

      vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
      vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

      return o4.y * d.y + o4.x * (1.0 - d.y);
}

//float random (in vec2 st) {
//      return fract(sin(dot(st.xy,
//      vec2(12.9898,78.233)))*
//      43758.5453123);
//}

in vec2 fs_Pos;


struct BrushTmp{
      float bStrength;
      float bSize;
      vec2 bPos;
};

void main() {

      vec2 curuv = 0.5f*fs_Pos+0.5f;
      vec3 sand = vec3(214.f/255.f,164.f/255.f,96.f/255.f);
      vec3 watercol = vec3(0.1,0.3,0.8);


      float addterrain = 0.0;
      float addwater = 0.0;
      float amount = 0.0006 * u_BrushStrength;
      float aw = fbm(curuv*10.0 + vec2(sin(u_Time * 35.0), cos(u_Time*115.0)));
      float div = 1.0 / u_SimRes; // Pixel size in UV space
      
      // Read current terrain
      vec4 cur = texture(readTerrain, curuv);
      float currentHeight = cur.x;
      
      // normal water brush
      // Early exit: only do brush calculations if brush is active AND pressed
      // This avoids expensive distance calculations when not brushing
      if(u_BrushType != 0 && u_BrushPressed == 1){
            vec3 ro = u_MouseWorldPos.xyz;
            vec3 rd = u_MouseWorldDir;
            vec2 pointOnPlane = u_BrushPos;
            float pdis2fragment = distance(pointOnPlane, curuv);
            if (pdis2fragment < 0.01 * u_BrushSize){
                  float dens = (0.01 * u_BrushSize - pdis2fragment * 0.5) / (0.01 * u_BrushSize);
                  dens = max(0.0, dens); // Clamp density

                  if(u_BrushType == 1){
                        // Shift Terrain - Elevate with primary button, lower with secondary (Alt+brush)
                        // u_BrushOperation: 0 = primary (elevate), 1 = secondary (lower)
                        addterrain =  amount * 1.0 * 280.0;
                        addterrain = u_BrushOperation == 0 ? addterrain : -addterrain;
                  }else if(u_BrushType == 2){
                        // Water brush
                        addwater =  amount * dens * 200.0;
                        addwater *= aw;
                        addwater = u_BrushOperation == 0 ? addwater : -addwater;
                  }else if(u_BrushType == 3){
                        // Rock brush - will be handled in output to set B channel
                  }else if(u_BrushType == 4){
                        // Soften Terrain - gentle smoothing (primary button only)
                        if (u_BrushOperation == 0) {
                              vec4 top = texture(readTerrain, curuv + vec2(0.0, div));
                              vec4 right = texture(readTerrain, curuv + vec2(div, 0.0));
                              vec4 bottom = texture(readTerrain, curuv + vec2(0.0, -div));
                              vec4 left = texture(readTerrain, curuv + vec2(-div, 0.0));
                              
                              float avgHeight = (top.x + right.x + bottom.x + left.x) / 4.0;
                              float smoothAmount = dens * u_BrushStrength * 0.1; // Smoothing strength
                              addterrain = (avgHeight - currentHeight) * smoothAmount;
                        }
                  }else if(u_BrushType == 5){
                        // Flatten Terrain - secondary button (Alt) sets target, primary flattens
                        // Only flatten when primary button is pressed (brushOperation == 0)
                        // Alt+click (brushOperation == 1) should NOT flatten, just set target in JS
                        if (u_BrushOperation == 0) {
                              // Primary button: flatten to target height
                              float targetHeight = u_FlattenTargetHeight;
                              float flattenAmount = dens * u_BrushStrength * 0.2; // Flattening strength
                              addterrain = (targetHeight - currentHeight) * flattenAmount;
                        }
                        // When Alt is pressed (brushOperation == 1), don't do anything - JS will set target
                  }else if(u_BrushType == 6){
                        // Slope Terrain - click sets end point, Alt+click sets start point
                        // Once both points are set (u_SlopeActive == 2), create slope between them
                        // Only apply when brush is pressed AND near the slope line
                        if (u_SlopeActive == 2) {
                              // Both points are set - create slope from start to end
                              vec2 slopeDir = u_SlopeEndPos - u_SlopeStartPos;
                              float slopeLength = length(slopeDir);
                              
                              if (slopeLength > 0.001) {
                                    // Normalize direction
                                    vec2 slopeDirNorm = normalize(slopeDir);
                                    
                                    // Project brush position onto the slope line to see where we are along it
                                    vec2 brushToStart = u_BrushPos - u_SlopeStartPos;
                                    float brushProjDist = dot(brushToStart, slopeDirNorm);
                                    
                                    // Project current fragment position onto the slope line
                                    vec2 toCurrent = curuv - u_SlopeStartPos;
                                    float projDist = dot(toCurrent, slopeDirNorm);
                                    
                                    // Get heights at start and end points
                                    vec4 startTerrain = texture(readTerrain, u_SlopeStartPos);
                                    vec4 endTerrain = texture(readTerrain, u_SlopeEndPos);
                                    float startHeight = startTerrain.x;
                                    float endHeight = endTerrain.x;
                                    
                                    // Calculate target height based on position along slope
                                    float t = clamp(projDist / slopeLength, 0.0, 1.0);
                                    float targetHeight = mix(startHeight, endHeight, t);
                                    
                                    // Check if current fragment is within brush radius of the brush position
                                    float distToBrush = distance(curuv, u_BrushPos);
                                    float brushRadius = 0.01 * u_BrushSize;
                                    
                                    // Only apply slope when fragment is within brush radius
                                    if (distToBrush < brushRadius) {
                                          // Calculate density based on distance from brush center
                                          float dens = (brushRadius - distToBrush) / brushRadius;
                                          dens = max(0.0, dens);
                                          
                                          // Apply slope with moderate strength - lower than before to avoid over-correction
                                          float slopeAmount = dens * u_BrushStrength * 0.3;
                                          addterrain = (targetHeight - currentHeight) * slopeAmount;
                                    }
                              }
                        }
                  }

            }

      }

      // rain erosion
      if(u_RainErosion == 1 && mod(u_Time, 5.0) == 1.0 ){
            float smallradius = 0.025  * u_RainErosionDropSize;
            float rdx = random(vec2(30.0, cos(u_Time)));
            float rdy = random(vec2(u_Time, 10.0));
            float rdr = random(vec2(20.0,u_Time * 10.0));

            float str = 1.0;
            if(mod(u_Time, 20.0) == 1.0) str = 9.0;

            float dis2small = distance(vec2(rdx, rdy), curuv);
            if (dis2small < smallradius ){
                  addwater +=  0.06 * u_RainErosionStrength* (1.0 + 5.0 * rdr);
            }



      }

//                  if(mod(u_Time, 10.0) == 1.0)
//                  addwater += 0.006 * aw;


      // permanent water source brush - handle multiple sources
      for(int i = 0; i < u_SourceCount; i++){
            vec2 pointOnPlane = u_SourcePositions[i];
            float pdis2fragment = distance(pointOnPlane, curuv);
            float sourceSize = u_SourceSizes[i];
            float sourceStrength = u_SourceStrengths[i];
            
            if (pdis2fragment < 0.01 * sourceSize){
                  float dens = (0.01 * sourceSize - pdis2fragment) / (0.01 * sourceSize);
                  float sourceAmount = 0.0006 * sourceStrength;
                  float sourceWater = sourceAmount * dens * 280.0;
                  float aw = fbm(curuv*200.0 + vec2(sin(u_Time * 5.0), cos(u_Time*15.0)));
                  sourceWater *= aw;
                  addwater += sourceWater;
            }
      }






      // cur already declared at top of main()
      float rain = raindeg;



      float epsilon = 0.000001f;


      float nrain = noise(vec3(curuv * 100.0, u_Time));
      nrain = fbm(curuv*1.0 + vec2(sin(u_Time * 5.0), cos(u_Time*15.0)));

      rain = nrain/100.0;

//      if(mod(u_Time, 10.0) <= 1.0){
//            rain = 0.0f;
//            addwater = 0.0f;
//      }

      //if(mod(u_Time,100.0)!=9.0)
      rain = 0.0f;

      epsilon = 0.0f;
//      if(curuv.x<maxx && curuv.x>minx && curuv.y<maxy&&curuv.y>miny){
//            rain += 0.001;
//      }
//      else{
//            rain = raindeg;
//      }


      // Handle rock material placement (store in B channel: 1.0 = rock, 0.0 = normal terrain)
      float rockMaterial = cur.z;
      float baseRockSurfaceHeight = cur.w; // A channel stores base rock surface height
      
      // Check for rock brush - handle it separately since it modifies the B channel
      // Early exit: only do brush calculations if brush is active AND pressed
      if(u_BrushType == 3 && u_BrushPressed == 1){
            vec2 pointOnPlane = u_BrushPos;
            float pdis2fragment = distance(pointOnPlane, curuv);
            if (pdis2fragment < 0.01 * u_BrushSize){
                  float dens = (0.01 * u_BrushSize - pdis2fragment * 0.5) / (0.01 * u_BrushSize);
                  // Use a much stronger mix factor for rock placement - make it clearly visible
                  // Clamp dens to ensure it's positive and meaningful
                  dens = max(0.0, dens);
                  float mixFactor = dens * u_BrushStrength * 2.0; // Strong multiplier for immediate effect
                  mixFactor = min(mixFactor, 1.0); // Clamp to 1.0
                  if(u_BrushOperation == 0){
                        // Add rock material - use max to ensure it increases
                        float oldRockMaterial = rockMaterial;
                        rockMaterial = max(rockMaterial, mix(rockMaterial, 1.0, mixFactor));
                        
                        // If we're placing rock (and rock material is significant), reset base rock surface height
                        // This makes the new rock surface the base, even if there was sediment on top
                        // Reset whenever we're painting rock, not just when it increases (handles already-high rock)
                        if(rockMaterial > 0.5 && mixFactor > 0.01){
                              // Calculate final height after terrain modifications
                              float finalHeight = min(max(cur.x + addterrain, -0.10),2000.30);
                              // Reset base rock surface to current height - new rock becomes the base
                              baseRockSurfaceHeight = finalHeight;
                        }
                  } else {
                        // Remove rock material - use min to ensure it decreases
                        rockMaterial = min(rockMaterial, mix(rockMaterial, 0.0, mixFactor));
                        // If rock is removed, clear the base rock surface height
                        if(rockMaterial < 0.1){
                              baseRockSurfaceHeight = 0.0;
                        }
                  }
            }
      }
      
      writeTerrain = vec4(min(max(cur.x + addterrain, -0.10),2000.30),max(cur.y+rain * raindeg + addwater, 0.0f),rockMaterial,baseRockSurfaceHeight);
}`,Ei=`#version 300 es
precision highp float;

uniform sampler2D terrain;
uniform float evapod;

layout (location = 0) out vec4 writeTerrain;


in vec2 fs_Pos;


float timestep = 0.0001;


void main() {
      float Ke = 0.4;
      vec2 curuv = 0.5f*fs_Pos+0.5f;
      vec4 cur = texture(terrain,curuv);
      float eva = 1.f-evapod;
      writeTerrain = vec4(cur.x,cur.y*eva,cur.z,cur.w);
}`,Ri=`#version 300 es
precision highp float;

uniform sampler2D readTerrain;
uniform sampler2D readSedi;

// this render pass was used soley for smoothing sharp ridges & ravines which would potentially introduce corruption
// thanks to the references https://github.com/Huw-man/Interactive-Erosion-Simulator-on-GPU & https://github.com/karhu/terrain-erosion

layout (location = 0) out vec4 writeTerrain;
layout (location = 1) out vec4 writeAvg;

uniform float u_SimRes;
uniform int unif_ErosionMode;
uniform int unif_rainMode;
in vec2 fs_Pos;


vec3 calnor(vec2 uv){
    float eps = 1.f/u_SimRes;
    vec4 cur = texture(readTerrain,uv);
    vec4 r = texture(readTerrain,uv+vec2(eps,0.f));
    vec4 t = texture(readTerrain,uv+vec2(0.f,eps));
    vec4 b = texture(readTerrain,uv+vec2(0.f,-eps));
    vec4 l = texture(readTerrain,uv+vec2(-eps,0.f));

    vec3 nor = vec3(l.x - r.x, 2.0, t.x - b.x);
    nor = -normalize(nor);
    return nor;
}

void main() {

    float diagonalWeight = 0.707;
    float threathhold = 0.1f;
    //if(unif_rainMode == 1) threathhold = 5.0;
    float div = 1.0/u_SimRes;
    vec2 curuv = 0.5f*fs_Pos+0.5f;
    vec4 cur = texture(readTerrain,curuv);
    //float curs = texture(readSedi,curuv).x;
    //threathhold = clamp(curs * 2.0, 0.1, 2.0);
    vec3 nor = calnor(curuv);
    //float dval = abs(dot(nor, vec3(0.0, 1.0, 0.0)));
    //threathhold *= dval;

    vec4 top = texture(readTerrain,curuv+vec2(0.f,div));
    vec4 topright = texture(readTerrain,curuv+vec2(div,div));
    vec4 right = texture(readTerrain,curuv+vec2(div,0.f));
    vec4 bottomright = texture(readTerrain,curuv+vec2(div,-div));
    vec4 bottom = texture(readTerrain,curuv+vec2(0.f,-div));
    vec4 bottomleft = texture(readTerrain,curuv+vec2(-div,-div));
    vec4 left = texture(readTerrain,curuv+vec2(-div,0.f));
    vec4 topleft = texture(readTerrain,curuv+vec2(-div,div));

    float t_d = cur.x - top.x;
    float r_d = cur.x - right.x;
    float b_d = cur.x - bottom.x;
    float l_d = cur.x - left.x;
    float tr_d = cur.x - topright.x;
    float br_d = cur.x - bottomright.x;
    float bl_d = cur.x - bottomleft.x;
    float tl_d = cur.x - topleft.x;



    float avg_hdiff = t_d + r_d + b_d + l_d + (tr_d + br_d + bl_d + tl_d) * diagonalWeight;
    avg_hdiff/=(4.0 * (1.0 + diagonalWeight));
    avg_hdiff = abs(avg_hdiff);

    float avg_hdiff_4 = t_d + r_d + b_d + l_d;
    avg_hdiff_4/=4.0;
    avg_hdiff_4 = abs(avg_hdiff_4);
    // for mountain erosion mode, will create flatter plains and sharper ridges, but will lose detail in flatter regeion
    if(unif_ErosionMode == 1){
        threathhold = avg_hdiff / 2.0;
    }
    // for polygonal looking terrain
    else if(unif_ErosionMode == 2){
        threathhold = pow(avg_hdiff,3.0);
    }
    float cur_h = cur.x;
    float col = 0.0;
    float curWeight = 8.0;


    //eight dir average
    if(((abs(r_d) > threathhold && abs(l_d) > threathhold)&& r_d*l_d > 0.0)||
    ((abs(t_d) > threathhold && abs(b_d) > threathhold) && t_d * b_d > 0.0)||
    ((abs(tr_d) > threathhold && abs(bl_d) > threathhold) && tr_d * bl_d > 0.0)||
    ((abs(tl_d) > threathhold && abs(br_d) > threathhold) && tl_d * br_d > 0.0)){
        cur_h = (cur.x * curWeight + top.x + right.x + bottom.x + left.x + topright.x * diagonalWeight + topleft.x * diagonalWeight + bottomleft.x * diagonalWeight + bottomright.x * diagonalWeight)/(4.0 * (1.0 + diagonalWeight) + curWeight);
        col = 1.0;
    }

//    //four diagnal dirs
//    if(((abs(tr_d) > threathhold && abs(bl_d) > threathhold) && tr_d * bl_d > 0.0)||
//    ((abs(tl_d) > threathhold && abs(br_d) > threathhold) && tl_d * br_d > 0.0)){
//        cur_h = (cur.x * curWeight + topright.x * diagonalWeight + topleft.x * diagonalWeight + bottomleft.x * diagonalWeight + bottomright.x * diagonalWeight)/(4.0 * ( diagonalWeight) + curWeight);
//        col = 1.0;
//    }
    //four dir average
//    if(((pow(abs(r_d),1.0) > threathhold || pow(abs(l_d),1.0) > threathhold)&& r_d*l_d > 0.0)||
//    ((pow(abs(t_d),1.0) > threathhold || pow(abs(b_d),1.0) > threathhold) && t_d * b_d > 0.0)){
//        cur_h = (cur.x * curWeight + top.x + right.x + bottom.x + left.x )/(4.0+curWeight);
//        col = 1.0;
//    }else{
//        col = 0.0;
//    }

    //four dir average
//    if(((pow(abs(r_d),1.0) > threathhold && pow(abs(l_d),1.0) > threathhold)&& r_d*l_d > 0.0)||
//    ((pow(abs(t_d),1.0) > threathhold && pow(abs(b_d),1.0) > threathhold) && t_d * b_d > 0.0)){
//        cur_h = (cur.x * curWeight + top.x + right.x + bottom.x + left.x )/(4.0+curWeight);
//        col = 1.0;
//    }


//    threathhold = 0.1;
//    if((abs(r_d) > threathhold) && (abs(l_d) > threathhold) && (abs(b_d) > threathhold) && (abs(t_d) > threathhold) && ((l_d > 0.0 && b_d > 0.0&& t_d > 0.0 && r_d > 0.0) || (l_d < 0.0 && b_d < 0.0&& t_d < 0.0 && r_d < 0.0))){
//                cur_h = (cur.x * curWeight + top.x + right.x + bottom.x + left.x )/(4.0+curWeight);
//                col = 1.0;
//    }

    writeTerrain = vec4(cur_h,cur.y,cur.z,cur.w);
    writeAvg = vec4(vec3(col), 1.0);
}`,bi=`#version 300 es
precision highp float;
layout (location = 0) out vec4 writeTerrain;

void main() {

      writeTerrain = vec4(0.0, 0.0, 0.0, 0.0);
}`,wi=`#version 300 es


uniform mat4 u_Model;
uniform mat4 u_ModelInvTr;
uniform mat4 u_ViewProj;
uniform vec2 u_PlanePos; // Our location in the virtual world displayed by the plane

uniform sampler2D hightmap;
uniform sampler2D sedimap;
uniform float u_SimRes;

in vec4 vs_Pos;
in vec4 vs_Nor;
in vec4 vs_Col;
in vec2 vs_Uv;

out vec3 fs_Pos;
out vec4 fs_Nor;
out vec4 fs_Col;

out vec2 fs_Uv;



void main()
{

  fs_Uv = vs_Uv;
  float sval = 1.f*texture(sedimap,vs_Uv).x;
  float yval = 1.f*texture(hightmap,vs_Uv).x;
  float wval = 1.f*texture(hightmap,vs_Uv).y;
  vec4 modelposition = vec4(vs_Pos.x, (yval + sval + wval)/u_SimRes, vs_Pos.z, 1.0);
  fs_Pos = modelposition.xyz;


  modelposition = u_Model * modelposition;
  gl_Position = u_ViewProj * modelposition;
}
`,yi=`#version 300 es
precision highp float;

uniform vec2 u_PlanePos; // Our location in the virtual world displayed by the plane

in vec3 fs_Pos;
in vec4 fs_Nor;
in vec4 fs_Col;

uniform sampler2D hightmap;
uniform sampler2D normap;
uniform sampler2D sceneDepth;
uniform sampler2D colorReflection;
uniform sampler2D sedimap;

in float fs_Sine;
in vec2 fs_Uv;
layout (location = 0) out vec4 out_Col; // This is the final output color that you will see on your
layout (location = 1) out vec4 col_reflect;
                  // screen for the pixel that is currently being processed.
uniform vec3 u_Eye, u_Ref, u_Up;


uniform int u_TerrainType;
uniform float u_WaterTransparency;
uniform float u_SimRes;
uniform vec2 u_Dimensions;
uniform vec3 unif_LightPos;
uniform float u_far;
uniform float u_near;

vec3 calnor(vec2 uv){
    float eps = 1.0/u_SimRes;
    vec4 cur = texture(hightmap,uv);
    vec4 r = texture(hightmap,uv+vec2(eps,0.f));
    vec4 t = texture(hightmap,uv+vec2(0.f,eps));

    vec3 n1 = normalize(vec3(-1.0, cur.y + cur.x - r.y - r.x, 0.f));
    vec3 n2 = normalize(vec3(-1.0, t.x + t.y - r.y - r.x, 1.0));

    vec3 nor = -cross(n1,n2);
    nor = normalize(nor);
    return nor;
}

vec3 sky(in vec3 rd){
    return mix(vec3(0.6,0.6,0.6),vec3(0.3,0.5,0.9),clamp(rd.y,0.f,1.f));
}

float linearDepth(float depthSample)
{
    depthSample = 2.0 * depthSample - 1.0;
    float zLinear = 2.0 * u_near * u_far / (u_far + u_near - depthSample * (u_far - u_near));
    return zLinear;
}

void main()
{

    vec2 uv = vec2(gl_FragCoord.xy/u_Dimensions);
    float terrainDepth = texture(sceneDepth,uv).x;
    float sediment = texture(sedimap,fs_Uv).x;
    float waterDepth = gl_FragCoord.z;

    terrainDepth = linearDepth(terrainDepth);
    waterDepth = linearDepth(waterDepth);

    float dpVal = 180.0 * max(0.0,terrainDepth - waterDepth);
    dpVal = clamp(dpVal, 0.0,4.0);
    //dpVal = pow(dpVal, 0.1);

    dpVal = 1.0 - exp(-dpVal * 1.0);


    float fbias = 0.2;
    float fscale = 0.2;
    float fpow = 22.0;
    vec3 sundir = unif_LightPos;

    sundir = normalize(sundir);

    vec3 nor = -calnor(fs_Uv);
    vec3 viewdir = normalize(u_Eye - fs_Pos);
    vec3 lightdir = normalize(sundir);
    vec3 halfway = normalize(lightdir + viewdir);
    vec3 reflectedSky = sky(halfway);
    float spec = pow(max(dot(nor, halfway), 0.0), 333.0);


    float R = max(0.0, min(1.0, fbias + fscale * pow(1.0 + dot(viewdir, -nor), fpow)));

    //lamb =1.f;

    float wval = texture(hightmap,fs_Uv).y;
    wval /= 1.0;

    // Check if underlying terrain is rock (B channel > 0.1)
    vec4 terrainSample = texture(hightmap, fs_Uv);
    float rockVal = terrainSample.z;
    bool isRock = rockVal > 0.1;

    vec3 watercolor = mix(vec3(0.8,0.0,0.0), vec3(0.0,0.0,0.8), sediment * 2.0);
    vec3 watercolorspec = vec3(1.0);
    watercolorspec *= spec;

    // Base water color - make it brighter on rock for better visibility
    vec3 baseWaterColor = vec3(0.0, 0.3, 0.5);
    if (isRock) {
        // Make water brighter and more saturated on rock for better contrast
        // Rock is dark, so water should be lighter to stand out
        baseWaterColor = mix(baseWaterColor, vec3(0.2, 0.5, 0.8), 0.5); // Brighter blue on rock
    }

    out_Col = vec4(baseWaterColor + R * reflectedSky + watercolorspec  , min((1.8 + spec) * u_WaterTransparency * dpVal,1.0));
    col_reflect = vec4(1.0);
}
`,gi=`#version 300 es
precision highp float;

uniform sampler2D readTerrain;//water and hight map R: hight map, G: water map, B: , A:
uniform sampler2D readMaxSlippage;

uniform float u_SimRes;
uniform float u_PipeLen;
uniform float u_timestep;
uniform float u_PipeArea;


uniform float unif_thermalRate;


layout (location = 0) out vec4 writeFlux;

in vec2 fs_Pos;



//
//      x
//  w   c   y
//      z
//


void main() {

  vec2 curuv = 0.5f*fs_Pos+0.5f;
  float div = 1.0 / u_SimRes;
  float thermalRate = unif_thermalRate;
  float hardness = 1.0;



  vec4 terraintop = texture(readTerrain,curuv+vec2(0.f,div));
  vec4 terrainright = texture(readTerrain,curuv+vec2(div,0.f));
  vec4 terrainbottom = texture(readTerrain,curuv+vec2(0.f,-div));
  vec4 terrainleft = texture(readTerrain,curuv+vec2(-div,0.f));
  vec4 terraincur = texture(readTerrain,curuv);

  float slippagetop = texture(readMaxSlippage,curuv+vec2(0.f,div)).x;
  float slippageright = texture(readMaxSlippage,curuv+vec2(div,0.f)).x;
  float slippagebottom = texture(readMaxSlippage,curuv+vec2(0.f,-div)).x;
  float slippageleft = texture(readMaxSlippage,curuv+vec2(-div,0.f)).x;
  float slippagecur = texture(readMaxSlippage,curuv).x;

  vec4 diff;
  diff.x = terraincur.x - terraintop.x - (slippagecur + slippagetop) * 0.5;
  diff.y = terraincur.x - terrainright.x - (slippagecur + slippageright) * 0.5;
  diff.z = terraincur.x - terrainbottom.x - (slippagecur + slippagebottom) * 0.5;
  diff.w = terraincur.x - terrainleft.x - (slippagecur + slippageleft) * 0.5;

  diff = max(vec4(0.0), diff);

  vec4 newFlow = diff * 1.2;

  float outfactor = (newFlow.x + newFlow.y + newFlow.z + newFlow.w)*u_timestep;

  if(outfactor>1e-5){
    outfactor = terraincur.x / outfactor;
    if(outfactor > 1.0) outfactor = 1.0;
    newFlow = newFlow * outfactor;
  }


  vec4 outputflux = newFlow;
  writeFlux = outputflux;

}
`,Fi=`#version 300 es
precision highp float;

uniform sampler2D readTerrainFlux;//water and hight map R: hight map, G: water map, B: , A:
uniform sampler2D readTerrain;

uniform float u_SimRes;
uniform float u_PipeLen;
uniform float u_timestep;
uniform float u_PipeArea;
uniform float unif_thermalErosionScale;

layout (location = 0) out vec4 writeTerrain;

in vec2 fs_Pos;



//
//      x
//  w   c   y
//      z
//


void main() {

  vec2 curuv = 0.5f*fs_Pos+0.5f;
  float div = 1.f/u_SimRes;
  float thermalErosionScale = unif_thermalErosionScale;

  vec4 topflux = texture(readTerrainFlux,curuv+vec2(0.f,div));
  vec4 rightflux = texture(readTerrainFlux,curuv+vec2(div,0.f));
  vec4 bottomflux = texture(readTerrainFlux,curuv+vec2(0.f,-div));
  vec4 leftflux = texture(readTerrainFlux,curuv+vec2(-div,0.f));

  vec4 inputflux = vec4(topflux.z,rightflux.w,bottomflux.x,leftflux.y);
  vec4 outputflux = texture(readTerrainFlux,curuv);

  float vol = inputflux.x + inputflux.y + inputflux.z + inputflux.w - outputflux.x - outputflux.y - outputflux.z - outputflux.w;

  float tdelta = min(50.0, u_timestep * thermalErosionScale) * vol;

  vec4 curTerrain = texture(readTerrain, curuv);

  //writeTerrain = vec4(curTerrain.x ,curTerrain.y,curTerrain.z,curTerrain.w);
  writeTerrain = vec4(curTerrain.x  + tdelta,curTerrain.y,curTerrain.z,curTerrain.w);
}
`,Ai=`#version 300 es
precision highp float;

uniform sampler2D readTerrain;//water and hight map R: hight map, G: water map, B: , A:


uniform float u_SimRes;
uniform float u_PipeLen;
uniform float u_timestep;
uniform float u_PipeArea;
uniform float unif_thermalErosionScale;
uniform float unif_TalusScale;
uniform int unif_rainMode;

layout (location = 0) out vec4 writeMaxslippage;

in vec2 fs_Pos;



//
//      x
//  w   c   y
//      z
//


void main() {

  vec2 curuv = 0.5f*fs_Pos+0.5f;
  float div = 1.f/u_SimRes;
  float _maxHeightDiff = unif_TalusScale;
  //if(unif_rainMode == 1) _maxHeightDiff = 2.0; // lock talus angle here if rain mode

  vec4 terraintop = texture(readTerrain,curuv+vec2(0.f,div));
  vec4 terrainright = texture(readTerrain,curuv+vec2(div,0.f));
  vec4 terrainbottom = texture(readTerrain,curuv+vec2(0.f,-div));
  vec4 terrainleft = texture(readTerrain,curuv+vec2(-div,0.f));
  vec4 terraincur = texture(readTerrain,curuv);

  float maxLocalDiff = _maxHeightDiff * 0.01;
  float avgDiff = (terraintop.x + terrainright.x + terrainbottom.x + terrainleft.x) * 0.25 - terraincur.x;
  avgDiff = 10.0 * max(abs(avgDiff) - maxLocalDiff,0.0);

  writeMaxslippage = vec4(max(_maxHeightDiff - avgDiff,0.0),0.0,0.0,1.0);

}
`,Si=`#version 300 es



uniform mat4 u_view;
uniform mat4 u_proj;
uniform mat4 u_Model;

uniform sampler2D hightmap;
uniform sampler2D sedimap;
uniform float u_SimRes;

in vec4 vs_Pos;
in vec4 vs_Nor;
in vec4 vs_Col;
in vec2 vs_Uv;

out vec3 fs_Pos;
out vec4 fs_Nor;
out vec4 fs_Col;

out vec2 fs_Uv;



void main()
{

  fs_Uv = vs_Uv;
  float sval = 1.f*texture(sedimap,vs_Uv).x;
  float yval = 1.f*texture(hightmap,vs_Uv).x;
  float wval = 1.f*texture(hightmap,vs_Uv).y;
  vec4 modelposition = vec4(vs_Pos.x, (yval )/u_SimRes , vs_Pos.z, 1.0);
  fs_Pos = modelposition.xyz;


  modelposition = u_Model * modelposition;
  gl_Position = u_proj * u_view * modelposition;
}
`,_i=`#version 300 es
precision highp float;




in vec3 fs_Pos;
in vec4 fs_Nor;
in vec4 fs_Col;


uniform sampler2D hightmap;

uniform sampler2D sedimap;

layout (location = 0) out vec4 shadowtex;

in float fs_Sine;
in vec2 fs_Uv;

uniform vec3 u_Eye, u_Ref, u_Up;
uniform vec2 u_Dimensions;
uniform int u_TerrainDebug;

uniform vec4 u_MouseWorldPos;
uniform vec3 u_MouseWorldDir;
uniform float u_BrushSize;
uniform int u_BrushType;
uniform vec2 u_BrushPos;
uniform float u_SimRes;
uniform float u_SnowRange;




void main()
{

    shadowtex = vec4(vec3(gl_FragCoord.z),1.f);
}
`,Di=`#version 300 es
precision highp float;

uniform vec2 u_PlanePos; // Our location in the virtual world displayed by the plane





out vec4 out_Col; // This is the final output color that you will see on your
                  // screen for the pixel that is currently being processed.

uniform float u_SimRes;





void main()
{


    out_Col = vec4(vec3(gl_FragCoord.z),1.f);
}
`,Mi=`#version 300 es
precision highp float;

uniform sampler2D color_tex;
uniform sampler2D bi_tex;
uniform sampler2D sceneDepth_tex;

uniform float evapod;

layout (location = 0) out vec4 result;


in vec2 fs_Pos;


void main() {

      vec2 curuv = 0.5f*fs_Pos+0.5f;
      vec4 geometry = texture(color_tex,curuv);
      vec4 scatter = texture(bi_tex,curuv);
      vec4 s_depth = texture(sceneDepth_tex, curuv);

      float scatter_alpha = clamp(scatter.w,0.0,1.0);

      vec4 color = vec4((1.0 - scatter.w) * geometry.xyz + (scatter.w)* scatter.xyz,1.0);



      float scatteralpha = clamp(scatter.x, 0.0, 1.0);

      if(s_depth.x == 0.0){
            color = vec4(geometry.xyz + scatter.xyz, 1.0);
      }else{
            color = vec4(geometry.xyz + scatter.xyz * 0.9, 1.0);
      }


      // simple tone mapping
      float gamma = 0.8;
      float exposure = 1.5;

      vec3 mapped = vec3(1.0) - exp(-color.xyz * exposure);

      mapped = pow(mapped, vec3(1.0 / gamma));


      result = vec4(mapped, 1.0);
}`,Ui=`#version 300 es
precision highp float;

uniform sampler2D scatter_tex;
uniform sampler2D scene_depth;


uniform float evapod;
uniform vec2 u_Dimensions;
uniform int u_isHorizontal;
uniform float u_far;
uniform float u_near;

layout (location = 0) out vec4 result;




in vec2 fs_Pos;

#define GAUSS_BLUR_DEVIATION 1.5
#define FULL_RES_BLUR_KERNEL_SIZE 3
#define PI 3.1415926
#define BLUR_DEPTH_FACTOR 0.5

float GaussianWeight(float offset, float deviation)
{
      float weight = 1.0f / sqrt(2.0f * PI * deviation * deviation);
      weight *= exp(-(offset * offset) / (2.0f * deviation * deviation));
      return weight;
}

float linearDepth(float depthSample)
{
      depthSample = 2.0 * depthSample - 1.0;
      float zLinear = 2.0 * u_near * u_far / (u_far + u_near - depthSample * (u_far - u_near));
      return zLinear;
}

vec4 BilateralBlur(vec2 curuv, vec2 dir){
      const float deviation = float(FULL_RES_BLUR_KERNEL_SIZE) / float(GAUSS_BLUR_DEVIATION);
      vec4 centerColor = texture(scatter_tex,curuv);
      float centerDepth = linearDepth(texture(scene_depth,curuv).x);
      vec4 color = centerColor;
      float weightSum = 0.0;
      float weight = GaussianWeight(0.0, deviation);
      float al = centerColor.w;
      color *= weight;
      weightSum += weight;
      for(int i = -FULL_RES_BLUR_KERNEL_SIZE; i< 0; i+= 1){
            vec2 offset = dir * float(i);
            vec4 sampleColor = texture(scatter_tex,curuv + offset / u_Dimensions);

            float sampleDepth = linearDepth(texture(scene_depth,curuv + offset / u_Dimensions).x);
            float deptDiff = abs(centerDepth - sampleDepth);
            float dpFactor = deptDiff * BLUR_DEPTH_FACTOR;
            float w = exp(-(dpFactor * dpFactor));

            weight = GaussianWeight(float(i), deviation) * w;
            color += weight * sampleColor;
            al += weight * sampleColor.w;
            weightSum += weight;
      }
      for(int i = 1; i< FULL_RES_BLUR_KERNEL_SIZE; i+= 1){
            vec2 offset = dir * float(i);
            vec4 sampleColor = texture(scatter_tex,curuv + offset / u_Dimensions);

            float sampleDepth = linearDepth(texture(scene_depth,curuv + offset / u_Dimensions).x);
            float deptDiff = abs(centerDepth - sampleDepth);
            float dpFactor = deptDiff * BLUR_DEPTH_FACTOR;
            float w = exp(-(dpFactor * dpFactor));


            weight = GaussianWeight(float(i), deviation) * w;
            color += weight * sampleColor;
            al += weight * sampleColor.w;
            weightSum += weight;
      }
      color /= weightSum;
      al /= weightSum;

      color.w = 1.0;
      return color;

}

void main() {

      vec2 curuv = 0.5f*fs_Pos+0.5f;

      vec4 scatter = texture(scatter_tex,curuv);

      vec4 final_colour = vec4(0.0);

      if(u_isHorizontal==0){
            final_colour = BilateralBlur(curuv, vec2(1.0,0.0));
      }else{
            final_colour = BilateralBlur(curuv, vec2(0.0,1.0));
      }

      result = final_colour;
}`,xi=`#version 300 es
precision highp float;

uniform sampler2D readVel;


uniform float u_SimRes;
uniform float u_timestep;



layout (location = 0) out vec4 writeVel;

#define useMullerPath false

in vec2 fs_Pos;





void main() {
 
    vec2 curuv = 0.5f*fs_Pos+0.5f;
    float div = 1.f/u_SimRes;
    float alpha = 1.0;
    float velscale = 1.0/1.0;

    vec4 curvel = texture(readVel,curuv);



    vec4 useVel = curvel/u_SimRes;
    //useVel *= unif_advectMultiplier * 0.5;
    useVel *= 0.5;


    vec2 oldloc = vec2(curuv.x-useVel.x*u_timestep,curuv.y-useVel.y*u_timestep);
    vec2 oldvel = texture(readVel, oldloc).xy;
    //oldsedi = samplebilinear(oldloc,u_SimRes   );



    writeVel = vec4(oldvel.xy, curvel.zw);
}`;function Pi(n){const e=new G([new _(n.VERTEX_SHADER,wr),new _(n.FRAGMENT_SHADER,ui)]),r=new G([new _(n.VERTEX_SHADER,li),new _(n.FRAGMENT_SHADER,fi)]),o=new G([new _(n.VERTEX_SHADER,ee),new _(n.FRAGMENT_SHADER,ci)]),f=new G([new _(n.VERTEX_SHADER,ee),new _(n.FRAGMENT_SHADER,di)]),s=new G([new _(n.VERTEX_SHADER,ee),new _(n.FRAGMENT_SHADER,hi)]),h=new G([new _(n.VERTEX_SHADER,ee),new _(n.FRAGMENT_SHADER,pi)]),u=new G([new _(n.VERTEX_SHADER,ee),new _(n.FRAGMENT_SHADER,mi)]),l=new G([new _(n.VERTEX_SHADER,ee),new _(n.FRAGMENT_SHADER,Ti)]),T=new G([new _(n.VERTEX_SHADER,ee),new _(n.FRAGMENT_SHADER,vi)]),v=new G([new _(n.VERTEX_SHADER,ee),new _(n.FRAGMENT_SHADER,Ei)]),R=new G([new _(n.VERTEX_SHADER,ee),new _(n.FRAGMENT_SHADER,Ri)]),d=new G([new _(n.VERTEX_SHADER,ee),new _(n.FRAGMENT_SHADER,bi)]),g=new G([new _(n.VERTEX_SHADER,wi),new _(n.FRAGMENT_SHADER,yi)]),p=new G([new _(n.VERTEX_SHADER,ee),new _(n.FRAGMENT_SHADER,gi)]),b=new G([new _(n.VERTEX_SHADER,ee),new _(n.FRAGMENT_SHADER,Fi)]),w=new G([new _(n.VERTEX_SHADER,ee),new _(n.FRAGMENT_SHADER,Ai)]),S=new G([new _(n.VERTEX_SHADER,Si),new _(n.FRAGMENT_SHADER,_i)]),x=new G([new _(n.VERTEX_SHADER,wr),new _(n.FRAGMENT_SHADER,Di)]),D=new G([new _(n.VERTEX_SHADER,ee),new _(n.FRAGMENT_SHADER,Mi)]),P=new G([new _(n.VERTEX_SHADER,ee),new _(n.FRAGMENT_SHADER,Ui)]),A=new G([new _(n.VERTEX_SHADER,ee),new _(n.FRAGMENT_SHADER,xi)]);return{lambert:e,flat:r,noiseterrain:o,flow:f,waterhight:s,sediment:h,sediadvect:u,macCormack:l,rains:T,evaporation:v,average:R,clean:d,water:g,thermalterrainflux:p,thermalapply:b,maxslippageheight:w,shadowMapShader:S,sceneDepthShader:x,combinedShader:D,bilateralBlur:P,veladvect:A}}var t;Ae(0,0);const c={tesselations:5,pipelen:.8,Kc:.06,Ks:.036,Kd:.006,timestep:.05,pipeAra:.6,ErosionMode:0,RainErosion:!1,RainErosionStrength:.2,RainErosionDropSize:2,EvaporationConstant:.003,VelocityMultiplier:1,RainDegree:4.5,AdvectionSpeedScaling:1,spawnposx:.5,spawnposy:.5,posTemp:Ae(0,0),"Load Scene":Br,"Pause/Resume":Ci,ResetTerrain:Bi,setTerrainRandom:ki,"Import Height Map":()=>{},"Clear Height Map":()=>{},SimulationSpeed:3,TerrainBaseMap:0,TerrainBaseType:0,TerrainBiomeType:1,TerrainScale:3.2,TerrainHeight:2,TerrainMask:0,TerrainDebug:0,WaterTransparency:.5,SedimentTrace:!0,ShowFlowTrace:!1,TerrainPlatte:1,SnowRange:0,ForestRange:0,brushType:2,brushSize:4,brushStrenth:.25,brushOperation:0,brushPressed:0,raycastMethod:"bvh",flattenTargetHeight:0,slopeStartPos:Ae(0,0),slopeEndPos:Ae(0,0),slopeActive:0,sourceCount:0,rockErosionResistance:.1,thermalTalusAngleScale:8,thermalRate:.5,thermalErosionScale:1,lightPosX:.4,lightPosY:.8,lightPosZ:-0,showScattering:!0,enableBilateralBlur:!0,AdvectionMethod:1,VelocityAdvectionMag:.2,SimulationResolution:E};let U,rn,yr,L=null;function Br(){U=new nt($(0,0,0)),U.create(),rn=new fr($(0,0,0),Ae(1,1),18),rn.create(),yr=new fr($(0,0,0),Ae(1,1),18),yr.create()}function Ci(){Mt(!er)}function Bi(){if(Ut(0),Un(!0),c.SimulationResolution!=E){const n=Number(c.SimulationResolution);Dt(n),Bt(t,n),_t(n)}}function ki(){}function Hi(n,e,r,o,f,s,h,u,l,T,v,R,d,g,p){e.bindFramebuffer(e.FRAMEBUFFER,k),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Te,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT3,e.TEXTURE_2D,null,0),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,Z),e.drawBuffers([e.COLOR_ATTACHMENT0]),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.viewport(0,0,E,E),e.bindFramebuffer(e.FRAMEBUFFER,k),n.clear(),T.use(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,I),e.uniform1i(m(T.prog,"readTerrain"),0),e.uniform1f(m(T.prog,"raindeg"),c.RainDegree),n.render(r,T,[U]),e.bindFramebuffer(e.FRAMEBUFFER,null),Ze(),e.bindFramebuffer(e.FRAMEBUFFER,k),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ln,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT3,e.TEXTURE_2D,null,0),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,Z),e.drawBuffers([e.COLOR_ATTACHMENT0]),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.viewport(0,0,E,E),e.bindFramebuffer(e.FRAMEBUFFER,k),n.clear(),o.use(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,I),e.uniform1i(m(o.prog,"readTerrain"),0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,ke),e.uniform1i(m(o.prog,"readFlux"),1),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,ne),e.uniform1i(m(o.prog,"readSedi"),2),n.render(r,o,[U]),e.bindFramebuffer(e.FRAMEBUFFER,null),Lt(),e.bindFramebuffer(e.FRAMEBUFFER,k),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Te,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,Fe,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT3,e.TEXTURE_2D,null,0),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,Z),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1]),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.viewport(0,0,E,E),e.bindFramebuffer(e.FRAMEBUFFER,k),n.clear(),f.use(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,I),e.uniform1i(m(f.prog,"readTerrain"),0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,ke),e.uniform1i(m(f.prog,"readFlux"),1),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,ne),e.uniform1i(m(f.prog,"readSedi"),2),e.activeTexture(e.TEXTURE3),e.bindTexture(e.TEXTURE_2D,ve),e.uniform1i(m(f.prog,"readVel"),3),n.render(r,f,[U]),e.bindFramebuffer(e.FRAMEBUFFER,null),Ze(),Gn(),e.bindFramebuffer(e.FRAMEBUFFER,k),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Te,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,Ce,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,Ge,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT3,e.TEXTURE_2D,Fe,0),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,Z),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1,e.COLOR_ATTACHMENT2,e.COLOR_ATTACHMENT3]),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.viewport(0,0,E,E),e.bindFramebuffer(e.FRAMEBUFFER,k),n.clear(),h.use(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,I),e.uniform1i(m(h.prog,"readTerrain"),0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,ve),e.uniform1i(m(h.prog,"readVelocity"),1),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,ne),e.uniform1i(m(h.prog,"readSediment"),2),n.render(r,h,[U]),e.bindFramebuffer(e.FRAMEBUFFER,null),vr(),Ze(),Gn(),c.AdvectionMethod==1?(e.bindFramebuffer(e.FRAMEBUFFER,k),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,on,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,Fe,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,Be,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT3,e.TEXTURE_2D,null,0),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,Z),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1,e.COLOR_ATTACHMENT2]),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.viewport(0,0,E,E),e.bindFramebuffer(e.FRAMEBUFFER,k),n.clear(),u.use(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,ve),e.uniform1i(m(u.prog,"vel"),0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,ne),e.uniform1i(m(u.prog,"sedi"),1),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,Ue),e.uniform1i(m(u.prog,"sediBlend"),2),e.activeTexture(e.TEXTURE3),e.bindTexture(e.TEXTURE_2D,I),e.uniform1i(m(u.prog,"terrain"),3),u.setFloat(1,"unif_advectMultiplier"),n.render(r,u,[U]),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,k),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,En,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,Fe,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,Be,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT3,e.TEXTURE_2D,null,0),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,Z),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1,e.COLOR_ATTACHMENT2]),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.viewport(0,0,E,E),e.bindFramebuffer(e.FRAMEBUFFER,k),n.clear(),u.use(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,ve),e.uniform1i(m(u.prog,"vel"),0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,on),e.uniform1i(m(u.prog,"sedi"),1),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,Ue),e.uniform1i(m(u.prog,"sediBlend"),2),e.activeTexture(e.TEXTURE3),e.bindTexture(e.TEXTURE_2D,I),e.uniform1i(m(u.prog,"terrain"),3),u.setFloat(-1,"unif_advectMultiplier"),n.render(r,u,[U]),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,k),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ce,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT3,e.TEXTURE_2D,null,0),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,Z),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1,e.COLOR_ATTACHMENT2]),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.viewport(0,0,E,E),e.bindFramebuffer(e.FRAMEBUFFER,k),n.clear(),l.use(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,ve),e.uniform1i(m(l.prog,"vel"),0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,ne),e.uniform1i(m(l.prog,"sedi"),1),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,on),e.uniform1i(m(l.prog,"sediadvecta"),2),e.activeTexture(e.TEXTURE3),e.bindTexture(e.TEXTURE_2D,En),e.uniform1i(m(l.prog,"sediadvectb"),3),n.render(r,l,[U]),e.bindFramebuffer(e.FRAMEBUFFER,null)):(e.bindFramebuffer(e.FRAMEBUFFER,k),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ce,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,Fe,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,Be,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT3,e.TEXTURE_2D,null,0),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,Z),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1,e.COLOR_ATTACHMENT2]),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.viewport(0,0,E,E),e.bindFramebuffer(e.FRAMEBUFFER,k),n.clear(),u.use(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,ve),e.uniform1i(m(u.prog,"vel"),0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,ne),e.uniform1i(m(u.prog,"sedi"),1),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,Ue),e.uniform1i(m(u.prog,"sediBlend"),2),e.activeTexture(e.TEXTURE3),e.bindTexture(e.TEXTURE_2D,I),e.uniform1i(m(u.prog,"terrain"),3),u.setFloat(1,"unif_advectMultiplier"),n.render(r,u,[U]),e.bindFramebuffer(e.FRAMEBUFFER,null)),Ot(),vr(),Gn(),e.bindFramebuffer(e.FRAMEBUFFER,k),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,cn,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT3,e.TEXTURE_2D,null,0),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,Z),e.drawBuffers([e.COLOR_ATTACHMENT0]),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.viewport(0,0,E,E),e.bindFramebuffer(e.FRAMEBUFFER,k),n.clear(),p.use(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,I),e.uniform1i(m(p.prog,"readTerrain"),0),n.render(r,p,[U]),e.bindFramebuffer(e.FRAMEBUFFER,null),Nt(),e.bindFramebuffer(e.FRAMEBUFFER,k),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,fn,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT3,e.TEXTURE_2D,null,0),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,Z),e.drawBuffers([e.COLOR_ATTACHMENT0]),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.viewport(0,0,E,E),e.bindFramebuffer(e.FRAMEBUFFER,k),n.clear(),d.use(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,I),e.uniform1i(m(d.prog,"readTerrain"),0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,je),e.uniform1i(m(d.prog,"readMaxSlippage"),1),n.render(r,d,[U]),e.bindFramebuffer(e.FRAMEBUFFER,null),Xt(),e.bindFramebuffer(e.FRAMEBUFFER,k),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Te,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT3,e.TEXTURE_2D,null,0),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,Z),e.drawBuffers([e.COLOR_ATTACHMENT0]),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.viewport(0,0,E,E),e.bindFramebuffer(e.FRAMEBUFFER,k),n.clear(),g.use(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Ke),e.uniform1i(m(g.prog,"readTerrainFlux"),0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,I),e.uniform1i(m(g.prog,"readTerrain"),1),n.render(r,g,[U]),e.bindFramebuffer(e.FRAMEBUFFER,null),Ze(),e.bindFramebuffer(e.FRAMEBUFFER,k),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Te,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT3,e.TEXTURE_2D,null,0),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,Z),e.drawBuffers([e.COLOR_ATTACHMENT0]),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.viewport(0,0,E,E),e.bindFramebuffer(e.FRAMEBUFFER,k),n.clear(),v.use(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,I),e.uniform1i(m(v.prog,"terrain"),0),e.uniform1f(m(v.prog,"evapod"),c.EvaporationConstant),n.render(r,v,[U]),e.bindFramebuffer(e.FRAMEBUFFER,null),Ze(),e.bindFramebuffer(e.FRAMEBUFFER,k),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Te,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,Ge,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT3,e.TEXTURE_2D,null,0),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,Z),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1]),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.viewport(0,0,E,E),e.bindFramebuffer(e.FRAMEBUFFER,k),n.clear(),R.use(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,I),e.uniform1i(m(R.prog,"readTerrain"),0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,ne),e.uniform1i(m(R.prog,"readSedi"),1),n.render(r,R,[U]),e.bindFramebuffer(e.FRAMEBUFFER,null),Ze()}function Li(n,e,r,o,f,s,h,u,l,T,v,R,d,g,p,b){return er?!0:(Hi(g,p,b,e,r,o,f,s,h,u,l,T,v,R,d),!1)}function Oi(n,e,r){if(!n)return{x:0,y:0};const o=n.getBoundingClientRect();if(o.width<=0||o.height<=0)return{x:0,y:0};const f=(e-o.left)/o.width,s=(r-o.top)/o.height;return{x:f,y:s}}function Ni(n,e,r){const o=document.getElementById("canvas");if(o){const f=o.getBoundingClientRect();f.width>0&&f.height>0&&$n(f.left+e,f.top+r)}}let ae;function Xi(){const n=Xr();n.setMode(0),n.domElement.style.position="absolute",n.domElement.style.left="0px",n.domElement.style.bottom="0px",n.domElement.style.top="auto",document.body.appendChild(n.domElement),ut(c);const e=document.getElementById("canvas");t=e.getContext("webgl2"),e.clientWidth,e.clientHeight;const{loadHeightMap:r,clearHeightMap:o}=It(t,E,c);c["Import Height Map"]=r,c["Clear Height Map"]=o,ae=Dr(),c.raycastMethod=ae.raycast.method;const f=ae.mouse.brushActivate==="LEFT"||ae.mouse.brushActivate===null&&ae.keys.brushActivate==="LEFT",s=new tt($(-.18,.3,.6),$(0,0,0),ae.camera,f),h=Pt(c,ae,s),{onKeyDown:u,onKeyUp:l,onMouseDown:T,onMouseUp:v}=h;Qr(e,Ni),document.addEventListener("keydown",u,!1),document.addEventListener("keyup",l,!1),window.addEventListener("pointerdown",M=>{const te=["LEFT","MIDDLE","RIGHT"][M.button];console.log("[DEBUG] WINDOW pointerdown CAPTURE - button:",M.button,"buttonName:",te,"target:",M.target);const we=M.target,xe=we===e||we.id==="canvas"||we.closest("#canvas")===e;if(console.log("[DEBUG] WINDOW pointerdown - isCanvas:",xe,"target:",we,"canvas:",e),xe&&sn(M.button,ae)==="brushActivate"){console.log("[DEBUG] WINDOW pointerdown - BRUSH ACTION, stopping propagation immediately"),$n(M.clientX,M.clientY),M.preventDefault(),M.stopImmediatePropagation(),M.stopPropagation(),T(M);return}},!0),window.addEventListener("pointerup",M=>{console.log("[DEBUG] WINDOW pointerup CAPTURE - button:",M.button,"target:",M.target);const te=M.target;(te===e||te.id==="canvas"||te.closest("#canvas")===e)&&sn(M.button,ae)==="brushActivate"&&(console.log("[DEBUG] WINDOW pointerup - BRUSH ACTION, stopping propagation"),M.preventDefault(),M.stopImmediatePropagation(),M.stopPropagation(),v(M))},!0),window.addEventListener("pointermove",M=>{if(c.brushPressed===1){const te=M.target;if(te===e||te.id==="canvas"||te.closest("#canvas")===e){$n(M.clientX,M.clientY);const xe=ae.modifiers.brushInvert;if(xe){const ye=Tn(xe,M);if(ye&&tn()===null)Mn(c.brushOperation),c.brushOperation=c.brushOperation===0?1:0,console.log("[DEBUG] Brush operation inverted on modifier (pointermove) to:",c.brushOperation===0?"Add":"Subtract");else if(!ye&&tn()!==null){const Le=tn();Le!==null&&(c.brushOperation=Le,Mn(null)),console.log("[DEBUG] Brush operation restored on modifier release (pointermove) to:",c.brushOperation===0?"Add":"Subtract")}}}}},!0),window.addEventListener("pointercancel",M=>{c.brushPressed===1&&(console.log("[DEBUG] WINDOW pointercancel - deactivating brush"),c.brushPressed=0)},!0),e.addEventListener("wheel",M=>{const te=ae.modifiers.brushSizeScroll;if(!te)return;if(Tn(te,M)){M.preventDefault(),M.stopPropagation(),M.stopImmediatePropagation();const ye=M.deltaY*.002,Le=c.brushSize-ye;c.brushSize=Math.round(Math.max(.1,Math.min(20,Le))*100)/100;const yn=window.brushSizeController;yn&&yn.updateDisplay();const gn=window.brushPalette;gn&&me(gn,c)}},{capture:!0,passive:!1}),t||alert("WebGL 2 not supported!");var R=t.getSupportedExtensions();for(let M in R)console.log(M);t.getExtension("OES_texture_float_linear")||console.log("float texture not supported"),t.getExtension("OES_texture_float")||console.log("no float texutre!!!?? y am i here?"),t.getExtension("EXT_color_buffer_float")||console.log("cant render to float texture "),et(t),Br(),ae.mouse.brushActivate==="LEFT"||ae.mouse.brushActivate===null&&ae.keys.brushActivate;const d=new rt(e);d.setClearColor(0,0,0,0),t.enable(t.DEPTH_TEST),kt(t,E);const g=Pi(t),{lambert:p,flat:b,flow:w,waterhight:S,sediment:x,sediadvect:D,macCormack:P,rains:A,evaporation:W,average:C,clean:B,water:X,thermalterrainflux:N,thermalapply:oe,maxslippageheight:K,shadowMapShader:re,sceneDepthShader:He,combinedShader:Ee,bilateralBlur:ue,veladvect:le}=g;L=g.noiseterrain;let Se=0;function y(){Y(d,t,s,B,I,U,L),Y(d,t,s,B,ve,U,L),Y(d,t,s,B,ke,U,L),Y(d,t,s,B,Ke,U,L),Y(d,t,s,B,fn,U,L),Y(d,t,s,B,je,U,L),Y(d,t,s,B,cn,U,L),Y(d,t,s,B,ne,U,L),Y(d,t,s,B,Te,U,L),Y(d,t,s,B,Fe,U,L),Y(d,t,s,B,ln,U,L),Y(d,t,s,B,Ce,U,L),Y(d,t,s,B,Ge,U,L),Y(d,t,s,B,Ue,U,L),Y(d,t,s,B,Be,U,L),Y(d,t,s,B,on,U,L),Y(d,t,s,B,En,U,L)}const F=Me(),j=Me(),O=ir(),q=ir(),Re=V(),qe=V(),be=De(),Rn=Me(),bn=Me(),fe=V(),Cn=De(),$e=new Float32Array(Qe*2),wn=new Float32Array(Qe),Bn=new Float32Array(Qe);let nr=0,kn=-1,Hn=-1;function rr(){s.update(ae.camera);const M=Oi(e,Sn,_n);var te=M.x,we=M.y;if(Fr(F,s.projectionMatrix,s.viewMatrix),Ar(j,F),O[0]=2*te-1,O[1]=1-2*we,O[2]=-1,O[3]=1,q[0]=2*te-1,q[1]=1-2*we,q[2]=-0,q[3]=1,ar(O,O,j),ar(q,q,j),O[0]/=O[3],O[1]/=O[3],O[2]/=O[3],O[3]/=O[3],q[0]/=q[3],q[1]/=q[3],q[2]/=q[3],q[3]/=q[3],Re[0]=q[0]-O[0],Re[1]=q[1]-O[1],Re[2]=q[2]-O[2],Ie(Re,Re),qe[0]=O[0],qe[1]=O[1],qe[2]=O[2],Se++,L.setTime(Se),L.setTerrainHeight(c.TerrainHeight),L.setTerrainScale(c.TerrainScale),L.setInt(c.TerrainMask,"u_TerrainMask"),t.uniform1i(m(L.prog,"u_terrainBaseType"),c.TerrainBaseType),xr){if(y(),Y(d,t,s,L,I,U,L),Y(d,t,s,L,Te,U,L),hn&&Wn(null),Je&&(Je.dispose(),Vn(null)),se&&se.length>=E*E*4){let H=!1;const pe=Math.min(100,E*E);for(let ie=0;ie<pe;ie++){const Oe=Math.floor(Math.random()*E*E)*4;if(se[Oe]!==0){H=!0;break}}if(H)try{const ie=mr(E,se,1);Vn(ie);const Oe=new ur(ie,{strategy:lr,maxDepth:40,indirect:!1});Wn(Oe),console.log("[BVH] Terrain BVH built successfully")}catch(ie){console.warn("[BVH] Failed to build BVH (heightmap may not be ready yet):",ie)}else console.log("[BVH] Heightmap buffer exists but has no data yet, will build when populated")}else console.log("[BVH] Heightmap buffer not ready yet, BVH will be built when available");Un(!1)}if(!hn&&!Je&&se&&se.length>=E*E*4){let H=!1;const pe=Math.min(100,E*E);for(let ie=0;ie<pe;ie++){const Oe=Math.floor(Math.random()*E*E)*4;if(se[Oe]!==0){H=!0;break}}if(H)try{const ie=mr(E,se,1);Vn(ie);const Oe=new ur(ie,{strategy:lr,maxDepth:40,indirect:!1});Wn(Oe),console.log("[BVH] Terrain BVH built (delayed initialization)")}catch(ie){console.warn("[BVH] Failed to build BVH:",ie)}}if(be[0]=0,be[1]=0,c.raycastMethod==="bvh"&&hn&&Je){if(!Ct(qe,Re,hn,Je,be)){const pe=De();hr(qe,Re,E,se,pe),be[0]=pe[0],be[1]=pe[1]}}else hr(qe,Re,E,se,be);c.posTemp=be,b.setTime(Se),t.uniform1f(m(b.prog,"u_far"),s.far),t.uniform1f(m(b.prog,"u_near"),s.near),fe[0]=c.lightPosX,fe[1]=c.lightPosY,fe[2]=c.lightPosZ,t.uniform3fv(m(b.prog,"unif_LightPos"),fe),X.setWaterTransparency(c.WaterTransparency),X.setSimres(E),t.uniform1f(m(X.prog,"u_far"),s.far),t.uniform1f(m(X.prog,"u_near"),s.near),t.uniform3fv(m(X.prog,"unif_LightPos"),fe),p.setTerrainDebug(c.TerrainDebug),p.setMouseWorldPos(O),p.setMouseWorldDir(Re),p.setBrushSize(c.brushSize),p.setBrushType(c.brushType),p.setBrushPos(be),p.setSimres(E),p.setFloat(c.SnowRange,"u_SnowRange"),p.setFloat(c.ForestRange,"u_ForestRange"),p.setInt(c.TerrainPlatte,"u_TerrainPlatte"),p.setInt(c.ShowFlowTrace?0:1,"u_FlowTrace"),p.setInt(c.SedimentTrace?0:1,"u_SedimentTrace");for(let H=0;H<Qe;H++)H<he.length?($e[H*2]=he[H].position[0],$e[H*2+1]=he[H].position[1],wn[H]=he[H].size,Bn[H]=he[H].strength):($e[H*2]=0,$e[H*2+1]=0,wn[H]=0,Bn[H]=0);p.setSourceCount(en()),p.setSourcePositions($e),p.setSourceSizes(wn),fe[0]=c.lightPosX,fe[1]=c.lightPosY,fe[2]=c.lightPosZ,t.uniform3fv(m(p.prog,"unif_LightPos"),fe),He.setSimres(E),A.setMouseWorldPos(O),A.setMouseWorldDir(Re),A.setBrushSize(c.brushSize),A.setBrushStrength(c.brushStrenth),A.setBrushType(c.brushType),A.setBrushPressed(c.brushPressed),A.setSimres(E);const xe={controls:c,simres:Number(E),HightMapCpuBuf:se};vt(be,xe),A.setFloat(c.flattenTargetHeight,"u_FlattenTargetHeight"),A.setVec2(c.slopeStartPos,"u_SlopeStartPos"),A.setVec2(c.slopeEndPos,"u_SlopeEndPos"),A.setInt(c.slopeActive,"u_SlopeActive"),A.setSourceCount(en()),A.setSourcePositions($e),A.setSourceSizes(wn),A.setSourceStrengths(Bn),A.setBrushPos(be),A.setBrushOperation(c.brushOperation),Cn[0]=c.spawnposx,Cn[1]=c.spawnposy,A.setSpawnPos(Cn),A.setTime(Se),t.uniform1i(m(A.prog,"u_RainErosion"),c.RainErosion?1:0),A.setFloat(c.RainErosionStrength,"u_RainErosionStrength"),A.setFloat(c.RainErosionDropSize,"u_RainErosionDropSize"),w.setPipeLen(c.pipelen),w.setSimres(E),w.setTimestep(c.timestep),w.setPipeArea(c.pipeAra),S.setPipeLen(c.pipelen),S.setSimres(E),S.setTimestep(c.timestep),S.setPipeArea(c.pipeAra),S.setFloat(c.VelocityMultiplier,"u_VelMult"),S.setFloat(c.VelocityAdvectionMag,"u_VelAdvMag"),S.setTime(Se),x.setSimres(E),x.setPipeLen(c.pipelen),x.setKc(c.Kc),x.setKs(c.Ks),x.setKd(c.Kd),x.setRockErosionResistance(c.rockErosionResistance),x.setTimestep(c.timestep),x.setTime(Se),D.setSimres(E),D.setPipeLen(c.pipelen),D.setKc(c.Kc),D.setKs(c.Ks),D.setKd(c.Kd),D.setTimestep(c.timestep),D.setFloat(c.AdvectionSpeedScaling,"unif_advectionSpeedScale"),le.setSimres(E),le.setPipeLen(c.pipelen),le.setKc(c.Kc),le.setKs(c.Ks),le.setKd(c.Kd),le.setTimestep(c.timestep),P.setSimres(E),P.setPipeLen(c.pipelen),P.setKc(c.Kc),P.setKs(c.Ks),P.setKd(c.Kd),P.setTimestep(c.timestep),P.setFloat(c.AdvectionSpeedScaling,"unif_advectionSpeedScale"),N.setSimres(E),N.setPipeLen(c.pipelen),N.setTimestep(c.timestep),N.setPipeArea(c.pipeAra),t.uniform1f(m(N.prog,"unif_thermalRate"),c.thermalRate),oe.setSimres(E),oe.setPipeLen(c.pipelen),oe.setTimestep(c.timestep),oe.setPipeArea(c.pipeAra),t.uniform1f(m(oe.prog,"unif_thermalErosionScale"),c.thermalErosionScale),K.setSimres(E),K.setPipeLen(c.pipelen),K.setTimestep(c.timestep),K.setPipeArea(c.pipeAra),K.setFloat(c.thermalTalusAngleScale,"unif_TalusScale"),c.RainErosion?K.setInt(1,"unif_rainMode"):K.setInt(0,"unif_rainMode"),C.setSimres(E),C.setInt(c.ErosionMode,"unif_ErosionMode"),c.RainErosion?C.setInt(1,"unif_rainMode"):C.setInt(0,"unif_rainMode");const ye=c.brushPressed===1,Le=Number(c.brushType)!==0,yn=ye&&nr===0;yt(),n.begin();for(let H=0;H<c.SimulationSpeed;H++)Li(Qn,w,S,le,x,D,P,A,W,C,N,oe,K,d,t,s),xt();const gn=kn<0||Hn<0||Math.abs(Sn-kn)+Math.abs(_n-Hn)>1;(yn||gn)&&St(ye,Le,E)&&(t.bindFramebuffer(t.FRAMEBUFFER,k),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,I,0),t.readBuffer(t.COLOR_ATTACHMENT0),t.readPixels(0,0,E,E,t.RGBA,t.FLOAT,se),t.bindFramebuffer(t.FRAMEBUFFER,null),kn=Sn,Hn=_n,!ye&&!Le&&an>=Pr&&gt()),nr=ye?1:0,t.viewport(0,0,window.innerWidth,window.innerHeight),d.clear(),t.bindFramebuffer(t.FRAMEBUFFER,Yn),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Dn,0),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,Zn),t.drawBuffers([t.COLOR_ATTACHMENT0]),t.bindTexture(t.TEXTURE_2D,null),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindRenderbuffer(t.RENDERBUFFER,null),t.viewport(0,0,nn,nn),t.bindFramebuffer(t.FRAMEBUFFER,Yn),d.clear(),re.use(),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,I),t.uniform1i(m(re.prog,"hightmap"),0),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,ne),t.uniform1i(m(re.prog,"sedimap"),1),jr(bn,-1.6,1.6,-1.6,1.6,0,100),fe[0]=c.lightPosX,fe[1]=c.lightPosY,fe[2]=c.lightPosZ,Kn(Rn,fe,[0,0,0],[0,1,0]),t.uniformMatrix4fv(m(re.prog,"u_proj"),!1,bn),t.uniformMatrix4fv(m(re.prog,"u_view"),!1,Rn),re.setSimres(E),d.render(s,re,[rn]),t.bindFramebuffer(t.FRAMEBUFFER,null),He.use(),t.bindFramebuffer(t.FRAMEBUFFER,pn),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Pe,0),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,We),t.drawBuffers([t.COLOR_ATTACHMENT0]),d.clear(),t.viewport(0,0,window.innerWidth,window.innerHeight),d.render(s,He,[rn]),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.FRAMEBUFFER,pn),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,xn,0),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT1,t.TEXTURE_2D,Pn,0),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,We),t.drawBuffers([t.COLOR_ATTACHMENT0,t.COLOR_ATTACHMENT1]),d.clear(),p.use(),t.viewport(0,0,window.innerWidth,window.innerHeight),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,I);let Ln=m(p.prog,"hightmap");t.uniform1i(Ln,0),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,Ge);let On=m(p.prog,"normap");t.uniform1i(On,1),t.activeTexture(t.TEXTURE2),t.bindTexture(t.TEXTURE_2D,ne);let Nn=m(p.prog,"sedimap");t.uniform1i(Nn,2),t.activeTexture(t.TEXTURE3),t.bindTexture(t.TEXTURE_2D,ve);let kr=m(p.prog,"velmap");t.uniform1i(kr,3),t.activeTexture(t.TEXTURE4),t.bindTexture(t.TEXTURE_2D,ke);let Hr=m(p.prog,"fluxmap");t.uniform1i(Hr,4),t.activeTexture(t.TEXTURE5),t.bindTexture(t.TEXTURE_2D,Ke);let Lr=m(p.prog,"terrainfluxmap");t.uniform1i(Lr,5),t.activeTexture(t.TEXTURE6),t.bindTexture(t.TEXTURE_2D,je);let Or=m(p.prog,"maxslippagemap");if(t.uniform1i(Or,6),t.activeTexture(t.TEXTURE7),t.bindTexture(t.TEXTURE_2D,Ue),t.uniform1i(m(p.prog,"sediBlend"),7),t.activeTexture(t.TEXTURE8),t.bindTexture(t.TEXTURE_2D,Dn),t.uniform1i(m(p.prog,"shadowMap"),8),t.activeTexture(t.TEXTURE9),t.bindTexture(t.TEXTURE_2D,Pe),t.uniform1i(m(p.prog,"sceneDepth"),9),t.uniformMatrix4fv(m(p.prog,"u_sproj"),!1,bn),t.uniformMatrix4fv(m(p.prog,"u_sview"),!1,Rn),d.render(s,p,[rn]),t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),X.use(),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,I),Ln=m(X.prog,"hightmap"),t.uniform1i(Ln,0),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,Ge),On=m(X.prog,"normap"),t.uniform1i(On,1),t.activeTexture(t.TEXTURE2),t.bindTexture(t.TEXTURE_2D,ne),Nn=m(X.prog,"sedimap"),t.uniform1i(Nn,2),t.activeTexture(t.TEXTURE3),t.bindTexture(t.TEXTURE_2D,Pe),t.uniform1i(m(X.prog,"sceneDepth"),3),t.activeTexture(t.TEXTURE4),t.bindTexture(t.TEXTURE_2D,Pn),t.uniform1i(m(X.prog,"colorReflection"),4),d.render(s,X,[rn]),t.bindFramebuffer(t.FRAMEBUFFER,null),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),t.bindFramebuffer(t.FRAMEBUFFER,pn),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,mn,0),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,We),t.drawBuffers([t.COLOR_ATTACHMENT0]),d.clear(),t.viewport(0,0,window.innerWidth,window.innerHeight),b.use(),t.enable(t.DEPTH_TEST),t.depthFunc(t.LESS),t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,ne),t.uniform1i(m(b.prog,"hightmap"),0),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,Pe),t.uniform1i(m(b.prog,"sceneDepth"),1),t.activeTexture(t.TEXTURE2),t.bindTexture(t.TEXTURE_2D,Dn),t.uniform1i(m(b.prog,"shadowMap"),2),t.uniformMatrix4fv(m(b.prog,"u_sproj"),!1,bn),t.uniformMatrix4fv(m(b.prog,"u_sview"),!1,Rn),t.uniform1i(m(b.prog,"u_showScattering"),c.showScattering?1:0),d.render(s,b,[U]),t.bindFramebuffer(t.FRAMEBUFFER,null),c.enableBilateralBlur){let H=4;for(let pe=0;pe<H;++pe)t.bindFramebuffer(t.FRAMEBUFFER,pn),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,un,0),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,We),t.drawBuffers([t.COLOR_ATTACHMENT0]),d.clear(),ue.use(),t.activeTexture(t.TEXTURE0),pe==0?t.bindTexture(t.TEXTURE_2D,mn):t.bindTexture(t.TEXTURE_2D,vn),t.uniform1i(m(ue.prog,"scatter_tex"),0),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,Pe),t.uniform1i(m(ue.prog,"scene_depth"),1),t.uniform1f(m(ue.prog,"u_far"),s.far),t.uniform1f(m(ue.prog,"u_near"),s.near),t.uniform1i(m(ue.prog,"u_isHorizontal"),pe%2),d.render(s,ue,[U]),zt(),t.bindFramebuffer(t.FRAMEBUFFER,null)}Ee.use(),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,xn),t.uniform1i(m(Ee.prog,"color_tex"),0),t.activeTexture(t.TEXTURE1),c.enableBilateralBlur?t.bindTexture(t.TEXTURE_2D,un):t.bindTexture(t.TEXTURE_2D,mn),t.uniform1i(m(Ee.prog,"bi_tex"),1),t.activeTexture(t.TEXTURE2),t.bindTexture(t.TEXTURE_2D,Pe),t.uniform1i(m(Ee.prog,"sceneDepth_tex"),2),d.clear(),d.render(s,Ee,[U]),t.disable(t.BLEND),n.end(),requestAnimationFrame(rr)}window.addEventListener("resize",function(){Ht(),d.setSize(window.innerWidth,window.innerHeight),s.setAspectRatio(window.innerWidth/window.innerHeight),s.updateProjectionMatrix()},!1),d.setSize(window.innerWidth,window.innerHeight),s.setAspectRatio(window.innerWidth/window.innerHeight),s.updateProjectionMatrix(),rr()}Xi();
//# sourceMappingURL=index-Ckrp0Wy_.js.map
