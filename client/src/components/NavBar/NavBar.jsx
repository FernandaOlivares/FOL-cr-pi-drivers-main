/* eslint-disable react/prop-types */
import SearchBar from '../SearchBar/SearchBar.jsx';
import SortByName from '../Filters/SortByName.jsx'
import FilterByTeam from '../../components/Filters/FilterByTeam.jsx'
import FilterBySource from '../../components/Filters/FilterBySource.jsx'
import SortByDateOfBirth from '../../components/Filters/SortByDateOfBirth.jsx'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css';

const NavBar = ({handleChange, handleSubmit}) => (

  <div className={styles.navBarContainer}>
    <p>Search By Forename:</p>
    <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
    <p>Sort By:</p>
    <SortByName/>
    <SortByDateOfBirth/>
    <p>Filter By:</p>
    <FilterByTeam/>
    <FilterBySource/>

    <Link className={styles.linkButton} to= '/drivers'>Add Driver</Link>
    
    <button className={styles.overlayButton}>Reload Drivers</button>

  </div>
);

export default NavBar;