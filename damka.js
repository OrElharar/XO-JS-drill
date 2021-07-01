
createVisualBoardSquars();




function createVisualBoardSquars() {
    const boardPieces = [];
    const damkaBoard = document.getElementById("board");
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const currentPiece = document.createElement('div');
            currentPiece.className = 'game-piece';

            if (i % 2 === 1) {
                currentPiece.className = (j % 2 === 1) ? "white" : "black";
            }
            else {
                currentPiece.className = (j % 2 === 1) ? "black" : "white";
            }
            addSoldier(currentPiece, i, j);
            damkaBoard.appendChild(currentPiece);
            boardPieces.push(currentPiece);
        }
    }


    return boardPieces;
}

function addSoldier(currentPiece, i, j) {
    const currentSoldier = document.createElement('div');
    if (currentPiece.className === 'black') {
        if (i < 3)
            currentSoldier.className = 'soldier red'
        else {

            if (i > 4)
                currentSoldier.className = 'soldier blue';
            else
                currentSoldier.className = 'empty-square';
        }
    }
    else
        currentSoldier.className = 'empty-square';

    setId(currentSoldier, i, j);
    currentPiece.appendChild(currentSoldier);

}
function setId(currentSoldier, i, j) {
    currentSoldier.setAttribute('id', `${i}_${j}`)

}
