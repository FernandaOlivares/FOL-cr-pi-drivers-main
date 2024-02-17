const getDriverById = require('../controllers/getDriverByIdController');

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
};


module.exports = { getDriverByIdHandler };
