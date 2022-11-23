import { useState, useEffect, useContext } from 'react';
import { useParams, Navigate } from 'react-router-dom';
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

	if (editedTransaction === undefined || accounts.length <= 0) return <h1>Loading...</h1>;
	if (isSubmitted) return <Navigate to='/transactions' />;
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
