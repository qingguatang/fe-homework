initMenu();

function initMenu() {
    var menu = document.querySelector('.top-bar .menu');
    var id = menu.querySelector('.id');
    var items = menu.querySelector('.items');

    id.addEventListener('click', function () {
        console.log('hello');

        // if (menu.classList.contains('active')) {
        //     menu.classList.remove('active');
        // } else {
        //     menu.classList.add('active');
        // }
        menu.classList.toggle('active');
    });
}