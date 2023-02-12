(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const b={},ge=(e,t)=>e===t,ne={equals:ge};let ve=ue;const C=1,j=2,fe={owned:null,cleanups:null,context:null,owner:null};var y=null;let k=null,d=null,h=null,T=null,M=0;function ye(e,t){const n=d,o=y,i=e.length===0,s=i?fe:{owned:null,cleanups:null,context:null,owner:t||o},r=i?e:()=>e(()=>V(()=>I(s)));y=s,d=null;try{return L(r,!0)}finally{d=n,y=o}}function F(e,t){t=t?Object.assign({},ne,t):ne;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},o=i=>(typeof i=="function"&&(i=i(n.value)),ce(n,i));return[me.bind(n),o]}function H(e,t,n){const o=xe(e,t,!1,C);J(o)}function V(e){const t=d;d=null;try{return e()}finally{d=t}}function me(){const e=k;if(this.sources&&(this.state||e))if(this.state===C||e)J(this);else{const t=h;h=null,L(()=>B(this),!1),h=t}if(d){const t=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(t)):(d.sources=[this],d.sourceSlots=[t]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function ce(e,t,n){let o=e.value;return(!e.comparator||!e.comparator(o,t))&&(e.value=t,e.observers&&e.observers.length&&L(()=>{for(let i=0;i<e.observers.length;i+=1){const s=e.observers[i],r=k&&k.running;r&&k.disposed.has(s),(r&&!s.tState||!r&&!s.state)&&(s.pure?h.push(s):T.push(s),s.observers&&de(s)),r||(s.state=C)}if(h.length>1e6)throw h=[],new Error},!1)),t}function J(e){if(!e.fn)return;I(e);const t=y,n=d,o=M;d=y=e,we(e,e.value,o),d=n,y=t}function we(e,t,n){let o;try{o=e.fn(t)}catch(i){e.pure&&(e.state=C,e.owned&&e.owned.forEach(I),e.owned=null),pe(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ce(e,o):e.value=o,e.updatedAt=n)}function xe(e,t,n,o=C,i){const s={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:y,context:null,pure:n};return y===null||y!==fe&&(y.owned?y.owned.push(s):y.owned=[s]),s}function ae(e){const t=k;if(e.state===0||t)return;if(e.state===j||t)return B(e);if(e.suspense&&V(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<M);)(e.state||t)&&n.push(e);for(let o=n.length-1;o>=0;o--)if(e=n[o],e.state===C||t)J(e);else if(e.state===j||t){const i=h;h=null,L(()=>B(e,n[0]),!1),h=i}}function L(e,t){if(h)return e();let n=!1;t||(h=[]),T?n=!0:T=[],M++;try{const o=e();return $e(n),o}catch(o){h||(T=null),h=null,pe(o)}}function $e(e){if(h&&(ue(h),h=null),e)return;const t=T;T=null,t.length&&L(()=>ve(t),!1)}function ue(e){for(let t=0;t<e.length;t++)ae(e[t])}function B(e,t){const n=k;e.state=0;for(let o=0;o<e.sources.length;o+=1){const i=e.sources[o];i.sources&&(i.state===C||n?i!==t&&ae(i):(i.state===j||n)&&B(i,t))}}function de(e){const t=k;for(let n=0;n<e.observers.length;n+=1){const o=e.observers[n];(!o.state||t)&&(o.state=j,o.pure?h.push(o):T.push(o),o.observers&&de(o))}}function I(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),o=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const s=i.pop(),r=n.observerSlots.pop();o<i.length&&(s.sourceSlots[r]=o,i[o]=s,n.observerSlots[o]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)I(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function be(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function pe(e){throw e=be(e),e}function Re(e,t){return V(()=>e(t||{}))}function Se(e,t,n){let o=n.length,i=t.length,s=o,r=0,l=0,c=t[i-1].nextSibling,p=null;for(;r<i||l<s;){if(t[r]===n[l]){r++,l++;continue}for(;t[i-1]===n[s-1];)i--,s--;if(i===r){const g=s<o?l?n[l-1].nextSibling:n[s-l]:c;for(;l<s;)e.insertBefore(n[l++],g)}else if(s===l)for(;r<i;)(!p||!p.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[s-1]&&n[l]===t[i-1]){const g=t[--i].nextSibling;e.insertBefore(n[l++],t[r++].nextSibling),e.insertBefore(n[--s],g),t[i]=n[s]}else{if(!p){p=new Map;let m=l;for(;m<s;)p.set(n[m],m++)}const g=p.get(t[r]);if(g!=null)if(l<g&&g<s){let m=r,R=1,A;for(;++m<i&&m<s&&!((A=p.get(t[m]))==null||A!==g+R);)R++;if(R>g-l){const O=t[r];for(;l<g;)e.insertBefore(n[l++],O)}else e.replaceChild(n[l++],t[r++])}else r++;else t[r++].remove()}}}const oe="_$DX_DELEGATE";function ke(e,t,n,o={}){let i;return ye(s=>{i=s,t===document?e():N(t,e(),t.firstChild?null:void 0,n)},o.owner),()=>{i(),t.textContent=""}}function he(e,t,n){const o=document.createElement("template");o.innerHTML=e;let i=o.content.firstChild;return n&&(i=i.firstChild),i}function Te(e,t=window.document){const n=t[oe]||(t[oe]=new Set);for(let o=0,i=e.length;o<i;o++){const s=e[o];n.has(s)||(n.add(s),t.addEventListener(s,Ae))}}function S(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function v(e,t){t==null?e.removeAttribute("class"):e.className=t}function Ce(e,t,n){if(!t)return n?S(e,"style"):t;const o=e.style;if(typeof t=="string")return o.cssText=t;typeof n=="string"&&(o.cssText=n=void 0),n||(n={}),t||(t={});let i,s;for(s in n)t[s]==null&&o.removeProperty(s),delete n[s];for(s in t)i=t[s],i!==n[s]&&(o.setProperty(s,i),n[s]=i);return n}function N(e,t,n,o){if(n!==void 0&&!o&&(o=[]),typeof t!="function")return D(e,t,o,n);H(i=>D(e,t(),i,n),o)}function Ae(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),b.registry&&!b.done&&(b.done=!0,document.querySelectorAll("[id^=pl-]").forEach(o=>{for(;o&&o.nodeType!==8&&o.nodeValue!=="pl-"+e;){let i=o.nextSibling;o.remove(),o=i}o&&o.remove()}));n;){const o=n[t];if(o&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?o.call(n,i,e):o.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function D(e,t,n,o,i){for(b.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,r=o!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(b.context)return n;if(s==="number"&&(t=t.toString()),r){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=E(e,n,o,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean"){if(b.context)return n;n=E(e,n,o)}else{if(s==="function")return H(()=>{let l=t();for(;typeof l=="function";)l=l();n=D(e,l,n,o)}),()=>n;if(Array.isArray(t)){const l=[],c=n&&Array.isArray(n);if(G(l,t,n,i))return H(()=>n=D(e,l,n,o,!0)),()=>n;if(b.context){if(!l.length)return n;for(let p=0;p<l.length;p++)if(l[p].parentNode)return n=l}if(l.length===0){if(n=E(e,n,o),r)return n}else c?n.length===0?ie(e,l,o):Se(e,n,l):(n&&E(e),ie(e,l));n=l}else if(t instanceof Node){if(b.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=E(e,n,o,t);E(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function G(e,t,n,o){let i=!1;for(let s=0,r=t.length;s<r;s++){let l=t[s],c=n&&n[s];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))i=G(e,l,c)||i;else if(typeof l=="function")if(o){for(;typeof l=="function";)l=l();i=G(e,Array.isArray(l)?l:[l],Array.isArray(c)?c:[c])||i}else e.push(l),i=!0;else{const p=String(l);c&&c.nodeType===3&&c.data===p?e.push(c):e.push(document.createTextNode(p))}}return i}function ie(e,t,n=null){for(let o=0,i=t.length;o<i;o++)e.insertBefore(t[o],n)}function E(e,t,n,o){if(n===void 0)return e.textContent="";const i=o||document.createTextNode("");if(t.length){let s=!1;for(let r=t.length-1;r>=0;r--){const l=t[r];if(i!==l){const c=l.parentNode===e;!s&&!r?c?e.replaceChild(i,l):e.insertBefore(i,n):c&&l.remove()}else s=!0}}else e.insertBefore(i,n);return[i]}const se=""+new URL("desktop-e158e1cb.jpg",import.meta.url).href,Ee=""+new URL("ag-grid-387f998f.png",import.meta.url).href,He=""+new URL("select-23782809.png",import.meta.url).href,Ne=""+new URL("table-31ffd57d.png",import.meta.url).href,Le=""+new URL("javascript-849f3786.png",import.meta.url).href,Oe="_frame_1ak13_1",Pe="_page_1ak13_9",Ue="_title_1ak13_16",je="_container_1ak13_25",Be="_desktopImage_1ak13_30",De="_reflection_1ak13_36",Ie="_overlay_1ak13_52",qe="_option1_1ak13_63",Fe="_option2_1ak13_81",Ge="_option3_1ak13_99",Me="_option4_1ak13_117",Ve="_optionTextContainer_1ak13_135",Je="_optionText_1ak13_135",Ke="_titleReflection_1ak13_150",Qe="_option1Reflection_1ak13_164",We="_option1ReflectionHover_1ak13_178",Xe="_option2Reflection_1ak13_193",Ye="_option2ReflectionHover_1ak13_207",Ze="_option3Reflection_1ak13_222",ze="_option3ReflectionHover_1ak13_236",et="_option4Reflection_1ak13_251",tt="_option4ReflectionHover_1ak13_265",nt="_optionTextReflectionContainer_1ak13_281",ot="_optionTextReflection_1ak13_281",a={frame:Oe,page:Pe,title:Ue,container:je,desktopImage:Be,reflection:De,overlay:Ie,option1:qe,option2:Fe,option3:Ge,option4:Me,optionTextContainer:Ve,optionText:Je,"text-animation":"_text-animation_1ak13_1",titleReflection:Ke,option1Reflection:Qe,option1ReflectionHover:We,option2Reflection:Xe,option2ReflectionHover:Ye,option3Reflection:Ze,option3ReflectionHover:ze,option4Reflection:et,option4ReflectionHover:tt,optionTextReflectionContainer:nt,optionTextReflection:ot,"text-animation-reflection":"_text-animation-reflection_1ak13_1"},it=he(`<div><div><div><h1>Mark's Demo Page</h1><img alt="main"><div><img alt="main-reflection"><div></div></div><div><p></p></div><h1>Mark's Demo Page</h1><div><p></p></div></div></div></div>`),le=he("<img>"),re=[{index:1,image:He,alt:"select",style:a.option1,reflStyle:a.option1Reflection,reflHoverstyle:a.option1ReflectionHover},{index:2,image:Ee,alt:"agGrid",style:a.option2,reflStyle:a.option2Reflection,reflHoverstyle:a.option2ReflectionHover},{index:3,image:Ne,alt:"table",style:a.option3,reflStyle:a.option3Reflection,reflHoverstyle:a.option3ReflectionHover},{index:4,image:Le,alt:"javascript",style:a.option4,reflStyle:a.option4Reflection,reflHoverstyle:a.option4ReflectionHover}],st=()=>{const[e,t]=F(""),[n,o]=F(0),[i,s]=F(0),r=c=>{switch(o(c),c){case 1:t("SolidJs Select control.");break;case 2:t("Ag-Grid Universal Filter for React.");break;case 3:t("SolidJs Virtualisation.");break;case 4:t("SolidJs Code Viewer.");break;default:t("Select one of the above options to view demos.");break}},l=c=>{s(c),setTimeout(()=>{switch(c){case 1:window.location.href="https://markgregg.github.io/solidjs-select/";break;case 2:window.location.assign("https://markgregg.github.io/ag-grid-universal-filter/");break;case 3:window.location.assign("https://markgregg.github.io/solidjs-select/");break;case 4:window.location.assign("https://markgregg.github.io/solidjs-select/");break}},900)};return(()=>{const c=it.cloneNode(!0),p=c.firstChild,g=p.firstChild,m=g.firstChild,R=m.nextSibling,A=R.nextSibling,O=A.firstChild,_e=O.nextSibling,P=A.nextSibling,K=P.firstChild,Q=P.nextSibling,q=Q.nextSibling,W=q.firstChild;return S(R,"src",se),S(O,"src",se),N(g,()=>re.map(f=>(()=>{const _=le.cloneNode(!0);return _.addEventListener("mouseleave",()=>r(0)),_.addEventListener("mouseenter",()=>r(f.index)),_.$$click=()=>l(f.index),H(u=>{const w=f.style,x=f.image,$=f.alt,U=i()===f.index?{width:"100%",height:"100%",top:"0px",left:"0px","z-index":99}:{};return w!==u._v$13&&v(_,u._v$13=w),x!==u._v$14&&S(_,"src",u._v$14=x),$!==u._v$15&&S(_,"alt",u._v$15=$),u._v$16=Ce(_,U,u._v$16),u},{_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0}),_})()),P),N(K,e),N(g,()=>re.map(f=>(()=>{const _=le.cloneNode(!0);return H(u=>{const w=n()===f.index?f.reflHoverstyle:f.reflStyle,x=f.image,$=f.alt;return w!==u._v$17&&v(_,u._v$17=w),x!==u._v$18&&S(_,"src",u._v$18=x),$!==u._v$19&&S(_,"alt",u._v$19=$),u},{_v$17:void 0,_v$18:void 0,_v$19:void 0}),_})()),q),N(W,e),H(f=>{const _=a.frame,u=a.page,w=a.container,x=a.title,$=a.desktopImage,U=a.reflection,X=a.overlay,Y=a.optionTextContainer,Z=a.optionText,z=a.titleReflection,ee=a.optionTextReflectionContainer,te=a.optionTextReflection;return _!==f._v$&&v(c,f._v$=_),u!==f._v$2&&v(p,f._v$2=u),w!==f._v$3&&v(g,f._v$3=w),x!==f._v$4&&v(m,f._v$4=x),$!==f._v$5&&v(R,f._v$5=$),U!==f._v$6&&v(A,f._v$6=U),X!==f._v$7&&v(_e,f._v$7=X),Y!==f._v$8&&v(P,f._v$8=Y),Z!==f._v$9&&v(K,f._v$9=Z),z!==f._v$10&&v(Q,f._v$10=z),ee!==f._v$11&&v(q,f._v$11=ee),te!==f._v$12&&v(W,f._v$12=te),f},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0}),c})()};Te(["click"]);const lt=document.getElementById("root");ke(()=>Re(st,{}),lt);
