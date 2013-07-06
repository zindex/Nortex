$(function(){
    $('.coursemap__btn a').click(function(e){
        var cnt = $('.cnt'),
            ftr = $('.ftr-i'),
            icon = $('.ico_type_coursemap',this),
            siteMap = $('.coursemap__content');

        icon.toggleClass('ico_type_coursemap-active');
        ftr.toggleClass('ftr-i_opened');
        cnt.toggleClass('cnt_opened');

        siteMap.slideToggle();
        if(siteMap.is(':visible')){
            destination = $(this).offset().top;
            $("body:not(:animated)").animate({ scrollTop: destination }, 1000);
            $("html").animate({ scrollTop: destination }, 500);
        }

        e.preventDefault();
    });

    $(".cnt__case-faq-dot-btn").click(function(e){
        var textShow = $(this).attr("data-showtext"),
            textHide = $(this).attr("data-hidetext"),
            block = $(this).parents(".cnt__case-faq-dot"),
            pfull = $(".cnt__case-faq-dot-text-hide",block),
            pshort = $(".cnt__case-faq-dot-text",block);

        if( pfull.is(":hidden")){
            block.addClass("cnt__case-faq-dot-opened");
            pshort.hide();
            pfull.show();
            $(this).text(textHide);
        }
        else{
            block.removeClass("cnt__case-faq-dot-opened");
            pshort.show();
            pfull.hide();
            $(this).text(textShow);
        }

        e.preventDefault();
    });
});


function InitIE(){
	if (($.browser.msie) && (/MSIE (5\.5|6).+Win/.test(navigator.userAgent))) {

	}
}

