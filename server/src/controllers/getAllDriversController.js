const axios = require('axios');
const { Driver } = require('../db');


//Recorre un arreglo y devuelve solo propiedades solicitadas de la API
// Función que recibe un array de objetos y devuelve un nuevo array con ciertas propiedades seleccionadas
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
    const responseApi = await axios.get('http://localhost:5000/drivers');
    const infoApi = responseApi.data;
    const driverApi = apiInfoCleaner(infoApi);

    return [...driversDb, ...driverApi];
};


const getDriverByName = async(forename) => {
    const responseApi = await axios.get(`http://localhost:5000/drivers/`);
    const infoApi = responseApi.data;
    const driverApi = apiInfoCleaner(infoApi);
    console.log(driverApi);

    const driverFiltered = driverApi.filter(driver => driver.forename === forename);
    const driverDb = await Driver.findAll({where: {forename:forename}});

    return [...driverFiltered, ...driverDb];
};


/*const getDriverByName = async (forename) => {
    // Filtrar en la API
    const responseApi = await axios.get(`http://localhost:5000/drivers`);
    const driversFromApi = apiInfoCleaner(responseApi.data);
    const driversFilteredFromApi = driversFromApi.filter(driver => driver.name.forename === forename);

    // Filtrar en la base de datos
    const driversFromDb = await Driver.findAll({ where: { forename: forename } });

    return [...driversFilteredFromApi, ...driversFromDb];
};



const searchpokename = async (name) => {
    const lowerName = name.toLowerCase();
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${lowerName}`
    );
    const { id, sprites, types, weight, stats, height } = response.data;
  
    return {
      id,
      name,
      image: sprites.other["official-artwork"].front_default,
      Types: types.map((t) => t.type.name),
      hp: stats[0].base_stat,
      attack: stats[1].base_stat,
      defense: stats[2].base_stat,
      speed: stats[5].base_stat,
      weight,
      height,
      created: false,
    };
  };
  const PokemonsBYName = async (name) => {
    const apiPokemons = await searchpokename(name);
    const dbPokemons = await Pokemon.findAll({
      where: {
        name: name,
      },
    });
    return [apiPokemons, ...dbPokemons];
  };

const getVideoGamesApi = async () => {
    const aHundredVideoGames = [];
  
    for (let i = 1; i <= 5; i++) {
      let apiInfo = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`
      );
      apiInfo.data.results.map((videoGame) => {
        aHundredVideoGames.push({
          id: videoGame.id,
          name: videoGame.name,
          genres: videoGame.genres.map((genre) => genre.name),
          description: videoGame.description,
          background_image: videoGame.background_image,
          released:videoGame.released,
          rating: videoGame.rating,
          platforms: videoGame.platforms.map((platforms) => platforms.platform.name),
          created: false,
        });
      });
    }
    return aHundredVideoGames;
};

const getVideoGamesDb = async () => {
  const dbVideoGames = await VideoGame.findAll({
      include: {
          model : Genre,
          attributes : ['name'],
          through: {
              attributes: [],
          }
      }
  })
  return dbVideoGames;
};
   
const getAllVideoGames = async () => {
  const getAllVideoGamesApi = await getVideoGamesApi()
  const getAllVideoGamesDb = await getVideoGamesDb()
  return [...getAllVideoGamesApi, ...getAllVideoGamesDb]
};
*/

module.exports = {
    getAllDrivers,
    getDriverByName
};
