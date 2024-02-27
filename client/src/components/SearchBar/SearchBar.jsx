/* eslint-disable react/prop-types */
import styles from './SearchBar.module.css';

const SearchBar = ({handleChange, handleSubmit}) => {
  return (
    <div className={styles.searchBarContainer}>
      <form onChange={handleChange}>
        <input
          className={styles.searchBarInput}
          id='searchInput'
          name='search'
          placeholder='Search by Forename...'
          type = 'search'
        />
        <button type='submit' onClick={handleSubmit} className={styles.overlayButton}>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
 