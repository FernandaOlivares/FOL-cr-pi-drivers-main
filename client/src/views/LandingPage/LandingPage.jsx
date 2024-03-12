import { Link } from 'react-router-dom';
import LandingPageContent from '../../components/LandingPageContent/LandingPageContent.jsx';
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
      <LandingPageContent />
    </div>
    <div className={styles.storyContainer}>
      <p> &quot;Once upon a time, there were men who pursued death for greatness, every second of a race,</p>
      <p> reaching speeds up to 375 km/h, becoming...</p>
      <p> F1 - Legends&quot;</p>
    </div>
    </div>
  );
};

export default LandingPage;
