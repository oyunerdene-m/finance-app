import './App.css';
import { useState } from 'react';
import Login from './components/User/Login';
import SignUp from './components/User/SignUp';
import Navbar from './components/Header/Navbar';

const DUMMY_USERS = [
	{ id: Math.random().toString(), name: 'Max', password: 'max123' },
	{ id: Math.random().toString(), name: 'Jenny', password: 'jenny456' },
	{ id: Math.random().toString(), name: 'Rupert', password: 'rupert789' },
];

function App() {
	const [users, setUsers] = useState(DUMMY_USERS);
	const [currentUser, setCurrentUser] = useState();
	const [errorMessage, setErrorMessage] = useState('');
	const [isUser, setIsUser] = useState(false);

	console.log(users);

	console.log(users);
	function loginHandler(name, password) {
		users.forEach((user) => {
			if (user.name === name && user.password === password) {
				setCurrentUser({ name, password });
			} else {
				setErrorMessage('Your name or password is incorrect!');
			}
		});
	}

	function signUpHandler(name, password) {
		const newUser = {
			id: Math.random().toString(),
			name: name,
			password: password,
		};
		setUsers((prevUsers) => [...prevUsers, newUser]);
		setIsUser(true);
	}

	return (
		<div className="App">
			{currentUser ? (
				<h1>Finance App</h1>
			) : (
				<>
					{isUser ? (
						<Login onLogin={loginHandler} errorMessage={errorMessage} />
					) : (
						<>
							<Login onLogin={loginHandler} errorMessage={errorMessage} />
							<SignUp onSignUp={signUpHandler} />
						</>
					)}
				</>
			)}
			<Navbar currentUser={currentUser} />
		</div>
	);
}

export default App;
