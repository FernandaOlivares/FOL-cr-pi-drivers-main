const getApiInfo = require('../helpers/getApiInfo');
const getDbInfo = require('../helpers/getDbInfo');


const getAllDrivers = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const allDrivers = [...apiInfo, ...dbInfo];

    return allDrivers;
};


module.exports = getAllDrivers;

