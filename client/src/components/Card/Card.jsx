/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Card.module.css';
import defaultImg from '../../assets/f1HeroDefaultImg.jpg'


const Card = ({ forename, surname, image }) => {
  return (
    <div className={styles.card}>
      <h3>{forename}</h3>
      <p>{surname}</p>
      <img className={styles.imgContainer}
      src={image ? image : defaultImg}/>
    </div>
  );
};

export default Card;
