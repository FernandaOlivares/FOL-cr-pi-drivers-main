import { useState } from 'react';
import './Form.module.css'

const Form = () => {
    const [input, setInput] = useState({
        forename: '',
        surname: '',
        nationality: '',
        image: '',
        dateOfBirth: '',
        description: '',
        teams: '',
    });

    const [error, setError] = useState({
        forename: '',
        surname: '',
        nationality: '',
        image: '',
        dateOfBirth: '',
        description: '',
        teams: '',
    })

    function validateFormInput(driverInfo) {
        setError(prevError => ({
            ...prevError,
            forename: !driverInfo.forename || !/^[A-Za-zÀ-ÖØ-öø-Ÿ\s'-]+$/.test(driverInfo.forename.trim()) ? '*Please enter a valid forename.' : '',
            surname: !driverInfo.surname || !/^[A-Za-zÀ-ÖØ-öø-Ÿ\s'-]+$/.test(driverInfo.surname.trim()) ? '*Please enter a valid surname.' : '',
            nationality: !driverInfo.nationality || !/^[A-Za-zÀ-ÖØ-öø-Ÿ\s'-]+$/.test(driverInfo.nationality.trim()) ? '*Please enter a valid nationality.' : '',
            image: !driverInfo.image || !/^(ftp|http|https):\/\/[^ "]+$/.test(driverInfo.image.trim()) ? '*Please enter a valid link image.' : '',
            dateOfBirth: !driverInfo.dateOfBirth || !/\d{4}-\d{2}-\d{2}/.test(driverInfo.dateOfBirth.trim()) ? '*Please date of birth is required and must be in YYYY-MM-DD format.' : '',
            description: !driverInfo.description ? '*Description is required.' : '',
            teams: !driverInfo.teams ? 'Teams are required.' : ''
        }));
    }
    

    const handleChange = (formInput) => {
        formInput.preventDefault();
        setInput({
            ...input,
            [formInput.target.name]: formInput.target.value,

        })
        validateFormInput({
            ...input,
            [formInput.target.name]: formInput.target.value,
        })
    };

    return (
        <div>
            <form>
                <div>
                    <label>Forename:
                        <input name='forename' value={input.forename} onChange={handleChange}/>
                        <span>{error.forename}</span>
                    </label>
                </div>
                <div>
                    <label>Surname:
                        <input name='surname' value={input.surname} onChange={handleChange}/>
                        <span>{error.surname}</span>
                    </label>
                </div>
                <div>
                    <label>Nationality:
                        <input name='nationality' value={input.nationality} onChange={handleChange}/>
                        <span>{error.nationality}</span>
                    </label>
                </div>
                <div>
                    <label>Image:
                        <input name='image' value={input.image} onChange={handleChange}/>
                        <span>{error.image}</span>
                    </label>
                </div>
                <div>
                    <label>Date Of Birth:
                        <input name='dateOfBirth' value={input.dateOfBirth} onChange={handleChange}/>
                        <span>{error.dateOfBirth}</span>
                    </label>
                </div>
                <div>
                    <label>Description:
                        <input name='description' value={input.description} onChange={handleChange}/>
                        <span>{error.description}</span>
                    </label>
                </div>
                <div>
                    <label>Teams:
                        <input name='teams' value={input.teams} onChange={handleChange}/>
                        <span>{error.teams}</span>
                    </label>
                </div>
            </form>
        </div>
    );
};

export default Form;
