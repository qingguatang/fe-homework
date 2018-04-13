const richEditor=document.querySelector('.rich-editor');
const fColor=richEditor.querySelector('.font-color');
const bgColor=richEditor.querySelector('.bg-color');
const fSize=richEditor.querySelector('.font-size');
const textInfo=richEditor.querySelector('.text-info input');
const getText=richEditor.querySelector('.get-text');
const sureBtn=richEditor.querySelector('.sure-btn');

let lastValue=localStorage.getItem('preview');
getText.innerHTML=lastValue;

function addText(){
    const oldValue=textInfo.value.trim();
    if(oldValue){
        getText.innerHTML+='<span style="background-color:'+bgColor.value+';color:'+fColor.value+';font-size:'+fSize.value+'">'+oldValue+'</span>';
        localStorage.setItem('preview',getText.innerHTML);
    }
    textInfo.value='';
    textInfo.focus();
}
sureBtn.addEventListener('click',function(){ 
    addText();
});
document.addEventListener('keyup',function(ev){
    // 后面我们总是使用===来比较，因为==会发生类型转换
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness
    // 你有空尝试给自己的代码加上eslint。
    if(ev.keyCode===13){
        addText();
    }
});
//提问：怎样存储输出的内容，不要每次刷新，原来输出的内容就没了？
// A: 可以尝试使用localStorage：https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
