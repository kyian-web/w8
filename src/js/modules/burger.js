const burger = () => {
     // burger ===================
     const burger = document.querySelector('.burger'),
        menu = document.querySelector('.header-nav'),
        menuItem = document.querySelectorAll('.header-nav__item');

    function scroll() {
        if (burger.classList.contains('burger_active') && menu.classList.contains('header-nav_active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
    }
    }

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        menu.classList.toggle('header-nav_active');
        scroll();
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            burger.classList.toggle('burger_active');
            menu.classList.toggle('header-nav_active');
            scroll();
        });
    });
};

export default burger;