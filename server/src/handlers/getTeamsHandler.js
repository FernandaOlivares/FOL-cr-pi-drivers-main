const getTeamsHandler = (req, res) =>{
    res.status(200).send("Aquí están todos los teams! <3");
};

module.exports = { getTeamsHandler };