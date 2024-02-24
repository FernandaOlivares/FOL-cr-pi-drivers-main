import { 
    GET_ALL_DRIVERS,
    GET_DRIVERS_BY_NAME,
    FILTER_DRIVERS_BY_SOURCE, 
} from '../actions/index.jsx';


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
    
        case FILTER_DRIVERS_BY_SOURCE: {
            const filteredDrivers = action.payload === 'Db'
                ? state.allDriversBackup.filter(driver => driver.created)
                : state.allDriversBackup.filter(driver => !driver.created);
            return {
                ...state,
                allDrivers: action.payload === 'All'
                ? state.allDriversBackup 
                : filteredDrivers
            };
        }
        
            
            
        default:
            return state;
    }
}

export default rootReducer;
