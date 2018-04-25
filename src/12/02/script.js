var progress = document.querySelector('.red-packet .progress .bar');
var btn = document.querySelector('.red-packet .btn');

function onButtuonClick() {
    update(1);
}

btn.addEventListener('click', onButtuonClick);

function countDown() {
    update(-1);
}

setInterval(countDown, 1000);

function update(diff) {
    console.log('hello');
    var value = parseInt(btn.innerHTML, 10);
    var newValue = value + diff;
    if (newValue < 0 || newValue >= 100) {
        newValue = 0;
    }
    btn.innerHTML = newValue;

    progress.style.width = newValue + '%';
}