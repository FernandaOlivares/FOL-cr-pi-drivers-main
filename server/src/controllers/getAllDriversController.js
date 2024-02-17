const getApiInfo = require('../helpers/getApiInfo');
const getDbInfo = require('../helpers/getDbInfo');



const getAllDrivers = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const allDrivers = [...apiInfo, ...dbInfo];

    allDrivers.sort((a, b) => a.forename.localeCompare(b.forename));

    return allDrivers;
};
/*
const getAllDriver = async () => {
    const apiInfo = await getApiInfo();
    const dbIndo = await getDbInfo();
    const allDrivers = [...apiInfo, ...dbIndo];
    return allDrivers;
};
*/


module.exports = getAllDrivers;

