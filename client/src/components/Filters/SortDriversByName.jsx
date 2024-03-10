/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

import styles from './Filters.module.css';

const SortDriversByName = ({handleSortByName, selectedByNameValue}) => {
  
return (
  <div className={styles.filterContainer}>
    <select value={selectedByNameValue} onChange={handleSortByName} name='sortByName' id='sortByName' className={styles.filterBtn}>
        <option value='' disabled id='sortByName'>Forename</option>
        <option value='FromAToZ'>From A to Z</option>
        <option value='FromZToA'>From Z to A</option>
    </select>
  </div>
)};

SortDriversByName.propTypes = {
  handleSortByName: PropTypes.func.isRequired,
};

export default SortDriversByName;