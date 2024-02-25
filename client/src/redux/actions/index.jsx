import axios from 'axios';

export const GET_ALL_DRIVERS = 'GET_ALL_DRIVERS';
export const GET_DRIVERS_BY_NAME = 'GET_DRIVERS_BY_NAME';
export const FILTER_DRIVERS_BY_SOURCE = 'FILTER_DRIVERS_BY_SOURCE';
export const SORT_DRIVERS_BY_NAME = 'SORT_DRIVERS_BY_NAME';
export const SORT_DRIVERS_BY_DATE_OF_BIRTH = 'SORT_DRIVERS_BY_DATE_OF_BIRTH';
export const GET_ALL_TEAMS = 'GET_ALL_TEAMS';
export const FILTER_DRIVERS_BY_TEAM = 'FILTER_DRIVERS_BY_TEAM';


export const getAllDrivers = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get('http://localhost:3001/drivers');
            dispatch({
                type: GET_ALL_DRIVERS,
                payload: response.data,
            });
        } catch (error) {
            console.error('Error fetching all drivers:', error);
        }
    }
};

export const getDriversByName = (forenameOrFullName) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/drivers?forename=${forenameOrFullName}`);
            dispatch({
                type: GET_DRIVERS_BY_NAME,
                payload: response.data,
            });
        } catch (error) {
            console.error('Error fetching drivers by name:', error);
        }
    }
};
 
export const filterDriversBySource = (payload) => ({
    type: FILTER_DRIVERS_BY_SOURCE,
    payload,
});


export const sortDriversByName = (payload) => ({
    type: SORT_DRIVERS_BY_NAME,
    payload,
});

export const sortDriversByDateOfBirth = (payload) =>({
    type: SORT_DRIVERS_BY_DATE_OF_BIRTH,
    payload,
});

export const getAllTeams = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get('http://localhost:3001/teams');
            dispatch({
                type: GET_ALL_TEAMS,
                payload: response.data,
            });
        } catch (error) {
            console.error('Error fetching all teams:', error);
        }
    }
};

export const filterDriversByTeam = (payload) => ({
    type: FILTER_DRIVERS_BY_TEAM,
    payload,
});
