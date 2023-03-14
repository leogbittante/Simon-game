var gamePattern = []

var buttonColours = ["red", "blue", "green", "yellow"]

var randomChosenColour = buttonColours[nextSequence()]

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4)
    return randomNumber
}

gamePattern.push(randomChosenColour)


$("button").



