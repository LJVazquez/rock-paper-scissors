// 0 = piedra  || 1 = papel || 2 = tijera

function computerPlay(){
    let output;
    let play = Math.floor(Math.random() * 3);
    switch(play){
        case 0:
            output = "piedra";
            break;
        case 1:
            output = "papel";
            break;
        case 2:
            output = "tijera";
            break;
    }
    return output;
}

let computerSelection;
let result;
let playerSelection;

function playRound(){
    playerSelection = prompt("Ingrese piedra, papel o tijera (de ingresar otra cosa sera descalificado)").toLowerCase();
    computerPlay();
    computerSelection = computerPlay();
    if(playerSelection === computerSelection){
        result = "Empate!";
    } else if(playerSelection == "piedra" && computerSelection == "tijera" ||
    playerSelection == "papel" && computerSelection == "piedra"||
    playerSelection == "tijera" && computerSelection == "papel"){
        result = "Ganaste!";
    } else{
        result = "Perdiste!";
    }
    return result;
}

let results = function(){
    console.log(`Elegiste ${playerSelection}`)
    console.log(`Contrincante eligió ${computerSelection}`)
    console.log(result);
}