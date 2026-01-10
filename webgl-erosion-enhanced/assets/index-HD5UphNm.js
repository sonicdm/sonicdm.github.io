import{d as zt,S as It}from"./vendor-ui-D9G9_rNR.js";import{f as St,a as j,c as be,i as Vt,m as rt,b as V,s as Xe,d as Me,e as Fn,n as Pe,g as ze,l as Yn,p as Wt,h as Ze,j as Vn,k as ce,o as Re,q as Gt,r as Kt,t as Se,u as it,v as Dn,w as Un,x as Zn,y as lt,z as jt,A as qt,B as $t}from"./vendor-gl-matrix-YXQ_fXId.js";import{V as se,P as Yt,O as Zt,M as ft,R as Wn,g as Jt,B as Qt,a as ct,b as dt,S as ht}from"./vendor-three-BGOT6zrs.js";import{m as er}from"./vendor-utils-DFm-itqf.js";import"./vendor-CRNwIL5F.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))o(f);new MutationObserver(f=>{for(const s of f)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function t(f){const s={};return f.integrity&&(s.integrity=f.integrity),f.referrerPolicy&&(s.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?s.credentials="include":f.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(f){if(f.ep)return;f.ep=!0;const s=t(f);fetch(f.href,s)}})();var a;function nr(n){a=n}class _t{constructor(){this.count=0,this.idxBound=!1,this.posBound=!1,this.norBound=!1,this.uvBound=!1,this.mode=a.TRIANGLES}destory(){a.deleteBuffer(this.bufIdx),a.deleteBuffer(this.bufPos),a.deleteBuffer(this.bufNor),a.deleteBuffer(this.bufUv)}generateIdx(){this.idxBound=!0,this.bufIdx=a.createBuffer()}generatePos(){this.posBound=!0,this.bufPos=a.createBuffer()}generateNor(){this.norBound=!0,this.bufNor=a.createBuffer()}generateUv(){this.uvBound=!0,this.bufUv=a.createBuffer()}bindIdx(){return this.idxBound&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.bufIdx),this.idxBound}bindPos(){return this.posBound&&a.bindBuffer(a.ARRAY_BUFFER,this.bufPos),this.posBound}bindNor(){return this.norBound&&a.bindBuffer(a.ARRAY_BUFFER,this.bufNor),this.norBound}bindUv(){return this.uvBound&&a.bindBuffer(a.ARRAY_BUFFER,this.bufUv),this.uvBound}elemCount(){return this.count}drawMode(){return this.mode}setDrawMode(e){this.mode=e}}class tr extends _t{constructor(e){super(),this.center=St(e[0],e[1],e[2],1)}create(){this.indices=new Uint32Array([0,1,2,0,2,3]),this.normals=new Float32Array([0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0]),this.positions=new Float32Array([-1,-1,.99999,1,1,-1,.99999,1,1,1,.99999,1,-1,1,.99999,1]),this.generateIdx(),this.generatePos(),this.generateNor(),this.count=this.indices.length,a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.bufIdx),a.bufferData(a.ELEMENT_ARRAY_BUFFER,this.indices,a.STATIC_DRAW),a.bindBuffer(a.ARRAY_BUFFER,this.bufNor),a.bufferData(a.ARRAY_BUFFER,this.normals,a.STATIC_DRAW),a.bindBuffer(a.ARRAY_BUFFER,this.bufPos),a.bufferData(a.ARRAY_BUFFER,this.positions,a.STATIC_DRAW),console.log("Created square")}}class pt extends _t{constructor(e,t,o){super(),this.center=j(e[0],e[1],e[2]),this.scale=t,this.subdivs=o+o%2}create(){let e=Math.pow(2,this.subdivs/2),t=1/e;this.positions=new Float32Array((e+1)*(e+1)*4),this.normals=new Float32Array((e+1)*(e+1)*4),this.uvs=new Float32Array((e+1)*(e+1)*2),this.indices=new Uint32Array(e*e*6);let o=0;for(let h=0;h<=e;++h)for(let u=0;u<=e;++u)this.normals[o]=0,this.positions[o++]=h*t*this.scale[0]+this.center[0]-this.scale[0]*.5,this.normals[o]=1,this.positions[o++]=0+this.center[1],this.normals[o]=0,this.positions[o++]=u*t*this.scale[1]+this.center[2]-this.scale[1]*.5,this.normals[o]=0,this.positions[o++]=1;let f=0;for(let h=0;h<=e;++h)for(let u=0;u<=e;++u)this.uvs[f++]=h*t,this.uvs[f++]=u*t;let s=0;for(let h=0;h<e;++h)for(let u=0;u<e;++u)this.indices[s++]=u+h*(e+1),this.indices[s++]=u+1+h*(e+1),this.indices[s++]=u+(h+1)*(e+1),this.indices[s++]=u+1+h*(e+1),this.indices[s++]=u+(h+1)*(e+1),this.indices[s++]=u+1+(h+1)*(e+1);this.generateUv(),this.generateIdx(),this.generatePos(),this.generateNor(),this.count=this.indices.length,a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.bufIdx),a.bufferData(a.ELEMENT_ARRAY_BUFFER,this.indices,a.STATIC_DRAW),a.bindBuffer(a.ARRAY_BUFFER,this.bufNor),a.bufferData(a.ARRAY_BUFFER,this.normals,a.STATIC_DRAW),a.bindBuffer(a.ARRAY_BUFFER,this.bufPos),a.bufferData(a.ARRAY_BUFFER,this.positions,a.STATIC_DRAW),a.bindBuffer(a.ARRAY_BUFFER,this.bufUv),a.bufferData(a.ARRAY_BUFFER,this.uvs,a.STATIC_DRAW),console.log("Created plane")}}class rr{constructor(e){this.canvas=e,this.counter=0}setClearColor(e,t,o,f){a.clearColor(e,t,o,f)}setSize(e,t){this.canvas.width=e,this.canvas.height=t}clear(){a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT)}render(e,t,o){let f=be(),s=be();St(1,0,0,1),Vt(f),rt(s,e.projectionMatrix,e.viewMatrix),t.setModelMatrix(f),t.setViewProjMatrix(s),t.setEyeRefUp(e.position,e.target,e.up),t.setDimensions(this.canvas.width,this.canvas.height);for(let h of o)t.draw(h)}}class ir{constructor(e,t,o,f){if(this.worldUp=j(0,1,0),this.projectionMatrix=be(),this.viewMatrix=be(),this.fovy=45,this.aspectRatio=1,this.near=.01,this.far=500,this.position=V(),this.direction=V(),this.target=V(),this.up=j(0,1,0),this.counter=0,this.tposition=new se(0,0,0),this.tdirection=new se(0,0,0),this.tup=new se(0,0,0),this.pressedKeys=new Set,this.lastUpdateTime=performance.now(),this.velocity=V(),this.smoothedDeltaTime=.016,this.deltaTimeSmoothingFactor=.05,Xe(this.direction,t,e),this.tposition=new se(e[0],e[1],e[2]),this.tdirection=new se(this.direction[0],this.direction[1],this.direction[2]),this.tup=new se(this.up[0],this.up[1],this.up[2]),this.threeCamera=new Yt(this.fovy,this.aspectRatio,this.near,this.far),this.threeCamera.position.set(e[0],e[1],e[2]),this.threeControls=new Zt(this.threeCamera,document.getElementById("canvas")),o){const m={LEFT:null,MIDDLE:null,RIGHT:null};f&&(console.log("[DEBUG] Camera: Disabling LEFT button for OrbitControls (brush uses it)"),m.LEFT=null),o.rotateButton&&(!f||o.rotateButton!=="LEFT")&&(m[o.rotateButton]=ft.ROTATE),o.panButton&&(!f||o.panButton!=="LEFT")&&(m[o.panButton]=ft.PAN),this.threeControls.mouseButtons=m,console.log("[DEBUG] Camera: OrbitControls mouseButtons set to:",m),this.threeControls.rotateSpeed=o.rotateSpeed,this.threeControls.zoomSpeed=o.zoomSpeed,this.threeControls.panSpeed=o.panSpeed,this.threeControls.enableRotate=o.enableRotate,this.threeControls.enablePan=o.enablePan,this.threeControls.enableZoom=o.enableZoom,this.threeControls.enableDamping=o.enableDamping,this.threeControls.dampingFactor=o.dampingFactor}else this.threeControls.enableDamping=!0,this.threeControls.dampingFactor=.08;this.threeControls.keys={LEFT:null,UP:null,RIGHT:null,BOTTOM:null},console.log(this.threeCamera.position),this.threeControls.update(),Me(this.target,this.position,this.direction);let s=new se;this.threeCamera.getWorldDirection(s),this.direction=j(s.x,s.y,s.z),this.position=j(this.threeCamera.position.x,this.threeCamera.position.y,this.threeCamera.position.z),Me(this.target,this.position,this.direction);let h=j(0,0,0);Xe(h,this.position,this.target);let u=j(0,0,0),l=j(0,0,0);Fn(u,this.worldUp,h),Fn(l,u,h),Pe(l,l),ze(l,l,-1),this.up=l,Yn(this.viewMatrix,this.position,this.target,j(0,1,0))}setAspectRatio(e){this.aspectRatio=e}updateProjectionMatrix(){Wt(this.projectionMatrix,this.fovy,this.aspectRatio,this.near,this.far)}addMovementKey(e){this.pressedKeys.add(e.toLowerCase())}removeMovementKey(e){this.pressedKeys.delete(e.toLowerCase())}isMovementKeyPressed(e){return this.pressedKeys.has(e.toLowerCase())}updateMovement(e,t){if(!t.movement.enableWASD)return;const o=2,f=3,s=t.movement.moveSpeed,h=s*(t.movement.fastMoveMultiplier||3);this.threeCamera.updateMatrixWorld();const u=V(),l=V(),m=V(),T=V(),w=new se;this.threeCamera.getWorldDirection(w),w.y=0,w.length()<.001?w.set(0,0,-1):w.normalize(),u[0]=w.x,u[1]=0,u[2]=w.z,Ze(u)>.001?Pe(u,u):Vn(u,0,0,-1);const d=new se,v=new se(0,1,0);d.crossVectors(w,v),d.y=0,d.length()<.001?(d.set(-w.z,0,w.x),d.length()>.001?d.normalize():d.set(1,0,0)):d.normalize(),l[0]=d.x,l[1]=0,l[2]=d.z,Ze(l)>.001?Pe(l,l):(l[0]=-u[2],l[1]=0,l[2]=u[0],Ze(l)>.001?Pe(l,l):Vn(l,1,0,0)),ce(m,this.worldUp),Vn(T,0,0,0),this.isMovementKeyPressed("w")&&Me(T,T,u),this.isMovementKeyPressed("s")&&Xe(T,T,u),this.isMovementKeyPressed("a")&&Xe(T,T,l),this.isMovementKeyPressed("d")&&Me(T,T,l),t.movement.enableVerticalMovement&&(this.isMovementKeyPressed(" ")&&Me(T,T,m),this.isMovementKeyPressed("shift")&&Xe(T,T,m)),Ze(T)>.001&&Pe(T,T);const D=this.isMovementKeyPressed("shift")&&t.movement.fastMoveMultiplier>1?h:s,A=V();ze(A,T,D);const k=V();if(Ze(T)>.001){Xe(k,A,this.velocity);const B=o*e;ze(k,k,Math.min(B,1))}else{const B=f*e;ze(k,this.velocity,-Math.min(B,1))}Me(this.velocity,this.velocity,k);const _=Ze(this.velocity);_>D&&ze(this.velocity,this.velocity,D/_);const z=V();ze(z,this.velocity,e),this.threeCamera.position.x+=z[0],this.threeCamera.position.y+=z[1],this.threeCamera.position.z+=z[2],this.threeControls.target.x+=z[0],this.threeControls.target.y+=z[1],this.threeControls.target.z+=z[2]}update(e){const t=performance.now();let o=(t-this.lastUpdateTime)/1e3;this.lastUpdateTime=t,o=Math.min(o,.1),this.smoothedDeltaTime=this.smoothedDeltaTime*(1-this.deltaTimeSmoothingFactor)+o*this.deltaTimeSmoothingFactor;const s=this.smoothedDeltaTime;e&&this.updateMovement(s,e),this.threeControls.update(),this.threeCamera.updateMatrixWorld();let h=new se;this.threeCamera.getWorldDirection(h),this.direction=j(h.x,h.y,h.z),this.position=j(this.threeCamera.position.x,this.threeCamera.position.y,this.threeCamera.position.z),Me(this.target,this.position,this.direction);let u=j(0,0,0);Xe(u,this.position,this.target);let l=j(0,0,0),m=j(0,0,0);Fn(l,this.worldUp,u),Fn(m,l,u),Pe(m,m),ze(m,m,-1),this.up=m,this.counter++,Yn(this.viewMatrix,this.position,this.target,j(0,1,0))}}const I={keys:{brushActivate:"LEFT",permanentWaterSource:"r",removePermanentSource:"p"},mouse:{brushActivate:null},modifiers:{brushSizeScroll:"Ctrl",brushInvert:"Shift",brushSecondary:"Alt"},camera:{rotateButton:"RIGHT",panButton:"MIDDLE",rotateSpeed:1,zoomSpeed:1,panSpeed:1,enableRotate:!0,enablePan:!0,enableZoom:!0,enableDamping:!0,dampingFactor:.08,movement:{enableWASD:!0,moveSpeed:.3,fastMoveMultiplier:3,enableVerticalMovement:!0}},raycast:{method:"bvh"}};function mt(n,e){if(n!=="LEFT"&&n!=="MIDDLE"&&n!=="RIGHT"){if(n===e.keys.brushActivate)return"brushActivate";if(n===e.keys.permanentWaterSource)return"permanentWaterSource";if(n===e.keys.removePermanentSource)return"removePermanentSource"}return null}function vt(n,e){if(typeof n=="number"){const o={0:"LEFT",1:"MIDDLE",2:"RIGHT"}[n];return e.mouse.brushActivate?o===e.mouse.brushActivate:o===e.keys.brushActivate}else{const t=n.toLowerCase();return e.keys.brushActivate!=="LEFT"&&e.keys.brushActivate!=="MIDDLE"&&e.keys.brushActivate!=="RIGHT"?t===e.keys.brushActivate:!1}}function sn(n,e){const o={0:"LEFT",1:"MIDDLE",2:"RIGHT"}[n];return console.log("[DEBUG] getMouseButtonAction - button:",n,"-> buttonName:",o,"mouse.brushActivate:",e.mouse.brushActivate,"keys.brushActivate:",e.keys.brushActivate),e.mouse.brushActivate&&o===e.mouse.brushActivate?(console.log("[DEBUG] getMouseButtonAction - MATCH (mouse binding)!"),"brushActivate"):o&&e.keys.brushActivate===o?(console.log("[DEBUG] getMouseButtonAction - MATCH (key binding)!"),"brushActivate"):(console.log("[DEBUG] getMouseButtonAction - NO MATCH"),null)}function mn(n,e){if(n===null)return!1;switch(n){case"Ctrl":return e.ctrlKey||e.metaKey;case"Shift":return e.shiftKey;case"Alt":return e.altKey;default:return!1}}const Mt="webgl-erosion-controls";function Dt(){try{const n=localStorage.getItem(Mt);if(n){const e=JSON.parse(n);return or(e)}}catch(n){console.warn("[Settings] Failed to load settings from localStorage:",n)}return I}function ar(n){try{localStorage.setItem(Mt,JSON.stringify(n,null,2)),console.log("[Settings] Settings saved successfully")}catch(e){console.error("[Settings] Failed to save settings to localStorage:",e)}}function or(n){var t,o,f,s,h,u,l,m,T,w,p,g,d,v,R,F,D,A,k,_,z,B,U,H,O,Y;return{keys:{brushActivate:((t=n.keys)==null?void 0:t.brushActivate)??I.keys.brushActivate,permanentWaterSource:((o=n.keys)==null?void 0:o.permanentWaterSource)??I.keys.permanentWaterSource,removePermanentSource:((f=n.keys)==null?void 0:f.removePermanentSource)??I.keys.removePermanentSource},mouse:{brushActivate:((s=n.mouse)==null?void 0:s.brushActivate)??I.mouse.brushActivate},modifiers:{brushSizeScroll:((h=n.modifiers)==null?void 0:h.brushSizeScroll)??I.modifiers.brushSizeScroll,brushInvert:((u=n.modifiers)==null?void 0:u.brushInvert)??I.modifiers.brushInvert,brushSecondary:((l=n.modifiers)==null?void 0:l.brushSecondary)??I.modifiers.brushSecondary},camera:{rotateButton:((m=n.camera)==null?void 0:m.rotateButton)??I.camera.rotateButton,panButton:((T=n.camera)==null?void 0:T.panButton)??I.camera.panButton,rotateSpeed:((w=n.camera)==null?void 0:w.rotateSpeed)??I.camera.rotateSpeed,zoomSpeed:((p=n.camera)==null?void 0:p.zoomSpeed)??I.camera.zoomSpeed,panSpeed:((g=n.camera)==null?void 0:g.panSpeed)??I.camera.panSpeed,enableRotate:((d=n.camera)==null?void 0:d.enableRotate)??I.camera.enableRotate,enablePan:((v=n.camera)==null?void 0:v.enablePan)??I.camera.enablePan,enableZoom:((R=n.camera)==null?void 0:R.enableZoom)??I.camera.enableZoom,enableDamping:((F=n.camera)==null?void 0:F.enableDamping)??I.camera.enableDamping,dampingFactor:((D=n.camera)==null?void 0:D.dampingFactor)??I.camera.dampingFactor,movement:{enableWASD:((k=(A=n.camera)==null?void 0:A.movement)==null?void 0:k.enableWASD)??I.camera.movement.enableWASD,moveSpeed:((z=(_=n.camera)==null?void 0:_.movement)==null?void 0:z.moveSpeed)??I.camera.movement.moveSpeed,fastMoveMultiplier:((U=(B=n.camera)==null?void 0:B.movement)==null?void 0:U.fastMoveMultiplier)??I.camera.movement.fastMoveMultiplier,enableVerticalMovement:((O=(H=n.camera)==null?void 0:H.movement)==null?void 0:O.enableVerticalMovement)??I.camera.movement.enableVerticalMovement}},raycast:{method:((Y=n.raycast)==null?void 0:Y.method)??I.raycast.method}}}const Jn=[{id:0,name:"None",icon:"🚫",color:"#666",shortcut:"0",description:"Disable brush"},{id:1,name:"Terrain",icon:"⛰️",color:"#8B4513",shortcut:"1",description:"Modify terrain height"},{id:2,name:"Water",icon:"💧",color:"#4A90E2",shortcut:"2",description:"Add/remove water"},{id:3,name:"Rock",icon:"🪨",color:"#555",shortcut:"3",description:"Place erosion-resistant rock"},{id:4,name:"Smooth",icon:"✨",color:"#9B59B6",shortcut:"4",description:"Smooth terrain surface"},{id:5,name:"Flatten",icon:"📐",color:"#F39C12",shortcut:"5",description:`Flatten to target height

