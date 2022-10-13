import React from "react";
import styles from "../../styles.module.css";

export function Tile({ onBoardTileClick, tileSign }) {
    return (
        <button className={styles.square} onClick={onBoardTileClick}> {tileSign} </button>
    );
}