$(function(){
  // TODO カンニングはだめですよ！
  var todohukenData = [
    {
        "code": 1,
        "name": "北海道",
        "cityNames": [
            "北見市",
            "札幌市",
            "赤平市"
        ],
        "infos": [
            "玉ねぎの収穫量が一番多い(2014年度)",
            "コンビニの店舗数が一番多い(2014年度)",
            "日本で唯一流氷が見れる"
        ]
    },
    {
        "code": 2,
        "name": "青森県",
        "cityNames": [
            "弘前市",
            "風間浦村",
            "十和田市"
        ],
        "infos": [
            "りんごの収穫量が一番多い(2009年度)",
            "インスタントラーメンの消費量が一番多い(2008年度)",
            "ねぶた祭が有名"
        ]
    },
    {
        "code": 3,
        "name": "岩手県",
        "cityNames": [
            "盛岡市",
            "遠野市",
            "雫石町"
        ],
        "infos": [
            "面積が2番目に大きい",
            "ゼリーの消費量が1番多い(2012年度)",
            "わんこそばが有名"
        ]
    },
    {
        "code": 4,
        "name": "宮城県",
        "cityNames": [
            "仙台市",
            "気仙沼市",
            "七ヶ宿町"
        ],
        "infos": [
            "イエローハットの店舗数が一番多い(2009年度)",
            "牛たんが有名",
            "楽天ゴールデンイーグルスの本拠地"
        ]
    },
    {
        "code": 5,
        "name": "秋田県",
        "cityNames": [
            "能代市",
            "男鹿市",
            "八郎潟町"
        ],
        "infos": [
            "全国学力テストの平均点が一番高い(2013年度)",
            "きりたんぽが有名",
            "美人が多いと言われている"
        ]
    },
    {
        "code": 6,
        "name": "山形県",
        "cityNames": [
            "米沢市",
            "鶴岡市",
            "最上町"
        ],
        "infos": [
            "さくらんぼの収穫量が一番多い(2014年度)",
            "ラーメン店が一番多い(2013年度)",
            "米沢牛が有名"
        ]
    },
    {
        "code": 7,
        "name": "福島県",
        "cityNames": [
            "郡山市",
            "会津若松市",
            "大玉村"
        ],
        "infos": [
            "農業経営体総合計が一番多い(2010年度)",
            "縮れ麺が特徴の「喜多方ラーメン」が有名",
            "郷土玩具である「おきあがりこぼし」が有名"
        ]
    },
    {
        "code": 8,
        "name": "茨城県",
        "cityNames": [
            "つくば市",
            "水戸市",
            "那珂市"
        ],
        "infos": [
            "花粉の飛散量が一番多い(2013年度)",
            "メロンの収穫量が1番多い(2009年度)",
            "米米ＣＬＵＢのボーカル「石井竜也」の出身地"
        ]
    },
    {
        "code": 9,
        "name": "栃木県",
        "cityNames": [
            "日光市",
            "宇都宮市",
            "野木町"
        ],
        "infos": [
            "いちごの収穫量が一番多い(2009年度)",
            "鬼怒川温泉が有名",
            "レモン牛乳が有名"
        ]
    },
    {
        "code": 10,
        "name": "群馬県",
        "cityNames": [
            "高崎市",
            "富岡市",
            "片品村"
        ],
        "infos": [
            "セーブオンの店舗数が一番多い(2013年度)",
            "ネットでなぜか未開の地として恐れられている",
            "草津温泉が有名"
        ]
    },
    {
        "code": 11,
        "name": "埼玉県",
        "cityNames": [
            "川越市",
            "春日部市",
            "深谷市"
        ],
        "infos": [
            "ペットの飼育費用が一番高い(2011年度)",
            "ガリガリ君の出身地",
            "深谷ねぎが有名"
        ]
    },
    {
        "code": 12,
        "name": "千葉県",
        "cityNames": [
            "銚子市",
            "神崎町",
            "船橋市"
        ],
        "infos": [
            "ほうれん草の収穫量が一番多い(2009年度)",
            "夢の国がコンセプトのテーマパーク「ディズニーランド」がある",
            "サイゼリヤが一番多い(2009年度)"
        ]
    },
    {
        "code": 13,
        "name": "東京都",
        "cityNames": [
            "新宿区",
            "小平市",
            "清瀬市"
        ],
        "infos": [
            "65歳以上の人口が一番多い(2014年度)",
            "Twitterユーザー数が一番多い(2013年度)",
            "日本最古の結婚式場がある"
        ]
    },
    {
        "code": 14,
        "name": "神奈川県",
        "cityNames": [
            "寒川町",
            "南足柄市",
            "藤沢市"
        ],
        "infos": [
            "電力の使用量が3番目に多い(2012年度)",
            "サザンオールスターズの桑田佳祐の出身地",
            "デートスポットで有名なみなとみらいがある"
        ]
    },
    {
        "code": 15,
        "name": "新潟県",
        "cityNames": [
            "魚沼市",
            "五泉市",
            "弥彦村"
        ],
        "infos": [
            "米の収穫量が一番多い(2014年度)",
            "「かんずり」という香辛料がある",
            "三大花火大会のひとつ「長岡まつり大花火大会」が有名"
        ]
    },
    {
        "code": 16,
        "name": "富山県",
        "cityNames": [
            "氷見市",
            "黒部市",
            "射水市"
        ],
        "infos": [
            "ウォシュレットの普及率が一番高い(2009年度)",
            "薬売りが有名",
            "きときと寿しという回転寿司チェーンがある"
        ]
    },
    {
        "code": 17,
        "name": "石川県",
        "cityNames": [
            "金沢市",
            "七尾市",
            "能美市"
        ],
        "infos": [
            "カレー屋が一番多い(2013年度)",
            "輪島塗が有名",
            "お笑い芸人「ダンディ坂野」の出身地"
        ]
    },
    {
        "code": 18,
        "name": "福井県",
        "cityNames": [
            "津軽市",
            "三方上中郡若狭町",
            "坂井市"
        ],
        "infos": [
            "47都道府県での幸せ度ランキング第1位",
            "ミスタードーナツの店舗数が一番多い(2013年度)",
            "東尋坊が有名"
        ]
    },
    {
        "code": 19,
        "name": "山梨県",
        "cityNames": [
            "南アルプス市",
            "大月市",
            "甲斐市"
        ],
        "infos": [
            "B-1グランプリで1位になったこともある「甲府もつ煮」が有名",
            "ももの収穫量が一番多い(2014年度)",
            "ガストが一番多い(2009年度)"
        ]
    },
    {
        "code": 20,
        "name": "長野県",
        "cityNames": [
            "小諸市",
            "南牧村",
            "軽井沢町"
        ],
        "infos": [
            "市町村数が2番目に多い(2014年度)",
            "コース面積が1番広いスキー場がある",
            "歌手「美川憲一」の出身地"
        ]
    },
    {
        "code": 21,
        "name": "岐阜県",
        "cityNames": [
            "下呂市",
            "海津市",
            "飛騨市"
        ],
        "infos": [
            "下呂温泉が有名",
            "白川郷が湯名",
            "俳優「綾野剛」の出身地"
        ]
    },
    {
        "code": 22,
        "name": "静岡県",
        "cityNames": [
            "浜松市",
            "富士宮市",
            "菊川市"
        ],
        "infos": [
            "B-1グランプリで1位になったこともある「富士宮やきそば」が有名",
            "熱海温泉が有名",
            "うなぎパイが有名"
        ]
    },
    {
        "code": 23,
        "name": "愛知県",
        "cityNames": [
            "豊田市",
            "熱田区",
            "碧南市"
        ],
        "infos": [
            "都道府県別総生産(連結式)が3番目に高い",
            "自動車保有台数が1番多い(2010年度)",
            "みそかつが有名"
        ]
    },
    {
        "code": 24,
        "name": "三重県",
        "cityNames": [
            "南伊勢市",
            "鳥羽市",
            "紀宝町"
        ],
        "infos": [
            "伊勢神宮が有名",
            "松阪牛が有名",
            "俳優の椎名桔平の出身地"
        ]
    },
    {
        "code": 25,
        "name": "滋賀県",
        "cityNames": [
            "竜王町",
            "栗東市",
            "近江八幡市"
        ],
        "infos": [
            "2010年のゆるキャラグランプリで1位になった「ひこにゃん」が有名",
            "日本一大きい湖「琵琶湖」がある",
            "マクドナルドの店舗数が一番多い(2013年度)"
        ]
    },
    {
        "code": 26,
        "name": "京都府",
        "cityNames": [
            "与謝野町",
            "宇治市",
            "亀岡市"
        ],
        "infos": [
            "大学進学率が一番高い(2010年度)",
            "清水寺が有名",
            "平安京があったことでも有名"
        ]
    },
    {
        "code": 27,
        "name": "大阪府",
        "cityNames": [
            "堺市",
            "池田市",
            "阪南市"
        ],
        "infos": [
            "47都道府県での幸せ度ランキング最下位",
            "高さ300m日本一の超高層複合ビル「あべのハルカス」が有名",
            ""
        ]
    },
    {
        "code": 28,
        "name": "兵庫県",
        "cityNames": [
            "相生市",
            "淡路町",
            "宍粟市"
        ],
        "infos": [
            "タコと卵でつくる「明石焼き」が有名",
            "別名白鷺城とも言われる「姫路城」が有名",
            "高校野球でおなじみの「甲子園球場」がある"
        ]
    },
    {
        "code": 29,
        "name": "奈良県",
        "cityNames": [
            "天理市",
            "生駒市",
            "五條市"
        ],
        "infos": [
            "日本最古の木造建築物がある",
            "平城京があったことで有名",
            "Kinki Kidsの「堂本剛」の出身地"
        ]
    },
    {
        "code": 30,
        "name": "和歌山県",
        "cityNames": [
            "新宮市",
            "みなべ町",
            "紀の川市"
        ],
        "infos": [
            "うめの収穫量が一番多い(2014年度)",
            "みかんの収穫量が一番多い(2009年度)",
            "プロ野球選手が一番多い出身地(2009年度)"
        ]
    },
    {
        "code": 31,
        "name": "鳥取県",
        "cityNames": [
            "米子市",
            "八頭町",
            "倉吉市"
        ],
        "infos": [
            "65歳以上の人口が一番少ない(2014年度)",
            "砂丘が有名",
            "牛骨ラーメンが有名"
        ]
    },
    {
        "code": 32,
        "name": "島根県",
        "cityNames": [
            "松江市",
            "出雲市",
            "海士町"
        ],
        "infos": [
            "自動車保有台数が一番少ない(2010年度)",
            "縁結びので有名な「出雲大社」が有名",
            "女優「江角マキコ」の出身地"
        ]
    },
    {
        "code": 33,
        "name": "岡山県",
        "cityNames": [
            "倉敷市",
            "美咲町",
            "備前市"
        ],
        "infos": [
            "日本有数の工場地帯「水島コンビナート」が有名",
            "駅前に銅像がある「桃太郎」発祥の地",
            "ソース味の炒めごはん「えびめし」が有名"
        ]
    },
    {
        "code": 34,
        "name": "広島県",
        "cityNames": [
            "呉市",
            "三原市",
            "世羅町"
        ],
        "infos": [
            "世界遺産の厳島神社がある",
            "化粧品購入量が一番多い(2014年度)",
            "ミュージシャン「矢沢永吉」の出身地"
        ]
    },
    {
        "code": 35,
        "name": "山口県",
        "cityNames": [
            "下関市",
            "宇部市",
            "周南市"
        ],
        "infos": [
            "キャンディーの消費量が一番多い(2012年度)",
            "中村さんが一番多い(2014年度)",
            "「ばりそば」というかた焼きそばが有名"
        ]
    },
    {
        "code": 36,
        "name": "徳島県",
        "cityNames": [
            "阿南市",
            "阿波市",
            "鳴門市"
        ],
        "infos": [
            "魚のすり身に更新料を入れ、パン粉をまぶした揚げ物「フィッシュカツ」が有名",
            "阿波おどりという夏祭りが有名",
            "元プロ野球選手「板東英二」の出身地"
        ]
    },
    {
        "code": 37,
        "name": "香川県",
        "cityNames": [
            "丸亀市",
            "琴平町",
            "さぬき市"
        ],
        "infos": [
            "面積が1番小さい",
            "国民年金受給額が一番多い(2012年度)",
            "讃岐うどんがゆうめい"
        ]
    },
    {
        "code": 38,
        "name": "愛媛県",
        "cityNames": [
            "松山市",
            "今治市",
            "四国中央市"
        ],
        "infos": [
            "キウイの収穫量が一番多い(2013年度)",
            "道後温泉が有名",
            "SMAPの「草なぎ剛」の出身地"
        ]
    },
    {
        "code": 39,
        "name": "高知県",
        "cityNames": [
            "室戸市",
            "香美市",
            "四万十市"
        ],
        "infos": [
            "ナスの収穫量が一番多い(2014年度)",
            "飲酒費用の平均額が一番高い(2012年度)",
            "TSUTAYAの店舗数が一番多い(2013年度)"
        ]
    },
    {
        "code": 40,
        "name": "福岡県",
        "cityNames": [
            "北九州市",
            "八女市",
            "うきは市"
        ],
        "infos": [
            "焼き鳥店が一番多い(2013年度)",
            "スピッツのボーカル「草野マサムネ」の出身地",
            "天神さまとお祀りしている「太宰府天満宮」が有名"
        ]
    },
    {
        "code": 41,
        "name": "佐賀県",
        "cityNames": [
            "鳥栖市",
            "多久市",
            "吉野ヶ里町"
        ],
        "infos": [
            "磁器「有田焼き」が有名",
            "弥生時代の遺跡「吉野ヶ里遺跡」が有名",
            "タレントの「江頭2:50」の出身地"
        ]
    },
    {
        "code": 42,
        "name": "長崎県",
        "cityNames": [
            "佐世保市",
            "壱岐市",
            "雲仙市"
        ],
        "infos": [
            "びわの収穫量が一番多い(2014年度)",
            "オランダの町並みを再現した「ハウステンボス」が有名",
            "ボリューム感のある「佐世保バーガー」が有名"
        ]
    },
    {
        "code": 43,
        "name": "熊本県",
        "cityNames": [
            "八代市",
            "上天草市",
            "合志市"
        ],
        "infos": [
            "スイカの収穫量が一番多い(2009年度)",
            "トマトの収穫量が一番多い(2014年度)",
            "世界最大級のカルデラがある"
        ]
    },
    {
        "code": 44,
        "name": "大分県",
        "cityNames": [
            "佐伯市",
            "別府市",
            "九重町"
        ],
        "infos": [
            "ロッテリアの店舗数が一番多い(2009年度)",
            "「おんせん県」をうたっている",
            "鶏のてんぷら「とり天」が有名"
        ]
    },
    {
        "code": 45,
        "name": "宮崎県",
        "cityNames": [
            "日南市",
            "えびの市",
            "日向市"
        ],
        "infos": [
            "きゅうりの収穫量が一番多い(2014年度)",
            "ご飯に冷たい汁をかけていただく「冷や汁」が有名",
            "「鬼の洗濯岩」と呼ばれる波状岩がある"
        ]
    },
    {
        "code": 46,
        "name": "鹿児島県",
        "cityNames": [
            "指宿市",
            "垂水市",
            "日置市"
        ],
        "infos": [
            "世界遺産である屋久島がある",
            "「しろくま」と呼ばれるかき氷が有名",
            "元アイドル「国生さゆり」の出身地"
        ]
    },
    {
        "code": 47,
        "name": "沖縄県",
        "cityNames": [
            "読谷村",
            "名護市",
            "久米島町"
        ],
        "infos": [
            "ファミリーマートの店舗数が一番多い(2014年度)",
            "合計特殊出生率が一番高い(2013年度)",
            "2008年までギネスブック公認されてた世界最大のアクリルパネルのある水族館がある"
        ]
    }
  ];

  var questions = shuffle(todohukenData);
  var modeMap = {"easy": "初級", "normal": "中級", "hard": "上級"};
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
