const { Driver, Team } = require('../db');


const createDriverDb = async (forename, surname, nationality, dateOfBirth, teams, image, description, created) => {
   
  const newDriver = await Driver.create({forename, surname, nationality, dateOfBirth, image, description, created});
  const teamDb = await Team.findAll({where: {name: teams}});
  newDriver.addTeam(teamDb);

return newDriver;
};


module.exports = createDriverDb;

/*
async await se usa para dejar en espera la solicitud hasta que la BD o la API envíen la información, si no lo usamos crearíamos un Driver Undefine
TODO: -> BODY Json
{
  "forename" : "Fernanda",
  "surname" : "Lisperguer",
  "nationality" : "Chilean",
  "dateOfBirth" : "01-09-1989",
  "teams" : "",
  "image" : "",
  "description" : "Very happy.Currently studying to be a developer."
}
*/
