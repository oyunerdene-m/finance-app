import { useState } from 'react';
import Form from './Form';
import { Navigate } from 'react-router-dom';

export default function Login({ setCurrentUser }) {
	const [user, setUser] = useState({ email: '', password: '' });
	const [isLogged, setIsLogged] = useState(false);
	function changeHandler(event) {
		setUser((prevUser) => {
			return {
				...prevUser,
				[event.target.name]: event.target.value,
			};
		});
	}

	async function submitHandler(event) {
		event.preventDefault();
		const response = await fetch('/api/v1/users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});
		if (!response.ok) {
			const message = `An error has occured: ${response.status}`;
			throw new Error(message);
		}
		const data = await response.json();
		if (data.error) {
			alert(data.error);
		} else {
			setCurrentUser(data.data.user);
			setIsLogged(true);
		}
	}

	return (
		<>
			{isLogged ? (
				<Navigate to='/' replace={true} />
			) : (
				<Form formType='Login' onFormSubmit={submitHandler} onInputChange={changeHandler} />
			)}
		</>
	);
}
