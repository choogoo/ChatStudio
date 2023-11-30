import{a2 as x,bx as S,q as K,ae as C,a4 as $,a5 as I,a6 as N,a7 as f,a1 as o,aA as r,a8 as a,aC as u,bo as m,al as c,ab as R,ac as q,aa as E,at as T,au as V}from"./index-6a9cab4f.js";import{a as U}from"./auth-f70dec43.js";import{i as v,a as B}from"./common-d7a7f4aa.js";import{u as D}from"./useSmsLock-bf45f34d.js";import{a as p,N as z}from"./FormItem-aeb54bcd.js";const F=i=>(T("data-v-812a911a"),i=i(),V(),i),M={class:"el-container is-vertical login-box reister"},A=F(()=>f("header",{class:"el-header box-header"},"账号注册",-1)),G={class:"el-main",style:{padding:"3px"}},L={class:"helper"},j={__name:"register",setup(i){const{lockTime:g,start:h}=D("REGISTER_SMS",60),w=S(),_=K(),b={nickname:{required:!0,trigger:["blur","input"],message:"昵称不能为空！"},username:{required:!0,validator(t,e){if(e){if(!v(e))return new Error("请正确填写手机号！")}else return new Error("手机号不能为空！");return!0},trigger:["blur","input"]},password:{required:!0,trigger:["blur","input"],message:"密码不能为空！"},sms_code:{required:!0,trigger:["blur","input"],message:"验证码不能为空！"}},s=C({nickname:"",username:"",password:"",sms_code:"",loading:!1}),y=()=>{s.loading=!0;const t=U({nickname:s.nickname,mobile:s.username,password:s.password,sms_code:s.sms_code,platform:"web"});t.then(e=>{e.code==200?(window.$message.success("注册成功"),setTimeout(()=>{w.push("/auth/login")},500)):window.$message.warning(e.message)}),t.finally(()=>{s.loading=!1})},l=t=>{t.preventDefault(),_.value.validate(e=>{!e&&y()})},k=()=>{if(!v(s.username)){window.$message.warning("请正确填写手机号");return}const t=B({mobile:s.username,channel:"register"});t.then(e=>{e.code==200?(h(),window.$message.success("短信发送成功"),e.data.is_debug&&(s.sms_code=e.data.sms_code,setTimeout(()=>{window.$message.success("已开启验证码自动填充")},1e3))):window.$message.warning(e.message)}),t.finally(()=>{s.loading=!1})};return(t,e)=>{const d=$("n-button");return I(),N("section",M,[A,f("main",G,[o(a(z),{ref_key:"formRef",ref:_,size:"large",model:s,rules:b},{default:r(()=>[o(a(p),{path:"username","show-label":!1},{default:r(()=>[o(a(u),{placeholder:"请输入手机号",value:s.username,"onUpdate:value":e[0]||(e[0]=n=>s.username=n),maxlength:11,onKeydown:m(l,["enter"])},null,8,["value","onKeydown"])]),_:1}),o(a(p),{path:"sms_code","show-label":!1},{default:r(()=>[o(a(u),{placeholder:"验证码",value:s.sms_code,"onUpdate:value":e[1]||(e[1]=n=>s.sms_code=n),maxlength:6,onKeydown:m(l,["enter"])},null,8,["value","onKeydown"]),o(d,{tertiary:"",class:"mt-l5",onClick:k,disabled:a(g)>0},{default:r(()=>[c(" 获取验证码 "),R(f("span",null,"("+E(a(g))+"s)",513),[[q,a(g)>0]])]),_:1},8,["disabled"])]),_:1}),o(a(p),{path:"nickname","show-label":!1},{default:r(()=>[o(a(u),{placeholder:"设置昵称",value:s.nickname,"onUpdate:value":e[2]||(e[2]=n=>s.nickname=n),onKeydown:m(l,["enter"])},null,8,["value","onKeydown"])]),_:1}),o(a(p),{path:"password","show-label":!1},{default:r(()=>[o(a(u),{placeholder:"设置密码",type:"password","show-password-on":"click",value:s.password,"onUpdate:value":e[3]||(e[3]=n=>s.password=n),onKeydown:m(l,["enter"])},null,8,["value","onKeydown"])]),_:1}),o(d,{type:"primary",size:"large",block:"",class:"mt-t20",onClick:l,loading:s.loading},{default:r(()=>[c(" 立即注册 ")]),_:1},8,["loading"])]),_:1},8,["model"]),f("div",L,[o(d,{text:"",color:"#409eff",onClick:e[4]||(e[4]=n=>a(w).push("/auth/forget"))},{default:r(()=>[c(" 找回密码 ")]),_:1}),o(d,{text:"",color:"#409eff",onClick:e[5]||(e[5]=n=>a(w).push("/auth/login"))},{default:r(()=>[c(" 已有账号，立即登录? ")]),_:1})])])])}}},W=x(j,[["__scopeId","data-v-812a911a"]]);export{W as default};
