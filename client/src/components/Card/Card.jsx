/* eslint-disable react/prop-types */
import styles from './Card.module.css';
import defaultImg from '../../assets/f1HeroDefaultImg.jpg'


const Card = ({ forename, surname, image, teams }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.overlayTextName}>{forename}</h3>
      <p className={styles.overlayTextName}>{surname}</p>
      <p className={styles.overlayTextName}>{teams}</p>
      <img className={styles.imgContainer}
      src={image ? image : defaultImg}
      alt={`${forename} ${surname}'s picture not found`}/>
    </div>
  );
};

export default Card;
