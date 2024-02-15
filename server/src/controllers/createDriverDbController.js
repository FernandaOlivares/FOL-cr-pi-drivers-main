const { Driver } = require('../db');

const createDriverDb = async (forename, surname, nationality) => {
    const newDriver = await Driver.create({forename, surname, nationality});
return newDriver;
};


module.exports = { createDriverDb }

/*
async await se usa para dejar en espera la solicitud hasta que la BD o la API envíen la información, si no lo usamos crearíamos un Driver Undefine 

TODO: Create videogame in Db using POST-> http://localhost:3001/videogames/  -> BODY Json
{
  "id": "1a4bec7a-b7c1-40b8-9692-a8cdf9b92423",
  "created": true,
  "name": "3 JUEGO",
  "description": "Esta es la descripción",
  "background_image": "Link valido",
  "released": "2023-09-18",
  "rating": 3,
  "platforms": [
    "PC"
  ]
}

TODO: PARA REVISAR EN SHELL SQL:
Me conecto a la Db -> \c videogames
Luego solicito los elementos guardado en la tabla VideoGame: SELECT * FROM "VideoGames";
*/
