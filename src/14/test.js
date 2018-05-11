var Text = document.querySelector('.text-input');
var Btn = document.querySelector('.add-btn');

Btn.addEventListener('click', function () {
    var value = Text.value; //<input type="text" value=" " class="text-input">中value的没有默认值有空格的时候什么也不会输出，空格也相当于内容，没有默认值可以不用写value
    // var value = Text.value.trim();//用 text.value.trim() 去掉空格
    console.log('hello', value);
    if (!value) {
        alert('请输入内容！');
        return;
    }
    console.log(value);

    var num = parseInt(value, 10);
    console.log(num);
    // if (!num) {
    if (isNaN(num)) {
        alert("请输入数字！");
        return;
    }

    if(num > 10 || num == 0) {
        console.log('ok');
    }
});


function a() {
    console.log('a');
    return 0;
}

function b() {
    console.log('b');
    return 'hello';
}

var ret = a() || b();
console.log('result',ret);