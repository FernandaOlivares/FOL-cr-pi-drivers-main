//import React from "react";
import ReactPlayer from "react-player";
import LandingPageVideo from "../../assets/LandingPageVideo.mp4";
import style from './BackgroundVideo'


const BackgroundVideo = () => {
  return (
    <div className={style.BackgroundVideo}>
      <ReactPlayer
        url={LandingPageVideo}
        playing
        loop
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default BackgroundVideo;
