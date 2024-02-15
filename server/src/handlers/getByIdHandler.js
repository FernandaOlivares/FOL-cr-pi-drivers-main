const getByIdHandler = (req, res) =>{
    const {id} = req.params;


    res.status(200).send(`Aquí está el detalle del driver ID Nº ${id}!=)`);
};



module.exports = {
    getByIdHandler
};

/*
TODO: CONTROLLER:Es el que hace la interacción con fuentes externas de información
-> API
-> DB

TODO: HANDLER: Manejo interno de información (recibida ya sea por query, params, body) - NUNCA INTERACTÚA CON FUENTES EXTERNAS
-> Recibe la req
-> Unifica datos
-> Devuelve res
-> Invoca a controller (que es otra fx)

TODO: SOLICITUD DE INFORMACIÓN:
-> /:id -> params
-> query -> /drivers?forname=FeFi&surname=Lisperguer
-> body -> info
*/