const { Router } = require("express");
const { getTeamsHandler } = require('../handlers/getTeamsHandler')

const getTeamsRouter = Router();

getTeamsRouter.get('/', getTeamsHandler);
    

module.exports = getTeamsRouter;
