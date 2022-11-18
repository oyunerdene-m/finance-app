import classes from './TransactionForm.module.css';
import { useState, useContext } from 'react';
import AccountsContext from '../../../context/accounts-context';

export default function TransactionForm({ type, onFormSubmit, categories, onIsFormSubmitted }) {
	const { accounts } = useContext(AccountsContext);

	const [formData, setFormData] = useState({
		date: '',
		type: '',
		from: '',
		to: '',
		category: '',
		amount: 0,
		description: '',
	});

	function changeHandler(e) {
		const { name, value } = e.target;
		setFormData((prevData) => {
			return {
				...prevData,
				[name]: value,
				type: type,
			};
		});
	}

	function submitHandler(e) {
		e.preventDefault();
		onFormSubmit(formData);
		setFormData({ date: '', type: '', from: '', to: '', category: '', amount: 0, description: '' });
		onIsFormSubmitted(true);
	}

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
						{accounts.length <= 0
							? 'Loading...'
							: accounts.map((account) => (
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
						{accounts.length <= 0
							? 'Loading...'
							: accounts.map((account) => (
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
		<>
			<div className={classes.transfer}>
				<h3>Make a {type}</h3>
				<form onSubmit={submitHandler}>
					<div>
						<label htmlFor='date'>Date: </label>
						<input
							value={formData.date}
							onChange={changeHandler}
							type='date'
							name='date'
							id='date'
						/>
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
		</>
	);
}
