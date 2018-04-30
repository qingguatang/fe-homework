var title = document.querySelector('.user-center .title');
var panel = document.querySelector('.user-center .panel');

title.addEventListener('click', function () {
    if (panel.style.display == 'block') {
        panel.style.display = 'none';
        title.style.background = '#fff';
    } else {
        panel.style.display = 'block';
        title.style.background = '#eee';
    }
});