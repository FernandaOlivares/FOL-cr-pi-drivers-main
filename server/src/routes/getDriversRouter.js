const { Router } = require("express");

const { getDriversHandler, getDetailHandler} = require('../handlers/getDriversHandler')

const getDriversRouter = Router();


getDriversRouter.get('/', getDriversHandler);
getDriversRouter.get('/:id', getDetailHandler);


module.exports = getDriversRouter;
