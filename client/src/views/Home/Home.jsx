import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Cards from '../../components/Cards/Cards';

import styles from './Home.module.css'

const Home = () => {
  
    
  return (
        <div className={styles.homeContainer}>
        <h1>F1 LEGENDS!</h1>
          <div>
            <NavBar />
          </div>
          <div>
            <Cards />
          </div>
        </div>
    );
};

export default Home;
