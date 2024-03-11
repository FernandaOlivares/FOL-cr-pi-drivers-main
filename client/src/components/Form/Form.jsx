/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react-refresh/only-export-components

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Card from '../Card/Card.jsx';
import styles from './Form.module.css';
import { postNewDriver } from '../../redux/actions/index.jsx'
import { getAllTeams } from '../../redux/actions/index.jsx';
import { titleCase, capitalizeSentences} from '../../utils/stringUtils.js'


const Form = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allTeams = useSelector((state) => state.allTeams);
    const newDriverId = useSelector((state) => state.newDriverId);
    const allDrivers = useSelector((state) => state.allDrivers);

    useEffect(() => {
      dispatch(getAllTeams());
    }, [dispatch]);

    useEffect(() => {
        if (newDriverId) {
            navigate(`/home/${newDriverId}`);
        }
    }, [newDriverId, navigate]);

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

    const validateDuplicateDriver = (driverInfo) => {
        const duplicateDriver = allDrivers.find(driver =>
            driver.forename === driverInfo.forename &&
            driver.surname === driverInfo.surname &&
            driver.nationality === driverInfo.nationality &&
            driver.dateOfBirth === driverInfo.dateOfBirth
        );
    
        if (duplicateDriver) {
            console.log('Driver already exists:', duplicateDriver);
            alert(`Driver ${duplicateDriver.forename} ${duplicateDriver.surname} already exists`);
            setError(prevError => ({ ...prevError, forename: `*Driver ${duplicateDriver.forename} ${duplicateDriver.surname} already exists`}));
            return false;
        }
    
        return true;
    };
    
    

    const validateFormInput = (driverInfo) => {
        const errors = {};
        const isValidDuplicate = validateDuplicateDriver(driverInfo);
        if (!isValidDuplicate) return false;
        
        
        if (!driverInfo.forename || !/^[A-Za-zÀ-ÖØ-öø-Ÿ\s'-]+(?<!-[-])$/.test(driverInfo.forename.trim()) || driverInfo.forename.length < 2 || driverInfo.forename.length > 30) {
            errors.forename = '*Use only A-Z, spaces, apostrophes, hyphens, diacritics, 2-30 chars.';
        }
        
        if (!driverInfo.surname || !/^[A-Za-zÀ-ÖØ-öø-Ÿ\s'-]+(?<!-[-])$/.test(driverInfo.surname.trim()) || driverInfo.surname.length < 2 || driverInfo.surname.length > 30) {
            errors.surname = '*Use only A-Z, spaces, apostrophes, hyphens, diacritics, 2-30 chars.';
        }
        
        if (!driverInfo.nationality || !/^[A-Za-zÀ-ÖØ-öø-Ÿ\s'-]+(?<!-[-])$/.test(driverInfo.nationality.trim()) || driverInfo.nationality.length < 2 || driverInfo.nationality.length > 30) {
            errors.nationality = '*Use only A-Z, spaces, apostrophes, hyphens, diacritics, 2-30 chars.';
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
    
        if (!driverInfo.image || !/^(ftp|http|https):\/\/[^ "]+$/.test(driverInfo.image.trim())) {
            errors.image = '*Invalid image link';
        }
    
        if (!driverInfo.description || driverInfo.description.length < 50 || driverInfo.description.length > 3000) {
            errors.description = '*Description is required (50-3000 characters)';
        }
    
        if (!driverInfo.teams || driverInfo.teams.length === 0) {
            errors.teams = '*At least one team required';
        }

    
        setError(errors);
    
        return Object.keys(errors).length === 0;
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        const isValid = validateFormInput(input);
        if (isValid) {
          try {    
            const createdDriver = await dispatch(postNewDriver(input));
            const newDriverId = createdDriver.id;
            alert('Driver created successfully!');
      
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
            alert('Error creating new driver. Please try again.');
          }
        } 
      };
      

   
    const handleChange = (event) => {
        const { name, value } = event.target;
        let updatedValue = value;
        if (['forename', 'surname', 'nationality'].includes(name)) {
            updatedValue = titleCase(value);
        }
        if (name === 'description') {
            updatedValue = capitalizeSentences(value);
        }
        setInput({
            ...input,//Mantiene input anteriores
            [name]: updatedValue,
        });
        // También validamos el campo que cambió
        validateFormInput({ ...input, [name]: updatedValue });
    };

    const handleSelect = (event) => {
        const selectedTeam = event.target.value;
        setInput({
            ...input,
            teams: [...input.teams, selectedTeam]
        });
        event.target.value = '';
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
            <div className={styles.cardContainer}>
            <div>
            <Card eachDriver={{
                forename: input.forename === '' ? ' ' : input.forename,
                surname: input.surname === '' ? ' ' : input.surname,
                image: input.image,
                teams: input.teams,
                id: 0,
            }} 
            />
            </div>
            </div>
            <div className={styles.formContainer}>
            <p className={styles.formInstructions}>To create a new driver, please add required information*:</p>
            <form onSubmit={handleSubmit} className={styles.driverForm}>
                <div className={styles.inputField}>
                    <label>Forename*:
                        <div className={styles.inputContainer}>
                            <input type='text' name='forename' value={input.forename} onChange={handleChange}/>
                        </div>
                            <span className={styles.errorMessage}>{error.forename}</span>
                    </label>
                </div>
                <div className={styles.inputField}>
                    <label>Surname*:
                        <div className={styles.inputContainer}>
                            <input type='text'name='surname' value={input.surname} onChange={handleChange}/>
                        </div>
                            <span className={styles.errorMessage}>{error.surname}</span>
                    </label>
                </div>
                <div className={styles.inputField}>
                    <label>Nationality*:
                        <div className={styles.inputContainer}>
                            <input type='text' name='nationality' value={input.nationality} onChange={handleChange}/>
                        </div>
                            <span className={styles.errorMessage}>{error.nationality}</span>
                    </label>
                </div>
                <div className={styles.inputField}>
                    <label>Date Of Birth*:
                        <div className={styles.inputContainer}>
                        <input 
                        type='date' 
                        name='dateOfBirth' 
                        value={input.dateOfBirth} 
                        onChange={handleChange}
                        min='1900-01-01' // Establece el límite mínimo del año
                        max='9999-12-31' // Establece el límite máximo del año
                        />
                        </div>
                            <span className={styles.errorMessage}>{error.dateOfBirth}</span>
                    </label>
                </div>
                <div className={styles.inputField}>
                    <label>Image*:
                        <div className={styles.inputContainer}>
                            <input type='text' name='image' value={input.image} onChange={handleChange}/>
                        </div>
                            <span className={styles.errorMessage}>{error.image}</span>
                    </label>
                </div>
                <div className={styles.inputField}>
                <label>Description*:
                    <div className={styles.descriptionContainer}>
                        <textarea name='description' value={input.description} onChange={handleChange} className={styles.textarea} />
                        <span className={styles.errorMessage}>{error.description}</span>
                    </div>
                </label>
                </div>
                <div className={styles.filterContainer}>
                <select onChange={(event) => handleSelect(event)} name='teamSelect' id='teamSelect' className={styles.filterBtn} defaultValue='' disabled={input.teams.length >= allTeams.length}>
                    <option value='' disabled id='teamSelect'>Add Teams*</option>
                    {allTeams
                        ?.filter(team => !input.teams.includes(team.name)) // Filtrar equipos que no estén en la lista input.teams
                        .map((team) => (
                            <option key={team.id} value={team.name}>{team.name}</option>
                        ))}
                </select>
                    <div className={styles.teamListContainer}>
                    <ul className={styles.teamsList}>
                    {input.teams.map((team, index) => (
                        <li key={index}>
                            {team} 
                            <button type='button' onClick={() => handleDeleteTeam(team)}>X</button>
                        </li>
                    ))}
                    </ul>   
                    </div>
                    <span className={styles.errorMessage}>{error.teams}</span>
                </div>
                <div className={styles.buttonContainer}>
                <button type='submit' disabled={!Object.keys(error).every(key => error[key] === '')}>Create New Driver</button>
            </div>
            </form>
            </div>
        </div>
    );
};

export default Form;
