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
		<div className='py-4 w-full flex justify-center'>
			<div className='w-full lg:w-3/5 pt-4'>
				<h3 className='font-medium text-lg mb-2'>Add new transaction:</h3>
				<div className='min-w-md shadow-xl rounded-md'>
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
			</div>
		</div>
	);
}
