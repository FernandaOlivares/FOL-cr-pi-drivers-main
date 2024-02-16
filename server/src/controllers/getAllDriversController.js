const axios = require('axios');
const { Driver } = require('../db');


// Función que recibe un array de objetos y devuelve un nuevo array con ciertas propiedades seleccionadas de la info de la API
const apiInfoCleaner = (array) => {
    return array.map((driver) => {
        return {
            id: driver.id,
            forename: driver.name.forename,
            surname: driver.name.surname,
            description: driver.description,
            image: driver.image.url,
            nationality: driver.nationality,
            dateOfBirth: driver.dob,
            created: false,
        }
    });
};

const getAllDrivers = async () => {
    const driversDb = await Driver.findAll();
    const responseApi = await axios.get('http://localhost:5000/drivers/');
    const infoApi = responseApi.data;
    const driverApi = apiInfoCleaner(infoApi);

    return [...driversDb, ...driverApi];
};


const getDriverByName = async(forename) => {
    const responseApi = await axios.get(`http://localhost:5000/drivers/`);
    const infoApi = responseApi.data;
    const driverApi = apiInfoCleaner(infoApi);

    const driverFiltered = driverApi.filter(driver => driver.forename === forename);
    const driverDb = await Driver.findAll({where: {forename:forename}});

    return [...driverFiltered, ...driverDb];
};

/*
  genres: videoGame.genres.map((genre) => genre.name)
  Types: types.map((t) => t.type.name)
  teams: driver.team.map((genre) => genre.name),
*/

module.exports = {
    getAllDrivers,
    getDriverByName
};
