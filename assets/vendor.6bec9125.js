function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function i(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e,n,o){if(t){const r=c(t,e,n,o);return t[0](r)}}function c(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function l(t,e,n,o,r,i,s){const a=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,i);if(a){const r=c(e,n,o,s);t.p(r,a)}}function u(e){return e&&i(e.destroy)?e.destroy:t}const f="undefined"!=typeof window;let d=f?()=>window.performance.now():()=>Date.now(),h=f?t=>requestAnimationFrame(t):t;const p=new Set;function m(t){p.forEach((e=>{e.c(t)||(p.delete(e),e.f())})),0!==p.size&&h(m)}function g(t){let e;return 0===p.size&&h(m),{promise:new Promise((n=>{p.add(e={c:t,f:n})})),abort(){p.delete(e)}}}let v=!1;function y(t,e,n,o){for(;t<e;){const r=t+(e-t>>1);n(r)<=o?t=r+1:e=r}return t}function _(t,e){v?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),o=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const t=y(1,r+1,(t=>e[n[t]].claim_order),e[c].claim_order)-1;o[c]=n[t]+1;const i=t+1;n[i]=c,r=Math.max(i,r)}const i=[],s=[];let a=e.length-1;for(let c=n[r]+1;0!=c;c=o[c-1]){for(i.push(e[c-1]);a>=c;a--)s.push(e[a]);a--}for(;a>=0;a--)s.push(e[a]);i.reverse(),s.sort(((t,e)=>t.claim_order-e.claim_order));for(let c=0,l=0;c<s.length;c++){for(;l<i.length&&s[c].claim_order>=i[l].claim_order;)l++;const e=l<i.length?i[l]:null;t.insertBefore(s[c],e)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function $(t,e,n){v&&!n?_(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function w(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function x(){return E(" ")}function k(){return E("")}function C(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function S(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function L(t){return Array.from(t.childNodes)}function M(t,e,n,o,r=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(e(i))return n(i),t.splice(o,1),r||(t.claim_info.last_index=o),i}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(e(i))return n(i),t.splice(o,1),r?t.claim_info.last_index--:t.claim_info.last_index=o,i}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function A(t,e,n,o){return M(t,(t=>t.nodeName===e),(t=>{const e=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];n[r.name]||e.push(r.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):w(e)))}function j(t,e){return M(t,(t=>3===t.nodeType),(t=>{t.data=""+e}),(()=>E(e)),!0)}function z(t){return j(t," ")}function O(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}const T=new Set;let N,B=0;function P(t,e,n,o,r,i,s,a=0){const c=16.666/o;let l="{\n";for(let g=0;g<=1;g+=c){const t=e+(n-e)*i(g);l+=100*g+`%{${s(t,1-t)}}\n`}const u=l+`100% {${s(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${a}`,d=t.ownerDocument;T.add(d);const h=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(w("style")).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[f]||(p[f]=!0,h.insertRule(`@keyframes ${f} ${u}`,h.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${o}ms linear ${r}ms 1 both`,B+=1,f}function R(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),B-=r,B||h((()=>{B||(T.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),T.clear())})))}function H(n,o,r,i){if(!o)return t;const s=n.getBoundingClientRect();if(o.left===s.left&&o.right===s.right&&o.top===s.top&&o.bottom===s.bottom)return t;const{delay:a=0,duration:c=300,easing:l=e,start:u=d()+a,end:f=u+c,tick:h=t,css:p}=r(n,{from:o,to:s},i);let m,v=!0,y=!1;function _(){p&&R(n,m),v=!1}return g((t=>{if(!y&&t>=u&&(y=!0),y&&t>=f&&(h(1,0),_()),!v)return!1;if(y){const e=0+1*l((t-u)/c);h(e,1-e)}return!0})),p&&(m=P(n,0,1,c,a,l,p)),a||(y=!0),h(0,1),_}function V(t){const e=getComputedStyle(t);if("absolute"!==e.position&&"fixed"!==e.position){const{width:n,height:o}=e,r=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=o,function(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const o=getComputedStyle(t),r="none"===o.transform?"":o.transform;t.style.transform=`${r} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}(t,r)}}function D(t){N=t}function q(t){(function(){if(!N)throw new Error("Function called outside component initialization");return N})().$$.on_mount.push(t)}function F(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const I=[],X=[],Y=[],G=[],J=Promise.resolve();let K=!1;function Q(t){Y.push(t)}let U=!1;const W=new Set;function Z(){if(!U){U=!0;do{for(let t=0;t<I.length;t+=1){const e=I[t];D(e),tt(e.$$)}for(D(null),I.length=0;X.length;)X.pop()();for(let t=0;t<Y.length;t+=1){const e=Y[t];W.has(e)||(W.add(e),e())}Y.length=0}while(I.length);for(;G.length;)G.pop()();K=!1,U=!1,W.clear()}}function tt(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Q)}}let et;function nt(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const ot=new Set;let rt;function it(){rt={r:0,c:[],p:rt}}function st(){rt.r||r(rt.c),rt=rt.p}function at(t,e){t&&t.i&&(ot.delete(t),t.i(e))}function ct(t,e,n,o){if(t&&t.o){if(ot.has(t))return;ot.add(t),rt.c.push((()=>{ot.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const lt={duration:0};function ut(n,o,s){let a,c=o(n,s),l=!0;const u=rt;function f(){const{delay:o=0,duration:i=300,easing:s=e,tick:f=t,css:h}=c||lt;h&&(a=P(n,1,0,i,o,s,h));const p=d()+o,m=p+i;Q((()=>nt(n,!1,"start"))),g((t=>{if(l){if(t>=m)return f(0,1),nt(n,!1,"end"),--u.r||r(u.c),!1;if(t>=p){const e=s((t-p)/i);f(1-e,e)}}return l}))}return u.r+=1,i(c)?(et||(et=Promise.resolve(),et.then((()=>{et=null}))),et).then((()=>{c=c(),f()})):f(),{end(t){t&&c.tick&&c.tick(1,0),l&&(a&&R(n,a),l=!1)}}}function ft(t,e){t.f(),function(t,e){ct(t,1,1,(()=>{e.delete(t.key)}))}(t,e)}function dt(t,e,n,o,r,i,s,a,c,l,u,f){let d=t.length,h=i.length,p=d;const m={};for(;p--;)m[t[p].key]=p;const g=[],v=new Map,y=new Map;for(p=h;p--;){const t=f(r,i,p),a=n(t);let c=s.get(a);c?o&&c.p(t,e):(c=l(a,t),c.c()),v.set(a,g[p]=c),a in m&&y.set(a,Math.abs(p-m[a]))}const _=new Set,$=new Set;function b(t){at(t,1),t.m(a,u),s.set(t.key,t),u=t.first,h--}for(;d&&h;){const e=g[h-1],n=t[d-1],o=e.key,r=n.key;e===n?(u=e.first,d--,h--):v.has(r)?!s.has(o)||_.has(o)?b(e):$.has(r)?d--:y.get(o)>y.get(r)?($.add(o),b(e)):(_.add(r),d--):(c(n,s),d--)}for(;d--;){const e=t[d];v.has(e.key)||c(e,s)}for(;h;)b(g[h-1]);return g}function ht(t){t&&t.c()}function pt(t,e){t&&t.l(e)}function mt(t,e,o,s){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,o),s||Q((()=>{const e=c.map(n).filter(i);l?l.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(Q)}function gt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function vt(t,e){-1===t.$$.dirty[0]&&(I.push(t),K||(K=!0,J.then(Z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function yt(e,n,i,s,a,c,l=[-1]){const u=N;D(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:o(),dirty:l,skip_bound:!1};let d=!1;if(f.ctx=i?i(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),d&&vt(e,t)),n})):[],f.update(),d=!0,r(f.before_update),f.fragment=!!s&&s(f.ctx),n.target){if(n.hydrate){v=!0;const t=L(n.target);f.fragment&&f.fragment.l(t),t.forEach(b)}else f.fragment&&f.fragment.c();n.intro&&at(e.$$.fragment),mt(e,n.target,n.anchor,n.customElement),v=!1,Z()}D(u)}class _t{$destroy(){gt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var $t,bt,wt,Et={exports:{}};$t=Et,bt=Object.assign||function(t){for(var e,n=1;n<arguments.length;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},wt=function(t,e){if(t){"undefined"!=typeof window&&function(){function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}"function"!=typeof window.CustomEvent&&(t.prototype=window.Event.prototype,window.CustomEvent=t)}(),e||(e={}),e=bt({},{minHorizontal:10,minVertical:10,deltaHorizontal:3,deltaVertical:5,preventScroll:!1,lockAxis:!0,touch:!0,mouse:!0},e);var n=[],o=!1,r=function(){o=!0},i=function(t){o=!1,a(t)},s=function(t){o&&(t.changedTouches=[{clientX:t.clientX,clientY:t.clientY}],c(t))};e.mouse&&(t.addEventListener("mousedown",r),t.addEventListener("mouseup",i),t.addEventListener("mousemove",s));var a=function(o){var r=Math.abs,i=Math.max,s=Math.min;if(n.length){for(var a="function"==typeof TouchEvent&&o instanceof TouchEvent,c=[],l=[],u={top:!1,right:!1,bottom:!1,left:!1},f=0;f<n.length;f++)c.push(n[f].x),l.push(n[f].y);var d=c[0],h=c[c.length-1],p=l[0],m=l[l.length-1],g={x:[d,h],y:[p,m]};if(1<n.length){var v={detail:bt({touch:a,target:o.target},g)},y=new CustomEvent("swiperelease",v);t.dispatchEvent(y)}var _=c[0]-c[c.length-1],$="none";$=0<_?"left":"right";var b=s.apply(Math,c),w=i.apply(Math,c);if(r(_)>=e.minHorizontal&&("left"==$?r(b-c[c.length-1])<=e.deltaHorizontal&&(u.left=!0):"right"==$&&r(w-c[c.length-1])<=e.deltaHorizontal&&(u.right=!0)),$="none",$=0<(_=l[0]-l[l.length-1])?"top":"bottom",b=s.apply(Math,l),w=i.apply(Math,l),r(_)>=e.minVertical&&("top"==$?r(b-l[l.length-1])<=e.deltaVertical&&(u.top=!0):"bottom"==$&&r(w-l[l.length-1])<=e.deltaVertical&&(u.bottom=!0)),n=[],u.top||u.right||u.bottom||u.left){e.lockAxis&&((u.left||u.right)&&r(d-h)>r(p-m)?u.top=u.bottom=!1:(u.top||u.bottom)&&r(d-h)<r(p-m)&&(u.left=u.right=!1));var E={detail:bt({directions:u,touch:a,target:o.target},g)},x=new CustomEvent("swipe",E);t.dispatchEvent(x)}else{var k=new CustomEvent("swipecancel",{detail:bt({touch:a,target:o.target},g)});t.dispatchEvent(k)}}},c=function(o){var r=o.changedTouches[0];if(n.push({x:r.clientX,y:r.clientY}),1<n.length){var i={detail:{x:[n[0].x,n[n.length-1].x],y:[n[0].y,n[n.length-1].y],touch:"function"==typeof TouchEvent&&o instanceof TouchEvent,target:o.target}},s=new CustomEvent("swiping",i);(!0===e.preventScroll||"function"==typeof e.preventScroll&&e.preventScroll(s))&&o.preventDefault(),t.dispatchEvent(s)}},l=!1;try{var u=Object.defineProperty({},"passive",{get:function(){l={passive:!e.preventScroll}}});window.addEventListener("testPassive",null,u),window.removeEventListener("testPassive",null,u)}catch(f){}return e.touch&&(t.addEventListener("touchmove",c,l),t.addEventListener("touchend",a)),{off:function(){t.removeEventListener("touchmove",c,l),t.removeEventListener("touchend",a),t.removeEventListener("mousedown",r),t.removeEventListener("mouseup",i),t.removeEventListener("mousemove",s)}}}},$t.exports=wt,$t.exports.default=wt;var xt=Et.exports;function kt(t){const e=t-1;return e*e*e+1}function Ct(t,{delay:e=0,duration:n=400,easing:o=kt,x:r=0,y:i=0,opacity:s=0}={}){const a=getComputedStyle(t),c=+a.opacity,l="none"===a.transform?"":a.transform,u=c*(1-s);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${l} translate(${(1-t)*r}px, ${(1-t)*i}px);\n\t\t\topacity: ${c-u*e}`}}export{V as A,H as B,gt as C,k as D,E,j as F,it as G,dt as H,st as I,q as J,ft as K,O as L,t as M,_t as S,A as a,L as b,a as c,b as d,w as e,S as f,$ as g,u as h,yt as i,ct as j,ut as k,C as l,xt as m,F as n,Ct as o,kt as p,ht as q,r,s,at as t,l as u,x as v,pt as w,z as x,mt as y,_ as z};