/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import NavBar from '../../components/NavBar/NavBar';
import Cards from '../../components/Cards/Cards';
import Pagination from '../../components/Pagination/Pagination.jsx';
import Header from '../../components/Header/Header.jsx';

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
  
//********************** GET ALL DRIVERS & GET ALL TEAMS **********************//
  const dispatch = useDispatch();
  const allDrivers = useSelector((state) => state.allDrivers);
  const allTeams = useSelector((state) => state.allTeams);

  useEffect(() => {
    dispatch(getAllDrivers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllTeams());
  }, [dispatch]);

//********************** PAGINATE DRIVERS **********************//
  const [currentPage, setCurrentPage] = useState(1);
  const DRIVERS_PER_PAGE = 9;
  const indexOfLastDriver = currentPage * DRIVERS_PER_PAGE;
  const indexOfFirstDriver = indexOfLastDriver - DRIVERS_PER_PAGE;
  const currentDrivers = allDrivers.slice(indexOfFirstDriver, indexOfLastDriver);

  const handlePagination = (pageNumber) => {
      setCurrentPage(pageNumber);
  };

//********************** RESET BUTTON **********************//
  const [selectedBySourceValue, setSelectedBySourceValue] = useState('');
  const [selectedByNameValue, setSelectedByNameValue] = useState('');
  const [selectedByDOBValue, setSelectedByDOBValue] = useState('');
  const [selectedByTeamValue, setSelectedByTeamValue] = useState('');

  const handleReset = () => {
    setSearchInput('');
    setSelectedBySourceValue('');
    setSelectedByDOBValue('');
    setSelectedByNameValue('');
    setSelectedByTeamValue('');
    setCurrentPage(1);
    dispatch(getAllDrivers());
  };

//********************** GET DRIVERS BY NAME **********************//
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getDriversByName(searchInput));
    setCurrentPage(1);
    setSelectedBySourceValue('');
    setSelectedByDOBValue('');
    setSelectedByNameValue('');
    setSelectedByTeamValue('');
  };

//********************** FILTERS HANDLERS **********************//
  const handleFilterByTeam = (event) => {
    event.preventDefault();
    setSelectedByTeamValue(event.target.value)
    dispatch(filterDriversByTeam(event.target.value)); 
  };

  const handleFilterBySource = (event) => {
    event.preventDefault();
    setSelectedBySourceValue(event.target.value)
    dispatch(filterDriversBySource(event.target.value)); 
  };

  const handleSortByName = (event) =>{
    event.preventDefault();
    setSelectedByNameValue(event.target.value)
    dispatch(sortDriversByName(event.target.value));
  }

  const handleSortByDateOfBirth = (event) =>{
    event.preventDefault();
    setSelectedByDOBValue(event.target.value)
    dispatch(sortDriversByDateOfBirth(event.target.value));
  }

  return (
  <div>
    <div>
    <Header setCurrentPage={setCurrentPage} pageTitle=' | The F1 - Legends Cards Collection | '/>
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
        handleReset={handleReset}
        selectedBySourceValue={selectedBySourceValue}
        selectedByNameValue={selectedByNameValue}
        selectedByDOBValue={selectedByDOBValue}
        selectedByTeamValue={selectedByTeamValue}
        searchInput={searchInput}
        allTeams = { allTeams }/>
      </div>
    <div>
      <Pagination
      driversPerPage={DRIVERS_PER_PAGE}
      allDrivers={allDrivers.length}
      handlePagination={handlePagination}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage} />
    </div>
    <div>
      {currentDrivers.length > 0 ? (
      <Cards currentDrivers={currentDrivers} />
      ) : (<div className={styles.errorContainer}>
        <p>
          <span role="img" aria-label="Oops!">⚠️</span> Ups! Driver not found...
        </p>
        <p>
          Try again or add a new driver by clicking on &quot;Add Driver&quot; button.
        </p>
    </div>
        )}
    </div>
    </div>
  </div>
    );
};

export default Home;
