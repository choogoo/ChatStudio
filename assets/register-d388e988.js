import{_ as S,b6 as x,r as $,m as C,b as I,c as R,i as K,f,g as o,w as r,a,X as u,a0 as m,aX as c,A as p,k as N,v as E,t as T,W as V,K as q,L as U}from"./index-0666afcb.js";import{a as B}from"./auth-fd4cc242.js";import{i as v,a as D}from"./common-15dc24be.js";import{u as z}from"./useSmsLock-06aad158.js";const F=i=>(q("data-v-812a911a"),i=i(),U(),i),L={class:"el-container is-vertical login-box reister"},M=F(()=>f("header",{class:"el-header box-header"},"账号注册",-1)),X={class:"el-main",style:{padding:"3px"}},A={class:"helper"},G={__name:"register",setup(i){const{lockTime:g,start:h}=z("REGISTER_SMS",60),_=x(),w=$(),b={nickname:{required:!0,trigger:["blur","input"],message:"昵称不能为空！"},username:{required:!0,validator(t,e){if(e){if(!v(e))return new Error("请正确填写手机号！")}else return new Error("手机号不能为空！");return!0},trigger:["blur","input"]},password:{required:!0,trigger:["blur","input"],message:"密码不能为空！"},sms_code:{required:!0,trigger:["blur","input"],message:"验证码不能为空！"}},s=C({nickname:"",username:"",password:"",sms_code:"",loading:!1}),k=()=>{s.loading=!0;const t=B({nickname:s.nickname,mobile:s.username,password:s.password,sms_code:s.sms_code,platform:"web"});t.then(e=>{e.code==200?(window.$message.success("注册成功"),setTimeout(()=>{_.push("/auth/login")},500)):window.$message.warning(e.message)}),t.finally(()=>{s.loading=!1})},l=t=>{t.preventDefault(),w.value.validate(e=>{!e&&k()})},y=()=>{if(!v(s.username)){window.$message.warning("请正确填写手机号");return}const t=D({mobile:s.username,channel:"register"});t.then(e=>{e.code==200?(h(),window.$message.success("短信发送成功"),e.data.is_debug&&(s.sms_code=e.data.sms_code,setTimeout(()=>{window.$message.success("已开启验证码自动填充")},1e3))):window.$message.warning(e.message)}),t.finally(()=>{s.loading=!1})};return(t,e)=>{const d=I("n-button");return R(),K("section",L,[M,f("main",X,[o(a(V),{ref_key:"formRef",ref:w,size:"large",model:s,rules:b},{default:r(()=>[o(a(u),{path:"username","show-label":!1},{default:r(()=>[o(a(m),{placeholder:"请输入手机号",value:s.username,"onUpdate:value":e[0]||(e[0]=n=>s.username=n),maxlength:11,onKeydown:c(l,["enter"])},null,8,["value"])]),_:1}),o(a(u),{path:"sms_code","show-label":!1},{default:r(()=>[o(a(m),{placeholder:"验证码",value:s.sms_code,"onUpdate:value":e[1]||(e[1]=n=>s.sms_code=n),maxlength:6,onKeydown:c(l,["enter"])},null,8,["value"]),o(d,{tertiary:"",class:"mt-l5",onClick:y,disabled:a(g)>0},{default:r(()=>[p(" 获取验证码 "),N(f("span",null,"("+T(a(g))+"s)",513),[[E,a(g)>0]])]),_:1},8,["disabled"])]),_:1}),o(a(u),{path:"nickname","show-label":!1},{default:r(()=>[o(a(m),{placeholder:"设置昵称",value:s.nickname,"onUpdate:value":e[2]||(e[2]=n=>s.nickname=n),onKeydown:c(l,["enter"])},null,8,["value"])]),_:1}),o(a(u),{path:"password","show-label":!1},{default:r(()=>[o(a(m),{placeholder:"设置密码",type:"password","show-password-on":"click",value:s.password,"onUpdate:value":e[3]||(e[3]=n=>s.password=n),onKeydown:c(l,["enter"])},null,8,["value"])]),_:1}),o(d,{type:"primary",size:"large",block:"",class:"mt-t20",onClick:l,loading:s.loading},{default:r(()=>[p(" 立即注册 ")]),_:1},8,["loading"])]),_:1},8,["model"]),f("div",A,[o(d,{text:"",color:"#409eff",onClick:e[4]||(e[4]=n=>a(_).push("/auth/forget"))},{default:r(()=>[p(" 找回密码 ")]),_:1}),o(d,{text:"",color:"#409eff",onClick:e[5]||(e[5]=n=>a(_).push("/auth/login"))},{default:r(()=>[p(" 已有账号，立即登录? ")]),_:1})])])])}}},O=S(G,[["__scopeId","data-v-812a911a"]]);export{O as default};
