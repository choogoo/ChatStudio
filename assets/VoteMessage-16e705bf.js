import{a2 as N,q as S,b4 as E,ae as M,s as g,o as U,a4 as j,a5 as r,a6 as l,a7 as t,aa as a,a8 as d,$ as u,ah as b,a1 as h,a9 as B,aA as O,al as $,dU as I}from"./index-6a9cab4f.js";import{N as q}from"./Progress-bfeb8eb7.js";import{N as z}from"./Checkbox-b52537ab.js";const A={class:"im-message-vote"},D={class:"vote-from"},F={class:"vheader"},H={style:{"font-weight":"bold"}},L={class:"vbody"},P={class:"vote-option"},T={class:"vote-census"},G={class:"vote-progress"},J={class:"vfooter vote-view"},K={class:"vbody"},Q={class:"checkbox"},R=["onClick"],W={class:"vfooter"},X={__name:"VoteMessage",props:{extra:Object,data:Object},setup(x){const p=x,c=S(p.extra),k=E(),_=c.value.detail.answer_mode,i=M({options:[]}),f=g(()=>i.options.some(s=>s.is_checked)),w=g(()=>c.value.vote_users.some(s=>s==k.uid));function C(s){for(const o of s)i.options.push({key:o.key,value:o.value,is_checked:!1,num:0,progress:0})}function m(s){let o=s.count;i.options.forEach(n=>{n.num=s.options[n.key],o>0&&(n.progress=s.options[n.key]/o*100)})}function y(s,o){_==0&&i.options.forEach(n=>n.is_checked=!1),o.is_checked=s}const V=()=>{if(!f.value)return;let s=[];i.options.forEach(o=>{o.is_checked&&s.push(o.key)}),I({record_id:p.data.id,options:s.join(",")}).then(o=>{o.code==200&&(m(o.data),c.value.vote_users.push(k.uid),c.value.detail.answered_num++)})};return U(()=>{C(c.value.detail.answer_option),m(c.value.statistics)}),(s,o)=>{const n=j("n-button");return r(),l("section",A,[t("div",D,[t("div",F,[t("p",H,a(d(_)==1?"[多选投票]":"[单选投票]"),1),t("p",null,a(c.value.detail.title),1)]),w.value?(r(),l(u,{key:0},[t("div",L,[(r(!0),l(u,null,b(i.options,e=>(r(),l("div",{class:"vote-view",key:e.key},[t("p",P,a(e.key)+"、 "+a(e.value),1),t("p",T,a(e.num)+" 票 "+a(e.progress)+"%",1),t("p",G,[h(d(q),{type:"line",height:5,"show-indicator":!1,percentage:parseInt(e.progress),color:"#1890ff"},null,8,["percentage"])])]))),128))]),t("div",J,[t("p",null,"应参与人数："+a(c.value.detail.answer_num)+" 人",1),t("p",null,"实际参与人数："+a(c.value.detail.answered_num)+" 人",1)])],64)):(r(),l(u,{key:1},[t("div",K,[(r(!0),l(u,null,b(i.options,e=>(r(),l("div",{class:B(["option",{radio:d(_)==0}]),key:e.key},[t("p",Q,[h(d(z),{checked:e.is_checked,"onUpdate:checked":[v=>e.is_checked=v,v=>y(e.is_checked,e)]},null,8,["checked","onUpdate:checked"])]),t("p",{class:"text",onClick:v=>y(!e.is_checked,e)},a(e.key)+"、"+a(e.value),9,R)],2))),128))]),t("div",W,[h(n,{plain:"",round:"",onClick:V},{default:O(()=>[$(a(f.value?"立即投票":"请选择进行投票"),1)]),_:1})])],64))])])}}},se=N(X,[["__scopeId","data-v-5ab6360b"]]);export{se as default};
