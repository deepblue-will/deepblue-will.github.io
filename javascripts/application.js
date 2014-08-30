(function() {
  $(function() {
    var date, weeks;
    weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    date = new Date();
    $(".current-week").text(weeks[date.getDay()]);
    return $(".current-time").text("" + (date.getHours()) + ":" + (("0" + date.getMinutes()).slice(-2)));
  });

}).call(this);
