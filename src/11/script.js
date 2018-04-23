function addText() {
    var deitor = document.querySelector('.text-editor');
    var preview = editor.querySelector('.preview');

    var colorInput = document.querySelector('.text-editor .color-input');
    var color = colorInput.value;

    var bgColorInput = document.querySelector('.text-editor .bg-color-input');
    var bgcolor = bgColorInput.value;

    var fontSizeSelect = document.querySelector('.text-editor .font-size-select');
    var fontsize = fontSizeSelect.value;

    var textInput = document('text-editor .text-inpu');
    var text = textInput.value;

    var boldCheckbox = document.querySelector('.text-editor .bold-checkbox');
    console.log(boldCheckbox.checked);

    var fontWeight = 'normal';
    if (boldCheckbox.checked) {
        console.log('bold');
        fontWeight = 'bold';
    }

    var lastHtml = preview.innerHTML;
    preview.innerHTML = lastHtml + '<span style="color:' + color +
        '; font-weight: ' + fontWeight +
        '; background: ' + bgColor + '; font-size: ' +
        fontSize + '">' + text + '</span>';

    textInput.value = ''; //提交之后值为空
}

var addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', addText); //添加事件