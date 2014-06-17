  
$(function(){
  var modeMap = {"easy": "初級", "normal": "中級", "hard": "上級"};
  var todohukenData = [];
  $.getJSON("todofuken_data.json", function(data){
    todohukenData = data;
  });
  var questions = shuffle(todohukenData);
  var mode = "";
  var currentQuestion = "";
  var questionIdx = 0;
  
  var questionSentence = $(".question");
  var correctMsg = $(".correct-msg");
  
  
  
  $(".mini-map").japanMap({
    drawsBoxLine: false,
    width: 544,
  })
  
  $(".map").japanMap({
    drawsBoxLine: false,
    movesIslands: true,
    width: 800,
    onSelect: function(data){
      judge(data);
    }
  })
  
  // 難易度選択ボタンのツールチップ
  $(".mode-select-btns .btn").on({
    'mouseenter': function(e) {
        var popover = $(this).next(".popover");
        var offset = $(this).offset();
        popover.css({
            left: (offset.left + $(this).innerWidth()/2 - popover.innerWidth()/2) + "px",
            top: (offset.top - popover.innerHeight() - 8) + "px"
        });
        popover.fadeIn(400);
    },
    'mouseleave': function(){
        var popover = $(this).next(".popover");
        popover.fadeOut(200);
    }
  })
  
  // 難易度選択時の動作
  $(".mode-select-btns .btn").on('click', function(){
      mode = $(this).attr("data-mode");
      $(".opening-area").fadeOut(400, function() {
          $(".map-area").fadeIn(400, function(){
              question();
          });
      });
  })
  
  // 地図選択時の正解不正解の判定
  function judge(data){
    questionSentence.hide();
    
    if(currentQuestion == ""){
    }else if(questionIdx == 47){  
      //クリアモーダル
      $(".map-area").fadeOut(600, function() {
        var msgArea = $(".all-clear.result-msg-area");
        msgArea.find(".result-msg strong").text(modeMap[mode]);
        msgArea.fadeIn(400, function(){
          var tweetBtn = $(this).find(".btn.tweet");
          var baseUrl = tweetBtn.attr("href");
          tweetBtn.attr("href", createTweetUrl(baseUrl, ["難易度:「", modeMap[mode], "」", "クリア！あなたはどれくらい都道府県のこと知ってる？「都道府県ますたー」"].join("")));
        })
      });
    }else if(data.code == currentQuestion.code){
      // 判定中に地図をクリックされるのを防止。
      currentQuestion = "";
      correctMsg.fadeIn(400, function() {
        correctMsg.fadeOut(300, function() {
          question();
        });
      });
    }else{
      // 失敗モーダル
      $(".map-area").fadeOut(600, function() {
        var msgArea = $(".failed.result-msg-area");
        msgArea.find(".result-msg strong").text(String(questionIdx - 1));
        if(mode === "normal" || mode === "hard"){
          msgArea.find(".result-msg .additional-msg").html('正解は<strong>' + currentQuestion.name +'</strong>です。');
        }
        msgArea.fadeIn(400, function(){
          var tweetBtn = $(this).find(".btn.tweet");
          var baseUrl = tweetBtn.attr("href");
          tweetBtn.attr("href", createTweetUrl(baseUrl, ["難易度:「", modeMap[mode], "」", String(questionIdx - 1), "問連続正解！あなたはどれくらい都道府県のこと知ってる？「都道府県ますたー」"].join("")));
        })
      });
    }
  }
  
  // 難易度に応じた問題を出題
  function question(){
    currentQuestion = questions[questionIdx];
    questionIdx += 1;
    switch(mode){
        case "easy":
          questionSentence.html('<strong>' + currentQuestion.name +'</strong>はどこ？');
          break;
        case "normal":
          var cityName = currentQuestion.cityNames[Math.floor(Math.random() * 3)];
          questionSentence.html('<strong>' + cityName +'</strong>がある都道府県はどこ？');
          break;
        case "hard":
          var info = currentQuestion.infos[Math.floor(Math.random() * 3)];
          questionSentence.html('<strong>' + info +'</strong></br>この都道府県はどこ？');
          break;
    }
    questionSentence.fadeIn(400);
  };
  
  // ツイートURLを作成
  function createTweetUrl(baseUrl, text){
    return [baseUrl, "&text=", encodeURI(text)].join("");
  }
  
  // 指定の配列をシャッフル
  function shuffle(array) {
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }
});
