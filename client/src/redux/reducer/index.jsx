import { 
    GET_ALL_DRIVERS,
    GET_DRIVERS_BY_NAME,
    FILTER_DRIVERS_BY_SOURCE, 
    SORT_DRIVERS_BY_NAME
} from '../actions/index.jsx';

const initialState = {
    allDrivers: [],
    allDriversBackup: [],
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_DRIVERS:
            // Actualiza la lista de todos los conductores y la copia de seguridad
            return {
                ...state,
                allDrivers: action.payload,
                allDriversBackup: action.payload,
            };
        
        case GET_DRIVERS_BY_NAME:
            // Actualiza la lista de conductores según el nombre de búsqueda
            return {
                ...state,
                allDrivers: action.payload,
            };
    
        case FILTER_DRIVERS_BY_SOURCE: {
            // Filtra los conductores según la fuente y actualiza la lista
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
        
        case SORT_DRIVERS_BY_NAME: {
            const removeAccents = (name) => {
                return name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            };
            
            const sortedDrivers = [...state.allDrivers].sort((a, b) => {
                const forenameA = removeAccents(a.forename);
                const forenameB = removeAccents(b.forename);
                const forenameComparison = action.payload === "FromAToZ" 
                    ? forenameA.localeCompare(forenameB)
                    : forenameB.localeCompare(forenameA);

                if (forenameComparison === 0) {
                    const surnameA = removeAccents(a.surname);
                    const surnameB = removeAccents(b.surname);
                    return action.payload === "FromAToZ" 
                        ? surnameA.localeCompare(surnameB)
                        : surnameB.localeCompare(surnameA);
                }
                return forenameComparison;
            });
        
            return {
                ...state,
                allDrivers: sortedDrivers,
            };
            }
        
        default:
            return state;
    }
}

export default rootReducer;
