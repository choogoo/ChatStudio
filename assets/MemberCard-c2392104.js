import{a2 as v,a4 as l,a5 as a,a6 as r,a7 as t,a1 as d,aa as n,ai as m,a8 as o,cx as p,ad as c,cy as g,cz as h,an as y}from"./index-6a9cab4f.js";const k={class:"items-box pointer"},x={class:"left-item"},C={class:"right-item"},M={class:"username"},S={class:"text-ellipsis"},b={key:0},B={class:"flags text-ellipsis"},N={class:"helper"},V={class:"status"},z={class:"tool"},w={__name:"MemberCard",props:{avatar:{type:String,default:""},username:{type:String,default:""},gender:{type:Number,default:0},motto:{type:String,default:""},flag:{type:String,default:""}},emits:["to-talk"],setup(e,{emit:_}){const u=_;return(D,i)=>{const f=l("im-avatar"),s=l("n-icon");return a(),r("div",k,[t("div",x,[d(f,{src:e.avatar,size:40,username:e.username},null,8,["src","username"])]),t("div",C,[t("div",M,[t("span",S,n(e.username||"-"),1),e.gender>0?(a(),r("div",b,[e.gender==1?(a(),m(s,{key:0,component:o(p),color:"#508afe"},null,8,["component"])):c("",!0),e.gender==2?(a(),m(s,{key:1,component:o(g),color:"#ff5722"},null,8,["component"])):c("",!0)])):c("",!0)]),t("div",B,n(e.motto||"..."),1),t("div",N,[t("div",V,n(e.flag),1),t("div",z,[d(s,{component:o(h),onClick:i[0]||(i[0]=y(E=>u("to-talk"),["stop"]))},null,8,["component"])])])])])}}},I=v(w,[["__scopeId","data-v-e7fad72c"]]);export{I as M};
