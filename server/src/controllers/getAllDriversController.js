const axios = require('axios');
const { Driver, Team } = require('../db');


const getApiInfo = async () =>{
    const apiUrl = await axios.get('http://localhost:5000/drivers/');
    const apiInfo = await apiUrl.data.map((driver) => {
        
        return {
            id: driver.id,
            forename: driver.name.forename,
            surname: driver.name.surname,
            description: driver.description,
            image: driver.image.url,
            nationality: driver.nationality,
            dateOfBirth: driver.dob,
            teams: (driver.teams && driver.teams.split(',').map(team => team.trim())) ?? ['Up!No teams were found...'],
            created: false,
        }
    });
    return apiInfo;
};

const getDbInfo = async () => {
    const driversDb = await Driver.findAll({
        include: {
            model : Team,
            attributes : ['name'],
            through: { attributes: [],}
}});
    return driversDb;
};

const getAllDrivers = async () => {
    const apiInfo = await getApiInfo();
    const dbIndo = await getDbInfo();
    const allDrivers = [...apiInfo, ...dbIndo];
    return allDrivers;
};

const getDriverByName = async(forename) => {
    const allDrivers = await getAllDrivers(forename);
    const driversFilteredByName = allDrivers.filter(driver => driver.forename === forename);
    return driversFilteredByName;
};


module.exports = {
    getAllDrivers,
    getDriverByName
};
