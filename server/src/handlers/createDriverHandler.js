const createDriverHandler = (req, res) =>{
    res.status(201).send('Crear driver');
};
//TODO: POST o PUT: 201 -> "created"

module.exports = {
    createDriverHandler
};