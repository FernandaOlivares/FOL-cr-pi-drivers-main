const { Driver, Team } = require('../db');

const createDriverDb = async (forename, surname, nationality, dateOfBirth, teams, image, description, created) => {
  const newDriver = await Driver.create({forename, surname, nationality, dateOfBirth, image, description, created});
  
  // Busca cada equipo individualmente en la base de datos y agrégalo al conductor
  for (const teamName of teams) {
      const team = await Team.findOne({ where: { name: teamName } });
      if (team) {
          await newDriver.addTeam(team);
      }
  }

  return newDriver;
};


/*const createDriverDb = async (forename, surname, nationality, dateOfBirth, teams, image, description, created) => {
   
  const newDriver = await Driver.create({forename, surname, nationality, dateOfBirth, image, description, created});
  const teamDb = await Team.findAll({where: {name: teams}});
  newDriver.addTeam(teamDb);

return newDriver;
}; */


module.exports = createDriverDb;
