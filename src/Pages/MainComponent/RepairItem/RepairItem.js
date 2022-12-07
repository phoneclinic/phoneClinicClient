import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from './RepairItem.module.css';


const RepairItem = (props) => {

    const params = useParams();

    console.log(params);

    const padding = props.device === 'tablet' ? '10px' : null

    return (
        <Link to={`/${params.queryId}/${params.deviceId}/${props.model}`} className={styles.Main} style={{padding: padding}} >
            <img src={props.img} alt={props.img}/>
            <p>{props.model}</p>
        </Link>
    )
} 

export default RepairItem;
