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
		window.location.reload();
	}

	return (
		<Router>
			<div className='container text-center flex p-5 font-poppins text-dark-blue bg-background-color flex-col md:flex-row lg:flex-row h-screen'>
				<div className='flex flex-col p-10 w-full lg:w-2/6 xl:w-1/5 md:border-r-[1px] md:border-light-gray'>
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
										<li className='font-medium italic' onClick={logoutHandler}>
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
								<div className='flex flex-col'>
									<Link to='/signup'>Signup</Link>
									<Link to='/login'>Login</Link>
								</div>
							)}
						</ul>
					</nav>
				</div>
				<main className='w-full lg:w-2.7/6 xl:w-3/5'>
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
				<div className='w-full lg:w-1.3/6 xl:w-1/5 bg-stats-back rounded-md'></div>
			</div>
		</Router>
	);
}

export default App;
