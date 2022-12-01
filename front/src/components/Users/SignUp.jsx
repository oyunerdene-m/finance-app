import { useState } from 'react';
import Form from './Form';
import { Navigate } from 'react-router-dom';
import fetchData from '../../lib/fetchData';

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
		try {
			await fetchData('/api/v1/users/register', 'POST', user);
			setIsSignedUp(true);
		} catch (error) {
			console.error(error);
			alert(error);
		}
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
