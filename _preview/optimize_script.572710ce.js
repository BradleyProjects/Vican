import{r as a}from"./entry.2314a846.js";const l=(e,t=1)=>{document.readyState==="complete"?setTimeout(()=>e(),t):window.addEventListener("load",function(){setTimeout(()=>e(),t)})};function u(e){const t=document.getElementsByTagName("script")[0];return new Promise(function(o,r){var i;let n=document.createElement("script");n.src=e,n.type="text/javascript",n.async=!1,n.onload=()=>{o(e)},n.onerror=()=>{r(e)},(i=t.parentNode)==null||i.insertBefore(n,t)})}function m(e,t){let o=[];e.forEach(function(r){o.push(u(r))}),Promise.all(o).then(function(){t()}).catch(function(r){console.log(r+" failed to load!")})}const s=a(),p={beforeMount(e,t){var r;const o=t.value;try{s.value=new IntersectionObserver((n,i)=>{n.forEach(c=>{c.isIntersecting&&o&&(o(),i.unobserve(c.target))})}),(r=s.value)==null||r.observe(e)}catch{o&&o()}},beforeUnmount(e){var t;s&&((t=s.value)==null||t.unobserve(e))}};export{p as V,m as i,l as o};
