
$(function() {
    $('.adv_list').each(function() {
        if ($(this).find('.item').length < 2) {
            return;
        }
        Swipe(this, {
            startSlide: 2,
            speed: 800,
            auto: 3000,
            continuous: true,
            disableScroll: false,
            stopPropagation: false,
            callback: function(index, elem) {},
            transitionEnd: function(index, elem) {}
        });
    });
//  列表导航
    $(".headerNav a").click(function(){
     	$(this).addClass("activeBor").siblings().removeClass("activeBor");
    });
});
