$(->
  target = $(".fixed-item")
  footer = $("footer")
  targetHeight = target.outerHeight(true)
  targetTop = target.offset().top

  $(window).scroll(->
    scrollTop = $(this).scrollTop()
    if scrollTop > targetTop 
      # 動的にコンテンツが追加されてもいいように、常に計算する
      footerTop = footer.offset().top
            
      if scrollTop + targetHeight > footerTop
        customTopPosition = footerTop - (scrollTop + targetHeight)
        target.css({position: "fixed", top:  customTopPosition + "px"})
      else
        target.css({position: "fixed", top: "10px"})
    else
      target.css({position: "static", top: "auto"})
  )
)
