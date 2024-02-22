import { GET_ALL_DRIVERS, GET_DRIVERS_BY_NAME } from '../actions/index.jsx';


const initialState = {
    allDrivers: [],
    allDriversBackup : [],
};


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_DRIVERS:
            return {
                ...state,
                allDrivers: action.payload,
                allDriversBackup: action.payload,
            };
            case GET_DRIVERS_BY_NAME:
                return {
                    ...state,
                    allDrivers: action.payload,
                };
        default:
            return state;
    }
}

export default rootReducer;
