import './App.css';
import { useState } from 'react';
import Login from './components/User/Login';
import SignUp from './components/User/SignUp';
import Navbar from './components/Header/Navbar';
import { getUsers, addUser } from './lib/userData';

function App() {
	const [users, setUsers] = useState(getUsers());
	const [currentUser, setCurrentUser] = useState();
	const [errorMessage, setErrorMessage] = useState('');
	const [hideSignup, setHideSignup] = useState(false);
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
		// const newUser = {
		// 	id: Math.random().toString(),
		// 	name: name,
		// 	password: password,
		// };
		setUsers(addUser(name, password));
		setHideSignup(true);
	}

	return (
		<div className="App">
			{currentUser ? (
				<h1>Finance App</h1>
			) : (
				<>
					{hideSignup ? (
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
