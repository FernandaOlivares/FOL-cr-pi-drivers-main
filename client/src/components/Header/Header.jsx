import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = ({pageTitle}) => {
    return (
        <div className={styles.headerContainer}>
            <Link to="/home" className={styles.logoContainer}>F1 - LEGENDS</Link>
            <h2 className={styles.titleContainer}>{pageTitle}</h2>
            <div className={styles.buttonContainer}>
                <Link className={styles.homeButton}  to='/home'>Home</Link>
            </div>
        </div>
    );
}

export default Header;
