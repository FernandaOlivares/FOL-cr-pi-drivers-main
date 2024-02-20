const createDriverDb = require('../controllers/createDriverDbController');

// This function handles the creation of a new driver in the database and errors due to missing parameters.
const createDriverHandler = async (req, res) => {
  try {
    const { forename, surname, nationality, dateOfBirth, teams, image, description, created } = req.body;

    // Validate input
    const requiredFields = ['forename', 'surname', 'nationality', 'dateOfBirth', 'teams', 'image', 'description'];
    const missingFields = [];
    
    for (const field of requiredFields) {
      if (!req.body[field]) { missingFields.push(field);}
    }
    
    if (missingFields.length > 0) {
      return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
    }
    
    // Call the controller's creation function
    const response = await createDriverDb(forename, surname, nationality, dateOfBirth, teams, image, description, created);

    // Return a successful response
    res.status(201).json({ message: `The new driver ${forename} ${surname} was successfully created.` });
  } catch (error) {
    // Handle any internal errors
    console.error('Error creating driver:', error);
    res.status(500).json({ error: 'An unexpected error occurred while creating the driver.' });
  }
};

module.exports = createDriverHandler;
