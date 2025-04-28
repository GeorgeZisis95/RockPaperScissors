let matchResultDiv = document.querySelector(".match-result")
let finalResultDiv = document.querySelector(".final-result")

let choiceButtonsDiv = document.querySelector(".buttons")
let choiceButtons = Array.from(document.querySelectorAll(".choice-button"))

matchResultDiv.setAttribute('style', 'white-space: pre;')

let resultArray = []
choiceButtons.forEach(choiceButton => {
    choiceButton.addEventListener("click", () => {
        const playerSelection = choiceButton.dataset.choice
        const computerSelection = getRandomChoice()
        const matchResult = singleRound(playerSelection, computerSelection)

        resultArray.push(matchResult)
        printBo5Result(resultArray)

        if (checkGameOver(resultArray) === true) {
            resultArray = []
        }
    })
});

function getRandomChoice() {
    const availableActions = ["rock", "paper", "scissors"]
    return availableActions[Math.floor(Math.random() * availableActions.length)]
}

function singleRound(playerAction, computerAction) {
    if (playerAction === computerAction) {
        printMatchResult(playerAction, computerAction, "DRAW")
        return "DRAW"
    }
    if ((playerAction === "rock" && computerAction === "paper") ||
        (playerAction === "paper" && computerAction === "scissors") ||
        (playerAction === "scissors" && computerAction === "rock")) {
        printMatchResult(playerAction, computerAction, "LOSE")
        return "LOSE"
    }
    if ((playerAction === "rock" && computerAction === "scissors") ||
        (playerAction === "paper" && computerAction === "rock") ||
        (playerAction === "scissors" && computerAction === "paper")) {
        printMatchResult(playerAction, computerAction, "WIN")
        return "WIN"
    }
}

function printMatchResult(playerAction, computerAction, result) {
    if (finalResultDiv.textContent === "") {
        matchResultDiv.textContent += (`Player's Choice: ${playerAction} Computer's Choice: ${computerAction} 
            Result: ${result} \r\n`)
    } else {
        matchResultDiv.textContent = (`Player's Choice: ${playerAction} Computer's Choice: ${computerAction} 
            Result: ${result} \r\n`)
    }
}

function checkGameOver(theArray) {
    if (countOccurrences(theArray, "WIN") === 3) {
        return true
    }
    if (countOccurrences(theArray, "LOSE") === 3) {
        return true
    }
    if (countOccurrences(theArray, "DRAW") === 3) {
        return true
    }
    return false
}

function printBo5Result(theArray) {
    if (countOccurrences(theArray, "WIN") === 3) {
        finalResultDiv.textContent = "PLAYER WINS"
    } else if (countOccurrences(theArray, "LOSE") === 3) {
        finalResultDiv.textContent = "PLAYER LOSES"
    } else if (countOccurrences(theArray, "DRAW") === 3) {
        finalResultDiv.textContent = "THE FINAL RESULT IS A DRAW"
    } else {
        finalResultDiv.textContent = ""
    }
}

function countOccurrences(theArray, theValue) {
    return theArray.reduce((accumulator, element) => {
        return (theValue === element ? accumulator + 1 : accumulator)
    }, 0)
}