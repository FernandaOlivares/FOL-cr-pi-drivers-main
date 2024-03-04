/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

import styles from './Filters.module.css';

const FilterDriversBySource = ({selectedValue, handleFilterBySource}) => (
  <div className={styles.filterContainer}>
    <select value={selectedValue} onChange={handleFilterBySource} name='filterBySource' id='filterBySource' className={styles.filterBtn}>
      <option value='' disabled id='filterBySource'>Source</option>
      <option value='All'>All Drivers</option>
      <option value='Db'>Created By Users</option>
      <option value='Api'>Existing</option>
    </select>
  </div>
);

FilterDriversBySource.propTypes = {
  handleFilterBySource: PropTypes.func.isRequired,
};

export default FilterDriversBySource;
