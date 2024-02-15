const { Router } = require("express");

const router = Router();

//TODO: CONFIGURAMOS NUESTRO ROUTER PRINCIPAL, DONDE LLEGARÁN TODOS LOS ENDPOINTS

router.get('/drivers', (req, res) =>{
    res.status(200).send("Aquí están todos los drivers!=)");
    });

router.get('/drivers/:id', (req, res) =>{
    res.status(200).send('Aquí está el detalle del driver!=)');
    });

router.post('/drivers', (req, res) =>{
    res.status(200).send('Crear driver');
    });


module.exports = router;
