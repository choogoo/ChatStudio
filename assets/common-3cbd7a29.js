var m=Object.defineProperty;var a=(t,e,i)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var o=(t,e,i)=>(a(t,typeof e!="symbol"?e+"":e,i),i);import{p as s}from"./index-db91b644.js";class r{constructor(e,i=60,c=l=>{}){o(this,"timer",null);o(this,"lockTime",60);o(this,"lockName","");this.lockTime=i,this.lockName=`SMSLOCK_${e}`,this.callBack=c,this.compute()}start(){localStorage.setItem(this.lockName,this.getCurrentTime()+this.lockTime),this.compute()}compute(){this.clear();const e=this.getExpireTime();if(e===null)return;if(e<=this.getCurrentTime()){this.callBack(0),localStorage.removeItem(this.lockName);return}const i=e-this.getCurrentTime();this.callBack(i),this.timer=setTimeout(()=>this.compute(),1e3)}getCurrentTime(){return console.debug(this.lockName),Math.floor(new Date().getTime()/1e3)}getExpireTime(){return localStorage.getItem(this.lockName)}clear(){clearTimeout(this.timer)}}o(r,"callBack",()=>{});const u=t=>/^1[0-9]{10}$/.test(t),k=t=>s("/api/v1/common/sms-code",t),g=t=>s("/api/v1/common/email-code",t);export{r as S,k as a,g as b,u as i};
