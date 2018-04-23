// function doYourWork() {
//     // alert('hello world');

//     var label = document.querySelector('.color-mixer .label');

//     //var red = 76;
//     //var gree = 36;
//     //var blue = 15;

//     //label.innerHTML = 'hello world';
//     var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
//     label.innerHTML = color; //动态生成颜色

//     //var a = document.querySelector('h2');
//     //a.innerHTML = '我要修改下标题';

//     // var message = 'hello world';

//     //var message = 'aaabbb';

//     // alert(message);

//     var indicator = document.querySelector('.color-mixer .indicator');

//     //console.log(indicator);

//     indicator.style.backgroundColor = color; // 'rgb(' + red + ',' + green + ',' + blue + ')';

//     //label.style.fontSize = '20px';
//     //label.style.fontWeight = 'bold';

//     //a.style.color = 'red';

// }

fuction addText() {
    var color = document.querySelector('.color-mixer');
    var indicator = color.querySelector('.indicator');

    var red = document.querySelector('.adjuster .red');
    var red = red.value;

    var gree = document('.adjuster .green');
    var gree = gree.value;

    var blue = document.querySelector('.adjuster .blue');
    var blue = blue.value;

    var lastHtml = indicator.innerHTML;
    indicator.innerHTML = lastHtml + '<span style="red:' + red + ';green:' + green + ';blue:' + blue + '"></span>';

}

var addInput = document.querySelector('.body input');
addInput.addEventListener('click', addText);