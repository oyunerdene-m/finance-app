import { useState } from 'react';

export default function SignUp({ onSignUp }) {
	const [newName, setNewName] = useState('');
	const [newPass, setNewPass] = useState('');

	function nameChangeHandler(event) {
		setNewName(event.target.value);
	}

	function passChangeHandler(event) {
		setNewPass(event.target.value);
	}

	function submitHandler(e) {
		e.preventDefault();
		onSignUp(newName, newPass);
	}

	return (
		<>
			<h4>Create Account</h4>
			<form onSubmit={submitHandler}>
				<div style={{ marginBottom: '5px' }}>
					<label htmlFor="name">username: </label>
					<input
						value={newName}
						onChange={nameChangeHandler}
						type="text"
						id="name"
						name="username"
					/>
				</div>
				<div style={{ marginBottom: '10px' }}>
					<label htmlFor="pass">password: </label>
					<input
						value={newPass}
						onChange={passChangeHandler}
						type="password"
						id="pass"
						name="password"
					/>
				</div>
				<button>create account</button>
			</form>
		</>
	);
}
