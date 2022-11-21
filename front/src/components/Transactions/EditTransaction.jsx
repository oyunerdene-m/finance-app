import { useState, useEffect, useContext } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { getTransactionById, editTransaction } from '../../lib/transactionData';
import TransactionButtons from './NewTransaction/TransactionButtons';
import TransactionForm from './NewTransaction/TransactionForm';
import classes from './NewTransaction/TransactionForm.module.css';
import AccountsContext from '../../context/accounts-context';

export default function EditTransaction() {
	const { accounts } = useContext(AccountsContext);
	const [editedTransaction, setEditedTransaction] = useState();
	const [isSubmitted, setIsSubmitted] = useState(false);
	const { id } = useParams();
	console.log(accounts);

	useEffect(() => {
		async function fetchData() {
			const transaction = await getTransactionById(id);
			setEditedTransaction(transaction);
		}
		fetchData();
	}, []);

	function changeHandler(event) {
		setEditedTransaction((prevTransaction) => ({
			...prevTransaction,
			[event.target.name]: event.target.value,
		}));
	}

	async function submitHandler(event) {
		event.preventDefault();
		await editTransaction(id, editedTransaction);
		setIsSubmitted(true);
	}

	function typeSelectHandler(changedType) {
		setEditedTransaction((prevTransaction) => ({
			...prevTransaction,
			type: changedType,
		}));
	}
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

	if (editedTransaction === undefined || accounts.length <= 0) return <h1>Loading...</h1>;

	let account;
	if (editedTransaction.type === 'transfer') {
		account = (
			<>
				<div>
					<label htmlFor='from'>From: </label>
					<select value={editedTransaction.from} onChange={changeHandler} name='from' id='from'>
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
					<select value={editedTransaction.to} onChange={changeHandler} name='to' id='to'>
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
		if (editedTransaction.type === 'income') {
			account = (
				<div>
					<label htmlFor='to'>To: </label>
					<select value={editedTransaction.to} onChange={changeHandler} name='to' id='to'>
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
					<select value={editedTransaction.from} onChange={changeHandler} name='from' id='from'>
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

	if (isSubmitted) return <Navigate to='/transactions' />;

	return (
		<div className={classes.transfer}>
			<TransactionButtons onType={typeSelectHandler} transactionType={editedTransaction.type} />
			<form onSubmit={submitHandler}>
				<div>
					<label htmlFor='date'>Date: </label>
					<input
						value={editedTransaction.date}
						onChange={changeHandler}
						type='date'
						name='date'
						id='date'
					/>
				</div>
				{account}
				{editedTransaction.type !== 'transfer' && (
					<div>
						<label htmlFor='category'>Category: </label>
						<select
							value={editedTransaction.category}
							onChange={changeHandler}
							name='category'
							id='category'
						>
							<option value=''>Choose category</option>
							{categories[editedTransaction.type].map((category) => (
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
						value={editedTransaction.amount}
						onChange={changeHandler}
						type='number'
						name='amount'
						id='amount'
					/>
				</div>
				<div>
					<label htmlFor='description'>Description: </label>
					<input
						value={editedTransaction.description}
						onChange={changeHandler}
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
	);
}
