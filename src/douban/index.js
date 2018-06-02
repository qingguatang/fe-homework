initMenu();

// 你可以尝试将编辑器的缩进改成2个空格，目前前端界多数是使用两个空格缩进的
// HTML, CSS, JS都可尝试使用两个空格的缩进。
// 在vscode的settings中找找？
function initMenu() {
    var menu = document.querySelector('.top-bar .menu');
    var id = menu.querySelector('.id');
    var items = menu.querySelector('.items');

    id.addEventListener('click', function () {
        console.log('hello');

        // classList还有一个方法叫 toggle，也可以实现下面的逻辑
        // 你可以看看文档尝试一下，文档在这里：https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList
        // 查文档时如果你google打不开，可以使用 www.bing.com 来搜索，最好不要用百度哈，那玩意儿找不到技术文章
        // 查文档可以使用关键词叫 MDN，比如 classList MDN， 这样就会找到相关的
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
        } else {
            menu.classList.add('active');
        }
    });
}
