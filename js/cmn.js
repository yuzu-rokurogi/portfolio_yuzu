$(function() {
	// contents padding
	var windowH =$(window).height();
	var headerH = $('header').outerHeight();
	var footerH = $('footer').outerHeight();
	var spaceH = windowH - (headerH + footerH);
	var contentsH = $('.cmnAllWrap').outerHeight();

	if ($('#pankuzu').length) {
		$('#pankuzu').css('padding-top', headerH);
	} else {
		$('.cmnAllWrap').css('padding-top', headerH);
	}

	if (contentsH < spaceH) {
		$('.cmnAllWrap').css('min-height', spaceH);
	}

	$('.worksDetail dd .tit').on('click', function(){
		$(this).next().stop().slideToggle(500);
		$(this).toggleClass('open');
});


$('a[href^=#]').click(function() {
		 var speed = 400;
		 var href= $(this).attr("href");
		 var target = $(href == "#" || href == "" ? 'html' : href);
		 var position = target.offset().top;
		 $('body,html').animate({scrollTop:position}, speed, 'swing');
		 return false;
});
});
