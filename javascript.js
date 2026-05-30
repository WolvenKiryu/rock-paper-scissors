console.log("Let's begin!");



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



// Run the functions above and assign their selections to the variables below

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();



// Output the variables above into the console

console.log("The computer chose... " + computerChoice + "!");
console.log("You chose... " + humanChoice + "!");

