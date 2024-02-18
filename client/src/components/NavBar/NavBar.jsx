// NavBar.jsx
import styles from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar.jsx';

const NavBar = () => (
  <div className={styles.navBarContainer}>
    <SearchBar />
  </div>
);

export default NavBar;
