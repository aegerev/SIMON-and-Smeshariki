let buttonColors = ["red", "blue", "yellow", "barash"];
let gamePattern = [];

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 3);

    let randomChosenColor = buttonColors(randomNumber);
    
    gamePattern.push(randomChosenColor);

}