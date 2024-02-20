import React from 'react';
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
  
    console.log('Respuesta a mi consulta:', allDrivers)
    
  return (
    <div>
      {allDrivers?.map((driver) => {
        return (
          <div key={driver.id}>
            <Card
              key={driver.id}
              forename={driver.forename}
              surname={driver.surname}
              image={driver.image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
