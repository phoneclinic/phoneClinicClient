import React from'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.css';
import logo from '../../Assets/Images/logo.png';

const Logo = () => {

    return (
        <Link to="/">
            <div className={styles.Logo}>
                <img src={logo} alt="logo" />
            </div>
        </Link>
    )

}

export default Logo;
