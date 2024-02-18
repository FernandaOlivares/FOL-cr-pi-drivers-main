import Card from '../../components/Card/Card'
import styles from './Cards.module.css';


const Cards = () => (
  <div className={styles.cardContainer }>
    <p>Estas en Cards!</p>
  <Card/>
  <Card/>
  <Card/>
  </div>
);

export default Cards;