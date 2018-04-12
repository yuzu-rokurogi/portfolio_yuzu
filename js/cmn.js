$(function () {
    var headerH = $('header').outerHeight();
    $(document).ready(function () {
    // $(window).on('load', function () {
        $('body').css('margin-top', headerH + 'px');
        console.log(headerH);
    })

    $('a[href^="#"]').on('click', function(){
        var speed = 400;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerH;
        $("html, body").stop().animate({scrollTop:position}, speed);
        return false;
    });

    $(window).on('scroll', function () {
        $('.fadein').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200) {
                $(this).addClass('scrollin');
            }
        });

        $('.skillFadein, .skillFadeinR').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200) {
                $(this).addClass('skillScrollin');
            }
        });
    });
});