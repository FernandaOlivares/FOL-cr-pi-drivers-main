const getAllDrivers = require ('../controllers/getAllDriversController');


const getDriverByName = async(forename) => {
    const allDrivers = await getAllDrivers(forename);
    const driversFilteredByName = allDrivers.filter(driver => driver.forename.toLowerCase().includes(forename.toLowerCase()));
    return driversFilteredByName;
};


module.exports = getDriverByName;

