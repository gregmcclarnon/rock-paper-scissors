function playRound(playerSelection) {
    
    // User decides

    // Asks for input. No longer needed as the parameter is the global variable
    // let playerSelection = prompt("Rock, Paper, or Scissors?");

    // Converts to lowercase. No longer needed

    // playerSelection = playerSelection.toLowerCase();

    // Variable overide
    // playerSelection="Paper";
    console.log(playerSelection);
    
    // Computer decides
    
    const availableChoices = ["rock","paper","scissors"];

    let computerSelection = (availableChoices[(Math.floor(Math.random() * availableChoices.length))]);


    // Variable overide
    // computerSelection="Paper";

    console.log(computerSelection);

    // Calculate the result

    // Result overide

    if (playerSelection==computerSelection) {
        console.log("Draw. Play again");
        playRound();
    }

    else {
        if (playerSelection=="rock") {
            if (computerSelection=="scissors"){
                console.log("You win!");
            }
            else {
                console.log("Computer wins!");
            }
        }

        if (playerSelection=="paper") {
            if (computerSelection=="rock"){
                console.log("You win!");
            }
            else {
                console.log("Computer wins!");
            }
        }

        if (playerSelection=="scissors") {
            if (computerSelection=="paper"){
                console.log("You win!");
            }
            else {
                console.log("Computer wins!");
            }
        }
    }


};

function game() {
    // playRound();
    // playRound();
    // playRound();
    // playRound();
    // playRound();
}

game();