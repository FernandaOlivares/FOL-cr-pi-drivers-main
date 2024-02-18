const getApiInfo = require('../helpers/getApiInfo');
const getDbInfo = require('../helpers/getDbInfo');

// Función para quitar tildes
const quitarTildes = (cadena) => {
    return cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "");//Remplaza rango de valores Unicode que incluye caracteres diacríticos, por ""
};
//Fx que trae todos los drivers y ORDENA ALFABÉTICAMENTE OR NOMBRE Y APELLIDO, quitando las tildes
const getAllDrivers = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const allDrivers = [...apiInfo, ...dbInfo];

    allDrivers.sort((a, b) => {
        // Primero ordena por forename sin tildes
        const forenameA = quitarTildes(a.forename);
        const forenameB = quitarTildes(b.forename);
        const forenameComparison = forenameA.localeCompare(forenameB);

        // Si los forenames son iguales, ordena por surname sin tildes
        if (forenameComparison === 0) {
            const surnameA = quitarTildes(a.surname);
            const surnameB = quitarTildes(b.surname);
            return surnameA.localeCompare(surnameB);
        }

        return forenameComparison;
    });

    return allDrivers;
};
/*
ORDENA ALFABÉTICAMENTE OR NOMBRE Y APELLIDO
const getAllDriverssss = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const allDrivers = [...apiInfo, ...dbInfo];

    allDrivers.sort((a, b) => {
        // Primero ordena por forename
        const forenameComparison = a.forename.localeCompare(b.forename);
        
        // Si los forenames son iguales, ordena por surname
        if (forenameComparison === 0) {
            return a.surname.localeCompare(b.surname);
        }
        
        return forenameComparison;
    });
    const con = allDrivers.map(driver => ({ forename: driver.forename, surname: driver.surname }));
    return allDrivers;
};

TRAE A TODOS LOS DRIVER ORDENADOS ALFABÉTICAMENTE POR FORENAME
const getAllDrive = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const allDrivers = [...apiInfo, ...dbInfo];

    allDrivers.sort((a, b) => a.forename.localeCompare(b.forename));

    return allDrivers;
};
TRAE A TODOS LOS DRIVERS
const getAllDriver = async () => {
    const apiInfo = await getApiInfo();
    const dbIndo = await getDbInfo();
    const allDrivers = [...apiInfo, ...dbIndo];
    return allDrivers;
};
*/


module.exports = getAllDrivers;

