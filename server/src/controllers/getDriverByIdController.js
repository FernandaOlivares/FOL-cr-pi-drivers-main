const { Driver } = require('../db');
const getApiInfo = require('../helpers/getApiInfo');


const getDriverById = async (driverId, source) => {
    const apiInfo = await getApiInfo();
    const driver = source === "api"
        ? apiInfo.find(driver => {
            return driver.id === parseInt(driverId); // Convertir driverId a un tipo compatible
        })
        : await Driver.findByPk(driverId);
    return driver;
};


module.exports = { getDriverById };