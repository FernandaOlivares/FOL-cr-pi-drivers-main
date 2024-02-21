/* eslint-disable react/prop-types */
import styles from './Card.module.css';
import defaultImg from '../../assets/f1HeroDefaultImg.jpg'


const Card = ({eachDriver}) => {
  const { forename, surname, image, teams } = eachDriver;
  const joinTeams = (teams && teams.length > 0) ? teams.join(" - ") : (teams ?? "Independent Driver");



  return (
    <div className={styles.card}>
      <h3 className={styles.overlayTextName}>{forename}</h3>
      <p className={styles.overlayTextName}>{surname}</p>
      <p className={styles.overlayTextName}>{joinTeams}</p>
      <img className={`${styles.imageFilter}`}
      src={image ? image : defaultImg}
      alt={`${forename} ${surname}'s picture not found`}/>
    </div>
  );
};


export default Card;
