import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTransactions, deleteTransaction } from '../lib/transactionData';
import TransactionList from '../components/Transactions/Transactions/TransactionList';

export default function Transactions() {
	const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const data = await getTransactions();
			setTransactions(data);
		}
		fetchData();
	}, []);

	async function deleteTransactionHandler(id) {
		await deleteTransaction(id);
		setTransactions((prevTransactions) =>
			prevTransactions.filter((transaction) => transaction.id !== Number(id)),
		);
	}

	return (
		<div>
			<h1>Transactions</h1>
			<div>
				<Link to='/accounts'>Accounts</Link>
			</div>
			<br />
			<div>
				<Link to='/transactions/new'>New transaction</Link>
			</div>
			<br />
			<TransactionList onDelete={deleteTransactionHandler} transactions={transactions} />
		</div>
	);
}
