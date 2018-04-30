//active代码

//初始化initUserCenter
function initUserCenter() {
    var box = document.querySelector('.user-center');
    // var title = document.querySelector('.user-center .title');
    // var panel = document.querySelector('.user-center .panel');

    //优化元素选择
    var title = box.querySelector('.title');
    var panel = box.querySelector('.panel');

    title.addEventListener('click', function () {
        console.log('hello');

        if (box.classList.contains('active')) {
            box.classList.remove('active');
            title.style.background = '#fff';
        } else {
            box.classList.add('active');
            title.style.background = '#eee';
        }
    });
}

//调用函数
initUserCenter();