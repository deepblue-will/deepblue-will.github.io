$(function(){
    var target = $(".fixed-item");
    var targetTop = target.offset().top;
    var footer = $("footer")
    var footerTop = footer.offset().top;

    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();

        if(scrollTop > targetTop){
            targetHeight = target.outerHeight(true);
            if(scrollTop + targetHeight > footerTop){
                customTopPosition = footerTop - (scrollTop + targetHeight)
                target.css({position: "fixed", top:  customTopPosition + "px"});
            }else{
                target.css({position: "fixed", top: "10px"});
            }
        }else{
            target.css({position: "static", top: "auto"});
        }
    });
});
