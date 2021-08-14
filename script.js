const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");
const scoreBoard = document.querySelector("#score");
let yourScore = 0;
let computerScore = 0;

buttons.forEach(button => button.addEventListener("click", () => {
    const resultMessage = play(button.id, computerPlay());
    result.textContent = resultMessage;
    scoreBoard.textContent = `You: ${yourScore} | Computer: ${computerScore}`;
    if (yourScore === 5) {
        declareWinner();
    }
}));

function play(playerSelection, computerSelection) {
    while(true) {
        if (playerSelection.toLowerCase() === "rock") {
            if (computerSelection.toLowerCase() === "paper") {
                computerScore++;
                return "You lose. Paper beats Rock.";
            } else if (computerSelection.toLowerCase() === "scissors") {
                yourScore++;
                return "You win. Rock beats Scissors.";
            } else {
                return "You tied.";
            }
        } else if (playerSelection.toLowerCase() === "paper") {
            if (computerSelection.toLowerCase() === "rock") {
                yourScore++;
                return "You win. Paper beats Rock.";
            } else if (computerSelection.toLowerCase() === "scissors") {
                computerScore++;
                return "You lose. Scissors beats Paper.";
            } else {
                return "You tied.";
            }
        } else if (playerSelection.toLowerCase() === "scissors") {
            if (computerSelection.toLowerCase() === "rock") {
                computerScore++;
                return "You lose. Rock beats Scissors.";
            } else if (computerSelection.toLowerCase() === "paper") {
                yourScore++;
                return "You win. Scissors beats Paper.";
            } else {
                return "You tied.";
            }
        } 
    }
}

function declareWinner() {
    if (yourScore > computerScore) {
        result.textContent = "You win!";
    } else if (yourScore < computerScore) {
        result.textContent = "Tough luck you suck";
    } else {
        result.textContent = "Both of y'all suck ass";
    }
}

function computerPlay() {
    const rps = ["Rock", "Paper", "Scissors"];
    const randomInt = Math.floor(Math.random() * 3);
    return rps[randomInt];
}