import{a2 as o,a5 as t,a6 as a,a7 as d,aa as s,a8 as n,ao as i}from"./index-6a9cab4f.js";const c={class:"im-message-revoke"},_={class:"content"},u={key:0},l={key:1},m={key:2},r={__name:"RevokeMessage",props:{login_uid:{type:Number,default:0},user_id:{type:Number,default:0},talk_type:{type:Number,default:0},nickname:{type:String,default:""},datetime:{type:String,default:""}},setup(e){return(f,k)=>(t(),a("div",c,[d("div",_,[e.login_uid==e.user_id?(t(),a("span",u," 你撤回了一条消息 | "+s(n(i)(e.datetime)),1)):e.talk_type==1?(t(),a("span",l," 对方撤回了一条消息 | "+s(n(i)(e.datetime)),1)):(t(),a("span",m,' "'+s(e.nickname)+'" 撤回了一条消息 | '+s(n(i)(e.datetime)),1))])]))}},g=o(r,[["__scopeId","data-v-b4f56b61"]]);export{g as default};
