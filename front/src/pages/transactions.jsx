import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TransactionList from '../components/Transactions/Transactions/TransactionList';

export default function Transactions() {
	const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch('/api/v1/transactions');

			if (!response.ok) {
				const message = `Error occured in ${response.status}`;
				throw new Error(message);
			}
			const res = await response.json();

			setTransactions(res.data.transactions);
		}
		fetchData();
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
