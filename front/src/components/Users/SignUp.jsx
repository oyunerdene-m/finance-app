import { useState } from 'react';
import Form from './Form';
import { Navigate } from 'react-router-dom';

export default function SignUp() {
	const [user, setUser] = useState({ name: '', email: '', password: '' });
	const [isSignedUp, setIsSignedUp] = useState(false);

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
		const response = await fetch('/api/v1/users/register', {
			method: 'POST', // or 'PUT'
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
			setIsSignedUp(true);
		}
		console.log(data);
	}

	return (
		<>
			{isSignedUp ? (
				<Navigate to='/' replace={true} />
			) : (
				<Form formType='Signup' onFormSubmit={submitHandler} onInputChange={changeHandler} />
			)}
		</>
	);
}
