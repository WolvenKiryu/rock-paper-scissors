console.log("Let's begin!");

function getComputerChoice() {
    let computerChoice;
    let ranChoice = Math.random() * 3;
    if (ranChoice <= 1) {
        computerChoice = "rock";
    } else if (ranChoice > 1 && ranChoice <= 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    console.log("The computer chose... " + computerChoice + "!");
}

getComputerChoice();



// Create a function called getComputerChoice to calculate the PC's play
// getComputerChoice will return a random string value of "rock", "paper" or "scissors"
// Create a function called getHumanChoice to receive the player's play
// Use a prompt to receive the player's play via getHumanChoice
// 
