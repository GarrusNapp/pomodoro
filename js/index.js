var context;
var x = 80;
var y = 80;
// var workTime = 13;
// var breakTime = 50;

var start = 1.5*Math.PI;
var finish = 1.5*Math.PI;
var counter = 0;

$(document).ready(function () {

function count(workTime,breakTime) {
  var sessionTime;
  var timeLeft;

  var counting = setInterval(function(){
      if (sessionTime === undefined) {
        sessionTime = workTime; //for the first time the clock starts
        timeLeft = sessionTime;
      }
      timeLeft-=1;
      
      if (timeLeft == 0) {
        console.log("next");
        clearInterval(counting);
        counter ++;
        finish = 1.499*Math.PI;//restart finish for predictable results in animate()
        count(breakTime,workTime);

      }
      animate(sessionTime,timeLeft);
  }, 1000);
}

function setup() {
  context.beginPath();
  context.strokeStyle="white";
  console.log(width);
  //context.arc(width/2, height/2, width/3, start, 1.4999*Math.PI);
  context.arc(100,75,50,1.50001*Math.PI,1.5*Math.PI)
  context.lineWidth = width/3;
  context.stroke();
  }

function paint() {
  context.beginPath();
  if (counter%2 == 0) {
    context.strokeStyle="#FF9900";
  }
  else{
    context.strokeStyle="#009900";
  }
  context.arc(width/2, height/2, width/3, start, finish);
  context.lineWidth = width/3;
  context.stroke();
  }

function animate(sessionTime,timeLeft) {
  context.clearRect(0,0,500,500);
  finish -= 1.999*Math.PI/sessionTime //missing piece of cake
  $("#clock").html(finish);
  paint();
  context.textAlign="center";
  context.font="30px Arial"
  context.fillText(timeLeft,width/2,height/2+10);
}

  context = canvas1.getContext("2d");
  height = $("#canvas1").height();
  width = $("#canvas1").width();
  setup();
  //setInterval(animate, 1000);


 $("#OK").click(function(){
   console.log("click");
   count(15,20);
 });

});
