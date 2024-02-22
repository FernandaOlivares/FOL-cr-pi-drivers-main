import { useState } from 'react';
import './Form.module.css'


const Form = () => {
    const[input, setInput] =useState({
        forename: '',
        surname: '',
        nationality: '',
        image: '',
        dateOfBirth: '',
        description: '',
        teams: ''
    });

    const handleChange = (input) => {
        input.preventDefault();
        setInput({
            ...input,
            [input.target.name]:input.target.value,

        })
    };


  <div> Estas en Create! 
    <form onSubmit={''} >
        <div>
            <label>Forename:</label>
            <input name='forename' value={input.value} onChange={handleChange}/>
        </div>
        <div>
            <label>Surname:</label>
            <input name='surname' value={input.value} onChange={handleChange}/>
        </div>
        <div>
            <label> Nationality:</label>
            <input name='nationality' value={input.value} onChange={handleChange}/>
        </div>
        <div>
            <label> Image:</label>
            <input name='image' value={input.value} onChange={handleChange}/>
        </div>
        <div>
            <label>Date Of Birth:</label>
            <input name='dateOfBirth' value={input.value} onChange={handleChange}/>
        </div>
        <div>
            <label> Description:</label>
            <input name='description' value={input.value} onChange={handleChange}/>
        </div>
        <div>
            <label>Teams:</label>
            <input name='teams' value={input.value} onChange={handleChange}/>
        </div>
    </form>
  </div>
};

export default Form;