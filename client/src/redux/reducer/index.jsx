import { 
    GET_ALL_DRIVERS,
    GET_ALL_DRIVERS_ERROR,
    GET_DRIVERS_BY_NAME,
    GET_DRIVERS_BY_NAME_ERROR,
    FILTER_DRIVERS_BY_SOURCE, 
    SORT_DRIVERS_BY_NAME,
    SORT_DRIVERS_BY_DATE_OF_BIRTH,
    GET_ALL_TEAMS,
    FILTER_DRIVERS_BY_TEAM,
    POST_NEW_DRIVER,
    GET_DRIVER_BY_ID_SUCCESS,
} from '../actions/index.jsx';

const initialState = {
    allDrivers: [],
    allDriversBackup: [],
    allTeams: [],
    allTeamsBackup: [],
    driverById: [],
    newDriverId: null,
    error: null,
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
        case GET_DRIVERS_BY_NAME_ERROR:
            return {
                ...state,
                allDrivers: [],
                error: 'Driver not found'
            };

        case GET_DRIVERS_BY_NAME:
            return {
                ...state,
                allDrivers: action.payload,
                error: null
            };
        case GET_ALL_DRIVERS_ERROR:
            return {
                ...state,
                allDrivers: [],
                error: 'Driver not found'
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
        
        case SORT_DRIVERS_BY_DATE_OF_BIRTH: {
            const compareDatesOfBirth = (a, b) => {
                const dateA = new Date(a.dateOfBirth);
                const dateB = new Date(b.dateOfBirth);
                return action.payload === 'Ascending' ? dateA - dateB : dateB - dateA;
            };
            const sortedDates = [...state.allDrivers].sort(compareDatesOfBirth);
            
            return {
                ...state,
                allDrivers: sortedDates,
            };
        }

        case GET_ALL_TEAMS:
            return {
                ...state,
                allTeams: action.payload,
                allTeamsBackup: action.payload,
            };
        

        case FILTER_DRIVERS_BY_TEAM: {
            const filteredDrivers = state.allDriversBackup.filter(driver => driver.teams.includes(action.payload));
            
            return {
                ...state,
                allDrivers: filteredDrivers,
            };
        } 
        
        case POST_NEW_DRIVER: {
        return {
            ...state,
            newDriverId: action.payload.id 
        };
        }

        case GET_DRIVER_BY_ID_SUCCESS: {
            // Realiza cualquier manipulación de datos necesaria aquí, como combinar los datos nuevos con los existentes, si es necesario
            const updatedDriverById = action.payload; // Asigna los datos del conductor obtenidos de la acción
          
            return {
              ...state,
              driverById: updatedDriverById, // Asigna los datos actualizados al estado driverById
            };
          }
          
        default:
            return state;
    }
}

export default rootReducer;
