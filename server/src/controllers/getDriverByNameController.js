const getAllDrivers = require ('../controllers/getAllDriversController');


const getDriverByName = async(forename) => {
    const allDrivers = await getAllDrivers(forename);
    const driversFilteredByName = allDrivers.filter(driver => driver.forename.toLowerCase()=== forename.toLowerCase());
    return driversFilteredByName.slice(0, 15);
};


module.exports = getDriverByName;

