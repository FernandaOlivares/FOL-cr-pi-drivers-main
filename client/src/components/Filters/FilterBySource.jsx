import styles from './Filters.module.css';

const FilterBySource = () => (
  <div className={styles.filterContainer}>
    <select onChange={(e) => handleFilterBySource(e)} name='filterBySource' id='filterBySource' className={styles.filterBtn} defaultValue=''>
      <option value='' disabled id='filterBySource'>FILTER BY : SOURCE</option>
      <option value='All'>All Drivers</option>
      <option value='Db'>Created By Users</option>
      <option value='Api'>Existing</option>
    </select>
  </div>
);

export default FilterBySource;
