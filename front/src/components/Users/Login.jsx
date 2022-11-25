import { useState } from 'react';
import Form from './Form';

export default function Login({ onLogin, errorMessage, currentUser }) {
	const [user, setUser] = useState({ name: '', password: '' });

	function changeHandler(event) {
		setUser((prevUser) => {
			return {
				...prevUser,
				[event.target.name]: event.target.value,
			};
		});
	}

	function submitHandler(event) {
		event.preventDefault();
		onLogin(user);
	}
	return (
		<Form
			user={user}
			errorMessage={errorMessage}
			onFormSubmit={submitHandler}
			onInputChange={changeHandler}
		/>
	);
}
