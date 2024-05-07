import{_ as N}from"./BOxUQ7au.js";import{_ as B}from"./DwB0_ZuQ.js";import{_ as C}from"./uRMHzGBs.js";import{_ as E}from"./DV-o3S7m.js";import{_ as V,a as R,b as j,c as T}from"./D5k3EH1I.js";import{_ as D}from"./CXW1GQ2v.js";import{_ as F}from"./BZpUhvHW.js";import{f as P,r as y,g as U,o as i,c as g,b as e,w as t,d as n,F as q,q as z,j as b,s as G,k as w,a as x,t as l,m as H,B as J}from"./CQGbWGcf.js";import{u as K}from"./Ch2Mxu73.js";const M=["href"],O={class:"flex flex-col gap-1.5"},le=P({__name:"index",async setup(Q){let d,f;const _=y(!1),r=y([]);[d,f]=U(()=>u()),await d,f();async function u(){_.value=!0;try{r.value=await G(),r.value.some(m=>!m.is_finished)&&setTimeout(u,5e3)}finally{_.value=!1}}return K().on("agreementSigned",u),(k,m)=>{const $=N,c=B,p=C,I=E,o=V,v=R,s=T,A=D,S=F,h=J,L=j;return i(),g("div",null,[e($,null,{default:t(()=>[n("Identifiers")]),_:1}),e(c,{to:"/apps/identifiers/manage/new",variant:"primary"},{default:t(()=>[n(" Create new app identifier ")]),_:1}),e(p,{class:"mt-5"},{default:t(()=>[n(" App identifiers without attached IPA files will be automatically deleted after 30 days of inactivity. Installations are counted not in real time with approximately one hour delay. ")]),_:1}),e(p,{class:"mt-5"},{default:t(()=>[n(" If your app status is not listed in the Store, you can preview and install your app to one of your "),e(I,{to:"/developer/test-devices"},{default:t(()=>[n("Test devices")]),_:1}),n(". ")]),_:1}),e(L,{class:"mt-5",loading:b(_)},{head:t(()=>[e(v,null,{default:t(()=>[e(o,null,{default:t(()=>[n("Identifier")]),_:1}),e(o,null,{default:t(()=>[n("Label")]),_:1}),e(o,null,{default:t(()=>[n("Icon")]),_:1}),e(o,null,{default:t(()=>[n("Name")]),_:1}),e(o,null,{default:t(()=>[n("Version")]),_:1}),e(o,null,{default:t(()=>[n("Status")]),_:1}),e(o,null,{default:t(()=>[n("Last status validation issue")]),_:1}),e(o,null,{default:t(()=>[n("Installations")]),_:1}),e(o,null,{default:t(()=>[n("Revenue")]),_:1}),e(o)]),_:1})]),body:t(()=>[(i(!0),g(q,null,z(b(r),a=>(i(),w(v,{key:a.identifier},{default:t(()=>[e(s,{class:"break-words"},{default:t(()=>[x("a",{target:"_blank",href:"https://appdb.to/details/"+a.identifier},l(a.identifier),9,M)]),_:2},1024),e(s,null,{default:t(()=>[n(l(a.label),1)]),_:2},1024),e(s,null,{default:t(()=>[e(A,{src:a.icon_uri,class:"h-9 w-9 rounded-md object-cover object-center"},null,8,["src"])]),_:2},1024),e(s,null,{default:t(()=>[n(l(a.name),1)]),_:2},1024),e(s,null,{default:t(()=>[n(l(a.version),1)]),_:2},1024),e(s,{class:"break-words"},{default:t(()=>[a.is_finished?H("",!0):(i(),w(S,{key:0,size:"1.2em",class:"relative top-1 mr-1.5 inline-block"})),e(h,{tag:"span",content:a.status_translated},null,8,["content"])]),_:2},1024),e(s,{class:"whitespace-pre-line break-words"},{default:t(()=>[e(h,{content:a.last_status_validation_issue},null,8,["content"])]),_:2},1024),e(s,null,{default:t(()=>[n(l(a.installations),1)]),_:2},1024),e(s,null,{default:t(()=>[n(l((a.revenue*100).toLocaleString("de-DE",{style:"currency",currency:"EUR"})),1)]),_:2},1024),e(s,null,{default:t(()=>[x("div",O,[e(c,{to:`/apps/identifiers/manage/${a.identifier}`},{default:t(()=>[n(" Edit ")]),_:2},1032,["to"]),e(c,{variant:"primary",to:`/apps/binary-packages/upload/${a.identifier}`},{default:t(()=>[n(" Upload IPA package ")]),_:2},1032,["to"])])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["loading"])])}}});export{le as default};
//# sourceMappingURL=CgjwnZCG.js.map
