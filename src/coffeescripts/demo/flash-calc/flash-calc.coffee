$(->
  levels = {
    easy: {
      name: "かんたん", length: 10, min: 1, max: 9, interval: 1000
    },
    normal: {
      name: "ふつう", length: 10, min: 1, max: 9, interval: 500
    },
    hard: {
      name: "むずい", length: 15, min: 1, max: 99, interval: 700
    },
    veryHard: {
      name: "ちょーむずい", length: 15, min: 1, max: 999, interval: 600
    }
  }
  modeSelectArea = $(".mode-select-area")
  calcArea = $(".calc-area")
  answerArea = $(".answer-area")
  resultArea = $(".result-area")
  level = {}
  quis = {}
  
  $(".start-btn").on("click", ->
    $(".opening-area").hide()
    modeSelectArea.show()
  )
  
  modeSelectArea.find(".btn").on("click", ->
    level = levels[$(@).attr("data-level")]
    modeSelectArea.hide()
    quis = createQuestion(level)
    calcArea.show()
    showInOrder($(".count-down"), ["③", "②", "①"], 1000, ->
      showInOrder($(".calc"), quis.rmds, level.interval, ->
        calcArea.hide()
        setAnswer(answerArea, quis.sum)
        answerArea.show()
      )
    )
  )
  
  answerArea.find(".btn").on("click", ->
    answerArea.hide()
    resultArea.show()
    tweetUrl = resultArea.find(".tweet-btn").attr("href")
    if quis.sum == $(@).attr("data-answer")
      resultArea.find(".tweet-btn").attr("href", "#{tweetUrl}&text=#{encodeURI("ふらっしゅあんざんのレベル「#{level.name }」をくりあ！\n")}")
      resultArea.find(".success").show()
    else
      resultArea.find(".failed .answer").text(quis.sum)
      resultArea.find(".tweet-btn").attr("href", "#{tweetUrl}&text=#{encodeURI("ふらっしゅあんざんのレベル「#{level.name}」のクリアに失敗...\n")}")
      resultArea.find(".failed").show()
  )
  
  showInOrder = (target, ary, interval, callback) ->
    index = 0
    timer = setInterval( ->
      if index == ary.length
        clearInterval(timer)
        target.hide()
        callback()
      else
        target.hide()
        target.text(ary[index])
        count = 0
        # 同じ数字が連続で表示されると違いがわからないため1ミリ秒スリープする。
        sleep = setInterval( ->
          if count > 0
            clearInterval(sleep)
          else
            target.show()
            count++
        , 20)
        index++
    , interval)
  
  createQuestion = (obj) ->
    result = {sum: 0, rmds: []}
    for i in [1..obj.length]
      rmd = Math.floor(Math.random() * (obj.max - obj.min) + obj.min)
      result.rmds.push(rmd)
      result.sum = result.sum + rmd
    result
  
  setAnswer = (target, answer) -> 
    answers = [answer, answer + 10, answer - 20, answer + Math.floor(Math.random() * 9 + 1), answer + Math.floor(Math.random() * 20 + 10)]
    answers.sort( ->
      Math.random() - .5
    )
    target.find(".btn").each( (i) ->
      $(@).attr("data-answer", answers[i])
      $(@).text(answers[i])
    )
)
