$(->
  msgAry = [
    "ﾀﾞｯｼｭ!≡≡≡ﾍ(*--)ﾉ",
    "(((((((/_)/ ﾋｨｨｲｲｰ!!",
    "(((((･_･)",
    "((((((^_^)ﾆｹﾞﾖｯ",
    "εε= κ( ` ▽´)κｹｹｹ"
  ]

  $(".uzai-btn").on('mouseenter', ->
      rndMsg = Math.floor(Math.random() * 5)
      rndClone = Math.floor(Math.random() * 11)
      rndBottom = Math.floor(Math.random() * 81)
      rndLeft = Math.floor(Math.random() * 81)
      
      btnGroup = $(this).parents(".uzai-group")
      btnGroup.animate({
        "bottom": rndBottom + "%",
        "left": rndLeft + "%"
      }, 100)

      msgBox = btnGroup.find(".uzai-msg")
      msgBox.text(msgAry[rndMsg])
      msgBox.show()

      if rndClone == 0
        cloneMsg = "分身!((((-(-o()o-)-))))"
        cloneGroup = btnGroup.clone(true)
        clRndLeft = rndLeft
          
        cloneGroup.find(".uzai-msg").text(cloneMsg)
        msgBox.text(cloneMsg)
        if clRndLeft >= 65
            clRndLeft = clRndLeft - 15
        else
            clRndLeft = clRndLeft + 15
        
        cloneGroup.css({
            "bottom": rndBottom + "%",
            "left": clRndLeft + "%"
        })
        $("#container").append(cloneGroup)
  )
)
