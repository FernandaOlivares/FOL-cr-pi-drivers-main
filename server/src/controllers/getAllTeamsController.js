const axios = require("axios");
const { Team } = require("../db");

const getAllTeams = async () => {
  // TODO: Hace una solicitud GET a la API para obtener los teams
  const apiUrl = await axios.get('http://localhost:5000/drivers/');
  const apiTeams = apiUrl.data.map((driver) => driver.teams);
  console.log(apiTeams);
    
  // TODO: Itera a través de los teams y los crea o encuentra en la base de datos
  for (const team of apiTeams) {
    if (team) { // Verifica que el nombre del equipo no sea undefined
      await Team.findOrCreate({ where: { name: team } });
    }
  }

  // TODO: Obtiene todos los teams de la base de datos
  const dbTeams = await Team.findAll();
  return dbTeams;
};

module.exports = { getAllTeams };