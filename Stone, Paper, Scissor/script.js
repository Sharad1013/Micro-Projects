// Open Result Page
function openResult() {
  window.open("result.html", "_self");
}

// All requirements
const gameIcons = document.querySelector(".game-icons");
const icon = document.querySelectorAll(".game-icons .icon");
const choiceContainer = document.querySelector(".choice-container");
const finalResult = document.querySelector("#final");
const compScore = document.querySelector("#compScore");
const yourScore = document.querySelector("#yourScore");
const nextBtn = document.querySelector(".next");
const rulesBtn = document.querySelector("#rules-btn");
const userWinner = document.querySelector(".userChoice .icon ");
const pcWinner = document.querySelector(".pcChoice .icon ");

// user Move function
let userMove;
icon.forEach((item) => {
  item.addEventListener("click", (e) => {
    userMove = e.target.id.toLowerCase();
    pcSelect();
    // checking the winner
    winnerChecker();
    playerMove();
  });
});

// choice visuals
function playerMove() {
  gameIcons.style.display = "none";
  choiceContainer.style.display = "flex";

  const playerMove = document.querySelector("#playerMove");
  if (userMove == "rock") {
    playerMove.src = "./assets/stone.png";
    playerMove.classList.remove("scissors");
    playerMove.classList.remove("paper");
    playerMove.classList.add("rock");
    playerMove.classList.add("icon");
  } else if (userMove == "paper") {
    playerMove.src = "./assets/paper.png";
    playerMove.classList.remove("scissors");
    playerMove.classList.add("paper");
    playerMove.classList.add("icon");
  } else {
    playerMove.src = "./assets/scissors.png";
    playerMove.classList.remove("paper");
    playerMove.classList.add("scissors");
    playerMove.classList.add("icon");
  }
}

// Pc Move function
let pcChoice;
function pcSelect() {
  let arr = ["rock", "paper", "scissors"];
  pcChoice = arr[Math.floor(Math.random() * 3)].toLowerCase();
  const pcMove = document.querySelector("#pcMove");

  if (pcChoice == "rock") {
    pcMove.classList.remove("paper");
    pcMove.classList.remove("scissors");
    pcMove.src = "./assets/stone.png";
    pcMove.classList.add("rock");
    pcMove.classList.add("icon");
  } else if (pcChoice == "paper") {
    pcMove.classList.remove("scissors");
    pcMove.src = "./assets/paper.png";
    pcMove.classList.add("paper");
    pcMove.classList.add("icon");
  } else {
    pcMove.classList.remove("paper");
    pcMove.classList.remove("rock");
    pcMove.src = "./assets/scissors.png";
    pcMove.classList.add("scissors");
    pcMove.classList.add("icon");
  }
}

// Score Updation
let yourWin = localStorage.getItem("yourWin")
  ? parseInt(localStorage.getItem("yourWin"))
  : 0;

let pcWin = localStorage.getItem("pcWin")
  ? parseInt(localStorage.getItem("pcWin"))
  : 0;

yourScore.innerHTML = yourWin;
compScore.innerHTML = pcWin;

// Winner Checker
function winnerChecker() {
  // check for TIE
  if (userMove === pcChoice) {
    finalResult.innerHTML = "<h2>TIE UP</h2>";
    userWinner.classList.remove("icon-with-rings");
    pcWinner.classList.remove("icon-with-rings");
    nextBtn.classList.add("hidden");
    return; 
  }

  // When userMove is rock
  if (userMove === "rock") {
    if (pcChoice === "scissors") {
      finalResult.innerHTML = "<h2>YOU WIN <br> <span>AGAINST PC</span> </h2>";
      yourWin++;
      yourScore.innerHTML = yourWin;
      pcWinner.classList.remove("icon-with-rings");
      userWinner.classList.add("icon-with-rings");
      nextBtn.classList.remove("hidden");
      localStorage.setItem("yourWin", yourWin);
    } else if (pcChoice === "paper") {
      finalResult.innerHTML = "<h2>YOU LOST <br> <span>AGAINST PC</span> </h2>";
      pcWin++;
      compScore.innerHTML = pcWin;
      userWinner.classList.remove("icon-with-rings");
      pcWinner.classList.add("icon-with-rings");
      nextBtn.classList.add("hidden");
      localStorage.setItem("pcWin", pcWin);
    }
  }

  // when userMove is paper
  if (userMove === "paper") {
    if (pcChoice === "rock") {
      finalResult.innerHTML = "<h2>YOU WIN <br> <span>AGAINST PC</span> </h2>";
      yourWin++;
      yourScore.innerHTML = yourWin;
      pcWinner.classList.remove("icon-with-rings");
      userWinner.classList.add("icon-with-rings");
      nextBtn.classList.remove("hidden");
      localStorage.setItem("yourWin", yourWin);
    } else if (pcChoice === "scissors") {
      finalResult.innerHTML = "<h2>YOU LOST <br> <span>AGAINST PC</span> </h2>";
      pcWin++;
      compScore.innerHTML = pcWin;
      userWinner.classList.remove("icon-with-rings");
      pcWinner.classList.add("icon-with-rings");
      nextBtn.classList.add("hidden");
      localStorage.setItem("pcWin", pcWin);
    }
  }

  // when userMove is scissors
  if (userMove === "scissors") {
    if (pcChoice === "paper") {
      finalResult.innerHTML = "<h2>YOU WIN <br> <span>AGAINST PC</span> </h2>";
      yourWin++;
      yourScore.innerHTML = yourWin;
      pcWinner.classList.remove("icon-with-rings");
      userWinner.classList.add("icon-with-rings");
      nextBtn.classList.remove("hidden");
      localStorage.setItem("yourWin", yourWin);
    } else if (pcChoice === "rock") {
      finalResult.innerHTML = "<h2>YOU LOST <br> <span>AGAINST PC</span> </h2>";
      pcWin++;
      compScore.innerHTML = pcWin;
      userWinner.classList.remove("icon-with-rings");
      pcWinner.classList.add("icon-with-rings");
      nextBtn.classList.add("hidden");
      localStorage.setItem("pcWin", pcWin);
    }
  }
}

// rules section script

// Show Rules Button
let rules = document.querySelector(".rule");
rulesBtn.addEventListener("click", () => {
  rules.classList.remove("hidden");
});

//close-btn function
let closeBtn = document.querySelector("#close-btn");
closeBtn.addEventListener("click", () => {
  rules.classList.add("hidden");
});

// playAgain function
function playAgain() {
  gameIcons.style.display = "flex";
  choiceContainer.style.display = "none";
}
