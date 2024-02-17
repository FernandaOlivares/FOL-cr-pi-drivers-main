const getAllDrivers = require ('../controllers/getAllDriversController')
const getDriverByName = require ('../controllers/getDriverByNameController')


const getDriversHandler = async (req, res) =>{
    const { forename } = req.query;

    try{
        if(forename){
          const driverByName = await getDriverByName(forename);
          driverByName.length
          ? res.status(200).json(driverByName)
          : res.status(404).json({ message: 'Sorry, the driver was not found, but you can always create it! =)' });
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