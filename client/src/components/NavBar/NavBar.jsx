import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar.jsx';
import SortByName from '../Filters/SortByName.jsx'
import FilterByTeam from '../../components/Filters/FilterByTeam.jsx'
import FilterBySource from '../../components/Filters/FilterBySource.jsx'
import SortByDateOfBirth from '../../components/Filters/SortByDateOfBirth.jsx'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css';

const NavBar = ({handleChange, handleSubmit, handleFilterBySource }) => (

  <div className={styles.navBarContainer}>
    <p>Search By Forename:</p>
    <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
    <p>Sort By:</p>
    <SortByName/>
    <SortByDateOfBirth/>
    <p>Filter By:</p>
    <FilterByTeam/>
    <FilterBySource handleFilterBySource={handleFilterBySource}/>

    <Link className={styles.linkButton} to= '/drivers'>Add Driver</Link>
    
    <button className={styles.overlayButton}>Reload Drivers</button>

  </div>
);

NavBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFilterBySource: PropTypes.func.isRequired
};


export default NavBar;