Left Click: Flatten terrain to target height
Alt+Click: Set target height to clicked location
Use slider to manually set target height (0-500)`},{id:6,name:"Slope",icon:"📉",color:"#27AE60",shortcut:"6",description:`Create slope between two points

Alt+Click (first): Set start point
Alt+Click (second): Set end point
Left Click: Apply slope after both points are set`}],Ut=[{name:"Tiny",value:.5},{name:"Small",value:1},{name:"Medium",value:4},{name:"Large",value:8},{name:"Huge",value:15}],xt=[{name:"Weak",value:.1},{name:"Normal",value:.25},{name:"Strong",value:.5},{name:"Very Strong",value:1}];function sr(n,e,t,o,f){const s=document.createElement("div");s.id="brush-palette";let h=!1;s.style.cssText=`
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
    `;let u=!1,l={x:0,y:0};const m=y=>{if(y.target.closest("button, input, select, label"))return;u=!0;const S=s.getBoundingClientRect();l.x=y.clientX-S.left,l.y=y.clientY-S.top,s.style.cursor="grabbing"},T=y=>{u&&(s.style.left=`${y.clientX-l.x}px`,s.style.top=`${y.clientY-l.y}px`)},w=()=>{u=!1,s.style.cursor="default"};s.addEventListener("mousedown",m),document.addEventListener("mousemove",T),document.addEventListener("mouseup",w);const p=document.createElement("div");p.style.cssText=`
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
    `,p.appendChild(g);const d=document.createElement("button");d.textContent="🎮",d.title=`CONTROLS HELP

BRUSH TYPES:
1 - Terrain ⛰️: Modify terrain height
2 - Water 💧: Add/remove water
3 - Rock 🪨: Place erosion-resistant rock
4 - Smooth ✨: Smooth terrain surface
5 - Flatten 📐: Flatten to target height
6 - Slope 📉: Create slope between points

BRUSH OPERATIONS:
Left Click: Add mode
Shift + Click: Subtract mode
Alt + Click: Secondary operation

BRUSH MODIFIERS:
Ctrl + Scroll: Adjust brush size
Shift: Invert operation (Add ↔ Subtract)
Alt: Secondary operation

FLATTEN BRUSH:
Left Click: Flatten to target height
Alt + Click: Set target height to clicked location
Use slider to manually set target height (0-500)

SLOPE BRUSH:
Left Click (first): Set start point of slope
Alt + Click + Drag: Paint to the start point of slope

WATER SOURCES:
r: Place permanent water source
Shift + r: Remove nearest water source
p: Remove all permanent water sources

CAMERA:
Right Mouse: Rotate
Middle Mouse: Pan
Scroll: Zoom
WASD: Move camera
Space: Move up

OTHER:
Start/Resume: Start/pause simulation
Reset: Generate new terrain`,d.style.cssText=`
        background: transparent;
        border: 1px solid #555;
        color: #ccc;
        width: 24px;
        height: 24px;
        border-radius: 4px;
        cursor: help;
        font-size: 14px;
        line-height: 1;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 4px;
        transition: all 0.2s;
    `,d.addEventListener("mouseenter",()=>{d.style.background="rgba(100, 100, 100, 0.5)",d.style.transform="scale(1.1)"}),d.addEventListener("mouseleave",()=>{d.style.background="transparent",d.style.transform="scale(1)"}),p.appendChild(d);const v=document.createElement("button");v.textContent="−",v.style.cssText=`
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
    `,v.addEventListener("click",y=>{y.stopPropagation(),h=!h;const S=s.querySelector(".palette-content");S&&(S.style.display=h?"none":"flex",v.textContent=h?"+":"−")}),p.appendChild(v),s.appendChild(p);const R=document.createElement("div");R.className="palette-content",R.style.cssText=`
        display: flex;
        flex-direction: column;
        gap: 10px;
    `;const F=document.createElement("div");F.style.cssText=`
        display: flex;
        flex-direction: column;
        gap: 6px;
    `;const D=document.createElement("div");D.textContent="Brush Type:",D.style.cssText=`
        color: #aaa;
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 4px;
    `,F.appendChild(D),Jn.forEach(y=>{const S=document.createElement("button");S.className="brush-type-button",S.setAttribute("data-brush-id",y.id.toString());const x=y.shortcut?` [${y.shortcut}]`:"";S.textContent=`${y.icon||""} ${y.name}${x}`,y.id===5?S.title=`Flatten Brush 📐

Left Click: Flatten terrain to target height
Alt+Click: Set target height to clicked location
Use slider to manually set target height (0-500)`:y.id===6?S.title=`Slope Brush 📉

