const hamburger = document.querySelector('.mobile_menu .slicknav_menu .slicknav_btn');
const mobile_menus = document.querySelector('.mobile_menu .slicknav_menu .slicknav_nav');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('activate');
    mobile_menus.classList.toggle('activate');
    
});

// AOS
AOS.init({
    offset:200,
    delay: 10,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'
})