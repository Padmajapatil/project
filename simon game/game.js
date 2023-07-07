var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
var allLevelRecord =[]; 
var started = false;
var level = 0;
var startTime=0;
var endTime=0;

$(document).keypress(function() {
  if (!started) {
   $("#level-title").text("Level " + level);
    
    nextSequence();

    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  var recordLevel = level;
  allLevelRecord.push(level);


}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  TimeSpanOfGame();
  level = 0;
  gamePattern = [];
  started = false;
}

//do all task by using json formate
// var startTime= time();
// console.time('Execution Time');
 
// task starts
// for (var i = 0; i < 100000000;i++);
// task ends
//  var endTime= time();
// console.timeEnd('Execution Time');

//include all the heading tags





var startTime, endTime;

// Start the game
function startGame() {
  startTime = new Date();
  console.log("Game started at: " + startTime);
  
  // Rest of your game logic goes here
}

// End the game
function endGame() {
  endTime = new Date();
  console.log("Game ended at: " + endTime);
  
  // Calculate the duration
  var duration = endTime - startTime;
  console.log("Game duration: " + duration/1000 + "seconds");
  
  // Rest of your game-ending logic goes here
}

// Example usage
startGame();

// Simulating some game activity...
setTimeout(endGame, 5000);  // Assuming the game ends after 5 seconds


console.log(allLevelRecord);
  


// function TimeSpanOfGame(){
//   console.log(endTime-startTime);
// }
//   time take to complete
// console.log("time taken to complete game");
// console.log(endTime-startTime);






