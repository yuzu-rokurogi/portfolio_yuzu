$(function () {
    //headerの高さ分bodyにmarginつける
    var headerH = $('header').outerHeight();
    $('body').css('margin-top', headerH + 'px');

    //global menu
    $('nav').hide();
    $('.menu').on('click', function(){
        $(this).toggleClass('is-active');
        $('nav').slideToggle();
    });

    $('nav li a').on('click', function(){
        $('.menu').removeClass('is-active');
        $('nav').hide();
    });

    $('a[href^="#"]').on('click', function(){
        var speed = 400;
        var href= $(this).attr("href");
        var target = $(href === "#" || href === "" ? 'html' : href);
        var position = target.get( 0 ).offsetTop;
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

    var urlHash = location.hash;
    if (urlHash) {
        var speed = 400;
        var target = $(urlHash == "#" || urlHash == "" ? 'html' : urlHash);
        var position = target.get( 0 ).offsetTop;
        $("html, body").stop().animate({scrollTop:position}, speed);
        return false;
    }
});