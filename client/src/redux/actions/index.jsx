import axios from 'axios';

export const GET_DRIVERS = 'GET_DRIVERS';
export const SORT_BY_NAME = 'SORT_BY_NAME';


export const getDrivers = () => {
    return async function (dispatch) {
          const response = await axios.get("http://localhost:3001/drivers");
          return dispatch({
              type: 'GET_DRIVERS',
              payload: response.data,
          });
      }
  };


export const sortByName = (sortOption) => ({
    type: SORT_BY_NAME,
    sortOption,
});
