// es6中，能用const就用const
// 所以下面三条语句，因为aInput等不会再赋值，所以都用const
const aInput=document.querySelectorAll('input');
const rect=document.querySelector(".show");
const num=document.querySelector("h4");

//let $123="2252";
//console.log($123);

showColor();

function showColor(){
    // 这里也要用const
    let newNum;
    newNum=getColor(aInput);
    // 这里的color如果没有定义，会变成全局变量的。
    // 可以在文件顶部加 'use strict' 就能检测到这种错误，你可以尝试一下
    // 后续使用eslint也能检测出这种错误
    color='rgb('+newNum[0]+','+newNum[1]+','+newNum[2]+')';
    rect.style.backgroundColor=color;
    num.innerHTML=color;
}

//生成颜色值
function getColor(arr){
    // 下面这几句话构造一个新的数组。你可以尝试下使用数组的map方法来完成。
    let newArr=[];
    arr.forEach(function(item,index){
        newArr.push(parseInt(item.value));
        // 下面的事件监听，请改成API来完成, addEventListener('change', ...);
        // 不过挂事件最好放在初始化中，因为这个getColor方法会多次调用
        // 这样等于多次初始化事件，不合理
       item.onchange=function(){
           newArr.splice(index,1,parseInt(item.value));
           showColor();
        }
    });
    return newArr;
}
