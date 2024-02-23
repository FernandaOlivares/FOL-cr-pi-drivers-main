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
    });

    function validateFormInput(driverInfo) {
        const errors = {};

        if (!driverInfo.forename || !/^[A-Za-zÀ-ÖØ-öø-Ÿ\s'-]+$/.test(driverInfo.forename.trim())) {
            errors.forename = '*Please enter a valid forename.';
        }

        if (!driverInfo.surname || !/^[A-Za-zÀ-ÖØ-öø-Ÿ\s'-]+$/.test(driverInfo.surname.trim())) {
            errors.surname = '*Please enter a valid surname.';
        }

        if (!driverInfo.nationality || !/^[A-Za-zÀ-ÖØ-öø-Ÿ\s'-]+$/.test(driverInfo.nationality.trim())) {
            errors.nationality = '*Please enter a valid nationality.';
        }

        if (!driverInfo.image || !/^(ftp|http|https):\/\/[^ "]+$/.test(driverInfo.image.trim())) {
            errors.image = '*Please enter a valid link image.';
        }

        if (!driverInfo.dateOfBirth || !/\d{4}-\d{2}-\d{2}/.test(driverInfo.dateOfBirth.trim())) {
            errors.dateOfBirth = '*Please date of birth is required and must be in YYYY-MM-DD format.';
        }

        if (!driverInfo.description) {
            errors.description = '*Description is required.';
        }

        if (!driverInfo.teams) {
            errors.teams = 'Teams are required.';
        }

        setError(errors);

        return Object.keys(errors).length === 0;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validateFormInput(input);
        if (isValid) {
            // Aquí puedes manejar el envío del formulario
            console.log('Formulario válido, se puede enviar.');
        } else {
            console.log('El formulario tiene errores, por favor corríjalos.');
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInput({
            ...input,
            [name]: value,
        });
        // También validamos el campo que cambió
        validateFormInput({ ...input, [name]: value });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <button type='submit' disabled={!Object.keys(error).every(key => error[key] === '')}>Create New Driver</button>
            </form>
        </div>
    );
};

export default Form;
