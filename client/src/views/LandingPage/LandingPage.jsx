import { Link } from 'react-router-dom';
import LandingPageContent from '../../components/LandingPageContent/LandingPageContent.jsx';
import TypewriterEffect from '../../utils/typeWriterEffect.jsx';
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.bodyContainer}>
      <Link to="/home">
        <button className={styles.overlayButton}>LIGHTS OUT!</button>
      </Link>
      <LandingPageContent />
      <div className={styles.typewriterContainer}>
        <TypewriterEffect text='" Once upon a time there was a man who pursued death for greatness,:every second of the race. . . " - F1 Legends' />
      </div>
    </div>
  );
};

export default LandingPage;
