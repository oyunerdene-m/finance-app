import './App.css';
import { useState } from 'react';
import Login from './components/Users/Login';
import SignUp from './components/Users/SignUp';
import Home from './components/Pages/Home';
import { getUsers, addUser } from './lib/userData';

//import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';

function App() {
	const [users, setUsers] = useState(getUsers());
	const [currentUser, setCurrentUser] = useState();
	const [errorMessage, setErrorMessage] = useState('');
	const [hideSignup, setHideSignup] = useState(false);

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
		setUsers(addUser(name, password));
		setHideSignup(true);
	}

	return (
		<div className="App">
			{currentUser ? (
				<Home currentUser={currentUser} />
			) : (
				<>
					<Login onLogin={loginHandler} errorMessage={errorMessage} />
					{hideSignup ? null : <SignUp onSignUp={signUpHandler} />}
				</>
			)}
		</div>
	);
	// return (
	// 	<Router>
	// 		<div>
	// 			<nav>
	// 				<ul>
	// 					{currentUser ? (
	// 						<li>
	// 							<Navigate to="/" replace={true} />
	// 							Hello, {currentUser.name} <a href="#.com">logout</a>
	// 						</li>
	// 					) : (
	// 						<>
	// 							<li>
	// 								<Link to="/login">Login</Link>
	// 							</li>
	// 							<li>
	// 								<Link to="/signup">Signup</Link>
	// 							</li>
	// 						</>
	// 					)}
	// 				</ul>
	// 			</nav>

	// 			<Routes>
	// 				<Route path="/" element={<Home />} />
	// 				<Route
	// 					path="/login"
	// 					element={<Login onLogin={loginHandler} errorMessage={errorMessage} />}
	// 				/>
	// 				<Route path="/signup" element={<SignUp onSignUp={signUpHandler} />} />
	// 			</Routes>
	// 		</div>
	// 	</Router>
	//);
}

export default App;
