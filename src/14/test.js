var Text = document.querySelector('.text-input');
var Btn = document.querySelector('.add-btn');

Btn.addEventListener('click', function () {
    console.log('hello', value);
    var value = Text.value;
    if (!value) {
        alert('请输入内容！');
        return;
    }
    console.log(value);
});