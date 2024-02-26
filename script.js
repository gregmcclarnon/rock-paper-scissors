
let playerScore = 0;
let computerScore = 0;

let resultsDiv = document.getElementById('results');

function displayScore() {

    resultsDiv.innerHTML += `<p>Player score: ${playerScore}</br>Computer score: ${computerScore}</p>`;
}

function isThereAWinner() {
    
    if (playerScore === 5) {
        resultsDiv.innerHTML += "<p>Well done! You have won 5 points! You win the game.</p>";
        playerScore = 0;
        computerScore = 0;
    }

    if (computerScore === 5) {
        resultsDiv.innerHTML += "<p>Bad luck! The computer has won 5 points! They win the game.</p>";
        playerScore = 0;
        computerScore = 0;
    }
    
}

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


    if (playerSelection==computerSelection) {
        resultsDiv.innerHTML += "<p>Draw. Play again.</p>";
        console.log("Draw. Play again.")
        displayScore();
    }

    else {
        if (playerSelection=="rock") {
            if (computerSelection=="scissors"){
                console.log("You win!");
                resultsDiv.innerHTML += '<p>You win!</p>';
                playerScore++;
                displayScore();
                isThereAWinner();
            }
            else {
                console.log("Computer wins!");
                resultsDiv.innerHTML += '<p>Computer wins!</p>';
                computerScore++;
                displayScore();
                isThereAWinner();
            }
        }

        if (playerSelection=="paper") {
            if (computerSelection=="rock"){
                resultsDiv.innerHTML += '<p>You win!</p>';
                console.log("You win!");
                playerScore++;
                displayScore();
                isThereAWinner();
            }
            else {
                console.log("Computer wins!");
                resultsDiv.innerHTML += '<p>Computer wins!</p>';
                computerScore++;
                displayScore();
                isThereAWinner();
            }
        }

        if (playerSelection=="scissors") {
            if (computerSelection=="paper"){
                console.log("You win!");
                resultsDiv.innerHTML += '<p>You win!</p>';
                playerScore++;
                displayScore();
                isThereAWinner();
            }
            else {
                console.log("Computer wins!");
                resultsDiv.innerHTML += '<p>Computer wins!</p>';
                computerScore++;
                displayScore();
                isThereAWinner();
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