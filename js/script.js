
$(document).ready(function () {
var running = false; //control var for buttons behaviour
var i = 0; //how many cycles have passed
$("#workTime").html()
$("#breakTime").html()

function count() {
  var workTime = $("#workTime").html();
  var breakTime = $("#breakTime").html();
  var c;
  if (i%2 == 0) {
    var x = workTime*10;
    c = setInterval(timer,1000);
    $(".countdown").css("background-color","blue");
  }
  else {
    var x = breakTime*10;  
    c = setInterval(timer,1000);
    $(".countdown").css("background-color","green");
  }

  function timer(){
    if (!running) {
      clearInterval(c);
      return;
    }
    $("#time").html(x);
    x--;
    if (x == -1) {
      i++;
      clearInterval(c);
      count();

    }
  }
}

function control() {
  if (running) {
    alert(running);
    $("#ok").html("STOP");
    $(".row button").prop("disabled", true);
    count();
  }
  else {
    $("#ok").html("OK");
    $(".row button").prop("disabled", false);
    $("#time").html("---");
  }
}

/// increment or decrement work/break time
$(".row button").click(function(){ //time changing buttons
  var time = parseInt($(this).parent().siblings("p").children().html());  //current work/break time
  var difference = parseInt($(this).html()); //value of clicked button
  var result = time + difference;
  if (result <= 0) {
    result = 1;
  }
  $(this).parent().siblings("p").children().html(result);
});

$("#ok").click(function(){
  running = !running;
  control();

  // $(".countdown").width(100);
});

});
