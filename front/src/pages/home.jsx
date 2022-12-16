import Accounts from './accounts';
import Transactions from './transactions';
import Login from '../components/Users/Login';
import { useState, useEffect, useContext } from 'react';
import AccountsContext from '../context/accounts-context';
import fetchData from '../lib/fetchData';
import { getTotalIncome, getTotalExpense, getBalance } from '../lib/getStats';

export default function Home({ currentUser }) {
	console.log('currentUser', currentUser);
	const { accounts } = useContext(AccountsContext);
	const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		async function getTransactions() {
			try {
				const response = await fetchData('/api/v1/transactions', 'GET', undefined);
				setTransactions(response.transactions);
			} catch (error) {
				console.error(error);
				alert(error);
			}
		}
		getTransactions();
	}, []);

	const totalIncome = getTotalIncome(transactions);
	const totalExpense = getTotalExpense(transactions);
	const balance = getBalance(accounts);
	if (currentUser === null) return <Login />;
	return (
		<>
			{currentUser !== null ? (
				<div className='flex flex-col p-10 text-left'>
					<div className='mb-5'>
						<p className='mb-2'>Total balance</p>
						<div className='text-xl'>
							{' '}
							<span>€{balance.eur}</span>, <span>${balance.usd}</span>, <span>₮{balance.mnt}</span>
						</div>
					</div>
					<div className='flex justify-between pb-6 border-b-[1px] border-light-gray'>
						<div>
							<p className='text-more-gray'>Income</p>
							<span>€{totalIncome}</span>
						</div>
						<div>
							<p className='text-more-gray'>Expense</p>
							<span>€{totalExpense}</span>
						</div>
						<div>
							<p className='text-more-gray'>Credit Limit</p>
							<span>€1000</span>
						</div>
					</div>
					<div className='pt-7 pb-6 border-b-[1px] border-light-gray'>
						<Accounts />
					</div>
					<div className='pt-2'>
						<Transactions />
					</div>
				</div>
			) : (
				<Login />
			)}
		</>
	);
}
