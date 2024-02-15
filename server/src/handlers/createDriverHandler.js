const createDriverHandler = (req, res) =>{
    const { forname, surname, nationality } = req.body;
    res.status(201).send(`Driver ${forname} ${surname}, ${nationality}, successfully created. Well done!`);
};
//TODO: POST o PUT: 201 -> "created"

/*
{
  "forname" : "Fernanda",
  "surname" : "Lisperguer",
  "nationality" : "chilienne"
}
*/

module.exports = {
    createDriverHandler
};