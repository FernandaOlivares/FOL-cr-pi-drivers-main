import { useState } from 'react';
import Card from '../Card/Card.jsx'
import styles from './Form.module.css'; // Importa los estilos desde el archivo CSS

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
            errors.forename = '*Invalid forename';
        }

        if (!driverInfo.surname || !/^[A-Za-zÀ-ÖØ-öø-Ÿ\s'-]+$/.test(driverInfo.surname.trim())) {
            errors.surname = '*Invalid surname';
        }

        if (!driverInfo.nationality || !/^[A-Za-zÀ-ÖØ-öø-Ÿ\s'-]+$/.test(driverInfo.nationality.trim())) {
            errors.nationality = '*Invalid nationality.';
        }

        if (!driverInfo.image || !/^(ftp|http|https):\/\/[^ "]+$/.test(driverInfo.image.trim())) {
            errors.image = '*Invalid link image';
        }

        if (!driverInfo.dateOfBirth || !/\d{4}-\d{2}-\d{2}/.test(driverInfo.dateOfBirth.trim())) {
            errors.dateOfBirth = '*Format must be YYYY-MM-DD';
        }

        if (!driverInfo.description) {
            errors.description = '*Description is required';
        }

        if (!driverInfo.teams) {
            errors.teams = '*At least one team required';
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

        <div >
            <div className={styles.cardContainer}>
            <Card eachDriver={{
                forename: input.forename,
                surname: input.surname,
                image: input.image,
                teams: input.teams,
                // id: 0 Aquí deberías generar un ID único para el conductor, por ejemplo, mediante una función que genere IDs aleatorios o usando un contador.
            }} />
            </div>
            <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.driverForm}>
                <div className={styles.inputField}>
                    <label>Forename:
                        <div className={styles.inputContainer}>
                            <input name='forename' value={input.forename} onChange={handleChange}/>
                            <span className={styles.errorMessage}>{error.forename}</span>
                        </div>
                    </label>
                </div>
                <div className={styles.inputField}>
                    <label>Surname:
                        <div className={styles.inputContainer}>
                            <input name='surname' value={input.surname} onChange={handleChange}/>
                            <span className={styles.errorMessage}>{error.surname}</span>
                        </div>
                    </label>
                </div>
                <div className={styles.inputField}>
                    <label>Nationality:
                        <div className={styles.inputContainer}>
                            <input name='nationality' value={input.nationality} onChange={handleChange}/>
                            <span className={styles.errorMessage}>{error.nationality}</span>
                        </div>
                    </label>
                </div>
                <div className={styles.inputField}>
                    <label>Image:
                        <div className={styles.inputContainer}>
                            <input name='image' value={input.image} onChange={handleChange}/>
                            <span className={styles.errorMessage}>{error.image}</span>
                        </div>
                    </label>
                </div>
                <div className={styles.inputField}>
                    <label>Date Of Birth:
                        <div className={styles.inputContainer}>
                            <input name='dateOfBirth' value={input.dateOfBirth} onChange={handleChange}/>
                            <span className={styles.errorMessage}>{error.dateOfBirth}</span>
                        </div>
                    </label>
                </div>
                <div className={styles.inputField}>
                    <label>Description:
                        <div className={styles.inputContainer}>
                            <input name='description' value={input.description} onChange={handleChange}/>
                            <span className={styles.errorMessage}>{error.description}</span>
                        </div>
                    </label>
                </div>
                <div className={styles.inputField}>
                    <label>Teams:
                        <div className={styles.inputContainer}>
                            <input name='teams' value={input.teams} onChange={handleChange}/>
                            <span className={styles.errorMessage}>{error.teams}</span>
                        </div>
                    </label>
                </div>
                <button type='submit' disabled={!Object.keys(error).every(key => error[key] === '')}>Create New Driver</button>
            </form>
            </div>
        </div>
    );
};

export default Form;
