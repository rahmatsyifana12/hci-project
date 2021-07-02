$(document).ready( () => {
    $(window).scroll( () => {
        if (this.scrollY > 20) {
            $('.navbar').addClass('stay');
        } else {
            $('.navbar').removeClass('stay');
        }
    })
});