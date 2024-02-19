import { Link } from 'react-router-dom';
import LandingPageContent from '../../components/LandingPageContent/LandingPageContent.jsx';
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className= {styles.bodyContainer}>
       <Link to="/home">
      <button className={styles.overlayButton}>L I G H T S -  O U T !!</button>
      <LandingPageContent />
      </Link>
    </div>
  );
};

export default LandingPage;