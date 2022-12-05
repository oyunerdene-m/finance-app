import './App.css';
import Home from './pages/home';
import Accounts from './pages/accounts';
import Transactions from './pages/transactions';
import NewTransaction from './components/Transactions/NewTransaction/NewTransaction';
import EditTransaction from './components/Transactions/EditTransaction';
import Signup from './components/Users/SignUp';
import Login from './components/Users/Login';
import { useContext } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import CurrentUserContext from './context/currentUser-context';

function App() {
	const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

	async function logoutHandler() {
		const response = await fetch('/api/v1/users/logout');
		const res = await response.json();
		console.log(res);
		setCurrentUser('');
	}

	return (
		<Router>
			<div
				style={{ border: '1px solid red' }}
				className='container text-center flex p-5 columns-auto font-poppins text-dark-blue bg-background-color'
			>
				<div className='flex flex-col p-10' style={{ border: '1px solid green' }}>
					<nav>
						<ul>
							{currentUser ? (
								<>
									<div>
										<li className='font-extrabold uppercase text-xl	mb-20 flex'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 24 24'
												fill='currentColor'
												className='w-6 h-6 mr-3'
											>
												<path d='M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z' />
												<path
													fillRule='evenodd'
													d='M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z'
													clipRule='evenodd'
												/>
												<path d='M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z' />
											</svg>

											<Link to='/'>Finance App</Link>
										</li>
									</div>
									<div className='flex mb-7'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth={1.5}
											stroke='currentColor'
											className='w-5 h-5 mr-3'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
											/>
										</svg>

										<li className='mr-2'>Hello, {currentUser.name}</li>
										<li onClick={logoutHandler}>
											<Link to='/'>Logout</Link>
										</li>
									</div>
									<div className='flex flex-col'>
										<li className='mb-7 flex'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth={1.5}
												stroke='currentColor'
												className='w-5 h-5 mr-3'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
												/>
											</svg>
											<Link to='/'>Home</Link>
										</li>
										<li className='mb-7 flex'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth={1.5}
												stroke='currentColor'
												className='w-5 h-5 mr-3'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5'
												/>
											</svg>

											<Link to='/transactions'>Transactions</Link>
										</li>
										<li className='mb-7 flex'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth={1.5}
												stroke='currentColor'
												className='w-5 h-5 mr-3'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z'
												/>
											</svg>

											<Link to='/accounts'>Accounts</Link>
										</li>
										<li className='mb-7 flex'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth={1.5}
												stroke='currentColor'
												className='w-5 h-5 mr-3'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M12 4.5v15m7.5-7.5h-15'
												/>
											</svg>

											<Link to='/transactions/new'>Add new transaction</Link>
										</li>
									</div>
								</>
							) : (
								<Link to='/signup'>Signup</Link>
							)}
						</ul>
					</nav>
				</div>
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
