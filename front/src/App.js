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

	function loginHandler(name, password) {
		setCurrentUser({ name, password });
	}

	return (
		<div className="App">
			<Navbar currentUser={currentUser} />
			<h1>Finance App</h1>
			<Login onLogin={loginHandler} />
		</div>
	);
}

export default App;
