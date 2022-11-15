import { useState } from 'react';
import TransactionForm from '../components/Transactions/TransactionForm';
//import { Link } from 'react-router-dom';

export default function Transactions() {
	const [transactionType, setTransactionType] = useState('');

	return (
		<div>
			<h1>This is Transactions page!</h1>
			<div>
				<button onClick={() => setTransactionType('income')}>Income</button>
				<button onClick={() => setTransactionType('expense')}>Expense</button>
				<button onClick={() => setTransactionType('transfer')}>Transfer</button>
				{transactionType.length > 0 && <TransactionForm type={transactionType} />}
			</div>
		</div>
	);
}
