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
    let imgs = document.querySelectorAll("img");
    imgs.forEach((img) =>
      img.addEventListener("click", () => {
        if (img.id) {
          playRound(img.id);
        }
      })
    );
  }

function playRound(playerChoice) {
    let wins = checkWins();
    if(wins >= 5){
        return;
    }
    const computerChoice = computerSelect();
    const winner = checkWinner(playerChoice, computerChoice);
    tallyWins();
    displayRound(playerChoice, computerChoice, winner);
    wins = checkWins()
    if (wins >= 5) {
        displayEnd();
    }
}

function computerSelect() {
    const choice = choices[Math.floor(Math.random() * choices.length)];
    document.querySelector(`.${choice}`);
return choice;
}

function checkWinner(playerChoice, computerChoice) {
    if (
       (playerChoice === "papper" & computerChoice === "rock") || 
       (playerChoice === "rock" & computerChoice === "scissors") ||
       (playerChoice === "scissors" & computerChoice === "paper")
   ) {
       return "Player";
   } else if (choice1 === choice) {
     return "Tie";
   } else {
       return "Computer";
   }
}

function tallyWins() {
    const pWinCount = winners.filter((item) => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "Tie").length;
    document.querySelector(".playerScore").textContent = `Score: ${pWinCount}`;
    document.querySelector(".computerScore").textContent = `Score: ${cWinCount}`;
    document.querySelector(".ties");
}

function displayRound(playerChoice, computerChoice, winner) {
    document.querySelector(".playerChoice").textContent = `You Chose: ${
        playerChoice.charAt(0).toUpperCase()+ playerChoice.slice(1)
     }`;
    document.querySelector(".computerChoice").textContent = `Computer Chose: ${
        computerChoice.charAt(0).toUpperCase()+ computerChoice.slice(1)
     }`;
    displayRoundWinner(winner);
}

function displayRoundWinner(winner) {
    if (winner = "Player") {
        document.querySelector(".winner").textContent = "You Won The Round";
    } else if (winner = "Computer") {
        document.querySelector(".winner").textContent = "Computer Had The Best of YOU!!";
    } else {
        document.querySelector(".winner").textContent = "You Tied The Best of The Best!";
    }
    console.log(displayRoundWinner)
}

function checkWins() {
    const pWinCount = winners.filter((item) => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    return Math.max(pWinCount,cWinCount);
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
startGame();