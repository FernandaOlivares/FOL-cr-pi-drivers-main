const { Router } = require("express");
const { getAllDriversHandler } = require('../handlers/getAllDriversHandler')
const { getDriverByIdHandler } = require('../handlers/getDriverByIdHandler')

const getDriversRouter = Router();


getDriversRouter.get('/', getAllDriversHandler);
getDriversRouter.get('/:id', getDriverByIdHandler);


module.exports = getDriversRouter;
