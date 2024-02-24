import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'

import NavBar from '../../components/NavBar/NavBar';
import Cards from '../../components/Cards/Cards';
import Pagination from '../../components/Pagination/Pagination.jsx';

import { getAllDrivers, getDriversByName, filterDriversBySource, sortDriversByName} from '../../redux/actions/index.jsx'

import styles from './Home.module.css'


const Home = () => {
  
//********************** GET ALL DRIVERS **********************//
  const dispatch = useDispatch();
  const allDrivers = useSelector((state) => state.allDrivers);
  console.log('Aquí están todos los allDrivers de Home',allDrivers);

  useEffect(() => {
    dispatch(getAllDrivers());
  }, [dispatch]);


//********************** PAGINATE DRIVERS **********************//
  const [pageFilterType, setPageFilterType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);//currenPage guara la pagina actual en un estado local/ y setDriversPerPage es una constante que set la página actual/ Comienza en 1 porque siempre inicio en la 1ra pagina
  const [driversPerPage, setDriversPerPage] = useState(9);//Destructuring de los primeros 9 elementos del array driverPerPage.Estas constantes guardan ene el estado local, cuantos drivers quiero por página
  const indexOfLastDriver = currentPage * driversPerPage;//9
  const indexOfFirstDriver = indexOfLastDriver - driversPerPage;//0
  const currentDrivers = allDrivers.slice(indexOfFirstDriver, indexOfLastDriver);//Que devuelva del i 0 al 8, en total 9 drivers. Va de 0 a 9 pero corta entre i 8 y 9.

  const pagination = (pageNumber) => {
      setCurrentPage(pageNumber);
  };

//********************** GET DRIVERS BY NAME **********************//
  const [searchInput, setSearchInput] = useState(''); //Estado local vacío

    const handleChange = (input) =>{
      input.preventDefault();
      setSearchInput(input.target.value);
    };

    const handleSubmit = (input) =>{
      input.preventDefault();
      dispatch(getDriversByName(searchInput));
    };

//********************** FILTER DRIVERS BY SOURCE **********************//
  const handleFilterBySource = (event) => {
    event.preventDefault();
    dispatch(filterDriversBySource(event.target.value)); 
  };

//********************** SORT DRIVERS BY NAME OR FULL NAME **********************//
  const handleSortByName = (event) =>{
    event.preventDefault();
    dispatch(sortDriversByName(event.target.value));
  }

  return (
  <div className={styles.homeContainer}>
  <h1 className={`${styles.logoContainer}`}>F1 - LEGENDS!</h1>
    <div>
      <NavBar
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleFilterBySource={handleFilterBySource}
      handleSortByName = {handleSortByName}/>
    </div>
    <div>
      <Pagination driversPerPage={driversPerPage} allDrivers={allDrivers.length} pagination={pagination} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
    <div>
      <Cards currentDrivers={currentDrivers} />
    </div>
  </div>
    );
};

export default Home;
