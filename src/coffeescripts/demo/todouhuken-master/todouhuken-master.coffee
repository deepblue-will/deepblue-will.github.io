$(->
  questions = []
  $.getJSON("data.json", (data) ->
    questions = shuffle(data)
  )
  modeMap = {"easy": "初級", "normal": "中級", "hard": "上級"}
  mode = ""
  currentQuestion = ""
  questionIdx = 0
  
  questionSentence = $(".question")
  correctMsg = $(".correct-msg")
  
  $(".mini-map").japanMap({
    drawsBoxLine: false,
    width: 544,
  })
  
  $(".map").japanMap({
    drawsBoxLine: false,
    movesIslands: true,
    width: 800,
    onSelect: (data) ->
      judge(data)
  })
  
  # 難易度選択ボタンのツールチップ
  $(".mode-select-btns .btn").on({
    'mouseenter': (e) ->
        popover = $(@).next(".popover")
        offset = $(@).offset()
        popover.css({
            left: (offset.left + $(@).innerWidth() / 2 - popover.innerWidth() / 2) + "px",
            top: (offset.top - popover.innerHeight() - 8) + "px"
        })
        popover.fadeIn(400)
    ,
    'mouseleave': ->
        popover = $(@).next(".popover")
        popover.fadeOut(200)
  })
  
  # 難易度選択時の動作
  $(".mode-select-btns .btn").on('click', ->
      mode = $(@).attr("data-mode")
      $(".opening-area").fadeOut(400, ->
          $(".map-area").fadeIn(400, ->
              question()
          )
      )
  )
  
  # 地図選択時の正解不正解の判定
  judge = (data) ->
    questionSentence.hide()
    
    if currentQuestion == ""
    else if questionIdx == 47
      #クリアモーダル
      $(".map-area").fadeOut(600, ->
        msgArea = $(".all-clear.result-msg-area")
        msgArea.find(".result-msg strong").text(modeMap[mode])
        msgArea.fadeIn(400, ->
          tweetBtn = $(@).find(".btn.tweet")
          baseUrl = tweetBtn.attr("href")
          tweetBtn.attr("href", createTweetUrl(baseUrl, "難易度:「#{modeMap[mode]}」クリア！あなたはどれくらい都道府県のこと知ってる？「都道府県ますたー」"))
        )
      )
    else if data.code == currentQuestion.code
      # 判定中に地図をクリックされるのを防止。
      currentQuestion = ""
      correctMsg.fadeIn(400, ->
        correctMsg.fadeOut(300, ->
          question()
        )
      )
    else
      # 失敗モーダル
      $(".map-area").fadeOut(600, ->
        msgArea = $(".failed.result-msg-area")
        msgArea.find(".result-msg strong").text(String(questionIdx - 1))
        if mode == "normal" || mode == "hard"
          msgArea.find(".result-msg .additional-msg").html("正解は<strong>#{currentQuestion.name}</strong>です。")
        msgArea.fadeIn(400, ->
          tweetBtn = $(@).find(".btn.tweet")
          baseUrl = tweetBtn.attr("href")
          tweetBtn.attr("href", createTweetUrl(baseUrl, "難易度:「#{modeMap[mode]}」#{String(questionIdx - 1)}問連続正解！あなたはどれくらい都道府県のこと知ってる？「都道府県ますたー」"))
        )
      )
  
  # 難易度に応じた問題を出題
  question = ->
    currentQuestion = questions[questionIdx]
    questionIdx += 1
    switch mode
      when "easy"
        questionSentence.html("<strong>#{currentQuestion.name}</strong>はどこ？")
      when "normal"
        cityName = currentQuestion.cityNames[Math.floor(Math.random() * 3)]
        questionSentence.html("<strong>#{cityName}</strong>がある都道府県はどこ？")
      when "hard"
        info = currentQuestion.infos[Math.floor(Math.random() * 3)]
        questionSentence.html("<strong>#{info}</strong></br>この都道府県はどこ？")
    questionSentence.fadeIn(400)
  
  # ツイートURLを作成
  createTweetUrl = (baseUrl, text) ->
    "#{baseUrl}&text=#{encodeURI(text)}"
  
  # 指定の配列をシャッフル
  shuffle = (array) ->
    m = array.length
    t
    i
    while m
      i = Math.floor(Math.random() * m--)
      t = array[m]
      array[m] = array[i]
      array[i] = t
    array
)
