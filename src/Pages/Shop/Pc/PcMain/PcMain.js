import React, { useEffect } from "react";
import delivery from '../../../../Assets/Images/Accessories/pcAccesories/Logo/delivery.png';
import gift from '../../../../Assets/Images/Accessories/pcAccesories/Logo/gift.png';
import payment from '../../../../Assets/Images/Accessories/pcAccesories/Logo/payment.png';
import styles from './PcMain.module.css';
import PcCategory from "./PcCategory/PcCategory";
import GetAquote from "../../../../Extra/GetAqoute/GetAquote";
import { useParams } from "react-router-dom";
import { logo } from '../../../../data/data';


const PcMain = () => {

    const params = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    let img = null;
    let details = null;

    if (params.deviceId === 'laptop' && params.queryId === 'accessories') {
        img = <img src={logo[params.deviceId][params.itemId]} alt="LaptopAccessotry"/>;
        details = <div className={styles.Heading}>
            <h1>Computer Accesories</h1>
            <h2>Shop Computer Accesories</h2>
            <p>Buy All the parts you need for your personal computer.</p>
        </div>
    }

    else if (params.deviceId === 'tablet' && params.queryId === 'accessories') {
        img = <img src={logo[params.deviceId][params.itemId]} alt="TabletAccessories"/>;
        details = <div className={styles.Heading}>
            <h1>Tablet Accesories</h1>
            <p>Buy All the Accesories you need for your Tablets</p>
            <p>Buy New and Used Tablets</p>
        </div>
    }

    else if (params.deviceId === 'phone' && params.queryId === 'accessories'){
        img = <img src={logo[params.deviceId][params.itemId]} alt="MobileAccessory"/>
        details = <div className={styles.Heading}>
            <h1>Phone Accesories</h1>
            <h2>Shop Smart Phone Accesories</h2>
            <p>Buy All the Accesories you need for your SmartPhones</p>
        </div>
    }
    
    return (
        <>
            <div className={styles.Main}>
                <div className={styles.Pic}>
                    {img}
                </div>
                {details}
            </div>

            <div>
                <PcCategory />
            </div>
    
            <div className={styles.Shop}>
                <h1>Shop Safely with Phone Clinic</h1>
                <div className={styles.Head2}>
                    <div>
                        <img src={delivery} alt="Delivery"/>
                        <p>Free Delivery</p>
                    </div>
                    <div>
                        <img src={payment} alt="Payment" />
                        <p>Secure Payment</p>
                    </div>
                    <div>
                        <img src={gift} alt="Gift" />
                        <p>Gift Voucher</p>
                    </div>
                </div>
            </div>

            <div className={styles.Intro1}>
                <h2>Currently we don't have online purchasing<br></br>
                To buy a {params.deviceId} {params.queryId}. All you have to do is:</h2>
                <div style={{margin: '10px'}}>
                    <p>Fill up the form by selecting one of the category below or Call us on 020 7237 2724 To check the availabilities and price</p>
                </div>
            </div>
    

            <GetAquote />
        </>
    )
}

export default PcMain;
