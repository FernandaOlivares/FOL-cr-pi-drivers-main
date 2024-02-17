const { Router } = require("express");
const createDriverHandler = require('../handlers/createDriverHandler');

const createDriverRouter = Router();


createDriverRouter.post('/', createDriverHandler);


module.exports = createDriverRouter;
