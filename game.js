// 0 = piedra  || 1 = papel || 2 = tijera

function computerPlay(){
    let play = Math.floor(Math.random() * 3);
    if (play === 0){
        return 'rock';
    } else if(play === 1){
        return 'paper';
    } else {
        return 'scissor';
    }
}

let computerSelection;
let playerSelection;
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');

function changeSelection(){
    playerSelection = this.value;
    console.log(playerSelection);
}

function playRound(){
    computerSelection = computerPlay();
    console.log(computerSelection);
    if(playerSelection === computerSelection){
        result = "Tie!";
    } else if(playerSelection == "rock" && computerSelection == "scissor" ||
    playerSelection == "paper" && computerSelection == "rock"||
    playerSelection == "scissor" && computerSelection == "paper"){
        result = "You win!";
    } else{
        result = "You lose!";
    }
    return result;
}

let pResults1 = document.querySelector('#p-results1');
let pResults2 = document.querySelector('#p-results2');
let pResults3 = document.querySelector('#p-results3');

let results = function(){
    pResults1.textContent = `You have choosen ${playerSelection}`;
    pResults2.textContent = `Enemy has choosen ${computerSelection}`
    pResults3.textContent = result;
}


rock.addEventListener('click', changeSelection);
rock.addEventListener('click', playRound);
rock.addEventListener('click', results);
paper.addEventListener('click', changeSelection);
paper.addEventListener('click', playRound);
paper.addEventListener('click', results);
scissor.addEventListener('click', changeSelection);
scissor.addEventListener('click', playRound);
scissor.addEventListener('click', results);
