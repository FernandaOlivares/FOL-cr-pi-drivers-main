import React from 'react';
import { useDispatch } from 'react-redux';
import { sortByName } from '../../redux/actions/index';

import styles from './Filters.module.css';

const SortByName = ({setCurrentPage, setOrder}) => {
  const dispatch = useDispatch();

  function handleSortByName(sortOption) {
    sortOption.preventDefault();
    dispatch(sortByName(sortOption.target.value));
    setCurrentPage(1);
    setOrder(`${sortOption.target.value} order`);
  }
return (
  <div className={styles.filterContainer}>
    <select onChange={(sortOption) => handleSortByName(sortOption)} name='sortByName' id='sortByName' className={styles.filterBtn} defaultValue=''>
        <option value='' disabled id='sortByName'>Full Name</option>
        <option value='fromAToZ'>From A to Z</option>
        <option value='fromZToA'>From Z to A</option>
    </select>
  </div>
)};

export default SortByName;