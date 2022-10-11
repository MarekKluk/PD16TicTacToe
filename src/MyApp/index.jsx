import React, {useState} from "react";
import Board from "../Board/board";
import checkForWinner from "../checkForWinner";
import styles from "../styles.module.css";

export function MyApp() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isX, setIsX] = useState(true)
    const winner = checkForWinner(squares);

     const handleClick = (i) => {
         if(winner || squares[i]) {
             return;
         }
         squares[i] = isX? 'X' : 'O'
         setSquares([...squares]);
         setIsX(!isX);
     }

     const startNewGame = () => {
         setSquares(Array(9).fill(null));
         setIsX(true);
     }
     let status = '';
     if(winner) {
         status = `Player ${winner} has won`
     }
     else {
         const currentPlayer = isX? 'X' : 'O';
         status = `Current player: ${currentPlayer}`
     }

    return (
        <div>
            <Board squares={squares} onClick={handleClick}/>
            <div className={styles.displayPlayer}>{status}</div>
            <button onClick={startNewGame}>New Game</button>
        </div>
    );
}
