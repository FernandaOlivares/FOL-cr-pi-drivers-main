import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar.jsx';
import SortDriversByName from '../Filters/SortDriversByName.jsx'
import FilterDriversByTeam from '../../components/Filters/FilterDriversByTeam.jsx'
import FilterDriversBySource from '../../components/Filters/FilterDriversBySource.jsx'
import SortDriversByDateOfBirth from '../Filters/SortDriversByDateOfBirth.jsx'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css';

const NavBar = ({handleChange, handleSubmit, handleFilterBySource, handleSortByName, handleSortByDateOfBirth, handleFilterByTeam, allTeams}) => (

  <div className={styles.navBarContainer}>
    <p>Search By Forename:</p>
    <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
    <p>You did not find a driver?</p>
    <Link className={styles.linkButton} to= '/create'>Add Driver</Link>
    <p>Sort By:</p>
    <SortDriversByName handleSortByName={handleSortByName}/>
    <SortDriversByDateOfBirth handleSortByDateOfBirth={handleSortByDateOfBirth}/>
    <p>Filter By:</p>
    <FilterDriversBySource handleFilterBySource={handleFilterBySource}/>
    <FilterDriversByTeam handleFilterByTeam = {handleFilterByTeam} allTeams={allTeams}/>
    <button className={styles.overlayButton}>Reload Drivers</button>
  </div>
);

NavBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFilterBySource: PropTypes.func.isRequired,
  handleSortByName: PropTypes.func.isRequired,
  handleSortByDateOfBirth: PropTypes.func.isRequired,
  handleFilterByTeam: PropTypes.func.isRequired,
  allTeams: PropTypes.array.isRequired,
};


export default NavBar;