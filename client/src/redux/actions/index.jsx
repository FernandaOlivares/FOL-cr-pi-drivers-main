/* eslint-disable react-refresh/only-export-components */
import axios from 'axios';

export const GET_ALL_DRIVERS = 'GET_ALL_DRIVERS';
export const GET_DRIVERS_BY_NAME = 'GET_DRIVERS_BY_NAME';
export const FILTER_DRIVERS_BY_TEAMS = 'FILTER_DRIVERS_BY_TEAMS';
export const SORT_BY_NAME = 'SORT_BY_NAME';
export const SORT_BY_DATE_OF_BIRTH = 'SORT_BY_DATE_OF_BIRTH';


export const getAllDrivers = () => {
    return async function (dispatch) {
          const response = await axios.get("http://localhost:3001/drivers");
          return dispatch({
              type: 'GET_ALL_DRIVERS',
              payload: response.data,
          });
      }
  };

  export const getDriversByName = (forename) => {
    return async function (dispatch) {
          const response = await axios.get(`http://localhost:3001/drivers?forename=${forename}`);
          return dispatch({
              type: 'GET_DRIVERS_BY_NAME',
              payload: response.data,
          });
      }
  };

export const FilterDriversByTeams = (payload) => ({
    type: 'FILTER_DRIVERS_BY_TEAMS',
    payload,
});

export const SortByDateOfBirth = (payload) =>({
    type: 'SORT_BY_DATE_OF_BIRTH',
    payload,

});

export const sortByName = (payload) => ({
    type: 'SORT_BY_NAME',
    payload,
});
