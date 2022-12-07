import React from "react";
import { useParams } from "react-router-dom";
import RepairItem from "../RepairItem/RepairItem";
import styles from './RepairConsole.module.css';
import { logo } from '../../../data/data';

const RepairConsole = () => {

    const params = useParams();

    const phoneRepair = Object.keys(logo[params.deviceId]).map((item, index) => {
        console.log(item);
        return <RepairItem key={index}
                            img={logo[params.deviceId][item]} 
                            model={item} />
    })

    return (
        <div className={styles.Main}>
            {phoneRepair}
        </div>
    )
}

export default RepairConsole;
