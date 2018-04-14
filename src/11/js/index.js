const richEditor=document.querySelector('.rich-editor');
const fColor=richEditor.querySelector('.font-color');
const bgColor=richEditor.querySelector('.bg-color');
const fSize=richEditor.querySelector('.font-size');
const textInfo=richEditor.querySelector('.text-info input');
const getText=richEditor.querySelector('.get-text');
const sureBtn=richEditor.querySelector('.sure-btn');
const boldF=richEditor.querySelector('.bold-f');
const underlineF=richEditor.querySelector('.underline-f');

let lastValue=localStorage.getItem('preview');
getText.innerHTML=lastValue;

function addText(){
    const oldValue=textInfo.value.trim();
    let fontWeight,textDecoration;
    // 一般我们写成
    // var fontWeight = boldF.checked ? 'bold' : 'normal';
    // 尽量变量定义的同时就初始化好。
    // 你应该学过ES6，所以以后你直接使用const来定义就可以了。
    // 格式化时，一般我们操作符左右会加空格，你下次可以注意下我代码中空格的格式化。
    // 这样方便后面其他同学维护，否则代码挤在一起，看起来会有点累。

    boldF.checked?fontWeight='bold':fontWeight='normal';
    underlineF.checked?textDecoration='underline':textDecoration='none';
    if(oldValue){
        // 用ES5的时候，不用\来合并字符串
        // 可以使用数组的join，这是以前的一种技巧，有了ES6后就很少用了。
        /*
        getText.innerHTML = [
          '<span style="background-color:' + bgColor...,
          ...
          ...
        ].join('');
         */
        // 现在直接使用ES6的模板字符串，你可以尝试使用：
        /*
        getTexgt.innerHTML = `
          <span style="background-color: ${bgColor.value}"
        `
        */
        getText.innerHTML+='<span style="background-color:'+bgColor.value+' \
        ;color:'+fColor.value+' \
        ;font-size:'+fSize.value+' \
        ;text-decoration:'+textDecoration+' \
        ;font-weight:'+fontWeight+'">'+oldValue+'</span>';
        localStorage.setItem('preview',getText.innerHTML);
    }
    textInfo.value='';
    textInfo.focus();
}
sureBtn.addEventListener('click',function(){ 
    addText();
});
// 这个keyup是否事件应该挂接在输入框上？而不是document上。
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
