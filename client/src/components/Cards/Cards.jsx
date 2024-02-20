import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { useAllDrivers } from '../../redux/selectors/index';
import Card from '../../components/Card/Card';
import { getDrivers } from '../../redux/actions/index';
import styles from './Cards.module.css';


const Cards = () => {
  const dispatch = useDispatch();
  const allDrivers = useSelector((state) => state.allDrivers);
    
  
    useEffect(() => {
      dispatch(getDrivers())
    }, [dispatch]);
  
    
  return (
    <div className={styles.cardContainer}>
      {allDrivers?.map((eachDriver) => {
        return (
          <div key={eachDriver.id}>
            <Card eachDriver={eachDriver}/>
          </div>
        );
      })};
    </div>
  );
};


export default Cards;
