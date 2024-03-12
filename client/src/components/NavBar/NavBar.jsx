import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar.jsx';
import SortDriversByName from '../Filters/SortDriversByName.jsx';
import FilterDriversByTeam from '../../components/Filters/FilterDriversByTeam.jsx';
import FilterDriversBySource from '../../components/Filters/FilterDriversBySource.jsx';
import SortDriversByDateOfBirth from '../Filters/SortDriversByDateOfBirth.jsx';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = (props) => {
  const {
    handleChange,
    handleSubmit,
    handleFilterBySource,
    handleSortByName,
    handleSortByDateOfBirth,
    handleFilterByTeam,
    allTeams,
    handleReset,
    selectedBySourceValue,
    selectedByNameValue,
    selectedByDOBValue,
    selectedByTeamValue,
    searchInput,
  } = props;

  return (
    <div className={styles.navBarContainer}>
      <p>Search By Forename:</p>
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} searchInput={searchInput} />
      <p>You did not find a driver?</p>
      <Link className={styles.linkButton} to= '/create'>Add Driver</Link>
      <p>Filter By:</p>
      <FilterDriversByTeam handleFilterByTeam = {handleFilterByTeam} selectedByTeamValue={selectedByTeamValue} allTeams={allTeams}/>
      <FilterDriversBySource handleFilterBySource={handleFilterBySource} selectedBySourceValue={selectedBySourceValue}/>
      <p>Sort By:</p>
      <SortDriversByName handleSortByName={handleSortByName} selectedByNameValue={selectedByNameValue}/>
      <SortDriversByDateOfBirth handleSortByDateOfBirth={handleSortByDateOfBirth} selectedByDOBValue={selectedByDOBValue}/>
      <button onClick={handleReset} className={styles.overlayButton}>Reset Filters</button>
    </div>
  );
};

NavBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFilterBySource: PropTypes.func.isRequired,
  handleSortByName: PropTypes.func.isRequired,
  handleSortByDateOfBirth: PropTypes.func.isRequired,
  handleFilterByTeam: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  selectedBySourceValue: PropTypes.string.isRequired,
  selectedByNameValue: PropTypes.string.isRequired,
  selectedByDOBValue: PropTypes.string.isRequired,
  selectedByTeamValue: PropTypes.string.isRequired,
  searchInput: PropTypes.string.isRequired,
  allTeams: PropTypes.array.isRequired,
};

export default NavBar;
