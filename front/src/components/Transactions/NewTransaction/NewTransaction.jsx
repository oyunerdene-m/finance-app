import { useState, useEffect } from 'react';
import { getTransactions, addTransaction } from '../../../lib/transactionData';
import TransactionButtons from './TransactionButtons';
import TransactionForm from './TransactionForm';
import { Navigate } from 'react-router-dom';

export default function NewTansaction() {
	const [transactions, setTransactions] = useState([]);
	const [transactionType, setTransactionType] = useState('');
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);

	useEffect(() => {
		async function fetchTransactions() {
			const data = await getTransactions();
			setTransactions(data);
		}
		fetchTransactions();
	}, []);

	const categories = {
		income: ['Salary', 'Bonus', 'Cash', 'Allowance', 'Other'],
		expense: [
			'Food',
			'Transportation',
			'Education',
			'Household',
			'Health',
			'Gift',
			'Clothes',
			'Beauty',
			'Other',
		],
		transfer: ['transfer'],
	};

	function clickHandler(type) {
		if (type === transactionType) {
			setTransactionType('');
		} else {
			setTransactionType(type);
		}
	}

	async function submitHandler(formData) {
		const addedTransaction = await addTransaction(formData);
		setTransactions((prevTransactions) => [...prevTransactions, addedTransaction]);
	}

	return (
		<div>
			<TransactionButtons transactionType={transactionType} onType={clickHandler} />
			{transactionType.length > 0 && (
				<TransactionForm
					type={transactionType}
					categories={categories}
					onFormSubmit={submitHandler}
					onIsFormSubmitted={setIsFormSubmitted}
				/>
			)}
			{isFormSubmitted && <Navigate to='/transactions' replace={true} />}
		</div>
	);
}
