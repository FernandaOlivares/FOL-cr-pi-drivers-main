const createDriverDb = require('../controllers/createDriverDbController');


const createDriverHandler = async (req, res) =>{
  const { forename, surname, nationality } = req.body;
  try{
    const response = await createDriverDb(forename, surname, nationality)
    res.status(201).send(`Driver ${forename} ${surname}, ${nationality}, successfully created. Well done! =)`);//POST o PUT: 201 -> "created"
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



module.exports = createDriverHandler;