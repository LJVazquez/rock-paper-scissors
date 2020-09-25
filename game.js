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

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
let computerSelection;
let playerSelection;
const playerScoreVisual = document.querySelector('#player-score');
const computerScoreVisual = document.querySelector('#computer-score');
const results = document.querySelector('#results');
const reset = document.querySelector('#reset');
let playerScore = 0;
let computerScore = 0;
let computerHand = document.querySelector('#computer-hand');
let roundResult = document.querySelector('#round-result');

function changeSelection(){
    playerSelection = this.value;
    console.log(`player chooses: ${playerSelection}`);
    playRound();
}

function gameResult(){
    if(playerScore === 5){
        results.textContent = 'Player wins!'
        results.classList.add('text-success');
        rock.removeEventListener('click', changeSelection);
        paper.removeEventListener('click', changeSelection);
        scissor.removeEventListener('click', changeSelection);
    }
    if(computerScore === 5){
        results.textContent = 'Computer wins!'
        results.classList.add('text-danger');
        rock.removeEventListener('click', changeSelection);
        paper.removeEventListener('click', changeSelection);
        scissor.removeEventListener('click', changeSelection);
    }
}


function playRound(){
    computerSelection = computerPlay();
    computerHand.textContent = computerSelection;
        console.log(`computer chooses: ${computerSelection}`);
    if(playerSelection === computerSelection){
        console.log('T I E');
        roundResult.textContent = 'Tie';
        gameResult();
        return;
    } else if(playerSelection == "rock" && computerSelection == "scissor" ||
    playerSelection == "paper" && computerSelection == "rock"||
    playerSelection == "scissor" && computerSelection == "paper"){
        console.log('P L A Y E R  W I N S')
        playerScore++;
        playerScoreVisual.textContent = playerScore;
        roundResult.textContent = 'Player wins!';
        gameResult();
        return;
    } else{
        console.log('C O M P U T E R   W I N S')
        computerScore++;
        computerScoreVisual.textContent = computerScore;
        roundResult.textContent = 'Computer wins!';
        gameResult();
        return;
    } 
}


function resetGame(){
    playerScore = 0;
    computerScore = 0;
    playerScoreVisual.textContent = playerScore;
    computerScoreVisual.textContent = computerScore;
    rock.addEventListener('click', playRound);
    paper.addEventListener('click', playRound);
    scissor.addEventListener('click', playRound);
    results.textContent = 'Best of 5!'
    results.classList.remove('text-success')
    results.classList.remove('text-danger')
}

rock.addEventListener('click', changeSelection);
paper.addEventListener('click', changeSelection);
scissor.addEventListener('click', changeSelection);
reset.addEventListener('click', resetGame);