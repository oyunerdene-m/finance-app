import { useState, useEffect, useContext } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import TransactionButtons from './NewTransaction/TransactionButtons';
import TransactionForm from './NewTransaction/TransactionForm';
import classes from './NewTransaction/TransactionForm.module.css';
import AccountsContext from '../../context/accounts-context';

export default function EditTransaction() {
	const { accounts } = useContext(AccountsContext);
	const [editedTransaction, setEditedTransaction] = useState();
	const [isSubmitted, setIsSubmitted] = useState(false);
	const { id } = useParams();

	useEffect(() => {
		async function getTransactionById() {
			const response = await fetch(`/api/v1/transactions/detail/${id}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
				body: undefined,
			});

			if (!response.ok) {
				const message = `Error occured in ${response.status}`;
				throw new Error(message);
			}
			const data = await response.json();

			if (data.error) {
				alert(data.error);
			} else {
				setEditedTransaction(data.data.transaction);
			}
		}

		getTransactionById();
	}, [id]);

	function changeHandler(event) {
		setEditedTransaction((prevTransaction) => ({
			...prevTransaction,
			[event.target.name]: event.target.value,
		}));
	}

	async function submitHandler(event) {
		event.preventDefault();
		const response = await fetch(`/api/v1/transactions/edit/${id}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(editedTransaction),
		});

		if (!response.ok) {
			const message = `Error occured in ${response.status}`;
			throw new Error(message);
		}
		const data = await response.json();
		if (data.error) {
			alert(data.error);
		}
		setIsSubmitted(true);
	}

	function typeSelectHandler(changedType) {
		setEditedTransaction((prevTransaction) => ({
			...prevTransaction,
			type: changedType,
		}));
	}

	if (editedTransaction === undefined || accounts.length <= 0) return <h1>Loading...</h1>;
	if (isSubmitted) return <Navigate to='/' />;
	return (
		<div className={classes.transfer}>
			<TransactionButtons transactionType={editedTransaction.type} onType={typeSelectHandler} />
			<TransactionForm
				type={editedTransaction.type}
				onFormSubmit={submitHandler}
				onChange={changeHandler}
				formData={editedTransaction}
			/>
		</div>
	);
}
