const { Router } = require("express");
const getDriversHandler = require ('../handlers/getDriversHandler');
const getDriverByIdHandler = require ('../handlers/getDriverByIdHandler');

const getDriversRouter = Router();


getDriversRouter.get('/', getDriversHandler);
getDriversRouter.get('/:driverId', getDriverByIdHandler);


module.exports = getDriversRouter;
