import{u as p}from"./composables.4457b5f6.js";import{d as a}from"./entry.2314a846.js";const S=e=>Object.fromEntries(Object.entries(e).filter(([,t])=>t!==void 0)),g=(e,t)=>(n,r)=>(p(()=>e({...S(n),...r.attrs},r)),()=>{var o,i;return t?(i=(o=r.slots).default)==null?void 0:i.call(o):null}),s={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String};a({name:"NoScript",inheritAttrs:!1,props:{...s,title:String,body:Boolean,renderPriority:[String,Number]},setup:g((e,{slots:t})=>{var o;const n={...e},r=(((o=t.default)==null?void 0:o.call(t))||[]).filter(({children:i})=>i).map(({children:i})=>i).join("");return r&&(n.children=r),{noscript:[n]}})});a({name:"Link",inheritAttrs:!1,props:{...s,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:g(e=>({link:[e]}))});a({name:"Base",inheritAttrs:!1,props:{...s,href:String,target:String},setup:g(e=>({base:e}))});a({name:"Title",inheritAttrs:!1,setup:g((e,{slots:t})=>{var r,o,i;return{title:((i=(o=(r=t.default)==null?void 0:r.call(t))==null?void 0:o[0])==null?void 0:i.children)||null}})});a({name:"Meta",inheritAttrs:!1,props:{...s,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:g(e=>{const t={...e};return t.httpEquiv&&(t["http-equiv"]=t.httpEquiv,delete t.httpEquiv),{meta:[t]}})});const m=a({name:"Style",inheritAttrs:!1,props:{...s,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:g((e,{slots:t})=>{var o,i,l;const n={...e},r=(l=(i=(o=t.default)==null?void 0:o.call(t))==null?void 0:i[0])==null?void 0:l.children;return r&&(n.children=r),{style:[n]}})});a({name:"Head",inheritAttrs:!1,setup:(e,t)=>()=>{var n,r;return(r=(n=t.slots).default)==null?void 0:r.call(n)}});a({name:"Html",inheritAttrs:!1,props:{...s,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:g(e=>({htmlAttrs:e}),!0)});a({name:"Body",inheritAttrs:!1,props:{...s,renderPriority:[String,Number]},setup:g(e=>({bodyAttrs:e}),!0)});export{m as S};
