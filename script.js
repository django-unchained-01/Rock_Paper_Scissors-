let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);

    switch (num) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}
function getHumanChoice() {
    const userInput = prompt("Choose rock, paper, or scissors:").toLowerCase();
    return userInput;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        ++humanScore;
        ++computerScore;
        console.log(`It's a draw! You both chose ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`);
    }
    else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "rock")) {
        ++humanScore;
        console.log(`You Win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`);
    }
    else {
        ++computerScore;
        console.log(`You Lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(humanSelection,computerSelection);
playRound(humanSelection, computerSelection);

