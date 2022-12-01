import { useState } from 'react';
import Form from './Form';
import { Navigate } from 'react-router-dom';
import fetchData from '../../lib/fetchData';

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
		try {
			const response = await fetchData('/api/v1/users/login', 'POST', user);
			setCurrentUser(response.user);
			setIsLogged(true);
		} catch (error) {
			console.error(error);
			alert(error);
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
