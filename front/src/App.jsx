import './App.css';
import { useState } from 'react';
import Login from './components/Users/Login';
import SignUp from './components/Users/SignUp';
import Home from './components/Pages/Home';
import { getUsers, addUser } from './lib/userData';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
	const [users, setUsers] = useState(getUsers());
	const [currentUser, setCurrentUser] = useState({name: 'Max', password: 'max123'});
	const [errorMessage, setErrorMessage] = useState("");
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

	// return (
	// 	<div className="App">
	// 		{currentUser ? (
	// 			<Home currentUser={currentUser} />
	// 		) : (
	// 			<>
	// 				<Login onLogin={loginHandler} errorMessage={errorMessage} />
	// 				{hideSignup ? null : <SignUp onSignUp={signUpHandler} />}
	// 			</>
	// 		)}
	// 	</div>
	// );
	return (
	    <Router >
	        <div className="App">
	            <nav>
	                <ul>
	                    {currentUser ? (
	                        <h2>Home</h2>
	                    ) : (
	                        <>
	                            <li>
	                                <Link to="/login">Login</Link>
	                            </li>
                                {hideSignup ? null : <li><Link to="/signup">Signup</Link></li>}
	                        </>
	                    )}
	                </ul>
	            </nav>

	            <Routes>
	                <Route path="/" element={<Home currentUser={currentUser}/>} />
	                <Route
	                    path="/login"
	                    element={<Login onLogin={loginHandler} errorMessage={errorMessage} currentUser={currentUser}/>}
	                />
	                <Route path="/signup" element={<SignUp onSignUp={signUpHandler} />} />
	            </Routes>
	        </div>
	    </Router>
	);
}

export default App;
