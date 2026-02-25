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
    let playerChoice = prompt("Enter your choice: rock / paper / scissors?");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock"){
        if(computerChoice === "paper"){
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        } else if(computerChoice === "scissors"){
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else {
            console.log(`Draw! Both you and computer chose ${humanChoice}`);
        }

    } else if(humanChoice === "paper"){
        if(computerChoice === "rock"){
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else if(computerChoice === "scissors"){
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        } else {
            console.log(`Draw! Both you and computer chose ${humanChoice}`);
        }

    } else {
        if(computerChoice === "rock"){
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        } else if(computerChoice === "paper"){
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else {
            console.log(`Draw! Both you and computer chose ${humanChoice}`);
        }
    }
    
}

playRound(getHumanChoice(), getComputerChoice());
