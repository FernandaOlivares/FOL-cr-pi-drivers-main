const axios = require('axios');
const { Driver } = require('../db');

const getDriverById = async (driverId, source) => {
    const driver = 
        source === "api"
            ? (await axios.get(`http://localhost:5000/drivers/${driverId}`)).data
            : await Driver.findByPk(driverId);
    return driver;
};


module.exports = { getDriverById };