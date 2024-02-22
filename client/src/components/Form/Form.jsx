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

    const validate = (i) =>{
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email)){
        console.log('Error en el mail')
        }
        console.log('Todo ok haz tu dispatch')
    }

    const handleChange = (formInput) => {
        formInput.preventDefault();
        setInput({
            ...input,
            [input.target.name]:input.target.value,

        })
        validate({
            ...input,
            [formInput.target.value]: formInput.target.value,
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