Left Click (first): Set start point of slope
Alt + Click + Drag: Paint to the start point of slope`:S.title=y.description||y.name,S.style.cssText=`
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
        `,S.addEventListener("mouseenter",()=>{n.brushType!==y.id&&(S.style.background=`${y.color||"#666"}33`,S.style.transform="translateX(2px)")}),S.addEventListener("mouseleave",()=>{n.brushType!==y.id&&(S.style.background="transparent",S.style.transform="translateX(0)")}),S.addEventListener("click",G=>{G.stopPropagation(),e(y.id),ve(s,n)}),F.appendChild(S)}),R.appendChild(F);const A=document.createElement("div");A.style.cssText=`
        border-top: 1px solid #555;
        margin: 5px 0;
    `,R.appendChild(A);const k=document.createElement("div");k.style.cssText=`
        display: flex;
        flex-direction: column;
        gap: 5px;
    `;const _=document.createElement("div");_.style.cssText=`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2px;
    `;const z=document.createElement("label");z.textContent=`Size: ${n.brushSize.toFixed(1)}`,z.style.cssText=`
        color: #ccc;
        font-size: 12px;
        font-weight: 500;
    `,_.appendChild(z);const B=document.createElement("div");B.style.cssText=`
        display: flex;
        gap: 2px;
    `,Ut.forEach(y=>{const S=document.createElement("button");S.textContent=y.name[0],S.title=`${y.name}: ${y.value}`,S.style.cssText=`
            width: 20px;
            height: 20px;
            padding: 0;
            font-size: 9px;
            background: ${Math.abs(n.brushSize-y.value)<.1?"#4A90E2":"#333"};
            border: 1px solid #555;
            color: #ccc;
            border-radius: 3px;
            cursor: pointer;
        `,S.addEventListener("click",x=>{x.stopPropagation(),t(y.value),ve(s,n)}),B.appendChild(S)}),_.appendChild(B),k.appendChild(_);const U=document.createElement("input");U.type="range",U.min="0.1",U.max="20.0",U.step="0.1",U.value=n.brushSize.toString(),U.style.cssText=`
        width: 100%;
        cursor: pointer;
    `,U.addEventListener("input",y=>{const S=parseFloat(y.target.value);z.textContent=`Size: ${S.toFixed(1)}`,t(S)}),k.appendChild(U),R.appendChild(k);const H=document.createElement("div");H.style.cssText=`
        display: flex;
        flex-direction: column;
        gap: 5px;
    `;const O=document.createElement("div");O.style.cssText=`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2px;
    `;const Y=document.createElement("label");Y.textContent=`Strength: ${n.brushStrenth.toFixed(2)}`,Y.style.cssText=`
        color: #ccc;
        font-size: 12px;
        font-weight: 500;
    `,O.appendChild(Y);const te=document.createElement("div");te.style.cssText=`
        display: flex;
        gap: 2px;
    `,xt.forEach(y=>{const S=document.createElement("button");S.textContent=y.name[0],S.title=`${y.name}: ${y.value}`,S.style.cssText=`
            width: 20px;
            height: 20px;
            padding: 0;
            font-size: 9px;
            background: ${Math.abs(n.brushStrenth-y.value)<.01?"#4A90E2":"#333"};
            border: 1px solid #555;
            color: #ccc;
            border-radius: 3px;
            cursor: pointer;
        `,S.addEventListener("click",x=>{x.stopPropagation(),o(y.value),ve(s,n)}),te.appendChild(S)}),O.appendChild(te),H.appendChild(O);const q=document.createElement("input");q.type="range",q.min="0.1",q.max="2.0",q.step="0.01",q.value=n.brushStrenth.toString(),q.style.cssText=`
        width: 100%;
        cursor: pointer;
    `,q.addEventListener("input",y=>{const S=parseFloat(y.target.value);Y.textContent=`Strength: ${S.toFixed(2)}`,o(S)}),H.appendChild(q),R.appendChild(H);const Ue=document.createElement("div");Ue.style.cssText=`
        display: flex;
        flex-direction: column;
        gap: 5px;
    `;const _e=document.createElement("label");_e.textContent="Operation:",_e.style.cssText=`
        color: #ccc;
        font-size: 12px;
        font-weight: 500;
    `,Ue.appendChild(_e);const he=document.createElement("div");he.style.cssText=`
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
    `,ue.addEventListener("click",y=>{y.stopPropagation(),n.brushOperation=0,f(0),ve(s,n)});const pe=document.createElement("button");if(pe.className="operation-subtract-btn",pe.textContent="➖ Subtract",pe.style.cssText=`
        flex: 1;
        padding: 6px;
        background: ${n.brushOperation===1?"#E74C3C":"#333"};
        border: 1px solid ${n.brushOperation===1?"#E74C3C":"#555"};
        color: #fff;
        border-radius: 4px;
        font-size: 11px;
        cursor: pointer;
        transition: all 0.2s;
    `,pe.addEventListener("click",y=>{y.stopPropagation(),n.brushOperation=1,f(1),ve(s,n)}),he.appendChild(ue),he.appendChild(pe),Ue.appendChild(he),R.appendChild(Ue),n.flattenTargetHeight!==void 0){const y=document.createElement("div");y.id="flatten-controls",y.style.cssText=`
            display: ${n.brushType===5?"flex":"none"};
            flex-direction: column;
            gap: 5px;
            padding-top: 8px;
            border-top: 1px solid #555;
        `;const S=document.createElement("label");S.textContent=`Target Height: ${n.flattenTargetHeight.toFixed(1)}`,S.style.cssText=`
            color: #ccc;
            font-size: 11px;
        `,y.appendChild(S);const x=document.createElement("input");x.type="range",x.min="0",x.max="500",x.step="1",x.value=n.flattenTargetHeight.toString(),x.style.cssText="width: 100%;",x.addEventListener("input",G=>{const le=parseFloat(G.target.value);S.textContent=`Target Height: ${le.toFixed(1)}`,n.flattenTargetHeight!==void 0&&(n.flattenTargetHeight=le)}),y.appendChild(x),R.appendChild(y)}s.appendChild(R);const En=y=>{if(y.target instanceof HTMLInputElement||y.target instanceof HTMLSelectElement)return;const S=Jn.find(x=>x.shortcut===y.key);S&&(y.preventDefault(),e(S.id),ve(s,n))};return document.addEventListener("keydown",En),s.cleanup=()=>{document.removeEventListener("keydown",En),document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",w)},s}function ve(n,e){var m,T,w,p,g;n.querySelectorAll(".brush-type-button").forEach(d=>{const v=parseInt(d.getAttribute("data-brush-id")||"-1"),R=Jn.find(F=>F.id===v);if(R){const F=e.brushType===R.id;d.style.background=F?R.color||"#666":"transparent",d.style.color=F?"#fff":R.color||"#ccc"}});const o=n.querySelector('input[type="range"]'),f=n.querySelector("label");o&&f&&((m=f.textContent)!=null&&m.includes("Size:"))&&(o.value=e.brushSize.toString(),f.textContent=`Size: ${e.brushSize.toFixed(1)}`,Array.from(((T=f.parentElement)==null?void 0:T.querySelectorAll("button"))||[]).forEach((v,R)=>{const F=Ut[R];F&&(v.style.background=Math.abs(e.brushSize-F.value)<.1?"#4A90E2":"#333")}));const s=n.querySelectorAll('input[type="range"]');if(s.length>=2){const d=s[1];d.value=e.brushStrenth.toString();const v=(w=d.parentElement)==null?void 0:w.querySelector("label");v&&((p=v.textContent)!=null&&p.includes("Strength:"))&&(v.textContent=`Strength: ${e.brushStrenth.toFixed(2)}`,Array.from(((g=v.parentElement)==null?void 0:g.querySelectorAll("button"))||[]).forEach((F,D)=>{const A=xt[D];A&&(F.style.background=Math.abs(e.brushStrenth-A.value)<.01?"#4A90E2":"#333")}))}const h=n.querySelector(".operation-add-btn"),u=n.querySelector(".operation-subtract-btn");h&&u&&(h.style.background=e.brushOperation===0?"#27AE60":"#333",h.style.borderColor=e.brushOperation===0?"#27AE60":"#555",u.style.background=e.brushOperation===1?"#E74C3C":"#333",u.style.borderColor=e.brushOperation===1?"#E74C3C":"#555");const l=n.querySelector("#flatten-controls");l&&(l.style.display=e.brushType===5?"flex":"none")}function ur(n,e,t,o,f){const s=document.getElementById("brush-palette");if(s){const u=s.cleanup;u&&u(),s.remove()}const h=sr(n,e,t,o,f);return document.body.appendChild(h),h}function lr(n){const e=new zt.GUI;var t=e.addFolder("Simulation Controls");t.add(n,"Pause/Resume"),t.add(n,"SimulationSpeed",{fast:3,medium:2,slow:1}),t.open();var o=e.addFolder("Terrain Parameters");o.add(n,"SimulationResolution",{256:256,512:512,1024:1024,2048:2048,4096:4096}),o.add(n,"TerrainScale",.1,4),o.add(n,"TerrainHeight",1,5),o.add(n,"TerrainMask",{OFF:0,Sphere:1,slope:2}),o.add(n,"TerrainBaseType",{ordinaryFBM:0,domainWarp:1,terrace:2,voroni:3,ridgeNoise:4}),o.add(n,"ResetTerrain"),o.add(n,"Import Height Map"),o.add(n,"Clear Height Map"),o.open();var f=e.addFolder("Erosion Parameters"),s=f.addFolder("Rain Erosion Parameters");s.add(n,"RainErosion"),s.add(n,"RainErosionStrength",.1,3),s.add(n,"RainErosionDropSize",.1,3),s.close(),f.add(n,"ErosionMode",{RiverMode:0,MountainMode:1,PolygonalMode:2}),f.add(n,"VelocityAdvectionMag",0,.5),f.add(n,"EvaporationConstant",1e-4,.08),f.add(n,"Kc",.01,.5),f.add(n,"Ks",.001,.2),f.add(n,"Kd",1e-4,.1),f.add(n,"TerrainDebug",{noDebugView:0,sediment:1,velocity:2,velocityHeatmap:9,terrain:3,flux:4,terrainflux:5,maxslippage:6,flowMap:7,spikeDiffusion:8,rockMaterial:10}),f.add(n,"AdvectionMethod",{Semilagrangian:0,MacCormack:1}),f.add(n,"VelocityMultiplier",1,5),f.open();var h=e.addFolder("Thermal Erosion Parameters");h.add(n,"thermalTalusAngleScale",1,10),h.add(n,"thermalErosionScale",0,5);var u=e.addFolder("Terrain Editor");u.add(n,"raycastMethod",{Heightmap:"heightmap",BVH:"bvh"}).onChange(R=>{console.log("[Raycast] Method changed to:",R);const F=Dt();F.raycast.method=R,ar(F)});const l=u.add(n,"brushType",{NoBrush:0,TerrainBrush:1,WaterBrush:2,RockBrush:3,SmoothBrush:4,FlattenBrush:5,SlopeBrush:6});l.onChange(R=>{R!==6&&(n.slopeActive=0),window.brushPalette&&ve(window.brushPalette,n)});const m=u.add(n,"flattenTargetHeight",0,500);u.add(n,"rockErosionResistance",0,1);const T=u.add(n,"brushSize",.1,20),w=u.add(n,"brushStrenth",.1,2),p=u.add(n,"brushOperation",{Add:0,Subtract:1});u.open();const g=ur(n,R=>{n.brushType=R,R!==6&&(n.slopeActive=0),l.updateDisplay()},R=>{n.brushSize=R,T.updateDisplay()},R=>{n.brushStrenth=R},R=>{n.brushOperation=R,p.updateDisplay()});window.brushPalette=g,window.brushSizeController=T,window.flattenTargetHeightController=m,l.onChange(()=>{window.brushPalette&&ve(window.brushPalette,n)}),T.onChange(()=>{window.brushPalette&&ve(window.brushPalette,n)}),w.onChange(()=>{window.brushPalette&&ve(window.brushPalette,n)}),p.onChange(()=>{window.brushPalette&&ve(window.brushPalette,n)});var d=e.addFolder("Rendering Parameters");d.add(n,"WaterTransparency",0,1),d.add(n,"TerrainPlatte",{AlpineMtn:0,Desert:1,Jungle:2}),d.add(n,"SnowRange",0,100),d.add(n,"ForestRange",0,50),d.add(n,"ShowFlowTrace"),d.add(n,"SedimentTrace"),d.add(n,"showScattering"),d.add(n,"enableBilateralBlur");var v=d.addFolder("sunPos/Dir");return v.add(n,"lightPosX",-1,1),v.add(n,"lightPosY",0,1),v.add(n,"lightPosZ",-1,1),v.open(),d.open(),{gui:e,controllers:{brushTypeController:l,brushSizeController:T,brushStrengthController:w,brushOperationController:p,flattenTargetHeightController:m}}}const Gn=.05,fr=5e-4,cr=25e-5,Kn=.02,dr=10,hr=200,pr=12,mr=1e-4;function An(n,e,t,o){const f=Math.max(0,Math.min(t-1,Math.floor(n))),h=Math.max(0,Math.min(t-1,Math.floor(e)))*t*4+f*4+0;return h>=0&&h<o.length?o[h]:0}function Ve(n,e,t){const o=Math.max(0,Math.min(1,n[0])),f=Math.max(0,Math.min(1,n[1])),s=o*e,h=f*e,u=Math.floor(s),l=Math.floor(h),m=Math.min(u+1,e-1),T=Math.min(l+1,e-1),w=s-u,p=h-l,g=An(u,l,e,t),d=An(m,l,e,t),v=An(u,T,e,t),R=An(m,T,e,t),F=g*(1-w)+d*w,D=v*(1-w)+R*w;return F*(1-p)+D*p}function xn(n,e,t,o,f){f[0]=-10,f[1]=-10;const s=V(),h=V(),u=Re();Re();const l=V(),m=V(),T=V(),w=V();ce(s,n),ce(h,n);let p=Gn,g=0,d=!1,v=V(),R=Re();if(R[0]=(n[0]+.5)/1,R[1]=(n[2]+.5)/1,R[0]>=0&&R[0]<=1&&R[1]>=0&&R[1]<=1){let D=Ve(R,t,o)/t;if(n[1]<=D){f[0]=R[0],f[1]=R[1];return}}for(let F=0;F<hr&&!(g>dr);++F){if(u[0]=(s[0]+.5)/1,u[1]=(s[2]+.5)/1,u[0]<0||u[0]>1||u[1]<0||u[1]>1){if(d)break;l[0]=e[0]*p,l[1]=e[1]*p,l[2]=e[2]*p,Me(s,s,l),g+=p;continue}let A=Ve(u,t,o)/t;if(s[1]<A){ce(v,s),ce(m,h),ce(T,s),d=!0;const _=V();let z=1/0;ce(_,T);for(let U=0;U<pr&&!(Gt(m,T)<mr);++U){Kt(w,m,T,.5);let O=Re();if(O[0]=(w[0]+.5)/1,O[1]=(w[2]+.5)/1,O[0]<0||O[0]>1||O[1]<0||O[1]>1)break;let te=Ve(O,t,o)/t;const q=Math.abs(w[1]-te);q<z&&(z=q,ce(_,w)),w[1]<te?ce(m,w):ce(T,w)}ce(v,_);let B=Re();if(B[0]=(v[0]+.5)/1,B[1]=(v[2]+.5)/1,B[0]>=0&&B[0]<=1&&B[1]>=0&&B[1]<=1){let H=Ve(B,t,o)/t;const O=.001*(1024/t);v[1]>H+O*2&&ce(v,h)}f[0]=(v[0]+.5)/1,f[1]=(v[2]+.5)/1;break}let k=Math.abs(s[1]-A);k<Kn*.5?p=cr:k<Kn?p=fr:k<Kn*2?p=Gn*.5:p=Gn,ce(h,s),l[0]=e[0]*p,l[1]=e[1]*p,l[2]=e[2]*p,Me(s,s,l),g+=p}}function Pt(n,e,t,o,f){if(f[0]=-10,f[1]=-10,!t||!o)return!1;let s=new se(n[0],n[1],n[2]);const h=new se(e[0],e[1],e[2]);if(h.length()>1e-4)h.normalize();else return!1;const l=Math.abs(h.y)<.05;let m=null;const T=l?5e3:1e3;if(l){const w=s.clone().addScaledVector(new se(0,1,0),.001),p=new Wn(w,h);if(m=t.raycastFirst(p,T),!m||m.distance<0){const g=new Wn(s,h);m=t.raycastFirst(g,T)}}else{const w=new Wn(s,h);m=t.raycastFirst(w,T)}if(m&&m.distance>=0){const w=m.point.x,p=m.point.z;let g=w+.5,d=p+.5;if(g=Math.max(0,Math.min(1,g)),d=Math.max(0,Math.min(1,d)),g>=0&&g<=1&&d>=0&&d<=1)f[0]=g,f[1]=d;else{const v=Jt(m.point,o,m.faceIndex,{});v&&v.uv?(f[0]=Math.max(0,Math.min(1,v.uv.x)),f[1]=Math.max(0,Math.min(1,v.uv.y))):(f[0]=Math.max(0,Math.min(1,g)),f[1]=Math.max(0,Math.min(1,d)))}return!0}return!1}const vr=1024,Qe=4096;let at=0,Ct=!0,ot=!1,oe=new Float32Array(1024*1024*4),rn=0;function Tr(){rn++}function Er(){rn=0}const Bt=200,Rr=2,br=4;function Tt(n){const t=n*n;return Math.max(1,Math.round(t/1048576))}function wr(n,e,t){if(n){const o=Tt(t);return rn%(Rr*o)===0}if(e){const o=Tt(t);return rn%(br*o)===0}return rn>=Bt}let b=vr;function yr(n){oe=new Float32Array(n*n*4)}let Sn=0,_n=0;function gr(n){b=n}function Qn(n,e){Sn=n,_n=e}function Fr(n){ot=n}function Ar(n){at=n}function Sr(){at++}function Pn(n){Ct=n}let Be=null,We=null;function jn(n){Be=n}function qn(n){We=n}let Fe=null;function an(){return Fe}function Cn(n){Fe=n}function _r(n,e){const{controls:t,controlsConfig:o}=e;if(["LEFT","MIDDLE","RIGHT"][n.button],sn(n.button,o)!=="brushActivate")return{shouldActivate:!1,brushPressed:0};let s=1;const h=Number(t.brushType),u=o.modifiers.brushSecondary;if(mn(u,n))if(h===5){Fe===null&&(Fe=t.brushOperation),t.brushOperation=1;const m=document.getElementById("canvas");if(!m)return n.preventDefault(),n.stopPropagation(),n.stopImmediatePropagation(),s=0,{shouldActivate:!1,brushPressed:0};const T=m.getBoundingClientRect(),w=(n.clientX-T.left)/T.width,p=(n.clientY-T.top)/T.height;e.camera.update(e.controlsConfig.camera);const g=be();rt(g,e.camera.projectionMatrix,e.camera.viewMatrix);const d=be();it(d,g);const v=Dn(),R=Dn();v[0]=2*w-1,v[1]=1-2*p,v[2]=-1,v[3]=1,R[0]=2*w-1,R[1]=1-2*p,R[2]=-0,R[3]=1,Un(v,v,d),Un(R,R,d),v[0]/=v[3],v[1]/=v[3],v[2]/=v[3],R[0]/=R[3],R[1]/=R[3],R[2]/=R[3];const F=V();F[0]=R[0]-v[0],F[1]=R[1]-v[1],F[2]=R[2]-v[2],Pe(F,F);const D=j(v[0],v[1],v[2]),A=Re();if(A[0]=-10,A[1]=-10,t.raycastMethod==="bvh"&&We&&Be){if(!Pt(D,F,We,Be,A)){const H=Re();xn(D,F,e.simres,e.HightMapCpuBuf,H),A[0]=H[0],A[1]=H[1]}}else xn(D,F,e.simres,e.HightMapCpuBuf,A);if(!(A[0]>=0&&A[0]<=1&&A[1]>=0&&A[1]<=1&&A[0]!==-10&&A[1]!==-10))return n.preventDefault(),n.stopPropagation(),n.stopImmediatePropagation(),s=0,{shouldActivate:!1,brushPressed:0};const _=Se(A[0],A[1]),B=Ve(_,e.simres,e.HightMapCpuBuf)*1e3/e.simres;if(B!==void 0&&!isNaN(B)&&isFinite(B)){t.flattenTargetHeight=B;const U=document.querySelector("#flatten-controls");if(U){const O=U.querySelector('input[type="range"]'),Y=U.querySelector("label");O&&(O.value=B.toString(),O.setAttribute("value",B.toString()),O.dispatchEvent(new Event("input",{bubbles:!0}))),Y&&(Y.textContent=`Target Height: ${B.toFixed(1)}`)}const H=window.flattenTargetHeightController;H&&H.updateDisplay()}return n.preventDefault(),n.stopPropagation(),n.stopImmediatePropagation(),s=0,{shouldActivate:!1,brushPressed:0}}else if(h===6)if(t.slopeStartPos=Zn(t.posTemp),t.slopeActive>=1&&!lt(t.slopeEndPos,Se(0,0)))t.slopeActive=2;else return t.slopeActive=1,n.preventDefault(),n.stopPropagation(),n.stopImmediatePropagation(),{shouldActivate:!1,brushPressed:0};else Fe===null&&(Fe=t.brushOperation),t.brushOperation=1;else{if(h===6){if(t.slopeEndPos=Zn(t.posTemp),t.slopeActive===2)return n.preventDefault(),n.stopPropagation(),n.stopImmediatePropagation(),{shouldActivate:!1,brushPressed:0};if(t.slopeActive===1&&!lt(t.slopeStartPos,Se(0,0)))t.slopeActive=2;else return t.slopeActive=1,n.preventDefault(),n.stopPropagation(),n.stopImmediatePropagation(),{shouldActivate:!1,brushPressed:0}}const m=o.modifiers.brushInvert;m&&m!==u&&mn(m,n)&&(Fe=t.brushOperation,t.brushOperation=t.brushOperation===0?1:0)}return{shouldActivate:!0,brushPressed:s}}function Mr(n,e){const{controls:t}=e;sn(n.button,e.controlsConfig)==="brushActivate"&&(Number(t.brushType)===6&&t.slopeActive,Fe!==null&&(t.brushOperation=Fe,Fe=null))}function Dr(n,e){const{controls:t}=e,o=Number(t.brushType);if(o===5&&t.brushPressed===1&&t.brushOperation===1){const f=Se(n[0],n[1]),h=Ve(f,e.simres,e.HightMapCpuBuf)/e.simres;if(h!==void 0&&!isNaN(h)){t.flattenTargetHeight=h;const u=document.querySelector("#flatten-controls");if(u){const m=u.querySelector('input[type="range"]'),T=u.querySelector("label");m&&(m.value=h.toString(),m.setAttribute("value",h.toString()),m.dispatchEvent(new Event("input",{bubbles:!0}))),T&&(T.textContent=`Target Height: ${h.toFixed(1)}`)}const l=window.flattenTargetHeightController;l&&l.updateDisplay()}}o===6&&t.brushPressed===1&&t.slopeActive}const en=16;let de=[];function Ur(n,e,t){if(de.length<en){const o={position:Zn(n),size:e,strength:t};return de.push(o),!0}return!1}function xr(n){if(de.length===0)return!1;let e=0,t=Number.MAX_VALUE;for(let o=0;o<de.length;o++){const f=jt(de[o].position,n);f<t&&(t=f,e=o)}return de.splice(e,1),!0}function Pr(){de=[]}function nn(){return de.length}function Cr(n,e,t){function o(u){const l=u.key.toLowerCase(),m=mt(l,e);if(e.camera.movement.enableWASD&&((l==="w"||l==="a"||l==="s"||l==="d")&&t.addMovementKey(l),l===" "&&e.camera.movement.enableVerticalMovement&&t.addMovementKey(" "),l==="shift"&&e.camera.movement.enableVerticalMovement&&e.modifiers.brushInvert!=="Shift"&&e.modifiers.brushSizeScroll!=="Shift"&&e.modifiers.brushSecondary!=="Shift"&&t.addMovementKey("shift")),vt(l,e)||m==="brushActivate"?n.brushPressed=1:e.keys.brushActivate!=="LEFT"&&e.keys.brushActivate!=="MIDDLE"&&e.keys.brushActivate!=="RIGHT"&&(n.brushPressed=0),n.brushPressed===1){const T=e.modifiers.brushInvert;if(T){const w=mn(T,u);(T==="Ctrl"&&(l==="control"||l==="meta")||T==="Shift"&&l==="shift"||T==="Alt"&&l==="alt")&&w&&an()===null&&(Cn(n.brushOperation),n.brushOperation=n.brushOperation===0?1:0,console.log("[DEBUG] Brush operation inverted on modifier press to:",n.brushOperation===0?"Add":"Subtract"))}}m==="permanentWaterSource"&&(u.shiftKey?xr(n.posTemp)&&(n.sourceCount=nn(),console.log(`Removed water source. Remaining: ${nn()}`)):Ur(n.posTemp,n.brushSize,n.brushStrenth)?(n.sourceCount=nn(),console.log(`Added water source at (${n.posTemp[0].toFixed(3)}, ${n.posTemp[1].toFixed(3)}). Total: ${nn()}`)):console.log(`Maximum ${en} water sources reached`)),m==="removePermanentSource"&&(Pr(),n.sourceCount=0,console.log("Removed all water sources"))}function f(u){const l=u.key.toLowerCase(),m=mt(l,e);if(e.camera.movement.enableWASD&&((l==="w"||l==="a"||l==="s"||l==="d")&&t.removeMovementKey(l),l===" "&&t.removeMovementKey(" "),l==="shift"&&t.removeMovementKey("shift")),(vt(l,e)||m==="brushActivate")&&(n.brushPressed=0),n.brushPressed===1){const T=e.modifiers.brushInvert;if(T&&(T==="Ctrl"&&(l==="control"||l==="meta")||T==="Shift"&&l==="shift"||T==="Alt"&&l==="alt")&&an()!==null){const p=an();p!==null&&(n.brushOperation=p,Cn(null)),console.log("[DEBUG] Brush operation restored on modifier release to:",n.brushOperation===0?"Add":"Subtract")}}}function s(u){const l=["LEFT","MIDDLE","RIGHT"][u.button];console.log("[DEBUG] onMouseDown CALLED - button:",u.button,"buttonName:",l,"target:",u.target),console.log("[DEBUG] Config - keys.brushActivate:",e.keys.brushActivate,"mouse.brushActivate:",e.mouse.brushActivate);const m=sn(u.button,e);if(console.log("[DEBUG] onMouseDown - action:",m,"brushType:",n.brushType),m==="brushActivate"){const T={controls:n,controlsConfig:e,simres:Number(b),HightMapCpuBuf:oe,camera:t},w=_r(u,T);if(w.shouldActivate){n.brushPressed=w.brushPressed,u.preventDefault(),u.stopPropagation(),u.stopImmediatePropagation(),console.log("[DEBUG] brushPressed set to:",n.brushPressed);return}else return}else console.log("[DEBUG] Not a brush action - button:",u.button,"buttonName:",l),console.log("[DEBUG] Expected - keys.brushActivate:",e.keys.brushActivate,"mouse.brushActivate:",e.mouse.brushActivate)}function h(u){console.log("[DEBUG] onMouseUp CALLED - button:",u.button,"target:",u.target);const l=sn(u.button,e);console.log("[DEBUG] onMouseUp - action:",l),l==="brushActivate"&&(console.log("[DEBUG] Deactivating brush - setting brushPressed = 0"),n.brushPressed=0,Mr(u,{controls:n,controlsConfig:e}),u.preventDefault(),u.stopPropagation(),u.stopImmediatePropagation())}return{onKeyDown:o,onKeyUp:f,onMouseDown:s,onMouseUp:h}}function Et(n,e,t=1){const o=new Qt,f=n,s=n,h=f*s,u=new Float32Array(h*3),l=new Float32Array(h*2),m=[];let T=0;const w=Re();for(let p=0;p<s;p++)for(let g=0;g<f;g++){const d=g/(f-1),v=p/(s-1);w[0]=d,w[1]=v;const F=Ve(w,n,e)/n,D=(d-.5)*t,A=F,k=(v-.5)*t;u[T++]=D,u[T++]=A,u[T++]=k;const _=(p*f+g)*2;l[_]=d,l[_+1]=v}for(let p=0;p<s-1;p++)for(let g=0;g<f-1;g++){const d=p*f+g,v=p*f+g+1,R=(p+1)*f+g,F=(p+1)*f+g+1;m.push(d,R,v),m.push(v,R,F)}return o.setAttribute("position",new ct(u,3)),o.setAttribute("uv",new ct(l,2)),o.setIndex(m),o.computeBoundingBox(),o}let i,L,et,hn,Z,nt,Ge,Mn,Ce,un,vn,Bn,kn,pn,W,Te,Le,ln,je,fn,qe,cn,Ee,Ae,ne,ke,Ke,De,He,on,Tn,kt=null;function J(n,e,t){let o=i.createTexture();return i.bindTexture(i.TEXTURE_2D,o),i.texImage2D(i.TEXTURE_2D,0,i.RGBA32F,n,e,0,i.RGBA,i.FLOAT,null),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,t),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,t),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),o}function Q(n,e,t,o){i.bindTexture(i.TEXTURE_2D,o),i.texImage2D(i.TEXTURE_2D,0,i.RGBA32F,n,e,0,i.RGBA,i.FLOAT,null),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,t),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,t),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}function Ie(n,e,t){let o=i.createTexture();return i.bindTexture(i.TEXTURE_2D,o),i.texImage2D(i.TEXTURE_2D,0,i.RGBA32F,n,e,0,i.RGBA,i.FLOAT,null),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,t),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,t),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),o}function Br(n,e){i=n;let t=i.LINEAR;Q(e,e,t,W),Q(e,e,t,Te),Q(e,e,t,Le),Q(e,e,t,ln),Q(e,e,t,je),Q(e,e,t,fn),Q(e,e,t,qe),Q(e,e,t,cn),Q(e,e,t,Ee),Q(e,e,t,Ae),Q(e,e,t,ne),Q(e,e,t,ke),Q(e,e,t,Ke),Q(e,e,t,De),Q(e,e,t,He),Q(e,e,t,on),Q(e,e,t,Tn),i.bindRenderbuffer(i.RENDERBUFFER,Z),i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT16,e,e),i.bindTexture(i.TEXTURE_2D,null),i.bindRenderbuffer(i.RENDERBUFFER,null)}function kr(n,e){i=n;let t=i.LINEAR;W=J(e,e,t),Te=J(e,e,t),Le=J(e,e,t),ln=J(e,e,t),je=J(e,e,t),fn=J(e,e,t),qe=J(e,e,t),cn=J(e,e,t),Ee=J(e,e,t),Ae=J(e,e,t),ne=J(e,e,t),ke=J(e,e,t),Ke=J(e,e,t),De=J(e,e,t),He=J(e,e,t),on=J(e,e,t),Tn=J(e,e,t),Mn=Ie(Qe,Qe,i.LINEAR),Ce=Ie(window.innerWidth,window.innerHeight,i.LINEAR),un=Ie(window.innerWidth,window.innerHeight,i.LINEAR),vn=Ie(window.innerWidth,window.innerHeight,i.LINEAR),Bn=Ie(window.innerWidth,window.innerHeight,i.LINEAR),kn=Ie(window.innerWidth,window.innerHeight,i.LINEAR),pn=Ie(window.innerWidth,window.innerHeight,i.LINEAR),et=i.createFramebuffer(),nt=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,nt),i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT16,Qe,Qe),hn=i.createFramebuffer(),Ge=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Ge),i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT16,window.innerWidth,window.innerHeight),L=i.createFramebuffer(),Z=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z),i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT16,e,e),i.bindTexture(i.TEXTURE_2D,null),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindRenderbuffer(i.RENDERBUFFER,null)}function Hr(){i.bindTexture(i.TEXTURE_2D,kn),i.texImage2D(i.TEXTURE_2D,0,i.RGBA32F,window.innerWidth,window.innerHeight,0,i.RGBA,i.FLOAT,null),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.bindTexture(i.TEXTURE_2D,pn),i.texImage2D(i.TEXTURE_2D,0,i.RGBA32F,window.innerWidth,window.innerHeight,0,i.RGBA,i.FLOAT,null),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.bindTexture(i.TEXTURE_2D,Bn),i.texImage2D(i.TEXTURE_2D,0,i.RGBA32F,window.innerWidth,window.innerHeight,0,i.RGBA,i.FLOAT,null),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.bindTexture(i.TEXTURE_2D,vn),i.texImage2D(i.TEXTURE_2D,0,i.RGBA32F,window.innerWidth,window.innerHeight,0,i.RGBA,i.FLOAT,null),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.bindTexture(i.TEXTURE_2D,un),i.texImage2D(i.TEXTURE_2D,0,i.RGBA32F,window.innerWidth,window.innerHeight,0,i.RGBA,i.FLOAT,null),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.bindTexture(i.TEXTURE_2D,Ce),i.texImage2D(i.TEXTURE_2D,0,i.RGBA32F,window.innerWidth,window.innerHeight,0,i.RGBA,i.FLOAT,null),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.bindRenderbuffer(i.RENDERBUFFER,Ge),i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT16,window.innerWidth,window.innerHeight)}function Rt(n){kt=n}function tt(){return kt}function Je(){const n=W;W=Te,Te=n}function Lr(){const n=Le;Le=ln,ln=n}function $n(){const n=Ee;Ee=Ae,Ae=n}function bt(){const n=ne;ne=ke,ke=n}function Or(){const n=De;De=He,He=n}function Nr(){const n=qe;qe=cn,cn=n}function Xr(){const n=je;je=fn,fn=n}function zr(){const n=un;un=vn,vn=n}function Ir(n,e,t){function o(){const s=document.createElement("input");s.type="file",s.accept="image/*",s.onchange=h=>{var m;const u=(m=h.target.files)==null?void 0:m[0];if(!u)return;const l=new FileReader;l.onload=T=>{var p;const w=new Image;w.onload=()=>{const g=document.createElement("canvas");g.width=e,g.height=e;const d=g.getContext("2d");if(!d)return;d.drawImage(w,0,0,e,e);const v=d.getImageData(0,0,e,e),R=new Float32Array(e*e*4),F=t.TerrainHeight*120;for(let A=0;A<e*e;A++){const k=v.data[A*4],_=v.data[A*4+1],z=v.data[A*4+2],U=(k*.299+_*.587+z*.114)/255*F;R[A*4]=U,R[A*4+1]=0,R[A*4+2]=0,R[A*4+3]=1}let D=tt();D||(D=n.createTexture()),n.bindTexture(n.TEXTURE_2D,D),n.texImage2D(n.TEXTURE_2D,0,n.RGBA32F,e,e,0,n.RGBA,n.FLOAT,R),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.bindTexture(n.TEXTURE_2D,null),Rt(D),Pn(!0),console.log("Height map loaded successfully")},w.src=(p=T.target)==null?void 0:p.result},l.readAsDataURL(u)},s.click()}function f(){const s=tt();s&&(n.deleteTexture(s),Rt(null),Pn(!0),console.log("Height map cleared, using procedural generation"))}return{loadHeightMap:o,clearHeightMap:f}}const wt=new Map;function E(n,e){let t=wt.get(n);if(t||(t=new Map,wt.set(n,t)),!t.has(e)){const o=a.getUniformLocation(n,e);return t.set(e,o),o}return t.get(e)}function $(n,e,t,o,f,s,h){e.bindRenderbuffer(e.RENDERBUFFER,Z),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,b,b),e.bindFramebuffer(e.FRAMEBUFFER,L),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,f,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT3,e.TEXTURE_2D,null,0),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,Z),e.drawBuffers([e.COLOR_ATTACHMENT0]);let u=e.checkFramebufferStatus(e.FRAMEBUFFER);u!==e.FRAMEBUFFER_COMPLETE&&console.log("frame buffer status:"+u.toString()),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.viewport(0,0,b,b),e.bindFramebuffer(e.FRAMEBUFFER,L),n.clear(),o.use();const l=tt();h&&o===h&&l?(e.uniform1i(e.getUniformLocation(o.prog,"u_UseHeightMap"),1),e.activeTexture(e.TEXTURE0+10),e.bindTexture(e.TEXTURE_2D,l),e.uniform1i(e.getUniformLocation(o.prog,"u_HeightMap"),10)):h&&o===h&&e.uniform1i(e.getUniformLocation(o.prog,"u_UseHeightMap"),0),n.render(t,o,[s]),e.bindFramebuffer(e.FRAMEBUFFER,null)}function Vr(n,e){const t=a.getUniformLocation(n,"u_TerrainType");t!==-1&&a.uniform1i(t,e)}function Wr(n,e){const t=a.getUniformLocation(n,"u_TerrainDebug");t!==-1&&a.uniform1i(t,e)}function Gr(n,e){const t=a.getUniformLocation(n,"u_TerrainScale");t!==-1&&a.uniform1f(t,e)}function Kr(n,e){const t=a.getUniformLocation(n,"u_TerrainHeight");t!==-1&&a.uniform1f(t,e)}function jr(n,e){const t=a.getUniformLocation(n,"u_RndTerrain");t!==-1&&a.uniform1i(t,e)}const yt=new Map;function dn(n,e){let t=yt.get(n);if(t||(t=new Map,yt.set(n,t)),!t.has(e)){const o=a.getUniformLocation(n,e);return t.set(e,o),o}return t.get(e)}function qr(n,e){const t=dn(n,"u_BrushType");t!==null&&t!==-1&&a.uniform1i(t,e)}function $r(n,e){const t=dn(n,"u_BrushSize");t!==null&&t!==-1&&a.uniform1f(t,e)}function Yr(n,e){const t=dn(n,"u_BrushStrength");t!==null&&t!==-1&&a.uniform1f(t,e)}function Zr(n,e){const t=dn(n,"u_BrushOperation");t!==null&&t!==-1&&a.uniform1i(t,e)}function Jr(n,e){const t=dn(n,"u_BrushPos");t!==null&&t!==-1&&a.uniform2fv(t,e)}function Qr(n,e){const t=dn(n,"u_BrushPressed");t!==null&&t!==-1&&a.uniform1i(t,e)}function ei(n,e){const t=a.getUniformLocation(n,"u_SimRes");t!==-1&&a.uniform1f(t,e)}function ni(n,e){const t=a.getUniformLocation(n,"u_PipeLen");t!==-1&&a.uniform1f(t,e)}function ti(n,e){const t=a.getUniformLocation(n,"u_Ks");t!==-1&&a.uniform1f(t,e)}function ri(n,e){const t=a.getUniformLocation(n,"u_Kc");t!==-1&&a.uniform1f(t,e)}function ii(n,e){const t=a.getUniformLocation(n,"u_Kd");t!==-1&&a.uniform1f(t,e)}function ai(n,e){const t=a.getUniformLocation(n,"u_RockErosionResistance");t!==-1&&a.uniform1f(t,e)}function oi(n,e){const t=a.getUniformLocation(n,"u_timestep");t!==-1&&a.uniform1f(t,e)}function si(n,e){const t=a.getUniformLocation(n,"u_PipeArea");t!==-1&&a.uniform1f(t,e)}var gt=null;class M{constructor(e,t){if(this.shader=a.createShader(e),a.shaderSource(this.shader,t),a.compileShader(this.shader),!a.getShaderParameter(this.shader,a.COMPILE_STATUS))throw a.getShaderInfoLog(this.shader)}}class K{constructor(e){this.uniformLocationCache=new Map,this.prog=a.createProgram();for(let t of e)a.attachShader(this.prog,t.shader);if(a.linkProgram(this.prog),!a.getProgramParameter(this.prog,a.LINK_STATUS))throw a.getProgramInfoLog(this.prog);this.attrPos=a.getAttribLocation(this.prog,"vs_Pos"),this.attrNor=a.getAttribLocation(this.prog,"vs_Nor"),this.attrCol=a.getAttribLocation(this.prog,"vs_Col"),this.attrUv=a.getAttribLocation(this.prog,"vs_Uv"),this.unifModel=a.getUniformLocation(this.prog,"u_Model"),this.unifModelInvTr=a.getUniformLocation(this.prog,"u_ModelInvTr"),this.unifViewProj=a.getUniformLocation(this.prog,"u_ViewProj"),this.unifPlanePos=a.getUniformLocation(this.prog,"u_PlanePos"),this.unifSpanwPos=a.getUniformLocation(this.prog,"u_SpawnPos"),this.unifMouseWorldPos=a.getUniformLocation(this.prog,"u_MouseWorldPos"),this.unifMouseWorldDir=a.getUniformLocation(this.prog,"u_MouseWorldDir"),this.unifSimRes=a.getUniformLocation(this.prog,"u_SimRes"),this.unifPipeLen=a.getUniformLocation(this.prog,"u_PipeLen"),this.unifKs=a.getUniformLocation(this.prog,"u_Ks"),this.unifKc=a.getUniformLocation(this.prog,"u_Kc"),this.unifKd=a.getUniformLocation(this.prog,"u_Kd"),this.unifRockErosionResistance=a.getUniformLocation(this.prog,"u_RockErosionResistance"),this.unifTimestep=a.getUniformLocation(this.prog,"u_timestep"),this.unifPipeArea=a.getUniformLocation(this.prog,"u_PipeArea"),this.unifEye=a.getUniformLocation(this.prog,"u_Eye"),this.unifRef=a.getUniformLocation(this.prog,"u_Ref"),this.unifUp=a.getUniformLocation(this.prog,"u_Up"),this.unifDimensions=a.getUniformLocation(this.prog,"u_Dimensions"),this.unifTime=a.getUniformLocation(this.prog,"u_Time"),this.unifWaterTransparency=a.getUniformLocation(this.prog,"u_WaterTransparency"),this.unifRndTerrain=a.getUniformLocation(this.prog,"u_RndTerrain"),this.unifTerrainType=a.getUniformLocation(this.prog,"u_TerrainType"),this.unifTerrainDebug=a.getUniformLocation(this.prog,"u_TerrainDebug"),this.unifTerrainScale=a.getUniformLocation(this.prog,"u_TerrainScale"),this.unifTerrainHeight=a.getUniformLocation(this.prog,"u_TerrainHeight"),this.unifBrushSize=a.getUniformLocation(this.prog,"u_BrushSize"),this.unifBrushType=a.getUniformLocation(this.prog,"u_BrushType"),this.unifBrushStrength=a.getUniformLocation(this.prog,"u_BrushStrength"),this.unifBrushOperation=a.getUniformLocation(this.prog,"u_BrushOperation"),this.unifBrushPressed=a.getUniformLocation(this.prog,"u_BrushPressed"),this.unifBrusPos=a.getUniformLocation(this.prog,"u_BrushPos")}use(){gt!==this.prog&&(a.useProgram(this.prog),gt=this.prog)}setModelMatrix(e){if(this.use(),this.unifModel!==-1&&a.uniformMatrix4fv(this.unifModel,!1,e),this.unifModelInvTr!==-1){let t=be();qt(t,e),it(t,t),a.uniformMatrix4fv(this.unifModelInvTr,!1,t)}}setViewProjMatrix(e){this.use(),this.unifViewProj!==-1&&a.uniformMatrix4fv(this.unifViewProj,!1,e)}getUniformLocation(e){if(!this.uniformLocationCache.has(e)){const t=a.getUniformLocation(this.prog,e);return this.uniformLocationCache.set(e,t),t}return this.uniformLocationCache.get(e)}setInt(e,t){this.use();const o=this.getUniformLocation(t);o!==null&&o!==-1&&a.uniform1i(o,e)}setFloat(e,t){this.use();const o=this.getUniformLocation(t);o!==null&&o!==-1&&a.uniform1f(o,e)}setVec2(e,t){this.use();const o=this.getUniformLocation(t);o!==null&&o!==-1&&a.uniform2fv(o,e)}setTime(e){this.use(),this.unifTime!==-1&&a.uniform1f(this.unifTime,e)}setWaterTransparency(e){this.use(),this.unifWaterTransparency!==-1&&a.uniform1f(this.unifWaterTransparency,e)}setDimensions(e,t){this.use(),this.unifDimensions!==-1&&a.uniform2f(this.unifDimensions,e,t)}setTerrainType(e){this.use(),Vr(this.prog,e)}setBrushType(e){this.use(),qr(this.prog,e)}setBrushSize(e){this.use(),$r(this.prog,e)}setBrushStrength(e){this.use(),Yr(this.prog,e)}setBrushOperation(e){this.use(),Zr(this.prog,e)}setBrushPos(e){this.use(),Jr(this.prog,e)}setBrushPressed(e){this.use(),Qr(this.prog,e)}setSourceCount(e){this.use();const t=this.getUniformLocation("u_SourceCount");t!==null&&t!==-1&&a.uniform1i(t,e)}setSourcePositions(e){this.use();const t=this.getUniformLocation("u_SourcePositions");t!==null&&t!==-1&&a.uniform2fv(t,e)}setSourceSizes(e){this.use();const t=this.getUniformLocation("u_SourceSizes");t!==null&&t!==-1&&a.uniform1fv(t,e)}setSourceStrengths(e){this.use();const t=this.getUniformLocation("u_SourceStrengths");t!==-1&&a.uniform1fv(t,e)}setTerrainDebug(e){this.use(),Wr(this.prog,e)}setTerrainScale(e){this.use(),Gr(this.prog,e)}setTerrainHeight(e){this.use(),Kr(this.prog,e)}setSpawnPos(e){this.use(),this.unifSpanwPos!==-1&&a.uniform2fv(this.unifSpanwPos,e)}setMouseWorldPos(e){this.use(),this.unifMouseWorldPos!==-1&&a.uniform4fv(this.unifMouseWorldPos,e)}setMouseWorldDir(e){this.use(),this.unifMouseWorldDir!==-1&&a.uniform3fv(this.unifMouseWorldDir,e)}setRndTerrain(e){this.use(),jr(this.prog,e)}setPlanePos(e){this.use(),this.unifPlanePos!==-1&&a.uniform2fv(this.unifPlanePos,e)}setEyeRefUp(e,t,o){this.use(),this.unifEye!==-1&&a.uniform3f(this.unifEye,e[0],e[1],e[2]),this.unifRef!==-1&&a.uniform3f(this.unifRef,t[0],t[1],t[2]),this.unifUp!==-1&&a.uniform3f(this.unifUp,o[0],o[1],o[2])}setPipeLen(e){this.use(),ni(this.prog,e)}setKs(e){this.use(),ti(this.prog,e)}setKc(e){this.use(),ri(this.prog,e)}setTimestep(e){this.use(),oi(this.prog,e)}setPipeArea(e){this.use(),si(this.prog,e)}setKd(e){this.use(),ii(this.prog,e)}setRockErosionResistance(e){this.use(),ai(this.prog,e)}setSimres(e){this.use(),ei(this.prog,e)}draw(e){this.use(),this.attrPos!=-1&&e.bindPos()&&(a.enableVertexAttribArray(this.attrPos),a.vertexAttribPointer(this.attrPos,4,a.FLOAT,!1,0,0)),this.attrNor!=-1&&e.bindNor()&&(a.enableVertexAttribArray(this.attrNor),a.vertexAttribPointer(this.attrNor,4,a.FLOAT,!1,0,0)),this.attrUv!=-1&&e.bindUv()&&(a.enableVertexAttribArray(this.attrUv),a.vertexAttribPointer(this.attrUv,2,a.FLOAT,!1,0,0)),e.bindIdx(),a.drawElements(e.drawMode(),e.elemCount(),a.UNSIGNED_INT,0),this.attrPos!=-1&&a.disableVertexAttribArray(this.attrPos),this.attrNor!=-1&&a.disableVertexAttribArray(this.attrNor),this.attrUv!=-1&&a.disableVertexAttribArray(this.attrUv)}}const Ft=`#version 300 es


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

    // Rock colors - distinct bluish-gray to clearly differentiate from soil
    vec3 rock1 = vec3(0.35, 0.38, 0.45);  // Light bluish-gray
    vec3 rock2 = vec3(0.25, 0.28, 0.35);  // Medium bluish-gray
    vec3 rock3 = vec3(0.15, 0.18, 0.25);   // Dark bluish-gray




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
                // Rock brush preview - use the new bluish-gray rock color
                addcol = vec3(0.35, 0.38, 0.45) * 0.8;
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

    // Apply rock material color - make rock clearly distinct from soil
    if(rockVal > 0.1){
        // Use distinct bluish-gray rock colors - mix between rock3 (darkest) and rock1 (lightest) based on rock value
        vec3 rockCol = mix(rock3, rock1, clamp((rockVal - 0.1) / 0.9, 0.0, 1.0));
        
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
        
        // Apply the blended color - make rock much more visible and distinct
        // When sedimentBlendFactor is high, apply dirt color directly to look like normal dirt
        if(sedimentBlendFactor > 0.8){
            // Mostly covered with sediment - apply dirt color directly, no rock color
            finalcol = mix(finalcol, dirtcol, 0.9);
        } else {
            // Partially covered or no sediment - apply rock color strongly to make it clearly visible
            // Increase rock color strength significantly - rock should override base terrain color
            float rockColorStrength = clamp(rockVal * 2.0, 0.7, 1.0) * (1.0 - sedimentBlendFactor * 0.5);
            // Use a stronger mix - rock color should dominate when there's no sediment
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
  bool isRock = rockVal > 0.1; // Consistent with sediment shader threshold
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
  
  // Check if this is rock material (B channel > 0.1) and apply erosion resistance
  vec4 curTerrain = texture(readTerrain,curuv);
  float rockMaterialValue = curTerrain.z;
  bool isRock = rockMaterialValue > 0.1; // Consistent threshold for rock detection
  
  // Track base rock surface height (A channel stores the height of the rock surface
  // before any sediment was deposited on top)
  float baseRockSurfaceHeight = curTerrain.w;
  // If A channel is 0 or uninitialized and this is rock, initialize it to current height
  if (isRock && baseRockSurfaceHeight < 0.001) {
    baseRockSurfaceHeight = curTerrain.x;
  }
  
  // Rock should maintain constant resistance until fully converted to soil
  // u_RockErosionResistance: 0.0 = no resistance (erodes normally), 1.0 = maximum resistance (doesn't erode)
  // So we invert it: rockFactor = 1.0 - resistance (higher resistance = lower factor = less erosion)
  // Apply resistance based on rock material value - stronger rock = more resistance
  float rockStrength = clamp((rockMaterialValue - 0.1) / 0.9, 0.0, 1.0); // Normalize 0.1-1.0 to 0.0-1.0
  float rockFactor = isRock ? (1.0 - u_RockErosionResistance * rockStrength) : 1.0;
  
  // Check if there's sediment on top of rock
  // If current height is above base rock surface, there's sediment on top
  bool hasSedimentOnRock = isRock && curTerrain.x > baseRockSurfaceHeight + 0.001;
  
  // Check neighboring cells for rock to boost erosion in non-rock areas between rock sections
  // This creates crevices/valleys between rock areas
  // IMPORTANT: Don't boost erosion for recently converted soil (was rock) - this causes excessive sediment
  float neighborRockFactor = 1.0;
  float capacityBoost = 1.0; // Boost sediment capacity for soil between rock
  
  // Check if this was recently rock (to prevent boosting recently converted soil)
  // Use a lower threshold to catch more recently converted soil
  bool wasRecentlyRock = curTerrain.z > 0.05; // Lower threshold to prevent boosting recently converted soil
  
  if (!isRock && !wasRecentlyRock) {
    // Sample neighboring cells to see if any are rock
    vec4 topTerrain = texture(readTerrain, curuv + vec2(0.0, div));
    vec4 rightTerrain = texture(readTerrain, curuv + vec2(div, 0.0));
    vec4 bottomTerrain = texture(readTerrain, curuv + vec2(0.0, -div));
    vec4 leftTerrain = texture(readTerrain, curuv + vec2(-div, 0.0));
    
    int rockNeighbors = 0;
    
    // Check each neighbor for rock (use consistent threshold)
    if (topTerrain.z > 0.1) rockNeighbors++;
    if (rightTerrain.z > 0.1) rockNeighbors++;
    if (bottomTerrain.z > 0.1) rockNeighbors++;
    if (leftTerrain.z > 0.1) rockNeighbors++;
    
    // Moderate boost for soil between rock to create crevices
    // The more rock neighbors, the faster the soil should erode away
    // BUT: Only apply to soil that was never rock, not recently converted soil
    if (rockNeighbors > 0) {
      // Moderate erosion boost - soil between rock should erode faster but not excessively
      neighborRockFactor = 1.0 + float(rockNeighbors) * 0.5; // 1.5x to 3x erosion rate (reduced from 4x-13x)
      // Also boost capacity moderately so more material can be picked up
      capacityBoost = 1.0 + float(rockNeighbors) * 0.3; // 1.3x to 2.2x capacity boost (reduced from 3x-9x)
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
      // IMPORTANT: Rock produces less sediment when it erodes
      // Apply additional reduction to sediment output for rock erosion
      // Rock is harder and produces less fine sediment than soil
      float sedimentOutputFactor = erodingSedimentLayer ? 1.0 : effectiveCapacityRockFactor;
      outsedi = outsedi + changesedi * sedimentOutputFactor;
      
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
}`,vi=`#version 300 es
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


}`,Ti=`#version 300 es
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
`,Mi=`#version 300 es
precision highp float;

uniform vec2 u_PlanePos; // Our location in the virtual world displayed by the plane





out vec4 out_Col; // This is the final output color that you will see on your
                  // screen for the pixel that is currently being processed.

uniform float u_SimRes;





void main()
{


    out_Col = vec4(vec3(gl_FragCoord.z),1.f);
}
`,Di=`#version 300 es
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
}`;function Pi(n){const e=new K([new M(n.VERTEX_SHADER,Ft),new M(n.FRAGMENT_SHADER,ui)]),t=new K([new M(n.VERTEX_SHADER,li),new M(n.FRAGMENT_SHADER,fi)]),o=new K([new M(n.VERTEX_SHADER,ee),new M(n.FRAGMENT_SHADER,ci)]),f=new K([new M(n.VERTEX_SHADER,ee),new M(n.FRAGMENT_SHADER,di)]),s=new K([new M(n.VERTEX_SHADER,ee),new M(n.FRAGMENT_SHADER,hi)]),h=new K([new M(n.VERTEX_SHADER,ee),new M(n.FRAGMENT_SHADER,pi)]),u=new K([new M(n.VERTEX_SHADER,ee),new M(n.FRAGMENT_SHADER,mi)]),l=new K([new M(n.VERTEX_SHADER,ee),new M(n.FRAGMENT_SHADER,vi)]),m=new K([new M(n.VERTEX_SHADER,ee),new M(n.FRAGMENT_SHADER,Ti)]),T=new K([new M(n.VERTEX_SHADER,ee),new M(n.FRAGMENT_SHADER,Ei)]),w=new K([new M(n.VERTEX_SHADER,ee),new M(n.FRAGMENT_SHADER,Ri)]),p=new K([new M(n.VERTEX_SHADER,ee),new M(n.FRAGMENT_SHADER,bi)]),g=new K([new M(n.VERTEX_SHADER,wi),new M(n.FRAGMENT_SHADER,yi)]),d=new K([new M(n.VERTEX_SHADER,ee),new M(n.FRAGMENT_SHADER,gi)]),v=new K([new M(n.VERTEX_SHADER,ee),new M(n.FRAGMENT_SHADER,Fi)]),R=new K([new M(n.VERTEX_SHADER,ee),new M(n.FRAGMENT_SHADER,Ai)]),F=new K([new M(n.VERTEX_SHADER,Si),new M(n.FRAGMENT_SHADER,_i)]),D=new K([new M(n.VERTEX_SHADER,Ft),new M(n.FRAGMENT_SHADER,Mi)]),A=new K([new M(n.VERTEX_SHADER,ee),new M(n.FRAGMENT_SHADER,Di)]),k=new K([new M(n.VERTEX_SHADER,ee),new M(n.FRAGMENT_SHADER,Ui)]),_=new K([new M(n.VERTEX_SHADER,ee),new M(n.FRAGMENT_SHADER,xi)]);return{lambert:e,flat:t,noiseterrain:o,flow:f,waterhight:s,sediment:h,sediadvect:u,macCormack:l,rains:m,evaporation:T,average:w,clean:p,water:g,thermalterrainflux:d,thermalapply:v,maxslippageheight:R,shadowMapShader:F,sceneDepthShader:D,combinedShader:A,bilateralBlur:k,veladvect:_}}var r;Se(0,0);const c={tesselations:5,pipelen:.8,Kc:.06,Ks:.036,Kd:.006,timestep:.05,pipeAra:.6,ErosionMode:0,RainErosion:!1,RainErosionStrength:.2,RainErosionDropSize:2,EvaporationConstant:.003,VelocityMultiplier:1,RainDegree:4.5,AdvectionSpeedScaling:1,spawnposx:.5,spawnposy:.5,posTemp:Se(0,0),"Load Scene":Ht,"Pause/Resume":Ci,ResetTerrain:Bi,setTerrainRandom:ki,"Import Height Map":()=>{},"Clear Height Map":()=>{},SimulationSpeed:3,TerrainBaseMap:0,TerrainBaseType:0,TerrainBiomeType:1,TerrainScale:3.2,TerrainHeight:2,TerrainMask:0,TerrainDebug:0,WaterTransparency:.5,SedimentTrace:!0,ShowFlowTrace:!1,TerrainPlatte:1,SnowRange:0,ForestRange:0,brushType:2,brushSize:4,brushStrenth:.25,brushOperation:0,brushPressed:0,raycastMethod:"bvh",flattenTargetHeight:0,slopeStartPos:Se(0,0),slopeEndPos:Se(0,0),slopeActive:0,sourceCount:0,rockErosionResistance:.8,thermalTalusAngleScale:8,thermalRate:.5,thermalErosionScale:1,lightPosX:.4,lightPosY:.8,lightPosZ:-0,showScattering:!0,enableBilateralBlur:!0,AdvectionMethod:1,VelocityAdvectionMag:.2,SimulationResolution:b};let C,tn,At,X=null;function Ht(){C=new tr(j(0,0,0)),C.create(),tn=new pt(j(0,0,0),Se(1,1),18),tn.create(),At=new pt(j(0,0,0),Se(1,1),18),At.create()}function Ci(){Fr(!ot)}function Bi(){if(Ar(0),Pn(!0),c.SimulationResolution!=b){const n=Number(c.SimulationResolution);gr(n),Br(r,n),yr(n)}}function ki(){}function Hi(n,e,t,o,f,s,h,u,l,m,T,w,p,g,d){e.bindFramebuffer(e.FRAMEBUFFER,L),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Te,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT3,e.TEXTURE_2D,null,0),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,Z),e.drawBuffers([e.COLOR_ATTACHMENT0]),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.viewport(0,0,b,b),e.bindFramebuffer(e.FRAMEBUFFER,L),n.clear(),m.use(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,W),e.uniform1i(E(m.prog,"readTerrain"),0),e.uniform1f(E(m.prog,"raindeg"),c.RainDegree),n.render(t,m,[C]),e.bindFramebuffer(e.FRAMEBUFFER,null),Je(),e.bindFramebuffer(e.FRAMEBUFFER,L),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ln,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT3,e.TEXTURE_2D,null,0),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,Z),e.drawBuffers([e.COLOR_ATTACHMENT0]),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.viewport(0,0,b,b),e.bindFramebuffer(e.FRAMEBUFFER,L),n.clear(),o.use(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,W),e.uniform1i(E(o.prog,"readTerrain"),0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,Le),e.uniform1i(E(o.prog,"readFlux"),1),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,ne),e.uniform1i(E(o.prog,"readSedi"),2),n.render(t,o,[C]),e.bindFramebuffer(e.FRAMEBUFFER,null),Lr(),e.bindFramebuffer(e.FRAMEBUFFER,L),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Te,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,Ae,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT3,e.TEXTURE_2D,null,0),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,Z),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1]),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.viewport(0,0,b,b),e.bindFramebuffer(e.FRAMEBUFFER,L),n.clear(),f.use(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,W),e.uniform1i(E(f.prog,"readTerrain"),0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,Le),e.uniform1i(E(f.prog,"readFlux"),1),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,ne),e.uniform1i(E(f.prog,"readSedi"),2),e.activeTexture(e.TEXTURE3),e.bindTexture(e.TEXTURE_2D,Ee),e.uniform1i(E(f.prog,"readVel"),3),n.render(t,f,[C]),e.bindFramebuffer(e.FRAMEBUFFER,null),Je(),$n(),e.bindFramebuffer(e.FRAMEBUFFER,L),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Te,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,ke,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,Ke,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT3,e.TEXTURE_2D,Ae,0),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,Z),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1,e.COLOR_ATTACHMENT2,e.COLOR_ATTACHMENT3]),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.viewport(0,0,b,b),e.bindFramebuffer(e.FRAMEBUFFER,L),n.clear(),h.use(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,W),e.uniform1i(E(h.prog,"readTerrain"),0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,Ee),e.uniform1i(E(h.prog,"readVelocity"),1),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,ne),e.uniform1i(E(h.prog,"readSediment"),2),n.render(t,h,[C]),e.bindFramebuffer(e.FRAMEBUFFER,null),bt(),Je(),$n(),c.AdvectionMethod==1?(e.bindFramebuffer(e.FRAMEBUFFER,L),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,on,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,Ae,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,He,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT3,e.TEXTURE_2D,null,0),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,Z),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1,e.COLOR_ATTACHMENT2]),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.viewport(0,0,b,b),e.bindFramebuffer(e.FRAMEBUFFER,L),n.clear(),u.use(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Ee),e.uniform1i(E(u.prog,"vel"),0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,ne),e.uniform1i(E(u.prog,"sedi"),1),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,De),e.uniform1i(E(u.prog,"sediBlend"),2),e.activeTexture(e.TEXTURE3),e.bindTexture(e.TEXTURE_2D,W),e.uniform1i(E(u.prog,"terrain"),3),u.setFloat(1,"unif_advectMultiplier"),n.render(t,u,[C]),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,L),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Tn,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,Ae,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,He,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT3,e.TEXTURE_2D,null,0),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,Z),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1,e.COLOR_ATTACHMENT2]),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.viewport(0,0,b,b),e.bindFramebuffer(e.FRAMEBUFFER,L),n.clear(),u.use(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Ee),e.uniform1i(E(u.prog,"vel"),0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,on),e.uniform1i(E(u.prog,"sedi"),1),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,De),e.uniform1i(E(u.prog,"sediBlend"),2),e.activeTexture(e.TEXTURE3),e.bindTexture(e.TEXTURE_2D,W),e.uniform1i(E(u.prog,"terrain"),3),u.setFloat(-1,"unif_advectMultiplier"),n.render(t,u,[C]),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,L),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ke,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT3,e.TEXTURE_2D,null,0),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,Z),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1,e.COLOR_ATTACHMENT2]),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.viewport(0,0,b,b),e.bindFramebuffer(e.FRAMEBUFFER,L),n.clear(),l.use(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Ee),e.uniform1i(E(l.prog,"vel"),0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,ne),e.uniform1i(E(l.prog,"sedi"),1),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,on),e.uniform1i(E(l.prog,"sediadvecta"),2),e.activeTexture(e.TEXTURE3),e.bindTexture(e.TEXTURE_2D,Tn),e.uniform1i(E(l.prog,"sediadvectb"),3),n.render(t,l,[C]),e.bindFramebuffer(e.FRAMEBUFFER,null)):(e.bindFramebuffer(e.FRAMEBUFFER,L),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ke,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,Ae,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,He,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT3,e.TEXTURE_2D,null,0),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,Z),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1,e.COLOR_ATTACHMENT2]),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.viewport(0,0,b,b),e.bindFramebuffer(e.FRAMEBUFFER,L),n.clear(),u.use(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Ee),e.uniform1i(E(u.prog,"vel"),0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,ne),e.uniform1i(E(u.prog,"sedi"),1),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,De),e.uniform1i(E(u.prog,"sediBlend"),2),e.activeTexture(e.TEXTURE3),e.bindTexture(e.TEXTURE_2D,W),e.uniform1i(E(u.prog,"terrain"),3),u.setFloat(1,"unif_advectMultiplier"),n.render(t,u,[C]),e.bindFramebuffer(e.FRAMEBUFFER,null)),Or(),bt(),$n(),e.bindFramebuffer(e.FRAMEBUFFER,L),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,cn,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT3,e.TEXTURE_2D,null,0),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,Z),e.drawBuffers([e.COLOR_ATTACHMENT0]),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.viewport(0,0,b,b),e.bindFramebuffer(e.FRAMEBUFFER,L),n.clear(),d.use(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,W),e.uniform1i(E(d.prog,"readTerrain"),0),n.render(t,d,[C]),e.bindFramebuffer(e.FRAMEBUFFER,null),Nr(),e.bindFramebuffer(e.FRAMEBUFFER,L),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,fn,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT3,e.TEXTURE_2D,null,0),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,Z),e.drawBuffers([e.COLOR_ATTACHMENT0]),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.viewport(0,0,b,b),e.bindFramebuffer(e.FRAMEBUFFER,L),n.clear(),p.use(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,W),e.uniform1i(E(p.prog,"readTerrain"),0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,qe),e.uniform1i(E(p.prog,"readMaxSlippage"),1),n.render(t,p,[C]),e.bindFramebuffer(e.FRAMEBUFFER,null),Xr(),e.bindFramebuffer(e.FRAMEBUFFER,L),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Te,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT3,e.TEXTURE_2D,null,0),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,Z),e.drawBuffers([e.COLOR_ATTACHMENT0]),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.viewport(0,0,b,b),e.bindFramebuffer(e.FRAMEBUFFER,L),n.clear(),g.use(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,je),e.uniform1i(E(g.prog,"readTerrainFlux"),0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,W),e.uniform1i(E(g.prog,"readTerrain"),1),n.render(t,g,[C]),e.bindFramebuffer(e.FRAMEBUFFER,null),Je(),e.bindFramebuffer(e.FRAMEBUFFER,L),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Te,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT3,e.TEXTURE_2D,null,0),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,Z),e.drawBuffers([e.COLOR_ATTACHMENT0]),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.viewport(0,0,b,b),e.bindFramebuffer(e.FRAMEBUFFER,L),n.clear(),T.use(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,W),e.uniform1i(E(T.prog,"terrain"),0),e.uniform1f(E(T.prog,"evapod"),c.EvaporationConstant),n.render(t,T,[C]),e.bindFramebuffer(e.FRAMEBUFFER,null),Je(),e.bindFramebuffer(e.FRAMEBUFFER,L),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Te,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,Ke,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT2,e.TEXTURE_2D,null,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT3,e.TEXTURE_2D,null,0),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,Z),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1]),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.viewport(0,0,b,b),e.bindFramebuffer(e.FRAMEBUFFER,L),n.clear(),w.use(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,W),e.uniform1i(E(w.prog,"readTerrain"),0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,ne),e.uniform1i(E(w.prog,"readSedi"),1),n.render(t,w,[C]),e.bindFramebuffer(e.FRAMEBUFFER,null),Je()}function Li(n,e,t,o,f,s,h,u,l,m,T,w,p,g,d,v){return ot?!0:(Hi(g,d,v,e,t,o,f,s,h,u,l,m,T,w,p),!1)}function Oi(n,e,t){if(!n)return{x:0,y:0};const o=n.getBoundingClientRect();if(o.width<=0||o.height<=0)return{x:0,y:0};const f=(e-o.left)/o.width,s=(t-o.top)/o.height;return{x:f,y:s}}function Ni(n,e,t){const o=document.getElementById("canvas");if(o){const f=o.getBoundingClientRect();f.width>0&&f.height>0&&Qn(f.left+e,f.top+t)}}let ae;function Xi(){const n=It();n.setMode(0),n.domElement.style.position="absolute",n.domElement.style.left="0px",n.domElement.style.bottom="0px",n.domElement.style.top="auto",document.body.appendChild(n.domElement),lr(c);const e=document.getElementById("canvas");r=e.getContext("webgl2"),e.clientWidth,e.clientHeight;const{loadHeightMap:t,clearHeightMap:o}=Ir(r,b,c);c["Import Height Map"]=t,c["Clear Height Map"]=o,ae=Dt(),c.raycastMethod=ae.raycast.method;const f=ae.mouse.brushActivate==="LEFT"||ae.mouse.brushActivate===null&&ae.keys.brushActivate==="LEFT",s=new ir(j(-.18,.3,.6),j(0,0,0),ae.camera,f),h=Cr(c,ae,s),{onKeyDown:u,onKeyUp:l,onMouseDown:m,onMouseUp:T}=h;er(e,Ni),document.addEventListener("keydown",u,!1),document.addEventListener("keyup",l,!1),window.addEventListener("pointerdown",P=>{const re=["LEFT","MIDDLE","RIGHT"][P.button];console.log("[DEBUG] WINDOW pointerdown CAPTURE - button:",P.button,"buttonName:",re,"target:",P.target);const ye=P.target,xe=ye===e||ye.id==="canvas"||ye.closest("#canvas")===e;if(console.log("[DEBUG] WINDOW pointerdown - isCanvas:",xe,"target:",ye,"canvas:",e),xe&&sn(P.button,ae)==="brushActivate"){console.log("[DEBUG] WINDOW pointerdown - BRUSH ACTION, stopping propagation immediately"),Qn(P.clientX,P.clientY),P.preventDefault(),P.stopImmediatePropagation(),P.stopPropagation(),m(P);return}},!0),window.addEventListener("pointerup",P=>{console.log("[DEBUG] WINDOW pointerup CAPTURE - button:",P.button,"target:",P.target);const re=P.target;(re===e||re.id==="canvas"||re.closest("#canvas")===e)&&sn(P.button,ae)==="brushActivate"&&(console.log("[DEBUG] WINDOW pointerup - BRUSH ACTION, stopping propagation"),P.preventDefault(),P.stopImmediatePropagation(),P.stopPropagation(),T(P))},!0),window.addEventListener("pointermove",P=>{if(c.brushPressed===1){const re=P.target;if(re===e||re.id==="canvas"||re.closest("#canvas")===e){Qn(P.clientX,P.clientY);const xe=ae.modifiers.brushInvert;if(xe){const ge=mn(xe,P);if(ge&&an()===null)Cn(c.brushOperation),c.brushOperation=c.brushOperation===0?1:0,console.log("[DEBUG] Brush operation inverted on modifier (pointermove) to:",c.brushOperation===0?"Add":"Subtract");else if(!ge&&an()!==null){const Oe=an();Oe!==null&&(c.brushOperation=Oe,Cn(null)),console.log("[DEBUG] Brush operation restored on modifier release (pointermove) to:",c.brushOperation===0?"Add":"Subtract")}}}}},!0),window.addEventListener("pointercancel",P=>{c.brushPressed===1&&(console.log("[DEBUG] WINDOW pointercancel - deactivating brush"),c.brushPressed=0)},!0),e.addEventListener("wheel",P=>{const re=ae.modifiers.brushSizeScroll;if(!re)return;if(mn(re,P)){P.preventDefault(),P.stopPropagation(),P.stopImmediatePropagation();const ge=P.deltaY*.002,Oe=c.brushSize-ge;c.brushSize=Math.round(Math.max(.1,Math.min(20,Oe))*100)/100;const yn=window.brushSizeController;yn&&yn.updateDisplay();const gn=window.brushPalette;gn&&ve(gn,c)}},{capture:!0,passive:!1}),r||alert("WebGL 2 not supported!");var w=r.getSupportedExtensions();for(let P in w)console.log(P);r.getExtension("OES_texture_float_linear")||console.log("float texture not supported"),r.getExtension("OES_texture_float")||console.log("no float texutre!!!?? y am i here?"),r.getExtension("EXT_color_buffer_float")||console.log("cant render to float texture "),nr(r),Ht(),ae.mouse.brushActivate==="LEFT"||ae.mouse.brushActivate===null&&ae.keys.brushActivate;const p=new rr(e);p.setClearColor(0,0,0,0),r.enable(r.DEPTH_TEST),kr(r,b);const g=Pi(r),{lambert:d,flat:v,flow:R,waterhight:F,sediment:D,sediadvect:A,macCormack:k,rains:_,evaporation:z,average:B,clean:U,water:H,thermalterrainflux:O,thermalapply:Y,maxslippageheight:te,shadowMapShader:q,sceneDepthShader:Ue,combinedShader:_e,bilateralBlur:he,veladvect:ue}=g;X=g.noiseterrain;let pe=0;function En(){$(p,r,s,U,W,C,X),$(p,r,s,U,Ee,C,X),$(p,r,s,U,Le,C,X),$(p,r,s,U,je,C,X),$(p,r,s,U,fn,C,X),$(p,r,s,U,qe,C,X),$(p,r,s,U,cn,C,X),$(p,r,s,U,ne,C,X),$(p,r,s,U,Te,C,X),$(p,r,s,U,Ae,C,X),$(p,r,s,U,ln,C,X),$(p,r,s,U,ke,C,X),$(p,r,s,U,Ke,C,X),$(p,r,s,U,De,C,X),$(p,r,s,U,He,C,X),$(p,r,s,U,on,C,X),$(p,r,s,U,Tn,C,X)}const y=be(),S=be(),x=Dn(),G=Dn(),le=V(),$e=V(),we=Re(),Rn=be(),bn=be(),fe=V(),Hn=Re(),Ye=new Float32Array(en*2),wn=new Float32Array(en),Ln=new Float32Array(en);let st=0,On=-1,Nn=-1;function ut(){s.update(ae.camera);const P=Oi(e,Sn,_n);var re=P.x,ye=P.y;if(rt(y,s.projectionMatrix,s.viewMatrix),it(S,y),x[0]=2*re-1,x[1]=1-2*ye,x[2]=-1,x[3]=1,G[0]=2*re-1,G[1]=1-2*ye,G[2]=-0,G[3]=1,Un(x,x,S),Un(G,G,S),x[0]/=x[3],x[1]/=x[3],x[2]/=x[3],x[3]/=x[3],G[0]/=G[3],G[1]/=G[3],G[2]/=G[3],G[3]/=G[3],le[0]=G[0]-x[0],le[1]=G[1]-x[1],le[2]=G[2]-x[2],Pe(le,le),$e[0]=x[0],$e[1]=x[1],$e[2]=x[2],pe++,X.setTime(pe),X.setTerrainHeight(c.TerrainHeight),X.setTerrainScale(c.TerrainScale),X.setInt(c.TerrainMask,"u_TerrainMask"),r.uniform1i(E(X.prog,"u_terrainBaseType"),c.TerrainBaseType),Ct){if(En(),$(p,r,s,X,W,C,X),$(p,r,s,X,Te,C,X),We&&qn(null),Be&&(Be.dispose(),jn(null)),oe&&oe.length>=b*b*4){let N=!1;const me=Math.min(100,b*b);for(let ie=0;ie<me;ie++){const Ne=Math.floor(Math.random()*b*b)*4;if(oe[Ne]!==0){N=!0;break}}if(N)try{const ie=Et(b,oe,1);jn(ie);const Ne=new dt(ie,{strategy:ht,maxDepth:40,indirect:!1});qn(Ne),console.log("[BVH] Terrain BVH built successfully")}catch(ie){console.warn("[BVH] Failed to build BVH (heightmap may not be ready yet):",ie)}else console.log("[BVH] Heightmap buffer exists but has no data yet, will build when populated")}else console.log("[BVH] Heightmap buffer not ready yet, BVH will be built when available");Pn(!1)}if(!We&&!Be&&oe&&oe.length>=b*b*4){let N=!1;const me=Math.min(100,b*b);for(let ie=0;ie<me;ie++){const Ne=Math.floor(Math.random()*b*b)*4;if(oe[Ne]!==0){N=!0;break}}if(N)try{const ie=Et(b,oe,1);jn(ie);const Ne=new dt(ie,{strategy:ht,maxDepth:40,indirect:!1});qn(Ne),console.log("[BVH] Terrain BVH built (delayed initialization)")}catch(ie){console.warn("[BVH] Failed to build BVH:",ie)}}if(we[0]=-10,we[1]=-10,c.raycastMethod==="bvh"&&We&&Be){if(!Pt($e,le,We,Be,we)){const me=Re();xn($e,le,b,oe,me),we[0]=me[0],we[1]=me[1]}}else xn($e,le,b,oe,we);c.posTemp=we,v.setTime(pe),r.uniform1f(E(v.prog,"u_far"),s.far),r.uniform1f(E(v.prog,"u_near"),s.near),fe[0]=c.lightPosX,fe[1]=c.lightPosY,fe[2]=c.lightPosZ,r.uniform3fv(E(v.prog,"unif_LightPos"),fe),H.setWaterTransparency(c.WaterTransparency),H.setSimres(b),r.uniform1f(E(H.prog,"u_far"),s.far),r.uniform1f(E(H.prog,"u_near"),s.near),r.uniform3fv(E(H.prog,"unif_LightPos"),fe),d.setTerrainDebug(c.TerrainDebug),d.setMouseWorldPos(x),d.setMouseWorldDir(le),d.setBrushSize(c.brushSize),d.setBrushType(c.brushType),d.setBrushPos(we),d.setSimres(b),d.setFloat(c.SnowRange,"u_SnowRange"),d.setFloat(c.ForestRange,"u_ForestRange"),d.setInt(c.TerrainPlatte,"u_TerrainPlatte"),d.setInt(c.ShowFlowTrace?0:1,"u_FlowTrace"),d.setInt(c.SedimentTrace?0:1,"u_SedimentTrace");for(let N=0;N<en;N++)N<de.length?(Ye[N*2]=de[N].position[0],Ye[N*2+1]=de[N].position[1],wn[N]=de[N].size,Ln[N]=de[N].strength):(Ye[N*2]=0,Ye[N*2+1]=0,wn[N]=0,Ln[N]=0);d.setSourceCount(nn()),d.setSourcePositions(Ye),d.setSourceSizes(wn),fe[0]=c.lightPosX,fe[1]=c.lightPosY,fe[2]=c.lightPosZ,r.uniform3fv(E(d.prog,"unif_LightPos"),fe),Ue.setSimres(b),_.setMouseWorldPos(x),_.setMouseWorldDir(le),_.setBrushSize(c.brushSize),_.setBrushStrength(c.brushStrenth),_.setBrushType(c.brushType),_.setBrushPressed(c.brushPressed),_.setSimres(b);const xe={controls:c,simres:Number(b),HightMapCpuBuf:oe};Dr(we,xe),_.setFloat(c.flattenTargetHeight,"u_FlattenTargetHeight"),_.setVec2(c.slopeStartPos,"u_SlopeStartPos"),_.setVec2(c.slopeEndPos,"u_SlopeEndPos"),_.setInt(c.slopeActive,"u_SlopeActive"),_.setSourceCount(nn()),_.setSourcePositions(Ye),_.setSourceSizes(wn),_.setSourceStrengths(Ln),_.setBrushPos(we),_.setBrushOperation(c.brushOperation),Hn[0]=c.spawnposx,Hn[1]=c.spawnposy,_.setSpawnPos(Hn),_.setTime(pe),r.uniform1i(E(_.prog,"u_RainErosion"),c.RainErosion?1:0),_.setFloat(c.RainErosionStrength,"u_RainErosionStrength"),_.setFloat(c.RainErosionDropSize,"u_RainErosionDropSize"),R.setPipeLen(c.pipelen),R.setSimres(b),R.setTimestep(c.timestep),R.setPipeArea(c.pipeAra),F.setPipeLen(c.pipelen),F.setSimres(b),F.setTimestep(c.timestep),F.setPipeArea(c.pipeAra),F.setFloat(c.VelocityMultiplier,"u_VelMult"),F.setFloat(c.VelocityAdvectionMag,"u_VelAdvMag"),F.setTime(pe),D.setSimres(b),D.setPipeLen(c.pipelen),D.setKc(c.Kc),D.setKs(c.Ks),D.setKd(c.Kd),D.setRockErosionResistance(c.rockErosionResistance),D.setTimestep(c.timestep),D.setTime(pe),A.setSimres(b),A.setPipeLen(c.pipelen),A.setKc(c.Kc),A.setKs(c.Ks),A.setKd(c.Kd),A.setTimestep(c.timestep),A.setFloat(c.AdvectionSpeedScaling,"unif_advectionSpeedScale"),ue.setSimres(b),ue.setPipeLen(c.pipelen),ue.setKc(c.Kc),ue.setKs(c.Ks),ue.setKd(c.Kd),ue.setTimestep(c.timestep),k.setSimres(b),k.setPipeLen(c.pipelen),k.setKc(c.Kc),k.setKs(c.Ks),k.setKd(c.Kd),k.setTimestep(c.timestep),k.setFloat(c.AdvectionSpeedScaling,"unif_advectionSpeedScale"),O.setSimres(b),O.setPipeLen(c.pipelen),O.setTimestep(c.timestep),O.setPipeArea(c.pipeAra),r.uniform1f(E(O.prog,"unif_thermalRate"),c.thermalRate),Y.setSimres(b),Y.setPipeLen(c.pipelen),Y.setTimestep(c.timestep),Y.setPipeArea(c.pipeAra),r.uniform1f(E(Y.prog,"unif_thermalErosionScale"),c.thermalErosionScale),te.setSimres(b),te.setPipeLen(c.pipelen),te.setTimestep(c.timestep),te.setPipeArea(c.pipeAra),te.setFloat(c.thermalTalusAngleScale,"unif_TalusScale"),c.RainErosion?te.setInt(1,"unif_rainMode"):te.setInt(0,"unif_rainMode"),B.setSimres(b),B.setInt(c.ErosionMode,"unif_ErosionMode"),c.RainErosion?B.setInt(1,"unif_rainMode"):B.setInt(0,"unif_rainMode");const ge=c.brushPressed===1,Oe=Number(c.brushType)!==0,yn=ge&&st===0;Tr(),n.begin();for(let N=0;N<c.SimulationSpeed;N++)Li(at,R,F,ue,D,A,k,_,z,B,O,Y,te,p,r,s),Sr();const gn=On<0||Nn<0||Math.abs(Sn-On)+Math.abs(_n-Nn)>1;(yn||gn)&&wr(ge,Oe,b)&&(r.bindFramebuffer(r.FRAMEBUFFER,L),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,W,0),r.readBuffer(r.COLOR_ATTACHMENT0),r.readPixels(0,0,b,b,r.RGBA,r.FLOAT,oe),r.bindFramebuffer(r.FRAMEBUFFER,null),On=Sn,Nn=_n,!ge&&!Oe&&rn>=Bt&&Er()),st=ge?1:0,r.viewport(0,0,window.innerWidth,window.innerHeight),p.clear(),r.bindFramebuffer(r.FRAMEBUFFER,et),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Mn,0),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,nt),r.drawBuffers([r.COLOR_ATTACHMENT0]),r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindRenderbuffer(r.RENDERBUFFER,null),r.viewport(0,0,Qe,Qe),r.bindFramebuffer(r.FRAMEBUFFER,et),p.clear(),q.use(),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,W),r.uniform1i(E(q.prog,"hightmap"),0),r.activeTexture(r.TEXTURE1),r.bindTexture(r.TEXTURE_2D,ne),r.uniform1i(E(q.prog,"sedimap"),1),$t(bn,-1.6,1.6,-1.6,1.6,0,100),fe[0]=c.lightPosX,fe[1]=c.lightPosY,fe[2]=c.lightPosZ,Yn(Rn,fe,[0,0,0],[0,1,0]),r.uniformMatrix4fv(E(q.prog,"u_proj"),!1,bn),r.uniformMatrix4fv(E(q.prog,"u_view"),!1,Rn),q.setSimres(b),p.render(s,q,[tn]),r.bindFramebuffer(r.FRAMEBUFFER,null),Ue.use(),r.bindFramebuffer(r.FRAMEBUFFER,hn),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ce,0),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,Ge),r.drawBuffers([r.COLOR_ATTACHMENT0]),p.clear(),r.viewport(0,0,window.innerWidth,window.innerHeight),p.render(s,Ue,[tn]),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.FRAMEBUFFER,hn),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Bn,0),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT1,r.TEXTURE_2D,kn,0),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,Ge),r.drawBuffers([r.COLOR_ATTACHMENT0,r.COLOR_ATTACHMENT1]),p.clear(),d.use(),r.viewport(0,0,window.innerWidth,window.innerHeight),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,W);let Xn=E(d.prog,"hightmap");r.uniform1i(Xn,0),r.activeTexture(r.TEXTURE1),r.bindTexture(r.TEXTURE_2D,Ke);let zn=E(d.prog,"normap");r.uniform1i(zn,1),r.activeTexture(r.TEXTURE2),r.bindTexture(r.TEXTURE_2D,ne);let In=E(d.prog,"sedimap");r.uniform1i(In,2),r.activeTexture(r.TEXTURE3),r.bindTexture(r.TEXTURE_2D,Ee);let Lt=E(d.prog,"velmap");r.uniform1i(Lt,3),r.activeTexture(r.TEXTURE4),r.bindTexture(r.TEXTURE_2D,Le);let Ot=E(d.prog,"fluxmap");r.uniform1i(Ot,4),r.activeTexture(r.TEXTURE5),r.bindTexture(r.TEXTURE_2D,je);let Nt=E(d.prog,"terrainfluxmap");r.uniform1i(Nt,5),r.activeTexture(r.TEXTURE6),r.bindTexture(r.TEXTURE_2D,qe);let Xt=E(d.prog,"maxslippagemap");if(r.uniform1i(Xt,6),r.activeTexture(r.TEXTURE7),r.bindTexture(r.TEXTURE_2D,De),r.uniform1i(E(d.prog,"sediBlend"),7),r.activeTexture(r.TEXTURE8),r.bindTexture(r.TEXTURE_2D,Mn),r.uniform1i(E(d.prog,"shadowMap"),8),r.activeTexture(r.TEXTURE9),r.bindTexture(r.TEXTURE_2D,Ce),r.uniform1i(E(d.prog,"sceneDepth"),9),r.uniformMatrix4fv(E(d.prog,"u_sproj"),!1,bn),r.uniformMatrix4fv(E(d.prog,"u_sview"),!1,Rn),p.render(s,d,[tn]),r.enable(r.BLEND),r.blendFunc(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA),H.use(),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,W),Xn=E(H.prog,"hightmap"),r.uniform1i(Xn,0),r.activeTexture(r.TEXTURE1),r.bindTexture(r.TEXTURE_2D,Ke),zn=E(H.prog,"normap"),r.uniform1i(zn,1),r.activeTexture(r.TEXTURE2),r.bindTexture(r.TEXTURE_2D,ne),In=E(H.prog,"sedimap"),r.uniform1i(In,2),r.activeTexture(r.TEXTURE3),r.bindTexture(r.TEXTURE_2D,Ce),r.uniform1i(E(H.prog,"sceneDepth"),3),r.activeTexture(r.TEXTURE4),r.bindTexture(r.TEXTURE_2D,kn),r.uniform1i(E(H.prog,"colorReflection"),4),p.render(s,H,[tn]),r.bindFramebuffer(r.FRAMEBUFFER,null),r.blendFunc(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA),r.bindFramebuffer(r.FRAMEBUFFER,hn),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,pn,0),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,Ge),r.drawBuffers([r.COLOR_ATTACHMENT0]),p.clear(),r.viewport(0,0,window.innerWidth,window.innerHeight),v.use(),r.enable(r.DEPTH_TEST),r.depthFunc(r.LESS),r.enable(r.BLEND),r.blendFunc(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,ne),r.uniform1i(E(v.prog,"hightmap"),0),r.activeTexture(r.TEXTURE1),r.bindTexture(r.TEXTURE_2D,Ce),r.uniform1i(E(v.prog,"sceneDepth"),1),r.activeTexture(r.TEXTURE2),r.bindTexture(r.TEXTURE_2D,Mn),r.uniform1i(E(v.prog,"shadowMap"),2),r.uniformMatrix4fv(E(v.prog,"u_sproj"),!1,bn),r.uniformMatrix4fv(E(v.prog,"u_sview"),!1,Rn),r.uniform1i(E(v.prog,"u_showScattering"),c.showScattering?1:0),p.render(s,v,[C]),r.bindFramebuffer(r.FRAMEBUFFER,null),c.enableBilateralBlur){let N=4;for(let me=0;me<N;++me)r.bindFramebuffer(r.FRAMEBUFFER,hn),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,un,0),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,Ge),r.drawBuffers([r.COLOR_ATTACHMENT0]),p.clear(),he.use(),r.activeTexture(r.TEXTURE0),me==0?r.bindTexture(r.TEXTURE_2D,pn):r.bindTexture(r.TEXTURE_2D,vn),r.uniform1i(E(he.prog,"scatter_tex"),0),r.activeTexture(r.TEXTURE1),r.bindTexture(r.TEXTURE_2D,Ce),r.uniform1i(E(he.prog,"scene_depth"),1),r.uniform1f(E(he.prog,"u_far"),s.far),r.uniform1f(E(he.prog,"u_near"),s.near),r.uniform1i(E(he.prog,"u_isHorizontal"),me%2),p.render(s,he,[C]),zr(),r.bindFramebuffer(r.FRAMEBUFFER,null)}_e.use(),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,Bn),r.uniform1i(E(_e.prog,"color_tex"),0),r.activeTexture(r.TEXTURE1),c.enableBilateralBlur?r.bindTexture(r.TEXTURE_2D,un):r.bindTexture(r.TEXTURE_2D,pn),r.uniform1i(E(_e.prog,"bi_tex"),1),r.activeTexture(r.TEXTURE2),r.bindTexture(r.TEXTURE_2D,Ce),r.uniform1i(E(_e.prog,"sceneDepth_tex"),2),p.clear(),p.render(s,_e,[C]),r.disable(r.BLEND),n.end(),requestAnimationFrame(ut)}window.addEventListener("resize",function(){Hr(),p.setSize(window.innerWidth,window.innerHeight),s.setAspectRatio(window.innerWidth/window.innerHeight),s.updateProjectionMatrix()},!1),p.setSize(window.innerWidth,window.innerHeight),s.setAspectRatio(window.innerWidth/window.innerHeight),s.updateProjectionMatrix(),ut()}Xi();
//# sourceMappingURL=index-HD5UphNm.js.map
