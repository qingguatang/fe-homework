var tabs = document.querySelectorAll('.tab');
var myMenu = document.querySelector('.mymenu');
var options = {
    menuSelector: '.menu li, .first-menu li',
    panelSelector: '.pane',
};

initTab(tabs[0]);
initTab(tabs[1], {
    menuSelector: '.menu li'
});
initTab(tabs[2], {
    panelSelector: '.pane'
});

initTab(myMenu, {
    menuSelector: '.first-menu li'
});

function initTab(index, options) {
    options = options || {};
    menuSelector = options.menuSelector || '.tab-menu li';
    panelSelector = options.panelSelector || '.panel';

    var lis = index.querySelectorAll(menuSelector);
    var panels = index.querySelectorAll(panelSelector);

    for (var i = 0; i < lis.length; i++) {
        addEvent(i);
    }

    function addEvent(index) {
        lis[index].addEventListener('click', function () {
            for (var i = 0; i < lis.length; i++) {
                lis[i].classList.remove('active');
                // 这个判断写错了
                if (panels[i]) {
                    panels[i].style.display = 'none';
                }

            }
            lis[index].classList.add('active');
            if (panels[index]) {
                panels[index].style.display = 'block';
            }
        });
    }

    var event = new Event('click');
    for (var i = 0; i < lis.length; i++) {
        if (lis[i].classList.contains('active')) {
            lis[i].dispatchEvent(event);
            break;
        }
    }
}