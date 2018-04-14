const oClock=document.querySelector('.clock');
const numCircle=oClock.querySelector('.num-circle');
const hourHand=oClock.querySelector('.hour-hand');
const minuteHand=oClock.querySelector('.minute-hand');
const secondHand=oClock.querySelector('.second-hand');
const dataTime=oClock.querySelector('.date-time');
//四周原点
for(var i=0;i<12;i++){
    let rad=i*30*Math.PI/180;
    let l=140*Math.cos(rad)+150;
    let t=140*Math.sin(rad)+150;
    numCircle.innerHTML+='<div class="num-circle-list" style="left:'+l+'px;top:'+t+'px"></div>';
}
//获取时间
setInterval(changeTime,1000);
function changeTime(){
    let NewD=new Date();

    let NewH=''+NewD.getHours();
    let NewM=''+NewD.getMinutes();
    let NewS=''+NewD.getSeconds();

    dataTime.innerHTML=NewH.padStart(2,'0')+':'+NewM.padStart(2,'0')+':'+NewS.padStart(2,'0');

    let s=parseInt(NewS)*30/5-180;
    let m=parseInt(NewM)*30/5+180;
    let h=(parseInt(NewH)*30+180)%360;
    
    secondHand.style.transform='rotate('+s+'deg)';
    minuteHand.style.transform='rotate('+m+'deg)';
    hourHand.style.transform='rotate('+h+'deg)';
}