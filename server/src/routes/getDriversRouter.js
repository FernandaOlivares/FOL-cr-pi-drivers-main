const { Router } = require("express");
const { getAllDriversHandler } = require('../handlers/getAllDriversHandler')
const { getByIdHandler } = require('../handlers/getByIdHandler')

const getDriversRouter = Router();


getDriversRouter.get('/', getAllDriversHandler);
getDriversRouter.get('/:id', getByIdHandler);


module.exports = getDriversRouter;
