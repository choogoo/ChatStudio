import{_ as m,ar as f,p as _,c as h,i as g,f as s,t as v,g as u,a as p,bg as r,K as y,L as b}from"./index-0666afcb.js";const c=a=>(y("data-v-a2cca9f0"),a=a(),b(),a),S=c(()=>s("h3",{class:"title"},"通知设置",-1)),w={class:"view-box"},N={class:"view-list"},x={class:"content"},I=c(()=>s("div",{class:"name"},"新消息提示音",-1)),K={class:"desc"},P={class:"tools"},z={class:"view-list"},B={class:"content"},T=c(()=>s("div",{class:"name"},"推送键盘输入消息",-1)),U={class:"desc"},W={class:"tools"},k={class:"view-list"},V={class:"content"},D=c(()=>s("div",{class:"name"},"消息通知",-1)),E={class:"desc"},L={class:"tools"},j={__name:"notification",setup(a){const e=f(),n=_({get:()=>e.isPromptTone,set:t=>{e.setPromptTone(t)}}),d=_({get:()=>e.isKeyboard,set:t=>{e.setKeyboard(t)}}),l=_({get:()=>e.isWebNotify,set:t=>{e.setWebNotify(t),t&&toPermission()}});return(t,o)=>(h(),g("section",null,[S,s("div",w,[s("div",N,[s("div",x,[I,s("div",K,"新消息提示音 ："+v(n.value?"已开启":"已关闭"),1)]),s("div",P,[u(p(r),{size:"medium",value:n.value,"onUpdate:value":o[0]||(o[0]=i=>n.value=i)},null,8,["value"])])]),s("div",z,[s("div",B,[T,s("div",U,"推送键盘输入消息："+v(d.value?"已开启":"已关闭"),1)]),s("div",W,[u(p(r),{size:"medium",value:d.value,"onUpdate:value":o[1]||(o[1]=i=>d.value=i)},null,8,["value"])])]),s("div",k,[s("div",V,[D,s("div",E,"消息通知："+v(l.value?"已开启":"已关闭"),1)]),s("div",L,[u(p(r),{size:"medium",value:l.value,"onUpdate:value":o[2]||(o[2]=i=>l.value=i)},null,8,["value"])])])])]))}},A=m(j,[["__scopeId","data-v-a2cca9f0"]]);export{A as default};
