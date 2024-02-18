const axios = require('axios');
const imgDefault =  '../assets/images/f1HeroDefaultImg.jpg';


const getApiInfo = async () =>{
    const apiUrl = await axios.get('http://localhost:5000/drivers/');
    const apiInfo = await apiUrl.data.map((driver) => {
        
    return {
        id: driver.id,
        forename: driver.name.forename,
        surname: driver.name.surname,
        nationality: driver.nationality,
        dateOfBirth: driver.dob,
        teams: (driver.teams?.split(',').map(team => team.trim())) ?? ['Up!No teams were found...'],
        image: driver.image?.url ?? imgDefault,
        description: driver.description,
        created: false,
    }});
return apiInfo;
};


module.exports = getApiInfo;
