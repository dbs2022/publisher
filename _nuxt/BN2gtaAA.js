import{_ as h}from"./BdmTt6On.js";import{_ as y}from"./E0975lw9.js";import{a as g}from"./-oypOTQd.js";import{_ as b}from"./JnfVUlE5.js";import{_ as v}from"./Dg9ZPHzZ.js";import{f as x,H as w,r as V,o as k,c as C,b as t,w as n,d as c,a as e,j as o,I as S,a9 as $,y as N,E as A}from"./BKJPD1Af.js";import"./CbSbQc9u.js";import"./Ckhsli7N.js";const B=e("p",{class:"mb-2"},"We take copyright infringement seriously. We ask you to help us to ensure we address it promptly and effectively.",-1),U=e("p",{class:"mb-2"},"Please make sure that your claim includes:",-1),j=e("ul",{class:"mb-5 list-inside list-disc"},[e("li",null,"A permission for appdb to send you link to verify your identity (once) in order to complete claim submission process;"),e("li",null," A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and "),e("li",null," A statement that, under penalty of perjury, the information in the claim is accurate and you are authorized to act on behalf of the owner of the exclusive right that is allegedly infringed ")],-1),R=x({__name:"create",setup(z){const a=w({url:"",license_text:""}),s=V(!1);async function u(){s.value=!0;try{await $(a);const{notifySuccess:r}=N();r("Copyright claim was submitted"),A("/legal/copyright-infringements")}finally{s.value=!1}}return(r,i)=>{const f=h,d=y,m=g,_=b,p=v;return k(),C("div",null,[t(f,{"default-back-to":"/legal/copyright-infringements"},{default:n(()=>[c("Submit legal claim")]),_:1}),B,U,j,e("form",{class:"flex flex-col gap-5",onSubmit:S(u,["prevent"])},[t(m,{label:"URL where infringement content is located"},{default:n(()=>[t(d,{modelValue:o(a).url,"onUpdate:modelValue":i[0]||(i[0]=l=>o(a).url=l),type:"url"},null,8,["modelValue"])]),_:1}),t(m,{label:"Claim text"},{default:n(()=>[t(_,{modelValue:o(a).license_text,"onUpdate:modelValue":i[1]||(i[1]=l=>o(a).license_text=l),rows:3},null,8,["modelValue"])]),_:1}),t(p,{class:"self-start",variant:"primary",loading:o(s)},{default:n(()=>[c(" Submit ")]),_:1},8,["loading"])],32)])}}});export{R as default};
//# sourceMappingURL=BN2gtaAA.js.map
