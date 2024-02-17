const { Driver, Team } = require('../db');

const getDbInfo = async () => {
    const driversDb = await Driver.findAll({
        include: {
            model : Team,
            attributes : ['name'],
            through: { attributes: [],}
        }
    });
    return driversDb;
};


module.exports = getDbInfo ;
