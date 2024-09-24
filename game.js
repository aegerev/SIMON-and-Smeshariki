let buttonColors = ["red", "blue", "barash", "yellow"];
let gamePattern = [];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  //FOR TESTING PURPOSES -- DELETE AFTER PROJECT IS DONE
  console.log(gamePattern);
}

nextSequence();