import{S as s,i as a,s as t,e,a as r,t as c,c as n,b as l,d as i,f as o,g as h,h as u,j as m,k as f,l as d,m as p,n as v,o as $,r as g,p as y,q as k,u as E,v as w,w as I,x,y as D,z as V,A as j,B as b}from"./vendor.70bb99e0.js";function A(s){let a,t,y,k,E,w,I,x,D,V,j,b,A,M,B,S,q,z=s[0].name+"",H=s[0].gender+"",N=s[0].species+"",C=s[0].status+"";return{c(){a=e("div"),t=e("div"),k=r(),E=e("div"),w=e("h2"),I=c(z),x=r(),D=e("div"),V=c(H),j=c(", "),b=c(N),A=r(),M=e("div"),B=c(C),this.h()},l(s){a=n(s,"DIV",{class:!0,style:!0});var e=l(a);t=n(e,"DIV",{class:!0,style:!0}),l(t).forEach(i),k=o(e),E=n(e,"DIV",{class:!0});var r=l(E);w=n(r,"H2",{class:!0});var c=l(w);I=h(c,z),c.forEach(i),x=o(r),D=n(r,"DIV",{class:!0});var u=l(D);V=h(u,H),j=h(u,", "),b=h(u,N),u.forEach(i),A=o(r),M=n(r,"DIV",{class:!0});var m=l(M);B=h(m,C),m.forEach(i),r.forEach(i),e.forEach(i),this.h()},h(){u(t,"class","avatar svelte-4km8hs"),u(t,"style",y=`--avatar: url(${s[0].image});`),u(w,"class","name svelte-4km8hs"),u(D,"class","species svelte-4km8hs"),u(M,"class","status svelte-4km8hs"),u(E,"class","description svelte-4km8hs"),u(a,"class","card svelte-4km8hs"),u(a,"style",s[1])},m(e,r){m(e,a,r),f(a,t),f(a,k),f(a,E),f(E,w),f(w,I),f(E,x),f(E,D),f(D,V),f(D,j),f(D,b),f(E,A),f(E,M),f(M,B),S||(q=[d(s[2].call(null,a)),p(a,"swiping",s[3]),p(a,"swiperelease",s[5]),p(a,"swipecancel",s[4])],S=!0)},p(s,[e]){1&e&&y!==(y=`--avatar: url(${s[0].image});`)&&u(t,"style",y),1&e&&z!==(z=s[0].name+"")&&v(I,z),1&e&&H!==(H=s[0].gender+"")&&v(V,H),1&e&&N!==(N=s[0].species+"")&&v(b,N),1&e&&C!==(C=s[0].status+"")&&v(B,C),2&e&&u(a,"style",s[1])},i:$,o:$,d(s){s&&i(a),S=!1,g(q)}}}function M(s,a,t){let{character:e}=a;function r(s){t(1,n=s.join("; "))}function c(){r(["transition: transform 0.15s linear"])}let n="";return s.$$set=s=>{"character"in s&&t(0,e=s.character)},[e,n,function(s){const a=y(s,{preventScroll:!0,lockAxis:!0});return{destroy:()=>{a.off()}}},function(s){const[a,t]=s.detail.x,e=t-a,c=15*e/150;r([`transform: rotate(${"right"===(e>0?"right":"left")?Math.min(c,30):Math.max(c,-30)}deg)`])},function(){c()},function(){c()}]}class B extends s{constructor(s){super(),a(this,s,M,A,t,{character:0})}}function S(s){let a,t;return a=new B({props:{character:s[0]}}),{c(){k(a.$$.fragment)},l(s){E(a.$$.fragment,s)},m(s,e){w(a,s,e),t=!0},p(s,t){const e={};1&t&&(e.character=s[0]),a.$set(e)},i(s){t||(I(a.$$.fragment,s),t=!0)},o(s){x(a.$$.fragment,s),t=!1},d(s){D(a,s)}}}function q(s){let a,t,r=s[0]&&S(s);return{c(){a=e("main"),r&&r.c(),this.h()},l(s){a=n(s,"MAIN",{class:!0});var t=l(a);r&&r.l(t),t.forEach(i),this.h()},h(){u(a,"class","svelte-126gyf6")},m(s,e){m(s,a,e),r&&r.m(a,null),t=!0},p(s,[t]){s[0]?r?(r.p(s,t),1&t&&I(r,1)):(r=S(s),r.c(),I(r,1),r.m(a,null)):r&&(b(),x(r,1,1,(()=>{r=null})),V())},i(s){t||(I(r),t=!0)},o(s){x(r),t=!1},d(s){s&&i(a),r&&r.d()}}}function z(s,a,t){let e,r=[];return j((async()=>{t(1,r=await fetch("https://rickandmortyapi.com/api/character").then((s=>s.json())).then((({results:s})=>s)))})),s.$$.update=()=>{2&s.$$.dirty&&t(0,e=r[0])},[e,r]}new class extends s{constructor(s){super(),a(this,s,z,q,t,{})}}({target:document.getElementById("app")});
