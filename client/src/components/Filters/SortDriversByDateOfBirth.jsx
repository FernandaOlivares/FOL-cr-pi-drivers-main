/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

import styles from './Filters.module.css';

const SortDriversByDateOfBirth = ({handleSortByDateOfBirth, selectedByDOBValue}) => (


  <div className={styles.filterContainer}>
    <select value={selectedByDOBValue} onChange={handleSortByDateOfBirth} name='sortByDateOfBirth' id='sortByDateOfBirth' className={styles.filterBtn}>
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