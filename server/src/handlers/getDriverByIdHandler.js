const getDriverById = require('../controllers/getDriverByIdController');


const getDriverByIdHandler = async (req, res) => {
    const { driverId } = req.params;
    try {
        const response = await getDriverById(driverId);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


/*//? IMPORTANTE - MODO: db (NaN) o a la api (parseInt)
const getDriverByIdHandler = async (req, res) =>{
    const {driverId} = req.params;
    const source = isNaN(driverId) ? "db" : "api"
    try{
      const response = await getDriverById(driverId, source);
      res.status(200).json(response);
    } catch (error){
      res.status(400).json({error: error.message});
    }
};*/


module.exports = getDriverByIdHandler;
