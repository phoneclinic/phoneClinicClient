import React, { Component, useEffect, useState } from "react";
import HeaderIntro1 from "./HeaderIntro/HeaderIntro1/HeaderIntro1";
import HeaderIntro2 from "./HeaderIntro/HeaderIntro2/HeaderIntro2";
import ServiceMain from "./Service/ServiceMain/ServiceMain";
import WhyChooseUsMain from "./whyChooseUs/whyChooseUsMain";
import pic1 from '../../Assets/Images/others/banner/service.png';
import pic2 from '../../Assets/Images/others/banner/transfer.png';
import pic3 from '../../Assets/Images/others/banner/gadget.png';
// import g1 from '../../Assets/Images/gallery/1';
import g2 from '../../Assets/Images/gallery/2.jpg';
import g3 from '../../Assets/Images/gallery/3.jpg';
// import g4 from '../../Assets/Images/gallery/4';
import g5 from '../../Assets/Images/gallery/5.jpg';
import g6 from '../../Assets/Images/gallery/6.jpg';
// import g7 from '../../Assets/Images/gallery/7';
import g8 from '../../Assets/Images/others/phoneClinic.jpg';
import g9 from '../../Assets/Images/others/waterloo.jpg';
import issue from '../../Assets/Images/others/issue.png';
import clipboard from '../../Assets/Images/others/clipboard.png';
import delivery from '../../Assets/Images/others/delivery.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './Homepage.module.css'

const HomePage = (props) => {

    const [selectedImg, setSelectedImg] = useState(g2);

    const [currentSet, setCurrentSet] = useState(0);

    const [windowSize, setWindowSize] = useState(null);

    const [itemPerSet, setItemPerSet] = useState(4);

    useEffect(() => {
        if (window.location.pathname === '/service'){
            document.getElementById('service').scrollIntoView();
        }
        function resize() {
            setWindowSize(window.innerWidth)
        }

        window.addEventListener('resize', resize)
    }, [])

    useEffect(() => {
        windowSize <= 650 ? setItemPerSet(3) : setItemPerSet(4)
    }, [windowSize])
    
    let galleryImgDisplay = <img src={selectedImg} alt="phone clinic" className={styles.galleryImgDisplay} />
    
    const galleryImages = [g2, g3, g5, g6, g8, g9]
    
    let totalSet = Math.ceil(galleryImages.length / itemPerSet);

    const galleryImg = galleryImages.slice(currentSet * itemPerSet, (currentSet * itemPerSet) + itemPerSet).map((img, index) => {
        return <div key={index} className={styles.galleryImgBody} onClick={() => setSelectedImg(img)}>
            <img src={img} alt="phone clinic" className={styles.galleryImg} />
        </div>
    })

    console.log(itemPerSet);

    return (
        <div>                            
            <HeaderIntro1 />

            <div className={styles.BannerMain}>
                <div className={styles.Banner}>
                    <img src={pic1} alt="pic1"/>
                    <div className={styles.Subbanner}>
                        <h3>Mobile Servicing</h3>
                        <p>All kinds of Smartphone Services</p>
                    </div>
                </div>

                <div className={styles.Banner}>
                    <img src={pic2} alt="pic2"/>
                    <div className={styles.Subbanner}>
                        <h3>Money Transfer</h3>
                        <p>Sends Money All Over the World</p>
                    </div>
                </div>

                <div className={styles.Banner}>
                    <img src={pic3} alt="pic3"/>
                    <div className={styles.Subbanner}>
                        <h3>Laptop and Mobile Parts</h3>
                        <p>All Kinds of Laptop and Smartphone Accessories</p>
                    </div>
                </div>
            </div>
            
            <div id="service">
                <ServiceMain serviceMain={props.service}/>
            </div>

            <div className={styles.HeadingMain}>
                <div className={styles.Header}>
                    <h1>How Does It Works</h1>
                    <h3>Get your device Repaired in Just Three Easy Steps</h3>
                </div>

                <div className={styles.Details}>
                    <div className={styles.Subdetails}>
                        <img src={issue} alt="issue"/>
                        <h3><strong>Step 1</strong>. Tell Us Your Issue</h3>
                        <p>Tell us about your Device problem by Call or Booking an Appoinment</p>
                    </div>
                    <div className={styles.Subdetails}>
                        <img src={clipboard} alt="clipboard"/>
                        <h3><strong>Step 2</strong>. Get Your Estimate</h3>
                        <p>We will reply you within an Hour about your appoinment time and price</p>
                    </div>
                    <div className={styles.Subdetails}>
                        <img src={delivery} alt="deliver"/>
                        <h3><strong>Step 3</strong>. Bring or Send the Device</h3>
                        <p>Once happy with price and time, you can bring or send the device </p>
                    </div>
                </div>
            </div>

            <div className={styles.galleryContainer}>
                <h1>Phone Clinic Gallery</h1>

                <div className={styles.galleryImgDisplayMain}>
                    {galleryImgDisplay}
                </div>

                <div className={styles.galleryIndex}>
                    <button onClick={() => setCurrentSet(currentSet - 1)}
                            className={styles.handlerBtn}
                            disabled={currentSet === 0}
                            >
                        <FontAwesomeIcon icon={faChevronCircleLeft} className={styles.arrows}/>
                    </button>
                    {galleryImg}
                    <button onClick={() => setCurrentSet(currentSet + 1)}
                            className={styles.handlerBtn}
                            disabled={currentSet === totalSet -1}
                            >
                        <FontAwesomeIcon icon={faChevronCircleRight} className={styles.arrows}/>
                    </button>
                </div>
            </div>


            <div>
                <HeaderIntro2 />
            </div>

            <div>
                <WhyChooseUsMain />
            </div>
            
        </div>

    )

}

export default HomePage;
