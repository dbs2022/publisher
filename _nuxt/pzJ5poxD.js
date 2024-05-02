import{_ as ee}from"./DJuVdf4Q.js";import{_ as oe}from"./DLQO7vAG.js";import{_ as se}from"./XerbHTTD.js";import{_ as ne}from"./CI-CWKYf.js";import{_ as te}from"./Cu1-w-AQ.js";import{c as le,_ as ae}from"./BM8o4gWn.js";import{f as z,r as f,B,E as R,v as H,o as v,k as N,w as n,d as r,j as e,b as o,c as O,F as T,q as W,t as A,a as y,l as j,A as ie,g as re,G as ue,h as _e,m as ce,H as de,D as me,i as pe,I as fe}from"./CoSVzNQ_.js";import{_ as ve}from"./BTTZK2XO.js";import{b as ge,_ as be}from"./DC8RxgTk.js";import{_ as J}from"./C147fr_D.js";import{u as ye}from"./B2Cn7iYV.js";import{u as Ve}from"./Czk27x3K.js";import{_ as he}from"./DhVMCfed.js";import{_ as we,a as ke,c as xe,b as Pe}from"./Dy5dflx3.js";import{_ as Se}from"./WUd55Ljh.js";import{c as Oe}from"./DCS7RcIW.js";import"./CWRi_1Rx.js";import"./BarbQds6.js";import"./CqO_RI43.js";var V=(_=>(_.iOS="ios",_.iPad="ipados",_.Mac="macos",_.Vision="visionos",_.TV="tvos",_))(V||{});const Ae={[V.Mac]:"Mac",[V.TV]:"Apple TV",[V.Vision]:"Apple Vision",[V.iOS]:"iPhone",[V.iPad]:"iPad"};function Ue(_){return Ae[_]}const $e={class:"flex flex-col gap-1.5"},Ce=z({__name:"v-modal-binary-package-metadata-copy",props:{id:{},scope:{}},emits:["selected"],setup(_,{expose:h,emit:U}){const $=_,E=U,w=f(),g=f(!1);h({show:()=>{var d;return(d=w.value)==null?void 0:d.show()},hide:()=>{var d;return(d=w.value)==null?void 0:d.hide()}});const k=f(!1),t=f([]),C=B(()=>t.value.filter(d=>d.id!==$.id));R(()=>{g.value&&M()});async function M(){k.value=!0;try{t.value=await H({scope:$.scope})}finally{k.value=!1}}function x(d){var u;E("selected",d),(u=w.value)==null||u.hide()}return(d,u)=>{const P=he,m=we,F=ke,c=xe,S=J,L=Pe;return v(),N(e(Se),{ref_key:"modal",ref:w,modelValue:e(g),"onUpdate:modelValue":u[0]||(u[0]=l=>j(g)?g.value=l:null)},{header:n(()=>[r(" Fill metadata from another IPA package ")]),default:n(()=>[e(k)?(v(),N(P,{key:0,class:"border-blue-700/30 border-l-blue-700",size:"4rem"})):(v(),N(L,{key:1},{head:n(()=>[o(F,null,{default:n(()=>[o(m,null,{default:n(()=>[r("Version")]),_:1}),o(m,null,{default:n(()=>[r("Status")]),_:1}),o(m,null,{default:n(()=>[r("Is assigned")]),_:1}),o(m,null,{default:n(()=>[r("Is actual")]),_:1}),o(m)]),_:1})]),empty:n(()=>[r("No IPA packages were found")]),body:n(()=>[(v(!0),O(T,null,W(e(C),l=>(v(),N(F,{key:l.id},{default:n(()=>[o(c,null,{default:n(()=>[r(A(l.bundle_version),1)]),_:2},1024),o(c,null,{default:n(()=>[r(A(l.status_translated),1)]),_:2},1024),o(c,null,{default:n(()=>[r(A(l.is_assigned?"Yes":"No"),1)]),_:2},1024),o(c,null,{default:n(()=>[r(A(l.is_in_store?"Yes":"No"),1)]),_:2},1024),o(c,null,{default:n(()=>[y("div",$e,[o(S,{variant:"primary",onClick:s=>x(l)},{default:n(()=>[r(" Select ")]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),128))]),_:1}))]),_:1},8,["modelValue"])}}});var Me=1,Fe=4;function Ie(_){return ge(_,Me|Fe)}const Ne={class:"flex flex-col gap-5"},Be={class:"grid auto-cols-fr grid-flow-col gap-5"},Ee={key:0,class:"mt-5 flex h-96 gap-5 overflow-auto"},Le=["onClick"],De=["src"],Te={class:"flex gap-2"},io=z({__name:"[id]",async setup(_){let h,U;const{title:$,backPath:E}=ye("metadata"),w=ie(),g=Number(w.params.id),[k]=([h,U]=re(()=>H({id:g})),h=await h,U(),h),t=ue({id:g,min_ios_version:"",min_ipados_version:"",min_tvos_version:"",min_macos_version:"",min_watchos_version:"",min_visionos_version:"",description:"",whatsnew:"",screenshots_uris_by_os_type:{ios:[],ipados:[],macos:[],tvos:[],universal:[],visionos:[]}}),C=f();function M(l,{filterUniqueFields:s}={}){if(!l)return;const b=["id"];for(const p in t){const i=p;if(!(!(i in l)||s&&b.includes(i))){if(t[i]&&l[i]===null)return;t[i]=l[i]}}}M(k);const x=B(()=>["universal",...Object.values(V).filter(s=>t[`min_${s}_version`])]),d=B(()=>x.value.map(l=>({label:Ue(l)||Oe(l),value:l}))),u=f(x.value[0]);R(()=>{x.value.includes(u.value)||(u.value=x.value[0])});const P=f(!1),m=f([]),F=B(()=>m.value.length?m.value.reduce((l,s)=>l+s)/m.value.length:0),c=f([]);_e(c,async()=>{if(!c.value.length)return;const l=u.value;P.value=!0,m.value=Array(c.value.length).fill(0);try{const s=c.value.map((p,i)=>Ve({type:"screenshot",file:p},{onUploadProgress:D=>{m.value[i]=le(D)}})),b=await Promise.all(s);t.screenshots_uris_by_os_type[l].push(...b)}finally{P.value=!1,m.value=[]}});const S=f(!1);async function L(){S.value=!0;try{const l=Ie(t);for(const b of Object.values(V))l[`min_${b}_version`]||(l.screenshots_uris_by_os_type[b]=[]);await de(l),me("/apps/binary-packages");const{notifySuccess:s}=pe();s("IPA package metadata was saved")}finally{S.value=!1}}return(l,s)=>{var Y;const b=ee,p=oe,i=se,D=ne,K=te,Q=ae,X=fe,Z=ve,q=be,G=J;return v(),O(T,null,[y("div",null,[o(b,{"back-to":e(E)},{default:n(()=>[r(A(e($)),1)]),_:1},8,["back-to"]),y("form",Ne,[y("div",Be,[o(i,{label:"Min. iOS version"},{default:n(()=>[o(p,{modelValue:e(t).min_ios_version,"onUpdate:modelValue":s[0]||(s[0]=a=>e(t).min_ios_version=a)},null,8,["modelValue"])]),_:1}),o(i,{label:"Min. iPadOS version"},{default:n(()=>[o(p,{modelValue:e(t).min_ipados_version,"onUpdate:modelValue":s[1]||(s[1]=a=>e(t).min_ipados_version=a)},null,8,["modelValue"])]),_:1}),o(i,{label:"Min. watchOS version"},{default:n(()=>[o(p,{modelValue:e(t).min_watchos_version,"onUpdate:modelValue":s[2]||(s[2]=a=>e(t).min_watchos_version=a)},null,8,["modelValue"])]),_:1}),o(i,{label:"Min. macOS version"},{default:n(()=>[o(p,{modelValue:e(t).min_macos_version,"onUpdate:modelValue":s[3]||(s[3]=a=>e(t).min_macos_version=a)},null,8,["modelValue"])]),_:1}),o(i,{label:"Min. visionOS version"},{default:n(()=>[o(p,{modelValue:e(t).min_visionos_version,"onUpdate:modelValue":s[4]||(s[4]=a=>e(t).min_visionos_version=a)},null,8,["modelValue"])]),_:1}),o(i,{label:"Min. tvOS version"},{default:n(()=>[o(p,{modelValue:e(t).min_tvos_version,"onUpdate:modelValue":s[5]||(s[5]=a=>e(t).min_tvos_version=a)},null,8,["modelValue"])]),_:1})]),y("div",null,[o(D,{class:"mb-3"},{default:n(()=>[r("Screenshots")]),_:1}),o(K,{modelValue:e(u),"onUpdate:modelValue":s[6]||(s[6]=a=>j(u)?u.value=a:null),class:"mb-4",options:e(d)},null,8,["modelValue","options"]),o(Q,{modelValue:e(c),"onUpdate:modelValue":s[7]||(s[7]=a=>j(c)?c.value=a:null),loading:e(P),progress:e(F),accept:".png",multiple:""},{default:n(()=>[r(" Choose screenshots or drag them here ")]),_:1},8,["modelValue","loading","progress"]),(Y=e(t).screenshots_uris_by_os_type[e(u)])!=null&&Y.length?(v(),O("div",Ee,[(v(!0),O(T,null,W(e(t).screenshots_uris_by_os_type[e(u)],(a,I)=>(v(),O("div",{key:a,class:"relative h-full shrink-0"},[y("button",{class:"absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 leading-none text-white",onClick:je=>e(t).screenshots_uris_by_os_type[e(u)].splice(I,1)},[o(X,{name:"tabler:x"})],8,Le),y("img",{class:"h-full",src:a},null,8,De)]))),128))])):ce("",!0)]),o(Z,null,{default:n(()=>[r("App description and what's new notes support markdown")]),_:1}),o(i,{label:"Description"},{default:n(()=>[o(q,{modelValue:e(t).description,"onUpdate:modelValue":s[8]||(s[8]=a=>e(t).description=a),rows:3},null,8,["modelValue"])]),_:1}),o(i,{label:"What's new"},{default:n(()=>[o(q,{modelValue:e(t).whatsnew,"onUpdate:modelValue":s[9]||(s[9]=a=>e(t).whatsnew=a),rows:3},null,8,["modelValue"])]),_:1}),y("div",Te,[o(G,{variant:"primary",loading:e(S),onClick:L},{default:n(()=>[r(" Save ")]),_:1},8,["loading"]),o(G,{onClick:s[10]||(s[10]=a=>{var I;return(I=e(C))==null?void 0:I.show()})},{default:n(()=>[r(" Fill from another IPA package")]),_:1})])])]),o(e(Ce),{id:e(g),ref_key:"copyModal",ref:C,scope:e(k).app_identifier,onSelected:s[11]||(s[11]=a=>M(a,{filterUniqueFields:!0}))},null,8,["id","scope"])],64)}}});export{io as default};
//# sourceMappingURL=pzJ5poxD.js.map
