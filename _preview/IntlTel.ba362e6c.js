import{o}from"./helpers.8b825d94.js";import{g as r}from"./entry.2314a846.js";function p(t){return o("stcdn.leadconnectorhq.com/intl-tel-input/intlTelInput.min.js",()=>{t()})}function u(t,n){const e={src:"https://stcdn.leadconnectorhq.com/libphonenumber/1.10.17/libphonenumber-min.js",async:!0,type:"text/javascript"},i={src:"https://stcdn.leadconnectorhq.com/intl-tel-input/17.0.12/js/utils.min.js",async:!0,type:"text/javascript"},s={rel:"stylesheet",href:"https://stcdn.leadconnectorhq.com/intl-tel-input/17.0.12/css/intlTelInput.min.css",...n!=null&&n.intlTelFunc?{onload:n.intlTelFunc}:{}};return r(()=>({script:t.value?[e,i]:[e],link:t.value?[s]:[]}))}export{p as i,u as l};
