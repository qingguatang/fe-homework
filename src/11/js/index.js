//分别获取表单的各个值
const fColor=document.querySelector('.font-color');
const bgColor=document.querySelector('.bg-color');
const fSize=document.querySelector('.font-size');
const textInfo=document.querySelector('.text-info input');
const getText=document.querySelector('.get-text');
const sureBtn=document.querySelector('.sure-btn');

function addText(){
    const oldValue=textInfo.value.trim();
    if(!!oldValue){
        getText.innerHTML+='<span style="background-color:'+bgColor.value+';color:'+fColor.value+';font-size:'+fSize.value+'">'+oldValue+'</span>'
    }
    textInfo.value="";
    textInfo.focus();
}
sureBtn.addEventListener('click',function(){ 
    addText();
})
document.addEventListener("keyup",function(ev){
    console.log(ev.keyCode);
    if(ev.keyCode==13){
        addText();
    }
})
//提问：怎样存储输出的内容，不要每次刷新，原来输出的内容就没了？
