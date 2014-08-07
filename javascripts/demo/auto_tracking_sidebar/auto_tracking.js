(function() {
  $(function() {
    var footer, target, targetHeight, targetTop;
    target = $(".fixed-item");
    footer = $("footer");
    targetHeight = target.outerHeight(true);
    targetTop = target.offset().top;
    return $(window).scroll(function() {
      var customTopPosition, footerTop, scrollTop;
      scrollTop = $(this).scrollTop();
      if (scrollTop > targetTop) {
        footerTop = footer.offset().top;
        if (scrollTop + targetHeight > footerTop) {
          customTopPosition = footerTop - (scrollTop + targetHeight);
          return target.css({
            position: "fixed",
            top: customTopPosition + "px"
          });
        } else {
          return target.css({
            position: "fixed",
            top: "10px"
          });
        }
      } else {
        return target.css({
          position: "static",
          top: "auto"
        });
      }
    });
  });

}).call(this);
