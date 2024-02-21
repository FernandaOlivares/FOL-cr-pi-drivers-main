/* eslint-disable no-unused-vars */
import { useAllDrivers } from '../../redux/selectors/index';
import Card from '../../components/Card/Card';
import styles from './Cards.module.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '../Pagination/Pagination.jsx'


const Cards = () => {
  const allDrivers = useAllDrivers();
  //const dispatch = useDispatch();
  //const allDrivers = useSelector((state) => state.allDrivers);
  
   /* useEffect(() => {
      dispatch(getDrivers())
    }, [dispatch]);
  */

  const [currentPage, setCurrentPage] = useState(1);
  const [driversPerPage] = useState(9);
  const indexOfLastDrivers = currentPage * driversPerPage;
  const indexOfFirstDrivers = indexOfLastDrivers - driversPerPage;
  const currentDrivers = allDrivers.slice(indexOfFirstDrivers, indexOfLastDrivers);

  const pagination = (pageNumber) => {
      setCurrentPage(pageNumber)
  };
    
  return (
    <div className={styles.cardContainer}>
      <Pagination driversPerPage={driversPerPage} allDrivers={allDrivers.length} pagination={pagination}/>
      {allDrivers?.map((eachDriver) => {
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
