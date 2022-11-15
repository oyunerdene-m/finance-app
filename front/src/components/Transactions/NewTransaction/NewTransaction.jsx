import { useState, useEffect } from 'react';
import { getAccounts } from '../../../lib/accountData';
import TransactionButtons from './TransactionButtons';
import TransactionForm from './TransactionForm';

export default function NewTansaction() {
	const [transactionType, setTransactionType] = useState('');
	const [isTypeChanged, setIsTypeChanged] = useState(false);
	const [accounts, setAccounts] = useState([]);

	useEffect(() => {
		async function fetchAccounts() {
			const data = await getAccounts();
			setAccounts(data);
		}
		fetchAccounts();
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
			setIsTypeChanged(true);
		}
	}

	function submitHandler(formData) {
		console.log(formData);
	}

	return (
		<div>
			<TransactionButtons transactionType={transactionType} onType={clickHandler} />
			{transactionType.length > 0 && (
				<TransactionForm
					isTypeChanged={isTypeChanged}
					type={transactionType}
					categories={categories}
					accounts={accounts}
					onFormSubmit={submitHandler}
				/>
			)}
		</div>
	);
}
