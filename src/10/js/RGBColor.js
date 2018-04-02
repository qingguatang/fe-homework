const aInput=document.querySelectorAll('input');
const rect=document.querySelector(".show");
const num=document.querySelector("h4");

aInput.forEach(function(item,index){
    showColor();
    item.addEventListener("change",function(){
        showColor();
    })
})

function showColor(){
    let color='rgb('+aInput[0].value+','+aInput[1].value+','+aInput[2].value+')';
    rect.style.backgroundColor=color;
    num.innerHTML=color;
}