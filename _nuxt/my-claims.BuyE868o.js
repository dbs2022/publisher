import{_ as u}from"./nuxt-link.kAqK_QHv.js";import{_ as f}from"./v-button.vue.cRpy3U0e.js";import{a as h}from"./legal.CTSmRZ2x.js";import{f as g,B as b,o,c as r,b as x,w as y,d as i,k as _,a as t,F as k,C,t as s}from"./entry.jZRaifBp.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";const w=t("h1",{class:"mb-6 text-3xl font-medium"},"My copyright claims",-1),v={class:"grid grid-cols-4 gap-4 md:grid-cols-1"},B={class:"mb-2 text-sm"},L=["href"],E=g({__name:"my-claims",async setup(N){let a,n;const d=([a,n]=b(()=>h()),a=await a,n(),a);d.sort((l,c)=>l.added_at-c.added_at);const m=u;return(l,c)=>{const p=f;return o(),r("div",null,[w,x(p,{component:_(m),to:"/copyright-claim",variant:"primary",class:"mb-6"},{default:y(()=>[i(" Submit new claim ")]),_:1},8,["component"]),t("div",v,[(o(!0),r(k,null,C(_(d),e=>(o(),r("div",{key:e.id,class:"rounded-sm border p-2 dark:border-slate-600"},[t("p",null,[t("b",null,"Claim #"+s(e.id),1)]),t("p",B,"added at "+s(new Date(e.added_at*1e3).toLocaleString()),1),t("p",null,"Status: "+s(e.status_translated),1),t("p",null,[i(" URL: "),t("a",{href:e.url,target:"_blank",class:"break-all"},s(e.url),9,L)])]))),128))])])}}});export{E as default};
//# sourceMappingURL=my-claims.BuyE868o.js.map
