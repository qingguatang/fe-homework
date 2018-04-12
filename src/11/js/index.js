//分别获取表单的各个值
// 一般来说比较好的做法是，给编辑器一个统一的class，比如 rich-editor。
// 然后获得这个节点，其他元素就以这个节点为基础来查找，比如
/*
var editor = document.querySelector('.rich-editor');
var fColor = editor.querySelector('.font-color');
...

对比jquery
var editor = $('.rich-editor');
var fColor = editor.find('.font-color');
var bgColor = editor.find('.bg-color');

两个形式一样。
*/

const fColor=document.querySelector('.font-color');
const bgColor=document.querySelector('.bg-color');
const fSize=document.querySelector('.font-size');
const textInfo=document.querySelector('.text-info input');
const getText=document.querySelector('.get-text');
const sureBtn=document.querySelector('.sure-btn');


function addText(){
    const oldValue=textInfo.value.trim();
    // 其实不需要添加!!， !!可以将一个值转换成布尔型。
    // 在if语句中，false null undefined 0 '' NaN都是“非”
    if(!!oldValue){
        getText.innerHTML+='<span style="background-color:'+bgColor.value+';color:'+fColor.value+';font-size:'+fSize.value+'">'+oldValue+'</span>'
    }
    textInfo.value="";
    textInfo.focus();
}
sureBtn.addEventListener('click',function(){ 
    addText();
})
// 字符串形式要一致，要么全部使用双引号，要么全部使用单引号。
document.addEventListener("keyup",function(ev){
    console.log(ev.keyCode);
    // 后面我们总是使用===来比较，因为==会发生类型转换
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness
    // 你有空尝试给自己的代码加上eslint。
    if(ev.keyCode==13){
        addText();
    }
})
//提问：怎样存储输出的内容，不要每次刷新，原来输出的内容就没了？
// A: 可以尝试使用localStorage：https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage