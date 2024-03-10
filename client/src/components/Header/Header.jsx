/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = ({pageTitle, setCurrentPage}) => {
    const handleGoToHomePage = () => {
        setCurrentPage(1); // Establece la página actual en 1 al hacer clic en el enlace "Home"
    };

    return (
        <div className={styles.headerContainer}>
            <Link to="/home" className={styles.logoContainer} onClick={handleGoToHomePage}>F1 - LEGENDS</Link>
            <h2 className={styles.titleContainer}>{pageTitle}</h2>
            <div className={styles.buttonContainer}>
                <Link  to='/home'  className={styles.homeButton} onClick={handleGoToHomePage}>Home</Link>
            </div>
        </div>
    );
}

export default Header;
