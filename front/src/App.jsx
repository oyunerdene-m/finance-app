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
import {
	logoIcon,
	userIcon,
	homeIcon,
	transactionsIcon,
	accountsIcon,
	addIcon,
} from './assets/icons/icons';

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
				className='container text-center flex p-5 font-poppins text-dark-blue bg-background-color flex-col md:flex-row lg:flex-row h-screen'
			>
				<div className='flex flex-col p-10 w-full xl:w-1/5' style={{ border: '1px solid green' }}>
					<nav>
						<ul>
							{currentUser ? (
								<>
									<div>
										<li className='font-extrabold uppercase text-xl	mb-20 flex'>
											{logoIcon}
											<Link to='/'>Finance App</Link>
										</li>
									</div>
									<div className='flex mb-7'>
										{userIcon}
										<li className='mr-2'>Hello, {currentUser.name}</li>
										<li onClick={logoutHandler}>
											<Link to='/'>Logout</Link>
										</li>
									</div>
									<div className='flex flex-col'>
										<li className='mb-7 flex'>
											{homeIcon}
											<Link to='/'>Home</Link>
										</li>
										<li className='mb-7 flex'>
											{transactionsIcon}
											<Link to='/transactions'>Transactions</Link>
										</li>
										<li className='mb-7 flex'>
											{accountsIcon}
											<Link to='/accounts'>Accounts</Link>
										</li>
										<li className='mb-7 flex'>
											{addIcon}
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
				<main className='w-full xl:w-2/5'>
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
				</main>
				<div style={{ border: '1px solid purple' }} className='w-full xl:w-2/5'></div>
			</div>
		</Router>
	);
}

export default App;
