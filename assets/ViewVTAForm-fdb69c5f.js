import{v as s}from"./vta-forms-6362746b.js";import{s as n,v as l,o as c,c as i,a,t as o,n as u,x as m}from"./index-561272f2.js";const f={__name:"ViewVTAForm",setup(v){const r=n(),e=l(s.find(t=>t.id===parseInt(r.params.id)));return(t,_)=>e.value?(c(),i("div",{key:0,class:"text-white border-2 border-green-200 vta-form",style:u({"--vta-block":"vta-block-"+e.value.id})},[a("div",null,o(e.value.title),1),a("div",null,o(e.value.content),1)],4)):m("",!0)}};export{f as default};