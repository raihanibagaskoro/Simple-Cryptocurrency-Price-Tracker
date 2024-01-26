import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Register.css';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!username || !password) {
            setError('Please enter both username and password');
            return;
        }

        try {
            const { data } = await axios.post('http://localhost:3001/register', {
                username,
                password
            });
            alert('Register success');
            navigate('/login');
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="register-form">
            <h1>Register</h1>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <label className='label-username'>
                    Username:
                    <input type="text" name="username" className="input-username" onChange={e => setUsername(e.target.value)} />
                </label>
                <label className='label-password'>
                    Password:
                    <input type="password" name="password" className="input-password" onChange={e => setPassword(e.target.value)} />
                </label>
                <input className='btn-submit' type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register;
