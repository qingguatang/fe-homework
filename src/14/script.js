initTab();

function initTab() {
    var tab = document.querySelector('.tab');
    var lis = tab.querySelectorAll('.tab-menu li');
    var panels = tab.querySelectorAll('.panel');

    for (var i = 0; i < lis.length; i++) {
        addEvent(i);
    }

    function addEvent(index) {
        lis[index].addEventListener('click', function () {
            for (var i = 0; i < lis.length; i++) {
                lis[i].classList.remove('active');
                panels[i].style.display = 'none'; //设置隐藏其他面板的样式
            }
            console.log(panels[index]);
            lis[index].classList.add('active');
            panels[index].style.display = 'block';
        });
    }

    var event = new Event('click');
    // lis[0].dispatchEvent(event);

    tab.querySelector('.tab-menu li.active').dispatchEvent(event);
}