import React from "react";
export default function checkForWinner(squaresArray) {
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