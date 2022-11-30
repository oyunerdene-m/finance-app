import { useState } from 'react';
import TransactionButtons from './TransactionButtons';
import TransactionForm from './TransactionForm';
import { Navigate } from 'react-router-dom';

export default function NewTansaction() {
	const [transactionType, setTransactionType] = useState('income');
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [formData, setFormData] = useState({
		date: '',
		type: '',
		from: '',
		to: '',
		category: '',
		amount: 0,
		description: '',
	});

	function clickHandler(type) {
		if (type === transactionType) {
			setTransactionType('');
		} else {
			setTransactionType(type);
		}
	}

	function changeHandler(e) {
		const { name, value } = e.target;
		setFormData((prevData) => {
			return {
				...prevData,
				[name]: value,
				type: transactionType,
			};
		});
	}

	async function submitHandler(e) {
		e.preventDefault();
		const response = await fetch('/api/v1/transactions/add', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		});

		if (!response.ok) {
			const message = `Error occured in ${response.status}`;
			throw new Error(message);
		}

		const res = await response.json();
		if (res.error) {
			alert(res.error);
		}
		setFormData({ date: '', type: '', from: '', to: '', category: '', amount: 0, description: '' });
		setIsFormSubmitted(true);
	}

	return (
		<div>
			<h3>Add new transaction:</h3>
			<TransactionButtons transactionType={transactionType} onType={clickHandler} />
			{transactionType.length > 0 && (
				<TransactionForm
					type={transactionType}
					onFormSubmit={submitHandler}
					onChange={changeHandler}
					formData={formData}
				/>
			)}
			{isFormSubmitted && <Navigate to='/transactions' replace={true} />}
		</div>
	);
}
