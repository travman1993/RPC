const choices = ["rock","paper","scissors"]

function game() {
    for (let i = 0; i <= 5; i++) {
        playRound();
    }
    logWins();
}

function playRound(round) {
    const playSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computeSelection, winner)
}

function playerChoice () {
    let input = prompt("Type Rock, Paper, or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input)
    while (check == false) {
        input = prompt(
            "Type Rock, Paper, or Scissors. Spelling needs to be exact, but capitilization doesnt matter"
            );
            while (input == null) {
                input = prompt("Type Rock, Paper, or Scissors");
            }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)]
}

function validateInput(choice) {
    if (choices.includes(choice)) {
        return true;
    } return false;
}

function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC){
        return 'Tie';
    } else if (
        (choiceP === "papper" && choiceC == "rock") || 
        (choiceP === "rock" && choiceC == "scissors") ||
        (choiceP === "scissors" && choiceC == "paper")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins", computerWins);
    console.log("Ties:", ties);
}

function logRound(playerChoice,computerChoice,winner,round){
    console.log('Round',round);
    console.log('Player Chose:',comuterChoice);
    console.log('Computer Chose:',computerChoice);
    console.log(winer, 'Won the Round')
    console.log("---------------------------------");
}