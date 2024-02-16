const { getDriverById } = require('../controllers/getDriverByIdController');

const getDriverByIdHandler = async (req, res) =>{
    const {driverId} = req.params;
    const source = isNaN(driverId) ? "db" : "api"
    //console.log(source);
    try{
      const response = await getDriverById(driverId, source);
      res.status(200).json(response);
    }catch (error){
      res.status(400).json({error: error.message});
    }

    //res.status(200).send(`Aquí está el detalle del driver ID Nº ${driverId}!=)`);
};



module.exports = {
    getDriverByIdHandler
};

/*
TODO: CONTROLLER:Es el que hace la interacción con fuentes externas de información
-> API
-> DB

TODO: HANDLER: Manejo interno de información (recibida ya sea por query, params, body) - NUNCA INTERACTÚA CON FUENTES EXTERNAS
-> Recibe la req
-> Unifica datos
-> Devuelve res
-> Invoca a controller (que es otra fx)

TODO: SOLICITUD DE INFORMACIÓN:
-> /:id -> params
-> query -> /drivers?forname=FeFi&surname=Lisperguer
-> body -> info
*/