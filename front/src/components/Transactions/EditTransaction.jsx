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
		<div className='py-4 w-full flex justify-center'>
			<div className='w-full lg:w-3/5 pt-4'>
				<h3 className='font-medium text-lg mb-2'>Edit transaction:</h3>
				<div className='min-w-md shadow-xl rounded-md'>
					<TransactionButtons transactionType={editedTransaction.type} onType={typeSelectHandler} />
					<TransactionForm
						type={editedTransaction.type}
						onFormSubmit={submitHandler}
						onChange={changeHandler}
						formData={editedTransaction}
					/>
				</div>
			</div>
		</div>
	);
}
