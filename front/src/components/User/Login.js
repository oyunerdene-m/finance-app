import { useState } from 'react';

export default function Login({ onLogin, errorMessage }) {
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
					<input onChange={nameChangeHandler} type="text" id="username" name="username" />
				</div>
				<div style={{ marginBottom: '10px' }}>
					<label htmlFor="username">password: </label>
					<input onChange={passChangeHandler} type="password" id="password" name="password" />
				</div>
				<button>login</button>
			</form>
			<p>{errorMessage}</p>
		</>
	);
}
