const axios = require('axios');
const { Driver } = require('../db');

const getDriverById = async (driverId, source) => {
    const driver = 
        source === "api"
            ? (await axios.get(`http://localhost:5000/drivers/${driverId}`)).data
            : await Driver.findByPk(driverId);
    return driver;
};
/*
!GET | /videogames/:idVideogame 
!- Esta ruta obtiene el detalle de un videojuego específico. Es decir que devuelve un objeto con la información pedida en el detalle de un videojuego.
!- El videojuego es recibido por parámetro (ID).
!- Tiene que incluir los datos del género del videojuego al que está asociado.
!- Debe funcionar tanto para los videojuegos de la API como para los de la base de datos.
*/


module.exports = { getDriverById };