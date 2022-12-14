import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TransactionList from '../components/Transactions/Transactions/TransactionList';
import fetchData from '../lib/fetchData';
import { addIconWithBorder } from '../assets/icons/icons';
import { getLastTransactions, getSortedTransactions } from '../lib/getLastTransactions';

export default function Transactions() {
	const [transactions, setTransactions] = useState([]);
	const path = useLocation().pathname;

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

	const sortedTransactions = getSortedTransactions([...transactions]);
	const last3Transactions = getLastTransactions([...sortedTransactions]);

	return (
		<div className='px-3 pt-9'>
			<div className='flex justify-between mb-4'>
				{path === '/' ? <h3>Last transactions</h3> : <h3>Your transactions</h3>}

				<Link to='/transactions/new'> {addIconWithBorder}</Link>
			</div>
			{last3Transactions.length === 0 || transactions.length === 0 ? (
				<h1>Loading...</h1>
			) : path === '/' ? (
				<TransactionList transactions={last3Transactions} />
			) : (
				<TransactionList transactions={sortedTransactions} />
			)}
		</div>
	);
}
