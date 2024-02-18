import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={styles.searchBarContainer}>
      <form>
        <input
          className={styles.searchBarInput}
          id="searchInput" 
          name="search"
          placeholder="Search"
        />
        <button className={styles.searchBarButton}>Buscar</button>
      </form>
    </div>
  );
};

export default SearchBar;
