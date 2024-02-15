const getDriversHandler = (req, res) =>{
    const { forname, surname } = req.query

    if(forname) res.status(200).send(`Aquí está el drivers ${forname} ${surname}!=)`);
    res.status(200).send(`Aquí están todos los drivers!=)`);
};

const getDetailHandler = (req, res) =>{
    const {id} = req.params;


    res.status(200).send(`Aquí está el detalle del driver ID Nº ${id}!=)`);
};



module.exports = {
    getDriversHandler,
    getDetailHandler
};

//TODO: Handler -> Recibe la req -> Unifica datos -> Devuelve res -> Invoca a controller (que es otra fx) | NUNCA INTERACTÚA CON FUENTES EXTERNAS
/* //TODO: Para solicitar información:
    /:id -> params
    query -> /drivers?forname=FeFi&surname=Lisperguer
    body -> info
*/