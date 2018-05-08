var tabs = document.querySelectorAll('.tab');

// initTab(tabs);
initTab(tabs[0]);
initTab(tabs[1], '.menu li');
// initTab(tabs[2], undefined, '.pane');
// initTab(tabs[2], null, '.pane');
initTab(tabs[2], false, '.pane');

function initTab(tab, menuSelector, paneSelector) {
    console.log(menuSelector);
    // var tab = document.querySelector('.tab');
    // if (menuSelector == undefined) {
    //     menuSelector = '.tab-menu li';
    // }
    if (!menuSelector) {
        menuSelector = '.tab-menu li';
    }
    // if (paneSelector == undefined) {
    //     paneSelector = '.panel'
    // }
    if (!paneSelector) {
        paneSelector = '.panel';
    }
    var lis = tab.querySelectorAll(menuSelector);
    var panels = tab.querySelectorAll(paneSelector);

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

    // tab.querySelector('.tab-menu li.active').dispatchEvent(event);
    for (var i = 0; i < lis.length; i++) {
        if (lis[i].classList.contains('active')) {
            lis[i].dispatchEvent(event);
            break;
        }
    }
}