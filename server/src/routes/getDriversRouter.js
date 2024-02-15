const { Router } = require("express");
const { getDriversHandler, getByIdHandler } = require('../handlers/getDriversHandler')

const getDriversRouter = Router();


getDriversRouter.get('/', getDriversHandler);
getDriversRouter.get('/:id', getByIdHandler);


module.exports = getDriversRouter;
