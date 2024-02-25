let winnerCont = document.querySelector(".winnerContainer");
let winnerMsg = document.querySelector(".winnerMsg");
let newGame = document.querySelector("#newGame");
let resetGame = document.querySelector("#resetGame");
let blocks = document.querySelectorAll(".box");
let playerX = true;
let draw = 0;
let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let winnerContent = (Winner) => {
    winnerCont.classList.remove("hide");
    winnerMsg.innerText = `Winner is ${Winner}`;
}
let gameDraw = () => {
    // count = 0;
    winnerCont.classList.remove("hide");
    winnerMsg.innerText = `Game is Draw`;
}
let disableBlocks = () => {
    for (let block of blocks) {
        block.disabled = true;
    }
}
let gameNewReset = () => {
    playerX = true;
    draw = 0;
    for (let block of blocks) {
        block.disabled = false;
        block.innerHTML = "";
        winnerCont.classList.add("hide");
        block.classList.remove("xBlock");
        block.classList.remove("oBlock");
    }
}
let blockClick = blocks.forEach((block) => {
    block.addEventListener("click", () => {
        if(playerX) {
            block.innerText = "X";
            block.classList.add("xBlock");
            playerX = false;
        } else {
            block.innerText = "O";
            block.classList.add("oBlock");
            playerX = true;
        }
        block.disabled = true;
        let winner = checkWinner();
        draw ++;
        if( draw === 9 && !winner) {
            gameDraw();
        }
    });
})
let checkWinner = () => {
    for(let pattern of winPatterns) {
        let posVal1 = blocks[pattern[0]].innerText;
        let posVal2 = blocks[pattern[1]].innerText;
        let posVal3 = blocks[pattern[2]].innerText;
        if(posVal1 != "" && posVal2 != "" && posVal3 != "") {
            if(posVal1 === posVal2 && posVal2 === posVal3) {
                // console.log(`Winner is ${posVal1}`);
                winnerContent(posVal1);
                disableBlocks();
                return true;
            }
        }
    }

}
newGame.addEventListener("click", gameNewReset);
resetGame.addEventListener("click", gameNewReset);
// console.log(winnerCont.innerHTML);
// console.log(winnerMsg.innerHTML);
// console.log(newGame.innerHTML);
// console.log(resetGame.innerHTML);
// console.log(blocks);