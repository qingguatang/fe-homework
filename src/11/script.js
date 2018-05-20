function addText() {
    var editor = document.querySelector('.text-editor');
    var preview = editor.querySelector('.preview');

    var colorInput = document.querySelector('.text-editor .color-input');
    var color = colorInput.value;

    var bgColorInput = document.querySelector('.text-editor .bg-color-input');
    var bgColor = bgColorInput.value;

    var fontSizeSelect = document.querySelector('.text-editor .font-size-select');
    var fontSize = fontSizeSelect.value;

    var textInput = document.querySelector('.text-editor .text-input');
    var text = textInput.value;
    var value = textInput.value.trim();
    if (!value) {
        alert('请输入内容！');
        return;
    }

    var boldCheckbox = document.querySelector('.text-editor .bold-checkbox');
    console.log(boldCheckbox.checked);

    var fontWeight = 'normal';
    if (boldCheckbox.checked) {
        console.log('bold');
        fontWeight = 'bold';
    }

    var underlineCheckbox = document.querySelector('.text-editor .underline-checkbox');
    console.log(underlineCheckbox.checked);

    var textDecoration = 'normal';
    if (underlineCheckbox.checked) {
        console.log('underline');
        textDecoration = 'underline';
    }

    var lastHtml = preview.innerHTML;
    preview.innerHTML = lastHtml + '<span style="color:' + color +
        '; font-weight: ' + fontWeight +
        ';text-decoration: ' + textDecoration + '  background: ' + bgColor + '; font-size: ' +
        fontSize + '">' + text + '</span>';

    textInput.value = ''; //提交之后值为空
}

var addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', addText); //添加事件