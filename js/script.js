
$(document).ready(function () {
var running = false; //control var for buttons behaviour
var i = 0; //how many cycles have passed
var cycleLimit;

function count() {
  var workTime = $("#workTime").html();
  var breakTime = $("#breakTime").html();
  var c;
  if (i == cycleLimit){
    running = false;
  }

  if (i%2 == 0) {
    var x = workTime*10;
    c = setInterval(timer,1000);
    $(".countdown").css("background-color","blue");
    $(".countdown").html("WORK TIME!");

  }
  else {
    var x = breakTime*10;
    c = setInterval(timer,1000);
    $(".countdown").css("background-color","green");
    $(".countdown").html("BREAK TIME!");
  }

  function timer(){
    if (!running) {
      clearInterval(c);
      control();
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
    $("#ok").html("STOP");
    $(".row button, #cycleChange button").prop("disabled", true);
    count();
  }
  else {
    $("#ok").html("OK");
    $(".row button, #cycleChange button").prop("disabled", false);
    $("#time").html("---");
    i = 0;
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

$("#cycleChange button").click(function(){
  var cycle = parseInt($("#cycles").html());  //current cycles
  var difference = parseInt($(this).html()); //value of clicked button
  var result = cycle + difference;
  if (result <= 0) {
    result = 1;
  }
  cycleLimit = result*2;
  $("#cycles").html(result);
  // $(".countdown").width(100);
});


$('[data-toggle="tooltip"]').tooltip();

});
