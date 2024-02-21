import React from 'react';
//import { useDispatch } from 'react-redux';
//import { sortByName } from '../../redux/actions/index';

import styles from './Filters.module.css';

const SortByDateOfBirth = ({setCurrentPage, setOrder}) => (
  /*const dispatch = useDispatch();

  function handleSortByName(sortOption) {
    sortOption.preventDefault();
    dispatch(sortByName(sortOption.target.value));
    setCurrentPage(1);
    setOrder(`${sortOption.target.value} order`);
  }
  */
  <div className={styles.filterContainer}>
    <select onChange={(sortOption) => handleSortByDateOfBirth(sortOption)} name='sortByDateOfBirth' id='sortByDateOfBirth' className={styles.filterBtn} defaultValue=''>
        <option value='' disabled id='sortByDateOfBirth'>Date of Birth</option>
        <option value='Ascending'>Ascending</option>
        <option value='Descending'>Descending</option>
    </select>
  </div>
);

export default SortByDateOfBirth;