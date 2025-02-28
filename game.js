scoreDiv = document.getElementsByClassName("score")[0];
resultDiv = document.getElementsByClassName("result")[0];
bestOfFiveDiv = document.getElementsByClassName("bestOfFive")[0];

function playRound(playerChoice) {

    const viableChoices = ["rock", "paper", "scissors"];
    let theComputerChoice = viableChoices[Math.floor(Math.random() * viableChoices.length)];   

    console.log(`Player picks: ${playerChoice} and Computer picks: ${theComputerChoice}`);

    if (playerChoice === theComputerChoice){
        result = "It's a tie";
    }
    else if (
            (playerChoice === "rock" && theComputerChoice === "scissors") || 
            (playerChoice === "scissors" && theComputerChoice === "paper") ||
            (playerChoice === "paper" && theComputerChoice === "rock")
        ) {
            result = "You win";
            playerScore++;
        }
    else {
        result = "You lose";
        computerScore++;
    }
    
    if (playerScore === 3 || computerScore === 3) {
        resultDiv.textContent = `Player picks: ${playerChoice} and Computer picks: ${theComputerChoice} => ${result}`;
        scoreDiv.textContent = `${playerScore} - ${computerScore}`;
        bestOfFiveDiv.textContent = (playerScore === 3) ? "Player won the best of five" : "Computer won the best of five"
        playerScore = 0; computerScore = 0;
    }
    else {
        bestOfFiveDiv.textContent = "";
        resultDiv.textContent = `Player picks: ${playerChoice} and Computer picks: ${theComputerChoice} => ${result}`;
        scoreDiv.textContent = `${playerScore} - ${computerScore}`;
    } 
}

let playerScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.getAttribute("data-choice"));
    })
})