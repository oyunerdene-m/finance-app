import './App.css';
import { useState } from 'react';
import Login from './components/Users/Login';
import SignUp from './components/Users/SignUp';
import Home from './views/Home';
import Accounts from './views/Accounts';
import { getUsers, addUser } from './lib/userData';

import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import Transactions from './views/Transactions';
import Transfer from './components/Transactions/Transfer';

function App() {
	const [users, setUsers] = useState(getUsers());
	const [currentUser, setCurrentUser] = useState(null);
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

	return (
	    <Router >
	        <div className="App">
	            <nav>
	                <ul>
                        {currentUser ? <div style={{marginBottom: "10px"}}>  Hello, {currentUser.name} <a href="#.com">logout</a></div>:
	                        <>
	                            <li>
	                                <Link to="/login">Login</Link>
	                            </li>
                                {hideSignup ? null : <li><Link to="/signup">Signup</Link></li>}
	                        </>
	                    }
	                </ul>
	            </nav>

	            <Routes>
                    <Route path="/login" element={currentUser ? <Navigate to="/" replace={true}/> : <Login onLogin={loginHandler} errorMessage={errorMessage} currentUser={currentUser}/>}/>
                    <Route path="/signup" element={hideSignup ? null : <SignUp onSignUp={signUpHandler} />}/>

                    <Route path="/" element={!currentUser ? <Navigate to="/login" replace={true}/> : <Home />}/>
                    <Route path="/accounts" element={<Accounts/>}/>
                    <Route path="/transactions" element={<Transactions/>}/>
                    <Route path="/transactions/transfer" element={<Transfer/>}/>
	            </Routes>
	        </div>
	    </Router>
	);
}

export default App;
