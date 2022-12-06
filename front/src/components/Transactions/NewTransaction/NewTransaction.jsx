import { useState } from 'react';
import TransactionButtons from './TransactionButtons';
import TransactionForm from './TransactionForm';
import { Navigate } from 'react-router-dom';
import fetchData from '../../../lib/fetchData';

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
		try {
			await fetchData('/api/v1/transactions/add', 'POST', formData);
		} catch (error) {
			console.error(error);
			alert(error);
		}
		setFormData({ date: '', type: '', from: '', to: '', category: '', amount: 0, description: '' });
		setIsFormSubmitted(true);
	}

	return (
		<div style={{ border: '1px solid blue' }}>
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
