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

function addText() {
    var color = document.querySelector('.color-mixer');
    var indicator = color.querySelector('.indicator');

    // 这个取到的不是输入框哦，所以你得检查下取到的元素
    // 可以使用console.log来确定
    // var red = document.querySelector('.adjuster .red');
    var red = document.querySelector('.adjuster .red input');
    var red = red.value;

    // var gree = document('.adjuster .green');
    var green = document.querySelector('.adjuster .green input');
    var green = green.value;

    var blue = document.querySelector('.adjuster .blue input');
    var blue = blue.value;

    var lastHtml = indicator.innerHTML;
    // 这次不像富文本那样修改内容,而是设置样式，你参考上面你注释掉的代码来设置样式哈。
    // indicator.innerHTML = lastHtml + '<span style="red:' + red + ';green:' + green + ';blue:' + blue + '"></span>';

    var css = 'rgb(' + red + ',' + green + ',' + blue + ')';
    // 可以尝试使用console.log()来输出css，看是否正确。
    console.log(css);
    indicator.style.background = css;
}

// 现在你已绑定了一个颜色条的事件。 所以第一个颜色框已能正常工作了。
// 还需要优化
// 1. 这里的颜色选择框事件不叫click，而是叫 change， click是鼠标点击的意思。
// 2. 还可以尝试使用事件 input, 你可以尝试一下。
// 3. 把其他两个颜色框也加上事件。
var addInput = document.querySelector('.body input');
addInput.addEventListener('click', addText);