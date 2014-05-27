$(function(){
  var levels = {
    easy: {
      length: 10, min: 1, max: 9, interval: 1000
    },
    normal: {
      length: 10, min: 1, max: 9, interval: 500
    },
    hard: {
      length: 15, min: 1, max: 99, interval: 300
    },
    veryHard: {
      length: 15, min: 1, max: 999, interval: 200
    }
  }
  var level = levels["easy"];
  var quis = createQuestion(level);
  showInOrder($(".count-down"), ["③", "②", "①"], 1000, function(){
    showInOrder($(".calc"), quis.rmds, level.interval, function(){
      
    })
  });
  
  function showInOrder(target, ary, interval, callback){
    var index = 0;
    var loop = setInterval(function(){
      if(index == ary.length){
        clearInterval(loop);
        target.hide();
        callback();
      }else{
        target.hide();
        target.text(ary[index]);
        var count = 0;
        // 同じ数字が連続で表示されると違いがわからないため1ミリ秒スリープする。
        var sleep = setInterval(function(){
          if(count > 0){
            clearInterval(sleep);
          }else{
            target.show();
            count++
          }
        }, 20);
        index++;
      }
    }, interval);
  };
  
  function createQuestion(obj){
    var result = {sum: 0, rmds: []};
    for (var i = 0; i < obj.length; i++) {
      var rmd = Math.floor(Math.random() * (obj.max - obj.min) + obj.min);
      result.rmds.push(rmd);
      result.sum = result.sum + rmd;
    }
    return result;
  };
});
