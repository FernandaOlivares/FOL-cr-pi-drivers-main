import React from 'react';
import styles from './Header.module.css';

const Header = ({pageTitle}) => {
    return (
        <div>
            <h1 className={styles.logoContainer}>F1 - LEGENDS</h1>
            <h2 className={styles.titleContainer}>{pageTitle}</h2>
        </div>
    );
}

export default Header;
