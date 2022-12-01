import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TransactionList from '../components/Transactions/Transactions/TransactionList';
import fetchData from '../lib/fetchData';

export default function Transactions() {
	const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		async function getTransactions() {
			try {
				const response = await fetchData('/api/v1/transactions', 'GET', undefined);
				setTransactions(response.transactions);
			} catch (error) {
				console.log(error);
				alert(error);
			}
		}
		getTransactions();
	}, []);

	return (
		<div>
			<h3>Last transactions:</h3>
			<div>
				<Link to='/transactions/new'>New transaction</Link>
			</div>
			<br />
			<TransactionList transactions={transactions} />
		</div>
	);
}
