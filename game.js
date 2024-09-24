let buttonColors = ["red", "blue", "barash", "yellow"];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  console.log(randomChosenColor);
}

nextSequence();