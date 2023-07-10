let options = Array("rock", "paper", "scissors");

let getComputerChoice = () => options[Math.floor(Math.random() * 3)];

let determineWinner = (playerSelection, computerSelection) => {
    let userChoice = playerSelection.toLowerCase();    
    let computerChoice = computerSelection.toLowerCase();

    if (userChoice === computerChoice) {
        return "The game is a tie!";
    } else if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "You lose! Paper beats rock!";
        } else {
            return "You won! Rock beats scissors";
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            return "You lose! Scissors beats paper!";
        } else {
            return "You won! Paper beats rock!";
        }
    } else if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return "You lose! Rock beats scissors!";
        } else {
            return "You won! Scissors beats paper!";
        }
    } else return "Invalid input!";
};

for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter your choice: ");
    console.log(determineWinner(playerSelection, getComputerChoice()));
}
