const availableActions = ["rock", "paper", "scissors"]

let computerSelection = ""
let playerSelection = ""

result = document.querySelector(".results")

buttons = Array.from(document.querySelectorAll(".game-button"))
buttons.forEach(element => {
    element.addEventListener("click", () => {
        playerSelection = element.dataset.choice
        computerSelection = getRandomChoice()
        result.textContent = (`Player's Choice: ${playerSelection} Computer's Choice: ${computerSelection} ==> 
            Result: ${singleRound(playerSelection, computerSelection)}`)
    })
});

function getRandomChoice() {
    return availableActions[Math.floor(Math.random() * availableActions.length)]
}

function singleRound(playerAction, computerAction) {
    if (playerAction === computerAction) {
        return "DRAW"
    }
    if ((playerAction === "rock" && computerAction === "paper") ||
        (playerAction === "paper" && computerAction === "scissors") ||
        (playerAction === "scissors" && computerAction === "rock")) {
        return "LOSE"
    }
    if ((playerAction === "rock" && computerAction === "scissors") ||
        (playerAction === "paper" && computerAction === "rock") ||
        (playerAction === "scissors" && computerAction === "paper")) {
        return "WIN"
    }
}