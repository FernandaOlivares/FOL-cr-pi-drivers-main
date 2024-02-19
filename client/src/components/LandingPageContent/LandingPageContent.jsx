import LandingPageVideo from "../../assets/LandingPageVideo.mp4";
import styles from './LandingPageContent.module.css';

const LandingPageContent = () => {
  return (
    <div className={styles.videoContainer}>
      <video controls autoPlay loop className={styles.video}>
        <source src={LandingPageVideo} type="video/mp4" />
        {/* Aquí puedes agregar más etiquetas <source> para diferentes formatos de video */}
        Tu navegador no admite el elemento de video.
      </video>
    </div>
  );
};

export default LandingPageContent;
