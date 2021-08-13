function play(playerSelection, computerSelection) {
    while(true) {
        if (playerSelection.toLowerCase() === "rock") {
            if (computerSelection.toLowerCase() === "paper") {
                return "You lose. Paper beats Rock.";
            } else if (computerSelection.toLowerCase() === "scissors") {
                return "You win. Rock beats Scissors.";
            } else {
                return "You tied.";
            }
        } else if (playerSelection.toLowerCase() === "paper") {
            if (computerSelection.toLowerCase() === "rock") {
                return "You win. Paper beats Rock.";
            } else if (computerSelection.toLowerCase() === "scissors") {
                return "You lose. Scissors beats Paper.";
            } else {
                return "You tied.";
            }
        } else if (playerSelection.toLowerCase() === "scissors") {
            if (computerSelection.toLowerCase() === "rock") {
                return "You lose. Rock beats Scissors.";
            } else if (computerSelection.toLowerCase() === "paper") {
                return "You win. Scissors beats Paper.";
            } else {
                return "You tied.";
            }
        } else {
            playerSelection = playerPlay();
            computerSelection = computerPlay();
            // play(playerPlay(), computerPlay());
        }
    }
}

function playerPlay() {
    return prompt("Choose rock, paper, or scissors");
}

function computerPlay() {
    const rps = ["Rock", "Paper", "Scissors"];
    const randomInt = Math.floor(Math.random() * 3);
    return rps[randomInt];
}

for (let i = 0; i < 5; i++) {
    console.log(play(playerPlay(), computerPlay()));
}