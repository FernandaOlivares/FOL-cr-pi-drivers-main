import PropTypes from 'prop-types';

import styles from './Filters.module.css';

const SortDriversByName = ({handleSortByName}) => {
  
return (
  <div className={styles.filterContainer}>
    <select onChange={(sortOption) => handleSortByName(sortOption)} name='sortByName' id='sortByName' className={styles.filterBtn} defaultValue=''>
        <option value='' disabled id='sortByName'>Full Name</option>
        <option value='FromAToZ'>From A to Z</option>
        <option value='FromZToA'>From Z to A</option>
    </select>
  </div>
)};

SortDriversByName.propTypes = {
  handleSortByName: PropTypes.func.isRequired,
};

export default SortDriversByName;