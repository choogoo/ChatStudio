import{L as M}from"./Loading-89e0003f.js";import{d as w,s as L,r as l,b as x,c as a,e as i,w as R,f as e,l as k,i as d,F as y,y as C,a as f,g as S,t as r,z as B,M as D,cX as I,_ as b,p as N}from"./index-0666afcb.js";const V={class:"main-box me-scrollbar me-scrollbar-thumb"},j=["onClick"],z={class:"right-box"},E={class:"msg-header"},G={class:"name"},U={class:"time"},W=w({__name:"ForwardRecord",props:{recordId:{type:Number,default:0}},emits:["close"],setup(_,{emit:u}){const c=u,p=_,m=L("$user"),t=l(!0),o=l([]),n=l("会话记录"),v=()=>{c("close")};return(()=>{I({pid:0,record_id:p.recordId}).then(g=>{g.code==200&&(o.value=g.data.items||[],n.value=`会话记录(${o.value.length})`)})})(),(g,h)=>{const F=x("im-avatar"),$=x("n-modal");return a(),i($,{show:t.value,"onUpdate:show":h[0]||(h[0]=s=>t.value=s),preset:"card",title:n.value,style:{"max-width":"500px"},class:"modal-radius","on-after-leave":v,segmented:{content:!0},"header-style":{padding:"20px 15px"},"content-style":{padding:0}},{default:R(()=>[e("div",V,[o.value.length===0?(a(),i(M,{key:0})):k("",!0),(a(!0),d(y,null,C(o.value,s=>(a(),d("div",{key:s.msg_id,class:"message-item"},[e("div",{class:"left-box pointer",onClick:K=>f(m)(s.user_id)},[S(F,{src:s.avatar,size:30,username:s.nickname},null,8,["src","username"])],8,j),e("div",z,[e("div",E,[e("span",G,r(s.nickname),1),e("span",U,r(s.created_at),1)]),(a(),i(B(f(D)[s.msg_type]||"unknown-message"),{extra:s.extra,data:s},null,8,["extra","data"]))])]))),128))])]),_:1},8,["show","title"])}}});const X=b(W,[["__scopeId","data-v-0d1e44e7"]]),q={class:"title"},A={class:"tips"},H=w({__name:"ForwardMessage",props:{extra:{},data:{},maxWidth:{}},setup(_){const u=_,c=l(!1),p=N(()=>[...new Set(u.extra.records.map(t=>t.nickname))].join("、")),m=()=>{c.value=!0};return(t,o)=>(a(),d("section",{class:"im-message-forward pointer",onClick:m},[e("div",q,r(p.value)+" 的会话记录",1),(a(!0),d(y,null,C(t.extra.records,(n,v)=>(a(),d("div",{class:"list",key:v},[e("p",null,[e("span",null,r(n.nickname)+": ",1),e("span",null,r(n.text),1)])]))),128)),e("div",A,[e("span",null,"转发：聊天会话记录 ("+r(t.extra.msg_ids.length)+"条)",1)]),c.value?(a(),i(X,{key:0,"record-id":t.data.id,onClose:o[0]||(o[0]=n=>c.value=!1)},null,8,["record-id"])):k("",!0)]))}});const Q=b(H,[["__scopeId","data-v-7c162b49"]]);export{Q as default};
