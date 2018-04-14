const oClock=document.querySelector('.clock');
const numCircle=oClock.querySelector('.num-circle');
const hourHand=oClock.querySelector('.hour-hand');
const minuteHand=oClock.querySelector('.minute-hand');
const secondHand=oClock.querySelector('.second-hand');
const dataTime=oClock.querySelector('.date-time');

// 这个自己发挥得很棒！
//四周原点
// 用了es6，那咱们整个文件都用const或let
// const和let的使用原则是： 能用const的地方就用const, 只有需要重新赋值的地方才用let。
// 所以下面的for语句里面的i，需要使用let， 但是 rad, l 和 t都使用const来定义。
for(var i=0;i<12;i++){
    let rad=i*30*Math.PI/180;
    let l=140*Math.cos(rad)+150;
    let t=140*Math.sin(rad)+150;
    numCircle.innerHTML+='<div class="num-circle-list" style="left:'+l+'px;top:'+t+'px"></div>';
}
//获取时间
setInterval(changeTime,1000);
function changeTime(){
    // 变量名要用驼峰形式命名。
    let NewD=new Date();

    let NewH=''+NewD.getHours();
    let NewM=''+NewD.getMinutes();
    let NewS=''+NewD.getSeconds();

    // 你可以尝试自己写一个padStart函数吗？因为有些浏览器下不支持padStart
    // 顺便查一些哪些情况下不支持, 注意手机中的浏览器
    dataTime.innerHTML=NewH.padStart(2,'0')+':'+NewM.padStart(2,'0')+':'+NewS.padStart(2,'0');

    let s=parseInt(NewS)*30/5-180;
    let m=parseInt(NewM)*30/5+180;
    let h=(parseInt(NewH)*30+180)%360;
    
    secondHand.style.transform='rotate('+s+'deg)';
    minuteHand.style.transform='rotate('+m+'deg)';
    hourHand.style.transform='rotate('+h+'deg)';
}