let winners = [];
const choices = ["rock", "paper", "scissors"];

function resetGame() {
    winners = [];
    document.querySelector(".playerScore").textContent = "Score: 0";
    document.querySelector(".computerScore").textContent = "Score: 0";
    document.querySelector(".ties").textContent = "Score: 0";
    document.querySelector(".winner").textContent = "";
    document.querySelector("playerChoice").textContent = "";
    document.querySelector(".computerChoice").textContent = "";
    document.querySelector(".reset").styleDisplay = "none";

}

function startGame() {
    let img = document.querySelectorAll(img);
    img.forEach((img) => {
      img.addEventListener("click", (img) => { 
        let playerChoice = img.target.id;
        playRound(playerChoice, computerChoice);
        displayImage(playerChoice, computerChoice);
        resetGame();
      });
    });
   console.log(startGame);
}

function playRound(playerChoice) {
    let wins = checkWins();
    if(wins >= 5){
        return;
    }

    const computerChoice = computerSelect();

    const winner = checkWinner(playerChoice, computerChoice);
    winner.push(winner);
    tallyWins();
    displayRound(playerChoice, computerChoice, winner);
    wins = checkWins();
    if (wins == 5) {
        displayEnd();
    }
}

function displayEnd() {
    let playerWins = winner.filter((item) => item == "Player").length;
    if (playerWins == 5) {
        document.querySelector(".winner").textContent = "You Won, Great Job!"
    } else {
        document.querySelector(".winner").textContent = "Sorry Computer Won..:(, Maybe Next Time."
    }
    document.querySelector(".reset").styleDisplay = "flex";
}

function displayRound(playerChoice, computerChoice, winner) {
    document.querySelector(".playerChoice").textContent = `You Chose: ${
        playerChoice.charAt(0).toUpperCase()+ playerChoice.slice(1)
    }`;
    document.querySelector(".playerChoice").textContent = `The Computer Chose: ${
        computerChoice.charAt(0).toUpperCase()+ computerChoice.slice(1)
    }`;
    document.querySelector(".winner").textContent = `Round Winner; ${winner}`;
}

function displayRound(winner) {
    if (winner = "Player") {
        document.querySelector(".winner").textContent = "You Won The Round";
    } else if (winner = "Computer") {
        document.querySelector(".winner").textContent = "Computer Had The Best of YOU!!";
    } else {
        document.querySelector(".winner").textContent = "You Tied The Best of The Best!";
    }
}

function tallyWins() {
    const pWinCount = winners.filter((item) => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "Tie").length;
    document.querySelector(".playerScore").textContent = `Score: ${pWinsCount}`;
    document.querySelector(".computerScore").textContent = `Score: ${cWinsCount}`;
    document.querySelector(".ties").textContent = `Score: ${ties}`;
}

function computerSelect() {
    const choice = [Math.floor(Math.random() * choices.length)];
    document.querySelector(`.${choice}`).classList.add("active");
return choice;
}

function checkWins() {
    const pWinCount = winners.filter((item) => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    return Math.max(pWinCount,cWinCount);
}

function checkWinner(choice1, choice2) {
     if (
        (choice1 === "papper" && choice2 == "rock") || 
        (choice1 === "rock" && choice2 == "scissors") ||
        (choice1 === "scissors" && choice2 == "paper")
    ) {
        return "Player";
    } else if (choice1 == choice2) {
      return "Tie";
    } else {
        return "Computer";
    }
}

function setWins() {
    const pWinCount = winners.filter((item) => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "Tie").length;
}
