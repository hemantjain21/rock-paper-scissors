let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomChoice = Math.floor(Math.random()*100)+1;
    if(randomChoice <= 33){
        return "rock";
    } else if(randomChoice <= 66){
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Enter your choice: rock / paper / scissors?");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}
