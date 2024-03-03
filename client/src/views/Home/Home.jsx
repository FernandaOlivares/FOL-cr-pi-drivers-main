/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import NavBar from '../../components/NavBar/NavBar';
import Cards from '../../components/Cards/Cards';
import Pagination from '../../components/Pagination/Pagination.jsx';

import {
  getAllDrivers,
  getDriversByName,
  filterDriversBySource,
  sortDriversByName,
  sortDriversByDateOfBirth,
  getAllTeams,
  filterDriversByTeam
} from '../../redux/actions/index.jsx'

import styles from './Home.module.css'


const Home = () => {
  
//********************** GET ALL DRIVERS **********************//
  const dispatch = useDispatch();
  const allDrivers = useSelector((state) => state.allDrivers);

  useEffect(() => {
    dispatch(getAllDrivers());
  }, [dispatch]);

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(getAllDrivers());
  }

//********************** PAGINATE DRIVERS **********************//
  const [pageFilterType, setPageFilterType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);//currenPage guara la pagina actual en un estado local/ y setDriversPerPage es una constante que set la página actual/ Comienza en 1 porque siempre inicio en la 1ra pagina
  const [driversPerPage, setDriversPerPage] = useState(9);//Destructuring de los primeros 9 elementos del array driverPerPage.Estas constantes guardan ene el estado local, cuantos drivers quiero por página
  const indexOfLastDriver = currentPage * driversPerPage;//9
  const indexOfFirstDriver = indexOfLastDriver - driversPerPage;//0
  const currentDrivers = allDrivers.slice(indexOfFirstDriver, indexOfLastDriver);//Que devuelva del i 0 al 8, en total 9 drivers. Va de 0 a 9 pero corta entre i 8 y 9.

  const pagination = (pageNumber) => {
      setCurrentPage(pageNumber);
  };

//********************** GET DRIVERS BY NAME **********************//
  const [searchInput, setSearchInput] = useState(''); //Estado local vacío

    const handleChange = (input) =>{
      input.preventDefault();
      setSearchInput(input.target.value);
    };

    const handleSubmit = (input) =>{
      input.preventDefault();
      dispatch(getDriversByName(searchInput));
    };

//********************** FILTER DRIVERS BY SOURCE **********************//
  const handleFilterBySource = (event) => {
    event.preventDefault();
    dispatch(filterDriversBySource(event.target.value)); 
  };

//********************** SORT DRIVERS BY NAME OR FULL NAME **********************//
  const handleSortByName = (event) =>{
    event.preventDefault();
    dispatch(sortDriversByName(event.target.value));
  }

//********************** SORT DRIVERS BY DATE OF BIRTH **********************//
  const handleSortByDateOfBirth = (event) =>{
    event.preventDefault();
    dispatch(sortDriversByDateOfBirth(event.target.value));
  }

//********************** GET ALL TEAMS **********************//
  const allTeams = useSelector((state) => state.allTeams);

  useEffect(() => {
    dispatch(getAllTeams());
  }, [dispatch]);

//********************** FILTER DRIVERS BY TEAM **********************//
  const handleFilterByTeam = (event) => {
    event.preventDefault();
    dispatch(filterDriversByTeam(event.target.value)); 
  };
  
  return (
  <div>
    <div>
    <h1 className={styles.logoContainer } > F1 - LEGENDS </h1>
    <h2 className={styles.titleContainer}>| The Collection |</h2>
    </div>
  <div className={styles.homeContainer}>
    <div>
      <NavBar
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleFilterBySource={handleFilterBySource}
      handleSortByName = {handleSortByName}
      handleSortByDateOfBirth = {handleSortByDateOfBirth}
      handleFilterByTeam = {handleFilterByTeam}
      handleClick = {handleClick}
      allTeams = { allTeams }/>
    </div>
    <div>
      <Pagination driversPerPage={driversPerPage} allDrivers={allDrivers.length} pagination={pagination} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
    <div>
      <Cards currentDrivers={currentDrivers} />
    </div>
    </div>
  </div>
    );
};

export default Home;
