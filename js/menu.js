function menu() {
    const menuAppend = document.querySelector('.fa-bars');
    const menuRemove = document.querySelector('.fa-angle-right');
    const menu = document.querySelector('nav');

    menuAppend.addEventListener('click', function () {
        function append() {
            menu.classList.add('active');
            menuAppend.classList.add('hide');
        }
        setTimeout(append, 200)
    })

    menuRemove.addEventListener('click', function () {
        menu.classList.remove('active');

        function hide() {
            menuAppend.classList.remove('hide')
        }
        setTimeout(hide, 800)
    })
}