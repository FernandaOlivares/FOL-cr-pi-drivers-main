const { Driver, Team } = require('../db');

const getDbInfo = async () => {
    // Obtener los datos de la base de datos
    const driversDb = await Driver.findAll({
        include: {
            model: Team,
            attributes: ['name'], // Solo obtenemos el nombre del equipo
            through: { attributes: [] }
        }
    });

    // Mapeamos cada conductor para incluir también la información de los equipos
    const driversWithTeams = driversDb.map(driver => {
        // Mapeamos los nombres de los equipos
        const teams = driver.Teams.map(team => team.name);
        console.log(teams);
        
        // Retornamos un nuevo objeto que contiene toda la información del conductor
        return {
            id: driver.id,
            forename: driver.forename,
            surname: driver.surname,
            nationality: driver.nationality,
            dateOfBirth: driver.dateOfBirth,
            teams: teams, // Agregamos los nombres de los equipos al objeto del conductor
            image: driver.image,
            description: driver.description,
            created: driver.created,
        };
    });

    return driversWithTeams;
};

module.exports = getDbInfo;


/*const { Driver, Team } = require('../db');


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


module.exports = getDbInfo;*/
