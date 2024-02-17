const axios = require("axios");
const { Team } = require("../db");



const getAllTeams = async () => {
  try {
    // Hace una solicitud GET a la API para obtener los equipos
    const apiUrl = await axios.get('http://localhost:5000/drivers/');
    const apiTeams = apiUrl.data.map((driver) => driver.teams).filter(team => team); // Filtra equipos indefinidos

    // Crea un conjunto para almacenar los nombres únicos de los equipos
    const uniqueTeams = new Set();
    
    // Itera a través de los equipos y los agrega al conjunto
    for (const teamString of apiTeams) {
      const teams = teamString.split(',').map(team => team.trim()); // Divide la cadena de equipos en un array
      teams.forEach(team => uniqueTeams.add(team)); // Agrega cada equipo al conjunto
    }

    // Obtiene todos los nombres de equipos de la base de datos y los agrega al conjunto también
    const dbTeams = await Team.findAll({ attributes: ['name'] }); // Solo busca los nombres de los equipos
    dbTeams.forEach(team => uniqueTeams.add(team.name));

    // Convierte el conjunto de nuevo a un arreglo, ordena alfabéticamente y devuélvelo
    const uniqueTeamsArray = Array.from(uniqueTeams).sort((a, b) => a.localeCompare(b));

    // Guarda los equipos que no existen en la base de datos
    for (const team of uniqueTeamsArray) {
      const existingTeam = await Team.findOne({ where: { name: team } });
      if (!existingTeam) {
        await Team.create({ name: team });
      }
    }

    return uniqueTeamsArray;
  } catch (error) {
    console.error("Error al obtener y guardar equipos:", error);
    throw error;
  }
};

// Ejemplo de uso
getAllTeams()
  .then(teams => {
    console.log("Equipos obtenidos y guardados correctamente:", teams);
  })
  .catch(error => {
    console.error("Ocurrió un error:", error);
  });



/*GUARDA LOS TEAMS EN LA BASE DE DATOS, PERO DUPLICADOS
const getAllTeams = async () => {
  try {
    // Hace una solicitud GET a la API para obtener los equipos
    const apiUrl = await axios.get('http://localhost:5000/drivers/');
    const apiTeams = apiUrl.data.map((driver) => driver.teams).filter(team => team); // Filtra equipos indefinidos

    // Crea un conjunto para almacenar los nombres únicos de los equipos
    const uniqueTeams = new Set();
    
    // Itera a través de los equipos y los agrega al conjunto
    for (const teamString of apiTeams) {
      const teams = teamString.split(',').map(team => team.trim()); // Divide la cadena de equipos en un array
      teams.forEach(team => uniqueTeams.add(team)); // Agrega cada equipo al conjunto
    }

    // Obtiene todos los equipos de la base de datos y los agrega al conjunto también
    const dbTeams = await Team.findAll();
    dbTeams.forEach(team => uniqueTeams.add(team.name));

    // Convierte el conjunto de nuevo a un arreglo, ordena alfabéticamente y devuélvelo
    const uniqueTeamsArray = [...uniqueTeams].sort((a, b) => a.localeCompare(b));

    // Guarda los equipos que no existen en la base de datos
    for (const team of uniqueTeamsArray) {
      const existingTeam = await Team.findOne({ where: { name: team } });
      if (!existingTeam) {
        await Team.create({ name: team });
      }
    }

    return uniqueTeamsArray;
  } catch (error) {
    console.error("Error al obtener y guardar equipos:", error);
    throw error;
  }
};*/



/* TEAMS FILTRADOS Y ORDENADOS DE LA A A LA Z EN UN ARREGLO, SIN UNDEFIND
const getAllTeams = async () => {
  // Hace una solicitud GET a la API para obtener los teams
  const apiUrl = await axios.get('http://localhost:5000/drivers/');
  const apiTeams = apiUrl.data.map((driver) => driver.teams).filter(team => team); // Filtra equipos indefinidos

  // Crea un conjunto para almacenar los nombres únicos de los equipos
  const uniqueTeams = new Set();
  
  // Itera a través de los equipos y los agrega al conjunto
  for (const teamString of apiTeams) {
    const teams = teamString.split(',').map(team => team.trim()); // Divide la cadena de equipos en un array
    teams.forEach(team => uniqueTeams.add(team)); // Agrega cada equipo al conjunto
  }

  // Obtiene todos los equipos de la base de datos y los agrega al conjunto también
  const dbTeams = await Team.findAll();
  dbTeams.forEach(team => uniqueTeams.add(team.name));

  // Convierte el conjunto de nuevo a un arreglo, ordena alfabéticamente y devuélvelo
  const uniqueTeamsArray = [...uniqueTeams].sort((a, b) => a.localeCompare(b));
  return uniqueTeamsArray;
};*/


/*const getAllTeams = async () => {
  // TODO: Hace una solicitud GET a la API para obtener los teams
  const apiUrl = await axios.get('http://localhost:5000/drivers/');
  const apiTeams = apiUrl.data.map((driver) => driver.teams);
    
  // TODO: Itera a través de los teams y los crea o encuentra en la base de datos
  for (const team of apiTeams) {
    if (team) { // Verifica que el nombre del equipo no sea undefined
      await Team.findOrCreate({ where: { name: team } });
    }
  }

  // TODO: Obtiene todos los teams de la base de datos
  const dbTeams = await Team.findAll();
  return dbTeams;
};*/

module.exports = { getAllTeams };