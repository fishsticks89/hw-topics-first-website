import{s as b,n as u}from"../chunks/scheduler.BvLojk_z.js";import{S as C,i as $,e as d,s as v,t as y,c as f,a as _,d as i,b as h,f as I,g as j,h as x,j as o,k as D,l as E}from"../chunks/index.CwUMNuAj.js";function S(r){let a,l,e,c,p,n,m="Hover Me";return{c(){a=d("div"),l=v(),e=d("div"),c=y(r[0]),p=v(),n=d("button"),n.textContent=m,this.h()},l(t){a=f(t,"DIV",{class:!0}),_(a).forEach(i),l=h(t),e=f(t,"DIV",{});var s=_(e);c=I(s,r[0]),s.forEach(i),p=h(t),n=f(t,"BUTTON",{class:!0,"data-svelte-h":!0}),j(n)!=="svelte-5ryjap"&&(n.textContent=m),this.h()},h(){x(a,"class","box"),x(n,"class","btn")},m(t,s){o(t,a,s),o(t,l,s),o(t,e,s),D(e,c),o(t,p,s),o(t,n,s)},p(t,[s]){s&1&&E(c,t[0])},i:u,o:u,d(t){t&&(i(a),i(l),i(e),i(p),i(n))}}}function T(r,a,l){let e=0;return setInterval(()=>{l(0,e++,e)},200),[e]}class q extends C{constructor(a){super(),$(this,a,T,S,b,{})}}export{q as component};