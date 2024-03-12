import axios from 'axios';

export const GET_ALL_DRIVERS = 'GET_ALL_DRIVERS';
export const GET_ALL_DRIVERS_ERROR = 'GET_ALL_DRIVERS_ERROR';
export const GET_DRIVERS_BY_NAME = 'GET_DRIVERS_BY_NAME';
export const GET_DRIVERS_BY_NAME_ERROR = 'GET_DRIVERS_BY_NAME_ERROR';
export const FILTER_DRIVERS_BY_SOURCE = 'FILTER_DRIVERS_BY_SOURCE';
export const SORT_DRIVERS_BY_NAME = 'SORT_DRIVERS_BY_NAME';
export const SORT_DRIVERS_BY_DATE_OF_BIRTH = 'SORT_DRIVERS_BY_DATE_OF_BIRTH';
export const GET_ALL_TEAMS = 'GET_ALL_TEAMS';
export const FILTER_DRIVERS_BY_TEAM = 'FILTER_DRIVERS_BY_TEAM';
export const POST_NEW_DRIVER = 'POST_NEW_DRIVER';
export const GET_DRIVER_BY_ID_SUCCESS = 'GET_DRIVER_BY_ID_SUCCESS';
export const GET_DRIVER_BY_ID_FAILURE = 'GET_DRIVER_BY_ID_FAILURE';


export const getAllDrivers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/drivers');
      dispatch({
        type: 'GET_ALL_DRIVERS',
        payload: response.data,
      });
    } catch (error) {
      console.error('Error fetching all drivers:', error);
      dispatch({ type: 'GET_ALL_DRIVERS_ERROR', payload: 'An error occurred while fetching all drivers' });
    }
  };
};

export const getDriversByName = (searchInput) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/drivers?forename=${searchInput}`);

            if (response.data.length > 0) {
                dispatch({ type: GET_DRIVERS_BY_NAME, payload: response.data });
            } else {
                dispatch({ type: GET_DRIVERS_BY_NAME_ERROR });
            }
        } catch (error) {
            console.error('Error fetching drivers by name:', error);
            dispatch({ type: GET_DRIVERS_BY_NAME_ERROR });
        }
    };
};
 
export const filterDriversBySource = (payload) => ({
    type: 'FILTER_DRIVERS_BY_SOURCE',
    payload,
});


export const sortDriversByName = (payload) => ({
    type: 'SORT_DRIVERS_BY_NAME',
    payload,
});

export const sortDriversByDateOfBirth = (payload) =>({
    type: 'SORT_DRIVERS_BY_DATE_OF_BIRTH',
    payload,
});

export const getAllTeams = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get('http://localhost:3001/teams');
            dispatch({
                type: 'GET_ALL_TEAMS',
                payload: response.data,
            });
        } catch (error) {
            console.error('Error fetching all teams:', error);
        }
    }
};

export const filterDriversByTeam = (payload) => ({
    type: 'FILTER_DRIVERS_BY_TEAM',
    payload,
});

export const postNewDriver = (payload) => {
    return async function (dispatch) {
        try {
            const response = await axios.post('http://localhost:3001/post/drivers', payload);
            dispatch({ 
                type: 'POST_NEW_DRIVER',
                payload: response.data
            });
            return response.data;
        } catch (error) {
            console.error('Error posting new driver:', error);
            throw error;
        }
    }
};

export const getDriverById = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/drivers/${id}`);
      
      dispatch({
        type: 'GET_DRIVER_BY_ID_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      console.error('Error fetching driver by Id:', error);
      dispatch({
        type: 'GET_DRIVER_BY_ID_FAILURE',
        payload: error.message,
      });
    }
  };
};
