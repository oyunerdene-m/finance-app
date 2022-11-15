import { useState, useEffect } from 'react';
import { getTransactions } from '../lib/transactionData';

export default function Transactions() {
	const [transactions, setTransactions] = useState([]);

	return (
		<div>
			<h1>This is Transactions page!</h1>
		</div>
	);
}
