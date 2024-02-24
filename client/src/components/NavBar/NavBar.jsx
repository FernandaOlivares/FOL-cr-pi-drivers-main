import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar.jsx';
import SortDriversByName from '../Filters/SortDriversByName.jsx'
import FilterByTeam from '../../components/Filters/FilterByTeam.jsx'
import FilterDriversBySource from '../../components/Filters/FilterDriversBySource.jsx'
import SortByDateOfBirth from '../../components/Filters/SortByDateOfBirth.jsx'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css';

const NavBar = ({handleChange, handleSubmit, handleFilterBySource, handleSortByName}) => (

  <div className={styles.navBarContainer}>
    <p>Search By Forename:</p>
    <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
    <p>Sort By:</p>
    <SortDriversByName handleSortByName={handleSortByName}/>
    <SortByDateOfBirth/>
    <p>Filter By:</p>
    <FilterByTeam/>
    <FilterDriversBySource handleFilterBySource={handleFilterBySource}/>

    <Link className={styles.linkButton} to= '/drivers'>Add Driver</Link>
    
    <button className={styles.overlayButton}>Reload Drivers</button>

  </div>
);

NavBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFilterBySource: PropTypes.func.isRequired,
  handleSortByName: PropTypes.func.isRequired,
};


export default NavBar;