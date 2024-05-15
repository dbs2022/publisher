import{D as s,i as t}from"./CoR_3EFL.js";function c(r){const e=s(),a=t(()=>e.params.id==="new"?null:e.params.id.toString()),n=t(()=>!a.value),u=t(()=>n.value?`Create ${r}`:`Edit ${r}`),o=t(()=>e.fullPath.replace(/\/manage\/[\w-]+\/?/,""));return{id:a,isCreationMode:n,title:u,backPath:o}}export{c as u};
//# sourceMappingURL=YodXLvP_.js.map
