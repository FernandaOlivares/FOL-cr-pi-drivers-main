const { getAllDrivers, getDriverByName } = require ('../controllers/getAllDriversController')

const getDriversHandler = async (req, res) =>{
    const { forename } = req.query;

    try{
        if(forename){
          const driverByName = await getDriverByName(forename);
          res.status(200).json(driverByName);
        } else {
            const response = await getAllDrivers();
            res.status(200).json(response);
        }
    } catch(error) { 
          res.status(400).json({error: error.message});
        }
};


module.exports = { getDriversHandler };

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