import PropTypes from 'prop-types';

import styles from './Filters.module.css';

const SortDriversByDateOfBirth = ({handleSortByDateOfBirth}) => (


  <div className={styles.filterContainer}>
    <select onChange={(sortOption) => handleSortByDateOfBirth(sortOption)} name='sortByDateOfBirth' id='sortByDateOfBirth' className={styles.filterBtn} defaultValue=''>
        <option value='' disabled id='sortByDateOfBirth'>Date of Birth</option>
        <option value='Ascending'>From Oldest to Youngest</option>
        <option value='Descending'>From Youngest to Oldest</option>
    </select>
  </div>
);

SortDriversByDateOfBirth.propTypes = {
  handleSortByDateOfBirth: PropTypes.func.isRequired
};

export default SortDriversByDateOfBirth;