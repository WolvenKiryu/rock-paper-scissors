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

// Allow player to choose their choice via a text prompt
function getHumanChoice() {
    let humanChoice = prompt("Quick! Rock, paper, or scissors!?")
    return humanChoice;
}

// Initialize variables to be used in the main function below
let computerSelection;
let humanSelection;
let humanScore = 0;
let computerScore = 0;
let roundNum = 1;

// Main gameplay logic
function playGame() {

    // Loop the game through five separate rounds
    // Call upon the choice functions each round
    for (i = 0; i < 5; i++) {
        if (roundNum <= 5) {
            computerSelection = getComputerChoice();
            humanSelection = getHumanChoice();
            playRound(humanSelection, computerSelection);
        }
    }

    // Main gameplay logic using the choices from above
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase()
        console.log("----- Round " + roundNum + " -----");
        console.log("You threw... " + humanChoice + "!");
        console.log("The computer threw... " + computerChoice + "!");
        if (humanChoice === computerChoice) {
            console.log("It's a tie! You both chose " +  humanChoice + "!");
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
            console.log("You won! " + humanChoice + " beats " + computerChoice + "!")
            console.log("Your score: " + humanScore);
            console.log("Computer score: " + computerScore);
        }
        function lose() {
            computerScore++;
            console.log("You lost! " + computerChoice + " beats " + humanChoice + "!")
            console.log("Your score: " + humanScore);
            console.log("Computer score: " + computerScore);
        }
        roundNum++;
    }
}

playGame();