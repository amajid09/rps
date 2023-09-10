// console.log("Rock paper scissors!")
const buttons = document.querySelectorAll("button")
const container = document.querySelector('.container')
let score = 0;
function computerWins(playerSelection, computerSelection){
    if(playerSelection== "rock" && computerSelection == "paper"){
        return true;
    }else if(playerSelection == "scissor" && computerSelection == "rock"){
        return true;
    }else if(playerSelection == "paper" && computerSelection == "scissor"){
        return true;
    }
    return false;
}

function playerWins(playerSelection, computerSelection){
    if( computerSelection == "rock" && playerSelection == "paper"){
        return true;
    }else if(computerSelection == "scissor" && playerSelection == "rock"){
        return true;
    }else if(computerSelection == "paper" && playerSelection == "scissor"){
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
        return "It is a draw!"
    }
    else if(playerWins(playerSelection, computerSelection)){
        score++;
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
}

function getComputerChoice(){
    let arr = ["rock", "paper", "scissor"]
    let randomIndex = Math.floor(Math.random() * arr.length);
    console.log('index: ' + randomIndex)
    return arr[randomIndex];
}
// console.log(playRound("rock",computerSelection1 ))
function winner(button, computerSelection) {
    let userInput;

    if(button.textContent.toLowerCase() == 'rock') {
        userInput = 'rock'
    }else if(button.textContent.toLowerCase() == 'scissor'){
        userInput = 'scissor'
    }else if(button.textContent.toLowerCase() == 'paper'){
        userInput = 'paper'
    }
    
    return playRound(userInput, computerSelection)
}

function displayWinner(winner) {
    let para = document.createElement('p')
    para.textContent = winner
    para.style.cssText = 'display:flex;justify-content:center;margin:0;'
    para.classList.toggle('para')

    container.appendChild(para)
    
}

function checkScore() {
    container.getElementsByClassName("score")[0].textContent = "Score: " + score; 
}
buttons.forEach((button)=> {
    button.addEventListener('click', ()=> {
    if(container.lastElementChild.className == 'para')
    {
        container.lastElementChild.remove()
    }
       displayWinner(winner(button, getComputerChoice()))
    checkScore()
    })
    // console.log(container.childNodes)

})