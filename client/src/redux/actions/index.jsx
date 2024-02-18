import axios from 'axios';

export const GET_DRIVERS = 'GET_DRIVERS';


export function getDrivers(){
    return async function(dispatch){
        const response = await axios('http://localhost:3001/drivers');
        return dispatch({
            type: 'GET_DRIVERS',
            payload: response.data
        })
    }
}