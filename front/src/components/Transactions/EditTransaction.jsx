import { useState, useEffect, useContext } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import TransactionButtons from './NewTransaction/TransactionButtons';
import TransactionForm from './NewTransaction/TransactionForm';
import AccountsContext from '../../context/accounts-context';
import fetchData from '../../lib/fetchData';

export default function EditTransaction() {
	const { accounts } = useContext(AccountsContext);
	const [editedTransaction, setEditedTransaction] = useState();
	const [isSubmitted, setIsSubmitted] = useState(false);
	const { id } = useParams();

	useEffect(() => {
		async function getTransactionById() {
			try {
				const response = await fetchData(`/api/v1/transactions/detail/${id}`, 'GET', undefined);
				setEditedTransaction(response.transaction);
			} catch (error) {
				console.error(error);
				alert(error);
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
		try {
			await fetchData(`/api/v1/transactions/edit/${id}`, 'POST', editedTransaction);
		} catch (error) {
			console.error(error);
			alert(error);
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
		<div style={{ border: '1px solid yellow' }} className='w-full flex  justify-center'>
			<div style={{ border: '1px solid blue' }}>
				<h3>Edit transaction:</h3>

				<TransactionButtons transactionType={editedTransaction.type} onType={typeSelectHandler} />
				<TransactionForm
					type={editedTransaction.type}
					onFormSubmit={submitHandler}
					onChange={changeHandler}
					formData={editedTransaction}
				/>
			</div>
		</div>
	);
}
