const { Driver } = require('../db');


const createDriverDb = async (forename, surname, nationality) => {
    const newDriver = await Driver.create({forename, surname, nationality});
return newDriver;
};


module.exports = createDriverDb;

/*
async await se usa para dejar en espera la solicitud hasta que la BD o la API envíen la información, si no lo usamos crearíamos un Driver Undefine
TODO: -> BODY Json
{
  "forename" : "Fernanda",
  "surname" : "Lisperguerrrrrr",
  "nationality" : "chilienneee"
}*/
