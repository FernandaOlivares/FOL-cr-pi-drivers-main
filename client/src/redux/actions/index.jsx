/* eslint-disable react-refresh/only-export-components */
import axios from 'axios';

export const GET_DRIVERS = 'GET_DRIVERS';
export const FILTER_DRIVERS_BY_TEAMS = 'FILTER_DRIVERS_BY_TEAMS';
export const SORT_BY_NAME = 'SORT_BY_NAME';
export const SORT_BY_DATE_OF_BIRTH = 'SORT_BY_DATE_OF_BIRTH';

/*FUNTION DESCRIPTION:
LKSMLAKSMD
ASDASDAS
SDAD

*/

export const getDrivers = () => {
    return async function (dispatch) {
          const response = await axios.get("http://localhost:3001/drivers");
          return dispatch({
              type: 'GET_DRIVERS',
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
