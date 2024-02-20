/*import React from 'react';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getDrivers} from '../../redux/actions/index';
import { AllDrivers } from '../../redux/selectors/index.js'
*/
import SearchBar from '../SearchBar/SearchBar.jsx';
import SortByName from '../Filters/SortByName.jsx'
import FilterByTeam from '../../components/Filters/FilterByTeam.jsx'
import FilterBySource from '../../components/Filters/FilterBySource.jsx'
import SortByDateOfBirth from '../../components/Filters/SortByDateOfBirth.jsx'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css';

const NavBar = () => (

  /*const dispatch = useDispatch();
  const allDrivers = AllDrivers(); //=map

  useEffect(()=>{
    dispatch(getDrivers());
  },[]);

  function handleClick(e){
    e.preventDefault();
    dispatch(getDrivers());
  }
  <button onClick = { e=> {handleClick(e)} }>Reload Drivers</button>
*/
  <div className={styles.navBarContainer}>
    <SearchBar />
    <SortByName/>
    <SortByDateOfBirth/>
    <FilterByTeam/>
    <FilterBySource/>
    <Link to= '/drivers'>Add Driver</Link>
    <button>Reload Drivers</button>

  </div>
);

export default NavBar;