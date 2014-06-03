$(function(){
  $("#map-container").japanMap({
    width: 800,
    movesIslands: true,
    onSelect: function(data){
      alert(data.code);
    }
  })
  
  
  
  
  
  /** 都道府県データ */
  var todohukenData = [
    {code: 1, name: "北海道", cityNames: ["北見市", "札幌市", "赤平市"], infos:["", "", ""]},
    {code: 2, name: "青森県", cityNames: ["弘前市", "風間浦村", "十和田市"], infos:["", "", ""]},
    {code: 3, name: "岩手県", cityNames: ["盛岡市", "遠野市", "雫石町"], infos:["", "", ""]},
    {code: 4, name: "宮城県", cityNames: ["仙台市", "気仙沼市", "七ヶ宿町"], infos:["", "", ""]},
    {code: 5, name: "秋田県", cityNames: ["能代市", "男鹿市", "八郎潟町"], infos:["", "", ""]},
    {code: 6, name: "山形県", cityNames: ["米沢市", "鶴岡市", "最上町"], infos:["", "", ""]},
    {code: 7, name: "福島県", cityNames: ["郡山市", "会津若松市", "大玉村"], infos:["", "", ""]},
    {code: 8, name: "茨城県", cityNames: ["つくば市", "水戸市", "那珂市"], infos:["", "", ""]},
    {code: 9, name: "栃木県", cityNames: ["日光市", "宇都宮市", "野木町"], infos:["", "", ""]},
    {code: 10, name: "群馬県", cityNames: ["高崎市", "富岡市", "片品村"], infos:["", "", ""]},
    {code: 11, name: "埼玉県", cityNames: ["川越市", "春日部市", "深谷市"], infos:["", "", ""]},
    {code: 12, name: "千葉県", cityNames: ["銚子市", "神崎町", "船橋市"], infos:["", "", ""]},
    {code: 13, name: "東京都", cityNames: ["新宿区", "小平市", "清瀬市"], infos:["", "", ""]},
    {code: 14, name: "神奈川県", cityNames: ["寒川町", "南足柄市", "藤沢市"], infos:["", "", ""]},
    {code: 15, name: "新潟県", cityNames: ["魚沼市", "五泉市", "弥彦村"], infos:["", "", ""]},
    {code: 16, name: "富山県", cityNames: ["氷見市", "黒部市", "射水市"], infos:["", "", ""]},
    {code: 17, name: "石川県", cityNames: ["金沢市", "七尾市", "能美市"], infos:["", "", ""]},
    {code: 18, name: "福井県", cityNames: ["津軽市", "三方上中郡若狭町", "坂井市"], infos:["", "", ""]},
    {code: 19, name: "山梨県", cityNames: ["南アルプス市", "大月市", "甲斐市"], infos:["", "", ""]},
    {code: 20, name: "長野県", cityNames: ["小諸市", "南牧村", "軽井沢町"], infos:["", "", ""]},
    {code: 21, name: "岐阜県", cityNames: ["下呂市", "海津市", "飛騨市"], infos:["", "", ""]},
    {code: 22, name: "静岡県", cityNames: ["浜松市", "富士宮市", "菊川市"], infos:["", "", ""]},
    {code: 23, name: "愛知県", cityNames: ["豊田市", "熱田区", "碧南市"], infos:["", "", ""]},
    {code: 24, name: "三重県", cityNames: ["南伊勢市", "鳥羽市", "紀宝町"], infos:["", "", ""]},
    {code: 25, name: "滋賀県", cityNames: ["竜王町", "栗東市", "近江八幡市"], infos:["", "", ""]},
    {code: 26, name: "京都府", cityNames: ["与謝野町", "宇治市", "亀岡市"], infos:["", "", ""]},
    {code: 27, name: "大阪府", cityNames: ["堺市", "池田市", "阪南市"], infos:["", "", ""]},
    {code: 28, name: "兵庫県", cityNames: ["相生市", "淡路町", "宍粟市"], infos:["", "", ""]},
    {code: 29, name: "奈良県", cityNames: ["天理市", "生駒市", "五條市"], infos:["", "", ""]},
    {code: 30, name: "和歌山県", cityNames: ["新宮市", "みなべ町", "紀の川市"], infos:["", "", ""]},
    {code: 31, name: "鳥取県", cityNames: ["米子市", "八頭町", "倉吉市"], infos:["", "", ""]},
    {code: 32, name: "島根県", cityNames: ["松江市", "出雲市", "海士町"], infos:["", "", ""]},
    {code: 33, name: "岡山県", cityNames: ["倉敷市", "美咲町", "備前市"], infos:["", "", ""]},
    {code: 34, name: "広島県", cityNames: ["呉市", "三原市", "世羅町"], infos:["", "", ""]},
    {code: 35, name: "山口県", cityNames: ["下関市", "宇部市", "周南市"], infos:["", "", ""]},
    {code: 36, name: "徳島県", cityNames: ["阿南市", "阿波市", "鳴門市"], infos:["", "", ""]},
    {code: 37, name: "香川県", cityNames: ["丸亀市", "琴平町", "さぬき市"], infos:["", "", ""]},
    {code: 38, name: "愛媛県", cityNames: ["松山市", "今治市", "四国中央市"], infos:["", "", ""]},
    {code: 39, name: "高知県", cityNames: ["室戸市", "香美市", "四万十市"], infos:["", "", ""]},
    {code: 40, name: "福岡県", cityNames: ["北九州市", "八女市", "うきは市"], infos:["", "", ""]},
    {code: 41, name: "佐賀県", cityNames: ["鳥栖市", "多久市", "吉野ヶ里町"], infos:["", "", ""]},
    {code: 42, name: "長崎県", cityNames: ["佐世保市", "壱岐市", "雲仙市"], infos:["", "", ""]},
    {code: 43, name: "熊本県", cityNames: ["八代市", "上天草市", "合志市"], infos:["", "", ""]},
    {code: 44, name: "大分県", cityNames: ["佐伯市", "別府市", "九重町"], infos:["", "", ""]},
    {code: 45, name: "宮崎県", cityNames: ["日南市", "えびの市", "日向市"], infos:["", "", ""]},
    {code: 46, name: "鹿児島県", cityNames: ["指宿市", "垂水市", "日置市"], infos:["", "", ""]},
    {code: 47, name: "沖縄県", cityNames: ["読谷村", "名護市", "久米島町"], infos:["", "", ""]}
  ]
  
});