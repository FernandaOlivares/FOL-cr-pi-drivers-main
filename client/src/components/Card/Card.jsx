import styles from './Card.module.css';

const Card = () => (
  <div className={styles.card}>
    <h3>Name:</h3>
    <p>Nationality:</p>
    <p>Date of birth:</p>
    <p>Team:</p>
  </div>
);

export default Card;
