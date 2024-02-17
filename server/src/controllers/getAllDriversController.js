const getApiInfo = require('../helpers/getApiInfo');
const getDbInfo = require('../helpers/getDbInfo');


const getAllDrivers = async () => {
    const apiInfo = await getApiInfo();
    const dbIndo = await getDbInfo();
    const allDrivers = [...apiInfo, ...dbIndo];
    return allDrivers;
};


module.exports = getAllDrivers;

