//TODO: Handler -> Recibe la req -> Unifica datos -> Devuelve res -> Invoca a controller (que es otra fx) | NUNCA INTERACTÚA CON FUENTES EXTERNAS


const getDriversHandler = (req, res) =>{
    res.status(200).send("Aquí están todos los drivers!=)");
};

getDetailHandler = (req, res) =>{
    res.status(200).send('Aquí está el detalle del driver!=)');
    }



module.exports = {
    getDriversHandler,
    getDetailHandler
};