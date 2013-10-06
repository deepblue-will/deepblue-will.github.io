$(function(){
    var msgAry = [
        "ﾀﾞｯｼｭ!≡≡≡ﾍ(*--)ﾉ",
        "(((((((/;_;)/ ﾋｨｨｲｲｰ!!",
        "(((((･_･;)",
        "((((((^_^;)ﾆｹﾞﾖｯ",
        "εε= κ( ` ▽´)κｹｹｹ"
    ]

    $(".uzai-btn").on('mouseenter', function() {
        var rndMsg = Math.floor(Math.random() * 5);
        var rndClone = Math.floor(Math.random() * 11);
        var rndBottom = Math.floor(Math.random() * 81);
        var rndLeft = Math.floor(Math.random() * 81);
        
        var btnGroup = $(this).parents(".uzai-group");
        btnGroup.animate({
            "bottom": rndBottom + "%",
            "left": rndLeft + "%"
        }, 100);

        var msgBox = btnGroup.find(".uzai-msg");
        msgBox.text(msgAry[rndMsg]);
        msgBox.show();

        if (rndClone == 0) {
            var cloneMsg = "分身!((((-(-o()o-)-))))"
            var cloneGroup = btnGroup.clone(true);
            var clRndLeft = rndLeft
            
            cloneGroup.find(".uzai-msg").text(cloneMsg);
            msgBox.text(cloneMsg);
            if (clRndLeft >= 65) {
                clRndLeft = clRndLeft - 15;
            }else{
                clRndLeft = clRndLeft + 15;
            };
            cloneGroup.css({
                "bottom": rndBottom + "%",
                "left": clRndLeft + "%"
            });
            $("#container").append(cloneGroup);
        };
    });
});
