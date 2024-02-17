const getAllTeams = require('../controllers/getAllTeamsController');

const getTeamsHandler = async (req, res) =>{
    try{
    const teams = await getAllTeams();
    res.status(200).send(teams);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = { getTeamsHandler };
