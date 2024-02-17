const createDriverDb = require('../controllers/createDriverDbController');


const createDriverHandler = async (req, res) =>{
  const { forename, surname, nationality, dateOfBirth, image, description } = req.body;
  try{
    const response = await createDriverDb(forename, surname, nationality, dateOfBirth, image, description)
    res.status(201).send(`The new driver ${forename} ${surname}, it was successfully created. Well done! =)`);//POST o PUT: 201 -> "created"
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = createDriverHandler;