import { useState } from "react";
import validation from "../Validation/validation";
import style from '../../styles/Form.css';

const Form = ({ login }) => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    
    const [error, setError] = useState({})

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setError(validation({
            ...userData,
            [event.target.name]: event.target.value

        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }
//comprobacion de errores en formulario 
    return (
            <div className="cajaForm center">
                <form onSubmit = {handleSubmit}>
                    <div className="input">
                        <label htmlFor="email">Email </label>
                        <input type="text" name= 'email' placeholder="alguien@example.com" value={userData.email} 
                        onChange={handleChange}/>
                        {error.email && <p>{error.email}</p>}

                    <br />
                    
                        <label htmlFor="password">Password </label>
                        <input type="text" name= 'password' placeholder="incorrecta" value={userData.password} 
                        onChange={handleChange}/>
                        {error.password && <p>{error.password}</p>}
                    <br />

                        <button className="button">Submit</button>
                    </div>

                    
                </form>
            </div>
    )
}

export default Form;