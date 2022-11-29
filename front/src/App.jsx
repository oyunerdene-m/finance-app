import './App.css';
import Home from './pages/home';
import Accounts from './pages/accounts';
import Transactions from './pages/transactions';
import NewTransaction from './components/Transactions/NewTransaction/NewTransaction';
import EditTransaction from './components/Transactions/EditTransaction';
import Signup from './components/Users/SignUp';
import Login from './components/Users/Login';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
	const [currentUser, setCurrentUser] = useState('');

	useEffect(() => {
		async function getCurrentUser() {
			const response = await fetch('/api/v1/users/current-user');
			if (!response.ok) {
				const message = `Error ocuured in ${response.status}`;
				throw new Error(message);
			}
			const res = await response.json();
			setCurrentUser(res.data.user);
		}
		getCurrentUser();
	}, []);

	async function logoutHandler() {
		const response = await fetch('/api/v1/users/logout');
		const res = await response.json();
		console.log(res);
		setCurrentUser('');
	}

	return (
		<Router>
			<div className='App'>
				<nav style={{ marginBottom: '50px' }}>
					<ul style={{ display: 'flex', justifyContent: 'space-between' }}>
						{currentUser ? (
							<>
								<div style={{ display: 'flex' }}>
									<li>
										<Link style={{ marginRight: '10px' }} to='/'>
											Home
										</Link>
									</li>
									<li>
										<Link style={{ marginRight: '10px' }} to='/transactions'>
											Transactions
										</Link>
									</li>
									<li>
										<Link style={{ marginRight: '10px' }} to='/accounts'>
											Accounts
										</Link>
									</li>
									<li>
										<Link to='/transactions/new'>Add new transaction</Link>
									</li>
								</div>
								<div style={{ display: 'flex' }}>
									<li style={{ marginRight: '10px' }}>Hello, {currentUser.name}</li>
									<li onClick={logoutHandler}>
										<Link to='/'>Logout</Link>
									</li>
								</div>
							</>
						) : (
							<Link to='/signup'>Signup</Link>
						)}
					</ul>
				</nav>

				<Routes>
					<Route
						path='/'
						element={
							currentUser ? (
								<Home currentUser={currentUser} />
							) : (
								<Login setCurrentUser={setCurrentUser} />
							)
						}
					/>
					<Route path='/signup' element={<Signup />} />
					<Route path='/login' element={<Login setCurrentUser={setCurrentUser} />} />

					<Route path='/accounts' element={<Accounts />} />
					<Route path='/transactions' element={<Transactions />} />
					<Route path='/transactions/new' element={<NewTransaction />} />
					<Route path='/transactions/edit/:id' element={<EditTransaction />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
