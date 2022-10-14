import React, {useState} from "react";
import { Board } from "./Board";
import styles from "./styles.module.css";
import root from "react-dom";

root.render(<TicTacToeGame />, document.getElementById("root"));

function checkForWinner (squaresArray) {
    const winningMatrix = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i=0; i<winningMatrix.length; i++) {
        const [a, b, c] = winningMatrix[i];
        if(squaresArray[a] && squaresArray[a] === squaresArray[b] && squaresArray[a] === squaresArray[c]){
            return squaresArray[a];
        }
    };
    return null;
}

export function TicTacToeGame() {
    const [tiles, setTiles] = useState(Array(9).fill(null))
    const [isX, setIsX] = useState(true)
    const winner = checkForWinner(tiles);
    const status = winner? `Player ${winner} has won` : `Current player: ${isX? 'X' : 'O'}`

    const addNewSignToTheBoardTile = (i) => {
        if(winner || tiles[i]) {
         return;
        }
        tiles[i] = isX? 'X' : 'O'
        setTiles([...tiles]);
        setIsX(!isX);
    }

    const startNewGame = () => {
        setTiles(Array(9).fill(null));
        setIsX(true);
    }

    return (
        <div>
            <Board tiles={tiles} onBoardTileClick={addNewSignToTheBoardTile}/>
            <div className={styles.displayPlayer}>{status}</div>
            <button onClick={startNewGame}>New Game</button>
        </div>
    );

}


