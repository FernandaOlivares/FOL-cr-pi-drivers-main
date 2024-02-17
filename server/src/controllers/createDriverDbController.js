const { Driver } = require('../db');


const createDriverDb = async (forename, surname, nationality, dateOfBirth, image, description) => {
    const newDriver = await Driver.create({forename, surname, nationality, dateOfBirth, image, description});
return newDriver;
};


module.exports = createDriverDb;

/*
async await se usa para dejar en espera la solicitud hasta que la BD o la API envíen la información, si no lo usamos crearíamos un Driver Undefine
TODO: -> BODY Json
{
  "forename" : "Fernanda",
  "surname" : "Lisperguer",
  "nationality" : "chilienne",
  "dateOfBirth" : "01-09-1989",
  "image" : "url.com",
  "description" : "Very happy.Currently studying to be a developer."
}
*/
