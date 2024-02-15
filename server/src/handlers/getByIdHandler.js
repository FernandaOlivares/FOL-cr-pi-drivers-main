const getByIdHandler = (req, res) =>{
    const {id} = req.params;


    res.status(200).send(`Aquí está el detalle del driver ID Nº ${id}!=)`);
};



module.exports = {
    getByIdHandler
};