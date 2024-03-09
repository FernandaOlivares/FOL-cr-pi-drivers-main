/* eslint-disable react/prop-types */
import styles from './Card.module.css';
import defaultImg from '../../assets/f1DefaultImg.jpeg';
import { Link } from 'react-router-dom';

const Card = ({eachDriver}) => {
  const { forename, surname, image, teams, id } = eachDriver;
  const joinTeams = (teams && teams.length > 0) ? teams.join(" - ") : (teams ?? 'Teams not found');



  return (
    <div className={styles.card}> 
      <Link to={`/home/${id}`}>
      <div className={styles.imageContainer}>
        <img
          className={styles.imageFilter}
          src={image ? image : defaultImg}
          alt={`${forename} ${surname}'s picture not found`}
        />
      </div>
      <h2 className={`${styles.overlayTextName} ${styles.robotoMonoFont}`}>{forename || 'Forename not found'}</h2>
      <h2 className={`${styles.overlayTextName} ${styles.robotoMonoFontBolt }`}>{surname || 'Surname not found'}</h2>
      <p className={`${styles.overlayTextName} ${styles.robotoMonoFont}`}>{joinTeams  || 'Teams not found'}</p>
      </Link>
    </div>
  );
};


export default Card;
