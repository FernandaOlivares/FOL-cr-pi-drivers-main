/* eslint-disable no-unused-vars */
import Card from '../../components/Card/Card';
import styles from './Cards.module.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '../Pagination/Pagination.jsx'
import { getAllDrivers } from '../../redux/actions/index.jsx'


const Cards = () => {
  const dispatch = useDispatch();
  const allDrivers = useSelector((state) => state.allDrivers);

  useEffect(() => {
    dispatch(getAllDrivers());
  }, [dispatch]);


  //PAGINATION//
  const [currentPage, setCurrentPage] = useState(1);//currenPage guara la pagina actual en un estado local/ y setDriversPerPage es una constante que set la página actual/ Comienza en 1 porque siempre inicio en la 1ra pagina
  const [driversPerPage, setDriversPerPage] = useState(9);//Destructuring de los primeros 9 elementos del array driverPerPage.Estas constantes guardan ene el estado local, cuantos drivers quiero por página
  const indexOfLastDriver = currentPage * driversPerPage;//9
  const indexOfFirstDriver = indexOfLastDriver - driversPerPage;//0
  const currentDrivers = allDrivers.slice(indexOfFirstDriver, indexOfLastDriver);//Que devuelva del i 0 al 8, en total 9 drivers. Va de 0 a 9 pero corta entre i 8 y 9.

  const pagination = (pageNumber) => {
      setCurrentPage(pageNumber);
  };
    
  return (
    <div className={styles.cardContainer}>
      <Pagination 
        driversPerPage={driversPerPage} 
        allDrivers={allDrivers.length} 
        pagination={pagination} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />
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
