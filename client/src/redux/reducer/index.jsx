import { GET_ALL_DRIVERS } from '../actions/index.jsx';


const initialState = {
    allDrivers: [], 
};


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_DRIVERS:
            return {
                ...state,
                allDrivers: action.payload,
            };
        default:
            return state;
    }
}

export default rootReducer;
