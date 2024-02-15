const { Router } = require("express");

const createDriverRouter = Router();

createDriverRouter.post('/', (req, res) =>{
    res.status(200).send('Crear driver');
    });


module.exports = createDriverRouter;
