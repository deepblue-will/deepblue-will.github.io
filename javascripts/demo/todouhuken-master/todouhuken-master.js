(function() {
  $(function() {
    var correctMsg, createTweetUrl, currentQuestion, judge, mode, modeMap, question, questionIdx, questionSentence, questions, shuffle;
    questions = [];
    $.getJSON("data.json", function(data) {
      return questions = shuffle(data);
    });
    modeMap = {
      "easy": "初級",
      "normal": "中級",
      "hard": "上級"
    };
    mode = "";
    currentQuestion = "";
    questionIdx = 0;
    questionSentence = $(".question");
    correctMsg = $(".correct-msg");
    $(".mini-map").japanMap({
      drawsBoxLine: false,
      width: 544
    });
    $(".map").japanMap({
      drawsBoxLine: false,
      movesIslands: true,
      width: 800,
      onSelect: function(data) {
        return judge(data);
      }
    });
    $(".mode-select-btns .btn").on({
      'mouseenter': function(e) {
        var offset, popover;
        popover = $(this).next(".popover");
        offset = $(this).offset();
        popover.css({
          left: (offset.left + $(this).innerWidth() / 2 - popover.innerWidth() / 2) + "px",
          top: (offset.top - popover.innerHeight() - 8) + "px"
        });
        return popover.fadeIn(400);
      },
      'mouseleave': function() {
        var popover;
        popover = $(this).next(".popover");
        return popover.fadeOut(200);
      }
    });
    $(".mode-select-btns .btn").on('click', function() {
      mode = $(this).attr("data-mode");
      return $(".opening-area").fadeOut(400, function() {
        return $(".map-area").fadeIn(400, function() {
          return question();
        });
      });
    });
    judge = function(data) {
      questionSentence.hide();
      if (currentQuestion === "") {

      } else if (questionIdx === 47) {
        return $(".map-area").fadeOut(600, function() {
          var msgArea;
          msgArea = $(".all-clear.result-msg-area");
          msgArea.find(".result-msg strong").text(modeMap[mode]);
          return msgArea.fadeIn(400, function() {
            var baseUrl, tweetBtn;
            tweetBtn = $(this).find(".btn.tweet");
            baseUrl = tweetBtn.attr("href");
            return tweetBtn.attr("href", createTweetUrl(baseUrl, "難易度:「" + modeMap[mode] + "」クリア！あなたはどれくらい都道府県のこと知ってる？「都道府県ますたー」"));
          });
        });
      } else if (data.code === currentQuestion.code) {
        currentQuestion = "";
        return correctMsg.fadeIn(400, function() {
          return correctMsg.fadeOut(300, function() {
            return question();
          });
        });
      } else {
        return $(".map-area").fadeOut(600, function() {
          var msgArea;
          msgArea = $(".failed.result-msg-area");
          msgArea.find(".result-msg strong").text(String(questionIdx - 1));
          if (mode === "normal" || mode === "hard") {
            msgArea.find(".result-msg .additional-msg").html("正解は<strong>" + currentQuestion.name + "</strong>です。");
          }
          return msgArea.fadeIn(400, function() {
            var baseUrl, tweetBtn;
            tweetBtn = $(this).find(".btn.tweet");
            baseUrl = tweetBtn.attr("href");
            return tweetBtn.attr("href", createTweetUrl(baseUrl, "難易度:「" + modeMap[mode] + "」" + (String(questionIdx - 1)) + "問連続正解！あなたはどれくらい都道府県のこと知ってる？「都道府県ますたー」"));
          });
        });
      }
    };
    question = function() {
      var cityName, info;
      currentQuestion = questions[questionIdx];
      questionIdx += 1;
      switch (mode) {
        case "easy":
          questionSentence.html("<strong>" + currentQuestion.name + "</strong>はどこ？");
          break;
        case "normal":
          cityName = currentQuestion.cityNames[Math.floor(Math.random() * 3)];
          questionSentence.html("<strong>" + cityName + "</strong>がある都道府県はどこ？");
          break;
        case "hard":
          info = currentQuestion.infos[Math.floor(Math.random() * 3)];
          questionSentence.html("<strong>" + info + "</strong></br>この都道府県はどこ？");
      }
      return questionSentence.fadeIn(400);
    };
    createTweetUrl = function(baseUrl, text) {
      return "" + baseUrl + "&text=" + (encodeURI(text));
    };
    return shuffle = function(array) {
      var i, m, t;
      m = array.length;
      t;
      i;
      while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
      return array;
    };
  });

}).call(this);
