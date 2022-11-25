import { useState } from 'react';
import Form from './Form';

export default function SignUp({ onSignUp }) {
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
		onSignUp(user);
	}

	return (
		<>
			<Form onFormSubmit={submitHandler} onInputChange={changeHandler} />
		</>
	);
}
