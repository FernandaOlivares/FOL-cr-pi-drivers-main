const { Router } = require("express");

const getTeamsRouter = Router();


getTeamsRouter.get('/', (req, res) =>{
    res.status(200).send("Aquí están todos los teams! <3");
    });
    

module.exports = getTeamsRouter;
