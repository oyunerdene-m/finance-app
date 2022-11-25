import { useState } from 'react';
import Modal from '../UI/Modal';
import AccountForm from './NewAccount/AccountForm';

export default function EditAccount({ account, onEditAccount, onCancel }) {
	const [editedAccount, setEditedAccount] = useState({
		name: account.name,
		amount: account.amount,
		description: account.description,
		type: account.type,
		currency: account.currency,
	});

	function changeHandler(event) {
		const { name, value } = event.target;
		setEditedAccount((prevAccountData) => {
			return {
				...prevAccountData,
				[name]: value,
			};
		});
	}
	function submitHandler(e) {
		e.preventDefault();
		onEditAccount(account.id, editedAccount);
	}

	return (
		<Modal onCancel={onCancel}>
			<AccountForm
				onChangeInput={changeHandler}
				onSubmitForm={submitHandler}
				accountData={editedAccount}
			/>
			<button type='text' onClick={onCancel}>
				Cancel
			</button>
		</Modal>
	);
}
