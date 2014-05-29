$(function(){
  var levels = {
    easy: {
      name: "かんたん", length: 10, min: 1, max: 9, interval: 1000
    },
    normal: {
      name: "ふつう", length: 10, min: 1, max: 9, interval: 500
    },
    hard: {
      name: "むずい", length: 15, min: 1, max: 99, interval: 300
    },
    veryHard: {
      name: "ちょーむずい", length: 15, min: 1, max: 999, interval: 200
    }
  }
  var modeSelectArea = $(".mode-select-area");
  var calcArea = $(".calc-area");
  var answerArea = $(".answer-area");
  var resultArea = $(".result-area");
  var level = {};
  var quis = {};
  
  $(".start-btn").on("click", function(){
    $(".opening-area").hide();
    modeSelectArea.show();
  });
  
  modeSelectArea.find(".btn").on("click", function(){
    level = levels[$(this).attr("data-level")];
    modeSelectArea.hide();
    quis = createQuestion(level);
    calcArea.show();
    showInOrder($(".count-down"), ["③", "②", "①"], 1000, function(){
      showInOrder($(".calc"), quis.rmds, level.interval, function(){
        calcArea.hide();
        setAnswer(answerArea, quis.sum);
        answerArea.show();
      })
    });
  });
  
  answerArea.find(".btn").on("click", function(){
    answerArea.hide();
    resultArea.show();
    var tweetUrl = resultArea.find(".tweet-btn").attr("href");
    if(quis.sum == $(this).attr("data-answer")){
      resultArea.find(".tweet-btn").attr("href", tweetUrl + "&text=" + encodeURI("ふらっしゅあんざんのレベル「"+ level.name +"」をくりあ！\n"));
      resultArea.find(".success").show();
    } else {
      resultArea.find(".failed .answer").text(quis.sum);
      resultArea.find(".tweet-btn").attr("href", tweetUrl + "&text=" + encodeURI("ふらっしゅあんざんのレベル「"+ level.name +"」のクリアに失敗...\n"));
      resultArea.find(".failed").show();
    }
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
  
  function setAnswer(target, answer){
    answers = [answer, answer + 10, answer -20, answer + Math.floor(Math.random() * 9 + 1), answer + Math.floor(Math.random() * 20 + 10)];
    answers.sort(function(){
      return Math.random() - .5;
    });
    target.find(".btn").each(function(i){
      $(this).attr("data-answer", answers[i]);
      $(this).text(answers[i]);
    });
  }
});
