import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDrivers } from '../actions/index';

export const useAllDrivers = () => {
  const dispatch = useDispatch();
  const allDrivers = useSelector((state) => state.allDrivers);

  useEffect(() => {
    dispatch(getDrivers());
  }, [dispatch]);

  return allDrivers;
};

export const UseAllTeams = () => useSelector((state) => state.allTeams);
