import React from 'react';
import { faFacebook, faYoutube, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import ReactWhatsapp from 'react-whatsapp';
import styles from './FooterMain.module.css';

const FooterMain = () => {


    return (    
        <div className={styles.Main}>
            <div className={styles.socialLinkMain}>
                <h2 className={styles.socialLinkHeader}>Phone Clinic</h2>
                <div className={styles.contactLinks}>
                    <div className={styles.contactLink}>
                        <p style={{margin: '5px'}}>271 Old kent road, SE15LU</p>
                        <div className={styles.contactNumbers}>
                            <a href='tel:+442072372724' className={styles.contactNumber}>020 7237 2724</a>
                            <a href='tel:+447770070327' className={styles.contactNumber}>07770 070327</a>
                        </div>
                    </div>

                    <div className={styles.contactLink}>
                        <p style={{margin: '5px'}}>231 Waterloo road, SE1 8XH</p>
                        <div className={styles.contactNumbers}>
                            <a href='tel:+442079283728' className={styles.contactNumber}>020 7928 3728</a>
                            <a href='tel:+447484369049' className={styles.contactNumber}>07484 369049</a>
                        </div>
                    </div>
                </div>
                <ul className={styles.socialLinkLists}>
                    <li className={styles.socialLinkList}>
                        <Link to='' className={styles.socialLinkLinks}><FontAwesomeIcon id={styles.fb} style={{height: '35px', width: '35px'}} icon={faFacebook}/></Link>
                    </li>
                    <li className={styles.socialLinkList}>
                        <ReactWhatsapp number="+447516345999" message="Hello phone clinic..." className={styles.whatsappBtn}>
                            <FontAwesomeIcon icon={faWhatsappSquare} className={styles.whatsappIcon}/>
                        </ReactWhatsapp>
                    </li>
                    <li className={styles.socialLinkList}>
                        <Link to='' className={styles.socialLinkLinks}><FontAwesomeIcon id={styles.yt} style={{height: '35px', width: '35px'}} icon={faYoutube}/></Link>
                    </li>
                    <li className={styles.socialLinkList}>
                        <Link to='' className={styles.socialLinkLinks}><FontAwesomeIcon id={styles.in} style={{height: '35px', width: '35px'}} icon={faInstagram}/></Link>
                    </li>
                </ul>
            </div>

            <div className={styles.quickLinkMain}>
                <h3 className={styles.quickLinkHeader}>Quick Links</h3>
                <ul className={styles.quickLinkLists}>
                    <Link to="/aboutus" className={styles.quickLinkLinks}>
                        <li className={styles.quickLinkList}>About Us</li>
                    </Link>

                    <Link to="/service" className={styles.quickLinkLinks}>
                        <li className={styles.quickLinkList}>Services</li>
                    </Link>

                    <Link to="/inquiry" className={styles.quickLinkLinks}>
                        <li className={styles.quickLinkList}>Appoinment</li>
                    </Link>

                    <Link to="/contact" className={styles.quickLinkLinks}>
                        <li className={styles.quickLinkList}>Contact</li>
                    </Link>

                    <Link to="/other_services/store_locator" className={styles.quickLinkLinks}>
                        <li className={styles.quickLinkList}>Store Locator</li>
                    </Link>
                </ul>
            </div>
            
            <div className={styles.usefulLinkMain}>
                <h3 className={styles.usefulLinkHeader}>Useful Links</h3>
                <ul className={styles.usefulLinkLists}>
                    <Link to="#" className={styles.usefulLinkLinks}>
                        <li className={styles.usefulLinkList}>Privacy Policy</li>
                    </Link>
                    <Link to="#" className={styles.usefulLinkLinks}>
                        <li className={styles.usefulLinkList}>Terms and Conditions</li>
                    </Link>    
                    <Link to="#" className={styles.usefulLinkLinks}>
                        <li className={styles.usefulLinkList}>Disclaimer</li>
                    </Link>    
                    <Link to="#" className={styles.usefulLinkLinks}>
                        <li className={styles.usefulLinkList}>Support</li>
                    </Link>    
                    <Link to="#" className={styles.usefulLinkLinks}>
                        <li className={styles.usefulLinkList}>FAQ</li>
                    </Link>
                </ul>
            </div>

            <div className={styles.workingHourMain}>
                <h3 className={styles.workingHourHeader}>Working Hours</h3> 
                <ul className={styles.workingHourLists}>
                    <li className={styles.workingHourList}>
                        <FontAwesomeIcon icon={faClock} className={styles.workingHourFont} />
                        <p className={styles.workingHourPara}>Monday-Saturday: 10AM-9PM</p>
                    </li>

                    <li className={styles.workingHourList}>
                        <FontAwesomeIcon icon={faClock} className={styles.workingHourFont} />
                        <p className={styles.workingHourPara}>Sunday: 11AM-8PM</p>
                    </li>
                </ul>
                <p style={{color: 'white'}}>&copy; Copyright 2022</p>
            </div>
        </div>
    )
}


export default FooterMain;
