//I'm closing the project without adding the name chosing functionality, player 1 is "white" player 2 is "black"

const boardContainer = document.getElementById("board-container"); 
const boardCells = boardContainer.querySelectorAll(".square");
const winnerMsg = document.querySelector(".winner-msg");

const resetGameBtn = document.querySelector(".reset-btn");
resetGameBtn.addEventListener("click", () => window.location.reload());

let turn = 0;

const gameboard = (() => {
    let gameBoard = [];
    const placeMarker = (position, color) => gameBoard[position] = color;
    const finishGame = () => gameBoard = [];
    return {
        gameBoard,
        placeMarker,
        finishGame
    };
        
})();

const player = (name, color) => {
    const placeMarker = (position) => {
        gameboard.placeMarker(position, color);
    }
    return {name, color, placeMarker};
}

const players = [player("White", "x"), player("Black", "o")];


function cellFunctionality(){
    boardCells.forEach((cell) => {
        cell.addEventListener("click", (e) => {        
            if(e.target.textContent == "·"){
                
                if(turn % 2){
                    players[0].placeMarker(Array.prototype.indexOf.call(boardCells, cell), players[0]);
                }else {
                    players[1].placeMarker(Array.prototype.indexOf.call(boardCells, cell), players[1]);
                }
                turn++;
            }    
            populateBoard(gameboard.gameBoard);
        });
    });
}


function populateBoard(boardContents) {
    const arr = boardContents;
    
    if(arr[0] == "x" && arr[1] == "x" && arr[2] == "x"){
        gameboard.gameBoard = [];
        finishGame(players[0].name);
    }else if(arr[0] == "o" && arr[1] == "o" && arr[2] == "o"){
        gameboard.gameBoard = [];
        finishGame(players[1].name);
    }else if(arr[3] == "x" && arr[4] == "x" && arr[5] == "x"){
        gameboard.gameBoard = [];
        finishGame(players[0].name);
    }else if(arr[5] == "o" && arr[4] == "o" && arr[3] == "o"){
        gameboard.gameBoard = [];
        finishGame(players[1].name);
    }else if(arr[6] == "x" && arr[7] == "x" && arr[8] == "x"){
        gameboard.gameBoard = [];
        finishGame(players[0].name);
    }else if(arr[6] == "o" && arr[7] == "o" && arr[8] == "o"){
        gameboard.gameBoard = [];
        finishGame(players[1].name);
    }else if(arr[0] == "x" && arr[3] == "x" && arr[6] == "x"){
        gameboard.gameBoard = [];
        finishGame(players[0].name);
    }else if(arr[0] == "o" && arr[3] == "o" && arr[6] == "o"){
        gameboard.gameBoard = [];
        finishGame(players[1].name);
    }else if(arr[1] == "x" && arr[4] == "x" && arr[7] == "x"){
        gameboard.gameBoard = [];
        finishGame(players[0].name);
    }else if(arr[1] == "o" && arr[4] == "o" && arr[7] == "o"){
        gameboard.gameBoard = [];
        finishGame(players[1].name);
    }else if(arr[2] == "x" && arr[5] == "x" && arr[8] == "x"){
        gameboard.gameBoard = [];
        finishGame(players[0].name);
    }else if(arr[2] == "o" && arr[5] == "o" && arr[8] == "o"){
        gameboard.gameBoard = [];
        finishGame(players[1].name);
    }else if(arr[2] == "x" && arr[4] == "x" && arr[6] == "x"){
        gameboard.gameBoard = [];
        finishGame(players[0].name);
    }else if(arr[2] == "o" && arr[4] == "o" && arr[6] == "o"){
        gameboard.gameBoard = [];
        finishGame(players[1].name);
    }else if(arr[0] == "x" && arr[4] == "x" && arr[8] == "x"){
        gameboard.gameBoard = [];
        finishGame(players[0].name);
    }else if(arr[0] == "o" && arr[4] == "o" && arr[8] == "o"){
        gameboard.gameBoard = [];
        finishGame(players[1].name);
    }

    let j = 0;
    boardCells.forEach((cell, i) => {
        cell.textContent = (arr[i] != undefined) ? arr[i] : "·";
        
    });
    arr.forEach((item, i) => {
        if(item[i] != "") j++;
    });
    if(j == 9){
        gameboard.gameBoard = [];
        finishGame("The god of Ties");
    }

    return arr;
}



function range(start, end, length = end - start + 1) {
    let arr = [];
    for(let i=0; i < length; i++){
        arr.push(i);
    }
    return arr;
}


function finishGame(playerName){
    const finishPopUp = document.querySelector(".reset-msg");
    finishPopUp.textContent = `${playerName} WON!`
    turn = 0;

}

populateBoard(gameboard.gameBoard);
cellFunctionality();
