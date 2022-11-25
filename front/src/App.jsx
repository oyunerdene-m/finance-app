import './App.css';
import Home from './pages/home';
import Accounts from './pages/accounts';
import Transactions from './pages/transactions';
import NewTransaction from './components/Transactions/NewTransaction/NewTransaction';
import EditTransaction from './components/Transactions/EditTransaction';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='App'>
				<nav style={{ marginBottom: '50px' }}>
					<ul style={{ display: 'flex' }}>
						<Link style={{ marginRight: '10px' }} to='/'>
							Home
						</Link>
						<Link style={{ marginRight: '10px' }} to='/transactions'>
							Transactions
						</Link>
						<Link style={{ marginRight: '10px' }} to='/accounts'>
							Accounts
						</Link>
						<Link to='/transactions/new'>Add new transaction</Link>
					</ul>
				</nav>

				<Routes>
					<Route path='/' element={<Home />} />
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
