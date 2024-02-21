/* eslint-disable no-unused-vars */
import { useAllDrivers } from '../../redux/selectors/index';
import Card from '../../components/Card/Card';
import styles from './Cards.module.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '../Pagination/Pagination.jsx'


const Cards = () => {
  const allDrivers = useAllDrivers();
  
  //useState es una función proporcionada por React que se utiliza para administrar el estado local dentro de un componente de React. No se utiliza para administrar el estado global.
  
  //PAGINATION//
  const [currentPage, setCurrentPage] = useState(1);//currenPage guara la pagina actual en un estado local/ y setDriversPerPage es una constante que set la página actual/ Comienza en 1 porque siempre inicio en la 1ra pagina
  const [driversPerPage, setDriversPerPage] = useState(9);//Destructuring de los primeros 9 elementos del array driverPerPage.Estas constantes guardan ene el estado local, cuantos drivers quiero por página
  const indexOfLastDriver = currentPage * driversPerPage;//9
  const indexOfFirstDriver = indexOfLastDriver - driversPerPage;//0
  const currentDrivers = allDrivers.slice(indexOfFirstDriver, indexOfLastDriver);//Que devuelva del i 0 al 8, en total 9 drivers. Va de 0 a 9 pero corta entre i 8 y 9.

  const pagination = (pageNumber) => {
      setCurrentPage(pageNumber);//Set número de página actual
      console.log("Current Page (from pagination):", pageNumber);
  };
    
  return (
    <div className={styles.cardContainer}>
      <Pagination 
        driversPerPage={driversPerPage} 
        allDrivers={allDrivers.length} 
        pagination={pagination} 
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
