function getComputerChoice(){
    let randomNum = Math.random();

    if(randomNum < 0.33){
        return "rock";
    } else if(randomNum < 0.66){
        return "paper";
    } else{
        return "scissors";
    }
}

// Testing the computer's choice
// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());

function getHumanChoice(){
    let choice = prompt("rock, paper or scissors?").toLowerCase();

    while(choice != "rock" && choice != "paper" && choice != "scissors"){
        choice = prompt("wrong input! enter rock, paper, or scissors only").toLowerCase();
    }

    return choice;
}

// Testing the human's choice
// console.log(getHumanChoice());

function playGame(){

    let humanScore = 0;
    let computerScore = 0;


    function playRound(humanChoice, computerChoice) {
        // Normalize the human choice to lowercase
        humanChoice = humanChoice.toLowerCase();

        // Determine the winner
        if (humanChoice === computerChoice) {
            console.log("It's a tie! Both chose " + humanChoice);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            humanScore++;
            console.log("You win! " + humanChoice + " beats " + computerChoice);
        } else {
            computerScore++;
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
        }
    }

    for(i=0; i<5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log("Final Scores:");
    console.log("Human: " + humanScore);
    console.log("Computer: " + computerScore);

    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("The computer wins the game. Better luck next time!");
    } else {
        console.log("It's a tie! No overall winner.");
    }
}

playGame();

