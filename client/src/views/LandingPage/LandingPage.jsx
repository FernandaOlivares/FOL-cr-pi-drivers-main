//import React from "react";
import { Link } from 'react-router-dom';
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";
import style from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className= {style.container}>
       <Link to="/home">
      <button className={style.overlayButton}> S T A R T </button>
      <BackgroundVideo />
      </Link>
    </div>
  );
};

export default LandingPage;