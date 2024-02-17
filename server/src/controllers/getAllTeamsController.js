const axios = require("axios");
const { Team } = require("../db");


const getAllTeams = async () => {
  const apiUrl = await axios.get('http://localhost:5000/drivers/');
  const apiTeams = apiUrl.data.map((driver) => driver.teams).filter(team => team);
  const setTeam = new Set();//Constructor Set: Genera un objeto con items de valor único

  // Itera a través de los equipos y los agrega al conjunto
  apiTeams.forEach(team => {
    team.split(',').forEach(name => {
      setTeam.add(name.trim());
    });
  });
  // Convierte el conjunto en un array y lo ordena alfabéticamente
  const eachTeam = Array.from(setTeam).sort();

  // Itera sobre los equipos únicos y los crea o encuentra en la base de datos
  for (const team of eachTeam) {
    await Team.findOrCreate({ where: { name: team } });
  }

  const dbTeams = await Team.findAll();
  return dbTeams;
};

module.exports = getAllTeams ;