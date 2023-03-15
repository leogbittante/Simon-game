
// LISTA DE CORES
var buttonColours = ["red", "blue", "green", "yellow"]

//LISTA VAZIA DE SEQUENCIA
var gamePattern = []

//LISTA VAZIA DE CORES QUE O USUARIO ESCOLHEU
var userClickedPattern = []

//VERIFICA SE O JOGO COMEÇOU
var started = false

//NIVEL
var level = 0

//VERIFICA SE O USUARIO TECLOU ALGO, SE TECLAR, STARTA O JOGO
$(document).keypress(function(){
    if (!started) {
        $("#level-title").text("level " + level)
        nextSequence()
        started = true
    }  
})

//PEGA O ID DO BOTÃO QUE O USUARIO ESCOLHEU, COLOCA NA LISTA E TOCA O SOM DA COR
$(".btn").click(function() {
    
    var userChosenColour = $(this).attr("id")
    userClickedPattern.push(userChosenColour)

    playSound(userChosenColour)
    animatePress(userChosenColour)

    checkAnswer(userClickedPattern.length-1)
})

//VERIFICA SE A SEQUENCIA É IGUAL AO CLIQUE DO USUARIO, SE SIM, DELAY DE 1 S
function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("Success")
     if(userClickedPattern.length === gamePattern.length) {
        setTimeout(function () {
            nextSequence();
          }, 1000);
        }
    } else {
        console.log("Wrong")
        playSound("wrong")
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass('game-over');
        }, 100);
        $("h1").text("Game Over, Press Any Key to Restart")
        startOver() 
    }
       
}


//CRIA UMA SEQUENCIA ENTRE 0 E 3 ALEATORIAMENTE E USA PARA PEGAR UMA DAS CORES, COLOCA NA LISTA, FAZ O EFEITO DO BOTAO E TOCA O SOM DA COR
function nextSequence() {

    userClickedPattern = []

    level++
    $("#level-title").text("Level " + level)

    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)
    playSound(randomChosenColour)
    
}

//BUSCA O SOM DE ACORDO COM A COR
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

//CRIA UMA ANIMAÇÃO PARA O BOTÃO CLICADO
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed")
    //REMOVE A CLASSE 0.1S DEPOIS
    setTimeout(function(){
        $("#" + currentColour).removeClass('pressed');
    }, 100);
}

//REINICIA O JOGO
function startOver() {
    level = 0
    started = false
    gamePattern = []
}



