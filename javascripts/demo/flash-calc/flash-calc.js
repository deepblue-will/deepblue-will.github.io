(function() {
  $(function() {
    var answerArea, calcArea, createQuestion, level, levels, modeSelectArea, quis, resultArea, setAnswer, showInOrder;
    levels = {
      easy: {
        name: "かんたん",
        length: 10,
        min: 1,
        max: 9,
        interval: 1000
      },
      normal: {
        name: "ふつう",
        length: 10,
        min: 1,
        max: 9,
        interval: 500
      },
      hard: {
        name: "むずい",
        length: 15,
        min: 1,
        max: 99,
        interval: 700
      },
      veryHard: {
        name: "ちょーむずい",
        length: 15,
        min: 1,
        max: 999,
        interval: 600
      }
    };
    modeSelectArea = $(".mode-select-area");
    calcArea = $(".calc-area");
    answerArea = $(".answer-area");
    resultArea = $(".result-area");
    level = {};
    quis = {};
    $(".start-btn").on("click", function() {
      $(".opening-area").hide();
      return modeSelectArea.show();
    });
    modeSelectArea.find(".btn").on("click", function() {
      level = levels[$(this).attr("data-level")];
      modeSelectArea.hide();
      quis = createQuestion(level);
      calcArea.show();
      return showInOrder($(".count-down"), ["③", "②", "①"], 1000, function() {
        return showInOrder($(".calc"), quis.rmds, level.interval, function() {
          calcArea.hide();
          setAnswer(answerArea, quis.sum);
          return answerArea.show();
        });
      });
    });
    answerArea.find(".btn").on("click", function() {
      var tweetUrl;
      answerArea.hide();
      resultArea.show();
      tweetUrl = resultArea.find(".tweet-btn").attr("href");
      if (quis.sum === $(this).attr("data-answer")) {
        resultArea.find(".tweet-btn").attr("href", "" + tweetUrl + "&text=" + (encodeURI("ふらっしゅあんざんのレベル「" + level.name + "」をくりあ！\n")));
        return resultArea.find(".success").show();
      } else {
        resultArea.find(".failed .answer").text(quis.sum);
        resultArea.find(".tweet-btn").attr("href", "" + tweetUrl + "&text=" + (encodeURI("ふらっしゅあんざんのレベル「" + level.name + "」のクリアに失敗...\n")));
        return resultArea.find(".failed").show();
      }
    });
    showInOrder = function(target, ary, interval, callback) {
      var index, timer;
      index = 0;
      return timer = setInterval(function() {
        var count, sleep;
        if (index === ary.length) {
          clearInterval(timer);
          target.hide();
          return callback();
        } else {
          target.hide();
          target.text(ary[index]);
          count = 0;
          sleep = setInterval(function() {
            if (count > 0) {
              return clearInterval(sleep);
            } else {
              target.show();
              return count++;
            }
          }, 20);
          return index++;
        }
      }, interval);
    };
    createQuestion = function(obj) {
      var i, result, rmd, _i, _ref;
      result = {
        sum: 0,
        rmds: []
      };
      for (i = _i = 1, _ref = obj.length; 1 <= _ref ? _i <= _ref : _i >= _ref; i = 1 <= _ref ? ++_i : --_i) {
        rmd = Math.floor(Math.random() * (obj.max - obj.min) + obj.min);
        result.rmds.push(rmd);
        result.sum = result.sum + rmd;
      }
      return result;
    };
    return setAnswer = function(target, answer) {
      var answers;
      answers = [answer, answer + 10, answer - 20, answer + Math.floor(Math.random() * 9 + 1), answer + Math.floor(Math.random() * 20 + 10)];
      answers.sort(function() {
        return Math.random() - .5;
      });
      return target.find(".btn").each(function(i) {
        $(this).attr("data-answer", answers[i]);
        return $(this).text(answers[i]);
      });
    };
  });

}).call(this);
