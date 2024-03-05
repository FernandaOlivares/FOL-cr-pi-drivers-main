const getAllDrivers = require('../controllers/getAllDriversController');

// Función para normalizar el texto eliminando acentos, guiones y espacios
const normalizeText = (text) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/-/g, "").replace(/\s+/g, "").toLowerCase();
};

// Función para crear una expresión regular para búsqueda flexible
const createSearchRegex = (searchName) => {
    const normalizedSearchName = normalizeText(searchName);
    const regexString = '^' + normalizedSearchName.split('').join('.*');
    return new RegExp(regexString);
};

const getDriverByName = async (searchName) => {
    const allDrivers = await getAllDrivers();

    // Crear expresión regular para búsqueda flexible
    const searchRegex = createSearchRegex(searchName);

    // Filtrar los conductores por nombre usando la expresión regular
    const exactMatches = [];
    const partialMatches = [];
    for (const driver of allDrivers) {
        const normalizedForename = normalizeText(driver.forename);
        if (normalizedForename === normalizeText(searchName)) {
            exactMatches.push(driver);
        } else if (normalizedForename.includes(normalizeText(searchName))) {
            partialMatches.push(driver);
        }
    }

    // Concatenar las coincidencias exactas y parciales, y ordenarlas alfabéticamente
    const sortedDrivers = exactMatches.concat(partialMatches).sort((a, b) => {
        return normalizeText(a.forename).localeCompare(normalizeText(b.forename));
    });

    return sortedDrivers.slice(0, 15);
};

module.exports = getDriverByName;





/*const getAllDrivers = require ('../controllers/getAllDriversController');


const getDriverByName = async(forename) => {
    const allDrivers = await getAllDrivers(forename);
    const driversFilteredByName = allDrivers.filter(driver => driver.forename.toLowerCase()=== forename.toLowerCase());
    return driversFilteredByName.slice(0, 15);
};


module.exports = getDriverByName;

*/