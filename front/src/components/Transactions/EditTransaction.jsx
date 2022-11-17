import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTransactionById } from '../../lib/transactionData';
import classes from './NewTransaction/TransactionForm.module.css';

export default function EditTransaction() {
	const [editedTransaction, setEditedTransaction] = useState();
	const { id } = useParams();

	useEffect(() => {
		async function fetchData() {
			const transaction = await getTransactionById(id);
			setEditedTransaction(transaction);
		}
		fetchData();
	}, []);

	console.log(editedTransaction);

	function changeHandler() {}
	function submitHandler() {}
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

	let account;
	if (type === 'transfer') {
		account = (
			<>
				<div>
					<label htmlFor='from'>From: </label>
					<select value={formData.from} onChange={changeHandler} name='from' id='from'>
						<option value=''>Choose account</option>
						{accounts.map((account) => (
							<option key={account.id} value={account.name}>
								{account.name}
							</option>
						))}
					</select>
				</div>
				<div>
					<label htmlFor='to'>To: </label>
					<select value={formData.to} onChange={changeHandler} name='to' id='to'>
						<option value=''>Choose account</option>
						{accounts.map((account) => (
							<option key={account.id} value={account.name}>
								{account.name}
							</option>
						))}
					</select>
				</div>
			</>
		);
	} else {
		if (type === 'income') {
			account = (
				<div>
					<label htmlFor='to'>To: </label>
					<select value={formData.to} onChange={changeHandler} name='to' id='to'>
						<option value=''>Choose account</option>
						{accounts.map((account) => (
							<option key={account.id} value={account.name}>
								{account.name}
							</option>
						))}
					</select>
				</div>
			);
		} else {
			account = (
				<div>
					<label htmlFor='from'>From: </label>
					<select value={formData.from} onChange={changeHandler} name='from' id='from'>
						<option value=''>Choose account</option>
						{accounts.map((account) => (
							<option key={account.id} value={account.name}>
								{account.name}
							</option>
						))}
					</select>
				</div>
			);
		}
	}

	return (
		<div className={classes.transfer}>
			<h3>Make a {type}</h3>
			<form onSubmit={submitHandler}>
				<div>
					<label htmlFor='date'>Date: </label>
					<input value={formData.date} onChange={changeHandler} type='date' name='date' id='date' />
				</div>
				{account}
				{type !== 'transfer' && (
					<div>
						<label htmlFor='category'>Category: </label>
						<select
							value={formData.category}
							onChange={changeHandler}
							name='category'
							id='category'
						>
							<option value=''>Choose category</option>
							{categories[type].map((category) => (
								<option key={category} value={category}>
									{category}
								</option>
							))}
						</select>
					</div>
				)}

				<div>
					<label htmlFor='amount'>Amount: </label>
					<input
						value={formData.amount}
						onChange={changeHandler}
						type='number'
						name='amount'
						id='amount'
					/>
				</div>
				<div>
					<label htmlFor='description'>Description: </label>
					<input
						value={formData.description}
						onChange={changeHandler}
						type='text'
						name='description'
						id='description'
					/>
				</div>
				<div>
					<button>Save</button>
					<a href=''>continue</a>
				</div>
			</form>
		</div>
	);
}
