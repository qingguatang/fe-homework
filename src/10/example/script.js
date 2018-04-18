// alert('hello world');
var label = document.querySelector('.color-mixer .label');

var red = 76;
var gree = 36;
var blue = 15;

// label.innerHTML = 'rgb(76,36,152)';
var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
label.innerHTML = color; //动态生成颜色

var a = document.querySelector('h2');
a.innerHTML = '我要修改下标题';

// var message = 'hello world';
var message = 'aaabbb';

// 

var indicator = document.querySelector('.color-mixer .indicator')

console.log(indicator);

indicator.style.backgroundColor = color;// 'rgb(' + red + ',' + green + ',' + blue + ')';

label.style.fontSize = '20px';
label.style.fontWeight = 'bold';

a.style.color = 'red';