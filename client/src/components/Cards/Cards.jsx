/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Card from '../../components/Card/Card';
import styles from './Cards.module.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '../Pagination/Pagination.jsx'
import { getAllDrivers } from '../../redux/actions/index.jsx'


const Cards = ({currentDrivers}) => {
  
    
  return (
    <div className={styles.cardContainer}>
     
      {currentDrivers?.map((eachDriver) => {
        return (
          <div key={eachDriver.id}>
            <Card eachDriver={eachDriver}/>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
