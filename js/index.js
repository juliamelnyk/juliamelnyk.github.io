//button up
$(".arrow-up, .heading__navLink").click(function () {
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
});

function showButtonUp(){
    if ($(window).scrollTop() > $(window).height()) {
        $('.arrow-up').fadeIn(400);
    } else {
        $('.arrow-up').fadeOut(400);
    }
}
$(window).on('scroll', showButtonUp);
showButtonUp();
