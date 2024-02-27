import axios from 'axios';

export const GET_ALL_DRIVERS = 'GET_ALL_DRIVERS';
export const GET_DRIVERS_BY_NAME = 'GET_DRIVERS_BY_NAME';
export const FILTER_DRIVERS_BY_SOURCE = 'FILTER_DRIVERS_BY_SOURCE';
export const SORT_DRIVERS_BY_NAME = 'SORT_DRIVERS_BY_NAME';
export const SORT_DRIVERS_BY_DATE_OF_BIRTH = 'SORT_DRIVERS_BY_DATE_OF_BIRTH';
export const GET_ALL_TEAMS = 'GET_ALL_TEAMS';
export const FILTER_DRIVERS_BY_TEAM = 'FILTER_DRIVERS_BY_TEAM';
export const CLEAN_FILTERS = 'CLEAN_FILTERS';
export const POST_NEW_DRIVER = 'POST_NEW_DRIVER';


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

export const cleanFilters = () => {
    return {
      type: CLEAN_FILTERS,
    };
};

export const postNewDriver = (payload) => {
    return async function (dispatch) {
        try {
            // Realizar la solicitud POST para crear un nuevo conductor
            const response = await axios.post('http://localhost:3001/post/', payload);

            // Despachar una acción al store con el tipo POST_NEW_DRIVER y los datos relevantes del conductor creado
            dispatch({ type: POST_NEW_DRIVER, payload: response.data });

            // Devolver los datos del conductor creado si es necesario
            return response.data;
        } catch (error) {
            // Capturar y manejar cualquier error que ocurra durante la solicitud POST
            console.error('Error posting new driver:', error);
            // Lanzar el error nuevamente para que pueda ser manejado en componentes superiores si es necesario
            throw error;
        }
    }
};