# 現在時刻を挿入
$(->
  weeks = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
  date = new Date()
  $(".current-week").text(weeks[date.getDay()])
  $(".current-time").text("#{date.getHours()}:#{("0" + date.getMinutes()).slice(-2)}")
)

