// components/sessions/Login.js
import React, { useState } from 'react';
import fire from '../../fire.js';

// email login > email & password state hooks.
const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(email, password)
            .catch((error) => {
                console.log(`submitted email: ${email} password ${password}`);    
        });   
    }
    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={({ target }) => setEmail(target.value)}
                    placeholder="Email"
                    />
                <br />
                <input
                    type="password"
                    onChange={({ target }) => setPassword(target.value)}
                    placeholder="Password"
                />
                <br />
                <button type="submit">
                    Sigh In
                </button>
            </form>
        </div>
    )
};

export default Login