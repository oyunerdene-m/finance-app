import { useState, useContext } from 'react';
import AccountsContext from '../../../context/accounts-context';
import TransactionButtons from './TransactionButtons';
import TransactionForm from './TransactionForm';
import { Navigate } from 'react-router-dom';
import fetchData from '../../../lib/fetchData';

export default function NewTansaction() {
	const { setAccounts } = useContext(AccountsContext);
	const [transactionType, setTransactionType] = useState('income');
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [formData, setFormData] = useState({
		date: '',
		type: '',
		from: '',
		to: '',
		category: '',
		amount: 0,
		receive: 0,
		description: '',
	});

	function clickHandler(type) {
		setTransactionType(type);
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
		setFormData({
			date: '',
			type: '',
			from: '',
			to: '',
			category: '',
			amount: 0,
			receive: 0,
			description: '',
		});
		setIsFormSubmitted(true);

		setAccounts((prevAccounts) =>
			prevAccounts.map((account) => {
				if (formData.type === 'income' && account.name === formData.to) {
					return {
						...account,
						amount: parseInt(account.amount) + parseInt(formData.amount),
					};
				} else if (formData.type === 'expense' && account.name === formData.from) {
					return {
						...account,
						amount: parseInt(account.amount) - parseInt(formData.amount),
					};
				} else if (formData.type === 'transfer' && account.name === formData.to) {
					return {
						...account,
						amount: parseInt(account.amount) + parseInt(formData.receive),
					};
				} else if (formData.type === 'transfer' && account.name === formData.from) {
					return {
						...account,
						amount: parseInt(account.amount) - parseInt(formData.amount),
					};
				} else {
					return account;
				}
			}),
		);
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
					{isFormSubmitted && <Navigate to='/' replace={true} />}
				</div>
			</div>
		</div>
	);
}
