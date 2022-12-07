import React, { useEffect } from "react";
import PhoneModel  from "./Phonemodel/Phonemodel";
import { Link, useParams } from "react-router-dom"; 
import styles from './PhoneModels.module.css';
import GetAquote from "../../../Extra/GetAqoute/GetAquote";
import { device, logo } from "../../../data/data";


const PhoneModels = () => {

    const params = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    let display = null;
    let img = null;

    img = <img src={logo[params.deviceId][params.itemId]} alt={params.itemId} />
    
    display = Object.keys(device[params.deviceId]).map(item => {
        return item === params.itemId ?
            device[params.deviceId][item].map((igkey, index) => {
                
                let dir = params.queryId === 'accessories' ? `/${params.queryId}/${params.deviceId}/${item}/${igkey}`
                : `/${params.queryId}/${params.deviceId}/${item}/${igkey}/inquiry`;

                return <Link key={index} to={dir}>
                        <PhoneModel key={igkey} device={igkey} />
                    </Link>
            }) : null;
    })
    
    return (
        <div className={styles.Main}>
            <div className={styles.PicMain}>
                <div className={styles.Pic}>
                {img}
                </div>
            </div>

            <div className={styles.Mobile}>
                {display}
            </div>

            <GetAquote />
        </div>
    )
}

export default PhoneModels;
