function initTabMenu() {
    var tab = document.querySelector('.tab-menu');
    var li = tab.querySelector('li');
    var lis = tab.querySelectorAll('li');
    var contains = tab.querySelector('.contains');

    // console.log(li);
    // console.log(lis);

    for (var i = 0; i < lis.length; i++) {
        console.log(contains.innerHTML);
        contains.innerHTML = lis[i].innerHTML;
        addEvent(i);

    }

    function addEvent(index) {
        lis[index].addEventListener('click', function () {
            for (var i = 0; i < lis.length; i++) {
                lis[i].classList.remove('active');
            }
            lis[index].classList.add('active');
        });
    }

}

initTabMenu();