
$(document).ready(function () {
var running = false; //control var for buttons behaviour
var i = 0; //how many cycles have passed
var cycleLimit; //how many cycles needed

function count() {
  var workTime = $("#workTime").html();
  var breakTime = $("#breakTime").html();
  var cycleLimit = $("#cycles").html()*2;
  var c;
  if (i == cycleLimit){
    running = false;
  }
  ///deciding whether to use work or break time
  if (i%2 == 0) {
    var x = workTime*60;
    var full = x;
    c = setInterval(timer,1000);
    $(".countdown").css("background-color","blue");
    $("#phase").html("Work Time!");

  }
  else {
    var x = breakTime*60;
    var full = x;
    c = setInterval(timer,1000);
    $(".countdown").css("background-color","green");
    $("#phase").html("Break Time!");
  }

  function timer(){
    if (!running) {
      clearInterval(c);
      control();
      return;
    }

    $("#time").html(toMinutes(x));
    fill();
    x--;
    if (x == -1) {
      i++;
      clearInterval(c);
      count();
    }
  }

  function fill() {
    $(".countdown").css("width",x/full*100+"%");
  }
}

function toMinutes(sec) {
  var minutes = Math.floor(sec/60);
  var seconds = (sec%60).toString();
  if (seconds.length == 1) {
    seconds = "00";
  }
  return minutes + ":" + seconds;
}

function control() {
  if (running) {
    $("#ok").html("STOP");
    $(".border button").prop("disabled", true);
    count();
  }
  else {
    $("#ok").html("OK");
    $(".border button").prop("disabled", false);
    $("#time").html("&#9679;");
    $(".countdown").css("width",0);
    $("#phase").html("&#9679;");
    i = 0;
  }
}

/// increment or decrement work/break time/cycles
$(".border button").click(function(){
  var time = parseInt($(this).parent().siblings("p").children("span").html());  //current value
  var difference = parseInt($(this).html()); //value of clicked button
  var result = time + difference;
  if (result <= 0) {
    result = 1;
  }
  $(this).parent().siblings("p").children("span").html(result);
});

$("#ok").click(function(){
  running = !running;
  control();
});


$('[data-toggle="tooltip"]').tooltip();
});
