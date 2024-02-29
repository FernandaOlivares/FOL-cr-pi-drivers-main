/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; 

import defaultImg from '../../assets/f1HeroDefaultImg.jpg';
import { getDriverById } from '../../redux/actions/index.jsx';

import styles from './Detail.module.css';

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); // Obtén el parámetro id de la URL

  useEffect(() => {
    console.log('ID a buscar:', id);
    dispatch(getDriverById(id)); // Utiliza el id obtenido de la URL
  }, [dispatch, id]);

  const driverDetail = useSelector((state) => state.driverById);
 /* console.log('Muestra el detail?', driverDetail);
  const joinTeams = (driverDetail && driverDetail.teams && driverDetail.teams.length > 0)
    ? driverDetail.teams.join(" - ")
    : (driverDetail && driverDetail.teams ? driverDetail.teams : "Independent Driver");
         <p className={`${styles.overlayTextName} ${styles.robotoMonoFont}`}>{joinTeams}</p>
*/

  return (
    <div>
      <p>Estás en Detail!</p>
      {
        driverDetail ? (
          <div>
            <img
              className={`${styles.imageFilter}`}
              src={driverDetail.image || defaultImg}
              alt={`${driverDetail.forename} ${driverDetail.surname}'s picture not found`}
            />
            <h1 className={`${styles.overlayTextName} ${styles.robotoMonoFont}`}>{driverDetail.forename}</h1>
            <h1 className={`${styles.overlayTextName} ${styles.robotoMonoFontBolt}`}>{driverDetail.surname}</h1>
            <p>{driverDetail.id}</p>
            <p>{driverDetail.dateOfBirth}</p>
            <p>{driverDetail.nationality}</p>
       
            <p>{driverDetail.description}</p>
          </div>
        ) : <p>Please wait a minute; it is taking longer than normal...</p>
      }
    </div>
  );
};

export default Detail;
