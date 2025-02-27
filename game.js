function getComputerChoice() {

    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) {
        return "rock";
    }
    else if (randomNum === 1){
        return "scissors";
    }
    else {
        return "paper";
    }
}

function caseInsensitive(theInput) {
    return (

        "rock".localeCompare(theInput, "en", {sensitivity:"accent"}) === 0 ||
        "scissors".localeCompare(theInput, "en", {sensitivity:"accent"}) === 0 ||
        "paper".localeCompare(theInput, "en", {sensitivity:"accent"}) === 0

    );
}

function getPlayerChoice() {

    let theChoice = prompt("Choose between rock paper or scissors:");

    if (caseInsensitive(theChoice)) {
        return theChoice.toLowerCase();
    }
    else {
        console.assert(caseInsensitive(theChoice), "The input string is not compatible");
        return "invalid input";
    }
}

function playRound(playerChoice, computerChoice) {

    if (playerChoice != "invalid input") {
        console.log(`You picked ${playerChoice} and computer picks ${computerChoice}...`);
    }

    if (playerChoice === computerChoice){
        return "IT'S A TIE";
    }
    else{
        switch(playerChoice) {
            case "rock":
                return (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE";
                
            case "paper":
                return (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE";
                
            case "scissors":
                return (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE";  
            
            case "invalid input":
                return "Please choose a valid input";
        }
    }
}

function gameLoop() {
    const playerSelection = getPlayerChoice(); 
    const computerSelection = getComputerChoice();

    let playerScore = 0; 
    let computerScore = 0;
    
    while (true) {

        let result = playRound(playerSelection, computerSelection);

        if (result === "YOU WIN") {
                playerScore++;
        }
        if (result == "YOU LOSE") {
            computerScore++;
        }

        console.log(`${result} Player: ${playerScore} - Computer: ${computerScore}`);

        if (playerScore == 3 || computerScore == 3) {
            break;
        }
    }
}

// gameLoop()

const computerSelection = getComputerChoice();

const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");

btnRock.addEventListener("click", () => playRound("rock", computerSelection));
btnPaper.addEventListener("click", () => playRound("paper", computerSelection));
btnScissors.addEventListener("click", () => playRound("scissors", computerSelection));