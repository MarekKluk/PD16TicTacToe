import React from "react";
import styles from "../../styles.module.css";

export default function Square({onClick, value}) {
    return (
        <button className={styles.square} onClick={onClick}>{value}</button>
    );
}