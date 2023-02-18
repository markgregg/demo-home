(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const y={};function Ue(e){y.context=e}const je=(e,t)=>e===t,xe={equals:je};let Te=He;const T=1,G=2,Ce={owned:null,cleanups:null,context:null,owner:null};var x=null;let A=null,d=null,h=null,w=null,ee=0;function Pe(e,t){const n=d,o=x,i=e.length===0,s=i?Ce:{owned:null,cleanups:null,context:null,owner:t||o},f=i?e:()=>e(()=>N(()=>K(s)));x=s,d=null;try{return I(f,!0)}finally{d=n,x=o}}function E(e,t){t=t?Object.assign({},xe,t):xe;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},o=i=>(typeof i=="function"&&(i=i(n.value)),Ae(n,i));return[De.bind(n),o]}function O(e,t,n){const o=Ee(e,t,!1,T);J(o)}function Me(e,t,n){Te=qe;const o=Ee(e,t,!1,T);o.user=!0,w?w.push(o):J(o)}function N(e){const t=d;d=null;try{return e()}finally{d=t}}function Be(e){Me(()=>N(e))}function De(){const e=A;if(this.sources&&(this.state||e))if(this.state===T||e)J(this);else{const t=h;h=null,I(()=>q(this),!1),h=t}if(d){const t=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(t)):(d.sources=[this],d.sourceSlots=[t]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function Ae(e,t,n){let o=e.value;return(!e.comparator||!e.comparator(o,t))&&(e.value=t,e.observers&&e.observers.length&&I(()=>{for(let i=0;i<e.observers.length;i+=1){const s=e.observers[i],f=A&&A.running;f&&A.disposed.has(s),(f&&!s.tState||!f&&!s.state)&&(s.pure?h.push(s):w.push(s),s.observers&&Oe(s)),f||(s.state=T)}if(h.length>1e6)throw h=[],new Error},!1)),t}function J(e){if(!e.fn)return;K(e);const t=x,n=d,o=ee;d=x=e,Ge(e,e.value,o),d=n,x=t}function Ge(e,t,n){let o;try{o=e.fn(t)}catch(i){e.pure&&(e.state=T,e.owned&&e.owned.forEach(K),e.owned=null),Le(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Ae(e,o):e.value=o,e.updatedAt=n)}function Ee(e,t,n,o=T,i){const s={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:x,context:null,pure:n};return x===null||x!==Ce&&(x.owned?x.owned.push(s):x.owned=[s]),s}function F(e){const t=A;if(e.state===0||t)return;if(e.state===G||t)return q(e);if(e.suspense&&N(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ee);)(e.state||t)&&n.push(e);for(let o=n.length-1;o>=0;o--)if(e=n[o],e.state===T||t)J(e);else if(e.state===G||t){const i=h;h=null,I(()=>q(e,n[0]),!1),h=i}}function I(e,t){if(h)return e();let n=!1;t||(h=[]),w?n=!0:w=[],ee++;try{const o=e();return Fe(n),o}catch(o){h||(w=null),h=null,Le(o)}}function Fe(e){if(h&&(He(h),h=null),e)return;const t=w;w=null,t.length&&I(()=>Te(t),!1)}function He(e){for(let t=0;t<e.length;t++)F(e[t])}function qe(e){let t,n=0;for(t=0;t<e.length;t++){const o=e[t];o.user?e[n++]=o:F(o)}for(y.context&&Ue(),t=0;t<n;t++)F(e[t])}function q(e,t){const n=A;e.state=0;for(let o=0;o<e.sources.length;o+=1){const i=e.sources[o];i.sources&&(i.state===T||n?i!==t&&F(i):(i.state===G||n)&&q(i,t))}}function Oe(e){const t=A;for(let n=0;n<e.observers.length;n+=1){const o=e.observers[n];(!o.state||t)&&(o.state=G,o.pure?h.push(o):w.push(o),o.observers&&Oe(o))}}function K(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),o=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const s=i.pop(),f=n.observerSlots.pop();o<i.length&&(s.sourceSlots[f]=o,i[o]=s,n.observerSlots[o]=f)}}if(e.owned){for(t=0;t<e.owned.length;t++)K(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Ve(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Le(e){throw e=Ve(e),e}function Je(e,t){return N(()=>e(t||{}))}function Ke(e,t,n){let o=n.length,i=t.length,s=o,f=0,l=0,v=t[i-1].nextSibling,u=null;for(;f<i||l<s;){if(t[f]===n[l]){f++,l++;continue}for(;t[i-1]===n[s-1];)i--,s--;if(i===f){const m=s<o?l?n[l-1].nextSibling:n[s-l]:v;for(;l<s;)e.insertBefore(n[l++],m)}else if(s===l)for(;f<i;)(!u||!u.has(t[f]))&&t[f].remove(),f++;else if(t[f]===n[s-1]&&n[l]===t[i-1]){const m=t[--i].nextSibling;e.insertBefore(n[l++],t[f++].nextSibling),e.insertBefore(n[--s],m),t[i]=n[s]}else{if(!u){u=new Map;let b=l;for(;b<s;)u.set(n[b],b++)}const m=u.get(t[f]);if(m!=null)if(l<m&&m<s){let b=f,L=1,U;for(;++b<i&&b<s&&!((U=u.get(t[b]))==null||U!==m+L);)L++;if(L>m-l){const j=t[f];for(;l<m;)e.insertBefore(n[l++],j)}else e.replaceChild(n[l++],t[f++])}else f++;else t[f++].remove()}}}const be="_$DX_DELEGATE";function Qe(e,t,n,o={}){let i;return Pe(s=>{i=s,t===document?e():k(t,e(),t.firstChild?null:void 0,n)},o.owner),()=>{i(),t.textContent=""}}function ke(e,t,n){const o=document.createElement("template");o.innerHTML=e;let i=o.content.firstChild;return n&&(i=i.firstChild),i}function We(e,t=window.document){const n=t[be]||(t[be]=new Set);for(let o=0,i=e.length;o<i;o++){const s=e[o];n.has(s)||(n.add(s),t.addEventListener(s,ze))}}function C(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function g(e,t){t==null?e.removeAttribute("class"):e.className=t}function Xe(e,t,n){if(!t)return n?C(e,"style"):t;const o=e.style;if(typeof t=="string")return o.cssText=t;typeof n=="string"&&(o.cssText=n=void 0),n||(n={}),t||(t={});let i,s;for(s in n)t[s]==null&&o.removeProperty(s),delete n[s];for(s in t)i=t[s],i!==n[s]&&(o.setProperty(s,i),n[s]=i);return n}function ye(e,t,n){return N(()=>e(t,n))}function k(e,t,n,o){if(n!==void 0&&!o&&(o=[]),typeof t!="function")return V(e,t,o,n);O(i=>V(e,t(),i,n),o)}function ze(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),y.registry&&!y.done&&(y.done=!0,document.querySelectorAll("[id^=pl-]").forEach(o=>{for(;o&&o.nodeType!==8&&o.nodeValue!=="pl-"+e;){let i=o.nextSibling;o.remove(),o=i}o&&o.remove()}));n;){const o=n[t];if(o&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?o.call(n,i,e):o.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function V(e,t,n,o,i){for(y.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,f=o!==void 0;if(e=f&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(y.context)return n;if(s==="number"&&(t=t.toString()),f){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=H(e,n,o,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean"){if(y.context)return n;n=H(e,n,o)}else{if(s==="function")return O(()=>{let l=t();for(;typeof l=="function";)l=l();n=V(e,l,n,o)}),()=>n;if(Array.isArray(t)){const l=[],v=n&&Array.isArray(n);if(Z(l,t,n,i))return O(()=>n=V(e,l,n,o,!0)),()=>n;if(y.context){if(!l.length)return n;for(let u=0;u<l.length;u++)if(l[u].parentNode)return n=l}if(l.length===0){if(n=H(e,n,o),f)return n}else v?n.length===0?we(e,l,o):Ke(e,n,l):(n&&H(e),we(e,l));n=l}else if(t instanceof Node){if(y.context&&t.parentNode)return n=f?[t]:t;if(Array.isArray(n)){if(f)return n=H(e,n,o,t);H(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Z(e,t,n,o){let i=!1;for(let s=0,f=t.length;s<f;s++){let l=t[s],v=n&&n[s];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))i=Z(e,l,v)||i;else if(typeof l=="function")if(o){for(;typeof l=="function";)l=l();i=Z(e,Array.isArray(l)?l:[l],Array.isArray(v)?v:[v])||i}else e.push(l),i=!0;else{const u=String(l);v&&v.nodeType===3&&v.data===u?e.push(v):e.push(document.createTextNode(u))}}return i}function we(e,t,n=null){for(let o=0,i=t.length;o<i;o++)e.insertBefore(t[o],n)}function H(e,t,n,o){if(n===void 0)return e.textContent="";const i=o||document.createTextNode("");if(t.length){let s=!1;for(let f=t.length-1;f>=0;f--){const l=t[f];if(i!==l){const v=l.parentNode===e;!s&&!f?v?e.replaceChild(i,l):e.insertBefore(i,n):v&&l.remove()}else s=!0}}else e.insertBefore(i,n);return[i]}const $e=""+new URL("desktop-e158e1cb.jpg",import.meta.url).href,Ye=""+new URL("ag-grid-98bee16e.png",import.meta.url).href,Ze=""+new URL("select-91514577.png",import.meta.url).href,et=""+new URL("table-7340e4bd.png",import.meta.url).href,tt=""+new URL("javascript-74cc3698.png",import.meta.url).href,nt=""+new URL("ag-grid - mobile-0bffce3a.png",import.meta.url).href,ot=""+new URL("select - mobile-c50da479.png",import.meta.url).href,it=""+new URL("table - mobile-d095ff1d.png",import.meta.url).href,st=""+new URL("javascript - mobile-f36e3e5a.png",import.meta.url).href,lt="_frame_1oxmv_1",rt="_page_1oxmv_9",ft="_title_1oxmv_18",ct="_primary_1oxmv_27",ut="_desktopImage_1oxmv_33",at="_screen_1oxmv_39",dt="_optionTextContainer_1oxmv_47",vt="_revolvingText_1oxmv_55",gt="_titleReflection_1oxmv_65",ht="_reflection_1oxmv_80",_t="_reflectionImage_1oxmv_86",pt="_overlay_1oxmv_98",mt="_screenReflection_1oxmv_107",xt="_optionTextContainerReflection_1oxmv_115",bt="_revolvingTextReflection_1oxmv_124",yt="_option1_1oxmv_137",wt="_option2_1oxmv_156",$t="_option3_1oxmv_174",Rt="_option4_1oxmv_193",St="_option1Reflection_1oxmv_211",Tt="_option1ReflectionHover_1oxmv_225",Ct="_option2Reflection_1oxmv_240",At="_option2ReflectionHover_1oxmv_254",Et="_option3Reflection_1oxmv_269",Ht="_option3ReflectionHover_1oxmv_283",Ot="_option4Reflection_1oxmv_299",Lt="_option4ReflectionHover_1oxmv_313",c={frame:lt,page:rt,title:ft,primary:ct,desktopImage:ut,screen:at,optionTextContainer:dt,revolvingText:vt,"text-animation":"_text-animation_1oxmv_1",titleReflection:gt,reflection:ht,reflectionImage:_t,overlay:pt,screenReflection:mt,optionTextContainerReflection:xt,revolvingTextReflection:bt,"text-animation-reflection":"_text-animation-reflection_1oxmv_1",option1:yt,option2:wt,option3:$t,option4:Rt,option1Reflection:St,option1ReflectionHover:Tt,option2Reflection:Ct,option2ReflectionHover:At,option3Reflection:Et,option3ReflectionHover:Ht,option4Reflection:Ot,option4ReflectionHover:Lt},kt=ke(`<div><div><div><h1>Mark's Demo Page</h1><img alt="main" object-fit="contain"><div><div><p></p></div></div></div><div><h1>Mark's Demo Page</h1><img alt="main-reflection"><div><div><p></p></div></div><div></div></div></div></div>`),Re=ke("<img>"),Se=[{index:1,image:Ze,mobileImage:ot,alt:"select",style:c.option1,reflStyle:c.option1Reflection,reflHoverstyle:c.option1ReflectionHover},{index:2,image:Ye,mobileImage:nt,alt:"agGrid",style:c.option2,reflStyle:c.option2Reflection,reflHoverstyle:c.option2ReflectionHover},{index:3,image:et,mobileImage:it,alt:"table",style:c.option3,reflStyle:c.option3Reflection,reflHoverstyle:c.option3ReflectionHover},{index:4,image:tt,mobileImage:st,alt:"javascript",style:c.option4,reflStyle:c.option4Reflection,reflHoverstyle:c.option4ReflectionHover}],Nt=()=>{let e,t;const[n,o]=E(),[i,s]=E(),[f,l]=E(),[v,u]=E(""),[m,b]=E(0),[L,U]=E(0);Be(()=>{if(t&&e){const p=()=>{t&&e&&o(t.clientHeight-e.clientHeight)};s(new ResizeObserver(p)),l(new ResizeObserver(p)),i()?.observe(e),f()?.observe(t),p()}b(0)});const j=p=>{switch(b(p),p){case 1:u("Functionally rich SolidJs Select control.");break;case 2:u("A powerful quick filter for React and Ag-Grid.");break;case 3:u("A virtualised container with customisable scrollbar.");break;case 4:u("A Code viewer for SolidJs.");break;default:u("Select one of the above options to view demos.");break}},Ne=p=>{U(p),setTimeout(()=>{switch(p){case 1:window.location.href="https://markgregg.github.io/solidjs-select/";break;case 2:window.location.assign("https://markgregg.github.io/ag-grid-quick-filter/");break;case 3:window.location.assign("https://markgregg.github.io/solidjs-virtualisation/");break;case 4:window.location.assign("https://markgregg.github.io/solidjs-show-code/");break}},900)},te=()=>window.matchMedia("only screen and (max-width: 600px)").matches;return(()=>{const p=kt.cloneNode(!0),ne=p.firstChild,P=ne.firstChild,oe=P.firstChild,Q=oe.nextSibling,M=Q.nextSibling,W=M.firstChild,B=W.firstChild,X=P.nextSibling,ie=X.firstChild,z=ie.nextSibling,Y=z.nextSibling,se=Y.firstChild,le=se.firstChild,Ie=Y.nextSibling;C(Q,"src",$e);const re=t;typeof re=="function"?ye(re,M):t=M;const fe=e;return typeof fe=="function"?ye(fe,B):e=B,k(B,v),k(P,()=>Se.map(r=>(()=>{const _=Re.cloneNode(!0);return _.addEventListener("mouseleave",()=>j(0)),_.addEventListener("mouseenter",()=>j(r.index)),_.$$click=()=>Ne(r.index),O(a=>{const $=r.style,R=te()?r.mobileImage:r.image,S=r.alt,D=L()===r.index?{width:"100%",height:"200%",top:"0px",left:"0px","z-index":99}:{};return $!==a._v$17&&g(_,a._v$17=$),R!==a._v$18&&C(_,"src",a._v$18=R),S!==a._v$19&&C(_,"alt",a._v$19=S),a._v$20=Xe(_,D,a._v$20),a},{_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0}),_})()),null),C(z,"src",$e),k(le,v),k(X,()=>Se.map(r=>(()=>{const _=Re.cloneNode(!0);return O(a=>{const $=m()===r.index?r.reflHoverstyle:r.reflStyle,R=te()?r.mobileImage:r.image,S=r.alt;return $!==a._v$21&&g(_,a._v$21=$),R!==a._v$22&&C(_,"src",a._v$22=R),S!==a._v$23&&C(_,"alt",a._v$23=S),a},{_v$21:void 0,_v$22:void 0,_v$23:void 0}),_})()),null),O(r=>{const _=c.frame,a=c.page,$=c.primary,R=c.title,S=c.desktopImage,D=c.screen,ce=c.optionTextContainer,ue=n()?`${n()}px`:"92%",ae=c.revolvingText,de=c.reflection,ve=c.titleReflection,ge=c.reflectionImage,he=c.screenReflection,_e=c.optionTextContainerReflection,pe=c.revolvingTextReflection,me=c.overlay;return _!==r._v$&&g(p,r._v$=_),a!==r._v$2&&g(ne,r._v$2=a),$!==r._v$3&&g(P,r._v$3=$),R!==r._v$4&&g(oe,r._v$4=R),S!==r._v$5&&g(Q,r._v$5=S),D!==r._v$6&&g(M,r._v$6=D),ce!==r._v$7&&g(W,r._v$7=ce),ue!==r._v$8&&W.style.setProperty("top",r._v$8=ue),ae!==r._v$9&&g(B,r._v$9=ae),de!==r._v$10&&g(X,r._v$10=de),ve!==r._v$11&&g(ie,r._v$11=ve),ge!==r._v$12&&g(z,r._v$12=ge),he!==r._v$13&&g(Y,r._v$13=he),_e!==r._v$14&&g(se,r._v$14=_e),pe!==r._v$15&&g(le,r._v$15=pe),me!==r._v$16&&g(Ie,r._v$16=me),r},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0}),p})()};We(["click"]);const It=document.getElementById("root");Qe(()=>Je(Nt,{}),It);