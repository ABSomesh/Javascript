let userChoices = document.querySelectorAll(".choice");
let msgContainer = document.querySelector(".msg-container");
let msgContent = document.querySelector("#msg");
let userScores = document.querySelector("#user-score");
let compScores = document.querySelector("#comp-score");
let userScore = 0;
let compScore = 0;
let userChoice;
let compChoice;
let userWin = true;
let compOptions = ["Rock", "Paper", "Scissor"];
const compOption = () => {
    let compNum = Math.floor(Math.random() * 3);
    compChoice = compOptions[compNum];
};
const gameDraw = () => {
    msgContent.className = "draw";
    msgContent.innerHTML = `Both are ${userChoice}'s. Game was Draw`;
};
const checkWinner = () => {
    if(userChoice === "Rock") {
        userWin = compChoice === "Scissor" ? true : false;
    } else if (userChoice === "Paper") {
        userWin = compChoice === "Rock" ? true : false;
    } else if (userChoice === "Scissor") {
        userWin = compChoice === "Paper" ? true : false;
    }
};
const showWinner = () => {
    if(userWin) {
        userScore++;
        userScores.innerText = userScore;
        msgContent.className = "userWin";
        msgContent.innerHTML = `You Won. ${userChoice} beats ${compChoice}`;
        console.log(userScore);
    } else {
        compScore++;
        compScores.innerText = compScore;
        msgContent.className = "compWin";
        msgContent.innerHTML = `You Lost. ${compChoice} beats ${userChoice}`;
        // console.log(compScore);
    }
};
const playGame = (userChoice, compChoice) => {
    if(userChoice === compChoice) {
        gameDraw();
    }
    else {
        checkWinner();
        showWinner();
    }
};
userChoices.forEach((choice) => {
    choice.addEventListener("click", () => {
        userChoice = choice.getAttribute("id");
        compOption();
        playGame(userChoice, compChoice);
    });
});
