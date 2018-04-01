let aInput=document.querySelectorAll('input');
let rect=document.querySelector(".show");
let num=document.querySelector("h4");

//let $123="2252";
//console.log($123);

showColor();

function showColor(){
    let newNum;
    newNum=getColor(aInput);
    color='rgb('+newNum[0]+','+newNum[1]+','+newNum[2]+')';
    rect.style.backgroundColor=color;
    num.innerHTML=color;
}

//生成颜色值
function getColor(arr){
    let newArr=[];
    arr.forEach(function(item,index){
        newArr.push(parseInt(item.value));
        item.onchange=function(){
           newArr.splice(index,1,parseInt(item.value));
           showColor();
        }
    });
    return newArr;
}
