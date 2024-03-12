import LandingPageVideo from "../../assets/LandingPageVideo.mp4";
import styles from './LandingPageContent.module.css';

const LandingPageContent = () => {
  return (
    <div className={styles.videoContainer}>
      <video controls autoPlay loop className={styles.video}>
        <source src={LandingPageVideo} type="video/mp4" />
        Browser does not support the video element, try an other one.
      </video>
    </div>
  );
};

export default LandingPageContent;
