var progress = document.querySelector('.red-packet .progress .bar');
var btn = document.querySelector('.red-packet .btn');

function onButtuonClick() {
    // console.log('hello');
    // var value = parseInt(btn.innerHTML, 10);
    // var newValue = value + 1;
    // btn.innerHTML = newValue;

    // progress.style.width = newValue + '%';
    // update();
    update2(1);
}

btn.addEventListener('click', onButtuonClick);

function countDown() {
    // console.log('count down');
    // var value = parseInt(btn.innerHTML, 10);
    // var newValue = value - 1;
    // btn.innerHTML = newValue;

    // progress.style.width = newValue + '%';
    // update('down');
    update2(-1);
}

setInterval(countDown, 500);

//第一种方法
function update(type) {
    console.log('hello');
    var value = parseInt(btn.innerHTML, 10);
    var newValue = value + 1;
    if (type == 'down') {
        newValue = value - 1;
    }
    btn.innerHTML = newValue;

    progress.style.width = newValue + '%';
}

//第二种方法
function update2(diff) {
    console.log('hello');
    var value = parseInt(btn.innerHTML, 10);
    var newValue = value + diff;
    btn.innerHTML = newValue;

    progress.style.width = newValue + '%';
}