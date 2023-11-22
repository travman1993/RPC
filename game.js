const choices = ["rock","paper","scissors"]

function game() {
    playRound()
}

function playRound() {
    const playSelection = playerChoice();
    const computerSelection = computerChoice();
}

function playerChoice () {
    let imput = prompt("Type Rock, Paper, or Scissors");
}

function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)]
}