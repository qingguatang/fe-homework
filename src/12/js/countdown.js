const loading=document.querySelector('.loading');
const obar=loading.querySelector('.bar');
const loadingNum=loading.querySelector('.loadingNum');
const redBtn=loading.querySelector('.red');
const greenBtn=loading.querySelector('.green');

let count=0;

greenBtn.addEventListener('click',add);
redBtn.addEventListener('click',reduce);

function add(){
    update(10);
}
function reduce(){
    update(-10);
}
function update(type){
    count+=type;
    if(count>100){
        count=100;
    }
    else if(count<0){
        count=0;
    }
    obar.style.width=count+'%';
    loadingNum.innerHTML=count+'%';
}