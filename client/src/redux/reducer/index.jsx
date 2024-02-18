//TODO: Declaro estado inicial, es donde va el código
import { GET_DRIVERS } from '../actions/index.jsx'

let initialState = {
    allDrivers: [], 
};

function rootReducer (state = initialState, action){
    switch(action.type){
        case GET_DRIVERS:
            return {
                ...state,
                allUsers: action.payload,
            };
        default:
            return state;
    }
}


export default rootReducer;