import{I as d,g as t,d as u,r as m,b as g,c as C,i as f,f as n,t as v,a as l,cW as _,k as w,v as M,j as b,O as W,_ as x}from"./index-0666afcb.js";import{m as L}from"./util-1ba1219c.js";const V=d("copy",!0,function(e){return t("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[t("path",{d:"M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null)])}),H=d("stretching",!0,function(e){return t("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[t("g",{"clip-path":"url(#"+e.id+"44a4c228)"},[t("path",{d:"M23.0005 5.99951H8.00049C6.89592 5.99951 6.00049 6.89494 6.00049 7.99951V39.9999C6.00049 41.1044 6.89592 41.9998 8.00049 41.9998H40.0005C41.1051 41.9998 42.0005 41.1044 42.0005 39.9998V24.9998",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M24.001 15.9998V23.9998",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap},null),t("path",{d:"M42 5.99951V13.9995",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap},null),t("path",{d:"M32.001 23.9998H24.001",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap},null),t("path",{d:"M42 5.99951L24 23.9995",stroke:e.colors[0],"stroke-width":e.strokeWidth},null),t("path",{d:"M42.0005 5.99951H34.0005",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap},null)]),t("defs",null,[t("clipPath",{id:e.id+"44a4c228"},[t("rect",{width:"48",height:"48",fill:e.colors[2]},null)])])])}),j={class:"el-header tools"},y=["lineMumber"],z=u({__name:"CodeMessage",props:{extra:{},data:{},maxWidth:{}},setup(e){const a=e,c=a.extra.code.trim().split(`
`).length,o=m(!1),k=()=>{W(a.extra.code,()=>{L().success("复制成功")})};return(s,i)=>{const r=g("n-icon");return C(),f("section",{class:b(["im-message-code el-container is-vertical",{maxwidth:s.maxWidth,full:o.value}])},[n("header",j,[n("p",null,"# "+v(s.extra.lang),1),n("p",null,[t(r,{class:"icon",component:l(H),onClick:i[0]||(i[0]=h=>o.value=!o.value)},null,8,["component"]),t(r,{class:"icon",component:l(V),onClick:k},null,8,["component"])])]),n("main",{class:"el-main me-scrollbar me-scrollbar-thumb",lineMumber:l(c)},[t(l(_),{language:s.extra.lang,code:s.extra.code,"show-line-numbers":""},null,8,["language","code"]),w(n("div",{class:"el-footer mask pointer",onClick:i[1]||(i[1]=h=>o.value=!o.value)}," 查看更多 ",512),[[M,l(c)>20]])],8,y)],2)}}});const N=x(z,[["__scopeId","data-v-0335be57"]]);export{N as default};
