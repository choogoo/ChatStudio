/* empty css                    */import{b as i,a5 as l,a6 as d,a7 as a,a8 as n,aa as o}from"./index-6a9cab4f.js";const c={class:"im-message-sys-text"},m={class:"sys-text"},_=a("span",null,"将群主转让给",-1),f={__name:"SysGroupTransferMessage",props:{extra:Object,data:Object},setup(e){const s=i("$user");return(x,t)=>(l(),d("div",c,[a("div",m,[a("a",{onClick:t[0]||(t[0]=r=>n(s)(e.extra.old_owner_id))},o(e.extra.old_owner_name),1),_,a("a",{onClick:t[1]||(t[1]=r=>n(s)(e.extra.new_owner_id))},o(e.extra.new_owner_name),1)])]))}};export{f as default};
