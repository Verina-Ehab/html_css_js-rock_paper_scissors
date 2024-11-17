let userScore = 0;
let computerScore = 0;
let userHand;
let computerHand;
let roundResult;

// getElementById
const USER_OUTPUT = document.getElementById("user-score");
const COMPUTER_OUTPUT = document.getElementById("computer-score");

const ROCK = document.getElementById("rock");
const PAPER = document.getElementById("paper");
const SCISSORS = document.getElementById("scissors");

const RESULT = document.getElementById("result");
const SCORE_BOARD = document.getElementById("score-board");

// addEventListener
ROCK.addEventListener("click", function () {
    computerChoice();

    userHand = "rock";
    calculateResult();
    changeColor();
});

PAPER.addEventListener("click", function () {
    computerChoice();

    userHand = "paper";
    calculateResult();
    changeColor();
});

SCISSORS.addEventListener("click", function () {
    computerChoice();

    userHand = "scissors";
    calculateResult();
    changeColor();
});


// Functions
function computerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        computerHand = "rock";
    }
    else if (randomNumber == 1) {
        computerHand = "paper";
    }
    else {
        computerHand = "scissors";
    }
}

function calculateResult() {
    if (
        (userHand == "rock" && computerHand == "scissors") ||
        (userHand == "paper" && computerHand == "rock") ||
        (userHand == "scissors" && computerHand == "paper")
    ) {
        userScore++;
        USER_OUTPUT.innerHTML = userScore;
        RESULT.innerHTML = 
        userHand + "<sup>(user)</sup> Beats" + 
        computerHand + "<sup>(computer)</sup>. You Win!";

        roundResult = "You Win!";
    }else if(
        (computerHand == "rock" && userHand == "scissors") ||
        (computerHand == "paper" && userHand == "rock") ||
        (computerHand == "scissors" && userHand == "paper")
    ) {
        computerScore++;
        COMPUTER_OUTPUT.innerHTML = computerScore;
        RESULT.innerHTML = 
        computerHand + "<sup>(computer)</sup> Beats " + 
        userHand + "<sup>(user)</sup>. You Lose!";

        roundResult = "You Lose!";
    }else{
        RESULT.innerHTML = "It's a Draw!"
        roundResult= "Draw!";
    }
}

function changeColor() {
    if (roundResult == "You Win!") {
        SCORE_BOARD.style.backgroundColor = "green";
    }
    else if (roundResult == "You Lose!") {
        SCORE_BOARD.style.backgroundColor = "red";
    }
    else {
        SCORE_BOARD.style.backgroundColor = "blue";
    }
}