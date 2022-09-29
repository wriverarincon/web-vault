const playerText = document.getElementById("playerchoice");
const computerText = document.getElementById("computerchoice");
const resultText = document.getElementById("result");
const roundText = document.getElementById("round");
const pCounterText = document.getElementById
("playerCounter");
const cCounterText = document.getElementById("computerCounter");
const list = ["Rock", "Paper", "Scissors"];
let playerChoice;
let computerChoice;
let round = 0;
let counterPlayer = 0;
let counterComputer = 0;

//Storing the options
const choiceRock = document.getElementById("rock");
console.log(choiceRock);
const choicePaper = document.getElementById("paper");
console.log(choicePaper);
const choiceScissors = document.getElementById("scissors");
console.log(choiceScissors);

// When the player starts the game the options should appear so he can pick one
const startBtn = document.getElementsByClassName("start");
startBtn[0].addEventListener("click", optionsVisual);
console.log(startBtn[0]);

//Selects the game options to play
const choices = document.getElementById("options");

//Hide the options
choices.style.display = "none";
console.log(choices);

//Selects the instructions message
const instructions = document.getElementById("instructionMsg");
console.log(instructions);

//Show the options once the btn is clicked
function optionsVisual() {
    if (choices.style.display === "none") {
        choices.style.display = "block"
    }
    startBtnDisabled();
    instructions.textContent = "Now select your move:";
}

//Disables the start button when the game starts
function startBtnDisabled() {
    if (choices.style.display === "block") {
        startBtn[0].style.display = "none"
    };
}

//Store the player's choice
choiceBtn = document.querySelectorAll(".choiceBtn");

choiceBtn.forEach(btn => btn.addEventListener("click", () => {
    playerChoice = btn.textContent.trim();
    computerPlays();
    roundNum();
    endGame();
    counter();
    playerText.textContent = `Your choice: ${playerChoice}`;
    computerText.textContent = `Computer choice: ${computerChoice}`;
    resultText.textContent = checkWinner();
    pCounterText.textContent = `Wins: ${counterPlayer}`;
    cCounterText.textContent = `Loses: ${counterComputer}`;
}));

// Make the computer select a random option
function computerPlays() {
    const randNum = Math.floor(Math.random() * 3);
    switch (randNum) {
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors";
            break;
        default:
            computerChoice = "";
    }
    return randNum;
}
console.log(computerPlays());

// After both options are choose a message should appear saying who won
function checkWinner() {
    if (playerChoice == computerChoice){
        return "Draw";
    } else if (computerChoice == "Rock" && playerChoice == "Paper"){
        return "You win";
    } else if (computerChoice == "Paper" && playerChoice == "Scissors"){
        return "You win";
    } else if (computerChoice == "Scissors" && playerChoice == "Rock"){
        return "You win";
    }
    else {
        return "You lost";
    }
}

// Then a counter would go up or down depending on who won and who lost
function counter() {
    if (resultText.textContent == "You win") {
        counterPlayer++;
    } else {
        counterComputer++;
    }
}
//Round number
function roundNum() {
    round++;
    roundText.textContent = `Round: ${round}`
    return round;
}

//End the game after 5 rounds
function endGame() {
    if(round === 5){
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    }
};
