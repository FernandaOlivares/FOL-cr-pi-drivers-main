import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; 

import defaultImg from '../../assets/f1HeroDefaultImg.jpg';
import { getDriverById } from '../../redux/actions/index.jsx';

import styles from './Detail.module.css';

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true); //! Track loading status

  useEffect(() => {
    dispatch(getDriverById(id)).then(() => {
      setIsLoading(false); //! Set loading status to false when data is fetched & ensure that the entire driver information is loaded before rendering
    });
  }, [dispatch, id]);

  const driverDetail = useSelector((state) => state.driverById);
  const joinTeams = (driverDetail && driverDetail.teams && driverDetail.teams.length > 0)
    ? driverDetail.teams.join(" - ")
    : (driverDetail && driverDetail.teams ? driverDetail.teams : "Independent Driver");

  return (
    <div className={styles.detailContainer}>
      {
        isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className={styles.card}>
            <img
              className={`${styles.imageFilter}`}
              src={driverDetail.image || defaultImg}
              alt={`${driverDetail.forename} ${driverDetail.surname}'s picture not found`}
            />
            <h1 className={`${styles.overlayTextName} ${styles.robotoMonoFont}`}>{driverDetail.forename}</h1>
            <h1 className={`${styles.overlayTextName} ${styles.robotoMonoFontBolt}`}>{driverDetail.surname}</h1>
            <h3 className={`${styles.overlayTextName} ${styles.robotoMonoFont}`}>{joinTeams}</h3>
            <p>Id: {driverDetail.id}</p>
            <p>Date Of Birth:{driverDetail.dateOfBirth}</p>
            <p>Nationality: {driverDetail.nationality}</p>
            <p>Biography: {driverDetail.description}</p>
          </div>
        )
      }
    </div>
  );
};

export default Detail;
