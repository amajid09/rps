console.log("Rock paper scissors!")
function computerWins(playerSelection, computerSelection){
    if(playerSelection== "rock" && computerSelection == "paper"){
        return true;
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        return true;
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        return true;
    }
    return false;
}

function playerWins(playerSelection, computerSelection){
    if( computerSelection == "rock" && playerSelection == "paper"){
        return true;
    }else if(computerSelection == "scissor" && playerSelection == "rock"){
        return true;
    }else if(computerSelection == "paper" && playerSelection == "scissors"){
        return true;
    }
    return false;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(computerWins(playerSelection, computerSelection)){
        return `You Lost! ${computerSelection} beats ${playerSelection}`
    }else if(computerSelection == playerSelection){
        return "You draw!"
    }
    else if(playerWins(playerSelection, computerSelection)){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
}

function getComputerChoice(){
    let arr = ["rock", "paper", "scissor"]
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
let computerSelection1 = getComputerChoice();
let userInput = prompt("Choose: (Rock, Paper, Scissor): ");
console.log(playRound("rock",computerSelection1 ))