import{_ as j}from"./Bits-1St.js";import{_ as z}from"./Cei0423W.js";import{_ as O}from"./BGQKDpI7.js";import{f as I,al as M,i as q,l as V,w as e,o as m,k as l,P as G,c as N,r as x,I as W,d as a,b as t,a as r,v as H,am as J,g as T,an as K,ao as Q,F as P,m as F,ap as X,ah as Z,ai as ee,t as o,y as R,aq as te,B as ae}from"./eC8h7jmT.js";import{_ as Y}from"./BlxkbhZZ.js";import{_ as le}from"./aig9cg4U.js";import{_ as ne,a as oe,b as se,c as ie}from"./2iRVOXPg.js";import{_ as _e}from"./BRDNFIE7.js";import{_ as de}from"./COLuzS7l.js";import{c as ue,_ as re}from"./eZfuDZAk.js";import{_ as ce}from"./CBMI6fvo.js";import{b as fe}from"./Coi1uFXx.js";import"./C-C0WP_Z.js";import"./ZtEArWj8.js";const me={key:1,class:"italic text-zinc-400 dark:text-gray-400"},pe=I({__name:"v-labeled-detail",props:{label:{}},setup(E){const g=E,v=M(),n=q(()=>{var f;const b=(f=v.default)==null?void 0:f.call(v);if(!b)return!1;const c=b.filter(d=>d.patchFlag===1);return c.length?c.some(d=>typeof d.children=="string"?!!d.children.trim():!1):!0});return(b,c)=>{const f=Y;return m(),V(f,{label:g.label},{default:e(()=>[l(n)?G(b.$slots,"default",{key:0}):(m(),N("span",me," Not filled "))]),_:3},8,["label"])}}}),ge={class:"flex flex-col gap-5"},ve=I({__name:"v-modal-upload-document",props:{legalEntityId:{}},emits:["uploaded"],setup(E,{expose:g,emit:v}){const n=E,b=v,c=x(),f=x(!1);g({show:()=>{var i;return(i=c.value)==null?void 0:i.show()},hide:()=>{var i;return(i=c.value)==null?void 0:i.hide()}});const d=W({legal_entity_id:n.legalEntityId,name:"",pdf:void 0}),L=["Extract from corporate registry","VAT certificate","Articles of association","Power of attorney","Proof of address","Bank statement"].map(i=>({label:i,value:i})),k=x(!1),$=x(0);async function p(){if(!k.value){k.value=!0;try{await J(d,{onUploadProgress:i=>{$.value=ue(i)}}),b("uploaded"),f.value=!1,d.name="",d.pdf=void 0}finally{$.value=0,k.value=!1}}}return(i,y)=>{const D=_e,w=de,S=Y,s=re,A=O;return m(),V(l(ce),{ref_key:"modal",ref:c,modelValue:l(f),"onUpdate:modelValue":y[2]||(y[2]=u=>H(f)?f.value=u:null),size:"w-[40rem]"},{header:e(()=>[a(" Upload supporting document ")]),footer:e(()=>[t(A,{variant:"primary",loading:l(k),onClick:p},{default:e(()=>[a(" Upload ")]),_:1},8,["loading"])]),default:e(()=>[t(D,{class:"mb-2"},{default:e(()=>[a("You can pick any suggested name of the document or enter it manually")]),_:1}),r("form",ge,[t(S,{label:"Document name"},{default:e(()=>[t(w,{modelValue:l(d).name,"onUpdate:modelValue":y[0]||(y[0]=u=>l(d).name=u),options:l(L),"show-clear":"",editable:"",class:"w-full"},null,8,["modelValue","options"])]),_:1}),t(s,{modelValue:l(d).pdf,"onUpdate:modelValue":y[1]||(y[1]=u=>l(d).pdf=u),extensions:["pdf"],"show-file-name":"",loading:l(k),progress:l($),"notification-id":"add_legal_file"},{default:e(()=>[a(" Choose document in PDF format or drag it here ")]),_:1},8,["modelValue","loading","progress"])])]),_:1},8,["modelValue"])}}}),ye={class:"flex items-center gap-4"},be={class:"mt-4 flex flex-col items-stretch gap-5"},he={class:"flex gap-5"},xe={class:"flex flex-wrap gap-5"},ke={class:"flex gap-5"},we={class:"flex gap-5"},Ve={class:"flex flex-wrap gap-5"},Le={key:2},Ne={class:"mb-2 mt-5 flex items-center gap-4"},$e={class:"flex justify-end gap-1.5"},De={class:"flex justify-end gap-1.5"},ze=I({__name:"overview",async setup(E){let g,v;const n=([g,v]=T(()=>Z().catch(p=>{if(p instanceof ee&&p.hasCode("ERROR_LEGAL_ENTITY_NOT_DEFINED"))return null;throw p})),g=await g,v(),g),b=x(),c=x([]),f=x(!1);[g,v]=T(()=>d()),await g,v();async function d(){if(!n)return[];f.value=!0;try{const p=await X({legal_entity_id:n.id});c.value=p}catch{c.value=[]}finally{f.value=!1}}const L=x();async function k(p){if(!(L.value||!confirm("Are you sure you want to delete this document?"))){L.value=p;try{await te({id:p});const i=c.value.findIndex(y=>y.id===p);c.value.splice(i,1)}finally{L.value=null}}}const{allAgreements:$}=K(Q());return(p,i)=>{const y=j,D=z,w=O,S=ae,s=pe,A=le,u=oe,B=se,h=ie,U=ne;return m(),N("div",null,[t(y,null,{default:e(()=>[a("Legal overview")]),_:1}),l(n)?(m(),N(P,{key:0},[r("div",ye,[t(D,null,{default:e(()=>[a(o(l(n).name),1)]),_:1}),t(w,{variant:"primary",to:"/legal/info/manage"},{default:e(()=>[a(" Edit information ")]),_:1})]),r("div",be,[r("div",he,[t(s,{label:"Status"},{default:e(()=>[t(S,{content:l(n).status_translated},null,8,["content"])]),_:1}),l(n).last_status_validation_issue?(m(),V(s,{key:0,label:"Last status validation issue"},{default:e(()=>[t(S,{class:"whitespace-pre-line",content:l(n).last_status_validation_issue},null,8,["content"])]),_:1})):F("",!0)]),r("div",xe,[t(s,{label:"Legal type"},{default:e(()=>[a(o(l(n).type),1)]),_:1}),t(s,{label:"Legal name"},{default:e(()=>[a(o(l(n).name),1)]),_:1}),t(s,{label:"Legal address"},{default:e(()=>[a(o(l(n).address),1)]),_:1}),t(s,{label:"Country"},{default:e(()=>[a(o(l(n).country),1)]),_:1}),t(s,{label:"VAT number"},{default:e(()=>[a(o(l(n).vat_number),1)]),_:1}),t(s,{label:"Registry code"},{default:e(()=>[a(o(l(n).registry_code),1)]),_:1})]),r("div",null,[t(A,{class:"mb-2"},{default:e(()=>[a("Representative")]),_:1}),r("div",ke,[t(s,{label:"Name"},{default:e(()=>[a(o(l(n).representative_name),1)]),_:1}),t(s,{label:"Email"},{default:e(()=>[a(o(l(n).representative_email),1)]),_:1}),t(s,{label:"Phone"},{default:e(()=>[a(o(l(n).representative_number),1)]),_:1}),t(s,{label:"Position"},{default:e(()=>[a(o(l(n).representative_position),1)]),_:1})])]),r("div",null,[t(A,{class:"mb-2"},{default:e(()=>[a("Signatory")]),_:1}),r("div",we,[t(s,{label:"Name"},{default:e(()=>[a(o(l(n).signatory_name),1)]),_:1}),t(s,{label:"Email"},{default:e(()=>[a(o(l(n).signatory_email),1)]),_:1}),t(s,{label:"Phone"},{default:e(()=>[a(o(l(n).signatory_number),1)]),_:1}),t(s,{label:"Position"},{default:e(()=>[a(o(l(n).signatory_position),1)]),_:1})])]),r("div",null,[t(A,{class:"mb-2"},{default:e(()=>[a("Bank account details")]),_:1}),r("div",Ve,[t(s,{label:"Bank name"},{default:e(()=>[a(o(l(n).bank_name),1)]),_:1}),t(s,{label:"Address"},{default:e(()=>[a(o(l(n).bank_address),1)]),_:1}),t(s,{label:"BIC/SWIFT"},{default:e(()=>[a(o(l(n).bank_swift),1)]),_:1}),t(s,{label:"Account number / IBAN"},{default:e(()=>[a(o(l(n).bank_iban),1)]),_:1})])])])],64)):(m(),V(w,{key:1,variant:"primary",to:"/legal/info/manage"},{default:e(()=>[a(" Add information ")]),_:1})),l(n)?(m(),N("div",Le,[r("div",Ne,[t(l(ve),{ref_key:"uploadDocumentModal",ref:b,"legal-entity-id":l(n).id,onUploaded:d},null,8,["legal-entity-id"]),t(D,null,{default:e(()=>[a("Supporting documents")]),_:1}),t(w,{variant:"primary",onClick:i[0]||(i[0]=_=>{var C;return(C=l(b))==null?void 0:C.show()})},{default:e(()=>[a(" Upload ")]),_:1})]),t(U,{loading:l(f)},{head:e(()=>[t(B,null,{default:e(()=>[t(u,null,{default:e(()=>[a("Name")]),_:1}),t(u,null,{default:e(()=>[a("Status")]),_:1}),t(u,null,{default:e(()=>[a("Last status validation issue")]),_:1}),t(u)]),_:1})]),empty:e(()=>[a(" No documents found ")]),body:e(()=>[(m(!0),N(P,null,R(l(c),_=>(m(),V(B,{key:_.id},{default:e(()=>[t(h,null,{default:e(()=>[a(o(_.name),1)]),_:2},1024),t(h,null,{default:e(()=>[a(o(_.status_translated),1)]),_:2},1024),t(h,null,{default:e(()=>[a(o(_.last_status_validation_issue),1)]),_:2},1024),t(h,null,{default:e(()=>[r("div",$e,[_.status!==l(fe).Ok?(m(),V(w,{key:0,loading:l(L)===_.id,variant:"danger",onClick:C=>k(_.id)},{default:e(()=>[a(" Delete ")]),_:2},1032,["loading","onClick"])):F("",!0)])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["loading"])])):F("",!0),t(D,{class:"mb-2 mt-5"},{default:e(()=>[a("Agreements")]),_:1}),t(U,null,{head:e(()=>[t(B,null,{default:e(()=>[t(u,null,{default:e(()=>[a("Document title")]),_:1}),t(u,null,{default:e(()=>[a("Signed")]),_:1}),t(u,null,{default:e(()=>[a("Signatory")]),_:1}),t(u,null,{default:e(()=>[a("Signing date")]),_:1}),t(u)]),_:1})]),empty:e(()=>[a(" No agreements found ")]),body:e(()=>[(m(!0),N(P,null,R(l($),_=>(m(),V(B,{key:_.id},{default:e(()=>[t(h,null,{default:e(()=>[a(o(_.name),1)]),_:2},1024),t(h,null,{default:e(()=>[a(o(_.signed_at?"Yes":"No"),1)]),_:2},1024),t(h,null,{default:e(()=>[a(o(_.signatory_name),1)]),_:2},1024),t(h,null,{default:e(()=>[a(o(_.signed_at?new Date(_.signed_at*1e3).toLocaleString():""),1)]),_:2},1024),t(h,null,{default:e(()=>[r("div",De,[t(w,{to:_.uri,target:"_blank"},{default:e(()=>[a(" View / Download ")]),_:2},1032,["to"])])]),_:2},1024)]),_:2},1024))),128))]),_:1})])}}});export{ze as default};
//# sourceMappingURL=coOSBdTU.js.map
