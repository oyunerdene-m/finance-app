import { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function Login({ onLogin, errorMessage, currentUser}) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    function nameChangeHandler(event) {
        setName(event.target.value);
    }
    function passChangeHandler(event) {
        setPassword(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        onLogin(name, password);
    }
    return (
        <>
            <h4>Login</h4>
            <form onSubmit={submitHandler}>
                <div style={{ marginBottom: '5px' }}>
                    <label htmlFor="username">username: </label>
                    <input
                        value={name}
                        onChange={nameChangeHandler}
                        type="text"
                        id="username"
                        name="username"
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="password">password: </label>
                    <input
                        value={password}
                        onChange={passChangeHandler}
                        type="password"
                        id="password"
                        name="password"
                    />
                </div>
                <button>login</button>
            </form>
            <p>{errorMessage}</p>
            {currentUser &&  <Navigate to="/" replace={true} />}
        </>
    );
}
