import{u as _}from"./composables.4457b5f6.js";import{d as q,U as S,T as U,g as v,H as M,k as O,I as R,o as j,a as y,c as x,h as c,e as D,L as f}from"./entry.2314a846.js";import{a as W}from"./v4.5d18cd4f.js";/* empty css            */import N from"./CalendarComponent.2e4a589e.js";import{_ as T}from"./CalendarComponentv3.vue_vue_type_style_index_0_lang.855c7d8e.js";import{i as $,c as B}from"./Attributions.021b3c62.js";import{W as P}from"./HLConst.c4c5e8b3.js";import{i as z}from"./utils.b31cbc82.js";import{s as A}from"./index.f3ab2538.js";const aa=q({__name:"CalendarCompNew",props:["shouldUseSlug","calendarData","calendarElementClass","redirect","funnelPreview"],emits:["on-submit"],async setup(d,{emit:E}){let g,C;const u=d;S(),_({script:[{src:P.IFRAME_RESIZE,async:!0,type:"text/javascript"},{src:P.IFRAME_PIXEL,async:!0,type:"text/javascript"}]});const n=U({urlParams:void 0,url:void 0,referrer:void 0,directWidget:!0,stickyContactData:void 0,stickyContactFingerprint:void 0}),h=v(()=>{var i,r;if(!((i=l.value)!=null&&i.calendarData))throw f({statusCode:404,statusMessage:"Page Not Found"});const a={services:[],calendarProvider:{},eventId:void 0,calendarEvent:void 0},s=Object.keys(l.value.calendarData),e=l.value.calendarData[s[0]];return a.services.push(e.calendar),(e==null?void 0:e.widget_type)==="classic"?e:(a.calendarProvider=((r=e.provider)==null?void 0:r._data)||{},a.calendarProvider.startDayOfWeek=e.calendar.startDayOfWeek,a.calendarProvider.country=e.calendar.country,a.calendarProvider.timezone=e.calendar.timezone,a.calendarProvider.use24hFormat=e.calendar.use24hFormat,a.calendarProvider.language=e.calendar.language,a.calendarProvider.disableContactTimezone=e.calendar.disableContactTimezone,t.query.event_id&&(a.eventId=t.query.event_id,a.calendarEvent=e.calendar.calendarEvent),a)}),t=M(),b=t.query.notrack,I=v(()=>{var e;if(!((e=l.value)!=null&&e.calendarData))throw f({statusCode:404,statusMessage:"Page Not Found"});const a=Object.keys(l.value.calendarData),s=l.value.calendarData[a[0]];return t.query.widget_type||s.calendar.widget_type}),w=()=>{E("on-submit")},F=O(),{data:l}=([g,C]=R(async()=>W(u.calendarElementClass||"calendarData",async a=>{if(u.calendarData)return{calendarData:u.calendarData,notrack:!1,lang:"en"};const{error:s}=a;try{let e=t.params.slug;if(e&&e[0]==="/"&&(e=e.substring(1)),!e&&!t.params.id&&!t.query.calendar)throw f({statusCode:404,statusMessage:"Calendar Id not found"});let i=F.baseUrl,r;try{r=await $fetch(i+`/appointment/widget?${u.shouldUseSlug?"slug":"calendarId"}=${u.shouldUseSlug?e:t.params.id||t.query.calendar}&event_id=${t.query.event_id||""}`)}catch{throw f({statusCode:404,statusMessage:"Page Not Found"})}let m;if(t.query.lang)m=t.query.lang;else if(r&&Object.keys(r).length>0){const p=r[Object.keys(r)[0]];p.calendar&&p.calendar.language&&(m=p.calendar.language)}return{calendarData:r,notrack:t.query.notrack,lang:m}}catch{return console.log("Error caught: ",s.message),{error:s}}},"$VEBQuB9jFJ")),g=await g,C(),g);l.value&&l.value.error&&throwError(l.value.error);const o=v(()=>{var a;if(!((a=l.value)!=null&&a.calendarData))throw f({statusCode:404,statusMessage:"Page Not Found"});return z(l.value.calendarData)?[]:Object.values(l.value.calendarData).map(s=>s.calendar)});j(async()=>{await A();{const a=t.params.slug||t.query.calendar||t.params.id;if(a){const s=o.value.findIndex(i=>i.id===a&&a.split(",")[0]);let e;s>-1?e=o.value[s]:e=o.value[0],window.parent.postMessage(["fetch-query-params",window.name||"",e.location_id],"*"),window.parent.postMessage(["fetch-sticky-contacts",e.location_id],"*")}}n.directWidget=!window||window.self===window.top,b||($()?window.onmessage=a=>{a.data[0]=="query-params"?(console.log("Yes message received"),k(a.data[2],a.data[3]),n.urlParams=a.data[1],n.url=a.data[2],n.referrer=a.data[3]):a.data[0]=="sticky-contacts"&&(n.stickyContactData=a.data[1],n.stickyContactFingerprint=a.data[2])}:k())});function k(a,s){const e=t.params.slug||t.query.id||t.params.id;if(e){const i=o.value.findIndex(m=>m.id===e&&e.split(",")[0]);let r;i>-1?r=o.value[i]:r=o.value[0],B(r.location_id,"calendar",r.id,r.name,a,s),window.attribution={locationId:r.location_id,parentId:r.id,parentName:r.name,type:"calendar"}}}return(a,s)=>(y(),x("div",null,[c(I)==="classic"?(y(),D(N,{key:0,"calendar-data":c(l).calendarData,pageUrl:c(n).url,urlParams:c(n).urlParams,baseReferrrer:c(n).referrer,stickyContactData:c(n).stickyContactData,stickyContactFingerprint:c(n).stickyContactFingerprint,calendarElementClass:d.calendarElementClass,redirect:d.redirect,"funnel-preview":d.funnelPreview,onOnSubmit:w},null,8,["calendar-data","pageUrl","urlParams","baseReferrrer","stickyContactData","stickyContactFingerprint","calendarElementClass","redirect","funnel-preview"])):(y(),D(T,{key:1,calendarData:c(h),directWidget:c(n).directWidget,pageUrl:c(n).url,urlParams:c(n).urlParams,baseReferrrer:c(n).referrer,stickyContactData:c(n).stickyContactData,stickyContactFingerprint:c(n).stickyContactFingerprint,calendarElementClass:d.calendarElementClass,redirect:d.redirect,"funnel-preview":d.funnelPreview,onOnSubmit:w},null,8,["calendarData","directWidget","pageUrl","urlParams","baseReferrrer","stickyContactData","stickyContactFingerprint","calendarElementClass","redirect","funnel-preview"]))]))}});export{aa as _};
