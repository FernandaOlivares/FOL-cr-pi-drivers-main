//const { Driver } = require('../db');
//const getApiInfo = require('../helpers/getApiInfo');


const getAllDrivers = require('./getAllDriversController');

const getDriverById = async (driverId) => {
    const allDrivers = await getAllDrivers();
    const driver = allDrivers.find(driver => driver.id.toString() === driverId.toString());
    return driver;
};

module.exports = getDriverById;


/* //? IMPORTANTE - MODO: db (NaN) o a la api (parseInt)
    const getDriverById = async (driverId, source) => {
    const apiInfo = await getApiInfo();
    const driver = source === "api"
        ? apiInfo.find(driver => {
            return driver.id === parseInt(driverId); // Convertir driverId a un tipo compatible
        })
        : await Driver.findByPk(driverId);
    return driver;
};*/


module.exports = getDriverById;