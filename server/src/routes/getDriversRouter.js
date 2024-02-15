const { Router } = require("express");

const getDriversRouter = Router();


getDriversRouter.get('/', (req, res) =>{
    res.status(200).send("Aquí están todos los drivers!=)");
    });

getDriversRouter.get('/:id', (req, res) =>{
    res.status(200).send('Aquí está el detalle del driver!=)');
    });


module.exports = getDriversRouter;
