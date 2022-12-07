import React from "react";
import styles from './Phonemodel.module.css';

const phoneModel = (props) => {

    return (
        <div className={styles.Main}>
            <h2>{props.device}</h2>
            <p>Book now</p>
        </div>
    )
}

export default phoneModel;
