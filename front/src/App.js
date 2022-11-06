import './App.css';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import Login from './components/User/Login';
import Navbar from './components/Header/Navbar';

const DUMMY_USERS = [
	{ id: nanoid(), name: 'Max', password: 'max123', isLoggedIn: false },
	{ id: nanoid(), name: 'Jenny', password: 'jenny456', isLoggedIn: false },
	{ id: nanoid(), name: 'Rupert', password: 'rupert789', isLoggedIn: false },
];

function App() {
	const [users, setUsers] = useState(DUMMY_USERS);
	const [currentUser, setCurrentUser] = useState();
	const [errorMessage, setErrorMessage] = useState('');

	console.log(currentUser);
	function loginHandler(name, password) {
		users.forEach((user) => {
			if (user.name === name && user.password === password) {
				setCurrentUser({ name, password });
			} else {
				setErrorMessage('Your name or password is incorrect!');
			}
		});
	}

	return (
		<div className="App">
			{currentUser ? (
				<h1>Finance App</h1>
			) : (
				<Login onLogin={loginHandler} errorMessage={errorMessage} />
			)}
			<Navbar currentUser={currentUser} />
		</div>
	);
}

export default App;
