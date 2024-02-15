const { Router } = require("express");
const { getDriversHandler } = require('../handlers/getDriversHandler')
const { getByIdHandler } = require('../handlers/getByIdHandler')

const getDriversRouter = Router();


getDriversRouter.get('/', getDriversHandler);
getDriversRouter.get('/:id', getByIdHandler);


module.exports = getDriversRouter;
