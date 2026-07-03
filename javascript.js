// Randomly generate computer's choice from three options
function getComputerChoice() {
    let computerChoice;
    let ranChoice = Math.random() * 3;
    if (ranChoice <= 1) {
        return computerChoice = "rock";
    } else if (ranChoice > 1 && ranChoice <= 2) {
        return computerChoice = "paper";
    } else {
        return computerChoice = "scissors";
    }
}


// Initialize variables to be used in the main function below
let computerSelection;
let humanSelection;
let humanScore = 0;
let computerScore = 0;
let roundNum = 1;
let replay = false;


// Initialize variables for DOM elements
const result = document.querySelector("#result");
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const rockBtn = document.querySelector("#rock");
const papBtn = document.querySelector("#paper");
const sciBtn = document.querySelector("#scissors");
const humanWins = document.querySelector("#humanWins");
const computerWins = document.querySelector("#computerWins");
const buttonHolder = document.querySelector("#buttonHolder");


// Main gameplay logic
function playGame() {

    // Make Buttons Initiate Game
    rockBtn.addEventListener("click", () => {
        humanSelection = "rock";
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    });
    papBtn.addEventListener("click", () => {
        humanSelection = "paper";
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    });
    sciBtn.addEventListener("click", () => {
        humanSelection = "scissors";
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    });
        

    // Main gameplay logic using the choices from above
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase()
        playerText.textContent = "Player threw... " + humanChoice + "!";
        computerText.textContent = "The computer threw... " + computerChoice + "!";

        if (humanChoice === computerChoice) {
            result.textContent = "It's a tie! You both chose " +  humanChoice + "!";
        }
        else {
            if (humanChoice === "rock") {
                if (computerChoice === "scissors") {
                    win();
                }
                else {
                    lose();
                }
            } else if (humanChoice === "paper") {
                if (computerChoice === "rock") {
                    win();
                }
                else {
                    lose();
                }
            } else if (humanChoice === "scissors") {
                if (computerChoice === "paper") {
                    win();
                }
                else {
                    lose();
                }
            }
        }
        function win() {
            humanScore++;
            humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
            result.textContent = "You won! " + humanChoice + " beats " + computerChoice + "!";
            humanWins.textContent = humanScore;
            computerWins.textContent = computerScore;
        }
        function lose() {
            computerScore++;
            computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
            result.textContent = "You lost! " + computerChoice + " beats " + humanChoice + "!";
            humanWins.textContent = humanScore;
            computerWins.textContent = computerScore;
        }
        roundNum++;

        // Add a replay feature
        if (humanScore === 5 || computerScore === 5) {
            rockBtn.style.display = "none";
            papBtn.style.display = "none";
            sciBtn.style.display = "none";
            if (humanScore > computerScore) {
                result.textContent = "You win the game!";
            }
            else {
                result.textContent = "The computer won the game...";
            }
            if (replay === false) {
                replayBtn = document.createElement("button");
                replayBtn.textContent = "Play again!";
                replayBtn.addEventListener("click", () => {
                    humanScore = 0;
                    computerScore = 0;
                    replayBtn.style.display = "none";
                    rockBtn.style.display = "inline-block";
                    papBtn.style.display = "inline-block";
                    sciBtn.style.display = "inline-block";
                    humanWins.textContent = 0;
                    computerWins.textContent = 0;
                    result.textContent = "Time for another round!";
                    playerText.textContent = "Rock, Paper, or Scissors...?";
                    computerText.textContent = "Click a button below to begin!";
                    roundNum = 0;
                });
                buttonHolder.appendChild(replayBtn);
                replay = true;
            }
            else {
                replayBtn.style.display = "inline-block";
            }
        }
    }
}

playGame();