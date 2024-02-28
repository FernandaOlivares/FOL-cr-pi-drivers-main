/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Card from '../Card/Card.jsx';
import styles from './Form.module.css';
import { postNewDriver } from '../../redux/actions/index.jsx'
import { getAllTeams } from '../../redux/actions/index.jsx';

// eslint-disable-next-line react-refresh/only-export-components
const Form = () => {
    const dispatch = useDispatch();
    const allTeams = useSelector((state) => state.allTeams);
  
    useEffect(() => {
      dispatch(getAllTeams());
    }, [dispatch]);

    const [input, setInput] = useState({
        forename: '',
        surname: '',
        nationality: '',
        image: '',
        dateOfBirth: '',
        description: '',
        teams: [],
    });

    const [error, setError] = useState({
        forename: '',
        surname: '',
        nationality: '',
        image: '',
        dateOfBirth: '',
        description: '',
        teams: [],
    });

    const validateFormInput = (driverInfo) => {
        const errors = {};
    
        // Validar longitud mínima y máxima para el nombre
        if (!driverInfo.forename || !/^[A-Za-zÀ-ÖØ-öø-Ÿ\s'-]+$/.test(driverInfo.forename.trim()) || driverInfo.forename.length < 2 || driverInfo.forename.length > 30) {
            errors.forename = '*Invalid forename (2-50 characters)';
        }
    
        // Validar longitud mínima y máxima para el apellido
        if (!driverInfo.surname || !/^[A-Za-zÀ-ÖØ-öø-Ÿ\s'-]+$/.test(driverInfo.surname.trim()) || driverInfo.surname.length < 2 || driverInfo.surname.length > 30) {
            errors.surname = '*Invalid surname (2-50 characters)';
        }

        if (!driverInfo.nationality || !/^[A-Za-zÀ-ÖØ-öø-Ÿ\s'-]+$/.test(driverInfo.nationality.trim()) || driverInfo.nationality.length < 2 || driverInfo.nationality.length > 30) {
            errors.nationality = '*Invalid nationality (2-50 characters)';
        }
    
        if (!driverInfo.dateOfBirth || !/\d{4}-\d{2}-\d{2}/.test(driverInfo.dateOfBirth.trim())) {
            errors.dateOfBirth = '*Invalid date of birth';
        } else {
            const birthDate = new Date(driverInfo.dateOfBirth);
        
            // Verificar si la fecha de nacimiento es antes de la fecha mínima
            const MINIMUM_BIRTH_DATE = new Date('1900-01-01');
            if (birthDate <= MINIMUM_BIRTH_DATE) {
                errors.dateOfBirth = '*Must be after January 1, 1900';
            } else {
                const today = new Date();
                let age = today.getFullYear() - birthDate.getFullYear();
                const monthDiff = today.getMonth() - birthDate.getMonth();
                
                if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }
        
                if (age < 18) {
                    errors.dateOfBirth = '*Driver must be at least 18 years old';
                }
            }
        }        
    
        // Validar URL de la imagen
        if (!driverInfo.image || !/^(ftp|http|https):\/\/[^ "]+$/.test(driverInfo.image.trim())) {
            errors.image = '*Invalid image link';
        }
    
        // Validar longitud máxima para la descripción
        if (!driverInfo.description || driverInfo.description.length < 50 || driverInfo.description.length > 3000) {
            errors.description = '*Description is required (50-3000 characters)';
        }
    
        // Validar que se haya seleccionado al menos un equipo
        if (!driverInfo.teams || driverInfo.teams.length === 0) {
            errors.teams = '*At least one team required';
        }
    
        setError(errors);
    
        return Object.keys(errors).length === 0;
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validateFormInput(input);
        if (isValid) {
            try {
                // Despachar acción para crear un nuevo conductor
                const newDriverData = dispatch(postNewDriver(input));
                alert('Driver created successfully!');
                
                // Restablecer el estado del formulario
                setInput({
                    forename: '',
                    surname: '',
                    nationality: '',
                    image: '',
                    dateOfBirth: '',
                    description: '',
                    teams: [],
                });
            } catch (error) {
                console.error('Error creating new driver:', error);
                // Manejo de errores según sea necesario
                alert('Error creating new driver. Please try again.');
            }
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

    const handleSelect = (event) => {
        const selectedTeam = event.target.value;
        setInput({
            ...input,
            teams: [...input.teams, selectedTeam]
        });
    
        // Validar el campo de equipos
        validateFormInput({ ...input, teams: [...input.teams, selectedTeam] });
    };
    
    const handleDeleteTeam = (teamName) => {
        setInput({
            ...input,
            teams: input.teams.filter(team => team !== teamName)
        });
    };

    return (

        <div >
            <div>Create a New Driver</div>
            <div className={styles.cardContainer}>
            <Card eachDriver={{
                forename: input.forename,
                surname: input.surname,
                image: input.image,
                teams: input.teams,
                id: 0 //Aquí deberías generar un ID único para el conductor, por ejemplo, mediante una función que genere IDs aleatorios o usando un contador.
            }} />
            </div>
            <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.driverForm}>
                <div className={styles.inputField}>
                    <label>Forename:
                        <div className={styles.inputContainer}>
                            <input type='text' name='forename' value={input.forename} onChange={handleChange}/>
                            <span className={styles.errorMessage}>{error.forename}</span>
                        </div>
                    </label>
                </div>
                <div className={styles.inputField}>
                    <label>Surname:
                        <div className={styles.inputContainer}>
                            <input type='text'name='surname' value={input.surname} onChange={handleChange}/>
                            <span className={styles.errorMessage}>{error.surname}</span>
                        </div>
                    </label>
                </div>
                <div className={styles.inputField}>
                    <label>Nationality:
                        <div className={styles.inputContainer}>
                            <input type='text' name='nationality' value={input.nationality} onChange={handleChange}/>
                            <span className={styles.errorMessage}>{error.nationality}</span>
                        </div>
                    </label>
                </div>
                <div className={styles.inputField}>
                    <label>Image:
                        <div className={styles.inputContainer}>
                            <input type='text' name='image' value={input.image} onChange={handleChange}/>
                            <span className={styles.errorMessage}>{error.image}</span>
                        </div>
                    </label>
                </div>
                <div className={styles.inputField}>
                    <label>Date Of Birth:
                        <div className={styles.inputContainer}>
                            <input type='date' name='dateOfBirth' value={input.dateOfBirth} onChange={handleChange}/>
                            <span className={styles.errorMessage}>{error.dateOfBirth}</span>
                        </div>
                    </label>
                </div>
                <div className={styles.inputField}>
                    <label>Description:
                        <div className={styles.inputContainer}>
                            <textarea name='description' value={input.description} onChange={handleChange} />
                            <span className={styles.errorMessage}>{error.description}</span>
                        </div>
                    </label>
                </div>
                <div className={styles.filterContainer}>
                    <select onChange={(event) => handleSelect(event)} name='teamSelect' id='teamSelect' className={styles.filterBtn} defaultValue=''>
                        <option value='' disabled id='teamSelect'>Add Teams</option>
                        {allTeams?.map((team) => {
                        return (
                            <option key={team.id} value={team.name}>{team.name}</option>
                        );
                        })}2
                    </select>
                    <ul>
                    {input.teams.map((team, index) => (
                        <li key={index}>
                            {team} 
                            <button onClick={() => handleDeleteTeam(team)}>x</button>
                        </li>
                    ))}
                    </ul>   
                    <span className={styles.errorMessage}>{error.teams}</span>
                </div>
                <button type='submit' disabled={!Object.keys(error).every(key => error[key] === '')}>Create New Driver</button>
            </form>
                <div>
                    <Link to='/home'><button>Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Form;
