import { useState } from 'react';
import TransactionButtons from './TransactionButtons';
import TransactionForm from './TransactionForm';

export default function NewTansaction() {
	const [transactionType, setTransactionType] = useState('');

	return (
		<div>
			<TransactionButtons onClick={setTransactionType} />
			{transactionType.length > 0 && <TransactionForm type={transactionType} />}
		</div>
	);
}
