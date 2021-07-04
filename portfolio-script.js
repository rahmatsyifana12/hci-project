$(document).ready( () => {
    $(window).scroll( () => {
        if (this.scrollY > 10) {
            $('.navbar').addClass('stay');
        } else {
            $('.navbar').removeClass('stay');
        }
    });

    $('.menu-bar').click( () => {
        $('.navbar .menu').toggleClass('appear');
        $('.menu-bar i').toggleClass('appear');
    }); 
});