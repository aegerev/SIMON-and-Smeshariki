let buttonColors = ["red", "blue", "barash", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

let level = 0;
let started = false;

$(document).keydown(function(event) {
  if(!started) {
    started = true;

    $("#level-title").text("Level " + level);

    nextSequence();
    
  }
})

$(".btn").click(function(event) {
  let userChosenColor = event.target.id;
  userClickedPattern.push(userChosenColor);

  animatePress(userChosenColor);

  nextSequence();
  
  // //FOR TESTING PURPOSES -- DELETE AFTER PROJECT IS DONE
  // alert(userClickedPattern);

})


function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  
}

function animatePress(currentColor){
  $("#" + currentColor).addClass('pressed');
  setTimeout(function() {
    $("#" + currentColor).removeClass('pressed');
  }, 100);
}

nextSequence();