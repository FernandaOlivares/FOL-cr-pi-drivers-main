import PropTypes from 'prop-types';

import styles from './Filters.module.css';

const FilterDriversBySource = ({handleFilterBySource}) => (
  <div className={styles.filterContainer}>
    <select onChange={(input) => handleFilterBySource(input)} name='filterBySource' id='filterBySource' className={styles.filterBtn} defaultValue=''>
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
