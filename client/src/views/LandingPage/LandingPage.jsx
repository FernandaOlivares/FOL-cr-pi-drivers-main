import { Link } from 'react-router-dom';
import LandingPageContent from '../../components/LandingPageContent/LandingPageContent.jsx';
import TypewriterEffect from '../../utils/TypewriterEffect/TypewriterEffect.jsx';
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div>
      <div>
      <Link to="/home" className={styles.logoContainer}>
        F1 - LEGENDS
      </Link>
    </div>
    <div className={styles.buttonContainer}>
      <Link to="/home" className={styles.homeButton}>
        Home
      </Link>
    </div>
    <div className={styles.bodyContainer}>
      <Link to="/home">
        <button className={styles.overlayButton}>LIGHTS OUT!</button>
      </Link>
      <LandingPageContent />
      <div className={styles.typewriterContainer}>
        <TypewriterEffect text='"Once upon a time, there were men who pursued death for greatness, every second of a race,:reaching speeds up to 375 km/h, becoming...:F1 - Legends"' />
      </div>
    </div>
    </div>
  );
};

export default LandingPage;
