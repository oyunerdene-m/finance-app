import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TransactionList from '../components/Transactions/Transactions/TransactionList';
import fetchData from '../lib/fetchData';
import { addIconWithBorder } from '../assets/icons/icons';

export default function Transactions() {
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

	return (
		<div>
			<div className='flex justify-between mb-4'>
				<h3>Last transactions</h3>
				<Link to='/transactions/new'> {addIconWithBorder}</Link>
			</div>
			<TransactionList transactions={transactions} />
		</div>
	);
}
