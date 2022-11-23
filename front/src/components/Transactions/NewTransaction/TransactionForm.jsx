import classes from './TransactionForm.module.css';
import { useContext } from 'react';
import AccountsContext from '../../../context/accounts-context';
import { categories } from '../../../lib/transactionData';
import { Link } from 'react-router-dom';

export default function TransactionForm({ type, onFormSubmit, onChange, formData }) {
	const { accounts } = useContext(AccountsContext);

	let account;
	if (type === 'transfer') {
		account = (
			<>
				<div>
					<label htmlFor='from'>From: </label>
					<select value={formData.from} onChange={onChange} name='from' id='from'>
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
					<select value={formData.to} onChange={onChange} name='to' id='to'>
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
					<select value={formData.to} onChange={onChange} name='to' id='to'>
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
					<select value={formData.from} onChange={onChange} name='from' id='from'>
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
				<form onSubmit={(e) => onFormSubmit(e)}>
					<div>
						<label htmlFor='date'>Date: </label>
						<input value={formData.date} onChange={onChange} type='date' name='date' id='date' />
					</div>
					{account}
					{type !== 'transfer' && (
						<div>
							<label htmlFor='category'>Category: </label>
							<select value={formData.category} onChange={onChange} name='category' id='category'>
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
							onChange={onChange}
							type='number'
							name='amount'
							id='amount'
						/>
					</div>
					<div>
						<label htmlFor='description'>Description: </label>
						<input
							value={formData.description}
							onChange={onChange}
							type='text'
							name='description'
							id='description'
						/>
					</div>
					<div>
						<button>Save</button>
					</div>
				</form>
				<button>
					<Link style={{ textDecoration: 'none', color: 'black' }} to='/transactions'>
						Cancel
					</Link>
				</button>
			</div>
		</>
	);
}
