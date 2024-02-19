import { Link } from 'react-router-dom';
import LandingPageContent from '../../components/LandingPageContent/LandingPageContent.jsx';
import TypewriterEffect from '../../utils/typeWriterEffect.jsx'
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className= {styles.bodyContainer}>
       <Link to="/home">
      <button className={styles.overlayButton}>L I G H T S -  O U T !!</button>
      <LandingPageContent />
      </Link>
      <TypewriterEffect text='" Once upon a time there was a man who pursued death, for greatness, every second of the race. . . "' />
    </div>
  );
};

export default LandingPage;