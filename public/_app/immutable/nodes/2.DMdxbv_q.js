import{s as I,n as b,o as B}from"../chunks/scheduler.BvLojk_z.js";import{S as $,i as j,e as f,s as C,c as m,a as g,d as p,b as E,g as q,h as v,j as u,k as F,o as A,t as S,f as L,p as w}from"../chunks/index.CwUMNuAj.js";function x(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function _(l,e,n){const a=l.slice();return a[5]=e[n],a[7]=n,a}function y(l){let e,n=l[5]+"",a,i;return{c(){e=f("span"),a=S(n),i=C(),this.h()},l(h){e=m(h,"SPAN",{class:!0,style:!0});var c=g(e);a=L(c,n),i=E(c),c.forEach(p),this.h()},h(){v(e,"class","rainbow-letter svelte-qs8j8c"),w(e,"color",l[1][l[0][l[7]]])},m(h,c){u(h,e,c),F(e,a),F(e,i)},p(h,c){c&1&&w(e,"color",h[1][h[0][h[7]]])},d(h){h&&p(e)}}}function M(l){let e,n,a,i,h="part 1",c=x(l[2]),o=[];for(let t=0;t<c.length;t+=1)o[t]=y(_(l,c,t));return{c(){e=f("div"),n=f("b");for(let t=0;t<o.length;t+=1)o[t].c();a=C(),i=f("a"),i.textContent=h,this.h()},l(t){e=m(t,"DIV",{class:!0});var r=g(e);n=m(r,"B",{});var s=g(n);for(let d=0;d<o.length;d+=1)o[d].l(s);s.forEach(p),r.forEach(p),a=E(t),i=m(t,"A",{href:!0,"data-svelte-h":!0}),q(i)!=="svelte-1pc28rm"&&(i.textContent=h),this.h()},h(){v(e,"class","rainbow-text svelte-qs8j8c"),v(i,"href","/bit")},m(t,r){u(t,e,r),F(e,n);for(let s=0;s<o.length;s+=1)o[s]&&o[s].m(n,null);u(t,a,r),u(t,i,r)},p(t,[r]){if(r&7){c=x(t[2]);let s;for(s=0;s<c.length;s+=1){const d=_(t,c,s);o[s]?o[s].p(d,r):(o[s]=y(d),o[s].c(),o[s].m(n,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=c.length}},i:b,o:b,d(t){t&&(p(e),p(a),p(i)),A(o,t)}}}function P(){const l=["/elmo.png","/elmo3.webp"];let e=0;const n=document.createElement("img");n.src="/elmo.png",n.style.position="absolute",n.style.width="100px",document.body.appendChild(n),window.addEventListener("mousemove",a=>{n.style.left=a.clientX+"px",n.style.top=a.clientY+"px"}),window.addEventListener("click",()=>{n.style.width="200px",e=(e+1)%l.length,n.src=l[e]})}function D(l,e,n){let a=["#FF0000","#FF7F00","#FFFF00","#00FF00","#0000FF","#4B0082","#8B00FF"],i="Michael Barr".split(""),h,c=i.map((t,r)=>r%a.length);const o=()=>{n(0,c=c.map(t=>(t+1)%a.length))};return B(()=>(h=setInterval(o,200),()=>clearInterval(h))),P(),[c,a,i]}class X extends ${constructor(e){super(),j(this,e,D,M,I,{})}}export{X as component};
