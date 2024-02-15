const { Router } = require("express");
const { getAllTeamsHandler } = require('../handlers/getAllTeamsHandler')

const getTeamsRouter = Router();

getTeamsRouter.get('/', getAllTeamsHandler);
    

module.exports = getTeamsRouter;
