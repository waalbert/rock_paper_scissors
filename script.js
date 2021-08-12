function computerPlay() {
    const rps = ["Rock", "Paper", "Scissors"];
    const randomInt = Math.floor(Math.random() * 3);
    return rps[randomInt];
}



function play(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection;
    if (player === "rock") {
        if (computerSelection.toLowerCase() === "paper") {
            return "You lose. Paper beats Rock.";
        } else if (computerSelection.toLowerCase() === "scissors") {
            return "You win. Rock beats Scissors.";
        } else {
            return "You tied.";
        }
    } else if (player === "paper") {
        if (computerSelection.toLowerCase() === "rock") {
            return "You win. Paper beats Rock.";
        } else if (computerSelection.toLowerCase() === "scissors") {
            return "You lose. Scissors beats Paper.";
        } else {
            return "You tied.";
        }
    } else if (player === "scissors") {
        if (computerSelection.toLowerCase() === "rock") {
            return "You lose. Rock beats Scissors.";
        } else if (computerSelection.toLowerCase() === "paper") {
            return "You win. Scissors beats Paper.";
        } else {
            return "You tied.";
        }
    } else {
        player = prompt("Choose rock, paper, or scissors").toLowerCase();
        console.log(player);
        play(player, computer);
    }
}

for (let i = 0; i < 5; i++) {
    console.log(play(prompt("Choose rock, paper, or scissors"), computerPlay()));
}

