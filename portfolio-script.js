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

    // var scroll_link = $('.point');
    // scroll_link.click(function(e){
    //     e.preventDefault();
    //     $('body,html').animate({
    //         scrollTop: $(this.hash).offset().top
    //     }, 1000);
    // });
});