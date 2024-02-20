/* eslint-disable react/prop-types */
import styles from './Card.module.css';
import defaultImg from '../../assets/f1HeroDefaultImg.jpg'


const Card = ({ forename, surname, image }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.overlayTextName}>{forename}</h3>
      <p className={styles.overlayTextName}>{surname}</p>
      <img className={styles.imgContainer}
      src={image ? image : defaultImg}
      alt={`${forename} ${surname}'s picture not found`}/>
    </div>
  );
};

export default Card;
